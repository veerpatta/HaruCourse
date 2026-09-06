import { withLegacyText, type Lesson } from "./teaching";
// Module 8 is the first module authored directly in the guided Learn -> Do ->
// Check shape: concise essential lines, deeper reasoning in `explanation`, one
// action per instruction. It takes the tested wireframes from m07 and asks
// what changes when a screen has to be built rather than argued about, so the
// unit of work is a component with its states rather than a page.
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
const heuristics = {
  title: "Nielsen: ten usability heuristics",
  id: "R02",
  url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
};
const laws = {
  title: "Laws of UX",
  id: "R31",
  url: "https://lawsofux.com/",
};
const forms = {
  title: "W3C: forms tutorial",
  id: "R14",
  url: "https://www.w3.org/WAI/tutorials/forms/",
};
const responsive = {
  title: "web.dev: learn responsive design",
  id: "R16",
  url: "https://web.dev/learn/design/",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const recall = {
  title: "NN/g: recognition and recall",
  id: "R33",
  url: "https://www.nngroup.com/articles/recognition-and-recall/",
};
const colour = {
  title: "web.dev: colour and contrast",
  id: "R29",
  url: "https://web.dev/learn/accessibility/color-contrast",
};
const contrast = {
  title: "W3C: understanding contrast (minimum)",
  id: "R30",
  url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
};
const charts = {
  title: "UK Analysis Function: data visualisation charts",
  id: "R63",
  url: "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/",
};
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
export const module8: Lesson[] = [
  withLegacyText({
    id: "m08-l01-v1",
    module: "m08",
    week: 8,
    day: 1,
    level: 3,
    areas: [8],
    guided: true,
    title: "What fidelity adds, and what it hides",
    objective:
      "Take one tested wireframe to interface fidelity and write what the added detail decided, what it hid, and which question can no longer be asked cheaply.",
    bringForward:
      "One screen from your m07 wireflow, its state table and the ranked problems from your paper test.",
    prerequisite:
      "One tested m07 screen, its state table and your ranked problem list.",
    why: "Fidelity is not a stage you graduate to. It is a trade: each layer of detail settles some questions and makes others expensive to reopen.",
    teach: [
      "Raising fidelity settles type, colour, spacing and imagery — and makes structural questions costly to reopen.",
      "Feedback follows finish. A polished screen draws comments on colour; a rough one draws comments on order.",
      "Decide what this version is for before you draw it: agreeing content order, or agreeing how it should be built.",
      "Craft is not decoration. It is whether people can tell what is actionable, what changed and what state they are in.",
      "Keep the low-fidelity version. You will need it when a structural question comes back.",
    ],
    explanation: [
      "Every increase in fidelity buys precision and costs flexibility. At wireframe level you can move a whole section in a minute and nobody argues about it, because nothing looks decided. Once type, colour and imagery are settled, the same move requires redoing work that other people have already approved, so it stops being proposed — which is why structural mistakes that survive into high fidelity tend to ship.",
      "This is also why feedback changes character. People respond to what looks unfinished, so a polished screen collects comments about tone and colour while the content order goes unexamined. If you need a decision about order, show the rough version; if you need a decision about how something should be built, show the detailed one. Deciding which conversation you are having before you open the file is most of the skill.",
      "Interface craft is not the same as decoration, and the difference is testable. Craft is whether a person can tell at a glance which element is the action, whether something has changed since they last looked, whether an item is selected, disabled or merely quiet, and whether two similar things are actually different. Those are perceptual questions with right answers, and they survive being viewed in greyscale, at arm's length, and by someone who has never seen the screen before.",
      "Keep every earlier version. A structural question will come back — a tree test result, a new constraint, an engineer's estimate — and having the rough version to return to is what lets you answer it without unpicking a week of detail.",
    ],
    misconception:
      "“High fidelity means the design is further along.” It means the design is more expensive to change. A polished screen built on an untested structure is further from shipping than a rough one built on a tested structure, because the expensive rework is still ahead of it.",
    example:
      "A booking screen taken from wireframe to interface settled six things: type scale, the price treatment, the button hierarchy, the spacing rhythm, the image size and the state colours. It also hid two: with real type sizes the description no longer fit above the fold, which the wireframe had implied it would, and the availability line — which the paper test had shown people looking for — became visually quiet enough that two reviewers did not mention it at all. Both were caught only because the wireframe was still on the table beside it.",
    freeToolPath:
      "Paper and coloured pencils, or one local HTML file with a small stylesheet. A design tool is convenient and not required; hand-written SVG or plain CSS produces a real, exportable screen with no account.",
    outputs: [
      "One screen at interface fidelity, beside its wireframe",
      "A list of what the added detail decided",
      "A list of what the detail hid or made quiet",
      "One question you can no longer ask cheaply, and how you would answer it",
    ],
    steps: [
      {
        minutes: 20,
        title: "Choose and read",
        instructions: [
          "Pick the m07 screen your paper test raised the most problems about.",
          "Read the assigned component guidance for one component that appears on it.",
          "Write in one sentence what this version of the screen is for.",
        ],
      },
      {
        minutes: 35,
        title: "Raise the fidelity",
        instructions: [
          "Apply your m03 type scale and spacing to the screen.",
          "Use real content at its longest, not sample text.",
          "Settle the button hierarchy, the price treatment and the state colours.",
        ],
      },
      {
        minutes: 25,
        title: "Compare with the wireframe",
        instructions: [
          "Put both versions side by side.",
          "List what the detail decided that the wireframe had left open.",
          "List anything that became quiet, cramped or invisible.",
        ],
      },
      {
        minutes: 25,
        title: "Test the craft claims",
        instructions: [
          "View both in greyscale and mark anything you can no longer distinguish.",
          "Look from arm's length and name the first three things you see.",
          "Check the order matches what the task needs first.",
        ],
      },
      {
        minutes: 15,
        title: "Record the trade",
        instructions: [
          "Write the question that is now expensive to reopen.",
          "Write how you would answer it if you had to.",
          "Save both versions together; do not discard the wireframe.",
        ],
      },
    ],
    check: [
      {
        question: "Why does a polished screen collect different feedback?",
        answer:
          "Because people respond to what looks unfinished. Detail signals that ordering decisions are settled, so reviewers move to tone and colour and the structure goes unexamined.",
      },
      {
        question: "What makes craft testable rather than a matter of taste?",
        answer:
          "It asks perceptual questions with answers: can a person tell what is actionable, what changed, what is selected. Those survive greyscale, distance and a first-time viewer.",
      },
      {
        question: "Why keep the wireframe after raising fidelity?",
        answer:
          "Because a structural question will return, and answering it from the rough version costs minutes rather than unpicking a week of detail.",
      },
    ],
    rubric: [
      "The screen uses real content and a stated type and spacing scale",
      "What the detail decided is listed explicitly",
      "What became quiet or hidden is identified",
      "The now-expensive question is named with a way to answer it",
    ],
    criteria: [
      {
        criterion: "The screen uses real content and a stated type and spacing scale",
        evidence:
          "An interface-fidelity screen using your m03 scale, with real labels at their longest rather than sample text.",
        levels: [
          "Sample text or invented content.",
          "Real content but sizes chosen per element rather than from a scale.",
          "Real content at its longest, using the stated scale throughout.",
          "As adequate, and a scale step was changed with the reason recorded.",
        ],
        remediation:
          "Replace every string with the real one from your m06 labelling table, then map each text element to a step in your scale.",
        recheck: "The screen with a scale map beside it.",
      },
      {
        criterion: "What the detail decided is listed explicitly",
        evidence:
          "A list naming each decision the wireframe had left open and this version has now settled.",
        levels: [
          "No list.",
          "A general statement that the design is more detailed.",
          "Each settled decision named specifically.",
          "As adequate, and one decision is marked as provisional with what would reopen it.",
        ],
        remediation:
          "Put the two versions side by side and note every difference. Each difference is a decision; name it.",
        recheck: "The decision list.",
      },
      {
        criterion: "What became quiet or hidden is identified",
        evidence:
          "A list of elements that lost prominence, plus the greyscale and arm's-length results.",
        levels: [
          "Not examined.",
          "Examined by impression, with no greyscale or distance check.",
          "Both checks run and losses named specifically.",
          "As adequate, and one loss is repaired and re-checked.",
        ],
        remediation:
          "View the screen in greyscale and from two metres. Write down anything you cannot find that the task needs.",
        recheck: "The check results and any repair.",
      },
      {
        criterion: "The now-expensive question is named with a way to answer it",
        evidence:
          "One structural question that fidelity has made costly, with the cheapest route to an answer.",
        levels: [
          "Not identified.",
          "A question named with no route to an answer.",
          "Question and route both stated.",
          "As adequate, and the route uses the retained wireframe rather than the detailed screen.",
        ],
        remediation:
          "Ask what you would now resist changing. That resistance names the question.",
        recheck: "The question and its route.",
      },
    ],
    repairs: [
      "If the screen uses sample text, replace it with your real labels at their longest.",
      "If no decision list exists, compare the two versions difference by difference.",
      "If nothing was checked in greyscale, run that check and name what disappears.",
      "If no expensive question is named, ask what you would now resist changing.",
    ],
    portfolio:
      "Case-study material: a wireframe and its interface version side by side, with what each decided, shows judgement rather than only output.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "One component that appears on your screen, read for its usage guidance and states rather than its visual style.",
        purpose:
          "Shows the level of specification a production component carries before anyone builds it.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Do not copy the government visual style or brand; the reasoning transfers, the aesthetic is one design system's.",
        fallbackId: "R06",
      },
      {
        ...heuristics,
        section:
          "Heuristic 4, consistency and standards, and heuristic 8, aesthetic and minimalist design.",
        purpose:
          "Frames craft decisions as questions about recognition and noise rather than taste.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic names a candidate problem; the greyscale and distance checks are the evidence in this lesson.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l02-v1",
    module: "m08",
    week: 8,
    day: 2,
    level: 3,
    areas: [8],
    guided: true,
    title: "The component inventory hiding in your screens",
    objective:
      "Audit your own screens into a component inventory, merge the near-duplicates and record which merges lost a real distinction.",
    bringForward:
      "Every screen you have drawn in m07 and lesson 1, including the exception states.",
    prerequisite: "All your m07 screens, including error and empty states.",
    why: "Products accumulate seven button styles and four card layouts by accident. An audit turns that into a decision.",
    teach: [
      "A component is a repeated pattern with a job, not any box you drew twice.",
      "Audit before you design: list what exists, then decide what should exist.",
      "Near-duplicates are the finding. Two cards differing by 4px are one component and a mistake.",
      "Some duplicates are real distinctions. Merging them silently removes meaning people were using.",
      "Name components by job — action, status, item — not by appearance.",
    ],
    explanation: [
      "The useful definition of a component is a pattern that repeats and carries a job: a way to trigger an action, to show the status of something, to represent one item in a list. Anything that appears once is a layout, not a component, and treating it as one produces a library full of single-use entries that nobody can navigate. The test is whether you can name the job and point to two or more places it is done.",
      "Auditing before designing is what keeps the library honest. Screens accumulate variations without anyone choosing them: a button that is 2px taller because it was drawn on a different day, a card with slightly different padding because the content was longer. Laid out side by side these become obviously accidental, and the merge is uncontroversial. Designed from scratch instead, you tend to invent the tidy set you wish existed and then discover it does not cover the real screens.",
      "Not every duplicate is accidental. Two visually similar cards may distinguish a bookable class from a cancelled one, and merging them removes a signal people were relying on even if nobody could articulate it. So each merge needs a sentence: what distinction did these two carry, and what now carries it — colour, position, a label, or nothing. A merge ending in “nothing” is a decision to remove meaning, which is sometimes right and never accidental.",
      "Name by job rather than appearance. “Primary action” survives a redesign; “green button” does not, and the day someone makes it blue the name becomes a small lie that everyone has to remember. The same applies to “card”, which describes a shape rather than a purpose — “class summary” tells a reader what belongs inside it.",
    ],
    misconception:
      "“We need a design system before we can design.” You need an inventory. A component library invented ahead of real screens describes an imaginary product, and the first week of real work breaks it. Audit what you actually drew, then generalise the parts that repeat.",
    example:
      "An audit of nine screens found five button variants: three were the same intent drawn on different days, one was a genuinely different job — a destructive cancel — and one was a link wearing a button's clothes. It found three card layouts that were one card with different content lengths. The merges reduced five buttons to three real jobs and three cards to one, and one merge was recorded as a loss: the cancelled-class card had used a lighter background, and after merging, cancelled status rested entirely on a text label, which was noted as a candidate problem for the next test.",
    freeToolPath:
      "Print or sketch every screen, cut out each repeated element and group them on a table. Photograph the groups. This is faster than any tool and shows near-duplicates immediately.",
    outputs: [
      "A component inventory listing every repeated element and its job",
      "A merge table: what was merged and what distinction it carried",
      "A list of merges that lost a distinction, with what now carries it",
      "Job-based names for every component you keep",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read one specification",
        instructions: [
          "Read the assigned component page for one component you use.",
          "Note what it specifies beyond appearance: states, content rules, when not to use it.",
        ],
      },
      {
        minutes: 35,
        title: "Cut and group",
        instructions: [
          "Lay out every screen you have, including error and empty states.",
          "Mark every element that appears more than once.",
          "Group the marked elements by what they do, not how they look.",
        ],
      },
      {
        minutes: 25,
        title: "Find the near-duplicates",
        instructions: [
          "Within each group, put visually similar items side by side.",
          "Record the exact differences: size, weight, padding, colour.",
          "Mark each difference accidental or meaningful.",
        ],
      },
      {
        minutes: 25,
        title: "Merge and record the losses",
        instructions: [
          "Merge accidental variants into one component.",
          "For each merge write what distinction the two carried.",
          "Write what now carries that distinction, or that nothing does.",
        ],
      },
      {
        minutes: 15,
        title: "Name by job",
        instructions: [
          "Rename every component after the job it does.",
          "Remove any name describing colour, size or shape.",
          "Save the inventory, the merge table and the loss list.",
        ],
      },
    ],
    check: [
      {
        question: "What makes something a component rather than a layout?",
        answer:
          "It repeats and carries a nameable job. If it appears once, it is a layout; putting it in a library adds an entry nobody can reuse.",
      },
      {
        question: "Why audit before designing the set?",
        answer:
          "Because a set invented ahead of real screens describes an imaginary product. The audit shows which variations are accidental and which are load-bearing.",
      },
      {
        question: "Why name components by job?",
        answer:
          "Because appearance changes. “Primary action” survives a restyle; “green button” becomes a lie the whole team has to remember around.",
      },
    ],
    rubric: [
      "Every repeated element is inventoried with its job",
      "Near-duplicates are compared with exact differences recorded",
      "Merges that lost a distinction are named",
      "Components are named by job, not appearance",
    ],
    criteria: [
      {
        criterion: "Every repeated element is inventoried with its job",
        evidence:
          "An inventory covering all your screens including exception states, each entry naming the job it does.",
        levels: [
          "A list of screens rather than components.",
          "Components listed without jobs, or only from the happy path.",
          "Every repeated element from every screen, each with a job.",
          "As adequate, and single-use elements are marked as layouts rather than promoted to components.",
        ],
        remediation:
          "Go through the error, empty and loading screens specifically; they usually hold the elements the audit missed.",
        recheck: "The extended inventory.",
      },
      {
        criterion: "Near-duplicates are compared with exact differences recorded",
        evidence:
          "Side-by-side comparisons naming the specific difference — size, weight, padding, colour — for each near-duplicate.",
        levels: [
          "Near-duplicates not identified.",
          "Identified but differences described as “slightly different”.",
          "Exact differences recorded for each pair.",
          "As adequate, and each difference is marked accidental or meaningful with a reason.",
        ],
        remediation:
          "Put each pair on one line and measure. “Slightly different” is not a finding; 4px is.",
        recheck: "The comparison table.",
      },
      {
        criterion: "Merges that lost a distinction are named",
        evidence:
          "A loss list stating, for each merge, what the two variants distinguished and what now carries it.",
        levels: [
          "Merges made with no record.",
          "Merges recorded but losses not examined.",
          "Every merge states the distinction and its new carrier, including “nothing”.",
          "As adequate, and each “nothing” row is either repaired or listed as a candidate problem to test.",
        ],
        remediation:
          "For each merge, ask what a person could tell before that they cannot tell now. Write the answer even when it is “nothing”.",
        recheck: "The loss list.",
      },
      {
        criterion: "Components are named by job, not appearance",
        evidence:
          "A name per component describing purpose, with no colour, size or shape words.",
        levels: [
          "Names describe appearance.",
          "Mixed naming.",
          "All names describe the job.",
          "As adequate, and one name was changed because the component turned out to do two jobs, which were split.",
        ],
        remediation:
          "Search your names for colour and shape words and rewrite each as what the element is for.",
        recheck: "The renamed inventory.",
      },
    ],
    repairs: [
      "If exception states were skipped, audit them; they hold the missing components.",
      "If differences read as “slightly different”, measure and record the exact values.",
      "If merges have no loss line, write what a person can no longer tell.",
      "If names describe colour or shape, rename them after the job.",
    ],
    portfolio:
      "Good case-study evidence of systems thinking: an audit with merges and named losses shows you reduce deliberately rather than tidy by instinct.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "Two components you use, read for what each specifies: states, content rules and when not to use it.",
        purpose:
          "Sets the standard for what a component entry must say beyond how it looks.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is one organisation's library for government services; borrow the specification habit, not the components or the brand.",
        fallbackId: "R06",
      },
      {
        ...styles,
        section: "The layout and spacing sections.",
        purpose:
          "Gives the spacing vocabulary that makes accidental variants visible as accidents.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning rather than copying the values; the scale is one considered option.",
        fallbackId: "R03",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l03-v1",
    module: "m08",
    week: 8,
    day: 3,
    level: 3,
    areas: [8],
    guided: true,
    title: "Actions: hierarchy, targets and labels",
    objective:
      "Specify your action components at three levels of emphasis with measured target sizes and verb-first labels, and prove the hierarchy survives greyscale.",
    bringForward:
      "The action components from your inventory and the screens they appear on.",
    prerequisite: "Your component inventory and the screens using its actions.",
    why: "If a person cannot tell in a glance which action is the main one, every screen costs a decision it did not need to.",
    teach: [
      "Three levels of emphasis is usually enough: primary, secondary, and quiet.",
      "One primary action per screen. Two primaries means the screen has two jobs.",
      "Emphasis must survive greyscale: weight, size and containment, not colour alone.",
      "Label with the verb of the outcome: “Book a place”, not “Submit” or “OK”.",
      "Targets need physical size and spacing, especially near destructive actions.",
    ],
    explanation: [
      "Emphasis is comparative, so a hierarchy exists only if the levels differ in more than one dimension. A primary action that differs from a secondary one only by colour disappears for a person with a colour-vision deficiency, in bright sunlight, or in a greyscale printout — and those are the ordinary conditions your booking screen will meet on a phone outside. Containment, weight and size are what carry emphasis reliably; colour is a reinforcement, not the signal.",
      "One primary per screen is a structural rule more than a visual one. When you find two, the honest reading is usually that the screen is doing two jobs, and the fix is to split the screen or to decide which job it is actually for. Screens with three primaries teach people to read everything as equally urgent, after which nothing is emphasised at all.",
      "Labels carry more weight than the styling. “Submit” describes what the software does; “Book a place” describes what the person gets, and a person scanning for their outcome finds the second and not the first. Verb-first labels also make destructive actions honest: “Cancel booking” beside “Keep booking” is unambiguous, while “Yes” and “No” beside a question people did not read carefully is a trap.",
      "Target size is a physical property, not a style. A control that is comfortable with a mouse can be unreachable with a thumb on a moving bus, and a destructive action sitting next to a common one converts a slip into a loss. Give consequential actions space as well as size, and put distance between actions whose outcomes differ sharply.",
    ],
    misconception:
      "“Make the important button a stronger colour.” Colour alone is the weakest available signal: it fails in greyscale, in sunlight, for some readers, and when your palette is later changed by someone else. Carry emphasis in weight, size and containment first, then add colour.",
    example:
      "A screen had two filled buttons of equal weight — “Book a place” and “Add to shortlist” — and a text link for “Cancel booking”. In greyscale the two filled buttons were indistinguishable, and in the m07 paper test one participant had tapped the shortlist button believing she had booked. The repair made booking the only filled action, shortlist an outlined secondary, and cancellation a quiet action moved away from both with its own confirmation. Targets were measured rather than eyeballed, and the destructive action was given clear separation from the primary one.",
    freeToolPath:
      "Draw the three levels at real size on paper, photograph them and convert the photograph to greyscale on your phone. Measure targets with a ruler against your own screen; no plugin or tool is needed.",
    outputs: [
      "Three action levels specified: primary, secondary and quiet",
      "A greyscale test showing the hierarchy still readable",
      "Measured target sizes and spacing for each level",
      "Verb-first labels for every action on your screens",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and audit",
        instructions: [
          "Read the assigned button guidance and the law page on target size.",
          "List every action across your screens and mark its current emphasis.",
          "Mark any screen carrying more than one primary action.",
        ],
      },
      {
        minutes: 30,
        title: "Specify three levels",
        instructions: [
          "Define primary, secondary and quiet with weight, size and containment.",
          "Make each level differ from the next in at least two properties.",
          "Add colour last, as reinforcement rather than as the signal.",
        ],
      },
      {
        minutes: 25,
        title: "Rewrite the labels",
        instructions: [
          "Rewrite each label to lead with the verb of the person's outcome.",
          "Replace every OK, Submit, Yes and No.",
          "Pair destructive labels with an explicit safe alternative.",
        ],
      },
      {
        minutes: 30,
        title: "Measure and test",
        instructions: [
          "Measure each target's size and the spacing around it at phone size.",
          "Increase spacing between actions with sharply different outcomes.",
          "View every screen in greyscale and mark anything you cannot rank.",
        ],
      },
      {
        minutes: 15,
        title: "Fix and record",
        instructions: [
          "Repair the worst greyscale failure by changing weight or containment.",
          "Record any screen you split because it had two primaries.",
          "Save the specification with the greyscale evidence.",
        ],
      },
    ],
    check: [
      {
        question: "Why must emphasis differ in more than one property?",
        answer:
          "Because a single property fails in ordinary conditions — greyscale, sunlight, colour-vision deficiency, a later palette change. Two properties keep the ranking readable when one is lost.",
      },
      {
        question: "What does a screen with two primary actions usually mean?",
        answer:
          "That it is doing two jobs. Deciding which job the screen is for, or splitting it, is the real fix; restyling one button hides the problem.",
      },
      {
        question: "Why does “Submit” lose to “Book a place”?",
        answer:
          "Because people scan for their own outcome, not for the system's operation. The verb of the outcome is findable; the system's verb has to be translated first.",
      },
    ],
    rubric: [
      "Three levels differ in at least two properties each",
      "One primary action per screen, or the screen was split",
      "Labels lead with the verb of the outcome",
      "Targets and spacing are measured, not estimated",
    ],
    criteria: [
      {
        criterion: "Three levels differ in at least two properties each",
        evidence:
          "A specification giving weight, size and containment per level, plus a greyscale rendering where the ranking is still readable.",
        levels: [
          "Levels differ by colour only.",
          "Two properties differ but the greyscale test was not run.",
          "Two or more properties per level, verified in greyscale.",
          "As adequate, and the specification says which property carries the ranking when colour is unavailable.",
        ],
        remediation:
          "Convert your buttons to greyscale. If you cannot rank them, change weight or containment until you can, then note which change did it.",
        recheck: "The greyscale rendering and the revised specification.",
      },
      {
        criterion: "One primary action per screen, or the screen was split",
        evidence:
          "A per-screen list showing a single primary, with any exception justified or resolved by splitting.",
        levels: [
          "Multiple primaries left in place.",
          "Identified but unresolved.",
          "One primary per screen, or a recorded split.",
          "As adequate, and a screen that resisted splitting is documented with the trade-off accepted.",
        ],
        remediation:
          "For each screen with two primaries, write the two jobs it is doing. Then choose one or split the screen.",
        recheck: "The per-screen list and any split.",
      },
      {
        criterion: "Labels lead with the verb of the outcome",
        evidence:
          "Every action label rewritten as the person's outcome, with no OK, Submit, Yes or No remaining.",
        levels: [
          "System vocabulary retained.",
          "Mostly rewritten, with generic labels left on confirmations.",
          "All labels are verb-first outcomes, including destructive pairs.",
          "As adequate, and one label was lengthened deliberately to remove ambiguity.",
        ],
        remediation:
          "Read each label aloud as the sentence “I want to …”. Rewrite any that does not complete it.",
        recheck: "The label list.",
      },
      {
        criterion: "Targets and spacing are measured, not estimated",
        evidence:
          "Recorded measurements at phone size for each level, and increased spacing around consequential actions.",
        levels: [
          "No measurements.",
          "Sizes recorded but spacing near destructive actions unexamined.",
          "Sizes and spacing measured, with separation added where outcomes differ sharply.",
          "As adequate, and the check was done with a thumb on a real device rather than a cursor.",
        ],
        remediation:
          "Print the screen at real size and try each action with your thumb. Anything you hit twice or mis-hit needs size or space.",
        recheck: "The measurements and the thumb-test note.",
      },
    ],
    repairs: [
      "If ranking fails in greyscale, change weight or containment, not colour.",
      "If a screen has two primaries, name its two jobs and split or choose.",
      "If a label is Submit, OK, Yes or No, rewrite it as the outcome.",
      "If targets were eyeballed, measure them at phone size and record the values.",
    ],
    portfolio:
      "Portfolio material with proof attached: a greyscale hierarchy test and measured targets are concrete, checkable craft evidence.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "The button component, read for variants, when to use each and its content guidance.",
        purpose:
          "Gives a worked specification of action emphasis and labelling from a production library.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its variants suit government transactional services; take the specification and the labelling reasoning, not the colours.",
        fallbackId: "R06",
      },
      {
        ...laws,
        section: "The assigned pages only: fittss-law and law-of-proximity.",
        purpose:
          "Explains why target size, distance and grouping change how quickly and safely an action is hit.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site publishes no caveats: a law describes a tendency, and your measured thumb test is the evidence. A printed poster is sold and also offered free; no purchase is required.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l04-v1",
    module: "m08",
    week: 8,
    day: 4,
    level: 3,
    areas: [8],
    guided: true,
    title: "Inputs and forms at production quality",
    objective:
      "Take one form to production quality with persistent labels, inline help, field-level errors that preserve input, and a keyboard pass recorded honestly.",
    bringForward:
      "The form from your m07 authentication or booking flow, with its message wording.",
    prerequisite: "One m07 form and the error wording you already wrote.",
    why: "Forms are where products lose people who had already decided to say yes.",
    teach: [
      "Labels stay visible. A placeholder disappears exactly when the person needs it.",
      "Put help before the field, not after the mistake it would have prevented.",
      "Errors belong at the field, name the fix, and never clear what was typed.",
      "Group related fields and let one question occupy one line where it helps.",
      "Accept what people type: spaces in card numbers, any phone format, pasted text.",
    ],
    explanation: [
      "A persistent label is not a style preference. Once someone types, a placeholder is gone, and with it the only statement of what the field wanted — which matters most when they return to check before submitting, or when an error sends them back to a field they filled ten minutes ago. The assigned tutorial covers labels, instructions, validation and notifications precisely, and its requirements are the floor rather than an aspiration.",
      "Help placed before the field prevents the error; help placed in the error message only explains it. If a password needs a number, say so under the label, not after a rejected attempt. This is the cheapest quality improvement in most forms, and it is invisible in a screenshot, which is why it survives so rarely from wireframe to build unless you specify it.",
      "Errors have three obligations: appear at the field they concern, say what to do rather than what went wrong, and preserve everything already entered. A page-level “There is a problem” summary is useful in addition, particularly for someone using a screen reader, but it must link to the field. Clearing a form after an error is the single most reliable way to end a session.",
      "Be generous about input. People paste card numbers with spaces, write phone numbers with country codes or without, capitalise names differently, and type dates in the format they grew up with. Rejecting those is a decision to make the person work for your parser. Normalise on your side, echo back what you understood, and reserve rejection for what you genuinely cannot interpret.",
    ],
    misconception:
      "“Inline validation on every keystroke helps people.” Validating a half-typed email as invalid teaches people they are failing while they are still working. Validate on leaving the field, or on submission, and reserve immediate feedback for things that can only improve — like a strength meter that never says “wrong”.",
    example:
      "A booking form used placeholders as labels, validated the phone number on every keystroke, and cleared the form on a failed submission. Rebuilt: labels above every field and permanently visible; a line under the phone field saying which formats are accepted; validation on leaving the field; errors shown at the field with the fix stated; and everything preserved after a failure, with the page-level summary linking to the first problem. A keyboard pass found that the date control could be reached but not operated without a mouse, which was recorded as an implementation issue rather than claimed as fixed.",
    freeToolPath:
      "Specify the form on paper with the exact wording for label, help and error per field. To test behaviour, one local HTML file with labelled inputs shows tab order and error handling honestly with no framework or account.",
    outputs: [
      "A field-by-field table: label, help, error wording and accepted formats",
      "A form specification where input survives a failed submission",
      "A keyboard pass recording what worked and what could not be verified",
      "One prevented error: help moved before the field that caused it",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the requirements",
        instructions: [
          "Read the assigned sections on labels, instructions, validation and notifications.",
          "List the rules you will apply to every field.",
          "Mark which rules your current form breaks.",
        ],
      },
      {
        minutes: 30,
        title: "Write the field table",
        instructions: [
          "For each field write its label, its help text and its error wording.",
          "State the input formats you will accept without complaint.",
          "Delete any field you cannot justify by a decision it serves.",
        ],
      },
      {
        minutes: 25,
        title: "Move help before the mistake",
        instructions: [
          "Find each error caused by a rule people could not know.",
          "Move that rule under the label as help text.",
          "Keep the error message for the case where help was missed.",
        ],
      },
      {
        minutes: 25,
        title: "Design the failure path",
        instructions: [
          "Specify that all entered values are preserved after a failed submission.",
          "Add a page-level summary that links to the first field with a problem.",
          "State when validation runs: on leaving a field, or on submission.",
        ],
      },
      {
        minutes: 15,
        title: "Keyboard pass and record",
        instructions: [
          "Tab through the form and note the order and whether focus is visible.",
          "Record anything you could not verify without building it.",
          "Save the field table and the keyboard notes.",
        ],
      },
    ],
    check: [
      {
        question: "Why is a placeholder not a label?",
        answer:
          "It disappears when typing starts, so it is absent exactly when someone checks their answers or returns after an error — the two moments the label exists for.",
      },
      {
        question: "Where does help belong?",
        answer:
          "Before the field, under the label, where it prevents the mistake. In the error message it only explains a failure that need not have happened.",
      },
      {
        question: "Why avoid validating on every keystroke?",
        answer:
          "Because a half-typed entry is not yet wrong, and telling someone they are failing while they work is discouraging. Validate on leaving the field or on submission.",
      },
    ],
    rubric: [
      "Every field has a persistent label and stated accepted formats",
      "Help appears before the mistake it prevents",
      "Errors sit at the field and input survives failure",
      "A keyboard pass is recorded, including what was not verified",
    ],
    criteria: [
      {
        criterion: "Every field has a persistent label and stated accepted formats",
        evidence:
          "A field table listing label, help and the input formats accepted without complaint.",
        levels: [
          "Placeholders used as labels.",
          "Labels present but accepted formats unstated.",
          "Persistent labels and stated formats for every field.",
          "As adequate, and at least one field was removed because no decision needed it.",
        ],
        remediation:
          "List each field and write what the person must be able to see after typing. Any field relying on a placeholder needs a label.",
        recheck: "The field table.",
      },
      {
        criterion: "Help appears before the mistake it prevents",
        evidence:
          "At least one rule moved from an error message to help text under the label.",
        levels: [
          "All guidance lives in error messages.",
          "Help added but the corresponding error still carries the rule for the first time.",
          "Rules people could not know appear as help before the field.",
          "As adequate, and the write-up names which error should now become rare.",
        ],
        remediation:
          "Read each error message and ask whether the person could have known the rule. If not, the rule belongs above the field.",
        recheck: "The revised help and error wording.",
      },
      {
        criterion: "Errors sit at the field and input survives failure",
        evidence:
          "A specification placing each error at its field, stating the fix, preserving input, and linking any summary to the field.",
        levels: [
          "Page-level errors only, or input cleared on failure.",
          "Field-level errors but no preservation stated.",
          "Field errors, stated fixes, preserved input and a linked summary.",
          "As adequate, and the specification states when validation runs and why.",
        ],
        remediation:
          "Write what the screen looks like immediately after a failed submission, field by field. Anything missing from it will be lost in the build.",
        recheck: "The failure-path specification.",
      },
      {
        criterion: "A keyboard pass is recorded, including what was not verified",
        evidence:
          "Notes on tab order and focus visibility, with an explicit statement of what could not be checked without an implementation.",
        levels: [
          "No keyboard consideration.",
          "Claimed to work with no evidence.",
          "Pass recorded with unverifiable items named.",
          "As adequate, and one ordering problem was found and repaired in the specification.",
        ],
        remediation:
          "Tab through a built version, even a rough local HTML file. If nothing is built, record every keyboard claim as untested rather than assumed.",
        recheck: "The keyboard notes.",
      },
    ],
    repairs: [
      "If placeholders act as labels, add persistent labels above each field.",
      "If a rule appears first in an error, move it under the label as help.",
      "If input is cleared on failure, specify preservation and a linked summary.",
      "If keyboard behaviour is claimed, test it or mark it untested.",
    ],
    portfolio:
      "Strong evidence of production thinking. A field table with help, errors and accepted formats is the artefact an engineer can build from and a reviewer can check.",
    resource: forms,
    resources: [
      {
        ...forms,
        section:
          "Labels, instructions, validating input and user notifications.",
        purpose:
          "Supplies the requirements this lesson applies field by field.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form craft or content; implemented keyboard and screen-reader behaviour still needs testing in a real build.",
        fallbackId: "R10",
      },
      {
        ...components,
        section:
          "The text input and error message components, read for their content and usage rules.",
        purpose:
          "Shows a worked example of input, hint and error specification in one place.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government form conventions assume an obligation to complete; a commercial form must earn the same attention, so borrow the structure and question the tone.",
        fallbackId: "R06",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l05-v1",
    module: "m08",
    week: 8,
    day: 5,
    level: 3,
    areas: [8],
    guided: true,
    title: "Navigation components at two widths",
    objective:
      "Specify the navigation for your product at narrow and wide widths, showing where you are, what else exists and how to get back, without hiding anything people need.",
    bringForward:
      "Your m06 structure and change note, and the screens from lesson 1.",
    prerequisite: "Your m06 structure and one screen at interface fidelity.",
    why: "Navigation is where information architecture becomes something people can see. A good structure with an unusable menu is an unusable product.",
    teach: [
      "Navigation answers three questions: where am I, what else is there, how do I get back.",
      "Current location needs a signal that is not colour alone.",
      "A menu behind an icon costs a tap and some discovery; measure that cost before paying it.",
      "Narrow screens need priority, not concealment. Decide what stays visible.",
      "Back must be predictable: within a task, back is one step, not out of the task.",
    ],
    explanation: [
      "Every navigation component is answering the same three questions, and it is worth checking each against them explicitly. Where am I is the one most often skipped: without a current-location signal a person navigating by menu has to remember their own path, and that is precisely the memory cost that recognition-based interfaces exist to remove. The signal must survive greyscale, so a coloured tab label alone is not enough — weight, an underline, or a shape change carries it.",
      "Hiding a menu behind an icon is a real trade, not a default. It buys space and costs a tap plus some discovery, and the cost falls hardest on people who do not already know what is inside. On a narrow screen the trade is often worth making for secondary destinations and rarely worth making for the one or two things people came to do, which should stay visible as actions rather than becoming menu items.",
      "Priority is the honest response to a small screen. Decide what stays visible — usually the current task's primary action and the route back — and let the rest collapse. Concealment without priority is what produces a phone header containing a logo, a search icon, a menu icon and nothing the person needed.",
      "Back behaviour has to be decided rather than inherited. Inside a multi-step task, back should return to the previous step with the entered values intact; from a detail view it should return to the list, at the position and with the filters the person left. The browser's own back button will also be used, and a design that breaks under it will lose people who trusted it.",
    ],
    misconception:
      "“The hamburger menu is fine, everyone knows it.” Recognition of the icon is not the issue; what is behind it is. People do not open menus to browse, so anything essential placed there is effectively removed for anyone who does not already know it exists.",
    example:
      "A phone header held a logo, a search icon and a menu icon; the only route to “Change or cancel a booking” was inside the menu, and in the m07 paper test two people said they would ring instead. The revision kept the logo small, put the current section name in the header as the location signal, promoted “My bookings” to a visible item, and left genuinely secondary destinations in the menu. On the wide layout the same items appeared as a row with the current one underlined and bolded, and the underline was checked in greyscale.",
    freeToolPath:
      "Draw both widths on paper at real size, then walk three tasks with a finger and count taps. A local HTML file with a list and a media query shows real collapse behaviour if you want to see it move.",
    outputs: [
      "Navigation specified at narrow and wide widths",
      "A current-location signal that survives greyscale",
      "A stated rule for what stays visible and what collapses",
      "Back behaviour defined for a task step and for a detail view",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and list destinations",
        instructions: [
          "Read the assigned responsive layout chapter.",
          "List every destination in your structure and mark the two or three people need most.",
          "Note which destinations came from the m06 tree test as high-traffic.",
        ],
      },
      {
        minutes: 30,
        title: "Design the wide layout",
        instructions: [
          "Place global destinations, keeping the set short.",
          "Add a current-location signal using weight or an underline, not colour alone.",
          "Show where local navigation for a section appears.",
        ],
      },
      {
        minutes: 30,
        title: "Design the narrow layout",
        instructions: [
          "Decide what stays visible on a phone and write the rule you used.",
          "Collapse only secondary destinations; keep the current task's action visible.",
          "Show the menu's open state, not just the closed one.",
        ],
      },
      {
        minutes: 25,
        title: "Define back",
        instructions: [
          "Write what back does inside a multi-step task.",
          "Write what back does from a detail view, including filters and scroll position.",
          "Check the design still works if the browser's back button is used instead.",
        ],
      },
      {
        minutes: 15,
        title: "Test and record",
        instructions: [
          "Walk three tasks at narrow width and count taps to each.",
          "View both layouts in greyscale and confirm the location signal survives.",
          "Save both layouts with the visibility rule and back behaviour.",
        ],
      },
    ],
    check: [
      {
        question: "Why is a current-location signal worth the space?",
        answer:
          "Because without it people must remember their own path. Showing location converts a memory task into a recognition one, which is far cheaper for the reader.",
      },
      {
        question: "What does hiding a destination in a menu actually cost?",
        answer:
          "A tap plus discovery. People do not open menus to browse, so anything essential inside is effectively unavailable to anyone who does not already know it is there.",
      },
      {
        question: "Why specify back behaviour explicitly?",
        answer:
          "Because inherited behaviour breaks tasks: back from a detail view that loses filters and position makes comparison expensive, and people stop comparing.",
      },
    ],
    rubric: [
      "Navigation answers where am I, what else, how back",
      "The location signal survives greyscale",
      "A visibility rule for narrow screens is stated",
      "Back is defined for a task step and a detail view",
    ],
    criteria: [
      {
        criterion: "Navigation answers where am I, what else, how back",
        evidence:
          "Both layouts annotated with how each of the three questions is answered.",
        levels: [
          "Destinations listed with no location or return signal.",
          "Two of the three questions answered.",
          "All three answered at both widths.",
          "As adequate, and the annotation names which question was weakest before this lesson.",
        ],
        remediation:
          "Take one screen and write the three answers beside it. Any blank answer is a missing component.",
        recheck: "The annotated layouts.",
      },
      {
        criterion: "The location signal survives greyscale",
        evidence:
          "A greyscale rendering where the current destination is still identifiable.",
        levels: [
          "Location shown by colour alone, or not at all.",
          "A second signal exists but was not checked in greyscale.",
          "Checked and identifiable without colour.",
          "As adequate, and the signal is also stated for a screen reader as text rather than styling.",
        ],
        remediation:
          "Convert the navigation to greyscale. If you cannot tell where you are, add weight, an underline or a shape change.",
        recheck: "The greyscale rendering.",
      },
      {
        criterion: "A visibility rule for narrow screens is stated",
        evidence:
          "A written rule naming what stays visible and what collapses, with the reason.",
        levels: [
          "Everything collapsed into a menu by default.",
          "A rule implied by the drawing but not written.",
          "The rule is written with its reason.",
          "As adequate, and the rule protects the current task's action explicitly.",
        ],
        remediation:
          "Write the sentence “on a phone, these stay visible because …”. If the list is empty, the design has hidden the product.",
        recheck: "The written rule.",
      },
      {
        criterion: "Back is defined for a task step and a detail view",
        evidence:
          "Two written behaviours, including what is preserved, and a note on browser back.",
        levels: [
          "Back undefined.",
          "One case defined.",
          "Both defined with preserved state named.",
          "As adequate, and the design was checked against the browser's own back button.",
        ],
        remediation:
          "Walk your own flow: go into a detail view and come back. Write down everything you lost, then specify that it is preserved.",
        recheck: "The two back behaviours.",
      },
    ],
    repairs: [
      "If location is unclear, add a non-colour signal and re-check in greyscale.",
      "If everything collapses on a phone, write a visibility rule that protects the task.",
      "If back is undefined, specify it for a task step and a detail view.",
      "If essential items sit in the menu, promote them to visible actions.",
    ],
    portfolio:
      "Project evidence connecting m06's structure to a real interface. Show both widths together with the visibility rule; the rule is the design decision.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "The header, service navigation and back-link components, read for structure and usage rather than styling.",
        purpose:
          "Gives worked navigation components with their content rules and when-not-to-use guidance.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government services with few destinations; a commercial product usually has more, so take the structure and decide the set yourself.",
        fallbackId: "R06",
      },
      {
        ...responsive,
        section:
          "The layout chapter, read for how components reflow rather than shrink.",
        purpose:
          "Supplies the reasoning behind priority and collapse at narrow widths.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Web-focused examples; the priority reasoning applies to any medium, and reading it is not the same as having tested a layout.",
        fallbackId: "R15",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l06-v1",
    module: "m08",
    week: 8,
    day: 6,
    level: 3,
    areas: [8],
    guided: true,
    title: "Lists, tables and dense data on a small screen",
    objective:
      "Design one list and one table for narrow and wide widths, choosing what each row must show, how it is sorted and what happens when the data is long, empty or unusually large.",
    bringForward:
      "The result item from your m07 browse loop and any real data you have, including its worst cases.",
    prerequisite: "Your m07 result item and a set of real, messy example data.",
    why: "Lists and tables are where real content breaks designs built on tidy examples.",
    teach: [
      "A row shows only what people compare on; everything else belongs in the detail view.",
      "State the default sort and say why. Unsorted lists make people scan everything.",
      "A table on a phone becomes a set of records, not a shrunken table.",
      "Design for the longest name, the largest number and the missing value.",
      "Alignment carries meaning: numbers right, text left, and units near their figures.",
    ],
    explanation: [
      "The content of a row is a research question you have already answered. In m05 you watched what people compared on; those attributes belong in the row and the rest do not, because every extra column makes scanning slower for everyone in order to serve the few who needed it. When you cannot decide, the honest test is whether a person could choose between two rows without opening either.",
      "Default sort is a design decision that is usually left to the database. Whatever arrives first gets disproportionate attention, so choose it deliberately — soonest first for a schedule, nearest first for a location, most recent first for a log — and say so on screen, because a person who cannot tell how a list is ordered has to read all of it.",
      "A table is a comparison grid, and on a phone the grid is gone. Squeezing six columns into 360 pixels produces something unreadable in both directions. The reliable transformation is to turn each row into a record: a small block with the identifying value as a heading and the remaining fields labelled beneath it. You lose easy comparison, which is why keeping the two or three most-compared fields visible matters, and you keep legibility.",
      "Real data is messier than examples. Names run long, numbers reach unexpected magnitudes, values go missing, and text arrives in another script. Design each of those cases explicitly: a truncation rule that keeps the distinguishing part, a way to show a missing value that is not an empty cell, and enough room for the longest realistic label rather than the average one.",
    ],
    misconception:
      "“We can just make the table scroll horizontally on mobile.” Horizontal scrolling hides which column you are reading and separates values from their row identity. It is occasionally the right answer for genuinely wide reference data, and it is a poor default for a table people must act on.",
    example:
      "A class list showed eight columns on desktop and scrolled sideways on a phone. Rebuilt: rows kept the four attributes the m05 sessions showed people comparing — day and time, price, place, remaining places — with the rest moved to the detail view. Default sort became soonest first, stated above the list. On a phone each row became a record with the class name as the heading. The longest real class name was used for layout, missing prices showed “price on request” rather than a blank, and a full class showed “Full — see other dates” instead of a zero.",
    freeToolPath:
      "Paper and your real data. Write out the ten worst real rows by hand at phone width; the layout problems appear immediately and cost nothing to fix at that stage.",
    outputs: [
      "A list row specification naming the compared attributes and the omissions",
      "A default sort with the reason stated on screen",
      "A table transformed to records at narrow width",
      "Handling for the longest value, the missing value and the empty list",
    ],
    steps: [
      {
        minutes: 20,
        title: "Decide the row content",
        instructions: [
          "List the attributes your m05 participants compared on.",
          "Put those in the row and move everything else to the detail view.",
          "Write what you deliberately omitted and why.",
        ],
      },
      {
        minutes: 25,
        title: "Choose and show the sort",
        instructions: [
          "Choose a default sort that serves the common task.",
          "State the sort visibly above the list.",
          "Decide which alternative sorts exist, if any, and where they live.",
        ],
      },
      {
        minutes: 30,
        title: "Transform the table",
        instructions: [
          "Draw the table at wide width with numbers right-aligned and text left.",
          "Redraw each row as a record at narrow width with a heading and labelled fields.",
          "Keep the two most-compared fields visible in both forms.",
        ],
      },
      {
        minutes: 30,
        title: "Break it with real data",
        instructions: [
          "Lay out the longest real name and the largest real number.",
          "Show a missing value as words rather than an empty cell.",
          "Design the empty list, saying what will appear and how to start.",
        ],
      },
      {
        minutes: 15,
        title: "Check and record",
        instructions: [
          "Read the narrow version aloud as records; confirm each field is identifiable.",
          "Record any case you could not resolve without more data.",
          "Save both widths with the omission list and sort rule.",
        ],
      },
    ],
    check: [
      {
        question: "How do you decide what goes in a row?",
        answer:
          "From what people were observed comparing on. If a person cannot choose between two rows without opening either, the row is missing something; if a column never enters a comparison, it is costing scan time.",
      },
      {
        question: "Why state the default sort on screen?",
        answer:
          "Because whatever comes first gets the attention, and a person who cannot tell the order has to read the whole list to be sure they have not missed something.",
      },
      {
        question: "What is wrong with a horizontally scrolling table on a phone?",
        answer:
          "It separates values from the row they belong to and hides which column you are in. For data people must act on, a record-per-row layout keeps meaning intact.",
      },
    ],
    rubric: [
      "Row content is traced to observed comparison behaviour",
      "The default sort is chosen and shown",
      "The narrow form is records, not a shrunken table",
      "Longest, missing and empty cases are designed",
    ],
    criteria: [
      {
        criterion: "Row content is traced to observed comparison behaviour",
        evidence:
          "A row specification citing m05 evidence per attribute, plus a written list of omissions.",
        levels: [
          "Row content chosen from what the data contains.",
          "A reasoned list with no trace to observed behaviour.",
          "Each attribute traced to evidence, with omissions listed.",
          "As adequate, and one attribute is included because its absence made people open every result.",
        ],
        remediation:
          "Re-read your m05 notes for the attributes participants named while choosing. Those are the row; the rest is the detail view.",
        recheck: "The row specification with citations.",
      },
      {
        criterion: "The default sort is chosen and shown",
        evidence:
          "A stated default sort, visible on screen, with the task it serves.",
        levels: [
          "No default stated.",
          "Chosen but not shown to the reader.",
          "Chosen, shown and justified by the common task.",
          "As adequate, and the alternatives are limited to ones people asked for rather than every field.",
        ],
        remediation:
          "Write the sort as a sentence the reader sees: “Soonest first”. If you cannot justify it by a task, you have not chosen it.",
        recheck: "The list with its visible sort.",
      },
      {
        criterion: "The narrow form is records, not a shrunken table",
        evidence:
          "A narrow layout where each row is a labelled block with an identifying heading.",
        levels: [
          "The table is scaled down or scrolls sideways.",
          "Records attempted but fields lose their labels.",
          "Each row is a record with a heading and labelled fields.",
          "As adequate, and the two most-compared fields stay adjacent for scanning.",
        ],
        remediation:
          "Redraw one row as a small block: identifying value as heading, each remaining field labelled beneath.",
        recheck: "The narrow layout.",
      },
      {
        criterion: "Longest, missing and empty cases are designed",
        evidence:
          "Layouts using the longest real value and the largest real number, a worded missing value, and a designed empty state.",
        levels: [
          "Only tidy example data used.",
          "One or two hard cases handled.",
          "All three designed with real values.",
          "As adequate, and a truncation rule keeps the distinguishing part of a long value.",
        ],
        remediation:
          "Take your ten worst real rows and lay them out at phone width. Fix what breaks rather than choosing gentler examples.",
        recheck: "The hard-case layouts.",
      },
    ],
    repairs: [
      "If row content came from the database, re-derive it from observed comparisons.",
      "If the sort is invisible, state it above the list.",
      "If the phone version scrolls sideways, redraw rows as labelled records.",
      "If only tidy data was used, lay out the longest and the missing values.",
    ],
    portfolio:
      "Useful case-study evidence: a table redesigned for a phone using real messy data shows craft that tidy portfolio screenshots never do.",
    resource: responsive,
    resources: [
      {
        ...responsive,
        section:
          "The layout chapter, read for how dense content reflows at narrow widths.",
        purpose:
          "Supplies the reflow reasoning behind turning a table into records.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Web-focused; it does not cover data table conventions, so alignment and sort rules here come from the lesson and R63.",
        fallbackId: "R15",
      },
      {
        ...styles,
        section: "The layout and spacing sections, read for rhythm in dense content.",
        purpose:
          "Keeps spacing consistent when rows become records and density changes.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy government branding or treat its density as a universal standard.",
        fallbackId: "R03",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l07-v1",
    module: "m08",
    week: 8,
    day: 7,
    level: 3,
    areas: [8],
    guided: true,
    title: "Interruptions: modals, sheets and when not to use one",
    objective:
      "Decide for three interruptions in your product whether a modal is justified, design the two that are, and record what the rejected one became instead.",
    bringForward:
      "Your m07 exception table and any point in the flow where the product asks something mid-task.",
    prerequisite: "Your m07 exception table and flow.",
    why: "A modal takes control away from the person. Sometimes that is right; usually it is a shortcut around a layout problem.",
    teach: [
      "A modal is justified when losing the person's work is worse than interrupting them.",
      "Confirmation is not the default answer to a destructive action; undo often is.",
      "Every modal needs an obvious way out that is not the primary action.",
      "Modals trap focus and hide context: never put reference information in one.",
      "Two stacked modals means the flow is wrong, not that you need a third.",
    ],
    explanation: [
      "The test for a modal is what it prevents. Interrupting someone to confirm an irreversible deletion prevents a real loss; interrupting them to ask for a newsletter signup prevents nothing and spends attention they had allocated to a task. If the interruption exists because there was nowhere else to put the content, the layout is the problem and the modal is hiding it.",
      "For destructive actions, confirmation and undo are alternatives with different costs. Confirmation taxes everyone every time to prevent a rare slip, and people learn to dismiss it without reading, which removes the protection while keeping the cost. Undo costs nothing until it is needed and protects the person who confirmed by reflex. Reserve confirmation for actions that genuinely cannot be reversed, and say what will be lost.",
      "A modal that can only be left through its main action is a trap, and people meet it at exactly the wrong moment — mid-task, unsure, on a small screen. There must be a visible dismissal, the escape key must work, and dismissing must return the person to their unchanged work. If dismissing loses their input, the modal has become a way of taking work away.",
      "Because a modal traps focus, everything behind it is unreadable while it is open. That makes it the wrong container for anything the person needs to consult — help text, a price breakdown, terms they are agreeing to. Those belong on the page, in a disclosure, or on their own screen, where the person can look at them alongside the thing they are deciding about.",
    ],
    misconception:
      "“A confirmation dialogue makes destructive actions safe.” It makes them slower. Repeated confirmations are dismissed automatically, so the protection erodes while the cost remains. Undo protects the person who has already made the mistake, which is the person who needs protecting.",
    example:
      "Three interruptions were reviewed. Cancelling a booking: kept as a confirmation, because the place is released immediately and cannot be recovered — the dialogue now states exactly what will be lost and offers “Keep booking” as the safe default. Removing a shortlist item: replaced with an undo message, since nothing is lost permanently. A newsletter prompt appearing over the payment step: removed entirely and moved to the confirmation screen, where the person has finished and can consider it — with the reason recorded, since someone will propose it again.",
    freeToolPath:
      "Paper screens plus a written decision table. If you want to feel the focus trap, a local HTML file with a dialog element shows how dismissal and the escape key behave with no framework.",
    outputs: [
      "A decision table for three interruptions with the reason for each",
      "Two designed interruptions with dismissal and a safe default",
      "One interruption removed, with what replaced it",
      "A stated rule for when your product uses a modal",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and list",
        instructions: [
          "Read the assigned sections on error prevention and user control.",
          "List every point in your flow where the product interrupts.",
          "Mark what each interruption prevents, if anything.",
        ],
      },
      {
        minutes: 25,
        title: "Decide each one",
        instructions: [
          "For each, choose modal, inline, undo or remove.",
          "Justify every modal by naming the loss it prevents.",
          "Replace any confirmation for a reversible action with undo.",
        ],
      },
      {
        minutes: 30,
        title: "Design the two that stay",
        instructions: [
          "Write the exact wording, naming what will be lost.",
          "Make the safe option the default and label both options with verbs.",
          "Specify dismissal: a visible control, the escape key, and unchanged work behind.",
        ],
      },
      {
        minutes: 30,
        title: "Design the replacement",
        instructions: [
          "Take the interruption you rejected and design what it becomes.",
          "Place any reference content on the page rather than in a dialogue.",
          "Check that no two interruptions can now appear at once.",
        ],
      },
      {
        minutes: 15,
        title: "Write the rule",
        instructions: [
          "Write one sentence stating when your product uses a modal.",
          "Record the rejected interruption and why, so it is not reproposed blindly.",
          "Save the decision table and both designs.",
        ],
      },
    ],
    check: [
      {
        question: "When is a modal justified?",
        answer:
          "When the interruption prevents a loss that is worse than the interruption — typically an irreversible action. If it prevents nothing, it is spending attention for someone else's benefit.",
      },
      {
        question: "Why does undo often beat confirmation?",
        answer:
          "Confirmation taxes everyone and is dismissed by reflex, so the protection fades while the cost stays. Undo costs nothing until needed and still protects the person who confirmed without reading.",
      },
      {
        question: "Why should reference content never live in a modal?",
        answer:
          "Because the modal hides the thing the person is deciding about. Consulting a price breakdown or terms requires seeing both at once, which a focus trap prevents.",
      },
    ],
    rubric: [
      "Every interruption is justified by the loss it prevents",
      "Reversible actions use undo rather than confirmation",
      "Each remaining modal has dismissal and a safe default",
      "A rule for using modals is written down",
    ],
    criteria: [
      {
        criterion: "Every interruption is justified by the loss it prevents",
        evidence:
          "A decision table naming, for each interruption, what it prevents and the choice made.",
        levels: [
          "Interruptions kept without justification.",
          "Justifications given in general terms such as “to be safe”.",
          "Each names a specific loss, or is removed.",
          "As adequate, and at least one interruption is removed with what replaced it recorded.",
        ],
        remediation:
          "For each dialogue, complete “without this, the person could lose …”. Anything you cannot complete should not interrupt.",
        recheck: "The decision table.",
      },
      {
        criterion: "Reversible actions use undo rather than confirmation",
        evidence:
          "At least one confirmation replaced by an undo affordance, with the time window stated.",
        levels: [
          "Confirmations used for reversible actions.",
          "Undo proposed but with no window or recovery path defined.",
          "Undo specified with a window and a clear message.",
          "As adequate, and the write-up says what happens if the person leaves before the window ends.",
        ],
        remediation:
          "List your confirmations and mark which actions could be reversed. Replace those with undo.",
        recheck: "The undo specification.",
      },
      {
        criterion: "Each remaining modal has dismissal and a safe default",
        evidence:
          "Specified dismissal control, escape behaviour, unchanged work behind, and the safe option as default.",
        levels: [
          "Dismissal only through the primary action.",
          "A dismissal exists but the safe option is not the default.",
          "Visible dismissal, escape, preserved work and safe default.",
          "As adequate, and both options are labelled with verbs rather than yes and no.",
        ],
        remediation:
          "Write what happens on escape, on the dismissal control and on dismissal by tapping outside. Any of these losing work is a defect.",
        recheck: "The modal specification.",
      },
      {
        criterion: "A rule for using modals is written down",
        evidence:
          "One sentence stating when this product interrupts, kept with the component inventory.",
        levels: [
          "No rule.",
          "A rule too vague to decide a future case.",
          "A rule that would settle the next proposal.",
          "As adequate, and the rejected interruption is recorded with its reason for future reference.",
        ],
        remediation:
          "Write the rule, then test it against the interruption you rejected. If the rule permits it, the rule is too weak.",
        recheck: "The written rule.",
      },
    ],
    repairs: [
      "If a dialogue prevents nothing, remove it and design what replaces it.",
      "If a reversible action is confirmed, specify undo with a window instead.",
      "If dismissal is missing, add a visible control and escape behaviour.",
      "If no rule exists, write one and test it against the case you rejected.",
    ],
    portfolio:
      "Good evidence of restraint. Showing an interruption you removed, and what it became, reads as stronger judgement than showing three well-styled dialogues.",
    resource: errors,
    resources: [
      {
        ...errors,
        section: "Prevention, feedback, undo and the slip and mistake distinction.",
        purpose:
          "Supplies the confirmation-versus-undo reasoning this lesson turns on.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the modal rules here are the course's own.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 3, user control and freedom, and heuristic 5, error prevention.",
        purpose:
          "Sets the standard that a person can always leave an interruption without losing work.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic names a candidate problem; whether your dialogue is dismissed by reflex is a question for a test.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l08-v1",
    module: "m08",
    week: 8,
    day: 8,
    level: 3,
    areas: [8],
    guided: true,
    title: "Telling people what happened",
    objective:
      "Design your product's system messages — success, progress, warning and failure — deciding for each where it appears, how long it stays and whether it needs an action.",
    bringForward:
      "The message wording from your m07 exception table and state specifications.",
    prerequisite: "Your m07 message wording and state tables.",
    why: "A person who cannot tell whether something worked will do it again, and doing it again is how people pay twice.",
    teach: [
      "Match the message to the consequence: quiet for routine, persistent for anything about money.",
      "Put the message where the change happened, not in a corner far from it.",
      "A message that vanishes is useless to anyone who looked away.",
      "Never rely on colour alone: pair it with an icon shape and words.",
      "Say what happened, what it means, and what to do — in that order.",
    ],
    explanation: [
      "Messages should be proportionate. A saved draft can be confirmed quietly and briefly; a failed payment must stay on screen until the person acts on it, because dismissing it silently leaves them without the one fact they need. Getting this wrong in either direction is costly: a toast for a payment failure loses people money, and a blocking dialogue for an autosave trains people to dismiss everything.",
      "Position matters as much as wording. A message about a field belongs at the field, a message about a list belongs at the list, and a message about the whole task belongs at the top of the task. Messages that appear in a fixed corner make people search for the cause, and on a phone they frequently cover the very control the message is telling them to use.",
      "Anything that disappears on a timer is unavailable to a person who looked away, was interrupted, uses a screen reader that had not reached it, or reads more slowly than your timer assumes. Reserve auto-dismissal for confirmations of routine, reversible actions, and let anything consequential stay until it is dismissed or resolved.",
      "Colour alone fails for the same reasons it fails in a button hierarchy, and it fails harder here because a status message is often the only signal that something went wrong. Pair the colour with a distinct icon shape and with words that carry the meaning on their own: “Payment failed. Nothing was taken.” is legible in greyscale, in a screen reader, and to someone who is not looking at colour at all.",
    ],
    misconception:
      "“Toasts are a clean way to show status.” They are a clean way to show status to someone watching that corner at that moment. For anything a person must act on or will need later, a toast is a way of appearing to communicate without communicating.",
    example:
      "The product had one toast style for everything. Rebuilt into four: a quiet inline confirmation for a saved draft that fades; a persistent banner at the top of the task for “Your place is held for 10 minutes”, with the time remaining; a warning beside the affected field when a chosen date had just filled; and a persistent failure message at the payment step saying what happened, that nothing had been taken, and what to do next. Each pairs colour with an icon shape and words, and each was checked in greyscale.",
    freeToolPath:
      "Write all four messages out on paper at the position they will appear on the screen sketch. Read each aloud to someone and ask what they would do next; that is the whole test.",
    outputs: [
      "Four message types specified: success, progress, warning and failure",
      "Placement and duration rules for each type",
      "Wording that carries meaning without colour",
      "A list of which messages require an action and which do not",
    ],
    steps: [
      {
        minutes: 20,
        title: "Collect what you already wrote",
        instructions: [
          "Gather every message from your m07 exception table and state specifications.",
          "Sort them into success, progress, warning and failure.",
          "Mark which concern money, time or lost work.",
        ],
      },
      {
        minutes: 30,
        title: "Decide placement and duration",
        instructions: [
          "Place each message where the change it describes happened.",
          "Set duration by consequence: fading only for routine, reversible confirmations.",
          "Make anything about money or lost work persist until resolved.",
        ],
      },
      {
        minutes: 25,
        title: "Rewrite for meaning without colour",
        instructions: [
          "Rewrite each message as what happened, what it means, what to do.",
          "Pair each type with a distinct icon shape as well as a colour.",
          "Check every message reads correctly in greyscale.",
        ],
      },
      {
        minutes: 30,
        title: "Decide the actions",
        instructions: [
          "Mark which messages carry an action and which are informational.",
          "Give every failure message a route forward, not just a description.",
          "Check that two messages cannot appear in the same place at once.",
        ],
      },
      {
        minutes: 15,
        title: "Test aloud and record",
        instructions: [
          "Read each message to someone and ask what they would do next.",
          "Rewrite any message that produces a shrug or a wrong answer.",
          "Save the four specifications with placement and duration rules.",
        ],
      },
    ],
    check: [
      {
        question: "When is a fading message acceptable?",
        answer:
          "For routine, reversible confirmations where missing it costs nothing. Anything about money, time limits or lost work must persist until the person deals with it.",
      },
      {
        question: "Why place messages at the change rather than in a corner?",
        answer:
          "Because a message far from its cause makes people search for what happened, and on a phone a fixed corner often covers the control the message is telling them to use.",
      },
      {
        question: "What are the three parts of a good message?",
        answer:
          "What happened, what it means for the person — especially about money and lost work — and what to do next. Most products write only the first.",
      },
    ],
    rubric: [
      "Four types are specified with placement and duration",
      "Consequential messages persist until resolved",
      "Meaning survives without colour",
      "Every failure message offers a route forward",
    ],
    criteria: [
      {
        criterion: "Four types are specified with placement and duration",
        evidence:
          "A specification per type stating where it appears, how long it stays and what dismisses it.",
        levels: [
          "One message style used for everything.",
          "Types distinguished visually but placement or duration unstated.",
          "All four specified with placement, duration and dismissal.",
          "As adequate, and the specification states what happens when two messages occur together.",
        ],
        remediation:
          "Write the four rows out. Any row missing a duration will be decided by whoever builds it.",
        recheck: "The four specifications.",
      },
      {
        criterion: "Consequential messages persist until resolved",
        evidence:
          "Money, time-limit and lost-work messages specified as persistent, with what clears them.",
        levels: [
          "Consequential messages fade.",
          "Persistence claimed but no clearing condition given.",
          "Persistent with a stated clearing condition.",
          "As adequate, and a persistent message survives a page reload where the state still applies.",
        ],
        remediation:
          "Mark every message concerning money, a deadline or unsaved work. Each must persist until acted on.",
        recheck: "The revised duration rules.",
      },
      {
        criterion: "Meaning survives without colour",
        evidence:
          "Greyscale renderings plus wording that states the outcome explicitly, with distinct icon shapes per type.",
        levels: [
          "Status carried by colour alone.",
          "Icons added but the wording still requires the colour to interpret.",
          "Words, shape and colour together, verified in greyscale.",
          "As adequate, and the wording alone would be sufficient if all styling were lost.",
        ],
        remediation:
          "Read each message with the styling removed. If you cannot tell whether it is good or bad news, rewrite the words.",
        recheck: "The greyscale check and revised wording.",
      },
      {
        criterion: "Every failure message offers a route forward",
        evidence:
          "Each failure states an action the person can take now, or who to contact.",
        levels: [
          "Failures described but no route offered.",
          "A route offered in some cases.",
          "Every failure carries a next action.",
          "As adequate, and one route is a person or a phone number for the case where the product cannot help.",
        ],
        remediation:
          "For each failure write the sentence a person would say next: “so what do I do?”. Answer it in the message.",
        recheck: "The failure messages.",
      },
    ],
    repairs: [
      "If one style covers everything, split it into four with stated durations.",
      "If money or deadline messages fade, make them persist until resolved.",
      "If status depends on colour, add words and a distinct shape.",
      "If a failure has no next action, add one or name who can help.",
    ],
    portfolio:
      "Small, specific and credible: a message set with placement and duration rules shows you design the moments products usually leave to whoever implements them.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors.",
        purpose:
          "Sets the obligations a status message carries: say what is happening and how to recover.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics do not specify placement or duration; those rules are this lesson's own.",
        fallbackId: "R11",
      },
      {
        ...colour,
        section:
          "The sections on not relying on colour alone and on colour-vision deficiency.",
        purpose:
          "Explains why status needs words and shape as well as colour.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale check in this lesson is the practical test.",
        fallbackId: "R30",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l09-v1",
    module: "m08",
    week: 8,
    day: 9,
    level: 3,
    areas: [8],
    guided: true,
    title: "Empty, loading and error states with craft",
    objective:
      "Design the empty, loading and error states of two screens so each teaches, reassures or recovers, and check them on a throttled connection.",
    bringForward:
      "Your m07 state tables and the screens from this module.",
    prerequisite: "Your m07 state tables and two interface-fidelity screens.",
    why: "These states are what people meet on their first visit, on a slow connection and on a bad day. They are not edge cases.",
    teach: [
      "An empty state is a teaching moment: say what appears here, why, and the one action that starts it.",
      "Distinguish empty because it is new from empty because a filter excluded everything.",
      "Show progress honestly: a slow thing needs a message, not a faster spinner.",
      "Preserve layout while loading so content does not jump when it arrives.",
      "An error state keeps the person's work and offers a route, not an apology.",
    ],
    explanation: [
      "The first-run empty state carries more teaching than any tour, because it appears exactly where the person is looking and describes the thing they are about to have. Three sentences do the work: what will appear here, why it is worth having, and the single action that creates the first one. A blank panel with an icon teaches nothing and reads as a product that is not working.",
      "Empty has causes, and the response differs. Nothing yet needs teaching and a start action. Nothing matched needs the filter that excluded everything named and offered for removal. Nothing left — the class is full, the item is gone — needs an alternative. Treating all three as one state produces the familiar message that tells a person nothing about their own situation.",
      "Honest progress means telling people what is happening when it takes long enough to notice. A spinner communicates only that something is happening; after a few seconds people need to know what, and after a payment they need to know whether their money is at risk. Where you know the steps, name the current one. Where you do not, say what you are waiting for and how long it usually takes.",
      "Reserving the space that content will occupy prevents the jump that makes people tap the wrong thing — a real cost, not an aesthetic one, since a person who taps just as the layout shifts activates whatever moved under their finger. A simple placeholder block of roughly the right size solves it without needing an animated skeleton.",
    ],
    misconception:
      "“Empty and loading states are polish for later.” They are the first thing a new person sees and the thing everyone sees on a poor connection. Designed last, they get whatever the framework provides, which is usually a blank area and a spinner.",
    example:
      "The bookings screen showed a blank panel to new people and the same panel when a filter matched nothing. Rebuilt into three: for a new person, “Your bookings appear here once you book a class. Find a class on Saturday” with the action beside it; for a filter with no matches, “No classes match Saturday morning under 500. Remove the price filter to see three more”; and for a full class, the alternative dates. Loading reserved the row heights so nothing jumped, and after three seconds the message changed to name what was being waited for.",
    freeToolPath:
      "Sketch the three empty causes side by side and write the full wording. Use your browser's throttling to watch a comparable real page load slowly and time how long the gap feels.",
    outputs: [
      "Three empty states distinguished by cause, with full wording",
      "A loading treatment that reserves layout and names what is awaited",
      "Error states that preserve work and offer a route",
      "Throttled-connection observations with one change made",
    ],
    steps: [
      {
        minutes: 20,
        title: "List the states you owe",
        instructions: [
          "From your m07 state tables, list every empty, loading and error state on two screens.",
          "Mark the cause of each empty state: new, filtered or exhausted.",
        ],
      },
      {
        minutes: 30,
        title: "Write the empty states",
        instructions: [
          "For the new case write what appears, why and the first action.",
          "For the filtered case name the filter responsible and offer to remove it.",
          "For the exhausted case offer the alternative.",
        ],
      },
      {
        minutes: 25,
        title: "Design loading honestly",
        instructions: [
          "Reserve the space the content will occupy so nothing jumps.",
          "Write what the message says after about three seconds.",
          "Say what is being waited for where you know it.",
        ],
      },
      {
        minutes: 30,
        title: "Design the error states",
        instructions: [
          "Specify that entered work is preserved through the failure.",
          "Write what happened, what it means and the route forward.",
          "Add a retry that does not lose position or filters.",
        ],
      },
      {
        minutes: 15,
        title: "Throttle and record",
        instructions: [
          "Load a comparable page on a slow throttled connection with the cache disabled.",
          "Record what appeared first and how long the gap lasted.",
          "Change one thing because of what you saw, and save the states.",
        ],
      },
    ],
    check: [
      {
        question: "Why distinguish the three causes of empty?",
        answer:
          "Because the person's situation differs. A new person needs teaching, a filtered person needs the responsible filter named, and someone facing an exhausted list needs an alternative.",
      },
      {
        question: "What does reserving layout during loading prevent?",
        answer:
          "The jump that makes people activate whatever moved under their finger. It is a correctness problem, not a polish one.",
      },
      {
        question: "What does an error state owe the person?",
        answer:
          "Their work, kept; a plain statement of what happened and what it means; and a route forward that does not restart the task.",
      },
    ],
    rubric: [
      "Empty states are distinguished by cause with full wording",
      "Loading reserves layout and reports what is awaited",
      "Errors preserve work and offer a route",
      "A throttled check was run and changed something",
    ],
    criteria: [
      {
        criterion: "Empty states are distinguished by cause with full wording",
        evidence:
          "Three written states — new, filtered, exhausted — each with what appears, why and a next action.",
        levels: [
          "One generic empty message.",
          "Two causes distinguished, or wording that only names the section.",
          "All three with complete wording.",
          "As adequate, and the filtered case names the specific filter that excluded everything.",
        ],
        remediation:
          "List the ways your list can be empty and write three separate messages. If two read the same, one of them is wrong.",
        recheck: "The three empty states.",
      },
      {
        criterion: "Loading reserves layout and reports what is awaited",
        evidence:
          "A loading treatment holding the eventual space, with the message shown after a few seconds.",
        levels: [
          "A spinner with no layout reservation.",
          "Layout reserved but no message for a long wait.",
          "Both, with the message naming what is being waited for.",
          "As adequate, and a timeout behaviour is specified for when the wait does not end.",
        ],
        remediation:
          "Draw the loading state at the same size as the loaded one. Then write what the screen says at three seconds and at fifteen.",
        recheck: "The loading specification.",
      },
      {
        criterion: "Errors preserve work and offer a route",
        evidence:
          "Error states specifying preserved input, plain wording and a retry that keeps position and filters.",
        levels: [
          "Errors lose work or offer no route.",
          "Work preserved but retry restarts the task.",
          "Work, wording and a non-destructive retry all specified.",
          "As adequate, and the retry preserves scroll position and filters as well as input.",
        ],
        remediation:
          "Walk a failure in your own flow and write down everything the person loses. Specify each as preserved.",
        recheck: "The error specification.",
      },
      {
        criterion: "A throttled check was run and changed something",
        evidence:
          "Recorded observations from a slow load with the cache disabled, and one resulting change.",
        levels: [
          "Not run.",
          "Run without recording what appeared or how long it took.",
          "Run, recorded, and one change made.",
          "As adequate, and the record notes what a person would reasonably do during the gap.",
        ],
        remediation:
          "Run the throttled load again and write the sequence with timings rather than an impression.",
        recheck: "The throttling notes and the change.",
      },
    ],
    repairs: [
      "If one empty message covers every cause, write three.",
      "If loading uses only a spinner, reserve the layout and add a message.",
      "If a failure loses work, specify preservation and a non-destructive retry.",
      "If nothing was throttled, run the slow load and record what appears first.",
    ],
    portfolio:
      "Reviewers notice these. Empty and error states designed with real wording are among the clearest signals that a designer has shipped, or is ready to.",
    resource: components,
    resources: [
      {
        ...components,
        section:
          "The notification banner and error message components, read for content rules rather than styling.",
        purpose:
          "Gives worked wording patterns for states people meet under stress.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover empty or loading states, which are this lesson's own; take the content discipline.",
        fallbackId: "R06",
      },
      {
        ...recall,
        section: "Recognition versus recall and the interface implications.",
        purpose:
          "Explains why an empty state teaching in place beats an instruction the person had to remember.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not discuss empty states directly; the application is this lesson's.",
        fallbackId: "R31",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l10-v1",
    module: "m08",
    week: 8,
    day: 10,
    level: 3,
    areas: [8],
    guided: true,
    title: "Charts that do not mislead",
    objective:
      "Draw one chart from data you actually hold, following the assigned conventions, and write the alternative text that carries the same information to someone who cannot see it.",
    bringForward:
      "Any real counts you hold: your m05 survey responses, your m06 tree-test results or your own practice log.",
    prerequisite: "A small set of real counts you can honestly attribute.",
    why: "A chart makes a claim look measured. Drawing one from four participants and reading it as a trend is the fastest way to mislead yourself and everyone downstream.",
    teach: [
      "Choose the chart from the comparison: bars compare amounts, lines show change over time.",
      "Never break the numerical axis on a bar chart; the bar length is the comparison.",
      "Label directly on the chart where you can, instead of making people decode a legend.",
      "Alternative text must carry the same information, not describe the picture.",
      "State n on the chart. A chart of eight responses is a picture of eight responses.",
    ],
    explanation: [
      "The chart type follows from the comparison you want a reader to make. Bars compare amounts across categories and rely on length, which is why truncating their axis is a distortion rather than a style choice: half the bar is missing but the reader still compares lengths. Lines show change across a continuous scale, usually time, and their axis may be broken when the change is small relative to the values, provided the break is visible and labelled.",
      "The assigned guidance is precise about the mechanics: horizontal axis text, thousands separated, light gridlines and few of them, legends ordered to match the data, direct labelling preferred, and colour contrast meeting the accessibility threshold. Following it costs nothing and removes the most common ways a chart becomes harder to read than the table it came from.",
      "Alternative text is not a caption. Someone who cannot see the chart needs the information it carries — the comparison and the values that matter — not a description of its appearance. “Bar chart of bookings by day” carries nothing; “Bookings by day: Saturday 34, Sunday 21, weekdays fewer than 10 each; n = 96 over four weeks” carries the finding. Publishing the underlying numbers alongside is better still.",
      "The sample belongs on the chart itself, not in a footnote elsewhere, because a chart is the part that gets screenshotted and forwarded. A chart of eight survey responses drawn without n reads as a measurement of a population, and the person who reposts it will not know it was not.",
    ],
    misconception:
      "“Charts make findings clearer.” They make comparisons visible, which is not the same thing. A chart drawn from a small sample makes an uncertain finding look precise, and precision is exactly what a reader takes from a picture with an axis.",
    example:
      "Twenty-two survey responses became a bar chart of “was it clear your payment had gone through?”. The first draft had a truncated axis that made nine look nearly twice fifteen, a legend requiring decoding, and no n. Redrawn: full axis from zero, direct labels on each bar, light gridlines, n = 22 stated in the subtitle with the recruitment route named, and alternative text reading “Of 22 people recruited through two WhatsApp groups, 9 were unsure their payment had gone through, 13 were sure.” The underlying counts were published beneath it.",
    freeToolPath:
      "Graph paper and a ruler, photographed, is a legitimate chart and forces you to plot the real values. A spreadsheet works if you have one; no paid tool or plotting library is required.",
    outputs: [
      "One chart drawn from data you actually hold, following the conventions",
      "n and the recruitment route stated on the chart",
      "Alternative text carrying the same information as the chart",
      "The underlying numbers published beside it",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the conventions",
        instructions: [
          "Read the assigned chart guidance for the type you plan to use.",
          "Write down its rules for axes, gridlines, labelling and contrast.",
        ],
      },
      {
        minutes: 20,
        title: "Choose the comparison",
        instructions: [
          "Write the one comparison you want a reader to make.",
          "Choose the chart type that serves it: amounts across categories, or change over time.",
          "Reject the type that would flatter your finding.",
        ],
      },
      {
        minutes: 30,
        title: "Draw it honestly",
        instructions: [
          "Start the numerical axis at zero for bars.",
          "Label directly rather than using a legend where you can.",
          "Check the colours against the contrast threshold.",
        ],
      },
      {
        minutes: 30,
        title: "Write the alternative text",
        instructions: [
          "Write the comparison and the values, not a description of the picture.",
          "State n and how those people were reached.",
          "Publish the underlying numbers beneath the chart.",
        ],
      },
      {
        minutes: 15,
        title: "Test the claim",
        instructions: [
          "Show the chart to someone and ask what it tells them.",
          "If they state something your sample cannot support, change the chart or its labels.",
          "Save the chart, the alternative text and the numbers.",
        ],
      },
    ],
    check: [
      {
        question: "Why must a bar chart's axis start at zero?",
        answer:
          "Because the comparison is bar length. Truncating the axis removes part of every bar while readers still compare lengths, which changes the apparent ratio.",
      },
      {
        question: "What belongs in alternative text?",
        answer:
          "The information the chart carries — the comparison, the values that matter and the sample — not a description of its appearance.",
      },
      {
        question: "Why put n on the chart itself?",
        answer:
          "Because the chart travels alone. Screenshotted into a message without its footnote, a chart of eight responses reads as a measurement of everyone.",
      },
    ],
    rubric: [
      "The chart type matches the comparison",
      "Axes, labelling and contrast follow the assigned conventions",
      "n and the recruitment route appear on the chart",
      "Alternative text carries the information, not the appearance",
    ],
    criteria: [
      {
        criterion: "The chart type matches the comparison",
        evidence:
          "A stated comparison and a chart type chosen for it, with the rejected alternative named.",
        levels: [
          "Chart type chosen by habit or appearance.",
          "A reasonable type with no stated comparison.",
          "Comparison stated, type justified, alternative rejected with a reason.",
          "As adequate, and the rejected type is the one that would have flattered the finding.",
        ],
        remediation:
          "Write the sentence you want a reader to take away, then choose the chart that makes exactly that comparison visible.",
        recheck: "The comparison sentence and the chart.",
      },
      {
        criterion: "Axes, labelling and contrast follow the assigned conventions",
        evidence:
          "A chart with a full bar axis, horizontal axis text, light and few gridlines, direct labels where possible, and checked contrast.",
        levels: [
          "Conventions ignored; axis truncated or text rotated.",
          "Some conventions followed, contrast unchecked.",
          "All the listed conventions followed and contrast checked.",
          "As adequate, and a deviation is justified explicitly against the guidance.",
        ],
        remediation:
          "Take the guidance as a checklist and mark your chart against each rule. Fix every failure or justify it in writing.",
        recheck: "The checked chart.",
      },
      {
        criterion: "n and the recruitment route appear on the chart",
        evidence:
          "Sample size and how those people were reached, visible on the chart itself.",
        levels: [
          "No sample stated.",
          "n given in a separate document or footnote.",
          "n and route on the chart.",
          "As adequate, and the subtitle states what the chart cannot support.",
        ],
        remediation:
          "Add the sample line into the chart's subtitle, where it survives being screenshotted.",
        recheck: "The chart with its subtitle.",
      },
      {
        criterion: "Alternative text carries the information, not the appearance",
        evidence:
          "Text stating the comparison, the values that matter and the sample, plus the underlying numbers published beside the chart.",
        levels: [
          "No alternative text, or a description of the chart type.",
          "Some values given but the comparison left implicit.",
          "Comparison, values and sample all present, with numbers published.",
          "As adequate, and someone who cannot see the chart confirmed the text told them what they needed.",
        ],
        remediation:
          "Cover the chart and read only your alternative text. If you could not answer the question the chart exists to answer, rewrite it.",
        recheck: "The alternative text and the published numbers.",
      },
    ],
    repairs: [
      "If the bar axis is truncated, redraw it from zero.",
      "If a legend requires decoding, label the data directly.",
      "If n is missing, put it in the subtitle where it travels with the chart.",
      "If the alternative text describes the picture, rewrite it as the finding.",
    ],
    portfolio:
      "Portfolio evidence of honesty rather than flourish. A chart with n on it and real alternative text is unusual in junior work and reads as trustworthy.",
    resource: charts,
    resources: [
      {
        ...charts,
        section:
          "The rules for the chart type you use: axes, gridlines, legends versus direct labelling, colour contrast and alternative text.",
        purpose:
          "Supplies the drawing conventions and the accessibility requirements this lesson applies.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 19 May 2022. Written for government statistics and it excludes interactive charts and dashboards; it tells you how to draw a chart honestly, not which analysis to run.",
        fallbackId: "R29",
      },
      {
        ...contrast,
        section:
          "The 4.5:1 and 3:1 thresholds and the exceptions.",
        purpose:
          "Gives the measurable threshold for chart colours and their labels.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility; check the chart at real size as well.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l11-v1",
    module: "m08",
    week: 8,
    day: 11,
    level: 3,
    areas: [8],
    guided: true,
    title: "The token sheet",
    objective:
      "Produce a token sheet for colour, type, space and radius with every value named by role, measured for contrast where it carries text, and applied to one screen without exception.",
    bringForward:
      "Your m03 type scale and spacing work, your component inventory and the screens from this module.",
    prerequisite: "Your m03 scale, component inventory and one built screen.",
    why: "Named values are how a design survives being handed to someone else, and how you notice you have invented a fourth grey.",
    teach: [
      "A token is a named decision: surface, text-primary, space-3 — not a hex code you remember.",
      "Name by role, not by appearance. A token called light-grey cannot be redefined.",
      "Keep the set small enough to hold in your head; every extra value is a future inconsistency.",
      "Measure contrast for every text-on-surface pair you allow, and record the number.",
      "A token sheet is only real if a screen uses it with no exceptions.",
    ],
    explanation: [
      "Tokens turn scattered decisions into a vocabulary. Once “surface” and “text-primary” exist, a change of palette becomes one edit rather than a hunt through screens, and a conversation with an engineer stops being about hex codes. The naming rule matters as much as the existence: “light-grey” describes what a value looks like today, so redefining it produces a token whose name is a lie, while “surface-muted” describes a role and can be any colour that fills it.",
      "Small sets stay consistent. Five neutrals, two or three semantic colours, five or six type steps and a spacing scale of about six values will cover a product of this size, and the discipline is refusing the seventh grey when a screen looks slightly off — because that screen is usually telling you a spacing or hierarchy problem rather than a colour problem.",
      "Contrast is measurable, so measure it and write the number beside the pair rather than trusting your eye, which is a poor judge under studio lighting. Record every text-on-surface pair you intend to allow, including the quiet ones — disabled text, placeholder text, captions on tinted backgrounds — because those are where products routinely fall below the threshold, and note that meeting a ratio is a floor rather than proof of legibility.",
      "The test of a token sheet is a screen built from it with no exceptions. The first attempt always produces two or three values that are not in the set, and each of those is information: either the set is missing a genuine role, or the screen is carrying an accidental variation. Resolve each one deliberately, and record which you chose.",
    ],
    misconception:
      "“More tokens means more flexibility.” More tokens means more places to be inconsistent and more decisions for whoever comes next. A small set with clear roles constrains usefully; a large set is a palette with extra steps.",
    example:
      "The token sheet came to twenty-two values: five neutrals, three semantic colours, six type steps, six spacing values and two radii. Applying it to the booking screen surfaced three exceptions — a one-off border grey, a 10px gap and a heading half a step smaller than any token. The border grey became an existing neutral, the gap moved to the nearest spacing value, and the heading revealed a real missing role, so a step was added deliberately. Every text pair was measured; the caption on the tinted panel failed and was darkened, and the measured numbers were written on the sheet.",
    freeToolPath:
      "A written table is a token sheet. For contrast, any free browser-based checker or your operating system's own tools will do, and you can also compute the ratio in a spreadsheet from the published formula; no paid plugin is needed.",
    outputs: [
      "A token sheet naming every value by role",
      "Measured contrast ratios for every text-on-surface pair",
      "One screen rebuilt using only tokens",
      "A list of exceptions found, each resolved deliberately",
    ],
    steps: [
      {
        minutes: 25,
        title: "Collect what you already use",
        instructions: [
          "List every colour, type size, spacing value and radius across your screens.",
          "Mark the near-duplicates: two greys within a few percent, two similar gaps.",
        ],
      },
      {
        minutes: 30,
        title: "Name by role",
        instructions: [
          "Group the values into roles: surface, text, border, action, status.",
          "Name each token after its role, never after its appearance.",
          "Cut the set to the smallest that covers your screens.",
        ],
      },
      {
        minutes: 30,
        title: "Measure contrast",
        instructions: [
          "Measure every text-on-surface pair you intend to allow.",
          "Record the ratio beside each pair on the sheet.",
          "Repair or forbid any pair that falls below the threshold.",
        ],
      },
      {
        minutes: 25,
        title: "Apply without exception",
        instructions: [
          "Rebuild one screen using only tokens.",
          "List every value you had to invent to finish it.",
          "For each, either add a role or change the screen.",
        ],
      },
      {
        minutes: 10,
        title: "Record and save",
        instructions: [
          "Write which exceptions revealed a missing role and which were accidents.",
          "Save the sheet with the measured numbers and the rebuilt screen.",
        ],
      },
    ],
    check: [
      {
        question: "Why name a token by role rather than appearance?",
        answer:
          "Because appearance changes. A token called light-grey cannot be redefined without its name becoming false, while surface-muted can hold whatever fills that role.",
      },
      {
        question: "What does an exception during application tell you?",
        answer:
          "Either the set is missing a real role, or the screen carries an accidental variation. Both are useful, and each needs a deliberate choice rather than a quiet addition.",
      },
      {
        question: "Is meeting a contrast ratio the same as being legible?",
        answer:
          "No. It is a floor. Small type, thin weights and coloured text on tinted panels can pass a ratio and still be hard to read at real size in real light.",
      },
    ],
    rubric: [
      "Tokens are named by role and the set is small",
      "Every allowed text pair carries a measured ratio",
      "One screen is built with no exceptions",
      "Exceptions found are resolved deliberately and recorded",
    ],
    criteria: [
      {
        criterion: "Tokens are named by role and the set is small",
        evidence:
          "A sheet where names describe roles, with a stated count and no appearance-based names.",
        levels: [
          "Hex codes or appearance names.",
          "Roles used inconsistently, or the set duplicates near-identical values.",
          "All names are roles and near-duplicates are merged.",
          "As adequate, and the sheet records what was merged and what it cost.",
        ],
        remediation:
          "Rename every appearance-based token, then put near-identical values side by side and merge them.",
        recheck: "The renamed sheet.",
      },
      {
        criterion: "Every allowed text pair carries a measured ratio",
        evidence:
          "Measured numbers beside each text-on-surface pair, including quiet text such as captions and disabled states.",
        levels: [
          "No measurements.",
          "Body text measured; quiet text unchecked.",
          "Every allowed pair measured and recorded.",
          "As adequate, and a failing pair was repaired and re-measured.",
        ],
        remediation:
          "List every pair you actually use, including placeholder and disabled text, and measure each one.",
        recheck: "The measured pair list.",
      },
      {
        criterion: "One screen is built with no exceptions",
        evidence:
          "A rebuilt screen using only tokens, with the exception list produced during the attempt.",
        levels: [
          "Screen not rebuilt.",
          "Rebuilt with untracked one-off values.",
          "Rebuilt using only tokens, with exceptions listed as they arose.",
          "As adequate, and the rebuild changed the screen rather than the token set where the variation was accidental.",
        ],
        remediation:
          "Rebuild the screen and write down every time you reach for a value that is not on the sheet.",
        recheck: "The rebuilt screen and exception list.",
      },
      {
        criterion: "Exceptions found are resolved deliberately and recorded",
        evidence:
          "Each exception marked as a missing role or an accident, with the resolution.",
        levels: [
          "Exceptions absorbed silently as new values.",
          "Recorded but resolved by adding a token every time.",
          "Each classified and resolved with a reason.",
          "As adequate, and at least one exception was resolved by changing the screen rather than the sheet.",
        ],
        remediation:
          "For each exception ask whether any other screen needs the same value. If not, it is an accident, not a role.",
        recheck: "The exception resolutions.",
      },
    ],
    repairs: [
      "If tokens are named by appearance, rename them after their roles.",
      "If quiet text is unmeasured, measure captions, placeholders and disabled text.",
      "If the rebuild needed one-off values, classify each as a role or an accident.",
      "If the set keeps growing, merge near-duplicates and record the cost.",
    ],
    portfolio:
      "Strong portfolio material and a direct bridge to m13's design systems work. Show the sheet with measured ratios and the exception list rather than a colour swatch grid.",
    resource: styles,
    resources: [
      {
        ...styles,
        section:
          "The colour, typography, spacing and layout sections, read for how values are named and organised.",
        purpose:
          "Gives a worked example of a small, role-named value set in production use.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning and your own values; do not copy government branding or treat its palette as a standard.",
        fallbackId: "R03",
      },
      {
        ...contrast,
        section: "The 4.5:1 and 3:1 thresholds, with the large-text and incidental exceptions.",
        purpose:
          "Supplies the measurable threshold each recorded pair is checked against.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Meeting a ratio is a floor, not proof of legibility; check at real size in real light too.",
        fallbackId: "R29",
      },
    ],
  }),
  withLegacyText({
    id: "m08-l12-v1",
    module: "m08",
    week: 8,
    day: 12,
    level: 3,
    areas: [8],
    guided: true,
    title: "Assemble, check and critique against evidence",
    objective:
      "Assemble two complete screens from your components and tokens, run the preliminary checks, and critique the result against your own research evidence rather than taste.",
    bringForward:
      "Everything from this module: components, tokens, states, messages and the research findings behind them.",
    prerequisite:
      "Your component inventory, token sheet, state and message specifications.",
    why: "A module of parts is not a product. Assembly is where inconsistencies appear, and where a screen either serves the evidence or quietly drifts from it.",
    teach: [
      "Assemble from components; anything you invent during assembly is a finding.",
      "Check the screen against the research, finding by finding, not against your taste.",
      "Run the preliminary accessibility checks yourself and record what they cannot cover.",
      "Critique by task impact: what would stop someone, and what merely bothers you.",
      "Record what is still untested; a built screen is not a validated one.",
    ],
    explanation: [
      "Assembly is a test of the parts. When a screen forces you to invent a component, a token or a state, that is information about the set rather than a nuisance: either something is genuinely missing, or the screen is asking for a variation it does not need. Recording each invention as it happens keeps the library honest and produces the list of decisions the next module builds on.",
      "The strongest critique goes finding by finding. Take your m05 findings and m07 test results and ask, for each, whether this screen serves it — the payment uncertainty, the shared-device booking, the comparison people were making. That converts critique from an exchange of preferences into a checkable exercise, and it usually surfaces one finding the design has quietly stopped serving.",
      "Run the preliminary checks that apply — page title, headings, contrast, resize, keyboard where a build exists — and record both what passed and what those checks cannot establish. The resource states plainly that they are preliminary and that passing them is not conformance, and running them yourself is not testing with disabled people. Both statements belong in your write-up every time you show this work.",
      "Rank what you find by task impact. A misaligned label is worth noting; a status that cannot be distinguished in greyscale stops someone. Fixing in that order is the difference between a screen that looks tidier and one that works better, and stating the ranking is what lets a reviewer disagree with your priorities rather than your taste.",
    ],
    misconception:
      "“It looks finished, so it is ready.” Looking finished is a property of the surface. Ready means the states exist, the evidence is served, the checks were run and the remaining gaps are written down where someone else can see them.",
    example:
      "Assembling two screens from the library required inventing three things: a status pill for a held place, a compact price treatment, and a spacing value between a heading and a dense list. The pill was a genuine missing component and was added; the price treatment was an accidental variation and was replaced with the existing one; the spacing became the nearest token. The finding-by-finding critique showed the screen no longer surfaced remaining places, which the m05 research had shown people comparing on, so it was restored. The preliminary checks found a heading level skipped and a caption below the contrast threshold; the keyboard check could not be completed because nothing was built, and that was recorded as untested rather than assumed.",
    freeToolPath:
      "Paper or a local HTML file, whichever you have been using. If you want the accessibility checks to be real rather than theoretical, a local HTML file lets you check headings, resize and keyboard behaviour with a browser alone.",
    outputs: [
      "Two assembled screens using only your components and tokens",
      "A list of everything you had to invent during assembly, each resolved",
      "A finding-by-finding critique against your research",
      "Preliminary check results and a written list of what stays untested",
    ],
    steps: [
      {
        minutes: 30,
        title: "Assemble",
        instructions: [
          "Build two complete screens using only your components and tokens.",
          "Write down every component, token or state you had to invent.",
          "Include at least one non-happy state among the two screens.",
        ],
      },
      {
        minutes: 20,
        title: "Resolve the inventions",
        instructions: [
          "For each invention decide: missing from the set, or unnecessary variation.",
          "Add what is genuinely missing and remove the rest.",
          "Update the inventory and token sheet accordingly.",
        ],
      },
      {
        minutes: 30,
        title: "Critique against findings",
        instructions: [
          "List your m05 findings and m07 test results.",
          "For each, write whether this screen serves it and how you can tell.",
          "Repair the strongest failure you find.",
        ],
      },
      {
        minutes: 25,
        title: "Run the checks",
        instructions: [
          "Run the applicable preliminary checks: title, headings, contrast, resize.",
          "Record what passed and what failed with specifics.",
          "Note every check you could not run without an implementation.",
        ],
      },
      {
        minutes: 15,
        title: "Rank and record",
        instructions: [
          "Rank remaining problems by task impact, not by how much they bother you.",
          "Write what remains untested about these screens.",
          "Save the screens, the critique and the check results together.",
        ],
      },
    ],
    check: [
      {
        question: "What does an invention during assembly tell you?",
        answer:
          "That the set is missing a role, or that the screen is asking for a variation it does not need. Both are findings; absorbing it silently loses the information.",
      },
      {
        question: "Why critique finding by finding?",
        answer:
          "Because it makes critique checkable. Taste-based review produces preferences; asking whether each piece of evidence is still served produces a list someone else can verify.",
      },
      {
        question: "What can you claim after the preliminary checks pass?",
        answer:
          "That those specific checks passed on those screens on your device. The resource states they are preliminary and not conformance, and self-testing is not testing with disabled people.",
      },
    ],
    rubric: [
      "Screens are assembled from the existing set, inventions recorded",
      "Every invention is resolved as missing or unnecessary",
      "The critique runs finding by finding against research",
      "Check results and untested areas are both recorded",
    ],
    criteria: [
      {
        criterion: "Screens are assembled from the existing set, inventions recorded",
        evidence:
          "Two complete screens including a non-happy state, with a list of everything invented during assembly.",
        levels: [
          "Screens drawn freely without reference to the set.",
          "Assembled from the set but inventions absorbed silently.",
          "Assembled with every invention recorded as it arose.",
          "As adequate, and one screen is a state rather than a happy path.",
        ],
        remediation:
          "Rebuild one screen strictly from the inventory, writing down each reach for something that is not in it.",
        recheck: "The screens and the invention list.",
      },
      {
        criterion: "Every invention is resolved as missing or unnecessary",
        evidence:
          "A decision per invention with the inventory and token sheet updated.",
        levels: [
          "Inventions left unresolved.",
          "All resolved by adding to the set.",
          "Each classified and resolved, with removals as well as additions.",
          "As adequate, and one addition names the other screens that will now use it.",
        ],
        remediation:
          "For each invention ask whether a second screen needs it. If not, change the screen rather than the set.",
        recheck: "The resolutions and the updated set.",
      },
      {
        criterion: "The critique runs finding by finding against research",
        evidence:
          "Each m05 finding and m07 result listed with whether the screen serves it and the evidence.",
        levels: [
          "Critique based on appearance.",
          "Some findings referenced generally.",
          "Every finding checked with a stated answer.",
          "As adequate, and a finding the design had stopped serving is identified and restored.",
        ],
        remediation:
          "Put your findings list beside the screen and answer each one in writing. Blank answers are the work.",
        recheck: "The finding-by-finding critique.",
      },
      {
        criterion: "Check results and untested areas are both recorded",
        evidence:
          "Preliminary check results with specifics, plus a written statement of what could not be verified.",
        levels: [
          "Accessibility claimed generally.",
          "Checks run but limits unstated.",
          "Results and limits both recorded, including that self-checks are not conformance.",
          "As adequate, and the record names which untested area is most likely to hide a real problem.",
        ],
        remediation:
          "List the preliminary checks and mark each run, failed or not possible. Add one sentence on what passing does not prove.",
        recheck: "The check record.",
      },
    ],
    repairs: [
      "If assembly produced no invention list, rebuild strictly from the set and record each reach.",
      "If every invention became a new token, re-examine which were accidents.",
      "If the critique is about appearance, redo it finding by finding.",
      "If checks are claimed without limits, add what they cannot establish.",
    ],
    portfolio:
      "The module's case-study spine: assembled screens, the library they came from, a critique tied to evidence and an honest list of what is untested.",
    resource: easyChecks,
    resources: [
      {
        ...easyChecks,
        section:
          "The checks for page title, headings, contrast, resizing text and keyboard access.",
        purpose:
          "Provides a small set of checks you can run yourself on the screens you just assembled.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page states the checks are preliminary and passing them is not conformance; running them yourself never substitutes for testing with disabled participants.",
        fallbackId: "R28",
      },
      {
        ...heuristics,
        section:
          "All ten, used as a final structured sweep separate from your evidence-based critique.",
        purpose:
          "Catches candidate problems your findings did not cover, kept in a separate list from tested ones.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic finding is an expert opinion, not evidence; keep it separate from anything a participant showed you.",
        fallbackId: "R11",
      },
    ],
  }),
];
