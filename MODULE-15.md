# Analytics and experiments

> Experience refinement is planned lesson by lesson; it is not yet implemented. See [the agreed learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for guided practice, worksheets, videos, free-tier constraints and current refinement status. Existing teaching and diagnostic independence remain in force.

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

**Where to work:** Paper or a text file for the tree. Nothing else; this lesson is reasoning, not tooling.

- Starting material: Your release plan and research findings.
- Create HaruCourse/Practice/m15-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What you are actually trying to measure

Input artifact: Your release plan and research findings.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A metric tree from one outcome down to countable events
- [ ] Outcome and activity metrics distinguished
- [ ] An observability mark on every node
- [ ] Two candidate metrics removed for being unactionable

## 1. Read and state the outcome
- Read the assigned guidance on defining success.
- Write the one outcome your product exists to produce.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the tree downward
- List the behaviours that produce the outcome.
- Beneath each, list events that would indicate it.
- Stop when the leaves are countable in principle.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Separate outcome from activity
- Mark each node as outcome or activity.
- Check every activity node is connected upward to an outcome.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Mark observability
- Mark each node observable, askable, or unavailable to you.
- Note what you would need to observe the unavailable ones.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Remove the unactionable
- Remove any metric nobody would act on.
- Record the two you removed and why.
- Save the tree.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The tree starts from an outcome and reaches countable events: [evidence reference]
- Outcome and activity nodes are distinguished: [evidence reference]
- Every node is marked observable, askable or unavailable: [evidence reference]
- Unactionable metrics are removed with reasons: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour.

</details>

<details>
<summary>Hint 2</summary>

For each activity node, trace the path upward. Anything unconnected is a number without a purpose.

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

**Where to work:** A spreadsheet or a hand-drawn chart with synthetic counts. No analytics account is needed; the catalog's analytics demo account remains optional and unverified for signed-in use.

- Starting material: Your flow and your usability findings.
- Create HaruCourse/Practice/m15-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Funnels, and what a drop-off does not tell you

Input artifact: Your flow and your usability findings.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A funnel of one task with clearly labelled synthetic counts
- [ ] The largest drop identified proportionally
- [ ] Three explanations the data cannot distinguish
- [ ] A note of which drops might be correct rather than problems

## 1. Define the steps
- Take one task from your flow and list its steps in order.
- Decide what counts as reaching each step.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Populate with synthetic counts
- Invent plausible counts and label them synthetic.
- Calculate the proportional drop at each step, not just the absolute.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write competing explanations
- For the largest drop, write three explanations that fit the numbers.
- State what evidence would separate them.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Find the healthy drops
- Identify any step where people leaving is correct.
- Write what a healthy drop would look like there.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Label and record
- Mark every number synthetic on the chart itself.
- Save the funnel with the explanations.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The funnel's steps match a real task: [evidence reference]
- Synthetic counts are labelled wherever they appear: [evidence reference]
- Three competing explanations are written with separating evidence: [evidence reference]
- Healthy drops are identified: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Take your m07 flow and use its actual steps, defining what counts as reaching each.

</details>

<details>
<summary>Hint 2</summary>

Add the label to the chart itself; a caption elsewhere does not travel with a screenshot.

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

**Where to work:** A spreadsheet or calculator using a published interval formula, with your inputs shown. The interval reading gives no formulas, so name the one you used.

- Starting material: Any counts you hold from earlier modules.
- Create HaruCourse/Practice/m15-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Rates, intervals and small numbers

Input artifact: Any counts you hold from earlier modules.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Three rates with computed intervals and inputs shown
- [ ] Any unsupportable claim rewritten as a count
- [ ] A written rule for when you will report a rate at all
- [ ] One comparison abandoned or qualified

## 1. Read and gather
- Read the assigned interval and sample-size readings.
- Collect three rates you have written or been tempted to write.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Compute the intervals
- Compute an interval for each rate, showing your inputs.
- Name the formula or tool you used.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Rewrite the claims
- Rewrite any claim the interval cannot support.
- Prefer counts with the sample route stated.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Handle a comparison
- Take a comparison between two rates and examine both intervals.
- Qualify or abandon the comparison, and say why.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write your rule
- Write when you will report a rate rather than a count.
- Save the calculations and the rewritten claims.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Three intervals are computed with inputs shown: [evidence reference]
- Unsupportable claims are rewritten as counts: [evidence reference]
- A comparison is qualified or abandoned: [evidence reference]
- A personal rule for reporting rates is written: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Compute each interval in a spreadsheet and record the numbers you put in.

</details>

<details>
<summary>Hint 2</summary>

Replace each percentage with the count and add who the sample was.

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

**Where to work:** Written design plus a spreadsheet for the sample calculation. No experimentation platform is involved, and none would help without traffic.

- Starting material: Your metric tree and an open design question.
- Create HaruCourse/Practice/m15-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Designing an experiment you cannot run

Input artifact: Your metric tree and an open design question.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A written hypothesis with its reasoning
- [ ] One primary metric and at least two guardrails
- [ ] A required sample and duration estimate with inputs
- [ ] A written refusal and a qualitative alternative

## 1. Read the constraints
- Read the assigned A/B testing article.
- Write its stated limits on traffic, duration and simultaneous changes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the hypothesis and variants
- State what you expect, why, and what would disprove it.
- Define exactly one change between the variants.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Choose metrics
- Choose one primary metric from your metric tree.
- Choose guardrails that must not get worse.
- State the smallest effect that would matter.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Estimate the requirement
- Estimate the sample needed for that effect and the duration.
- Compare with the traffic you actually have.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Refuse, and plan the alternative
- Write why you cannot run it and what would change that.
- Plan the qualitative alternative and what it can answer.
- Save the design, the refusal and the alternative.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A hypothesis states expectation, reasoning and disproof: [evidence reference]
- One primary metric and guardrails are chosen in advance: [evidence reference]
- Sample and duration are estimated against real traffic: [evidence reference]
- A refusal and a qualitative alternative are written: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write “I expect … because … and I would be wrong if …”.

</details>

<details>
<summary>Hint 2</summary>

Choose the one metric that decides the result, then name what must not get worse.

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

**Where to work:** Any published report or article with figures. The exercise is reading and writing; no data access is needed.

- Starting material: A public report, dashboard screenshot or article with numbers.
- Create HaruCourse/Practice/m15-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Reading someone else's numbers

Input artifact: A public report, dashboard screenshot or article with numbers.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Five questions asked of a real set of figures
- [ ] The answers you could find and the ones you could not
- [ ] One claim rewritten to match its support
- [ ] A note of what the chart's presentation emphasised or hid

## 1. Choose the figures
- Find a public report, article or dashboard image with numbers and a claim.
- Write the claim exactly as stated.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Ask the five questions
- Ask who, when, what else changed, what the denominator is, and what decision it serves.
- Record which answers are available and which are absent.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Examine the presentation
- Check the chart against the assigned conventions.
- Note anything that emphasises or hides part of the picture.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Rewrite the claim
- Rewrite it to say only what the figures support.
- Keep it readable; the point is honesty, not hedging.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Note which question was most revealing.
- Save the original claim, the questions and the rewrite.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Five questions are asked of a real published claim: [evidence reference]
- Available and unavailable answers are distinguished: [evidence reference]
- The presentation is checked against chart conventions: [evidence reference]
- The claim is rewritten to match its support: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Find a real published claim and work through the five questions in writing.

</details>

<details>
<summary>Hint 2</summary>

Mark each answer as stated in the source, inferable, or absent.

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

**Where to work:** Your existing findings and a written comparison. No new data collection is required.

- Starting material: One count and one qualitative finding about the same thing.
- Create HaruCourse/Practice/m15-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Numbers and conversations together

Input artifact: One count and one qualitative finding about the same thing.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One quantitative and one qualitative finding about the same behaviour
- [ ] What each explains that the other cannot
- [ ] A change proposal that needed both
- [ ] Any contradiction between them, kept rather than resolved

## 1. Pair the findings
- Choose one count and one observation about the same behaviour.
- State what each says on its own.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the gaps
- Write what the count cannot tell you.
- Write what the observation cannot tell you.
- Check the two gaps are genuinely different.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Propose a change from both
- Write a change that neither finding alone would have produced.
- State which part of the evidence supports which part of the change.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Look for contradiction
- Check whether the two disagree in any respect.
- If they do, keep both and write what would explain the disagreement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write which finding you would have trusted alone, and why that would have been wrong.
- Save the pairing and the proposal.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Both findings concern the same behaviour: [evidence reference]
- The gaps of each are stated and genuinely different: [evidence reference]
- A change proposal draws on both: [evidence reference]
- Contradictions are kept and explained rather than resolved away: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Pick the behaviour first, then find the count and the observation about it.

</details>

<details>
<summary>Hint 2</summary>

For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings.

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

**Where to work:** A written plan. Whether it is ever implemented is a separate question; the reasoning is the deliverable.

- Starting material: Your metric tree and privacy plan.
- Create HaruCourse/Practice/m15-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What to record, and what to refuse to record

Input artifact: Your metric tree and privacy plan.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] An event list tied to metric-tree questions
- [ ] A purpose, owner and retention period per event
- [ ] At least two documented refusals with reasons
- [ ] One event reduced rather than removed

