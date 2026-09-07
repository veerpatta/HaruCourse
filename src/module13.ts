import { withLegacyText, type Lesson } from "./teaching";
// Module 13 builds a design system from what the learner already has rather
// than from an idea of what a system should contain. The through-line is that
// a system is a set of decisions with owners, versions and documentation —
// not a file of components — and that its value is measured by whether other
// people can use it without asking her.
const components = {
  title: "GOV.UK Design System: components",
  id: "R17",
  url: "https://design-system.service.gov.uk/components/",
};
const styles = {
  title: "GOV.UK Design System: styles",
  id: "R06",
  url: "https://design-system.service.gov.uk/styles/",
};
const patterns = {
  title: "GOV.UK Design System: patterns",
  id: "R11",
  url: "https://design-system.service.gov.uk/patterns/",
};
const semver = {
  title: "Semantic Versioning 2.0.0",
  id: "R67",
  url: "https://semver.org/",
};
const keyboardPatterns = {
  title: "W3C ARIA Authoring Practices: patterns",
  id: "R65",
  url: "https://www.w3.org/WAI/ARIA/apg/patterns/",
};
const contrast = {
  title: "W3C: understanding contrast (minimum)",
  id: "R30",
  url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
};
const mdn = {
  title: "MDN: core learning modules",
  id: "R15",
  url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core",
};
const typography = {
  title: "web.dev: typography",
  id: "R03",
  url: "https://web.dev/learn/design/typography",
};
const stories = {
  title: "Atlassian: user stories",
  id: "R18",
  url: "https://www.atlassian.com/agile/project-management/user-stories",
};
export const module13: Lesson[] = [
  withLegacyText({
    id: "m13-l01-v1",
    module: "m13",
    week: 13,
    day: 1,
    level: 4,
    areas: [12],
    guided: true,
    title: "What a design system is for",
    objective:
      "Write the purpose of your system as three problems it solves for named people, and identify what it will not attempt.",
    bringForward:
      "Your m08 component inventory and token sheet, and your m12 built pages.",
    prerequisite: "Your inventory, token sheet and built pages.",
    why: "Systems built without a stated purpose become libraries nobody uses and everybody works around.",
    teach: [
      "A system exists to make decisions once and reuse them, not to store components.",
      "Name the people it serves: you next month, another designer, an engineer.",
      "Coverage matters more than completeness: solve the repeated cases.",
      "A system has costs — maintenance, governance, rigidity — and they are real.",
      "State what is out of scope, or everything drifts into it.",
    ],
    explanation: [
      "The value of a system is decisions not re-made. When the button hierarchy, the spacing scale and the error pattern are settled, every screen after that starts further along, and disagreements are about the product rather than the pixel. A collection of components without those settled decisions is a folder, and folders do not reduce anyone's work.",
      "Naming the people is what keeps it honest. A system for one designer needs documentation of decisions and their reasons. A system shared with an engineer needs specification of behaviour and states. A system used by people you have never met needs governance and versioning. Building the third when you need the first is a common and expensive mistake.",
      "Coverage beats completeness. Twelve components covering the cases that recur every week are more useful than sixty covering everything imaginable, and far cheaper to keep correct. The repeated cases are visible in your own inventory: they are the things you have already drawn more than twice.",
      "Systems cost something. Someone maintains them, someone answers questions about them, and they make unusual solutions harder — which is sometimes exactly the point and sometimes a real loss. Stating the cost and the out-of-scope boundary at the start prevents the slow expansion that turns a useful system into an obligation.",
    ],
    misconception:
      "“We need a design system.” Sometimes what is needed is three settled decisions and a page of documentation. A full system is worth building when the same decisions recur across people and time; before that it is an investment with no return.",
    example:
      "The system's purpose was written as three problems: I re-decide button hierarchy and spacing on every screen and they drift; an engineer has to ask me what each state should do, which costs a day per feature; and accessibility decisions get remade badly under time pressure. The people served: the learner in three months, one engineer, and any reviewer reading a case study. Out of scope, stated: marketing pages, anything about brand illustration, and any component used only once. The cost was written too: about a day a month of maintenance, and the loss of some freedom on individual screens.",
    freeToolPath:
      "Written work. The system itself will live in Markdown and a stylesheet; no design tool, subscription or documentation platform is needed.",
    outputs: [
      "Three problems the system solves, each with the person affected",
      "A named audience for the system",
      "An out-of-scope list",
      "A stated maintenance cost and what the system makes harder",
    ],
    steps: [
      {
        minutes: 25,
        title: "Find the repeated decisions",
        instructions: [
          "Look through your screens for decisions you have made more than twice.",
          "List the ones that drifted between screens.",
        ],
      },
      {
        minutes: 25,
        title: "Write the three problems",
        instructions: [
          "State each as a problem for a named person, not as a feature.",
          "Include at least one that costs someone else time.",
        ],
      },
      {
        minutes: 25,
        title: "Name the audience",
        instructions: [
          "Decide who the system is for now, not eventually.",
          "Write what each audience needs from it.",
        ],
      },
      {
        minutes: 25,
        title: "Write the boundary",
        instructions: [
          "List what the system will not cover.",
          "Include one-off components and anything outside the product.",
        ],
      },
      {
        minutes: 20,
        title: "Cost it honestly",
        instructions: [
          "Estimate the maintenance in hours per month.",
          "Write what the system will make harder or slower.",
          "Save the purpose, audience, boundary and cost together.",
        ],
      },
    ],
    check: [
      {
        question: "What is the unit of value in a design system?",
        answer:
          "A decision made once and reused. Components are how decisions travel; without settled decisions they are just files.",
      },
      {
        question: "Why does the audience change what you build?",
        answer:
          "A system for yourself needs recorded reasons. One shared with an engineer needs behaviour specifications. One used by strangers needs governance and versioning, which is far more work.",
      },
      {
        question: "Why state what a system makes harder?",
        answer:
          "Because it does: unusual solutions cost more, and someone maintains it. Stating the cost prevents the expansion that turns a useful system into an obligation.",
      },
    ],
    rubric: [
      "Three problems are stated for named people",
      "The current audience is named, not aspirational",
      "An out-of-scope list exists",
      "Maintenance cost and rigidity are stated",
    ],
    criteria: [
      {
        criterion: "Three problems are stated for named people",
        evidence:
          "Three problems, each naming who has it and what it costs them.",
        levels: [
          "Purpose stated as consistency in general.",
          "Problems named without people or costs.",
          "Three problems with people and costs.",
          "As adequate, and at least one problem is drawn from an observed drift between your own screens.",
        ],
        remediation:
          "For each problem write who suffers it and how much time or quality it costs.",
        recheck: "The three problems.",
      },
      {
        criterion: "The current audience is named, not aspirational",
        evidence:
          "A stated audience for now, with what each needs.",
        levels: [
          "Audience unstated or imagined as a large team.",
          "Audience named without needs.",
          "Current audience with their needs.",
          "As adequate, and the scope of governance matches that audience rather than a future one.",
        ],
        remediation:
          "Write who will actually open this in the next three months and design for them.",
        recheck: "The audience statement.",
      },
      {
        criterion: "An out-of-scope list exists",
        evidence:
          "A written list of what the system does not cover.",
        levels: [
          "No boundary.",
          "A vague statement of focus.",
          "A specific list including one-offs and adjacent areas.",
          "As adequate, and the list names something you were tempted to include.",
        ],
        remediation:
          "List everything you might be asked to systematise and mark what stays out.",
        recheck: "The boundary list.",
      },
      {
        criterion: "Maintenance cost and rigidity are stated",
        evidence:
          "An hours-per-month estimate and a statement of what becomes harder.",
        levels: [
          "Costs not considered.",
          "Maintenance mentioned without an estimate.",
          "Both stated concretely.",
          "As adequate, and the estimate accounts for answering other people's questions.",
        ],
        remediation:
          "Estimate the time to keep documentation current and to answer questions, and name one thing the system will slow down.",
        recheck: "The cost statement.",
      },
    ],
    repairs: [
      "If the purpose is consistency in general, rewrite it as three costed problems.",
      "If the audience is aspirational, name who will use it in three months.",
      "If no boundary exists, list what stays out.",
      "If costs are absent, estimate maintenance and name what gets harder.",
    ],
    portfolio:
      "A system purpose with an out-of-scope list and a maintenance cost reads as senior thinking; a component library with no stated purpose reads as decoration.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "Two component pages, read for what a published system documents beyond appearance.",
        purpose:
          "Shows the level of decision-recording a working system carries.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. One organisation's system for government services; take the documentation habits, not the components or the brand.",
        fallbackId: "R06",
      },
      {
        ...styles,
        section: "The styles index, read for how foundational decisions are grouped.",
        purpose:
          "Gives a worked example of foundations documented separately from components.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy the values or treat them as a standard.",
        fallbackId: "R03",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l02-v1",
    module: "m13",
    week: 13,
    day: 2,
    level: 4,
    areas: [12],
    guided: true,
    title: "Foundations: the decisions everything else rests on",
    objective:
      "Publish your foundations — colour, type, spacing, radius, elevation and motion — as documented decisions with reasons, measured contrast and usage rules.",
    bringForward: "Your m08 token sheet and m09 interaction sheet.",
    prerequisite: "Your token and interaction sheets.",
    why: "Foundations are what make components consistent. Documented as values only, they get used inconsistently within a month.",
    teach: [
      "A foundation is a value plus a rule for when to use it.",
      "Record the reason; a value with no reason gets overridden by taste.",
      "Include measured contrast for every permitted text pair.",
      "Motion values belong here too, with their reduced-motion pairs.",
      "Show the wrong usage as well as the right one.",
    ],
    explanation: [
      "A palette is not a foundation. “Surface-muted, used for panels that sit behind primary content, never for text backgrounds below 14px” is a foundation, because it answers the question someone will actually have. Publishing values alone leaves every future decision to be re-argued from taste, which is exactly what the system was supposed to prevent.",
      "Reasons are what survive disagreement. Someone will want a slightly different grey, and a reason — this is the lightest neutral that keeps body text above the contrast threshold — settles it in one sentence. Without reasons, the discussion is preference against preference and the person with more time wins.",
      "Contrast belongs in the foundations because it is where pairs get chosen. Publishing the measured ratios beside permitted combinations prevents the common failure where a component is built from two tokens that individually seem fine and together fall below the threshold.",
      "Showing the wrong usage is unusually valuable. A do-and-do-not pair communicates a rule faster than a paragraph, and it pre-empts the specific misuse you have already seen happen — which, in your own work, you can name from experience rather than imagining.",
    ],
    misconception:
      "“Foundations are the easy part.” They are the part everything else inherits. A weak spacing scale or an unmeasured colour pair propagates into every component, and fixing it later means touching everything.",
    example:
      "The foundations page documented six groups. Colour: five neutrals and three semantic colours, each with permitted usages, forbidden usages and measured ratios for every text pair. Type: six steps with their jobs, minimum sizes and line-height rules. Spacing: six values with a rule that spacing between groups is always larger than spacing within them. Radius: two values with a rule about which components use which. Elevation: two levels with the statement that elevation never carries meaning alone. Motion: three durations with their reduced-motion pairs. Each group carried one do-and-do-not pair drawn from a real mistake.",
    freeToolPath:
      "A Markdown page plus your stylesheet's custom properties. Screenshots or hand-drawn examples for the do-and-do-not pairs; no documentation platform or design tool is required.",
    outputs: [
      "Six foundation groups documented with values and rules",
      "A reason recorded for each group's key decisions",
      "Measured contrast for every permitted text pair",
      "One do-and-do-not pair per group, drawn from a real mistake",
    ],
    steps: [
      {
        minutes: 30,
        title: "Convert values into decisions",
        instructions: [
          "Take each token group and write the rule for when to use it.",
          "Add the reason the value was chosen.",
        ],
      },
      {
        minutes: 25,
        title: "Publish the contrast table",
        instructions: [
          "List permitted text-on-surface pairs with measured ratios.",
          "List forbidden pairs explicitly.",
        ],
      },
      {
        minutes: 25,
        title: "Document motion",
        instructions: [
          "Bring your m09 durations and easings into the foundations.",
          "Record the reduced-motion pair for each.",
        ],
      },
      {
        minutes: 25,
        title: "Show the wrong usage",
        instructions: [
          "For each group, produce one do-and-do-not example.",
          "Draw each from a mistake you have actually made.",
        ],
      },
      {
        minutes: 15,
        title: "Check against a screen",
        instructions: [
          "Take one built screen and check every value against the foundations.",
          "Record any value in use that the foundations do not permit.",
          "Save the foundations page.",
        ],
      },
    ],
    check: [
      {
        question: "What turns a value into a foundation?",
        answer:
          "A rule for when to use it and a reason it was chosen. Values alone leave every future decision to be re-argued.",
      },
      {
        question: "Why publish forbidden pairs as well as permitted ones?",
        answer:
          "Because components get built from two individually acceptable tokens that fail together. Listing the forbidden combinations prevents that directly.",
      },
      {
        question: "Why show wrong usage?",
        answer:
          "Because a do-and-do-not pair communicates a rule faster than a paragraph, and it pre-empts the specific misuse you have already seen.",
      },
    ],
    rubric: [
      "Each foundation group has values, rules and reasons",
      "Contrast is measured and permitted pairs listed",
      "Motion values include reduced-motion pairs",
      "Do-and-do-not pairs come from real mistakes",
    ],
    criteria: [
      {
        criterion: "Each foundation group has values, rules and reasons",
        evidence:
          "Six documented groups, each with usage rules and the reasoning behind key values.",
        levels: [
          "Values only.",
          "Values and rules without reasons.",
          "All three for every group.",
          "As adequate, and one reason references evidence from an earlier module.",
        ],
        remediation:
          "For each group write when to use it and why the value was chosen; both are needed.",
        recheck: "The foundations page.",
      },
      {
        criterion: "Contrast is measured and permitted pairs listed",
        evidence:
          "A table of permitted pairs with ratios and an explicit forbidden list.",
        levels: [
          "No contrast information.",
          "Ratios recorded without permitted or forbidden guidance.",
          "Both lists with measured ratios.",
          "As adequate, and quiet text such as captions and disabled labels is covered.",
        ],
        remediation:
          "Measure every pair you allow, including quiet text, and split them into permitted and forbidden.",
        recheck: "The contrast table.",
      },
      {
        criterion: "Motion values include reduced-motion pairs",
        evidence:
          "Durations and easings documented with their reduced alternatives.",
        levels: [
          "Motion absent from the foundations.",
          "Durations documented without reduced pairs.",
          "Both documented together.",
          "As adequate, and essential motion is distinguished from decorative.",
        ],
        remediation:
          "Bring your m09 sheet into the foundations and add the reduced pair for each entry.",
        recheck: "The motion foundations.",
      },
      {
        criterion: "Do-and-do-not pairs come from real mistakes",
        evidence:
          "One pair per group, each traceable to something that actually went wrong.",
        levels: [
          "No examples.",
          "Invented examples.",
          "Examples drawn from real mistakes in your work.",
          "As adequate, and each names the consequence of the wrong usage.",
        ],
        remediation:
          "Look back through your screens for misuse you have already committed and photograph both versions.",
        recheck: "The example pairs.",
      },
    ],
    repairs: [
      "If foundations are values only, add usage rules and reasons.",
      "If contrast is unmeasured, measure and split permitted from forbidden.",
      "If motion is missing, bring it in with reduced pairs.",
      "If examples are invented, replace them with real mistakes.",
    ],
    portfolio:
      "A foundations page with reasons and forbidden pairs demonstrates systems thinking that a colour swatch grid cannot.",
    resource: styles,
    resources: [
      {
        ...styles,
        section:
          "Colour, typography, spacing and layout, read for how each decision is documented and constrained.",
        purpose:
          "Shows a working example of foundations published as rules rather than values.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning and your own values; the government palette and type are not a standard.",
        fallbackId: "R03",
      },
      {
        ...contrast,
        section: "The thresholds and their exceptions.",
        purpose:
          "Supplies the measurable requirement the contrast table records against.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. A passing ratio is a floor, not proof of legibility.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l03-v1",
    module: "m13",
    week: 13,
    day: 3,
    level: 4,
    areas: [12],
    guided: true,
    title: "The anatomy of one component",
    objective:
      "Specify one component completely: anatomy, variants, states, content rules, keyboard behaviour and when not to use it.",
    bringForward: "Your m08 component inventory and m09 key tables.",
    prerequisite: "Your inventory and key tables.",
    why: "A component specification is what lets someone else build it correctly without asking you. That is the whole test.",
    teach: [
      "Anatomy names the parts, so people can talk about them precisely.",
      "Variants are deliberate differences; states are situations the same variant enters.",
      "Content rules prevent the component breaking on real text.",
      "Keyboard behaviour belongs in the specification, not in a later ticket.",
      "A when-not-to-use section is what stops a component being misapplied.",
    ],
    explanation: [
      "Naming the parts makes everything else possible. Once a component has a container, a label, an optional icon and a status area, a conversation about it stops being gestural and becomes precise: “the status area wraps when the label runs long” is actionable, and “the card looks broken sometimes” is not.",
      "Variants and states get confused constantly. A variant is a deliberate difference you chose — primary, secondary, quiet — while a state is a situation the component finds itself in: focused, loading, disabled, error. Every variant can enter every applicable state, which is what makes the specification a grid rather than a list, and which is where most gaps are found.",
      "Content rules are what keep a component alive in production. Minimum and maximum lengths, what happens when the label wraps or truncates, whether an icon is optional, what a missing value shows — all of these were discovered in your m08 dense-data lesson, and writing them down here prevents rediscovering them per screen.",
      "The when-not-to-use section is the mark of a specification written by someone who has watched a component be misused. It is also the cheapest governance available: a rule that says “not for navigation; use a link” prevents an entire category of future misuse without a single meeting.",
    ],
    misconception:
      "“The component is the visual design.” The visual design is one part. The specification that makes it reusable is the anatomy, the state grid, the content rules and the boundaries — and those are what an engineer needs and a designer forgets.",
    example:
      "The class card was specified. Anatomy: container, image slot (optional), title, meta row, status area, action. Variants: default, compact, unavailable. States for each: default, hover, focus, loading, error. Content rules: title truncates to two lines keeping the beginning, meta row wraps rather than truncating, status area always shows text as well as colour, image slot may be absent without changing layout height. Keyboard: the whole card is not a target — the title is the link and the action is a button, matching the m09 tables. When not to use: not for a single featured item, where a dedicated layout reads better; not as a navigation element.",
    freeToolPath:
      "A Markdown page with a table for the state grid, plus screenshots or drawings of the variants. Building the component in HTML and CSS makes the states demonstrable and costs an evening.",
    outputs: [
      "Named anatomy for one component",
      "A variant-by-state grid with every cell decided",
      "Content rules covering long, missing and unusual values",
      "Keyboard behaviour and a when-not-to-use section",
    ],
    steps: [
      {
        minutes: 25,
        title: "Name the parts",
        instructions: [
          "Read the assigned component page for a comparable component.",
          "Name every part of your component, marking optional ones.",
        ],
      },
      {
        minutes: 30,
        title: "Build the grid",
        instructions: [
          "List variants down one axis and states across the other.",
          "Decide every applicable cell, marking the ones that cannot occur.",
        ],
      },
      {
        minutes: 25,
        title: "Write content rules",
        instructions: [
          "Specify behaviour for long, short, missing and unusual values.",
          "State the truncation rule and what it preserves.",
        ],
      },
      {
        minutes: 25,
        title: "Add behaviour and boundaries",
        instructions: [
          "Bring the keyboard behaviour from your m09 table.",
          "Write when not to use this component and what to use instead.",
        ],
      },
      {
        minutes: 15,
        title: "Test the specification",
        instructions: [
          "Give it to someone and ask what they would build.",
          "Record every question they had to ask you.",
          "Save the specification and the questions.",
        ],
      },
    ],
    check: [
      {
        question: "What is the difference between a variant and a state?",
        answer:
          "A variant is a deliberate difference you designed; a state is a situation the component enters. Every variant can enter its applicable states, which is why the specification is a grid.",
      },
      {
        question: "Why do content rules matter so much?",
        answer:
          "Because real text is longer, shorter and stranger than the example. Without rules, every screen rediscovers the same truncation and wrapping problems.",
      },
      {
        question: "What does a when-not-to-use section prevent?",
        answer:
          "Misapplication, which is the commonest way a good component damages a product. It is governance that costs one sentence.",
      },
    ],
    rubric: [
      "Anatomy names every part including optional ones",
      "The variant-by-state grid is complete",
      "Content rules cover long, missing and unusual values",
      "Keyboard behaviour and boundaries are specified",
    ],
    criteria: [
      {
        criterion: "Anatomy names every part including optional ones",
        evidence: "A labelled diagram or list of parts with optionality marked.",
        levels: [
          "No anatomy.",
          "Parts named without optionality.",
          "All parts named with optional ones marked.",
          "As adequate, and the naming is reused consistently in the rest of the specification.",
        ],
        remediation:
          "Draw the component and label each region; mark anything that may be absent.",
        recheck: "The anatomy.",
      },
      {
        criterion: "The variant-by-state grid is complete",
        evidence:
          "A grid with every applicable cell decided and impossible cells marked.",
        levels: [
          "Variants listed without states.",
          "A partial grid.",
          "Complete grid with impossible combinations marked.",
          "As adequate, and one gap found by the grid is recorded as a design decision.",
        ],
        remediation:
          "Draw the grid and fill every cell; the empty ones are the work.",
        recheck: "The completed grid.",
      },
      {
        criterion: "Content rules cover long, missing and unusual values",
        evidence:
          "Rules for truncation, wrapping, absence and edge values.",
        levels: [
          "No content rules.",
          "Length limits without behaviour.",
          "Behaviour specified for each case.",
          "As adequate, and the truncation rule preserves the distinguishing part of the value.",
        ],
        remediation:
          "Take your worst real content and write what the component does with each case.",
        recheck: "The content rules.",
      },
      {
        criterion: "Keyboard behaviour and boundaries are specified",
        evidence:
          "Key behaviour from the m09 table plus a when-not-to-use section.",
        levels: [
          "Neither specified.",
          "One of the two.",
          "Both specified with alternatives named.",
          "As adequate, and the boundary section cites a real misuse you have seen.",
        ],
        remediation:
          "Copy the key table into the specification and write two sentences on when to use something else.",
        recheck: "The behaviour and boundary sections.",
      },
    ],
    repairs: [
      "If parts are unnamed, label the anatomy and mark optional regions.",
      "If the grid is partial, fill every applicable cell.",
      "If content rules are missing, write them from your worst real content.",
      "If there is no boundary section, add when not to use it.",
    ],
    portfolio:
      "One completely specified component is stronger evidence than a screen of many; it shows the level of thinking you bring to reusable work.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "One comparable component, read for anatomy, variants, states, content rules and when not to use it.",
        purpose: "Supplies the structure of a complete specification.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Take the specification structure, not the visual design or the government brand.",
        fallbackId: "R06",
      },
      {
        ...keyboardPatterns,
        section:
          "The pattern matching your component, read for its keyboard interaction.",
        purpose:
          "Ensures the specification's key behaviour matches established expectations.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keys only; guidance rather than a conformance standard.",
        fallbackId: "R14",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l04-v1",
    module: "m13",
    week: 13,
    day: 4,
    level: 4,
    areas: [12],
    guided: true,
    title: "Build it, and prove the states exist",
    objective:
      "Build your specified component in HTML and CSS with every state demonstrable, and publish a page showing all of them at once.",
    bringForward: "Your component specification and m12 build skills.",
    prerequisite: "Your component specification and a text editor.",
    why: "A specified state that has never been rendered is a guess. Building the grid is what turns the specification into a system.",
    teach: [
      "Build from the foundations: every value comes from a token.",
      "Every state in the grid must be demonstrable on demand.",
      "A single page showing all states is the system's most useful artefact.",
      "Build the awkward content case, not the tidy one.",
      "If a state is hard to build, the specification may be wrong.",
    ],
    explanation: [
      "Building from tokens is what keeps the component consistent with everything else, and it is the moment your foundations get tested: a component that needs a value the foundations do not have has found either a missing role or an unnecessary variation, exactly as in m08.",
      "A demonstrable state is one you can show without simulating a server or waiting for an error. Building a page where every state is rendered side by side — every variant against every state — is unglamorous and repays itself constantly: in review, in handover, in testing, and in noticing that two states look identical.",
      "The awkward content case belongs in that page. Show the long title, the missing image and the unusual number beside the tidy versions, because those are the ones that break and the ones people forget to check when they change something.",
      "Difficulty is information. A state that is awkward to build often indicates a specification problem: two states that need to be visible simultaneously, a variant that is really a different component, or content rules that contradict each other. Record the difficulty rather than working around it silently.",
    ],
    misconception:
      "“The states can be added when they are needed.” They are needed on the first screen that uses the component under real conditions, and adding them later means retrofitting them into a design that assumed they did not exist.",
    example:
      "The class card was built in about eighty lines, every value from a token. The states page shows three variants against five states, plus three content cases: a very long title, a missing image and a class with one place left. Building revealed two specification problems. The loading and unavailable states looked nearly identical in greyscale and needed a second distinguishing signal. And the compact variant could not accommodate the status text at all, which meant it was either a different component or the status rule needed changing — recorded as an open decision rather than patched.",
    freeToolPath:
      "A text editor and a browser, using your token custom properties from m12. The states page is one HTML file; no framework, build step or documentation tool is required.",
    outputs: [
      "The component built from tokens",
      "A page showing every variant against every state",
      "Three awkward content cases rendered",
      "A list of specification problems the build revealed",
    ],
    steps: [
      {
        minutes: 30,
        title: "Build the default",
        instructions: [
          "Build the component using only token values.",
          "Record any value you needed that the foundations do not have.",
        ],
      },
      {
        minutes: 30,
        title: "Build the states",
        instructions: [
          "Add each state from the grid so it can be shown on demand.",
          "Include focus, loading, disabled and error where applicable.",
        ],
      },
      {
        minutes: 25,
        title: "Make the states page",
        instructions: [
          "Render every variant against every state on one page.",
          "Label each cell so the page is readable without explanation.",
        ],
      },
      {
        minutes: 20,
        title: "Add the awkward content",
        instructions: [
          "Render the long title, the missing value and the edge case.",
          "Check the content rules hold.",
        ],
      },
      {
        minutes: 15,
        title: "Record what the build revealed",
        instructions: [
          "List the specification problems you found.",
          "Check the states in greyscale and by keyboard.",
          "Save the component, the page and the problem list.",
        ],
      },
    ],
    check: [
      {
        question: "Why build a page showing every state at once?",
        answer:
          "Because it makes the whole grid checkable in one glance, catches states that look identical, and gives review, handover and testing a single artefact.",
      },
      {
        question: "What does a value missing from your foundations tell you?",
        answer:
          "Either the foundations lack a real role, or the component is asking for an unnecessary variation. Both need a decision rather than a one-off value.",
      },
      {
        question: "What does a hard-to-build state usually mean?",
        answer:
          "That the specification has a problem: contradictory rules, two states needing to coexist, or a variant that is really a separate component.",
      },
    ],
    rubric: [
      "The component is built entirely from tokens",
      "Every state is demonstrable on one page",
      "Awkward content cases are rendered",
      "Specification problems found are recorded",
    ],
    criteria: [
      {
        criterion: "The component is built entirely from tokens",
        evidence:
          "Source using custom properties throughout, with any exception recorded.",
        levels: [
          "Raw values used.",
          "Mostly tokens with untracked exceptions.",
          "Tokens throughout, exceptions recorded and resolved.",
          "As adequate, and a missing foundation role was added deliberately.",
        ],
        remediation:
          "Search the component's styles for literal values and replace or record each one.",
        recheck: "The component source.",
      },
      {
        criterion: "Every state is demonstrable on one page",
        evidence:
          "A states page rendering every applicable variant-state combination, labelled.",
        levels: [
          "Only the default state built.",
          "Some states built, not collected on one page.",
          "All states on one labelled page.",
          "As adequate, and states that look alike are identified and differentiated.",
        ],
        remediation:
          "Build the missing states and put them all on one page with labels.",
        recheck: "The states page.",
      },
      {
        criterion: "Awkward content cases are rendered",
        evidence:
          "Long, missing and edge-case content shown beside the tidy versions.",
        levels: [
          "Tidy content only.",
          "One awkward case.",
          "Three cases rendered with content rules verified.",
          "As adequate, and a content rule was corrected because of what rendering showed.",
        ],
        remediation:
          "Add your worst real values to the states page and check the rules hold.",
        recheck: "The content cases.",
      },
      {
        criterion: "Specification problems found are recorded",
        evidence:
          "A list of contradictions, gaps or ambiguities surfaced by building.",
        levels: [
          "Problems worked around silently.",
          "Noticed but not recorded.",
          "Recorded with the decision or the open question.",
          "As adequate, and one problem is left open rather than patched.",
        ],
        remediation:
          "Write down every moment the build did not match the specification.",
        recheck: "The problem list.",
      },
    ],
    repairs: [
      "If raw values appear, replace them with tokens or add the missing role.",
      "If states are missing, build them and collect them on one page.",
      "If only tidy content is shown, add the long, missing and edge cases.",
      "If problems were patched, record them as decisions or open questions.",
    ],
    portfolio:
      "A states page is the single most useful design-system artefact to show: it is checkable, complete and immediately understandable.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The CSS sections you need for states: pseudo-classes, custom properties and layout.",
        purpose: "Supplies the implementation for the state grid.",
        minutes: "60 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
      {
        ...components,
        section:
          "The same comparable component, read for how its states are presented and documented.",
        purpose:
          "Shows how a published system demonstrates states rather than describing them.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Take the presentation approach, not the visual design.",
        fallbackId: "R06",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l05-v1",
    module: "m13",
    week: 13,
    day: 5,
    level: 4,
    areas: [12],
    guided: true,
    title: "Variant, or a different component?",
    objective:
      "Decide for three borderline cases whether they are variants of an existing component or new components, using a written test you can reuse.",
    bringForward: "Your component inventory and the built component.",
    prerequisite: "Your inventory and one built component.",
    why: "Every system eventually accumulates a component with eleven variants that nobody can hold in their head. The decision rule is what prevents it.",
    teach: [
      "A variant shares the component's job and differs in emphasis or density.",
      "A different job means a different component, however similar it looks.",
      "If a variant needs its own content rules and states, it is probably separate.",
      "Count the variants: beyond about four, the abstraction is usually wrong.",
      "Write the test once and apply it, rather than deciding case by case.",
    ],
    explanation: [
      "The job is the test. A compact card and a default card do the same job — represent one item in a list — at different densities, so they are variants. A card that summarises a booking and a card that advertises a class look similar and do different jobs, and merging them produces a component whose rules contradict each other within a month.",
      "Content rules are a reliable signal. If the candidate variant needs different truncation, a different required field or a different set of states, it is carrying a different job, and the shared component will accumulate conditional rules until nobody can predict its behaviour.",
      "Counting is a useful discipline. Beyond four or five variants, the component is usually a family pretending to be one thing, and splitting it makes both halves simpler. The exception is a genuine dimension — size, for instance — where variants multiply legitimately and can be described by a rule rather than enumerated.",
      "Writing the test once matters more than any individual decision. A rule you can apply — same job, same content rules, same states, fewer than five — settles future cases in a minute and produces a system whose shape someone else can predict.",
    ],
    misconception:
      "“Reuse is always better.” Reusing a component for a different job creates a component with conditional behaviour, which is harder to maintain than two clear components and produces screens that behave inconsistently for reasons nobody can explain.",
    example:
      "Three borderline cases were tested. The compact card: same job, same content rules, one fewer state — a variant. The booking summary: different job (a record of something you own, not an option to choose), different required fields, different actions — a separate component, despite looking almost identical. The promotional card: different job again, and its own content rules — separate, and marked out of scope entirely, since marketing surfaces were excluded in lesson 1. The test was written down and applied to two further cases the following week without re-argument.",
    freeToolPath:
      "Written decisions plus your existing inventory. Nothing new is built here.",
    outputs: [
      "A written variant-or-component test",
      "Three borderline cases decided with the test applied",
      "A variant count per component with anything over the limit flagged",
      "One case decided against reuse, with the reason",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the test",
        instructions: [
          "Write the questions that decide variant or component: job, content rules, states, count.",
          "Make each answerable in a sentence.",
        ],
      },
      {
        minutes: 30,
        title: "Apply it to three cases",
        instructions: [
          "Take three borderline items from your inventory.",
          "Answer each question and record the decision.",
        ],
      },
      {
        minutes: 25,
        title: "Count the variants",
        instructions: [
          "Count variants per component.",
          "Flag anything over four and check whether it is a family.",
        ],
      },
      {
        minutes: 25,
        title: "Split or merge",
        instructions: [
          "Split one component that was carrying two jobs, or merge two that share one.",
          "Update the inventory and the specifications.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Save the test where future cases will be decided.",
          "Record the case where you decided against reuse and why.",
        ],
      },
    ],
    check: [
      {
        question: "What is the primary test?",
        answer:
          "Whether the two things do the same job. Visual similarity is not the test; a booking record and a class option can look identical and behave differently.",
      },
      {
        question: "Why are differing content rules a signal to split?",
        answer:
          "Because they accumulate as conditional behaviour inside one component, which becomes unpredictable and unmaintainable.",
      },
      {
        question: "Is reuse always the better answer?",
        answer:
          "No. Reusing across different jobs creates conditional components and inconsistent screens. Two clear components are often cheaper than one clever one.",
      },
    ],
    rubric: [
      "A reusable test is written down",
      "Three cases are decided by applying it",
      "Variant counts are checked against a limit",
      "One decision against reuse is recorded",
    ],
    criteria: [
      {
        criterion: "A reusable test is written down",
        evidence:
          "A short set of questions that would settle a future case.",
        levels: [
          "Decisions made ad hoc.",
          "A rule stated too vaguely to apply.",
          "A test whose questions produce a decision.",
          "As adequate, and the test names what to do when the answers conflict.",
        ],
        remediation:
          "Write the questions you actually asked while deciding, then generalise them.",
        recheck: "The written test.",
      },
      {
        criterion: "Three cases are decided by applying it",
        evidence:
          "Three borderline cases with the questions answered and a decision each.",
        levels: [
          "Cases decided by preference.",
          "Test applied loosely.",
          "Each case answered question by question.",
          "As adequate, and one decision contradicted your initial instinct.",
        ],
        remediation:
          "Take three cases and answer each question in writing before deciding.",
        recheck: "The three decisions.",
      },
      {
        criterion: "Variant counts are checked against a limit",
        evidence:
          "A count per component with anything above the limit examined.",
        levels: [
          "Not counted.",
          "Counted without examining the large ones.",
          "Counted and the large ones examined for hidden families.",
          "As adequate, and one component was split as a result.",
        ],
        remediation:
          "Count the variants per component and look hard at anything above four.",
        recheck: "The variant counts.",
      },
      {
        criterion: "One decision against reuse is recorded",
        evidence:
          "A case where you chose a separate component, with the reason.",
        levels: [
          "Everything reused.",
          "A split made without recorded reasoning.",
          "A separation decided with the reason recorded.",
          "As adequate, and the reason cites the conditional behaviour reuse would have created.",
        ],
        remediation:
          "Find the case where reuse would have required conditional rules, and record the split.",
        recheck: "The recorded decision.",
      },
    ],
    repairs: [
      "If decisions were ad hoc, write the test and re-apply it.",
      "If cases were decided by looks, answer the job question first.",
      "If variants are uncounted, count them and examine anything over four.",
      "If nothing was split, look for a component carrying two jobs.",
    ],
    portfolio:
      "A written decision rule with three applied cases shows judgement that scales, which is what systems work is assessed on.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "Two components with overlapping appearance, read for how their purposes are distinguished.",
        purpose:
          "Shows a published system's boundaries between similar components.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. One organisation's decisions; your test is your own and should be written for your product.",
        fallbackId: "R06",
      },
      {
        ...patterns,
        section:
          "One pattern, read for how components combine rather than multiply.",
        purpose:
          "Shows the alternative to adding variants: composing existing components.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Patterns for multi-step government tasks; take the composition idea, not the specific patterns.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l06-v1",
    module: "m13",
    week: 13,
    day: 6,
    level: 4,
    areas: [12],
    guided: true,
    title: "Documentation someone will actually read",
    objective:
      "Write the documentation for two components so that a person can use them correctly without asking you, and test it by watching someone try.",
    bringForward: "Your component specifications and states pages.",
    prerequisite: "Two specified components.",
    why: "Undocumented systems are systems that only work while you are available. The test is not whether it is written; it is whether it is used.",
    teach: [
      "Lead with when to use it, not with what it looks like.",
      "Show the code and the design in the same place.",
      "Put the content rules where someone writing content will find them.",
      "Answer the questions people actually ask, not the ones you find interesting.",
      "Test the documentation by watching someone use it.",
    ],
    explanation: [
      "People arrive at documentation with a task, not a curiosity. The first thing they need is whether this is the right component, which means the page opens with when to use it and when not to. Appearance and anatomy come after, because they matter only once the choice is made.",
      "Design and code belong together. A designer looking at the specification and an engineer looking at the implementation should see one page, not two artefacts that drift apart. Even in a small system, keeping them together prevents the commonest system failure: documentation describing a component that no longer behaves that way.",
      "Content rules are used by whoever writes the words, who is often neither the designer nor the engineer. Putting maximum lengths, truncation behaviour and tone guidance where they will look — with the component, not in a separate writing document — is what stops labels arriving that break the layout.",
      "Testing documentation is the same discipline as testing a design. Give it to someone with a task, watch, and record every question they had to ask you. Each question is a defect in the page, and the fix is usually one sentence added where they were looking.",
    ],
    misconception:
      "“The components are self-explanatory.” They are to you. Every question someone has to ask is a small tax, and in a system meant to save time, those taxes are the thing you were trying to remove.",
    example:
      "The card and the button pages were rewritten. Each opens with when to use it, when not to, and the alternative. Then a live example with the code beside it, the anatomy, the state grid, the content rules — including maximum label length and truncation behaviour — and the keyboard behaviour. Two people were then asked to build a screen using them. Four questions came up: what happens with two actions, whether the compact variant may be used in a grid, what the maximum title length actually is, and whether the card is clickable as a whole. All four became sentences on the pages.",
    freeToolPath:
      "Markdown files beside your code, or one HTML page per component with the live example embedded. No documentation platform, account or static-site tool is required.",
    outputs: [
      "Two component pages opening with when to use and when not to",
      "Live examples with the code beside them",
      "Content rules placed where a writer will find them",
      "A record of the questions a real reader had to ask",
    ],
    steps: [
      {
        minutes: 30,
        title: "Structure the page",
        instructions: [
          "Read the assigned component pages for structure.",
          "Write when to use, when not to use, and the alternative.",
          "Place the example immediately after.",
        ],
      },
      {
        minutes: 30,
        title: "Bring code and design together",
        instructions: [
          "Embed the live component or its markup beside the specification.",
          "Include the state grid and anatomy on the same page.",
        ],
      },
      {
        minutes: 20,
        title: "Write for the content author",
        instructions: [
          "Add maximum lengths, truncation behaviour and tone guidance.",
          "Put them with the component, not in a separate document.",
        ],
      },
      {
        minutes: 25,
        title: "Test the documentation",
        instructions: [
          "Ask someone to build a small screen using only the pages.",
          "Record every question they ask without answering immediately.",
        ],
      },
      {
        minutes: 15,
        title: "Fix and record",
        instructions: [
          "Turn each question into a sentence on the page.",
          "Note which questions you could not answer either.",
          "Save both pages and the question list.",
        ],
      },
    ],
    check: [
      {
        question: "Why open with when to use it?",
        answer:
          "Because the reader's first question is whether this is the right component. Appearance matters only after that choice is made.",
      },
      {
        question: "Why keep design and code on one page?",
        answer:
          "Because separate artefacts drift, and documentation describing behaviour the component no longer has is worse than none.",
      },
      {
        question: "How do you know the documentation works?",
        answer:
          "Someone completes a task with it and asks you nothing. Every question they do ask is a defect in the page.",
      },
    ],
    rubric: [
      "Pages open with when to use and when not to",
      "Live examples sit beside the specification",
      "Content rules are where a writer will find them",
      "Reader questions were recorded and turned into content",
    ],
    criteria: [
      {
        criterion: "Pages open with when to use and when not to",
        evidence:
          "Both pages beginning with purpose and boundaries, with an alternative named.",
        levels: [
          "Pages open with appearance.",
          "Purpose stated but no boundary.",
          "Both, with an alternative named.",
          "As adequate, and the boundary cites a real misuse.",
        ],
        remediation:
          "Move the purpose to the top and add the when-not-to-use paragraph.",
        recheck: "The two pages.",
      },
      {
        criterion: "Live examples sit beside the specification",
        evidence:
          "A working example and its markup on the same page as the specification.",
        levels: [
          "Static images only.",
          "Example present, code elsewhere.",
          "Example and code together with the specification.",
          "As adequate, and the example is the built component rather than a copy.",
        ],
        remediation:
          "Embed the component you built in m13 lesson 4 and put the markup next to it.",
        recheck: "The page with its example.",
      },
      {
        criterion: "Content rules are where a writer will find them",
        evidence:
          "Length limits, truncation and tone guidance on the component page.",
        levels: [
          "Content rules absent.",
          "In a separate writing document.",
          "On the component page with the rest.",
          "As adequate, and the maximum lengths are the ones you verified by rendering.",
        ],
        remediation:
          "Move the content rules onto the component page and check the numbers against your states page.",
        recheck: "The content section.",
      },
      {
        criterion: "Reader questions were recorded and turned into content",
        evidence:
          "A list of questions from a real reader with the sentences added.",
        levels: [
          "Documentation untested.",
          "Tested with questions answered verbally only.",
          "Questions recorded and turned into page content.",
          "As adequate, and questions you could not answer are recorded as open decisions.",
        ],
        remediation:
          "Ask someone to build a screen from the pages alone and write down every question.",
        recheck: "The question list and the updated pages.",
      },
    ],
    repairs: [
      "If pages open with appearance, move purpose and boundaries to the top.",
      "If code lives elsewhere, bring it onto the page.",
      "If content rules are separate, move them to the component.",
      "If nobody tested the pages, watch someone build from them.",
    ],
    portfolio:
      "Documentation with a record of the questions it failed to answer, and the fixes, shows that you treat documentation as a designed artefact.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "Two component pages, read for their structure: when to use, when not to use, example, anatomy, content and behaviour.",
        purpose: "Supplies the page structure this lesson adopts.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Take the structure; the components and brand are one organisation's.",
        fallbackId: "R06",
      },
      {
        ...stories,
        section:
          "How a story states who, what and why, read as a model for writing usage guidance briefly.",
        purpose:
          "Helps keep guidance short and centred on the reader's task.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written about agile stories rather than documentation; no Jira subscription is required or implied.",
        fallbackId: "R26",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l07-v1",
    module: "m13",
    week: 13,
    day: 7,
    level: 4,
    areas: [12],
    guided: true,
    title: "Who decides, and how something gets in",
    objective:
      "Write the governance for your system: how a change is proposed, who decides, what evidence is required, and how long it takes.",
    bringForward: "Your system's purpose, audience and documentation.",
    prerequisite: "Your system purpose and component pages.",
    why: "Without a route in, people fork the system quietly. Governance is what keeps a system used rather than worked around.",
    teach: [
      "Every system needs a stated way to propose a change.",
      "Name the decider, even when it is you.",
      "Require evidence: where it is needed, what it replaces, why existing parts do not fit.",
      "State the response time, or proposals go unanswered and people give up.",
      "Record decisions, including rejections and their reasons.",
    ],
    explanation: [
      "People work around systems that have no route in. If proposing a new component means an unanswered message, the practical alternative is a one-off component in a screen, and after four of those the system no longer describes the product. A written route — how to propose, what to include, who answers, how long — costs a paragraph and prevents the fork.",
      "Naming the decider is uncomfortable and necessary. In a system of one, it is you, and writing that down makes the process legible to anyone else and reminds you to apply the same standard to your own proposals as to others'.",
      "Requiring evidence keeps the system small. Where is this needed, what does it replace, why do the existing components not fit, and how many screens would use it — four questions that reject most proposals honestly and improve the rest.",
      "Recording rejections matters more than recording acceptances. A rejected proposal with its reason prevents the same request arriving three times and gives the person a real answer rather than silence. Over a year, the rejection log is the clearest statement of what the system is for.",
    ],
    misconception:
      "“Governance is bureaucracy.” Governance is the difference between a system people use and one they route around. A paragraph naming the route, the decider and the response time is enough for a small system, and skipping it costs more.",
    example:
      "The governance was one page. To propose: open an issue with the screens where it is needed, what existing component you tried, and why it did not fit. Decider: the learner, until someone else joins. Response time: within a week. Criteria: needed in at least two screens, not achievable by composing existing components, and specifiable with states and content rules. Decisions are recorded in a log with the reason. Three proposals in the first month: one accepted, one rejected because composition covered it, and one deferred pending a second use — all recorded, and the rejected one was not re-raised.",
    freeToolPath:
      "A Markdown page and a decision log file. Issue trackers help and are not required; the process matters more than the tool.",
    outputs: [
      "A written proposal route with required evidence",
      "A named decider and response time",
      "Acceptance criteria for new components",
      "A decision log including at least one rejection",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the route",
        instructions: [
          "State how someone proposes a change and where.",
          "List the evidence a proposal must include.",
        ],
      },
      {
        minutes: 20,
        title: "Name the decider and timing",
        instructions: [
          "State who decides and within how long.",
          "State what happens if nobody responds.",
        ],
      },
      {
        minutes: 30,
        title: "Write the criteria",
        instructions: [
          "Write what a new component must satisfy to be accepted.",
          "Include a minimum number of uses and a composition check.",
        ],
      },
      {
        minutes: 30,
        title: "Run it on three cases",
        instructions: [
          "Apply the process to three real proposals from your own backlog.",
          "Accept, reject or defer each, recording the reason.",
        ],
      },
      {
        minutes: 15,
        title: "Start the log",
        instructions: [
          "Record the three decisions in a log.",
          "Save the governance page beside the system documentation.",
        ],
      },
    ],
    check: [
      {
        question: "What happens without a route in?",
        answer:
          "People build one-off components in screens, and after a few the system stops describing the product. The fork is quiet and hard to reverse.",
      },
      {
        question: "Why record rejections?",
        answer:
          "Because they prevent the same proposal arriving repeatedly, give the person a real answer, and over time state what the system is for more clearly than the acceptances do.",
      },
      {
        question: "Why state a response time?",
        answer:
          "Because an unanswered proposal is a rejection with extra waiting, and people stop proposing after the second one.",
      },
    ],
    rubric: [
      "A proposal route with required evidence exists",
      "The decider and response time are named",
      "Acceptance criteria include a composition check",
      "A decision log records at least one rejection with its reason",
    ],
    criteria: [
      {
        criterion: "A proposal route with required evidence exists",
        evidence:
          "A written route naming where to propose and what to include.",
        levels: [
          "No route.",
          "A route without required evidence.",
          "Route and evidence requirements both stated.",
          "As adequate, and the evidence list is short enough that people will actually complete it.",
        ],
        remediation:
          "Write the four questions a proposal must answer and where it goes.",
        recheck: "The proposal route.",
      },
      {
        criterion: "The decider and response time are named",
        evidence:
          "A named decider and a stated turnaround, with a fallback.",
        levels: [
          "Neither stated.",
          "Decider named without timing.",
          "Both stated with a fallback for no response.",
          "As adequate, and the same standard is stated to apply to the decider's own proposals.",
        ],
        remediation:
          "Write who decides, in how long, and what to do if that does not happen.",
        recheck: "The decider statement.",
      },
      {
        criterion: "Acceptance criteria include a composition check",
        evidence:
          "Criteria requiring at least two uses and a check that composition cannot cover it.",
        levels: [
          "No criteria.",
          "Criteria without a composition check.",
          "Both present and applied.",
          "As adequate, and the criteria require a specification with states before acceptance.",
        ],
        remediation:
          "Add the question “can this be built from existing components?” and require two uses.",
        recheck: "The criteria.",
      },
      {
        criterion:
          "A decision log records at least one rejection with its reason",
        evidence:
          "A log of three decisions including a rejection and its reasoning.",
        levels: [
          "No log.",
          "Acceptances recorded only.",
          "All decisions recorded including a rejection.",
          "As adequate, and a deferral is recorded with what would change it.",
        ],
        remediation:
          "Apply the process to three real proposals and record each outcome with a reason.",
        recheck: "The decision log.",
      },
    ],
    repairs: [
      "If there is no route, write how to propose and what to include.",
      "If nobody is named, name the decider and the response time.",
      "If criteria are absent, add a use count and a composition check.",
      "If only acceptances are logged, record the rejections and their reasons.",
    ],
    portfolio:
      "Governance is what distinguishes a design system from a component folder, and a one-page process with a decision log demonstrates it concretely.",
    resource: stories,
    resources: [
      {
        ...stories,
        section:
          "How a request is written so it can be judged: who, what and why.",
        purpose:
          "Gives a shape for proposals that makes them decidable rather than conversational.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. About agile stories rather than design-system governance; no subscription is required or implied.",
        fallbackId: "R26",
      },
      {
        ...components,
        section:
          "Two component pages, read for the guidance a published component has to carry.",
        purpose:
          "Shows what a contribution has to produce before a component is published.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its governance suits a large organisation; scale it down deliberately rather than copying it.",
        fallbackId: "R06",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l08-v1",
    module: "m13",
    week: 13,
    day: 8,
    level: 4,
    areas: [12],
    guided: true,
    title: "Versions and breaking changes",
    objective:
      "Version your system, classify three real changes as major, minor or patch, and write the change note that tells people what to do.",
    bringForward: "Your component pages and the changes you have already made.",
    prerequisite: "Your documented components and their change history.",
    why: "A system that changes silently is a system people stop trusting. Versioning is how a change becomes something others can plan around.",
    teach: [
      "Major means people must change something; minor adds; patch fixes.",
      "A released version is never edited: a change means a new version.",
      "Renaming a token or removing a variant is a breaking change.",
      "A change note says what changed, why, and what the reader must do.",
      "Deprecate before removing, and say when removal happens.",
    ],
    explanation: [
      "The assigned specification is written for software interfaces and its rules transfer cleanly: a change that forces others to alter their work is major, one that adds without breaking is minor, and a fix that changes nothing about how it is used is a patch. Applying it to a design system means treating your tokens, component names and behaviour as the interface, because that is what other people build against.",
      "The rule that a released version is never modified matters more in design than people expect. Quietly changing a token's value after release means two screens built a week apart look different for reasons nobody recorded, and the difference is found much later by someone who cannot explain it.",
      "Breaking changes in a design system are often invisible to the person making them. Renaming a token, removing a variant, changing a default, tightening a content rule — each forces work on everyone who used the old one. Classifying honestly is uncomfortable and is what makes the version number meaningful.",
      "The change note is what turns a version into communication. What changed, why, what you must do, and by when. The specification says nothing about how to communicate, so this part is your own: written well, it is read; written as a list of commits, it is not.",
    ],
    misconception:
      "“It is a small change, so it is a patch.” Size is irrelevant; effect is what counts. Renaming one token is a one-character change and forces work on everyone who used it, which makes it major.",
    example:
      "The system was versioned 1.0.0 at the point the two components were documented. Three changes followed. Adding the compact card variant: minor, since nothing existing changed. Fixing the focus ring's contrast on the tinted surface: patch, because usage is unchanged. Renaming surface-alt to surface-muted for consistency: major, because every use must change, and it was released with the old name deprecated for one minor version, a change note explaining the rename, and a list of the four places it appeared. The rename was deliberately delayed until it could travel with another major change.",
    freeToolPath:
      "A version number in your documentation and a changelog file. Nothing else is required; the discipline is the deliverable.",
    outputs: [
      "A version number for the current system",
      "Three real changes classified major, minor or patch",
      "A change note for the largest one",
      "A deprecation rule stating how long old names survive",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the rules and set a version",
        instructions: [
          "Read the assigned specification's major, minor and patch definitions.",
          "Give your current system a version number and say what it covers.",
        ],
      },
      {
        minutes: 30,
        title: "Classify three changes",
        instructions: [
          "Take three changes you have already made or plan to make.",
          "Classify each by whether it forces work on others.",
          "Record any you had assumed was smaller than it is.",
        ],
      },
      {
        minutes: 25,
        title: "Write the change note",
        instructions: [
          "For the largest change write what changed, why, and what to do.",
          "List the places affected.",
          "Give a date or version by which the old form stops working.",
        ],
      },
      {
        minutes: 25,
        title: "Write the deprecation rule",
        instructions: [
          "State how long a deprecated name survives before removal.",
          "State how deprecation is signalled in the documentation.",
        ],
      },
      {
        minutes: 15,
        title: "Start the changelog",
        instructions: [
          "Record the three changes in a changelog with versions.",
          "Save the versioning rules with the system documentation.",
        ],
      },
    ],
    check: [
      {
        question: "What makes a change major?",
        answer:
          "That it forces others to change their work. Size is irrelevant: a one-character rename that everyone must follow is major.",
      },
      {
        question: "Why must a released version never be edited?",
        answer:
          "Because otherwise two screens built at different times differ for unrecorded reasons, and nobody can reconstruct which version they used.",
      },
      {
        question: "What does a change note owe the reader?",
        answer:
          "What changed, why, what they must do and by when. The specification does not cover communication, so this part is the designer's own work.",
      },
    ],
    rubric: [
      "The system carries a version and a stated scope",
      "Three changes are classified by effect, not size",
      "A change note states what to do and by when",
      "A deprecation rule exists",
    ],
    criteria: [
      {
        criterion: "The system carries a version and a stated scope",
        evidence:
          "A version number with a statement of what is covered by it.",
        levels: [
          "No version.",
          "A version without a stated scope.",
          "Both, with the interface named — tokens, component names, behaviour.",
          "As adequate, and the scope says what is explicitly not part of the versioned interface.",
        ],
        remediation:
          "Assign a version and write which parts of the system it governs.",
        recheck: "The version statement.",
      },
      {
        criterion: "Three changes are classified by effect, not size",
        evidence:
          "Three classifications with the reasoning about forced work.",
        levels: [
          "Classified by how large the edit felt.",
          "Mostly by effect with one misclassification.",
            "All three classified by whether others must change.",
          "As adequate, and one is reclassified upward after considering who is affected.",
        ],
        remediation:
          "For each change ask who must alter their work. If anyone must, it is major.",
        recheck: "The classifications.",
      },
      {
        criterion: "A change note states what to do and by when",
        evidence:
          "A note with the change, the reason, the affected places and a deadline.",
        levels: [
          "No note.",
          "A note describing the change only.",
          "All four elements present.",
          "As adequate, and the note is written for someone who did not attend any discussion.",
        ],
        remediation:
          "Rewrite the note answering: what changed, why, what do I do, by when.",
        recheck: "The change note.",
      },
      {
        criterion: "A deprecation rule exists",
        evidence:
          "A stated survival period for deprecated names and how deprecation is signalled.",
        levels: [
          "No rule.",
          "A vague intention to give notice.",
          "A stated period and signalling method.",
          "As adequate, and the rule matches the pace at which your system actually releases.",
        ],
        remediation:
          "Write how long an old name stays and how someone finds out it is going.",
        recheck: "The deprecation rule.",
      },
    ],
    repairs: [
      "If the system is unversioned, assign a version and state its scope.",
      "If changes were classified by size, reclassify by forced work.",
      "If the note lacks a deadline, add what to do and by when.",
      "If deprecation is undefined, state the period and the signal.",
    ],
    portfolio:
      "A changelog with an honest major version and a readable change note demonstrates that you can run a system rather than only design one.",
    resource: semver,
    resources: [
      {
        ...semver,
        section:
          "The major, minor and patch definitions and the rule that a released version is never modified.",
        purpose:
          "Supplies the classification this lesson applies to design changes.",
        minutes: "15–25",
        limits:
          "Free reading, no account, CC BY 3.0. Verified 2026-09-06; the specification is 2.0.0 and states no date. Written for software APIs: it says nothing about design systems and gives only a minimal deprecation rule, so applying and announcing are your own work.",
        fallbackId: "R18",
      },
      {
        ...stories,
        section: "Writing a change so that its audience knows what to do.",
        purpose:
          "Shapes the change note around the reader's action rather than the author's activity.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. About agile stories rather than release notes; no subscription is required.",
        fallbackId: "R26",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l09-v1",
    module: "m13",
    week: 13,
    day: 9,
    level: 4,
    areas: [12],
    guided: true,
    title: "Getting it adopted",
    objective:
      "Migrate two existing screens onto the system, measure how much of each now comes from it, and record what blocked full adoption.",
    bringForward: "Your built screens and the system's components.",
    prerequisite: "Your system and two existing screens.",
    why: "A system nobody has adopted has no effect. Migration is where you learn whether it fits the product it was built from.",
    teach: [
      "Measure adoption: what proportion of a screen comes from the system.",
      "Migrate a real screen, not a demonstration one.",
      "Every blocker is information: a missing component, a wrong rule, a gap.",
      "Partial adoption is normal; record what remains and why.",
      "Do not change the product to fit the system without saying so.",
    ],
    explanation: [
      "Adoption is measurable in a rough and useful way: count the elements on a screen and count how many come from the system. That number, tracked across two or three screens, tells you far more about whether the system works than any amount of internal satisfaction with the documentation.",
      "The screen you migrate must be a real one. Demonstration screens are built from the components that exist, which proves nothing. A real screen contains the awkward cases, the one-offs and the compromises, and it is those that show which parts of the system are missing or wrong.",
      "Blockers are the most valuable output of migration. A component that nearly fits, a token that has no equivalent, a content rule that the real content violates — each is a specific improvement, and collecting them is the point of the exercise rather than an obstacle to it.",
      "There is a temptation to change the product so the system fits. Sometimes that is right, and it must be a recorded decision rather than a quiet simplification: a screen that lost a distinction people relied on, because the system had no component for it, is a regression dressed as consistency.",
    ],
    misconception:
      "“Adoption is a rollout problem.” It is a fit problem first. If the system does not cover the real screens, no amount of advocacy will get it adopted, and the blockers list is what tells you which is which.",
    example:
      "Two screens were migrated. The class list reached 90 per cent system-provided after two blockers were fixed: a missing filter chip and a spacing value that did not exist. The booking summary reached 55 per cent, and the reasons were recorded: it needs a component the system deliberately does not cover — a receipt-style record — and its status treatment carries a distinction the system's status component flattens. The second was explicitly not resolved by simplifying the screen, since the distinction was one the m05 research had shown people using.",
    freeToolPath:
      "Your existing files. Counting elements by hand on two screens takes fifteen minutes and is accurate enough to steer decisions.",
    outputs: [
      "Two real screens migrated onto the system",
      "An adoption figure per screen with the counting method stated",
      "A blockers list with a decision for each",
      "Any product change made to fit the system, recorded",
    ],
    steps: [
      {
        minutes: 30,
        title: "Migrate the first screen",
        instructions: [
          "Rebuild one real screen using system components and tokens.",
          "Record every element that could not come from the system.",
        ],
      },
      {
        minutes: 25,
        title: "Measure adoption",
        instructions: [
          "Count total elements and system-provided ones.",
          "State the counting method so the figure is repeatable.",
        ],
      },
      {
        minutes: 30,
        title: "Migrate the second and compare",
        instructions: [
          "Repeat with a different kind of screen.",
          "Compare the two figures and note why they differ.",
        ],
      },
      {
        minutes: 20,
        title: "Decide the blockers",
        instructions: [
          "For each blocker choose: add to the system, leave as a one-off, or change the screen.",
          "Record any decision that removes a distinction the research supported.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write the adoption figures, blockers and decisions.",
          "Feed accepted additions into the governance process.",
          "Save the migrated screens.",
        ],
      },
    ],
    check: [
      {
        question: "Why migrate a real screen rather than a demonstration one?",
        answer:
          "Because demonstration screens are built from what exists and prove nothing. Real screens contain the awkward cases that reveal what the system lacks.",
      },
      {
        question: "What is a blocker worth?",
        answer:
          "More than a smooth migration. Each one names a missing component, a wrong rule or a real gap, which is exactly the information the system needs.",
      },
      {
        question: "When is changing the screen to fit the system wrong?",
        answer:
          "When it removes a distinction people were using. Consistency that deletes meaning is a regression, and the decision must be recorded rather than absorbed.",
      },
    ],
    rubric: [
      "Two real screens are migrated",
      "Adoption is measured with a stated method",
      "Blockers are listed with decisions",
      "Product changes made to fit the system are recorded",
    ],
    criteria: [
      {
        criterion: "Two real screens are migrated",
        evidence:
          "Two migrated screens from actual product work, not demonstrations.",
        levels: [
          "No migration.",
          "One screen, or a demonstration screen.",
          "Two real screens migrated.",
          "As adequate, and the two are different kinds of screen so the comparison is meaningful.",
        ],
        remediation:
          "Choose two screens you actually built earlier and rebuild them from the system.",
        recheck: "The migrated screens.",
      },
      {
        criterion: "Adoption is measured with a stated method",
        evidence:
          "A figure per screen with the counting method written down.",
        levels: [
          "No measurement.",
          "An impression of coverage.",
          "Counted figures with the method stated.",
          "As adequate, and the method is repeatable by someone else.",
        ],
        remediation:
          "Count elements and system-provided elements on each screen and write how you counted.",
        recheck: "The adoption figures.",
      },
      {
        criterion: "Blockers are listed with decisions",
        evidence:
          "Each blocker with a decision: add, leave, or change the screen.",
        levels: [
          "Blockers worked around silently.",
          "Listed without decisions.",
          "Each has a decision and a reason.",
          "As adequate, and accepted additions have gone into the governance process rather than straight into the system.",
        ],
        remediation:
          "List everything that could not come from the system and decide each one explicitly.",
        recheck: "The blockers list.",
      },
      {
        criterion:
          "Product changes made to fit the system are recorded",
        evidence:
          "Any simplification of a screen recorded with what it removed.",
        levels: [
          "Screens simplified silently.",
          "Changes noted without what was lost.",
          "Each recorded with what it removed and why that is acceptable.",
          "As adequate, and one change was rejected because it would have removed an evidenced distinction.",
        ],
        remediation:
          "Compare the migrated screens with the originals and record anything that disappeared.",
        recheck: "The change record.",
      },
    ],
    repairs: [
      "If only demonstration screens were used, migrate two real ones.",
      "If adoption is an impression, count and state the method.",
      "If blockers were worked around, list and decide each.",
      "If screens were simplified, record what was removed.",
    ],
    portfolio:
      "Adoption figures with a blockers list are unusually concrete evidence that a system was used rather than merely built.",
    resource: patterns,
    resources: [
      {
        ...patterns,
        section:
          "One pattern, read for how components combine into a working screen.",
        purpose:
          "Shows composition as the route to coverage rather than adding components.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government task patterns; take the composition approach, not the specific screens.",
        fallbackId: "R02",
      },
      {
        ...semver,
        section: "The rules for additive changes.",
        purpose:
          "Frames additions from migration as minor changes with a version and a note.",
        minutes: "10–15",
        limits:
          "Free reading, no account, CC BY 3.0. Verified 2026-09-06. Written for software APIs; the design-system application is yours.",
        fallbackId: "R18",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l10-v1",
    module: "m13",
    week: 13,
    day: 10,
    level: 4,
    areas: [12],
    guided: true,
    title: "What the system guarantees",
    objective:
      "Write the accessibility guarantees your system makes, prove each with a check, and state plainly what remains the responsibility of whoever uses it.",
    bringForward: "Your m11 checks and your component specifications.",
    prerequisite: "Your m11 results and component pages.",
    why: "A system's greatest accessibility value is making the right thing the default. Its greatest risk is people assuming it guarantees more than it does.",
    teach: [
      "Guarantee only what you have tested in the component itself.",
      "Composition can break what components guarantee: heading order, focus order, contrast.",
      "State the user's responsibilities as clearly as the system's.",
      "A guarantee needs a check that can be re-run when the component changes.",
      "Never claim conformance for a system; components are not pages.",
    ],
    explanation: [
      "A component can guarantee its own properties: that its focus ring meets contrast on the surfaces it permits, that its keyboard behaviour matches the pattern, that its states are distinguishable without colour. Those are testable in isolation and worth stating, because they remove decisions from every future screen.",
      "What a component cannot guarantee is what happens when it is composed. Heading order is a property of the page; focus order depends on arrangement; contrast depends on the surface someone places it on, which is why the permitted-surfaces rule exists. Being explicit about this split is what stops a team believing the system made the product accessible.",
      "The responsibilities list is the other half of the guarantee. Whoever uses the system still owns the page structure, the content, the alternative text, the reading order and the testing. Writing that down is not a disclaimer; it is the instruction that makes the guarantee usable.",
      "Every guarantee needs a re-runnable check, or it decays. A contrast pair that passed when the token was chosen fails silently when the token changes, unless something re-checks it. At this scale the check can be manual and written down; what matters is that it exists and is repeated when the component changes.",
    ],
    misconception:
      "“We use an accessible design system, so the product is accessible.” The system can make the defaults right. Structure, content, order, and testing remain with the person building the page, and most real failures live there.",
    example:
      "Four guarantees were written. Focus rings meet contrast on all permitted surfaces — checked by measurement, with the surfaces listed. Interactive components match their documented keyboard behaviour — checked by walking each key table. States are distinguishable without colour — checked in greyscale. Text tokens meet the contrast threshold in their permitted pairs — checked by measurement. Four responsibilities were written opposite: page heading order, alternative text for images you supply, reading order of your composition, and testing the assembled page. The statement ended by saying the system claims no conformance, since conformance is a property of a page.",
    freeToolPath:
      "Your existing checks written up as a repeatable list. No auditing tool or service is required at this scale.",
    outputs: [
      "A list of guarantees the system makes",
      "A re-runnable check per guarantee",
      "A list of responsibilities left to the user of the system",
      "A statement that the system claims no page-level conformance",
    ],
    steps: [
      {
        minutes: 25,
        title: "Separate component from composition",
        instructions: [
          "List accessibility properties your components can own alone.",
          "List the ones that depend on how they are composed.",
        ],
      },
      {
        minutes: 30,
        title: "Write the guarantees",
        instructions: [
          "Write each guarantee as a testable statement.",
          "Include the conditions it holds under, such as permitted surfaces.",
        ],
      },
      {
        minutes: 25,
        title: "Attach a check to each",
        instructions: [
          "Write the check that proves each guarantee.",
          "Run every check now and record the result.",
        ],
      },
      {
        minutes: 25,
        title: "Write the responsibilities",
        instructions: [
          "List what remains the page author's job.",
          "Be specific: structure, content, order, testing.",
        ],
      },
      {
        minutes: 15,
        title: "State the boundary",
        instructions: [
          "Write that the system claims no page-level conformance.",
          "Save the guarantees, checks and responsibilities together.",
        ],
      },
    ],
    check: [
      {
        question: "What can a component guarantee alone?",
        answer:
          "Its own properties: focus contrast on permitted surfaces, documented keyboard behaviour, states distinguishable without colour. Anything depending on arrangement it cannot.",
      },
      {
        question: "Why list the user's responsibilities?",
        answer:
          "Because without them people assume the system covers structure, content and testing, which is where most real accessibility failures happen.",
      },
      {
        question: "Why can a system not claim conformance?",
        answer:
          "Because conformance is a property of a page, and pages are composed by other people from content the system never sees.",
      },
    ],
    rubric: [
      "Guarantees are limited to component-level properties",
      "Each guarantee has a re-runnable check that was run",
      "Responsibilities left to the user are specific",
      "No page-level conformance is claimed",
    ],
    criteria: [
      {
        criterion: "Guarantees are limited to component-level properties",
        evidence:
          "A list where every item is testable in the component in isolation.",
        levels: [
          "Guarantees include page-level properties.",
          "Mostly component-level with one composition claim.",
          "All items are component-level with their conditions stated.",
          "As adequate, and the conditions name the permitted surfaces or contexts.",
        ],
        remediation:
          "Move anything that depends on arrangement into the responsibilities list.",
        recheck: "The guarantees list.",
      },
      {
        criterion: "Each guarantee has a re-runnable check that was run",
        evidence:
          "A written check per guarantee with a recorded result.",
        levels: [
          "Guarantees asserted without checks.",
          "Checks described without results.",
          "Every check written and run with results recorded.",
          "As adequate, and the checks are written to be repeated when a component changes.",
        ],
        remediation:
          "For each guarantee write how you would prove it, then do it and record what you found.",
        recheck: "The check results.",
      },
      {
        criterion: "Responsibilities left to the user are specific",
        evidence:
          "A list naming structure, content, order and testing at minimum.",
        levels: [
          "No responsibilities listed.",
          "A general statement that users must also do work.",
          "Specific responsibilities named.",
          "As adequate, and each responsibility points to the module or check that covers it.",
        ],
        remediation:
          "Write what a page author still has to do that no component can do for them.",
        recheck: "The responsibilities list.",
      },
      {
        criterion: "No page-level conformance is claimed",
        evidence:
          "An explicit statement that the system does not claim conformance.",
        levels: [
          "Conformance implied.",
          "Ambiguous wording.",
          "Explicit statement present.",
          "As adequate, and it explains why conformance is a property of a page.",
        ],
        remediation:
          "Add one sentence stating what the system does not claim and why.",
        recheck: "The boundary statement.",
      },
    ],
    repairs: [
      "If a guarantee depends on composition, move it to responsibilities.",
      "If checks are missing, write and run one per guarantee.",
      "If responsibilities are vague, name structure, content, order and testing.",
      "If conformance is implied, state explicitly that it is not claimed.",
    ],
    portfolio:
      "Guarantees with checks and a responsibilities list demonstrate a rare combination: system thinking and honesty about its limits.",
    resource: keyboardPatterns,
    resources: [
      {
        ...keyboardPatterns,
        section:
          "The patterns for your interactive components, used as the standard your keyboard guarantee is checked against.",
        purpose:
          "Gives an external reference for the behaviour you are guaranteeing.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; pages carry no date. Guidance rather than a conformance standard; matching it is not conformance.",
        fallbackId: "R14",
      },
      {
        ...contrast,
        section: "The thresholds and exceptions used for the contrast guarantees.",
        purpose:
          "Supplies the measurable basis for the focus and text guarantees.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. A ratio is a floor; the guarantee holds only for the permitted surfaces you list.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l11-v1",
    module: "m13",
    week: 13,
    day: 11,
    level: 4,
    areas: [12],
    guided: true,
    title: "One source of truth, and the copies",
    objective:
      "Decide which representation of your system is authoritative, write how the others stay in step, and find the drift that already exists.",
    bringForward: "Your documentation, built components and any design files.",
    prerequisite: "Your documentation and built components.",
    why: "Every system has a design representation and a code representation, and they diverge. Deciding which one is true is what prevents arguments nobody can settle.",
    teach: [
      "Name the authoritative representation explicitly.",
      "The others are copies and must state that they are.",
      "Drift is inevitable; the question is how quickly it is found.",
      "A change process that updates only one representation guarantees drift.",
      "Audit for drift regularly and record what you find.",
    ],
    explanation: [
      "Design and code representations of the same component are never quite identical, and when a screen disagrees with a design file, someone has to decide which is right. Naming the authority in advance settles it: usually the code, because that is what people meet, with the design file as a working copy. Whichever you choose, choosing is what matters.",
      "Copies should announce themselves. A design file that says at the top which version of the system it reflects, and when it was last synchronised, prevents a designer building against a component that changed a month ago — which is the commonest way drift becomes screens.",
      "Drift is not preventable at any scale you will work at; the goal is finding it quickly. A short periodic audit — compare three components in both representations, record the differences — is enough at this size, and it is far cheaper than the confusion it prevents.",
      "The change process is where drift is created. If a change updates the code and not the documentation, or the design file and not the code, the divergence starts immediately. Writing the steps a change must take through every representation is the practical fix, and it belongs with your governance page.",
    ],
    misconception:
      "“The design file is the design system.” It is one representation. What people encounter is the built product, and a system whose authority lives in a file most of the team cannot open will be overtaken by the code within weeks.",
    example:
      "The code was named authoritative, with the documentation generated from or checked against it and any design file marked a working copy carrying the version it reflected. An audit of three components found three drifts already: the card's padding differed by 4 pixels between the drawing and the build, the button had a disabled state in the drawing that had never been built, and the documentation described a truncation rule the component did not implement. Each was recorded, and the change process was rewritten to require the documentation update in the same change as the code.",
    freeToolPath:
      "Your existing files. The audit is a comparison by eye and by measurement; nothing needs syncing software.",
    outputs: [
      "A named authoritative representation with the reason",
      "A statement on every copy of what it reflects and when",
      "A drift audit of at least three components",
      "A change process that updates every representation",
    ],
    steps: [
      {
        minutes: 25,
        title: "Choose the authority",
        instructions: [
          "Decide which representation is authoritative and write why.",
          "State what the others are and how they should be treated.",
        ],
      },
      {
        minutes: 30,
        title: "Audit for drift",
        instructions: [
          "Compare three components across representations.",
          "Measure rather than eyeballing where you can.",
          "Record every difference, however small.",
        ],
      },
      {
        minutes: 25,
        title: "Reconcile",
        instructions: [
          "For each drift decide which version is correct.",
          "Update the others and record what changed.",
        ],
      },
      {
        minutes: 25,
        title: "Fix the process",
        instructions: [
          "Write the steps a change must take through every representation.",
          "Add it to the governance page.",
        ],
      },
      {
        minutes: 15,
        title: "Label the copies",
        instructions: [
          "Mark each non-authoritative representation with its version and date.",
          "Save the audit and the updated process.",
        ],
      },
    ],
    check: [
      {
        question: "Why name an authoritative representation?",
        answer:
          "Because when two disagree someone must decide, and deciding in advance settles the argument in one sentence instead of every time.",
      },
      {
        question: "Why label copies with a version and date?",
        answer:
          "Because otherwise someone designs against a component that changed a month ago, and the drift becomes screens before anyone notices.",
      },
      {
        question: "Where does drift come from?",
        answer:
          "A change process that updates one representation and not the others. Fixing the process is more effective than repeated clean-ups.",
      },
    ],
    rubric: [
      "An authoritative representation is named with a reason",
      "Copies state what they reflect and when",
      "A drift audit covers at least three components",
      "The change process updates every representation",
    ],
    criteria: [
      {
        criterion: "An authoritative representation is named with a reason",
        evidence:
          "A written statement naming the authority and why.",
        levels: [
          "No authority named.",
          "Named without reasoning.",
          "Named with a reason connected to what people actually encounter.",
          "As adequate, and the statement says how a disagreement is resolved in practice.",
        ],
        remediation:
          "Choose the representation people actually meet and write one sentence naming it as authoritative.",
        recheck: "The authority statement.",
      },
      {
        criterion: "Copies state what they reflect and when",
        evidence:
          "Each non-authoritative representation labelled with version and date.",
        levels: [
          "Copies unlabelled.",
          "Some labelled.",
          "All labelled with version and date.",
          "As adequate, and the label says what to do if the copy disagrees with the authority.",
        ],
        remediation:
          "Add a line at the top of each copy stating the version it reflects and when it was synchronised.",
        recheck: "The labelled copies.",
      },
      {
        criterion: "A drift audit covers at least three components",
        evidence:
          "Three components compared with differences recorded, measured where possible.",
        levels: [
          "No audit.",
          "Compared by eye without recording specifics.",
          "Three compared with differences recorded.",
          "As adequate, and at least one drift was found that had already reached a screen.",
        ],
        remediation:
          "Pick three components and compare their values across representations, measuring rather than judging.",
        recheck: "The audit record.",
      },
      {
        criterion: "The change process updates every representation",
        evidence:
          "A written process requiring all representations to be updated together.",
        levels: [
          "No process.",
          "A process covering one representation.",
          "All representations covered in one change.",
          "As adequate, and the process is short enough that it will actually be followed.",
        ],
        remediation:
          "Write the change steps and add them to the governance page.",
        recheck: "The updated process.",
      },
    ],
    repairs: [
      "If no authority is named, name the representation people encounter.",
      "If copies are unlabelled, add version and date to each.",
      "If no audit was run, compare three components and record differences.",
      "If the process covers one representation, extend it to all of them.",
    ],
    portfolio:
      "A drift audit with real findings is concrete evidence of system maintenance, which is the part of systems work most portfolios never show.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "How a published system presents code and design together for one component.",
        purpose:
          "Shows a working answer to the single-source question at a larger scale.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its scale and staffing differ from yours; scale the approach down deliberately.",
        fallbackId: "R06",
      },
      {
        ...mdn,
        section:
          "The CSS custom properties sections, read as the mechanism that keeps token values in one place.",
        purpose:
          "Connects the single-source principle to how values are actually shared in code.",
        minutes: "30 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m13-l12-v1",
    module: "m13",
    week: 13,
    day: 12,
    level: 4,
    areas: [12],
    guided: true,
    title: "Review the system and remove something",
    objective:
      "Review the system against how it has actually been used, remove or deprecate at least one thing, and write the six-month plan with its maintenance cost.",
    bringForward:
      "Your adoption figures, blockers, decision log and drift audit.",
    prerequisite: "Your adoption data and decision log.",
    why: "Systems accumulate. Reviewing what is unused and removing it is the maintenance work that keeps a system usable.",
    teach: [
      "Review against use, not against completeness.",
      "Unused components are cost without benefit; deprecate them.",
      "Look for the things people worked around; each is a gap.",
      "Removal is a major change and needs the same process as an addition.",
      "Plan the next six months with an honest maintenance estimate.",
    ],
    explanation: [
      "The review question is what has actually been used. Components that appear in no screen are pure cost: they are documented, maintained, versioned and read by people deciding what to use. Removing them makes the rest easier to hold in mind, which is the main thing a small system has going for it.",
      "Workarounds are the other half. Where someone built a one-off instead of using the system, something did not fit — a missing component, a wrong content rule, a variant that could not stretch. Those are the additions worth making, and they are visible in your migration blockers and your own screens.",
      "Removal is a breaking change and should go through the same route as an addition: proposed, decided, versioned, announced with a deprecation period. Systems that remove things quietly are as untrustworthy as systems that change values quietly.",
      "The plan matters because systems fail slowly. Six months of no maintenance produces documentation nobody trusts and drift nobody has measured. An honest estimate — a few hours a month, with what happens if that time is not available — is more useful than an ambitious plan that will not be followed.",
    ],
    misconception:
      "“A bigger system is a more mature system.” A system that covers the real cases in twelve components is more mature than one with sixty that nobody can navigate. Maturity shows in what has been removed.",
    example:
      "The review found three unused components, two of which had been built speculatively in the first week; both were deprecated with a note, and the third was kept because a planned screen needed it, with the reason recorded. Two workarounds were found in the learner's own screens: a status treatment the system flattened and a compact list row that did not exist. The first became a governance proposal; the second was accepted as a minor addition. The plan estimated three hours a month, listed what would be skipped if that was not available — the drift audit first, documentation last — and named the review date.",
    freeToolPath:
      "Your existing artefacts and a written plan. Nothing new is required.",
    outputs: [
      "A usage review naming unused components",
      "At least one thing deprecated or removed, through the process",
      "Workarounds found in real screens, each with a decision",
      "A six-month plan with an honest maintenance estimate",
    ],
    steps: [
      {
        minutes: 25,
        title: "Review against use",
        instructions: [
          "List every component and where it is actually used.",
          "Mark anything used nowhere.",
        ],
      },
      {
        minutes: 25,
        title: "Find the workarounds",
        instructions: [
          "Look through your screens for one-offs built instead of using the system.",
          "For each, name what did not fit.",
        ],
      },
      {
        minutes: 30,
        title: "Remove and add through the process",
        instructions: [
          "Deprecate at least one unused component with a note and a period.",
          "Propose the additions the workarounds justify.",
          "Version both changes correctly.",
        ],
      },
      {
        minutes: 25,
        title: "Write the plan",
        instructions: [
          "Estimate monthly maintenance in hours.",
          "List what gets skipped first if that time is unavailable.",
          "Set the next review date.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Update the decision log and the changelog.",
          "Save the review with the plan.",
        ],
      },
    ],
    check: [
      {
        question: "Why remove unused components?",
        answer:
          "Because they cost documentation, maintenance and attention while providing nothing. A smaller system is easier to hold in mind, which is a small system's main advantage.",
      },
      {
        question: "What does a workaround tell you?",
        answer:
          "That the system did not fit a real case. It is the most reliable signal of what to add, and it is visible in screens rather than in discussions.",
      },
      {
        question: "Why is removal a major change?",
        answer:
          "Because anyone using the component must change their work. It needs the same process, versioning and notice as any breaking change.",
      },
    ],
    rubric: [
      "Usage is reviewed and unused components identified",
      "At least one removal or deprecation went through the process",
      "Workarounds are found in real screens and decided",
      "The plan has an honest estimate and a skip order",
    ],
    criteria: [
      {
        criterion: "Usage is reviewed and unused components identified",
        evidence:
          "A list of components with where each is used, and the unused ones marked.",
        levels: [
          "No usage review.",
          "Usage described from memory.",
          "Each component checked against real screens.",
          "As adequate, and speculative components built without a use are identified as such.",
        ],
        remediation:
          "Go through your screens and record where each component actually appears.",
        recheck: "The usage list.",
      },
      {
        criterion:
          "At least one removal or deprecation went through the process",
        evidence:
          "A deprecation with a note, a period and a version, recorded in the log.",
        levels: [
          "Nothing removed.",
          "Something removed quietly.",
          "Removal through the process with note, period and version.",
          "As adequate, and a component was kept with a recorded reason rather than removed reflexively.",
        ],
        remediation:
          "Take one unused component and deprecate it properly, including the note.",
        recheck: "The deprecation record.",
      },
      {
        criterion: "Workarounds are found in real screens and decided",
        evidence:
          "One-offs identified with what did not fit and a decision each.",
        levels: [
          "Not examined.",
          "Workarounds noticed without decisions.",
          "Each with a cause and a decision.",
          "As adequate, and at least one has entered the governance process as a proposal.",
        ],
        remediation:
          "Look for the components you built inside screens rather than in the system, and ask why.",
        recheck: "The workaround list.",
      },
      {
        criterion: "The plan has an honest estimate and a skip order",
        evidence:
          "Monthly hours, what is dropped first when time is short, and a review date.",
        levels: [
          "No plan.",
          "A plan without an estimate.",
          "Estimate, skip order and review date all present.",
          "As adequate, and the estimate matches the time you actually spent this module.",
        ],
        remediation:
          "Estimate from what this module actually cost you, then decide what is dropped first.",
        recheck: "The plan.",
      },
    ],
    repairs: [
      "If usage was recalled rather than checked, check it against screens.",
      "If nothing was removed, deprecate an unused component properly.",
      "If workarounds were ignored, find them and decide each.",
      "If the plan has no estimate, base one on this module's real cost.",
    ],
    portfolio:
      "A review that removes things, with the reasoning, is the clearest signal that you can maintain a system rather than only launch one.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "Two component pages, read for how usage guidance is stated and would have to be revised.",
        purpose:
          "Shows the documentation a removal or replacement would have to update.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Larger scale than yours; take the practice and reduce the ceremony.",
        fallbackId: "R06",
      },
      {
        ...semver,
        section: "The rules for breaking changes and the minimal deprecation guidance.",
        purpose:
          "Classifies removal correctly and sets the deprecation period.",
        minutes: "10–15",
        limits:
          "Free reading, no account, CC BY 3.0. Verified 2026-09-06. It recommends at least one minor release before removal and says nothing about how to announce it.",
        fallbackId: "R18",
      },
    ],
  }),
];
