import { withLegacyText, type Lesson } from "./teaching";
// Module 11 makes accessibility a design activity rather than a compliance
// pass. Two rules run through it. Everything is checked on hardware the
// learner already owns, using software already installed, so no exercise
// depends on a purchase. And every claim is bounded by who did the checking:
// a sighted designer running preliminary checks establishes something real
// and much smaller than testing with disabled people, and every lesson says
// which of the two it produced.
const intro = {
  title: "W3C: accessibility introduction",
  id: "R28",
  url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
};
const wcag = {
  title: "W3C: How to Meet WCAG 2.2 (quick reference)",
  id: "R66",
  url: "https://www.w3.org/WAI/WCAG22/quickref/",
};
const structure = {
  title: "W3C: page structure",
  id: "R10",
  url: "https://www.w3.org/WAI/tutorials/page-structure/",
};
const forms = {
  title: "W3C: forms tutorial",
  id: "R14",
  url: "https://www.w3.org/WAI/tutorials/forms/",
};
const contrast = {
  title: "W3C: understanding contrast (minimum)",
  id: "R30",
  url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
};
const colour = {
  title: "web.dev: colour and contrast",
  id: "R29",
  url: "https://web.dev/learn/accessibility/color-contrast",
};
const screenReaders = {
  title: "WebAIM: screen reader testing",
  id: "R40",
  url: "https://webaim.org/articles/screenreader_testing/",
};
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
const keyboardPatterns = {
  title: "W3C ARIA Authoring Practices: patterns",
  id: "R65",
  url: "https://www.w3.org/WAI/ARIA/apg/patterns/",
};
const reducedMotion = {
  title: "MDN: prefers-reduced-motion",
  id: "R64",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
};
const indiaGuidelines = {
  title: "Guidelines for Indian Government Websites and Apps",
  id: "R43",
  url: "https://guidelines.india.gov.in/",
};
const i18n = {
  title: "W3C: localization versus internationalization",
  id: "R42",
  url: "https://www.w3.org/International/questions/qa-i18n",
};
const participants = {
  title: "GOV.UK: finding user research participants",
  id: "R52",
  url: "https://www.gov.uk/service-manual/user-research/find-user-research-participants",
};
export const module11: Lesson[] = [
  withLegacyText({
    id: "m11-l01-v1",
    module: "m11",
    week: 11,
    day: 1,
    level: 3,
    areas: [11],
    guided: true,
    title: "Who is excluded, and by what",
    objective:
      "Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.",
    bringForward:
      "Your m08 screens, m09 interaction specifications and m10 prototype.",
    prerequisite: "Your current screens and interaction specifications.",
    why: "Accessibility work fails when it starts from a checklist. It works when it starts from a person who cannot do something and the decision that stopped them.",
    teach: [
      "Disability is a mismatch between a person and a design, not a property of the person.",
      "Barriers are permanent, temporary and situational: one arm in a cast, bright sunlight, a noisy room.",
      "Name the specific barrier, not the category: “focus is invisible on the tinted panel”.",
      "Most barriers come from ordinary decisions: a colour, a target size, a hidden control.",
      "Fixing one barrier usually improves the product for everyone.",
    ],
    explanation: [
      "The assigned introduction frames access as the outcome of design choices meeting human variation. That framing is practical rather than political: it points you at the decision you can change. “Blind users cannot use the product” is not actionable; “the only route to remove an item is a hover control, so it does not exist without a pointer” names a decision you made and can unmake.",
      "Barriers are not confined to permanent disability. A person with a broken wrist, a new parent holding a baby, someone on a train with one hand on a rail, or anyone in bright sunlight meets the same designs as a person with a permanent motor or vision impairment, and often meets the same barrier. Designing for the permanent case reliably improves the temporary and situational ones, which is why this work pays back beyond its stated audience.",
      "Specificity is what makes a barrier fixable. Write the person, the situation, the thing they were trying to do and the decision that stopped them. Five specific barriers in your own product are worth more than a general list of disability types, because each one converts directly into a change.",
      "This lesson deliberately precedes the standard. Criteria are useful once you know what you are looking for; started from cold they produce a compliance pass that misses the barrier your particular design creates.",
    ],
    misconception:
      "“Accessibility means supporting screen readers.” Screen readers are one assistive technology among many, and most barriers in a typical product are met by people who use none: small targets, invisible focus, colour-only status, unreadable contrast, timeouts, and controls that need two hands.",
    example:
      "Five barriers from the booking product. A person using a screen reader cannot tell which classes are full, because availability is shown only by a colour dot. A person with limited fine motor control cannot remove a shortlist item, because the only route is a swipe. Anyone in sunlight cannot read the quiet caption at 3.1:1 contrast. A person with a tremor mis-taps the destructive cancel control, which sits 4px from the primary action. And a person using the site in Hindi meets an English-only date format, which is a language barrier the team had never considered. Each names a decision rather than a category.",
    freeToolPath:
      "Your own product and your own eyes, plus the situational tests you can do now: outdoors in daylight, one-handed, with the screen at its dimmest. No tools or purchases are required for this lesson.",
    outputs: [
      "Five specific barriers naming person, situation and cause",
      "The design decision behind each barrier",
      "A note of which are permanent, temporary or situational",
      "One barrier you had not previously considered",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the introduction",
        instructions: [
          "Read the assigned accessibility introduction.",
          "Write in your own words what makes something a barrier.",
        ],
      },
      {
        minutes: 30,
        title: "Walk your product looking for exclusion",
        instructions: [
          "Walk one task asking at each step who could not do this.",
          "Include vision, hearing, motor, cognitive and language differences.",
          "Write each barrier as a person in a situation, not a category.",
        ],
      },
      {
        minutes: 25,
        title: "Name the decisions",
        instructions: [
          "For each barrier, name the design decision that causes it.",
          "Mark whether the decision was deliberate or inherited.",
        ],
      },
      {
        minutes: 25,
        title: "Test the situational cases",
        instructions: [
          "Try your product outdoors, one-handed, and at lowest brightness.",
          "Add any barrier these reveal.",
          "Note which barriers apply to more than one group.",
        ],
      },
      {
        minutes: 15,
        title: "Record and rank",
        instructions: [
          "Rank the five barriers by how completely they block the task.",
          "Mark the one you had not considered before.",
          "Save the list; the rest of the module works from it.",
        ],
      },
    ],
    check: [
      {
        question: "Why write barriers as decisions rather than categories?",
        answer:
          "Because a decision can be changed. “Blind users cannot use this” gives you nothing; “availability is shown only by colour” tells you exactly what to fix.",
      },
      {
        question: "Why do situational barriers matter to this work?",
        answer:
          "Because the same design decisions produce them, and fixing the permanent case fixes the sunlight, the broken wrist and the crowded train at the same time.",
      },
      {
        question: "Why start from barriers rather than from the standard?",
        answer:
          "Because criteria read cold produce a compliance pass. Starting from what your design actually excludes tells you which criteria matter here.",
      },
    ],
    rubric: [
      "Five barriers name a person, a situation and a task",
      "Each barrier names the design decision behind it",
      "Permanent, temporary and situational cases are covered",
      "Barriers are ranked by how completely they block",
    ],
    criteria: [
      {
        criterion: "Five barriers name a person, a situation and a task",
        evidence:
          "Five written barriers, each specific enough to reproduce.",
        levels: [
          "General statements about disability groups.",
          "Some specific barriers mixed with categories.",
          "All five specify person, situation and task.",
          "As adequate, and at least one comes from a situational test you actually ran.",
        ],
        remediation:
          "Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier.",
        recheck: "The rewritten barrier list.",
      },
      {
        criterion: "Each barrier names the design decision behind it",
        evidence:
          "A decision per barrier, marked deliberate or inherited.",
        levels: [
          "Causes unstated.",
          "Causes described as general failings.",
          "Each names a specific decision in your design.",
          "As adequate, and at least one decision is one you made in an earlier module.",
        ],
        remediation:
          "For each barrier, find the specification or screen where the decision was made and cite it.",
        recheck: "The decision list.",
      },
      {
        criterion: "Permanent, temporary and situational cases are covered",
        evidence:
          "Barriers spanning all three, with the situational ones tested rather than imagined.",
        levels: [
          "Permanent disability only.",
          "Two of the three covered.",
          "All three, with situational cases actually tried.",
          "As adequate, and one barrier is shown to affect all three groups.",
        ],
        remediation:
          "Take your product outside, use it one-handed and dim the screen. Add what those reveal.",
        recheck: "The extended list.",
      },
      {
        criterion: "Barriers are ranked by how completely they block",
        evidence:
          "An ordered list distinguishing total blocks from difficulties.",
        levels: [
          "Unordered.",
          "Ordered by ease of fixing.",
          "Ordered by how completely the task becomes impossible.",
          "As adequate, and the ranking notes which barriers have no workaround at all.",
        ],
        remediation:
          "For each barrier ask whether the person can finish the task another way. Those with no route go first.",
        recheck: "The ranked list.",
      },
    ],
    repairs: [
      "If barriers read as categories, rewrite each as a person in a situation.",
      "If causes are missing, name the design decision behind each barrier.",
      "If only permanent cases appear, run the situational tests and add what they reveal.",
      "If the list is unordered, rank by how completely each blocks the task.",
    ],
    portfolio:
      "A barrier list written as decisions is a strong opening for an accessibility section, and it shows the work started from people rather than from a checklist.",
    resource: intro,
    resources: [
      {
        ...intro,
        section:
          "What web accessibility is, who it affects, and the range of situations it covers.",
        purpose:
          "Establishes the mismatch framing this module and the barrier list depend on.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Read the text if any video is inaccessible to you; it is an introduction and supplies no criteria or testing method.",
        fallbackId: "R14",
      },
      {
        ...easyChecks,
        section:
          "The list of checks, skimmed now to see what will be checkable later.",
        purpose:
          "Shows which barriers you will be able to verify yourself in the coming lessons.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and self-checking is not testing with disabled people.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l02-v1",
    module: "m11",
    week: 11,
    day: 2,
    level: 3,
    areas: [11],
    guided: true,
    title: "Using the standard without drowning in it",
    objective:
      "Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.",
    bringForward: "Your ranked barrier list.",
    prerequisite: "Your five barriers with their causes.",
    why: "The standard is large and filterable. Used from your barriers, it is a set of answers; read front to back, it is a wall.",
    teach: [
      "Four principles: perceivable, operable, understandable, robust.",
      "Criteria come at levels A, AA and AAA; AA is the common working target.",
      "Filter to what your artefact affects rather than reading everything.",
      "A criterion tells you what must be true, not how to design it.",
      "Reading a criterion is not conformance; only a tested build approaches that.",
    ],
    explanation: [
      "The quick reference is organised as principles, guidelines and success criteria, with filters for version, level, technology and topic. Used properly it is a lookup: you have a barrier about colour-only status, so you filter to the relevant topic and find the criterion that names it. Reading it linearly produces the familiar experience of a long document that changes nothing.",
      "Levels are about the breadth of the requirement, not its importance to your users. A and AA together are the usual working target and cover most of what your barrier list will contain. AAA criteria are worth knowing and are not expected across a whole product; where one addresses your specific audience, adopting it is a decision to record rather than a default.",
      "A criterion states an outcome — text has a contrast ratio of at least this, all functionality is available from a keyboard — and leaves the design to you. That is why this lesson comes after the barriers: the criterion confirms what must be true, and your design decides how.",
      "The gap between reading and conformance is worth naming once, here, for the whole module. You can check a criterion against a design; you can only test conformance against a build, with real assistive technology, and preferably with disabled people. Every claim in this module states which of those it rests on.",
    ],
    misconception:
      "“We will do an accessibility audit at the end.” An audit at the end finds problems that are expensive to fix and often structural — a layout that cannot carry a visible focus ring, a flow that depends on hover. Mapping barriers to criteria during design costs an hour and changes what you build.",
    example:
      "Five barriers mapped to five criteria. Colour-only availability mapped to the use-of-colour criterion, and meeting it here meant adding a text label beside the dot. The swipe-only removal mapped to the keyboard criterion: every function available from a keyboard, met by adding a visible control with a key route. The 3.1:1 caption mapped to contrast (minimum), met by darkening the text and re-measuring. The adjacent destructive control mapped to target size, met by increasing spacing. The English-only date format mapped to a language and localisation concern the standard covers only partly, so the lesson recorded it as a product requirement rather than a criterion.",
    freeToolPath:
      "The quick reference in a browser, filtered to level A and AA. No account, tooling or subscription is involved; the mapping is written work.",
    outputs: [
      "Each barrier mapped to a named success criterion",
      "What meeting it means in your specific design",
      "A note where no criterion covers your barrier",
      "A stated target level with the reason",
    ],
    steps: [
      {
        minutes: 25,
        title: "Orient in the standard",
        instructions: [
          "Open the assigned quick reference and filter to levels A and AA.",
          "Write the four principles and one criterion you already meet.",
        ],
      },
      {
        minutes: 30,
        title: "Map your barriers",
        instructions: [
          "For each barrier, find the criterion that names it.",
          "Record the criterion number and its plain statement.",
          "Mark any barrier the standard does not cover.",
        ],
      },
      {
        minutes: 25,
        title: "Translate to your design",
        instructions: [
          "For each criterion write what meeting it means for your specific screens.",
          "Name the change required, not the criterion text.",
        ],
      },
      {
        minutes: 25,
        title: "Choose your target",
        instructions: [
          "State whether you are working to A, AA, or AA plus specific AAA criteria.",
          "Record any AAA criterion you adopt and why your audience needs it.",
        ],
      },
      {
        minutes: 15,
        title: "Record the boundary",
        instructions: [
          "Write one sentence separating criteria you have read from conformance you have tested.",
          "Save the mapping; later lessons check these one by one.",
        ],
      },
    ],
    check: [
      {
        question: "Why map from barriers to criteria rather than the reverse?",
        answer:
          "Because the standard is large and your product's failures are specific. Barrier-first turns the reference into a lookup rather than a reading task.",
      },
      {
        question: "What does a success criterion give you?",
        answer:
          "A statement of what must be true. It does not tell you how to design, which is why the mapping needs a sentence about your own screens.",
      },
      {
        question: "Does reading criteria make a design conformant?",
        answer:
          "No. Conformance is a property of an implemented, tested build, ideally checked with disabled people. Reading criteria makes your design more likely to get there.",
      },
    ],
    rubric: [
      "Each barrier maps to a named criterion or is marked uncovered",
      "Meeting each criterion is stated in terms of your screens",
      "A target level is chosen with a reason",
      "The read-versus-tested boundary is stated",
    ],
    criteria: [
      {
        criterion: "Each barrier maps to a named criterion or is marked uncovered",
        evidence:
          "A mapping table with criterion numbers, or an explicit uncovered marker.",
        levels: [
          "No mapping.",
          "Loose mapping to principles rather than criteria.",
          "Specific criteria named, with uncovered barriers marked.",
          "As adequate, and an uncovered barrier is recorded as a product requirement instead.",
        ],
        remediation:
          "Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered.",
        recheck: "The mapping table.",
      },
      {
        criterion: "Meeting each criterion is stated in terms of your screens",
        evidence:
          "A sentence per criterion naming the concrete change in your design.",
        levels: [
          "Criterion text copied without translation.",
          "Vague intentions such as “improve contrast”.",
          "Specific changes named per screen or component.",
          "As adequate, and each change is traceable to a component in your inventory.",
        ],
        remediation:
          "Rewrite each row as “in this design, meeting this means …”, naming the element.",
        recheck: "The translated mapping.",
      },
      {
        criterion: "A target level is chosen with a reason",
        evidence:
          "A stated target with any adopted AAA criteria justified by audience.",
        levels: [
          "No target stated.",
          "A level named without reasoning.",
          "Target stated with reasons, including any AAA adoption.",
          "As adequate, and the reason references a barrier or an audience fact from your research.",
        ],
        remediation:
          "Write the target and one sentence on why it fits this product and audience.",
        recheck: "The target statement.",
      },
      {
        criterion: "The read-versus-tested boundary is stated",
        evidence:
          "A written line distinguishing criteria consulted from conformance tested.",
        levels: [
          "Reading implied as compliance.",
          "Boundary implied but unstated.",
          "Stated plainly and kept with the mapping.",
          "As adequate, and it names what testing would be required to claim conformance.",
        ],
        remediation:
          "Add one sentence: what you have read, and what remains untested about the build.",
        recheck: "The boundary statement.",
      },
    ],
    repairs: [
      "If nothing is mapped, filter the reference by each barrier's topic and find its criterion.",
      "If criterion text was copied, rewrite each row as the change in your own screens.",
      "If no target is stated, choose one and give the reason.",
      "If reading is implied to be compliance, add the read-versus-tested sentence.",
    ],
    portfolio:
      "A barrier-to-criterion mapping is compact and shows you can use the standard as a tool rather than quoting it.",
    resource: wcag,
    resources: [
      {
        ...wcag,
        section:
          "Levels A and AA, filtered to the topics your barriers name.",
        purpose:
          "Supplies the criteria your barriers map to, without requiring a linear read.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is a filterable index of the standard: no testing tools, no design method, no prioritisation. Reading a criterion is not conformance.",
        fallbackId: "R41",
      },
      {
        ...contrast,
        section: "The thresholds and their exceptions, as a worked example of one criterion.",
        purpose:
          "Shows the depth behind a single criterion so the mapping is not treated as a checklist.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l03-v1",
    module: "m11",
    week: 11,
    day: 3,
    level: 3,
    areas: [11],
    guided: true,
    title: "Structure people can navigate",
    objective:
      "Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.",
    bringForward: "Your m06 heading work and two m08 screens.",
    prerequisite: "Two current screens and your m06 heading outline.",
    why: "Structure is how someone who cannot see the whole screen navigates it. Without it they read everything, in whatever order the markup happens to be.",
    teach: [
      "One page title, then headings nested without skipping levels.",
      "Regions let someone jump straight to the main content instead of hearing the menu again.",
      "Reading order must match visual order; a two-column layout often breaks this.",
      "Headings describe their section; “Details” describes nothing.",
      "Check by reading the headings alone: they should summarise the page.",
    ],
    explanation: [
      "A heading outline is the page's table of contents, and for many people it is the primary navigation. Skipping a level tells them a section is nested inside something that does not exist, which makes the shape of the page unreadable while looking fine visually. The rule is strict because the outline has no other way to convey nesting.",
      "Regions solve the repetition problem. Marked correctly, someone can skip the banner and navigation and land on the main content on every page; unmarked, they hear the same twenty links before the content each time, which turns a five-page task into an endurance exercise.",
      "Reading order is where visually correct layouts go wrong. If a sidebar appears after the main content in the markup but beside it visually, someone reading in order meets it late; if a two-column form reads down each column instead of across each row, the labels and fields separate. Check the order the content is actually in, not the order it appears in.",
      "The cheapest verification is reading the headings aloud in order. If they summarise the page, the structure is probably sound. If they read as a list of decorative phrases, no amount of correct markup will help, because the words themselves carry no information.",
    ],
    misconception:
      "“The developer will add the headings.” Heading level is a design decision about hierarchy, and a developer choosing it from visual size produces four level-one headings and no outline. Specify the outline with the screen.",
    example:
      "The class detail screen had five visual headings and no outline: three were level one because they looked large. Rewritten as page title, then four level-two sections, using the labels from the m06 table. The regions were named so the main content could be reached directly. The reading order was checked and one problem found: the price panel appeared visually beside the title but came after the description in order, so a person reading in sequence met the price three screens' worth of text later. It was moved. Reading the headings aloud now summarised the page in six phrases.",
    freeToolPath:
      "An indented text outline plus a sketch with regions marked. If your prototype is a local HTML file, the browser alone lets you check heading levels and tab order without any extension.",
    outputs: [
      "A heading outline per screen with correct nesting",
      "Named regions for banner, navigation, main and footer",
      "A reading-order check with any mismatch fixed",
      "A read-aloud test of the headings alone",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and write the outline",
        instructions: [
          "Read the assigned page-structure sections on headings and regions.",
          "Write each screen as an indented outline using your existing labels.",
        ],
      },
      {
        minutes: 25,
        title: "Fix the levels",
        instructions: [
          "Check no level is skipped and there is exactly one page title.",
          "Rewrite any heading that does not describe its section.",
        ],
      },
      {
        minutes: 30,
        title: "Mark the regions",
        instructions: [
          "Identify banner, navigation, main content, complementary and footer.",
          "Check the main content can be reached without passing the navigation.",
        ],
      },
      {
        minutes: 25,
        title: "Check reading order",
        instructions: [
          "Write the order content is actually in, not how it looks.",
          "Compare with the visual order and fix any mismatch.",
          "Pay attention to sidebars, two-column forms and floating panels.",
        ],
      },
      {
        minutes: 15,
        title: "Read the headings aloud",
        instructions: [
          "Read only the headings to another person and ask what the page contains.",
          "Rewrite anything they cannot infer.",
          "Save the outlines, regions and order notes.",
        ],
      },
    ],
    check: [
      {
        question: "Why does skipping a heading level matter?",
        answer:
          "Because levels are the only signal of nesting for someone navigating by outline. A skipped level describes a structure that does not exist.",
      },
      {
        question: "What do regions buy a person?",
        answer:
          "The ability to skip repeated navigation and land on the content. Without them, every page starts with the same twenty links.",
      },
      {
        question: "Where does reading order usually break?",
        answer:
          "Two-column layouts, sidebars and floating panels, where the visual position and the content order diverge and someone reading in sequence meets things late or separated.",
      },
    ],
    rubric: [
      "Headings are correctly nested and descriptive",
      "Regions are named and main content is directly reachable",
      "Reading order matches visual order",
      "The read-aloud check was run and changed something",
    ],
    criteria: [
      {
        criterion: "Headings are correctly nested and descriptive",
        evidence:
          "Two outlines with one page title each, no skipped levels, and headings that describe their sections.",
        levels: [
          "Headings chosen by visual size.",
          "Correct nesting with vague headings.",
          "Correct nesting and descriptive headings on both screens.",
          "As adequate, and headings reuse vocabulary evidenced in m06.",
        ],
        remediation:
          "Write each screen as a numbered outline and check each item is a genuine subsection of the one above.",
        recheck: "The two outlines.",
      },
      {
        criterion: "Regions are named and main content is directly reachable",
        evidence:
          "A region map per screen with a route that skips the navigation.",
        levels: [
          "No regions.",
          "Regions named but no skip route.",
          "Regions named and main content directly reachable.",
          "As adequate, and repeated content is identified as something to skip on every page.",
        ],
        remediation:
          "Draw each screen and outline its regions, then state how someone reaches the main content first.",
        recheck: "The region maps.",
      },
      {
        criterion: "Reading order matches visual order",
        evidence:
          "A written content order compared against the visual order, with mismatches fixed.",
        levels: [
          "Order not examined.",
          "Examined without fixing a known mismatch.",
          "Checked and mismatches corrected.",
          "As adequate, and a layout was changed rather than patched to make the orders agree.",
        ],
        remediation:
          "Write the content order as a numbered list and walk the screen visually alongside it.",
        recheck: "The order comparison.",
      },
      {
        criterion: "The read-aloud check was run and changed something",
        evidence:
          "A record of reading headings alone to someone, with resulting rewrites.",
        levels: [
          "Not run.",
          "Run alone with no changes.",
          "Run with another person and rewrites recorded.",
          "As adequate, and the listener's summary is quoted beside the outline.",
        ],
        remediation:
          "Read only the headings to someone and ask what the page contains. Rewrite what they cannot infer.",
        recheck: "The read-aloud record.",
      },
    ],
    repairs: [
      "If levels were chosen visually, rebuild the outline from hierarchy.",
      "If regions are missing, mark them and add a skip route.",
      "If order mismatches, move the content rather than relying on styling.",
      "If the read-aloud was skipped, run it with another person.",
    ],
    portfolio:
      "A heading outline and region map beside the screen is a small artefact that shows structural thinking most portfolios omit.",
    resource: structure,
    resources: [
      {
        ...structure,
        section: "The headings and page regions sections.",
        purpose: "Supplies the outline and region rules this lesson applies.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers structural semantics, not navigation design or content wording.",
        fallbackId: "R14",
      },
      {
        ...easyChecks,
        section: "The heading and page title checks.",
        purpose: "Gives self-runnable verification for the outline you wrote.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary checks only; passing them is not conformance.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l04-v1",
    module: "m11",
    week: 11,
    day: 4,
    level: 3,
    areas: [11],
    guided: true,
    title: "Text people can actually read",
    objective:
      "Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.",
    bringForward: "Your m08 token sheet and two screens.",
    prerequisite: "Your token sheet with its text and surface pairs.",
    why: "Text is the product for most people most of the time, and it is the easiest thing to make unreadable while it looks elegant.",
    teach: [
      "Measure contrast; do not judge it by eye under studio lighting.",
      "Quiet text — captions, placeholders, disabled labels — fails most often.",
      "Enlarging text must reflow the layout, not clip or scroll it sideways.",
      "Line length and spacing affect reading as much as size does.",
      "Meeting a ratio is a floor, not proof that text is comfortable to read.",
    ],
    explanation: [
      "Contrast is measurable, which means opinions about it are unnecessary. The assigned threshold reading gives the ratios and their exceptions for large text and incidental elements. Measure every pair you allow — including the ones you consider decorative, because a caption carrying the price is not decorative — and record the number beside the pair in your token sheet.",
      "Quiet text is where products fail. Placeholder grey, disabled labels, captions on tinted panels: each was chosen to be visually recessive, and recessive is exactly what fails a ratio. If a piece of text matters enough to appear, it matters enough to be readable; if it does not matter, remove it rather than dimming it.",
      "Enlarging text is a reflow test, not a zoom test. A person who has set their text larger should get a layout that adapts: content wrapping, columns stacking, nothing clipped, no horizontal scrolling of the page. Fixed-height containers and text sized in absolute units are the two usual causes of failure, and both are decisions you made in m03 and m08.",
      "Comfort is broader than the threshold. Line length, line height, paragraph spacing and the amount of text on screen all affect whether people read or skim, and none of them appear in a contrast measurement. Meeting the ratio is where you start rather than where you finish.",
    ],
    misconception:
      "“It passes the contrast check, so the text is fine.” The ratio covers foreground against background at a given size and weight. It says nothing about thin type at small sizes, long unbroken lines, or text over an image where the background varies.",
    example:
      "Nine text pairs were measured. Three failed: the caption at 3.1:1, the placeholder at 2.8:1 and the disabled button label at 2.4:1. The caption was darkened; the placeholder was replaced with a permanent hint under the label, removing the problem instead of repairing it; the disabled label was given a stronger colour and a written explanation beside it, since a disabled control with unreadable text tells nobody anything. At 200 per cent text the price panel clipped its last line and the header wrapped over the logo; both were fixed by allowing the containers to grow. Line length on the description exceeded ninety characters at wide widths and was capped.",
    freeToolPath:
      "Any free browser-based contrast checker, or compute the ratio in a spreadsheet from the published formula. For enlarged text, your browser's own text-size setting shows real reflow with no tooling.",
    outputs: [
      "Measured ratios for every text-on-surface pair",
      "Repairs for every failing pair, recorded",
      "A 200 per cent text test with breakages named and fixed",
      "A line-length and spacing decision for body text",
    ],
    steps: [
      {
        minutes: 25,
        title: "Measure everything",
        instructions: [
          "List every text-on-surface pair, including quiet text.",
          "Measure each ratio and record it in the token sheet.",
          "Mark every pair below the relevant threshold.",
        ],
      },
      {
        minutes: 25,
        title: "Repair the failures",
        instructions: [
          "Darken, remove or replace each failing pair.",
          "Prefer removing decorative text over dimming meaningful text.",
          "Re-measure after each repair.",
        ],
      },
      {
        minutes: 30,
        title: "Enlarge the text",
        instructions: [
          "Set text to about 200 per cent and reload the screens.",
          "Record every clip, overlap, truncation and horizontal scroll.",
          "Fix by letting containers grow rather than shrinking the text.",
        ],
      },
      {
        minutes: 25,
        title: "Check reading comfort",
        instructions: [
          "Measure line length at your widest layout and cap it if needed.",
          "Check line height and paragraph spacing on the longest text block.",
          "Read one screen aloud at arm's length to test the result.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Update the token sheet with measured ratios.",
          "Write what you could not fix and why.",
          "Save the enlarged-text screenshots with the notes.",
        ],
      },
    ],
    check: [
      {
        question: "Why measure rather than judge contrast?",
        answer:
          "Because your eyes are adapted to your screen and your lighting. The ratio is a number, and the number is the same for everyone reading your design.",
      },
      {
        question: "What usually breaks at 200 per cent text?",
        answer:
          "Fixed-height containers and absolute text sizes: content clips, headers wrap over other elements, and pages start scrolling sideways. Both causes are earlier design decisions.",
      },
      {
        question: "Is a passing ratio enough?",
        answer:
          "No. It is a floor. Thin type, long lines, tight spacing and text over variable backgrounds can pass and still be hard to read.",
      },
    ],
    rubric: [
      "Every text pair carries a measured ratio",
      "Failing pairs are repaired and re-measured",
      "A 200 per cent test was run with breakages fixed",
      "Line length and spacing decisions are recorded",
    ],
    criteria: [
      {
        criterion: "Every text pair carries a measured ratio",
        evidence:
          "A measured number per pair in the token sheet, including quiet text.",
        levels: [
          "No measurements.",
          "Body text measured only.",
          "All pairs measured including captions, placeholders and disabled text.",
          "As adequate, and the sheet marks which pairs are permitted and which are forbidden.",
        ],
        remediation:
          "List every place text meets a surface and measure each; the ones you skipped are usually the failing ones.",
        recheck: "The measured token sheet.",
      },
      {
        criterion: "Failing pairs are repaired and re-measured",
        evidence:
          "Repairs recorded with new ratios, including any text removed rather than dimmed.",
        levels: [
          "Failures left in place.",
          "Repaired without re-measuring.",
          "Repaired and re-measured, with removals justified.",
          "As adequate, and one repair removed the need for the text rather than restyling it.",
        ],
        remediation:
          "Repair each failing pair and record the new number beside the old one.",
        recheck: "The repair record.",
      },
      {
        criterion: "A 200 per cent test was run with breakages fixed",
        evidence:
          "Screens at enlarged text with named breakages and their fixes.",
        levels: [
          "Not tested.",
          "Tested with breakages recorded but unfixed.",
          "Tested, named and fixed by allowing reflow.",
          "As adequate, and no fix reduced the text size or removed content.",
        ],
        remediation:
          "Enlarge the text and screenshot each screen. Name each breakage concretely, then let the containers grow.",
        recheck: "The enlarged screenshots and fixes.",
      },
      {
        criterion: "Line length and spacing decisions are recorded",
        evidence:
          "A measured line length at the widest layout and stated spacing values.",
        levels: [
          "Not considered.",
          "Mentioned without measurement.",
          "Measured, capped where needed, and spacing recorded.",
          "As adequate, and the decision references your m03 typography work.",
        ],
        remediation:
          "Count characters per line at your widest breakpoint and cap the container if it runs long.",
        recheck: "The measurements.",
      },
    ],
    repairs: [
      "If quiet text is unmeasured, measure captions, placeholders and disabled labels.",
      "If a pair fails, darken it, remove it, or replace it with a permanent hint.",
      "If enlarging clips content, let containers grow instead of shrinking text.",
      "If lines run long, cap the container and record the value.",
    ],
    portfolio:
      "Measured ratios and an enlarged-text screenshot are concrete craft evidence and take minutes to produce.",
    resource: contrast,
    resources: [
      {
        ...contrast,
        section: "The thresholds and the large-text and incidental exceptions.",
        purpose: "Supplies the measurable target for every pair you allow.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light.",
        fallbackId: "R29",
      },
      {
        ...colour,
        section:
          "Colour perception, colour-vision deficiency and contrast in practice.",
        purpose:
          "Explains why measured contrast matters more than how the text looks to you.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. No code samples; the measurement and reflow tests here are the practical work.",
        fallbackId: "R30",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l05-v1",
    module: "m11",
    week: 11,
    day: 5,
    level: 3,
    areas: [11],
    guided: true,
    title: "Never colour alone",
    objective:
      "Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.",
    bringForward: "Your m08 states, messages and charts.",
    prerequisite: "Your state and message specifications.",
    why: "Colour is the signal most designers reach for and the one most likely to be unavailable to the reader.",
    teach: [
      "Colour may reinforce meaning; it may not be the only carrier.",
      "Second signals: text, shape, position, weight, an icon with a distinct silhouette.",
      "Greyscale is the fastest test and catches most failures.",
      "Colour-vision differences affect roughly one in twelve men; red and green pairs fail first.",
      "Charts, status and required fields are the usual offenders.",
    ],
    explanation: [
      "The rule is narrow and strict: information must not be conveyed by colour alone. It does not forbid colour, and it does not require a drab product. It requires that anyone who cannot distinguish your colours — through a colour-vision difference, a monochrome display, sunlight, a cheap projector or a printed page — can still get the information.",
      "The second signal has to be perceptible, not merely present. An icon that differs only in colour is not a second signal; an icon with a distinct silhouette is. Text is the most reliable of all: “Full” beside the red dot carries the meaning to everyone, including a screen-reader user for whom the dot does not exist at all.",
      "Greyscale catches most failures in seconds, and it is the check to run habitually. A colour-vision simulation catches the rest — particularly red and green pairs, which look distinct to you and identical to a significant share of readers, and which products use constantly for success and failure.",
      "Three places recur across products: chart series distinguished only by colour, status shown only by a coloured dot or background, and required fields marked only in red. Check these three first; they are almost always present and almost always unfixed.",
    ],
    misconception:
      "“We use a colour-blind-safe palette, so we are fine.” A safe palette reduces the chance of confusion between hues and does nothing for a monochrome display, sunlight, printing, or a screen-reader user. The second signal is what carries the meaning.",
    example:
      "Four places carried meaning by colour alone. Availability dots — green, amber, red — gained text: “Places available”, “2 left”, “Full”. Required fields, marked with red labels, gained the word “required”. The chart's three series gained direct labels rather than a colour legend. The error state, which had used only a red border, gained an icon with a distinct shape and the message text tied to the field. In greyscale all four remained readable, and a colour-vision simulation confirmed the amber and red dots had previously been indistinguishable for some readers.",
    freeToolPath:
      "Greyscale is free: your operating system's accessibility settings, a photocopy, or a phone photo converted to black and white. Colour-vision simulation is available in browser developer tools with no account.",
    outputs: [
      "A list of every place meaning is carried by colour",
      "A second signal added to each, named",
      "A greyscale pass with any remaining failures",
      "A colour-vision simulation pass with results",
    ],
    steps: [
      {
        minutes: 20,
        title: "Find the colour-only signals",
        instructions: [
          "Walk your screens listing everything whose meaning depends on colour.",
          "Check status, charts, required fields, links and errors specifically.",
        ],
      },
      {
        minutes: 30,
        title: "Add second signals",
        instructions: [
          "Add text where possible; it works for every reader including screen readers.",
          "Use distinct shapes rather than same-shape different-colour icons.",
          "Keep the colour; you are adding, not replacing.",
        ],
      },
      {
        minutes: 25,
        title: "Greyscale everything",
        instructions: [
          "View every screen in greyscale.",
          "Mark anything you can no longer distinguish or interpret.",
          "Repair and re-check.",
        ],
      },
      {
        minutes: 30,
        title: "Simulate colour-vision differences",
        instructions: [
          "Run a colour-vision simulation in your browser tools.",
          "Check red and green pairs first.",
          "Record what changed and what still fails.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "List the signals you added and where.",
          "Note anything you could not fix and why.",
          "Save the greyscale and simulation evidence.",
        ],
      },
    ],
    check: [
      {
        question: "Does the rule forbid using colour?",
        answer:
          "No. It forbids colour being the only carrier of information. Colour reinforcing a text or shape signal is exactly what it is for.",
      },
      {
        question: "Why is text the most reliable second signal?",
        answer:
          "Because it survives greyscale, colour-vision differences, printing and screen readers. A shape helps sighted readers; text helps everyone.",
      },
      {
        question: "Which three places usually fail?",
        answer:
          "Chart series distinguished by colour, status shown as a coloured dot or background, and required fields marked only in red.",
      },
    ],
    rubric: [
      "Every colour-only signal is found and listed",
      "Each has a perceptible second signal",
      "A greyscale pass was run and repairs made",
      "A colour-vision simulation was run and recorded",
    ],
    criteria: [
      {
        criterion: "Every colour-only signal is found and listed",
        evidence:
          "A list covering status, charts, required fields, links and error states.",
        levels: [
          "Not audited.",
          "Obvious cases only.",
          "All the usual categories checked and listed.",
          "As adequate, and one signal is found in a place you had not considered, such as a hover or a chart legend.",
        ],
        remediation:
          "Walk each screen asking what a person would miss if every colour were the same grey.",
        recheck: "The audit list.",
      },
      {
        criterion: "Each has a perceptible second signal",
        evidence:
          "A named second signal per case, preferring text where possible.",
        levels: [
          "Colour retained as the only signal.",
          "Second signals added but some rely on colour to be distinguished.",
          "Each has a genuinely perceptible second signal.",
          "As adequate, and at least one case uses text so the meaning also reaches a screen reader.",
        ],
        remediation:
          "For each case, add the word that states the meaning; then decide whether a shape helps as well.",
        recheck: "The signals list.",
      },
      {
        criterion: "A greyscale pass was run and repairs made",
        evidence:
          "Greyscale renderings with failures marked and repaired.",
        levels: [
          "Not run.",
          "Run without repairs.",
          "Run, failures marked and repaired.",
          "As adequate, and the pass covers states and messages as well as static screens.",
        ],
        remediation:
          "Convert every screen and state to greyscale and repair anything you cannot interpret.",
        recheck: "The greyscale evidence.",
      },
      {
        criterion: "A colour-vision simulation was run and recorded",
        evidence:
          "Simulation results, with red and green pairs specifically checked.",
        levels: [
          "Not run.",
          "Run without recording specific findings.",
          "Run with findings recorded and repairs made.",
          "As adequate, and a palette pair was changed as well as a second signal added.",
        ],
        remediation:
          "Use your browser's simulation, check the status colours first, and record what becomes indistinguishable.",
        recheck: "The simulation record.",
      },
    ],
    repairs: [
      "If status uses colour alone, add the word that states the status.",
      "If a chart uses a colour legend, label the series directly.",
      "If required fields are marked in red, add the word required.",
      "If greyscale or simulation was skipped, run it and repair what fails.",
    ],
    portfolio:
      "Before-and-after greyscale pairs are compact, visual and immediately convincing evidence of accessible craft.",
    resource: colour,
    resources: [
      {
        ...colour,
        section:
          "Colour-vision deficiency and the rule against relying on colour alone.",
        purpose: "Supplies the rule and the perceptual reasoning behind it.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale and simulation passes are the practical test.",
        fallbackId: "R30",
      },
      {
        ...wcag,
        section: "The use-of-colour criterion and the contrast criteria at level AA.",
        purpose:
          "Names the criteria this lesson satisfies so the mapping stays traceable.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. An index of the standard, not a design method; reading a criterion is not conformance.",
        fallbackId: "R41",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l06-v1",
    module: "m11",
    week: 11,
    day: 6,
    level: 3,
    areas: [11],
    guided: true,
    title: "Everything works from a keyboard",
    objective:
      "Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.",
    bringForward: "Your m09 key tables and focus rules, and a rough build.",
    prerequisite: "Your key tables and, if possible, a rough running page.",
    why: "If a task cannot be completed from a keyboard, it cannot be completed by a large group of people, including many who do not consider themselves disabled.",
    teach: [
      "Every function must be reachable and operable without a pointer.",
      "Reachable is not enough: focus must be visible and the order sensible.",
      "Traps are the worst failure: a place you can enter and cannot leave.",
      "Custom controls are where keyboard support disappears.",
      "Test by unplugging the mouse, not by imagining.",
    ],
    explanation: [
      "The criterion is blunt: all functionality available from a keyboard. It is also the one most often failed by otherwise careful products, because keyboard support is invisible to anyone using a pointer and therefore never noticed in review. Testing it takes ten minutes and is the highest-value check in this module.",
      "Three things must hold together. Reachability: you can get to every control. Visibility: you can see where you are at every step. Order: the sequence follows the visual and logical order rather than the order elements happen to appear. A design failing any one of them fails the task, even if the other two are perfect.",
      "Keyboard traps are the most serious failure because they end the session. A custom dropdown that captures the arrow keys and never releases focus, a dialogue with no escape, an embedded widget you can enter and not exit: each strands the person entirely. Check every custom control specifically for whether you can leave it.",
      "Native controls mostly work; custom ones mostly do not, unless someone specified them. That is what your m09 key tables were for, and this lesson is where they meet reality — testing what was built against what you wrote.",
    ],
    misconception:
      "“Keyboard use is a niche case.” It includes people with motor impairments, people using switch devices and voice control that maps to keyboard interaction, many screen-reader users, anyone with a broken trackpad, and a large number of fast, experienced users. It is also the substrate other assistive technologies build on.",
    example:
      "The booking task was attempted with the mouse unplugged. Four failures. The date picker could be reached and not operated: arrow keys did nothing, so no date could be chosen — a total block, repaired against the m09 key table. The filter panel trapped focus, with escape doing nothing. The remove control, hover-only, could not be reached at all. Focus was invisible on the tinted review panel. The repair addressed the date picker first, because it stopped the task entirely; the trap was recorded as the second, and the write-up noted that a mouse-only workaround was explicitly not acceptable as a fix.",
    freeToolPath:
      "Unplug the mouse or put it out of reach, and use the tab, arrow, enter, space and escape keys. If your prototype is a local HTML file, this test is fully available with no tooling.",
    outputs: [
      "A recorded keyboard-only attempt at one full task",
      "A list of unreachable, unoperable and trapping controls",
      "One repair addressing the most blocking failure",
      "A statement of which key tables were satisfied and which were not",
    ],
    steps: [
      {
        minutes: 20,
        title: "Prepare the test",
        instructions: [
          "Open your prototype and put the mouse out of reach.",
          "Have your m09 key tables beside you.",
        ],
      },
      {
        minutes: 30,
        title: "Attempt the task",
        instructions: [
          "Complete one full task using only the keyboard.",
          "Record every point where you could not proceed or lost your place.",
          "Note anywhere focus disappeared or the order jumped.",
        ],
      },
      {
        minutes: 25,
        title: "Hunt for traps",
        instructions: [
          "Enter every custom control and try to leave it with tab and escape.",
          "Record anything that captures focus.",
          "Check dialogues, pickers, menus and embedded content.",
        ],
      },
      {
        minutes: 30,
        title: "Repair the worst",
        instructions: [
          "Fix the failure that most completely blocks the task.",
          "Use your key table as the specification for the fix.",
          "Do not accept a pointer-based workaround as a repair.",
        ],
      },
      {
        minutes: 15,
        title: "Record against the tables",
        instructions: [
          "Mark each key-table row satisfied or failed.",
          "List failures as build defects with expected behaviour.",
          "Save the results and the repair.",
        ],
      },
    ],
    check: [
      {
        question: "Why is reachability not enough?",
        answer:
          "Because a control you can reach and cannot see or operate still blocks the task. Visibility of focus and a sensible order are part of the same requirement.",
      },
      {
        question: "Why are keyboard traps the most serious failure?",
        answer:
          "Because they end the session entirely. A person who enters a control and cannot leave it has no route forward and no route back.",
      },
      {
        question: "Where does keyboard support usually disappear?",
        answer:
          "In custom controls — pickers, dropdowns, menus, embedded widgets — which have no behaviour except what someone specified and built.",
      },
    ],
    rubric: [
      "A full task was attempted with no pointer",
      "Unreachable, unoperable and trapping controls are listed",
      "The most blocking failure was repaired properly",
      "Key-table rows are marked satisfied or failed",
    ],
    criteria: [
      {
        criterion: "A full task was attempted with no pointer",
        evidence:
          "A record of a complete keyboard-only attempt, including where it stopped.",
        levels: [
          "Not attempted, or attempted partially.",
          "Attempted with occasional pointer use.",
          "A full attempt with the pointer unavailable, recorded step by step.",
          "As adequate, and a second task was attempted to check the failures generalise.",
        ],
        remediation:
          "Put the mouse out of reach and try again from the start, writing down each step.",
        recheck: "The attempt record.",
      },
      {
        criterion: "Unreachable, unoperable and trapping controls are listed",
        evidence:
          "A categorised list distinguishing the three failure kinds.",
        levels: [
          "Failures described generally.",
          "Listed without distinguishing the kinds.",
          "All three kinds distinguished with specific controls named.",
          "As adequate, and every custom control was explicitly checked for trapping.",
        ],
        remediation:
          "Go through each custom control and try to enter, operate and leave it. Record which of the three fails.",
        recheck: "The categorised list.",
      },
      {
        criterion: "The most blocking failure was repaired properly",
        evidence:
          "A repair implementing the key table, with no pointer-based workaround.",
        levels: [
          "Repair offers a mouse alternative instead.",
          "Repaired partially, leaving the control operable but not conventional.",
          "Repaired to the key table, keyboard-only.",
          "As adequate, and the repair was re-tested with the pointer unavailable.",
        ],
        remediation:
          "Take the m09 key table for that control and implement each row; a workaround does not satisfy the criterion.",
        recheck: "The repair and re-test.",
      },
      {
        criterion: "Key-table rows are marked satisfied or failed",
        evidence:
          "Your m09 tables annotated with results per row and defects named.",
        levels: [
          "Tables not used.",
          "Overall pass or fail without row detail.",
          "Row-level results with defects stated.",
          "As adequate, and untested rows are marked untested rather than assumed.",
        ],
        remediation:
          "Walk each row of the table against the build and mark the result.",
        recheck: "The annotated tables.",
      },
    ],
    repairs: [
      "If the attempt used a pointer, repeat it with the mouse unavailable.",
      "If failures are undifferentiated, separate unreachable, unoperable and trapping.",
      "If a repair adds a pointer route, replace it with keyboard operation.",
      "If tables are unmarked, walk them row by row against the build.",
    ],
    portfolio:
      "A keyboard-only walkthrough with named failures and one repair is direct evidence of accessible practice, and it costs an afternoon.",
    resource: keyboardPatterns,
    resources: [
      {
        ...keyboardPatterns,
        section:
          "The patterns for the custom controls you use, read for expected keys and focus behaviour.",
        purpose: "Supplies the specification your repair implements.",
        minutes: "45–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; the pages carry no date. Guidance rather than a conformance standard, covering semantics and keys only.",
        fallbackId: "R14",
      },
      {
        ...easyChecks,
        section: "The keyboard access check.",
        purpose:
          "Gives the self-runnable procedure for the reachability and focus parts of this test.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary only; passing is not conformance and is not testing with disabled people.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l07-v1",
    module: "m11",
    week: 11,
    day: 7,
    level: 3,
    areas: [11],
    guided: true,
    title: "Forms that do not exclude",
    objective:
      "Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.",
    bringForward: "Your m08 field table and the m07 error wording.",
    prerequisite: "Your field table and error messages.",
    why: "Forms are where accessibility failures cost money directly: a person who cannot complete the form cannot buy, book or apply.",
    teach: [
      "Every field needs a programmatically associated label, not a nearby word.",
      "Group related fields so their shared question is announced with them.",
      "Instructions belong before the field and must be associated with it.",
      "Errors must say what to fix, be reachable, and be announced when they appear.",
      "Do not rely on placeholder text, colour or position to carry meaning.",
    ],
    explanation: [
      "A label has to be associated with its field, not merely near it. Visually adjacent text is not a label to a screen reader, which is why a form that looks perfectly clear can announce a series of unlabelled edit fields. The assigned tutorial covers the association explicitly, and it is the single most common failure in forms.",
      "Grouping matters when several fields answer one question — a date split into three, a set of radio options, an address block. Without a group, each field is announced alone and the question they belong to is lost. With one, the person hears the question then the options, which is how the form reads visually.",
      "Instructions must be associated too. A hint sitting above a field is read at the wrong time, or not at all, unless it is tied to the field. That association is what makes the m08 rule — help before the mistake — work for people who are not reading the layout.",
      "Errors have three obligations here: name the fix, be reachable directly from a summary, and be announced when they appear rather than silently inserted. This is the same wording you already wrote; the difference is that this lesson makes it reach people who are not looking at the screen.",
    ],
    misconception:
      "“The form is accessible because it uses standard fields.” Standard fields help and do not supply labels, grouping, instructions or error association. Those are decisions someone has to make, and by default they are not made.",
    example:
      "The booking form was rebuilt. Each field gained an associated label, including the ones whose labels had been visual only. The date fields were grouped under one question, and the group name was announced with them. The phone hint moved under the label and was associated with the field. Errors were rewritten to name the fix, a summary at the top linked to each problem field, and the summary was announced when it appeared. The placeholder text disappeared entirely; nothing in the form now depends on it, and one field was removed because no decision needed it.",
    freeToolPath:
      "A local HTML file with proper labels, groups and hints costs an evening and lets you check the behaviour. On paper, specify each association explicitly and mark the announcement behaviour as untested.",
    outputs: [
      "A field table with associated labels, hints and error text",
      "Grouped fields where several answer one question",
      "An error summary that links to each problem field",
      "A statement of what was verified and what remains untested",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and audit",
        instructions: [
          "Read the assigned sections on labels, grouping, instructions and errors.",
          "Audit your form against each: label, hint, error, grouping.",
        ],
      },
      {
        minutes: 30,
        title: "Associate everything",
        instructions: [
          "Give every field an associated label and hint.",
          "Group fields that answer one question, and name the group.",
          "Remove any placeholder that was carrying meaning.",
        ],
      },
      {
        minutes: 25,
        title: "Rebuild the errors",
        instructions: [
          "Rewrite each error to name the fix.",
          "Add a summary at the top that links to each problem field.",
          "Specify that the summary is announced when it appears.",
        ],
      },
      {
        minutes: 25,
        title: "Test what you can",
        instructions: [
          "Tab through the form and confirm labels and hints are reachable in order.",
          "Trigger errors and check the summary and links behave.",
          "Record anything you cannot verify without a build.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Update the field table with associations and error text.",
          "List the untested behaviour explicitly.",
          "Save the table and the test notes.",
        ],
      },
    ],
    check: [
      {
        question: "Why is nearby text not a label?",
        answer:
          "Because the association has to be explicit for assistive technology. Visually adjacent text leaves the field announced as an unlabelled input.",
      },
      {
        question: "When do fields need grouping?",
        answer:
          "When several answer one question — a split date, a radio set, an address. Without a group each field is announced alone and the question is lost.",
      },
      {
        question: "What does an error summary need to do?",
        answer:
          "Name the fix, link to each problem field, and be announced when it appears. A silent summary is invisible to the people who most need it.",
      },
    ],
    rubric: [
      "Every field has an associated label and hint",
      "Related fields are grouped and the group is named",
      "Errors name fixes and a summary links to each field",
      "Untested behaviour is recorded rather than assumed",
    ],
    criteria: [
      {
        criterion: "Every field has an associated label and hint",
        evidence:
          "A field table specifying the association for each label and hint, with no meaning left in placeholders.",
        levels: [
          "Visual labels only, or placeholders used as labels.",
          "Labels associated but hints left unassociated.",
          "Both associated for every field.",
          "As adequate, and a field was removed because it served no decision.",
        ],
        remediation:
          "List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously.",
        recheck: "The field table.",
      },
      {
        criterion: "Related fields are grouped and the group is named",
        evidence:
          "Groups specified for multi-field questions with the shared question named.",
        levels: [
          "No grouping.",
          "Visual grouping only.",
          "Groups specified with names.",
          "As adequate, and the group name is the question rather than a section label.",
        ],
        remediation:
          "Find every place several fields answer one question and specify the group and its name.",
        recheck: "The grouping specification.",
      },
      {
        criterion: "Errors name fixes and a summary links to each field",
        evidence:
          "Rewritten errors plus a linked summary with announcement behaviour specified.",
        levels: [
          "Errors describe the problem only.",
          "Fixes named but no linked summary.",
          "Fixes, summary links and announcement all specified.",
          "As adequate, and the specification says what happens when several fields fail at once.",
        ],
        remediation:
          "Rewrite each error as the action to take, then add the summary and its links.",
        recheck: "The error specification.",
      },
      {
        criterion: "Untested behaviour is recorded rather than assumed",
        evidence:
          "A list of what was checked in a build and what could not be.",
        levels: [
          "Behaviour claimed without testing.",
          "Testing implied without a list.",
          "Verified and unverified items both listed.",
          "As adequate, and the list names which untested item is most likely to fail.",
        ],
        remediation:
          "Split your claims into two lists: observed in a build, and specified but untested.",
        recheck: "The two lists.",
      },
    ],
    repairs: [
      "If labels are visual only, specify the association for each field.",
      "If multi-field questions are ungrouped, group and name them.",
      "If errors describe problems, rewrite them as fixes and add a linked summary.",
      "If behaviour is claimed, test it or mark it untested.",
    ],
    portfolio:
      "An accessible field table is directly usable by an engineer and shows the level of specification a designer can own.",
    resource: forms,
    resources: [
      {
        ...forms,
        section:
          "Labels, grouping controls, instructions, validating input and user notifications.",
        purpose: "Supplies every requirement this lesson applies to the form.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form content or persuasion; implemented behaviour still needs testing in a build.",
        fallbackId: "R10",
      },
      {
        ...wcag,
        section:
          "The criteria on labels, instructions, error identification and error suggestion at level A and AA.",
        purpose:
          "Names the criteria your rebuilt form is meeting so the mapping stays traceable.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. An index of the standard; reading it is not conformance.",
        fallbackId: "R41",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l08-v1",
    module: "m11",
    week: 11,
    day: 8,
    level: 3,
    areas: [11],
    guided: true,
    title: "Images, icons and the words that replace them",
    objective:
      "Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.",
    bringForward: "Your m08 screens, icons and any charts.",
    prerequisite: "Your screens with their images and icons.",
    why: "Alternative text is writing, not markup. Written badly it is noise; written well it is the only version of the image some people get.",
    teach: [
      "Three kinds: informative, decorative, and functional — each handled differently.",
      "Informative alt text carries the information, not a description of the picture.",
      "Decorative images take empty alt text so they are skipped, not announced.",
      "An icon that is a control takes the name of the action, not the shape.",
      "Text in an image is invisible to search, translation and screen readers.",
    ],
    explanation: [
      "The first decision is what the image is for. An informative image adds something the surrounding text does not: a photograph showing what a class involves, a diagram carrying a relationship. Its alternative text must carry that same information in words, which is usually shorter than people expect and never begins with “image of”.",
      "Decorative images add mood and no information, and announcing them wastes the reader's time. They take empty alternative text so assistive technology skips them entirely. The mistake is describing them helpfully, which produces a screen reader announcing “abstract green background pattern” between the price and the button.",
      "A functional image is a control: an icon button, a logo linking home. Its alternative text is the action or destination — “Remove from shortlist”, “Home” — never the shape. This is the same rule as your m08 action labels: the person needs the outcome, not the picture.",
      "Text baked into an image is invisible to screen readers, to translation, to search and to anyone who enlarges it. Prices, dates and offers set inside a promotional image are the common case, and the alternative text has to reproduce all of it — which is usually the argument for not putting the text in the image at all.",
    ],
    misconception:
      "“Every image needs alt text describing it.” Every image needs a decision. Decorative images need empty alt text; describing them makes the experience worse, and long descriptions of photographs that add nothing are a common way of appearing to do the work.",
    example:
      "Fourteen images and icons were classified. Two were informative: the class photograph, whose alt text became “Six people at a pottery wheel in a bright studio”, and the availability chart, whose alternative text carried the counts. Nine were decorative and took empty alt text, including the background pattern that had previously been announced. Three were functional: the shortlist heart became “Add to shortlist”, the logo became “Home”, and the filter icon became “Filters”. One promotional image had the price set inside it; the text was moved out of the image entirely rather than duplicated in alt text.",
    freeToolPath:
      "Writing. If your prototype is a local HTML file you can add the alt attributes and check them; on paper, write the alt text beside each image in the specification.",
    outputs: [
      "Every image classified informative, decorative or functional",
      "Alt text written for informative and functional images",
      "Empty alt specified for decorative images",
      "Any text inside images identified and moved out",
    ],
    steps: [
      {
        minutes: 20,
        title: "Inventory and classify",
        instructions: [
          "List every image, icon and illustration in your screens.",
          "Classify each informative, decorative or functional.",
          "Mark any image containing text.",
        ],
      },
      {
        minutes: 30,
        title: "Write the informative alt text",
        instructions: [
          "Write what the image tells the reader, not what it looks like.",
          "Keep it as short as the information allows.",
          "Never start with image of or picture of.",
        ],
      },
      {
        minutes: 20,
        title: "Name the functional ones",
        instructions: [
          "Give each icon control the name of its action or destination.",
          "Match the wording to your m08 action labels.",
        ],
      },
      {
        minutes: 25,
        title: "Handle decoration and embedded text",
        instructions: [
          "Specify empty alt text for decorative images.",
          "Move any text out of images into real text.",
          "Where it cannot move, reproduce it fully in the alt text and record why.",
        ],
      },
      {
        minutes: 25,
        title: "Test by removal",
        instructions: [
          "Read the screen with every image replaced by its alt text.",
          "Check nothing essential disappeared and nothing noisy appeared.",
          "Save the classification and the alt text.",
        ],
      },
    ],
    check: [
      {
        question: "What should informative alt text contain?",
        answer:
          "The information the image carries, in words. Not a description of its appearance, and not a caption repeated from the surrounding text.",
      },
      {
        question: "Why do decorative images take empty alt text?",
        answer:
          "So they are skipped. Describing them inserts noise between the things the reader actually needs.",
      },
      {
        question: "What is wrong with text inside an image?",
        answer:
          "It is invisible to screen readers, translation and search, and it does not reflow when enlarged. The usual fix is to take the text out of the image.",
      },
    ],
    rubric: [
      "Every image is classified into one of the three kinds",
      "Informative alt text carries information, not appearance",
      "Functional images are named by action",
      "Text inside images is identified and moved out",
    ],
    criteria: [
      {
        criterion: "Every image is classified into one of the three kinds",
        evidence:
          "A complete inventory with a classification per item, including icons.",
        levels: [
          "No classification.",
          "Images classified but icons ignored.",
          "Everything classified including icons and illustrations.",
          "As adequate, and one image is reclassified after asking what it actually tells the reader.",
        ],
        remediation:
          "List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional.",
        recheck: "The classified inventory.",
      },
      {
        criterion: "Informative alt text carries information, not appearance",
        evidence:
          "Alt text stating what the image tells the reader, with no image-of prefixes.",
        levels: [
          "Descriptions of appearance or filenames.",
          "Some informative text mixed with descriptions.",
          "All informative images carry their information in words.",
          "As adequate, and one alt text is shorter than the original description because the surrounding text already carried part of it.",
        ],
        remediation:
          "For each image, write what a reader would lose without it, then make that the alt text.",
        recheck: "The alt text list.",
      },
      {
        criterion: "Functional images are named by action",
        evidence:
          "Icon controls named by their action or destination, consistent with your action labels.",
        levels: [
          "Icons named by shape.",
          "Some named by action.",
          "All functional images named by action or destination.",
          "As adequate, and the names match the visible labels used elsewhere for the same actions.",
        ],
        remediation:
          "Rename each icon control after what it does, using the same words as your m08 labels.",
        recheck: "The functional names.",
      },
      {
        criterion: "Text inside images is identified and moved out",
        evidence:
          "A list of images containing text, with the text moved into real text or fully reproduced with a reason.",
        levels: [
          "Embedded text unnoticed.",
          "Identified but left with partial alt text.",
          "Moved out, or fully reproduced with the reason recorded.",
          "As adequate, and the decision references the reflow and translation cost.",
        ],
        remediation:
          "Find every image containing words and move those words into text; reproduce them only where the image cannot change.",
        recheck: "The embedded-text list.",
      },
    ],
    repairs: [
      "If icons are unclassified, classify them and name the functional ones.",
      "If alt text describes appearance, rewrite it as the information carried.",
      "If decorative images are described, specify empty alt text.",
      "If images contain text, move the text out.",
    ],
    portfolio:
      "An alt-text table with classifications is a small artefact that demonstrates you treat accessibility as writing rather than markup.",
    resource: easyChecks,
    resources: [
      {
        ...easyChecks,
        section: "The alternative text check.",
        purpose:
          "Gives the self-runnable check and the classification this lesson applies.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary only; it does not teach how to write good alternative text, which is the work here.",
        fallbackId: "R28",
      },
      {
        ...structure,
        section:
          "The passages on how images relate to surrounding content and headings.",
        purpose:
          "Places images in the page structure so alt text does not duplicate nearby text.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Structural semantics rather than content writing.",
        fallbackId: "R14",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l09-v1",
    module: "m11",
    week: 11,
    day: 9,
    level: 3,
    areas: [11],
    guided: true,
    title: "Motion, media and time limits",
    objective:
      "Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.",
    bringForward:
      "Your m09 motion audit and reduced-motion pairs, and any media or timed states.",
    prerequisite: "Your m09 motion work and any timed or media elements.",
    why: "Automatic movement, missing captions and unannounced timeouts each exclude people completely rather than inconveniencing them.",
    teach: [
      "Anything moving for more than a few seconds needs a way to pause or stop it.",
      "Nothing should flash rapidly; it can trigger seizures.",
      "Video and audio need captions or a transcript, and both are writing work.",
      "Time limits need warning, extension, or removal.",
      "Reduced motion is a request from the person, not a preference to override.",
    ],
    explanation: [
      "Automatically moving content — a carousel, an animated banner, a live-updating region — competes for attention and, for some people, prevents reading entirely. If it moves for more than a few seconds it needs a pause control, and the pause has to be reachable by keyboard and visible without hovering. This is one of the least-implemented requirements in ordinary products.",
      "Rapid flashing is the one accessibility failure that can cause direct physical harm. If your design contains anything that flashes more than a couple of times a second — a loading effect, a video transition, an alert — it should not, and no visual justification outweighs that.",
      "Captions and transcripts are content work, not a technical step. Captions serve deaf and hard-of-hearing people, and also everyone in a noisy room or without headphones; a transcript additionally serves people who prefer to read, who want to search the content, or whose connection cannot carry the video. If you cannot produce them, the honest response is not to publish the media as the only route to the information.",
      "Time limits appear in more places than teams remember: a held place, a session timeout, a code that expires, a form that clears. Each needs warning before it expires, a way to extend where possible, and preservation of what the person had entered. This is your m07 payment work meeting the criterion that says so explicitly.",
    ],
    misconception:
      "“Captions are the video platform's job.” Automatic captions are frequently wrong in ways that change meaning, particularly with names, numbers and accents. If the video carries information, someone has to check them, and that someone is on your team.",
    example:
      "Three problems and three fixes. The class carousel rotated every four seconds with no pause; it was replaced with a static set of three cards, which also removed a motion problem for reduced-motion users. The introductory video had automatic captions that rendered the studio name as three different things; they were corrected by hand and a transcript was published beside the video. The held-place timer expired silently after ten minutes, losing the form; it now warns at two minutes, offers an extension, and preserves entered details either way. Nothing in the product flashes.",
    freeToolPath:
      "Writing captions and transcripts by hand costs time and no money. Pause controls and timer warnings are specification work; test them in a local HTML file if you have one.",
    outputs: [
      "An audit of automatic motion with a pause or removal decision",
      "Captions or a transcript specified for any media",
      "Time limits with warning, extension and preservation",
      "A confirmation that nothing flashes rapidly",
    ],
    steps: [
      {
        minutes: 25,
        title: "Audit automatic motion",
        instructions: [
          "List everything that moves without the person starting it.",
          "For each, decide: remove, or provide a visible pause control.",
          "Check the pause is keyboard reachable.",
        ],
      },
      {
        minutes: 30,
        title: "Handle media",
        instructions: [
          "List any audio or video in your product.",
          "Specify captions and a transcript, and who will write them.",
          "If neither is possible, provide the information in text instead.",
        ],
      },
      {
        minutes: 25,
        title: "Find the time limits",
        instructions: [
          "List every timeout: held places, sessions, codes, forms.",
          "Specify a warning before expiry and an extension where possible.",
          "Specify that entered data survives expiry.",
        ],
      },
      {
        minutes: 25,
        title: "Check flashing and reduced motion",
        instructions: [
          "Confirm nothing flashes more than a couple of times per second.",
          "Re-check your reduced-motion pairs still cover everything here.",
          "Test with the reduced-motion setting enabled.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write the decisions and who is responsible for captions.",
          "Note anything you could not fix and why.",
          "Save the audit with the fixes.",
        ],
      },
    ],
    check: [
      {
        question: "What does automatically moving content require?",
        answer:
          "A way to pause or stop it if it runs beyond a few seconds, reachable by keyboard and visible without hovering — or removal, which is often the better design anyway.",
      },
      {
        question: "Why are automatic captions insufficient?",
        answer:
          "Because they misrender names, numbers and accents in ways that change meaning. If the video carries information, someone has to check them.",
      },
      {
        question: "What does a time limit owe the person?",
        answer:
          "A warning before it expires, an extension where possible, and preservation of what they had entered. A silent expiry that clears a form is a designed loss.",
      },
    ],
    rubric: [
      "Automatic motion is removed or pausable",
      "Media has checked captions or a transcript",
      "Time limits warn, extend and preserve",
      "Flashing and reduced motion are both confirmed",
    ],
    criteria: [
      {
        criterion: "Automatic motion is removed or pausable",
        evidence:
          "A list of moving elements with a decision each, and a keyboard-reachable pause where kept.",
        levels: [
          "Automatic motion left uncontrolled.",
          "Pause added but only reachable by pointer.",
          "Each element removed or given a keyboard-reachable pause.",
          "As adequate, and one element was removed because it explained nothing.",
        ],
        remediation:
          "List everything that moves on its own and decide each; a carousel with no pause is the usual offender.",
        recheck: "The motion decisions.",
      },
      {
        criterion: "Media has checked captions or a transcript",
        evidence:
          "Captions corrected by a person, or a transcript, or the information provided as text instead.",
        levels: [
          "Media published with no alternative.",
          "Automatic captions accepted unchecked.",
          "Captions checked or a transcript written, with ownership named.",
          "As adequate, and the transcript is offered as an alternative route rather than a fallback.",
        ],
        remediation:
          "Watch the video with the captions on and correct every error; names and numbers first.",
        recheck: "The captions or transcript.",
      },
      {
        criterion: "Time limits warn, extend and preserve",
        evidence:
          "Each timeout specified with warning timing, extension and data preservation.",
        levels: [
          "Silent expiry.",
          "Warning specified without extension or preservation.",
          "All three specified for every timeout.",
          "As adequate, and the specification says what happens if the person is away when the warning appears.",
        ],
        remediation:
          "List every timer in the product and write the three behaviours for each.",
        recheck: "The timeout specifications.",
      },
      {
        criterion: "Flashing and reduced motion are both confirmed",
        evidence:
          "A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.",
        levels: [
          "Neither checked.",
          "One checked.",
          "Both checked and recorded.",
          "As adequate, and the reduced-motion test was run on a device with the setting enabled.",
        ],
        remediation:
          "Enable reduced motion, walk the product, and separately confirm nothing flashes.",
        recheck: "The two confirmations.",
      },
    ],
    repairs: [
      "If something moves on its own, remove it or add a keyboard-reachable pause.",
      "If captions are automatic, correct them by hand and add a transcript.",
      "If a timer expires silently, add warning, extension and preservation.",
      "If reduced motion was not re-checked, enable it and walk the product.",
    ],
    portfolio:
      "Time-limit handling is rarely designed and easy to show: the warning, the extension and the preserved data make a small, convincing sequence.",
    resource: reducedMotion,
    resources: [
      {
        ...reducedMotion,
        section: "The reduce value and where the setting lives on each platform.",
        purpose: "Lets you test the reduced-motion behaviour on your own device.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only, and says nothing about media, captions or time limits.",
        fallbackId: "R13",
      },
      {
        ...wcag,
        section:
          "The criteria on pause, stop and hide, on flashing, on captions, and on timing adjustable.",
        purpose:
          "Names the specific requirements this lesson satisfies.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. An index of the standard; captions and transcripts remain content work it does not teach.",
        fallbackId: "R41",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l10-v1",
    module: "m11",
    week: 11,
    day: 10,
    level: 3,
    areas: [11],
    guided: true,
    title: "Listening to your own product",
    objective:
      "Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.",
    bringForward:
      "Your heading outlines, alt text, form associations and key tables.",
    prerequisite: "Your structure, alt text and form specifications.",
    why: "Reading about screen readers teaches you the concepts. Hearing your own product teaches you what your decisions actually produced.",
    teach: [
      "Every major platform ships a screen reader: NVDA, VoiceOver or TalkBack.",
      "Learn five commands, not fifty: next heading, next link, next form field, read all, stop.",
      "Listen for what is missing: unlabelled fields, unannounced changes, silent images.",
      "You are a sighted occasional user; your session is preliminary, not representative.",
      "Nothing here substitutes for testing with people who use these tools daily.",
    ],
    explanation: [
      "The assigned article is explicit about both halves of this lesson: how to run a basic screen-reader test, and what a sighted occasional tester may not conclude from it. Both matter. Running the test will show you concrete failures — an unlabelled field, an image announced as a filename, a status change nobody hears — and it will not tell you whether your product is usable for someone who navigates this way every day.",
      "Five commands are enough to start. Navigating by heading tells you whether your outline works. Navigating by link and by form field tells you whether your labels carry. Read-all tells you the order and what is announced. Stop is what you will need most in the first ten minutes. Learning the whole command set is a different project.",
      "Listen for absence rather than presence. The failures are usually silence where something happened: a filter applied and nothing announced, an error appearing with no notification, an icon button read as “button”. Your m09 focus rules and m11 form associations are exactly what these gaps test.",
      "Say what your session establishes. It establishes that specific failures exist — that is real and useful. It does not establish that the product works, because you know where everything is, you can see the screen, and you are not using the software the way a daily user does. The catalog row for this reading says the same thing, and your write-up should repeat it.",
    ],
    misconception:
      "“I tested with a screen reader, so the product is accessible for blind users.” You found some failures. A sighted person who can see the screen and knows the design is not simulating blindness, and a competent write-up says so in the same paragraph as the findings.",
    example:
      "Twenty minutes with VoiceOver on the researcher's own phone. Navigating by heading confirmed the m06 outline worked. Six failures were found: the shortlist icon was announced as “button”, the availability dot was silent so full classes sounded identical to available ones, applying a filter announced nothing at all, the error summary was not announced when it appeared, one image was read as its filename, and the date group's question was not announced with its fields. Each mapped to a decision made earlier in the course. The write-up recorded the device, the software, the twenty minutes, and stated that no person who uses a screen reader daily had been involved.",
    freeToolPath:
      "The screen reader already on your device: NVDA on Windows, VoiceOver on Apple devices, TalkBack on Android. All are free and already installed or freely downloadable; no purchase and no account are involved.",
    outputs: [
      "One task attempted with a screen reader, recorded",
      "A list of what was announced and what was missing",
      "Each failure mapped to the design decision behind it",
      "A statement of what your session does and does not establish",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and set up",
        instructions: [
          "Read the assigned article, including what an occasional tester cannot conclude.",
          "Turn on the screen reader for your platform and learn five commands.",
        ],
      },
      {
        minutes: 20,
        title: "Navigate by structure",
        instructions: [
          "Move by heading through one screen and note what you hear.",
          "Move by link and by form field.",
          "Compare with your written outline.",
        ],
      },
      {
        minutes: 35,
        title: "Attempt the task",
        instructions: [
          "Complete one full task listening rather than looking where you can.",
          "Record every silence where something happened.",
          "Record anything announced that was noise.",
        ],
      },
      {
        minutes: 25,
        title: "Map failures to decisions",
        instructions: [
          "For each failure, name the earlier decision that caused it.",
          "Mark which are specification failures and which are build defects.",
        ],
      },
      {
        minutes: 15,
        title: "Write the boundary",
        instructions: [
          "Record the device, software, version and duration.",
          "State that no daily screen-reader user was involved.",
          "Save the findings with the boundary statement.",
        ],
      },
    ],
    check: [
      {
        question: "What are the five commands worth learning first?",
        answer:
          "Next heading, next link, next form field, read all, and stop. They test your outline, your labels and your announcement behaviour without learning the whole tool.",
      },
      {
        question: "What are you listening for?",
        answer:
          "Absence. Silence where something changed, fields announced without labels, images read as filenames, and status that is never spoken at all.",
      },
      {
        question: "What does your own session establish?",
        answer:
          "That specific failures exist, which is genuinely useful. It does not establish usability for daily screen-reader users, and the write-up must say so.",
      },
    ],
    rubric: [
      "A real screen-reader session was run and recorded",
      "Missing announcements are listed specifically",
      "Failures map to earlier design decisions",
      "The limits of a self-run session are stated plainly",
    ],
    criteria: [
      {
        criterion: "A real screen-reader session was run and recorded",
        evidence:
          "A record naming the software, device, duration and task attempted.",
        levels: [
          "Not run.",
          "Run briefly without recording conditions.",
          "Run with conditions and observations recorded.",
          "As adequate, and structure navigation was used as well as reading straight through.",
        ],
        remediation:
          "Turn on the screen reader already on your device and attempt one task, writing what you hear.",
        recheck: "The session record.",
      },
      {
        criterion: "Missing announcements are listed specifically",
        evidence:
          "A list of silences and noise, each naming the element and what should have been said.",
        levels: [
          "General impressions.",
          "Some failures named without the expected announcement.",
          "Each failure names the element and what was missing.",
          "As adequate, and the list distinguishes silence from misleading announcements.",
        ],
        remediation:
          "For each failure write what you heard and what you should have heard.",
        recheck: "The failure list.",
      },
      {
        criterion: "Failures map to earlier design decisions",
        evidence:
          "Each failure traced to a specification or a build defect.",
        levels: [
          "Failures listed without causes.",
          "Causes guessed generally.",
          "Each traced to a decision or marked a build defect.",
          "As adequate, and at least one failure traces to a decision you made earlier in the course.",
        ],
        remediation:
          "For each failure, find the specification that should have prevented it. If none exists, that is the gap.",
        recheck: "The mapped failures.",
      },
      {
        criterion: "The limits of a self-run session are stated plainly",
        evidence:
          "A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.",
        levels: [
          "Findings presented as proof of accessibility.",
          "A vague acknowledgement of limits.",
          "The limit stated plainly with the conditions recorded.",
          "As adequate, and the statement names what testing with daily users would add.",
        ],
        remediation:
          "Copy the boundary the assigned article states and apply it to your own session in your own words.",
        recheck: "The boundary statement.",
      },
    ],
    repairs: [
      "If no session was run, run one with the screen reader already on your device.",
      "If failures are general, name the element and the missing announcement.",
      "If causes are unmapped, trace each to a specification or a defect.",
      "If limits are unstated, add the boundary paragraph.",
    ],
    portfolio:
      "A screen-reader session with its boundary clearly stated is credible; the same session presented as proof of accessibility is not, and experienced reviewers can tell the difference immediately.",
    resource: screenReaders,
    resources: [
      {
        ...screenReaders,
        section:
          "How to run a basic test, and what a sighted occasional tester may not conclude from it.",
        purpose:
          "Supplies both the procedure and the boundary this lesson enforces.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Use the free software already on your device: NVDA, VoiceOver or TalkBack. Your own session never substitutes for testing with disabled participants.",
        fallbackId: "R41",
      },
      {
        ...easyChecks,
        section: "The checks you can pair with a listening session.",
        purpose:
          "Provides complementary self-checks so failures can be confirmed visually as well.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l11-v1",
    module: "m11",
    week: 11,
    day: 11,
    level: 3,
    areas: [11],
    guided: true,
    title: "Access in the Indian context",
    objective:
      "Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.",
    bringForward:
      "Your m06 label stress test and your m08 screens.",
    prerequisite: "Your label work and current screens.",
    why: "Most accessibility guidance you have read is written for English-language, high-bandwidth, single-device contexts. Your learner and her users are frequently in none of those.",
    teach: [
      "India's government publishes its own guidelines covering accessibility, local language and mobile.",
      "Language support is an access requirement, not a growth feature.",
      "Scripts differ: line height, sorting and input methods all change.",
      "A slow or intermittent connection excludes people as effectively as a missing label.",
      "Shared devices change what personal and private mean in your design.",
    ],
    explanation: [
      "The assigned Indian guidelines are the primary source available to you for this context, covering accessibility alongside local-language and mobile requirements. Comparing two of their requirements against your own work is a concrete exercise, and it will usually surface something the international guidance did not: a format assumption, a language assumption, or an expectation about connectivity.",
      "Language is an access question. A person who reads Hindi or Tamil more comfortably than English meets an English-only interface as a barrier in the same sense as an unlabelled field. Full localisation may be beyond your project, and the honest intermediate steps are real: plain language, avoiding idiom, not embedding text in images, and making formats — dates, numbers, addresses — follow local convention.",
      "Scripts have mechanical consequences you can test now. Indic scripts need more line height than Latin text of the same size, and clipping matras or conjuncts makes text unreadable rather than merely tight. Sorting order differs by language, so an alphabetical list is a different list. Input methods differ too, which affects field behaviour and what autocomplete can offer.",
      "Connectivity and device sharing are access conditions. A product that only works on a fast connection excludes people at particular times and places rather than permanently, which is exactly the situational barrier this module started with. A shared family phone raises questions about staying signed in, notifications and what appears on a lock screen — questions your m07 authentication work opened and this lesson closes.",
    ],
    misconception:
      "“Localisation comes after launch.” Layouts built to English string lengths, text baked into images and hard-coded date formats are decisions that make later localisation expensive. The cheap steps are design decisions available now.",
    example:
      "Two requirements were compared. The first, on local-language support, exposed that dates were formatted in a way that assumed one convention and that the month names were English-only; both were changed. The second, on mobile, exposed a page weight that took eleven seconds to become usable on a throttled connection. Separately, a Hindi rendering of the navigation clipped matras until line height was increased, and the class list's alphabetical sort was noted as language-dependent and left with a recorded limitation. The shared-device question from m07 was revisited: notifications now say “a class you booked” rather than naming the class on the lock screen.",
    freeToolPath:
      "The guidelines site with its free PDF manual, your browser's throttling, and hand-written text in a second script if your prototype cannot render one. No paid localisation service is required for any of this.",
    outputs: [
      "Two named requirements compared against your design",
      "A language check covering formats, embedded text and plain wording",
      "A script rendering check with line height and clipping",
      "A slow-connection check with a recorded time to usable",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and choose two requirements",
        instructions: [
          "Open the assigned guidelines and choose two requirements relevant to your product.",
          "Write each in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Compare against your design",
        instructions: [
          "Check your screens against each requirement.",
          "Record where you meet it, where you do not, and what would be needed.",
        ],
      },
      {
        minutes: 25,
        title: "Check language and formats",
        instructions: [
          "Check date, number and address formats against local convention.",
          "Find any text embedded in images and move it out.",
          "Simplify wording that depends on idiom.",
        ],
      },
      {
        minutes: 25,
        title: "Check script and connection",
        instructions: [
          "Render key labels in an Indic script and check for clipping.",
          "Increase line height where characters are cut.",
          "Load on a throttled connection and time when the page becomes usable.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write what you fixed and what remains.",
          "Note where the international guidance and the Indian guidance differ.",
          "Save the comparison with the evidence.",
        ],
      },
    ],
    check: [
      {
        question: "Why is language an accessibility question?",
        answer:
          "Because a person who cannot read the interface cannot use it, whatever its contrast and focus behaviour. The barrier is the same kind; only the cause differs.",
      },
      {
        question: "What changes with a different script?",
        answer:
          "Line height needs, character clipping, sorting order and input methods. A layout tuned to Latin text frequently cuts marks that carry meaning.",
      },
      {
        question: "How does a slow connection exclude people?",
        answer:
          "By making the product unusable at particular times and places. It is a situational barrier with the same effect as a permanent one, and it is measurable with throttling.",
      },
    ],
    rubric: [
      "Two named requirements are compared with results",
      "Formats and embedded text are checked and fixed",
      "A second script was rendered and clipping checked",
      "Time to usable on a slow connection is recorded",
    ],
    criteria: [
      {
        criterion: "Two named requirements are compared with results",
        evidence:
          "Two requirements quoted in your own words with a met, unmet or partial result each.",
        levels: [
          "No comparison.",
          "Requirements named without checking your design.",
          "Both compared with specific results.",
          "As adequate, and one requirement produced a change to the design.",
        ],
        remediation:
          "Choose two requirements that touch your product and walk your screens against each.",
        recheck: "The comparison.",
      },
      {
        criterion: "Formats and embedded text are checked and fixed",
        evidence:
          "A check of date, number and address formats, and a list of text moved out of images.",
        levels: [
          "Not checked.",
          "Formats checked but embedded text left.",
          "Both checked with fixes made.",
          "As adequate, and wording was simplified where it depended on idiom.",
        ],
        remediation:
          "List every formatted value and every image containing words, then fix each.",
        recheck: "The format and text list.",
      },
      {
        criterion: "A second script was rendered and clipping checked",
        evidence:
          "Labels rendered in an Indic script, with clipping identified and line height adjusted.",
        levels: [
          "Not attempted.",
          "Attempted without checking for clipping.",
          "Rendered, clipping checked and adjusted.",
          "As adequate, and sorting order is noted as language-dependent.",
        ],
        remediation:
          "Write the labels by hand in the script if your prototype cannot render it, and record that the digital rendering is untested.",
        recheck: "The script check.",
      },
      {
        criterion: "Time to usable on a slow connection is recorded",
        evidence:
          "A throttled load with a recorded time to first usable content.",
        levels: [
          "Not measured.",
          "Loaded slowly without timing.",
          "Timed with the profile recorded.",
          "As adequate, and one change was made because of the result.",
        ],
        remediation:
          "Throttle the connection, disable the cache, and time when the page first becomes usable rather than fully loaded.",
        recheck: "The timing record.",
      },
    ],
    repairs: [
      "If no requirement was compared, choose two and walk your screens against them.",
      "If formats assume one convention, correct them and move text out of images.",
      "If a second script clips, increase line height and re-render.",
      "If the slow load was untimed, measure time to usable and record the profile.",
    ],
    portfolio:
      "This section distinguishes a designer who has worked with Indian and multilingual constraints from one who has read international guidance. Include the script and timing evidence.",
    resource: indiaGuidelines,
    resources: [
      {
        ...indiaGuidelines,
        section:
          "Two requirements of your choice from the accessibility, local-language or mobile sections.",
        purpose:
          "Supplies the India-specific requirements your learner's work will be held to.",
        minutes: "45–60 selected",
        limits:
          "Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Written for government sites; comparing two requirements is the exercise, not reading it end to end.",
        fallbackId: "R41",
      },
      {
        ...i18n,
        section:
          "What internationalization involves: encoding, text expansion, formats and sorting.",
        purpose:
          "Explains the mechanical consequences of language and script differences.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. A short definitional page with no layout guidance; the rendering and timing tests are the practical work.",
        fallbackId: "R10",
      },
    ],
  }),
  withLegacyText({
    id: "m11-l12-v1",
    module: "m11",
    week: 11,
    day: 12,
    level: 3,
    areas: [11],
    guided: true,
    title: "An honest accessibility statement",
    objective:
      "Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.",
    bringForward:
      "Every check from this module and your barrier list.",
    prerequisite: "All check results and your original barrier list.",
    why: "A statement that claims compliance you have not tested is worse than none. A statement that says exactly what you know is a professional artefact.",
    teach: [
      "Say what you tested, with what, on which device, and when.",
      "List known problems openly, with what you intend to do about them.",
      "Distinguish tested from specified but unverified.",
      "Never claim conformance you have not tested; say the target you worked to.",
      "Plan for testing with disabled participants, including what it will cost.",
    ],
    explanation: [
      "An accessibility statement is a factual document, and its usefulness comes from precision. What was checked, with which software, on what device, on what date. Which criteria you worked to. What you found and fixed. What you found and did not fix, and why. What you have not examined at all. Read by someone who relies on assistive technology, that document tells them whether to try, which is the point.",
      "Known problems belong in it. Listing an unfixed problem is not an admission of incompetence; it is information a person can act on, and it commits you publicly to a repair. The alternative — silence — means someone discovers it by being unable to complete a task.",
      "The tested-versus-specified distinction runs through this whole module. You specified associations, key behaviour and announcements; you tested some of them on your own device. Both are real; conflating them turns a design intention into a claim about a build.",
      "Involving disabled participants is the gap this module cannot close by itself, and the plan is part of the deliverable: who you would recruit, through which organisations, with what lead time, and what it would cost in time or compensation. Your recruitment reading gives the lead times, and they are longer than for other participants — a month is realistic, six to eight weeks where cognitive disabilities are involved.",
    ],
    misconception:
      "“We should not publish a statement until everything is fixed.” Then it will never be published. A dated, specific statement with known problems listed is more useful to a person deciding whether to attempt your product than a perfect one that does not exist.",
    example:
      "The statement ran to one page. Tested: keyboard operation of the booking task on Windows with the pointer unavailable; a twenty-minute VoiceOver session on an iPhone; contrast measured for all text pairs; 200 per cent text; greyscale and colour-vision simulation; a throttled load. Found and fixed: nine items, listed. Found and not yet fixed: three, listed with intended dates — the date picker's arrow-key support, the unannounced filter change, and captions for the introductory video. Not tested at all: any use with switch access or voice control, any Android screen reader, and any session with a person who uses assistive technology daily. Target: WCAG 2.2 level AA, worked to and not tested for conformance. Plan: contact two local disability organisations, allow a month, and budget compensation.",
    freeToolPath:
      "One page of plain text. The statement is writing, and the honesty is the whole deliverable.",
    outputs: [
      "A dated statement of what was tested, with what and on which device",
      "Lists of fixed, unfixed and untested items",
      "A stated target level with no untested conformance claim",
      "A plan for testing with disabled participants, with lead times",
    ],
    steps: [
      {
        minutes: 25,
        title: "Collect the evidence",
        instructions: [
          "Gather every check from this module with its date and conditions.",
          "Separate results into fixed, unfixed and untested.",
        ],
      },
      {
        minutes: 30,
        title: "Write the statement",
        instructions: [
          "State what was tested, with what software, on which device and when.",
          "List the known problems with intended repairs.",
          "State the target level and that conformance was not tested.",
        ],
      },
      {
        minutes: 25,
        title: "Write the untested list",
        instructions: [
          "Name what you have not examined, including assistive technologies you do not use.",
          "Say which untested area you think most likely hides a problem.",
        ],
      },
      {
        minutes: 25,
        title: "Plan participant testing",
        instructions: [
          "Read the assigned recruitment guidance on lead times and accommodations.",
          "Name the organisations or routes you would approach.",
          "Write the lead time and what compensation you would offer.",
        ],
      },
      {
        minutes: 15,
        title: "Check the language",
        instructions: [
          "Remove any sentence claiming compliance, conformance or full accessibility.",
          "Add a contact route for someone who meets a barrier.",
          "Save the statement with the evidence behind it.",
        ],
      },
    ],
    check: [
      {
        question: "Why list unfixed problems publicly?",
        answer:
          "Because it tells a person whether to attempt the task and commits you to a repair. The alternative is that they discover it by failing.",
      },
      {
        question: "What is the difference between a target and a claim?",
        answer:
          "A target is what you worked to; a claim is what you tested. Stating the target honestly is normal practice, and claiming untested conformance is not.",
      },
      {
        question: "Why does the plan for participant testing belong here?",
        answer:
          "Because it is the gap self-testing cannot close. Naming the route, the lead time and the cost turns an intention into something that can actually be scheduled.",
      },
    ],
    rubric: [
      "The statement names what was tested, how and when",
      "Fixed, unfixed and untested are listed separately",
      "No untested conformance is claimed",
      "A participant testing plan names routes, lead times and compensation",
    ],
    criteria: [
      {
        criterion: "The statement names what was tested, how and when",
        evidence:
          "A dated list of checks with software, device and task named.",
        levels: [
          "General claims about accessibility.",
          "Checks named without conditions or dates.",
          "Each check with software, device and date.",
          "As adequate, and the duration of each test is included so the depth is visible.",
        ],
        remediation:
          "Go back through the module and record the conditions for each check you ran.",
        recheck: "The tested list.",
      },
      {
        criterion: "Fixed, unfixed and untested are listed separately",
        evidence:
          "Three distinct lists, with intended repairs for the unfixed items.",
        levels: [
          "One undifferentiated list, or only fixed items.",
          "Fixed and unfixed listed; untested omitted.",
          "All three separated with repairs named for the unfixed.",
          "As adequate, and the untested list names the area most likely to hide a problem.",
        ],
        remediation:
          "Split your results into the three categories; anything you specified but did not verify goes in untested.",
        recheck: "The three lists.",
      },
      {
        criterion: "No untested conformance is claimed",
        evidence:
          "A stated target level with an explicit statement that conformance was not tested.",
        levels: [
          "Compliance or conformance claimed.",
          "Ambiguous wording that implies conformance.",
          "Target stated and the absence of a conformance test stated plainly.",
          "As adequate, and the statement says what a conformance evaluation would require.",
        ],
        remediation:
          "Search the statement for compliant, conformant and accessible-as-a-claim, and rewrite each as what you worked to and what you tested.",
        recheck: "The revised statement.",
      },
      {
        criterion:
          "A participant testing plan names routes, lead times and compensation",
        evidence:
          "A written plan with organisations or routes, realistic lead times and an offer.",
        levels: [
          "No plan.",
          "An intention without routes or timings.",
          "Routes, lead times and compensation all stated.",
          "As adequate, and the plan accounts for accommodations the sessions themselves will need.",
        ],
        remediation:
          "Use the assigned lead times — up to a month, longer for cognitive disabilities — and name two real routes you could approach.",
        recheck: "The plan.",
      },
    ],
    repairs: [
      "If claims are general, replace them with what you tested and when.",
      "If untested items are missing, add the list.",
      "If conformance is implied, state the target and the absence of testing.",
      "If the plan is an intention, add routes, lead times and compensation.",
    ],
    portfolio:
      "The accessibility statement is the module's case-study artefact and the clearest signal of professional judgement in the whole course: it is a document whose value comes from what it admits.",
    resource: wcag,
    resources: [
      {
        ...wcag,
        section:
          "The criteria you worked to, revisited to confirm what your statement can and cannot say.",
        purpose:
          "Keeps the statement's target accurate and its claims bounded.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. An index of the standard; conformance is a property of a tested build, not of a design that consulted the criteria.",
        fallbackId: "R41",
      },
      {
        ...participants,
        section:
          "Recruiting disabled participants, lead times and accommodations.",
        purpose:
          "Supplies realistic timings and requirements for the testing this module could not do.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. It advises contacting organisations at least a month ahead, longer where cognitive disabilities are involved, and gives no compensation amounts.",
        fallbackId: "R08",
      },
    ],
  }),
];