## 1. Derive events from questions
- For each observable node in your tree, name the event that would indicate it.
- Discard any event with no question behind it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Add purpose, owner and retention
- Write why each event is collected and who is responsible.
- Set a retention period and a deletion mechanism.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Assess risk
- Mark any free text, location or cross-session identifier.
- For each, ask whether the answer justifies holding it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Refuse and reduce
- Record at least two things you will not collect, with reasons.
- Reduce one event to the minimum that answers its question.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check jurisdiction
- Note that legal requirements differ by country and that you have not verified Indian requirements here.
- Save the plan with the refusals.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every event traces to a question in the metric tree: [evidence reference]
- Purpose, owner and retention are recorded per event: [evidence reference]
- At least two refusals are documented with reasons: [evidence reference]
- One event is reduced to the minimum that answers its question: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Delete any event you cannot attach to a node, and record that you did.

</details>

<details>
<summary>Hint 2</summary>

Complete the three fields for each event; anything without a purpose should not be collected.

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

**Where to work:** A spreadsheet with your synthetic counts split by arrival week. No analytics tool is required.

- Starting material: Your funnel with its synthetic counts.
- Create HaruCourse/Practice/m15-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Time, cohorts and the number that moved by itself

Input artifact: Your funnel with its synthetic counts.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A metric over time with non-design explanations listed
- [ ] A cohort comparison replacing a before-and-after one
- [ ] A statement of what the cohort does and does not control for
- [ ] One explanation you cannot rule out, named

