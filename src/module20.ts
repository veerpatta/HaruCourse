import { withLegacyText, type Lesson } from "./teaching";
// Module 20 is the career milestone, and it is bounded by something the
// catalog records explicitly: this course holds two dated vacancy captures and
// they are not a hiring study. Nothing here teaches what the Indian market
// wants, what it pays, or what a junior role expects. It teaches the method
// for gathering that evidence, by hand, across many employers, with dates —
// and the rule that vacancies are evidence, not promised opportunities.
const roleDescription = {
  title: "GitLab: Product Designer role",
  id: "R23",
  url: "https://handbook.gitlab.com/job-description-library/product/product-designer/",
};
const designLevels = {
  title: "GitLab job families: product design management",
  id: "R48",
  url: "https://handbook.gitlab.com/job-families/product/product-design-management/",
};
const portfolioProcess = {
  title: "NN/g: UX portfolio",
  id: "R22",
  url: "https://www.nngroup.com/articles/ux-design-portfolios/",
};
const intervals = {
  title: "NN/g: confidence intervals and margins of error",
  id: "R37",
  url: "https://www.nngroup.com/articles/confidence-interval/",
};
const privacy = {
  title: "GOV.UK: managing research data and participant privacy",
  id: "R54",
  url: "https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy",
};
const wcag = {
  title: "W3C: How to Meet WCAG 2.2 (quick reference)",
  id: "R66",
  url: "https://www.w3.org/WAI/WCAG22/quickref/",
};
const shapeUp = {
  title: "Ryan Singer: Shape Up",
  id: "R47",
  url: "https://basecamp.com/shapeup/webbook",
};
export const module20: Lesson[] = [
  withLegacyText({
    id: "m20-l01-v1",
    module: "m20",
    week: 20,
    day: 1,
    level: 6,
    areas: [17],
    guided: true,
    title: "What this module refuses to tell you",
    objective:
      "Understand why this course teaches no conclusions about the hiring market, and set up the evidence method you will run yourself.",
    bringForward: "Your finished portfolio.",
    prerequisite: "A published portfolio.",
    why: "Career advice is the area where confident claims are cheapest to make and most expensive to believe.",
    teach: [
      "This course holds two dated vacancy captures, which is not a study.",
      "No demand, pay, remote eligibility or junior expectation is taught here.",
      "You gather the evidence yourself, dated, from employers' own boards.",
      "Vacancies are evidence of what one employer wrote, not opportunities.",
      "Advice that cannot cite a dated source is opinion.",
    ],
    explanation: [
      "The course's own catalog records what happened when it tried to gather hiring evidence: eight vacancy URLs attempted on one day, one full capture, one partial, six already expired to a board index and one host refusing the request. That failure rate is the most useful thing the attempt produced, because it tells you vacancy evidence decays within weeks and has to be gathered fresh by whoever needs it.",
      "Two captures cannot establish demand, salary, prevalence, remote eligibility or what a junior role expects in India. So this module teaches none of those things. What it teaches is the method: which sources count, what to record, how to compare, and what the resulting sample can and cannot support — the same discipline the research modules applied to participants.",
      "Employers' own boards are the evidence. An aggregator's count of “design jobs in Bengaluru” is a number about the aggregator, mixing duplicates, expired posts and reposts; it is not employer evidence and cannot be cited as such. The rule is the same one you applied to resources: go to the source, record the date, record what it actually says.",
      "A vacancy is evidence that on a stated date an employer published a stated set of expectations. It is not evidence that the role is open, that it will be filled, that the expectations are real rather than aspirational, or that anyone in your position would be considered. Holding that distinction is what stops a career search becoming a series of private conclusions about your own worth.",
    ],
    misconception:
      "“Somebody must know what the market wants.” Many people will tell you confidently. Almost none of them will cite a dated, multi-employer sample, and the ones who can will also tell you how narrow it is.",
    example:
      "The evidence plan: at least twelve vacancies from employers' own career pages, gathered within one two-week window, each recorded with employer, URL, retrieval date, title, seniority, location, stated remote policy and stated India eligibility. Aggregators may be used to find employer names and are never cited as evidence. The plan states in advance what twelve vacancies cannot show — demand, pay, how common a requirement is across the market, or whether any of them would consider the learner — and that the sample expires and must be re-gathered if the search continues past a month.",
    freeToolPath:
      "A browser and a spreadsheet or text table. Every employer career page used here is public and needs no account; no job-board subscription, resume service or paid tool is required at any point in this module.",
    outputs: [
      "A written statement of what this course does not claim about hiring",
      "An evidence plan naming sources, fields and a date window",
      "A rule excluding aggregator counts as evidence",
      "A statement of what your planned sample cannot support",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read the recorded gap",
        instructions: [
          "Read the course's own record of its vacancy retrieval attempt.",
          "Write what it establishes and what it does not.",
        ],
      },
      {
        minutes: 25,
        title: "Write the evidence plan",
        instructions: [
          "Decide how many vacancies, from where, and over what window.",
          "List the fields you will record for each.",
        ],
      },
      {
        minutes: 20,
        title: "Set the source rule",
        instructions: [
          "Write that only employers' own pages count as evidence.",
          "Write how aggregators may be used without being cited.",
        ],
      },
      {
        minutes: 20,
        title: "State the limits in advance",
        instructions: [
          "Write what your sample will not be able to show.",
          "Include that it expires and when you would re-gather.",
        ],
      },
      {
        minutes: 15,
        title: "Name the advice test",
        instructions: [
          "Write the question you will ask of any career advice you receive.",
          "Save the plan and the limits.",
        ],
      },
    ],
    check: [
      {
        question: "Why does this course teach no hiring conclusions?",
        answer:
          "Because it holds two dated captures from one attempt. Two vacancies cannot establish demand, pay, prevalence or junior expectations anywhere.",
      },
      {
        question: "Why exclude aggregator counts?",
        answer:
          "Because they are numbers about the aggregator — duplicates, expired posts and reposts mixed together — not evidence of what any employer published.",
      },
      {
        question: "What is a vacancy actually evidence of?",
        answer:
          "That on a stated date one employer published a stated set of expectations. Not that the role is open, real, or open to you.",
      },
    ],
    rubric: [
      "The course's own limit is stated accurately",
      "An evidence plan names sources, fields and a window",
      "Aggregator counts are excluded as evidence",
      "The sample's limits are written before gathering",
    ],
    criteria: [
      {
        criterion: "The course's own limit is stated accurately",
        evidence:
          "A written account of the two captures and what they cannot support.",
        levels: [
          "Not stated, or overstated.",
          "Stated vaguely.",
          "Accurate about the sample and its limits.",
          "As adequate, and it notes the expiry rate as the real finding.",
        ],
        remediation:
          "Read the recorded vacancy note and restate it without adding conclusions.",
        recheck: "The statement.",
      },
      {
        criterion: "An evidence plan names sources, fields and a window",
        evidence:
          "A plan with a target count, source rule, field list and date window.",
        levels: [
          "No plan.",
          "A target count only.",
          "Sources, fields and window all named.",
          "As adequate, and the fields include stated India eligibility.",
        ],
        remediation: "Write the plan before gathering anything.",
        recheck: "The plan.",
      },
      {
        criterion: "Aggregator counts are excluded as evidence",
        evidence: "A written source rule distinguishing finding from citing.",
        levels: [
          "Aggregators treated as evidence.",
          "Excluded without explanation.",
          "Excluded with the reason.",
          "As adequate, and the permitted use of aggregators is defined.",
        ],
        remediation:
          "Write why an aggregator total is a number about the aggregator.",
        recheck: "The source rule.",
      },
      {
        criterion: "The sample's limits are written before gathering",
        evidence:
          "A pre-written statement of what the sample cannot show, plus expiry.",
        levels: [
          "No limits stated.",
          "Written afterwards.",
          "Written in advance.",
          "As adequate, and it names when the sample would need re-gathering.",
        ],
        remediation:
          "Write the limits now, before the first vacancy is recorded.",
        recheck: "The limits statement.",
      },
    ],
    repairs: [
      "If the course's limit is overstated, restate it from the record.",
      "If there is no plan, write one before gathering.",
      "If aggregators are cited, replace them with employer pages.",
      "If limits came after gathering, note that and keep them.",
    ],
    portfolio:
      "The evidence plan and its limits are the honest frame for everything else in this module, and worth keeping visible in your own records.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section:
          "How one employer states responsibilities, levels and its hiring process.",
        purpose:
          "Gives a single worked example of what an employer publishes, before you gather your own.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer, and a remote-first US-headquartered one; it is explicitly not a representative India hiring study and no market conclusion may be drawn from it.",
        fallbackId: "R22",
      },
      {
        ...intervals,
        section:
          "How sample size and variability limit what a proportion can support.",
        purpose:
          "Grounds the rule against computing rates from a dozen vacancies.",
        minutes: "15–25",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Written for usability metrics; the article gives no formulas, so show your inputs if you calculate anything.",
        fallbackId: "R45",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l02-v1",
    module: "m20",
    week: 20,
    day: 2,
    level: 6,
    areas: [17],
    guided: true,
    title: "Gathering the vacancy evidence by hand",
    objective:
      "Gather at least twelve dated vacancies from employers' own boards, recording the fields your plan named, and record every failure.",
    bringForward: "Your evidence plan.",
    prerequisite: "The evidence plan and its field list.",
    why: "This is the only hiring evidence you will have, and nobody else is going to gather it for you.",
    teach: [
      "Go to the employer's own careers page, not the aggregator's copy.",
      "Record employer, URL, date, title, seniority, location and eligibility.",
      "Copy the stated requirements verbatim; do not summarise yet.",
      "Record every failure: expired, blocked, or no longer listed.",
      "Save a local copy; the page will be gone in weeks.",
    ],
    explanation: [
      "Aggregators are useful for finding employer names and useless as evidence, because their copy of a listing may be stale, edited or duplicated. Once you have a name, go to that company's own careers page and take the listing from there, which is also where the honest statement of location and eligibility usually lives.",
      "The fields matter because comparison later depends on them. Seniority as stated, not as you interpret it; location as written including whether hybrid means an office; and any explicit statement about who may apply from where. Verbatim requirements now, analysis in the next lesson.",
      "Failures are data. When six of eight URLs have already expired, that is the strongest single fact about vacancy evidence and it belongs in your record with the date. It also protects you from a false conclusion later, when a thin sample looks like thin demand rather than like fast expiry.",
      "Save a local copy of each listing — text is enough. In a month you will want to check what a listing actually said, and the page will very likely be gone. This is the same discipline as the course's own catalog: record what you saw and when you saw it.",
    ],
    misconception:
      "“Twelve vacancies will show me what the market wants.” Twelve vacancies show what twelve employers published on twelve dates. That is genuinely useful for preparing, and it is not a market picture.",
    example:
      "Over eleven days, twenty-six employer career pages were opened and fourteen listings captured. Recorded: employer, direct URL, retrieval date, exact title, stated years of experience, stated location and whether hybrid meant an office, stated remote policy, and any explicit statement about eligibility to work from India. Failures recorded: seven listings had expired to a board index between finding and capture, three companies had no public careers page, and two pages would not load without an account, which was refused. Every captured listing was saved as text with its date at the top.",
    freeToolPath:
      "A browser, copy and paste, and a folder of text files. Nothing here requires an account, and any listing that demands one to be read is recorded as a refusal rather than an obstacle to work around.",
    outputs: [
      "At least twelve captured listings with all planned fields",
      "Verbatim requirements for each",
      "A recorded list of failures with reasons and dates",
      "Local text copies of every capture",
    ],
    steps: [
      {
        minutes: 30,
        title: "Build the employer list",
        instructions: [
          "Use aggregators only to collect employer names.",
          "Find each employer's own careers page.",
        ],
      },
      {
        minutes: 40,
        title: "Capture",
        instructions: [
          "Record the planned fields for each listing.",
          "Copy the requirements verbatim.",
          "Save a dated local text copy.",
        ],
      },
      {
        minutes: 20,
        title: "Record the failures",
        instructions: [
          "Note expired, missing, blocked and account-gated listings.",
          "Give each a date and a reason.",
        ],
      },
      {
        minutes: 20,
        title: "Check the eligibility field",
        instructions: [
          "For each, record what is actually stated about location and eligibility.",
          "Where nothing is stated, record that rather than inferring.",
        ],
      },
      {
        minutes: 15,
        title: "Close the window",
        instructions: [
          "Stop at the end of your stated window.",
          "Write the total captured and the total attempted.",
        ],
      },
    ],
    check: [
      {
        question: "Why capture from the employer's own page?",
        answer:
          "Because an aggregator's copy may be stale, edited or duplicated, and the employer's page is where location and eligibility are actually stated.",
      },
      {
        question: "Why record failures?",
        answer:
          "Because expiry rate is the strongest fact about vacancy evidence, and without it a thin sample looks like thin demand.",
      },
      {
        question: "What do you do when eligibility is not stated?",
        answer:
          "Record that it is not stated. Inferring eligibility from a company's remote reputation is exactly the kind of invention this course refuses.",
      },
    ],
    rubric: [
      "Captures come from employers' own pages",
      "All planned fields are recorded, verbatim where required",
      "Failures are recorded with reasons and dates",
      "Local dated copies exist for every capture",
    ],
    criteria: [
      {
        criterion: "Captures come from employers' own pages",
        evidence: "Direct employer URLs for every captured listing.",
        levels: [
          "Aggregator listings used.",
          "Mixed sources.",
          "All from employer pages.",
          "As adequate, and aggregators were used only to find names.",
        ],
        remediation:
          "Re-capture any aggregator listing from the employer's own page.",
        recheck: "The URL list.",
      },
      {
        criterion:
          "All planned fields are recorded, verbatim where required",
        evidence: "A complete row per listing with requirements quoted.",
        levels: [
          "Fields missing or summarised.",
          "Most fields present.",
          "All fields, requirements verbatim.",
          "As adequate, and interpretation was deferred to the next lesson.",
        ],
        remediation: "Return to the saved copies and complete the fields.",
        recheck: "The capture table.",
      },
      {
        criterion: "Failures are recorded with reasons and dates",
        evidence: "A failure list covering expiry, absence and gating.",
        levels: [
          "Failures not recorded.",
          "Counted without reasons.",
          "Recorded with reasons and dates.",
          "As adequate, and the attempted total is reported beside the captured total.",
        ],
        remediation:
          "Reconstruct the failures honestly and record what you can.",
        recheck: "The failure list.",
      },
      {
        criterion: "Local dated copies exist for every capture",
        evidence: "Text copies with retrieval dates.",
        levels: [
          "No copies.",
          "Some copies.",
          "A dated copy per capture.",
          "As adequate, and the copies are stored where they will survive.",
        ],
        remediation: "Save the text of each listing with its date today.",
        recheck: "The saved copies.",
      },
    ],
    repairs: [
      "If a capture came from an aggregator, replace it from the employer.",
      "If fields were summarised, restore the verbatim text.",
      "If failures went unrecorded, record what you can and say so.",
      "If copies are missing, save the ones still reachable today.",
    ],
    portfolio:
      "A dated, multi-employer capture with its failure rate recorded is a small piece of real research, and it is yours.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section:
          "The structure of a published role: responsibilities, requirements and process.",
        purpose:
          "Shows what fields a well-written listing contains, before you compare many.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer; treat it as a specimen of format, never as the market's expectations.",
        fallbackId: "R22",
      },
      {
        ...designLevels,
        section:
          "How levels, scope and expectations are described across a ladder.",
        purpose:
          "Gives published vocabulary for reading seniority claims in listings.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Management levels at one company; its ladder is its own and does not define seniority elsewhere.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l03-v1",
    module: "m20",
    week: 20,
    day: 3,
    level: 6,
    areas: [17],
    guided: true,
    title: "Reading vacancies without inventing a market",
    objective:
      "Compare your captured listings honestly — as counts out of your sample, with contradictions kept — and write what the comparison cannot support.",
    bringForward: "Your captured listings.",
    prerequisite: "At least twelve captured listings.",
    why: "The comparison is useful for preparing and dangerous for concluding, and the difference is entirely in how you write it.",
    teach: [
      "Report counts out of your sample, never percentages.",
      "Say “nine of fourteen listings I captured”, with the dates.",
      "Keep contradictions; listings disagree and that is information.",
      "Separate stated requirements from implied ones.",
      "Write what the comparison cannot support before using it.",
    ],
    explanation: [
      "Counts out of a named sample keep the claim the right size. “Nine of the fourteen listings I captured between the third and the fourteenth asked for a portfolio with case studies” is true and useful. “Sixty-four per cent of design roles require case studies” is a market claim your sample cannot carry, and it is one sentence away.",
      "Contradictions are the interesting part. If four listings ask for research skills and three explicitly say research is done by a separate team, that disagreement tells you the role's shape varies by company far more than any average would. Averaging it away destroys the only real finding.",
      "Stated and implied requirements need separating. A listing that names a specific design tool has stated a requirement; a listing that mentions shipping weekly implies a pace but has not stated a skill. Your matrix in the next lesson is built from stated requirements, with implications recorded separately and marked as your inference.",
      "Then write the limits: your sample is what you could reach, in one window, from companies with public career pages, in English, which excludes most employers. It cannot show demand, pay, how common anything is, or whether these employers would consider you. It expires, and you must say when it was gathered whenever you use it.",
    ],
    misconception:
      "“The pattern across a dozen listings is the market.” It is the pattern across a dozen listings — biased toward companies with public boards, current in one window, and silent about every employer you could not reach.",
    example:
      "Fourteen listings, gathered over eleven days. Counts recorded: eleven of fourteen ask for a portfolio; nine ask for case studies showing process; six state a years-of-experience minimum, ranging from two to five; four mention accessibility explicitly; three name a specific design tool and one names four interchangeable ones; two state remote eligibility from India explicitly and nine state nothing about eligibility at all. Contradiction kept: three listings expect the designer to run research, two say research is handled by a research team. Limits written: English-language listings from employers with public boards, one window, no evidence about pay, demand, or these employers' actual practice.",
    freeToolPath: "Your capture table and plain writing.",
    outputs: [
      "A comparison written as counts out of your sample",
      "Contradictions between listings kept and named",
      "Stated requirements separated from your inferences",
      "A written limits statement for the comparison",
    ],
    steps: [
      {
        minutes: 30,
        title: "Count",
        instructions: [
          "Count how many listings state each requirement.",
          "Write every count as a number out of your sample size.",
        ],
      },
      {
        minutes: 20,
        title: "Keep the contradictions",
        instructions: [
          "Find requirements that listings disagree about.",
          "Record the disagreement rather than averaging it.",
        ],
      },
      {
        minutes: 25,
        title: "Separate inference",
        instructions: [
          "Mark which requirements were stated and which you inferred.",
          "Keep inferences in a separate list.",
        ],
      },
      {
        minutes: 20,
        title: "Write the limits",
        instructions: [
          "State who your sample excludes and what it cannot show.",
          "Include the gathering window and expiry.",
        ],
      },
      {
        minutes: 20,
        title: "Sweep for market claims",
        instructions: [
          "Search your writing for “the market”, “employers want” and percentages.",
          "Rewrite each as a count out of your sample.",
        ],
      },
    ],
    check: [
      {
        question: "Why counts rather than percentages here?",
        answer:
          "Because a percentage reads as a market fact. “Nine of the fourteen I captured” carries its own sample size and cannot be misquoted upward.",
      },
      {
        question: "What do contradictions between listings tell you?",
        answer:
          "That the role's shape varies by company more than any average would suggest, which is more useful than a smoothed picture.",
      },
      {
        question: "What does your sample exclude?",
        answer:
          "Every employer without a public board, everything outside your window and language, and everything about pay, demand and actual practice.",
      },
    ],
    rubric: [
      "Findings are counts out of a named sample",
      "Contradictions are kept rather than averaged",
      "Stated requirements are separated from inferences",
      "A limits statement accompanies the comparison",
    ],
    criteria: [
      {
        criterion: "Findings are counts out of a named sample",
        evidence: "Counts with the sample size and window stated.",
        levels: [
          "Percentages or market claims.",
          "Counts without the window.",
          "Counts with sample size and window.",
          "As adequate, and no sentence generalises beyond the sample.",
        ],
        remediation:
          "Rewrite every finding as a number out of your sample with dates.",
        recheck: "The comparison.",
      },
      {
        criterion: "Contradictions are kept rather than averaged",
        evidence: "At least one recorded disagreement between listings.",
        levels: [
          "Contradictions removed.",
          "Noted in passing.",
          "Recorded explicitly.",
          "As adequate, and the disagreement is used to shape your preparation.",
        ],
        remediation:
          "Look for requirements listings disagree about and record them.",
        recheck: "The contradictions.",
      },
      {
        criterion: "Stated requirements are separated from inferences",
        evidence: "Two lists, with inferences marked as yours.",
        levels: [
          "Merged.",
          "Partly separated.",
          "Cleanly separated and marked.",
          "As adequate, and each inference names what it is inferred from.",
        ],
        remediation:
          "Move anything not written in a listing into the inference list.",
        recheck: "The two lists.",
      },
      {
        criterion:
          "A limits statement accompanies the comparison",
        evidence: "A written statement of exclusions, scope and expiry.",
        levels: [
          "None.",
          "Generic small-sample caveat.",
          "Specific exclusions and expiry.",
          "As adequate, and it names who the sample systematically misses.",
        ],
        remediation:
          "Write which employers your method could never have reached.",
        recheck: "The limits statement.",
      },
    ],
    repairs: [
      "If percentages appear, restore the counts.",
      "If contradictions were averaged, restore them.",
      "If inferences are mixed in, separate and mark them.",
      "If limits are generic, name the systematic exclusions.",
    ],
    portfolio:
      "A comparison written this carefully is itself a demonstration of research honesty, and can be shown as one.",
    resource: intervals,
    resources: [
      {
        ...intervals,
        section:
          "What a proportion from a small sample can and cannot support.",
        purpose:
          "Supplies the reasoning behind reporting counts rather than rates.",
        minutes: "15–25",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Written for usability metrics rather than vacancies; the sample-size reasoning is what transfers.",
        fallbackId: "R45",
      },
      {
        ...designLevels,
        section: "How one company defines scope at each level.",
        purpose:
          "Helps interpret seniority language without treating it as a standard.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's ladder; other companies use the same words for different scopes.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l04-v1",
    module: "m20",
    week: 20,
    day: 4,
    level: 6,
    areas: [17],
    guided: true,
    title: "The role evidence matrix",
    objective:
      "Build a matrix of the requirements you found against the evidence you hold, marking each as evidenced, partial or absent.",
    bringForward: "Your comparison and your portfolio audit.",
    prerequisite: "The vacancy comparison and the portfolio audit table.",
    why: "Knowing exactly where your evidence stops is what lets you apply honestly and prepare efficiently.",
    teach: [
      "One row per stated requirement, one column for your evidence.",
      "Mark evidenced, partial or absent — three states, as before.",
      "Evidenced means you can point at an artefact, not at a memory.",
      "Absent is information, not a verdict about you.",
      "Rank the absences by how often they appeared in your sample.",
    ],
    explanation: [
      "The matrix is the audit from m19 pointed outward. On one side, the requirements your captured listings actually stated; on the other, the artefacts your three projects produced. The cells are where preparation becomes specific instead of anxious.",
      "The three states carry the same meaning they did in the portfolio audit. Evidenced means an artefact a stranger could read and believe. Partial means something exists but is thin, undated or self-assessed. Absent means nothing — and writing that down is more useful than any amount of reframing.",
      "The temptation is to upgrade a partial into an evidenced by generous reading. A keyboard pass you ran yourself is real evidence of a self-check and is not evidence of testing with disabled people; the honest mark is partial with a note. This matters practically: the cell you upgrade is the question you cannot answer in an interview.",
      "Ranking absences by frequency in your sample tells you which gap to close first, without pretending the ranking is a market truth. If accessibility appeared in four of fourteen and a specific tool in three, that is a reason to prefer one piece of preparation this month, not a conclusion about the profession.",
    ],
    misconception:
      "“The matrix will show I am not ready.” It will show precisely which cells are empty, which is what readiness means in practice. Everyone's matrix has empty cells; most people cannot say which.",
    example:
      "Twenty-one requirement rows against three projects. Evidenced: research planning and synthesis, iteration with a re-test, writing decisions down, working with constraints, prototyping, structure and flows, and stating limits. Partial: accessibility, marked partial because every check was self-run and none involved a disabled person; measurement, marked partial because only one project had a before; and design systems, marked partial because the system was built and used but never adopted by anyone else. Absent: working in a team with engineers, shipping to production, working with analytics at scale, and any specific enterprise tool. Absences ranked by appearance in the sample, with team collaboration first.",
    freeToolPath: "A table in a text file or spreadsheet.",
    outputs: [
      "A matrix of stated requirements against your evidence",
      "Each cell marked evidenced, partial or absent",
      "Notes explaining every partial",
      "Absences ranked by frequency in your sample",
    ],
    steps: [
      {
        minutes: 25,
        title: "Build the rows",
        instructions: [
          "List every stated requirement from your comparison.",
          "Keep the wording close to the listings.",
        ],
      },
      {
        minutes: 30,
        title: "Fill the cells",
        instructions: [
          "For each row, name the artefact that evidences it.",
          "Mark evidenced, partial or absent.",
        ],
      },
      {
        minutes: 20,
        title: "Explain the partials",
        instructions: [
          "Write why each partial is not evidenced.",
          "Resist upgrading anything you could not defend.",
        ],
      },
      {
        minutes: 20,
        title: "Rank the absences",
        instructions: [
          "Order absences by how often they appeared in your sample.",
          "Note that the ranking is about your sample only.",
        ],
      },
      {
        minutes: 20,
        title: "Check against a listing",
        instructions: [
          "Take one captured listing and read your matrix against it.",
          "Note which of its requirements you could evidence today.",
        ],
      },
    ],
    check: [
      {
        question: "What does evidenced mean here?",
        answer:
          "That you can point at an artefact a stranger could read and believe — not that you remember doing it or feel capable of it.",
      },
      {
        question: "Why not upgrade a partial?",
        answer:
          "Because the cell you upgrade is the question you cannot answer in an interview. A self-run check is evidence of a self-check, nothing more.",
      },
      {
        question: "What does ranking absences tell you?",
        answer:
          "Which gap to close first given what your sample contained. It is a preparation priority, not a fact about the profession.",
      },
    ],
    rubric: [
      "Rows come from stated requirements in your sample",
      "Cells are marked with artefacts named",
      "Partials are explained rather than upgraded",
      "Absences are ranked by frequency in the sample",
    ],
    criteria: [
      {
        criterion: "Rows come from stated requirements in your sample",
        evidence: "Requirement rows traceable to captured listings.",
        levels: [
          "Invented or borrowed from generic advice.",
          "Mostly traceable.",
          "All from your captures.",
          "As adequate, and the wording stays close to the listings.",
        ],
        remediation:
          "Rebuild the rows from the verbatim requirements you captured.",
        recheck: "The matrix rows.",
      },
      {
        criterion: "Cells are marked with artefacts named",
        evidence: "Three-state marks with artefacts for the evidenced ones.",
        levels: [
          "Unmarked or marked by feeling.",
          "Marked without artefacts.",
          "Marked with artefacts named.",
          "As adequate, and every evidenced cell survives a stranger's reading.",
        ],
        remediation: "Name the file behind each evidenced mark.",
        recheck: "The matrix.",
      },
      {
        criterion: "Partials are explained rather than upgraded",
        evidence: "A note per partial saying what is missing.",
        levels: [
          "Partials upgraded to evidenced.",
          "Marked without explanation.",
          "Explained honestly.",
          "As adequate, and at least one partial was downgraded on reflection.",
        ],
        remediation:
          "Re-read each evidenced cell and downgrade what you could not defend.",
        recheck: "The partial notes.",
      },
      {
        criterion: "Absences are ranked by frequency in the sample",
        evidence: "An ordered list with the sample caveat attached.",
        levels: [
          "Unranked.",
          "Ranked by preference.",
          "Ranked by frequency, caveated.",
          "As adequate, and the ranking drives the next lesson's choice.",
        ],
        remediation:
          "Count how often each absent requirement appeared and reorder.",
        recheck: "The ranked absences.",
      },
    ],
    repairs: [
      "If rows came from generic advice, rebuild from your captures.",
      "If cells lack artefacts, name them or downgrade the mark.",
      "If a partial was upgraded, restore the honest mark.",
      "If absences are unranked, rank them by frequency in your sample.",
    ],
    portfolio:
      "The matrix is the working document for the rest of this module and for the months after it.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section:
          "Responsibilities and requirements as one employer states them.",
        purpose:
          "Provides a worked example of requirements to match evidence against.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer; your matrix rows must come from your own captures, not from this page.",
        fallbackId: "R22",
      },
      {
        ...portfolioProcess,
        section: "The case study contents that show a skill was actually exercised.",
        purpose: "Sets the standard for marking a cell evidenced.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l05-v1",
    module: "m20",
    week: 20,
    day: 5,
    level: 6,
    areas: [17],
    guided: true,
    title: "Closing one gap with real work",
    objective:
      "Choose one absence from the matrix and close it with work that produces an artefact, not with a course or a certificate.",
    bringForward: "Your ranked absences.",
    prerequisite: "The matrix with ranked absences.",
    why: "A gap closed by real work becomes evidence; a gap closed by a certificate stays a gap with a badge on it.",
    teach: [
      "Choose one gap, not four; one closed beats four begun.",
      "Prefer gaps closable by doing something with someone real.",
      "A certificate is not evidence of a skill; an artefact is.",
      "Some gaps cannot be closed alone, and saying so is the answer.",
      "Give it a deadline and an artefact, or it will not happen.",
    ],
    explanation: [
      "One gap. The ranked list will tempt you into a plan covering four, which becomes four half-finished efforts and no artefact. Choose the highest-ranked gap you can actually close with the access you have, and leave the rest ranked for later.",
      "The best gaps to close are the ones involving another person, because they produce evidence that cannot be self-generated. Contributing a design to an open-source project, working with someone who writes code, or running a session with a person who uses assistive technology all produce artefacts and all involve someone who could corroborate them.",
      "A completed course is evidence that you completed a course. It may be worth doing for the learning, but it does not fill a cell in the matrix, and presenting it as though it does is a small dishonesty that a single question exposes. The artefact is the point.",
      "Some gaps genuinely cannot be closed by an individual — shipping to production at scale, working in an established team, operating an analytics system with real traffic. The correct handling is to say so directly: this is absent, it requires a role to acquire, and here is the nearest thing I have done. That answer is respected; a fabricated equivalent is not.",
    ],
    misconception:
      "“I should close all my gaps before applying.” You will not, and waiting is itself a cost. Close the one that is closable, name the rest accurately, and apply with an honest matrix.",
    example:
      "The top-ranked absence was working with engineers, which cannot be manufactured alone. The second was accessibility tested with a disabled person rather than self-checked. That one was closable: a local organisation was approached, one person who uses a screen reader agreed to a forty-minute session on the status page with consent and a small thank-you, and the session produced a recording of two failures the self-check had missed, a repair and a re-test. The cell moved from partial to evidenced with a dated artefact. The engineering gap was written as an honest absence with the nearest adjacent evidence named.",
    freeToolPath:
      "The access you already have, plus a conversation. If closing a gap would require a paid course, a subscription or a certificate, it is the wrong gap to close this way.",
    outputs: [
      "One chosen gap with the reason it was chosen",
      "Work done that produced a dated artefact",
      "The matrix cell updated with the artefact named",
      "An honest statement for a gap that cannot be closed alone",
    ],
    steps: [
      {
        minutes: 20,
        title: "Choose",
        instructions: [
          "Take the highest-ranked gap you can actually close.",
          "Write why you chose it over the one above it.",
        ],
      },
      {
        minutes: 25,
        title: "Plan the smallest real work",
        instructions: [
          "Define the smallest work that would produce an artefact.",
          "Give it a date.",
        ],
      },
      {
        minutes: 40,
        title: "Do it",
        instructions: [
          "Do the work, with consent where another person is involved.",
          "Keep the artefact and date it.",
        ],
      },
      {
        minutes: 15,
        title: "Update the matrix",
        instructions: [
          "Change the cell and name the new artefact.",
          "Keep the previous mark visible in the history.",
        ],
      },
      {
        minutes: 20,
        title: "Write the unclosable ones",
        instructions: [
          "For a gap needing a role, write the honest statement.",
          "Name the nearest adjacent evidence you do hold.",
        ],
      },
    ],
    check: [
      {
        question: "Why one gap rather than several?",
        answer:
          "Because several become half-finished efforts with no artefact. One closed gap changes the matrix; four begun change nothing.",
      },
      {
        question: "Does a certificate close a gap?",
        answer:
          "No. It evidences course completion. The matrix cell needs an artefact from work, which a single interview question will ask for.",
      },
      {
        question: "What do you do about a gap needing a role?",
        answer:
          "Say so directly, and name the nearest thing you have done. That answer is respected; a manufactured equivalent is not.",
      },
    ],
    rubric: [
      "One gap chosen with reasoning",
      "Real work produced a dated artefact",
      "The matrix cell is updated with the artefact",
      "Unclosable gaps have an honest statement",
    ],
    criteria: [
      {
        criterion: "One gap chosen with reasoning",
        evidence: "A single chosen gap with why it beat the alternatives.",
        levels: [
          "Several started.",
          "One chosen without reasoning.",
          "One chosen with reasoning.",
          "As adequate, and the reasoning names your actual access.",
        ],
        remediation: "Drop back to one gap and write why that one.",
        recheck: "The choice.",
      },
      {
        criterion: "Real work produced a dated artefact",
        evidence: "An artefact from doing something, with a date.",
        levels: [
          "A course or certificate.",
          "Work without an artefact.",
          "An artefact with a date.",
          "As adequate, and another person was involved and consented.",
        ],
        remediation:
          "Do the smallest piece of real work that leaves something behind.",
        recheck: "The artefact.",
      },
      {
        criterion: "The matrix cell is updated with the artefact",
        evidence: "An updated cell naming the new evidence.",
        levels: [
          "Not updated.",
          "Updated without naming the artefact.",
          "Updated with the artefact named.",
          "As adequate, and the previous mark is still visible as history.",
        ],
        remediation: "Update the cell and name the file behind it.",
        recheck: "The matrix.",
      },
      {
        criterion: "Unclosable gaps have an honest statement",
        evidence:
          "A written statement for a gap requiring a role, with adjacent evidence.",
        levels: [
          "Presented as closed.",
          "Left blank.",
          "Stated honestly with adjacent evidence.",
          "As adequate, and it is phrased as you would say it aloud.",
        ],
        remediation:
          "Write the sentence you would say when asked about that gap.",
        recheck: "The statement.",
      },
    ],
    repairs: [
      "If several gaps were started, finish one and park the rest.",
      "If a certificate was used, do work that leaves an artefact.",
      "If the matrix is unchanged, update the cell.",
      "If an unclosable gap is hidden, write the honest statement.",
    ],
    portfolio:
      "A gap closed with dated work, with the matrix showing the before and after, is stronger evidence than the skill alone.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section:
          "What 204 surveyed hiring professionals said they look for in evidence.",
        purpose: "Sets the bar the new artefact has to clear.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context; the evidence standard transfers.",
        fallbackId: "R23",
      },
      {
        ...wcag,
        section:
          "The criteria relevant to whichever artefact you are producing.",
        purpose:
          "Supports closing an accessibility gap with a defensible check.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A filterable index, not a course; reading a criterion is not conformance, and a self-check is not testing with disabled people.",
        fallbackId: "R41",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l06-v1",
    module: "m20",
    week: 20,
    day: 6,
    level: 6,
    areas: [17],
    guided: true,
    title: "A resume where every line survives a question",
    objective:
      "Write a one-page resume in which every claim maps to an artefact, and check it by having someone challenge each line.",
    bringForward: "Your matrix and your portfolio.",
    prerequisite: "The role evidence matrix.",
    why: "A resume is a set of claims you will be asked to defend, and most are written as if they will not be.",
    teach: [
      "Every line maps to an artefact or comes out.",
      "Say what you did and what happened, in counts.",
      "Name the project category: self-directed, course or paid.",
      "One page, plain, readable as text by a machine and a person.",
      "Have someone challenge every line before you send it.",
    ],
    explanation: [
      "The mapping rule does the work. Write the resume, then put the matrix beside it and check each line against a cell. Anything that cannot be traced is either rewritten to what you can show or removed, and this pass usually removes a third of a first draft.",
      "Lines should say what you did and what happened, with counts where you have them. “Ran five research sessions in a repair shop and reduced progress-chasing calls from eleven to four over comparable five-day periods” is checkable and specific. “Improved customer experience through user-centred design” is neither.",
      "Category labelling belongs on the resume as much as in the portfolio. Self-directed projects listed alongside employment, with nothing distinguishing them, is the most common way a resume becomes misleading without a single false sentence in it.",
      "Format matters for a practical reason: many resumes are read first by software that extracts text, and a design-heavy PDF with text in images extracts as nothing. Plain structure, real text, one page. It is also, incidentally, the accessible choice, which you should be able to explain.",
    ],
    misconception:
      "“A designer's resume should show design.” It should be clear and extractable. Your portfolio shows design; a resume that cannot be parsed shows nothing at all.",
    example:
      "One page. Three project entries, each labelled self-directed practice, each with two lines: what was done and what happened, including the project where nothing was measured, stated as such. A short section listing evidenced skills only, taken directly from the matrix, with partials excluded. Prior graphic design work summarised in three lines with real dates. A friend was asked to challenge every line; four could not be defended and were rewritten, one was removed, and the phrase “led design” was corrected to “designed, working alone” on all three entries.",
    freeToolPath:
      "A text editor and any word processor you already have, exported to PDF with real text. No resume service, template subscription or review product is needed.",
    outputs: [
      "A one-page resume with every line mapped to an artefact",
      "Outcomes stated in counts, or stated as unmeasured",
      "Project categories labelled",
      "A record of the challenge pass and what changed",
    ],
    steps: [
      {
        minutes: 30,
        title: "Draft",
        instructions: [
          "Write the resume in plain structure, one page.",
          "Use what you did and what happened for each entry.",
        ],
      },
      {
        minutes: 25,
        title: "Map to the matrix",
        instructions: [
          "Check each line against a matrix cell.",
          "Rewrite or remove anything untraceable.",
        ],
      },
      {
        minutes: 20,
        title: "Label the categories",
        instructions: [
          "Mark each project self-directed, course or paid.",
          "Check nothing implies employment that did not exist.",
        ],
      },
      {
        minutes: 20,
        title: "Check the format",
        instructions: [
          "Export to PDF and confirm the text can be selected and copied.",
          "Check it reads sensibly as plain text.",
        ],
      },
      {
        minutes: 25,
        title: "The challenge pass",
        instructions: [
          "Ask someone to challenge every line and note what you could not defend.",
          "Rewrite those lines and record what changed.",
        ],
      },
    ],
    check: [
      {
        question: "What happens to a line you cannot trace?",
        answer:
          "It is rewritten to what you can show, or removed. In a first draft this usually accounts for about a third of the lines.",
      },
      {
        question: "Why label the project category?",
        answer:
          "Because self-directed projects listed like employment mislead without containing a single false sentence, and the correction later is costly.",
      },
      {
        question: "Why does extractable text matter?",
        answer:
          "Because resumes are often read first by software that extracts text, and a design-heavy PDF with text in images extracts as nothing.",
      },
    ],
    rubric: [
      "Every line maps to an artefact",
      "Outcomes are counts or honest absences",
      "Project categories are labelled",
      "The challenge pass was run and recorded",
    ],
    criteria: [
      {
        criterion: "Every line maps to an artefact",
        evidence: "A line-by-line trace to matrix cells.",
        levels: [
          "Untraced claims.",
          "Mostly traced.",
          "Every line traced.",
          "As adequate, and untraceable lines were removed rather than softened.",
        ],
        remediation:
          "Put the matrix beside the resume and check each line.",
        recheck: "The trace.",
      },
      {
        criterion: "Outcomes are counts or honest absences",
        evidence:
          "Counts where measured, plain statements where not.",
        levels: [
          "Improvement language without numbers.",
          "Some counts, some vague claims.",
          "Counts or honest absences throughout.",
          "As adequate, and one entry states plainly that nothing was measured.",
        ],
        remediation:
          "Replace every vague improvement with what you actually observed.",
        recheck: "The entries.",
      },
      {
        criterion: "Project categories are labelled",
        evidence: "A category on each project entry.",
        levels: [
          "Unlabelled.",
          "Labelled inconsistently.",
          "All labelled.",
          "As adequate, and nothing implies employment that did not exist.",
        ],
        remediation: "Add the category to every entry.",
        recheck: "The labels.",
      },
      {
        criterion: "The challenge pass was run and recorded",
        evidence: "Someone else's challenge and the resulting changes.",
        levels: [
          "Not run.",
          "Self-reviewed only.",
          "Run with someone and changes recorded.",
          "As adequate, and at least one line was removed as a result.",
        ],
        remediation:
          "Ask someone to challenge each line and record what you could not defend.",
        recheck: "The change record.",
      },
    ],
    repairs: [
      "If a line is untraceable, rewrite it or remove it.",
      "If outcomes are vague, restore the counts or say nothing was measured.",
      "If categories are missing, label every entry.",
      "If nobody challenged it, run the pass before sending it anywhere.",
    ],
    portfolio:
      "The resume and its trace to the matrix are one artefact; keeping them together makes the next revision much faster.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section: "The language an employer uses for responsibilities.",
        purpose:
          "Provides published vocabulary for describing what you did without inflating it.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer; borrow the precision, not the seniority language, and never claim its levels.",
        fallbackId: "R22",
      },
      {
        ...wcag,
        section:
          "The text alternative criteria and the guidelines under Understandable, at levels A and AA.",
        purpose:
          "Explains why an extractable, plainly structured document is the accessible choice.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for web content rather than documents; the reasoning about real text transfers, the criteria are not a document standard.",
        fallbackId: "R41",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l07-v1",
    module: "m20",
    week: 20,
    day: 7,
    level: 6,
    areas: [17],
    guided: true,
    title: "A public profile, and what does not go on it",
    objective:
      "Write a public professional profile that says what you do and what you can show, while deciding deliberately what personal information stays off it.",
    bringForward: "Your resume and portfolio.",
    prerequisite: "The resume and published portfolio.",
    why: "A public profile is permanent, indexed and read by strangers, so what it contains should be a decision rather than a default.",
    teach: [
      "Say what you do, what you can show, and where to see it.",
      "Decide what personal data goes on it before writing.",
      "Do not publish other people's information without permission.",
      "Keep it consistent with the resume; contradictions get noticed.",
      "A profile is not required to be on any particular platform.",
    ],
    explanation: [
      "The profile has one job: a stranger should learn within a few lines what you do, what evidence exists, and how to reach it. Everything else is optional, and the optional parts are where profiles become long, generic and interchangeable.",
      "Decide the personal data question first, because it is easier to withhold than to withdraw. Full address, phone number, date of birth, family details, exact employer of a spouse — none of these belong on a public profile, and each has been used to harm people. An email you control and a city are usually enough.",
      "Other people's data is the part beginners get wrong. Naming a participant, a client who did not agree to be named, or a colleague's role in your project publishes their information as well as yours. The rule from the research modules holds: permission or a role, never a name by default.",
      "Consistency matters because a reviewer reads both. A profile claiming three years of design work beside a resume showing self-directed projects invites the question you least want. Write the profile from the resume, not from memory.",
      "Finally, no platform is required. A page on your own portfolio site is a valid public profile. If you use a platform, that is a choice with its own terms, and it should be made deliberately rather than because everyone does.",
    ],
    misconception:
      "“More detail makes a profile more credible.” Specific evidence makes it credible; volume makes it skimmable and generic. Three sentences and a link outperform six paragraphs of adjectives.",
    example:
      "Four sentences: what she does, the three projects and what each shows, the honest note that the work is self-directed practice built during a structured programme, and a link. Personal data decided in advance: city and a controlled email address; no phone number, no address, no personal details. Participants appear as roles; the shop is described as a small repair business without its name, since the owner agreed to the work being shown but not to being identified. The profile was checked line by line against the resume, and one seniority phrase was removed for inconsistency.",
    freeToolPath:
      "A page on your own portfolio site. If you also use a platform, no paid tier, promotion or profile-review service is required.",
    outputs: [
      "A short profile stating what you do and what you can show",
      "A written decision about what personal data appears",
      "Other people appearing only by role or with permission",
      "A consistency check against the resume",
    ],
    steps: [
      {
        minutes: 20,
        title: "Decide the data",
        instructions: [
          "Write what personal information will and will not appear.",
          "Default to less; you can add later, not remove from indexes.",
        ],
      },
      {
        minutes: 25,
        title: "Write the profile",
        instructions: [
          "Say what you do, what you can show, and where.",
          "Keep it to a few sentences with a link.",
        ],
      },
      {
        minutes: 20,
        title: "Check other people",
        instructions: [
          "Replace names with roles unless you have permission.",
          "Check client and employer names against what was agreed.",
        ],
      },
      {
        minutes: 20,
        title: "Check consistency",
        instructions: [
          "Read the profile beside the resume.",
          "Remove or correct anything that disagrees.",
        ],
      },
      {
        minutes: 15,
        title: "Decide the platform",
        instructions: [
          "Decide deliberately whether to use a platform and record why.",
          "Check that no paid tier is required for what you need.",
        ],
      },
    ],
    check: [
      {
        question: "Why decide personal data before writing?",
        answer:
          "Because withholding is easy and withdrawing is not. Once indexed, a detail is effectively permanent.",
      },
      {
        question: "How do other people appear on your profile?",
        answer:
          "By role, unless they gave permission to be named. Publishing a participant or client's identity publishes their data, not just yours.",
      },
      {
        question: "Is a platform required?",
        answer:
          "No. A page on your own site is a public profile. Using a platform is a choice with its own terms, to be made deliberately.",
      },
    ],
    rubric: [
      "The profile states what you do and what you can show",
      "Personal data appears by decision, not default",
      "Other people appear by role or with permission",
      "The profile is consistent with the resume",
    ],
    criteria: [
      {
        criterion: "The profile states what you do and what you can show",
        evidence: "A short profile naming the work and linking to evidence.",
        levels: [
          "Adjectives and aspiration.",
          "Descriptive but without evidence.",
          "What you do, what you can show, and where.",
          "As adequate, and a stranger could restate it after one read.",
        ],
        remediation: "Cut the adjectives and name the evidence.",
        recheck: "The profile.",
      },
      {
        criterion: "Personal data appears by decision, not default",
        evidence: "A written decision about what is included and excluded.",
        levels: [
          "Contact and personal details published unconsidered.",
          "Some restraint, no decision recorded.",
          "A recorded decision.",
          "As adequate, and it defaults to the minimum that lets someone reach you.",
        ],
        remediation:
          "Write the include and exclude lists, then edit the profile to match.",
        recheck: "The decision.",
      },
      {
        criterion: "Other people appear by role or with permission",
        evidence: "No unpermitted names of participants, clients or colleagues.",
        levels: [
          "Names published without permission.",
          "Mixed.",
          "Roles or permitted names only.",
          "As adequate, and what each person agreed to is recorded.",
        ],
        remediation: "Replace names with roles until permission exists.",
        recheck: "The profile text.",
      },
      {
        criterion: "The profile is consistent with the resume",
        evidence: "A line-by-line comparison with disagreements resolved.",
        levels: [
          "Contradictions present.",
          "Broadly consistent, unchecked.",
          "Checked and reconciled.",
          "As adequate, and a claim was removed for being unsupported in both.",
        ],
        remediation: "Read them side by side and correct what disagrees.",
        recheck: "The comparison.",
      },
    ],
    repairs: [
      "If the profile is adjectives, replace them with evidence.",
      "If personal data crept in, remove it and record the decision.",
      "If someone is named without permission, use a role.",
      "If the profile and resume disagree, correct the profile.",
    ],
    portfolio:
      "The profile is a public artefact and is read as a writing sample, so it is worth the same care as a case study opening.",
    resource: privacy,
    resources: [
      {
        ...privacy,
        section:
          "Treating information about people as personal data, and what may be shared.",
        purpose:
          "Governs what you publish about participants, clients and colleagues.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 5 November 2018. Verified 2026-09-06. UK GDPR framing, written for research data rather than profiles; the principle transfers, the jurisdiction does not.",
        fallbackId: "R53",
      },
      {
        ...portfolioProcess,
        section:
          "Prioritising the top three things your portfolio should communicate.",
        purpose: "Shapes a short profile that points at evidence.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l08-v1",
    module: "m20",
    week: 20,
    day: 8,
    level: 6,
    areas: [17],
    guided: true,
    title: "The transition story, told without embellishment",
    objective:
      "Write and rehearse the account of why you moved from graphic design to product design, in a form that is true and takes ninety seconds.",
    bringForward: "Your own history and your three projects.",
    prerequisite: "The three projects and your prior work history.",
    why: "You will be asked this in the first five minutes of every conversation, and an unprepared answer either rambles or overclaims.",
    teach: [
      "Tell what happened, not a narrative of destiny.",
      "Name what your prior work gave you and what it did not.",
      "Ninety seconds; the long version is for when they ask.",
      "Do not disparage your earlier field or employers.",
      "End on evidence, not on enthusiasm.",
    ],
    explanation: [
      "The true version is usually better than the constructed one. Something happened — work that looked good and did not help anyone, a project where the brief was wrong, a growing interest in why rather than how — and saying it plainly is more convincing than a story shaped to sound inevitable.",
      "Being specific about the transfer is what makes it credible. Graphic design gives typography, hierarchy, colour discipline, working to a brief and finishing things, and it does not give research methods, systems thinking or the practice of testing your own work. Saying both is what distinguishes a serious answer from a pitch.",
      "Ninety seconds, because it is an opener rather than the interview. Practise it to length; the version that runs four minutes crowds out the questions you actually want to be asked.",
      "Never disparage the old field. It reads as disloyalty and as a preview of how you will talk about this employer later, and it is also untrue: the skills are real and you are using them.",
      "End on what exists. “I have three projects, one with a measured before and after, and a portfolio with the limits written down” is a better closing sentence than any statement of passion, because it invites the next question toward your evidence.",
    ],
    misconception:
      "“I need a compelling story.” You need a true one, told briefly. Interviewers hear constructed narratives constantly and discount them; a plain account with specifics stands out precisely because it is unpolished.",
    example:
      "Ninety seconds, four beats. What happened: years of producing material that looked right and being unable to tell whether it worked, and a job where the brief was wrong and nobody had asked anyone. What transferred: typography, hierarchy, working to constraints, finishing. What did not: research, systems, testing her own work, which is what the last two years were for. Where that leaves her: three projects, one with a measured before and after, and a portfolio that states what it does not establish. Rehearsed four times, timed at 105, 95, 88 and 90 seconds, with one phrase removed for sounding rehearsed.",
    freeToolPath: "Writing and speaking aloud, with a timer.",
    outputs: [
      "A written ninety-second account, true in every particular",
      "A statement of what transferred and what did not",
      "A closing sentence resting on evidence",
      "Rehearsal timings showing it fits",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write what actually happened",
        instructions: [
          "Write the real reason, including the unflattering parts.",
          "Remove anything shaped to sound inevitable.",
        ],
      },
      {
        minutes: 20,
        title: "Name the transfer",
        instructions: [
          "List what your earlier work gave you.",
          "List what it did not, without apology.",
        ],
      },
      {
        minutes: 15,
        title: "Write the closing",
        instructions: [
          "End on what exists rather than on enthusiasm.",
          "Make it invite a question about your evidence.",
        ],
      },
      {
        minutes: 25,
        title: "Cut to ninety seconds",
        instructions: [
          "Read aloud with a timer and cut until it fits.",
          "Keep the specifics; cut the transitions.",
        ],
      },
      {
        minutes: 20,
        title: "Rehearse and check",
        instructions: [
          "Say it to someone and ask what they heard.",
          "Remove anything that sounded rehearsed or overclaimed.",
        ],
      },
    ],
    check: [
      {
        question: "Why not shape it into a compelling narrative?",
        answer:
          "Because interviewers hear constructed stories constantly and discount them. A plain account with specifics is more persuasive.",
      },
      {
        question: "Why name what did not transfer?",
        answer:
          "Because it makes the transfer claim credible. Anyone claiming everything transferred has not examined either field.",
      },
      {
        question: "Why end on evidence?",
        answer:
          "Because it invites the next question toward your work rather than toward your motivation, which is where you want the conversation.",
      },
    ],
    rubric: [
      "The account is true, including the unflattering parts",
      "Transfer and non-transfer are both named",
      "It closes on evidence rather than enthusiasm",
      "It fits ninety seconds when spoken",
    ],
    criteria: [
      {
        criterion: "The account is true, including the unflattering parts",
        evidence: "A version you would be comfortable having checked.",
        levels: [
          "Shaped into destiny.",
          "True but sanded smooth.",
          "True including the awkward parts.",
          "As adequate, and it names a real dissatisfaction without blaming anyone.",
        ],
        remediation:
          "Write what actually happened, then remove what you added to make it neat.",
        recheck: "The account.",
      },
      {
        criterion: "Transfer and non-transfer are both named",
        evidence: "Two specific lists.",
        levels: [
          "Everything claimed as transferable.",
          "Transfer named, gaps omitted.",
          "Both named specifically.",
          "As adequate, and the gaps match your matrix.",
        ],
        remediation:
          "Name three things your earlier work did not teach you.",
        recheck: "The two lists.",
      },
      {
        criterion: "It closes on evidence rather than enthusiasm",
        evidence: "A final sentence naming what exists.",
        levels: [
          "Ends on passion.",
          "Mentions work vaguely.",
          "Names specific evidence.",
          "As adequate, and it invites a question about the work.",
        ],
        remediation: "Replace the closing sentence with what you can show.",
        recheck: "The closing.",
      },
      {
        criterion: "It fits ninety seconds when spoken",
        evidence: "Timed rehearsals within the limit.",
        levels: [
          "Untimed or well over.",
          "Close to time.",
          "Within ninety seconds.",
          "As adequate, and the specifics survived the cutting.",
        ],
        remediation: "Cut transitions rather than specifics and time it again.",
        recheck: "The timings.",
      },
    ],
    repairs: [
      "If the story sounds inevitable, restore what actually happened.",
      "If everything transferred, name what did not.",
      "If it ends on enthusiasm, end on evidence.",
      "If it overruns, cut transitions and keep the specifics.",
    ],
    portfolio:
      "The transition account is reused in the profile, in outreach and in the first minutes of every conversation, so it is worth getting right once.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section: "Stating your role and the constraints you worked under.",
        purpose: "Supports an evidence-led account of a career change.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context; the framing advice transfers.",
        fallbackId: "R23",
      },
      {
        ...roleDescription,
        section: "The responsibilities the role actually involves.",
        purpose:
          "Keeps the transfer claims tied to what the work requires rather than to enthusiasm.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's description; other roles differ and this establishes nothing about the market.",
        fallbackId: "R22",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l09-v1",
    module: "m20",
    week: 20,
    day: 9,
    level: 6,
    areas: [17],
    guided: true,
    title: "Writing to a person, one at a time",
    objective:
      "Draft outreach messages that are specific, honest and individually written, and decide the rules under which you will send them.",
    bringForward: "Your captured listings and your portfolio.",
    prerequisite: "The vacancy captures and a published portfolio.",
    why: "Outreach that is automated, mass-sent or exaggerated damages the only reputation you have, and it does not work.",
    teach: [
      "One message, one person, written for them specifically.",
      "Say what you noticed, what you made, and what you are asking.",
      "Never automate sending or generate messages in bulk.",
      "Ask for something small and specific.",
      "Accept silence; a follow-up is one message, not a campaign.",
    ],
    explanation: [
      "Specificity is the whole method. A message that names something particular — a decision in their published work, a problem their listing described, a page you actually read — is answered at a rate that generic messages are not, and writing it takes fifteen minutes rather than three.",
      "The structure is short: what you noticed, what you have made that is relevant, and what you are asking for. Two paragraphs. Anything longer is asking a stranger for time before you have given them a reason.",
      "Bulk and automation are excluded here as a matter of practice, not of squeamishness. Mass messages are recognisable, they are frequently a nuisance to the recipient, and they associate your name with that behaviour permanently. This course does not send anything automatically and neither should you.",
      "Ask small. A specific question about their work, or twenty minutes of conversation, is answerable. “Can you refer me” is not, from a stranger, and asking it converts a possible relationship into a closed one.",
      "Silence is the normal outcome and is not information about your worth. One follow-up after a reasonable interval is proportionate; more than that is pressure, and it is remembered.",
    ],
    misconception:
      "“More messages means more chances.” More messages means a lower quality bar, recognisably generic text, and a name attached to it. Ten written properly beat a hundred sent.",
    example:
      "Six messages over two weeks, each written from scratch. One named a specific accessibility decision in the company's published design notes and asked a real question about it. One responded to a listing's line about designers running their own research and described the repair-shop project's five sessions in two sentences with a link. Each asked for twenty minutes or an answer to one question. Two replied, one with a conversation and one with a decline. Three did not reply and received one follow-up each after ten days; one of those then replied. Nothing was automated, and no message was reused.",
    freeToolPath:
      "Your own email. No outreach tool, sequencing service, contact database or paid platform is required, and none may be used here.",
    outputs: [
      "Individually written messages, each naming something specific",
      "A small, answerable ask in each",
      "A written rule against bulk sending and automation",
      "A follow-up rule with an interval and a limit",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose recipients",
        instructions: [
          "Choose people connected to work you have actually read.",
          "Prefer a specific person over a general address.",
        ],
      },
      {
        minutes: 35,
        title: "Write individually",
        instructions: [
          "Write each message from scratch, naming something specific.",
          "Keep it to two short paragraphs.",
        ],
      },
      {
        minutes: 20,
        title: "Set the ask",
        instructions: [
          "Ask for one small, answerable thing.",
          "Remove any request a stranger could not grant.",
        ],
      },
      {
        minutes: 15,
        title: "Write your rules",
        instructions: [
          "Write your rule against automation and bulk sending.",
          "Write the follow-up interval and the limit of one.",
        ],
      },
      {
        minutes: 20,
        title: "Check before sending",
        instructions: [
          "Check every claim in each message against your matrix.",
          "Send them yourself, one at a time.",
        ],
      },
    ],
    check: [
      {
        question: "Why write each message individually?",
        answer:
          "Because specificity is what gets answered, and generic messages are recognisable. Fifteen minutes each beats three minutes each at scale.",
      },
      {
        question: "Why ask small?",
        answer:
          "Because a stranger can answer a question or give twenty minutes. A referral request from a stranger closes the conversation.",
      },
      {
        question: "How much follow-up is proportionate?",
        answer:
          "One message after a reasonable interval. Beyond that it is pressure, and it is remembered longer than the original message.",
      },
    ],
    rubric: [
      "Each message is individually written and specific",
      "Each ask is small and answerable",
      "Automation and bulk sending are excluded by rule",
      "A follow-up rule with an interval and a limit exists",
    ],
    criteria: [
      {
        criterion: "Each message is individually written and specific",
        evidence: "Messages naming something particular to the recipient.",
        levels: [
          "A template with names substituted.",
          "Partly personalised.",
          "Individually written throughout.",
          "As adequate, and each names something you actually read.",
        ],
        remediation:
          "Rewrite each message from scratch after reading something of theirs.",
        recheck: "The messages.",
      },
      {
        criterion: "Each ask is small and answerable",
        evidence: "One specific request per message.",
        levels: [
          "Asks for a referral or a job.",
          "Vague ask.",
          "One small, answerable ask.",
          "As adequate, and the ask is proportionate to a stranger's time.",
        ],
        remediation: "Replace the ask with one question or twenty minutes.",
        recheck: "The asks.",
      },
      {
        criterion: "Automation and bulk sending are excluded by rule",
        evidence: "A written rule, and messages sent by hand.",
        levels: [
          "Bulk or automated sending used.",
          "Manual but templated.",
          "Written rule and manual sending.",
          "As adequate, and no outreach tool or contact database was used.",
        ],
        remediation:
          "Stop any automated sending, write the rule, and send by hand.",
        recheck: "The rule and the sent messages.",
      },
      {
        criterion:
          "A follow-up rule with an interval and a limit exists",
        evidence: "A written interval and a maximum of one follow-up.",
        levels: [
          "No rule, or repeated chasing.",
          "Interval without a limit.",
          "Interval and limit written.",
          "As adequate, and silence is recorded as normal rather than as failure.",
        ],
        remediation: "Write the interval and the limit before sending anything.",
        recheck: "The rule.",
      },
    ],
    repairs: [
      "If a template was used, rewrite each message individually.",
      "If the ask is large, replace it with one small question.",
      "If anything was automated, stop and send by hand.",
      "If follow-ups exceed one, stop and record the rule.",
    ],
    portfolio:
      "Keep the messages and the replies; the pattern in what was answered is the most useful feedback the search produces.",
    resource: roleDescription,
    resources: [
      {
        ...roleDescription,
        section: "How the employer describes its process and what it values.",
        purpose:
          "Shows the kind of specific detail worth naming in a message.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer; use it as an example of reading before writing, not as a template for what to say.",
        fallbackId: "R22",
      },
      {
        ...privacy,
        section: "Handling information about identifiable people.",
        purpose:
          "Keeps participant and client details out of messages to strangers.",
        minutes: "15–25",
        limits:
          "Free reading, no account; published 5 November 2018. Verified 2026-09-06. UK GDPR framing; the discipline about other people's data is what applies here.",
        fallbackId: "R53",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l10-v1",
    module: "m20",
    week: 20,
    day: 10,
    level: 6,
    areas: [17],
    guided: true,
    title: "Interview practice: the walkthrough and the examples",
    objective:
      "Run a full practice interview covering the portfolio walkthrough and three behavioural examples, recorded and reviewed.",
    bringForward: "Your recorded walkthrough and your question list.",
    prerequisite: "The ten-minute walkthrough and prepared question answers.",
    why: "The conversation, not the portfolio, is where most decisions are actually made.",
    teach: [
      "Walk through one project, not all three, unless asked.",
      "Prepare three behavioural examples with situation, action and result.",
      "Use real examples; a fabricated one collapses under follow-up.",
      "Include an example where you were wrong.",
      "Practise with someone who will interrupt you.",
    ],
    explanation: [
      "One project done properly is the right answer to “walk me through your work”. The m19 ten-minute version is exactly this, and the discipline is not to drift into the other two when the first one gets a good reaction.",
      "Behavioural questions want a specific instance, and the reliable shape is the situation, what you did, and what happened. Vague answers about how you generally approach things are the most common failure and the easiest to fix: prepare three real instances and use them.",
      "The follow-up is what tests truth. An invented example survives one question and fails the second, because the details do not exist to be asked about. Every example you prepare should be one you could answer three questions deep.",
      "Include one where you were wrong, because it will be asked and because it is the strongest example you have. The failed repair from m18, the finding you misread, the participant you should have recruited — each has a real ending and shows the calibration the whole interview is testing.",
      "Practise with someone who interrupts, since real interviews do. The prepared paragraph delivered uninterrupted is not the skill; answering the question actually asked, briefly, is.",
    ],
    misconception:
      "“I should show all three projects to prove range.” You will show one properly or three badly. Range is visible in the portfolio; the conversation is for depth.",
    example:
      "A ninety-minute practice with someone who had not seen the work. Ten-minute walkthrough of project three, interrupted four times, twice on the measurement and twice on the sample. Three behavioural examples prepared: a disagreement with a reviewer that was resolved by testing rather than argument; a failed repair with what it changed; and a recruitment failure with what was done instead. The interviewer pushed three questions deep on the second, which held because it was real. Two weaknesses noted afterwards: drifting into the interface when asked about a decision, and answering a question about limits by defending the work before conceding.",
    freeToolPath:
      "One person and a recorder. No interview-practice platform, coaching subscription or paid mock service is required.",
    outputs: [
      "A practised walkthrough delivered under interruption",
      "Three real behavioural examples in situation-action-result form",
      "One example where you were wrong",
      "A recording and a note of two weaknesses",
    ],
    steps: [
      {
        minutes: 25,
        title: "Prepare the examples",
        instructions: [
          "Write three real instances with situation, action and result.",
          "Check each could survive three follow-up questions.",
        ],
      },
      {
        minutes: 20,
        title: "Choose the wrong one",
        instructions: [
          "Prepare an example where you were wrong and what changed.",
          "End it on what you did differently afterwards.",
        ],
      },
      {
        minutes: 35,
        title: "Run the practice",
        instructions: [
          "Ask someone to interrupt and to push follow-ups.",
          "Record it.",
        ],
      },
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Watch once and note two specific weaknesses.",
          "Check whether you conceded before defending.",
        ],
      },
      {
        minutes: 20,
        title: "Repair and repeat one section",
        instructions: [
          "Redo the weakest section with the correction.",
          "Keep both recordings.",
        ],
      },
    ],
    check: [
      {
        question: "How many projects in a walkthrough?",
        answer:
          "One, properly. Range is visible in the portfolio; the conversation is for depth, and drifting into a second usually loses both.",
      },
      {
        question: "Why does a fabricated example fail?",
        answer:
          "Because it survives one question and not the second. The details do not exist, and the interviewer is asking precisely to find that out.",
      },
      {
        question: "Why prepare an example where you were wrong?",
        answer:
          "Because it will be asked and because it demonstrates calibration, which is what the whole conversation is testing.",
      },
    ],
    rubric: [
      "One project walked through under interruption",
      "Three real examples in situation-action-result form",
      "An example where you were wrong, with the change",
      "A recording reviewed with two weaknesses named",
    ],
    criteria: [
      {
        criterion: "One project walked through under interruption",
        evidence: "A practice walkthrough with interruptions handled.",
        levels: [
          "Uninterrupted monologue, or several projects.",
          "One project, few interruptions.",
          "One project, interrupted and handled.",
          "As adequate, and the answers stayed brief under pressure.",
        ],
        remediation:
          "Ask your practice partner to interrupt at least four times.",
        recheck: "The recording.",
      },
      {
        criterion: "Three real examples in situation-action-result form",
        evidence: "Three specific instances, each defensible three questions deep.",
        levels: [
          "General statements of approach.",
          "Specific but shallow.",
          "Three instances that hold under follow-up.",
          "As adequate, and each names what actually happened afterwards.",
        ],
        remediation:
          "Replace any general answer with a specific instance from your records.",
        recheck: "The examples.",
      },
      {
        criterion: "An example where you were wrong, with the change",
        evidence: "A real error and what you did differently after it.",
        levels: [
          "None, or a disguised strength.",
          "An error without a change.",
          "An error with a real change.",
          "As adequate, and the change is visible in a later project.",
        ],
        remediation:
          "Take the failed repair or recruitment failure and prepare it.",
        recheck: "The example.",
      },
      {
        criterion: "A recording reviewed with two weaknesses named",
        evidence: "A recording and two specific, actionable weaknesses.",
        levels: [
          "No recording.",
          "Recorded, not reviewed.",
          "Reviewed with two weaknesses.",
          "As adequate, and one section was redone with the correction.",
        ],
        remediation: "Watch the recording and write two specific weaknesses.",
        recheck: "The review notes.",
      },
    ],
    repairs: [
      "If you covered three projects, redo it with one.",
      "If an example is general, replace it with an instance.",
      "If nothing went wrong in your examples, use the failed repair.",
      "If it was not recorded, run it again and record it.",
    ],
    portfolio:
      "The practice recordings are private working material, but the prepared examples are reusable in every conversation that follows.",
    resource: portfolioProcess,
    resources: [
      {
        ...portfolioProcess,
        section: "Talking through your process using process artefacts.",
        purpose: "Supports the walkthrough half of the practice.",
        minutes: "30–45",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
      {
        ...roleDescription,
        section: "The stages of the hiring process and what each examines.",
        purpose: "Shapes what the practice interview should cover.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's process; others differ substantially, and this is not evidence about hiring in India.",
        fallbackId: "R22",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l11-v1",
    module: "m20",
    week: 20,
    day: 11,
    level: 6,
    areas: [17],
    guided: true,
    title: "Exercises, take-homes and saying no",
    objective:
      "Prepare for design exercises and take-home tasks, including how to negotiate scope and when to decline.",
    bringForward: "Your appetite and scoping practice.",
    prerequisite: "Your m17 and m18 scoping work.",
    why: "Take-home tasks are where unpaid work is most often extracted, and where scope judgement is most visible.",
    teach: [
      "Treat a take-home as a scoping problem: fixed time, variable scope.",
      "Ask what they are assessing before you start.",
      "State the time you spent and what you cut.",
      "Decline tasks that are real work for their product.",
      "In a live exercise, think aloud and ask about constraints.",
    ],
    explanation: [
      "The appetite discipline applies directly. A take-home with a stated four hours means four hours; the correct response is to fix the time and cut the scope, then say exactly what you cut and why. Spending fourteen hours to look impressive misrepresents your speed and rewards a practice that harms everyone applying.",
      "Asking what is being assessed is legitimate and informative. If they are assessing research judgement, the deliverable is different from one assessing interface craft, and an employer who cannot answer has told you something useful about how the work is run.",
      "Declaring the time and the cuts is the strongest part of a submission. “Four hours: I did the structure, the main flow and the error states, and did not do visual polish or a second flow, because the states seemed more likely to be what you are assessing” demonstrates exactly the judgement the exercise is meant to test.",
      "Some take-homes are real work. A brief that asks you to redesign a live feature of their product, produce production-ready screens, or solve a problem their team is currently working on is asking for unpaid labour. Declining that, politely and with a reason, is the correct professional response, and an offer to do a shorter neutral exercise instead is reasonable.",
      "Live exercises assess reasoning, not output. Think aloud, ask about constraints and users, state your assumptions, and say what you would check. A confident wrong answer scores worse than a well-reasoned uncertain one.",
    ],
    misconception:
      "“Doing more than asked shows enthusiasm.” It shows you cannot scope, which is a core part of the job. The candidate who fits the time and explains the cuts is the one demonstrating the skill.",
    example:
      "Two exercises. The first, a four-hour take-home about an onboarding flow, was fixed at four hours: structure, main flow and five error states delivered, visual design and a second flow cut, with a note saying so and why. The second brief asked for three production-ready screens redesigning a live page of the company's product, and was declined in two sentences — the work was theirs to be paid for — with an offer to do a two-hour neutral exercise or to walk through an existing project instead. That offer was accepted. A live exercise was practised twice with someone playing the interviewer, focusing on asking about constraints before drawing anything.",
    freeToolPath:
      "Whatever you already use for design work, plus a timer. No paid tool should be required by a brief; if one is, say so and propose an alternative.",
    outputs: [
      "A take-home protocol: fixed time, scope cut, cuts stated",
      "A question to ask before starting any exercise",
      "A written decline for briefs that are real product work",
      "Two practised live exercises focused on reasoning aloud",
    ],
    steps: [
      {
        minutes: 20,
        title: "Write the protocol",
        instructions: [
          "Write your fixed-time rule and how you will cut scope.",
          "Include how you will state the time and the cuts.",
        ],
      },
      {
        minutes: 15,
        title: "Prepare the questions",
        instructions: [
          "Write what you will ask before starting a take-home.",
          "Include what is being assessed and who the users are.",
        ],
      },
      {
        minutes: 25,
        title: "Draft the decline",
        instructions: [
          "Write a short, polite decline for a brief that is real product work.",
          "Include an alternative you would happily do.",
        ],
      },
      {
        minutes: 35,
        title: "Practise a live exercise",
        instructions: [
          "Have someone give you a problem and forty minutes.",
          "Ask about constraints first and think aloud throughout.",
        ],
      },
      {
        minutes: 20,
        title: "Review",
        instructions: [
          "Note where you started drawing before asking.",
          "Repeat one section with the correction.",
        ],
      },
    ],
    check: [
      {
        question: "Why fix the time rather than the scope?",
        answer:
          "Because it is the skill being assessed, and overrunning misrepresents your speed while rewarding a practice that harms every other applicant.",
      },
      {
        question: "When should a take-home be declined?",
        answer:
          "When it is real work for their product — a live feature, production screens, or a problem their team is currently solving. Decline politely and offer an alternative.",
      },
      {
        question: "What does a live exercise assess?",
        answer:
          "Reasoning. Asking about constraints, stating assumptions and saying what you would check scores better than a confident wrong answer.",
      },
    ],
    rubric: [
      "A fixed-time protocol with stated cuts exists",
      "Questions are prepared to ask before starting",
      "A decline is drafted for real product work",
      "Live exercise practice focused on reasoning aloud",
    ],
    criteria: [
      {
        criterion: "A fixed-time protocol with stated cuts exists",
        evidence: "A written rule fixing time and cutting scope.",
        levels: [
          "No rule; time expands.",
          "Time fixed, cuts not declared.",
          "Time fixed and cuts declared.",
          "As adequate, and the declaration explains why those cuts.",
        ],
        remediation:
          "Write the rule and the sentence you will include with any submission.",
        recheck: "The protocol.",
      },
      {
        criterion: "Questions are prepared to ask before starting",
        evidence: "A short list including what is being assessed.",
        levels: [
          "None.",
          "General questions.",
          "Specific, including the assessment focus.",
          "As adequate, and it includes who the users are and any constraints.",
        ],
        remediation: "Write the three questions you will always ask.",
        recheck: "The question list.",
      },
      {
        criterion: "A decline is drafted for real product work",
        evidence: "A polite two-sentence decline with an alternative.",
        levels: [
          "No position; would do anything asked.",
          "Would decline without a plan.",
          "Drafted, polite, with an alternative.",
          "As adequate, and it names the boundary without accusation.",
        ],
        remediation:
          "Write the message you would send when a brief crosses the line.",
        recheck: "The draft.",
      },
      {
        criterion: "Live exercise practice focused on reasoning aloud",
        evidence: "A practised exercise where constraints were asked first.",
        levels: [
          "Not practised.",
          "Practised, drawing first.",
          "Constraints asked, reasoning aloud.",
          "As adequate, and assumptions and checks were stated explicitly.",
        ],
        remediation:
          "Practise again and do not draw until you have asked three questions.",
        recheck: "The practice notes.",
      },
    ],
    repairs: [
      "If time expanded, redo it within the stated limit and declare the cuts.",
      "If no questions were asked, prepare the three you will always ask.",
      "If you would accept any brief, draft the decline now.",
      "If you drew before asking, practise the opening again.",
    ],
    portfolio:
      "A take-home submission that fits the stated time and explains its cuts is portfolio-quality evidence of scoping judgement.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section: "Setting the appetite, and fixed time with variable scope.",
        purpose:
          "Supplies the reasoning for fixing the time and cutting the scope of a take-home.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; a print edition is sold and is not required. Verified 2026-09-06. One company's internal process; take the appetite reasoning, not the ceremony.",
        fallbackId: "R07",
      },
      {
        ...roleDescription,
        section: "The exercise and interview stages the employer describes.",
        purpose: "Shows what kind of exercise an employer may set and why.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's process; the presence of an exercise there says nothing about prevalence elsewhere.",
        fallbackId: "R22",
      },
    ],
  }),
  withLegacyText({
    id: "m20-l12-v1",
    module: "m20",
    week: 20,
    day: 12,
    level: 6,
    areas: [17],
    guided: true,
    title: "Running the search as a practice",
    objective:
      "Set up the ongoing method — records, cadence, re-gathering evidence and reviewing what you learn — and write the standing rules you will hold to.",
    bringForward: "Everything from this module.",
    prerequisite: "The matrix, resume, profile and outreach records.",
    why: "A search runs for months, and the difference between a practice and a spiral is entirely in whether it is recorded and bounded.",
    teach: [
      "Keep a record: what you sent, when, and what happened.",
      "Set a cadence you can hold, not one that consumes every evening.",
      "Re-gather the vacancy evidence; it expires within weeks.",
      "Review monthly against the matrix, not against your mood.",
      "Write the standing rules now, while you are calm.",
    ],
    explanation: [
      "The record is a small table and it does more than it looks. What was sent, to whom, on what date, and what came back — that is enough to see which of your messages get answered, which listings never respond, and whether the pattern is changing. Without it, months of effort become an undifferentiated feeling.",
      "Cadence should be sustainable. Two carefully written applications a week, held for three months, produces more than fifteen in one week followed by nothing. Decide the number, put it in the record, and treat exceeding it as a warning rather than as progress.",
      "The vacancy evidence expires. Your captures were current in one window and mostly will not exist in a month, so a search running past that needs a fresh pass, which is quicker the second time. Anything you concluded from the old sample carries its date whenever you use it.",
      "Monthly review against the matrix is what keeps the search connected to reality: which cells changed, which absences still block, and whether the gap you closed made a difference to what came back. The alternative is reviewing against how you feel, which after eight weeks of silence is not an instrument you should trust.",
      "Write the standing rules now, while nothing is at stake: no fabricated experience, no inflated role, no automated outreach, no unpaid production work, no claim you cannot evidence, and a rest day. Under pressure these decisions get made badly, and a rule written in advance is what you fall back on.",
    ],
    misconception:
      "“I should apply to everything and see what sticks.” Volume without records teaches you nothing and burns the effort you will need in month three. A held cadence with a record improves; a spray does not.",
    example:
      "The record is one table: date, employer, role, route, what was sent, response and date of response. Cadence: two applications and one outreach message a week, one rest day, reviewed on the first of each month. The vacancy pass is repeated every six weeks, taking about two hours the second time. The monthly review asks three questions: which matrix cells changed, which absence appears most often in refusals, and what the response pattern suggests about the messages rather than about her. Standing rules written and kept visible, including that nothing is automated and no unpaid production work is done.",
    freeToolPath:
      "A spreadsheet or text table and a calendar reminder. No applicant tracker, subscription or premium job-board tier is required.",
    outputs: [
      "A record table with what was sent and what happened",
      "A stated weekly cadence including rest",
      "A schedule for re-gathering vacancy evidence",
      "Written standing rules and a monthly review question set",
    ],
    steps: [
      {
        minutes: 20,
        title: "Build the record",
        instructions: [
          "Create the table with date, employer, route, sent and response.",
          "Add everything you have already sent.",
        ],
      },
      {
        minutes: 20,
        title: "Set the cadence",
        instructions: [
          "Decide a weekly number you can hold for three months.",
          "Include a rest day and write it down.",
        ],
      },
      {
        minutes: 20,
        title: "Schedule the re-gather",
        instructions: [
          "Set an interval for repeating the vacancy pass.",
          "Note that old conclusions carry their gathering date.",
        ],
      },
      {
        minutes: 25,
        title: "Write the review questions",
        instructions: [
          "Write the three questions your monthly review will ask.",
          "Tie them to the matrix rather than to how the month felt.",
        ],
      },
      {
        minutes: 25,
        title: "Write the standing rules",
        instructions: [
          "Write the rules you will not break under pressure.",
          "Keep them where you will see them.",
        ],
      },
    ],
    check: [
      {
        question: "Why keep a record?",
        answer:
          "Because it turns months of effort into a pattern you can read — which messages are answered, which routes never respond, what is changing.",
      },
      {
        question: "Why re-gather the vacancy evidence?",
        answer:
          "Because listings expire within weeks. A conclusion from an old sample carries its date, and a search past a month needs a fresh pass.",
      },
      {
        question: "Why write standing rules now?",
        answer:
          "Because under pressure these decisions get made badly. A rule written while nothing is at stake is what you fall back on later.",
      },
    ],
    rubric: [
      "A record table exists and is populated",
      "A sustainable cadence including rest is stated",
      "Vacancy evidence has a re-gathering schedule",
      "Standing rules and review questions are written",
    ],
    criteria: [
      {
        criterion: "A record table exists and is populated",
        evidence: "A table with dates, routes, what was sent and responses.",
        levels: [
          "No record.",
          "Partial or retrospective.",
          "Complete and current.",
          "As adequate, and it already shows a pattern worth acting on.",
        ],
        remediation: "Build the table and enter everything sent so far.",
        recheck: "The record.",
      },
      {
        criterion: "A sustainable cadence including rest is stated",
        evidence: "A weekly number and a rest day, written down.",
        levels: [
          "No cadence, or an unsustainable one.",
          "A number without rest.",
          "A number you could hold for three months, with rest.",
          "As adequate, and exceeding it is treated as a warning.",
        ],
        remediation:
          "Halve the number until it is one you could hold for three months.",
        recheck: "The cadence.",
      },
      {
        criterion: "Vacancy evidence has a re-gathering schedule",
        evidence: "A stated interval and a note on dating old conclusions.",
        levels: [
          "Treated as permanent.",
          "Acknowledged as ageing.",
          "A scheduled re-gather with dated conclusions.",
          "As adequate, and the second pass is planned to be quicker.",
        ],
        remediation:
          "Set an interval and mark every existing conclusion with its date.",
        recheck: "The schedule.",
      },
      {
        criterion: "Standing rules and review questions are written",
        evidence:
          "Rules against fabrication, inflation, automation and unpaid production work, plus three review questions.",
        levels: [
          "Neither written.",
          "One of the two.",
          "Both written and kept visible.",
          "As adequate, and the review questions reference the matrix rather than feelings.",
        ],
        remediation:
          "Write the rules you will not break and the questions you will ask monthly.",
        recheck: "The rules and questions.",
      },
    ],
    repairs: [
      "If there is no record, build it and back-fill what you remember.",
      "If the cadence is unsustainable, halve it.",
      "If the vacancy evidence is undated, date it and schedule a re-gather.",
      "If the rules are unwritten, write them before the next application.",
    ],
    portfolio:
      "This is the end of the course and the start of the practice: a portfolio, an evidence matrix, a method for gathering your own evidence, and rules you wrote while you were calm.",
    resource: designLevels,
    resources: [
      {
        ...designLevels,
        section:
          "How expectations, scope and progression are described over time.",
        purpose:
          "Gives one published example of what growth is expected to look like after being hired.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's management ladder and its own measures of design success; it is not a career path, a standard, or evidence about roles in India.",
        fallbackId: "R23",
      },
      {
        ...intervals,
        section: "How sample size limits what a pattern can support.",
        purpose:
          "Keeps the monthly review from drawing conclusions from a handful of responses.",
        minutes: "15–25",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Written for usability metrics; applied here as a caution against reading a pattern into six replies.",
        fallbackId: "R45",
      },
    ],
  }),
];
