import type { LegacyLesson as Lesson } from "./teaching";
// Module 3 refreshes visual foundations for screens. Haru already has Applied
// Arts training, so the teaching deliberately targets what changes when a
// layout must reflow, respect a reader's own text settings and survive
// handoff, rather than re-teaching composition she already knows.
const typography = {
  title: "web.dev: typography",
  id: "R03",
  url: "https://web.dev/learn/design/typography",
};
const styles = {
  title: "GOV.UK Design System: styles",
  id: "R06",
  url: "https://design-system.service.gov.uk/styles/",
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
const gestalt = {
  title: "Laws of UX",
  id: "R31",
  url: "https://lawsofux.com/",
};
const responsive = {
  title: "web.dev: learn responsive design",
  id: "R16",
  url: "https://web.dev/learn/design/",
};
const heuristics = {
  title: "Nielsen: ten usability heuristics",
  id: "R02",
  url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
};
export const module3: Lesson[] = [
  {
    id: "m03-l01-v1",
    module: "m03",
    week: 3,
    day: 1,
    level: 1,
    areas: [1, 8],
    title: "A type scale that survives the screen",
    objective:
      "Produce a five-step type scale with stated sizes, weights and uses, and show it holding its hierarchy at two widths without hard-coding a pixel size for every element.",
    bringForward:
      "The three screens and workshop flow you produced in Product Design Foundations. You will re-typeset one of those screens rather than starting a new design.",
    why: "You already set type well on a page you control. A screen does not stay the size you designed it at, and the reader may have enlarged the text before your design ever loaded.",
    teach: [
      "A type scale is a short, deliberate list of sizes you allow yourself, each with a role. Five or six steps is usually enough for a product screen: a page title, a section heading, body text, a supporting line and a small label. The discipline is not the arithmetic of the ratio; it is refusing the sixth size when a screen feels crowded, because every extra size makes hierarchy harder to read, not easier.",
      "Hierarchy is a comparison, not an absolute. A heading reads as a heading because it differs from what surrounds it in size, weight, spacing or colour. That means you can often strengthen a hierarchy by making the body text calmer rather than making the heading bigger, which matters on a small screen where a bigger heading costs you the content itself.",
      "Screen type has one constraint print does not: the reader controls it. A person may set a larger default text size in their browser or phone, and a design that hard-codes every size in pixels can ignore that setting or break when it is honoured. Sizing text in relative units, so that a chosen scale multiplies the reader's own base size, keeps your hierarchy and their preference at the same time.",
      "Weight and case do work that size cannot. A heavier weight separates a label from a value without adding height, which is how dense interfaces stay legible. All-capitals is a decision with a cost: it removes word shape, slows reading of anything longer than two or three words, and is read letter-by-letter by some screen readers when abbreviations are involved. Use it for short labels, not for sentences.",
    ],
    misconception:
      "“A bigger heading means a stronger hierarchy.” Not on a narrow screen. If the title grows until it wraps onto three lines and pushes the first paragraph below the fold, the reader now sees only a large phrase and no content, and the page reads as less organised, not more. Contrast in weight and space is usually the cheaper instrument.",
    example:
      "A workshop detail screen designed with eight sizes was rebuilt with five: 32/24/16/14/12. The title dropped from 40 to 32 and moved to a heavier weight, the two “supporting” sizes were merged into one 14, and the metadata row became 12 in a heavier weight instead of a lighter grey. At 390 px wide the title now holds one line, the date and price line is readable at arm's length, and the section headings are still obviously headings — with three fewer sizes to maintain.",
    steps: [
      {
        minutes: 20,
        title: "Read and inventory",
        text: "Read the assigned typography section. Then list every distinct text size, weight and colour already present in one of your Module 1 screens. Most people find more than they expected; write the real count.",
      },
      {
        minutes: 25,
        title: "Choose the scale",
        text: "Decide five or six steps. For each, write the size, the weight and the one job it does. Any size you cannot give a job to is removed at this step, not later.",
      },
      {
        minutes: 35,
        title: "Re-typeset one screen",
        text: "Apply the scale to your chosen screen. Where two old sizes collapse into one new step, note what you lost and whether it mattered.",
      },
      {
        minutes: 25,
        title: "Test the two hard cases",
        text: "Redraw or re-render the same screen at roughly 390 px wide, then again with the base text size increased by about 150 per cent. Record exactly what breaks: wrapping, truncation, overlap, a control pushed off screen.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the scale table, the before and after screen, and your breakage notes. Write the one change you would make next. Stop here if the session is over; the next lesson continues from this artefact.",
      },
    ],
    freeToolPath:
      "Paper and a ruler are sufficient: draw the scale as a labelled ladder and re-letter the screen at two widths. If you prefer to see real reflow, a single local HTML file with a few CSS rules using rem units shows the enlarged-text case honestly, and needs no account, install or design tool.",
    deliverable:
      "A type scale table of five or six steps with size, weight and job; one screen re-typeset with it; the same screen at narrow width and at enlarged text; and a short note of what broke.",
    check: [
      {
        question: "Why size text relative to the reader's base size?",
        answer:
          "Because the reader may have already chosen a larger text size for their own reasons. A relative scale multiplies that choice, so your hierarchy survives and so does their setting. A fixed pixel size silently overrides a decision that was not yours to make.",
      },
      {
        question:
          "Your screen feels cluttered. Is adding a larger heading the fix?",
        answer:
          "Usually not. Clutter is often too many competing sizes rather than too small a heading. Reducing the number of steps and increasing the space around a group typically restores hierarchy at no cost in vertical space.",
      },
      {
        question: "Is a five-step scale better than an eight-step scale?",
        answer:
          "Not automatically. Fewer steps are easier to hold consistent and easier to hand over, but a genuinely different job needs its own step. The test is whether you can name the job each step does; a step you cannot justify is the one to remove.",
      },
    ],
    rubric: [
      "The scale is explicit and each step has a stated job",
      "Hierarchy holds at narrow width",
      "Enlarged text was actually tested and reported",
      "Reduction is reasoned, not merely tidy",
    ],
    criteria: [
      {
        criterion: "The scale is explicit and each step has a stated job",
        evidence:
          "A table listing every step with its size, weight and the one element type it is for, and no size used in the screen that is missing from the table.",
        levels: [
          "No scale is stated; sizes were chosen per element.",
          "A list of sizes exists but some steps have no stated job, or the screen uses sizes absent from the table.",
          "Five or six steps, each with a size, weight and job, and the screen uses only those steps.",
          "As adequate, and the write-up explains why a candidate step was rejected and what would justify adding it back.",
        ],
        remediation:
          "Take the screen you submitted and mark every text element with the step it claims to use. For each mismatch, either change the element to the nearest step or add the step to the table with a written job. Do not add a step you cannot name a job for.",
        recheck:
          "The corrected table and the marked-up screen showing each element's step.",
      },
      {
        criterion: "Hierarchy holds at narrow width",
        evidence:
          "The narrow rendering shows the title, the primary action and the first line of content all readable, with headings still visibly distinct from body text.",
        levels: [
          "No narrow version was produced.",
          "A narrow version exists but headings and body text are hard to tell apart, or the primary action is not visible.",
          "The narrow version keeps a readable distinction between levels and the primary action remains reachable.",
          "As adequate, and the design changes deliberately at narrow width — for example a step drops one size or a label moves — with the reason recorded.",
        ],
        remediation:
          "Redraw only the top of the screen at about 390 px. If the levels blur, change one variable at a time — first weight, then space, and only then size — and record which change restored the distinction.",
        recheck:
          "The narrow rendering plus a one-line note of which variable fixed the hierarchy.",
      },
      {
        criterion: "Enlarged text was actually tested and reported",
        evidence:
          "A second rendering at roughly 150 per cent text size with specific named breakages, or an explicit statement that nothing broke and how that was checked.",
        levels: [
          "Enlarged text was not tested.",
          "It is claimed to work but no rendering or method is shown.",
          "The enlarged rendering is shown and breakages are named specifically.",
          "As adequate, and at least one breakage is repaired with the repair explained.",
        ],
        remediation:
          "Re-run the enlarged case and write the breakages as concrete sentences — “the price overlaps the button”, “the date truncates to three characters” — not as “it looks cramped”. Then fix exactly one.",
        recheck: "The enlarged rendering, the breakage list and one repair.",
      },
      {
        criterion: "Reduction is reasoned, not merely tidy",
        evidence:
          "For each pair of old sizes merged into one step, a sentence on what distinction was lost and why that loss is acceptable here.",
        levels: [
          "Sizes were changed with no reasoning recorded.",
          "Reasoning is aesthetic only — tidier, cleaner, more modern.",
          "Each merge names the distinction lost and accepts or rejects that loss for this screen.",
          "As adequate, and one merge is identified as risky with a way to check it against a reader rather than by preference.",
        ],
        remediation:
          "List your merges as a two-column table: what the two old sizes distinguished, and what now carries that distinction — weight, space, colour or nothing. Any row ending in “nothing” needs either a fix or an argument.",
        recheck: "The merge table with no unexplained “nothing” rows.",
      },
    ],
    portfolio:
      "Practice, and a foundation artefact. The scale itself may appear in a later case study as part of a design system section; this screen exercise is not a case study on its own and shows no user outcome.",
    resource: typography,
    resources: [
      {
        ...typography,
        section: "The whole typography chapter, concentrating on type scales, sizing units and responsive text.",
        purpose:
          "Gives the sizing and unit reasoning behind a scale that respects reader settings.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Illustrative examples are web-focused; the scale idea applies to any medium.",
        fallbackId: "R06",
      },
    ],
  },
  {
    id: "m03-l02-v1",
    module: "m03",
    week: 3,
    day: 2,
    level: 1,
    areas: [1, 8],
    title: "Readability: measure, leading and the small screen",
    objective:
      "Set line length, line height and paragraph spacing for one block of real content, and justify each value against how the text is actually read rather than how the block looks.",
    bringForward:
      "The type scale and re-typeset screen from the previous lesson, plus at least one paragraph of real content — not placeholder text.",
    why: "Hierarchy tells someone where to start. Readability decides whether they finish. On a phone the two pull in opposite directions, and placeholder text hides the conflict completely.",
    teach: [
      "Line length — the measure — is the strongest single lever on comfortable reading of continuous text. Very long lines make the return sweep to the next line error-prone, so readers lose their place; very short lines break phrases so often that the eye stops more than it reads. Roughly forty-five to seventy-five characters is the usual comfortable band for body text, and the point is to constrain the measure deliberately rather than let it default to whatever the container happens to be.",
      "Line height works with the measure, not independently of it. Longer lines need more space between them to keep the return sweep accurate; short lines and large display type need less, and too much leading on a heading separates it from the text it introduces. Line height is also a ratio, not a fixed distance: express it relative to the font size so it scales when the reader enlarges the text.",
      "Spacing between blocks must beat spacing within them. If the gap between two paragraphs is the same as the gap between their lines, the reader sees one undifferentiated column. This is the same grouping logic you will meet formally in the Gestalt lesson: proximity assigns membership, and the eye trusts it before it trusts your headings.",
      "Real content changes all of these numbers. Placeholder text has even word lengths, no long words, no numbers, no names and no empty states, so it flatters every layout. A real workshop title in two languages, a long instructor name, a price with a currency symbol and a date format the reader recognises will each stress the measure differently. Test with the worst real content you can find, not the average.",
    ],
    misconception:
      "“Generous line height always reads better.” Past a point it does the opposite: the lines stop cohering into a paragraph and the block reads as a list of separate sentences. Very loose leading also pushes content below the fold on a phone, which costs the reader more than the extra air gains them.",
    example:
      "A workshop description set at 16 px across a full 1280 px container ran to about 140 characters a line. Readers testing the page kept re-reading lines. Constraining the text column to roughly 65 characters and setting line height to 1.5 fixed the re-reading without changing the font, the size or the colour. On the phone the measure was already narrow, so the same block needed line height nearer 1.4 and a larger gap between paragraphs instead.",
    steps: [
      {
        minutes: 20,
        title: "Gather worst-case content",
        text: "Collect the real strings your screen must hold: the longest title you can justify, a full instructor name, a date, a price, and one empty state. Write them down; you will use them for the rest of the module.",
      },
      {
        minutes: 25,
        title: "Set the measure",
        text: "Set a maximum width for your body text and count the characters on a full line. Record the number. Adjust until it sits in the comfortable band, and note what constrains you.",
      },
      {
        minutes: 30,
        title: "Tune leading and block spacing",
        text: "Choose line height as a ratio for body, headings and small text. Then set the gap between paragraphs so it clearly exceeds the gap between lines. Write both values.",
      },
      {
        minutes: 30,
        title: "Stress it",
        text: "Render the block at about 390 px wide and again at enlarged text with your worst-case strings. Record every place the reading breaks down, including anything that now scrolls when it did not before.",
      },
      {
        minutes: 15,
        title: "Decide and save",
        text: "Write your final values with a one-line reason each. Save the artefact and note the next unresolved question. Pause here if needed.",
      },
    ],
    freeToolPath:
      "On paper, rule a column to your chosen measure and letter one real paragraph inside it; count characters on three lines and average them. A local HTML file with a max-width and a line-height ratio is the faster route and lets you resize the window to see the measure change, but it is optional.",
    deliverable:
      "One content block with stated measure, line height and block spacing values, a worst-case content list, narrow and enlarged renderings, and a reason for each value.",
    check: [
      {
        question: "Why is placeholder text a poor test of readability?",
        answer:
          "It has unnaturally even word lengths and no numbers, names, long compounds or empty states. It hides wrapping, truncation and alignment problems that appear immediately with real strings, so a layout that only works with placeholder text has not been tested.",
      },
      {
        question:
          "Your paragraphs run edge to edge on a wide monitor. Is a smaller font the fix?",
        answer:
          "No. Shrinking the text keeps the same excessive measure and makes it harder to read as well. Constrain the width of the text column instead, and leave the size where it is comfortable.",
      },
      {
        question: "Why express line height as a ratio?",
        answer:
          "So it scales with the text. If a reader enlarges the base size, a ratio keeps the same proportional breathing room, whereas a fixed distance becomes proportionally tighter and can cause lines to collide.",
      },
    ],
    rubric: [
      "Measure is measured, not estimated",
      "Line height and block spacing are stated as related decisions",
      "Real worst-case content was used",
      "Narrow and enlarged cases are reported honestly",
    ],
    criteria: [
      {
        criterion: "Measure is measured, not estimated",
        evidence:
          "An actual character count from a full line of the submitted block, with the chosen maximum width recorded.",
        levels: [
          "No measure is stated.",
          "A width is stated but no character count was taken.",
          "A character count and a maximum width are both recorded and sit in a defensible range.",
          "As adequate, and the write-up explains why this content justifies the top or bottom of the range rather than the middle.",
        ],
        remediation:
          "Count the characters, including spaces, on three different full lines of your own block and record the average. If it falls outside roughly 45–75, change the container width and count again.",
        recheck: "The three counts, the average and the final width.",
      },
      {
        criterion: "Line height and block spacing are stated as related decisions",
        evidence:
          "Both values written down, with the paragraph gap visibly larger than the line gap, and a sentence connecting the leading choice to the measure.",
        levels: [
          "Neither value is stated.",
          "Values are stated but unrelated to the measure, or the paragraph gap does not exceed the line gap.",
          "Both are stated, the paragraph gap clearly wins, and the leading is justified by the line length.",
          "As adequate, and different leading is set for body, heading and small text with the reason for each.",
        ],
        remediation:
          "Measure the two gaps on your own artefact. If the paragraph gap is not clearly larger, increase it until the blocks separate at a glance, then restate your line height as a ratio.",
        recheck:
          "The two measured gaps and the restated ratio.",
      },
      {
        criterion: "Real worst-case content was used",
        evidence:
          "A named list of the actual strings used, including at least one long title, one name, one number-bearing string and one empty state.",
        levels: [
          "Placeholder text only.",
          "Some real content, but no deliberately difficult strings.",
          "A worst-case list is present and visibly used in the rendering.",
          "As adequate, and one string was chosen because it is realistic for an Indian audience — a long transliterated name, a rupee amount or a second script — with what it changed.",
        ],
        remediation:
          "Replace every remaining placeholder string with real content, then add one string you expect to break the layout and keep the result even if it looks bad.",
        recheck: "The rendering with real strings and the breaking string kept visible.",
      },
      {
        criterion: "Narrow and enlarged cases are reported honestly",
        evidence:
          "Specific named failures at 390 px and at enlarged text, or a stated method showing why there were none.",
        levels: [
          "Neither case was produced.",
          "One case was produced, or failures are described only as “fine”.",
          "Both cases are shown with specific named failures or a stated checking method.",
          "As adequate, and the report separates a genuine readability failure from a merely unattractive result.",
        ],
        remediation:
          "Produce the missing case and write each problem as an observable sentence naming the element and the behaviour. Then mark each one as readability or aesthetics.",
        recheck: "Both renderings and the labelled problem list.",
      },
    ],
    portfolio:
      "Practice. Readability values may be quoted inside a later case study's craft section, but a comfortable measure is not evidence that anyone completed a task.",
    resource: typography,
    resources: [
      {
        ...typography,
        section:
          "The line-length, line-height and vertical-rhythm parts of the typography chapter.",
        purpose: "Supplies the reading-comfort reasoning behind measure and leading.",
        minutes: "20–30 selected",
        limits: "Free reading, no account. Verified 2026-09-06.",
        fallbackId: "R06",
      },
      {
        ...responsive,
        section: "The layout and typography chapters, read only for how text reflows.",
        purpose:
          "Shows what changes about the same text block at different widths.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Read chapters, not the whole site.",
        fallbackId: "R15",
      },
    ],
  },
  {
    id: "m03-l03-v1",
    module: "m03",
    week: 3,
    day: 3,
    level: 1,
    areas: [1, 8],
    title: "Colour that carries meaning, not decoration",
    objective:
      "Define a working palette with a stated role for every colour, and prove that every piece of information it conveys survives when the colour is removed.",
    bringForward:
      "Your re-typeset screen and worst-case content list. You will recolour that screen, not design a new one.",
    why: "Colour is the part of your existing craft that transfers least cleanly to product work, because on a screen colour is often the only thing carrying a status — and some of your readers will not receive it.",
    teach: [
      "Give every colour a job before you choose a value. A product palette is usually smaller than a brand palette: a surface, a primary text colour, a secondary text colour, one action colour, and a small set of status colours for error, warning and success. Colours without a job accumulate, and a palette of nineteen greys is not richer than one of four — it is unmaintainable and inconsistent across screens.",
      "Colour alone must never be the only carrier of information. Some readers cannot distinguish the hues you are relying on, some are on a washed-out screen in daylight, and some have colour overridden entirely. The rule is practical rather than moral: whatever the colour says, something else must also say — an icon, a word, a pattern, a position. The quickest check is to view the screen in greyscale and ask what you can no longer tell.",
      "Hue, saturation and lightness are separable controls, and lightness does most of the accessible work. Two colours of the same lightness will look distinct to you and nearly identical to a reader with reduced colour vision, or on a dim screen. When you need two states to be reliably distinguishable, change lightness, not just hue.",
      "Colour also carries convention, and convention is regional and contextual rather than universal. Red for danger is widespread in interface work, but red in an Indian context is also celebratory, and green appears in both money and success meanings. Do not assume your audience reads your palette the way you do; state the meaning in words somewhere in the interface, and treat a colour convention as a hypothesis you could check rather than a fact.",
    ],
    misconception:
      "“I checked the contrast, so my colour use is accessible.” Contrast and colour-dependence are two different failures. A red error message and a green success message can both pass contrast against white and still be indistinguishable from each other to a reader with red–green colour vision deficiency, because the problem is that the hue is the only difference.",
    example:
      "A booking list showed status as a coloured dot: green confirmed, amber pending, red cancelled. In greyscale all three dots became mid-grey circles and the list became unreadable. The repair was not a new palette but a second channel: each dot kept its colour and gained a distinct shape and the status word beside it. The colour still helps people who can use it, and no longer carries the meaning alone.",
    steps: [
      {
        minutes: 25,
        title: "Read and list roles",
        text: "Read the assigned colour material. Then write the roles your screen actually needs — surface, text, secondary text, action, and each status — before opening any colour picker.",
      },
      {
        minutes: 25,
        title: "Choose values",
        text: "Assign one value to each role. Record each as a value plus its role and, where relevant, its lightness relative to its neighbours. Any colour without a role is dropped now.",
      },
      {
        minutes: 30,
        title: "Recolour the screen",
        text: "Apply the palette to your screen from the previous lessons. Count the colours you removed and note where you were tempted to add one back.",
      },
      {
        minutes: 25,
        title: "The greyscale test",
        text: "View or redraw the screen with all colour removed. Write down every piece of information you can no longer determine. For each, add a second channel — word, icon, shape or position — and record the change.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the palette table, the coloured and greyscale versions, and your repair list. Note one colour meaning you are unsure your audience shares.",
      },
    ],
    freeToolPath:
      "A greyscale photocopy or a phone photo converted to black and white is a complete test; no software is required. If you are working in a local HTML file, a temporary CSS grayscale filter over the page does the same thing and is easy to remove.",
    deliverable:
      "A palette table of role, value and meaning; the recoloured screen; a greyscale version; and a list of information that failed the greyscale test with the second channel you added for each.",
    check: [
      {
        question:
          "Why is passing a contrast ratio not the same as not relying on colour?",
        answer:
          "Contrast compares a colour against its background for legibility. Colour-dependence is about whether two pieces of information are distinguishable from each other. Two hues can each have excellent contrast against the page and still be indistinguishable from one another.",
      },
      {
        question: "Two statuses must be reliably distinguishable. What changes first?",
        answer:
          "Lightness, plus a non-colour channel such as a word, icon or shape. Changing only hue is the option most likely to fail for a reader with colour vision deficiency or on a poor screen.",
      },
      {
        question: "Is “red means error” a fact you can build on?",
        answer:
          "It is a widespread convention, not a universal meaning, and it carries other associations in different contexts including celebration. Treat it as a reasonable default that still needs a word beside it, and as something you could check with a reader rather than assert.",
      },
    ],
    rubric: [
      "Every colour has a stated role",
      "No information depends on colour alone",
      "Distinctions use lightness, not hue alone",
      "Colour meanings are stated as conventions, not facts",
    ],
    criteria: [
      {
        criterion: "Every colour has a stated role",
        evidence:
          "A table mapping each palette entry to a role and a meaning, with no colour appearing in the screen that is absent from the table.",
        levels: [
          "No palette is stated.",
          "A palette exists but some entries have no role, or the screen uses colours outside it.",
          "Each entry has a role and meaning, and the screen uses only those entries.",
          "As adequate, and the write-up names a colour that was removed and what it had been doing implicitly.",
        ],
        remediation:
          "Sample every distinct colour actually present in your screen and add it to the table. Any row you cannot give a role to must be replaced by an existing role's colour.",
        recheck: "The completed table and a screen using only its entries.",
      },
      {
        criterion: "No information depends on colour alone",
        evidence:
          "A greyscale version of the screen plus a list of what became indeterminate, each with the second channel added.",
        levels: [
          "No greyscale check was done.",
          "A greyscale version exists but failures were not listed or not repaired.",
          "Failures are listed and each has a second channel added.",
          "As adequate, and the repaired screen is shown again in greyscale to confirm the fix rather than assuming it.",
        ],
        remediation:
          "Produce the greyscale version and, for every status or category, ask what tells you which one it is. Add a word or shape for each failure, then re-check in greyscale.",
        recheck: "The greyscale before, the repair list and the greyscale after.",
      },
      {
        criterion: "Distinctions use lightness, not hue alone",
        evidence:
          "For each pair of states that must be told apart, a note of how their lightness differs, not only their hue.",
        levels: [
          "State colours differ in hue only, with no lightness noted.",
          "Lightness is mentioned but not for the pairs that actually need separating.",
          "Each critical pair differs in lightness and this is recorded.",
          "As adequate, and one pair is deliberately given the largest separation because confusing it would be the most costly.",
        ],
        remediation:
          "List your state pairs. For any pair whose members look the same in greyscale, move one of them lighter or darker until they separate, and record the new values.",
        recheck: "The state-pair list with lightness values and a greyscale view.",
      },
      {
        criterion: "Colour meanings are stated as conventions, not facts",
        evidence:
          "At least one sentence identifying a colour meaning the audience may not share, and how it could be checked.",
        levels: [
          "Colour meanings are asserted as universal.",
          "A caveat is present but generic.",
          "A specific meaning is named as a convention with a way to check it with a reader.",
          "As adequate, and the interface itself states the meaning in words so the convention is not load-bearing.",
        ],
        remediation:
          "Pick the one colour in your palette whose meaning you are least sure about. Write who might read it differently and the smallest question you could ask a real person to find out.",
        recheck: "The named colour, the alternative reading and the question.",
      },
    ],
    portfolio:
      "Practice, with one reusable artefact. The palette table can become part of a design-system section later. The greyscale finding is a craft observation, not user research, and must not be described as a tested accessibility outcome.",
    resource: colour,
    resources: [
      {
        ...colour,
        section:
          "Colour perception and the HSL model, colour vision deficiency, and the section on not conveying information by colour alone.",
        purpose:
          "Explains why lightness separates more reliably than hue and what the colour-alone rule means in practice.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page carries no code samples, so any CSS in your exercise is your own.",
        fallbackId: "R30",
      },
    ],
  },
  {
    id: "m03-l04-v1",
    module: "m03",
    week: 3,
    day: 4,
    level: 1,
    areas: [1, 8],
    title: "Contrast you can defend",
    objective:
      "Measure and record the contrast of every text and essential non-text element on one screen against the stated thresholds, and repair the failures without discarding the palette.",
    bringForward:
      "Your palette table and recoloured screen from the previous lesson.",
    why: "“It looks readable to me” is the weakest sentence in a design review. A measured ratio is a number you can put in a handoff, defend to an engineer and re-check after someone changes a colour.",
    teach: [
      "The minimum contrast requirement is a ratio between the lightness of text and its background. Ordinary body text needs at least 4.5:1. Large text — from around 18 point, or 14 point when bold — needs at least 3:1, because larger, thicker letterforms remain legible at lower contrast. These are floors for a wide range of readers, not targets for good design, and comfortable reading often sits well above them.",
      "The requirement has genuine exceptions, and knowing them stops you from either over-claiming or over-correcting. Text that is purely decorative, text that is part of a logo or brand name, and text in a component that is currently inactive are not held to the ratio. An inactive control is the one designers most often get wrong in both directions: greying it out is legitimate, but if the reader cannot tell what the control would do, the problem is comprehension rather than conformance.",
      "Measure the pair that actually renders, not the pair you intended. Text over an image, text over a gradient, semi-transparent overlays and a hover state that changes the background are all cases where the real background differs from the one in your palette. Take the worst point of the actual composite, not the average, because a caption is illegible at the point where the photograph is brightest, not on average.",
      "Contrast is a floor for legibility, not a proof of readability. A screen can pass every ratio and still be exhausting: too-long lines, insufficient leading, an over-saturated background that vibrates against the text, or an all-capitals paragraph. Report the ratio as one piece of evidence alongside your own reading test, and never describe a passing ratio as an accessibility outcome for real users.",
    ],
    misconception:
      "“Grey placeholder text inside a form field is fine because it is only a hint.” Placeholder text is real text that a reader must read to know what to type, and it is not a decorative or inactive case. If it is too faint to read it fails, and the more robust fix is usually a visible label rather than a darker hint.",
    example:
      "A workshop card used mid-grey #999999 body text on white — about 2.8:1, below the 4.5:1 floor. Rather than abandon the grey, the palette kept it for a large 24 px heading, where the 3:1 large-text threshold applies and it passes, and body text moved to a darker grey that measures about 7:1. The visual softness the designer wanted was preserved exactly where it was legitimate, and removed where it was not.",
    steps: [
      {
        minutes: 25,
        title: "Read the thresholds and exceptions",
        text: "Read the assigned understanding page. Write the two thresholds and the three exceptions in your own words, including what counts as large text.",
      },
      {
        minutes: 30,
        title: "Measure everything",
        text: "Build a table listing every text element on your screen: its colour, its actual background, its size and weight, the applicable threshold and the measured ratio. Include placeholder text, disabled states and any text over an image.",
      },
      {
        minutes: 25,
        title: "Repair the failures",
        text: "For each failing row, choose a repair: darken the text, lighten the background, enlarge the text so the large-text threshold applies, or add a solid backing behind text on an image. Record which repair you chose and why.",
      },
      {
        minutes: 25,
        title: "Read it yourself",
        text: "Read the repaired screen at arm's length, and if possible outdoors or with the screen brightness lowered. Note anything that still reads poorly despite passing, and anything you over-corrected into harshness.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the measurement table before and after, and write one sentence separating what the numbers establish from what they do not.",
      },
    ],
    freeToolPath:
      "Free contrast checkers run in any browser and need no account; browser developer tools also report a ratio when you inspect text. If you are working on paper, take a photo of your screen or swatches, and compare against printed reference pairs — record that your method was approximate rather than presenting an unmeasured number as measured.",
    deliverable:
      "A contrast table covering every text and essential non-text element with colour, background, size, threshold and measured ratio, before and after repair, plus a note on your own reading test.",
    check: [
      {
        question:
          "Your heading is 24 px and measures 3.4:1. Does it pass?",
        answer:
          "Yes, against the large-text threshold of 3:1, provided it genuinely qualifies as large text at that size and weight. Record which threshold you applied and why, because the same colour on 14 px body text would fail.",
      },
      {
        question:
          "A disabled button's label measures 2:1. Is that a defect to fix?",
        answer:
          "Not a contrast failure — inactive components are excepted. It may still be a design problem if the reader cannot tell what the control is or why it is unavailable. Say which of the two you are claiming rather than blurring them.",
      },
      {
        question: "Does a screen of passing ratios prove the screen is accessible?",
        answer:
            "No. It establishes one measurable floor for text legibility. It says nothing about keyboard access, semantics, focus order, motion or comprehension, and it is not evidence gathered from disabled readers.",
      },
    ],
    rubric: [
      "Every text element is measured, including the awkward ones",
      "The correct threshold is applied per element",
      "Repairs preserve intent rather than flattening the palette",
      "The claim made from the numbers is bounded",
    ],
    criteria: [
      {
        criterion: "Every text element is measured, including the awkward ones",
        evidence:
          "A table row for each text element, explicitly including placeholder text, disabled labels, and any text over an image or gradient.",
        levels: [
          "No measurements were taken.",
          "Only obvious body text was measured; overlays, placeholders or disabled states are missing.",
          "Every text element appears, including the awkward cases, with its actual background.",
          "As adequate, and text over an image is measured at its worst point with that point identified.",
        ],
        remediation:
          "Walk the screen element by element and add the missing rows. For anything over an image or gradient, measure at the lightest and darkest points and record the worse of the two.",
        recheck: "The completed table with the awkward cases present.",
      },
      {
        criterion: "The correct threshold is applied per element",
        evidence:
          "Each row names the threshold used and, for large text, the size and weight that justify it.",
        levels: [
          "No thresholds are recorded.",
          "One threshold is applied to everything, or large text is claimed without size and weight.",
          "Each row states its threshold with the justification for the large-text rows.",
          "As adequate, and an exception is correctly claimed for a decorative, logo or inactive case with the reason.",
        ],
        remediation:
          "For every row you marked as large text, record the actual size and weight and confirm it qualifies. Reclassify anything that does not and re-check the ratio against 4.5:1.",
        recheck: "The table with thresholds and justifications per row.",
      },
      {
        criterion: "Repairs preserve intent rather than flattening the palette",
        evidence:
          "For each failing element, the repair chosen and the reason, showing at least one repair that is not simply “make it black”.",
        levels: [
          "Failures were not repaired.",
          "All failures were repaired by maximising contrast, losing the palette's character.",
          "Repairs vary by situation and each has a stated reason.",
          "As adequate, and one colour is deliberately retained where it legitimately passes, with the threshold that makes that true.",
        ],
        remediation:
          "Revisit any element you set to pure black or white. Ask whether a darker version of the intended hue, a larger size or a solid backing would pass instead, and record the alternative you chose.",
        recheck: "The repair list with reasons and at least one non-maximal repair.",
      },
      {
        criterion: "The claim made from the numbers is bounded",
        evidence:
          "An explicit sentence stating what the measurements establish and what they do not, without describing the screen as accessible.",
        levels: [
          "The screen is described as accessible on the strength of the ratios.",
          "A vague caveat is present.",
          "The claim is bounded to text legibility and names at least two things not established.",
          "As adequate, and the next check that would extend the claim is named — for example the keyboard and screen-reader pass in m11.",
        ],
        remediation:
          "Rewrite your summary sentence so it says exactly what was measured, on what, by what method, and lists what remains unknown.",
        recheck: "The rewritten bounded claim.",
      },
    ],
    portfolio:
      "Practice, and a reusable method. A contrast table is legitimate craft evidence in a case study. It is not accessibility research and must never be presented as testing with disabled participants.",
    resource: contrast,
    resources: [
      {
        ...contrast,
        section:
          "The intent, the 4.5:1 and 3:1 thresholds, the large-text definition, and the incidental and logotype exceptions.",
        purpose: "The normative reference behind every number in your table.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. This is the understanding document, not the standard itself; it explains rather than certifies.",
        fallbackId: "R29",
      },
      {
        ...colour,
        section: "The contrast-ratio section only, re-read as the practical companion.",
        purpose: "Connects the thresholds to choosing values in a palette.",
        minutes: "10–15 selected",
        limits: "Free reading, no account. Verified 2026-09-06.",
        fallbackId: "R30",
      },
    ],
  },
  {
    id: "m03-l05-v1",
    module: "m03",
    week: 3,
    day: 5,
    level: 1,
    areas: [1, 8],
    title: "Gestalt grouping, and where it stops working",
    objective:
      "Re-group one dense screen using proximity, similarity and common region, and produce a case where the grouping principles predict the wrong reading.",
    bringForward:
      "Your recoloured, contrast-repaired screen, and the densest screen from your Module 1 set.",
    why: "Grouping is what makes a screen legible before anyone reads a word of it, and it is the fastest fix available when a layout feels confusing — but it is a description of perception, not a law you can apply mechanically.",
    teach: [
      "Proximity is the strongest grouping signal you control: things placed near each other are read as belonging together, and the eye applies this before it reads any label. This is why the gap around a group must exceed the gap inside it, and why an evenly spaced screen reads as one undifferentiated mass no matter how carefully you named the sections.",
      "Similarity groups by shared appearance — the same colour, shape, size or weight reads as the same kind of thing. This cuts both ways. Two unrelated elements styled alike will be read as a set, so a decorative badge that happens to look like your status pills will be read as a status. Similarity is also how you can group things that cannot be placed near each other, such as items in different columns of a table.",
      "Common region is often the cleanest tool and the most over-used: a shared background, a card or an enclosing border binds whatever is inside it, and it overrides proximity. That strength is exactly the risk. Wrapping every group in a card produces a screen of boxes where nothing is subordinate to anything else, and you have spent your strongest grouping signal on your least important distinction. Prefer space first, then a shared background, then a visible border.",
      "These principles describe how perception tends to work; they do not tell you what the reader should conclude. Grouping can be correct perceptually and wrong for the task — a well-grouped set of options is still wrong if the option someone actually needs is buried in the third group. Treat a grouping decision as a hypothesis about reading order that a five-second look by another person can challenge, and remember that the source pages state these as laws without stating their limits.",
    ],
    misconception:
      "“Cards make a layout organised.” Cards make a layout enclosed, which is different. When everything is a card, common region no longer distinguishes anything, the screen gains borders and padding that cost vertical space on a phone, and the actual hierarchy — what matters most — becomes invisible because every item is presented as a peer.",
    example:
      "A workshop detail screen listed date, time, location, price, instructor and materials as six evenly spaced lines, and readers kept missing the materials note. Regrouping without changing a single word: date and time drew together as one “when” group, location stood alone, price and instructor became a “details” pair, and materials moved into its own region with a shared background. Total height changed by a few pixels; the materials line stopped being missed by the two people asked to find it — which is a signal, not a finding.",
    steps: [
      {
        minutes: 25,
        title: "Read the assigned law pages",
        text: "Read the proximity, similarity, common region, Prägnanz and uniform connectedness pages. For each, write the one sentence you would use to explain it to an engineer.",
      },
      {
        minutes: 20,
        title: "Diagnose the dense screen",
        text: "On your densest screen, draw around what you believe the reader groups together at a glance. Mark every place where your intended grouping and the perceived grouping differ.",
      },
      {
        minutes: 35,
        title: "Re-group with the cheapest tool first",
        text: "Fix each mismatch using space first. Only where space fails, add a shared background. Only where that fails, add a border. Record which tool each group needed.",
      },
      {
        minutes: 25,
        title: "Build the counterexample",
        text: "Construct one small case where following a grouping principle produces the wrong reading — for example similarity making an unrelated element look like a status, or a card hiding the one item the task needs. Show it and explain the failure.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the before, the after, the tool-per-group note and the counterexample. Write the question you would ask another person to test your grouping.",
      },
    ],
    freeToolPath:
      "Paper is genuinely better here: print or redraw the screen and use a pencil to circle perceived groups, then cut and re-space the elements. No tool or account is required at any point in this lesson.",
    deliverable:
      "The dense screen before and after regrouping, a note of which grouping tool each group required and why, and one worked counterexample where a principle misleads.",
    check: [
      {
        question: "When is a border the right grouping tool?",
        answer:
          "Late. Space is cheapest and reads first; a shared background is stronger and still quiet; a visible border is the strongest and the most expensive in space and visual noise. Reaching for a border first usually means the spacing was never adjusted.",
      },
      {
        question:
          "You styled a promotional badge like your status pills. What will readers conclude?",
        answer:
          "That it is a status, because similarity groups by appearance regardless of meaning. The fix is to make the badge visibly a different kind of thing, not to add a label explaining that it is not a status.",
      },
      {
        question: "Does correct grouping mean the screen works?",
        answer:
          "No. Grouping affects how the screen is parsed, not whether the reader can complete their task. A perfectly grouped screen can still bury the one control someone came for; that question needs a person attempting the task.",
      },
    ],
    rubric: [
      "Perceived grouping was diagnosed before it was changed",
      "The cheapest sufficient tool was used per group",
      "A genuine counterexample is produced",
      "Grouping is treated as a hypothesis about reading",
    ],
    criteria: [
      {
        criterion: "Perceived grouping was diagnosed before it was changed",
        evidence:
          "A marked-up before image showing perceived groups and the specific mismatches with intended grouping.",
        levels: [
          "No diagnosis; the screen was simply redrawn.",
          "A before image exists but mismatches are not marked.",
          "Perceived groups are drawn and each mismatch is identified.",
          "As adequate, and the diagnosis distinguishes a mismatch that misleads from one that is merely untidy.",
        ],
        remediation:
          "Return to the original screen, circle what a first-time reader would group, and list each place that differs from your intent as a numbered mismatch.",
        recheck: "The marked-up before image and the numbered mismatch list.",
      },
      {
        criterion: "The cheapest sufficient tool was used per group",
        evidence:
          "A note per group recording whether space, a shared background or a border was used, and why the weaker tool was insufficient.",
        levels: [
          "Every group was enclosed in a card or border by default.",
          "Tools vary but no reasoning is recorded.",
          "Each group records its tool and why the weaker option failed.",
          "As adequate, and at least one group was fixed with space alone where a card had previously been used.",
        ],
        remediation:
          "Remove every border from your after version and re-check which groups actually stop reading correctly. Restore only those, and record what each restoration bought.",
        recheck: "The border-free version, the failures found and the restored set.",
      },
      {
        criterion: "A genuine counterexample is produced",
        evidence:
          "A concrete case, shown not merely described, where applying a principle produces a wrong or harmful reading.",
        levels: [
          "No counterexample.",
          "A counterexample is described in words only, or restates the principle's caveat generically.",
          "A specific case is shown with the wrong reading it produces explained.",
          "As adequate, and the counterexample is drawn from your own screen rather than invented, with the repair that keeps the principle useful.",
        ],
        remediation:
          "Take one grouping in your own after version and push it until it misleads — style an unrelated item like a status, or enclose the primary action inside a secondary card. Capture the result and explain the misreading.",
        recheck: "The shown counterexample and the explanation.",
      },
      {
        criterion: "Grouping is treated as a hypothesis about reading",
        evidence:
          "A written question or task another person could attempt that would confirm or challenge the grouping.",
        levels: [
          "The new grouping is asserted as correct.",
          "A vague intention to test is stated.",
          "A specific, answerable question or five-second task is written.",
          "As adequate, and the question is neutral — it does not name the element you hope they find.",
        ],
        remediation:
          "Rewrite your test question so it names a goal, not an element: “where would you look to find what to bring?” rather than “can you see the materials box?”.",
        recheck: "The rewritten neutral question.",
      },
    ],
    portfolio:
      "Practice. The before-and-after regrouping is a usable craft artefact for a case study's iteration section, provided you describe the two-person look as an informal signal and not as usability testing.",
    resource: gestalt,
    resources: [
      {
        ...gestalt,
        section:
          "Assigned pages only: law-of-proximity, law-of-similarity, law-of-common-region, law-of-pragnanz and law-of-uniform-connectedness.",
        purpose:
          "Gives each grouping principle a definition, origin and takeaways you can quote in a review.",
        minutes: "40–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site states these as laws and publishes no caveats, so the limitation and the counterexample in this lesson are the course's, not the source's. A printed poster is sold and also offered as a free download; nothing is required.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m03-l06-v1",
    module: "m03",
    week: 3,
    day: 6,
    level: 1,
    areas: [1, 8],
    title: "Spacing as a system",
    objective:
      "Replace ad-hoc spacing with a named spacing scale, apply it to one screen, and show that the space around a group reliably exceeds the space within it.",
    bringForward:
      "The regrouped screen from the previous lesson and your type scale.",
    why: "Spacing is where a design either becomes maintainable or becomes a thousand small decisions nobody can reproduce, and it is the mechanism behind the grouping you just fixed by eye.",
    teach: [
      "A spacing scale is a small set of allowed distances, usually built by doubling or by multiplying a base unit, so that gaps relate to one another instead of drifting. Four to seven values is typical. The benefit is not tidiness: it is that a distance becomes a decision with a name, so two screens built weeks apart agree, and an engineer implementing your design has a value to reach for rather than a number to guess.",
      "Space is directional and rarely symmetric. The gap above a heading and the gap below it do different jobs: the space above separates it from the previous section, the space below binds it to the content it introduces. When those two are equal, the heading floats between the sections and belongs to neither — a very common and very fixable defect.",
      "Density is a decision you make per context, not a global preference. A settings screen someone scans occasionally can afford generous space; a table of bookings a coordinator reads all day cannot, because scrolling costs them more than air gains them. Choose density for the reading situation and record why, rather than applying one comfortable rhythm everywhere.",
      "Space interacts with the reader's text settings. If gaps are fixed distances while text scales, then at enlarged text the type grows into space that did not grow with it, and groups collide. Expressing at least the vertical rhythm in units that scale with text keeps the relationship you designed, which is the whole point of having a scale.",
    ],
    misconception:
      "“Consistent spacing means the same gap everywhere.” Uniform gaps destroy grouping — that is precisely the flat, unreadable screen from the last lesson. Consistency means the same small set of values used for the same purposes, deliberately unequal where the purposes differ.",
    example:
      "A booking list used gaps of 6, 8, 10, 12, 13, 16, 18, 20 and 24 px, with no rule. Replacing them with a scale of 4, 8, 16, 24, 40 forced the question of what each gap was for: 8 inside a row between label and value, 16 between rows, 40 between the list and the next section. The screen became one pixel shorter overall and immediately readable as a list of items rather than a wall of text — and the engineer implementing it had five values instead of nine.",
    steps: [
      {
        minutes: 20,
        title: "Audit the real gaps",
        text: "Measure and list every distinct vertical gap in your screen. Write the actual count; a large number is the normal starting point, not a failure.",
      },
      {
        minutes: 20,
        title: "Define the scale",
        text: "Choose four to seven values and give each a name and a typical use. State your base unit and the rule that generates the rest.",
      },
      {
        minutes: 35,
        title: "Apply and resolve conflicts",
        text: "Map every existing gap to the nearest scale value. Where two different purposes collapse to the same value, decide which one moves and record why.",
      },
      {
        minutes: 30,
        title: "Prove the grouping rule",
        text: "For each group on the screen, record the inside gap and the surrounding gap. Any group where the outside gap is not clearly larger is a defect; fix it and record the change.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the scale, the before and after gap audit, and the grouping proof table. Note where you deliberately chose higher density and why.",
      },
    ],
    freeToolPath:
      "A ruler on a printout is exact enough for this exercise. If you are working in a local HTML file, define the scale as a handful of CSS custom properties; that also gives you the named values you will need in the token lesson.",
    deliverable:
      "A named spacing scale with base unit and rule; a before and after gap audit; and a per-group table showing inside gap versus surrounding gap.",
    check: [
      {
        question: "Should the space above and below a heading be equal?",
        answer:
          "Usually not. More space above separates the heading from the previous section; less space below binds it to the content it introduces. Equal space makes the heading belong to neither.",
      },
      {
        question:
          "Two purposes both map to your 16 value. Is that a problem?",
        answer:
          "Only if the two purposes need to be distinguishable at a glance. If one is an inside-group gap and the other a between-group gap, they must differ, so one moves to the next value. If they are unrelated contexts, sharing a value is exactly what a scale is for.",
      },
      {
        question: "Why express vertical rhythm in units that scale with text?",
        answer:
          "Because if the text grows for a reader and the gaps do not, the proportions you designed invert and groups collide. Scaling space with text preserves the grouping relationships that carry your hierarchy.",
      },
    ],
    rubric: [
      "A generated scale with named values and uses",
      "Every gap in the screen maps to the scale",
      "Group separation is proven, not assumed",
      "Density choices are contextual and recorded",
    ],
    criteria: [
      {
        criterion: "A generated scale with named values and uses",
        evidence:
          "A stated base unit, the rule generating the values, and a typical use for each of four to seven values.",
        levels: [
          "No scale; gaps remain ad hoc.",
          "A list of values with no rule or no uses.",
          "Base unit, rule, values and uses are all stated.",
          "As adequate, and a value is deliberately omitted with the reason it is not needed at this density.",
        ],
        remediation:
          "Write the base unit and the multiplication or doubling rule that produces your values, then give each value one sentence describing where it is used.",
        recheck: "The completed scale definition.",
      },
      {
        criterion: "Every gap in the screen maps to the scale",
        evidence:
          "A before-and-after audit showing the original distinct gap count and the final count, with no off-scale value remaining.",
        levels: [
          "No audit was done.",
          "An audit exists but off-scale values remain unexplained.",
          "All gaps map to the scale, or an exception is named and justified.",
          "As adequate, and the write-up identifies which merges changed the reading and which were invisible.",
        ],
        remediation:
          "Re-measure the after version and list any gap that is not a scale value. Move each to the nearest value and note whether the group reading changed.",
        recheck: "The after audit with every value on the scale.",
      },
      {
        criterion: "Group separation is proven, not assumed",
        evidence:
          "A table with one row per group giving the inside gap, the surrounding gap and the resulting ratio or difference.",
        levels: [
          "No separation data.",
          "Some groups measured; failures unaddressed.",
          "Every group is measured and any failure is repaired.",
          "As adequate, and the tightest acceptable separation is identified and justified for the densest context.",
        ],
        remediation:
          "For each group where the outside gap is not clearly larger, increase it by one scale step and re-measure. Record any group where you could not, and why.",
        recheck: "The completed per-group table with no unexplained failures.",
      },
      {
        criterion: "Density choices are contextual and recorded",
        evidence:
          "At least one place where density was deliberately tightened or loosened, with the reading situation that justifies it.",
        levels: [
          "One density applied everywhere with no reasoning.",
          "Density varies but the reason is preference.",
          "A density choice is tied to a stated reading situation.",
          "As adequate, and the cost of that choice is named — what the tighter or looser setting gives up.",
        ],
        remediation:
          "Pick the densest region of your screen and write who reads it, how often and for how long. Then state whether your current density serves that and what you gave up.",
        recheck: "The written density rationale with its stated cost.",
      },
    ],
    portfolio:
      "Practice, and a system artefact. The spacing scale carries directly into the token sheet two lessons from now and may appear in a case study's system section.",
    resource: styles,
    resources: [
      {
        ...styles,
        section:
          "The spacing and layout style pages only, read for how a fixed set of values is defined and applied.",
        purpose:
          "A worked public example of a spacing system with stated uses rather than arbitrary distances.",
        minutes: "25–40 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Take the structure, not the government branding; the visual identity is not a universal aesthetic.",
        fallbackId: "R03",
      },
    ],
  },
  {
    id: "m03-l07-v1",
    module: "m03",
    week: 3,
    day: 7,
    level: 1,
    areas: [1, 8],
    title: "Grid and layout structure that reflows",
    objective:
      "Define a column and gutter structure for one screen, state where the layout changes and why, and show the same content at narrow, medium and wide widths.",
    bringForward:
      "Your spacing scale and the regrouped screen. You will keep the content identical and change only its arrangement.",
    why: "A grid in print positions elements on a fixed page. On screen the page has no fixed size, so the grid's real job is to describe how the arrangement is allowed to change — and that is a different skill.",
    teach: [
      "A layout structure on screen is a set of columns, the gutters between them and the margins outside them, plus rules for what happens when there is more or less room. The columns are a convenience for alignment; the rules for change are the actual design. A twelve-column grid that only ever renders one way has told you nothing about behaviour.",
      "Decide where the layout changes by watching the content, not by listing device names. Phones, tablets and laptops span a continuous range of widths and any list of device sizes is out of date on arrival. Widen the layout gradually until something reads badly — the measure grows too long, a two-column pairing becomes absurdly stretched, a control drifts far from what it controls — and put the change there. Then record what you saw, so the number has a reason attached.",
      "Reflow is a re-ordering problem as much as a resizing one. When two columns become one, something must come first, and the correct order is usually the order of the reader's task rather than the visual order of the wide layout. A sidebar of filters that sits beside a list on a wide screen may need to sit above it, or behind a control, on a narrow one — and burying the primary action below a long secondary block is the most common reflow defect.",
      "Alignment does most of the work a grid gets credit for. A consistent left edge shared by heading, body and controls gives a screen structure even with no visible columns, and a single element breaking that edge reads as an error before the reader knows why. When you check a layout, check the edges first; misalignment is more often the cause of a screen feeling wrong than the column count is.",
    ],
    misconception:
      "“Design for mobile, tablet and desktop.” Those are three arbitrary samples from a continuous range, and designing only at three widths guarantees that everything between them is untested. Design the behaviour between the changes, and use specific widths only as places to check.",
    example:
      "A workshop list was designed at 1280 px as a three-column card grid with filters in a left sidebar. Narrowing it gradually, the cards became unreadably squeezed at around 900 px, so the grid dropped to two columns there; below about 620 px the filters could no longer sit beside the list, so they moved above it as a single collapsed control, and the card grid became one column. Neither number came from a device — both came from the point at which the content stopped reading.",
    steps: [
      {
        minutes: 20,
        title: "Define the structure",
        text: "State your columns, gutters and margins at the widest layout, using values from your spacing scale where they apply. Draw the structure over your screen.",
      },
      {
        minutes: 30,
        title: "Find the change points by narrowing",
        text: "Narrow the layout gradually. Each time the content stops reading well, record the approximate width and exactly what failed. Do not start from a list of devices.",
      },
      {
        minutes: 30,
        title: "Design the reflow",
        text: "For each change point, decide the new arrangement and the resulting order. Write the reading order at the narrow width and confirm the primary action is not buried.",
      },
      {
        minutes: 25,
        title: "Check the edges",
        text: "At all three widths, check that shared left edges align. Mark every element that breaks alignment and either fix it or record why the break is deliberate.",
      },
      {
        minutes: 15,
        title: "Record and pause",
        text: "Save the three renderings, the change-point table with reasons, and the narrow reading order. Note any arrangement you are unsure about.",
      },
    ],
    freeToolPath:
      "Three sheets of paper at proportional widths, with columns ruled in pencil, cover this fully. If you use a local HTML file, resizing the browser window shows the change points directly and is the honest way to find them; no design tool or account is needed.",
    deliverable:
      "A stated column, gutter and margin structure; the same content at narrow, medium and wide widths; a change-point table giving each width and the content reason; and the narrow reading order.",
    check: [
      {
        question: "Why not choose change points from device sizes?",
        answer:
          "Because device sizes are a moving, incomplete list and they say nothing about your content. A change point derived from the width at which your own text or pairing stops working has a reason attached and stays valid as devices change.",
      },
      {
        question:
          "Your two columns become one. What decides the order?",
        answer:
          "The reader's task. The element they need first goes first, which is not always the element that was on the left. Check specifically that the primary action has not been pushed below a long secondary block.",
      },
      {
        question: "Does a screen with no visible columns lack structure?",
        answer:
          "No. Alignment provides most of the perceived structure. A consistent shared left edge across headings, text and controls reads as ordered even when no grid is visible.",
      },
    ],
    rubric: [
      "Structure is stated in values, not sketched vaguely",
      "Change points come from content failures",
      "Reflow order follows the task",
      "Alignment is checked at every width",
    ],
    criteria: [
      {
        criterion: "Structure is stated in values, not sketched vaguely",
        evidence:
          "Explicit column count, gutter and margin values at the widest layout, related to the spacing scale where applicable.",
        levels: [
          "No structure stated.",
          "A drawing exists but values are not recorded.",
          "Columns, gutters and margins are stated as values.",
          "As adequate, and the values reuse the spacing scale, with any deliberate exception explained.",
        ],
        remediation:
          "Write the three values for your widest layout and check each against your spacing scale. Record any value that is off-scale and why it must be.",
        recheck: "The stated structure with its relationship to the scale.",
      },
      {
        criterion: "Change points come from content failures",
        evidence:
          "A table of change points where each row gives an approximate width and the specific content behaviour that failed there.",
        levels: [
          "Change points are device names or absent.",
          "Widths are stated but reasons are generic.",
          "Each change point names the specific failure that caused it.",
          "As adequate, and one change point was moved after observing the failure, with the before and after widths recorded.",
        ],
        remediation:
          "Narrow your layout again in small steps and write the first thing that breaks at each point as an observable sentence. Replace any device-derived number with the width you actually observed.",
        recheck: "The change-point table with observed failures per row.",
      },
      {
        criterion: "Reflow order follows the task",
        evidence:
          "A written reading order for the narrow layout, with the primary action's position stated.",
        levels: [
          "No order recorded.",
          "An order is recorded but the primary action is buried without comment.",
          "The order follows the task and the primary action is reachable without a long scroll.",
          "As adequate, and the reason a wide-layout position was deliberately not preserved is explained.",
        ],
        remediation:
          "List the narrow layout's elements top to bottom and mark the primary action's index. If it is far down, move it or add a persistent path to it and record the change.",
        recheck: "The narrow reading order with the primary action's position.",
      },
      {
        criterion: "Alignment is checked at every width",
        evidence:
          "Marked-up renderings at all three widths showing the shared edges, with breaks either fixed or justified.",
        levels: [
          "No alignment check.",
          "Checked at one width only.",
          "Checked at all three, with breaks fixed or justified.",
          "As adequate, and a deliberate alignment break is used to draw attention, with the reason.",
        ],
        remediation:
          "Draw a vertical line down the intended left edge on each rendering and mark every element that does not meet it. Fix or justify each mark.",
        recheck: "The three marked-up renderings.",
      },
    ],
    portfolio:
      "Practice. The reflow reasoning is genuinely useful in a case study's responsive section, provided you present change points as design decisions rather than as tested outcomes.",
    resource: responsive,
    resources: [
      {
        ...responsive,
        section:
          "The layout chapters, read for how a layout is described by its behaviour rather than by fixed sizes.",
        purpose:
          "Supplies the reasoning for change points derived from content rather than devices.",
        minutes: "40–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Read the selected chapters, not the whole site.",
        fallbackId: "R15",
      },
    ],
  },
  {
    id: "m03-l08-v1",
    module: "m03",
    week: 3,
    day: 8,
    level: 1,
    areas: [1, 8],
    title: "A token sheet somebody else could build from",
    objective:
      "Write a single token sheet naming every type, colour and spacing decision from this module, and have it reviewed by finding at least one decision it fails to specify.",
    bringForward:
      "Your type scale, palette, contrast table, spacing scale and layout structure.",
    why: "Everything you have decided so far lives in your head and in one screen. A token sheet is the form those decisions have to take before anyone else — an engineer, a future collaborator, or you in three months — can apply them without guessing.",
    teach: [
      "A token is a named decision. Not “#1B1B1B” but “colour-text-primary, #1B1B1B, used for body copy and headings on light surfaces”. The name carries the intent, which is what makes the value changeable later: when you darken your body text, everything that means body text follows, and nothing that merely happened to share the hex value comes with it.",
      "Name tokens by role, not by appearance. “colour-brand-blue” fails the moment the brand colour becomes green, and “spacing-16” fails the moment you decide inside-group gaps should be 12. Role names — text-primary, surface-raised, space-inset-tight — survive the change of value and tell a reader what the token is for, which is the only reliable way someone else picks the right one.",
      "A sheet that lists values without rules is only half a handoff. The genuinely useful part is the usage note: which token to reach for in which situation, what pairs are permitted, and what is forbidden. “Never place text-secondary on surface-raised; it fails contrast” prevents a whole class of defect that a table of hex values cannot.",
      "Tokens are also where your accessibility work becomes durable. If your contrast table lives in a document nobody opens, the first person to adjust a colour will break it silently. If the permitted pairings are stated on the sheet beside the values, the constraint travels with the decision — and you can re-run the check by inspecting the sheet rather than the whole screen.",
    ],
    misconception:
      "“Tokens are for large teams.” The value appears the first time you build a second screen. Without named decisions, screen two re-derives every value by eye, drifts from screen one, and the drift is invisible until someone puts them side by side.",
    example:
      "A first sheet listed twenty-two colours by hex with no names. Rewritten as nine role-named tokens with usage notes, it exposed three problems immediately: two hexes were doing the same job and could merge, one grey had no role at all and was deleted, and the pairing note revealed that the secondary text colour had never been checked against the raised surface — where it measured 3.1:1 and failed. The sheet found a defect the screen review had missed.",
    steps: [
      {
        minutes: 30,
        title: "Convert decisions to named tokens",
        text: "Write every type, colour and spacing decision as a name, a value and a one-line role. Use role-based names throughout.",
      },
      {
        minutes: 25,
        title: "Add usage and prohibitions",
        text: "For each token, note where it is used and, where relevant, one thing it must not be used for. Include permitted text-on-surface pairings.",
      },
      {
        minutes: 25,
        title: "Re-check pairings against contrast",
        text: "Take every permitted text-on-surface pairing and confirm it against your contrast table. Add any missing pair, measure it, and record failures as prohibitions.",
      },
      {
        minutes: 25,
        title: "The build-it test",
        text: "Hand the sheet to another person, or set it aside and return to it, then rebuild one small component using only the sheet. Record every decision you had to invent because the sheet did not specify it.",
      },
      {
        minutes: 15,
        title: "Repair and save",
        text: "Add the missing specifications the test revealed. Save the sheet and the list of gaps it exposed.",
      },
    ],
    freeToolPath:
      "A Markdown table or a sheet of paper is a complete token sheet; no design tool is required. If you are working in a local HTML file, CSS custom properties give you the same names in a form that is directly usable, which is a convenience rather than a requirement.",
    deliverable:
      "A token sheet of role-named type, colour and spacing tokens with values, usage notes and prohibitions; a permitted-pairing contrast check; and the list of gaps found by the build-it test.",
    check: [
      {
        question: "Why not name a token after its colour?",
        answer:
          "Because the name stops being true the moment the value changes, and it does not tell anyone what the token is for. A role name survives revaluation and guides someone else to the right choice.",
      },
      {
        question: "What does a prohibition add that a value list does not?",
        answer:
          "It prevents a specific defect. Stating that a particular text token must not sit on a particular surface stops a failing combination from being assembled in the first place, which a list of individually valid values cannot do.",
      },
      {
        question:
          "The build-it test forced you to invent three values. What does that mean?",
        answer:
          "That the sheet is incomplete in three specific places, which is exactly what the test is for. Every invented value is a decision that would otherwise be made differently by each person who builds from the sheet.",
      },
    ],
    rubric: [
      "Tokens are named by role and cover every decision",
      "Usage notes and prohibitions are present",
      "Permitted pairings are contrast-checked",
      "The build-it test was run and its gaps repaired",
    ],
    criteria: [
      {
        criterion: "Tokens are named by role and cover every decision",
        evidence:
          "A sheet where every value used in the screen appears as a role-named token, with no appearance-based names.",
        levels: [
          "Values are listed without names, or no sheet exists.",
          "Names exist but several are appearance-based, or decisions from the module are missing.",
          "All decisions appear as role-named tokens.",
          "As adequate, and a naming rule is stated so a future token can be named consistently.",
        ],
        remediation:
          "Rename every appearance-based token by the job it does, then check your screen for any value that has no token and add it.",
        recheck: "The renamed sheet and a confirmation that no value is untokenised.",
      },
      {
        criterion: "Usage notes and prohibitions are present",
        evidence:
          "Each token has a usage note, and at least three prohibitions are stated where misuse is plausible.",
        levels: [
          "No usage notes.",
          "Usage notes exist but no prohibitions.",
          "Usage notes throughout with meaningful prohibitions.",
          "As adequate, and each prohibition names the defect it prevents.",
        ],
        remediation:
          "For your three most easily confused tokens, write the specific wrong use you expect and turn each into a prohibition naming the consequence.",
        recheck: "The three prohibitions with their consequences.",
      },
      {
        criterion: "Permitted pairings are contrast-checked",
        evidence:
          "A pairing table showing each permitted text-on-surface combination with its measured ratio and threshold.",
        levels: [
          "No pairing check.",
          "Some pairings checked; gaps remain.",
          "All permitted pairings are measured and any failure is recorded as a prohibition.",
          "As adequate, and a pairing that fails is retained as prohibited rather than quietly deleted, so the constraint is visible.",
        ],
        remediation:
          "Enumerate every text token against every surface token, measure the ones you would plausibly use, and mark each as permitted or prohibited.",
        recheck: "The completed pairing table.",
      },
      {
        criterion: "The build-it test was run and its gaps repaired",
        evidence:
          "A component rebuilt from the sheet alone and a list of decisions that had to be invented, each now specified.",
        levels: [
          "The test was not run.",
          "The test was run but the gaps were not repaired.",
          "Gaps are listed and each is now specified on the sheet.",
          "As adequate, and the test was run by another person rather than by you, with what they misread recorded.",
        ],
        remediation:
          "Rebuild one component using only the sheet, writing down each moment you had to decide something yourself, then add each of those to the sheet.",
        recheck: "The rebuilt component, the gap list and the updated sheet.",
      },
    ],
    portfolio:
      "Practice, and a portfolio-grade artefact. A token sheet with usage rules and pairing checks is legitimate evidence of systematic thinking in a case study's system section. It is not a design system, which is m13's work.",
    resource: styles,
    resources: [
      {
        ...styles,
        section:
          "The colour and typography style pages, read for how each decision is named, described and given usage guidance.",
        purpose:
          "A public worked example of decisions published as reusable, named rules rather than as a mood board.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the structure with your own values; do not copy government branding.",
        fallbackId: "R06",
      },
    ],
  },
  {
    id: "m03-l09-v1",
    module: "m03",
    week: 3,
    day: 9,
    level: 1,
    areas: [1, 8],
    title: "Applying the system to one component set",
    objective:
      "Build one component in all of its states using only your token sheet, and document each state with the tokens it uses and the condition that produces it.",
    bringForward:
      "Your token sheet and the gap list from the build-it test.",
    why: "A system proves itself on states, not on the happy path. The default appearance of a button is the easy part; the disabled, loading, error and focused versions are where undocumented decisions hide.",
    teach: [
      "A component is defined by its states, and most designs specify only one of them. A single control typically needs a default, a hover or pressed appearance where a pointer exists, a keyboard focus appearance, a disabled appearance, and often a loading appearance while something is happening. Each is a real thing a reader will see, and each needs tokens or it will be invented later by whoever implements it.",
      "Keyboard focus is not optional and is not the same as hover. Hover exists only where there is a pointer; focus is how a person navigating by keyboard knows where they are, and removing the focus indicator because it looks untidy makes the interface unusable for them. Design a focus appearance deliberately — usually a visible outline with its own token — rather than accepting or deleting a default.",
      "A disabled state must still communicate. The contrast exception means a disabled control is not held to the text ratio, but the reader still has to understand what the control is and, ideally, why it is unavailable. A disabled button with no explanation produces a reader who thinks the interface is broken, which is a comprehension failure even where it is not a conformance failure.",
      "This is a foundations pass, not the complete component repertoire. You are proving that your tokens survive contact with one real component's states. Navigation, modals, tables, charts, dashboards and notifications, and the full interaction behaviour around them, belong to the interface craft and interaction modules later in the course; do not describe this lesson's output as a component library.",
    ],
    misconception:
      "“The disabled state is just the default at reduced opacity.” Reducing opacity uniformly changes the background as well as the text, can produce an unpredictable composite over whatever is behind it, and often makes the label unreadable while leaving the control looking pressable. Specify a disabled state with its own tokens instead.",
    example:
      "A primary button was specified once, in default. Building its states from the token sheet exposed four undocumented decisions: focus had no token at all, hover reused a colour that failed against the raised surface, disabled had been drawn at 40 per cent opacity so its label became unreadable, and there was no loading appearance despite the booking action taking two seconds. Four states, four gaps — none visible in the original screen.",
    steps: [
      {
        minutes: 20,
        title: "Choose the component and enumerate states",
        text: "Pick one component your screen genuinely needs. List every state it will really have, including the condition that produces each one.",
      },
      {
        minutes: 35,
        title: "Build each state from tokens only",
        text: "Specify each state using only tokens from your sheet. Every time you cannot, stop and record the missing token rather than inventing a value silently.",
      },
      {
        minutes: 25,
        title: "Design the focus appearance",
        text: "Give keyboard focus its own visible treatment and token. Check it is distinguishable from hover and visible against every surface the component sits on.",
      },
      {
        minutes: 25,
        title: "Make disabled comprehensible",
        text: "Specify disabled with its own tokens, then write the words that tell the reader why the control is unavailable and where those words appear.",
      },
      {
        minutes: 15,
        title: "Document and save",
        text: "Write the state table: state, condition, tokens used, notes. Save it with the new tokens you had to add.",
      },
    ],
    freeToolPath:
      "Draw each state on paper as a labelled row in a table; that is a complete specification. A local HTML file lets you actually reach the focus state with the Tab key, which is the honest way to check it, and needs no account or design tool.",
    deliverable:
      "One component specified in all its states, a state table giving state, triggering condition and tokens used, the new tokens added to the sheet, and the disabled-state explanation text.",
    check: [
      {
        question: "Why is hover not a substitute for focus?",
        answer:
          "Hover requires a pointer. A person navigating with a keyboard never triggers it, so without a distinct focus appearance they cannot tell which control they are on. The two states also often need to look different from one another.",
      },
      {
        question:
          "Your disabled button passes the contrast exception. Is it finished?",
        answer:
          "Not necessarily. The exception means it is not a contrast failure, but the reader still needs to know what the control is and why it is unavailable. That is a comprehension requirement, and it is usually met with words rather than colour.",
      },
      {
        question: "Is this component set a component library?",
        answer:
          "No. It is one component proving that your tokens hold up across real states. A library, with variants, documentation and governance, is the design systems module's work much later in the course.",
      },
    ],
    rubric: [
      "All real states are enumerated with their conditions",
      "States are built from tokens, with gaps recorded not invented",
      "Focus is designed deliberately and checked",
      "Disabled communicates, not merely dims",
    ],
    criteria: [
      {
        criterion: "All real states are enumerated with their conditions",
        evidence:
          "A state table listing each state and the specific condition that produces it, including at least default, focus, disabled and one asynchronous state if the action takes time.",
        levels: [
          "Only the default is specified.",
          "Several states listed but conditions are absent or focus is missing.",
          "All real states are present with their triggering conditions.",
          "As adequate, and a state was added because of something specific about this product, such as a slow network or an offline case.",
        ],
        remediation:
          "Walk through using the component as a reader: before acting, while acting, when not allowed, when it fails. Add any state that walk reveals, with its condition.",
        recheck: "The extended state table with conditions.",
      },
      {
        criterion: "States are built from tokens, with gaps recorded not invented",
        evidence:
          "Each state names the tokens it uses, and every value that had no token is listed as a token added to the sheet.",
        levels: [
          "Values were chosen freely without reference to the sheet.",
          "Tokens are mostly used but some invented values are unrecorded.",
          "Every value is a token, and additions are recorded on the sheet.",
          "As adequate, and one addition prompted a change to an existing token's role rather than a new token, with the reason.",
        ],
        remediation:
          "Go through your states and mark every value that is not on the sheet. Add each as a named token with a role, or replace it with an existing token.",
        recheck: "The state table with token names and the updated sheet.",
      },
      {
        criterion: "Focus is designed deliberately and checked",
        evidence:
          "A focus appearance with its own token, visibly different from hover, checked against every surface the component appears on.",
        levels: [
          "No focus state, or the default was removed.",
          "A focus state exists but is identical to hover or unchecked against surfaces.",
          "Focus is distinct, tokenised and checked on each surface.",
          "As adequate, and the focus indicator's own contrast against its adjacent colours is measured.",
        ],
        remediation:
          "Specify a focus appearance that does not rely on the same signal as hover, then place the component on each surface it uses and confirm the indicator remains visible.",
        recheck: "The focus specification and the per-surface check.",
      },
      {
        criterion: "Disabled communicates, not merely dims",
        evidence:
          "A disabled specification with its own tokens plus the words that explain unavailability and where they appear.",
        levels: [
          "Disabled is uniform opacity applied to the default.",
          "Disabled has its own appearance but no explanation for the reader.",
          "Disabled has its own tokens and an explanation with a stated location.",
          "As adequate, and the explanation is written so it also answers what the reader could do to make the control available.",
        ],
        remediation:
          "Replace any blanket opacity with explicit tokens for the disabled label and surface, then write one sentence the reader would see explaining why the control is unavailable.",
        recheck: "The disabled specification and its explanatory sentence.",
      },
    ],
    portfolio:
      "Practice, with a usable artefact. The state table is good evidence of thoroughness in a case study. It is one component, not a component library, and the write-up must say so.",
    resource: styles,
    resources: [
      {
        ...styles,
        section:
          "The style pages covering how states and their usage are described, read as an example of documenting behaviour alongside appearance.",
        purpose:
          "Shows the level of specification a component needs before someone else can build it.",
        minutes: "25–40 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The full component and variant repertoire is m08 and m13 work, not this lesson's.",
        fallbackId: "R03",
      },
    ],
  },
  {
    id: "m03-l10-v1",
    module: "m03",
    week: 3,
    day: 10,
    level: 1,
    areas: [1, 8],
    title: "Rebuild and critique: what the system changed",
    objective:
      "Rebuild one complete Module 1 screen using only your token sheet and component work, then critique both versions against usability heuristics and separate craft improvements from claims about outcomes.",
    bringForward:
      "Your original Module 1 screen, the token sheet, the component state table and every artefact from this module.",
    why: "Ten lessons of decisions are worth nothing until one whole screen is rebuilt from them, and the rebuild is also the moment to be honest that a better-looking screen is not yet a better-working one.",
    teach: [
      "Rebuilding from a system is a test of the system, not of your taste. Every point where you reach past the token sheet for a value is a defect in the sheet, and the count of those moments is the most useful number this lesson produces. A rebuild that required no additions probably means the screen was too similar to the one the sheet was derived from.",
      "Heuristic critique and evidence are different instruments and produce different sentences. A heuristic review says “this violates a recognised principle in the following specific way”, which is an expert judgement you can act on cheaply. It cannot say “this is better for readers”, because no reader was involved. Keep the two kinds of statement in separate columns so a stakeholder cannot mistake one for the other.",
      "Critique your own work by re-describing it, not by defending it. Write what each change was intended to achieve, then what a reader would actually experience differently, then what you cannot know. The third column is the one that keeps the write-up honest and the one that most portfolios omit entirely.",
      "Visual craft has real limits worth naming. A refreshed screen can improve legibility, grouping and consistency, and still fail because the underlying flow is wrong, the content is unclear or the task itself was misunderstood. Those are the problems the research and flow modules address, and this module's improvements do not touch them.",
    ],
    misconception:
      "“The redesign is a portfolio case study.” It is a craft artefact. A case study needs a problem, evidence about people, decisions traceable to that evidence, a test and honest measurement. A before-and-after image with no participant is a visual comparison, and presenting it as a case study is the most common way portfolios lose credibility.",
    example:
      "A rebuilt workshop detail screen needed six values not on the token sheet — a focus colour on a dark surface, two spacing values for a dense metadata row, and three type sizes for a table. The heuristic review then found four issues, only one of which the visual refresh had addressed: the error message still appeared far from the field that caused it, which is a visibility-of-status problem no palette can fix. The write-up recorded one improvement, three unresolved issues and zero measured outcomes.",
    steps: [
      {
        minutes: 30,
        title: "Rebuild from the system",
        text: "Rebuild the whole screen using only your token sheet and component specifications. Log every moment you had to reach past them.",
      },
      {
        minutes: 25,
        title: "Heuristic review of both versions",
        text: "Review the original and the rebuild against the ten heuristics. Record each issue with the heuristic it violates and the specific element it concerns.",
      },
      {
        minutes: 25,
        title: "Separate the columns",
        text: "Build a three-column table: what changed, what a reader would experience differently, and what you cannot know without evidence. Fill all three honestly.",
      },
      {
        minutes: 25,
        title: "Name what craft did not fix",
        text: "List the issues from the review that visual work cannot resolve, and say which later module addresses each one.",
      },
      {
        minutes: 15,
        title: "Submit and request review",
        text: "Save all artefacts, record your actual minutes, and set the practice status to ready for review with references to your outputs.",
      },
    ],
    freeToolPath:
      "Paper throughout is acceptable; the heuristic review is a written table either way. A local HTML rebuild has the advantage that the tokens become real values you can change in one place, but it is optional and no account or paid tool is involved.",
    deliverable:
      "The rebuilt screen, a log of every value not covered by the token sheet, a heuristic review of both versions, the three-column change table, and the list of issues visual work cannot fix with the module that addresses each.",
    check: [
      {
        question: "What does the count of reaches past the sheet tell you?",
        answer:
          "How incomplete the sheet is, in specific places. Each one is a decision that would otherwise be made inconsistently by whoever builds the next screen, and the list is the most actionable output of the rebuild.",
      },
      {
        question:
          "A heuristic review found eleven issues. Have you proven the screen is hard to use?",
        answer:
          "No. You have produced expert judgements against recognised principles, which is a cheap and useful way to find candidates. Whether readers actually struggle, and with which of the eleven, needs people attempting the task.",
      },
      {
        question: "Is this module's output a portfolio case study?",
        answer:
          "No. It is craft evidence — a system, a rebuild and an honest critique — that can form the system or craft section of a case study built later on real research and testing.",
      },
    ],
    rubric: [
      "The rebuild used the system and logged every exception",
      "Heuristic issues are specific and attributed",
      "Craft claims are separated from outcome claims",
      "The limits of visual work are named with their later module",
    ],
    criteria: [
      {
        criterion: "The rebuild used the system and logged every exception",
        evidence:
          "The rebuilt screen plus a numbered log of each value reached for outside the token sheet, with what it was needed for.",
        levels: [
          "The screen was redesigned freely without reference to the sheet.",
          "The sheet was used but exceptions were not logged.",
          "Every exception is logged with its purpose.",
          "As adequate, and each logged exception is resolved into a token or explicitly rejected with a reason.",
        ],
        remediation:
          "Go through the rebuilt screen and mark every value that is not on the sheet. For each, either add a role-named token or record why it should stay a one-off.",
        recheck: "The exception log with a resolution for each entry.",
      },
      {
        criterion: "Heuristic issues are specific and attributed",
        evidence:
          "Each issue names the heuristic and the exact element or moment, not a general impression.",
        levels: [
          "No review, or only general impressions.",
          "Issues listed without naming heuristics or elements.",
          "Each issue names its heuristic and its specific element.",
          "As adequate, and issues are ordered by likely cost to the reader with the reasoning stated.",
        ],
        remediation:
          "Rewrite each issue in the form: heuristic, element, what happens, why that is a problem. Delete any entry you cannot state that way.",
        recheck: "The rewritten issue list.",
      },
      {
        criterion: "Craft claims are separated from outcome claims",
        evidence:
          "A three-column table where the third column genuinely contains what is unknown, not a restatement of the change.",
        levels: [
          "Improvements are asserted as outcomes.",
          "A caveat exists but the unknown column is empty or generic.",
          "All three columns are filled and the unknown column names specific things evidence would be needed for.",
          "As adequate, and one unknown is turned into a concrete question a reader could be asked in the next module.",
        ],
        remediation:
          "For every row where you wrote an experience claim, ask how you know. If the answer is that it looks better, move the claim to the unknown column and rewrite it as a question.",
        recheck: "The corrected three-column table.",
      },
      {
        criterion: "The limits of visual work are named with their later module",
        evidence:
          "A list of review issues visual work cannot resolve, each mapped to the module that addresses it.",
        levels: [
          "No limits acknowledged.",
          "Limits acknowledged generically without mapping.",
          "Each unresolved issue is mapped to the module that will address it.",
          "As adequate, and one issue is identified as possibly a problem with the task or content rather than the interface at all.",
        ],
        remediation:
          "Take your heuristic issues and mark each as fixable by visual craft, by flow or structure, or by research. Map the second and third groups to the modules that cover them.",
        recheck: "The mapped issue list.",
      },
    ],
    portfolio:
      "The strongest artefact of this module and still not a case study. Use the rebuild and critique as the craft and system evidence inside a case study whose problem, research and testing come from later modules. Do not present the before-and-after as a measured improvement.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section: "All ten heuristics with their examples.",
        purpose:
          "Provides the shared vocabulary for a critique that names principles rather than preferences.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics are expert judgement, not evidence from readers, and they are not universal laws.",
        fallbackId: "R11",
      },
    ],
  },
];