## 1. Extend the metric over time
- Plot one metric across at least eight periods, labelled synthetic.
- Mark when your design change would have shipped.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. List the other causes
- List everything else that could move the number in that period.
- Include seasonality, campaigns, holidays and external events.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Build a cohort
- Split people by the period they arrived.
- Follow each group for the same length of time.
- Compare like with like rather than period totals.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. State the controls
- Write what the cohort controls for.
- Write what it does not, especially concurrent changes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Name the explanation you cannot rule out.
- Save the chart, the cohort and the limitations.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Non-design explanations are listed for the movement: [evidence reference]
- A cohort comparison replaces the period comparison: [evidence reference]
- What the cohort controls for is stated: [evidence reference]
- An unrulable-out explanation is named: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write everything that happened in that period that could affect the number, before writing any conclusion.

</details>

<details>
<summary>Hint 2</summary>

Split by arrival week and give each group the same follow-up window.

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

**Where to work:** A page of text or three slides in any free editor, with a hand-drawn or spreadsheet chart. Nothing here requires a presentation platform.

- Starting material: Your analysis and its limitations.
- Create HaruCourse/Practice/m15-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Presenting numbers without misleading anyone

Input artifact: Your analysis and its limitations.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A presentation of at most three slides or one page
- [ ] Uncertainty shown in the chart itself
- [ ] A stated condition that would change the conclusion
- [ ] A note of what the audience remembered

## 1. Write the decision first
- State the decision the analysis supports in one sentence.
- Put it at the top, before any method.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the chart honestly
- Follow the assigned chart conventions.
- Put the sample, period and any synthetic label on the chart.
- Show the interval where a rate appears.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the change condition
- State what result would change your conclusion.
- Say when you would look.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Present it
- Present to someone who was not involved.
- Do not narrate the caveats; let the material carry them.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check what survived
- Ask afterwards what they took away.
- Record any misreading and fix the material rather than explaining again.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The decision comes first and fits a sentence: [evidence reference]
- Sample, period and uncertainty are on the chart: [evidence reference]
- A condition that would change the conclusion is stated: [evidence reference]
- What the audience remembered was checked and acted on: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Move your recommendation to the top and cut everything before it.

