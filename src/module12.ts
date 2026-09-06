import { withLegacyText, type Lesson } from "./teaching";
// Module 12 teaches enough web to design for it honestly: what a browser
// actually does, what HTML and CSS can express, where JavaScript becomes
// necessary and what it costs. The goal is not to make Haru an engineer. It
// is that she can build a real responsive page, read the code someone else
// wrote, ask precise questions and know when an answer is evasive.
const mdn = {
  title: "MDN: core learning modules",
  id: "R15",
  url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core",
};
const responsive = {
  title: "web.dev: learn responsive design",
  id: "R16",
  url: "https://web.dev/learn/design/",
};
const devtools = {
  title: "Chrome DevTools: network features",
  id: "R46",
  url: "https://developer.chrome.com/docs/devtools/network/reference",
};
const svg = {
  title: "MDN: SVG from scratch",
  id: "R49",
  url: "https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch",
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
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
const prototypes = {
  title: "GOV.UK: making prototypes",
  id: "R12",
  url: "https://www.gov.uk/service-manual/design/making-prototypes",
};
export const module12: Lesson[] = [
  withLegacyText({
    id: "m12-l01-v1",
    module: "m12",
    week: 12,
    day: 1,
    level: 4,
    areas: [13],
    guided: true,
    title: "What happens between a tap and a page",
    objective:
      "Trace one real page load from request to rendered content, name each stage, and identify the two stages your design decisions can affect.",
    bringForward: "Your m10 running prototype or any real page you use often.",
    prerequisite: "A browser and any page you can load repeatedly.",
    why: "Design decisions about images, fonts and structure become performance decisions here. You cannot weigh them without knowing what the browser is doing.",
    teach: [
      "A page load is a sequence: request, response, parse, fetch more, render, become interactive.",
      "HTML arrives first; everything it references is a further request.",
      "Fonts, images and scripts each delay something different.",
      "The network tab shows the real sequence, not the intended one.",
      "Design choices decide how much is requested and in what order.",
    ],
    explanation: [
      "When someone opens a page, the browser asks a server for a document, receives HTML, and starts reading it. Every stylesheet, font, image and script referenced in that HTML becomes another request, and each one takes time proportional to its size and the connection. This is why a design with four typefaces and a hero video is a performance decision made at the moment of designing, long before anyone writes code.",
      "The stages fail differently. A slow stylesheet delays the first paint, so the person sees nothing. A slow font can leave text invisible or shifting when it swaps. A slow script can leave a page that looks finished and does not respond, which is the most confusing failure of all because the person taps and nothing happens.",
      "The network tab in your browser shows the real sequence: what was requested, in what order, how big it was and how long it took. Reading it once for a real page is more instructive than any amount of general advice about performance, and it costs ten minutes.",
      "Two stages are yours. How much is requested — the number and weight of images, fonts and scripts — is a design decision. And what appears first is a structural decision, because the browser renders what it has: a page whose text arrives before its images shows something useful immediately, and one that waits for everything shows nothing.",
    ],
    misconception:
      "“Performance is the engineer's problem.” Engineers optimise what exists. The number of typefaces, the size of the hero image and whether the design can show anything before the images arrive are decided in the design, and they usually dominate.",
    example:
      "One real class page traced in the network tab: the document arrived in 300ms, then two stylesheets, three font files, eleven images and four scripts — twenty-one requests before the page was usable, taking eleven seconds on a throttled connection. The two design-owned findings: three typefaces were being loaded and only two were used, and the hero image was 1.8 MB and appeared above every piece of text, so nothing readable appeared until it arrived. Both were design decisions; neither needed an engineer to identify.",
    freeToolPath:
      "Any Chromium browser's developer tools, which are free and installed already. No account, extension or performance service is required.",
    outputs: [
      "A traced load with each stage named",
      "A request list with sizes and times",
      "Two design-owned findings from the trace",
      "A note of what appeared first and what the person could do while waiting",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the sequence",
        instructions: [
          "Read the assigned introduction to how the web works.",
          "Write the stages of a page load in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Trace a real load",
        instructions: [
          "Open the network tab, disable the cache and reload a real page.",
          "Record the number of requests, the total size and the time.",
          "Note which requests are images, fonts, scripts and styles.",
        ],
      },
      {
        minutes: 25,
        title: "Throttle it",
        instructions: [
          "Set a slow connection profile and reload.",
          "Record when the first text appeared and when the page became usable.",
          "Note anything that shifted position as it loaded.",
        ],
      },
      {
        minutes: 25,
        title: "Find the design-owned costs",
        instructions: [
          "List every request that exists because of a design decision.",
          "Identify two you could remove or reduce without changing the product.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write the two findings as design changes, not engineering tasks.",
          "Save the request list and the timings.",
        ],
      },
    ],
    check: [
      {
        question: "Why does a slow script fail differently from a slow image?",
        answer:
          "A slow image leaves a gap; a slow script can leave a page that looks complete and does not respond, so people tap repeatedly and conclude it is broken.",
      },
      {
        question: "Which parts of load performance does a designer own?",
        answer:
          "How much is requested — typefaces, image weight, decorative assets — and what can render before the rest arrives. Both are decided while designing.",
      },
      {
        question: "Why disable the cache when tracing?",
        answer:
          "Because your second visit is not a first visit. The cache hides exactly the cost a new person pays.",
      },
    ],
    rubric: [
      "The load stages are named in the learner's own words",
      "A real trace records requests, sizes and times",
      "A throttled load records first text and time to usable",
      "Two findings are stated as design changes",
    ],
    criteria: [
      {
        criterion: "The load stages are named in the learner's own words",
        evidence: "A written sequence from request to interactive.",
        levels: [
          "No sequence.",
          "Copied terminology without meaning attached.",
          "Stages named and explained in the learner's own words.",
          "As adequate, and each stage names what could delay it.",
        ],
        remediation:
          "Write the sequence as a list and add one sentence per stage saying what the browser is doing.",
        recheck: "The written sequence.",
      },
      {
        criterion: "A real trace records requests, sizes and times",
        evidence:
          "A recorded trace with counts, total weight and duration, cache disabled.",
        levels: [
          "No trace.",
          "Traced with the cache enabled, so costs are hidden.",
          "Traced with the cache disabled and figures recorded.",
          "As adequate, and requests are grouped by type so the biggest category is visible.",
        ],
        remediation:
          "Reload with the cache disabled and record the totals from the network tab.",
        recheck: "The trace record.",
      },
      {
        criterion: "A throttled load records first text and time to usable",
        evidence:
          "Timings for first readable content and interactivity under a slow profile.",
        levels: [
          "Not throttled.",
          "Throttled without timings.",
          "Both timings recorded with the profile named.",
          "As adequate, and any content shifting during load is noted.",
        ],
        remediation:
          "Set a slow profile, reload, and time when you could first read and first act.",
        recheck: "The throttled timings.",
      },
      {
        criterion: "Two findings are stated as design changes",
        evidence:
          "Two specific changes a designer could make, traced to requests in the list.",
        levels: [
          "Findings framed as engineering work.",
          "One design-owned finding.",
          "Two, each traced to a specific request.",
          "As adequate, and one is quantified — the weight or time it would save.",
        ],
        remediation:
          "Look at the largest requests and ask which exist because of a design choice.",
        recheck: "The two findings.",
      },
    ],
    repairs: [
      "If the trace used the cache, reload with it disabled.",
      "If timings are missing, record first text and time to usable.",
      "If findings read as engineering tasks, restate them as design changes.",
      "If the sequence is copied, rewrite it in your own words.",
    ],
    portfolio:
      "A trace with two design-owned findings is a small artefact that shows you can talk to engineers about performance in their own terms.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The introductory modules on how the web works and what a browser does with HTML, CSS and JavaScript.",
        purpose:
          "Supplies the sequence and vocabulary this module is built on.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the free written articles; exclude any promoted paid partner courses. It teaches implementation, not design judgement.",
        fallbackId: "R16",
      },
      {
        ...devtools,
        section:
          "The network panel: request list, sizes, timing and throttling profiles.",
        purpose:
          "Gives the instrument for seeing the real sequence rather than the intended one.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a dropped connection.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l02-v1",
    module: "m12",
    week: 12,
    day: 2,
    level: 4,
    areas: [13],
    guided: true,
    title: "HTML that means something",
    objective:
      "Build one page of your product in semantic HTML, with the heading outline and regions from m11, and verify the structure without looking at the styling.",
    bringForward: "Your m11 heading outline and region map.",
    prerequisite: "Your m11 outline and region map, and a text editor.",
    why: "The elements you choose are what assistive technology, search and translation read. Styling is what everyone else reads.",
    teach: [
      "Elements carry meaning: a heading, a list, a button, a link are different things.",
      "A link goes somewhere; a button does something. Swapping them breaks behaviour.",
      "Landmarks and headings give the page its navigable structure.",
      "Lists, tables and definitions exist because content has shapes.",
      "If the page makes sense with the stylesheet removed, the markup is sound.",
    ],
    explanation: [
      "Semantic markup is the cheapest accessibility work available, because the browser and assistive technology already know what a heading, a list and a button are. Using a generic container with a class instead throws that knowledge away and requires you to rebuild it — the keyboard behaviour, the announcement, the focus — by hand and usually incompletely.",
      "The link-versus-button distinction is the one that causes the most trouble. A link navigates; it can be opened in a new tab, copied and shared, and it responds to enter. A button performs an action in place and responds to enter and space. A link styled as a button that submits a form, or a button that navigates, breaks both sets of expectations and the keyboard behaviour with them.",
      "Content has shapes, and matching them costs nothing. A set of classes is a list; a schedule is a table; a term with its definition is a definition list. Marking them correctly gives you announcement, navigation and often layout behaviour without extra work, and it makes the document comprehensible to anything that reads it later.",
      "The stylesheet test is the fastest verification you have: disable the styling and read the page. If it reads as a sensible document — title, sections, lists, forms with labels — the markup is doing its job. If it reads as a stream of undifferentiated text, no amount of styling will make it navigable for anyone who is not looking at it.",
    ],
    misconception:
      "“It looks the same, so the markup does not matter.” It looks the same to you. To a screen reader, a search engine, a translation tool and a browser's reader mode, a page of generic containers has no structure at all.",
    example:
      "The class detail page was rebuilt in semantic HTML: one page title, four section headings at the right levels, the class list as a list, the schedule as a table with header cells, the booking action as a button and the “see other dates” as a link. Removing the stylesheet produced a readable document with a clear outline. Three earlier mistakes surfaced during the rebuild: the availability status had been a coloured div with no text, the filter controls were links that performed actions, and the price table was built from divs so its columns had no headers.",
    freeToolPath:
      "A text editor and a browser. Disabling the stylesheet is a single browser setting or a one-line change; no extension, framework or build tool is needed.",
    outputs: [
      "One page in semantic HTML with correct heading levels",
      "Landmarks for banner, navigation, main and footer",
      "Links and buttons used for their correct purposes",
      "A stylesheet-off reading with problems found and fixed",
    ],
    steps: [
      {
        minutes: 30,
        title: "Read and plan the markup",
        instructions: [
          "Read the assigned HTML module sections on structure and semantics.",
          "Map your m11 outline onto heading elements and landmarks.",
        ],
      },
      {
        minutes: 35,
        title: "Build the page",
        instructions: [
          "Write the page using elements that match the content's shape.",
          "Use a button for actions and a link for navigation.",
          "Include the real content, not placeholder text.",
        ],
      },
      {
        minutes: 25,
        title: "Read it without styling",
        instructions: [
          "Disable the stylesheet and read the page top to bottom.",
          "Mark anything that loses meaning or order.",
          "Fix by changing elements, not by adding styling back.",
        ],
      },
      {
        minutes: 20,
        title: "Check headings and landmarks",
        instructions: [
          "Confirm one page title and no skipped levels.",
          "Confirm the main content can be reached directly.",
          "Run the applicable preliminary checks.",
        ],
      },
      {
        minutes: 10,
        title: "Record",
        instructions: [
          "List the mistakes the rebuild revealed.",
          "Save the page and the unstyled reading notes.",
        ],
      },
    ],
    check: [
      {
        question: "What is the difference between a link and a button?",
        answer:
          "A link navigates and can be opened, copied and shared; a button performs an action in place. Their keyboard behaviour differs too, so swapping them breaks expectations.",
      },
      {
        question: "Why does the stylesheet-off test work?",
        answer:
          "Because it shows the document as anything non-visual reads it. If the structure survives without styling, it exists; if not, it was only ever visual.",
      },
      {
        question: "What do you lose by using generic containers?",
        answer:
          "Announcement, navigation, keyboard behaviour and machine readability — all of which then have to be rebuilt by hand, usually incompletely.",
      },
    ],
    rubric: [
      "Elements match the content's shape",
      "Headings and landmarks follow the m11 outline",
      "Links and buttons are used correctly",
      "The unstyled reading was run and problems fixed",
    ],
    criteria: [
      {
        criterion: "Elements match the content's shape",
        evidence:
          "Lists as lists, tables with header cells, forms with labelled fields.",
        levels: [
          "Generic containers throughout.",
          "Some semantic elements, with lists or tables built from containers.",
          "Elements match content throughout.",
          "As adequate, and one earlier design decision was corrected because no element fitted it.",
        ],
        remediation:
          "Go through the page asking what each block of content is, then use the element that means that.",
        recheck: "The revised markup.",
      },
      {
        criterion: "Headings and landmarks follow the m11 outline",
        evidence:
          "One page title, correct nesting, and named landmarks matching the region map.",
        levels: [
          "Headings chosen visually.",
          "Correct headings without landmarks.",
          "Both correct and matching the m11 work.",
          "As adequate, and a route to the main content skips the navigation.",
        ],
        remediation:
          "Compare the built page against your outline line by line and correct the levels.",
        recheck: "The heading and landmark check.",
      },
      {
        criterion: "Links and buttons are used correctly",
        evidence:
          "Every action a button, every navigation a link, with no styled substitutes.",
        levels: [
          "Links perform actions or buttons navigate.",
          "Mostly correct with one or two substitutions.",
          "Correct throughout.",
          "As adequate, and any control that looked like the wrong type was restyled rather than re-elemented.",
        ],
        remediation:
          "List every control and ask whether it goes somewhere or does something, then use the matching element.",
        recheck: "The control list.",
      },
      {
        criterion: "The unstyled reading was run and problems fixed",
        evidence:
          "A record of reading the page without styling, with fixes made in the markup.",
        levels: [
          "Not run.",
          "Run without fixes.",
          "Run, problems named and fixed in the markup.",
          "As adequate, and the fixes changed elements rather than adding styling back.",
        ],
        remediation:
          "Disable the stylesheet, read the page aloud, and fix every place the meaning collapses.",
        recheck: "The unstyled reading notes.",
      },
    ],
    repairs: [
      "If containers stand in for lists or tables, replace them with the real elements.",
      "If headings were chosen visually, rebuild them from the m11 outline.",
      "If a link performs an action, make it a button.",
      "If the unstyled page is unreadable, fix the markup rather than the styling.",
    ],
    portfolio:
      "A semantic page with an unstyled reading is proof that your accessibility work reached the build rather than stopping at the specification.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The structuring content module: document structure, headings, lists, links and buttons.",
        purpose: "Supplies the elements and their meanings for this rebuild.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles and exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
      {
        ...structure,
        section: "Headings, regions and their relationship to the page outline.",
        purpose:
          "Connects the markup back to the structure decisions you already made.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Structural semantics only; it does not cover CSS or layout.",
        fallbackId: "R14",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l03-v1",
    module: "m12",
    week: 12,
    day: 3,
    level: 4,
    areas: [13],
    guided: true,
    title: "CSS: the box, the flow and the cascade",
    objective:
      "Style your semantic page using your m08 tokens as custom properties, and explain in writing why three specific rules produce the layout they do.",
    bringForward: "Your semantic page and your m08 token sheet.",
    prerequisite: "Your built page and token sheet.",
    why: "Understanding the cascade is what turns CSS from guesswork into design. Most frustration with it comes from not knowing which rule won.",
    teach: [
      "Everything is a box: content, padding, border, margin.",
      "Normal flow stacks blocks and wraps inline content; layout modes change that.",
      "Specificity and order decide which rule wins when two conflict.",
      "Custom properties turn your token sheet into real, changeable values.",
      "Inheritance is why setting a value once at the top is usually right.",
    ],
    explanation: [
      "The box model explains most layout surprises. Padding grows a box inward from its edge, margin pushes other boxes away, and whether the width you set includes the padding depends on one property. Knowing this converts “why is this 24 pixels too wide” from a mystery into arithmetic.",
      "Normal flow is the default behaviour you get for free: blocks stack, text wraps, and the page grows as tall as it needs. Every layout mode you add — flex, grid — is a deliberate departure from that, and a page that keeps normal flow wherever it can is more robust when content changes length, which it always does.",
      "The cascade decides conflicts by specificity and order, and most confusion comes from not being able to say which rule won. Your browser's element inspector shows you the winner and the rules it overrode; reading it once when something surprises you is the fastest way to learn the rules for good.",
      "Custom properties are where your token sheet becomes real. Declaring your colours, spacing and type steps once at the top and referring to them everywhere means a change happens in one place, the values have names in the code as well as in your documentation, and an engineer reading it sees the same vocabulary you use.",
    ],
    misconception:
      "“CSS is unpredictable.” It is deterministic and mostly unfamiliar. The three things that produce nearly all surprises — the box model, the cascade and inheritance — take an afternoon to learn and remove the guesswork permanently.",
    example:
      "The class page was styled with the token sheet declared as custom properties at the top: five neutrals, three semantic colours, six spacing values, six type steps. Three rules were then explained in writing. Why the card was wider than its container: padding was being added to a set width, fixed by including padding in the box sizing. Why the heading colour would not change: a more specific rule elsewhere was winning, visible in the inspector. Why the body font applied everywhere without being repeated: inheritance, set once on the root.",
    freeToolPath:
      "A text editor, a browser and its element inspector. No preprocessor, framework or build step is required, and avoiding them at this stage is deliberate: you are learning what the browser does.",
    outputs: [
      "A styled page using custom properties from your token sheet",
      "Written explanations of three rules and why they win",
      "One layout surprise diagnosed with the inspector",
      "A note of what you set once and inherited rather than repeating",
    ],
    steps: [
      {
        minutes: 30,
        title: "Read the fundamentals",
        instructions: [
          "Read the assigned CSS sections on the box model, flow and the cascade.",
          "Write the box model in your own words with a diagram.",
        ],
      },
      {
        minutes: 30,
        title: "Declare your tokens",
        instructions: [
          "Write your token sheet as custom properties at the top of the stylesheet.",
          "Use the same names as your documentation.",
          "Style the page referring to them, never to raw values.",
        ],
      },
      {
        minutes: 25,
        title: "Diagnose a surprise",
        instructions: [
          "Find something that does not look as you expected.",
          "Use the inspector to see which rule won and what it overrode.",
          "Write the explanation before changing anything.",
        ],
      },
      {
        minutes: 25,
        title: "Explain three rules",
        instructions: [
          "Choose three rules in your stylesheet and explain what each does and why.",
          "Include one about the cascade and one about inheritance.",
        ],
      },
      {
        minutes: 10,
        title: "Record",
        instructions: [
          "Note anything you set once and inherited rather than repeating.",
          "Save the stylesheet and the explanations.",
        ],
      },
    ],
    check: [
      {
        question: "Why is a box sometimes wider than the width you set?",
        answer:
          "Because padding and border may be added to that width. Which behaviour applies depends on the box-sizing property, and knowing it turns the surprise into arithmetic.",
      },
      {
        question: "How do you find out which rule won?",
        answer:
          "The element inspector shows the applied rules and the overridden ones. Reading it is faster and more reliable than adding importance until something changes.",
      },
      {
        question: "Why declare tokens as custom properties?",
        answer:
          "Because it makes your design vocabulary real in the code, changes happen in one place, and an engineer sees the same names you use in documentation.",
      },
    ],
    rubric: [
      "The stylesheet uses tokens as custom properties",
      "Three rules are explained including cascade and inheritance",
      "One surprise was diagnosed with the inspector",
      "Values are set once and inherited where sensible",
    ],
    criteria: [
      {
        criterion: "The stylesheet uses tokens as custom properties",
        evidence:
          "Custom properties declared once with your documented names, referenced throughout.",
        levels: [
          "Raw values throughout.",
          "Some properties declared but raw values still used.",
          "Tokens declared and referenced consistently.",
          "As adequate, and the names match the m08 token sheet exactly.",
        ],
        remediation:
          "Search the stylesheet for literal colours and spacing values and replace each with its token.",
        recheck: "The stylesheet.",
      },
      {
        criterion:
          "Three rules are explained including cascade and inheritance",
        evidence:
          "Three written explanations covering what the rule does and why it applies.",
        levels: [
          "No explanations.",
          "Explanations describing effect without mechanism.",
          "Three explanations including a cascade case and an inheritance case.",
          "As adequate, and one explains a rule you originally wrote by trial and error.",
        ],
        remediation:
          "Choose three rules and write, for each, what it does and why it wins or applies.",
        recheck: "The explanations.",
      },
      {
        criterion: "One surprise was diagnosed with the inspector",
        evidence:
          "A recorded diagnosis naming the winning rule and what it overrode.",
        levels: [
          "Fixed by trial and error.",
          "Diagnosed loosely without naming the rules.",
          "Diagnosed with the inspector and written up before the fix.",
          "As adequate, and the fix removed a conflict rather than adding specificity.",
        ],
        remediation:
          "Open the inspector on the element and read the applied and overridden rules, then write what happened.",
        recheck: "The diagnosis.",
      },
      {
        criterion: "Values are set once and inherited where sensible",
        evidence:
          "A note of inherited values, with repetition removed.",
        levels: [
          "Values repeated per element.",
          "Some inheritance used without awareness.",
          "Inheritance used deliberately and documented.",
          "As adequate, and one repeated declaration was removed as redundant.",
        ],
        remediation:
          "Find values repeated on many elements and set them once higher up instead.",
        recheck: "The stylesheet and note.",
      },
    ],
    repairs: [
      "If raw values persist, replace them with custom properties.",
      "If explanations describe effects only, add why the rule applies.",
      "If a surprise was fixed by trial and error, diagnose it properly.",
      "If values repeat, set them once and let them inherit.",
    ],
    portfolio:
      "Showing a token sheet expressed as custom properties links your design system work directly to the build, which few junior portfolios do.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The CSS styling basics module: the box model, values, the cascade, inheritance and custom properties.",
        purpose: "Supplies the mechanics this lesson makes explicit.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
      {
        ...responsive,
        section: "The layout chapter, read for how flow behaves before layout modes are added.",
        purpose:
          "Explains why keeping normal flow where possible produces more robust pages.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Design-focused rather than a CSS reference; the mechanics come from the MDN module.",
        fallbackId: "R15",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l04-v1",
    module: "m12",
    week: 12,
    day: 4,
    level: 4,
    areas: [13],
    guided: true,
    title: "Responsive layout, built rather than drawn",
    objective:
      "Make your page work from about 320 pixels to a wide screen without horizontal scrolling, using flexible layout rather than fixed breakpoint copies.",
    bringForward: "Your m07 three-width drawings and behaviour notes.",
    prerequisite: "Your three-width drawings and the built page.",
    why: "You have drawn responsive layouts for five modules. Building one shows you which of those drawings were possible and which were wishes.",
    teach: [
      "Start narrow: the small layout is the content in priority order.",
      "Let content decide breakpoints, not device names.",
      "Flexible layouts wrap and grow; fixed ones break at unexpected sizes.",
      "Test between breakpoints, where most failures live.",
      "No horizontal scrolling of the page, at any width, ever.",
    ],
    explanation: [
      "Building narrow first is not a slogan; it is the order that produces fewer decisions. The narrow layout is your content in priority order with almost no arrangement, and each wider layout adds arrangement as space allows. Starting wide means removing things, which is where content gets hidden rather than reordered.",
      "Breakpoints belong where your content breaks, not where a device is rumoured to be. Widen the browser slowly and watch: the point where a line becomes uncomfortably long, where a card becomes too narrow to read, where a gap opens — those are your breakpoints, and they are specific to this design.",
      "Flexible layout does most of the work without breakpoints at all: content that wraps when it runs out of room, columns that grow within limits, images that scale to their container. Layouts built from fixed sizes need a breakpoint for every problem, and they fail between the sizes you tested.",
      "The gaps between breakpoints are where failures hide, because that is where nobody looks. Drag the window slowly across the whole range once. Anything that overlaps, clips, or produces horizontal scrolling appears immediately, and horizontal scrolling of the page is never acceptable — content that must scroll sideways gets its own container.",
    ],
    misconception:
      "“Responsive means three layouts for phone, tablet and desktop.” Devices come in every size, and people resize windows, split screens and enlarge text. A layout that only works at three widths fails at the dozens in between.",
    example:
      "The class page was built narrow first: title, key facts, action, then description, with the image below. Widening slowly revealed three genuine breakpoints — one where the key facts could sit in a row, one where the description could take a wider column, one where a side panel became viable. None matched a device name. Between the second and third, the card grid produced a single orphaned card, fixed with a flexible wrap rather than another breakpoint. At 320 pixels the schedule table caused horizontal scrolling of the page; it became records instead, matching the m08 decision.",
    freeToolPath:
      "A browser window you can drag, plus the device toolbar for a phone-sized viewport. Everything in this lesson works in a text editor and a browser with no build step.",
    outputs: [
      "A page working from about 320 pixels upward",
      "Breakpoints chosen from content, with the reason for each",
      "A slow width sweep with failures found between breakpoints",
      "No horizontal page scrolling at any width",
    ],
    steps: [
      {
        minutes: 30,
        title: "Build narrow first",
        instructions: [
          "Lay out the page at about 320 pixels with content in priority order.",
          "Use flexible sizing rather than fixed widths.",
          "Check nothing requires horizontal scrolling.",
        ],
      },
      {
        minutes: 30,
        title: "Widen and watch",
        instructions: [
          "Drag the window wider slowly.",
          "Note each point where the layout becomes uncomfortable.",
          "Add a breakpoint only where content demands it, and record why.",
        ],
      },
      {
        minutes: 25,
        title: "Sweep the whole range",
        instructions: [
          "Drag from narrow to wide in one pass.",
          "Record every overlap, clip, orphan and scroll.",
          "Fix with flexible rules before adding another breakpoint.",
        ],
      },
      {
        minutes: 20,
        title: "Test the hard content",
        instructions: [
          "Use your longest real label and largest real number.",
          "Enlarge the text to about 200 per cent and sweep again.",
          "Fix what breaks by letting containers grow.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "List your breakpoints with the content reason for each.",
          "Compare the built result with your m07 drawings and note the differences.",
          "Save the page and the notes.",
        ],
      },
    ],
    check: [
      {
        question: "Why build narrow first?",
        answer:
          "Because it forces content priority and adds arrangement as space allows. Starting wide leads to removing things, which hides content rather than reordering it.",
      },
      {
        question: "Where do breakpoints belong?",
        answer:
          "Where your content stops working, found by widening slowly. Device-named breakpoints describe hardware that keeps changing and your content never.",
      },
      {
        question: "Why sweep the whole width range?",
        answer:
          "Because failures live between the sizes people test. One slow drag finds overlaps, orphans and scrolling that fixed-width checks miss entirely.",
      },
    ],
    rubric: [
      "The page works from about 320 pixels with no horizontal scroll",
      "Breakpoints are justified by content",
      "A full width sweep was run and failures fixed",
      "Long content and enlarged text were tested",
    ],
    criteria: [
      {
        criterion:
          "The page works from about 320 pixels with no horizontal scroll",
        evidence:
          "A narrow rendering with all content reachable and no page-level horizontal scrolling.",
        levels: [
          "Horizontal scrolling or clipped content at narrow widths.",
          "Works narrow but content is hidden rather than reordered.",
          "Works from 320 with content reordered and reachable.",
          "As adequate, and any genuinely wide content scrolls inside its own container.",
        ],
        remediation:
          "Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container.",
        recheck: "The narrow rendering.",
      },
      {
        criterion: "Breakpoints are justified by content",
        evidence:
          "Each breakpoint recorded with the content problem that prompted it.",
        levels: [
          "Device-named breakpoints.",
          "Breakpoints without reasons.",
          "Each justified by an observed content problem.",
          "As adequate, and one problem was solved with flexible rules instead of a breakpoint.",
        ],
        remediation:
          "Remove your breakpoints, widen slowly, and add each one back only where you can name the problem.",
        recheck: "The breakpoint list.",
      },
      {
        criterion: "A full width sweep was run and failures fixed",
        evidence:
          "A record of sweeping the whole range with the failures found and repaired.",
        levels: [
          "Only fixed widths checked.",
          "Swept without recording failures.",
          "Swept, failures recorded and fixed.",
          "As adequate, and fixes preferred flexible rules over new breakpoints.",
        ],
        remediation:
          "Drag from narrow to wide in one pass and write down everything that misbehaves.",
        recheck: "The sweep notes.",
      },
      {
        criterion: "Long content and enlarged text were tested",
        evidence:
          "Renderings using the longest real content and text at about 200 per cent.",
        levels: [
          "Tested with short sample content only.",
          "One of the two tested.",
          "Both tested with breakages fixed by letting containers grow.",
          "As adequate, and the result is compared with the m07 drawings, noting which were unbuildable.",
        ],
        remediation:
          "Substitute your longest real values, enlarge the text and sweep again.",
        recheck: "The hard-content renderings.",
      },
    ],
    repairs: [
      "If the page scrolls sideways, fix the overflowing element or give it its own container.",
      "If breakpoints are device-named, re-derive them from content.",
      "If only fixed widths were checked, sweep the whole range.",
      "If sample content was used, substitute the longest real values.",
    ],
    portfolio:
      "A built responsive page with content-derived breakpoints is stronger evidence than three static mockups, because it demonstrates the behaviour rather than illustrating it.",
    resource: responsive,
    resources: [
      {
        ...responsive,
        section:
          "The layout and typography chapters, read for reflow, priority and content-driven breakpoints.",
        purpose: "Supplies the responsive reasoning this build applies.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Web-focused; reading it is not the same as having tested a layout, which is why the sweep is the deliverable.",
        fallbackId: "R15",
      },
      {
        ...mdn,
        section:
          "The CSS layout module: flexible boxes, grid and sizing.",
        purpose: "Gives the mechanics for building the layouts flexibly.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Implementation reference; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l05-v1",
    module: "m12",
    week: 12,
    day: 5,
    level: 4,
    areas: [13],
    guided: true,
    title: "Images that do not cost the page",
    objective:
      "Put real images into your page at appropriate sizes and formats, produce one icon as hand-written SVG, and measure the weight you saved.",
    bringForward: "Your built page and the images your design uses.",
    prerequisite: "Your built page and its images.",
    why: "Images are usually most of a page's weight, and almost all of that weight is a design decision.",
    teach: [
      "Serve an image near the size it is displayed; a 3000-pixel photo in a 400-pixel slot wastes everything.",
      "Photographs and flat graphics want different formats.",
      "SVG is text: it scales, it is small, and you can write it by hand.",
      "Images below the fold can load later; images above it should not.",
      "Every image needs its alternative text decision from m11 carried through.",
    ],
    explanation: [
      "Serving an image far larger than its display size is the commonest and cheapest performance mistake. The browser downloads every pixel and then throws most of them away, so a photograph that appears at 400 pixels wide should be delivered near that size, with an allowance for higher-density screens rather than for every possible screen.",
      "Format follows content. Photographs compress well in formats designed for continuous tone; flat graphics, logos and icons belong in a vector format, where they are small, sharp at every size and colourable with your tokens. Getting this wrong in either direction is expensive — a logo as a large photograph-style file, or a photograph as a vector.",
      "SVG being text has a consequence worth exploiting: you can write an icon by hand in a text editor, without any design tool or account, and change it with a stylesheet. This is the course's account-free route to producing and exporting vector artwork, and doing it once removes any dependency on a hosted design tool for simple marks.",
      "Loading later is a legitimate technique for images the person has not scrolled to, and a mistake for the image at the top, which is often what the page is about. Decide per image rather than applying one rule, and remember that an image with no reserved space causes the layout jump you spent m08 and m09 preventing.",
    ],
    misconception:
      "“The developer will optimise the images.” They can compress what you supply. Whether the page has a full-width photograph at all, and whether it appears above the first line of text, are design decisions that dominate the outcome.",
    example:
      "Eleven images were reviewed. The hero photograph was 1.8 MB at 3000 pixels wide, displayed at 720; re-exported at an appropriate size and format it became 96 KB. Six flat icons were replaced with hand-written SVG totalling under 4 KB, styled with the token colours rather than shipped in three colour variants. Four below-the-fold photographs were set to load later, with their space reserved so nothing jumped. Total page weight fell from 2.4 MB to 340 KB, and time to usable on a throttled connection fell from eleven seconds to three.",
    freeToolPath:
      "A text editor for the SVG, following the assigned tutorial, and any free image resizer or your operating system's own export. No hosted design account is required to produce or export vector artwork.",
    outputs: [
      "Images served near their display size, with formats chosen deliberately",
      "One icon written by hand as SVG and styled with tokens",
      "A loading decision per image, with reserved space",
      "Before-and-after page weight and time to usable",
    ],
    steps: [
      {
        minutes: 25,
        title: "Audit the images",
        instructions: [
          "List every image with its file size and its display size.",
          "Mark any served more than twice its display width.",
          "Mark flat graphics currently shipped as photographs.",
        ],
      },
      {
        minutes: 30,
        title: "Resize and re-format",
        instructions: [
          "Export each photograph near its display size, allowing for dense screens.",
          "Move flat graphics to a vector format.",
          "Re-measure the total page weight.",
        ],
      },
      {
        minutes: 30,
        title: "Write an SVG by hand",
        instructions: [
          "Follow the assigned tutorial to write one icon in a text editor.",
          "Give it a title and use your token colours.",
          "Check it scales cleanly and is under a few kilobytes.",
        ],
      },
      {
        minutes: 20,
        title: "Decide loading per image",
        instructions: [
          "Mark which images may load later and which must not.",
          "Reserve space for every image so nothing shifts.",
          "Carry the m11 alternative-text decision into the markup.",
        ],
      },
      {
        minutes: 15,
        title: "Measure the result",
        instructions: [
          "Re-run the throttled load and record the new timings.",
          "Record before-and-after weight.",
          "Save the audit and the measurements.",
        ],
      },
    ],
    check: [
      {
        question: "Why does serving an oversized image cost so much?",
        answer:
          "The browser downloads every pixel and discards most of them. The waste is proportional to the excess, and it is paid on the slowest connections first.",
      },
      {
        question: "Why is SVG worth writing by hand?",
        answer:
          "Because it is text: small, scalable, styleable with your tokens, and producible with no design account. Once you have written one, simple marks never need a tool again.",
      },
      {
        question: "When should an image not load later?",
        answer:
          "When it is what the page is about or appears above the first content. Deferring that one delays the thing the person came for.",
      },
    ],
    rubric: [
      "Images are served near their display size in suitable formats",
      "One icon is hand-written SVG using tokens",
      "Loading decisions are per image with space reserved",
      "Weight and timing improvements are measured",
    ],
    criteria: [
      {
        criterion: "Images are served near their display size in suitable formats",
        evidence:
          "An audit with before-and-after sizes and format decisions per image.",
        levels: [
          "Original files used at any size.",
          "Some resizing without format decisions.",
          "Sizes and formats both addressed with figures recorded.",
          "As adequate, and a design change removed an image rather than optimising it.",
        ],
        remediation:
          "List each image's file size against its display width and re-export the worst offenders.",
        recheck: "The image audit.",
      },
      {
        criterion: "One icon is hand-written SVG using tokens",
        evidence:
          "An SVG written in a text editor, styled with token colours, with a title.",
        levels: [
          "No SVG produced.",
          "SVG exported from a tool rather than written.",
          "Hand-written, token-styled and titled.",
          "As adequate, and it replaced multiple colour variants of the same icon.",
        ],
        remediation:
          "Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough.",
        recheck: "The SVG file.",
      },
      {
        criterion: "Loading decisions are per image with space reserved",
        evidence:
          "A per-image loading decision and reserved space preventing layout shift.",
        levels: [
          "One rule applied to all images.",
          "Decisions made without reserving space.",
          "Per-image decisions with space reserved.",
          "As adequate, and the above-the-fold image is explicitly excluded from deferral.",
        ],
        remediation:
          "Mark each image above or below the fold and set the loading behaviour accordingly, reserving space in both cases.",
        recheck: "The loading decisions.",
      },
      {
        criterion: "Weight and timing improvements are measured",
        evidence:
          "Before-and-after page weight and throttled time to usable.",
        levels: [
          "Not measured.",
          "Weight measured without timing.",
          "Both measured under the same conditions.",
          "As adequate, and the conditions are stated so the comparison is fair.",
        ],
        remediation:
          "Re-run the same throttled profile before and after and record both numbers.",
        recheck: "The measurements.",
      },
    ],
    repairs: [
      "If images are oversized, re-export near their display size.",
      "If flat graphics ship as photographs, convert them to vector.",
      "If one loading rule is applied everywhere, decide per image.",
      "If improvements are unmeasured, re-run the throttled load and record.",
    ],
    portfolio:
      "A before-and-after weight and timing pair, with the design decisions that produced it, is concrete and rare in a design portfolio.",
    resource: svg,
    resources: [
      {
        ...svg,
        section: "Shapes, paths, viewBox, fills and strokes, and text.",
        purpose:
          "Supplies the account-free route to producing and exporting vector artwork by hand.",
        minutes: "90 selected per exercise",
        limits:
          "Free documentation, no account. Verified 2026-09-06. Slower than a visual editor and not a replacement for one; it exists so no exercise depends on a hosted design account.",
        fallbackId: "R15",
      },
      {
        ...devtools,
        section: "Request sizes and timing in the network panel.",
        purpose:
          "Gives the measurement for the before-and-after comparison.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer, not perceived quality; check the images still look right.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l06-v1",
    module: "m12",
    week: 12,
    day: 6,
    level: 4,
    areas: [13],
    guided: true,
    title: "Just enough JavaScript",
    objective:
      "Add one genuinely interactive behaviour to your page with plain JavaScript, keeping it usable when the script fails, and explain what the code does line by line.",
    bringForward: "Your built page and one interaction from your m09 work.",
    prerequisite: "Your built page and an m09 interaction specification.",
    why: "Knowing where JavaScript becomes necessary — and what it costs — is what lets you argue for a simpler solution when one exists.",
    teach: [
      "Much of what people reach for scripts to do, HTML and CSS already do.",
      "Scripts respond to events and change state; that is most of what they are for.",
      "Anything you build with a script, you must also make keyboard operable.",
      "Design for the script failing: slow connection, error, blocked.",
      "You are learning to read and reason about code, not to become an engineer.",
    ],
    explanation: [
      "The first question is whether you need a script at all. Show and hide, expand and collapse, form validation basics, smooth scrolling and many transitions have native or CSS answers that come with keyboard and assistive-technology behaviour already correct. Reaching for a script first means rebuilding all of that by hand, and usually incompletely.",
      "When a script is warranted, its shape is simple: something happens, the script responds, the interface changes. Learning to read that shape — the event, the handler, the change — is enough to follow most front-end code and to ask precise questions about it.",
      "Anything built in script must be keyboard operable and announced, which is the m09 key table meeting the build. Native elements give you this behaviour free; custom ones give you nothing, which is the real cost of building an interaction from scratch and the strongest argument for using what the platform provides.",
      "Scripts fail: connections drop, errors are thrown, corporate networks block files. Design what the person gets when it does — ideally a page that still works with fewer features rather than a blank screen. This is the same graceful-failure thinking as your m07 exception table, one layer down.",
    ],
    misconception:
      "“I do not need to write code, so I do not need to read it.” Reading it is what lets you tell a feasible request from an unreasonable one, understand an estimate and notice when an answer is evasive. Writing a little is how you learn to read.",
    example:
      "The filter panel was built twice. The first version used a script for showing and hiding, and needed keyboard handling, focus management and announcement written by hand. The second used a native disclosure element and needed almost none of it, behaving correctly with the keyboard and announcing its state without any script at all. The genuinely script-requiring behaviour — filtering the list as options change — was written in about twenty lines, explained line by line, and made to fall back to a submit button that reloads with filters applied when the script does not run.",
    freeToolPath:
      "A text editor and a browser console. No framework, build step, package manager or account: plain files are the point at this stage.",
    outputs: [
      "One interaction built with plain JavaScript",
      "A line-by-line explanation of what the code does",
      "A native or CSS alternative considered and recorded",
      "A stated behaviour when the script does not run",
    ],
    steps: [
      {
        minutes: 30,
        title: "Ask whether you need a script",
        instructions: [
          "Read the assigned sections on events and DOM changes.",
          "For your chosen interaction, find any native or CSS answer first.",
          "Record what the native version gives you free.",
        ],
      },
      {
        minutes: 35,
        title: "Build the interaction",
        instructions: [
          "Write the script in plain JavaScript, as short as you can make it.",
          "Attach behaviour to real elements rather than replacing them.",
          "Test with the keyboard as well as the pointer.",
        ],
      },
      {
        minutes: 25,
        title: "Explain the code",
        instructions: [
          "Write what each line does in plain language.",
          "Name the event, the handler and the change.",
          "Mark anything you copied and do not yet understand.",
        ],
      },
      {
        minutes: 20,
        title: "Design the failure",
        instructions: [
          "Disable JavaScript and reload the page.",
          "Record what still works and what does not.",
          "Add a route that works without the script where the task requires it.",
        ],
      },
      {
        minutes: 10,
        title: "Record",
        instructions: [
          "Write what the native alternative would have cost or saved.",
          "Save the code, the explanation and the failure behaviour.",
        ],
      },
    ],
    check: [
      {
        question: "What should you check before writing a script?",
        answer:
          "Whether HTML or CSS already does it. Native behaviour arrives with keyboard support and announcement, which a custom version has to rebuild by hand.",
      },
      {
        question: "Why explain the code line by line?",
        answer:
          "Because reading is the transferable skill. Being able to say what each line does is what lets you follow someone else's code and ask precise questions.",
      },
      {
        question: "Why design for the script not running?",
        answer:
          "Because it sometimes does not: slow connections, errors, blocked files. A page that degrades to fewer features beats a page that shows nothing.",
      },
    ],
    rubric: [
      "A native or CSS alternative was considered first",
      "The interaction works with a keyboard",
      "The code is explained line by line",
      "Behaviour without the script is specified and tested",
    ],
    criteria: [
      {
        criterion: "A native or CSS alternative was considered first",
        evidence:
          "A written record of the alternative and what it would have provided.",
        levels: [
          "Script written without considering alternatives.",
          "Alternative mentioned without evaluation.",
          "Alternative evaluated with what it gives free.",
          "As adequate, and one part of the interaction was replaced by a native element as a result.",
        ],
        remediation:
          "For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide.",
        recheck: "The alternative record.",
      },
      {
        criterion: "The interaction works with a keyboard",
        evidence:
          "A keyboard test of the built interaction against your m09 key table.",
        levels: [
          "Pointer only.",
          "Reachable but not fully operable.",
          "Operable by keyboard and matching the key table.",
          "As adequate, and focus behaviour on open and close matches your m09 rules.",
        ],
        remediation:
          "Test with the pointer unavailable and implement the missing key behaviour.",
        recheck: "The keyboard test.",
      },
      {
        criterion: "The code is explained line by line",
        evidence:
          "Plain-language explanations naming the event, handler and change, with copied lines marked.",
        levels: [
          "No explanation.",
          "General description of the effect.",
          "Line-by-line explanation with unknowns marked honestly.",
          "As adequate, and one line was simplified or removed once it was explained.",
        ],
        remediation:
          "Write a comment for each line; anything you cannot explain, mark and look up.",
        recheck: "The annotated code.",
      },
      {
        criterion: "Behaviour without the script is specified and tested",
        evidence:
          "A recorded test with JavaScript disabled and a working route for the essential task.",
        levels: [
          "Not considered.",
          "Considered without testing.",
          "Tested with the essential task still completable.",
          "As adequate, and the fallback is a real route rather than an error message.",
        ],
        remediation:
          "Disable JavaScript, reload, and add a non-script route for anything essential that broke.",
        recheck: "The no-script test.",
      },
    ],
    repairs: [
      "If no alternative was considered, look one up and record what it offers.",
      "If the interaction is pointer-only, implement the key table.",
      "If the code is unexplained, annotate each line and mark unknowns.",
      "If nothing works without the script, add a fallback route.",
    ],
    portfolio:
      "Showing that you chose a native element over a script, with the reason, demonstrates engineering judgement more convincingly than a complicated custom component.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The scripting module: events, handling them, and changing the document.",
        purpose:
          "Supplies the event-and-change shape this lesson builds and explains.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. This is enough to read and reason about code, not to become an engineer.",
        fallbackId: "R16",
      },
      {
        ...easyChecks,
        section: "The keyboard access check.",
        purpose:
          "Verifies the interaction you built is operable without a pointer.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary only; passing it is not conformance.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l07-v1",
    module: "m12",
    week: 12,
    day: 7,
    level: 4,
    areas: [13],
    guided: true,
    title: "Data that arrives later",
    objective:
      "Fetch data from a public source into your page, and build the loading, empty, error and slow states you specified in m08 so they are real rather than drawn.",
    bringForward: "Your m08 empty, loading and error state specifications.",
    prerequisite: "Your state specifications and the built page.",
    why: "Every state you have specified for four modules becomes real here, and building them is what proves they were designed rather than described.",
    teach: [
      "Data arrives after the page: something must be shown in the meantime.",
      "Four outcomes: loading, content, empty and error. All four are your design.",
      "Slow is a fifth: design what happens at three seconds and at thirty.",
      "Errors are normal, not exceptional; the network fails routinely.",
      "Never leave the person with a blank region and no explanation.",
    ],
    explanation: [
      "A page that requests data has a gap between arriving and being useful, and everything you have specified about loading states was written for this gap. Building it makes the specification honest: you will discover whether the reserved space was the right size, whether the message reads well at three seconds, and whether the layout still holds when the data is longer than expected.",
      "Four outcomes need code, not just design. Loading, content, empty and error each need a branch, and the empty case is the one most often forgotten, producing a blank region that looks like a failure. Your m08 wording for all four goes in here directly.",
      "Slowness is not a fifth outcome but it behaves like one. The message that suits a two-second wait is wrong at twenty, and a request that never resolves needs a timeout with its own message and route out. Deciding those thresholds is design work you can now implement.",
      "Errors are ordinary. Mobile connections drop mid-request, servers return failures, and requests time out — routinely, not exceptionally. Treating the error branch as an edge case produces the products where a moment of poor signal leaves a permanently empty screen with no way forward.",
    ],
    misconception:
      "“The API will usually work, so the error state is a formality.” It fails often enough that a person on a train meets it regularly. The error branch is used more than most features you will design.",
    example:
      "The class list was connected to a small public data source. Four branches were built with the m08 wording: loading reserved the row heights and, after three seconds, added “Still loading — this can take a moment on a slow connection”; content rendered the list; empty said what would appear and offered to widen the filters; error said what happened, that nothing was lost, and offered retry without losing filters. Building revealed two specification errors: the reserved space was for four rows where the real result was often twelve, and the error message referred to a retry control that had never been designed.",
    freeToolPath:
      "A public data source that needs no key, or a local file of your own realistic data served alongside the page. Nothing here requires an account, a paid API or a backend.",
    outputs: [
      "A page that fetches and renders real data",
      "Loading, content, empty and error branches built with your wording",
      "A slow-wait message and a timeout with a route out",
      "A list of specification errors the build revealed",
    ],
    steps: [
      {
        minutes: 30,
        title: "Fetch something real",
        instructions: [
          "Read the assigned sections on fetching data.",
          "Connect your page to a public source or a local data file.",
          "Render the content branch first.",
        ],
      },
      {
        minutes: 30,
        title: "Build the other three branches",
        instructions: [
          "Add loading, empty and error branches using your m08 wording.",
          "Reserve the space content will occupy.",
          "Make the error branch preserve filters and offer retry.",
        ],
      },
      {
        minutes: 25,
        title: "Make it slow and make it fail",
        instructions: [
          "Throttle the connection and watch the loading branch.",
          "Force an error by breaking the address or going offline.",
          "Add a timeout with its own message and a route out.",
        ],
      },
      {
        minutes: 20,
        title: "Compare with the specification",
        instructions: [
          "Check each built state against what you specified in m08.",
          "Record every place the specification was wrong or incomplete.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Update the specifications to match what the build showed.",
          "Save the code and the list of corrections.",
        ],
      },
    ],
    check: [
      {
        question: "Why is the empty branch so often missing?",
        answer:
          "Because it never appears during development with test data. In use it appears constantly, and without it a legitimate empty result looks like a broken product.",
      },
      {
        question: "Why does slowness need its own design?",
        answer:
          "Because a message that suits two seconds is wrong at twenty, and a request that never resolves needs a timeout with a message and a route out.",
      },
      {
        question: "What did building the states teach that drawing them did not?",
        answer:
          "Whether the reserved space, the wording and the layout survive real data and real timing. Specifications are guesses until something renders them.",
      },
    ],
    rubric: [
      "All four branches are built and reachable",
      "The wording comes from the m08 specifications",
      "Slow and failed requests are handled with a route out",
      "Specification errors revealed by the build are recorded",
    ],
    criteria: [
      {
        criterion: "All four branches are built and reachable",
        evidence:
          "Loading, content, empty and error branches, each demonstrable.",
        levels: [
          "Content branch only.",
          "Three branches, usually missing empty.",
          "All four built and reachable on demand.",
          "As adequate, and each can be triggered deliberately for testing.",
        ],
        remediation:
          "Force each state in turn — no data, bad address, offline — and build whichever branch is missing.",
        recheck: "The four demonstrated states.",
      },
      {
        criterion: "The wording comes from the m08 specifications",
        evidence:
          "Built states using the specified wording, with any changes recorded.",
        levels: [
          "Placeholder or default framework messages.",
          "Some specified wording, some improvised.",
          "Specified wording throughout, with deliberate changes noted.",
          "As adequate, and improvements found while building are fed back into the specification.",
        ],
        remediation:
          "Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong.",
        recheck: "The wording comparison.",
      },
      {
        criterion: "Slow and failed requests are handled with a route out",
        evidence:
          "A slow-wait message, a timeout, and an error branch preserving filters with retry.",
        levels: [
          "Neither slowness nor failure handled.",
          "Errors handled but no timeout or slow message.",
          "All three handled with a route out.",
          "As adequate, and retry preserves scroll position as well as filters.",
        ],
        remediation:
          "Throttle and disconnect deliberately, then build what the person needs in each case.",
        recheck: "The slow and error handling.",
      },
      {
        criterion:
          "Specification errors revealed by the build are recorded",
        evidence:
          "A list of places where the m08 specification was wrong, with corrections.",
        levels: [
          "No comparison made.",
          "Differences noticed but not recorded.",
          "Errors listed and specifications corrected.",
          "As adequate, and one correction is traced to a wrong assumption about data volume or timing.",
        ],
        remediation:
          "Walk your specification beside the running page and note every mismatch.",
        recheck: "The correction list.",
      },
    ],
    repairs: [
      "If the empty branch is missing, force an empty result and build it.",
      "If wording is improvised, replace it with the specified text.",
      "If there is no timeout, add one with a message and a route out.",
      "If nothing was compared, walk the specification against the build.",
    ],
    portfolio:
      "Built states with the specification corrections beside them show a designer whose specifications survive contact with a build — and who updates them when they do not.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "The scripting module sections on fetching data and handling responses and failures.",
        purpose: "Supplies the mechanics for requesting and rendering data.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Use a public source that needs no key, or local data.",
        fallbackId: "R16",
      },
      {
        ...devtools,
        section:
          "Throttling, disabling the cache, and inspecting requests and responses.",
        purpose:
          "Lets you produce the slow and failed conditions deliberately.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling does not simulate a dropped connection; disconnect to test that.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l08-v1",
    module: "m12",
    week: 12,
    day: 8,
    level: 4,
    areas: [13],
    guided: true,
    title: "A form that actually submits",
    objective:
      "Build one working form with native validation, accessible errors and preserved input, and record what the browser gave you free versus what you had to write.",
    bringForward: "Your m11 accessible field table and error wording.",
    prerequisite: "Your field table and error specifications.",
    why: "Forms are where your accessibility and error specifications are either implemented or quietly dropped.",
    teach: [
      "The browser already validates common types and reports errors.",
      "Native first, custom only where the native behaviour is genuinely insufficient.",
      "Errors must be associated with fields and announced when they appear.",
      "Never clear the form on failure; preserve everything.",
      "Validation on the client is convenience; the server is where it counts.",
    ],
    explanation: [
      "The browser gives you a great deal free: required fields, input types that bring their own keyboards and validation, and error reporting that is announced. Starting from native behaviour and adding only what is missing produces an accessible form quickly; starting from a custom implementation means rebuilding announcement, focus and keyboard behaviour by hand.",
      "Custom validation is warranted when the rule is yours rather than the platform's — a date that must be in the future, a code that must match a pattern the browser does not know. Even then, the presentation should match the native behaviour people already recognise, and the association between field and error must be explicit.",
      "Announcement matters as much as display. An error that appears silently is invisible to anyone not looking at that region, so the summary and the field-level messages need to be announced when they appear and reachable afterwards. This is your m11 specification, and this lesson is where it either happens or does not.",
      "Client-side validation is a convenience that saves a round trip. It is not a guarantee: anything can be submitted directly. That is an engineering fact worth knowing, because it explains why a server will re-check everything and why your design needs to handle a rejection that arrives after the person thought they were finished.",
    ],
    misconception:
      "“Custom validation gives a better experience.” It gives a different one, and usually a less accessible one, because the native behaviour includes announcement and keyboard handling that custom implementations routinely omit.",
    example:
      "The booking form was built with native input types and required attributes, adding custom rules only for two things the browser could not know: that the date must be a future class date, and that the phone number must match an accepted set of formats. Errors were associated with their fields, a summary at the top linked to each, and the summary was announced on appearance. On a failed submission everything the person had entered survived. The record noted what came free — type-appropriate keyboards, required handling, announcement — and what was written by hand, which was about fifteen lines.",
    freeToolPath:
      "A text editor and a browser. Submission can go to a local endpoint or simply be intercepted; nothing here needs a server, a form service or an account.",
    outputs: [
      "A working form using native validation where possible",
      "Custom rules only where the platform cannot know them",
      "Errors associated with fields, announced and linked from a summary",
      "A record of what was free and what was hand-written",
    ],
    steps: [
      {
        minutes: 30,
        title: "Build with native behaviour",
        instructions: [
          "Read the assigned form sections and the accessibility requirements.",
          "Build the form with appropriate input types and required fields.",
          "Test what the browser does before adding anything.",
        ],
      },
      {
        minutes: 25,
        title: "Add only what is missing",
        instructions: [
          "Identify rules the browser cannot know.",
          "Implement those, matching the native presentation.",
          "Keep the total custom code as small as you can.",
        ],
      },
      {
        minutes: 30,
        title: "Make errors accessible",
        instructions: [
          "Associate each error with its field.",
          "Add a summary that links to each problem field.",
          "Ensure the summary is announced when it appears.",
        ],
      },
      {
        minutes: 20,
        title: "Fail and recover",
        instructions: [
          "Submit with several errors and confirm nothing is lost.",
          "Check focus moves somewhere useful.",
          "Test the whole form with the keyboard only.",
        ],
      },
      {
        minutes: 15,
        title: "Record what was free",
        instructions: [
          "List what the browser provided without code.",
          "List what you wrote and why it was necessary.",
          "Save the form and the two lists.",
        ],
      },
    ],
    check: [
      {
        question: "Why start from native validation?",
        answer:
          "Because it arrives with announcement, keyboard behaviour and appropriate input handling. Custom implementations have to rebuild all of that and usually rebuild part of it.",
      },
      {
        question: "What must happen when errors appear?",
        answer:
          "They must be associated with their fields, announced, reachable from a summary, and everything the person entered must survive.",
      },
      {
        question: "Why does the server re-check everything?",
        answer:
          "Because client-side validation can be bypassed entirely. It is a convenience, which is why your design must handle a rejection arriving after the person believed they were done.",
      },
    ],
    rubric: [
      "Native validation is used wherever it can be",
      "Custom rules exist only where the platform cannot know them",
      "Errors are associated, announced and linked",
      "Input survives a failed submission",
    ],
    criteria: [
      {
        criterion: "Native validation is used wherever it can be",
        evidence:
          "Appropriate input types and required handling, with a record of what the browser did.",
        levels: [
          "Everything validated by custom code.",
          "Some native types with custom duplication.",
          "Native behaviour used wherever available.",
          "As adequate, and the input types produce the right keyboards on a phone.",
        ],
        remediation:
          "Remove custom validation that duplicates a native type and test what the browser does alone.",
        recheck: "The form and the native record.",
      },
      {
        criterion:
          "Custom rules exist only where the platform cannot know them",
        evidence:
          "A short list of custom rules, each justified by a domain fact.",
        levels: [
          "Custom rules replace native ones.",
          "Custom rules present without justification.",
          "Each custom rule justified as unavailable natively.",
          "As adequate, and the custom presentation matches the native one.",
        ],
        remediation:
          "For each custom rule ask whether an input type or attribute already expresses it.",
        recheck: "The custom-rule list.",
      },
      {
        criterion: "Errors are associated, announced and linked",
        evidence:
          "Field-associated messages, a linked summary, and announcement on appearance.",
        levels: [
          "Errors displayed without association.",
          "Associated but not announced.",
          "Associated, announced and linked from a summary.",
          "As adequate, and focus moves to the summary or the first problem field.",
        ],
        remediation:
          "Implement the association and the summary from your m11 specification and test the announcement.",
        recheck: "The error implementation.",
      },
      {
        criterion: "Input survives a failed submission",
        evidence:
          "A tested failed submission with all values retained.",
        levels: [
          "Fields cleared on failure.",
          "Most values retained, some lost.",
          "Everything retained and verified by test.",
          "As adequate, and the retention survives a page reload where appropriate.",
        ],
        remediation:
          "Submit with deliberate errors and check every field; fix any that clears.",
        recheck: "The failed-submission test.",
      },
    ],
    repairs: [
      "If custom code duplicates native validation, remove it.",
      "If errors are not associated, implement the association from m11.",
      "If the summary is silent, make it announced and linked.",
      "If fields clear on failure, preserve the values.",
    ],
    portfolio:
      "A working accessible form is one of the most useful things a designer can show: it proves the specification was implementable and that you implemented it.",
    resource: forms,
    resources: [
      {
        ...forms,
        section:
          "Labels, instructions, validating input and user notifications.",
        purpose:
          "States the requirements the built form must satisfy.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers accessibility rather than implementation detail; the mechanics come from the MDN module.",
        fallbackId: "R10",
      },
      {
        ...mdn,
        section:
          "The forms sections: input types, native validation and handling submission.",
        purpose: "Supplies the implementation for the form you build.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l09-v1",
    module: "m12",
    week: 12,
    day: 9,
    level: 4,
    areas: [13],
    guided: true,
    title: "Making the page fast enough",
    objective:
      "Measure your page's weight and time to usable on a slow connection, make three changes, and report the before-and-after with the conditions stated.",
    bringForward: "Your built page and the trace from lesson 1.",
    prerequisite: "Your built page and its first trace.",
    why: "Speed is an accessibility and inclusion question in a country where connections vary enormously. It is also the easiest quality to lose without noticing.",
    teach: [
      "Measure before changing; opinions about speed are unreliable.",
      "Weight, number of requests and blocking resources are the three usual causes.",
      "Time to usable matters more than time to fully loaded.",
      "Fonts and images are the design-owned costs; scripts are usually shared.",
      "Report conditions with every number, or the comparison is meaningless.",
    ],
    explanation: [
      "The first rule is measurement, because perceived speed on a developer's machine has almost no relationship to a person's experience on a mid-range phone. The network panel gives you weight, request count and timing; a throttled profile gives you conditions closer to the ones your users meet.",
      "Three causes cover most problems. Total weight, dominated by images and fonts. The number of requests, since each one costs time even when small. And blocking resources — a stylesheet or script that must arrive before anything renders — which is why a page can be light and still slow to appear.",
      "Time to usable is the number that matters. A page that shows readable content in two seconds and finishes in eight is better than one that shows nothing for five and finishes in six. This is why the design decision about what can render before everything arrives is worth more than most optimisation.",
      "State the conditions with every figure: device, browser, throttling profile, cache state and content volume. A before-and-after comparison taken under different conditions is not a comparison, and this is the most common way performance improvements are overstated.",
    ],
    misconception:
      "“It feels fast to me.” You are on a fast connection, with a warm cache, on a machine you chose, looking at a page you already understand. None of that describes a first visit on a mid-range phone.",
    example:
      "Baseline on a throttled profile with the cache disabled: 2.4 MB, twenty-one requests, eleven seconds to usable. Three changes: images resized and re-formatted, two of three typefaces removed, and the stylesheet made non-blocking for the parts not needed for first paint. After: 340 KB, twelve requests, three seconds to usable. The conditions were identical for both runs and stated with the figures. One further change was considered and rejected: deferring the script that renders the list would have made the page appear faster and be useful later, which is the wrong trade for this page.",
    freeToolPath:
      "Your browser's network panel and throttling. No performance service, account or paid audit tool is required; the measurements you need are already in the browser.",
    outputs: [
      "A baseline measurement with conditions recorded",
      "Three changes, each with the reason",
      "An after measurement under identical conditions",
      "One change considered and rejected, with the trade-off",
    ],
    steps: [
      {
        minutes: 25,
        title: "Measure the baseline",
        instructions: [
          "Load with the cache disabled and a slow profile.",
          "Record weight, request count and time to usable.",
          "Note which requests block the first render.",
        ],
      },
      {
        minutes: 30,
        title: "Make three changes",
        instructions: [
          "Reduce the largest design-owned cost first.",
          "Remove anything requested and unused.",
          "Stop something non-essential from blocking first render.",
        ],
      },
      {
        minutes: 25,
        title: "Measure again",
        instructions: [
          "Repeat the load under identical conditions.",
          "Record the same three figures.",
          "Note anything that got worse.",
        ],
      },
      {
        minutes: 25,
        title: "Consider and reject one",
        instructions: [
          "Identify a change that would improve a number and harm the experience.",
          "Write the trade-off and your decision.",
        ],
      },
      {
        minutes: 15,
        title: "Report",
        instructions: [
          "Write the before and after with the conditions stated once.",
          "State what you did not measure, such as real-device performance.",
          "Save the report with the traces.",
        ],
      },
    ],
    check: [
      {
        question: "Why is time to usable the important number?",
        answer:
          "Because people act on what they can read and use. Finishing quickly matters less than showing something useful early.",
      },
      {
        question: "Why record conditions with every figure?",
        answer:
          "Because a comparison taken under different conditions is not a comparison. Most overstated performance improvements come from a changed cache or profile.",
      },
      {
        question: "Which costs does the designer own?",
        answer:
          "Image weight, typeface count, decorative assets and whether the page can render anything useful before the rest arrives.",
      },
    ],
    rubric: [
      "A baseline is measured with conditions recorded",
      "Three changes are made, each with a reason",
      "The after measurement uses identical conditions",
      "One rejected change is recorded with its trade-off",
    ],
    criteria: [
      {
        criterion: "A baseline is measured with conditions recorded",
        evidence:
          "Weight, request count and time to usable, with device, profile and cache state.",
        levels: [
          "No baseline.",
          "Figures without conditions.",
          "All three figures with full conditions.",
          "As adequate, and blocking resources are identified separately.",
        ],
        remediation:
          "Re-run the load with the cache disabled and a slow profile and record all three figures.",
        recheck: "The baseline record.",
      },
      {
        criterion: "Three changes are made, each with a reason",
        evidence:
          "Three specific changes traced to a measured cost.",
        levels: [
          "Changes made without reference to measurement.",
          "Some changes justified.",
          "All three traced to a measured cost.",
          "As adequate, and the largest cost was addressed first.",
        ],
        remediation:
          "Sort your requests by size and time, and address the top of that list.",
        recheck: "The change list.",
      },
      {
        criterion: "The after measurement uses identical conditions",
        evidence:
          "A second measurement with the same profile, cache state and content volume.",
        levels: [
          "Measured under different conditions.",
          "Conditions matched but not recorded.",
          "Identical conditions, recorded.",
          "As adequate, and anything that got worse is reported as well.",
        ],
        remediation:
          "Repeat the load with exactly the same settings and record the figures again.",
        recheck: "The after measurement.",
      },
      {
        criterion: "One rejected change is recorded with its trade-off",
        evidence:
          "A change that would improve a metric while harming the experience, with your decision.",
        levels: [
          "No rejection recorded.",
          "A rejection without a stated trade-off.",
          "The trade-off is stated and the decision explained.",
          "As adequate, and the reasoning names who would be harmed by the improvement.",
        ],
        remediation:
          "Ask which optimisation would make a number better and the page worse; deferring essential content is the usual candidate.",
        recheck: "The rejection note.",
      },
    ],
    repairs: [
      "If conditions are unrecorded, re-measure and state them.",
      "If changes were guessed, sort by measured cost and address the top.",
      "If the after run used different settings, repeat it identically.",
      "If nothing was rejected, look for the metric-improving change that harms the experience.",
    ],
    portfolio:
      "A measured before-and-after with conditions stated, including a rejected optimisation, reads as engineering literacy rather than a claim about speed.",
    resource: devtools,
    resources: [
      {
        ...devtools,
        section:
          "Throttling profiles, disabling the cache, request sizes and timing.",
        purpose: "Supplies the measurement instrument and its conditions.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer and timing, not real-device rendering performance.",
        fallbackId: "R16",
      },
      {
        ...responsive,
        section: "The chapters on images and delivering appropriate assets.",
        purpose:
          "Connects the measured costs back to the design decisions that created them.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Design-focused; the measurement comes from the browser tools.",
        fallbackId: "R15",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l10-v1",
    module: "m12",
    week: 12,
    day: 10,
    level: 4,
    areas: [13],
    guided: true,
    title: "Finding out what is actually happening",
    objective:
      "Diagnose three problems in your own page using the element inspector, the console and the network panel, writing the cause before making any fix.",
    bringForward: "Your built page with any remaining problems.",
    prerequisite: "Your built page and its known issues.",
    why: "Being able to find out what is happening, rather than guessing and changing things, is what makes you useful to an engineering conversation.",
    teach: [
      "The inspector shows the real applied styles and which rules were overridden.",
      "The console shows errors; a page can look fine and be failing quietly.",
      "The network panel shows what was requested and what came back.",
      "Diagnose before you change: write the cause, then the fix.",
      "Reproduce first — a problem you cannot reproduce is not yet understood.",
    ],
    explanation: [
      "Trial and error is how most people first change CSS, and it produces code nobody can explain and problems that return. The inspector removes the guesswork: it shows what is applied, what is inherited and what was overridden by what, so a layout surprise becomes a fact rather than a mystery.",
      "The console is the first place to look when something behaves oddly, because a page can look complete while a script has failed silently. An error message names a file and a line, which converts a vague fault into a specific one, and it is the single most useful thing to check before asking anyone else.",
      "The network panel answers a different class of question: was it requested, did it arrive, what came back. Missing images, failed data, wrong addresses and slow responses all show here, and knowing which panel answers which question is most of the skill.",
      "Writing the cause before the fix is the discipline that makes this learning stick. Change first and you often fix something by accident and learn nothing; write the cause first and you either confirm it or discover you were wrong, which is more useful than the fix.",
    ],
    misconception:
      "“Debugging is for developers.” Being able to say “the request returned a 404” or “this rule is being overridden by that one” is what turns a design bug report from a complaint into a starting point, and it saves everyone a round trip.",
    example:
      "Three problems diagnosed. The card was wider than its container: the inspector showed padding being added to a set width — cause written, then fixed with box sizing. The filter did nothing on one screen: the console showed a script error on a line that assumed an element existed — cause written, then fixed with a guard. An icon was missing on the phone but not the laptop: the network panel showed a 404 for a file whose name differed by case, which matters on the server and not on the local machine. Each cause was written before the fix, and one initial hypothesis turned out to be wrong.",
    freeToolPath:
      "The developer tools already in your browser. No account, extension or paid tooling is required for anything in this lesson.",
    outputs: [
      "Three problems diagnosed with the cause written first",
      "Evidence from the inspector, the console and the network panel",
      "A record of one hypothesis that turned out to be wrong",
      "Fixes made after the diagnosis, not before",
    ],
    steps: [
      {
        minutes: 25,
        title: "Learn the three panels",
        instructions: [
          "Read the assigned sections on the browser tools.",
          "Write which panel answers which kind of question.",
        ],
      },
      {
        minutes: 30,
        title: "Diagnose a style problem",
        instructions: [
          "Find something that does not look as intended.",
          "Use the inspector to see the applied and overridden rules.",
          "Write the cause before touching the code.",
        ],
      },
      {
        minutes: 25,
        title: "Diagnose a behaviour problem",
        instructions: [
          "Find something that does not work as intended.",
          "Check the console for errors and read the file and line.",
          "Write the cause, then fix it.",
        ],
      },
      {
        minutes: 25,
        title: "Diagnose a loading problem",
        instructions: [
          "Look for anything missing or slow.",
          "Use the network panel to see the request and its response.",
          "Write the cause, then fix it.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Note any hypothesis that proved wrong and what it actually was.",
          "Save the three diagnoses with their evidence.",
        ],
      },
    ],
    check: [
      {
        question: "Which panel tells you a rule was overridden?",
        answer:
          "The element inspector, which shows the applied styles and strikes through the ones that lost. Guessing at specificity is unnecessary once you can read it.",
      },
      {
        question: "Why check the console first for odd behaviour?",
        answer:
          "Because a script can fail silently while the page looks complete. The error names a file and line, turning a vague fault into a specific one.",
      },
      {
        question: "Why write the cause before the fix?",
        answer:
          "Because otherwise you may fix it by accident and learn nothing, and the same problem will return in a form you cannot recognise.",
      },
    ],
    rubric: [
      "Three problems are diagnosed using three different panels",
      "Causes are written before fixes",
      "Evidence from the tools is recorded",
      "A wrong hypothesis is recorded honestly",
    ],
    criteria: [
      {
        criterion: "Three problems are diagnosed using three different panels",
        evidence:
          "One style, one behaviour and one loading problem, each with the panel used.",
        levels: [
          "Problems fixed without diagnosis.",
          "One or two diagnosed, using one panel.",
          "Three problems across the three panels.",
          "As adequate, and the write-up says which panel would have been wrong for each problem.",
        ],
        remediation:
          "Pick one problem of each kind and use the matching panel to find the cause.",
        recheck: "The three diagnoses.",
      },
      {
        criterion: "Causes are written before fixes",
        evidence:
          "A written cause per problem, produced before the change.",
        levels: [
          "Fixed first, explained afterwards.",
          "Causes written for some.",
          "Cause written before every fix.",
          "As adequate, and one cause was disproved by the fix, which is recorded.",
        ],
        remediation:
          "For your next problem, write the cause in a file before touching the code.",
        recheck: "The written causes.",
      },
      {
        criterion: "Evidence from the tools is recorded",
        evidence:
          "The specific rule, error message or response recorded per problem.",
        levels: [
          "No evidence.",
          "General description without the specific message or rule.",
          "Specific evidence recorded per problem.",
          "As adequate, and the evidence is written in terms an engineer would recognise.",
        ],
        remediation:
          "Copy the exact overridden rule, error text or status code into your notes.",
        recheck: "The evidence record.",
      },
      {
        criterion: "A wrong hypothesis is recorded honestly",
        evidence:
          "At least one initial explanation that turned out to be wrong, with what it actually was.",
        levels: [
          "Only correct diagnoses reported.",
          "A wrong guess mentioned without what was actually happening.",
          "Recorded with the real cause beside it.",
          "As adequate, and the record says what would have shown the mistake sooner.",
        ],
        remediation:
          "Look back at the problems: your first idea was probably wrong at least once. Record it.",
        recheck: "The hypothesis record.",
      },
    ],
    repairs: [
      "If problems were fixed by trial and error, re-diagnose one properly.",
      "If causes came after fixes, write the next one first.",
      "If evidence is vague, record the exact rule, error or status.",
      "If every diagnosis was right first time, check whether you are recording honestly.",
    ],
    portfolio:
      "Diagnoses written in engineers' terms show that you can participate in a technical conversation, which is a stated expectation in many product design roles.",
    resource: devtools,
    resources: [
      {
        ...devtools,
        section: "The network panel: requests, statuses, sizes and timing.",
        purpose: "Supplies the loading diagnosis for this lesson.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. It documents the network panel only; the inspector and console are learned by use.",
        fallbackId: "R16",
      },
      {
        ...mdn,
        section:
          "The debugging sections of the CSS and scripting modules.",
        purpose:
          "Explains what the inspector and console are showing you.",
        minutes: "60 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l11-v1",
    module: "m12",
    week: 12,
    day: 11,
    level: 4,
    areas: [13],
    guided: true,
    title: "The whole thing, running",
    objective:
      "Assemble your pages into one working responsive prototype with real data, accessible structure and measured performance, and test it on a real phone.",
    bringForward: "Everything built in this module.",
    prerequisite: "Your built pages, data fetching, form and styling.",
    why: "Separate exercises prove separate points. A running prototype proves they hold together, which is a different claim.",
    teach: [
      "Assembly finds the contradictions: two stylesheets, two patterns, two vocabularies.",
      "Re-run every check on the assembled thing; passing separately is not passing.",
      "Test on a real phone, not only an emulated viewport.",
      "Record what is faked, exactly as in m10.",
      "A running prototype is not a product; say so wherever you show it.",
    ],
    explanation: [
      "Assembly is a test. Pages built separately develop their own conventions — a different spacing rhythm, a second way of writing a card, a slightly different button — and putting them together surfaces every one. Reconciling them is the work, and the reconciliations belong in your component inventory and token sheet.",
      "Checks must be re-run on the assembled result. A heading outline that was correct per page can break when pages share a header; a contrast ratio that passed can fail where a component now sits on a different surface; a keyboard route that worked can be interrupted by a new element. Passing separately is genuinely not the same as passing together.",
      "Emulated viewports are convenient and not sufficient. A real phone has a real connection, real touch targets, a real keyboard that covers half the screen, and real interruptions. Ten minutes on a phone finds things an afternoon of resizing a window does not.",
      "The honesty rules from m10 apply unchanged: record what is faked, what data is invented, and what a person would meet in a real product that this does not have. A running prototype is more convincing than a drawing, which is exactly why its limits need stating more clearly.",
    ],
    misconception:
      "“It runs, so it is nearly a product.” It runs with your data, on your machine, for the paths you built. Real products meet volume, edge cases, other people's content, security requirements and years of change.",
    example:
      "Four pages were assembled. Three contradictions appeared: two spacing rhythms, two card treatments and two different words for the same action. Each was reconciled and the inventory updated. Re-running the checks found a heading outline broken by the shared header and one contrast failure on a component now sitting on a tinted panel. Ten minutes on a real phone found two more: the sticky action bar sat under the on-screen keyboard, and the tap target for the date was comfortable with a mouse and not with a thumb. The fakes sheet recorded invented data, a faked payment and a search box that does nothing.",
    freeToolPath:
      "Your local files opened on your phone over the same network, or copied to it. No hosting, deployment or account is required to test on a real device.",
    outputs: [
      "One assembled, running prototype",
      "A list of contradictions found and reconciled",
      "Re-run checks on the assembled result",
      "A real-phone test with findings, and an updated fakes sheet",
    ],
    steps: [
      {
        minutes: 30,
        title: "Assemble",
        instructions: [
          "Bring the pages together with shared styling and navigation.",
          "Record every contradiction you have to reconcile.",
          "Update the inventory and token sheet accordingly.",
        ],
      },
      {
        minutes: 25,
        title: "Re-run the checks",
        instructions: [
          "Re-check headings, landmarks, contrast and keyboard on the assembled result.",
          "Record anything that passed separately and fails together.",
        ],
      },
      {
        minutes: 30,
        title: "Test on a real phone",
        instructions: [
          "Open the prototype on an actual phone.",
          "Complete one task by thumb, including a form.",
          "Record everything the emulated viewport did not show.",
        ],
      },
      {
        minutes: 20,
        title: "Measure again",
        instructions: [
          "Re-run the throttled measurement on the assembled prototype.",
          "Record weight, requests and time to usable.",
        ],
      },
      {
        minutes: 15,
        title: "Update the fakes sheet",
        instructions: [
          "List everything invented, faked or non-functional.",
          "Write one sentence stating this is a prototype, not a product.",
          "Save the prototype, the checks and the sheet.",
        ],
      },
    ],
    check: [
      {
        question: "Why re-run checks after assembly?",
        answer:
          "Because shared headers, new surfaces and added elements break things that passed in isolation. Passing separately is a weaker claim than it sounds.",
      },
      {
        question: "What does a real phone show that an emulator does not?",
        answer:
          "Real touch, a real keyboard covering the screen, a real connection and real interruptions. Ten minutes there beats an afternoon of resizing a window.",
      },
      {
        question: "Why keep a fakes sheet for a running prototype?",
        answer:
          "Because it is more convincing than a drawing, so its limits are easier to forget and more likely to be assumed away by someone else.",
      },
    ],
    rubric: [
      "The prototype is assembled and runs end to end",
      "Contradictions are recorded and reconciled",
      "Checks are re-run on the assembled result",
      "A real-phone test and an updated fakes sheet exist",
    ],
    criteria: [
      {
        criterion: "The prototype is assembled and runs end to end",
        evidence:
          "One task completable from start to finish in the running prototype.",
        levels: [
          "Separate pages that do not connect.",
          "Connected but with a break in the main task.",
          "One complete task runs end to end.",
          "As adequate, and at least one failure path is reachable too.",
        ],
        remediation:
          "Walk the main task and connect whatever is missing, including one failure route.",
        recheck: "The running prototype.",
      },
      {
        criterion: "Contradictions are recorded and reconciled",
        evidence:
          "A list of inconsistencies found during assembly, each resolved and reflected in the inventory.",
        levels: [
          "Contradictions absorbed silently.",
          "Noted without resolution.",
          "Recorded, resolved and fed back into the inventory.",
          "As adequate, and one contradiction revealed a genuine missing component.",
        ],
        remediation:
          "Compare the pages side by side for spacing, components and wording, and list every difference.",
        recheck: "The contradiction list.",
      },
      {
        criterion: "Checks are re-run on the assembled result",
        evidence:
          "Heading, contrast and keyboard checks repeated on the whole prototype.",
        levels: [
          "Relying on the earlier per-page checks.",
          "Some checks repeated.",
          "All repeated with new failures recorded.",
          "As adequate, and a failure that only appears in assembly is identified.",
        ],
        remediation:
          "Re-run each check on the assembled prototype and record what changed.",
        recheck: "The re-run results.",
      },
      {
        criterion: "A real-phone test and an updated fakes sheet exist",
        evidence:
          "Findings from a real device and a current list of everything faked.",
        levels: [
          "Emulated viewport only, no fakes sheet.",
          "One of the two present.",
          "Both present, with device findings recorded.",
          "As adequate, and one design change was made because of the phone test.",
        ],
        remediation:
          "Open the prototype on your phone, complete a task by thumb, and update the fakes sheet afterwards.",
        recheck: "The phone findings and fakes sheet.",
      },
    ],
    repairs: [
      "If pages do not connect, wire the main task end to end.",
      "If contradictions were absorbed, list and resolve them.",
      "If checks were not repeated, re-run them on the assembly.",
      "If only an emulator was used, test on a real phone.",
    ],
    portfolio:
      "A running prototype you built yourself, with its checks and its fakes sheet, is a strong portfolio artefact and an unusual one for a designer.",
    resource: mdn,
    resources: [
      {
        ...mdn,
        section:
          "Whichever modules you need to finish the assembly: layout, scripting or forms.",
        purpose: "Supports the remaining implementation work.",
        minutes: "90 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
      {
        ...prototypes,
        section: "What a prototype is for and what it cannot claim.",
        purpose:
          "Keeps the running prototype honestly bounded despite being convincing.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government service prototypes; the honesty rules transfer directly.",
        fallbackId: "R05",
      },
    ],
  }),
  withLegacyText({
    id: "m12-l12-v1",
    module: "m12",
    week: 12,
    day: 12,
    level: 4,
    areas: [13],
    guided: true,
    title: "Talking to engineers about what you built",
    objective:
      "Write a technical handover for one feature, ask three precise questions an engineer would find useful, and record what you now understand that you did not before this module.",
    bringForward: "Your running prototype and its specifications.",
    prerequisite: "Your prototype, key tables and state specifications.",
    why: "The point of building was never to become an engineer. It was to make the conversation with engineers specific.",
    teach: [
      "Hand over behaviour and states, not only appearance.",
      "Ask about constraints and cost, not just feasibility.",
      "“Is this possible?” is almost always yes; ask what it would cost.",
      "Name what your prototype fakes so nobody plans around it.",
      "Record what you learned, including where you were previously wrong.",
    ],
    explanation: [
      "A handover that consists of screens leaves an engineer to invent everything you did not draw: states, transitions, error handling, keyboard behaviour, what happens when data is long. You have specified all of those over the last five modules, and this lesson assembles them into a document that answers questions before they are asked.",
      "Feasibility questions rarely produce useful answers, because almost anything is possible. Cost questions do: what would this take, what would it constrain later, what would it prevent us changing. Asking in that form gets you a real trade-off rather than a yes that turns into a delay.",
      "Your prototype's fakes need declaring in the handover as clearly as in a test. An engineer who assumes the search works, or that the data shape matches, plans around something that does not exist, and the correction is more expensive later than the sentence would have been now.",
      "Recording what you now understand is worth doing once, plainly. This module was not intended to make you an engineer, and it should have changed what you can ask, what you can read, and what you no longer accept as an answer. Naming those explicitly makes them usable in an interview and in the next project.",
    ],
    misconception:
      "“Designers who code are more valuable.” Designers who understand the material are more valuable. Writing production code is a different job; being able to read it, build a prototype, and ask precise questions is the part that makes design work land.",
    example:
      "The handover for the booking feature ran to three pages: the flow with its states, the component specifications with their key tables, the four data branches with their wording, the responsive behaviour rules, and the accessibility notes with what had been tested and what had not. Three questions were asked: what would it cost to keep the held-place timer accurate across devices, what does the current data shape make expensive to change later, and which of these states will need server work rather than front-end work. The fakes sheet was attached. The reflection recorded three things learned, including that a change she had previously been told was trivial turned out to be structural, and one where the opposite was true.",
    freeToolPath:
      "A written document plus your existing artefacts. No handover platform is required; a clear Markdown file with links is better than most of them.",
    outputs: [
      "A technical handover covering behaviour, states and constraints",
      "Three cost-shaped questions for an engineer",
      "The fakes sheet attached and declared",
      "A written record of what you now understand",
    ],
    steps: [
      {
        minutes: 30,
        title: "Assemble the handover",
        instructions: [
          "Collect the flow, states, key tables, responsive rules and accessibility notes.",
          "Write them as one document a developer could work from.",
          "Include the wording for every message.",
        ],
      },
      {
        minutes: 25,
        title: "Write the questions",
        instructions: [
          "Write three questions about cost and constraint rather than possibility.",
          "Make each specific to a decision in this feature.",
        ],
      },
      {
        minutes: 20,
        title: "Declare the fakes",
        instructions: [
          "Attach the fakes sheet and mark anything an engineer might assume works.",
          "State what data shape you invented.",
        ],
      },
      {
        minutes: 30,
        title: "Ask someone",
        instructions: [
          "If you can, ask your questions of a developer and record the answers.",
          "If not, record that the questions are unasked and what you expect.",
        ],
      },
      {
        minutes: 15,
        title: "Write what you learned",
        instructions: [
          "List three things you understand now that you did not before.",
          "Include at least one where you were previously wrong.",
          "Save the handover, questions and reflection.",
        ],
      },
    ],
    check: [
      {
        question: "Why ask about cost rather than possibility?",
        answer:
          "Because almost everything is possible. Cost and constraint questions produce trade-offs you can design with, instead of a yes that becomes a delay.",
      },
      {
        question: "What must a handover contain beyond screens?",
        answer:
          "States, transitions, error handling, keyboard behaviour, responsive rules and message wording — everything that would otherwise be invented at build time.",
      },
      {
        question: "What was the point of building, if not to become an engineer?",
        answer:
          "To make the conversation specific: to read code, to prototype your own ideas, to ask precise questions, and to recognise an evasive answer.",
      },
    ],
    rubric: [
      "The handover covers behaviour and states, not only appearance",
      "Three questions are about cost and constraint",
      "The fakes are declared explicitly",
      "The reflection includes something you had been wrong about",
    ],
    criteria: [
      {
        criterion:
          "The handover covers behaviour and states, not only appearance",
        evidence:
          "A document containing flow, states, key behaviour, responsive rules and message wording.",
        levels: [
          "Screens with annotations.",
          "Some behaviour documented, states missing.",
          "All the behavioural material assembled in one document.",
          "As adequate, and it names what is still undecided rather than implying completeness.",
        ],
        remediation:
          "Collect your existing specifications into one file; most of the content already exists.",
        recheck: "The handover document.",
      },
      {
        criterion: "Three questions are about cost and constraint",
        evidence:
          "Three specific questions asking what something would take or prevent.",
        levels: [
          "Feasibility questions.",
          "Mixed, with at least one is-it-possible question.",
          "All three about cost, constraint or consequence.",
          "As adequate, and each names the decision it would change.",
        ],
        remediation:
          "Rewrite each question as “what would it take to …” or “what does this make harder later”.",
        recheck: "The three questions.",
      },
      {
        criterion: "The fakes are declared explicitly",
        evidence:
          "The fakes sheet attached with the invented data shape stated.",
        levels: [
          "Not declared.",
          "Attached without highlighting what looks real.",
          "Attached with the assumable items marked.",
          "As adequate, and the data shape is flagged as invented rather than proposed.",
        ],
        remediation:
          "Mark every part of the prototype an engineer could mistake for working.",
        recheck: "The declared fakes.",
      },
      {
        criterion:
          "The reflection includes something you had been wrong about",
        evidence:
          "Three learnings, at least one correcting a previous belief.",
        levels: [
          "No reflection.",
          "Learnings listed without any correction.",
          "Three learnings including a correction.",
          "As adequate, and the correction changes how you will estimate or argue in future.",
        ],
        remediation:
          "Think back over the module for a moment where a build contradicted your expectation, and write it.",
        recheck: "The reflection.",
      },
    ],
    repairs: [
      "If the handover is screens, add states, behaviour and wording.",
      "If questions ask about possibility, rewrite them as cost.",
      "If fakes are undeclared, mark everything that looks functional.",
      "If the reflection has no correction, look for where the build surprised you.",
    ],
    portfolio:
      "A technical handover with cost-shaped questions is a strong interview artefact: it shows how you work with engineers rather than claiming that you do.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section:
          "What a prototype communicates to the people who build the real thing.",
        purpose: "Frames the handover as communication rather than documentation.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover technical handover specifically; the document structure here is the course's own.",
        fallbackId: "R05",
      },
      {
        ...mdn,
        section:
          "Any module you needed while building, revisited to name the concepts precisely.",
        purpose:
          "Ensures your questions and handover use terms an engineer will recognise.",
        minutes: "60 selected",
        limits:
          "Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses.",
        fallbackId: "R16",
      },
    ],
  }),
];
