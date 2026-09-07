import { withLegacyText, type Lesson } from "./teaching";
// Module 17 is the course's most constrained module, deliberately. Its
// catalog gap is recorded and unresolved: no verified free primary source for
// market positioning and segmentation exists in RESOURCE-LIBRARY.md, so this
// module teaches strategy under constraint, service structure and stakeholder
// reasoning, and it teaches positioning only as an explicit gap the learner
// must fill from a verified source before relying on it.
const shapeUp = {
  title: "Ryan Singer: Shape Up",
  id: "R47",
  url: "https://basecamp.com/shapeup/webbook",
};
const standard = {
  title: "GOV.UK: Service Standard",
  id: "R19",
  url: "https://www.gov.uk/service-manual/service-standard",
};
const discovery = {
  title: "GOV.UK: discovery phase",
  id: "R07",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
};
const permissions = {
  title: "Google Cloud: IAM overview",
  id: "R44",
  url: "https://docs.cloud.google.com/iam/docs/overview",
};
const experienceMap = {
  title: "GOV.UK: creating an experience map",
  id: "R58",
  url: "https://www.gov.uk/service-manual/user-research/creating-an-experience-map",
};
const jobFamilies = {
  title: "GitLab job families: product design management",
  id: "R48",
  url: "https://handbook.gitlab.com/job-families/product/product-design-management/",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const needs = {
  title: "GOV.UK: start by learning user needs",
  id: "R35",
  url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
};
export const module17: Lesson[] = [
  withLegacyText({
    id: "m17-l01-v1",
    module: "m17",
    week: 17,
    day: 1,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "What strategy means for someone doing the work",
    objective:
      "Write the strategy your product is actually following — inferred from what it does, not from what anyone says — and name the three choices it implies.",
    bringForward: "Everything you know about your project and its constraints.",
    prerequisite: "Your project, its history and its current decisions.",
    why: "Strategy read as a document is inert. Strategy read as the pattern of what a team keeps choosing is something you can argue with.",
    teach: [
      "Strategy is a pattern of choices, visible in what gets built and refused.",
      "Read it from behaviour: what recurs, what is protected, what is cut first.",
      "A strategy that excludes nothing is not a strategy.",
      "Designers contribute by making the implied choices explicit.",
      "Naming an implied choice is often enough to change it.",
    ],
    explanation: [
      "The written strategy and the operating strategy differ in most organisations, and the operating one is what shapes your work. It is legible in behaviour: which requests are always accommodated, which quality is always cut when time is short, which customer is never turned down. Reading that pattern is a skill and it takes an afternoon.",
      "The test of a strategy is what it excludes. “Serve everyone well” excludes nothing and therefore decides nothing, which is why teams following it argue endlessly about priorities. A real strategy makes some requests obviously out of scope, and the relief of that is part of its value.",
      "The designer's contribution here is usually articulation rather than invention. Writing down the choices a team is already making — “we optimise for the returning customer and accept a harder first experience” — turns an unexamined habit into a decision that can be defended or changed.",
      "Naming an implied choice frequently changes it, because most implied choices were never chosen. A team that discovers it has been prioritising the loudest customer over the most common one usually does not defend that; it stops.",
    ],
    misconception:
      "“Strategy is decided above me.” The written one is. The operating one is made of a thousand small decisions, many of them yours, and naming the pattern is available to anyone paying attention.",
    example:
      "Reading the class provider's operating strategy from behaviour: every request from the two long-standing corporate clients is accommodated, however small; the first-time booking experience is the thing cut when time is short; and no request to support a new class format has ever been refused. The implied choices: retention over acquisition, breadth over depth, and existing customers over new ones. Written down, two of the three turned out to be unintentional — the first-time experience had been sacrificed by default rather than by decision — and naming it changed the next fortnight's work.",
    freeToolPath:
      "Written work and observation. No canvas or framework template is required.",
    outputs: [
      "The operating strategy inferred from behaviour",
      "Three implied choices named",
      "What the strategy excludes, or a note that it excludes nothing",
      "One implied choice you believe was never deliberate",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on constraint",
        instructions: [
          "Read the assigned chapters on appetite and deciding what not to build.",
          "Write what makes a choice strategic rather than tactical.",
        ],
      },
      {
        minutes: 30,
        title: "Read the behaviour",
        instructions: [
          "List what the team always accommodates and always cuts.",
          "List who is never refused and what is never prioritised.",
        ],
      },
      {
        minutes: 25,
        title: "Name the implied choices",
        instructions: [
          "Turn the patterns into three stated choices.",
          "Write each as a preference between two things.",
        ],
      },
      {
        minutes: 25,
        title: "Test for exclusion",
        instructions: [
          "Write what these choices rule out.",
          "If nothing is ruled out, say so plainly.",
        ],
      },
      {
        minutes: 15,
        title: "Find the accident",
        instructions: [
          "Mark any implied choice that was never deliberately made.",
          "Save the reading with the choices.",
        ],
      },
    ],
    check: [
      {
        question: "Where do you read the operating strategy?",
        answer:
          "In behaviour: what is always accommodated, what is cut first, who is never refused. The written document frequently describes something else.",
      },
      {
        question: "What is wrong with a strategy that excludes nothing?",
        answer:
          "It decides nothing, so every priority argument has to be had from first principles. Exclusion is what makes a strategy useful.",
      },
      {
        question: "What is the designer's contribution?",
        answer:
          "Usually articulation. Writing down the choice a team is already making converts an unexamined habit into something that can be defended or changed.",
      },
    ],
    rubric: [
      "The strategy is inferred from behaviour, not documents",
      "Three implied choices are stated as preferences",
      "Exclusions are named or their absence stated",
      "An unintentional choice is identified",
    ],
    criteria: [
      {
        criterion: "The strategy is inferred from behaviour, not documents",
        evidence:
          "Patterns drawn from what is accommodated, cut and refused.",
        levels: [
          "A restatement of a written strategy.",
          "Some behavioural evidence mixed with stated intentions.",
          "Inferred from behaviour with examples.",
          "As adequate, and a contradiction between the written and operating strategy is named.",
        ],
        remediation:
          "List the last ten decisions and what each preferred; the pattern is the strategy.",
        recheck: "The behavioural reading.",
      },
      {
        criterion: "Three implied choices are stated as preferences",
        evidence:
          "Three statements of the form A over B.",
        levels: [
          "Choices stated as values.",
          "Preferences implied but not stated.",
          "Three explicit preferences.",
          "As adequate, and one is uncomfortable to write down.",
        ],
        remediation:
          "Rewrite each choice as “we prefer … over …” and check it is falsifiable.",
        recheck: "The three choices.",
      },
      {
        criterion: "Exclusions are named or their absence stated",
        evidence:
          "What the strategy rules out, or an explicit statement that it rules out nothing.",
        levels: [
          "Exclusions not considered.",
          "Vague statements about focus.",
          "Specific exclusions, or an honest statement of their absence.",
          "As adequate, and the absence of exclusions is connected to a real cost.",
        ],
        remediation:
          "Ask what request would be refused. If none would, write that down.",
        recheck: "The exclusion list.",
      },
      {
        criterion: "An unintentional choice is identified",
        evidence:
          "One implied choice marked as never deliberately made, with the reasoning.",
        levels: [
          "All choices treated as deliberate.",
          "An accident suspected without reasoning.",
          "One identified with why it appears accidental.",
          "As adequate, and naming it changed or is likely to change something.",
        ],
        remediation:
          "Look for the quality that is always cut and ask whether anyone chose that.",
        recheck: "The identified accident.",
      },
    ],
    repairs: [
      "If the reading restates a document, list the last ten decisions instead.",
      "If choices are values, rewrite them as preferences between two things.",
      "If nothing is excluded, state that plainly and name the cost.",
      "If everything looks deliberate, look at what gets cut under pressure.",
    ],
    portfolio:
      "An inferred strategy with its implied choices is a strong piece of thinking to show, and it needs no access to anyone's confidential plans.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section:
          "Setting the appetite, fixed time with variable scope, and the betting table.",
        purpose:
          "Supplies a concrete account of strategy as recurring choices under constraint.",
        minutes: "60–90 selected",
        limits:
          "Free to read online; a print edition is sold and not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build. It is explicitly not a market-positioning source, and this course has no verified free source for positioning.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section:
          "The point on solving a whole problem for users.",
        purpose:
          "Gives an outcome-based frame for judging whether a pattern of choices serves anyone.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service obligations differ from commercial ones; take the outcome framing.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l02-v1",
    module: "m17",
    week: 17,
    day: 2,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "How this product survives",
    objective:
      "Write how your product actually sustains itself — what is exchanged, who pays, what it costs — and identify one design decision that changes the arithmetic.",
    bringForward: "Your project and whatever you know about its economics.",
    prerequisite: "Your project and its business context.",
    why: "Design decisions have costs and produce value, and a designer who cannot describe the exchange is arguing in a language nobody in the room is using.",
    teach: [
      "Describe the exchange: what someone gets and what they give.",
      "Name who pays; it is often not the person using the product.",
      "Costs are not only money: time, support, risk and attention.",
      "Some design decisions change the arithmetic directly.",
      "You can describe economics without inventing figures.",
    ],
    explanation: [
      "Every product involves an exchange, and describing it plainly is more useful than any framework. Someone gives money, attention, data or time, and gets something they wanted. Writing that in one sentence exposes whether the product's value is real and who is actually served — and it can be done honestly without knowing anyone's revenue.",
      "The payer and the user are frequently different people, and that difference shapes everything. A parent booking for a child, a company buying a tool its staff must use, a provider paying for a listing that customers browse: in each case the design question is whose experience wins when the two conflict, and that is a strategy question rather than a usability one.",
      "Costs extend beyond money. A design that generates support contacts costs staff time; one that increases refunds costs money later; one that demands attention costs goodwill. Naming those costs is how a design argument enters the same conversation as a financial one.",
      "You do not need real figures to reason about this, and you must not invent them. Describing the direction and the mechanism — this change would reduce support contacts about payment status, because that is what people currently ring about — is honest and usable, and the figures can be attached by someone who has them.",
    ],
    misconception:
      "“Business is not my area.” Every design decision is an economic decision about someone's time, money or risk. Declining to describe it does not remove the effect; it removes you from the conversation about it.",
    example:
      "The exchange, written plainly: a person gives money and a Saturday and gets a class they were confident about attending; the provider gives a place and their time and gets a booking they can rely on. The payer and user coincide here, except when a parent books for a child, where the design must serve both. Costs named: each unclear payment generates roughly one phone call to the provider, who is a single person with limited time; each duplicate payment generates a refund and a lost afternoon. One design decision changes the arithmetic directly: making payment status unambiguous reduces the calls, which is time the provider currently spends on the phone rather than teaching.",
    freeToolPath:
      "Written work and, where possible, one conversation with whoever runs the service. No financial data is needed and none should be invented.",
    outputs: [
      "The exchange written in one or two sentences",
      "Who pays and who uses, with any conflict named",
      "Costs beyond money, listed",
      "One design decision that changes the arithmetic, with the mechanism",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the exchange",
        instructions: [
          "Write what each side gives and gets, in plain words.",
          "Check both sides are real rather than aspirational.",
        ],
      },
      {
        minutes: 25,
        title: "Separate payer and user",
        instructions: [
          "Name who pays and who uses.",
          "Where they differ, write whose experience wins under conflict.",
        ],
      },
      {
        minutes: 30,
        title: "List the costs",
        instructions: [
          "List costs in money, staff time, risk and attention.",
          "Mark which ones your design affects.",
        ],
      },
      {
        minutes: 25,
        title: "Find the lever",
        instructions: [
          "Identify one design decision that changes a cost or a value directly.",
          "Write the mechanism without inventing figures.",
        ],
      },
      {
        minutes: 15,
        title: "Check honesty",
        instructions: [
          "Remove any number you cannot source.",
          "Save the description with the lever.",
        ],
      },
    ],
    check: [
      {
        question: "Why write the exchange in plain words?",
        answer:
          "Because it exposes whether the value is real and who is served, and it can be done honestly without access to anyone's financial data.",
      },
      {
        question: "Why does the payer-versus-user distinction matter?",
        answer:
          "Because when their interests conflict, someone decides whose experience wins, and that decision is strategic rather than a usability detail.",
      },
      {
        question: "How do you discuss economics without figures?",
        answer:
          "By naming the direction and the mechanism. Inventing numbers is worse than having none, and the figures can be supplied by whoever holds them.",
      },
    ],
    rubric: [
      "The exchange is described plainly for both sides",
      "Payer and user are distinguished with conflicts named",
      "Non-money costs are listed",
      "One lever is identified with its mechanism and no invented figures",
    ],
    criteria: [
      {
        criterion: "The exchange is described plainly for both sides",
        evidence:
          "A sentence per side stating what is given and received.",
        levels: [
          "Described in marketing language.",
          "One side described.",
          "Both sides in plain words.",
          "As adequate, and the description would be recognised by the person on each side.",
        ],
        remediation:
          "Write what each party actually hands over and actually receives.",
        recheck: "The exchange.",
      },
      {
        criterion: "Payer and user are distinguished with conflicts named",
        evidence:
          "A statement of who pays, who uses, and whose experience wins under conflict.",
        levels: [
          "Treated as the same person.",
          "Distinguished without addressing conflict.",
          "Both, with the conflict resolution stated.",
          "As adequate, and the resolution is identified as a strategic choice.",
        ],
        remediation:
          "Find a case where the payer and the user want different things and write who wins.",
        recheck: "The payer analysis.",
      },
      {
        criterion: "Non-money costs are listed",
        evidence:
          "Costs in staff time, risk and attention, with those your design affects marked.",
        levels: [
          "Only money considered.",
          "Other costs mentioned generally.",
          "Specific non-money costs listed and attributed.",
          "As adequate, and one cost falls on someone other than the business or the user.",
        ],
        remediation:
          "Ask what each design failure costs in someone's time and add it.",
        recheck: "The cost list.",
      },
      {
        criterion:
          "One lever is identified with its mechanism and no invented figures",
        evidence:
          "A design decision with a stated causal mechanism and no unsourced numbers.",
        levels: [
          "A lever asserted with invented figures.",
          "A lever without a mechanism.",
          "Mechanism stated and no invented numbers.",
          "As adequate, and the mechanism is traceable to a research finding.",
        ],
        remediation:
          "Delete every figure you cannot source and write the causal chain in words.",
        recheck: "The lever.",
      },
    ],
    repairs: [
      "If the exchange is in marketing language, rewrite it plainly.",
      "If payer and user are merged, find a conflict and resolve it explicitly.",
      "If only money is counted, add staff time, risk and attention.",
      "If figures are invented, remove them and state the mechanism.",
    ],
    portfolio:
      "A plain description of how a product sustains itself, with a design lever attached, shows commercial literacy without pretending to data you do not have.",
    resource: discovery,
    resources: [
      {
        ...discovery,
        section:
          "What a discovery establishes about constraints and viability.",
        purpose:
          "Frames the economic description as part of understanding the problem rather than a separate discipline.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 18 November 2016. Written for public services with no revenue model, so the exchange framing here is the course's own.",
        fallbackId: "R19",
      },
      {
        ...needs,
        section: "Needs across the whole journey, including staff needs.",
        purpose:
          "Brings the provider's time and effort into view as a real cost.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its supporting-staff framing is directly useful; it does not discuss commercial exchange.",
        fallbackId: "R08",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l03-v1",
    module: "m17",
    week: 17,
    day: 3,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "The whole service, front and back",
    objective:
      "Draw a service blueprint for one journey showing what the person sees, what staff do, and what systems are involved, and identify the two places where the back stage decides the front-stage experience.",
    bringForward: "Your m05 experience map and your m07 flows.",
    prerequisite: "Your experience map and flows.",
    why: "Many experience problems are staffing or process problems wearing an interface costume, and you cannot see that from the screens.",
    teach: [
      "A blueprint adds what happens behind the interface to what the person sees.",
      "Three layers: person's actions, visible service, and back-stage work.",
      "Most delays and failures originate behind the line.",
      "Staff constraints are design constraints.",
      "The assigned map source stops at the front stage; the back stage is this lesson's addition.",
    ],
    explanation: [
      "An experience map records what a person does, thinks and feels. A blueprint keeps that and adds the layers beneath: what staff do in response, what systems are involved, and where the work waits. The assigned mapping guidance explicitly does not cover back-stage process, so this structure is an extension of it rather than a reading of it.",
      "The line between what the person sees and what they do not is where most product problems actually live. A confirmation that takes an hour because someone checks it by hand, a cancellation that requires a phone call because the system has no route, a price that is wrong because two systems disagree — none of these is visible in the interface, and all of them are experienced as the product.",
      "Staff constraints are design constraints. If the provider is one person who teaches for six hours a day, a design that assumes a two-hour response time is a design that fails on Tuesdays. Putting their availability on the blueprint makes that visible before it becomes a broken promise.",
      "Two places usually dominate: where something waits for a person, and where two systems must agree. Finding those on your blueprint tells you where the experience is fragile regardless of how good the screens are.",
    ],
    misconception:
      "“That is an operations problem.” It is the experience. A person waiting an hour for a confirmation does not distinguish between your interface and your staffing, and the design that promises immediacy the operation cannot deliver is the one at fault.",
    example:
      "The blueprint for a booking: the person selects, reviews, pays and waits; the visible service shows a pending state and then a confirmation; behind the line the payment provider responds, the provider's own spreadsheet is updated by hand each evening, and a confirmation message is sent when that happens. Two decisive back-stage facts: the hand update means confirmation is not immediate, which the interface had been promising; and the spreadsheet is the only record, so a double payment is discovered a day later. Both changed the front-stage design — the pending state became honest about the timescale, and the reference number became the person's proof.",
    freeToolPath:
      "A long sheet of paper with three horizontal bands, drawn by hand and photographed. No blueprint tool or template is required.",
    outputs: [
      "A blueprint with three layers for one journey",
      "The line of visibility marked",
      "Two back-stage facts that determine the front-stage experience",
      "One front-stage change made because of a back-stage constraint",
    ],
    steps: [
      {
        minutes: 25,
        title: "Start from the experience map",
        instructions: [
          "Read the assigned mapping guidance, noting that it excludes back-stage process.",
          "Lay out your existing journey stages as the top band.",
        ],
      },
      {
        minutes: 30,
        title: "Add the visible service",
        instructions: [
          "Add what the product or a person shows or says at each stage.",
          "Mark the line between visible and invisible.",
        ],
      },
      {
        minutes: 30,
        title: "Add the back stage",
        instructions: [
          "Add what staff do and what systems are involved at each stage.",
          "Mark where work waits for a person and where systems must agree.",
        ],
      },
      {
        minutes: 20,
        title: "Find the decisive constraints",
        instructions: [
          "Identify the two back-stage facts that most shape the front-stage experience.",
          "Check them with whoever does the work, if you can.",
        ],
      },
      {
        minutes: 15,
        title: "Change one thing",
        instructions: [
          "Change a front-stage design because of a back-stage constraint.",
          "Save the blueprint with the change.",
        ],
      },
    ],
    check: [
      {
        question: "What does a blueprint add to an experience map?",
        answer:
          "The layers beneath the line of visibility: what staff do, what systems are involved, and where work waits. The mapping source explicitly stops before those.",
      },
      {
        question: "Why are staff constraints design constraints?",
        answer:
          "Because a promise the operation cannot keep becomes a broken promise in the interface. One person teaching all day cannot answer within two hours.",
      },
      {
        question: "Where does fragility concentrate?",
        answer:
          "Where work waits for a person and where two systems must agree. Both are invisible on screens and decisive in experience.",
      },
    ],
    rubric: [
      "Three layers are drawn with the line of visibility marked",
      "Back-stage work and systems are specific, not generic",
      "Two decisive back-stage facts are identified",
      "A front-stage change follows from a back-stage constraint",
    ],
    criteria: [
      {
        criterion:
          "Three layers are drawn with the line of visibility marked",
        evidence:
          "A blueprint with person, visible service and back stage, and a marked line.",
        levels: [
          "An experience map with no back stage.",
          "Layers drawn without a marked line.",
          "All three with the line marked.",
          "As adequate, and support processes are included alongside systems.",
        ],
        remediation:
          "Add the band beneath your map for what staff and systems do at each stage.",
        recheck: "The blueprint.",
      },
      {
        criterion: "Back-stage work and systems are specific, not generic",
        evidence:
          "Named actions, people and systems rather than abstractions.",
        levels: [
          "Generic boxes such as processing.",
          "Some specifics.",
          "Named work, people and systems throughout.",
          "As adequate, and the detail was confirmed with whoever does the work.",
        ],
        remediation:
          "Ask what actually happens after a booking and write the real steps.",
        recheck: "The back-stage layer.",
      },
      {
        criterion: "Two decisive back-stage facts are identified",
        evidence:
          "Two constraints that determine what the front stage can promise.",
        levels: [
          "None identified.",
          "One identified.",
          "Two, with their front-stage consequences.",
          "As adequate, and at least one contradicts something the interface currently implies.",
        ],
        remediation:
          "Look for where work waits for a person and where systems must agree.",
        recheck: "The two facts.",
      },
      {
        criterion:
          "A front-stage change follows from a back-stage constraint",
        evidence:
          "A design change traced to a constraint on the blueprint.",
        levels: [
          "No change.",
          "A change unrelated to the blueprint.",
          "A change traced to a specific back-stage fact.",
          "As adequate, and the change makes an honest promise where the old one was optimistic.",
        ],
        remediation:
          "Find the promise the operation cannot keep and change the promise.",
        recheck: "The change.",
      },
    ],
    repairs: [
      "If there is no back stage, add the layer of staff and systems.",
      "If the back stage is generic, ask what actually happens and name it.",
      "If no constraint is identified, look for waiting and for system disagreement.",
      "If nothing changed, find the promise the operation cannot keep.",
    ],
    portfolio:
      "A blueprint that changed a front-stage promise is strong evidence of service thinking, and it distinguishes a product designer from a screen designer.",
    resource: experienceMap,
    resources: [
      {
        ...experienceMap,
        section: "The four steps and the layers of what people do, think and feel.",
        purpose:
          "Supplies the front-stage foundation the blueprint extends.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 21 February 2017. It explicitly does not cover service blueprints or back-stage process, so the lower layers in this lesson are the course's own extension.",
        fallbackId: "R04",
      },
      {
        ...standard,
        section: "The points on solving a whole problem for users and on having a multidisciplinary team.",
        purpose:
          "Grounds the argument that operations and interface are one experience.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service framing; the staffing constraints in a small business are the course's own emphasis.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l04-v1",
    module: "m17",
    week: 17,
    day: 4,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "When the buyer is not the user",
    objective:
      "Map the roles in a business-to-business version of your product — buyer, administrator, everyday user — and design one screen that serves two of them without failing the third.",
    bringForward: "Your product and its permission work from m07.",
    prerequisite: "Your product and its role thinking.",
    why: "In business software the person choosing the product is rarely the person using it, and designs that ignore this fail slowly and expensively.",
    teach: [
      "Three roles recur: the buyer, the administrator and the everyday user.",
      "They want different things and only one of them chose the product.",
      "The buyer's needs dominate purchase; the user's needs dominate renewal.",
      "Administrators are users too, with their own tasks and frustrations.",
      "Design for the everyday user and give the buyer evidence.",
    ],
    explanation: [
      "The separation is structural. Someone decides to buy, someone configures and maintains, and someone uses it every day, and in many organisations these are three people with different incentives. Design decisions that please the buyer — dashboards, configurability, reporting — frequently cost the everyday user time, which is invisible at purchase and decisive at renewal.",
      "The administrator is the most neglected of the three. They do the tedious work of setting up roles, importing data and fixing things when they break, and their tasks are usually designed last and least. In a product with real adoption problems, the administrator is often where the friction actually is.",
      "The practical rule is to design for the everyday user and give the buyer evidence rather than features. A demonstration of how quickly someone completes their work is more persuasive than a configuration surface nobody will use, and it does not cost the daily experience anything.",
      "Your permission work from m07 and m13 becomes structural here: the roles are not just about what people may do, but about whose experience the product optimises when they conflict, which is a strategy decision rather than a permissions one.",
    ],
    misconception:
      "“The buyer is the customer.” The buyer decides once; the everyday user decides whether it is still used in a year. Products that optimise for the purchase decision accumulate resentment and lose renewals.",
    example:
      "The class product's business version has three roles: an office manager who buys wellbeing classes for staff, an administrator who allocates places and chases attendance, and the staff member who books a class. Their conflicts: the buyer wants attendance reporting, which the staff member experiences as surveillance; the administrator wants bulk allocation, which the staff member experiences as being enrolled without choosing. The screen designed — the staff member's booking view — shows their own place clearly, shows what their employer can see about it, and gives the administrator an allocation route that the staff member can decline. The buyer gets an aggregate report with no individual attendance.",
    freeToolPath:
      "Paper and written role descriptions. No enterprise tooling is involved.",
    outputs: [
      "Three roles described with their differing wants",
      "Two conflicts between roles named",
      "One screen serving two roles without failing the third",
      "What the buyer gets instead of the feature they asked for",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the permission vocabulary",
        instructions: [
          "Read the assigned overview for principals, roles and least privilege.",
          "Note that it is infrastructure vocabulary rather than interface guidance.",
        ],
      },
      {
        minutes: 30,
        title: "Describe the three roles",
        instructions: [
          "Write what each role wants and is accountable for.",
          "Note which of them chose the product.",
        ],
      },
      {
        minutes: 25,
        title: "Find the conflicts",
        instructions: [
          "Name two places where the roles want incompatible things.",
          "Say who currently wins and why.",
        ],
      },
      {
        minutes: 25,
        title: "Design the screen",
        instructions: [
          "Design one screen serving two roles without harming the third.",
          "Show the everyday user what others can see about them.",
        ],
      },
      {
        minutes: 15,
        title: "Give the buyer evidence",
        instructions: [
          "Decide what the buyer gets instead of the feature that would cost the user.",
          "Save the roles, conflicts and screen.",
        ],
      },
    ],
    check: [
      {
        question: "Why does the everyday user matter more than the buyer?",
        answer:
          "Because the buyer decides once and the user decides whether it is still used in a year. Optimising for purchase accumulates resentment and loses renewals.",
      },
      {
        question: "Who is usually neglected?",
        answer:
          "The administrator, whose setup, import and repair tasks are designed last and are frequently where the real friction lives.",
      },
      {
        question:
          "What do you give a buyer instead of a costly feature?",
        answer:
          "Evidence: a demonstration of how quickly the work gets done. It persuades at purchase without taxing the daily experience.",
      },
    ],
    rubric: [
      "Three roles are described with their accountabilities",
      "Two genuine conflicts are named with the current winner",
      "The designed screen serves two roles without failing the third",
      "The buyer receives evidence rather than a costly feature",
    ],
    criteria: [
      {
        criterion: "Three roles are described with their accountabilities",
        evidence:
          "Buyer, administrator and everyday user described with what each answers for.",
        levels: [
          "Roles named without wants.",
          "Wants described without accountability.",
          "All three with wants and accountabilities.",
          "As adequate, and it is stated which role chose the product.",
        ],
        remediation:
          "For each role write what they are judged on; that explains what they want.",
        recheck: "The role descriptions.",
      },
      {
        criterion: "Two genuine conflicts are named with the current winner",
        evidence:
          "Two incompatible wants with who currently prevails.",
        levels: [
          "No conflicts identified.",
          "Conflicts named without resolution.",
          "Two named with the current winner and why.",
          "As adequate, and one conflict involves surveillance or autonomy.",
        ],
        remediation:
          "Look for a feature one role wants that another would experience as a cost.",
        recheck: "The conflict list.",
      },
      {
        criterion:
          "The designed screen serves two roles without failing the third",
        evidence:
          "One screen with the third role's interests explicitly protected.",
        levels: [
          "A screen serving one role.",
          "Two served, the third unexamined.",
          "Two served with the third's protection stated.",
          "As adequate, and the everyday user can see what others can see about them.",
        ],
        remediation:
          "Walk the screen as the role you did not design for and write what it costs them.",
        recheck: "The screen.",
      },
      {
        criterion:
          "The buyer receives evidence rather than a costly feature",
        evidence:
          "A stated substitute for the feature that would harm the user.",
        levels: [
          "The buyer's feature built as requested.",
          "The feature refused with no substitute.",
          "A substitute that serves the buyer's actual accountability.",
          "As adequate, and the substitute is cheaper to build than the feature.",
        ],
        remediation:
          "Ask what the buyer is trying to prove, and give them that instead of the mechanism they asked for.",
        recheck: "The substitute.",
      },
    ],
    repairs: [
      "If roles lack accountabilities, write what each is judged on.",
      "If no conflicts appear, look for surveillance and enrolment features.",
      "If the third role was unexamined, walk the screen as them.",
      "If the buyer's feature stands, design the evidence that replaces it.",
    ],
    portfolio:
      "Role conflicts with a designed resolution are exactly the material business-to-business interviews probe, and few junior portfolios contain any.",
    resource: permissions,
    resources: [
      {
        ...permissions,
        section:
          "Principals, roles, permissions, inheritance and least privilege.",
        purpose:
          "Supplies precise vocabulary for describing multi-role products.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Cloud infrastructure documentation, not a role-based interface pattern library: every interface decision here is the course's own.",
        fallbackId: "R19",
      },
      {
        ...standard,
        section: "The points on solving a whole problem for users and on making sure everyone can use the service.",
        purpose:
          "Supports designing for the person who did not choose the product.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public services have no buyer-user split of this kind; the application is the course's own.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l05-v1",
    module: "m17",
    week: 17,
    day: 5,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Systems that push back",
    objective:
      "Identify one place where your product's design creates a second-order effect, trace the loop, and design a response that does not simply add a warning.",
    bringForward: "Your blueprint and your product's incentives.",
    prerequisite: "Your service blueprint.",
    why: "Designs change behaviour, and changed behaviour changes the system the design was built for. Ignoring the loop produces fixes that make things worse.",
    teach: [
      "A second-order effect is what happens after people adapt.",
      "Look for loops: the response to your change feeds back into the cause.",
      "Delays hide loops; the effect arrives long after the change.",
      "People optimise for whatever you measure or reward.",
      "A warning is not a response to a structural effect.",
    ],
    explanation: [
      "First-order thinking asks what the change does. Second-order asks what people do about it. Making cancellation easier reduces friction and may increase casual bookings; adding reminders reduces no-shows and may train people to ignore messages. Neither effect is a reason not to act, and both are reasons to look one step further before declaring success.",
      "Loops are where effects compound. If a design increases bookings, and increased bookings fill classes, and full classes produce disappointed people who then book earlier, you have a loop, and the loop determines the eventual behaviour more than the initial change did. Drawing it is usually enough to see it.",
      "Delay is what hides loops. An effect that arrives six weeks later is attributed to something else, which is how teams keep re-fixing the same problem. Marking the delay on your loop is what makes the connection visible when the effect eventually arrives.",
      "People optimise for what is measured and rewarded, including staff. A provider rewarded for filling classes will overbook if the design lets them; a support team measured on ticket closure will close tickets. The design response is structural — change what is easy and what is visible — rather than a warning nobody reads.",
    ],
    misconception:
      "“We will monitor for unintended consequences.” Monitoring finds them after they have compounded and been attributed to something else. Tracing the likely loop before shipping costs an hour.",
    example:
      "The loop: making cancellation one tap reduced the friction that had been suppressing casual bookings; casual bookings rose; more of them were cancelled late; late cancellations left classes half-full, which the provider experienced as unreliable demand and responded to by overbooking; overbooking produced turned-away attendees, which is the worst outcome in the whole service. The delay between the change and the overbooking response was about six weeks. The design response was structural rather than a warning: cancellation stayed one tap, and a late cancellation now offers the place to a short waiting list, which closes the loop at the point where it was doing harm.",
    freeToolPath:
      "Paper for the loop diagram. Boxes and arrows with the delay marked; no systems-modelling tool is required.",
    outputs: [
      "One second-order effect identified with the adaptation that causes it",
      "A drawn loop with its delay marked",
      "What people are being rewarded to do, named",
      "A structural response rather than a warning",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose a change and ask what follows",
        instructions: [
          "Take a change you have made or plan to make.",
          "Write what people will do differently once it exists.",
        ],
      },
      {
        minutes: 30,
        title: "Trace the loop",
        instructions: [
          "Follow the adaptation to its effect on the system.",
          "Check whether that effect feeds back to the original cause.",
          "Mark the delay on each arrow.",
        ],
      },
      {
        minutes: 25,
        title: "Name the incentives",
        instructions: [
          "Write what each party is rewarded or measured on.",
          "Check your change does not reward something harmful.",
        ],
      },
      {
        minutes: 25,
        title: "Design the structural response",
        instructions: [
          "Change what is easy or visible rather than adding a warning.",
          "Check the response does not create its own loop.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write what you would watch for, and when it would appear.",
          "Save the loop and the response.",
        ],
      },
    ],
    check: [
      {
        question: "What is a second-order effect?",
        answer:
          "What happens after people adapt to your change. Easier cancellation reduces friction and may also increase casual bookings, which is a different problem.",
      },
      {
        question: "Why do delays matter?",
        answer:
          "Because an effect arriving weeks later is attributed to something else, so the same problem gets re-fixed repeatedly without anyone connecting it to its cause.",
      },
      {
        question: "Why is a warning not a response?",
        answer:
          "Because it asks people to act against what the design makes easy. Structural responses change what is easy or visible, which is what actually changes behaviour.",
      },
    ],
    rubric: [
      "A second-order effect is identified with the adaptation behind it",
      "A loop is drawn with delays marked",
      "Incentives are named for each party",
      "The response is structural rather than a warning",
    ],
    criteria: [
      {
        criterion:
          "A second-order effect is identified with the adaptation behind it",
        evidence:
          "An effect stated with the behaviour change that produces it.",
        levels: [
          "Only first-order effects considered.",
          "An effect asserted without the adaptation.",
          "Both stated.",
          "As adequate, and the effect is plausible enough that someone might dispute it.",
        ],
        remediation:
          "Ask what people will do differently once the change exists, then what that causes.",
        recheck: "The effect statement.",
      },
      {
        criterion: "A loop is drawn with delays marked",
        evidence:
          "A diagram where an effect feeds back to its cause, with time marked.",
        levels: [
          "A linear chain.",
          "A loop without delays.",
          "A loop with delays on the arrows.",
          "As adequate, and the delay explains why the effect would be misattributed.",
        ],
        remediation:
          "Follow your chain until something affects the original cause, and estimate how long each step takes.",
        recheck: "The loop.",
      },
      {
        criterion: "Incentives are named for each party",
        evidence:
          "What each party is rewarded or measured on, including staff.",
        levels: [
          "Incentives not considered.",
          "User incentives only.",
          "All parties including staff and the business.",
          "As adequate, and one incentive is identified as conflicting with the design's intent.",
        ],
        remediation:
          "Ask what each person is judged on; that predicts what they will do with your change.",
        recheck: "The incentive list.",
      },
      {
        criterion: "The response is structural rather than a warning",
        evidence:
          "A change to what is easy or visible, checked for its own loop.",
        levels: [
          "A warning or education.",
          "A structural change without checking its effects.",
          "Structural, with its own second-order effects considered.",
          "As adequate, and the response closes the loop at the point of harm rather than at the original change.",
        ],
        remediation:
          "Replace the warning with a change to what the design makes easy, then trace that too.",
        recheck: "The response.",
      },
    ],
    repairs: [
      "If only first-order effects appear, ask what people will do about the change.",
      "If the chain is linear, follow it until it returns to its cause.",
      "If incentives are unexamined, write what each party is judged on.",
      "If the response is a warning, change what is easy instead.",
    ],
    portfolio:
      "A traced loop with a structural response is systems thinking made concrete, and it is a rare thing to be able to show at any level.",
    resource: standard,
    resources: [
      {
        ...standard,
        section:
          "The points on solving a whole problem for users and on iterating and improving frequently.",
        purpose:
          "Frames second-order effects as part of solving the problem rather than as surprises.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not teach systems modelling; the loops and delays here are the course's own.",
        fallbackId: "R07",
      },
      {
        ...errors,
        section: "Slips, mistakes and how design shapes behaviour.",
        purpose:
          "Supports the argument that structure changes behaviour where warnings do not.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written about individual errors rather than system loops; the extension is this lesson's.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l06-v1",
    module: "m17",
    week: 17,
    day: 6,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Stakeholders and their actual interests",
    objective:
      "Map the people who can affect or block your work, what each is accountable for, and design your approach to the one whose opposition would cost most.",
    bringForward: "Your project and the decisions you need made.",
    prerequisite: "Your project and its pending decisions.",
    why: "Work fails for stakeholder reasons more often than for design reasons, and stakeholder reasons are usually legible if anyone bothers to look.",
    teach: [
      "Map by accountability, not by seniority.",
      "Interest and influence are different axes.",
      "Opposition is usually rational from where the person stands.",
      "Find what your work does for them, or accept that you are asking a favour.",
      "The quiet blocker matters more than the loud sceptic.",
    ],
    explanation: [
      "Accountability predicts behaviour better than title. A person judged on support volume will resist anything that might increase it, however junior they are; a person judged on launch dates will resist anything that adds a week. Mapping what each person answers for tells you what they will do, which seniority does not.",
      "Interest and influence separate the map into four useful groups: people who care and can act, people who care and cannot, people who can act and do not care, and everyone else. The second group are your allies and are usually neglected; the third are the ones who block things absent-mindedly.",
      "Opposition is rarely irrational. It is usually a correct perception of a cost that falls on that person, and treating it as obstruction rather than information is how designers acquire a reputation for being difficult. Finding the cost, and either removing it or acknowledging it, is the work.",
      "The quiet blocker — the person who does not argue and simply never prioritises your thing — is more dangerous than the vocal sceptic, who at least tells you what the objection is. Identifying them is worth more than winning any meeting.",
    ],
    misconception:
      "“If the design is right, it will win.” Designs are adopted by people with their own accountabilities and constraints. Understanding those is not politics; it is the ordinary work of getting something built.",
    example:
      "The map for the booking work: the provider, accountable for revenue and her own time, high interest and high influence; the developer, accountable for delivery dates, moderate interest and high influence; the provider's assistant, accountable for the day-to-day list, high interest and low influence, and the person who best knew where the real problems were; and the payment provider, no interest and high influence over what is possible. The costly opposition was the developer, whose resistance was rational — the work threatened a date. The approach: reduce the scope so it fits the appetite, bring the estimate down by defining the states, and give him the ability to ship it in two parts.",
    freeToolPath:
      "A written map or a simple two-axis sketch. No stakeholder-mapping tool is required.",
    outputs: [
      "A map of people by accountability, interest and influence",
      "The rational basis of one person's opposition",
      "An approach to the costliest opposition",
      "The quiet blocker identified",
    ],
    steps: [
      {
        minutes: 25,
        title: "List by accountability",
        instructions: [
          "List everyone who can affect or block the work.",
          "Write what each is accountable for, not their title.",
        ],
      },
      {
        minutes: 25,
        title: "Place them",
        instructions: [
          "Place each on interest and influence.",
          "Mark the allies with interest and no influence.",
        ],
      },
      {
        minutes: 30,
        title: "Understand the opposition",
        instructions: [
          "For the costliest opposition, write why their position is rational.",
          "Name the cost your work imposes on them.",
        ],
      },
      {
        minutes: 25,
        title: "Design the approach",
        instructions: [
          "Remove or reduce the cost where you can.",
          "Where you cannot, acknowledge it and say what you are asking for.",
        ],
      },
      {
        minutes: 15,
        title: "Find the quiet one",
        instructions: [
          "Identify who could simply never prioritise this.",
          "Write what would make them prioritise it.",
        ],
      },
    ],
    check: [
      {
        question: "Why map by accountability rather than seniority?",
        answer:
          "Because what someone is judged on predicts what they will support. A junior person accountable for support volume will resist things a senior one would wave through.",
      },
      {
        question: "How should you treat opposition?",
        answer:
          "As information about a cost that falls on that person. Treating it as obstruction loses both the information and the relationship.",
      },
      {
        question: "Why is the quiet blocker more dangerous?",
        answer:
          "Because they never state an objection you can address; the work simply never reaches the top of their list.",
      },
    ],
    rubric: [
      "People are mapped by what they are accountable for",
      "Interest and influence are separated",
      "One opposition is explained as rational, with its cost",
      "The quiet blocker is identified with what would move them",
    ],
    criteria: [
      {
        criterion: "People are mapped by what they are accountable for",
        evidence:
          "A list with accountabilities rather than titles.",
        levels: [
          "Mapped by seniority.",
          "Accountabilities guessed.",
          "Accountabilities stated, checked where possible.",
          "As adequate, and one accountability explains a behaviour that had seemed arbitrary.",
        ],
        remediation:
          "For each person write what they are judged on at the end of a quarter.",
        recheck: "The accountability map.",
      },
      {
        criterion: "Interest and influence are separated",
        evidence:
          "A placement on both axes with the low-influence allies marked.",
        levels: [
          "One axis only.",
          "Both axes without identifying allies.",
          "Both, with allies and absent-minded blockers marked.",
          "As adequate, and a high-interest, low-influence person is identified as a source of knowledge.",
        ],
        remediation:
          "Place each person on both axes and look at who cares but cannot act.",
        recheck: "The placement.",
      },
      {
        criterion:
          "One opposition is explained as rational, with its cost",
        evidence:
          "A written account of why the person's position makes sense from where they stand.",
        levels: [
          "Opposition described as resistance.",
          "A rationale guessed without a cost.",
          "The specific cost to that person named.",
          "As adequate, and the account would be recognised by the person themselves.",
        ],
        remediation:
          "Write what your work costs that person in time, risk or accountability.",
        recheck: "The opposition account.",
      },
      {
        criterion:
          "The quiet blocker is identified with what would move them",
        evidence:
          "A named person who could deprioritise the work, and what would change that.",
        levels: [
          "Not considered.",
          "Identified without a route.",
          "Identified with what would make it a priority for them.",
          "As adequate, and the route uses their accountability rather than persuasion.",
        ],
        remediation:
          "Ask who never says no and never does it; that is the person to plan for.",
        recheck: "The quiet blocker.",
      },
    ],
    repairs: [
      "If mapped by seniority, rewrite with accountabilities.",
      "If one axis is used, add the other and find the allies.",
      "If opposition reads as resistance, find the cost it imposes.",
      "If no quiet blocker is named, look for who agrees and never acts.",
    ],
    portfolio:
      "A stakeholder map by accountability, with a rational account of opposition, demonstrates the organisational judgement that senior design roles are actually hiring for.",
    resource: jobFamilies,
    resources: [
      {
        ...jobFamilies,
        section:
          "The management levels' descriptions of stakeholder influence and strategic partnership.",
        purpose:
          "Shows how one employer describes the stakeholder work expected at senior levels.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's published expectations, not a market standard, and its performance measures are its own.",
        fallbackId: "R23",
      },
      {
        ...standard,
        section: "The point on having a multidisciplinary team.",
        purpose:
          "Frames stakeholder work as shared responsibility rather than persuasion.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-sector governance; the accountability mapping here is the course's own.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l07-v1",
    module: "m17",
    week: 17,
    day: 7,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Deciding without enough information",
    objective:
      "Make one real decision under uncertainty, recording what you knew, what you assumed, what would have changed it, and how you will find out whether it was right.",
    bringForward: "An open decision in your project.",
    prerequisite: "One decision you have been postponing.",
    why: "Waiting for certainty is itself a decision, usually a worse one, and being able to decide well with gaps is what senior work consists of.",
    teach: [
      "Separate what you know, what you assume and what you are guessing.",
      "Ask what the decision costs if wrong, and how reversible it is.",
      "Decide at the last responsible moment, not the earliest or the latest.",
      "Record the assumption; it is what you check later.",
      "A decision with no way to find out it was wrong is a bet, not a decision.",
    ],
    explanation: [
      "The first move is separating your evidence from your assumptions, which is the m05 discipline applied to a decision rather than a finding. Most decisions that feel impossible become tractable once you see that two of the five inputs are known and three are guesses, and that only one of the guesses matters.",
      "Cost and reversibility set how much certainty you need. A reversible decision with a small cost should be made immediately and revisited; an irreversible one with a large cost deserves the delay required to reduce the important uncertainty. Confusing the two produces either paralysis or recklessness, usually both in the same team.",
      "The last responsible moment is the point after which delay costs you options. Deciding earlier throws away information you would have had; deciding later means the choice gets made by default or by someone else. Naming that moment for a decision is a useful discipline and it is usually earlier than you think.",
      "Recording the assumption is what makes the decision reviewable. Six weeks later, when something is not working, the record tells you whether the reasoning was wrong or the assumption was — and those need different responses.",
    ],
    misconception:
      "“We need more research before deciding.” Sometimes. Often the research would not change the decision, and the honest test is to ask which finding would produce a different choice. If none would, decide.",
    example:
      "The decision: whether to build the waiting list before or after the improved payment states. Known: payment confusion produces duplicate payments and calls; late cancellations leave places empty. Assumed: that a waiting list would fill enough of those places to be worth a fortnight. Guessed: how many people would join one. The test applied: which finding would change the order? Only evidence that late cancellations were rare. A count from the provider's records took twenty minutes and showed they were common, so the decision was made. The assumption about filling places was recorded, with a check at four weeks.",
    freeToolPath:
      "Written work, plus whatever cheap check reduces the one uncertainty that matters.",
    outputs: [
      "A decision made, with knowns, assumptions and guesses separated",
      "The cost and reversibility assessed",
      "The one finding that would have changed it",
      "A check date for the recorded assumption",
    ],
    steps: [
      {
        minutes: 25,
        title: "Separate the inputs",
        instructions: [
          "Write what you know, what you assume and what you are guessing.",
          "Mark which of them the decision actually depends on.",
        ],
      },
      {
        minutes: 25,
        title: "Assess cost and reversibility",
        instructions: [
          "Write what being wrong would cost and how hard it would be to undo.",
          "Decide how much certainty this level of cost justifies.",
        ],
      },
      {
        minutes: 25,
        title: "Find the decisive question",
        instructions: [
          "Write which finding would produce a different decision.",
          "If none would, decide now and record that.",
        ],
      },
      {
        minutes: 25,
        title: "Reduce it cheaply if you can",
        instructions: [
          "Find the cheapest way to reduce the one uncertainty that matters.",
          "Do it if it takes under an hour; otherwise decide with the assumption stated.",
        ],
      },
      {
        minutes: 20,
        title: "Record and set a check",
        instructions: [
          "Record the decision, the assumption and the reasoning.",
          "Set a date to check whether the assumption held.",
        ],
      },
    ],
    check: [
      {
        question: "What decides how much certainty you need?",
        answer:
          "The cost of being wrong and how reversible the decision is. Cheap and reversible decisions should be made now and revisited.",
      },
      {
        question: "What is the test for needing more research?",
        answer:
          "Whether a finding would change the decision. If no plausible result would, the research is delay rather than diligence.",
      },
      {
        question: "Why record the assumption?",
        answer:
          "So that when something is not working you can tell whether the reasoning was wrong or the assumption was; they need different responses.",
      },
    ],
    rubric: [
      "Knowns, assumptions and guesses are separated",
      "Cost and reversibility are assessed",
      "The decisive finding is named, or its absence stated",
      "The assumption is recorded with a check date",
    ],
    criteria: [
      {
        criterion: "Knowns, assumptions and guesses are separated",
        evidence:
          "Three labelled lists with the decision's real dependencies marked.",
        levels: [
          "Inputs undifferentiated.",
          "Separated without identifying dependencies.",
          "Separated with the load-bearing inputs marked.",
          "As adequate, and one supposed known turns out to be an assumption.",
        ],
        remediation:
          "Label each input and ask what evidence you actually have for it.",
        recheck: "The three lists.",
      },
      {
        criterion: "Cost and reversibility are assessed",
        evidence:
          "A written cost of being wrong and a reversibility judgement.",
        levels: [
          "Neither assessed.",
          "Cost without reversibility.",
          "Both, with the certainty requirement they imply.",
          "As adequate, and the assessment changed how long you were willing to wait.",
        ],
        remediation:
          "Write what happens if this is wrong and how long it would take to undo.",
        recheck: "The assessment.",
      },
      {
        criterion:
          "The decisive finding is named, or its absence stated",
        evidence:
          "The finding that would change the decision, or a statement that none would.",
        levels: [
          "Research proposed generally.",
          "A finding named but not decisive.",
          "The decisive finding named, or its absence stated plainly.",
          "As adequate, and a cheap check was actually run.",
        ],
        remediation:
          "For each candidate finding, ask whether it would change your choice; keep only those that would.",
        recheck: "The decisive question.",
      },
      {
        criterion: "The assumption is recorded with a check date",
        evidence:
          "A written assumption and a date to test it.",
        levels: [
          "Assumption unrecorded.",
          "Recorded without a check.",
          "Recorded with a date and a signal.",
          "As adequate, and the signal is something you could realistically observe.",
        ],
        remediation:
          "Write the assumption as a sentence and put a date beside it.",
        recheck: "The record.",
      },
    ],
    repairs: [
      "If inputs are merged, label them known, assumed and guessed.",
      "If cost is unassessed, write what being wrong would cost.",
      "If research is proposed generally, name the finding that would change the decision.",
      "If the assumption is unrecorded, write it with a check date.",
    ],
    portfolio:
      "A recorded decision with its assumptions and a check date is exactly the artefact senior interviews probe for, and it shows judgement rather than certainty.",
    resource: discovery,
    resources: [
      {
        ...discovery,
        section:
          "Deciding what happens next under uncertainty.",
        purpose:
          "Frames decision-making as reducing the uncertainty that matters rather than all of it.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 18 November 2016. It does not discuss reversibility or timing, which are this lesson's own.",
        fallbackId: "R19",
      },
      {
        ...shapeUp,
        section: "Risks and rabbit holes, and the betting table.",
        purpose:
          "Supplies a way of treating a decision as a bounded bet rather than a prediction.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; take the reasoning about bounded commitments.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l08-v1",
    module: "m17",
    week: 17,
    day: 8,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Positioning: the gap this course does not fill",
    objective:
      "Write what you would need to learn about market positioning, find one candidate source, assess it against this course's verification rules, and record the result honestly.",
    bringForward: "Your strategy reading and this course's resource rules.",
    prerequisite: "Your operating-strategy reading and the catalog's rules.",
    why: "This course has no verified free source for market positioning, and it will not teach it from an unverified one. Learning to close a gap yourself is the transferable skill.",
    teach: [
      "Positioning and segmentation are real topics this course cannot source.",
      "Vendor content on strategy is abundant, promotional and usually unverifiable.",
      "Apply the catalog's rules: retrievable, free, scope-reviewed, dated, bounded.",
      "A rejected source is a result worth recording.",
      "Do not teach yourself from a source you would not assign to someone else.",
    ],
    explanation: [
      "The gap is documented in this course's resource library: market positioning and segmentation have no verified free primary source, after attempts that returned navigation pages and a refusal. That is why every strategy lesson here has been about constraint, structure and stakeholders rather than about where a product sits in a market.",
      "The reason it is hard to source is worth understanding. Most freely available strategy content is published by companies selling something, is written to be persuasive rather than examinable, and cites no evidence you can check. That does not make it wrong; it makes it unverifiable, which is a different problem and the one this course's rules are built around.",
      "The rules are reusable: can you retrieve the exact page, is it free without an account or trial, can you review its actual teaching scope, does it state a date, and can you write down what it does not cover. A source failing any of those goes in the record as attempted, with the reason.",
      "The discipline that matters is not teaching yourself from a source you would refuse to assign. A designer who learns positioning from a vendor's blog and then repeats it confidently has acquired a vocabulary rather than an understanding, which is worse than the gap.",
    ],
    misconception:
      "“There is plenty written about positioning.” There is plenty published. The question this course asks is whether a specific page can be retrieved, is free, states its date and scope, and can have its limits written down — and most of what is published fails that.",
    example:
      "The learner wrote what she would need: how a product's position relative to alternatives is described, how segments are defined without inventing them, and how positioning changes a design decision. One candidate was assessed: a company's strategy article, freely readable, undated, with no cited evidence, and written to sell the company's consulting. It was recorded as attempted and rejected, with the reason. The gap was left open in her own notes, with a plan to look for a book through a library rather than a blog — and, in the meantime, to avoid making positioning claims she could not support.",
    freeToolPath:
      "A browser and the catalog's verification rules. Public libraries are a legitimate route to books this course cannot link to, and using one is not a paid dependency.",
    outputs: [
      "A written statement of what you need to learn",
      "One candidate source assessed against the catalog rules",
      "A recorded verdict, including a rejection with reasons",
      "A plan for closing the gap without unverified sources",
    ],
    steps: [
      {
        minutes: 25,
        title: "State the gap precisely",
        instructions: [
          "Write the questions about positioning you cannot currently answer.",
          "Note which of your design decisions would change with an answer.",
        ],
      },
      {
        minutes: 25,
        title: "Re-read the rules",
        instructions: [
          "Read this course's verification and selection rules.",
          "Write the five checks you will apply to any candidate.",
        ],
      },
      {
        minutes: 30,
        title: "Assess one candidate",
        instructions: [
          "Find one candidate source and retrieve it.",
          "Apply each check and record the result.",
        ],
      },
      {
        minutes: 25,
        title: "Record the verdict",
        instructions: [
          "Accept, reject or mark it partial, with reasons.",
          "Write what it does not cover, whatever the verdict.",
        ],
      },
      {
        minutes: 15,
        title: "Plan the gap",
        instructions: [
          "Write how you will fill this without an unverified source.",
          "Note what you will avoid claiming until you have.",
        ],
      },
    ],
    check: [
      {
        question: "Why does this course refuse to teach positioning?",
        answer:
          "Because it has no verified free primary source for it, and teaching from an unverified one would break the rule every other module has followed.",
      },
      {
        question: "What makes most strategy content unverifiable?",
        answer:
          "It is published to persuade, cites no checkable evidence, often carries no date, and exists to sell something. That is a different problem from being wrong.",
      },
      {
        question: "What should you avoid while the gap is open?",
        answer:
          "Making positioning claims you cannot support. A vocabulary acquired from marketing material sounds like knowledge and is not.",
      },
    ],
    rubric: [
      "The gap is stated as specific questions",
      "The catalog's checks are applied to a real candidate",
      "A verdict is recorded with reasons and exclusions",
      "A plan exists that does not rely on unverified sources",
    ],
    criteria: [
      {
        criterion: "The gap is stated as specific questions",
        evidence:
          "Questions you cannot answer, with the decisions they would change.",
        levels: [
          "The gap stated as a topic.",
          "Questions listed without decisions.",
          "Specific questions with the decisions attached.",
          "As adequate, and one question is one you have already been asked.",
        ],
        remediation:
          "Write the positioning questions someone could ask you that you could not answer.",
        recheck: "The gap statement.",
      },
      {
        criterion: "The catalog's checks are applied to a real candidate",
        evidence:
          "A retrieved source with each check answered.",
        levels: [
          "No candidate assessed.",
          "A candidate discussed without retrieval.",
          "Retrieved and each check answered.",
          "As adequate, and the retrieval date is recorded.",
        ],
        remediation:
          "Open the page, apply the five checks and write the answers.",
        recheck: "The assessment.",
      },
      {
        criterion: "A verdict is recorded with reasons and exclusions",
        evidence:
          "Accept, reject or partial, with what it does not cover.",
        levels: [
          "No verdict.",
          "A verdict without reasons.",
          "Verdict, reasons and exclusions.",
          "As adequate, and the record is written so someone else could use it.",
        ],
        remediation:
          "Write the verdict and the boundary in the same form the catalog uses.",
        recheck: "The verdict.",
      },
      {
        criterion:
          "A plan exists that does not rely on unverified sources",
        evidence:
          "A route to the knowledge — a library, a primary text, a practitioner — and what you will avoid claiming meanwhile.",
        levels: [
          "No plan.",
          "A plan relying on more of the same material.",
          "A route that meets the standard, with an interim restraint.",
          "As adequate, and the restraint is specific about the claims you will not make.",
        ],
        remediation:
          "Write where you would find a source that passes the checks, and what you will not say until then.",
        recheck: "The plan.",
      },
    ],
    repairs: [
      "If the gap is a topic, turn it into questions with decisions attached.",
      "If no candidate was retrieved, open one and apply the checks.",
      "If the verdict lacks reasons, write them in the catalog's form.",
      "If the plan uses more vendor content, find a route that passes the checks.",
    ],
    portfolio:
      "A documented gap with an assessed and rejected source is unusual and demonstrates the research discipline the rest of this course rests on.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section:
          "The chapters on appetite and deciding what not to build, re-read as the strategy content this course can verify.",
        purpose:
          "Marks the boundary between what is sourced here and what is not.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. It is explicitly not a positioning or segmentation source, which is the gap this lesson addresses.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section:
          "The points on understanding users and their needs and on solving a whole problem for users, as the alternative footing for strategic argument.",
        purpose:
          "Gives a verified basis for strategic reasoning that does not depend on positioning theory.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service framing with no market context, which is precisely why the gap remains.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l09-v1",
    module: "m17",
    week: 17,
    day: 9,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Consumer and enterprise, and the trade between them",
    objective:
      "Compare the same feature designed for a consumer product and for a business one, and name the three decisions that differ and why.",
    bringForward: "Your product and its business-to-business role mapping.",
    prerequisite: "Your role mapping from earlier in this module.",
    why: "The two contexts reward opposite things, and a designer who applies consumer instincts to business software, or the reverse, produces work that fails for structural reasons.",
    teach: [
      "Consumer products compete for a choice; business software is often mandatory.",
      "Mandatory use changes what frustration means: it accumulates rather than losing the user.",
      "Business software has administrators, auditability and data obligations.",
      "Consumer products optimise for first use; business ones for the thousandth.",
      "Neither is more sophisticated; they optimise different things.",
    ],
    explanation: [
      "The structural difference is choice. A consumer can leave, which makes the first experience decisive and makes delight worth something. A person using their employer's software cannot leave, which makes the hundredth use decisive and turns frustration into accumulated resentment rather than lost custom.",
      "That inverts several priorities. Onboarding matters less than efficiency for a daily tool; keyboard operation and density matter more; a slightly slower but clearer flow that a consumer would appreciate becomes an irritation for someone doing it forty times a day. The m08 dense-data and m09 keyboard lessons are business software's core rather than its edge.",
      "Business contexts also add obligations: someone must be able to see who did what, data may be subject to retention rules, and an administrator has to configure it for people who will never meet you. Those are design surfaces, and they are usually where the real work is.",
      "Neither context is more demanding, and treating enterprise as the serious kind is a common mistake among designers who have not worked in it. The skills transfer; the priorities do not, and knowing which you are designing for is the first question.",
    ],
    misconception:
      "“Good design is good design.” The principles transfer and the priorities do not. A consumer flow optimised for a confident first use, applied to a tool someone uses hourly, produces a product people resent for reasons they cannot articulate.",
    example:
      "The booking feature designed twice. Consumer: emphasis on the first booking, generous whitespace, one action per screen, a warm confirmation. Business, for an office manager booking wellbeing classes for staff: dense list, keyboard operable, bulk actions, a record of who booked what and when for the finance team, and configuration for someone who will do this monthly for two years. Three differing decisions, named: density over spaciousness, because of repetition; bulk actions over single ones, because of volume; and an audit record, because someone else's money is being spent.",
    freeToolPath:
      "Paper for both versions. No enterprise tooling is required to design an enterprise screen.",
    outputs: [
      "The same feature designed for both contexts",
      "Three decisions that differ, with the structural reason for each",
      "The administrator's task designed, not assumed",
      "A note of which context your project actually is",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on roles and obligations",
        instructions: [
          "Re-read the assigned permission vocabulary and the standard's points on accountability.",
          "List what a business context adds that a consumer one does not.",
        ],
      },
      {
        minutes: 30,
        title: "Design the consumer version",
        instructions: [
          "Design for a first-time, self-selected user.",
          "Note what you optimised for.",
        ],
      },
      {
        minutes: 30,
        title: "Design the business version",
        instructions: [
          "Design for someone doing this repeatedly on behalf of others.",
          "Include the administrator's configuration task.",
        ],
      },
      {
        minutes: 20,
        title: "Name the differences",
        instructions: [
          "Write the three decisions that differ and the structural reason for each.",
          "Check none of them is merely aesthetic.",
        ],
      },
      {
        minutes: 15,
        title: "Locate your project",
        instructions: [
          "Decide which context your own project is in, and say what that implies.",
          "Save both designs and the comparison.",
        ],
      },
    ],
    check: [
      {
        question: "What does mandatory use change?",
        answer:
          "The meaning of frustration. A consumer leaves; a captive user accumulates resentment, and the hundredth use matters more than the first.",
      },
      {
        question: "What does a business context add as design surface?",
        answer:
          "Administration, auditability and data obligations. Those are usually where the real work is, and they are routinely designed last.",
      },
      {
        question: "Is enterprise design more sophisticated?",
        answer:
          "No. It optimises different things. Treating it as the serious kind is a common mistake, as is applying consumer instincts to a daily tool.",
      },
    ],
    rubric: [
      "The same feature is designed for both contexts",
      "Three differences are named with structural reasons",
      "The administrator's task is designed",
      "The project's own context is identified with implications",
    ],
    criteria: [
      {
        criterion: "The same feature is designed for both contexts",
        evidence:
          "Two designs of one feature with the optimisation stated for each.",
        levels: [
          "One design relabelled.",
          "Two designs differing only visually.",
          "Two designs with different structures and stated optimisations.",
          "As adequate, and the business version assumes repeated daily use.",
        ],
        remediation:
          "Redesign the business version for someone doing this forty times a week.",
        recheck: "The two designs.",
      },
      {
        criterion: "Three differences are named with structural reasons",
        evidence:
          "Three decisions with the structural cause of each difference.",
        levels: [
          "Differences described aesthetically.",
          "Structural reasons for one or two.",
          "All three with structural reasons.",
          "As adequate, and one reason concerns who is spending the money.",
        ],
        remediation:
          "For each difference ask what about the context forced it; if nothing did, it is taste.",
        recheck: "The difference list.",
      },
      {
        criterion: "The administrator's task is designed",
        evidence:
          "A configuration or management task designed rather than assumed.",
        levels: [
          "Administration ignored.",
          "Mentioned without design.",
          "Designed with its own flow.",
          "As adequate, and it accounts for someone configuring for people they will never meet.",
        ],
        remediation:
          "Design the setup task; it is where business software usually fails.",
        recheck: "The administrator design.",
      },
      {
        criterion:
          "The project's own context is identified with implications",
        evidence:
          "A statement of which context applies and what it implies for priorities.",
        levels: [
          "Not addressed.",
          "Context named without implications.",
          "Both stated.",
          "As adequate, and one current design decision is revisited because of it.",
        ],
        remediation:
          "Decide whether your users chose your product, and follow the implications.",
        recheck: "The context statement.",
      },
    ],
    repairs: [
      "If the business version is a restyled consumer one, redesign for repetition.",
      "If differences are aesthetic, find the structural cause or drop them.",
      "If administration is missing, design the setup task.",
      "If the project's context is unstated, decide it and revisit one decision.",
    ],
    portfolio:
      "Two versions of one feature with structural reasoning is a compact way to show you can work in either context, which widens the roles you can apply for.",
    resource: permissions,
    resources: [
      {
        ...permissions,
        section: "Roles, inheritance and least privilege.",
        purpose:
          "Supplies the vocabulary for the administrative surface a business product needs.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Infrastructure documentation rather than an interface pattern library; the administrator's task design is the course's own.",
        fallbackId: "R19",
      },
      {
        ...standard,
        section: "The points on having a multidisciplinary team and on solving a whole problem for users.",
        purpose:
          "Grounds auditability and obligation as design surfaces rather than compliance chores.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-sector obligations differ from commercial ones; take the framing.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l10-v1",
    module: "m17",
    week: 17,
    day: 10,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Pressure, patterns and where you stop",
    objective:
      "Identify three requests you would refuse, write what you would say, and design one honest alternative that serves the underlying business need.",
    bringForward: "Your product, its economics and its stakeholder map.",
    prerequisite: "Your economics reading and stakeholder map.",
    why: "The pressure to design something that works against the person using it is ordinary, arrives politely, and is usually justified by a number.",
    teach: [
      "Recognise the patterns: hidden costs, obstructed exits, manufactured urgency.",
      "Most such requests have a legitimate business need underneath.",
      "Refusing without an alternative loses the argument and the relationship.",
      "Say what it costs: refunds, complaints, reputation, staff time.",
      "Write your limits before you are asked to cross them.",
    ],
    explanation: [
      "The patterns are recognisable and named: costs revealed only at the last step, cancellation routes that are harder than sign-up, countdowns that are not real, pre-ticked boxes, and choices worded so that the careless answer is the one that benefits the business. What they share is that they work by exploiting attention rather than by serving anyone.",
      "Underneath each is usually a real need. Someone wants fewer cancellations, more sign-ups, higher basket values — legitimate goals with dishonest proposed means. Finding the honest version of the same goal is the work, and it is usually possible: fewer cancellations through better expectation-setting, more sign-ups by removing friction rather than by hiding the exit.",
      "Refusal alone loses. A designer who says no without an alternative is overruled and excluded from the next conversation; one who says “not that, because it costs us this, but here is what would serve the same goal” stays in the room. This is the m14 argument skill applied to an ethical case rather than a resourcing one.",
      "Writing your limits in advance is the practical safeguard, exactly as in m15 and m16. Under pressure, with a deadline and a persuasive colleague, a written line is easier to hold than an improvised judgement, and it lets you answer immediately rather than being talked round while you think.",
    ],
    misconception:
      "“This is just persuasive design.” Persuasion presents a real offer well. These patterns work by making the person's attention fail, and the test is whether the person would object if they understood what had happened — which they generally do, later, loudly.",
    example:
      "Three refusals were written. A countdown implying a place would be released in five minutes when it would not: refused, because it is a false statement, with the alternative of showing genuine remaining places. Cancellation requiring a phone call while booking took two taps: refused, because it obstructs exit, with the alternative of self-service cancellation and an optional reason field that gives the provider better information than an angry call. A pre-ticked box adding a newsletter: refused, with the alternative of asking after the booking is complete, which in the provider's own experience produced better-quality subscribers.",
    freeToolPath:
      "Written work. The alternatives are design work you can do on paper.",
    outputs: [
      "Three requests you would refuse, named as patterns",
      "The legitimate need underneath each",
      "One honest alternative designed",
      "Your written limits, prepared in advance",
    ],
    steps: [
      {
        minutes: 25,
        title: "Name the patterns",
        instructions: [
          "List requests you could plausibly receive on your product.",
          "Name the pattern each one is an instance of.",
        ],
      },
      {
        minutes: 25,
        title: "Find the real need",
        instructions: [
          "For each, write the legitimate business need underneath.",
          "Check the need is real rather than a rationalisation.",
        ],
      },
      {
        minutes: 30,
        title: "Design one alternative",
        instructions: [
          "Design an honest way to serve one of those needs.",
          "Estimate what it would cost compared with the dishonest version.",
        ],
      },
      {
        minutes: 25,
        title: "Write what you would say",
        instructions: [
          "Write the sentence you would use to refuse, naming the cost.",
          "Practise it aloud so it is available under pressure.",
        ],
      },
      {
        minutes: 15,
        title: "Write your limits",
        instructions: [
          "Write the line you will not cross, before being asked.",
          "Save the refusals, the alternative and the limits.",
        ],
      },
    ],
    check: [
      {
        question: "What do these patterns have in common?",
        answer:
          "They work by exploiting attention rather than by serving anyone. The test is whether the person would object if they understood what had happened.",
      },
      {
        question: "Why is refusal alone insufficient?",
        answer:
          "Because it loses the argument and excludes you from the next one. The legitimate need underneath usually has an honest design that serves it.",
      },
      {
        question: "Why write your limits in advance?",
        answer:
          "Because under deadline pressure a written line is easier to hold, and it lets you answer immediately rather than being talked round while you think.",
      },
    ],
    rubric: [
      "Three plausible requests are named as patterns",
      "The legitimate need underneath each is identified",
      "One honest alternative is designed with its cost",
      "Written limits exist, prepared in advance",
    ],
    criteria: [
      {
        criterion: "Three plausible requests are named as patterns",
        evidence:
          "Three requests you could realistically receive, each identified as a known pattern.",
        levels: [
          "Extreme examples nobody would propose.",
          "Plausible requests without naming the pattern.",
          "Three plausible requests named as patterns.",
          "As adequate, and one is something you might have designed without noticing.",
        ],
        remediation:
          "Think of what a provider under revenue pressure would ask for, not what a villain would.",
        recheck: "The three requests.",
      },
      {
        criterion:
          "The legitimate need underneath each is identified",
        evidence:
          "A real business need per request, distinguished from its dishonest means.",
        levels: [
          "Requests treated as purely bad faith.",
          "Needs asserted vaguely.",
          "A specific legitimate need per request.",
          "As adequate, and one need is one you would want to serve.",
        ],
        remediation:
          "Ask what the requester is actually trying to achieve, and write that.",
        recheck: "The needs list.",
      },
      {
        criterion: "One honest alternative is designed with its cost",
        evidence:
          "A designed alternative and an estimate of its cost against the dishonest version.",
        levels: [
          "No alternative.",
          "An alternative sketched without cost.",
          "Designed with a cost comparison.",
          "As adequate, and it serves the need at least as well.",
        ],
        remediation:
          "Design the version you would be happy to explain to the person affected.",
        recheck: "The alternative.",
      },
      {
        criterion: "Written limits exist, prepared in advance",
        evidence:
          "A written line with the sentence you would say.",
        levels: [
          "No limits written.",
          "Limits stated abstractly.",
          "A specific line with prepared wording.",
          "As adequate, and the wording names the cost rather than only the principle.",
        ],
        remediation:
          "Write what you will not do and the sentence you would use, then say it aloud.",
        recheck: "The limits.",
      },
    ],
    repairs: [
      "If the examples are extreme, use ones a real client might request.",
      "If requests are treated as bad faith, find the legitimate need.",
      "If no alternative exists, design the honest version.",
      "If limits are abstract, write the specific line and the sentence.",
    ],
    portfolio:
      "A refusal with an honest alternative designed is a strong ethical artefact and a practical one, because it shows you can hold a line without losing the room.",
    resource: errors,
    resources: [
      {
        ...errors,
        section:
          "How design shapes behaviour, and the difference between preventing errors and exploiting them.",
        purpose:
          "Supports the argument that these patterns work by causing failure rather than by persuading.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is about error prevention rather than manipulative patterns; the naming and the refusals here are the course's own.",
        fallbackId: "R02",
      },
      {
        ...standard,
        section: "The points on making sure everyone can use the service and on solving a whole problem for users.",
        purpose:
          "Gives a stated standard to cite rather than only a personal preference.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service obligations; a commercial product has no equivalent obligation, which is why the written limits matter.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l11-v1",
    module: "m17",
    week: 17,
    day: 11,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "Influence without authority",
    objective:
      "Compare your current work against one employer's published expectations for design leadership, and plan one concrete way to practise an expectation you cannot yet demonstrate.",
    bringForward: "Your project artefacts and this module's outputs.",
    prerequisite: "Your portfolio of work so far.",
    why: "Senior design work is largely getting things decided and built without controlling anyone, and it is describable, learnable and testable against a real employer's stated expectations.",
    teach: [
      "Leadership here means influence over decisions, not managing people.",
      "One employer's published levels are evidence, not a market standard.",
      "Compare against stated expectations rather than a general sense of seniority.",
      "Practise the expectation you cannot demonstrate, on real work.",
      "Distinguish what you have done from what you have read about.",
    ],
    explanation: [
      "The assigned job-family page describes management levels with strategic partnership, stakeholder influence, team development and how design success is measured. Read as a checklist against your own work, it is more useful than any general advice about seniority, because it is specific, published and someone's actual expectation.",
      "It is one employer's expectations. This course has one published source of this kind and records that plainly: it is not a market standard, its performance measures are its own, and a different company would describe the same level differently. Treat it as a specific example to reason from rather than as a definition.",
      "The comparison should be against artefacts. For each expectation, either you can point to something you did — the stakeholder map, the argued case, the refusal with an alternative — or you cannot, and the honest answer is that you have read about it. This module and m14 have produced several of those artefacts deliberately.",
      "Practising the gap means finding real work where the expectation applies. Influence cannot be practised in a document; it is practised by taking a decision you want changed to the person who can change it, with the argument prepared. That is available at any level, including on a project with one client.",
    ],
    misconception:
      "“Leadership comes with a title.” The expectations describe behaviour: making decisions legible, influencing people who do not report to you, connecting design work to what the organisation is accountable for. All of that is practisable now.",
    example:
      "The comparison found four expectations she could evidence: influencing a decision with a prepared argument, mapping stakeholders by accountability, connecting design work to a stated business cost, and refusing a request with an alternative. Two she could not: developing another designer's work through critique, and setting direction across more than one project. The plan: run a structured critique for a peer's work monthly, using the m14 critique format, and write a direction note covering both her project and the provider's other service, to be discussed rather than filed. Both were marked as unpractised until done.",
    freeToolPath:
      "Reading and written comparison, plus real work. Nothing here needs a role or a budget.",
    outputs: [
      "A comparison of your artefacts against published expectations",
      "What you can evidence and what you have only read about",
      "A plan to practise one expectation on real work",
      "A note that one employer's expectations are not a market standard",
    ],
    steps: [
      {
        minutes: 30,
        title: "Read the expectations",
        instructions: [
          "Read the assigned job-family page for one level above your current work.",
          "List the expectations in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Compare against artefacts",
        instructions: [
          "For each expectation, name the artefact that evidences it.",
          "Where none exists, write read-about rather than done.",
        ],
      },
      {
        minutes: 25,
        title: "Choose one gap",
        instructions: [
          "Choose the expectation whose absence most limits you.",
          "Check it is practisable on work you actually have.",
        ],
      },
      {
        minutes: 20,
        title: "Plan the practice",
        instructions: [
          "Write what you will do, on which work, and when.",
          "Name what evidence it would produce.",
        ],
      },
      {
        minutes: 15,
        title: "Record the limits",
        instructions: [
          "Note that this is one employer's published expectation.",
          "Save the comparison and the plan.",
        ],
      },
    ],
    check: [
      {
        question: "What does this leadership mean here?",
        answer:
          "Influence over decisions without authority over people: making work legible, connecting it to accountabilities, and getting things decided.",
      },
      {
        question: "What is the status of the published expectations?",
        answer:
          "One employer's, published and specific. Useful evidence to reason from, and not a market standard — a different company would describe the level differently.",
      },
      {
        question: "How do you practise influence?",
        answer:
          "On real work: take a decision you want changed to the person who can change it, with the argument prepared. It cannot be practised in a document.",
      },
    ],
    rubric: [
      "Expectations are compared against real artefacts",
      "Done and read-about are distinguished honestly",
      "One gap is chosen and is practisable on real work",
      "The single-employer limitation is recorded",
    ],
    criteria: [
      {
        criterion: "Expectations are compared against real artefacts",
        evidence:
          "Each expectation with the artefact that evidences it or a blank.",
        levels: [
          "A general self-assessment.",
          "Some expectations matched to artefacts.",
          "Every expectation matched or explicitly blank.",
          "As adequate, and the artefacts are ones a reviewer could actually read.",
        ],
        remediation:
          "For each expectation, name the file or document that demonstrates it.",
        recheck: "The comparison.",
      },
      {
        criterion: "Done and read-about are distinguished honestly",
        evidence:
          "A clear marker separating demonstrated from studied.",
        levels: [
          "Reading presented as experience.",
          "Distinction implied.",
          "Explicit markers throughout.",
          "As adequate, and at least one item you were tempted to claim is marked read-about.",
        ],
        remediation:
          "Go through and mark anything you cannot point to an artefact for.",
        recheck: "The markers.",
      },
      {
        criterion:
          "One gap is chosen and is practisable on real work",
        evidence:
          "A chosen expectation with the real work it will be practised on.",
        levels: [
          "No gap chosen.",
          "A gap chosen with no route to practise it.",
          "Chosen with real work identified.",
          "As adequate, and the practice is scheduled rather than intended.",
        ],
        remediation:
          "Choose the gap you can act on this month with the work you already have.",
        recheck: "The chosen gap.",
      },
      {
        criterion: "The single-employer limitation is recorded",
        evidence:
          "A written note that these expectations are one employer's.",
        levels: [
          "Treated as a standard.",
          "Limitation implied.",
          "Stated plainly.",
          "As adequate, and it names what a second source would add.",
        ],
        remediation:
          "Add the sentence recording that this is one published example rather than a market definition.",
        recheck: "The limitation note.",
      },
    ],
    repairs: [
      "If the comparison is a self-assessment, attach artefacts.",
      "If reading reads as experience, mark it read-about.",
      "If the gap has no route, choose one you can practise now.",
      "If the source is treated as a standard, record that it is one employer's.",
    ],
    portfolio:
      "A comparison against published expectations, with the read-about items honestly marked, is a strong preparation artefact for a level conversation.",
    resource: jobFamilies,
    resources: [
      {
        ...jobFamilies,
        section:
          "One management level's expectations: strategic partnership, stakeholder influence, team development and how success is measured.",
        purpose:
          "Supplies specific published expectations to compare your artefacts against.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. One employer's published expectations, not a market standard; its performance measures are its own and this course has no second comparable source.",
        fallbackId: "R23",
      },
      {
        ...standard,
        section: "The point on having a multidisciplinary team.",
        purpose:
          "Frames influence as part of a team's shared accountability rather than as personal advancement.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-sector context; the leadership behaviours here come from the job-family source and this course's own framing.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m17-l12-v1",
    module: "m17",
    week: 17,
    day: 12,
    level: 5,
    areas: [3, 17],
    guided: true,
    title: "A strategy note for your project",
    objective:
      "Write a two-page strategy note for your project stating the choices, what they exclude, the constraints, the risks and what you would need to learn.",
    bringForward: "Everything from this module.",
    prerequisite: "All this module's outputs.",
    why: "A strategy that lives in your head cannot be argued with, inherited or checked. Two pages is enough and is more than most projects have.",
    teach: [
      "State the choices as preferences between real alternatives.",
      "Name what the strategy excludes; that is what makes it usable.",
      "Record the constraints honestly, including the ones you dislike.",
      "List the risks with what would tell you they are materialising.",
      "State what you would need to learn, including this course's gaps.",
    ],
    explanation: [
      "Two pages is the right length because it is short enough to be read and long enough to say something. A longer document is a project in itself and will not be read; a shorter one usually omits the exclusions, which is the part that does the work.",
      "The exclusions are what turn a strategy into a decision tool. Anyone can write that the product should serve people well; a strategy that says which people, and which of their needs the product will not address, settles arguments that would otherwise recur monthly.",
      "Constraints belong in the note, including the ones you would rather not state: one developer, a provider who teaches all day, no analytics, a payment provider you cannot change. A strategy that assumes constraints away produces plans nobody can execute, which is worse than a modest plan that works.",
      "The learning list closes the loop with this module's honest gap. Positioning is not sourced here; some of your economic reasoning rests on assumption; and your evidence about people is small. Writing those down means the strategy states its own foundations, which is what lets someone else check it or improve it.",
    ],
    misconception:
      "“Strategy is for people above me.” The note you write for your own project is the one that will actually govern your decisions for the next few months. Writing it down is what makes it examinable.",
    example:
      "The two pages: three choices, each a preference — first-time confidence over power-user speed, the provider's time over feature breadth, and honest states over conversion tricks. Exclusions: no corporate booking work this year, no marketing surfaces, no features that increase the provider's daily message volume. Constraints: one developer part-time, no analytics, a payment provider that cannot be changed, and a provider who is unavailable between ten and four. Risks: late cancellations rising after the easier cancellation flow, with the waiting-list count as the signal. Learning needed: positioning, which this course has no verified source for; and how many bookings come from repeat customers, which nobody currently knows.",
    freeToolPath:
      "Two pages of plain text. No template or canvas is required.",
    outputs: [
      "Two pages stating choices as preferences",
      "An exclusion list",
      "Constraints recorded honestly, including inconvenient ones",
      "Risks with signals, and a list of what you need to learn",
    ],
    steps: [
      {
        minutes: 30,
        title: "Write the choices",
        instructions: [
          "State three choices as preferences between real alternatives.",
          "Check each one could be disagreed with.",
        ],
      },
      {
        minutes: 25,
        title: "Write the exclusions",
        instructions: [
          "List what the strategy rules out for this period.",
          "Include at least one thing you would like to do.",
        ],
      },
      {
        minutes: 25,
        title: "Record the constraints",
        instructions: [
          "List the real constraints, including staffing and tooling.",
          "Do not assume any of them away.",
        ],
      },
      {
        minutes: 25,
        title: "List risks and signals",
        instructions: [
          "Write the risks, including second-order ones from earlier in the module.",
          "For each, name the signal that would show it materialising.",
        ],
      },
      {
        minutes: 15,
        title: "State what you need to learn",
        instructions: [
          "Include this course's recorded gaps where they affect you.",
          "Save the note where decisions will be made from it.",
        ],
      },
    ],
    check: [
      {
        question: "Why is the exclusion list the important part?",
        answer:
          "Because it settles arguments in advance. A strategy that rules nothing out leaves every priority decision to be argued from first principles.",
      },
      {
        question: "Why record inconvenient constraints?",
        answer:
          "Because a plan that assumes them away cannot be executed, and the gap between the plan and reality is filled by quiet quality cuts.",
      },
      {
        question: "Why list what you need to learn?",
        answer:
          "So the strategy states its own foundations. It also makes the note honest about where it rests on assumption rather than evidence.",
      },
    ],
    rubric: [
      "Three choices are stated as disputable preferences",
      "An exclusion list includes something you wanted to do",
      "Constraints are recorded without being assumed away",
      "Risks carry signals and the learning gaps are named",
    ],
    criteria: [
      {
        criterion: "Three choices are stated as disputable preferences",
        evidence:
          "Three A-over-B statements someone could disagree with.",
        levels: [
          "Values or aspirations.",
          "Preferences that nobody could dispute.",
          "Three disputable preferences.",
          "As adequate, and one is uncomfortable to commit to in writing.",
        ],
        remediation:
          "Rewrite each choice until someone reasonable could argue for the other side.",
        recheck: "The choices.",
      },
      {
        criterion:
          "An exclusion list includes something you wanted to do",
        evidence:
          "Exclusions listed, at least one of which you would have liked to pursue.",
        levels: [
          "No exclusions.",
          "Exclusions that cost nothing to give up.",
          "Real exclusions including a wanted one.",
          "As adequate, and each exclusion states what would bring it back.",
        ],
        remediation:
          "Add the thing you keep wanting to build and are choosing not to.",
        recheck: "The exclusion list.",
      },
      {
        criterion:
          "Constraints are recorded without being assumed away",
        evidence:
          "Real constraints including staffing, tooling and availability.",
        levels: [
          "Constraints omitted.",
          "Only technical constraints listed.",
          "All real constraints including people's availability.",
          "As adequate, and one constraint changes a choice rather than being noted and ignored.",
        ],
        remediation:
          "List who is available when, and what cannot be changed, then check your choices against them.",
        recheck: "The constraint list.",
      },
      {
        criterion:
          "Risks carry signals and the learning gaps are named",
        evidence:
          "Risks with observable signals, and a learning list including course gaps.",
        levels: [
          "Risks without signals.",
          "Signals without the learning list.",
          "Both present.",
          "As adequate, and the learning list names the positioning gap explicitly.",
        ],
        remediation:
          "For each risk write what you would see, and add what you know you do not know.",
        recheck: "The risks and learning list.",
      },
    ],
    repairs: [
      "If choices are values, rewrite them as disputable preferences.",
      "If exclusions cost nothing, add one you wanted.",
      "If constraints are assumed away, list them and re-check the choices.",
      "If risks have no signals, write what would show each materialising.",
    ],
    portfolio:
      "A two-page strategy note with real exclusions and honest constraints is a senior artefact, and it is the natural companion to the case study your portfolio module will build.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section: "Appetite, betting and deciding what not to build.",
        purpose:
          "Supplies the framing for choices, exclusions and bounded commitments.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. Scope strategy rather than market positioning, which this course still cannot source.",
        fallbackId: "R07",
      },
      {
        ...standard,
        section:
          "The points on solving a whole problem for users, iterating and improving frequently, and defining what success looks like.",
        purpose:
          "Keeps the note connected to outcomes rather than to intentions.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Public-service framing; the commercial constraints in your note are your own.",
        fallbackId: "R07",
      },
    ],
  }),
];
