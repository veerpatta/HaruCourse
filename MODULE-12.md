# Web foundations and responsive behavior

> Experience refinement is applied lesson by lesson. See [the agreed learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for guided practice, worksheets, videos, free-tier constraints and the refinement ledger that records which lessons carry the guided worksheet. Existing teaching and diagnostic independence remain in force.

Generated from src/module12.ts; edit that source, then run npm run docs:generate. Level 4 · Module m12 · requirement areas 13. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m11. This is guidance for meaningful practice, not a lock. Module approved resource pair: R15 / R16. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What happens between a tap and a page

Stable ID: m12-l01-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Trace one real page load from request to rendered content, name each stage, and identify the two stages your design decisions can affect.

**Bring forward.** Your m10 running prototype or any real page you use often.

Design decisions about images, fonts and structure become performance decisions here. You cannot weigh them without knowing what the browser is doing.

### Learn

When someone opens a page, the browser asks a server for a document, receives HTML, and starts reading it. Every stylesheet, font, image and script referenced in that HTML becomes another request, and each one takes time proportional to its size and the connection. This is why a design with four typefaces and a hero video is a performance decision made at the moment of designing, long before anyone writes code.

The stages fail differently. A slow stylesheet delays the first paint, so the person sees nothing. A slow font can leave text invisible or shifting when it swaps. A slow script can leave a page that looks finished and does not respond, which is the most confusing failure of all because the person taps and nothing happens.

The network tab in your browser shows the real sequence: what was requested, in what order, how big it was and how long it took. Reading it once for a real page is more instructive than any amount of general advice about performance, and it costs ten minutes.

Two stages are yours. How much is requested — the number and weight of images, fonts and scripts — is a design decision. And what appears first is a structural decision, because the browser renders what it has: a page whose text arrives before its images shows something useful immediately, and one that waits for everything shows nothing.

**Common misconception.** “Performance is the engineer's problem.” Engineers optimise what exists. The number of typefaces, the size of the hero image and whether the design can show anything before the images arrive are decided in the design, and they usually dominate.

### Worked example

One real class page traced in the network tab: the document arrived in 300ms, then two stylesheets, three font files, eleven images and four scripts — twenty-one requests before the page was usable, taking eleven seconds on a throttled connection. The two design-owned findings: three typefaces were being loaded and only two were used, and the hero image was 1.8 MB and appeared above every piece of text, so nothing readable appeared until it arrived. Both were design decisions; neither needed an engineer to identify.

#### What happens between a tap and a page

Trace one real page load from request to rendered content, name each stage, and identify the two stages your design decisions can affect.

**Where to work:** Any Chromium browser's developer tools, which are free and installed already. No account, extension or performance service is required.

- Starting material: A browser and any page you can load repeatedly.
- Create HaruCourse/Practice/m12-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# What happens between a tap and a page

Input artifact: A browser and any page you can load repeatedly.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A traced load with each stage named
- [ ] A request list with sizes and times
- [ ] Two design-owned findings from the trace
- [ ] A note of what appeared first and what the person could do while waiting

## 1. Read the sequence
- Read the assigned introduction to how the web works.
- Write the stages of a page load in your own words.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Trace a real load
- Open the network tab, disable the cache and reload a real page.
- Record the number of requests, the total size and the time.
- Note which requests are images, fonts, scripts and styles.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Throttle it
- Set a slow connection profile and reload.
- Record when the first text appeared and when the page became usable.
- Note anything that shifted position as it loaded.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Find the design-owned costs
- List every request that exists because of a design decision.
- Identify two you could remove or reduce without changing the product.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write the two findings as design changes, not engineering tasks.
- Save the request list and the timings.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The load stages are named in the learner's own words: [evidence reference]
- A real trace records requests, sizes and times: [evidence reference]
- A throttled load records first text and time to usable: [evidence reference]
- Two findings are stated as design changes: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write the sequence as a list and add one sentence per stage saying what the browser is doing.

</details>

<details>
<summary>Hint 2</summary>

Reload with the cache disabled and record the totals from the network tab.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The load stages are named in the learner's own words: A written sequence from request to interactive. A real trace records requests, sizes and times: A recorded trace with counts, total weight and duration, cache disabled. A throttled load records first text and time to usable: Timings for first readable content and interactivity under a slow profile. Two findings are stated as design changes: Two specific changes a designer could make, traced to requests in the list.

**Bring forward:** A trace with two design-owned findings is a small artefact that shows you can talk to engineers about performance in their own terms. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Read the sequence (~25 min): Read the assigned introduction to how the web works. Write the stages of a page load in your own words.
- Trace a real load (~30 min): Open the network tab, disable the cache and reload a real page. Record the number of requests, the total size and the time. Note which requests are images, fonts, scripts and styles.
- Throttle it (~25 min): Set a slow connection profile and reload. Record when the first text appeared and when the page became usable. Note anything that shifted position as it loaded.
- Find the design-owned costs (~25 min): List every request that exists because of a design decision. Identify two you could remove or reduce without changing the product.
- Record (~15 min): Write the two findings as design changes, not engineering tasks. Save the request list and the timings.

Pause after any step; save the artifact and next action.

**Free tool path.** Any Chromium browser's developer tools, which are free and installed already. No account, extension or performance service is required.

### Output

A traced load with each stage named; A request list with sizes and times; Two design-owned findings from the trace; A note of what appeared first and what the person could do while waiting

### Checks

- Why does a slow script fail differently from a slow image? Answer: A slow image leaves a gap; a slow script can leave a page that looks complete and does not respond, so people tap repeatedly and conclude it is broken.
- Which parts of load performance does a designer own? Answer: How much is requested — typefaces, image weight, decorative assets — and what can render before the rest arrives. Both are decided while designing.
- Why disable the cache when tracing? Answer: Because your second visit is not a first visit. The cache hides exactly the cost a new person pays.

### Rubric and remediation

**The load stages are named in the learner's own words**

Adequate evidence: A written sequence from request to interactive.

- 0 — No sequence.
- 1 — Copied terminology without meaning attached.
- 2 — Stages named and explained in the learner's own words.
- 3 — As adequate, and each stage names what could delay it.

If below 2: Write the sequence as a list and add one sentence per stage saying what the browser is doing. Show at recheck: The written sequence.

**A real trace records requests, sizes and times**

Adequate evidence: A recorded trace with counts, total weight and duration, cache disabled.

- 0 — No trace.
- 1 — Traced with the cache enabled, so costs are hidden.
- 2 — Traced with the cache disabled and figures recorded.
- 3 — As adequate, and requests are grouped by type so the biggest category is visible.

If below 2: Reload with the cache disabled and record the totals from the network tab. Show at recheck: The trace record.

**A throttled load records first text and time to usable**

Adequate evidence: Timings for first readable content and interactivity under a slow profile.

- 0 — Not throttled.
- 1 — Throttled without timings.
- 2 — Both timings recorded with the profile named.
- 3 — As adequate, and any content shifting during load is noted.

If below 2: Set a slow profile, reload, and time when you could first read and first act. Show at recheck: The throttled timings.

**Two findings are stated as design changes**

Adequate evidence: Two specific changes a designer could make, traced to requests in the list.

- 0 — Findings framed as engineering work.
- 1 — One design-owned finding.
- 2 — Two, each traced to a specific request.
- 3 — As adequate, and one is quantified — the weight or time it would save.

If below 2: Look at the largest requests and ask which exist because of a design choice. Show at recheck: The two findings.

### Portfolio contribution

A trace with two design-owned findings is a small artefact that shows you can talk to engineers about performance in their own terms.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The introductory modules on how the web works and what a browser does with HTML, CSS and JavaScript. Purpose: Supplies the sequence and vocabulary this module is built on. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the free written articles; exclude any promoted paid partner courses. It teaches implementation, not design judgement. Fallback: R16.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — The network panel: request list, sizes, timing and throttling profiles. Purpose: Gives the instrument for seeing the real sequence rather than the intended one. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a dropped connection. Fallback: R16.

## Lesson 2: HTML that means something

Stable ID: m12-l02-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Build one page of your product in semantic HTML, with the heading outline and regions from m11, and verify the structure without looking at the styling.

**Bring forward.** Your m11 heading outline and region map.

The elements you choose are what assistive technology, search and translation read. Styling is what everyone else reads.

### Learn

Semantic markup is the cheapest accessibility work available, because the browser and assistive technology already know what a heading, a list and a button are. Using a generic container with a class instead throws that knowledge away and requires you to rebuild it — the keyboard behaviour, the announcement, the focus — by hand and usually incompletely.

The link-versus-button distinction is the one that causes the most trouble. A link navigates; it can be opened in a new tab, copied and shared, and it responds to enter. A button performs an action in place and responds to enter and space. A link styled as a button that submits a form, or a button that navigates, breaks both sets of expectations and the keyboard behaviour with them.

Content has shapes, and matching them costs nothing. A set of classes is a list; a schedule is a table; a term with its definition is a definition list. Marking them correctly gives you announcement, navigation and often layout behaviour without extra work, and it makes the document comprehensible to anything that reads it later.

The stylesheet test is the fastest verification you have: disable the styling and read the page. If it reads as a sensible document — title, sections, lists, forms with labels — the markup is doing its job. If it reads as a stream of undifferentiated text, no amount of styling will make it navigable for anyone who is not looking at it.

**Common misconception.** “It looks the same, so the markup does not matter.” It looks the same to you. To a screen reader, a search engine, a translation tool and a browser's reader mode, a page of generic containers has no structure at all.

### Worked example

The class detail page was rebuilt in semantic HTML: one page title, four section headings at the right levels, the class list as a list, the schedule as a table with header cells, the booking action as a button and the “see other dates” as a link. Removing the stylesheet produced a readable document with a clear outline. Three earlier mistakes surfaced during the rebuild: the availability status had been a coloured div with no text, the filter controls were links that performed actions, and the price table was built from divs so its columns had no headers.

#### HTML that means something

Build one page of your product in semantic HTML, with the heading outline and regions from m11, and verify the structure without looking at the styling.

**Where to work:** A text editor and a browser. Disabling the stylesheet is a single browser setting or a one-line change; no extension, framework or build tool is needed.

- Starting material: Your m11 outline and region map, and a text editor.
- Create HaruCourse/Practice/m12-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# HTML that means something

Input artifact: Your m11 outline and region map, and a text editor.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One page in semantic HTML with correct heading levels
- [ ] Landmarks for banner, navigation, main and footer
- [ ] Links and buttons used for their correct purposes
- [ ] A stylesheet-off reading with problems found and fixed

## 1. Read and plan the markup
- Read the assigned HTML module sections on structure and semantics.
- Map your m11 outline onto heading elements and landmarks.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the page
- Write the page using elements that match the content's shape.
- Use a button for actions and a link for navigation.
- Include the real content, not placeholder text.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Read it without styling
- Disable the stylesheet and read the page top to bottom.
- Mark anything that loses meaning or order.
- Fix by changing elements, not by adding styling back.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Check headings and landmarks
- Confirm one page title and no skipped levels.
- Confirm the main content can be reached directly.
- Run the applicable preliminary checks.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- List the mistakes the rebuild revealed.
- Save the page and the unstyled reading notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Elements match the content's shape: [evidence reference]
- Headings and landmarks follow the m11 outline: [evidence reference]
- Links and buttons are used correctly: [evidence reference]
- The unstyled reading was run and problems fixed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go through the page asking what each block of content is, then use the element that means that.

</details>

<details>
<summary>Hint 2</summary>

Compare the built page against your outline line by line and correct the levels.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Elements match the content's shape: Lists as lists, tables with header cells, forms with labelled fields. Headings and landmarks follow the m11 outline: One page title, correct nesting, and named landmarks matching the region map. Links and buttons are used correctly: Every action a button, every navigation a link, with no styled substitutes. The unstyled reading was run and problems fixed: A record of reading the page without styling, with fixes made in the markup.

**Bring forward:** A semantic page with an unstyled reading is proof that your accessibility work reached the build rather than stopping at the specification. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Read and plan the markup (~30 min): Read the assigned HTML module sections on structure and semantics. Map your m11 outline onto heading elements and landmarks.
- Build the page (~35 min): Write the page using elements that match the content's shape. Use a button for actions and a link for navigation. Include the real content, not placeholder text.
- Read it without styling (~25 min): Disable the stylesheet and read the page top to bottom. Mark anything that loses meaning or order. Fix by changing elements, not by adding styling back.
- Check headings and landmarks (~20 min): Confirm one page title and no skipped levels. Confirm the main content can be reached directly. Run the applicable preliminary checks.
- Record (~10 min): List the mistakes the rebuild revealed. Save the page and the unstyled reading notes.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor and a browser. Disabling the stylesheet is a single browser setting or a one-line change; no extension, framework or build tool is needed.

### Output

One page in semantic HTML with correct heading levels; Landmarks for banner, navigation, main and footer; Links and buttons used for their correct purposes; A stylesheet-off reading with problems found and fixed

### Checks

- What is the difference between a link and a button? Answer: A link navigates and can be opened, copied and shared; a button performs an action in place. Their keyboard behaviour differs too, so swapping them breaks expectations.
- Why does the stylesheet-off test work? Answer: Because it shows the document as anything non-visual reads it. If the structure survives without styling, it exists; if not, it was only ever visual.
- What do you lose by using generic containers? Answer: Announcement, navigation, keyboard behaviour and machine readability — all of which then have to be rebuilt by hand, usually incompletely.

### Rubric and remediation

**Elements match the content's shape**

Adequate evidence: Lists as lists, tables with header cells, forms with labelled fields.

- 0 — Generic containers throughout.
- 1 — Some semantic elements, with lists or tables built from containers.
- 2 — Elements match content throughout.
- 3 — As adequate, and one earlier design decision was corrected because no element fitted it.

If below 2: Go through the page asking what each block of content is, then use the element that means that. Show at recheck: The revised markup.

**Headings and landmarks follow the m11 outline**

Adequate evidence: One page title, correct nesting, and named landmarks matching the region map.

- 0 — Headings chosen visually.
- 1 — Correct headings without landmarks.
- 2 — Both correct and matching the m11 work.
- 3 — As adequate, and a route to the main content skips the navigation.

If below 2: Compare the built page against your outline line by line and correct the levels. Show at recheck: The heading and landmark check.

**Links and buttons are used correctly**

Adequate evidence: Every action a button, every navigation a link, with no styled substitutes.

- 0 — Links perform actions or buttons navigate.
- 1 — Mostly correct with one or two substitutions.
- 2 — Correct throughout.
- 3 — As adequate, and any control that looked like the wrong type was restyled rather than re-elemented.

If below 2: List every control and ask whether it goes somewhere or does something, then use the matching element. Show at recheck: The control list.

**The unstyled reading was run and problems fixed**

Adequate evidence: A record of reading the page without styling, with fixes made in the markup.

- 0 — Not run.
- 1 — Run without fixes.
- 2 — Run, problems named and fixed in the markup.
- 3 — As adequate, and the fixes changed elements rather than adding styling back.

If below 2: Disable the stylesheet, read the page aloud, and fix every place the meaning collapses. Show at recheck: The unstyled reading notes.

### Portfolio contribution

A semantic page with an unstyled reading is proof that your accessibility work reached the build rather than stopping at the specification.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The structuring content module: document structure, headings, lists, links and buttons. Purpose: Supplies the elements and their meanings for this rebuild. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles and exclude promoted paid partner courses. Fallback: R16.
- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — Headings, regions and their relationship to the page outline. Purpose: Connects the markup back to the structure decisions you already made. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. Structural semantics only; it does not cover CSS or layout. Fallback: R14.

## Lesson 3: CSS: the box, the flow and the cascade

Stable ID: m12-l03-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Style your semantic page using your m08 tokens as custom properties, and explain in writing why three specific rules produce the layout they do.

**Bring forward.** Your semantic page and your m08 token sheet.

Understanding the cascade is what turns CSS from guesswork into design. Most frustration with it comes from not knowing which rule won.

### Learn

The box model explains most layout surprises. Padding grows a box inward from its edge, margin pushes other boxes away, and whether the width you set includes the padding depends on one property. Knowing this converts “why is this 24 pixels too wide” from a mystery into arithmetic.

Normal flow is the default behaviour you get for free: blocks stack, text wraps, and the page grows as tall as it needs. Every layout mode you add — flex, grid — is a deliberate departure from that, and a page that keeps normal flow wherever it can is more robust when content changes length, which it always does.

The cascade decides conflicts by specificity and order, and most confusion comes from not being able to say which rule won. Your browser's element inspector shows you the winner and the rules it overrode; reading it once when something surprises you is the fastest way to learn the rules for good.

Custom properties are where your token sheet becomes real. Declaring your colours, spacing and type steps once at the top and referring to them everywhere means a change happens in one place, the values have names in the code as well as in your documentation, and an engineer reading it sees the same vocabulary you use.

**Common misconception.** “CSS is unpredictable.” It is deterministic and mostly unfamiliar. The three things that produce nearly all surprises — the box model, the cascade and inheritance — take an afternoon to learn and remove the guesswork permanently.

### Worked example

The class page was styled with the token sheet declared as custom properties at the top: five neutrals, three semantic colours, six spacing values, six type steps. Three rules were then explained in writing. Why the card was wider than its container: padding was being added to a set width, fixed by including padding in the box sizing. Why the heading colour would not change: a more specific rule elsewhere was winning, visible in the inspector. Why the body font applied everywhere without being repeated: inheritance, set once on the root.

#### CSS: the box, the flow and the cascade

Style your semantic page using your m08 tokens as custom properties, and explain in writing why three specific rules produce the layout they do.

**Where to work:** A text editor, a browser and its element inspector. No preprocessor, framework or build step is required, and avoiding them at this stage is deliberate: you are learning what the browser does.

- Starting material: Your built page and token sheet.
- Create HaruCourse/Practice/m12-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# CSS: the box, the flow and the cascade

Input artifact: Your built page and token sheet.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A styled page using custom properties from your token sheet
- [ ] Written explanations of three rules and why they win
- [ ] One layout surprise diagnosed with the inspector
- [ ] A note of what you set once and inherited rather than repeating

## 1. Read the fundamentals
- Read the assigned CSS sections on the box model, flow and the cascade.
- Write the box model in your own words with a diagram.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Declare your tokens
- Write your token sheet as custom properties at the top of the stylesheet.
- Use the same names as your documentation.
- Style the page referring to them, never to raw values.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Diagnose a surprise
- Find something that does not look as you expected.
- Use the inspector to see which rule won and what it overrode.
- Write the explanation before changing anything.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Explain three rules
- Choose three rules in your stylesheet and explain what each does and why.
- Include one about the cascade and one about inheritance.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Note anything you set once and inherited rather than repeating.
- Save the stylesheet and the explanations.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The stylesheet uses tokens as custom properties: [evidence reference]
- Three rules are explained including cascade and inheritance: [evidence reference]
- One surprise was diagnosed with the inspector: [evidence reference]
- Values are set once and inherited where sensible: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Search the stylesheet for literal colours and spacing values and replace each with its token.

</details>

<details>
<summary>Hint 2</summary>

Choose three rules and write, for each, what it does and why it wins or applies.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The stylesheet uses tokens as custom properties: Custom properties declared once with your documented names, referenced throughout. Three rules are explained including cascade and inheritance: Three written explanations covering what the rule does and why it applies. One surprise was diagnosed with the inspector: A recorded diagnosis naming the winning rule and what it overrode. Values are set once and inherited where sensible: A note of inherited values, with repetition removed.

**Bring forward:** Showing a token sheet expressed as custom properties links your design system work directly to the build, which few junior portfolios do. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Read the fundamentals (~30 min): Read the assigned CSS sections on the box model, flow and the cascade. Write the box model in your own words with a diagram.
- Declare your tokens (~30 min): Write your token sheet as custom properties at the top of the stylesheet. Use the same names as your documentation. Style the page referring to them, never to raw values.
- Diagnose a surprise (~25 min): Find something that does not look as you expected. Use the inspector to see which rule won and what it overrode. Write the explanation before changing anything.
- Explain three rules (~25 min): Choose three rules in your stylesheet and explain what each does and why. Include one about the cascade and one about inheritance.
- Record (~10 min): Note anything you set once and inherited rather than repeating. Save the stylesheet and the explanations.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor, a browser and its element inspector. No preprocessor, framework or build step is required, and avoiding them at this stage is deliberate: you are learning what the browser does.

### Output

A styled page using custom properties from your token sheet; Written explanations of three rules and why they win; One layout surprise diagnosed with the inspector; A note of what you set once and inherited rather than repeating

### Checks

- Why is a box sometimes wider than the width you set? Answer: Because padding and border may be added to that width. Which behaviour applies depends on the box-sizing property, and knowing it turns the surprise into arithmetic.
- How do you find out which rule won? Answer: The element inspector shows the applied rules and the overridden ones. Reading it is faster and more reliable than adding importance until something changes.
- Why declare tokens as custom properties? Answer: Because it makes your design vocabulary real in the code, changes happen in one place, and an engineer sees the same names you use in documentation.

### Rubric and remediation

**The stylesheet uses tokens as custom properties**

Adequate evidence: Custom properties declared once with your documented names, referenced throughout.

- 0 — Raw values throughout.
- 1 — Some properties declared but raw values still used.
- 2 — Tokens declared and referenced consistently.
- 3 — As adequate, and the names match the m08 token sheet exactly.

If below 2: Search the stylesheet for literal colours and spacing values and replace each with its token. Show at recheck: The stylesheet.

**Three rules are explained including cascade and inheritance**

Adequate evidence: Three written explanations covering what the rule does and why it applies.

- 0 — No explanations.
- 1 — Explanations describing effect without mechanism.
- 2 — Three explanations including a cascade case and an inheritance case.
- 3 — As adequate, and one explains a rule you originally wrote by trial and error.

If below 2: Choose three rules and write, for each, what it does and why it wins or applies. Show at recheck: The explanations.

**One surprise was diagnosed with the inspector**

Adequate evidence: A recorded diagnosis naming the winning rule and what it overrode.

- 0 — Fixed by trial and error.
- 1 — Diagnosed loosely without naming the rules.
- 2 — Diagnosed with the inspector and written up before the fix.
- 3 — As adequate, and the fix removed a conflict rather than adding specificity.

If below 2: Open the inspector on the element and read the applied and overridden rules, then write what happened. Show at recheck: The diagnosis.

**Values are set once and inherited where sensible**

Adequate evidence: A note of inherited values, with repetition removed.

- 0 — Values repeated per element.
- 1 — Some inheritance used without awareness.
- 2 — Inheritance used deliberately and documented.
- 3 — As adequate, and one repeated declaration was removed as redundant.

If below 2: Find values repeated on many elements and set them once higher up instead. Show at recheck: The stylesheet and note.

### Portfolio contribution

Showing a token sheet expressed as custom properties links your design system work directly to the build, which few junior portfolios do.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS styling basics module: the box model, values, the cascade, inheritance and custom properties. Purpose: Supplies the mechanics this lesson makes explicit. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapter, read for how flow behaves before layout modes are added. Purpose: Explains why keeping normal flow where possible produces more robust pages. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Design-focused rather than a CSS reference; the mechanics come from the MDN module. Fallback: R15.

## Lesson 4: Responsive layout, built rather than drawn

Stable ID: m12-l04-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Make your page work from about 320 pixels to a wide screen without horizontal scrolling, using flexible layout rather than fixed breakpoint copies.

**Bring forward.** Your m07 three-width drawings and behaviour notes.

You have drawn responsive layouts for five modules. Building one shows you which of those drawings were possible and which were wishes.

### Learn

Building narrow first is not a slogan; it is the order that produces fewer decisions. The narrow layout is your content in priority order with almost no arrangement, and each wider layout adds arrangement as space allows. Starting wide means removing things, which is where content gets hidden rather than reordered.

Breakpoints belong where your content breaks, not where a device is rumoured to be. Widen the browser slowly and watch: the point where a line becomes uncomfortably long, where a card becomes too narrow to read, where a gap opens — those are your breakpoints, and they are specific to this design.

Flexible layout does most of the work without breakpoints at all: content that wraps when it runs out of room, columns that grow within limits, images that scale to their container. Layouts built from fixed sizes need a breakpoint for every problem, and they fail between the sizes you tested.

The gaps between breakpoints are where failures hide, because that is where nobody looks. Drag the window slowly across the whole range once. Anything that overlaps, clips, or produces horizontal scrolling appears immediately, and horizontal scrolling of the page is never acceptable — content that must scroll sideways gets its own container.

**Common misconception.** “Responsive means three layouts for phone, tablet and desktop.” Devices come in every size, and people resize windows, split screens and enlarge text. A layout that only works at three widths fails at the dozens in between.

### Worked example

The class page was built narrow first: title, key facts, action, then description, with the image below. Widening slowly revealed three genuine breakpoints — one where the key facts could sit in a row, one where the description could take a wider column, one where a side panel became viable. None matched a device name. Between the second and third, the card grid produced a single orphaned card, fixed with a flexible wrap rather than another breakpoint. At 320 pixels the schedule table caused horizontal scrolling of the page; it became records instead, matching the m08 decision.

#### Responsive layout, built rather than drawn

Make your page work from about 320 pixels to a wide screen without horizontal scrolling, using flexible layout rather than fixed breakpoint copies.

**Where to work:** A browser window you can drag, plus the device toolbar for a phone-sized viewport. Everything in this lesson works in a text editor and a browser with no build step.

- Starting material: Your three-width drawings and the built page.
- Create HaruCourse/Practice/m12-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Responsive layout, built rather than drawn

Input artifact: Your three-width drawings and the built page.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A page working from about 320 pixels upward
- [ ] Breakpoints chosen from content, with the reason for each
- [ ] A slow width sweep with failures found between breakpoints
- [ ] No horizontal page scrolling at any width

## 1. Build narrow first
- Lay out the page at about 320 pixels with content in priority order.
- Use flexible sizing rather than fixed widths.
- Check nothing requires horizontal scrolling.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Widen and watch
- Drag the window wider slowly.
- Note each point where the layout becomes uncomfortable.
- Add a breakpoint only where content demands it, and record why.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Sweep the whole range
- Drag from narrow to wide in one pass.
- Record every overlap, clip, orphan and scroll.
- Fix with flexible rules before adding another breakpoint.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test the hard content
- Use your longest real label and largest real number.
- Enlarge the text to about 200 per cent and sweep again.
- Fix what breaks by letting containers grow.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- List your breakpoints with the content reason for each.
- Compare the built result with your m07 drawings and note the differences.
- Save the page and the notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The page works from about 320 pixels with no horizontal scroll: [evidence reference]
- Breakpoints are justified by content: [evidence reference]
- A full width sweep was run and failures fixed: [evidence reference]
- Long content and enlarged text were tested: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container.

</details>

<details>
<summary>Hint 2</summary>

Remove your breakpoints, widen slowly, and add each one back only where you can name the problem.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The page works from about 320 pixels with no horizontal scroll: A narrow rendering with all content reachable and no page-level horizontal scrolling. Breakpoints are justified by content: Each breakpoint recorded with the content problem that prompted it. A full width sweep was run and failures fixed: A record of sweeping the whole range with the failures found and repaired. Long content and enlarged text were tested: Renderings using the longest real content and text at about 200 per cent.

**Bring forward:** A built responsive page with content-derived breakpoints is stronger evidence than three static mockups, because it demonstrates the behaviour rather than illustrating it. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Build narrow first (~30 min): Lay out the page at about 320 pixels with content in priority order. Use flexible sizing rather than fixed widths. Check nothing requires horizontal scrolling.
- Widen and watch (~30 min): Drag the window wider slowly. Note each point where the layout becomes uncomfortable. Add a breakpoint only where content demands it, and record why.
- Sweep the whole range (~25 min): Drag from narrow to wide in one pass. Record every overlap, clip, orphan and scroll. Fix with flexible rules before adding another breakpoint.
- Test the hard content (~20 min): Use your longest real label and largest real number. Enlarge the text to about 200 per cent and sweep again. Fix what breaks by letting containers grow.
- Record (~15 min): List your breakpoints with the content reason for each. Compare the built result with your m07 drawings and note the differences. Save the page and the notes.

Pause after any step; save the artifact and next action.

**Free tool path.** A browser window you can drag, plus the device toolbar for a phone-sized viewport. Everything in this lesson works in a text editor and a browser with no build step.

### Output

A page working from about 320 pixels upward; Breakpoints chosen from content, with the reason for each; A slow width sweep with failures found between breakpoints; No horizontal page scrolling at any width

### Checks

- Why build narrow first? Answer: Because it forces content priority and adds arrangement as space allows. Starting wide leads to removing things, which hides content rather than reordering it.
- Where do breakpoints belong? Answer: Where your content stops working, found by widening slowly. Device-named breakpoints describe hardware that keeps changing and your content never.
- Why sweep the whole width range? Answer: Because failures live between the sizes people test. One slow drag finds overlaps, orphans and scrolling that fixed-width checks miss entirely.

### Rubric and remediation

**The page works from about 320 pixels with no horizontal scroll**

Adequate evidence: A narrow rendering with all content reachable and no page-level horizontal scrolling.

- 0 — Horizontal scrolling or clipped content at narrow widths.
- 1 — Works narrow but content is hidden rather than reordered.
- 2 — Works from 320 with content reordered and reachable.
- 3 — As adequate, and any genuinely wide content scrolls inside its own container.

If below 2: Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container. Show at recheck: The narrow rendering.

**Breakpoints are justified by content**

Adequate evidence: Each breakpoint recorded with the content problem that prompted it.

- 0 — Device-named breakpoints.
- 1 — Breakpoints without reasons.
- 2 — Each justified by an observed content problem.
- 3 — As adequate, and one problem was solved with flexible rules instead of a breakpoint.

If below 2: Remove your breakpoints, widen slowly, and add each one back only where you can name the problem. Show at recheck: The breakpoint list.

**A full width sweep was run and failures fixed**

Adequate evidence: A record of sweeping the whole range with the failures found and repaired.

- 0 — Only fixed widths checked.
- 1 — Swept without recording failures.
- 2 — Swept, failures recorded and fixed.
- 3 — As adequate, and fixes preferred flexible rules over new breakpoints.

If below 2: Drag from narrow to wide in one pass and write down everything that misbehaves. Show at recheck: The sweep notes.

**Long content and enlarged text were tested**

Adequate evidence: Renderings using the longest real content and text at about 200 per cent.

- 0 — Tested with short sample content only.
- 1 — One of the two tested.
- 2 — Both tested with breakages fixed by letting containers grow.
- 3 — As adequate, and the result is compared with the m07 drawings, noting which were unbuildable.

If below 2: Substitute your longest real values, enlarge the text and sweep again. Show at recheck: The hard-content renderings.

### Portfolio contribution

A built responsive page with content-derived breakpoints is stronger evidence than three static mockups, because it demonstrates the behaviour rather than illustrating it.

### Assigned resources

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout and typography chapters, read for reflow, priority and content-driven breakpoints. Purpose: Supplies the responsive reasoning this build applies. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. Web-focused; reading it is not the same as having tested a layout, which is why the sweep is the deliverable. Fallback: R15.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS layout module: flexible boxes, grid and sizing. Purpose: Gives the mechanics for building the layouts flexibly. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Implementation reference; exclude promoted paid partner courses. Fallback: R16.

## Lesson 5: Images that do not cost the page

Stable ID: m12-l05-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Put real images into your page at appropriate sizes and formats, produce one icon as hand-written SVG, and measure the weight you saved.

**Bring forward.** Your built page and the images your design uses.

Images are usually most of a page's weight, and almost all of that weight is a design decision.

### Learn

Serving an image far larger than its display size is the commonest and cheapest performance mistake. The browser downloads every pixel and then throws most of them away, so a photograph that appears at 400 pixels wide should be delivered near that size, with an allowance for higher-density screens rather than for every possible screen.

Format follows content. Photographs compress well in formats designed for continuous tone; flat graphics, logos and icons belong in a vector format, where they are small, sharp at every size and colourable with your tokens. Getting this wrong in either direction is expensive — a logo as a large photograph-style file, or a photograph as a vector.

SVG being text has a consequence worth exploiting: you can write an icon by hand in a text editor, without any design tool or account, and change it with a stylesheet. This is the course's account-free route to producing and exporting vector artwork, and doing it once removes any dependency on a hosted design tool for simple marks.

Loading later is a legitimate technique for images the person has not scrolled to, and a mistake for the image at the top, which is often what the page is about. Decide per image rather than applying one rule, and remember that an image with no reserved space causes the layout jump you spent m08 and m09 preventing.

**Common misconception.** “The developer will optimise the images.” They can compress what you supply. Whether the page has a full-width photograph at all, and whether it appears above the first line of text, are design decisions that dominate the outcome.

### Worked example

Eleven images were reviewed. The hero photograph was 1.8 MB at 3000 pixels wide, displayed at 720; re-exported at an appropriate size and format it became 96 KB. Six flat icons were replaced with hand-written SVG totalling under 4 KB, styled with the token colours rather than shipped in three colour variants. Four below-the-fold photographs were set to load later, with their space reserved so nothing jumped. Total page weight fell from 2.4 MB to 340 KB, and time to usable on a throttled connection fell from eleven seconds to three.

#### Images that do not cost the page

Put real images into your page at appropriate sizes and formats, produce one icon as hand-written SVG, and measure the weight you saved.

**Where to work:** A text editor for the SVG, following the assigned tutorial, and any free image resizer or your operating system's own export. No hosted design account is required to produce or export vector artwork.

- Starting material: Your built page and its images.
- Create HaruCourse/Practice/m12-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Images that do not cost the page

Input artifact: Your built page and its images.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Images served near their display size, with formats chosen deliberately
- [ ] One icon written by hand as SVG and styled with tokens
- [ ] A loading decision per image, with reserved space
- [ ] Before-and-after page weight and time to usable

## 1. Audit the images
- List every image with its file size and its display size.
- Mark any served more than twice its display width.
- Mark flat graphics currently shipped as photographs.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Resize and re-format
- Export each photograph near its display size, allowing for dense screens.
- Move flat graphics to a vector format.
- Re-measure the total page weight.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write an SVG by hand
- Follow the assigned tutorial to write one icon in a text editor.
- Give it a title and use your token colours.
- Check it scales cleanly and is under a few kilobytes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Decide loading per image
- Mark which images may load later and which must not.
- Reserve space for every image so nothing shifts.
- Carry the m11 alternative-text decision into the markup.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Measure the result
- Re-run the throttled load and record the new timings.
- Record before-and-after weight.
- Save the audit and the measurements.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Images are served near their display size in suitable formats: [evidence reference]
- One icon is hand-written SVG using tokens: [evidence reference]
- Loading decisions are per image with space reserved: [evidence reference]
- Weight and timing improvements are measured: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List each image's file size against its display width and re-export the worst offenders.

</details>

<details>
<summary>Hint 2</summary>

Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Images are served near their display size in suitable formats: An audit with before-and-after sizes and format decisions per image. One icon is hand-written SVG using tokens: An SVG written in a text editor, styled with token colours, with a title. Loading decisions are per image with space reserved: A per-image loading decision and reserved space preventing layout shift. Weight and timing improvements are measured: Before-and-after page weight and throttled time to usable.

**Bring forward:** A before-and-after weight and timing pair, with the design decisions that produced it, is concrete and rare in a design portfolio. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Audit the images (~25 min): List every image with its file size and its display size. Mark any served more than twice its display width. Mark flat graphics currently shipped as photographs.
- Resize and re-format (~30 min): Export each photograph near its display size, allowing for dense screens. Move flat graphics to a vector format. Re-measure the total page weight.
- Write an SVG by hand (~30 min): Follow the assigned tutorial to write one icon in a text editor. Give it a title and use your token colours. Check it scales cleanly and is under a few kilobytes.
- Decide loading per image (~20 min): Mark which images may load later and which must not. Reserve space for every image so nothing shifts. Carry the m11 alternative-text decision into the markup.
- Measure the result (~15 min): Re-run the throttled load and record the new timings. Record before-and-after weight. Save the audit and the measurements.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor for the SVG, following the assigned tutorial, and any free image resizer or your operating system's own export. No hosted design account is required to produce or export vector artwork.

### Output

Images served near their display size, with formats chosen deliberately; One icon written by hand as SVG and styled with tokens; A loading decision per image, with reserved space; Before-and-after page weight and time to usable

### Checks

- Why does serving an oversized image cost so much? Answer: The browser downloads every pixel and discards most of them. The waste is proportional to the excess, and it is paid on the slowest connections first.
- Why is SVG worth writing by hand? Answer: Because it is text: small, scalable, styleable with your tokens, and producible with no design account. Once you have written one, simple marks never need a tool again.
- When should an image not load later? Answer: When it is what the page is about or appears above the first content. Deferring that one delays the thing the person came for.

### Rubric and remediation

**Images are served near their display size in suitable formats**

Adequate evidence: An audit with before-and-after sizes and format decisions per image.

- 0 — Original files used at any size.
- 1 — Some resizing without format decisions.
- 2 — Sizes and formats both addressed with figures recorded.
- 3 — As adequate, and a design change removed an image rather than optimising it.

If below 2: List each image's file size against its display width and re-export the worst offenders. Show at recheck: The image audit.

**One icon is hand-written SVG using tokens**

Adequate evidence: An SVG written in a text editor, styled with token colours, with a title.

- 0 — No SVG produced.
- 1 — SVG exported from a tool rather than written.
- 2 — Hand-written, token-styled and titled.
- 3 — As adequate, and it replaced multiple colour variants of the same icon.

If below 2: Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough. Show at recheck: The SVG file.

**Loading decisions are per image with space reserved**

Adequate evidence: A per-image loading decision and reserved space preventing layout shift.

- 0 — One rule applied to all images.
- 1 — Decisions made without reserving space.
- 2 — Per-image decisions with space reserved.
- 3 — As adequate, and the above-the-fold image is explicitly excluded from deferral.

If below 2: Mark each image above or below the fold and set the loading behaviour accordingly, reserving space in both cases. Show at recheck: The loading decisions.

**Weight and timing improvements are measured**

Adequate evidence: Before-and-after page weight and throttled time to usable.

- 0 — Not measured.
- 1 — Weight measured without timing.
- 2 — Both measured under the same conditions.
- 3 — As adequate, and the conditions are stated so the comparison is fair.

If below 2: Re-run the same throttled profile before and after and record both numbers. Show at recheck: The measurements.

### Portfolio contribution

A before-and-after weight and timing pair, with the design decisions that produced it, is concrete and rare in a design portfolio.

### Assigned resources

- R49: [MDN: SVG from scratch](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch) — Shapes, paths, viewBox, fills and strokes, and text. Purpose: Supplies the account-free route to producing and exporting vector artwork by hand. Effort: 90 selected per exercise min. Free documentation, no account. Verified 2026-09-06. Slower than a visual editor and not a replacement for one; it exists so no exercise depends on a hosted design account. Fallback: R15.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Request sizes and timing in the network panel. Purpose: Gives the measurement for the before-and-after comparison. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer, not perceived quality; check the images still look right. Fallback: R16.

## Lesson 6: Just enough JavaScript

Stable ID: m12-l06-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Add one genuinely interactive behaviour to your page with plain JavaScript, keeping it usable when the script fails, and explain what the code does line by line.

**Bring forward.** Your built page and one interaction from your m09 work.

Knowing where JavaScript becomes necessary — and what it costs — is what lets you argue for a simpler solution when one exists.

### Learn

The first question is whether you need a script at all. Show and hide, expand and collapse, form validation basics, smooth scrolling and many transitions have native or CSS answers that come with keyboard and assistive-technology behaviour already correct. Reaching for a script first means rebuilding all of that by hand, and usually incompletely.

When a script is warranted, its shape is simple: something happens, the script responds, the interface changes. Learning to read that shape — the event, the handler, the change — is enough to follow most front-end code and to ask precise questions about it.

Anything built in script must be keyboard operable and announced, which is the m09 key table meeting the build. Native elements give you this behaviour free; custom ones give you nothing, which is the real cost of building an interaction from scratch and the strongest argument for using what the platform provides.

Scripts fail: connections drop, errors are thrown, corporate networks block files. Design what the person gets when it does — ideally a page that still works with fewer features rather than a blank screen. This is the same graceful-failure thinking as your m07 exception table, one layer down.

**Common misconception.** “I do not need to write code, so I do not need to read it.” Reading it is what lets you tell a feasible request from an unreasonable one, understand an estimate and notice when an answer is evasive. Writing a little is how you learn to read.

### Worked example

The filter panel was built twice. The first version used a script for showing and hiding, and needed keyboard handling, focus management and announcement written by hand. The second used a native disclosure element and needed almost none of it, behaving correctly with the keyboard and announcing its state without any script at all. The genuinely script-requiring behaviour — filtering the list as options change — was written in about twenty lines, explained line by line, and made to fall back to a submit button that reloads with filters applied when the script does not run.

#### Just enough JavaScript

Add one genuinely interactive behaviour to your page with plain JavaScript, keeping it usable when the script fails, and explain what the code does line by line.

**Where to work:** A text editor and a browser console. No framework, build step, package manager or account: plain files are the point at this stage.

- Starting material: Your built page and an m09 interaction specification.
- Create HaruCourse/Practice/m12-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Just enough JavaScript

Input artifact: Your built page and an m09 interaction specification.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One interaction built with plain JavaScript
- [ ] A line-by-line explanation of what the code does
- [ ] A native or CSS alternative considered and recorded
- [ ] A stated behaviour when the script does not run

## 1. Ask whether you need a script
- Read the assigned sections on events and DOM changes.
- For your chosen interaction, find any native or CSS answer first.
- Record what the native version gives you free.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the interaction
- Write the script in plain JavaScript, as short as you can make it.
- Attach behaviour to real elements rather than replacing them.
- Test with the keyboard as well as the pointer.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Explain the code
- Write what each line does in plain language.
- Name the event, the handler and the change.
- Mark anything you copied and do not yet understand.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Design the failure
- Disable JavaScript and reload the page.
- Record what still works and what does not.
- Add a route that works without the script where the task requires it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write what the native alternative would have cost or saved.
- Save the code, the explanation and the failure behaviour.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A native or CSS alternative was considered first: [evidence reference]
- The interaction works with a keyboard: [evidence reference]
- The code is explained line by line: [evidence reference]
- Behaviour without the script is specified and tested: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide.

</details>

<details>
<summary>Hint 2</summary>

Test with the pointer unavailable and implement the missing key behaviour.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A native or CSS alternative was considered first: A written record of the alternative and what it would have provided. The interaction works with a keyboard: A keyboard test of the built interaction against your m09 key table. The code is explained line by line: Plain-language explanations naming the event, handler and change, with copied lines marked. Behaviour without the script is specified and tested: A recorded test with JavaScript disabled and a working route for the essential task.

**Bring forward:** Showing that you chose a native element over a script, with the reason, demonstrates engineering judgement more convincingly than a complicated custom component. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Ask whether you need a script (~30 min): Read the assigned sections on events and DOM changes. For your chosen interaction, find any native or CSS answer first. Record what the native version gives you free.
- Build the interaction (~35 min): Write the script in plain JavaScript, as short as you can make it. Attach behaviour to real elements rather than replacing them. Test with the keyboard as well as the pointer.
- Explain the code (~25 min): Write what each line does in plain language. Name the event, the handler and the change. Mark anything you copied and do not yet understand.
- Design the failure (~20 min): Disable JavaScript and reload the page. Record what still works and what does not. Add a route that works without the script where the task requires it.
- Record (~10 min): Write what the native alternative would have cost or saved. Save the code, the explanation and the failure behaviour.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor and a browser console. No framework, build step, package manager or account: plain files are the point at this stage.

### Output

One interaction built with plain JavaScript; A line-by-line explanation of what the code does; A native or CSS alternative considered and recorded; A stated behaviour when the script does not run

### Checks

- What should you check before writing a script? Answer: Whether HTML or CSS already does it. Native behaviour arrives with keyboard support and announcement, which a custom version has to rebuild by hand.
- Why explain the code line by line? Answer: Because reading is the transferable skill. Being able to say what each line does is what lets you follow someone else's code and ask precise questions.
- Why design for the script not running? Answer: Because it sometimes does not: slow connections, errors, blocked files. A page that degrades to fewer features beats a page that shows nothing.

### Rubric and remediation

**A native or CSS alternative was considered first**

Adequate evidence: A written record of the alternative and what it would have provided.

- 0 — Script written without considering alternatives.
- 1 — Alternative mentioned without evaluation.
- 2 — Alternative evaluated with what it gives free.
- 3 — As adequate, and one part of the interaction was replaced by a native element as a result.

If below 2: For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide. Show at recheck: The alternative record.

**The interaction works with a keyboard**

Adequate evidence: A keyboard test of the built interaction against your m09 key table.

- 0 — Pointer only.
- 1 — Reachable but not fully operable.
- 2 — Operable by keyboard and matching the key table.
- 3 — As adequate, and focus behaviour on open and close matches your m09 rules.

If below 2: Test with the pointer unavailable and implement the missing key behaviour. Show at recheck: The keyboard test.

**The code is explained line by line**

Adequate evidence: Plain-language explanations naming the event, handler and change, with copied lines marked.

- 0 — No explanation.
- 1 — General description of the effect.
- 2 — Line-by-line explanation with unknowns marked honestly.
- 3 — As adequate, and one line was simplified or removed once it was explained.

If below 2: Write a comment for each line; anything you cannot explain, mark and look up. Show at recheck: The annotated code.

**Behaviour without the script is specified and tested**

Adequate evidence: A recorded test with JavaScript disabled and a working route for the essential task.

- 0 — Not considered.
- 1 — Considered without testing.
- 2 — Tested with the essential task still completable.
- 3 — As adequate, and the fallback is a real route rather than an error message.

If below 2: Disable JavaScript, reload, and add a non-script route for anything essential that broke. Show at recheck: The no-script test.

### Portfolio contribution

Showing that you chose a native element over a script, with the reason, demonstrates engineering judgement more convincingly than a complicated custom component.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The scripting module: events, handling them, and changing the document. Purpose: Supplies the event-and-change shape this lesson builds and explains. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. This is enough to read and reason about code, not to become an engineer. Fallback: R16.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Verifies the interaction you built is operable without a pointer. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Preliminary only; passing it is not conformance. Fallback: R28.

## Lesson 7: Data that arrives later

Stable ID: m12-l07-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Fetch data from a public source into your page, and build the loading, empty, error and slow states you specified in m08 so they are real rather than drawn.

**Bring forward.** Your m08 empty, loading and error state specifications.

Every state you have specified for four modules becomes real here, and building them is what proves they were designed rather than described.

### Learn

A page that requests data has a gap between arriving and being useful, and everything you have specified about loading states was written for this gap. Building it makes the specification honest: you will discover whether the reserved space was the right size, whether the message reads well at three seconds, and whether the layout still holds when the data is longer than expected.

Four outcomes need code, not just design. Loading, content, empty and error each need a branch, and the empty case is the one most often forgotten, producing a blank region that looks like a failure. Your m08 wording for all four goes in here directly.

Slowness is not a fifth outcome but it behaves like one. The message that suits a two-second wait is wrong at twenty, and a request that never resolves needs a timeout with its own message and route out. Deciding those thresholds is design work you can now implement.

Errors are ordinary. Mobile connections drop mid-request, servers return failures, and requests time out — routinely, not exceptionally. Treating the error branch as an edge case produces the products where a moment of poor signal leaves a permanently empty screen with no way forward.

**Common misconception.** “The API will usually work, so the error state is a formality.” It fails often enough that a person on a train meets it regularly. The error branch is used more than most features you will design.

### Worked example

The class list was connected to a small public data source. Four branches were built with the m08 wording: loading reserved the row heights and, after three seconds, added “Still loading — this can take a moment on a slow connection”; content rendered the list; empty said what would appear and offered to widen the filters; error said what happened, that nothing was lost, and offered retry without losing filters. Building revealed two specification errors: the reserved space was for four rows where the real result was often twelve, and the error message referred to a retry control that had never been designed.

#### Data that arrives later

Fetch data from a public source into your page, and build the loading, empty, error and slow states you specified in m08 so they are real rather than drawn.

**Where to work:** A public data source that needs no key, or a local file of your own realistic data served alongside the page. Nothing here requires an account, a paid API or a backend.

- Starting material: Your state specifications and the built page.
- Create HaruCourse/Practice/m12-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Data that arrives later

Input artifact: Your state specifications and the built page.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A page that fetches and renders real data
- [ ] Loading, content, empty and error branches built with your wording
- [ ] A slow-wait message and a timeout with a route out
- [ ] A list of specification errors the build revealed

## 1. Fetch something real
- Read the assigned sections on fetching data.
- Connect your page to a public source or a local data file.
- Render the content branch first.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Build the other three branches
- Add loading, empty and error branches using your m08 wording.
- Reserve the space content will occupy.
- Make the error branch preserve filters and offer retry.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Make it slow and make it fail
- Throttle the connection and watch the loading branch.
- Force an error by breaking the address or going offline.
- Add a timeout with its own message and a route out.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Compare with the specification
- Check each built state against what you specified in m08.
- Record every place the specification was wrong or incomplete.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Update the specifications to match what the build showed.
- Save the code and the list of corrections.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- All four branches are built and reachable: [evidence reference]
- The wording comes from the m08 specifications: [evidence reference]
- Slow and failed requests are handled with a route out: [evidence reference]
- Specification errors revealed by the build are recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Force each state in turn — no data, bad address, offline — and build whichever branch is missing.

</details>

<details>
<summary>Hint 2</summary>

Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** All four branches are built and reachable: Loading, content, empty and error branches, each demonstrable. The wording comes from the m08 specifications: Built states using the specified wording, with any changes recorded. Slow and failed requests are handled with a route out: A slow-wait message, a timeout, and an error branch preserving filters with retry. Specification errors revealed by the build are recorded: A list of places where the m08 specification was wrong, with corrections.

**Bring forward:** Built states with the specification corrections beside them show a designer whose specifications survive contact with a build — and who updates them when they do not. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Fetch something real (~30 min): Read the assigned sections on fetching data. Connect your page to a public source or a local data file. Render the content branch first.
- Build the other three branches (~30 min): Add loading, empty and error branches using your m08 wording. Reserve the space content will occupy. Make the error branch preserve filters and offer retry.
- Make it slow and make it fail (~25 min): Throttle the connection and watch the loading branch. Force an error by breaking the address or going offline. Add a timeout with its own message and a route out.
- Compare with the specification (~20 min): Check each built state against what you specified in m08. Record every place the specification was wrong or incomplete.
- Record (~15 min): Update the specifications to match what the build showed. Save the code and the list of corrections.

Pause after any step; save the artifact and next action.

**Free tool path.** A public data source that needs no key, or a local file of your own realistic data served alongside the page. Nothing here requires an account, a paid API or a backend.

### Output

A page that fetches and renders real data; Loading, content, empty and error branches built with your wording; A slow-wait message and a timeout with a route out; A list of specification errors the build revealed

### Checks

- Why is the empty branch so often missing? Answer: Because it never appears during development with test data. In use it appears constantly, and without it a legitimate empty result looks like a broken product.
- Why does slowness need its own design? Answer: Because a message that suits two seconds is wrong at twenty, and a request that never resolves needs a timeout with a message and a route out.
- What did building the states teach that drawing them did not? Answer: Whether the reserved space, the wording and the layout survive real data and real timing. Specifications are guesses until something renders them.

### Rubric and remediation

**All four branches are built and reachable**

Adequate evidence: Loading, content, empty and error branches, each demonstrable.

- 0 — Content branch only.
- 1 — Three branches, usually missing empty.
- 2 — All four built and reachable on demand.
- 3 — As adequate, and each can be triggered deliberately for testing.

If below 2: Force each state in turn — no data, bad address, offline — and build whichever branch is missing. Show at recheck: The four demonstrated states.

**The wording comes from the m08 specifications**

Adequate evidence: Built states using the specified wording, with any changes recorded.

- 0 — Placeholder or default framework messages.
- 1 — Some specified wording, some improvised.
- 2 — Specified wording throughout, with deliberate changes noted.
- 3 — As adequate, and improvements found while building are fed back into the specification.

If below 2: Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong. Show at recheck: The wording comparison.

**Slow and failed requests are handled with a route out**

Adequate evidence: A slow-wait message, a timeout, and an error branch preserving filters with retry.

- 0 — Neither slowness nor failure handled.
- 1 — Errors handled but no timeout or slow message.
- 2 — All three handled with a route out.
- 3 — As adequate, and retry preserves scroll position as well as filters.

If below 2: Throttle and disconnect deliberately, then build what the person needs in each case. Show at recheck: The slow and error handling.

**Specification errors revealed by the build are recorded**

Adequate evidence: A list of places where the m08 specification was wrong, with corrections.

- 0 — No comparison made.
- 1 — Differences noticed but not recorded.
- 2 — Errors listed and specifications corrected.
- 3 — As adequate, and one correction is traced to a wrong assumption about data volume or timing.

If below 2: Walk your specification beside the running page and note every mismatch. Show at recheck: The correction list.

### Portfolio contribution

Built states with the specification corrections beside them show a designer whose specifications survive contact with a build — and who updates them when they do not.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The scripting module sections on fetching data and handling responses and failures. Purpose: Supplies the mechanics for requesting and rendering data. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Use a public source that needs no key, or local data. Fallback: R16.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling, disabling the cache, and inspecting requests and responses. Purpose: Lets you produce the slow and failed conditions deliberately. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling does not simulate a dropped connection; disconnect to test that. Fallback: R16.

## Lesson 8: A form that actually submits

Stable ID: m12-l08-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Build one working form with native validation, accessible errors and preserved input, and record what the browser gave you free versus what you had to write.

**Bring forward.** Your m11 accessible field table and error wording.

Forms are where your accessibility and error specifications are either implemented or quietly dropped.

### Learn

The browser gives you a great deal free: required fields, input types that bring their own keyboards and validation, and error reporting that is announced. Starting from native behaviour and adding only what is missing produces an accessible form quickly; starting from a custom implementation means rebuilding announcement, focus and keyboard behaviour by hand.

Custom validation is warranted when the rule is yours rather than the platform's — a date that must be in the future, a code that must match a pattern the browser does not know. Even then, the presentation should match the native behaviour people already recognise, and the association between field and error must be explicit.

Announcement matters as much as display. An error that appears silently is invisible to anyone not looking at that region, so the summary and the field-level messages need to be announced when they appear and reachable afterwards. This is your m11 specification, and this lesson is where it either happens or does not.

Client-side validation is a convenience that saves a round trip. It is not a guarantee: anything can be submitted directly. That is an engineering fact worth knowing, because it explains why a server will re-check everything and why your design needs to handle a rejection that arrives after the person thought they were finished.

**Common misconception.** “Custom validation gives a better experience.” It gives a different one, and usually a less accessible one, because the native behaviour includes announcement and keyboard handling that custom implementations routinely omit.

### Worked example

The booking form was built with native input types and required attributes, adding custom rules only for two things the browser could not know: that the date must be a future class date, and that the phone number must match an accepted set of formats. Errors were associated with their fields, a summary at the top linked to each, and the summary was announced on appearance. On a failed submission everything the person had entered survived. The record noted what came free — type-appropriate keyboards, required handling, announcement — and what was written by hand, which was about fifteen lines.

#### A form that actually submits

Build one working form with native validation, accessible errors and preserved input, and record what the browser gave you free versus what you had to write.

**Where to work:** A text editor and a browser. Submission can go to a local endpoint or simply be intercepted; nothing here needs a server, a form service or an account.

- Starting material: Your field table and error specifications.
- Create HaruCourse/Practice/m12-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# A form that actually submits

Input artifact: Your field table and error specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A working form using native validation where possible
- [ ] Custom rules only where the platform cannot know them
- [ ] Errors associated with fields, announced and linked from a summary
- [ ] A record of what was free and what was hand-written

## 1. Build with native behaviour
- Read the assigned form sections and the accessibility requirements.
- Build the form with appropriate input types and required fields.
- Test what the browser does before adding anything.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Add only what is missing
- Identify rules the browser cannot know.
- Implement those, matching the native presentation.
- Keep the total custom code as small as you can.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Make errors accessible
- Associate each error with its field.
- Add a summary that links to each problem field.
- Ensure the summary is announced when it appears.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Fail and recover
- Submit with several errors and confirm nothing is lost.
- Check focus moves somewhere useful.
- Test the whole form with the keyboard only.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record what was free
- List what the browser provided without code.
- List what you wrote and why it was necessary.
- Save the form and the two lists.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Native validation is used wherever it can be: [evidence reference]
- Custom rules exist only where the platform cannot know them: [evidence reference]
- Errors are associated, announced and linked: [evidence reference]
- Input survives a failed submission: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Remove custom validation that duplicates a native type and test what the browser does alone.

</details>

<details>
<summary>Hint 2</summary>

For each custom rule ask whether an input type or attribute already expresses it.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Native validation is used wherever it can be: Appropriate input types and required handling, with a record of what the browser did. Custom rules exist only where the platform cannot know them: A short list of custom rules, each justified by a domain fact. Errors are associated, announced and linked: Field-associated messages, a linked summary, and announcement on appearance. Input survives a failed submission: A tested failed submission with all values retained.

**Bring forward:** A working accessible form is one of the most useful things a designer can show: it proves the specification was implementable and that you implemented it. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Build with native behaviour (~30 min): Read the assigned form sections and the accessibility requirements. Build the form with appropriate input types and required fields. Test what the browser does before adding anything.
- Add only what is missing (~25 min): Identify rules the browser cannot know. Implement those, matching the native presentation. Keep the total custom code as small as you can.
- Make errors accessible (~30 min): Associate each error with its field. Add a summary that links to each problem field. Ensure the summary is announced when it appears.
- Fail and recover (~20 min): Submit with several errors and confirm nothing is lost. Check focus moves somewhere useful. Test the whole form with the keyboard only.
- Record what was free (~15 min): List what the browser provided without code. List what you wrote and why it was necessary. Save the form and the two lists.

Pause after any step; save the artifact and next action.

**Free tool path.** A text editor and a browser. Submission can go to a local endpoint or simply be intercepted; nothing here needs a server, a form service or an account.

### Output

A working form using native validation where possible; Custom rules only where the platform cannot know them; Errors associated with fields, announced and linked from a summary; A record of what was free and what was hand-written

### Checks

- Why start from native validation? Answer: Because it arrives with announcement, keyboard behaviour and appropriate input handling. Custom implementations have to rebuild all of that and usually rebuild part of it.
- What must happen when errors appear? Answer: They must be associated with their fields, announced, reachable from a summary, and everything the person entered must survive.
- Why does the server re-check everything? Answer: Because client-side validation can be bypassed entirely. It is a convenience, which is why your design must handle a rejection arriving after the person believed they were done.

### Rubric and remediation

**Native validation is used wherever it can be**

Adequate evidence: Appropriate input types and required handling, with a record of what the browser did.

- 0 — Everything validated by custom code.
- 1 — Some native types with custom duplication.
- 2 — Native behaviour used wherever available.
- 3 — As adequate, and the input types produce the right keyboards on a phone.

If below 2: Remove custom validation that duplicates a native type and test what the browser does alone. Show at recheck: The form and the native record.

**Custom rules exist only where the platform cannot know them**

Adequate evidence: A short list of custom rules, each justified by a domain fact.

- 0 — Custom rules replace native ones.
- 1 — Custom rules present without justification.
- 2 — Each custom rule justified as unavailable natively.
- 3 — As adequate, and the custom presentation matches the native one.

If below 2: For each custom rule ask whether an input type or attribute already expresses it. Show at recheck: The custom-rule list.

**Errors are associated, announced and linked**

Adequate evidence: Field-associated messages, a linked summary, and announcement on appearance.

- 0 — Errors displayed without association.
- 1 — Associated but not announced.
- 2 — Associated, announced and linked from a summary.
- 3 — As adequate, and focus moves to the summary or the first problem field.

If below 2: Implement the association and the summary from your m11 specification and test the announcement. Show at recheck: The error implementation.

**Input survives a failed submission**

Adequate evidence: A tested failed submission with all values retained.

- 0 — Fields cleared on failure.
- 1 — Most values retained, some lost.
- 2 — Everything retained and verified by test.
- 3 — As adequate, and the retention survives a page reload where appropriate.

If below 2: Submit with deliberate errors and check every field; fix any that clears. Show at recheck: The failed-submission test.

### Portfolio contribution

A working accessible form is one of the most useful things a designer can show: it proves the specification was implementable and that you implemented it.

### Assigned resources

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, instructions, validating input and user notifications. Purpose: States the requirements the built form must satisfy. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It covers accessibility rather than implementation detail; the mechanics come from the MDN module. Fallback: R10.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The forms sections: input types, native validation and handling submission. Purpose: Supplies the implementation for the form you build. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

## Lesson 9: Making the page fast enough

Stable ID: m12-l09-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Measure your page's weight and time to usable on a slow connection, make three changes, and report the before-and-after with the conditions stated.

**Bring forward.** Your built page and the trace from lesson 1.

Speed is an accessibility and inclusion question in a country where connections vary enormously. It is also the easiest quality to lose without noticing.

### Learn

The first rule is measurement, because perceived speed on a developer's machine has almost no relationship to a person's experience on a mid-range phone. The network panel gives you weight, request count and timing; a throttled profile gives you conditions closer to the ones your users meet.

Three causes cover most problems. Total weight, dominated by images and fonts. The number of requests, since each one costs time even when small. And blocking resources — a stylesheet or script that must arrive before anything renders — which is why a page can be light and still slow to appear.

Time to usable is the number that matters. A page that shows readable content in two seconds and finishes in eight is better than one that shows nothing for five and finishes in six. This is why the design decision about what can render before everything arrives is worth more than most optimisation.

State the conditions with every figure: device, browser, throttling profile, cache state and content volume. A before-and-after comparison taken under different conditions is not a comparison, and this is the most common way performance improvements are overstated.

**Common misconception.** “It feels fast to me.” You are on a fast connection, with a warm cache, on a machine you chose, looking at a page you already understand. None of that describes a first visit on a mid-range phone.

### Worked example

Baseline on a throttled profile with the cache disabled: 2.4 MB, twenty-one requests, eleven seconds to usable. Three changes: images resized and re-formatted, two of three typefaces removed, and the stylesheet made non-blocking for the parts not needed for first paint. After: 340 KB, twelve requests, three seconds to usable. The conditions were identical for both runs and stated with the figures. One further change was considered and rejected: deferring the script that renders the list would have made the page appear faster and be useful later, which is the wrong trade for this page.

#### Making the page fast enough

Measure your page's weight and time to usable on a slow connection, make three changes, and report the before-and-after with the conditions stated.

**Where to work:** Your browser's network panel and throttling. No performance service, account or paid audit tool is required; the measurements you need are already in the browser.

- Starting material: Your built page and its first trace.
- Create HaruCourse/Practice/m12-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Making the page fast enough

Input artifact: Your built page and its first trace.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A baseline measurement with conditions recorded
- [ ] Three changes, each with the reason
- [ ] An after measurement under identical conditions
- [ ] One change considered and rejected, with the trade-off

## 1. Measure the baseline
- Load with the cache disabled and a slow profile.
- Record weight, request count and time to usable.
- Note which requests block the first render.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Make three changes
- Reduce the largest design-owned cost first.
- Remove anything requested and unused.
- Stop something non-essential from blocking first render.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Measure again
- Repeat the load under identical conditions.
- Record the same three figures.
- Note anything that got worse.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Consider and reject one
- Identify a change that would improve a number and harm the experience.
- Write the trade-off and your decision.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Report
- Write the before and after with the conditions stated once.
- State what you did not measure, such as real-device performance.
- Save the report with the traces.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A baseline is measured with conditions recorded: [evidence reference]
- Three changes are made, each with a reason: [evidence reference]
- The after measurement uses identical conditions: [evidence reference]
- One rejected change is recorded with its trade-off: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Re-run the load with the cache disabled and a slow profile and record all three figures.

</details>

<details>
<summary>Hint 2</summary>

Sort your requests by size and time, and address the top of that list.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A baseline is measured with conditions recorded: Weight, request count and time to usable, with device, profile and cache state. Three changes are made, each with a reason: Three specific changes traced to a measured cost. The after measurement uses identical conditions: A second measurement with the same profile, cache state and content volume. One rejected change is recorded with its trade-off: A change that would improve a metric while harming the experience, with your decision.

**Bring forward:** A measured before-and-after with conditions stated, including a rejected optimisation, reads as engineering literacy rather than a claim about speed. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Measure the baseline (~25 min): Load with the cache disabled and a slow profile. Record weight, request count and time to usable. Note which requests block the first render.
- Make three changes (~30 min): Reduce the largest design-owned cost first. Remove anything requested and unused. Stop something non-essential from blocking first render.
- Measure again (~25 min): Repeat the load under identical conditions. Record the same three figures. Note anything that got worse.
- Consider and reject one (~25 min): Identify a change that would improve a number and harm the experience. Write the trade-off and your decision.
- Report (~15 min): Write the before and after with the conditions stated once. State what you did not measure, such as real-device performance. Save the report with the traces.

Pause after any step; save the artifact and next action.

**Free tool path.** Your browser's network panel and throttling. No performance service, account or paid audit tool is required; the measurements you need are already in the browser.

### Output

A baseline measurement with conditions recorded; Three changes, each with the reason; An after measurement under identical conditions; One change considered and rejected, with the trade-off

### Checks

- Why is time to usable the important number? Answer: Because people act on what they can read and use. Finishing quickly matters less than showing something useful early.
- Why record conditions with every figure? Answer: Because a comparison taken under different conditions is not a comparison. Most overstated performance improvements come from a changed cache or profile.
- Which costs does the designer own? Answer: Image weight, typeface count, decorative assets and whether the page can render anything useful before the rest arrives.

### Rubric and remediation

**A baseline is measured with conditions recorded**

Adequate evidence: Weight, request count and time to usable, with device, profile and cache state.

- 0 — No baseline.
- 1 — Figures without conditions.
- 2 — All three figures with full conditions.
- 3 — As adequate, and blocking resources are identified separately.

If below 2: Re-run the load with the cache disabled and a slow profile and record all three figures. Show at recheck: The baseline record.

**Three changes are made, each with a reason**

Adequate evidence: Three specific changes traced to a measured cost.

- 0 — Changes made without reference to measurement.
- 1 — Some changes justified.
- 2 — All three traced to a measured cost.
- 3 — As adequate, and the largest cost was addressed first.

If below 2: Sort your requests by size and time, and address the top of that list. Show at recheck: The change list.

**The after measurement uses identical conditions**

Adequate evidence: A second measurement with the same profile, cache state and content volume.

- 0 — Measured under different conditions.
- 1 — Conditions matched but not recorded.
- 2 — Identical conditions, recorded.
- 3 — As adequate, and anything that got worse is reported as well.

If below 2: Repeat the load with exactly the same settings and record the figures again. Show at recheck: The after measurement.

**One rejected change is recorded with its trade-off**

Adequate evidence: A change that would improve a metric while harming the experience, with your decision.

- 0 — No rejection recorded.
- 1 — A rejection without a stated trade-off.
- 2 — The trade-off is stated and the decision explained.
- 3 — As adequate, and the reasoning names who would be harmed by the improvement.

If below 2: Ask which optimisation would make a number better and the page worse; deferring essential content is the usual candidate. Show at recheck: The rejection note.

### Portfolio contribution

A measured before-and-after with conditions stated, including a rejected optimisation, reads as engineering literacy rather than a claim about speed.

### Assigned resources

- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles, disabling the cache, request sizes and timing. Purpose: Supplies the measurement instrument and its conditions. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer and timing, not real-device rendering performance. Fallback: R16.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The chapters on images and delivering appropriate assets. Purpose: Connects the measured costs back to the design decisions that created them. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Design-focused; the measurement comes from the browser tools. Fallback: R15.

## Lesson 10: Finding out what is actually happening

Stable ID: m12-l10-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Diagnose three problems in your own page using the element inspector, the console and the network panel, writing the cause before making any fix.

**Bring forward.** Your built page with any remaining problems.

Being able to find out what is happening, rather than guessing and changing things, is what makes you useful to an engineering conversation.

### Learn

Trial and error is how most people first change CSS, and it produces code nobody can explain and problems that return. The inspector removes the guesswork: it shows what is applied, what is inherited and what was overridden by what, so a layout surprise becomes a fact rather than a mystery.

The console is the first place to look when something behaves oddly, because a page can look complete while a script has failed silently. An error message names a file and a line, which converts a vague fault into a specific one, and it is the single most useful thing to check before asking anyone else.

The network panel answers a different class of question: was it requested, did it arrive, what came back. Missing images, failed data, wrong addresses and slow responses all show here, and knowing which panel answers which question is most of the skill.

Writing the cause before the fix is the discipline that makes this learning stick. Change first and you often fix something by accident and learn nothing; write the cause first and you either confirm it or discover you were wrong, which is more useful than the fix.

**Common misconception.** “Debugging is for developers.” Being able to say “the request returned a 404” or “this rule is being overridden by that one” is what turns a design bug report from a complaint into a starting point, and it saves everyone a round trip.

### Worked example

Three problems diagnosed. The card was wider than its container: the inspector showed padding being added to a set width — cause written, then fixed with box sizing. The filter did nothing on one screen: the console showed a script error on a line that assumed an element existed — cause written, then fixed with a guard. An icon was missing on the phone but not the laptop: the network panel showed a 404 for a file whose name differed by case, which matters on the server and not on the local machine. Each cause was written before the fix, and one initial hypothesis turned out to be wrong.

#### Finding out what is actually happening

Diagnose three problems in your own page using the element inspector, the console and the network panel, writing the cause before making any fix.

**Where to work:** The developer tools already in your browser. No account, extension or paid tooling is required for anything in this lesson.

- Starting material: Your built page and its known issues.
- Create HaruCourse/Practice/m12-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Finding out what is actually happening

Input artifact: Your built page and its known issues.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Three problems diagnosed with the cause written first
- [ ] Evidence from the inspector, the console and the network panel
- [ ] A record of one hypothesis that turned out to be wrong
- [ ] Fixes made after the diagnosis, not before

## 1. Learn the three panels
- Read the assigned sections on the browser tools.
- Write which panel answers which kind of question.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Diagnose a style problem
- Find something that does not look as intended.
- Use the inspector to see the applied and overridden rules.
- Write the cause before touching the code.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Diagnose a behaviour problem
- Find something that does not work as intended.
- Check the console for errors and read the file and line.
- Write the cause, then fix it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Diagnose a loading problem
- Look for anything missing or slow.
- Use the network panel to see the request and its response.
- Write the cause, then fix it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Note any hypothesis that proved wrong and what it actually was.
- Save the three diagnoses with their evidence.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Three problems are diagnosed using three different panels: [evidence reference]
- Causes are written before fixes: [evidence reference]
- Evidence from the tools is recorded: [evidence reference]
- A wrong hypothesis is recorded honestly: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Pick one problem of each kind and use the matching panel to find the cause.

</details>

<details>
<summary>Hint 2</summary>

For your next problem, write the cause in a file before touching the code.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three problems are diagnosed using three different panels: One style, one behaviour and one loading problem, each with the panel used. Causes are written before fixes: A written cause per problem, produced before the change. Evidence from the tools is recorded: The specific rule, error message or response recorded per problem. A wrong hypothesis is recorded honestly: At least one initial explanation that turned out to be wrong, with what it actually was.

**Bring forward:** Diagnoses written in engineers' terms show that you can participate in a technical conversation, which is a stated expectation in many product design roles. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Learn the three panels (~25 min): Read the assigned sections on the browser tools. Write which panel answers which kind of question.
- Diagnose a style problem (~30 min): Find something that does not look as intended. Use the inspector to see the applied and overridden rules. Write the cause before touching the code.
- Diagnose a behaviour problem (~25 min): Find something that does not work as intended. Check the console for errors and read the file and line. Write the cause, then fix it.
- Diagnose a loading problem (~25 min): Look for anything missing or slow. Use the network panel to see the request and its response. Write the cause, then fix it.
- Record (~15 min): Note any hypothesis that proved wrong and what it actually was. Save the three diagnoses with their evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** The developer tools already in your browser. No account, extension or paid tooling is required for anything in this lesson.

### Output

Three problems diagnosed with the cause written first; Evidence from the inspector, the console and the network panel; A record of one hypothesis that turned out to be wrong; Fixes made after the diagnosis, not before

### Checks

- Which panel tells you a rule was overridden? Answer: The element inspector, which shows the applied styles and strikes through the ones that lost. Guessing at specificity is unnecessary once you can read it.
- Why check the console first for odd behaviour? Answer: Because a script can fail silently while the page looks complete. The error names a file and line, turning a vague fault into a specific one.
- Why write the cause before the fix? Answer: Because otherwise you may fix it by accident and learn nothing, and the same problem will return in a form you cannot recognise.

### Rubric and remediation

**Three problems are diagnosed using three different panels**

Adequate evidence: One style, one behaviour and one loading problem, each with the panel used.

- 0 — Problems fixed without diagnosis.
- 1 — One or two diagnosed, using one panel.
- 2 — Three problems across the three panels.
- 3 — As adequate, and the write-up says which panel would have been wrong for each problem.

If below 2: Pick one problem of each kind and use the matching panel to find the cause. Show at recheck: The three diagnoses.

**Causes are written before fixes**

Adequate evidence: A written cause per problem, produced before the change.

- 0 — Fixed first, explained afterwards.
- 1 — Causes written for some.
- 2 — Cause written before every fix.
- 3 — As adequate, and one cause was disproved by the fix, which is recorded.

If below 2: For your next problem, write the cause in a file before touching the code. Show at recheck: The written causes.

**Evidence from the tools is recorded**

Adequate evidence: The specific rule, error message or response recorded per problem.

- 0 — No evidence.
- 1 — General description without the specific message or rule.
- 2 — Specific evidence recorded per problem.
- 3 — As adequate, and the evidence is written in terms an engineer would recognise.

If below 2: Copy the exact overridden rule, error text or status code into your notes. Show at recheck: The evidence record.

**A wrong hypothesis is recorded honestly**

Adequate evidence: At least one initial explanation that turned out to be wrong, with what it actually was.

- 0 — Only correct diagnoses reported.
- 1 — A wrong guess mentioned without what was actually happening.
- 2 — Recorded with the real cause beside it.
- 3 — As adequate, and the record says what would have shown the mistake sooner.

If below 2: Look back at the problems: your first idea was probably wrong at least once. Record it. Show at recheck: The hypothesis record.

### Portfolio contribution

Diagnoses written in engineers' terms show that you can participate in a technical conversation, which is a stated expectation in many product design roles.

### Assigned resources

- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — The network panel: requests, statuses, sizes and timing. Purpose: Supplies the loading diagnosis for this lesson. Effort: 10–20 selected min. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It documents the network panel only; the inspector and console are learned by use. Fallback: R16.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The debugging sections of the CSS and scripting modules. Purpose: Explains what the inspector and console are showing you. Effort: 60 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

## Lesson 11: The whole thing, running

Stable ID: m12-l11-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Assemble your pages into one working responsive prototype with real data, accessible structure and measured performance, and test it on a real phone.

**Bring forward.** Everything built in this module.

Separate exercises prove separate points. A running prototype proves they hold together, which is a different claim.

### Learn

Assembly is a test. Pages built separately develop their own conventions — a different spacing rhythm, a second way of writing a card, a slightly different button — and putting them together surfaces every one. Reconciling them is the work, and the reconciliations belong in your component inventory and token sheet.

Checks must be re-run on the assembled result. A heading outline that was correct per page can break when pages share a header; a contrast ratio that passed can fail where a component now sits on a different surface; a keyboard route that worked can be interrupted by a new element. Passing separately is genuinely not the same as passing together.

Emulated viewports are convenient and not sufficient. A real phone has a real connection, real touch targets, a real keyboard that covers half the screen, and real interruptions. Ten minutes on a phone finds things an afternoon of resizing a window does not.

The honesty rules from m10 apply unchanged: record what is faked, what data is invented, and what a person would meet in a real product that this does not have. A running prototype is more convincing than a drawing, which is exactly why its limits need stating more clearly.

**Common misconception.** “It runs, so it is nearly a product.” It runs with your data, on your machine, for the paths you built. Real products meet volume, edge cases, other people's content, security requirements and years of change.

### Worked example

Four pages were assembled. Three contradictions appeared: two spacing rhythms, two card treatments and two different words for the same action. Each was reconciled and the inventory updated. Re-running the checks found a heading outline broken by the shared header and one contrast failure on a component now sitting on a tinted panel. Ten minutes on a real phone found two more: the sticky action bar sat under the on-screen keyboard, and the tap target for the date was comfortable with a mouse and not with a thumb. The fakes sheet recorded invented data, a faked payment and a search box that does nothing.

#### The whole thing, running

Assemble your pages into one working responsive prototype with real data, accessible structure and measured performance, and test it on a real phone.

**Where to work:** Your local files opened on your phone over the same network, or copied to it. No hosting, deployment or account is required to test on a real device.

- Starting material: Your built pages, data fetching, form and styling.
- Create HaruCourse/Practice/m12-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# The whole thing, running

Input artifact: Your built pages, data fetching, form and styling.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One assembled, running prototype
- [ ] A list of contradictions found and reconciled
- [ ] Re-run checks on the assembled result
- [ ] A real-phone test with findings, and an updated fakes sheet

## 1. Assemble
- Bring the pages together with shared styling and navigation.
- Record every contradiction you have to reconcile.
- Update the inventory and token sheet accordingly.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Re-run the checks
- Re-check headings, landmarks, contrast and keyboard on the assembled result.
- Record anything that passed separately and fails together.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Test on a real phone
- Open the prototype on an actual phone.
- Complete one task by thumb, including a form.
- Record everything the emulated viewport did not show.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Measure again
- Re-run the throttled measurement on the assembled prototype.
- Record weight, requests and time to usable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Update the fakes sheet
- List everything invented, faked or non-functional.
- Write one sentence stating this is a prototype, not a product.
- Save the prototype, the checks and the sheet.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The prototype is assembled and runs end to end: [evidence reference]
- Contradictions are recorded and reconciled: [evidence reference]
- Checks are re-run on the assembled result: [evidence reference]
- A real-phone test and an updated fakes sheet exist: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Walk the main task and connect whatever is missing, including one failure route.

</details>

<details>
<summary>Hint 2</summary>

Compare the pages side by side for spacing, components and wording, and list every difference.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The prototype is assembled and runs end to end: One task completable from start to finish in the running prototype. Contradictions are recorded and reconciled: A list of inconsistencies found during assembly, each resolved and reflected in the inventory. Checks are re-run on the assembled result: Heading, contrast and keyboard checks repeated on the whole prototype. A real-phone test and an updated fakes sheet exist: Findings from a real device and a current list of everything faked.

**Bring forward:** A running prototype you built yourself, with its checks and its fakes sheet, is a strong portfolio artefact and an unusual one for a designer. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Assemble (~30 min): Bring the pages together with shared styling and navigation. Record every contradiction you have to reconcile. Update the inventory and token sheet accordingly.
- Re-run the checks (~25 min): Re-check headings, landmarks, contrast and keyboard on the assembled result. Record anything that passed separately and fails together.
- Test on a real phone (~30 min): Open the prototype on an actual phone. Complete one task by thumb, including a form. Record everything the emulated viewport did not show.
- Measure again (~20 min): Re-run the throttled measurement on the assembled prototype. Record weight, requests and time to usable.
- Update the fakes sheet (~15 min): List everything invented, faked or non-functional. Write one sentence stating this is a prototype, not a product. Save the prototype, the checks and the sheet.

Pause after any step; save the artifact and next action.

**Free tool path.** Your local files opened on your phone over the same network, or copied to it. No hosting, deployment or account is required to test on a real device.

### Output

One assembled, running prototype; A list of contradictions found and reconciled; Re-run checks on the assembled result; A real-phone test with findings, and an updated fakes sheet

### Checks

- Why re-run checks after assembly? Answer: Because shared headers, new surfaces and added elements break things that passed in isolation. Passing separately is a weaker claim than it sounds.
- What does a real phone show that an emulator does not? Answer: Real touch, a real keyboard covering the screen, a real connection and real interruptions. Ten minutes there beats an afternoon of resizing a window.
- Why keep a fakes sheet for a running prototype? Answer: Because it is more convincing than a drawing, so its limits are easier to forget and more likely to be assumed away by someone else.

### Rubric and remediation

**The prototype is assembled and runs end to end**

Adequate evidence: One task completable from start to finish in the running prototype.

- 0 — Separate pages that do not connect.
- 1 — Connected but with a break in the main task.
- 2 — One complete task runs end to end.
- 3 — As adequate, and at least one failure path is reachable too.

If below 2: Walk the main task and connect whatever is missing, including one failure route. Show at recheck: The running prototype.

**Contradictions are recorded and reconciled**

Adequate evidence: A list of inconsistencies found during assembly, each resolved and reflected in the inventory.

- 0 — Contradictions absorbed silently.
- 1 — Noted without resolution.
- 2 — Recorded, resolved and fed back into the inventory.
- 3 — As adequate, and one contradiction revealed a genuine missing component.

If below 2: Compare the pages side by side for spacing, components and wording, and list every difference. Show at recheck: The contradiction list.

**Checks are re-run on the assembled result**

Adequate evidence: Heading, contrast and keyboard checks repeated on the whole prototype.

- 0 — Relying on the earlier per-page checks.
- 1 — Some checks repeated.
- 2 — All repeated with new failures recorded.
- 3 — As adequate, and a failure that only appears in assembly is identified.

If below 2: Re-run each check on the assembled prototype and record what changed. Show at recheck: The re-run results.

**A real-phone test and an updated fakes sheet exist**

Adequate evidence: Findings from a real device and a current list of everything faked.

- 0 — Emulated viewport only, no fakes sheet.
- 1 — One of the two present.
- 2 — Both present, with device findings recorded.
- 3 — As adequate, and one design change was made because of the phone test.

If below 2: Open the prototype on your phone, complete a task by thumb, and update the fakes sheet afterwards. Show at recheck: The phone findings and fakes sheet.

### Portfolio contribution

A running prototype you built yourself, with its checks and its fakes sheet, is a strong portfolio artefact and an unusual one for a designer.

### Assigned resources

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — Whichever modules you need to finish the assembly: layout, scripting or forms. Purpose: Supports the remaining implementation work. Effort: 90 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype is for and what it cannot claim. Purpose: Keeps the running prototype honestly bounded despite being convincing. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Written for government service prototypes; the honesty rules transfer directly. Fallback: R05.

## Lesson 12: Talking to engineers about what you built

Stable ID: m12-l12-v1. Core. Areas 13. Optional effort ~120 min.

**Objective.** Write a technical handover for one feature, ask three precise questions an engineer would find useful, and record what you now understand that you did not before this module.

**Bring forward.** Your running prototype and its specifications.

The point of building was never to become an engineer. It was to make the conversation with engineers specific.

### Learn

A handover that consists of screens leaves an engineer to invent everything you did not draw: states, transitions, error handling, keyboard behaviour, what happens when data is long. You have specified all of those over the last five modules, and this lesson assembles them into a document that answers questions before they are asked.

Feasibility questions rarely produce useful answers, because almost anything is possible. Cost questions do: what would this take, what would it constrain later, what would it prevent us changing. Asking in that form gets you a real trade-off rather than a yes that turns into a delay.

Your prototype's fakes need declaring in the handover as clearly as in a test. An engineer who assumes the search works, or that the data shape matches, plans around something that does not exist, and the correction is more expensive later than the sentence would have been now.

Recording what you now understand is worth doing once, plainly. This module was not intended to make you an engineer, and it should have changed what you can ask, what you can read, and what you no longer accept as an answer. Naming those explicitly makes them usable in an interview and in the next project.

**Common misconception.** “Designers who code are more valuable.” Designers who understand the material are more valuable. Writing production code is a different job; being able to read it, build a prototype, and ask precise questions is the part that makes design work land.

### Worked example

The handover for the booking feature ran to three pages: the flow with its states, the component specifications with their key tables, the four data branches with their wording, the responsive behaviour rules, and the accessibility notes with what had been tested and what had not. Three questions were asked: what would it cost to keep the held-place timer accurate across devices, what does the current data shape make expensive to change later, and which of these states will need server work rather than front-end work. The fakes sheet was attached. The reflection recorded three things learned, including that a change she had previously been told was trivial turned out to be structural, and one where the opposite was true.

#### Talking to engineers about what you built

Write a technical handover for one feature, ask three precise questions an engineer would find useful, and record what you now understand that you did not before this module.

**Where to work:** A written document plus your existing artefacts. No handover platform is required; a clear Markdown file with links is better than most of them.

- Starting material: Your prototype, key tables and state specifications.
- Create HaruCourse/Practice/m12-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Talking to engineers about what you built

Input artifact: Your prototype, key tables and state specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A technical handover covering behaviour, states and constraints
- [ ] Three cost-shaped questions for an engineer
- [ ] The fakes sheet attached and declared
- [ ] A written record of what you now understand

## 1. Assemble the handover
- Collect the flow, states, key tables, responsive rules and accessibility notes.
- Write them as one document a developer could work from.
- Include the wording for every message.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the questions
- Write three questions about cost and constraint rather than possibility.
- Make each specific to a decision in this feature.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Declare the fakes
- Attach the fakes sheet and mark anything an engineer might assume works.
- State what data shape you invented.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Ask someone
- If you can, ask your questions of a developer and record the answers.
- If not, record that the questions are unasked and what you expect.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write what you learned
- List three things you understand now that you did not before.
- Include at least one where you were previously wrong.
- Save the handover, questions and reflection.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The handover covers behaviour and states, not only appearance: [evidence reference]
- Three questions are about cost and constraint: [evidence reference]
- The fakes are declared explicitly: [evidence reference]
- The reflection includes something you had been wrong about: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Collect your existing specifications into one file; most of the content already exists.

</details>

<details>
<summary>Hint 2</summary>

Rewrite each question as “what would it take to …” or “what does this make harder later”.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m12-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The handover covers behaviour and states, not only appearance: A document containing flow, states, key behaviour, responsive rules and message wording. Three questions are about cost and constraint: Three specific questions asking what something would take or prevent. The fakes are declared explicitly: The fakes sheet attached with the invented data shape stated. The reflection includes something you had been wrong about: Three learnings, at least one correcting a previous belief.

**Bring forward:** A technical handover with cost-shaped questions is a strong interview artefact: it shows how you work with engineers rather than claiming that you do. Module handoff: Extract reusable decisions in m13


### Practice and pause points

- Assemble the handover (~30 min): Collect the flow, states, key tables, responsive rules and accessibility notes. Write them as one document a developer could work from. Include the wording for every message.
- Write the questions (~25 min): Write three questions about cost and constraint rather than possibility. Make each specific to a decision in this feature.
- Declare the fakes (~20 min): Attach the fakes sheet and mark anything an engineer might assume works. State what data shape you invented.
- Ask someone (~30 min): If you can, ask your questions of a developer and record the answers. If not, record that the questions are unasked and what you expect.
- Write what you learned (~15 min): List three things you understand now that you did not before. Include at least one where you were previously wrong. Save the handover, questions and reflection.

Pause after any step; save the artifact and next action.

**Free tool path.** A written document plus your existing artefacts. No handover platform is required; a clear Markdown file with links is better than most of them.

### Output

A technical handover covering behaviour, states and constraints; Three cost-shaped questions for an engineer; The fakes sheet attached and declared; A written record of what you now understand

### Checks

- Why ask about cost rather than possibility? Answer: Because almost everything is possible. Cost and constraint questions produce trade-offs you can design with, instead of a yes that becomes a delay.
- What must a handover contain beyond screens? Answer: States, transitions, error handling, keyboard behaviour, responsive rules and message wording — everything that would otherwise be invented at build time.
- What was the point of building, if not to become an engineer? Answer: To make the conversation specific: to read code, to prototype your own ideas, to ask precise questions, and to recognise an evasive answer.

### Rubric and remediation

**The handover covers behaviour and states, not only appearance**

Adequate evidence: A document containing flow, states, key behaviour, responsive rules and message wording.

- 0 — Screens with annotations.
- 1 — Some behaviour documented, states missing.
- 2 — All the behavioural material assembled in one document.
- 3 — As adequate, and it names what is still undecided rather than implying completeness.

If below 2: Collect your existing specifications into one file; most of the content already exists. Show at recheck: The handover document.

**Three questions are about cost and constraint**

Adequate evidence: Three specific questions asking what something would take or prevent.

- 0 — Feasibility questions.
- 1 — Mixed, with at least one is-it-possible question.
- 2 — All three about cost, constraint or consequence.
- 3 — As adequate, and each names the decision it would change.

If below 2: Rewrite each question as “what would it take to …” or “what does this make harder later”. Show at recheck: The three questions.

**The fakes are declared explicitly**

Adequate evidence: The fakes sheet attached with the invented data shape stated.

- 0 — Not declared.
- 1 — Attached without highlighting what looks real.
- 2 — Attached with the assumable items marked.
- 3 — As adequate, and the data shape is flagged as invented rather than proposed.

If below 2: Mark every part of the prototype an engineer could mistake for working. Show at recheck: The declared fakes.

**The reflection includes something you had been wrong about**

Adequate evidence: Three learnings, at least one correcting a previous belief.

- 0 — No reflection.
- 1 — Learnings listed without any correction.
- 2 — Three learnings including a correction.
- 3 — As adequate, and the correction changes how you will estimate or argue in future.

If below 2: Think back over the module for a moment where a build contradicted your expectation, and write it. Show at recheck: The reflection.

### Portfolio contribution

A technical handover with cost-shaped questions is a strong interview artefact: it shows how you work with engineers rather than claiming that you do.

### Assigned resources

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype communicates to the people who build the real thing. Purpose: Frames the handover as communication rather than documentation. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It does not cover technical handover specifically; the document structure here is the course's own. Fallback: R05.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — Any module you needed while building, revisited to name the concepts precisely. Purpose: Ensures your questions and handover use terms an engineer will recognise. Effort: 60 selected min. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
