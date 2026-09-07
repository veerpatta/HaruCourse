import { withLegacyText, type Lesson } from "./teaching";
// Module 15 teaches quantitative reasoning for a designer who has no traffic,
// no analytics platform and no experiment budget. That constraint is the
// teaching: the module builds metric trees, funnels and experiment designs
// from synthetic or small real data, and it is explicit at every step about
// which claims those materials can and cannot support. A learner who finishes
// it should be able to read a dashboard sceptically and refuse a bad number.
const measuring = {
  title: "GOV.UK: measuring success",
  id: "R20",
  url: "https://www.gov.uk/service-manual/measuring-success",
};
const intervals = {
  title: "NN/g: confidence intervals and margins of error",
  id: "R37",
  url: "https://www.nngroup.com/articles/confidence-interval/",
};
const samples = {
  title: "NN/g: sample sizes for quantitative studies",
  id: "R45",
  url: "https://www.nngroup.com/articles/summary-quant-sample-sizes/",
};
const abTesting = {
  title: "NN/g: A/B testing 101",
  id: "R68",
  url: "https://www.nngroup.com/articles/ab-testing/",
};
const discovery = {
  title: "GOV.UK: discovery phase",
  id: "R07",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
};
const charts = {
  title: "UK Analysis Function: data visualisation charts",
  id: "R63",
  url: "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/",
};
const standard = {
  title: "GOV.UK: Service Standard",
  id: "R19",
  url: "https://www.gov.uk/service-manual/service-standard",
};
const analyse = {
  title: "GOV.UK: analyse a research session",
  id: "R04",
  url: "https://www.gov.uk/service-manual/user-research/analyse-a-research-session",
};
export const module15: Lesson[] = [
  withLegacyText({
    id: "m15-l01-v1",
    module: "m15",
    week: 15,
    day: 1,
    level: 5,
    areas: [14],
    guided: true,
    title: "What you are actually trying to measure",
    objective:
      "Build a metric tree for your product connecting one outcome to the behaviours beneath it, and mark which nodes you could observe and which you could not.",
    bringForward: "Your m14 release plan and m05 findings.",
    prerequisite: "Your release plan and research findings.",
    why: "Most measurement arguments are about the wrong number because nobody wrote down which outcome it was supposed to serve.",
    teach: [
      "Start from the outcome someone cares about, not from what is easy to count.",
      "A metric tree connects an outcome to the behaviours that produce it.",
      "Distinguish outcome metrics from activity metrics; activity is not value.",
      "Mark which nodes you could actually observe with what you have.",
      "A metric you cannot act on is a number, not a measure.",
    ],
    explanation: [
      "The assigned guidance frames measurement as starting from what success means for the service, and the practical instrument is a tree: the outcome at the top, the behaviours that produce it beneath, and the countable events beneath those. Built downward it stays connected to something that matters; built upward from whatever the analytics happened to record, it produces the familiar dashboard nobody uses.",
      "Activity is not value. Page views, sessions and clicks are counts of things happening; they become useful only when tied to a behaviour that produces the outcome. A rise in views of the cancellation page might mean people are finding it, or that more people need it, and without the tree you cannot tell which and will report whichever suits.",
      "Marking observability is the part that makes the tree honest for your situation. You have no analytics platform and no traffic, so most nodes will be unobservable, and that is the finding rather than a failure: it tells you which questions need conversations, which need a small manual count, and which are simply unavailable.",
      "A measure you cannot act on is decoration. If a number moves and nobody would do anything differently, it does not belong in the tree; it belongs in a list of things you might look at out of curiosity, which is a different document.",
    ],
    misconception:
      "“More metrics give a fuller picture.” They give more numbers to argue with. Three numbers connected to an outcome, with their limits stated, support decisions; twenty unconnected numbers support whichever conclusion someone wanted.",
    example:
      "The tree for the booking product: outcome — people who intend to attend a class actually attend one. Beneath it: they find a suitable class; they complete a booking without duplicating payment; they arrive prepared. Beneath those: searches that produce results, bookings completed in one session, duplicate payments, prepared-arrival reports from the provider. Observability: the first two are unobservable without analytics; duplicate payments are countable from the provider's records; preparedness is only askable. Two candidate metrics were removed for being unactionable, including time on page.",
    freeToolPath:
      "Paper or a text file for the tree. Nothing else; this lesson is reasoning, not tooling.",
    outputs: [
      "A metric tree from one outcome down to countable events",
      "Outcome and activity metrics distinguished",
      "An observability mark on every node",
      "Two candidate metrics removed for being unactionable",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and state the outcome",
        instructions: [
          "Read the assigned guidance on defining success.",
          "Write the one outcome your product exists to produce.",
        ],
      },
      {
        minutes: 30,
        title: "Build the tree downward",
        instructions: [
          "List the behaviours that produce the outcome.",
          "Beneath each, list events that would indicate it.",
          "Stop when the leaves are countable in principle.",
        ],
      },
      {
        minutes: 25,
        title: "Separate outcome from activity",
        instructions: [
          "Mark each node as outcome or activity.",
          "Check every activity node is connected upward to an outcome.",
        ],
      },
      {
        minutes: 25,
        title: "Mark observability",
        instructions: [
          "Mark each node observable, askable, or unavailable to you.",
          "Note what you would need to observe the unavailable ones.",
        ],
      },
      {
        minutes: 15,
        title: "Remove the unactionable",
        instructions: [
          "Remove any metric nobody would act on.",
          "Record the two you removed and why.",
          "Save the tree.",
        ],
      },
    ],
    check: [
      {
        question: "Why build the tree downward from an outcome?",
        answer:
          "Because building upward from available data produces numbers with no stated purpose, which is how dashboards become decoration.",
      },
      {
        question: "What is wrong with reporting activity?",
        answer:
          "Activity can rise for opposite reasons. Without the connection to an outcome, an increase can be read as success or as a problem, and it usually gets read as whichever is convenient.",
      },
      {
        question: "Why mark observability?",
        answer:
          "Because it tells you which questions need conversations, which need a manual count, and which you simply cannot answer — which is a real finding for someone without analytics.",
      },
    ],
    rubric: [
      "The tree starts from an outcome and reaches countable events",
      "Outcome and activity nodes are distinguished",
      "Every node is marked observable, askable or unavailable",
      "Unactionable metrics are removed with reasons",
    ],
    criteria: [
      {
        criterion: "The tree starts from an outcome and reaches countable events",
        evidence:
          "A tree with a stated outcome at the top and countable leaves.",
        levels: [
          "A list of available metrics.",
          "A tree built from data upward.",
          "Built downward from an outcome to countable leaves.",
          "As adequate, and the outcome is one someone outside the team would recognise as mattering.",
        ],
        remediation:
          "Write the outcome first, then ask what behaviours would produce it, then what would indicate each behaviour.",
        recheck: "The tree.",
      },
      {
        criterion: "Outcome and activity nodes are distinguished",
        evidence:
          "Each node labelled, with activity nodes connected upward.",
        levels: [
          "Not distinguished.",
          "Labelled without checking connections.",
          "Labelled and every activity node connected to an outcome.",
          "As adequate, and an activity metric that could move for opposite reasons is annotated as ambiguous.",
        ],
        remediation:
          "For each activity node, trace the path upward. Anything unconnected is a number without a purpose.",
        recheck: "The labelled tree.",
      },
      {
        criterion:
          "Every node is marked observable, askable or unavailable",
        evidence:
          "An observability mark per node with what would be needed for the unavailable ones.",
        levels: [
          "Not marked.",
          "Marked without stating what is missing.",
          "All marked, with requirements named for the unavailable.",
          "As adequate, and the askable nodes have a planned conversation rather than an intention.",
        ],
        remediation:
          "Go node by node asking how you would see this today with what you actually have.",
        recheck: "The marked tree.",
      },
      {
        criterion: "Unactionable metrics are removed with reasons",
        evidence:
          "At least two removals with the reason each would change nothing.",
        levels: [
          "Nothing removed.",
          "Removed without reasons.",
          "Two removed with reasons recorded.",
          "As adequate, and one removal is a metric you were attached to.",
        ],
        remediation:
          "For each metric ask what you would do differently if it moved. If nothing, remove it.",
        recheck: "The removal list.",
      },
    ],
    repairs: [
      "If the tree is a metric list, rebuild it downward from an outcome.",
      "If activity nodes float free, connect or remove them.",
      "If observability is unmarked, mark each node against what you have.",
      "If nothing was removed, apply the would-I-act test.",
    ],
    portfolio:
      "A metric tree with honest observability marks shows quantitative reasoning without pretending to data you do not have.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section:
          "Defining what success means and choosing measures that reflect it.",
        purpose: "Supplies the outcome-first framing this lesson builds on.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government services that publish performance data; you have neither the platform nor the traffic, so the observability marks are essential.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section: "The point on defining success and publishing performance data.",
        purpose:
          "Connects measurement to an accountability the service standard makes explicit.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Statutory context; take the discipline of stating success in advance.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l02-v1",
    module: "m15",
    week: 15,
    day: 2,
    level: 5,
    areas: [14],
    guided: true,
    title: "Funnels, and what a drop-off does not tell you",
    objective:
      "Build a funnel for one task from explicitly synthetic counts, identify the largest drop, and write three different explanations that the data cannot distinguish between.",
    bringForward: "Your m07 flow and m10 findings.",
    prerequisite: "Your flow and your usability findings.",
    why: "A funnel shows you where people stop. It never shows you why, and the gap between those two is where most bad product decisions are made.",
    teach: [
      "A funnel counts people reaching each step of one task.",
      "The biggest drop is where to look, not what to fix.",
      "Several explanations always fit the same drop.",
      "Some drops are correct: people who should not continue, leaving.",
      "Label synthetic data as synthetic, every time it appears.",
    ],
    explanation: [
      "A funnel is a simple instrument: define the steps of one task, count how many people reach each, and look at where the number falls. Its value is direction — it tells you where to spend qualitative effort — and its danger is that the shape looks explanatory when it is only descriptive.",
      "Every drop has multiple explanations. People leaving at payment might not trust the payment, might have discovered a cost, might have intended to check with someone, or might have been interrupted. The funnel cannot separate these, and the choice between them is usually made by whoever has the strongest opinion unless someone goes and finds out.",
      "Some drops are healthy. A step that filters out people who cannot attend on that date is doing its job, and treating every fall as a leak leads to designs that push people forward into commitments they will regret and cancel. Ask what a correct drop would look like before treating one as a problem.",
      "Because you have no real traffic, this lesson uses synthetic counts, and the rule from the resource catalog applies: label them synthetic wherever they appear, including in a portfolio. A funnel built from invented numbers teaches the reasoning and proves nothing about a real product.",
    ],
    misconception:
      "“The funnel shows the problem is at checkout.” It shows people stop there. The problem may have been created three steps earlier by a price that was not shown, and the funnel cannot tell you that.",
    example:
      "A synthetic funnel for the booking task, clearly labelled: 1,000 reach the class list, 420 open a class, 180 begin booking, 96 reach payment, 71 complete. The largest proportional drop is from opening a class to beginning a booking. Three explanations that fit equally: the price is higher than expected at that point; the date is inconvenient and there is no easy route to alternatives; and people are checking with someone else and will return later, which the funnel would count as a loss. The third would need a returning-visitor view the data does not have. The write-up marks every number synthetic.",
    freeToolPath:
      "A spreadsheet or a hand-drawn chart with synthetic counts. No analytics account is needed; the catalog's analytics demo account remains optional and unverified for signed-in use.",
    outputs: [
      "A funnel of one task with clearly labelled synthetic counts",
      "The largest drop identified proportionally",
      "Three explanations the data cannot distinguish",
      "A note of which drops might be correct rather than problems",
    ],
    steps: [
      {
        minutes: 25,
        title: "Define the steps",
        instructions: [
          "Take one task from your flow and list its steps in order.",
          "Decide what counts as reaching each step.",
        ],
      },
      {
        minutes: 25,
        title: "Populate with synthetic counts",
        instructions: [
          "Invent plausible counts and label them synthetic.",
          "Calculate the proportional drop at each step, not just the absolute.",
        ],
      },
      {
        minutes: 30,
        title: "Write competing explanations",
        instructions: [
          "For the largest drop, write three explanations that fit the numbers.",
          "State what evidence would separate them.",
        ],
      },
      {
        minutes: 25,
        title: "Find the healthy drops",
        instructions: [
          "Identify any step where people leaving is correct.",
          "Write what a healthy drop would look like there.",
        ],
      },
      {
        minutes: 15,
        title: "Label and record",
        instructions: [
          "Mark every number synthetic on the chart itself.",
          "Save the funnel with the explanations.",
        ],
      },
    ],
    check: [
      {
        question: "What does a funnel tell you?",
        answer:
          "Where people stop. Not why they stopped, and not whether stopping was a problem, both of which need other methods.",
      },
      {
        question: "Why look at proportional drops?",
        answer:
          "Because a small absolute fall late in a funnel can be a large proportion of the people who got that far, and that is where the design is failing the committed.",
      },
      {
        question: "When is a drop healthy?",
        answer:
          "When the step correctly filters people who should not continue. Treating that as a leak produces designs that push people into commitments they cancel.",
      },
    ],
    rubric: [
      "The funnel's steps match a real task",
      "Synthetic counts are labelled wherever they appear",
      "Three competing explanations are written with separating evidence",
      "Healthy drops are identified",
    ],
    criteria: [
      {
        criterion: "The funnel's steps match a real task",
        evidence:
          "Steps drawn from your own flow with a stated definition of reaching each.",
        levels: [
          "Generic funnel stages.",
          "Steps from the flow without definitions.",
          "Steps and definitions both from your own task.",
          "As adequate, and a step is split because it hid a decision point.",
        ],
        remediation:
          "Take your m07 flow and use its actual steps, defining what counts as reaching each.",
        recheck: "The funnel steps.",
      },
      {
        criterion: "Synthetic counts are labelled wherever they appear",
        evidence:
          "The word synthetic on the chart, in the write-up and in any portfolio use.",
        levels: [
          "Numbers presented without qualification.",
          "Labelled in one place only.",
          "Labelled everywhere the numbers appear.",
          "As adequate, and the label states why synthetic data was used.",
        ],
        remediation:
          "Add the label to the chart itself; a caption elsewhere does not travel with a screenshot.",
        recheck: "The labelled funnel.",
      },
      {
        criterion:
          "Three competing explanations are written with separating evidence",
        evidence:
          "Three plausible causes for the largest drop and what would distinguish them.",
        levels: [
          "One explanation asserted.",
          "Several explanations without separating evidence.",
          "Three with what would separate them.",
          "As adequate, and one explanation would make the drop acceptable rather than a problem.",
        ],
        remediation:
          "For your largest drop, write every reason a person might stop there, then what evidence would rule each in or out.",
        recheck: "The explanations.",
      },
      {
        criterion: "Healthy drops are identified",
        evidence:
          "At least one step where leaving is correct, with what healthy looks like.",
        levels: [
          "Every drop treated as a loss.",
          "Healthy drops mentioned generally.",
          "At least one identified with its expected shape.",
          "As adequate, and the write-up warns against optimising it away.",
        ],
        remediation:
          "Ask at each step whether some people should stop here. Where the answer is yes, say what proportion would be reasonable.",
        recheck: "The healthy-drop note.",
      },
    ],
    repairs: [
      "If the steps are generic, rebuild them from your own flow.",
      "If numbers are unlabelled, mark them synthetic on the chart.",
      "If one explanation is asserted, write two more and the separating evidence.",
      "If every drop reads as a loss, identify the healthy one.",
    ],
    portfolio:
      "A funnel with competing explanations is more credible than one with a conclusion, and the synthetic labelling protects you from an easy criticism.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section:
          "The sections on using performance data and on what a measure can and cannot show.",
        purpose:
          "Supports reading a funnel as direction rather than explanation.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context with real data; your counts are synthetic and must be labelled as such everywhere.",
        fallbackId: "R07",
      },
      {
        ...charts,
        section: "The rules for bar charts, axes and labelling.",
        purpose:
          "Keeps the funnel chart honest about proportions and readable without a legend.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 19 May 2022. It excludes interactive charts and dashboards.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l03-v1",
    module: "m15",
    week: 15,
    day: 3,
    level: 5,
    areas: [14],
    guided: true,
    title: "Rates, intervals and small numbers",
    objective:
      "Attach an interval to three rates from your own work, and rewrite any claim the interval cannot support.",
    bringForward: "Your m05 survey results, m10 test results and the funnel.",
    prerequisite: "Any counts you hold from earlier modules.",
    why: "A rate with no interval is a claim pretending to be a measurement, and it is the commonest way design work misleads people.",
    teach: [
      "A rate from a small count carries a wide interval.",
      "Report the interval beside the rate, or report the count instead.",
      "Sample size guidance is for planning, not for justifying claims afterwards.",
      "Comparing two rates needs more care than reporting one.",
      "Rewriting a claim you cannot support is the exercise, not a failure.",
    ],
    explanation: [
      "The assigned interval reading explains that a rate is an estimate with uncertainty attached, and that the uncertainty shrinks slowly as the sample grows. At the sizes available to you — a survey of twenty-two, a test of five — the interval around any percentage covers so much ground that the percentage carries almost no information, which is why this course has insisted on counts since m05.",
      "The practical rule has two branches. If you must report a rate, attach the interval and show your inputs. If the interval is so wide that the rate is uninformative, report the count and let the reader see the size directly. Both are honest; only the bare percentage is not.",
      "The sample-size reading is for planning: it tells you what a study designed to measure a binary outcome would need. It is not a justification for a claim made from a smaller sample, and it explicitly excludes surveys, card sorting and tree testing, which is why m05, m06 and m10 all reported counts.",
      "Comparing two rates is harder than reporting one, because both carry intervals and the difference carries a wider one still. Two overlapping intervals do not establish a difference, and reporting “A improved on B” from small samples is the failure mode most likely to reach a decision meeting unchallenged.",
    ],
    misconception:
      "“Percentages are more professional than counts.” They look more precise. At small samples the precision is fictional, and a reader who checks the sample will trust nothing else in the document.",
    example:
      "Three rates were reworked. From the m05 survey: 9 of 22 unsure their payment had gone through, previously written as 41 per cent. With the interval computed and shown, the range covered roughly a quarter to three-fifths, so the claim became the count. From the m10 test: 2 of 3 could not tell the place was held, previously written as 67 per cent, rewritten as the count with the sample route stated. From the synthetic funnel: a comparison between two steps was removed entirely, because the numbers were invented and comparing invented numbers produces nothing.",
    freeToolPath:
      "A spreadsheet or calculator using a published interval formula, with your inputs shown. The interval reading gives no formulas, so name the one you used.",
    outputs: [
      "Three rates with computed intervals and inputs shown",
      "Any unsupportable claim rewritten as a count",
      "A written rule for when you will report a rate at all",
      "One comparison abandoned or qualified",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and gather",
        instructions: [
          "Read the assigned interval and sample-size readings.",
          "Collect three rates you have written or been tempted to write.",
        ],
      },
      {
        minutes: 30,
        title: "Compute the intervals",
        instructions: [
          "Compute an interval for each rate, showing your inputs.",
          "Name the formula or tool you used.",
        ],
      },
      {
        minutes: 25,
        title: "Rewrite the claims",
        instructions: [
          "Rewrite any claim the interval cannot support.",
          "Prefer counts with the sample route stated.",
        ],
      },
      {
        minutes: 25,
        title: "Handle a comparison",
        instructions: [
          "Take a comparison between two rates and examine both intervals.",
          "Qualify or abandon the comparison, and say why.",
        ],
      },
      {
        minutes: 15,
        title: "Write your rule",
        instructions: [
          "Write when you will report a rate rather than a count.",
          "Save the calculations and the rewritten claims.",
        ],
      },
    ],
    check: [
      {
        question: "Why does a small sample produce a wide interval?",
        answer:
          "Because a few observations are compatible with many underlying rates. The interval narrows slowly as the sample grows, which is why small studies report counts.",
      },
      {
        question: "What is the sample-size reading for?",
        answer:
          "Planning a study designed to measure. It does not justify claims from smaller samples and excludes surveys, card sorting and tree testing.",
      },
      {
        question: "Why is comparing two rates harder?",
        answer:
          "Because both carry uncertainty and the difference carries more. Overlapping intervals do not establish that one is higher than the other.",
      },
    ],
    rubric: [
      "Three intervals are computed with inputs shown",
      "Unsupportable claims are rewritten as counts",
      "A comparison is qualified or abandoned",
      "A personal rule for reporting rates is written",
    ],
    criteria: [
      {
        criterion: "Three intervals are computed with inputs shown",
        evidence:
          "Three calculations with the sample size, the rate, the method and the resulting range.",
        levels: [
          "No calculation.",
          "Intervals asserted without inputs.",
          "All three computed with inputs and method shown.",
          "As adequate, and the width is described in words as well as numbers.",
        ],
        remediation:
          "Compute each interval in a spreadsheet and record the numbers you put in.",
        recheck: "The three calculations.",
      },
      {
        criterion: "Unsupportable claims are rewritten as counts",
        evidence:
          "Rewritten sentences using counts and stating the recruitment route.",
        levels: [
          "Percentages retained.",
          "Some rewritten, some retained.",
          "All unsupportable rates rewritten as counts with routes.",
          "As adequate, and one rewrite is shown beside the original for comparison.",
        ],
        remediation:
          "Replace each percentage with the count and add who the sample was.",
        recheck: "The rewritten claims.",
      },
      {
        criterion: "A comparison is qualified or abandoned",
        evidence:
          "One two-rate comparison examined, with a decision and reasoning.",
        levels: [
          "Comparison retained unqualified.",
          "Qualified vaguely.",
          "Examined against both intervals and decided.",
          "As adequate, and the decision is to abandon it where the intervals overlap substantially.",
        ],
        remediation:
          "Compute both intervals and check whether they overlap; if they do, the comparison is not supported.",
        recheck: "The comparison decision.",
      },
      {
        criterion: "A personal rule for reporting rates is written",
        evidence:
          "A stated threshold or condition under which you will use a rate.",
        levels: [
          "No rule.",
          "A rule too vague to apply.",
          "A rule that would decide a real case.",
          "As adequate, and it names what you will do when someone asks for a percentage anyway.",
        ],
        remediation:
          "Write the sample size below which you will always report counts, and what you will say if pressed.",
        recheck: "The rule.",
      },
    ],
    repairs: [
      "If intervals are asserted, compute them and show the inputs.",
      "If percentages remain, rewrite them as counts with the sample route.",
      "If a comparison stands unqualified, check both intervals.",
      "If no rule exists, write the threshold you will hold to.",
    ],
    portfolio:
      "Showing a claim you rewrote, with the interval that forced it, is stronger evidence of judgement than any correct number.",
    resource: intervals,
    resources: [
      {
        ...intervals,
        section:
          "What an interval means, confidence levels, and the effect of sample size and variability.",
        purpose: "Supplies the reasoning and the reason to report counts.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. It deliberately gives no formulas, so name the one you used and show your inputs.",
        fallbackId: "R45",
      },
      {
        ...samples,
        section: "Recommended counts and the assumptions behind them.",
        purpose:
          "Shows what a study designed to measure would need, as a contrast with what you have.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Binary success metrics only; it excludes A/B tests, surveys, card sorting and tree testing and does not license claims from smaller samples.",
        fallbackId: "R37",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l04-v1",
    module: "m15",
    week: 15,
    day: 4,
    level: 5,
    areas: [14],
    guided: true,
    title: "Designing an experiment you cannot run",
    objective:
      "Design one A/B test properly — hypothesis, variants, primary and guardrail metrics, required sample and duration — and then write why you cannot run it and what you will do instead.",
    bringForward: "Your metric tree and a design decision you are unsure about.",
    prerequisite: "Your metric tree and an open design question.",
    why: "Knowing what a real experiment requires is what lets you refuse a fake one, which is the situation you will actually be in.",
    teach: [
      "State the hypothesis before the variants: what you expect and why.",
      "Choose one primary metric and guardrails that must not get worse.",
      "Test one change; several at once produce an uninterpretable result.",
      "Required traffic and duration are constraints, not formalities.",
      "An experiment cannot tell you why; it needs qualitative work beside it.",
    ],
    explanation: [
      "A hypothesis is what makes an experiment interpretable. “Showing that the place is held will reduce duplicate payments, because participants told us they were unsure whether their place was secured” states the expectation and the reasoning, and it can be wrong — which is what distinguishes it from trying two designs to see which does better.",
      "One primary metric decides the result; guardrails prevent winning by damage. If the variant increases completions while increasing refund requests, the guardrail catches what the primary metric would have hidden. Choosing both before running is what stops the result being reinterpreted afterwards.",
      "The assigned article is explicit about the constraints: A/B testing is unsuitable for low-traffic pages, needs a duration of one to two weeks beyond the sample requirement to cover behavioural fluctuation, and cannot reliably test several changes at once. Those are the facts that will make your test impossible, and knowing them precisely is the point of designing it.",
      "The article is equally clear that a test cannot tell you why behaviour changed. That is why the honest plan for a learner without traffic is a designed experiment, a written refusal, and a qualitative alternative — three conversations, a small usability comparison — which answers a narrower question truthfully rather than a broader one falsely.",
    ],
    misconception:
      "“We can run a quick A/B test to settle this.” With low traffic, a short test produces a difference that is noise, and the noise will be read as a result. Designing the test properly is what shows why that would happen.",
    example:
      "The designed test: hypothesis, that a held-place message reduces duplicate payments; variants, current and with the message; primary metric, duplicate payments per hundred bookings; guardrails, completion rate and support contacts. The required sample, using the article's reasoning, was far beyond the product's traffic — the honest calculation showed months of data for a plausible effect. The refusal was written, with what would change it: ten times the traffic, or a much larger expected effect. The alternative was three moderated comparisons plus counting duplicate payments in the provider's records before and after, with the confounding stated.",
    freeToolPath:
      "Written design plus a spreadsheet for the sample calculation. No experimentation platform is involved, and none would help without traffic.",
    outputs: [
      "A written hypothesis with its reasoning",
      "One primary metric and at least two guardrails",
      "A required sample and duration estimate with inputs",
      "A written refusal and a qualitative alternative",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the constraints",
        instructions: [
          "Read the assigned A/B testing article.",
          "Write its stated limits on traffic, duration and simultaneous changes.",
        ],
      },
      {
        minutes: 25,
        title: "Write the hypothesis and variants",
        instructions: [
          "State what you expect, why, and what would disprove it.",
          "Define exactly one change between the variants.",
        ],
      },
      {
        minutes: 30,
        title: "Choose metrics",
        instructions: [
          "Choose one primary metric from your metric tree.",
          "Choose guardrails that must not get worse.",
          "State the smallest effect that would matter.",
        ],
      },
      {
        minutes: 25,
        title: "Estimate the requirement",
        instructions: [
          "Estimate the sample needed for that effect and the duration.",
          "Compare with the traffic you actually have.",
        ],
      },
      {
        minutes: 15,
        title: "Refuse, and plan the alternative",
        instructions: [
          "Write why you cannot run it and what would change that.",
          "Plan the qualitative alternative and what it can answer.",
          "Save the design, the refusal and the alternative.",
        ],
      },
    ],
    check: [
      {
        question: "Why state the hypothesis before the variants?",
        answer:
          "Because it makes the result interpretable and capable of being wrong. Comparing two designs to see which wins produces a number with no explanation attached.",
      },
      {
        question: "What are guardrail metrics for?",
        answer:
          "To catch a variant that improves the primary metric by causing harm elsewhere — more completions with more refunds, for instance.",
      },
      {
        question: "Why is designing an unrunnable test worth doing?",
        answer:
          "Because it shows precisely why a quick test would produce noise, and it produces an honest alternative instead of a fake result.",
      },
    ],
    rubric: [
      "A hypothesis states expectation, reasoning and disproof",
      "One primary metric and guardrails are chosen in advance",
      "Sample and duration are estimated against real traffic",
      "A refusal and a qualitative alternative are written",
    ],
    criteria: [
      {
        criterion: "A hypothesis states expectation, reasoning and disproof",
        evidence:
          "A written hypothesis naming what you expect, why, and what result would refute it.",
        levels: [
          "Two variants with no hypothesis.",
          "An expectation without reasoning or disproof.",
          "All three present.",
          "As adequate, and the reasoning cites a specific research finding.",
        ],
        remediation:
          "Write “I expect … because … and I would be wrong if …”.",
        recheck: "The hypothesis.",
      },
      {
        criterion:
          "One primary metric and guardrails are chosen in advance",
        evidence:
          "A single primary metric from the tree and at least two guardrails.",
        levels: [
          "Several metrics with no primary.",
          "A primary without guardrails.",
          "One primary and two or more guardrails, chosen before running.",
          "As adequate, and the smallest effect worth detecting is stated.",
        ],
        remediation:
          "Choose the one metric that decides the result, then name what must not get worse.",
        recheck: "The metric choice.",
      },
      {
        criterion: "Sample and duration are estimated against real traffic",
        evidence:
          "An estimate with inputs, compared with the traffic actually available.",
        levels: [
          "No estimate.",
          "An estimate without comparison to real traffic.",
          "Both, with the shortfall visible.",
          "As adequate, and the estimate includes the article's recommended minimum duration on top of the sample requirement.",
        ],
        remediation:
          "Estimate the sample for your smallest meaningful effect and set it beside your actual traffic.",
        recheck: "The estimate.",
      },
      {
        criterion: "A refusal and a qualitative alternative are written",
        evidence:
          "A written statement of why the test cannot run, what would change it, and what you will do instead.",
        levels: [
          "No refusal; the test is presented as runnable.",
          "A refusal without an alternative.",
          "Both, with what the alternative can and cannot answer.",
          "As adequate, and the alternative's confounds are stated.",
        ],
        remediation:
          "Write the sentence beginning “this cannot run because …” and then plan the conversations you can have.",
        recheck: "The refusal and alternative.",
      },
    ],
    repairs: [
      "If there is no hypothesis, write expectation, reasoning and disproof.",
      "If metrics are unranked, choose one primary and add guardrails.",
      "If the requirement is unestimated, calculate it against real traffic.",
      "If the test is presented as runnable, write the refusal.",
    ],
    portfolio:
      "A properly designed experiment with an honest refusal is a stronger portfolio item than a claimed test result nobody can verify.",
    resource: abTesting,
    resources: [
      {
        ...abTesting,
        section:
          "What an A/B test compares, its traffic and duration requirements, the significance convention, and its inability to explain why.",
        purpose:
          "Supplies the constraints that make the refusal specific rather than vague.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 30 August 2024. It names no tools, excludes multivariate design and gives no post-test analysis. With no traffic, the honest exercise is the design and the refusal, never a claimed result.",
        fallbackId: "R37",
      },
      {
        ...samples,
        section: "Sample sizes for binary success metrics.",
        purpose:
          "Gives a basis for the sample estimate while stating its own exclusions.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Binary metrics only; it explicitly does not cover A/B tests, so treat the estimate as an order of magnitude rather than a calculation.",
        fallbackId: "R37",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l05-v1",
    module: "m15",
    week: 15,
    day: 5,
    level: 5,
    areas: [14],
    guided: true,
    title: "Reading someone else's numbers",
    objective:
      "Take a published or supplied set of figures, list the five questions you would need answered before acting on it, and rewrite one of its claims to match what it actually supports.",
    bringForward: "Any real published figures about a product or service.",
    prerequisite: "A public report, dashboard screenshot or article with numbers.",
    why: "You will be handed numbers far more often than you will produce them, and the useful skill is asking what they are not telling you.",
    teach: [
      "Ask who was counted and who was excluded.",
      "Ask what period, and whether it is comparable to the last one.",
      "Ask what changed at the same time; almost always something did.",
      "Ask what the denominator is; it is often the missing information.",
      "Ask what decision this number is being used to justify.",
    ],
    explanation: [
      "The five questions cover most misreadings. Who was counted decides whether the population is the one you care about. The period decides comparability, since a fortnight containing a holiday is not a normal fortnight. Concurrent changes are the usual reason a number moved. The denominator is the most frequently omitted fact, because a rise in a percentage can come entirely from a fall in the base. And the decision being justified tells you what the number is doing in the room.",
      "None of this requires statistical expertise. It requires refusing to accept a number without its context, which is a habit rather than a technique, and it makes you useful in meetings where everyone else is treating a chart as self-evident.",
      "The chart itself often carries the answer or hides it. The assigned chart guidance names the conventions — a full axis, direct labels, an accessible palette, published underlying data — and a chart that breaks them frequently does so in the direction of its author's argument.",
      "Rewriting a claim to match its support is the exercise. It is the same discipline you applied to your own rates, applied to someone else's, and it is how you learn to do it under pressure with a number you did not produce.",
    ],
    misconception:
      "“The data speaks for itself.” Data is selected, framed and presented by someone with a purpose. The questions are not an accusation; they are the ordinary work of reading a number.",
    example:
      "A published figure claimed a 30 per cent improvement in completions after a redesign. The five questions: who was counted — new visitors only, it turned out, excluding returning ones; what period — four weeks against a comparison period containing a public holiday; what else changed — a marketing campaign ran concurrently; what is the denominator — total visits fell, so completions per visit rose while completions fell; and what decision it justified — further investment in the redesign. The claim was rewritten as: completions per visit rose over four weeks, during which visits fell and a campaign ran, so the redesign's contribution cannot be separated.",
    freeToolPath:
      "Any published report or article with figures. The exercise is reading and writing; no data access is needed.",
    outputs: [
      "Five questions asked of a real set of figures",
      "The answers you could find and the ones you could not",
      "One claim rewritten to match its support",
      "A note of what the chart's presentation emphasised or hid",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose the figures",
        instructions: [
          "Find a public report, article or dashboard image with numbers and a claim.",
          "Write the claim exactly as stated.",
        ],
      },
      {
        minutes: 30,
        title: "Ask the five questions",
        instructions: [
          "Ask who, when, what else changed, what the denominator is, and what decision it serves.",
          "Record which answers are available and which are absent.",
        ],
      },
      {
        minutes: 25,
        title: "Examine the presentation",
        instructions: [
          "Check the chart against the assigned conventions.",
          "Note anything that emphasises or hides part of the picture.",
        ],
      },
      {
        minutes: 25,
        title: "Rewrite the claim",
        instructions: [
          "Rewrite it to say only what the figures support.",
          "Keep it readable; the point is honesty, not hedging.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Note which question was most revealing.",
          "Save the original claim, the questions and the rewrite.",
        ],
      },
    ],
    check: [
      {
        question: "Which question is most often unanswered?",
        answer:
          "The denominator. A percentage can rise entirely because the base fell, and the base is frequently absent from the presentation.",
      },
      {
        question: "Why ask what else changed?",
        answer:
          "Because something almost always did — a campaign, a season, a release — and without that the change is attributed to whatever the author was arguing for.",
      },
      {
        question: "Is asking these questions hostile?",
        answer:
          "No, it is ordinary reading. Numbers are selected and framed by people, and treating a chart as self-evident is how bad decisions get made confidently.",
      },
    ],
    rubric: [
      "Five questions are asked of a real published claim",
      "Available and unavailable answers are distinguished",
      "The presentation is checked against chart conventions",
      "The claim is rewritten to match its support",
    ],
    criteria: [
      {
        criterion: "Five questions are asked of a real published claim",
        evidence:
          "A real claim quoted with all five questions applied.",
        levels: [
          "An invented example.",
          "A real claim with fewer than five questions.",
          "A real claim with all five asked.",
          "As adequate, and a sixth question specific to the domain is added.",
        ],
        remediation:
          "Find a real published claim and work through the five questions in writing.",
        recheck: "The questioned claim.",
      },
      {
        criterion: "Available and unavailable answers are distinguished",
        evidence:
          "A record of which answers the source provides and which it omits.",
        levels: [
          "Answers guessed.",
          "Answers given without distinguishing found from assumed.",
          "Clear separation of available and absent.",
          "As adequate, and the absent ones are ranked by how much they matter.",
        ],
        remediation:
          "Mark each answer as stated in the source, inferable, or absent.",
        recheck: "The answer record.",
      },
      {
        criterion: "The presentation is checked against chart conventions",
        evidence:
          "A check of axis, labelling and colour against the assigned guidance.",
        levels: [
          "Presentation not examined.",
          "Examined impressionistically.",
          "Checked against specific conventions with findings.",
          "As adequate, and a presentation choice is linked to the argument it supports.",
        ],
        remediation:
          "Compare the chart with the guidance's rules for axes and labelling and note the breaches.",
        recheck: "The presentation check.",
      },
      {
        criterion: "The claim is rewritten to match its support",
        evidence:
          "A rewritten claim that is both honest and readable.",
        levels: [
          "Not rewritten.",
          "Rewritten into unreadable hedging.",
          "Rewritten to say what is supported, clearly.",
          "As adequate, and the rewrite is shorter than the original.",
        ],
        remediation:
          "Write the sentence the figures actually support, then cut it until it reads well.",
        recheck: "The rewritten claim.",
      },
    ],
    repairs: [
      "If the example is invented, find a real published claim.",
      "If answers are guessed, mark what the source actually states.",
      "If the chart was not examined, check it against the conventions.",
      "If the rewrite is unreadable, cut it without restoring the overclaim.",
    ],
    portfolio:
      "A public claim analysed and rewritten is a compact demonstration of quantitative judgement and does not require access to any proprietary data.",
    resource: charts,
    resources: [
      {
        ...charts,
        section:
          "Axes, gridlines, direct labelling, colour contrast and publishing the underlying data.",
        purpose:
          "Supplies the conventions against which a published chart is checked.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 19 May 2022. Written for government statistics; it excludes interactive dashboards.",
        fallbackId: "R29",
      },
      {
        ...measuring,
        section: "Using performance data and what it can support.",
        purpose:
          "Frames the five questions as ordinary practice rather than scepticism.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context; the questions transfer to any published figure.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l06-v1",
    module: "m15",
    week: 15,
    day: 6,
    level: 5,
    areas: [14],
    guided: true,
    title: "Numbers and conversations together",
    objective:
      "Take one quantitative finding and one qualitative finding about the same behaviour, and write what each explains that the other cannot.",
    bringForward: "Your funnel, your m05 findings and your m10 test results.",
    prerequisite: "One count and one qualitative finding about the same thing.",
    why: "Numbers show where and how much; conversations show why. Used alone, each produces a confident wrong answer of a different kind.",
    teach: [
      "Quantitative shows scale and location; qualitative shows mechanism.",
      "Start from whichever you have and use the other to fill its gap.",
      "A count without a mechanism produces an unfixable problem.",
      "A mechanism without a count produces an unprioritisable one.",
      "Contradictions between them are findings, not errors.",
    ],
    explanation: [
      "The division of labour is clean. A count tells you that people stop at a step and roughly how many; it cannot tell you what they were thinking. A conversation tells you what someone believed and expected; it cannot tell you how many people share that belief. Used together, each covers the other's blind spot, which is why the strongest evidence in any product argument is usually one of each.",
      "The order does not matter but the pairing does. If a number surprises you, go and watch three people; if three people surprise you, look for a count that indicates whether it is widespread. Neither step is expensive at your scale, and the pair is far more persuasive than either alone.",
      "A count without a mechanism cannot be acted on. Knowing that people leave at payment tells nobody what to change, and teams presented with that fact alone tend to change something visible and re-measure hopefully. That is how products acquire changes nobody can explain.",
      "Contradictions are informative. If your count suggests a problem is rare and your conversations suggest it is severe, both may be right: rare and severe is a real category, and it is the one most often dismissed by whichever evidence type the team prefers.",
    ],
    misconception:
      "“Quantitative evidence is more objective.” It is more precise about different things. A precisely counted event whose cause nobody understands is not more objective than three careful observations of why it happens.",
    example:
      "The pairing: the synthetic funnel showed the largest drop between opening a class and starting a booking; the m05 observation showed a participant checking the price against a screenshot from a friend, twice, because the displayed price did not match what she remembered. The count located the problem, the observation supplied a mechanism, and together they produced a specific change — showing the price consistently and earlier. Written separately, the count would have produced a redesign of the booking button and the observation would have been dismissed as one person.",
    freeToolPath:
      "Your existing findings and a written comparison. No new data collection is required.",
    outputs: [
      "One quantitative and one qualitative finding about the same behaviour",
      "What each explains that the other cannot",
      "A change proposal that needed both",
      "Any contradiction between them, kept rather than resolved",
    ],
    steps: [
      {
        minutes: 25,
        title: "Pair the findings",
        instructions: [
          "Choose one count and one observation about the same behaviour.",
          "State what each says on its own.",
        ],
      },
      {
        minutes: 30,
        title: "Write the gaps",
        instructions: [
          "Write what the count cannot tell you.",
          "Write what the observation cannot tell you.",
          "Check the two gaps are genuinely different.",
        ],
      },
      {
        minutes: 25,
        title: "Propose a change from both",
        instructions: [
          "Write a change that neither finding alone would have produced.",
          "State which part of the evidence supports which part of the change.",
        ],
      },
      {
        minutes: 25,
        title: "Look for contradiction",
        instructions: [
          "Check whether the two disagree in any respect.",
          "If they do, keep both and write what would explain the disagreement.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write which finding you would have trusted alone, and why that would have been wrong.",
          "Save the pairing and the proposal.",
        ],
      },
    ],
    check: [
      {
        question: "What does a count contribute that a conversation cannot?",
        answer:
          "Scale and location: how many, and where. A conversation cannot establish either, however clear the mechanism it reveals.",
      },
      {
        question: "What happens when only a count is available?",
        answer:
          "Teams change something visible and re-measure hopefully, because the number identifies a place without identifying a cause.",
      },
      {
        question: "What does a contradiction between the two mean?",
        answer:
          "Often that the problem is rare and severe, or common and mild. Both are real categories, and dropping one source to resolve the tension loses the finding.",
      },
    ],
    rubric: [
      "Both findings concern the same behaviour",
      "The gaps of each are stated and genuinely different",
      "A change proposal draws on both",
      "Contradictions are kept and explained rather than resolved away",
    ],
    criteria: [
      {
        criterion: "Both findings concern the same behaviour",
        evidence:
          "A count and an observation about one behaviour, each stated.",
        levels: [
          "Two unrelated findings.",
          "Loosely related findings.",
          "Both concern the same behaviour precisely.",
          "As adequate, and the behaviour is one your metric tree already names.",
        ],
        remediation:
          "Pick the behaviour first, then find the count and the observation about it.",
        recheck: "The paired findings.",
      },
      {
        criterion: "The gaps of each are stated and genuinely different",
        evidence:
          "A written gap per finding, describing different kinds of ignorance.",
        levels: [
          "Gaps not stated.",
          "Gaps stated but essentially the same.",
          "Two genuinely different gaps.",
          "As adequate, and each gap names what method would fill it.",
        ],
        remediation:
          "For each finding write the question it cannot answer; if the two questions match, you have paired the wrong findings.",
        recheck: "The gap statements.",
      },
      {
        criterion: "A change proposal draws on both",
        evidence:
          "A proposal with each element traced to the count or the observation.",
        levels: [
          "A proposal from one source.",
          "Both cited without tracing.",
          "Each element traced to its source.",
          "As adequate, and the write-up says what the proposal would have been from each source alone.",
        ],
        remediation:
          "Write the change, then annotate which finding supports each part of it.",
        recheck: "The traced proposal.",
      },
      {
        criterion:
          "Contradictions are kept and explained rather than resolved away",
        evidence:
          "Any disagreement recorded with a candidate explanation.",
        levels: [
          "Contradiction dropped.",
          "Noted without explanation.",
          "Kept with an explanation and what would settle it.",
          "As adequate, and the rare-and-severe possibility is considered explicitly.",
        ],
        remediation:
          "Look for where the count and the observation imply different urgencies, and write why both could be true.",
        recheck: "The contradiction note.",
      },
    ],
    repairs: [
      "If the findings are unrelated, choose one behaviour and pair properly.",
      "If the gaps match, you have two of the same kind of evidence.",
      "If the proposal cites one source, trace each element to its evidence.",
      "If a contradiction was dropped, restore it and explain it.",
    ],
    portfolio:
      "A paired finding with a traced proposal is exactly what mixed-methods competence looks like on a page, and it is rare in junior portfolios.",
    resource: analyse,
    resources: [
      {
        ...analyse,
        section: "Turning observations into findings and decisions.",
        purpose:
          "Supplies the qualitative half of the pairing and its discipline.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not discuss quantitative work; the pairing is this lesson's own.",
        fallbackId: "R08",
      },
      {
        ...measuring,
        section: "Choosing measures and interpreting them alongside other evidence.",
        purpose:
          "Supplies the quantitative half and warns against reading numbers alone.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context with real data; your counts remain small or synthetic and must be labelled.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l07-v1",
    module: "m15",
    week: 15,
    day: 7,
    level: 5,
    areas: [14],
    guided: true,
    title: "What to record, and what to refuse to record",
    objective:
      "Write an instrumentation plan naming every event you would record, why, how long it is kept, and at least two things you will deliberately not collect.",
    bringForward: "Your metric tree and your m05 data plan.",
    prerequisite: "Your metric tree and privacy plan.",
    why: "Every measurement is a collection of somebody's behaviour. Designers are frequently the only person in the room who asks whether it should be collected at all.",
    teach: [
      "Record what a named question needs, not what might be useful later.",
      "Each event should have an owner, a purpose and a retention period.",
      "Free-text and location are high-risk; think hard before recording either.",
      "Anonymous and identified are different decisions with different obligations.",
      "Refusing to collect something is a design decision worth documenting.",
    ],
    explanation: [
      "Instrumentation grows by default: it is easier to record everything and decide later, and that is exactly the habit that produces a store of behavioural data with no stated purpose and no deletion date. Tying every event to a question from your metric tree keeps the collection proportionate and makes it defensible.",
      "Purpose, owner and retention should be recorded per event, in the same way your m05 data plan recorded them for research material. An event nobody can name a purpose for should not be collected; an event with no retention period will be kept indefinitely by default.",
      "Some data is riskier than its usefulness justifies. Free text can contain anything, including things people did not intend to disclose; precise location is identifying in combination with almost anything; and identifiers that link sessions turn anonymous counts into personal records. The design question is whether the answer you get is worth what you now hold.",
      "Refusal is a design act. Writing down what you chose not to collect, and why, is what makes the decision visible later when someone asks why the dashboard cannot answer a question. It also gives you a defensible position when the request is for something intrusive: not a preference, but a recorded decision with a reason.",
    ],
    misconception:
      "“Collect everything now, decide later.” Later never arrives, and in the meantime you hold data you cannot justify, cannot delete confidently and must protect. Deciding first is cheaper and safer.",
    example:
      "The plan listed nine events, each tied to a node in the metric tree, with a purpose, an owner and a retention period of ninety days. Two refusals were recorded: no free-text capture from the search box, because the question it would answer did not justify holding whatever people type; and no precise location, since the coarse area answered the only question that mattered. One event was reduced rather than removed: rather than recording the exact class booked, it recorded that a booking occurred, since the identity of the class answered no question in the tree.",
    freeToolPath:
      "A written plan. Whether it is ever implemented is a separate question; the reasoning is the deliverable.",
    outputs: [
      "An event list tied to metric-tree questions",
      "A purpose, owner and retention period per event",
      "At least two documented refusals with reasons",
      "One event reduced rather than removed",
    ],
    steps: [
      {
        minutes: 25,
        title: "Derive events from questions",
        instructions: [
          "For each observable node in your tree, name the event that would indicate it.",
          "Discard any event with no question behind it.",
        ],
      },
      {
        minutes: 30,
        title: "Add purpose, owner and retention",
        instructions: [
          "Write why each event is collected and who is responsible.",
          "Set a retention period and a deletion mechanism.",
        ],
      },
      {
        minutes: 25,
        title: "Assess risk",
        instructions: [
          "Mark any free text, location or cross-session identifier.",
          "For each, ask whether the answer justifies holding it.",
        ],
      },
      {
        minutes: 25,
        title: "Refuse and reduce",
        instructions: [
          "Record at least two things you will not collect, with reasons.",
          "Reduce one event to the minimum that answers its question.",
        ],
      },
      {
        minutes: 15,
        title: "Check jurisdiction",
        instructions: [
          "Note that legal requirements differ by country and that you have not verified Indian requirements here.",
          "Save the plan with the refusals.",
        ],
      },
    ],
    check: [
      {
        question: "Why tie every event to a question?",
        answer:
          "Because collection grows by default otherwise, producing data with no purpose, no deletion date and a protection obligation nobody planned for.",
      },
      {
        question: "What makes free text risky?",
        answer:
          "It can contain anything, including information people did not intend to disclose. The question it answers rarely justifies holding whatever someone types.",
      },
      {
        question: "Why document a refusal?",
        answer:
          "So the decision is visible later, and so the position is a recorded reason rather than a preference when the request returns.",
      },
    ],
    rubric: [
      "Every event traces to a question in the metric tree",
      "Purpose, owner and retention are recorded per event",
      "At least two refusals are documented with reasons",
      "One event is reduced to the minimum that answers its question",
    ],
    criteria: [
      {
        criterion: "Every event traces to a question in the metric tree",
        evidence:
          "An event list with a tree node beside each entry.",
        levels: [
          "Events listed by what is easy to record.",
          "Some traced, others speculative.",
          "Every event traces to a named question.",
          "As adequate, and speculative events were discarded explicitly.",
        ],
        remediation:
          "Delete any event you cannot attach to a node, and record that you did.",
        recheck: "The traced event list.",
      },
      {
        criterion: "Purpose, owner and retention are recorded per event",
        evidence:
          "Three fields completed for every event, with a deletion mechanism.",
        levels: [
          "None recorded.",
          "Purpose only.",
          "All three with a deletion mechanism.",
          "As adequate, and the retention periods differ by risk rather than being uniform.",
        ],
        remediation:
          "Complete the three fields for each event; anything without a purpose should not be collected.",
        recheck: "The completed plan.",
      },
      {
        criterion: "At least two refusals are documented with reasons",
        evidence:
          "Two things deliberately not collected, each with the reasoning.",
        levels: [
          "No refusals.",
          "Refusals implied by absence.",
          "Two documented with reasons.",
          "As adequate, and one refusal concerns something a stakeholder would plausibly request.",
        ],
        remediation:
          "Write what you could collect and chose not to, and why the answer was not worth the holding.",
        recheck: "The refusal list.",
      },
      {
        criterion:
          "One event is reduced to the minimum that answers its question",
        evidence:
          "An event narrowed, with what was dropped and why it was unnecessary.",
        levels: [
          "No reduction.",
          "Reduced without stating what was dropped.",
          "Reduced with the dropped detail and its reason.",
          "As adequate, and the reduction removes an identifying element.",
        ],
        remediation:
          "Take your richest event and ask what the question actually needs; drop the rest.",
        recheck: "The reduced event.",
      },
    ],
    repairs: [
      "If events came from what is easy to record, re-derive them from questions.",
      "If retention is missing, set a period and a deletion mechanism.",
      "If nothing was refused, name what you could collect and will not.",
      "If no event was reduced, narrow the richest one to its question.",
    ],
    portfolio:
      "An instrumentation plan with documented refusals is unusual in a design portfolio and signals that you think about the people behind the numbers.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section: "Choosing what to measure and why.",
        purpose:
          "Keeps the event list tied to questions rather than to availability.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not address data-protection obligations, which differ by jurisdiction and are not verified here for India.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section: "The point on creating a secure service which protects users' privacy.",
        purpose:
          "Places collection decisions inside a stated set of obligations.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. UK government obligations; check Indian requirements from a primary source before implementing anything.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l08-v1",
    module: "m15",
    week: 15,
    day: 8,
    level: 5,
    areas: [14],
    guided: true,
    title: "Time, cohorts and the number that moved by itself",
    objective:
      "Take one metric over time, identify what could make it move without any design change, and rework a comparison into a cohort that controls for one of them.",
    bringForward: "Your funnel and metric tree.",
    prerequisite: "Your funnel with its synthetic counts.",
    why: "Most numbers move for reasons nobody designed, and attributing that movement to your work is the easiest mistake to make and the hardest to retract.",
    teach: [
      "Seasonality, campaigns, holidays and news move numbers on their own.",
      "New and returning people behave differently; mixing them hides both.",
      "A cohort follows one group over time and compares like with like.",
      "Before-and-after comparisons carry every concurrent change with them.",
      "State what you cannot control for; it is usually the most important part.",
    ],
    explanation: [
      "A metric is a sum of behaviour from many causes. Term dates, festivals, weather, a mention somewhere, a campaign, a competitor's outage — each moves numbers without anyone touching the design. Before attributing a change to your work, listing what else was happening is the minimum honest step, and it frequently produces a better explanation than the one you were hoping for.",
      "Mixing new and returning people is the commonest hidden confound in a product metric. New people are learning; returning people are executing. A change that helps beginners and slows experts can leave the combined number flat, which is the shape most likely to be reported as no effect when in fact there were two.",
      "A cohort is the practical response: take the people who arrived in one week and follow them, then compare with the people who arrived in another. It does not control for everything, and it removes the largest and most common distortion, which is that the mix of people changed rather than their behaviour.",
      "The limitations paragraph is the part that matters most here. Even a cohort comparison at your scale cannot separate a design change from a concurrent campaign, and saying so is what keeps the analysis useful rather than persuasive.",
    ],
    misconception:
      "“The number went up after we shipped, so the change worked.” Something else also happened in that period, always. Naming the alternatives is not pedantry; it is the difference between a finding and a coincidence you have committed to.",
    example:
      "The synthetic funnel was extended over eight weeks. Completions rose in week five, when the design shipped — and also when a local festival ended and a provider's promotion ran. Three non-design explanations were listed. The comparison was reworked as a cohort: people arriving in week two versus week six, followed for their first fourteen days, which removed the effect of the changing mix of new and returning visitors. The write-up stated plainly that the promotion could not be separated, that the numbers were synthetic, and that the exercise demonstrates the method rather than a result.",
    freeToolPath:
      "A spreadsheet with your synthetic counts split by arrival week. No analytics tool is required.",
    outputs: [
      "A metric over time with non-design explanations listed",
      "A cohort comparison replacing a before-and-after one",
      "A statement of what the cohort does and does not control for",
      "One explanation you cannot rule out, named",
    ],
    steps: [
      {
        minutes: 25,
        title: "Extend the metric over time",
        instructions: [
          "Plot one metric across at least eight periods, labelled synthetic.",
          "Mark when your design change would have shipped.",
        ],
      },
      {
        minutes: 30,
        title: "List the other causes",
        instructions: [
          "List everything else that could move the number in that period.",
          "Include seasonality, campaigns, holidays and external events.",
        ],
      },
      {
        minutes: 30,
        title: "Build a cohort",
        instructions: [
          "Split people by the period they arrived.",
          "Follow each group for the same length of time.",
          "Compare like with like rather than period totals.",
        ],
      },
      {
        minutes: 20,
        title: "State the controls",
        instructions: [
          "Write what the cohort controls for.",
          "Write what it does not, especially concurrent changes.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Name the explanation you cannot rule out.",
          "Save the chart, the cohort and the limitations.",
        ],
      },
    ],
    check: [
      {
        question: "Why list non-design explanations first?",
        answer:
          "Because they are usually present and often larger. Attributing a movement to your work without ruling them out is how a coincidence becomes a commitment.",
      },
      {
        question: "What does mixing new and returning people hide?",
        answer:
          "Two opposite effects cancelling: a change that helps beginners and slows experts can leave the combined number flat and be reported as no effect.",
      },
      {
        question: "What does a cohort not control for?",
        answer:
          "Anything happening to everyone at the same time — a campaign, a season, an outage. Saying so is what keeps the comparison honest.",
      },
    ],
    rubric: [
      "Non-design explanations are listed for the movement",
      "A cohort comparison replaces the period comparison",
      "What the cohort controls for is stated",
      "An unrulable-out explanation is named",
    ],
    criteria: [
      {
        criterion: "Non-design explanations are listed for the movement",
        evidence:
          "A list of concurrent causes covering seasonality, promotion and external events.",
        levels: [
          "Change attributed to the design.",
          "One or two alternatives noted.",
          "A list covering the usual categories.",
          "As adequate, and one alternative is judged more likely than the design change.",
        ],
        remediation:
          "Write everything that happened in that period that could affect the number, before writing any conclusion.",
        recheck: "The explanation list.",
      },
      {
        criterion: "A cohort comparison replaces the period comparison",
        evidence:
          "Groups defined by arrival period and followed for equal durations.",
        levels: [
          "Period totals compared.",
          "Cohorts defined but followed for unequal periods.",
          "Equal-length follow-up for defined cohorts.",
          "As adequate, and new and returning people are separated explicitly.",
        ],
        remediation:
          "Split by arrival week and give each group the same follow-up window.",
        recheck: "The cohort comparison.",
      },
      {
        criterion: "What the cohort controls for is stated",
        evidence:
          "A written statement of what the method removes and what it leaves.",
        levels: [
          "Not stated.",
          "Controls claimed without limits.",
          "Both stated plainly.",
          "As adequate, and it names which uncontrolled factor would most change the reading.",
        ],
        remediation:
          "Write one sentence on what changed between groups other than the design.",
        recheck: "The controls statement.",
      },
      {
        criterion: "An unrulable-out explanation is named",
        evidence:
          "One alternative explicitly named as unresolvable with this data.",
        levels: [
          "None named.",
          "Named vaguely.",
          "Named specifically with why it cannot be separated.",
          "As adequate, and the write-up says what data would separate it.",
        ],
        remediation:
          "Choose the strongest alternative and write why your data cannot rule it out.",
        recheck: "The named explanation.",
      },
    ],
    repairs: [
      "If the movement is attributed to design, list the concurrent causes.",
      "If periods are compared, rebuild as cohorts with equal windows.",
      "If controls are claimed, state what is not controlled.",
      "If nothing is unresolved, you have probably not looked hard enough.",
    ],
    portfolio:
      "A cohort analysis with an unresolvable alternative named is a compact demonstration that you will not overclaim from a chart.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section:
          "Interpreting performance data over time and the caution it requires.",
        purpose:
          "Supports reading movement as multi-causal rather than attributable.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for services with real longitudinal data; your counts are synthetic and must be labelled.",
        fallbackId: "R07",
      },
      {
        ...intervals,
        section: "How sample size affects the reliability of a difference.",
        purpose:
          "Prevents reading a small cohort difference as a real effect.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. No formulas; use a published one and show inputs if you quantify anything.",
        fallbackId: "R45",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l09-v1",
    module: "m15",
    week: 15,
    day: 9,
    level: 5,
    areas: [14],
    guided: true,
    title: "Presenting numbers without misleading anyone",
    objective:
      "Present one analysis to a stakeholder in a page or three slides, with the uncertainty visible, and record which part they remembered afterwards.",
    bringForward: "Your funnel, cohort work and paired findings.",
    prerequisite: "Your analysis and its limitations.",
    why: "The presentation is where careful analysis usually becomes an overclaim, because a clean chart is more persuasive than a caveat.",
    teach: [
      "Lead with the decision the analysis supports, not the method.",
      "Put the uncertainty in the chart, not only in the notes.",
      "Say what would change your conclusion.",
      "Never show a number without its denominator and period.",
      "Expect the chart to travel alone; design it to survive that.",
    ],
    explanation: [
      "A presentation is a design problem with an honesty constraint. The decision goes first because that is what the audience needs; the method goes last because it explains how much weight the decision can bear. Reversing them produces the familiar deck where the recommendation appears on slide fourteen and is remembered without its conditions.",
      "Uncertainty must be visible in the object people look at. An interval drawn on the chart, a sample size in the subtitle, a note that counts are synthetic — all of these survive a screenshot. A caveat spoken aloud or written in a footnote does not, and the screenshot is what gets forwarded.",
      "Saying what would change your conclusion is the strongest available signal that the analysis is honest. It also protects you: when the number moves next quarter, you have already written what that would mean rather than defending a position you took from weaker evidence.",
      "Assume the chart travels alone. It will be pasted into a message, shown in another meeting, and remembered as a fact. Everything the reader needs to interpret it correctly — denominator, period, sample, synthetic label — has to be on the image itself.",
    ],
    misconception:
      "“I explained the caveats when I presented it.” The caveats stayed in the room; the chart went everywhere. If a limitation matters, it belongs in the picture.",
    example:
      "The analysis was presented in three slides. First: the decision — fix the held-place message before touching payment, because that is where the evidence points. Second: the evidence, with the funnel chart labelled synthetic, the sample of the qualitative work stated on the slide, and the interval shown on the one rate that appeared. Third: what would change the conclusion — if duplicate payments did not fall over four weeks, the cause is elsewhere. Afterwards, the person remembered the decision and the phrase “two of three”, which was the intended pair; nobody quoted a percentage, because none was shown.",
    freeToolPath:
      "A page of text or three slides in any free editor, with a hand-drawn or spreadsheet chart. Nothing here requires a presentation platform.",
    outputs: [
      "A presentation of at most three slides or one page",
      "Uncertainty shown in the chart itself",
      "A stated condition that would change the conclusion",
      "A note of what the audience remembered",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the decision first",
        instructions: [
          "State the decision the analysis supports in one sentence.",
          "Put it at the top, before any method.",
        ],
      },
      {
        minutes: 30,
        title: "Build the chart honestly",
        instructions: [
          "Follow the assigned chart conventions.",
          "Put the sample, period and any synthetic label on the chart.",
          "Show the interval where a rate appears.",
        ],
      },
      {
        minutes: 25,
        title: "Write the change condition",
        instructions: [
          "State what result would change your conclusion.",
          "Say when you would look.",
        ],
      },
      {
        minutes: 25,
        title: "Present it",
        instructions: [
          "Present to someone who was not involved.",
          "Do not narrate the caveats; let the material carry them.",
        ],
      },
      {
        minutes: 15,
        title: "Check what survived",
        instructions: [
          "Ask afterwards what they took away.",
          "Record any misreading and fix the material rather than explaining again.",
        ],
      },
    ],
    check: [
      {
        question: "Why does uncertainty belong in the chart?",
        answer:
          "Because the chart travels alone. Spoken caveats stay in the room and the image is what gets forwarded and remembered.",
      },
      {
        question: "Why lead with the decision?",
        answer:
          "Because it is what the audience needs. Method-first presentations bury the recommendation and it gets remembered without its conditions.",
      },
      {
        question: "What does the change condition protect?",
        answer:
          "Your credibility and your future flexibility: you have already said what would make you revise, rather than defending a position taken from weak evidence.",
      },
    ],
    rubric: [
      "The decision comes first and fits a sentence",
      "Sample, period and uncertainty are on the chart",
      "A condition that would change the conclusion is stated",
      "What the audience remembered was checked and acted on",
    ],
    criteria: [
      {
        criterion: "The decision comes first and fits a sentence",
        evidence:
          "A one-sentence decision at the start, before any method.",
        levels: [
          "Method first.",
          "Decision present but late.",
          "Decision first, in one sentence.",
          "As adequate, and it names who has to act.",
        ],
        remediation:
          "Move your recommendation to the top and cut everything before it.",
        recheck: "The opening.",
      },
      {
        criterion: "Sample, period and uncertainty are on the chart",
        evidence:
          "A chart carrying its own sample, period, synthetic label and interval where relevant.",
        levels: [
          "A bare chart.",
          "Some context in the notes.",
          "All context on the image itself.",
          "As adequate, and the chart follows the assigned axis and labelling conventions.",
        ],
        remediation:
          "Add the sample and period into the chart's subtitle, where a screenshot keeps them.",
        recheck: "The chart.",
      },
      {
        criterion:
          "A condition that would change the conclusion is stated",
        evidence:
          "A written condition with a time to look.",
        levels: [
          "No condition.",
          "A condition without a period.",
          "Both stated.",
          "As adequate, and the condition is one that could realistically occur.",
        ],
        remediation:
          "Write what result would make you revise this, and when you would check.",
        recheck: "The change condition.",
      },
      {
        criterion:
          "What the audience remembered was checked and acted on",
        evidence:
          "A record of what they took away and a change to the material where it misled.",
        levels: [
          "Not checked.",
          "Checked without acting.",
          "Checked and the material corrected.",
          "As adequate, and a misreading is traced to a specific presentation choice.",
        ],
        remediation:
          "Ask someone what they took from it a day later, and fix whatever they got wrong.",
        recheck: "The takeaway record.",
      },
    ],
    repairs: [
      "If method comes first, move the decision to the top.",
      "If context is in the notes, put it on the chart.",
      "If nothing would change your mind, the conclusion is not evidence-based.",
      "If a misreading occurred, change the material rather than explaining again.",
    ],
    portfolio:
      "A three-slide analysis whose chart carries its own limits is a good example of communicating uncertainty without becoming unreadable.",
    resource: charts,
    resources: [
      {
        ...charts,
        section:
          "Axes, direct labelling, colour contrast, alternative text and publishing the data.",
        purpose:
          "Supplies the conventions that keep the presented chart honest.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 19 May 2022. Excludes interactive dashboards; the alternative-text requirement applies to your slides too.",
        fallbackId: "R29",
      },
      {
        ...measuring,
        section: "Reporting performance honestly.",
        purpose:
          "Frames the presentation as accountability rather than persuasion.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government publishing context; the discipline transfers, the obligation does not.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l10-v1",
    module: "m15",
    week: 15,
    day: 10,
    level: 5,
    areas: [14],
    guided: true,
    title: "When not to measure",
    objective:
      "Identify two decisions in your work that should not wait for data, and write what you would do instead and why that is defensible.",
    bringForward: "Your metric tree, open questions and delivery backlog.",
    prerequisite: "Your metric tree and current decisions.",
    why: "Measurement is expensive and slow. Some decisions are cheaper to make and reverse than to measure, and knowing which is a professional skill.",
    teach: [
      "Compare the cost of measuring with the cost of being wrong.",
      "Reversible, low-cost decisions rarely justify measurement.",
      "Ethical limits exist: some things should not be measured on people.",
      "Some questions are answerable by asking three people this afternoon.",
      "Waiting for data is a decision with its own cost.",
    ],
    explanation: [
      "The comparison is between two costs: what it would take to measure, and what being wrong would cost. A reversible wording change costs an hour to make and an hour to undo; measuring it properly costs weeks and traffic you do not have. Making it, watching, and reversing if needed is not sloppiness — it is the cheaper path with the same eventual accuracy.",
      "Irreversibility changes the calculation. A decision that is expensive to unmake — a pricing change, a data-collection choice, anything affecting people's money — justifies more evidence, because the cost of being wrong is high and the correction is slow.",
      "Some measurement is not acceptable regardless of cost. Testing which wording extracts more personal data, or which pattern makes cancellation hardest, are experiments with results — and running them is a choice about who you are working for. Recognising those and refusing them is part of this module.",
      "Delay has a cost that is rarely counted. Waiting a month for evidence means a month of the current design's problems continuing, and that cost belongs in the comparison alongside the risk of acting without data.",
    ],
    misconception:
      "“We should be data-driven.” Data-informed decisions are good; waiting for data on decisions that are cheap to reverse is expensive theatre, and it usually means the current problem continues while everyone feels rigorous.",
    example:
      "Two decisions were identified. First: the wording of the held-place message. Cheap to change, cheap to reverse, no traffic to test it with — the decision was to write the clearest version, ship it, and ask three people the following week. Second: whether to shorten the booking form by removing a field. This affects data the provider relies on, so removal is not cheaply reversible; the decision was to ask the provider what the field is used for before touching it. One measurement was refused outright: a proposal to test which cancellation flow produced fewer cancellations, which would have been a test of how well the flow obstructs people.",
    freeToolPath:
      "Written reasoning. This lesson is judgement, not tooling.",
    outputs: [
      "Two decisions identified as not worth measuring, with reasoning",
      "The cost of measuring compared with the cost of being wrong",
      "What you will do instead, including how you would notice a mistake",
      "One measurement refused on ethical grounds, with the reason",
    ],
    steps: [
      {
        minutes: 25,
        title: "List open decisions",
        instructions: [
          "List decisions currently waiting for evidence.",
          "For each, note how reversible it is.",
        ],
      },
      {
        minutes: 30,
        title: "Compare the costs",
        instructions: [
          "Estimate the cost of measuring: time, traffic, delay.",
          "Estimate the cost of being wrong, including how long the error would persist.",
        ],
      },
      {
        minutes: 25,
        title: "Decide and plan the alternative",
        instructions: [
          "Choose two decisions to make without measurement.",
          "Write what you will do instead and how you would notice a mistake.",
        ],
      },
      {
        minutes: 25,
        title: "Find the refusal",
        instructions: [
          "Identify a measurement that should not be run at all.",
          "Write why, and what you would say if asked to run it.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Record the reasoning so the decisions can be revisited.",
          "Save the comparisons and the refusal.",
        ],
      },
    ],
    check: [
      {
        question: "What decides whether to measure?",
        answer:
          "The cost of measuring against the cost of being wrong, including how long the error would persist and how easily it could be reversed.",
      },
      {
        question: "What raises the bar for evidence?",
        answer:
          "Irreversibility and stakes: anything affecting money, data collection or something expensive to unmake justifies more before acting.",
      },
      {
        question: "When should a measurement be refused?",
        answer:
          "When the result would be used against the people being measured — optimising obstruction, or extracting data — regardless of how cheap the test is.",
      },
    ],
    rubric: [
      "Two decisions are identified with reversibility assessed",
      "Costs of measuring and of being wrong are both estimated",
      "The alternative includes how a mistake would be noticed",
      "One measurement is refused with a stated reason",
    ],
    criteria: [
      {
        criterion: "Two decisions are identified with reversibility assessed",
        evidence:
          "Two real decisions with a reversibility judgement each.",
        levels: [
          "No decisions identified.",
          "Decisions listed without reversibility.",
          "Two with reversibility assessed.",
          "As adequate, and one is deliberately kept for measurement because it is irreversible.",
        ],
        remediation:
          "List what you are waiting on and ask how hard each would be to undo.",
        recheck: "The decision list.",
      },
      {
        criterion: "Costs of measuring and of being wrong are both estimated",
        evidence:
          "Two estimates per decision, including the cost of delay.",
        levels: [
          "Neither estimated.",
          "One side estimated.",
          "Both, including delay.",
          "As adequate, and the delay cost is expressed in what continues to happen meanwhile.",
        ],
        remediation:
          "Write what a month of waiting costs in the current design's problems.",
        recheck: "The cost comparison.",
      },
      {
        criterion:
          "The alternative includes how a mistake would be noticed",
        evidence:
          "A plan for acting without measurement plus a signal that would reveal an error.",
        levels: [
          "Act-and-hope.",
          "An alternative without a detection signal.",
          "Both, with a time to check.",
          "As adequate, and the signal is something you could realistically observe.",
        ],
        remediation:
          "For each decision write what you would see if it were wrong, and when you would look.",
        recheck: "The alternative plans.",
      },
      {
        criterion: "One measurement is refused with a stated reason",
        evidence:
          "A refusal on ethical grounds with what you would say if asked.",
        levels: [
          "No refusal considered.",
          "A refusal without reasoning.",
          "Refusal with reasoning and a prepared response.",
          "As adequate, and the refusal names who the measurement would have served.",
        ],
        remediation:
          "Ask which experiment you would be uncomfortable explaining to a participant, and write the refusal.",
        recheck: "The refusal.",
      },
    ],
    repairs: [
      "If no decisions are listed, look at what is waiting for evidence.",
      "If only one cost is estimated, add the other, including delay.",
      "If the alternative is act-and-hope, add a detection signal.",
      "If nothing was refused, look for the test that optimises against people.",
    ],
    portfolio:
      "A written refusal to measure something, with the reasoning, is a strong signal of professional judgement and is rarely seen in a portfolio.",
    resource: discovery,
    resources: [
      {
        ...discovery,
        section:
          "Deciding what to do next under uncertainty and what a discovery is trying to establish.",
        purpose:
          "Frames measurement as one option among several for reducing uncertainty.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 18 November 2016. It prefers primary fieldwork and does not discuss experiment economics, which is this lesson's own.",
        fallbackId: "R19",
      },
      {
        ...standard,
        section:
          "The points on iterating and improving frequently and on making sure everyone can use the service.",
        purpose:
          "Supports the ethical refusal with a stated standard rather than only a preference.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government obligations; the ethical reasoning here is the course's own.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l11-v1",
    module: "m15",
    week: 15,
    day: 11,
    level: 5,
    areas: [14],
    guided: true,
    title: "A measurement plan you could actually run",
    objective:
      "Write a measurement plan for your project that uses only what you can obtain, states what each measure supports, and names the questions it leaves unanswered.",
    bringForward: "Your metric tree, instrumentation plan and refusals.",
    prerequisite: "Your metric tree and instrumentation decisions.",
    why: "A plan that assumes analytics you do not have is a wish. A plan built from counts, records and conversations is a thing you can start on Monday.",
    teach: [
      "Build from what you can obtain: provider records, manual counts, conversations.",
      "State per measure what claim it supports and what it does not.",
      "Set a review date, or the plan becomes a document.",
      "Keep it small: three measures you collect beat ten you intend to.",
      "Name the questions that stay unanswered.",
    ],
    explanation: [
      "The plan has to be built from available material. A small provider has records: bookings, cancellations, refunds, support messages. You can count things by hand for a month. You can talk to five people. None of that is a dashboard, and together they answer more than most dashboards do, because each was chosen for a question.",
      "Each measure needs its claim attached. “Refund requests per hundred bookings, from the provider's records, monthly” supports a statement about refunds and nothing about satisfaction, and writing that down when you choose the measure prevents it being stretched later.",
      "Small plans get executed. Three measures collected consistently for three months are worth more than a plan of ten that lapses in week two, and the discipline of choosing three forces you to decide which questions actually matter.",
      "The unanswered list is the honest counterpart. State what this plan cannot tell you — anything about people who never arrive, anything about why, anything at population scale — so that when someone asks, the answer is a recorded limitation rather than an improvised estimate.",
    ],
    misconception:
      "“Without analytics we cannot measure anything.” You can count what a small business already records, count things by hand, and ask people. What you cannot do is claim precision or scale, and saying so is what makes the rest usable.",
    example:
      "The plan had three measures, each with a claim and a limit. Duplicate payments per hundred bookings, from the provider's records, monthly — supports a statement about payment confusion, not about its cause. Cancellations within 24 hours of booking, monthly — supports a statement about commitment confidence, not about satisfaction. Five conversations a quarter with recent bookers — supports mechanisms, not prevalence. Review date set. Unanswered: anything about people who never reached the site, anything about how the numbers compare with similar providers, and anything at population scale.",
    freeToolPath:
      "A written plan and a spreadsheet. The provider's own records and a handful of conversations are the whole data infrastructure.",
    outputs: [
      "Three measures obtainable with what you have",
      "A claim and a limit per measure",
      "A review date and an owner",
      "A list of questions the plan cannot answer",
    ],
    steps: [
      {
        minutes: 25,
        title: "Inventory what exists",
        instructions: [
          "List records the product or provider already keeps.",
          "List what you could count by hand and who you could ask.",
        ],
      },
      {
        minutes: 30,
        title: "Choose three measures",
        instructions: [
          "Choose three that answer nodes in your metric tree.",
          "Prefer measures you can obtain without new tooling.",
        ],
      },
      {
        minutes: 25,
        title: "Attach claims and limits",
        instructions: [
          "For each measure write what it supports and what it does not.",
          "Include the sample or source in the statement.",
        ],
      },
      {
        minutes: 25,
        title: "Set the review",
        instructions: [
          "Set a date and an owner for reviewing the measures.",
          "Decide what would make you change or drop one.",
        ],
      },
      {
        minutes: 15,
        title: "Write the unanswered list",
        instructions: [
          "List the questions this plan leaves open.",
          "Save the plan with its limits.",
        ],
      },
    ],
    check: [
      {
        question: "What can you measure without analytics?",
        answer:
          "Whatever the business already records, whatever you can count by hand, and whatever people will tell you. That is enough for real questions and not enough for claims about scale.",
      },
      {
        question: "Why only three measures?",
        answer:
          "Because three collected consistently beat ten intended. Choosing three forces the decision about which questions actually matter.",
      },
      {
        question: "Why write the unanswered list?",
        answer:
          "So that a question outside the plan gets a recorded limitation rather than an improvised estimate.",
      },
    ],
    rubric: [
      "Measures are obtainable with existing records or effort",
      "Each carries a claim and a limit",
      "A review date and owner exist",
      "Unanswered questions are listed",
    ],
    criteria: [
      {
        criterion: "Measures are obtainable with existing records or effort",
        evidence:
          "Three measures with their source named and no new tooling assumed.",
        levels: [
          "Measures assume analytics you do not have.",
          "Mixed, with one unobtainable measure.",
          "All three obtainable with named sources.",
          "As adequate, and at least one comes from records the provider already keeps.",
        ],
        remediation:
          "Replace any measure needing tooling with one you could collect this month.",
        recheck: "The measure list.",
      },
      {
        criterion: "Each carries a claim and a limit",
        evidence:
          "A supported claim and an excluded claim per measure.",
        levels: [
          "Neither stated.",
          "Claims stated without limits.",
          "Both for every measure.",
          "As adequate, and the limits name the claim someone will try to make from it.",
        ],
        remediation:
          "For each measure write the sentence it supports and the sentence it does not.",
        recheck: "The claims and limits.",
      },
      {
        criterion: "A review date and owner exist",
        evidence:
          "A date, a person and a condition for changing a measure.",
        levels: [
          "No review.",
          "A date without an owner.",
          "Date, owner and change condition.",
          "As adequate, and the review is soon enough to correct a bad measure.",
        ],
        remediation:
          "Set a date within three months and name who checks.",
        recheck: "The review plan.",
      },
      {
        criterion: "Unanswered questions are listed",
        evidence:
          "A list of what the plan cannot answer, including scale and cause.",
        levels: [
          "Not listed.",
          "A general caveat.",
          "Specific unanswered questions listed.",
          "As adequate, and one names what it would take to answer it.",
        ],
        remediation:
          "Write the questions people will ask that these three measures cannot address.",
        recheck: "The unanswered list.",
      },
    ],
    repairs: [
      "If a measure needs tooling, replace it with one you can obtain.",
      "If limits are missing, write what each measure does not support.",
      "If there is no review, set a date and an owner.",
      "If nothing is unanswered, the list is incomplete.",
    ],
    portfolio:
      "A measurement plan built from a small business's real records is more impressive than a dashboard mockup, because it could actually run.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section:
          "Choosing measures, collecting them and reviewing them.",
        purpose: "Supplies the structure of a plan that is maintained rather than written once.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It assumes a service with real traffic and published data; scale the practice down to counts and conversations.",
        fallbackId: "R07",
      },
      {
        ...analyse,
        section: "Turning small evidence into findings.",
        purpose:
          "Supports the conversational measures with a method for using them.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for research sessions; the discipline transfers to periodic conversations.",
        fallbackId: "R08",
      },
    ],
  }),
  withLegacyText({
    id: "m15-l12-v1",
    module: "m15",
    week: 15,
    day: 12,
    level: 5,
    areas: [14],
    guided: true,
    title: "What your numbers cannot say",
    objective:
      "Write the limitations page for all your quantitative work in this module, and rehearse defending one honest conclusion against pressure for a stronger one.",
    bringForward: "Everything quantitative from this module.",
    prerequisite: "Your funnel, cohort, plan and presentations.",
    why: "The pressure to overstate is real and usually polite. Rehearsing the honest answer is what makes it available when you need it.",
    teach: [
      "Collect every limitation into one page you can reuse.",
      "Distinguish synthetic data, small samples and unavailable measures.",
      "Prepare the sentence you will say when asked for a stronger claim.",
      "Offer what you can support instead of what you cannot.",
      "Record where you were tempted; that is where you will slip later.",
    ],
    explanation: [
      "A limitations page is reusable. Written once, it carries into the case study, the portfolio and the interview, and it stops you rewriting caveats under time pressure — which is when they get softened. It also makes the work reviewable: someone can check whether your conclusions stay inside it.",
      "The categories differ and matter. Synthetic data supports method demonstration and nothing else. Small real samples support existence and severity claims, not prevalence. Unavailable measures support nothing at all, and the honest response is to say what would be needed rather than to substitute a proxy quietly.",
      "The pressure conversation is worth rehearsing because it is predictable: someone will ask for a percentage, a projection or a confident yes. The useful reply offers what the evidence supports and names what would be needed for more — which is more helpful than a refusal and more honest than a number.",
      "Recording where you were tempted is the last discipline of this module. The place you wanted to round up, extend a trend, or drop an inconvenient participant is the place you will slip when nobody is watching, and writing it down now is a genuine safeguard.",
    ],
    misconception:
      "“Being rigorous makes me less useful.” Being unreliable makes you less useful. A person who says what the evidence supports, offers the next step, and is right about the limits becomes the person whose numbers are trusted.",
    example:
      "The limitations page listed: all funnel figures synthetic and labelled; the survey at 22 responses through two groups; usability findings from three and then two participants; no analytics and no traffic, so no rate is reportable at population scale; the cohort exercise demonstrating method on synthetic data only. The rehearsed exchange: asked for the percentage improvement, the answer was “I cannot give you one honestly — what I have is that two of three participants could not tell their place was held, and duplicate payments in the provider's records over the next month would tell us whether the change helped. I can have that number in four weeks.” The temptation recorded: wanting to present the synthetic funnel without the label because it looked convincing.",
    freeToolPath:
      "One written page. Rehearsal with another person or aloud to yourself.",
    outputs: [
      "A reusable limitations page covering all this module's work",
      "Categories separated: synthetic, small sample, unavailable",
      "A rehearsed reply to a request for a stronger claim",
      "A recorded temptation, named honestly",
    ],
    steps: [
      {
        minutes: 30,
        title: "Collect the limitations",
        instructions: [
          "Gather every caveat from this module into one page.",
          "Group them by kind rather than by lesson.",
        ],
      },
      {
        minutes: 25,
        title: "Separate the categories",
        instructions: [
          "Mark what is synthetic, what is small-sample and what is unavailable.",
          "State what each category can and cannot support.",
        ],
      },
      {
        minutes: 30,
        title: "Rehearse the pressure",
        instructions: [
          "Write the request you expect for a stronger claim.",
          "Write your reply, offering what you can support and what would be needed.",
          "Say it aloud, or with someone playing the requester.",
        ],
      },
      {
        minutes: 20,
        title: "Record the temptation",
        instructions: [
          "Write where you wanted to overstate during this module.",
          "Note what would have made it easy to do so.",
        ],
      },
      {
        minutes: 15,
        title: "File it",
        instructions: [
          "Store the page where your case study and portfolio can reuse it.",
          "Save the rehearsed reply with it.",
        ],
      },
    ],
    check: [
      {
        question: "What can synthetic data support?",
        answer:
          "A demonstration of method and nothing else. Labelled clearly, it is a legitimate teaching and portfolio artefact; unlabelled it is a fabricated result.",
      },
      {
        question: "What is the useful reply to a request for a percentage?",
        answer:
          "What the evidence supports, plus what would be needed for the stronger claim and when you could have it. That is more helpful than a refusal and more honest than a number.",
      },
      {
        question: "Why record where you were tempted?",
        answer:
          "Because that is where you will slip under deadline pressure, and naming it now is a real safeguard rather than a gesture.",
      },
    ],
    rubric: [
      "One page collects every limitation from the module",
      "Synthetic, small-sample and unavailable are separated",
      "A reply to pressure is written and rehearsed",
      "A temptation is recorded honestly",
    ],
    criteria: [
      {
        criterion: "One page collects every limitation from the module",
        evidence:
          "A single reusable page covering all quantitative work here.",
        levels: [
          "Limitations scattered across documents.",
          "A partial collection.",
          "One page covering everything, grouped by kind.",
          "As adequate, and it is written to be pasted into a case study unchanged.",
        ],
        remediation:
          "Go through each lesson's output and copy its limitation into one file.",
        recheck: "The limitations page.",
      },
      {
        criterion:
          "Synthetic, small-sample and unavailable are separated",
        evidence:
          "Three categories with what each supports stated.",
        levels: [
          "All caveats treated the same.",
          "Two categories distinguished.",
          "All three with their support levels.",
          "As adequate, and the synthetic category names where the label must appear.",
        ],
        remediation:
          "Sort your caveats into the three kinds and write what each can support.",
        recheck: "The categorised page.",
      },
      {
        criterion: "A reply to pressure is written and rehearsed",
        evidence:
          "A written exchange with an offer of what you can support and a timeline.",
        levels: [
          "No preparation.",
          "A refusal without an alternative.",
          "A reply offering what is supportable and what would be needed.",
          "As adequate, and it was rehearsed aloud with someone playing the requester.",
        ],
        remediation:
          "Write the request you fear and the sentence you would want to have ready.",
        recheck: "The rehearsed reply.",
      },
      {
        criterion: "A temptation is recorded honestly",
        evidence:
          "A named moment where you wanted to overstate, with what made it tempting.",
        levels: [
          "None recorded.",
          "A generic acknowledgement.",
          "A specific moment with its conditions.",
          "As adequate, and a safeguard is named for next time.",
        ],
        remediation:
          "Look back through the module for the number you wished were stronger, and write it down.",
        recheck: "The temptation note.",
      },
    ],
    repairs: [
      "If limitations are scattered, collect them into one page.",
      "If categories are merged, separate synthetic from small-sample from unavailable.",
      "If the reply is a refusal, add what you can support and when.",
      "If no temptation is recorded, look again at the numbers you liked most.",
    ],
    portfolio:
      "The limitations page is directly reusable in the case study and is the artefact most likely to make an experienced reviewer trust the rest.",
    resource: intervals,
    resources: [
      {
        ...intervals,
        section: "What uncertainty means for a reported figure.",
        purpose:
          "Grounds the limitations page in the reason small samples cannot carry rates.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. No formulas; the page is about interpretation rather than calculation.",
        fallbackId: "R45",
      },
      {
        ...analyse,
        section: "Separating observations, interpretations and decisions.",
        purpose:
          "Supplies the vocabulary for saying precisely what each claim rests on.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for qualitative sessions; the separation applies to quantitative claims too.",
        fallbackId: "R08",
      },
    ],
  }),
];