</details>

<details>
<summary>Hint 2</summary>

Add the sample and period into the chart's subtitle, where a screenshot keeps them.

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

**Where to work:** Written reasoning. This lesson is judgement, not tooling.

- Starting material: Your metric tree and current decisions.
- Create HaruCourse/Practice/m15-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# When not to measure

Input artifact: Your metric tree and current decisions.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two decisions identified as not worth measuring, with reasoning
- [ ] The cost of measuring compared with the cost of being wrong
- [ ] What you will do instead, including how you would notice a mistake
- [ ] One measurement refused on ethical grounds, with the reason

## 1. List open decisions
- List decisions currently waiting for evidence.
- For each, note how reversible it is.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Compare the costs
- Estimate the cost of measuring: time, traffic, delay.
- Estimate the cost of being wrong, including how long the error would persist.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Decide and plan the alternative
- Choose two decisions to make without measurement.
- Write what you will do instead and how you would notice a mistake.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Find the refusal
- Identify a measurement that should not be run at all.
- Write why, and what you would say if asked to run it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Record the reasoning so the decisions can be revisited.
- Save the comparisons and the refusal.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Two decisions are identified with reversibility assessed: [evidence reference]
- Costs of measuring and of being wrong are both estimated: [evidence reference]
- The alternative includes how a mistake would be noticed: [evidence reference]
- One measurement is refused with a stated reason: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List what you are waiting on and ask how hard each would be to undo.

</details>

<details>
<summary>Hint 2</summary>

Write what a month of waiting costs in the current design's problems.

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

**Where to work:** A written plan and a spreadsheet. The provider's own records and a handful of conversations are the whole data infrastructure.

- Starting material: Your metric tree and instrumentation decisions.
- Create HaruCourse/Practice/m15-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# A measurement plan you could actually run

Input artifact: Your metric tree and instrumentation decisions.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Three measures obtainable with what you have
- [ ] A claim and a limit per measure
- [ ] A review date and an owner
- [ ] A list of questions the plan cannot answer

## 1. Inventory what exists
- List records the product or provider already keeps.
- List what you could count by hand and who you could ask.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Choose three measures
- Choose three that answer nodes in your metric tree.
- Prefer measures you can obtain without new tooling.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Attach claims and limits
- For each measure write what it supports and what it does not.
- Include the sample or source in the statement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Set the review
- Set a date and an owner for reviewing the measures.
- Decide what would make you change or drop one.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the unanswered list
- List the questions this plan leaves open.
- Save the plan with its limits.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Measures are obtainable with existing records or effort: [evidence reference]
- Each carries a claim and a limit: [evidence reference]
- A review date and owner exist: [evidence reference]
- Unanswered questions are listed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Replace any measure needing tooling with one you could collect this month.

</details>

<details>
<summary>Hint 2</summary>

For each measure write the sentence it supports and the sentence it does not.

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

**Where to work:** One written page. Rehearsal with another person or aloud to yourself.

- Starting material: Your funnel, cohort, plan and presentations.
- Create HaruCourse/Practice/m15-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What your numbers cannot say

Input artifact: Your funnel, cohort, plan and presentations.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A reusable limitations page covering all this module's work
- [ ] Categories separated: synthetic, small sample, unavailable
- [ ] A rehearsed reply to a request for a stronger claim
- [ ] A recorded temptation, named honestly

## 1. Collect the limitations
- Gather every caveat from this module into one page.
- Group them by kind rather than by lesson.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Separate the categories
- Mark what is synthetic, what is small-sample and what is unavailable.
- State what each category can and cannot support.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Rehearse the pressure
- Write the request you expect for a stronger claim.
- Write your reply, offering what you can support and what would be needed.
- Say it aloud, or with someone playing the requester.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Record the temptation
- Write where you wanted to overstate during this module.
- Note what would have made it easy to do so.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. File it
- Store the page where your case study and portfolio can reuse it.
- Save the rehearsed reply with it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- One page collects every limitation from the module: [evidence reference]
- Synthetic, small-sample and unavailable are separated: [evidence reference]
- A reply to pressure is written and rehearsed: [evidence reference]
- A temptation is recorded honestly: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go through each lesson's output and copy its limitation into one file.

</details>

<details>
<summary>Hint 2</summary>

Sort your caveats into the three kinds and write what each can support.

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
