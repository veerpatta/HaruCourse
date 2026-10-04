import { withLegacyText, type Lesson } from "./teaching";
// Module 19 turns project records into case studies and one spoken
// presentation. Lessons 1, 4, 5 and 8 sit early on the core path, straight
// after Project 1, and must work with one project's evidence; the rest extend
// to two case studies on the core path, or three on the full library. It teaches no new design method. Its whole subject is
// the honest translation of evidence into a claim, which is where most
// portfolios quietly stop being true — so every lesson here checks a sentence
// against the artefact that is supposed to support it.
const portfolioProcess = {
  title: "NN/g: UX portfolio",
  id: "R22",
  url: "https://www.nngroup.com/articles/ux-design-portfolios/",
};
const roleDescription = {
  title: "GitLab: Product Designer role",
  id: "R23",
  url: "https://handbook.gitlab.com/job-description-library/product/product-designer/",
};
const sharing = {
  title: "GOV.UK: sharing user research findings",
  id: "R59",
  url: "https://www.gov.uk/service-manual/user-research/sharing-user-research-findings",
};
const privacy = {
  title: "GOV.UK: managing research data and participant privacy",
  id: "R54",
  url: "https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy",
};
const charts = {
  title: "UK Analysis Function: data visualisation charts",
  id: "R63",
  url: "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/",
};
const wcag = {
  title: "W3C: How to Meet WCAG 2.2 (quick reference)",
  id: "R66",
  url: "https://www.w3.org/WAI/WCAG22/quickref/",
};
const a11yIntro = {
  title: "W3C: accessibility introduction",
  id: "R28",
  url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
};
const designLevels = {
  title: "GitLab job families: product design management",
  id: "R48",
  url: "https://handbook.gitlab.com/job-families/product/product-design-management/",
};
export const module19: Lesson[] = [
  withLegacyText({
    id: "m19-l01-v1",
    module: "m19",
    week: 19,
    day: 1,
    level: 6,
    areas: [17],
    guided: true,
    title: "What a portfolio has to do in ninety seconds",
    objective:
      "Establish what a reviewer is trying to find out, and write the claims — up to three — that the evidence you have actually supports. After Project 1 that is one project; later it is two or three.",
    bringForward: "Your project record: Project 1 if you are here early, or every project record you have.",
    prerequisite: "At least one project record with its artefacts.",
    why: "A portfolio built without knowing what question it answers becomes a gallery, and a gallery answers nothing.",
    teach: [
      "A reviewer is deciding whether you can be given real work.",
      "They skim first and read only if the skim earns it.",
      "Decide the claims your work supports before writing anything: up to three, fewer if one project is all you have.",
      "Every claim will be checked against an artefact, and the artefact's evidence tier travels with it.",
      "Beautiful screens without reasoning read as decoration.",
    ],
    explanation: [
      "The reviewer's question is narrow: could this person be handed a real problem and make it better without constant supervision? Everything in the portfolio either helps answer that or takes up space. Knowing the question is what lets you cut.",
      "The first pass is a skim of a minute or two, and it decides whether there is a second pass. That means the top of each case study has to carry the problem, your role and the outcome, because that is all a skim will reach.",
      "Writing your claims first inverts the usual order and prevents the common failure, which is assembling everything you have and hoping a story emerges. Up to three claims — for example that you can turn research into a decision, that you repair work when testing shows it failing, and that you state limits — give every later choice a test. One project can support one or two of them; that is enough to start, and later projects add evidence rather than replacing it.",
      "Every artefact carries its evidence tier, and the claim inherits it: real participant research, a self-pilot (you testing your own work), a simulation (scripted or made-up responses), or supplied practice (material the course gave you). All four are legitimate work. Only the first is research with people, and a claim that rests on practice says so.",
      "Craft still matters, but craft alone reads as decoration in this discipline, because a screen cannot show whether the problem was worth solving. Your visual background is an advantage only when it sits alongside the reasoning.",
    ],
    misconception:
      "“The portfolio should show everything I have done.” It should support a few claims. Work that supports none of them makes the portfolio longer and the claims weaker.",
    example:
      "Written straight after a first project, with one project record: two claims chosen. I turn research into a decision that can be traced, backed by the synthesis page (real participant research, three people); and I test and repair rather than defending the first version, backed by the repair-and-re-test record (two testers). A third candidate — I state what my work does not establish — was held back because the limitations page was still a draft. A fourth, about building interfaces from a system, was dropped because nothing in this project shows it. Later, with the independent project, the held claim gained its artefact and became the third.",
    freeToolPath:
      "Writing only. No portfolio tool, template or subscription is needed at this stage, and choosing one now would be premature.",
    outputs: [
      "A written statement of what a reviewer is deciding",
      "Up to three claims your evidence supports — one project is enough to start",
      "The project, artefact and evidence tier behind each claim",
      "A list of work that supports none of them",
    ],
    steps: [
      {
        minutes: 20,
        title: "Write the reviewer's question",
        instructions: [
          "Write, in one sentence, what a reviewer is deciding about you.",
          "Write what would make them stop reading.",
        ],
      },
      {
        minutes: 30,
        title: "Choose your claims",
        instructions: [
          "List candidate claims your project or projects could support.",
          "Choose up to three, preferring the ones with the strongest artefacts.",
        ],
      },
      {
        minutes: 25,
        title: "Attach the evidence",
        instructions: [
          "For each claim, name the project, the specific artefact and its evidence tier.",
          "Reject any claim whose artefact you cannot point to.",
        ],
      },
      {
        minutes: 20,
        title: "Identify the surplus",
        instructions: [
          "List work that supports none of your claims.",
          "Mark it as excluded rather than deleting it.",
        ],
      },
      {
        minutes: 15,
        title: "Sanity-check the skim",
        instructions: [
          "Ask whether a ninety-second skim would reach every claim.",
          "Save the claims and their evidence.",
        ],
      },
    ],
    check: [
      {
        question: "What is the reviewer actually deciding?",
        answer:
          "Whether you could be handed a real problem and improve it without constant supervision. Everything else in the portfolio is in service of that.",
      },
      {
        question: "Why write the claims before the case studies?",
        answer:
          "Because otherwise you assemble everything you have and hope a story emerges. Claims first give every later choice a test to pass.",
      },
      {
        question: "Why stop at the claims one project can support?",
        answer:
          "Because a claim stretched over thin evidence fails at the first question. One project with two supported claims is a real start; the next project adds to it.",
      },
      {
        question: "Why exclude work rather than include it?",
        answer:
          "Because work supporting none of the claims lengthens the portfolio and dilutes the claims a skim can actually reach.",
      },
    ],
    rubric: [
      "The reviewer's question is stated",
      "Claims are chosen deliberately, within what the evidence supports",
      "Each claim names a specific artefact and its evidence tier",
      "Surplus work is identified and excluded",
    ],
    criteria: [
      {
        criterion: "The reviewer's question is stated",
        evidence: "One sentence naming what a reviewer is deciding.",
        levels: [
          "Not stated.",
          "Stated vaguely as “showing my work”.",
          "Stated as a decision about capability.",
          "As adequate, and it names what would stop them reading.",
        ],
        remediation:
          "Write what a person hiring would need to believe to take the risk.",
        recheck: "The statement.",
      },
      {
        criterion: "Claims are chosen deliberately, within what the evidence supports",
        evidence: "One to three claims, chosen from a longer list — fewer when one project is all you have.",
        levels: [
          "No claims, or an undifferentiated list.",
          "Claims chosen without alternatives considered, or stretched to three on thin evidence.",
          "Up to three chosen from candidates, each supportable now.",
          "As adequate, and the rejected or held-back claims are recorded with reasons.",
        ],
        remediation:
          "List every claim your project or projects could support and keep only the best-evidenced, up to three.",
        recheck: "The claims list.",
      },
      {
        criterion: "Each claim names a specific artefact and its evidence tier",
        evidence: "A project, a named artefact and its tier — real participant research, self-pilot, simulation or supplied practice — behind each claim.",
        levels: [
          "Claims with no evidence attached.",
          "Projects named, artefacts vague, or tiers missing.",
          "Specific artefacts named with their tiers.",
          "As adequate, and at least one candidate claim was dropped for weak evidence.",
        ],
        remediation:
          "For each claim, open the record and name the file that supports it.",
        recheck: "The evidence map.",
      },
      {
        criterion: "Surplus work is identified and excluded",
        evidence: "A list of work supporting none of the claims.",
        levels: [
          "Everything kept.",
          "Some work questioned.",
          "Surplus identified and excluded.",
          "As adequate, and it is kept aside rather than deleted.",
        ],
        remediation:
          "Test each piece of work against your claims and set aside what fails.",
        recheck: "The exclusion list.",
      },
    ],
    repairs: [
      "If the reviewer's question is unstated, write it before continuing.",
      "If claims outnumber three or outrun the evidence, choose by strength of evidence.",
      "If a claim has no artefact, drop it or find the evidence.",
      "If nothing was excluded, test each piece against the claims again.",
    ],
    portfolio:
      "The claims and their evidence map is the plan for the whole module; every later lesson is checked against it.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section:
          "The five steps, and what 204 surveyed hiring professionals said they look for.",
        purpose:
          "Establishes what a portfolio is for before any of it is written.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Written for a US hiring market; the reasoning transfers, the market does not.",
        fallbackId: "R23",
      },
      {
        ...roleDescription,
        section: "Responsibilities and what the hiring process looks at.",
        purpose:
          "Gives one published account of what an employer says it wants.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's published expectations; this is not a representative India hiring study and must not be read as one.",
        fallbackId: "R22",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l02-v1",
    module: "m19",
    week: 19,
    day: 2,
    level: 6,
    areas: [17],
    guided: true,
    title: "Auditing what you actually kept",
    objective:
      "Audit every project record you have — two on the core path, three on the full library — against your claims, and record precisely which evidence exists, which is thin, which is missing, and each item's evidence tier.",
    bringForward: "Your claims and every project record you have.",
    prerequisite: "The claims and evidence map from lesson 1.",
    why: "You can only write case studies from what you kept, and finding the gaps now is cheaper than discovering them mid-sentence.",
    teach: [
      "Audit the records, not your memory of the projects.",
      "Mark each piece of evidence strong, thin or missing, and label its tier: real participant research, self-pilot, simulation or supplied practice.",
      "Missing evidence is a finding, not a reason to embellish.",
      "Some gaps can still be closed; identify those first.",
      "Never reconstruct an artefact and present it as contemporaneous.",
    ],
    explanation: [
      "Memory is generous about your own work. The audit has to be done against the files: open each folder, list what is there, and mark what each item can support. The difference between what you remember doing and what you can show is usually larger than expected and always worth knowing.",
      "Three states are enough. Strong means an artefact a reviewer could read and believe; thin means it exists but is partial or undated; missing means there is nothing. Anything thin or missing constrains what the case study can say. Strength is separate from tier: a strong self-pilot record is still a self-pilot, and a demonstration with made-up records is never evidence of real use.",
      "The temptation at this point is to redraw a flow, rewrite notes more neatly or produce the synthesis you meant to do. Making a missing artefact now and presenting it as part of the project is fabrication, and it is the specific dishonesty this discipline punishes hardest because it is so easy to check.",
      "Some gaps are genuinely closable. If a project's participant is still reachable, a short follow-up conversation is real new evidence, dated today, and can be presented as exactly that. Closing a gap honestly and closing it by invention look similar on the page and are entirely different acts.",
    ],
    misconception:
      "“I will tidy up the artefacts before showing them.” Tidying presentation is fine; producing a document that never existed and dating it to the project is not. The line is whether the evidence existed when you claim it did.",
    example:
      "The audit covered two projects on the core path — Project 1 and the independent project — and produced a table of nineteen artefacts, each with its tier. Strong: two synthesis pages (real participant research), one repair-and-re-test record, one limitations page, one handover package. Thin: Project 1's session notes, which were written two days later and say so, and its undated flow. Labelled by tier: the status-page screenshots are a demonstration with made-up records, never real use. Missing: any accessibility evidence from Project 1. Two gaps were closable — a keyboard pass on Project 1's prototype, run today and labelled with today's date, and a short follow-up with the shop owner. The rest were recorded as permanent limits.",
    freeToolPath: "A table in a text file and the project folders.",
    outputs: [
      "An audit table of every artefact across your projects",
      "Each item marked strong, thin or missing, with its evidence tier",
      "A list of closable gaps with dates",
      "A list of permanent gaps to be stated as limits",
    ],
    steps: [
      {
        minutes: 30,
        title: "Inventory",
        instructions: [
          "Open each project folder and list what exists.",
          "Do not work from memory.",
        ],
      },
      {
        minutes: 25,
        title: "Mark the strength",
        instructions: [
          "Mark each item strong, thin or missing, and label its evidence tier.",
          "Note why anything is thin, including undated or late artefacts.",
        ],
      },
      {
        minutes: 25,
        title: "Test against the claims",
        instructions: [
          "For each of your claims, list the strong evidence available.",
          "Flag any claim that rests only on thin evidence.",
        ],
      },
      {
        minutes: 20,
        title: "Separate closable gaps",
        instructions: [
          "Identify gaps you could close honestly this week.",
          "Plan each one and note that it will carry today's date.",
        ],
      },
      {
        minutes: 20,
        title: "Record the permanent gaps",
        instructions: [
          "List gaps that cannot be closed.",
          "Write how each will be stated in the case study.",
        ],
      },
    ],
    check: [
      {
        question: "Why audit the files rather than your memory?",
        answer:
          "Because memory is generous about your own work, and the gap between what you did and what you can show is usually larger than expected.",
      },
      {
        question: "What separates closing a gap from fabricating one?",
        answer:
          "Whether the evidence existed when you say it did. New work dated today is honest; a document produced now and presented as contemporaneous is not.",
      },
      {
        question: "What happens to a claim resting on thin evidence?",
        answer:
          "It gets weakened to what the evidence supports, replaced by a better-evidenced claim, or supported by honestly dated new work.",
      },
    ],
    rubric: [
      "The audit is drawn from the files",
      "Every artefact is marked strong, thin or missing, with its tier",
      "Claims are tested against available evidence",
      "Closable and permanent gaps are separated",
    ],
    criteria: [
      {
        criterion: "The audit is drawn from the files",
        evidence: "An inventory matching what is actually in the folders.",
        levels: [
          "Written from memory.",
          "Partly checked.",
          "Every item verified in the folder.",
          "As adequate, and items you thought existed but do not are listed.",
        ],
        remediation: "Open every folder and list its contents item by item.",
        recheck: "The inventory.",
      },
      {
        criterion: "Every artefact is marked strong, thin or missing, with its tier",
        evidence: "A three-state mark and an evidence tier on each item, with reasons for thin ones.",
        levels: [
          "Unmarked.",
          "Marked without reasons.",
          "Marked with reasons for thin items.",
          "As adequate, and lateness or missing dates are recorded.",
        ],
        remediation: "Mark each item and say why the thin ones are thin.",
        recheck: "The audit table.",
      },
      {
        criterion: "Claims are tested against available evidence",
        evidence: "Each claim with its strong evidence listed.",
        levels: [
          "Claims untested.",
          "Tested informally.",
          "Each claim mapped to strong evidence.",
          "As adequate, and any claim resting on thin evidence is flagged.",
        ],
        remediation:
          "Go claim by claim and list only the strong items that support it.",
        recheck: "The claim mapping.",
      },
      {
        criterion: "Closable and permanent gaps are separated",
        evidence: "Two lists, with dates planned for the closable ones.",
        levels: [
          "Gaps not identified.",
          "One undifferentiated list.",
          "Separated with plans and dates.",
          "As adequate, and no closable gap will be presented as contemporaneous.",
        ],
        remediation:
          "Split the gaps by whether you can honestly close them this week.",
        recheck: "The gap lists.",
      },
    ],
    repairs: [
      "If the audit came from memory, redo it against the folders.",
      "If items are unmarked, mark them and say why.",
      "If a claim rests on thin evidence, weaken or replace it.",
      "If a gap was closed, date the new work today and say so.",
    ],
    portfolio:
      "The audit table is the boundary of what the portfolio can honestly claim, and keeping it makes every later sentence checkable.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section: "Step 1: taking inventory of every project before choosing.",
        purpose: "Guides the audit toward what a portfolio actually needs.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Assumes professional projects; yours are course and self-directed work, which must be labelled as such.",
        fallbackId: "R23",
      },
      {
        ...sharing,
        section:
          "Structuring findings: headline, essential facts, why it matters, supporting evidence.",
        purpose:
          "Supplies the structure the audit is preparing evidence for.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 24 May 2016. Verified 2026-09-06. It does not cover anonymising what you share, so pair it with R54.",
        fallbackId: "R04",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l03-v1",
    module: "m19",
    week: 19,
    day: 3,
    level: 6,
    areas: [17],
    guided: true,
    title: "Deciding what each case study is for",
    objective:
      "Assign each project — two on the core path, three on the full library — a single job in the portfolio, and write the one-sentence promise each case study makes.",
    bringForward: "Your claims and your audit table.",
    prerequisite: "The audit table and your claims.",
    why: "Case studies that all say the same thing are one case study repeated, and reviewers notice.",
    teach: [
      "Give each case study one job, matched to its strongest evidence.",
      "Write the promise as one sentence a reader could check.",
      "Order them so the strongest is first.",
      "Cover different skills across the case studies, not the same one twice.",
      "Decide the length each deserves; they need not be equal.",
    ],
    explanation: [
      "One job per case study is the discipline that makes two or three feel like a portfolio rather than an archive. If one project has the best research trail and another has the only measurement, those are their jobs, and everything in each is selected to serve it.",
      "The promise sentence is what the case study will demonstrate, written so it could be checked. “Shows that I can turn three conversations into a framed problem and a decision” is checkable; “shows my UX process” is not.",
      "Order matters because the skim is sequential and attention decays. The strongest case study goes first even if it is not the most recent, and the weakest may not belong in the portfolio at all.",
      "Equal length is a mistake beginners make out of fairness. A project with a thin record deserves a shorter, more focused case study, and the shortness itself reads as judgement rather than as a gap.",
    ],
    misconception:
      "“Each case study should show my whole process.” Then every case study shows the same thing and the reader learns one fact about you twice or three times. Give each a job the others do not do.",
    example:
      "On the core path, two case studies. The independent project took the research-to-decision job because its synthesis and framing were strongest and it had the only measurement. Project 1 took the iteration job, built around a repair that failed on the first attempt and worked on the second, kept shorter because its notes were thin. Order: independent project first. Lengths planned at roughly 900 and 600 words. A learner who also did Project 2 gives it a third job, such as craft under constraint, kept short if its records are thin.",
    freeToolPath: "Writing only.",
    outputs: [
      "One job assigned to each case study",
      "A checkable promise sentence for each",
      "An order, with the strongest first",
      "A planned length for each, not necessarily equal",
    ],
    steps: [
      {
        minutes: 25,
        title: "Match jobs to evidence",
        instructions: [
          "For each project, name its strongest evidence from the audit.",
          "Assign a job no other case study will do.",
        ],
      },
      {
        minutes: 25,
        title: "Write the promises",
        instructions: [
          "Write one checkable sentence per case study.",
          "Reject any sentence a reader could not test.",
        ],
      },
      {
        minutes: 20,
        title: "Order them",
        instructions: [
          "Put the strongest first regardless of date.",
          "Decide whether the weakest belongs at all.",
        ],
      },
      {
        minutes: 20,
        title: "Plan lengths",
        instructions: [
          "Assign a length proportional to the evidence.",
          "Keep the thinnest project deliberately short.",
        ],
      },
      {
        minutes: 20,
        title: "Check for repetition",
        instructions: [
          "Read the promises together.",
          "If two overlap, change one job or drop a case study.",
        ],
      },
    ],
    check: [
      {
        question: "What makes a promise sentence usable?",
        answer:
          "That a reader could check it against the case study. “Shows my process” cannot be checked; a specific demonstration can.",
      },
      {
        question: "Why not equal lengths?",
        answer:
          "Because length should follow evidence. A short case study on a thin project reads as judgement; a padded one reads as padding.",
      },
      {
        question: "Why does the strongest go first?",
        answer:
          "Because attention decays through a portfolio, and the first case study decides whether there is a second.",
      },
    ],
    rubric: [
      "Each case study has a distinct job",
      "Promises are single checkable sentences",
      "The order puts the strongest first",
      "Lengths follow the evidence",
    ],
    criteria: [
      {
        criterion: "Each case study has a distinct job",
        evidence: "One job per case study, none duplicated.",
        levels: [
          "Every case study shows the same thing.",
          "Two overlap.",
          "A distinct job for each case study.",
          "As adequate, and each job matches that project's strongest evidence.",
        ],
        remediation:
          "Compare the jobs and reassign until none repeats another.",
        recheck: "The job assignments.",
      },
      {
        criterion: "Promises are single checkable sentences",
        evidence: "One testable sentence per case study.",
        levels: [
          "Vague statements of process.",
          "Specific but untestable.",
          "Checkable against the case study.",
          "As adequate, and each promise names the artefact that proves it.",
        ],
        remediation:
          "Rewrite each promise as something a reader could verify.",
        recheck: "The promises.",
      },
      {
        criterion: "The order puts the strongest first",
        evidence: "A stated order justified by strength, not date.",
        levels: [
          "Chronological by default.",
          "Ordered without reasoning.",
          "Strongest first with reasoning.",
          "As adequate, and the weakest was considered for removal.",
        ],
        remediation: "Rank by evidence strength and reorder.",
        recheck: "The order.",
      },
      {
        criterion: "Lengths follow the evidence",
        evidence: "Planned lengths proportional to what each project can show.",
        levels: [
          "Equal lengths by default.",
          "Unequal without reasoning.",
          "Proportional to evidence.",
          "As adequate, and the shortest is short on purpose.",
        ],
        remediation:
          "Cut the length of any case study whose record is thin.",
        recheck: "The length plan.",
      },
    ],
    repairs: [
      "If two case studies share a job, reassign or drop one.",
      "If a promise is untestable, rewrite it.",
      "If the order is chronological, reorder by strength.",
      "If lengths are equal, make them follow the evidence.",
    ],
    portfolio:
      "The promises are the contract each case study has to keep, and the last lesson checks them again before anything is shared.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section: "Step 2: choosing three to five projects as detailed case studies.",
        purpose: "Supports assigning one job per case study.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
      {
        ...roleDescription,
        section: "The responsibilities a designer is expected to cover.",
        purpose:
          "Helps spread the jobs across different responsibilities.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's expectations; treat it as an example, not as the market.",
        fallbackId: "R22",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l04-v1",
    module: "m19",
    week: 19,
    day: 4,
    level: 6,
    areas: [17],
    guided: true,
    title: "The case study skeleton",
    objective:
      "Write a first, short case study from one project — the editable template supplied — to a fixed argument: problem, evidence, decision, iteration, limits, with every claim traced to an artefact and its evidence tier.",
    bringForward: "Your strongest project — Project 1 if you are here early — and the claims from lesson 1.",
    prerequisite: "One project record and your claims.",
    why: "A structure stops the case study becoming a chronology, which is the form most junior portfolios take and the one reviewers skip.",
    teach: [
      "Five sections: problem, evidence, decision, iteration, limits.",
      "Lead with the outcome and the problem, not with the process.",
      "Every claim names its artefact and that artefact's evidence tier.",
      "Show one decision in depth rather than every decision briefly.",
      "The limits section is not optional.",
    ],
    explanation: [
      "The five sections work because they answer the reviewer's questions in order: what was wrong, how do you know, what did you do about it, what happened when you tested it, and what does this not prove. A chronology answers none of them and asks the reader to do the work.",
      "Leading with problem and outcome respects the skim. The reader who stops after two paragraphs should still know what the project was and what came of it; the reader who continues gets the reasoning.",
      "Tracing claims to artefacts is a mechanical check applied to prose: each assertion either has a file behind it or gets weakened. Doing it while writing is far easier than retrofitting it later. Say each artefact's tier — real participant research, self-pilot, simulation or supplied practice — where the claim is made.",
      "You do not need a portfolio tool. Open the editable case-study template supplied with this lesson (starters/m19/case-study-template.html on the course site), save a copy in your project folder, and edit it in any text editor; the annotated example beside it shows what credible sections look like, and one weak claim with its repair. The template's nine headings hold the five-part argument: problem and evidence in the first four, decision in the fifth and sixth, iteration in the seventh, outcome in the eighth, and limits in the last. Unfinished headings can stay as stated gaps.",
      "Depth over breadth: one decision explained properly — the options, the evidence, the trade-off, the thing you gave up — teaches a reviewer more than eight decisions listed. It is also the part they will ask about in an interview, so choose one you can defend.",
    ],
    misconception:
      "“The case study should follow the order I did the work in.” The work's order was messy and full of dead ends. The reader needs the reasoning, arranged for understanding, with the dead ends kept where they are instructive.",
    example:
      "A first case study from one project, written in the template: problem, in the shop owner's words with his estimate of six to ten progress calls a day, marked as his estimate; evidence, three research participants, what was found, what contradicted, and the exclusions; decision, one framed problem and the not-building list, with the appetite; iteration, the wording repair that failed for one of two re-testers, from a page that was a demonstration with made-up jobs; limits, in short form. Nineteen claims, each with a named artefact and its tier. One claim about the owner's time saved was cut because nothing measured it.",
    freeToolPath: "The supplied single-file HTML template, or a Markdown file, edited in any text editor. No portfolio platform is required.",
    outputs: [
      "One short case study from one project, in the template or five sections",
      "Problem and outcome in the first two paragraphs",
      "One decision explained in depth",
      "A claim-to-artefact trace, with evidence tiers, for the whole piece",
    ],
    steps: [
      {
        minutes: 25,
        title: "Draft the problem",
        instructions: [
          "Open the case-study template and save a copy in your project folder, or start a Markdown file.",
          "Write the problem in the person's words, with a count if you have one, and the outcome in the same opening.",
        ],
      },
      {
        minutes: 30,
        title: "Write the evidence section",
        instructions: [
          "Give participant counts, the key findings and one contradiction.",
          "Include the exclusions, and label the evidence tier.",
        ],
      },
      {
        minutes: 30,
        title: "Write one decision in depth",
        instructions: [
          "Give the options, the evidence, the trade-off and what you gave up.",
          "Choose a decision you can defend under questioning.",
        ],
      },
      {
        minutes: 25,
        title: "Write iteration and limits",
        instructions: [
          "Show a change, its prediction and the re-test result.",
          "Summarise the study and design limits.",
        ],
      },
      {
        minutes: 20,
        title: "Trace the claims",
        instructions: [
          "List every assertion and name its artefact and evidence tier.",
          "Weaken or cut anything unsupported.",
        ],
      },
    ],
    check: [
      {
        question: "Why not tell it in the order it happened?",
        answer:
          "Because the work's order was messy. The reader needs reasoning arranged for understanding, with dead ends kept only where they teach something.",
      },
      {
        question: "Why one decision rather than all of them?",
        answer:
          "Because depth shows judgement and breadth shows activity. It is also what an interviewer will ask about, so it should be one you can defend.",
      },
      {
        question: "What happens to an unsupported claim?",
        answer:
          "It is weakened to what the artefact shows or cut. Doing this while writing is much cheaper than retrofitting it.",
      },
    ],
    rubric: [
      "The five sections are present and in order",
      "Problem and outcome appear in the opening",
      "One decision is explained in depth",
      "Every claim traces to an artefact and its tier",
    ],
    criteria: [
      {
        criterion: "The five sections are present and in order",
        evidence: "Problem, evidence, decision, iteration and limits.",
        levels: [
          "A chronology.",
          "Some sections present.",
          "All five, in order.",
          "As adequate, and each section could be read alone.",
        ],
        remediation: "Restructure the draft into the five sections.",
        recheck: "The structure.",
      },
      {
        criterion: "Problem and outcome appear in the opening",
        evidence: "Both within the first two paragraphs.",
        levels: [
          "Buried after process description.",
          "Problem early, outcome late.",
          "Both in the opening.",
          "As adequate, and a reader stopping there would know what happened.",
        ],
        remediation: "Move the outcome up and cut the process preamble.",
        recheck: "The opening.",
      },
      {
        criterion: "One decision is explained in depth",
        evidence:
          "Options, evidence, trade-off and what was given up.",
        levels: [
          "Decisions listed.",
          "One decision described without alternatives.",
          "One decision with options and trade-off.",
          "As adequate, and it names what was given up and why that was acceptable.",
        ],
        remediation:
          "Pick your strongest decision and write its alternatives and cost.",
        recheck: "The decision section.",
      },
      {
        criterion: "Every claim traces to an artefact and its tier",
        evidence: "A claim list with artefacts and evidence tiers named.",
        levels: [
          "No trace performed.",
          "Traced informally.",
          "Every claim traced.",
          "As adequate, and at least one claim was cut for lack of evidence.",
        ],
        remediation:
          "List the assertions and attach, weaken or cut each one.",
        recheck: "The claim trace.",
      },
    ],
    repairs: [
      "If it reads as a chronology, restructure into five sections.",
      "If the outcome is buried, move it into the opening.",
      "If decisions are listed, expand one and cut the rest.",
      "If claims are untraced, trace them and cut what fails.",
    ],
    portfolio:
      "This is your first case study, written from one project. It becomes the model for the next, and it improves as better evidence arrives.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section:
          "Structuring a findings deck: headline, essential facts, why it matters, supporting evidence.",
        purpose: "Supplies a proven structure for evidence-led writing.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 24 May 2016. Verified 2026-09-06. Written for internal findings rather than a public portfolio; the ordering transfers, the audience differs.",
        fallbackId: "R04",
      },
      {
        ...portfolioProcess,
        section:
          "The case study contents: problem, role, how you reached the solution, effect, concepts not pursued and what you learned.",
        purpose: "Grounds the case study structure in published guidance.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l05-v1",
    module: "m19",
    week: 19,
    day: 5,
    level: 6,
    areas: [17],
    guided: true,
    title: "Stating your role without inflating it",
    objective:
      "Write an accurate role statement for each project, distinguishing self-directed practice from paid or team work, and name every person who contributed.",
    bringForward: "Your project or projects and their records — one is enough if you are here early.",
    prerequisite: "At least one project record.",
    why: "Role inflation is the most commonly detected dishonesty in portfolios, and the easiest to avoid.",
    teach: [
      "Say plainly whether the work was paid, course or self-directed.",
      "Name what you did and what others did.",
      "Credit participants, reviewers and anyone who built something.",
      "“We” without a team is a lie of grammar.",
      "Self-directed work is not weaker; misrepresenting it is.",
    ],
    explanation: [
      "The category comes first: paid client work, employment, course exercise or self-directed practice. Reviewers ask this within the first two questions, and having it already on the page converts a suspicious question into a settled fact.",
      "Naming what others did protects you. If the shop owner kept the tally sheet, if a friend who writes code helped with the timing logic, if a reviewer's critique produced a change, say so. It costs you nothing and its absence, discovered later, costs everything.",
      "The grammatical tell is “we”. Solo projects written in the first person plural read as team projects, and reviewers have learned to probe it. If you were alone, write “I”; if there were two of you, say so and say who did what.",
      "Self-directed work is not a lesser category. A project run alone, with honest limits, demonstrates more initiative than a team project where your contribution was two screens — and so does a course project on supplied practice material, labelled as practice. The only thing that damages either is presenting it as something else.",
    ],
    misconception:
      "“Saying it was a course project will make it count for less.” Saying nothing and being asked is far worse. A labelled self-directed project with real evidence beats an ambiguously framed one every time.",
    example:
      "The repair-shop project: self-directed practice, unpaid, conducted with the owner's agreement. I did the research, synthesis, design, the demonstration build and the testing. The owner arranged access to two customers, kept the tally sheet in both counting weeks and changed how he wrote job slips. A friend who writes software reviewed the HTML and corrected a date-handling bug — credited by role, at their request. Two reviewers critiqued the work; one comment changed the wording. First person singular throughout, checked by searching the draft for “we”, which appeared four times and was wrong each time.",
    freeToolPath: "Writing, plus a search of your own draft.",
    outputs: [
      "A category for each project you show — paid, course or self-directed — with practice material labelled",
      "A statement of what you did and what others did",
      "Contributors credited with permission",
      "A draft checked for false plurals",
    ],
    steps: [
      {
        minutes: 20,
        title: "Categorise",
        instructions: [
          "Label each project paid, employment, course or self-directed.",
          "Put the label near the top of the case study.",
        ],
      },
      {
        minutes: 25,
        title: "Split the work",
        instructions: [
          "List what you did and what anyone else did.",
          "Include participants who arranged access.",
        ],
      },
      {
        minutes: 20,
        title: "Credit contributors",
        instructions: [
          "Ask permission before naming anyone.",
          "Use a role if permission is not given.",
        ],
      },
      {
        minutes: 15,
        title: "Search for false plurals",
        instructions: [
          "Search the drafts for “we”, “our” and “the team”.",
          "Correct each one that has no team behind it.",
        ],
      },
      {
        minutes: 20,
        title: "Read it as a sceptic",
        instructions: [
          "Read each role statement as someone looking for exaggeration.",
          "Weaken anything that would not survive a follow-up question.",
        ],
      },
    ],
    check: [
      {
        question: "Why label the project category?",
        answer:
          "Because a reviewer will ask within two questions, and having it on the page turns a suspicious question into a settled fact.",
      },
      {
        question: "What is wrong with “we” on a solo project?",
        answer:
          "It implies a team that did not exist. Reviewers probe it, and an inflated role discovered late discredits everything else.",
      },
      {
        question: "Does self-directed work count for less?",
        answer:
          "No. Run properly with real participants and honest limits it shows initiative. Only misrepresenting it damages the work.",
      },
    ],
    rubric: [
      "Each project's category is stated near the top",
      "Your contribution and others' are separated",
      "Contributors are credited with permission",
      "The drafts contain no false plurals",
    ],
    criteria: [
      {
        criterion: "Each project's category is stated near the top",
        evidence: "A visible label: paid, employment, course or self-directed.",
        levels: [
          "Unstated.",
          "Stated somewhere in the body.",
          "Stated near the top of each.",
          "As adequate, and it is stated without apology.",
        ],
        remediation: "Add the label to the opening of each case study.",
        recheck: "The labels.",
      },
      {
        criterion: "Your contribution and others' are separated",
        evidence: "An explicit split of who did what.",
        levels: [
          "Undifferentiated.",
          "Your work stated, others' implied.",
          "Both stated explicitly.",
          "As adequate, and it includes people who arranged access.",
        ],
        remediation:
          "List every person who touched the project and what they did.",
        recheck: "The contribution split.",
      },
      {
        criterion: "Contributors are credited with permission",
        evidence: "Names used only with permission, roles otherwise.",
        levels: [
          "Uncredited, or named without asking.",
          "Credited inconsistently.",
          "Credited with permission or by role.",
          "As adequate, and participants stay anonymous by role.",
        ],
        remediation:
          "Ask before naming anyone; use a role where permission is absent.",
        recheck: "The credits.",
      },
      {
        criterion: "The drafts contain no false plurals",
        evidence: "A search showing “we” only where a team existed.",
        levels: [
          "Plural throughout a solo project.",
          "Mixed.",
          "Corrected everywhere.",
          "As adequate, and the search was actually run on the files.",
        ],
        remediation: "Search each draft and correct every unsupported plural.",
        recheck: "The drafts.",
      },
    ],
    repairs: [
      "If a category is missing, add it to the opening.",
      "If contributions are blurred, split them explicitly.",
      "If someone is named without asking, use a role instead.",
      "If “we” appears without a team, correct it.",
    ],
    portfolio:
      "An accurate role statement is what makes every other claim in the case study believable.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section: "How the role is described and what the hiring process asks.",
        purpose:
          "Shows the level of specificity an employer expects about contribution.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's published expectations, not a representative account of hiring in India.",
        fallbackId: "R22",
      },
      {
        ...designLevels,
        section:
          "How responsibility and influence are described across levels.",
        purpose:
          "Provides published language for describing scope without inflating it.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Management levels at one company; use the vocabulary, not the ladder, and do not claim a level.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l06-v1",
    module: "m19",
    week: 19,
    day: 6,
    level: 6,
    areas: [17],
    guided: true,
    title: "Showing research without exposing people",
    objective:
      "Prepare the research material for public display: anonymised, consented for this use, and still specific enough to be evidence.",
    bringForward: "Your research records and consent material.",
    prerequisite: "Research records and the consent given for them.",
    why: "A portfolio is publication, and the consent you took for research does not automatically cover it.",
    teach: [
      "Check what your consent actually permitted; publication is separate.",
      "Anonymise by role, and remove identifying detail from quotations.",
      "Blur or recreate anything that shows a real workplace or person.",
      "Anonymised does not mean vague; keep counts and specifics.",
      "If consent does not cover it, describe rather than show.",
    ],
    explanation: [
      "Consent to take part in research is not consent to appear in a public portfolio, and the distinction is real rather than pedantic. Read what you told participants. If it said the notes would be used for the project, publishing a photograph of their shop goes beyond it, and the remedy is to ask them now.",
      "Anonymising well means removing what identifies while keeping what evidences. “Customer B, collecting a repaired phone, said she had already rung twice” is anonymous and specific. “A user expressed frustration” is anonymous and useless.",
      "Images are the common failure. A photograph of a workshop shows other people's property and possibly other people; a screenshot of a real record shows real names and numbers. Recreate with clearly synthetic data, label it as recreated, and say what was changed.",
      "Where consent does not cover publication and cannot be obtained, describe the evidence rather than showing it. “Five sessions, notes retained privately” is honest and still supports a claim; publishing without cover is a breach whatever it adds. Names removed does not mean anonymous: a job, a street or a turn of phrase can identify somebody to anybody who knows them.",
    ],
    misconception:
      "“It is anonymous, so it is fine.” Anonymity is one requirement. Consent for this use is another, and a photograph of an identifiable place fails both regardless of whether a name appears.",
    example:
      "The consent script said notes would be used for a personal learning project and could be shown in a portfolio, which covered publication for the independent project but not Project 1, where the wording stopped at the project. For Project 1 the research is described rather than shown. In the repair-shop case study, participants appear as the owner, customer A and customer B, and testers as outside testers 1 to 3. Two quotations were trimmed to remove a street name and a phone model that identified an individual. The status-page screenshots needed no recreation — the page only ever held made-up jobs — and carry the label “demonstration with made-up records; never in real use”. A photograph of a real job slip was recreated with invented details and labelled as such.",
    freeToolPath:
      "Text editing and any image editor you already have. Recreation with synthetic data needs no new tool.",
    outputs: [
      "A check of what your consent actually permitted",
      "Anonymised quotations that stay specific",
      "Recreated or blurred images, labelled",
      "A described-not-shown decision where consent falls short",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read your consent",
        instructions: [
          "Read what you actually told each participant.",
          "Mark which projects are covered for publication.",
        ],
      },
      {
        minutes: 25,
        title: "Anonymise the quotations",
        instructions: [
          "Replace names with roles.",
          "Remove identifying details while keeping the specifics.",
        ],
      },
      {
        minutes: 25,
        title: "Handle the images",
        instructions: [
          "Recreate anything showing real data or premises.",
          "Label recreations and say what was changed.",
        ],
      },
      {
        minutes: 20,
        title: "Decide what to describe",
        instructions: [
          "Where consent falls short, describe instead of showing.",
          "Write the sentence that does the describing.",
        ],
      },
      {
        minutes: 15,
        title: "Ask where you can",
        instructions: [
          "Where a participant is reachable, ask for publication consent.",
          "Record the answer and the date.",
        ],
      },
    ],
    check: [
      {
        question: "Does research consent cover a portfolio?",
        answer:
          "Not automatically. Read what you told participants; if it stopped at the project, publication needs a fresh ask or a description instead.",
      },
      {
        question: "What does good anonymisation preserve?",
        answer:
          "The specifics that make it evidence — counts, actions, the concrete situation — while removing what identifies the person.",
      },
      {
        question: "Why recreate a screenshot?",
        answer:
          "Because a real one carries real names and numbers. A recreation with synthetic data, labelled as such, shows the design without exposing anyone.",
      },
    ],
    rubric: [
      "Consent coverage is checked per project",
      "Quotations are anonymous and still specific",
      "Images are recreated or blurred and labelled",
      "Uncovered material is described rather than shown",
    ],
    criteria: [
      {
        criterion: "Consent coverage is checked per project",
        evidence: "A per-project note of what consent permitted.",
        levels: [
          "Not checked.",
          "Assumed from memory.",
          "Checked against the actual wording.",
          "As adequate, and fresh consent was sought where possible.",
        ],
        remediation:
          "Read the consent wording for each project and record what it covers.",
        recheck: "The coverage note.",
      },
      {
        criterion: "Quotations are anonymous and still specific",
        evidence: "Role-labelled quotations retaining concrete detail.",
        levels: [
          "Names or identifying detail present.",
          "Anonymous but vague.",
          "Anonymous and specific.",
          "As adequate, and what was trimmed is noted.",
        ],
        remediation:
          "Trim identifying detail without removing the concrete situation.",
        recheck: "The quotations.",
      },
      {
        criterion: "Images are recreated or blurred and labelled",
        evidence: "No real data or premises shown; recreations labelled.",
        levels: [
          "Real screenshots or photographs used.",
          "Altered without labelling.",
          "Recreated or blurred and labelled.",
          "As adequate, and the label says what was changed.",
        ],
        remediation:
          "Recreate the image with synthetic data and label it plainly.",
        recheck: "The images.",
      },
      {
        criterion: "Uncovered material is described rather than shown",
        evidence: "A description standing in for unpublishable evidence.",
        levels: [
          "Published anyway.",
          "Omitted silently.",
          "Described, with the reason.",
          "As adequate, and the description still supports the claim.",
        ],
        remediation:
          "Write a sentence describing the evidence and why it is not shown.",
        recheck: "The description.",
      },
    ],
    repairs: [
      "If consent is unchecked, read the wording before publishing anything.",
      "If quotations are vague, restore the specifics that do not identify.",
      "If an image shows real data, recreate and label it.",
      "If material is uncovered, describe it instead of showing it.",
    ],
    portfolio:
      "Handling participant material correctly is itself portfolio evidence, and the note explaining your decisions is worth keeping visible.",
    resource: privacy,
    resources: [
      {
        ...privacy,
        section:
          "Treating notes and recordings as personal data, and anonymised extracts.",
        purpose:
          "Governs what may be published and how extracts are anonymised.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 5 November 2018. Verified 2026-09-06. UK GDPR framing only; it does not cover Indian data protection law, which you must check from a primary source.",
        fallbackId: "R53",
      },
      {
        ...sharing,
        section: "Deciding who needs findings and in what form.",
        purpose:
          "Helps decide what to show publicly and what to describe instead.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 24 May 2016. Verified 2026-09-06. It does not cover anonymising what you share, which is why R54 leads here.",
        fallbackId: "R04",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l07-v1",
    module: "m19",
    week: 19,
    day: 7,
    level: 6,
    areas: [17],
    guided: true,
    title: "Showing the work, and what an image cannot prove",
    objective:
      "Choose and caption the images for every case study — two on the core path, three on the full library — so each one carries an argument rather than decorating the page.",
    bringForward: "Your artefacts, sketches, screens and records.",
    prerequisite: "Your case studies in draft.",
    why: "Images are the fastest way to communicate and the easiest way to imply something you have not shown.",
    teach: [
      "Every image needs a reason to be there and a caption that says it.",
      "Before-and-after pairs are the strongest form; use them.",
      "Show rough work; polish everywhere reads as a rebuild.",
      "A screenshot proves a screen existed, not that it worked.",
      "Give every image alternative text that carries the same information.",
    ],
    explanation: [
      "The test for an image is whether the case study loses an argument without it. A flow that shows the failure branches earns its place; a grid of screens because a page looked empty does not. The caption states the argument, so an image whose caption you cannot write is an image to cut.",
      "Before-and-after pairs carry more than any single image because they show change under evidence. Two versions of the status wording with the test result between them demonstrate the whole loop in one glance, which is exactly the claim most portfolios assert in prose and never show.",
      "Rough work belongs in. Paper sketches, the messy synthesis wall, the crossed-out flow — these establish that the polished thing came from somewhere. A portfolio containing only finished screens invites the suspicion that the process described never happened.",
      "The honesty limit on images is that a screenshot shows a state, not a behaviour. It cannot show that the keyboard path worked, that the error recovered, or that anyone succeeded. Where the claim is about behaviour, the evidence is the test record and the caption should say so.",
    ],
    misconception:
      "“More images make the case study more convincing.” Unargued images make it longer. One before-and-after pair with a caption that names the test result does more than twelve screens.",
    example:
      "The repair-shop case study keeps six images: the paper flow with the failure branches; a photograph of the synthesis cards, recreated because the originals had a participant's name; the exception table; the status page before and after the wording repair, captioned with the re-test result including the person who still read it as a promise, and labelled a demonstration with made-up jobs; and the handover card. Twelve other images were cut, including four screens that showed nothing the flow did not. Every caption states an argument, and every image has alternative text written to carry the same information.",
    freeToolPath:
      "A phone camera for paper work and your existing editor for recreations. No stock imagery, mockup generator or paid template is needed.",
    outputs: [
      "A chosen image set with a stated reason for each",
      "At least one before-and-after pair with the test result",
      "Rough work included alongside finished work",
      "Alternative text for every image",
    ],
    steps: [
      {
        minutes: 25,
        title: "Select",
        instructions: [
          "List candidate images and the argument each makes.",
          "Cut any image whose argument you cannot state.",
        ],
      },
      {
        minutes: 25,
        title: "Build the pairs",
        instructions: [
          "Assemble at least one before-and-after pair.",
          "Caption it with the change, the prediction and the result.",
        ],
      },
      {
        minutes: 20,
        title: "Include the rough work",
        instructions: [
          "Add sketches or synthesis material.",
          "Recreate anything that shows participant detail.",
        ],
      },
      {
        minutes: 25,
        title: "Write the captions",
        instructions: [
          "State what each image argues, not what it depicts.",
          "Say where a claim rests on a test record rather than the image.",
        ],
      },
      {
        minutes: 20,
        title: "Write alternative text",
        instructions: [
          "Write alternative text carrying the same information as the image.",
          "Check that a reader who cannot see it still follows the argument.",
        ],
      },
    ],
    check: [
      {
        question: "What is the test for including an image?",
        answer:
          "Whether the case study loses an argument without it. If you cannot write a caption stating the argument, cut the image.",
      },
      {
        question: "Why include rough work?",
        answer:
          "Because only-finished work invites the suspicion that the described process did not happen. Sketches show the polish came from somewhere.",
      },
      {
        question: "What can a screenshot not prove?",
        answer:
          "Behaviour. It shows a state existed, not that anyone succeeded, that recovery worked, or that the keyboard path was usable.",
      },
    ],
    rubric: [
      "Every image has a stated argument",
      "At least one before-and-after pair carries a test result",
      "Rough work appears alongside finished work",
      "Alternative text carries the same information",
    ],
    criteria: [
      {
        criterion: "Every image has a stated argument",
        evidence: "A caption per image naming what it argues.",
        levels: [
          "Uncaptioned or decorative images.",
          "Captions describing the image.",
          "Captions stating an argument.",
          "As adequate, and images without an argument were cut.",
        ],
        remediation:
          "Write the argument for each image and remove the ones that have none.",
        recheck: "The captions.",
      },
      {
        criterion:
          "At least one before-and-after pair carries a test result",
        evidence: "Two versions with the change, prediction and outcome.",
        levels: [
          "No pair.",
          "A pair without the result.",
          "A pair with the result.",
          "As adequate, and the result includes a partial or failed repair.",
        ],
        remediation:
          "Find a repair from your records and build the pair around it.",
        recheck: "The pair.",
      },
      {
        criterion: "Rough work appears alongside finished work",
        evidence: "Sketches or synthesis material in the case studies.",
        levels: [
          "Finished screens only.",
          "One rough artefact.",
          "Rough work in each case study that has it.",
          "As adequate, and participant detail was recreated rather than blurred badly.",
        ],
        remediation: "Photograph the paper work and include it.",
        recheck: "The image set.",
      },
      {
        criterion: "Alternative text carries the same information",
        evidence: "Alternative text per image, tested by reading without it.",
        levels: [
          "Missing or filename text.",
          "Present but uninformative.",
          "Carries the same information.",
          "As adequate, and the argument survives with images removed.",
        ],
        remediation:
          "Rewrite the alternative text so the argument survives without the image.",
        recheck: "The alternative text.",
      },
    ],
    repairs: [
      "If an image has no argument, cut it.",
      "If there is no before-and-after pair, build one from a repair.",
      "If only finished work appears, add the rough artefacts.",
      "If alternative text is missing, write it for every image.",
    ],
    portfolio:
      "A captioned image set where every picture argues something is the difference between a case study and a gallery.",
    resource: charts,
    resources: [
      {
        ...charts,
        section:
          "Direct labelling over legends, contrast, alternative text and publishing the underlying data.",
        purpose:
          "Sets the standard for any chart or diagram shown in a case study.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account; published 19 May 2022. Verified 2026-09-06. It excludes interactive visualisations and dashboards and states its conventions are for government statistics.",
        fallbackId: "R29",
      },
      {
        ...portfolioProcess,
        section:
          "Including sketches, whiteboards and research documentation rather than final screens alone.",
        purpose: "Grounds the choice of what to show and what to omit.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l08-v1",
    module: "m19",
    week: 19,
    day: 8,
    level: 6,
    areas: [17],
    guided: true,
    title: "Writing the outcome when there is no outcome",
    objective:
      "Write an honest outcome section for each case study — starting with one project — using counts where you have them, saying plainly where you have none, and labelling every result's evidence tier.",
    bringForward: "Your measurement records and limitations pages — from one project if you are here early.",
    prerequisite: "The measurement and limits material from at least one project.",
    why: "The outcome section is where portfolios most often stop being true, because it is the section everyone feels they must fill.",
    teach: [
      "Report what you measured, in counts, with the period.",
      "Where nothing was measured, say so in one plain sentence.",
      "Do not convert a small count into a percentage.",
      "Process outcomes are legitimate: a decision changed, a repair worked — labelled with their tier.",
      "Never claim business impact you did not observe.",
    ],
    explanation: [
      "Where you have counts, give them with the period and the conditions, exactly as the measurement lessons required. Eleven progress calls in five working days becoming seven in the next five, after the slip wording changed, with the public holiday named, is a real outcome and reads as one because of the detail rather than despite it.",
      "Where you measured nothing, one plain sentence closes the section: the design was not deployed and no measurement was taken. A reviewer reads that as accuracy. What they read as inaccuracy is a paragraph of hedged language implying an improvement that was never observed.",
      "The percentage temptation is strongest here and should be refused hardest. A rate derived from single-digit counts looks like a business result and is a claim you would have to withdraw the moment anyone asked how many people that was.",
      "Process outcomes count. “A tester who had never heard of the project read the time as a promise, so the wording changed and one of two re-testers still did” is an outcome about the work. It is smaller than a business result and it is true, which is the trade this whole course makes.",
      "Label the tier of every outcome. A demonstration with made-up records has no real-use outcome at all — say so; a self-pilot result is your own walkthrough; a simulation used scripted responses; supplied practice was the course's material. None of these becomes impact by being written up well.",
    ],
    misconception:
      "“Without a measurable result the project looks like a failure.” Without an honest result the whole portfolio looks unreliable. A project with no measurement, plainly stated, costs you one sentence; a fabricated result costs you the interview.",
    example:
      "Written first for one project, straight after Project 1: not deployed; the outcome is the repair loop — two of three testers failed the task before the change, one of three after, on the same task with different people (real participant testing). Later, the repair-shop project: calls about progress went from eleven over five working days to seven over the following five, one of which was a public holiday, after the owner began writing a window on job slips; the status page itself was a demonstration with made-up jobs and was never in real use, which the section says. A project with no measurement of any kind gets one sentence, with the note that its accessibility repair was verified only by my own keyboard check (a self-pilot) and never tested with anyone who uses a screen reader.",
    freeToolPath: "Your existing records and plain writing.",
    outputs: [
      "An outcome section per case study, beginning with one project",
      "Counts with periods and conditions where measured",
      "A plain sentence where nothing was measured",
      "No percentages derived from small counts",
    ],
    steps: [
      {
        minutes: 25,
        title: "Gather what exists",
        instructions: [
          "Collect every measurement from the project or projects you are writing up.",
          "Note the period, the conditions and the evidence tier for each.",
        ],
      },
      {
        minutes: 25,
        title: "Write the measured outcomes",
        instructions: [
          "Give counts with periods.",
          "Name the confounds in the same sentence or the next.",
        ],
      },
      {
        minutes: 20,
        title: "Write the unmeasured ones",
        instructions: [
          "State plainly that nothing was measured.",
          "Give the process outcome instead, if there is one.",
        ],
      },
      {
        minutes: 20,
        title: "Remove the inflation",
        instructions: [
          "Search for percentages, “significantly”, “dramatically” and “improved”.",
          "Replace each with what was actually observed.",
        ],
      },
      {
        minutes: 20,
        title: "Read as a sceptic",
        instructions: [
          "Ask of each sentence: how many people, over what period?",
          "Rewrite anything that cannot answer.",
        ],
      },
    ],
    check: [
      {
        question: "What goes in the outcome section with no measurement?",
        answer:
          "One plain sentence saying nothing was measured, plus the process outcome if there is one. Hedged implication is worse than the plain sentence.",
      },
      {
        question: "Why refuse percentages here?",
        answer:
          "Because a rate from single-digit counts looks like a business result and collapses the moment someone asks how many people it represents.",
      },
      {
        question: "Is a process outcome a real outcome?",
        answer:
          "Yes. A test result that changed a design and a re-test that partly worked is a true outcome about the work, which is what these projects can honestly offer.",
      },
    ],
    rubric: [
      "Measured outcomes are counts with periods and conditions",
      "Unmeasured projects say so plainly",
      "No percentages are derived from small counts",
      "No unobserved business impact is claimed",
    ],
    criteria: [
      {
        criterion:
          "Measured outcomes are counts with periods and conditions",
        evidence: "Counts, periods and confounds stated together.",
        levels: [
          "Vague improvement language.",
          "Counts without periods or conditions.",
          "Counts with both.",
          "As adequate, and a confound is named that weakens the result.",
        ],
        remediation:
          "Restore the underlying counts and add the period and confounds.",
        recheck: "The outcome sections.",
      },
      {
        criterion: "Unmeasured projects say so plainly",
        evidence: "A direct sentence stating no measurement was taken.",
        levels: [
          "Implied improvement.",
          "Hedged admission.",
          "Plain statement.",
          "As adequate, and a process outcome is given instead.",
        ],
        remediation:
          "Replace the hedging with one sentence saying nothing was measured.",
        recheck: "The unmeasured sections.",
      },
      {
        criterion: "No percentages are derived from small counts",
        evidence: "Counts throughout, no rates.",
        levels: [
          "Percentages present.",
          "One rate remaining.",
          "Counts only.",
          "As adequate, and the reason for using counts is stated once.",
        ],
        remediation: "Convert every rate back to the counts behind it.",
        recheck: "The numbers.",
      },
      {
        criterion: "No unobserved business impact is claimed",
        evidence:
          "No revenue, retention or efficiency claim without observation.",
        levels: [
          "Business impact asserted.",
          "Implied through adjectives.",
          "Only observed effects claimed.",
          "As adequate, and what would be needed to establish impact is named.",
        ],
        remediation:
          "Delete any claim you did not observe and say what would establish it.",
        recheck: "The claims.",
      },
    ],
    repairs: [
      "If improvement language appears, replace it with counts.",
      "If a project has no measurement, say so in one sentence.",
      "If a percentage survives, restore the counts.",
      "If business impact is claimed, remove it or name the missing evidence.",
    ],
    portfolio:
      "An honest outcome section is the part of a junior portfolio most likely to be tested in an interview, and the part most likely to fail if invented.",
    resource: charts,
    resources: [
      {
        ...charts,
        section: "Rules for honest axes, gridlines and direct labelling.",
        purpose:
          "Sets the drawing rules for any chart made from these counts.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account; published 19 May 2022. Verified 2026-09-06. It tells you how to draw a chart honestly, not which analysis to run.",
        fallbackId: "R29",
      },
      {
        ...sharing,
        section: "Headline, essential facts and supporting evidence.",
        purpose: "Shapes an outcome statement that can be acted on and checked.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 24 May 2016. Verified 2026-09-06. Internal findings context; a portfolio audience is external and less forgiving.",
        fallbackId: "R04",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l09-v1",
    module: "m19",
    week: 19,
    day: 9,
    level: 6,
    areas: [17],
    guided: true,
    title: "Making the portfolio itself usable",
    objective:
      "Build and check the portfolio as a designed artefact — readable on your own phone without any hosting, navigable by keyboard, available as an accessible PDF, and honest about what you checked.",
    bringForward: "Your case studies — two on the core path, three on the full library — and your accessibility practice.",
    prerequisite: "Your drafted case studies.",
    why: "The portfolio is the one interface a reviewer will definitely use, and it is assessed whether or not you intended it to be.",
    teach: [
      "The portfolio is evidence of your craft before anyone reads a word.",
      "Most reviewers arrive on a phone: check it on your own phone privately, through a PDF or the single file sent to yourself.",
      "Headings, focus order and contrast are the minimum.",
      "Run the checks you can and record what you could not check.",
      "Keep it plain; a heavy site is a slow site.",
    ],
    explanation: [
      "A reviewer forms an opinion from the page before reading the argument. A portfolio with unreadable line lengths, text over images and no visible focus contradicts every claim inside it, and the contradiction is noticed even when it is not articulated.",
      "Phones dominate first contact — a link opened between meetings, on a train, on a slow connection. That means the case study opening has to work in a narrow column, images must not be required to understand the argument, and the whole thing should load without waiting.",
      "You can read it on your own phone without publishing anything. Either print each page to PDF in your browser (Print, then choose Save as PDF as the destination) and send the PDF to yourself through a channel you already use, or send the single HTML file itself and open it from the phone's files, if its browser allows local files. A page that loads images from a separate folder will show them missing on the phone unless the folder travels too, which a PDF avoids. The browser's desktop phone view is emulation: useful for width, and no substitute for holding the phone.",
      "A PDF can also be the version you send to a reviewer. Browser Save as PDF keeps your text as real text, but whether it adds the headings and reading-order tags that screen readers use varies by browser, so open the PDF and check the headings, the reading order and that link text says where it goes. Keep the HTML as the accessible master and treat the PDF as a copy.",
      "The minimum is the accessibility work from Module 11 applied to your own site: a heading structure that makes sense read alone, a visible focus indicator, contrast that holds, alternative text on every image, and a keyboard path through the whole thing. These are the criteria you claim to apply, so failing them here is expensive.",
      "Record what you checked and what you did not, exactly as in the projects. A line saying you ran a keyboard pass and a contrast check but have not tested with a screen reader is more credible than silence, and far more credible than an accessibility badge you cannot support.",
    ],
    misconception:
      "“The portfolio site should demonstrate my visual range.” It should demonstrate that you can make something clear and usable. Range belongs inside the case studies, not in the navigation.",
    example:
      "The portfolio is a single HTML file per case study plus one index, sharing one stylesheet from the design system. Checks run and recorded: heading structure read alone; keyboard path through every link with a visible focus ring; contrast on text and on the focus indicator; alternative text on all nineteen images; the whole site opened on a phone over a mobile connection with images loading last. Not checked, and stated on the about page: no screen-reader testing and no testing with anyone who uses assistive technology.",
    freeToolPath:
      "The supplied single-file template, or your own plain HTML and CSS, opened in a browser; a browser's Save as PDF for the phone check and the PDF copy. A portfolio does not require a builder, a hosting account or a subscription.",
    outputs: [
      "A portfolio that reads on your own phone, checked privately through a PDF or the single file",
      "A heading structure and keyboard path that work",
      "Alternative text and contrast checked",
      "An accessible PDF copy checked for headings, reading order and link text, and a written record of what was and was not checked",
    ],
    steps: [
      {
        minutes: 30,
        title: "Build the pages",
        instructions: [
          "Build an index and one page per case study, from the supplied template or your own HTML.",
          "Use one stylesheet rather than a new visual language on every page.",
        ],
      },
      {
        minutes: 25,
        title: "Check the narrow screen",
        instructions: [
          "Save a case study as PDF or send the single file to yourself, and read it whole on your own phone.",
          "Fix line lengths, image sizes and anything that requires zooming.",
        ],
      },
      {
        minutes: 25,
        title: "Run the accessibility checks",
        instructions: [
          "Read the heading structure alone; tab through every link.",
          "Check contrast on text and on the focus indicator.",
        ],
      },
      {
        minutes: 20,
        title: "Check the images",
        instructions: [
          "Confirm alternative text on every image and that the argument survives with images off.",
          "Save a PDF copy and check its headings, reading order and link text.",
        ],
      },
      {
        minutes: 15,
        title: "Record the checks",
        instructions: [
          "Write what you checked and what you could not.",
          "Put it somewhere a reader can find.",
        ],
      },
    ],
    check: [
      {
        question: "Why does the portfolio's own craft matter so much?",
        answer:
          "Because it is the one interface the reviewer definitely uses, and a page that contradicts your claims undermines them before they are read.",
      },
      {
        question: "Why design for the phone first?",
        answer:
          "Because first contact is usually a link opened on a phone between other things, often on a slow connection.",
      },
      {
        question: "Why record what you did not check?",
        answer:
          "Because it is the same discipline the case studies claim, and an unsupported accessibility claim is worse than an honest gap.",
      },
    ],
    rubric: [
      "The portfolio reads well on a real phone, checked without hosting",
      "Heading structure and keyboard path work",
      "Images have alternative text and contrast holds",
      "Checks performed and skipped are recorded",
    ],
    criteria: [
      {
        criterion: "The portfolio reads well on a real phone, checked without hosting",
        evidence: "A case study read end to end on your own phone, opened from a PDF or the single file sent to yourself.",
        levels: [
          "Requires zooming or horizontal scrolling, or only checked by desktop emulation.",
          "Readable with effort.",
          "Comfortable on a real phone.",
          "As adequate, and it loads usefully before images arrive.",
        ],
        remediation:
          "Fix line length and image sizing, then send it to your phone again and read it there.",
        recheck: "The narrow-screen read.",
      },
      {
        criterion: "Heading structure and keyboard path work",
        evidence:
          "A sensible heading outline and a full keyboard path with visible focus.",
        levels: [
          "Headings decorative, focus invisible.",
          "One of the two works.",
          "Both work.",
          "As adequate, and the heading outline alone conveys the argument.",
        ],
        remediation:
          "Rebuild the headings semantically and restore a visible focus style.",
        recheck: "The outline and keyboard pass.",
      },
      {
        criterion: "Images have alternative text and contrast holds",
        evidence: "Alternative text on all images and checked contrast.",
        levels: [
          "Missing on several.",
          "Mostly present.",
          "All present and contrast checked.",
          "As adequate, and the argument survives with images disabled.",
        ],
        remediation: "Add the missing alternative text and re-check contrast.",
        recheck: "The image and contrast check.",
      },
      {
        criterion: "Checks performed and skipped are recorded",
        evidence: "A visible note of what was and was not tested.",
        levels: [
          "No record, or an unsupported claim.",
          "Checks recorded, gaps omitted.",
          "Both recorded.",
          "As adequate, and it distinguishes self-checks from testing with disabled people.",
        ],
        remediation:
          "Write the list of checks and the list of gaps, and publish it.",
        recheck: "The record.",
      },
    ],
    repairs: [
      "If the phone read fails, fix line length and images first.",
      "If focus is invisible, restore a visible indicator.",
      "If alternative text is missing, add it before publishing.",
      "If an accessibility claim is unsupported, replace it with the check list.",
    ],
    portfolio:
      "The portfolio site is itself a case study in miniature, and the check record on it demonstrates the discipline the case studies describe.",
    resource: wcag,
    resources: [
      {
        ...wcag,
        section:
          "The level A and AA criteria your own pages can actually affect.",
        purpose: "Sets the standard for the portfolio's own accessibility.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A filterable index rather than a course; reading a criterion is not conformance, which only an implemented, tested build can approach.",
        fallbackId: "R41",
      },
      {
        ...a11yIntro,
        section: "Barriers people encounter and why the checks matter.",
        purpose: "Keeps the checks connected to people rather than to a list.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. An introduction; read the text if the video is inaccessible to you.",
        fallbackId: "R14",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l10-v1",
    module: "m19",
    week: 19,
    day: 10,
    level: 6,
    areas: [17],
    guided: true,
    title: "Presenting one case study aloud",
    objective:
      "Prepare and deliver a ten-minute spoken version of your strongest case study, recorded, reviewed and delivered again.",
    bringForward: "Your strongest case study.",
    prerequisite: "One finished case study.",
    why: "You will be asked to walk someone through your work aloud, and reading the page aloud is not the same thing.",
    teach: [
      "Structure it as problem, evidence, decision, iteration, limits.",
      "Ten minutes is roughly five things, not fifteen.",
      "Say the numbers as counts, exactly as you wrote them.",
      "Record yourself; you will hear what you cannot see.",
      "Deliver it twice; the second time is the real one.",
    ],
    explanation: [
      "The spoken version uses the same structure as the written one, because the structure answers the listener's questions in the order they arise. What changes is compression: ten minutes holds about five substantial points, and choosing them is most of the preparation.",
      "Rehearsing against the clock is what stops the common failure, which is spending seven minutes on context and ninety seconds on everything you actually did. If the problem statement takes more than two minutes, it is too long.",
      "Numbers spoken aloud drift upward. “About two thirds of people” is easier to say than “two of three people”, and it is a different claim. Say the counts as written, including the awkward ones.",
      "Recording is uncomfortable and irreplaceable. You will hear the filler, the places you rush, the claim you softened, and the point where you started explaining the interface instead of the decision. Watch it once, note three changes, and deliver again.",
    ],
    misconception:
      "“I will just talk through the slides.” Slides read aloud are slower than reading and less clear than either. Prepare the spoken version as its own artefact with its own five points.",
    example:
      "Ten minutes, five points: the shop owner's problem with the call count; three research participants and the contradiction between speed and certainty; the decision to build a status page and the not-building list; the wording repair, its prediction, and the person who still read it as a promise; and the limits, including that nobody who stopped using the shop was reached. First recording ran fourteen minutes, spent four on context and said “about two thirds” once. Second recording ran ten and a half, opened with the count, and used the exact numbers.",
    freeToolPath:
      "A phone camera or the recorder you already have. No presentation software or meeting subscription is required.",
    outputs: [
      "A five-point spoken structure",
      "A first recording with a timing",
      "Three specific changes identified",
      "A second recording within the time",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose five points",
        instructions: [
          "Write the five things worth ten minutes.",
          "Cut anything that is context rather than evidence or decision.",
        ],
      },
      {
        minutes: 20,
        title: "Prepare the opening",
        instructions: [
          "Open with the problem and a count, in under two minutes.",
          "Say your role and the project category in one sentence.",
        ],
      },
      {
        minutes: 25,
        title: "Record once",
        instructions: [
          "Deliver it without stopping and record it.",
          "Note the total time.",
        ],
      },
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Watch once and note three specific changes.",
          "Check every number you said against what you wrote.",
        ],
      },
      {
        minutes: 20,
        title: "Deliver again",
        instructions: [
          "Deliver the revised version within the time.",
          "Keep both recordings.",
        ],
      },
    ],
    check: [
      {
        question: "How much fits in ten minutes?",
        answer:
          "About five substantial points. Choosing them, rather than compressing everything, is most of the preparation.",
      },
      {
        question: "Why record it?",
        answer:
          "Because you will hear the filler, the rushed section, the softened claim and the drift into describing the interface instead of the decision.",
      },
      {
        question: "Why say counts rather than fractions?",
        answer:
          "Because “about two thirds” is easier to say than “two of three” and is a different, larger claim than your evidence supports.",
      },
    ],
    rubric: [
      "Five points chosen for ten minutes",
      "The opening carries problem, count and role",
      "Numbers spoken match what was written",
      "Two recordings exist with changes between them",
    ],
    criteria: [
      {
        criterion: "Five points chosen for ten minutes",
        evidence: "A written five-point structure.",
        levels: [
          "Everything included.",
          "Reduced but still overfull.",
          "Five points that fit.",
          "As adequate, and the cuts were context rather than evidence.",
        ],
        remediation: "Cut to five points and time it again.",
        recheck: "The structure.",
      },
      {
        criterion: "The opening carries problem, count and role",
        evidence: "An opening under two minutes with all three.",
        levels: [
          "Long context first.",
          "Problem stated, role omitted.",
          "All three, briefly.",
          "As adequate, and a listener stopping there would understand the project.",
        ],
        remediation: "Rewrite the opening and time it.",
        recheck: "The opening.",
      },
      {
        criterion: "Numbers spoken match what was written",
        evidence: "A check of spoken numbers against the case study.",
        levels: [
          "Numbers inflated or rounded up.",
          "One drift.",
          "All match.",
          "As adequate, and the awkward counts were said as they are.",
        ],
        remediation:
          "List the numbers you will say and rehearse them exactly.",
        recheck: "The recording.",
      },
      {
        criterion: "Two recordings exist with changes between them",
        evidence: "Two recordings and three identified changes.",
        levels: [
          "One recording, or none.",
          "Two recordings, no analysis.",
          "Two with three changes identified.",
          "As adequate, and the second is within the time.",
        ],
        remediation: "Watch the first, note three changes, and record again.",
        recheck: "The second recording.",
      },
    ],
    repairs: [
      "If it overruns, cut context rather than evidence.",
      "If the opening is long, rewrite it to problem, count and role.",
      "If a number drifted, rehearse the exact counts.",
      "If there is one recording, review it and record again.",
    ],
    portfolio:
      "A recorded walkthrough is portfolio evidence in its own right and preparation for the conversation that decides the outcome.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section:
          "Show and tells and structuring what you present so it can be acted on.",
        purpose: "Shapes the spoken structure and its ordering.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 24 May 2016. Verified 2026-09-06. Written for internal show and tells; a hiring conversation is a different audience with the same structural needs.",
        fallbackId: "R04",
      },
      {
        ...portfolioProcess,
        section: "Physical artefacts and talking through your process.",
        purpose: "Connects the written case study to the spoken version.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l11-v1",
    module: "m19",
    week: 19,
    day: 11,
    level: 6,
    areas: [17],
    guided: true,
    title: "Answering the questions you would rather avoid",
    objective:
      "Prepare honest answers to the hardest questions your portfolio invites, and practise saying what you do not know.",
    bringForward: "Your case studies, limits and audit table.",
    prerequisite: "Your case studies and the audit table.",
    why: "The questions that decide the outcome are the ones aimed at your weakest evidence, and they are predictable.",
    teach: [
      "List the questions your own limits invite.",
      "Prepare answers that concede accurately rather than deflecting.",
      "“I do not know” is an acceptable answer with a next step attached.",
      "Never invent a participant, a number or an outcome under pressure.",
      "Practise aloud; the wrong answer arrives fastest when unprepared.",
    ],
    explanation: [
      "The hard questions are already written in your limitations pages. If you reached nobody who stopped using the shop, someone will ask what those people think. If nothing was measured on project one, someone will ask how you know it helped. Reading your own limits as a question list takes twenty minutes and removes most of the surprise.",
      "The correct shape of an answer is concession first, then reasoning, then next step. “I did not reach them, which means I cannot say whether the problem looks the same from their side; the smallest thing that would tell me is four conversations with people who left.” That answer is stronger than any defence, because it demonstrates the judgement the question was testing.",
      "Not knowing is allowed. What is not allowed is filling the silence with an invention, and the pressure to do so is real: the question implies you should know, and a plausible sentence is always available. This is the moment the whole course's discipline is actually tested.",
      "Practise aloud, because written answers do not transfer. Say the concession sentence until it arrives without hesitation, since hesitation is what pushes people into the plausible invention.",
    ],
    misconception:
      "“A good answer defends the work.” A good answer tells the truth about the work. Interviewers are testing calibration more than results, and a well-defended overclaim fails that test completely.",
    example:
      "Twelve questions were drawn from the limitations pages, including: what do customers who never came back think; why did the page never go in front of real customers; was the fall in calls just a quiet week; why did you not test with a screen-reader user; and what would you do differently with a month. Each got a written answer conceding first. Two answers were “I do not know”, each with the smallest next step attached. All twelve were practised aloud; the quiet-week question was the one that produced hesitation, so it was rehearsed until the concession came first.",
    freeToolPath: "Your own records, writing and speaking aloud.",
    outputs: [
      "A question list drawn from your own limits",
      "Written answers that concede before reasoning",
      "At least one honest “I do not know” with a next step",
      "The answers practised aloud",
    ],
    steps: [
      {
        minutes: 25,
        title: "Mine your limits",
        instructions: [
          "Turn each limitation into the question it invites.",
          "Add the questions you hope nobody asks.",
        ],
      },
      {
        minutes: 30,
        title: "Write the answers",
        instructions: [
          "Concede first, then reason, then give the next step.",
          "Keep each answer under a minute.",
        ],
      },
      {
        minutes: 20,
        title: "Find the ones you do not know",
        instructions: [
          "Mark the questions you genuinely cannot answer.",
          "Attach the smallest next step to each.",
        ],
      },
      {
        minutes: 25,
        title: "Practise aloud",
        instructions: [
          "Say each answer aloud until the concession comes first.",
          "Note where you hesitate and rehearse those again.",
        ],
      },
      {
        minutes: 15,
        title: "Have someone ask them",
        instructions: [
          "Ask someone to put the questions to you unprompted.",
          "Record any answer that drifted from what you wrote.",
        ],
      },
    ],
    check: [
      {
        question: "Where do the hard questions come from?",
        answer:
          "Your own limitations pages. Reading them as a question list removes most of the surprise in twenty minutes.",
      },
      {
        question: "What shape should an answer take?",
        answer:
          "Concession, then reasoning, then the smallest next step. That demonstrates the judgement the question is testing.",
      },
      {
        question: "What is the real risk under pressure?",
        answer:
          "Filling a silence with a plausible invention. A rehearsed “I do not know, and here is what would tell me” prevents it.",
      },
    ],
    rubric: [
      "Questions are drawn from your own limits",
      "Answers concede before reasoning",
      "At least one honest unknown with a next step",
      "The answers were practised aloud",
    ],
    criteria: [
      {
        criterion: "Questions are drawn from your own limits",
        evidence: "A question list traceable to the limitations pages.",
        levels: [
          "Generic interview questions.",
          "Some drawn from limits.",
          "All drawn from your own limits.",
          "As adequate, and it includes the questions you hoped to avoid.",
        ],
        remediation:
          "Turn each line of the limitations pages into a question.",
        recheck: "The question list.",
      },
      {
        criterion: "Answers concede before reasoning",
        evidence: "Answers whose first clause is the concession.",
        levels: [
          "Defensive answers.",
          "Concession buried mid-answer.",
          "Concession first throughout.",
          "As adequate, and each ends with a next step.",
        ],
        remediation: "Rewrite each answer to lead with what you cannot claim.",
        recheck: "The answers.",
      },
      {
        criterion: "At least one honest unknown with a next step",
        evidence: "A question answered “I do not know” plus an action.",
        levels: [
          "Everything answered confidently.",
          "An unknown admitted without a next step.",
          "Admitted with the smallest next step.",
          "As adequate, and the next step is proportionate and specific.",
        ],
        remediation:
          "Find the question you cannot answer and stop answering it.",
        recheck: "The unknown.",
      },
      {
        criterion: "The answers were practised aloud",
        evidence: "Spoken practice, ideally with someone else asking.",
        levels: [
          "Written only.",
          "Practised alone.",
          "Practised with someone asking unprompted.",
          "As adequate, and any drift from the written answer was recorded.",
        ],
        remediation:
          "Ask someone to put the questions to you and note where you drift.",
        recheck: "The practice notes.",
      },
    ],
    repairs: [
      "If the questions are generic, rebuild them from your limits.",
      "If answers defend, rewrite them to concede first.",
      "If nothing is unknown, you have not found the hard question.",
      "If practice was written only, say the answers aloud to someone.",
    ],
    portfolio:
      "The question list and answers are preparation for the next module, where the same discipline meets employers rather than reviewers.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section: "The hiring process and what each stage looks at.",
        purpose:
          "Shows the kind of scrutiny portfolio claims are put under.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's published process; other employers differ and this is not a study of hiring in India.",
        fallbackId: "R22",
      },
      {
        ...designLevels,
        section: "How design success is described and measured.",
        purpose:
          "Supplies the vocabulary employers use when probing outcomes.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's measures for management roles; they are its own, not a standard.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m19-l12-v1",
    module: "m19",
    week: 19,
    day: 12,
    level: 6,
    areas: [17],
    guided: true,
    title: "Final check and publishing",
    objective:
      "Check the finished portfolio against its promises and every honesty rule this course holds, then share it deliberately: privately as a PDF or files, or — only if you choose — as a published site, checked on the day.",
    bringForward: "Everything from this module.",
    prerequisite: "The complete portfolio and its promises.",
    why: "The last check is the only thing standing between an honest portfolio and one that quietly overclaims.",
    teach: [
      "Check each case study against the promise it made.",
      "Run a claim sweep across the whole portfolio, not per page.",
      "Sharing privately is complete; publishing is optional, and any host is verified on the day like a resource.",
      "Ask one person to read it cold and tell you what it says.",
      "Share or publish deliberately, and record what went where and when.",
    ],
    explanation: [
      "The promise check is mechanical: read the promise, read the case study, and decide whether a stranger would agree it was kept. A promise that is not kept means either the case study changes or the promise does, and the second option is usually right.",
      "Claims travel between pages. A number softened in one case study can appear inflated on the index page, and an about page written last is where unsupported summaries collect. Sweep the whole thing at once, including navigation, headings and the about page.",
      "Publishing is a choice, not a requirement. A PDF or the files sent privately to a reviewer is a complete portfolio. If you do publish, hosting has the same properties as a resource: a cost, an account requirement and terms. Check it against this course's rules — free without a card, no trial that expires into a charge — and record what you verified and when, because the answer changes over time.",
      "One free route, checked on 5 October 2026 against GitHub's own documentation (docs.github.com/en/pages): GitHub Pages. GitHub Free costs nothing, and on it a Pages site must come from a public repository — everything you upload is public, and GitHub states that Pages sites are publicly available on the internet. Steps: create a free account; choose New repository, name it yourusername.github.io, set it to Public and create it; choose Add file, then Upload files, and upload index.html and your other pages; open Settings, then Pages, choose Deploy from a branch under Build and deployment, pick the main branch and the / (root) folder, and Save. GitHub says changes can take up to 10 minutes to publish. To unpublish, delete the repository (Settings, Danger Zone); GitHub notes that deleting a public repository does not delete copies others have forked. Re-check these terms yourself before publishing, and never upload consent records or raw research.",
      "A cold reader is the last useful instrument. Ask someone who does not know the projects to read it and tell you what you can do; the gap between their answer and your claims is the portfolio's actual message, and it is usually not the one you intended.",
    ],
    misconception:
      "“It is finished when it looks finished.” It is finished when the promises are kept, the claims are supported, and a cold reader arrives at the message you intended.",
    example:
      "The check produced eleven changes. One promise was kept as written; one was rewritten, because the second case study promised to show a repair loop and actually showed a single change with no re-test, so the promise now says that. The claim sweep found three unsupported sentences on the index page and one on the about page, all softened, including one that called the demonstration page “launched”. The portfolio went to two reviewers as a PDF; publishing on GitHub Pages was checked against the course's rules on the day and the date recorded, then deferred. A cold reader said the portfolio showed someone who tests things and admits what did not work, which matched two claims of three; the third was strengthened in the index.",
    freeToolPath:
      "The portfolio files, one conversation and a checklist. Sharing a PDF or the files privately needs no account; if a host requires a card or a trial that becomes a charge, choose another route or share the files directly.",
    outputs: [
      "A promise check per case study, with any promise rewritten",
      "A whole-portfolio claim sweep including the index and about pages",
      "A recorded sharing decision — private PDF or files, or a host verified on the day",
      "A cold reader's account of what the portfolio says",
    ],
    steps: [
      {
        minutes: 25,
        title: "Check the promises",
        instructions: [
          "Read each promise, then its case study.",
          "Rewrite the promise or the case study where they disagree.",
        ],
      },
      {
        minutes: 30,
        title: "Sweep the claims",
        instructions: [
          "Read every page including index, about and navigation.",
          "Soften or cut anything the artefacts do not support.",
        ],
      },
      {
        minutes: 20,
        title: "Choose how to share it",
        instructions: [
          "Decide between sharing privately — a PDF or the files — and publishing.",
          "If publishing, check cost, account and public visibility against this course's rules on the day, and record what you verified and the date.",
        ],
      },
      {
        minutes: 25,
        title: "Cold read",
        instructions: [
          "Ask someone unfamiliar to read it and say what you can do.",
          "Compare their answer with your claims.",
        ],
      },
      {
        minutes: 20,
        title: "Share or publish, and record",
        instructions: [
          "Share or publish deliberately and note the date, the place and what was included.",
          "Keep the version you shared.",
        ],
      },
    ],
    check: [
      {
        question: "What happens when a promise is not kept?",
        answer:
          "Either the case study changes or the promise does, and rewriting the promise to match the evidence is usually the right move.",
      },
      {
        question: "Why sweep claims across the whole portfolio?",
        answer:
          "Because index and about pages are written last and collect unsupported summaries, even when each case study is careful.",
      },
      {
        question: "Why treat hosting like a resource?",
        answer:
          "Because it has a cost, an account requirement and terms that change, and on a free plan everything may be public. Verify it on the day and record the date — or share privately instead.",
      },
    ],
    rubric: [
      "Each promise is checked and reconciled",
      "The claim sweep covers every page",
      "The sharing decision is deliberate and recorded",
      "A cold reader's account is compared with the claims",
    ],
    criteria: [
      {
        criterion: "Each promise is checked and reconciled",
        evidence: "A promise-by-promise check with outcomes.",
        levels: [
          "Not checked.",
          "Checked informally.",
          "Checked with disagreements reconciled.",
          "As adequate, and at least one promise was rewritten to match the evidence.",
        ],
        remediation:
          "Read each promise beside its case study and reconcile the two.",
        recheck: "The promise check.",
      },
      {
        criterion: "The claim sweep covers every page",
        evidence:
          "A sweep including index, about and navigation, with changes made.",
        levels: [
          "Case studies only.",
          "Most pages.",
          "Every page swept.",
          "As adequate, and unsupported summaries were found and cut.",
        ],
        remediation: "Read the index and about pages against the artefacts.",
        recheck: "The sweep record.",
      },
      {
        criterion: "The sharing decision is deliberate and recorded",
        evidence: "A note of how the portfolio is shared — privately as a PDF or files, or published — and, if published, a dated check of cost, account and public visibility.",
        levels: [
          "Published without checking, or shared without a record.",
          "Checked without recording.",
          "A private route recorded, or a host verified and dated.",
          "As adequate, and what stays private is listed alongside.",
        ],
        remediation:
          "Write how you are sharing it; if publishing, check the terms today and write down what you found and when.",
        recheck: "The sharing note.",
      },
      {
        criterion:
          "A cold reader's account is compared with the claims",
        evidence:
          "What an unfamiliar reader says the portfolio shows, beside your claims.",
        levels: [
          "No cold read.",
          "Read by someone who knows the projects.",
          "Cold read and compared.",
          "As adequate, and the comparison changed something.",
        ],
        remediation:
          "Ask someone unfamiliar what the portfolio says you can do.",
        recheck: "The comparison.",
      },
    ],
    repairs: [
      "If a promise is unkept, rewrite it to match the evidence.",
      "If the sweep skipped a page, sweep it.",
      "If a host is unverified, check the terms before publishing, or share privately.",
      "If nobody read it cold, find a reader before publishing.",
    ],
    portfolio:
      "This is the portfolio itself: two case studies on the core path or three on the full library, a recorded walkthrough, a prepared question list, and a shared or published version with its date.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section: "Step 5: getting feedback and iterating before sharing.",
        purpose: "Frames the final check and the decision to publish.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context; the finishing discipline transfers.",
        fallbackId: "R23",
      },
      {
        ...privacy,
        section: "Retention, storage and what may be shared.",
        purpose:
          "Final guard on participant material before anything is published.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 5 November 2018. Verified 2026-09-06. UK GDPR framing only; check Indian requirements from a primary source.",
        fallbackId: "R53",
      },
    ],
  }),
];
