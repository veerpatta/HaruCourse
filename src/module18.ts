import { withLegacyText, type Lesson } from "./teaching";
// Module 18 is a project rather than a syllabus. It teaches almost no new
// concepts: it requires the learner to run everything from m05 to m17 once
// more, alone, in a domain she has not used for practice, and to produce work
// whose limits she can state exactly. The lessons are scaffolding for that
// project, and the effort estimate is the module's honest weakness — the real
// work will take longer than the lesson steps, and the header says so.
const manual = {
  title: "GOV.UK: user research manual",
  id: "R08",
  url: "https://www.gov.uk/service-manual/user-research",
};
const analyse = {
  title: "GOV.UK: analyse a research session",
  id: "R04",
  url: "https://www.gov.uk/service-manual/user-research/analyse-a-research-session",
};
const prototypes = {
  title: "GOV.UK: making prototypes",
  id: "R12",
  url: "https://www.gov.uk/service-manual/design/making-prototypes",
};
const usability = {
  title: "GOV.UK: moderated usability testing",
  id: "R05",
  url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
};
const standard = {
  title: "GOV.UK: Service Standard",
  id: "R19",
  url: "https://www.gov.uk/service-manual/service-standard",
};
const shapeUp = {
  title: "Ryan Singer: Shape Up",
  id: "R47",
  url: "https://basecamp.com/shapeup/webbook",
};
const participants = {
  title: "GOV.UK: finding user research participants",
  id: "R52",
  url: "https://www.gov.uk/service-manual/user-research/find-user-research-participants",
};
const consent = {
  title: "GOV.UK: getting informed consent",
  id: "R53",
  url: "https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research",
};
const sharing = {
  title: "GOV.UK: sharing user research findings",
  id: "R59",
  url: "https://www.gov.uk/service-manual/user-research/sharing-user-research-findings",
};
const portfolio = {
  title: "NN/g: UX portfolio",
  id: "R22",
  url: "https://www.nngroup.com/articles/ux-design-portfolios/",
};
export const module18: Lesson[] = [
  withLegacyText({
    id: "m18-l01-v1",
    module: "m18",
    week: 18,
    day: 1,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Choosing a project you can actually finish",
    objective:
      "Choose a domain, a problem and a scope for the third project, and prove you have access to at least three people before committing to it.",
    bringForward: "Your two earlier projects and what they lacked.",
    prerequisite: "Your earlier project work and its recorded gaps.",
    why: "Most independent projects fail on access, not on ambition. Choosing without checking who will talk to you is choosing to invent findings later.",
    teach: [
      "Choose a domain you have not used for practice, to widen the portfolio.",
      "Access first: name three people who will talk to you before you commit.",
      "Prefer a problem someone already has to one you find interesting.",
      "Scope to the appetite you actually have, in weeks.",
      "Write what would make you abandon it.",
    ],
    explanation: [
      "The domain choice matters for the portfolio, which is the next module's subject. Two projects in the same context read as one; a third in a different domain — a small clinic, a tuition service, a repair shop, a community group — shows the process transfers, which is what a reviewer is trying to establish.",
      "Access is the binding constraint and the one people check last. Before committing, name three specific people who have agreed to speak to you, not three categories of person you might reach. Every recorded failure in the course's own research work has been a recruitment failure, and the same will be true here.",
      "A problem someone already has beats a problem you find interesting, because it comes with a person who will explain it and care about the answer. The provider who cannot keep track of cancellations, the group whose members miss sessions, the shop whose customers keep ringing about the same thing — each is a real problem with a built-in participant.",
      "Scope in weeks, using the appetite discipline from m17: this is worth four weeks of evenings, not twelve. A project that overruns is abandoned, and an abandoned project teaches nothing and cannot be shown.",
    ],
    misconception:
      "“I will find participants once I have started.” You will find that you cannot, and then either the project stalls or you write something research-shaped without research. Access is the first decision, not a later step.",
    example:
      "Three candidate domains were considered: a physiotherapy clinic's appointment reminders, a tuition centre's parent communication, and a repair shop's job tracking. The third was chosen because the owner had already complained about the problem twice and agreed to two conversations, and two customers agreed through him. The problem: nobody can tell a customer when a repair will be ready, so the shop is interrupted by calls all day. Scope: four weeks of evenings. Abandonment condition: if the shop's owner becomes unavailable for two consecutive weeks, stop and record it.",
    freeToolPath:
      "Conversations and written notes. This module requires no tools beyond the ones used in m05 to m17.",
    outputs: [
      "A chosen domain, different from earlier projects",
      "A problem someone already has, in their words",
      "Three named people who have agreed to take part",
      "A scope in weeks and a written abandonment condition",
    ],
    steps: [
      {
        minutes: 25,
        title: "List candidate domains",
        instructions: [
          "List three domains you have not used, where you know someone.",
          "For each, write the problem you have heard someone complain about.",
        ],
      },
      {
        minutes: 30,
        title: "Test access",
        instructions: [
          "Approach people in the most promising domain.",
          "Get agreement from at least three before committing.",
          "Record who declined and why.",
        ],
      },
      {
        minutes: 25,
        title: "State the problem in their words",
        instructions: [
          "Write the problem as the person described it.",
          "Avoid restating it as a solution.",
        ],
      },
      {
        minutes: 25,
        title: "Set the appetite",
        instructions: [
          "Decide how many weeks this is worth.",
          "Write what you will not attempt within that.",
        ],
      },
      {
        minutes: 15,
        title: "Write the abandonment condition",
        instructions: [
          "State what would make you stop, and what you would record if you did.",
          "Save the choice with the access record.",
        ],
      },
    ],
    check: [
      {
        question: "Why check access before choosing?",
        answer:
          "Because access is what actually limits an independent project. Choosing first means either stalling or producing something research-shaped without research.",
      },
      {
        question: "Why a different domain?",
        answer:
          "Because two projects in one context read as one. A third elsewhere shows the process transfers, which is what a portfolio reviewer is checking.",
      },
      {
        question: "Why write an abandonment condition?",
        answer:
          "Because projects fail slowly and quietly. A written condition converts a stall into a decision you can record and learn from.",
      },
    ],
    rubric: [
      "The domain differs from earlier projects",
      "Three people have agreed before commitment",
      "The problem is stated in the person's words",
      "Scope and abandonment condition are written",
    ],
    criteria: [
      {
        criterion: "The domain differs from earlier projects",
        evidence: "A domain and context distinct from your previous work.",
        levels: [
          "The same domain again.",
          "A different surface in the same context.",
          "A genuinely different domain.",
          "As adequate, and the choice is justified by what the portfolio lacks.",
        ],
        remediation:
          "Choose a context whose constraints differ from your earlier projects.",
        recheck: "The domain choice.",
      },
      {
        criterion: "Three people have agreed before commitment",
        evidence:
          "Three named people with recorded agreement, plus who declined.",
        levels: [
          "No confirmed access.",
          "One or two agreements.",
          "Three agreements recorded before committing.",
          "As adequate, and the declines are recorded with reasons.",
        ],
        remediation:
          "Ask three people directly and record their answers before starting the work.",
        recheck: "The access record.",
      },
      {
        criterion: "The problem is stated in the person's words",
        evidence:
          "A quotation or close paraphrase of how the person described it.",
        levels: [
          "Stated as a solution.",
          "Restated in your own analytical vocabulary.",
          "In their words, without a solution.",
          "As adequate, and the statement names who is affected and how often.",
        ],
        remediation:
          "Ask the person to describe the problem again and write it down verbatim.",
        recheck: "The problem statement.",
      },
      {
        criterion: "Scope and abandonment condition are written",
        evidence:
          "A stated number of weeks and a condition that would stop the project.",
        levels: [
          "Neither.",
          "Scope without an abandonment condition.",
          "Both written before starting.",
          "As adequate, and the scope reflects the time you actually have.",
        ],
        remediation:
          "Write the weeks you can genuinely give and what would end the project.",
        recheck: "The scope statement.",
      },
    ],
    repairs: [
      "If the domain repeats, choose one with different constraints.",
      "If access is unconfirmed, get three agreements before continuing.",
      "If the problem is a solution, ask again and record their words.",
      "If there is no abandonment condition, write one now.",
    ],
    portfolio:
      "The access record and the abandonment condition are worth keeping: they show a project chosen deliberately rather than one that happened to be convenient.",
    resource: participants,
    resources: [
      {
        ...participants,
        section:
          "Recruitment routes, criteria and realistic lead times.",
        purpose: "Supplies the access planning this lesson requires up front.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. Written for teams with agencies; your route is your own network and must be declared in the project.",
        fallbackId: "R08",
      },
      {
        ...shapeUp,
        section: "Setting the appetite before scoping.",
        purpose:
          "Gives the discipline for scoping the project to the time you actually have.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; take the appetite reasoning.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l02-v1",
    module: "m18",
    week: 18,
    day: 2,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "The research plan, run properly once more",
    objective:
      "Produce the research plan for this project — questions, methods, recruitment, consent, data handling — reusing your m05 artefacts and adapting them to this domain.",
    bringForward: "Your m05 plans, screener, consent introduction and data plan.",
    prerequisite: "Your m05 research artefacts.",
    why: "Doing it a second time, alone, in an unfamiliar domain is what turns a taught procedure into a practice you own.",
    teach: [
      "Reuse your own artefacts; adapt rather than rewriting from nothing.",
      "The questions must come from this domain, not from the last one.",
      "Consent and data handling transfer directly and must still be adapted.",
      "Plan for the access you have, not the access you would like.",
      "Write the exclusions now, as before.",
    ],
    explanation: [
      "Reuse is the point. Your screener, consent introduction and data plan were built to be adapted, and adapting them takes an hour where writing from scratch takes a day. The parts that need real work are the questions and the method choice, because those belong to this problem.",
      "The questions must come from the domain. A repair shop's problem is not a booking problem with different words, and importing the earlier project's questions would produce an investigation of the last project conducted in a new place. Start from what the owner said and what you do not know.",
      "Consent and data handling are the parts that transfer most directly and are still specific: whose data, in whose premises, with what recording, and what you will do with photographs of a workshop that contains other people's property. The m05 rules apply and the details differ.",
      "Plan for the three people you have. If your access is the owner and two customers, then your method plan is built from that, and its exclusions — no evidence from customers who never return, none from staff — are written now rather than discovered at reporting time.",
    ],
    misconception:
      "“I know how to do this now, so I can be less formal.” The formality is what protects the work when it is inconvenient. A plan written properly the second time is faster and no less necessary.",
    example:
      "The plan: three questions from the shop's problem, including what a customer does while waiting for news about a repair. Methods: two interviews with the owner, an observation of an afternoon in the shop, and two short conversations with customers collecting items. Recruitment: through the owner, with the bias recorded. Consent: the m05 script adapted for a workshop, including that no photographs would include other customers' items. Data: notes on paper, digitised the same evening, no recordings in the shop. Exclusions written: nothing about customers who never come back, and nothing about how common the problem is across shops.",
    freeToolPath:
      "Your existing documents and a notebook. Nothing new is needed.",
    outputs: [
      "Three research questions specific to this domain",
      "A method plan matched to the access you actually have",
      "An adapted consent introduction and data plan",
      "Written exclusions for the whole study",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the questions",
        instructions: [
          "Start from what the person told you and what you do not know.",
          "Rank by the decision each would change.",
        ],
      },
      {
        minutes: 25,
        title: "Choose methods for real access",
        instructions: [
          "Match each question to a method you can actually run with three people.",
          "Record any question you cannot answer.",
        ],
      },
      {
        minutes: 30,
        title: "Adapt consent and data handling",
        instructions: [
          "Adapt your m05 consent introduction to this setting.",
          "Address anything specific: premises, other people's property, recording.",
        ],
      },
      {
        minutes: 25,
        title: "Write the exclusions",
        instructions: [
          "Write what this study will not establish.",
          "Include who you cannot reach through this route.",
        ],
      },
      {
        minutes: 15,
        title: "Check the plan is runnable",
        instructions: [
          "Put the sessions on a calendar with real dates.",
          "Save the plan with the adapted artefacts.",
        ],
      },
    ],
    check: [
      {
        question: "What should be reused and what rewritten?",
        answer:
          "Reuse the screener, consent and data plan; rewrite the questions and method choice, because those belong to this problem rather than the last one.",
      },
      {
        question: "Why plan for the access you have?",
        answer:
          "Because a plan built on hoped-for participants produces a study that either stalls or quietly substitutes weaker evidence.",
      },
      {
        question: "What is domain-specific about consent here?",
        answer:
          "The setting: other people's property, other customers present, and what may be photographed or recorded in someone's workplace.",
      },
    ],
    rubric: [
      "Questions come from this domain and are ranked",
      "Methods match the access actually secured",
      "Consent and data handling are adapted to the setting",
      "Exclusions are written before fieldwork",
    ],
    criteria: [
      {
        criterion: "Questions come from this domain and are ranked",
        evidence:
          "Three questions traceable to what the person said, ranked by decision impact.",
        levels: [
          "Questions imported from the earlier project.",
          "Domain questions without ranking.",
          "Domain-specific and ranked.",
          "As adequate, and one question came from something the owner said that surprised you.",
        ],
        remediation:
          "Re-read your notes from the first conversation and write the questions from them.",
        recheck: "The questions.",
      },
      {
        criterion: "Methods match the access actually secured",
        evidence:
          "A method per question runnable with the three participants you have.",
        levels: [
          "Methods requiring participants you do not have.",
          "Mostly runnable with one aspirational method.",
          "All runnable with your actual access.",
          "As adequate, and unanswerable questions are recorded as gaps.",
        ],
        remediation:
          "Cross out any method needing people who have not agreed, and record the gap.",
        recheck: "The method plan.",
      },
      {
        criterion:
          "Consent and data handling are adapted to the setting",
        evidence:
          "An adapted script addressing premises, other people and recording.",
        levels: [
          "Reused unchanged.",
          "Adapted superficially.",
          "Addresses the specific conditions of this setting.",
          "As adequate, and it names something you will not photograph or record.",
        ],
        remediation:
          "Walk the setting mentally and write what could be captured that should not be.",
        recheck: "The adapted consent.",
      },
      {
        criterion: "Exclusions are written before fieldwork",
        evidence:
          "A written list of what the study will not establish, including unreachable groups.",
        levels: [
          "No exclusions.",
          "Generic small-sample caveats.",
          "Specific exclusions including who is unreachable.",
          "As adequate, and they are written to be reused in the report.",
        ],
        remediation:
          "Write who this route cannot reach and what claims that rules out.",
        recheck: "The exclusions.",
      },
    ],
    repairs: [
      "If questions were imported, rewrite them from this domain's notes.",
      "If a method needs people you lack, cut it and record the gap.",
      "If consent is unchanged, address the setting's specifics.",
      "If exclusions are generic, name who is unreachable here.",
    ],
    portfolio:
      "A second research plan, adapted rather than copied, is evidence that the process is yours rather than a procedure you followed once.",
    resource: manual,
    resources: [
      {
        ...manual,
        section:
          "Planning a round of research, choosing methods and recruiting.",
        purpose: "Supports the plan for a second, independent study.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Team-oriented; adapt the procedure to working alone as you did in m05.",
        fallbackId: "R04",
      },
      {
        ...consent,
        section: "What participants must understand and how consent is recorded.",
        purpose:
          "Grounds the adapted consent script for an unfamiliar setting.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 5 November 2018. UK jurisdiction; check Indian requirements from a primary source before recruiting.",
        fallbackId: "R54",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l03-v1",
    module: "m18",
    week: 18,
    day: 3,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Fieldwork and synthesis, unsupervised",
    objective:
      "Run the planned research, synthesise it into findings with counts and contradictions, and record what you would do differently.",
    bringForward: "Your research plan and adapted artefacts.",
    prerequisite: "Your plan and confirmed sessions.",
    why: "This is the same work as m05 and m06 with nobody structuring it for you, which is the condition it will always be done in from now on.",
    teach: [
      "Run what you planned; record deviations rather than hiding them.",
      "Write up within the hour, as before.",
      "Synthesise by participant counts, keeping contradictions.",
      "Mark every finding evidenced or assumed.",
      "Record what you would do differently while it is fresh.",
    ],
    explanation: [
      "The discipline is the same and the supervision is gone. Sessions will be cancelled, an interview will become a conversation with two people at once, and an observation will be interrupted. Record each deviation, because the study's limits are made of them.",
      "Writing up promptly matters more when nobody is expecting the notes. The gap between a session and the write-up is where detail is lost and where memory begins reconstructing, and the m05 rule — within the hour, three columns — is the protection.",
      "Synthesis is the m05 procedure: observations, groups named from contents, findings with participant counts, contradictions kept. At this sample size the counts will be small, and small counts honestly reported are the strongest thing this project can produce.",
      "Recording what you would do differently is how the second project improves the third. It is also portfolio material: a reviewer reading that you would have recruited a customer who never returns, and why that mattered, learns more about you than a polished finding does.",
    ],
    misconception:
      "“The findings will be thin because the sample is small.” The findings will be bounded, which is different. Three people in a real setting, honestly reported, is a real study; the failure mode is claiming more from it than it holds.",
    example:
      "Two interviews, one observation and two short conversations were run over eleven days. Three deviations were recorded: one interview happened with the owner's son present, which changed what was said about money; the observation was cut short by a delivery; and one customer conversation happened by phone rather than in person. Six findings emerged, four evidenced and two assumed. The strongest: three of three customers had rung the shop to ask about progress, and the owner estimated he answered such calls between six and ten times a day, which he had never counted. The contradiction kept: the owner believed customers wanted speed; the customers described wanting certainty.",
    freeToolPath:
      "Notebook, phone recorder with consent, and cards or a text file for synthesis.",
    outputs: [
      "Session records with deviations noted",
      "Findings with participant counts and contradictions kept",
      "Every finding marked evidenced or assumed",
      "A written note of what you would do differently",
    ],
    steps: [
      {
        minutes: 40,
        title: "Run the sessions",
        instructions: [
          "Run the planned sessions with consent.",
          "Record deviations from the plan as they happen.",
        ],
      },
      {
        minutes: 25,
        title: "Write up promptly",
        instructions: [
          "Complete each record within the hour, in three columns.",
          "Mark anything reconstructed from memory.",
        ],
      },
      {
        minutes: 30,
        title: "Synthesise",
        instructions: [
          "Extract observations, group them, and name groups from contents.",
          "Write findings with participant counts and keep contradictions.",
        ],
      },
      {
        minutes: 15,
        title: "Mark evidence status",
        instructions: [
          "Mark each finding evidenced or assumed.",
          "Move unexplained observations to open questions.",
        ],
      },
      {
        minutes: 10,
        title: "Record the process learning",
        instructions: [
          "Write what you would do differently and why.",
          "Save the records, findings and note.",
        ],
      },
    ],
    check: [
      {
        question: "Why record deviations from the plan?",
        answer:
          "Because they are what the study's limits are made of. A session with an extra person present or cut short produces different evidence, and the report should say so.",
      },
      {
        question: "Why write up within the hour?",
        answer:
          "Because memory begins reconstructing immediately, and with nobody expecting your notes there is no external pressure to protect the detail.",
      },
      {
        question: "What is the strongest thing a small study produces?",
        answer:
          "Honest counts of what specific people did and said, with contradictions kept. The failure is claiming more than that.",
      },
    ],
    rubric: [
      "Sessions were run with deviations recorded",
      "Write-ups were prompt and layered",
      "Findings carry participant counts and contradictions",
      "Evidence status is marked on every finding",
    ],
    criteria: [
      {
        criterion: "Sessions were run with deviations recorded",
        evidence:
          "Session records including departures from the plan.",
        levels: [
          "Sessions run without recording deviations.",
          "Some deviations noted informally.",
          "Each deviation recorded with its effect.",
          "As adequate, and one deviation is reflected in the study's stated limits.",
        ],
        remediation:
          "Go back through the sessions and write down everything that differed from the plan.",
        recheck: "The deviation record.",
      },
      {
        criterion: "Write-ups were prompt and layered",
        evidence:
          "Records in the said, observed and inferred structure, completed promptly.",
        levels: [
          "Written days later.",
          "Prompt but merged layers.",
          "Prompt and layered, with reconstruction marked.",
          "As adequate, and at least one record notes something you nearly forgot.",
        ],
        remediation:
          "Rewrite the records into three columns now and mark reconstructed material.",
        recheck: "The records.",
      },
      {
        criterion:
          "Findings carry participant counts and contradictions",
        evidence:
          "Findings in the of-total form with any contradiction preserved.",
        levels: [
          "Findings without counts.",
          "Counts present, contradictions dropped.",
          "Both present.",
          "As adequate, and a contradiction is turned into a question rather than resolved.",
        ],
        remediation:
          "Recount by participant and restore anything that disagreed.",
        recheck: "The findings.",
      },
      {
        criterion: "Evidence status is marked on every finding",
        evidence:
          "Each finding marked evidenced or assumed, with open questions separated.",
        levels: [
          "Unmarked.",
          "Marked inconsistently.",
          "All marked with open questions separated.",
          "As adequate, and one assumed finding names what would evidence it.",
        ],
        remediation:
          "Mark each finding and move the unsupported ones to open questions.",
        recheck: "The marked findings.",
      },
    ],
    repairs: [
      "If deviations were not recorded, reconstruct them honestly now.",
      "If write-ups are late, mark what was reconstructed.",
      "If contradictions were dropped, restore them.",
      "If findings are unmarked, mark evidenced or assumed.",
    ],
    portfolio:
      "Findings from a project you ran alone, with deviations and contradictions intact, are the most credible research evidence in the whole portfolio.",
    resource: analyse,
    resources: [
      {
        ...analyse,
        section: "Capturing observations, grouping and moving to findings.",
        purpose: "Supplies the synthesis procedure, applied unsupervised.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for team analysis; alone you lose the second reader, so seek one where you can.",
        fallbackId: "R08",
      },
      {
        ...manual,
        section: "The method pages for whichever methods you are running.",
        purpose: "Supports the fieldwork itself.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Several pages date from 2016 to 2018; the procedures hold, the institutional assumptions do not.",
        fallbackId: "R04",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l04-v1",
    module: "m18",
    week: 18,
    day: 4,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Decide what to build, and what not to",
    objective:
      "Turn the findings into one framed problem, an appetite, and a scope with an explicit list of what you are not building and why.",
    bringForward: "Your findings and the project's appetite.",
    prerequisite: "Your findings with counts and assumptions.",
    why: "The decision about what to build is where a project either serves the evidence or drifts into what you wanted to design.",
    teach: [
      "Frame one problem, not three; a project this size supports one.",
      "Set the appetite before scoping, as in m17.",
      "Cut by feature, never by quality.",
      "List what you are not building and why.",
      "Check the frame against the person who described the problem.",
    ],
    explanation: [
      "One problem is enough. A four-week project that addresses three problems addresses none of them well, and the portfolio value comes from depth rather than coverage. Choosing which problem is a decision to record, with the reason, because a reviewer will ask.",
      "The appetite discipline is the same as m17: decide what this is worth before deciding what it contains. Without that, the design expands to whatever seems complete and then gets cut under time pressure in the way that removes error states and accessibility work.",
      "Cutting by feature preserves quality. If you cannot build both the status page and the notification, build one properly with its states, its accessibility and its failure paths, and record the other as deferred. A half-built pair with no error handling is worse than one complete thing.",
      "Checking the frame with the person who described the problem is a five-minute conversation that prevents four weeks of work on the wrong thing. They will either recognise it or correct it, and both outcomes are worth having before you start.",
    ],
    misconception:
      "“More features make a better portfolio project.” Depth reads better than breadth to anyone who has built anything. One complete flow with its states, tests and limits is worth more than four sketched features.",
    example:
      "Findings pointed at three candidate problems: customers cannot tell when a repair will be ready; the owner cannot see which jobs are waiting on parts; and quotes are given verbally and disputed. The first was chosen because it was the one all five participants raised and the one generating the daily interruptions. The appetite: three weeks of evenings. The scope: a status page a customer can reach without an account, with its states, and a way for the owner to update it in under thirty seconds. Not building: notifications, quote records, and any account system — each with the reason recorded. The frame was read back to the owner, who corrected one detail: it is not the waiting that annoys people, it is being told twice that it will be ready tomorrow.",
    freeToolPath: "Written work and one conversation.",
    outputs: [
      "One framed problem with the reason it was chosen",
      "An appetite in weeks, set before scoping",
      "A scope that preserves quality and cuts features",
      "A not-building list with reasons, and the frame checked with a participant",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose the problem",
        instructions: [
          "List the candidate problems from your findings.",
          "Choose one and write why, using the counts.",
        ],
      },
      {
        minutes: 20,
        title: "Set the appetite",
        instructions: [
          "Decide the weeks before deciding the scope.",
          "Write what that appetite implies you cannot do.",
        ],
      },
      {
        minutes: 30,
        title: "Scope by cutting features",
        instructions: [
          "List everything the ideal solution would include.",
          "Cut features until it fits, keeping states and accessibility intact.",
        ],
      },
      {
        minutes: 25,
        title: "Write the not-building list",
        instructions: [
          "Record each cut with the reason and what would bring it back.",
          "Include anything you are refusing outright.",
        ],
      },
      {
        minutes: 20,
        title: "Check the frame",
        instructions: [
          "Read the frame back to the person who described the problem.",
          "Record their correction, if any, and adjust.",
        ],
      },
    ],
    check: [
      {
        question: "Why one problem?",
        answer:
          "Because a project this size cannot do three well, and depth is what a reviewer values. Choosing is a recorded decision, not an omission.",
      },
      {
        question: "Why cut features rather than quality?",
        answer:
          "Because a half-built pair without error states is worse than one complete thing, and quality cuts return as defects nobody planned for.",
      },
      {
        question: "Why check the frame with a participant?",
        answer:
          "Because five minutes prevents four weeks on the wrong thing, and their correction is usually more precise than your framing.",
      },
    ],
    rubric: [
      "One problem is chosen with reasoning from the counts",
      "The appetite precedes the scope",
      "Cuts remove features rather than quality",
      "The frame was checked with a participant",
    ],
    criteria: [
      {
        criterion: "One problem is chosen with reasoning from the counts",
        evidence:
          "A single framed problem with the evidence for choosing it.",
        levels: [
          "Several problems addressed.",
          "One chosen without reasoning.",
          "One chosen with the counts cited.",
          "As adequate, and the rejected problems are recorded for later.",
        ],
        remediation:
          "Choose the problem the most participants raised and write why.",
        recheck: "The frame.",
      },
      {
        criterion: "The appetite precedes the scope",
        evidence:
          "A time budget written before the scope, with its implications.",
        levels: [
          "Scope decided first.",
          "Appetite stated afterwards.",
          "Appetite first with implications.",
          "As adequate, and the appetite matches the time you actually have.",
        ],
        remediation:
          "Write the weeks before looking at the design again.",
        recheck: "The appetite.",
      },
      {
        criterion: "Cuts remove features rather than quality",
        evidence:
          "A scope where states, accessibility and error paths survive.",
        levels: [
          "Quality cut to keep features.",
          "Mixed cuts.",
          "Features cut, quality preserved.",
          "As adequate, and the write-up says which features were hardest to cut.",
        ],
        remediation:
          "Restore any state or accessibility work you cut and remove a feature instead.",
        recheck: "The scope.",
      },
      {
        criterion: "The frame was checked with a participant",
        evidence:
          "A recorded conversation with the person who described the problem.",
        levels: [
          "Not checked.",
          "Checked with someone uninvolved.",
          "Checked with the person and their response recorded.",
          "As adequate, and their correction changed the frame.",
        ],
        remediation:
          "Read the frame back to them and write down what they say.",
        recheck: "The check record.",
      },
    ],
    repairs: [
      "If several problems are in scope, choose one and record the rest.",
      "If scope came first, set the appetite and re-cut.",
      "If quality was cut, restore it and cut a feature.",
      "If the frame was unchecked, read it back to the participant.",
    ],
    portfolio:
      "The not-building list with reasons is one of the most persuasive pages in a case study, because it shows the discipline reviewers are looking for.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section:
          "Appetite, fixed time with variable scope, and risks and rabbit holes.",
        purpose: "Supplies the scoping discipline for an independent project.",
        minutes: "60–90 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. Scope strategy, not positioning.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section: "The point on solving a whole problem for users.",
        purpose:
          "Keeps the single chosen problem framed as a whole rather than a feature.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service framing; your project is commercial and small.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l05-v1",
    module: "m18",
    week: 18,
    day: 5,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Design it, using everything you have",
    objective:
      "Take the chosen problem through structure, flow, states and interface, reusing your own system and recording every place it did not fit.",
    bringForward:
      "Your m06 to m13 methods, your design system and your token sheet.",
    prerequisite: "Your framed problem and design system.",
    why: "A third project is where your accumulated methods and system meet an unfamiliar domain, which is the real test of both.",
    teach: [
      "Reuse your system; record where it does not fit this domain.",
      "Structure, flow and states before interface, as before.",
      "The exception table is not optional because the project is small.",
      "Keep the accessibility work; it is the first thing dropped under time pressure.",
      "Record which methods you skipped and what that cost.",
    ],
    explanation: [
      "Your design system was built from a booking product, and a repair shop is not a booking product. Where it fits, reuse saves days; where it does not, the mismatch is information about how general your system actually is — which is exactly what m13's review lesson was preparing you to notice.",
      "The order still holds: what the person needs to find, how they move through it, what states exist, and only then what it looks like. Compressing that order under time pressure is what produces screens with no error handling, and this project is small enough to do it properly.",
      "The exception table is where small projects cut first and should not. A status page has failure states — no information yet, information that is stale, a job that does not exist — and those are most of its design. Skipping them produces a demonstration rather than a design.",
      "Recording what you skipped is part of the deliverable. If you did not do a card sort because the structure was three items deep, say so and say why that was reasonable; if you skipped the keyboard pass because of time, say that too. Both are honest and only one is defensible, and a reviewer can tell the difference.",
    ],
    misconception:
      "“It is a small project, so the process can be lighter.” The process can be shorter. Skipping states, accessibility and failure paths is not lightness; it is producing something that would not survive contact with a real person.",
    example:
      "The status page reused the system's type, spacing and card component, and did not fit in two places: there was no component for a state that changes over time, and the status colours needed a fifth semantic value the token sheet lacked. Both were recorded, and one was added to the system with a version bump. Structure was three items deep and no card sort was run, with the reason recorded. The exception table had eleven rows including a job number that does not exist, information more than a day old, and a customer arriving before the update. The keyboard pass was run; the screen-reader pass was not, and that was recorded rather than implied.",
    freeToolPath:
      "Paper and a local HTML file, as in m12. The system you built is a stylesheet and a Markdown file, both of which travel.",
    outputs: [
      "Structure, flow, states and interface for the chosen problem",
      "A record of where your system did not fit",
      "An exception table appropriate to the domain",
      "A list of methods skipped, with reasons",
    ],
    steps: [
      {
        minutes: 30,
        title: "Structure and flow",
        instructions: [
          "Define what a person needs to find and how they reach it.",
          "Draw the flow including entry points and exits.",
        ],
      },
      {
        minutes: 30,
        title: "States and exceptions",
        instructions: [
          "Write the exception table for this domain.",
          "Specify each state's wording and route out.",
        ],
      },
      {
        minutes: 30,
        title: "Interface from the system",
        instructions: [
          "Build the screens from your existing components and tokens.",
          "Record every place the system did not fit.",
        ],
      },
      {
        minutes: 20,
        title: "Keep the accessibility work",
        instructions: [
          "Run the checks you can: headings, contrast, keyboard.",
          "Record what you could not check.",
        ],
      },
      {
        minutes: 10,
        title: "Record the skips",
        instructions: [
          "List methods you did not use and why.",
          "Mark which omissions you consider defensible.",
        ],
      },
    ],
    check: [
      {
        question: "What does a system mismatch tell you?",
        answer:
          "How general your system actually is. A component that does not fit a new domain is information about the system rather than a problem with the project.",
      },
      {
        question: "Why is the exception table not optional here?",
        answer:
          "Because a status page is mostly its failure states: no information, stale information, an unknown job. Skipping them produces a demonstration.",
      },
      {
        question: "Why record skipped methods?",
        answer:
          "Because some omissions are reasonable and some are not, and a reviewer can tell the difference. Recording them is what makes the project honest.",
      },
    ],
    rubric: [
      "Structure and flow precede interface",
      "System mismatches are recorded",
      "An exception table covers the domain's real failures",
      "Skipped methods are listed with reasons",
    ],
    criteria: [
      {
        criterion: "Structure and flow precede interface",
        evidence:
          "Artefacts dated or ordered showing structure before screens.",
        levels: [
          "Screens first.",
          "Both produced together.",
          "Structure and flow first.",
          "As adequate, and an interface decision was changed by the flow work.",
        ],
        remediation:
          "Draw the flow now and check the screens against it, changing what disagrees.",
        recheck: "The order of work.",
      },
      {
        criterion: "System mismatches are recorded",
        evidence:
          "A list of places the existing system did not fit this domain.",
        levels: [
          "System reused without examination.",
          "Mismatches noticed without recording.",
          "Recorded with a decision for each.",
          "As adequate, and one addition went through the governance process.",
        ],
        remediation:
          "Note every time you had to invent something the system lacked.",
        recheck: "The mismatch list.",
      },
      {
        criterion:
          "An exception table covers the domain's real failures",
        evidence:
          "A table with the domain's specific failures, not generic ones.",
        levels: [
          "No table.",
          "Generic failures copied from the earlier project.",
          "Domain-specific failures with wording.",
          "As adequate, and one failure came from something a participant described.",
        ],
        remediation:
          "Walk the flow asking what could go wrong in this shop, not in general.",
        recheck: "The exception table.",
      },
      {
        criterion: "Skipped methods are listed with reasons",
        evidence:
          "A list of what you did not do, with defensibility marked.",
        levels: [
          "Skips unrecorded.",
          "Listed without reasons.",
          "Listed with reasons and defensibility marked.",
          "As adequate, and one skip is marked indefensible and scheduled.",
        ],
        remediation:
          "Write what you did not do and be honest about which omissions were time rather than judgement.",
        recheck: "The skip list.",
      },
    ],
    repairs: [
      "If screens came first, draw the flow and reconcile.",
      "If mismatches were absorbed, record them and decide each.",
      "If the exception table is generic, rebuild it from this domain.",
      "If skips are unrecorded, list them with honest reasons.",
    ],
    portfolio:
      "The system-mismatch list is unusual and valuable: it shows a designer who notices when their own abstractions do not transfer.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section: "Choosing fidelity and what each level can answer.",
        purpose:
          "Keeps the design work proportionate to the project's appetite.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context; the system reuse and mismatch recording are the course's own.",
        fallbackId: "R05",
      },
      {
        ...standard,
        section: "The point on making sure everyone can use the service.",
        purpose:
          "Holds the accessibility work in scope when time pressure arrives.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A statutory obligation there; here it is a standard you are choosing to hold.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l06-v1",
    module: "m18",
    week: 18,
    day: 6,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Build it, test it, repair it",
    objective:
      "Build a working prototype, test it with at least three people including one who was not part of the research, repair the highest-harm problem and re-test it.",
    bringForward: "Your designs, states and exception table.",
    prerequisite: "Your designs and access to participants.",
    why: "The loop from build to test to repair is the whole of practical design, and doing it once more alone is what makes it a capability rather than a memory.",
    teach: [
      "Build what the question needs, at the lowest fidelity that answers it.",
      "Test with someone outside the research, who brings no context.",
      "Rank by harm, repair one thing, predict, re-test.",
      "Report the failed repair as readily as the successful one.",
      "Record the conditions: device, connection, setting.",
    ],
    explanation: [
      "The build should serve the questions still open. For a status page, that is usually a running page with real timing, because the questions are about whether people understand a state and whether they would still ring. Paper cannot answer either.",
      "Testing with someone outside the research matters here because your participants now share your framing. A fresh person meets the design as a stranger would, and the difference between the two groups is frequently the finding.",
      "The repair loop is the m10 discipline: rank by harm, change one thing, write the prediction, re-test with someone new, and report the result whatever it is. A failed repair in a portfolio project is more convincing than a success, because it shows the loop was real.",
      "Conditions belong in the record. A status page tested on a laptop in a quiet room proves less than one tested on a customer's phone outside a shop, and stating which you did is what lets a reader weigh the result.",
    ],
    misconception:
      "“I will test it with the people I interviewed.” They will do well, because they helped you build the framing. Include at least one person who has never heard of the project.",
    example:
      "A running page was built with real timing and a deliberate stale-data case. Three tests: the shop owner, one customer from the research, and one person who had never heard of the project. The last one produced the finding: she read the status as a promise rather than an estimate and said she would arrive at that time, which is exactly the behaviour that generates the second phone call. The repair changed the wording from a time to a window and stated when it was last updated. Prediction written first: nobody should describe it as a promise. Re-tested with two new people; one still did, and that was reported.",
    freeToolPath:
      "A local HTML file opened on the participants' phones, as in m12. No hosting or account is needed.",
    outputs: [
      "A working prototype answering the open questions",
      "Tests with three people, one outside the research",
      "One repair with a prediction written first, and a re-test",
      "Conditions recorded for every session",
    ],
    steps: [
      {
        minutes: 35,
        title: "Build",
        instructions: [
          "Build the lowest-fidelity thing that answers the open questions.",
          "Include the states and one deliberate failure case.",
        ],
      },
      {
        minutes: 40,
        title: "Test",
        instructions: [
          "Test with three people, including one outside the research.",
          "Record expectation, action, outcome and hesitation.",
          "Record device, connection and setting.",
        ],
      },
      {
        minutes: 20,
        title: "Rank and predict",
        instructions: [
          "Rank problems by harm.",
          "Write the prediction for repairing the top one.",
        ],
      },
      {
        minutes: 20,
        title: "Repair and re-test",
        instructions: [
          "Change one thing and re-test with someone new.",
          "Record the result including a failure.",
        ],
      },
      {
        minutes: 5,
        title: "File it",
        instructions: [
          "Save both versions, the records and the outcome.",
        ],
      },
    ],
    check: [
      {
        question: "Why include someone outside the research?",
        answer:
          "Because your participants share your framing and will perform well. A stranger meets it as a real user would, and the difference is often the finding.",
      },
      {
        question: "Why record conditions?",
        answer:
          "Because a test on a laptop in a quiet room proves less than one on a customer's phone outside a shop, and the reader needs to know which happened.",
      },
      {
        question: "Why report a failed repair?",
        answer:
          "Because it shows the loop was real. A project where every change worked reads as a narrative rather than a record.",
      },
    ],
    rubric: [
      "The build answers the open questions at appropriate fidelity",
      "Three tests including one outside the research",
      "One repair with a prediction and a re-test",
      "Conditions recorded for every session",
    ],
    criteria: [
      {
        criterion:
          "The build answers the open questions at appropriate fidelity",
        evidence:
          "A prototype whose fidelity is justified by the questions it answers.",
        levels: [
          "Fidelity chosen by preference.",
          "Appropriate but missing the failure case.",
          "Appropriate with states and one deliberate failure.",
          "As adequate, and it runs on a participant's own device.",
        ],
        remediation:
          "Check each open question against what the prototype can show; add what is missing.",
        recheck: "The prototype.",
      },
      {
        criterion: "Three tests including one outside the research",
        evidence:
          "Three session records, one with a person new to the project.",
        levels: [
          "Fewer than three, or all research participants.",
          "Three, all with prior context.",
          "Three including one stranger.",
          "As adequate, and the difference between the groups is analysed.",
        ],
        remediation:
          "Run one session with someone who has never heard of the project.",
        recheck: "The session records.",
      },
      {
        criterion: "One repair with a prediction and a re-test",
        evidence:
          "A single change, a prior prediction, and a re-test with new people.",
        levels: [
          "Multiple changes or no re-test.",
          "One change without a prediction.",
          "One change, predicted, re-tested.",
          "As adequate, and the outcome is reported honestly including partial success.",
        ],
        remediation:
          "Revert to one change, write the prediction, and re-test with someone new.",
        recheck: "The repair record.",
      },
      {
        criterion: "Conditions recorded for every session",
        evidence:
          "Device, connection and setting noted per session.",
        levels: [
          "Not recorded.",
          "Recorded for some sessions.",
          "Recorded for all.",
          "As adequate, and at least one session happened in the real setting.",
        ],
        remediation:
          "Add the conditions to each record; without them the results cannot be weighed.",
        recheck: "The condition records.",
      },
    ],
    repairs: [
      "If the prototype cannot answer a question, add what it needs.",
      "If all participants were insiders, test with a stranger.",
      "If several things changed, revert and repair one.",
      "If conditions are missing, record them for each session.",
    ],
    portfolio:
      "A build-test-repair loop run alone, with one failed repair reported, is the strongest single piece of evidence this course produces.",
    resource: usability,
    resources: [
      {
        ...usability,
        section: "Planning and running sessions.",
        purpose: "Supplies the testing discipline for the independent project.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes a note-taker; alone, choose recording or notes as in m10.",
        fallbackId: "R12",
      },
      {
        ...prototypes,
        section: "What a prototype at each fidelity can support.",
        purpose:
          "Keeps the claims from this build bounded to what it can show.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. A rough running page is not a product; state what it fakes.",
        fallbackId: "R05",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l07-v1",
    module: "m18",
    week: 18,
    day: 7,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Getting critique you did not choose",
    objective:
      "Have someone outside the project critique the work against your own stated intent, and record what you changed, what you defended and why.",
    bringForward: "Your critique practice and the project's stated intent.",
    prerequisite: "Your prototype and the recorded intent for it.",
    why: "Working alone removes the person who would have told you the thing you cannot see, and you have to go and find them.",
    teach: [
      "Ask for critique against your stated intent, not for opinions.",
      "Choose someone who will disagree with you.",
      "Record what you changed and what you defended, with reasons.",
      "A defence is legitimate; an unexamined dismissal is not.",
      "Ask specifically about what you are least sure of.",
    ],
    explanation: [
      "Stating the intent first is what makes critique usable. Without it you get preferences; with it you get an assessment of whether the thing does what you said it should. Give the reviewer the problem, the constraint and the appetite, then the work.",
      "Choosing a reviewer who will disagree is harder than it sounds, because the comfortable choice is someone who will be encouraging. A developer will ask what happens when the data is late; a person who runs a small business will ask who updates it on a Sunday. Both questions are better than praise.",
      "Recording defences matters as much as recording changes. Some critique is wrong, or right about a constraint you already considered and accepted, and saying so with the reason is a professional act. What is not acceptable is dismissing something because considering it would be inconvenient.",
      "Naming your least certain areas directs attention where it helps. If you are unsure whether the stale-data wording works, say so, rather than hoping the reviewer will find it themselves.",
    ],
    misconception:
      "“Critique is for finding what is wrong.” Critique tests whether the work does what you said it would. That is why it needs your intent stated first, and why a reviewer who does not know the intent can only give preferences.",
    example:
      "Two reviewers: a developer and someone who runs a tailoring business. The intent was stated in three sentences. The developer asked what the page shows when the owner has not updated a job for three days, which was a real gap and produced a change. The tailor said nobody would update it at all and it should send a message instead — a fair challenge that was defended, because messaging was outside the appetite and had been recorded as deferred with the reason. Both were written down. A third comment, that the page looked plain, was recorded and not acted on, with the reason: plainness was the point on a phone in a shop doorway.",
    freeToolPath:
      "One conversation each, in person or by call. No tool is required.",
    outputs: [
      "A stated intent given to reviewers before the work",
      "Critique from at least two people, one who disagrees",
      "A record of changes made with reasons",
      "A record of critique defended, with reasons",
    ],
    steps: [
      {
        minutes: 15,
        title: "Write the intent",
        instructions: [
          "Write the problem, the constraint and the appetite in three sentences.",
          "Name what you are least sure of.",
        ],
      },
      {
        minutes: 20,
        title: "Choose reviewers",
        instructions: [
          "Choose two people with different vantage points.",
          "Prefer someone likely to disagree with you.",
        ],
      },
      {
        minutes: 30,
        title: "Run the critique",
        instructions: [
          "Give the intent first, then the work.",
          "Write comments down without arguing during the session.",
        ],
      },
      {
        minutes: 25,
        title: "Decide and record",
        instructions: [
          "Mark each comment changed, defended or deferred.",
          "Write the reason for each defence.",
        ],
      },
      {
        minutes: 20,
        title: "Make the changes",
        instructions: [
          "Apply the changes you accepted.",
          "Keep the previous version for comparison.",
        ],
      },
    ],
    check: [
      {
        question: "Why state the intent first?",
        answer:
          "Because without it a reviewer can only give preferences. With it they can assess whether the work does what you said it should.",
      },
      {
        question: "When is defending critique legitimate?",
        answer:
          "When you considered the point and accepted the trade-off for a stated reason. It stops being legitimate when the reason is that acting would be inconvenient.",
      },
      {
        question: "Why choose someone likely to disagree?",
        answer:
          "Because encouragement is easy to obtain and tells you nothing. Working alone, the disagreeing reviewer is the only source of the thing you cannot see.",
      },
    ],
    rubric: [
      "Intent was stated before the work was shown",
      "At least two reviewers, one likely to disagree",
      "Changes recorded with reasons",
      "Defences recorded with reasons",
    ],
    criteria: [
      {
        criterion: "Intent was stated before the work was shown",
        evidence:
          "A written intent covering problem, constraint and appetite.",
        levels: [
          "Work shown without intent.",
          "Intent given verbally and partially.",
          "Written intent given first.",
          "As adequate, and it names what you are least sure of.",
        ],
        remediation:
          "Write the three sentences and re-run at least one critique with them.",
        recheck: "The intent statement.",
      },
      {
        criterion: "At least two reviewers, one likely to disagree",
        evidence: "Two critique records from different vantage points.",
        levels: [
          "One reviewer, or none.",
          "Two reviewers with similar views.",
          "Two with different vantage points.",
          "As adequate, and one reviewer works in the domain.",
        ],
        remediation: "Find a second reviewer whose work differs from yours.",
        recheck: "The critique records.",
      },
      {
        criterion: "Changes recorded with reasons",
        evidence: "A list of applied changes traced to specific comments.",
        levels: [
          "Changes made without records.",
          "Recorded without reasons.",
          "Recorded with the comment and reason.",
          "As adequate, and the previous version is kept for comparison.",
        ],
        remediation: "Trace each change back to the comment that prompted it.",
        recheck: "The change record.",
      },
      {
        criterion: "Defences recorded with reasons",
        evidence: "Comments not acted on, each with a stated reason.",
        levels: [
          "Comments silently ignored.",
          "Defended without reasons.",
          "Each defence reasoned.",
          "As adequate, and one defence names the trade-off it accepts.",
        ],
        remediation:
          "Write why each unacted comment was not acted on, honestly.",
        recheck: "The defence record.",
      },
    ],
    repairs: [
      "If intent was not stated, write it and re-run a critique.",
      "If reviewers agreed with you, find one who will not.",
      "If changes are untraced, link each to its comment.",
      "If comments were ignored, record the reason or act on them.",
    ],
    portfolio:
      "A critique record showing both what you changed and what you defended is evidence of judgement, which is harder to demonstrate than compliance.",
    resource: standard,
    resources: [
      {
        ...standard,
        section: "The points on iterating and improving frequently and on having a multidisciplinary team.",
        purpose:
          "Frames critique as part of the delivery loop rather than a review event.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes a team; alone, the critique has to be sought deliberately.",
        fallbackId: "R07",
      },
      {
        ...portfolio,
        section:
          "What 204 surveyed hiring professionals said they look for, including what was left out and why.",
        purpose:
          "Explains why the defence record is worth keeping for the portfolio.",
        minutes: "15–25",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. Aimed at a US hiring market.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l08-v1",
    module: "m18",
    week: 18,
    day: 8,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Measuring what this project can actually measure",
    objective:
      "Choose one measure the project can honestly support, collect it before and after, and report it as counts with its conditions.",
    bringForward: "Your m16 measurement work and its rules.",
    prerequisite: "Your prototype in use, or a baseline you can count.",
    why: "A project that claims an improvement without a before is a story; a project that counts one thing honestly is evidence.",
    teach: [
      "Choose one measure tied to the problem, not to activity.",
      "Collect the before, even roughly, before you change anything.",
      "Counts, not percentages, at this size.",
      "Record conditions: what else changed, and over what period.",
      "State plainly if the measure did not move.",
    ],
    explanation: [
      "The measure should be the thing the problem is about. For a shop interrupted by calls, that is calls about progress — countable by tally on the counter. Page views would be activity and would tell you nothing about whether the interruptions stopped.",
      "The before is the part most people skip, and skipping it makes everything after unusable. Even a rough count over five days, taken before the page exists, converts the whole project from an assertion into a comparison. Ask the person to tally, and check they actually did.",
      "Counts at this size, always. Eleven calls in five days becoming four in five days is a real observation. The same expressed as a sixty-four per cent reduction is a claim the sample cannot support, and it is exactly the sentence that would be quoted back at you.",
      "Conditions surround the number. A quiet week, a festival, one repair that went wrong and generated six calls on its own — any of these move the count more than your design does, and the honest report names them rather than hoping nobody asks.",
    ],
    misconception:
      "“No measurable change means the project failed.” It means the measure did not move in this period under these conditions, which is a finding. Reporting it is what separates the work from marketing.",
    example:
      "Measure chosen: calls asking about repair progress, tallied by the owner on a sheet by the till. Before: eleven over five working days. The page was introduced and given to customers as a link on the job slip. After: four over five working days, with the conditions recorded — one of the five days was a public holiday with reduced trade, and two customers had been told about the page directly by the owner, which is not how it would normally spread. The report says eleven then four, names both conditions, and does not convert either into a rate.",
    freeToolPath:
      "A paper tally sheet. This is the appropriate instrument at this scale and costs nothing.",
    outputs: [
      "One measure tied to the problem",
      "A before count collected prior to any change",
      "An after count over a comparable period",
      "Conditions recorded, and the result stated as counts",
    ],
    steps: [
      {
        minutes: 20,
        title: "Choose the measure",
        instructions: [
          "Write the measure that would change if the problem eased.",
          "Reject activity measures.",
        ],
      },
      {
        minutes: 25,
        title: "Collect the before",
        instructions: [
          "Set up the simplest possible collection, on paper if needed.",
          "Collect over a defined period before anything changes.",
        ],
      },
      {
        minutes: 20,
        title: "Introduce and collect the after",
        instructions: [
          "Introduce the change and collect over a comparable period.",
          "Note anything unusual about either period.",
        ],
      },
      {
        minutes: 20,
        title: "Report as counts",
        instructions: [
          "Write both counts with their periods.",
          "Do not convert to percentages.",
        ],
      },
      {
        minutes: 15,
        title: "Record the conditions",
        instructions: [
          "List everything else that could explain the difference.",
          "State what the measure cannot show.",
        ],
      },
    ],
    check: [
      {
        question: "Why not a percentage?",
        answer:
          "Because at eleven and four, a rate implies a precision the sample cannot support and invites a claim you would have to withdraw.",
      },
      {
        question: "Why is the before the critical step?",
        answer:
          "Because without it there is no comparison, only an assertion. A rough before beats a precise after with nothing to compare it to.",
      },
      {
        question: "What if nothing moved?",
        answer:
          "Report it. The measure did not move in this period under these conditions, and that is a finding worth more than a story.",
      },
    ],
    rubric: [
      "The measure reflects the problem, not activity",
      "A before was collected prior to the change",
      "Results are reported as counts with periods",
      "Conditions and limits are recorded",
    ],
    criteria: [
      {
        criterion: "The measure reflects the problem, not activity",
        evidence:
          "A measure that would move if the problem eased.",
        levels: [
          "An activity measure.",
          "Related but indirect.",
          "Directly reflects the problem.",
          "As adequate, and the person affected agrees it is the right thing to count.",
        ],
        remediation:
          "Ask what the person would notice if the problem eased, and count that.",
        recheck: "The measure.",
      },
      {
        criterion: "A before was collected prior to the change",
        evidence: "A dated baseline count over a defined period.",
        levels: [
          "No before.",
          "Estimated retrospectively.",
          "Collected before the change over a defined period.",
          "As adequate, and the collection method is the same in both periods.",
        ],
        remediation:
          "If the change is already live, say so and label the baseline as an estimate.",
        recheck: "The baseline.",
      },
      {
        criterion: "Results are reported as counts with periods",
        evidence: "Both counts with their periods, no rates.",
        levels: [
          "Percentages or rates.",
          "Counts without periods.",
          "Counts with periods.",
          "As adequate, and the periods are comparable in trading terms.",
        ],
        remediation: "Replace every rate with the underlying counts.",
        recheck: "The report.",
      },
      {
        criterion: "Conditions and limits are recorded",
        evidence:
          "A list of confounds and a statement of what the measure cannot show.",
        levels: [
          "None recorded.",
          "One or two noted.",
          "Confounds and limits recorded.",
          "As adequate, and one confound is judged large enough to weaken the result.",
        ],
        remediation:
          "List everything else that changed in those two periods.",
        recheck: "The conditions.",
      },
    ],
    repairs: [
      "If the measure is activity, replace it with one tied to the problem.",
      "If there is no before, label the comparison honestly.",
      "If rates appear, restore the counts.",
      "If conditions are missing, list the confounds.",
    ],
    portfolio:
      "A before and after in counts, with conditions and confounds named, is rare in junior portfolios and immediately credible.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section: "Reporting findings so they can be acted on and checked.",
        purpose: "Shapes the honest reporting of a small measurement.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for teams with stakeholders; here the audience is one shop owner and your portfolio reader.",
        fallbackId: "R04",
      },
      {
        title: "Analysis Function: data visualisation charts",
        id: "R63",
        url: "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/",
        section: "Rules for axes, gridlines and direct labelling over legends.",
        purpose:
          "Sets the rules for drawing any chart you make from these counts.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. UK government guidance; the reasoning about small numbers is general.",
        fallbackId: "R59",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l09-v1",
    module: "m18",
    week: 18,
    day: 9,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Leaving something behind that survives you",
    objective:
      "Hand the work over so the person can keep using or maintaining it without you, and record what they would need if you disappeared.",
    bringForward: "Your prototype, your documentation habits and your system.",
    prerequisite: "A working prototype and a person who might use it.",
    why: "A project that only works while you are present is a demonstration; one that survives your absence is a piece of design.",
    teach: [
      "Ask what happens on the day you stop being available.",
      "Write instructions for the person, not for a designer.",
      "Hand over the source, the decisions and the known gaps.",
      "Say plainly what is unfinished and unsafe to rely on.",
      "Get their agreement about what happens next.",
    ],
    explanation: [
      "The handover question is the one that exposes whether the work is real. If the status page requires you to update it, then you built a job for yourself rather than a tool for the shop. Asking the question early usually changes the design.",
      "Instructions written for the person are short, in their language, and describe the two or three things they actually do. A page of design rationale is not a handover; a card by the till saying how to change a job's status is.",
      "The handover package is source, decisions and gaps. The decisions matter because whoever comes next — including you in six months — will otherwise re-litigate them. The gaps matter because someone will otherwise trust something that was never finished.",
      "Ending explicitly is part of professional practice. Whether the shop keeps using it, stops, or asks you for more, the agreement should be stated rather than left to drift, and what you agreed belongs in the record.",
    ],
    misconception:
      "“Handing over is the last five minutes of a project.” It is a design constraint from the start. A tool that only you can operate was designed wrong, and you find that out at handover if you never asked earlier.",
    example:
      "The handover: a printed card by the till with three steps for updating a job, written in the owner's words rather than the interface's; the HTML file and a short note on where it lives and how to change the shop's phone number; a decisions page covering why there are no accounts and why the status is a window rather than a time; and a gaps page saying the page has never been tested on a slow connection, has no protection against a mistyped job number showing another customer's job, and should not be relied on if the shop takes more than about twenty jobs a week. The owner agreed to try it for a month and to say if it stopped being useful.",
    freeToolPath:
      "A printed card and two Markdown files. No hosting, account or tool is required.",
    outputs: [
      "Instructions written for the person who will use it",
      "A handover package: source, decisions and gaps",
      "A plain statement of what is unfinished or unsafe",
      "An agreed next step with the person",
    ],
    steps: [
      {
        minutes: 20,
        title: "Ask the handover question",
        instructions: [
          "Ask what happens if you stop being available tomorrow.",
          "Change anything that only works with you present.",
        ],
      },
      {
        minutes: 25,
        title: "Write the person's instructions",
        instructions: [
          "Describe the two or three things they will actually do.",
          "Use their words, and test the instructions with them.",
        ],
      },
      {
        minutes: 25,
        title: "Assemble the package",
        instructions: [
          "Collect the source, the decisions and the known gaps.",
          "Write each decision as a sentence with its reason.",
        ],
      },
      {
        minutes: 20,
        title: "State the unfinished parts",
        instructions: [
          "List what is untested or unsafe to rely on.",
          "Say at what point it would stop working.",
        ],
      },
      {
        minutes: 10,
        title: "Agree the next step",
        instructions: [
          "Agree explicitly what happens now.",
          "Record the agreement with the date.",
        ],
      },
    ],
    check: [
      {
        question: "What does the handover question expose?",
        answer:
          "Whether you designed a tool for them or a job for yourself. If it needs you, the design needs changing.",
      },
      {
        question: "Who are the instructions for?",
        answer:
          "The person who will use it, in their language, covering the few things they actually do — not a designer reading rationale.",
      },
      {
        question: "Why record the gaps?",
        answer:
          "Because otherwise someone will rely on a part that was never finished, and the failure will look like a defect rather than a known limit.",
      },
    ],
    rubric: [
      "The work does not require your presence",
      "Instructions are written for the user and tested",
      "The package contains source, decisions and gaps",
      "An explicit next step is agreed and dated",
    ],
    criteria: [
      {
        criterion: "The work does not require your presence",
        evidence:
          "A design the person can operate without you, or a recorded reason it cannot be.",
        levels: [
          "Requires you to operate.",
          "Mostly independent with one dependency.",
          "Operable without you.",
          "As adequate, and the handover question changed the design.",
        ],
        remediation:
          "Find every step that needs you and redesign or document it.",
        recheck: "The dependency list.",
      },
      {
        criterion: "Instructions are written for the user and tested",
        evidence:
          "Short instructions in their language, tried with them.",
        levels: [
          "None, or design documentation offered as instructions.",
          "Written but untested.",
          "Written in their language and tested.",
          "As adequate, and their confusion changed the wording.",
        ],
        remediation:
          "Watch them follow the instructions and rewrite what fails.",
        recheck: "The instructions.",
      },
      {
        criterion: "The package contains source, decisions and gaps",
        evidence: "Three artefacts handed over together.",
        levels: [
          "Source only.",
          "Source and some notes.",
          "All three present.",
          "As adequate, and each decision has its reason in one sentence.",
        ],
        remediation: "Write the decisions and gaps pages now.",
        recheck: "The package.",
      },
      {
        criterion: "An explicit next step is agreed and dated",
        evidence: "A recorded agreement about what happens next.",
        levels: [
          "Project left to drift.",
          "Informal understanding.",
          "Explicit and dated.",
          "As adequate, and it includes how they tell you it stopped being useful.",
        ],
        remediation:
          "Ask directly what they want to do next and write down the answer.",
        recheck: "The agreement.",
      },
    ],
    repairs: [
      "If it needs you, redesign the dependent step.",
      "If instructions are untested, watch someone follow them.",
      "If decisions are undocumented, write them with reasons.",
      "If no next step was agreed, ask and record it.",
    ],
    portfolio:
      "A handover package is the artefact most junior portfolios lack entirely, and it is the one that reads as professional practice.",
    resource: standard,
    resources: [
      {
        ...standard,
        section: "The point on operating a reliable service.",
        purpose:
          "Frames handover and continued operation as part of the design.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes a permanent team; here it is one shop owner, so the standard is adapted rather than met.",
        fallbackId: "R07",
      },
      {
        ...prototypes,
        section: "What a prototype is and is not fit for.",
        purpose:
          "Keeps the handover honest about what was built and its limits.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context; the caution about prototypes in real use is the relevant part.",
        fallbackId: "R05",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l10-v1",
    module: "m18",
    week: 18,
    day: 10,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Writing the limitations page",
    objective:
      "Write the page that states, precisely, what this project does not establish — the page a reviewer will trust you for.",
    bringForward:
      "Your exclusions, deviations, skipped methods, confounds and untested areas.",
    prerequisite: "All the records from this project.",
    why: "Every claim you make will be weighed against the limits you state, and stating them yourself is what makes the claims believable.",
    teach: [
      "Collect the limits you already recorded; do not invent new ones.",
      "Be specific: who was not reached, what was not tested, what was not measured.",
      "Distinguish limits of the study from limits of the design.",
      "Say what would be needed to close each one.",
      "Do not apologise; state.",
    ],
    explanation: [
      "The material already exists. Your exclusions from the plan, deviations from fieldwork, skipped methods from the design, confounds from the measurement and untested areas from the handover are the limitations page; the work is collecting and sharpening them rather than generating new ones.",
      "Specificity is what makes the page useful. “Small sample” tells a reader nothing. “Five participants, all reached through the owner, none of whom had stopped using the shop” tells them exactly which conclusions are unavailable and which still stand.",
      "The two kinds of limit are different and readers conflate them. A study limit is what you do not know; a design limit is what the thing does not do. Not knowing whether customers who left would use the page is a study limit. Not handling a mistyped job number is a design limit. Separating them keeps both honest.",
      "Saying what would close each limit turns the page from a disclaimer into a plan. Four conversations with customers who stopped coming; one test on a slow connection; a second measurement period without a public holiday. Each is small, specific and shows you know what the next step is.",
    ],
    misconception:
      "“Listing limitations weakens the project.” It does the opposite. Unstated limits get found by the reader and cost you their trust in everything else; stated ones bound your claims and make the rest credible.",
    example:
      "The page has two sections. Study limits: five participants all reached through the owner; nobody who had stopped using the shop; one interview with a third party present; the measurement covered two five-day periods, one containing a public holiday; nothing establishes whether this problem exists in other repair shops. Design limits: no protection against a mistyped job number; never tested on a slow connection; no screen-reader pass; unmaintained if the owner stops updating it; unsuitable above roughly twenty jobs a week. Each has a closing step, and two are marked as the next things worth doing.",
    freeToolPath: "One Markdown page.",
    outputs: [
      "A limitations page drawn from your own records",
      "Study limits and design limits separated",
      "Specific statements, not generic caveats",
      "A closing step for each limit",
    ],
    steps: [
      {
        minutes: 25,
        title: "Collect",
        instructions: [
          "Gather exclusions, deviations, skips, confounds and untested areas.",
          "Put each on the page verbatim first.",
        ],
      },
      {
        minutes: 25,
        title: "Separate the two kinds",
        instructions: [
          "Split into what you do not know and what the design does not do.",
          "Move anything that is really a defect into a repair list.",
        ],
      },
      {
        minutes: 25,
        title: "Sharpen",
        instructions: [
          "Replace every generic caveat with a specific statement.",
          "Name who was not reached and what was not tested.",
        ],
      },
      {
        minutes: 20,
        title: "Write the closing steps",
        instructions: [
          "For each limit, write the smallest thing that would close it.",
          "Mark the two most worth doing.",
        ],
      },
      {
        minutes: 15,
        title: "Check your claims against it",
        instructions: [
          "Read every claim you make elsewhere against this page.",
          "Weaken or remove any claim the limits do not support.",
        ],
      },
    ],
    check: [
      {
        question: "What is the difference between the two kinds of limit?",
        answer:
          "A study limit is what you do not know; a design limit is what the thing does not do. Conflating them hides both.",
      },
      {
        question: "Why is “small sample” insufficient?",
        answer:
          "Because it tells a reader nothing about which conclusions are unavailable. Naming who was not reached does.",
      },
      {
        question: "Why write closing steps?",
        answer:
          "Because it turns a disclaimer into a plan and shows you know what the next piece of work is.",
      },
    ],
    rubric: [
      "The page is drawn from records rather than invented",
      "Study and design limits are separated",
      "Statements are specific about who and what",
      "Each limit has a closing step",
    ],
    criteria: [
      {
        criterion: "The page is drawn from records rather than invented",
        evidence:
          "Limits traceable to exclusions, deviations, skips and confounds.",
        levels: [
          "Generic caveats.",
          "Some traceable, some generic.",
          "All traceable to records.",
          "As adequate, and nothing recorded was omitted.",
        ],
        remediation:
          "Go back through the project records and transfer every recorded limit.",
        recheck: "The page against the records.",
      },
      {
        criterion: "Study and design limits are separated",
        evidence: "Two labelled sections.",
        levels: [
          "Mixed together.",
          "Partly separated.",
          "Cleanly separated.",
          "As adequate, and defects have been moved to a repair list.",
        ],
        remediation:
          "Sort each line into what you do not know versus what it does not do.",
        recheck: "The two sections.",
      },
      {
        criterion: "Statements are specific about who and what",
        evidence:
          "Statements naming groups, conditions and untested areas.",
        levels: [
          "Generic.",
          "Partly specific.",
          "Specific throughout.",
          "As adequate, and one limit names a conclusion it rules out.",
        ],
        remediation:
          "Rewrite each caveat to name the group or condition involved.",
        recheck: "The statements.",
      },
      {
        criterion: "Each limit has a closing step",
        evidence: "A smallest-next-action per limit.",
        levels: [
          "None.",
          "Steps for some.",
          "A step for each.",
          "As adequate, and the two most worthwhile are marked.",
        ],
        remediation: "Write the smallest action that would close each limit.",
        recheck: "The closing steps.",
      },
    ],
    repairs: [
      "If limits are generic, rewrite them from your records.",
      "If the kinds are mixed, split them into two sections.",
      "If a defect is listed as a limit, move it to the repair list.",
      "If a limit has no closing step, write one.",
    ],
    portfolio:
      "The limitations page is the single most persuasive document in a junior portfolio, because almost nobody writes one.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section: "Structuring findings: headline, essential facts, why it matters, supporting evidence.",
        purpose: "Grounds the discipline of stating limits alongside findings.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Institutional context; the honesty about scope transfers directly.",
        fallbackId: "R04",
      },
      {
        ...analyse,
        section: "Separating what was observed from what was inferred.",
        purpose:
          "Supports the split between what you do not know and what the design lacks.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for session analysis; applied here to the whole project.",
        fallbackId: "R08",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l11-v1",
    module: "m18",
    week: 18,
    day: 11,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Retrospective across three projects",
    objective:
      "Compare this project with your two earlier ones and identify what has actually improved, what has not, and what you will do differently next.",
    bringForward: "All three projects and their records.",
    prerequisite: "Two earlier projects with records.",
    why: "Improvement you cannot name is improvement you cannot repeat, and the comparison is the only evidence you have of a trajectory.",
    teach: [
      "Compare on process, not on how good the outcome looks.",
      "Name one thing that improved and the evidence for it.",
      "Name one thing that did not improve, honestly.",
      "Identify the habit that produced the improvement.",
      "Choose one thing to change in the next project.",
    ],
    explanation: [
      "Comparing outcomes is misleading because the projects had different problems and different access. Comparing process is not: did you write the exclusions before fieldwork this time? Did the repair loop close? Did you record deviations? Those are the same questions across all three.",
      "Naming the evidence for an improvement keeps you honest. “My research got better” is an impression; “in project one I wrote no exclusions, in project three I wrote them before fieldwork and the report used them” is a fact you can point at.",
      "The thing that did not improve is the more useful half. If you still cut the accessibility pass under time pressure in all three projects, that is a pattern rather than an accident, and it will follow you into paid work unless you name it.",
      "Improvement comes from habits, not from intentions. If the write-up quality improved, it was probably because you started writing within the hour, and that habit is what transfers. Naming the mechanism is what lets you keep it.",
    ],
    misconception:
      "“The third project is better because it looks better.” Presentation improves fastest and means least. The question is whether the process held under pressure, and that is visible only in the records.",
    example:
      "Improved: exclusions written before fieldwork in projects two and three, not in one, and in three the report used them directly. Improved: the repair loop closed with a re-test in both two and three; in one there was no re-test at all. Not improved: the screen-reader pass was skipped in all three, each time for time, which is a pattern rather than a series of accidents. Habit responsible for the first improvement: writing the plan in a fixed order that puts exclusions before recruitment. Next project: schedule the accessibility pass as a dated task before the build starts, because leaving it until the end has now failed three times.",
    freeToolPath: "Your own records and one page of writing.",
    outputs: [
      "A process comparison across three projects",
      "One improvement with its evidence and its habit",
      "One thing that did not improve, named honestly",
      "One specific change for the next project",
    ],
    steps: [
      {
        minutes: 25,
        title: "Build the comparison",
        instructions: [
          "List the same five process questions for all three projects.",
          "Answer each from the records, not from memory.",
        ],
      },
      {
        minutes: 20,
        title: "Name an improvement",
        instructions: [
          "Choose one clear improvement and cite its evidence.",
          "Identify the habit that produced it.",
        ],
      },
      {
        minutes: 20,
        title: "Name what did not improve",
        instructions: [
          "Find something that failed in all three.",
          "Write why, without excusing it.",
        ],
      },
      {
        minutes: 20,
        title: "Choose one change",
        instructions: [
          "Write one specific, scheduled change for the next project.",
          "Make it a habit, not an intention.",
        ],
      },
      {
        minutes: 15,
        title: "File the retrospective",
        instructions: [
          "Save it with the three projects.",
          "Note the date so the next retrospective can compare.",
        ],
      },
    ],
    check: [
      {
        question: "Why compare process rather than outcome?",
        answer:
          "Because the projects had different problems and access, so outcomes are not comparable. The same process questions are.",
      },
      {
        question: "Why is the unimproved thing more useful?",
        answer:
          "Because a failure across all three is a pattern that will follow you into paid work unless you name it.",
      },
      {
        question: "Why identify the habit?",
        answer:
          "Because improvements come from habits rather than intentions, and only a named mechanism can be repeated.",
      },
    ],
    rubric: [
      "The comparison is on process and drawn from records",
      "An improvement is named with evidence and mechanism",
      "A persistent failure is named honestly",
      "One specific scheduled change is chosen",
    ],
    criteria: [
      {
        criterion: "The comparison is on process and drawn from records",
        evidence:
          "The same questions answered for three projects, citing records.",
        levels: [
          "Impressions of outcome quality.",
          "Process questions answered from memory.",
          "Answered from the records.",
          "As adequate, and one answer contradicts what you assumed.",
        ],
        remediation:
          "Open the records for each project and answer the questions from them.",
        recheck: "The comparison.",
      },
      {
        criterion: "An improvement is named with evidence and mechanism",
        evidence:
          "One improvement, its evidence and the habit that produced it.",
        levels: [
          "A general claim of improvement.",
          "Evidence without a mechanism.",
          "Both present.",
          "As adequate, and the habit is one you can state in a sentence.",
        ],
        remediation:
          "Ask what you did differently that produced the change and write it.",
        recheck: "The improvement.",
      },
      {
        criterion: "A persistent failure is named honestly",
        evidence: "Something absent from all three projects, with the reason.",
        levels: [
          "None named.",
          "Named but excused.",
          "Named with an honest reason.",
          "As adequate, and it is addressed in the next-project change.",
        ],
        remediation:
          "Look for what is missing from all three records and write it down.",
        recheck: "The failure statement.",
      },
      {
        criterion: "One specific scheduled change is chosen",
        evidence: "A single change expressed as a scheduled habit.",
        levels: [
          "An intention to do better.",
          "A specific change without scheduling.",
          "Specific and scheduled.",
          "As adequate, and it targets the persistent failure.",
        ],
        remediation:
          "Convert the intention into something with a date and a trigger.",
        recheck: "The change.",
      },
    ],
    repairs: [
      "If the comparison is about outcomes, redo it on process.",
      "If the improvement has no mechanism, find the habit.",
      "If nothing failed, look harder — three projects always show a pattern.",
      "If the change is an intention, give it a date and a trigger.",
    ],
    portfolio:
      "A retrospective across three projects shows a trajectory rather than a snapshot, which is what a reviewer is actually trying to assess.",
    resource: standard,
    resources: [
      {
        ...standard,
        section: "The point on iterating and improving frequently.",
        purpose:
          "Frames the retrospective as part of practice rather than a reflection exercise.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Aimed at teams and services; applied here to your own practice.",
        fallbackId: "R07",
      },
      {
        ...portfolio,
        section: "Step 1: taking inventory of your projects and what each taught you.",
        purpose:
          "Connects the retrospective to what the next module will build.",
        minutes: "15–25",
        limits:
          "Free article, no account; the site sells courses and reports that are not required. Verified 2026-09-06. US hiring context.",
        fallbackId: "R23",
      },
    ],
  }),
  withLegacyText({
    id: "m18-l12-v1",
    module: "m18",
    week: 18,
    day: 12,
    level: 5,
    areas: [4, 10, 17],
    guided: true,
    title: "Assembling the project record",
    objective:
      "Assemble every artefact from this project into an ordered record that someone else could follow, and check that each claim in it is supported.",
    bringForward: "Everything produced in this module.",
    prerequisite: "All eleven previous lessons' outputs.",
    why: "The next module turns records into a portfolio, and it can only work with what you have actually kept.",
    teach: [
      "Order the record by what happened, not by what looks best.",
      "Every claim needs an artefact behind it.",
      "Include the failures; they are load-bearing.",
      "Name the dates, the counts and the people by role.",
      "Store it so it survives a lost laptop.",
    ],
    explanation: [
      "Chronological order is the honest order and the easiest to check. A record arranged to build a narrative is already a case study, and case studies written before the record exists tend to acquire claims the record cannot support.",
      "The claim-to-artefact check is mechanical and worth doing: read each sentence that asserts something, and find the file that supports it. Anything unsupported either gets its artefact attached, gets weakened to what the evidence shows, or gets deleted.",
      "The failures carry weight. The recruitment that did not work, the repair that did not fix the problem, the measurement confounded by a public holiday — these are what make the successes believable, and removing them removes the credibility of everything left.",
      "Anonymity and durability are both practical. People appear by role, consent records stay out of anything shareable, and the whole record lives in at least two places, because losing three months of work to a failed drive is a common and entirely avoidable ending.",
    ],
    misconception:
      "“I will write it up properly later.” Later, the details will be gone and the write-up will quietly become fiction. The record is assembled now, from artefacts that exist.",
    example:
      "The record has twelve numbered folders matching the lessons, an index page listing what is in each, and a claims check: nineteen assertions, seventeen with artefacts, one weakened from “customers stopped calling” to “calls about progress fell from eleven to four over comparable five-day periods, one containing a public holiday”, and one deleted because nothing supported it. Participants appear as owner, customer A, customer B, customer C and outside tester. Consent records are stored separately and are not part of anything shareable. The whole thing exists on the laptop and in one other place.",
    freeToolPath:
      "Folders and Markdown files, plus one free backup location. No paid storage is required.",
    outputs: [
      "A chronological record with an index",
      "A claims check with every assertion resolved",
      "Failures retained in the record",
      "Participants anonymised and the record stored in two places",
    ],
    steps: [
      {
        minutes: 30,
        title: "Order and index",
        instructions: [
          "Arrange artefacts in the order they happened.",
          "Write an index naming what each part contains.",
        ],
      },
      {
        minutes: 30,
        title: "Check the claims",
        instructions: [
          "List every assertion the record makes.",
          "Attach an artefact, weaken it, or delete it.",
        ],
      },
      {
        minutes: 20,
        title: "Keep the failures",
        instructions: [
          "Check that failed recruitment, repairs and measurements are present.",
          "Restore anything you were tempted to leave out.",
        ],
      },
      {
        minutes: 20,
        title: "Anonymise",
        instructions: [
          "Replace names with roles throughout.",
          "Separate consent records from anything shareable.",
        ],
      },
      {
        minutes: 15,
        title: "Store it twice",
        instructions: [
          "Put a copy somewhere that is not this laptop.",
          "Note where both copies are.",
        ],
      },
    ],
    check: [
      {
        question: "Why chronological rather than narrative order?",
        answer:
          "Because narrative order is already a case study, and case studies built before the record tend to acquire claims it cannot support.",
      },
      {
        question: "What happens to an unsupported claim?",
        answer:
          "It gets an artefact attached, gets weakened to what the evidence shows, or gets deleted. Nothing stays unsupported.",
      },
      {
        question: "Why keep the failures?",
        answer:
          "Because they make the successes believable. A record where everything worked reads as a story rather than a project.",
      },
    ],
    rubric: [
      "The record is chronological with an index",
      "Every claim is supported, weakened or removed",
      "Failures are present in the record",
      "Participants are anonymised and the record is stored twice",
    ],
    criteria: [
      {
        criterion: "The record is chronological with an index",
        evidence: "Ordered artefacts and an index naming their contents.",
        levels: [
          "Unordered files.",
          "Ordered without an index.",
          "Ordered with an index.",
          "As adequate, and someone else could follow it without you.",
        ],
        remediation:
          "Put the artefacts in the order they happened and write the index.",
        recheck: "The index.",
      },
      {
        criterion: "Every claim is supported, weakened or removed",
        evidence: "A claims list with each item resolved.",
        levels: [
          "No check performed.",
          "Checked informally.",
          "Every claim resolved.",
          "As adequate, and at least one claim was weakened by the check.",
        ],
        remediation:
          "List the assertions and resolve each against the artefacts.",
        recheck: "The claims check.",
      },
      {
        criterion: "Failures are present in the record",
        evidence:
          "Failed recruitment, repairs or measurements retained.",
        levels: [
          "Failures removed.",
          "Some retained.",
          "All retained.",
          "As adequate, and one failure is explained rather than just listed.",
        ],
        remediation: "Restore what you were tempted to leave out.",
        recheck: "The record.",
      },
      {
        criterion:
          "Participants are anonymised and the record is stored twice",
        evidence:
          "Roles instead of names, consent stored separately, two copies.",
        levels: [
          "Names present, one copy.",
          "Anonymised but stored once.",
          "Both done.",
          "As adequate, and the second copy has been verified as readable.",
        ],
        remediation:
          "Replace names with roles and copy the record somewhere else today.",
        recheck: "The stored record.",
      },
    ],
    repairs: [
      "If files are unordered, arrange them chronologically and index them.",
      "If claims are unchecked, resolve each against an artefact.",
      "If failures were dropped, restore them.",
      "If there is one copy, make a second today.",
    ],
    portfolio:
      "This record is the raw material for the next module. Everything the portfolio can honestly claim has to be in here first.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section: "Formats for sharing findings, from show and tells to a research wall.",
        purpose: "Shapes how the project record is assembled and stored.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes shared team storage; adapt to your own two locations.",
        fallbackId: "R04",
      },
      {
        ...consent,
        section: "How consent records should be stored and separated.",
        purpose: "Keeps consent material out of anything shareable.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 5 November 2018. UK jurisdiction; check Indian requirements from a primary source.",
        fallbackId: "R54",
      },
    ],
  }),
];
