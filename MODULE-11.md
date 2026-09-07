# Accessible product design

> Experience refinement is planned lesson by lesson; it is not yet implemented. See [the agreed learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for guided practice, worksheets, videos, free-tier constraints and current refinement status. Existing teaching and diagnostic independence remain in force.

Generated from src/module11.ts; edit that source, then run npm run docs:generate. Level 3 · Module m11 · requirement areas 11. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m08. This is guidance for meaningful practice, not a lock. Module approved resource pair: R14 / R10. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: Who is excluded, and by what

Stable ID: m11-l01-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.

**Bring forward.** Your m08 screens, m09 interaction specifications and m10 prototype.

Accessibility work fails when it starts from a checklist. It works when it starts from a person who cannot do something and the decision that stopped them.

### Learn

The assigned introduction frames access as the outcome of design choices meeting human variation. That framing is practical rather than political: it points you at the decision you can change. “Blind users cannot use the product” is not actionable; “the only route to remove an item is a hover control, so it does not exist without a pointer” names a decision you made and can unmake.

Barriers are not confined to permanent disability. A person with a broken wrist, a new parent holding a baby, someone on a train with one hand on a rail, or anyone in bright sunlight meets the same designs as a person with a permanent motor or vision impairment, and often meets the same barrier. Designing for the permanent case reliably improves the temporary and situational ones, which is why this work pays back beyond its stated audience.

Specificity is what makes a barrier fixable. Write the person, the situation, the thing they were trying to do and the decision that stopped them. Five specific barriers in your own product are worth more than a general list of disability types, because each one converts directly into a change.

This lesson deliberately precedes the standard. Criteria are useful once you know what you are looking for; started from cold they produce a compliance pass that misses the barrier your particular design creates.

**Common misconception.** “Accessibility means supporting screen readers.” Screen readers are one assistive technology among many, and most barriers in a typical product are met by people who use none: small targets, invisible focus, colour-only status, unreadable contrast, timeouts, and controls that need two hands.

### Worked example

Five barriers from the booking product. A person using a screen reader cannot tell which classes are full, because availability is shown only by a colour dot. A person with limited fine motor control cannot remove a shortlist item, because the only route is a swipe. Anyone in sunlight cannot read the quiet caption at 3.1:1 contrast. A person with a tremor mis-taps the destructive cancel control, which sits 4px from the primary action. And a person using the site in Hindi meets an English-only date format, which is a language barrier the team had never considered. Each names a decision rather than a category.

#### Who is excluded, and by what

Identify five specific barriers in your own product, each naming the person, the situation and the design decision that causes it.

**Where to work:** Your own product and your own eyes, plus the situational tests you can do now: outdoors in daylight, one-handed, with the screen at its dimmest. No tools or purchases are required for this lesson.

- Starting material: Your current screens and interaction specifications.
- Create HaruCourse/Practice/m11-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Who is excluded, and by what

Input artifact: Your current screens and interaction specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Five specific barriers naming person, situation and cause
- [ ] The design decision behind each barrier
- [ ] A note of which are permanent, temporary or situational
- [ ] One barrier you had not previously considered

## 1. Read the introduction
- Read the assigned accessibility introduction.
- Write in your own words what makes something a barrier.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Walk your product looking for exclusion
- Walk one task asking at each step who could not do this.
- Include vision, hearing, motor, cognitive and language differences.
- Write each barrier as a person in a situation, not a category.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Name the decisions
- For each barrier, name the design decision that causes it.
- Mark whether the decision was deliberate or inherited.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test the situational cases
- Try your product outdoors, one-handed, and at lowest brightness.
- Add any barrier these reveal.
- Note which barriers apply to more than one group.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record and rank
- Rank the five barriers by how completely they block the task.
- Mark the one you had not considered before.
- Save the list; the rest of the module works from it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Five barriers name a person, a situation and a task: [evidence reference]
- Each barrier names the design decision behind it: [evidence reference]
- Permanent, temporary and situational cases are covered: [evidence reference]
- Barriers are ranked by how completely they block: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier.

</details>

<details>
<summary>Hint 2</summary>

For each barrier, find the specification or screen where the decision was made and cite it.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Five barriers name a person, a situation and a task: Five written barriers, each specific enough to reproduce. Each barrier names the design decision behind it: A decision per barrier, marked deliberate or inherited. Permanent, temporary and situational cases are covered: Barriers spanning all three, with the situational ones tested rather than imagined. Barriers are ranked by how completely they block: An ordered list distinguishing total blocks from difficulties.

**Bring forward:** A barrier list written as decisions is a strong opening for an accessibility section, and it shows the work started from people rather than from a checklist. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read the introduction (~25 min): Read the assigned accessibility introduction. Write in your own words what makes something a barrier.
- Walk your product looking for exclusion (~30 min): Walk one task asking at each step who could not do this. Include vision, hearing, motor, cognitive and language differences. Write each barrier as a person in a situation, not a category.
- Name the decisions (~25 min): For each barrier, name the design decision that causes it. Mark whether the decision was deliberate or inherited.
- Test the situational cases (~25 min): Try your product outdoors, one-handed, and at lowest brightness. Add any barrier these reveal. Note which barriers apply to more than one group.
- Record and rank (~15 min): Rank the five barriers by how completely they block the task. Mark the one you had not considered before. Save the list; the rest of the module works from it.

Pause after any step; save the artifact and next action.

**Free tool path.** Your own product and your own eyes, plus the situational tests you can do now: outdoors in daylight, one-handed, with the screen at its dimmest. No tools or purchases are required for this lesson.

### Output

Five specific barriers naming person, situation and cause; The design decision behind each barrier; A note of which are permanent, temporary or situational; One barrier you had not previously considered

### Checks

- Why write barriers as decisions rather than categories? Answer: Because a decision can be changed. “Blind users cannot use this” gives you nothing; “availability is shown only by colour” tells you exactly what to fix.
- Why do situational barriers matter to this work? Answer: Because the same design decisions produce them, and fixing the permanent case fixes the sunlight, the broken wrist and the crowded train at the same time.
- Why start from barriers rather than from the standard? Answer: Because criteria read cold produce a compliance pass. Starting from what your design actually excludes tells you which criteria matter here.

### Rubric and remediation

**Five barriers name a person, a situation and a task**

Adequate evidence: Five written barriers, each specific enough to reproduce.

- 0 — General statements about disability groups.
- 1 — Some specific barriers mixed with categories.
- 2 — All five specify person, situation and task.
- 3 — As adequate, and at least one comes from a situational test you actually ran.

If below 2: Rewrite each barrier as “a person who … trying to … cannot, because …”. Anything you cannot complete is a category, not a barrier. Show at recheck: The rewritten barrier list.

**Each barrier names the design decision behind it**

Adequate evidence: A decision per barrier, marked deliberate or inherited.

- 0 — Causes unstated.
- 1 — Causes described as general failings.
- 2 — Each names a specific decision in your design.
- 3 — As adequate, and at least one decision is one you made in an earlier module.

If below 2: For each barrier, find the specification or screen where the decision was made and cite it. Show at recheck: The decision list.

**Permanent, temporary and situational cases are covered**

Adequate evidence: Barriers spanning all three, with the situational ones tested rather than imagined.

- 0 — Permanent disability only.
- 1 — Two of the three covered.
- 2 — All three, with situational cases actually tried.
- 3 — As adequate, and one barrier is shown to affect all three groups.

If below 2: Take your product outside, use it one-handed and dim the screen. Add what those reveal. Show at recheck: The extended list.

**Barriers are ranked by how completely they block**

Adequate evidence: An ordered list distinguishing total blocks from difficulties.

- 0 — Unordered.
- 1 — Ordered by ease of fixing.
- 2 — Ordered by how completely the task becomes impossible.
- 3 — As adequate, and the ranking notes which barriers have no workaround at all.

If below 2: For each barrier ask whether the person can finish the task another way. Those with no route go first. Show at recheck: The ranked list.

### Portfolio contribution

A barrier list written as decisions is a strong opening for an accessibility section, and it shows the work started from people rather than from a checklist.

### Assigned resources

- R28: [W3C: accessibility introduction](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — What web accessibility is, who it affects, and the range of situations it covers. Purpose: Establishes the mismatch framing this module and the barrier list depend on. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Read the text if any video is inaccessible to you; it is an introduction and supplies no criteria or testing method. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The list of checks, skimmed now to see what will be checkable later. Purpose: Shows which barriers you will be able to verify yourself in the coming lessons. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and self-checking is not testing with disabled people. Fallback: R28.

## Lesson 2: Using the standard without drowning in it

Stable ID: m11-l02-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.

**Bring forward.** Your ranked barrier list.

The standard is large and filterable. Used from your barriers, it is a set of answers; read front to back, it is a wall.

### Learn

The quick reference is organised as principles, guidelines and success criteria, with filters for version, level, technology and topic. Used properly it is a lookup: you have a barrier about colour-only status, so you filter to the relevant topic and find the criterion that names it. Reading it linearly produces the familiar experience of a long document that changes nothing.

Levels are about the breadth of the requirement, not its importance to your users. A and AA together are the usual working target and cover most of what your barrier list will contain. AAA criteria are worth knowing and are not expected across a whole product; where one addresses your specific audience, adopting it is a decision to record rather than a default.

A criterion states an outcome — text has a contrast ratio of at least this, all functionality is available from a keyboard — and leaves the design to you. That is why this lesson comes after the barriers: the criterion confirms what must be true, and your design decides how.

The gap between reading and conformance is worth naming once, here, for the whole module. You can check a criterion against a design; you can only test conformance against a build, with real assistive technology, and preferably with disabled people. Every claim in this module states which of those it rests on.

**Common misconception.** “We will do an accessibility audit at the end.” An audit at the end finds problems that are expensive to fix and often structural — a layout that cannot carry a visible focus ring, a flow that depends on hover. Mapping barriers to criteria during design costs an hour and changes what you build.

### Worked example

Five barriers mapped to five criteria. Colour-only availability mapped to the use-of-colour criterion, and meeting it here meant adding a text label beside the dot. The swipe-only removal mapped to the keyboard criterion: every function available from a keyboard, met by adding a visible control with a key route. The 3.1:1 caption mapped to contrast (minimum), met by darkening the text and re-measuring. The adjacent destructive control mapped to target size, met by increasing spacing. The English-only date format mapped to a language and localisation concern the standard covers only partly, so the lesson recorded it as a product requirement rather than a criterion.

#### Using the standard without drowning in it

Map your five barriers to specific success criteria at levels A and AA, and record for each what would count as meeting it in your design.

**Where to work:** The quick reference in a browser, filtered to level A and AA. No account, tooling or subscription is involved; the mapping is written work.

- Starting material: Your five barriers with their causes.
- Create HaruCourse/Practice/m11-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Using the standard without drowning in it

Input artifact: Your five barriers with their causes.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Each barrier mapped to a named success criterion
- [ ] What meeting it means in your specific design
- [ ] A note where no criterion covers your barrier
- [ ] A stated target level with the reason

## 1. Orient in the standard
- Open the assigned quick reference and filter to levels A and AA.
- Write the four principles and one criterion you already meet.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Map your barriers
- For each barrier, find the criterion that names it.
- Record the criterion number and its plain statement.
- Mark any barrier the standard does not cover.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Translate to your design
- For each criterion write what meeting it means for your specific screens.
- Name the change required, not the criterion text.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Choose your target
- State whether you are working to A, AA, or AA plus specific AAA criteria.
- Record any AAA criterion you adopt and why your audience needs it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record the boundary
- Write one sentence separating criteria you have read from conformance you have tested.
- Save the mapping; later lessons check these one by one.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Each barrier maps to a named criterion or is marked uncovered: [evidence reference]
- Meeting each criterion is stated in terms of your screens: [evidence reference]
- A target level is chosen with a reason: [evidence reference]
- The read-versus-tested boundary is stated: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered.

</details>

<details>
<summary>Hint 2</summary>

Rewrite each row as “in this design, meeting this means …”, naming the element.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Each barrier maps to a named criterion or is marked uncovered: A mapping table with criterion numbers, or an explicit uncovered marker. Meeting each criterion is stated in terms of your screens: A sentence per criterion naming the concrete change in your design. A target level is chosen with a reason: A stated target with any adopted AAA criteria justified by audience. The read-versus-tested boundary is stated: A written line distinguishing criteria consulted from conformance tested.

**Bring forward:** A barrier-to-criterion mapping is compact and shows you can use the standard as a tool rather than quoting it. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Orient in the standard (~25 min): Open the assigned quick reference and filter to levels A and AA. Write the four principles and one criterion you already meet.
- Map your barriers (~30 min): For each barrier, find the criterion that names it. Record the criterion number and its plain statement. Mark any barrier the standard does not cover.
- Translate to your design (~25 min): For each criterion write what meeting it means for your specific screens. Name the change required, not the criterion text.
- Choose your target (~25 min): State whether you are working to A, AA, or AA plus specific AAA criteria. Record any AAA criterion you adopt and why your audience needs it.
- Record the boundary (~15 min): Write one sentence separating criteria you have read from conformance you have tested. Save the mapping; later lessons check these one by one.

Pause after any step; save the artifact and next action.

**Free tool path.** The quick reference in a browser, filtered to level A and AA. No account, tooling or subscription is involved; the mapping is written work.

### Output

Each barrier mapped to a named success criterion; What meeting it means in your specific design; A note where no criterion covers your barrier; A stated target level with the reason

### Checks

- Why map from barriers to criteria rather than the reverse? Answer: Because the standard is large and your product's failures are specific. Barrier-first turns the reference into a lookup rather than a reading task.
- What does a success criterion give you? Answer: A statement of what must be true. It does not tell you how to design, which is why the mapping needs a sentence about your own screens.
- Does reading criteria make a design conformant? Answer: No. Conformance is a property of an implemented, tested build, ideally checked with disabled people. Reading criteria makes your design more likely to get there.

### Rubric and remediation

**Each barrier maps to a named criterion or is marked uncovered**

Adequate evidence: A mapping table with criterion numbers, or an explicit uncovered marker.

- 0 — No mapping.
- 1 — Loose mapping to principles rather than criteria.
- 2 — Specific criteria named, with uncovered barriers marked.
- 3 — As adequate, and an uncovered barrier is recorded as a product requirement instead.

If below 2: Filter the reference by the topic of each barrier and find the criterion that names it. If none does, mark it uncovered. Show at recheck: The mapping table.

**Meeting each criterion is stated in terms of your screens**

Adequate evidence: A sentence per criterion naming the concrete change in your design.

- 0 — Criterion text copied without translation.
- 1 — Vague intentions such as “improve contrast”.
- 2 — Specific changes named per screen or component.
- 3 — As adequate, and each change is traceable to a component in your inventory.

If below 2: Rewrite each row as “in this design, meeting this means …”, naming the element. Show at recheck: The translated mapping.

**A target level is chosen with a reason**

Adequate evidence: A stated target with any adopted AAA criteria justified by audience.

- 0 — No target stated.
- 1 — A level named without reasoning.
- 2 — Target stated with reasons, including any AAA adoption.
- 3 — As adequate, and the reason references a barrier or an audience fact from your research.

If below 2: Write the target and one sentence on why it fits this product and audience. Show at recheck: The target statement.

**The read-versus-tested boundary is stated**

Adequate evidence: A written line distinguishing criteria consulted from conformance tested.

- 0 — Reading implied as compliance.
- 1 — Boundary implied but unstated.
- 2 — Stated plainly and kept with the mapping.
- 3 — As adequate, and it names what testing would be required to claim conformance.

If below 2: Add one sentence: what you have read, and what remains untested about the build. Show at recheck: The boundary statement.

### Portfolio contribution

A barrier-to-criterion mapping is compact and shows you can use the standard as a tool rather than quoting it.

### Assigned resources

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — Levels A and AA, filtered to the topics your barriers name. Purpose: Supplies the criteria your barriers map to, without requiring a linear read. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It is a filterable index of the standard: no testing tools, no design method, no prioritisation. Reading a criterion is not conformance. Fallback: R41.
- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and their exceptions, as a worked example of one criterion. Purpose: Shows the depth behind a single criterion so the mapping is not treated as a checklist. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.

## Lesson 3: Structure people can navigate

Stable ID: m11-l03-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.

**Bring forward.** Your m06 heading work and two m08 screens.

Structure is how someone who cannot see the whole screen navigates it. Without it they read everything, in whatever order the markup happens to be.

### Learn

A heading outline is the page's table of contents, and for many people it is the primary navigation. Skipping a level tells them a section is nested inside something that does not exist, which makes the shape of the page unreadable while looking fine visually. The rule is strict because the outline has no other way to convey nesting.

Regions solve the repetition problem. Marked correctly, someone can skip the banner and navigation and land on the main content on every page; unmarked, they hear the same twenty links before the content each time, which turns a five-page task into an endurance exercise.

Reading order is where visually correct layouts go wrong. If a sidebar appears after the main content in the markup but beside it visually, someone reading in order meets it late; if a two-column form reads down each column instead of across each row, the labels and fields separate. Check the order the content is actually in, not the order it appears in.

The cheapest verification is reading the headings aloud in order. If they summarise the page, the structure is probably sound. If they read as a list of decorative phrases, no amount of correct markup will help, because the words themselves carry no information.

**Common misconception.** “The developer will add the headings.” Heading level is a design decision about hierarchy, and a developer choosing it from visual size produces four level-one headings and no outline. Specify the outline with the screen.

### Worked example

The class detail screen had five visual headings and no outline: three were level one because they looked large. Rewritten as page title, then four level-two sections, using the labels from the m06 table. The regions were named so the main content could be reached directly. The reading order was checked and one problem found: the price panel appeared visually beside the title but came after the description in order, so a person reading in sequence met the price three screens' worth of text later. It was moved. Reading the headings aloud now summarised the page in six phrases.

#### Structure people can navigate

Give two screens a correct heading outline, named regions and a reading order that matches the visual order, and verify each with a check you can run yourself.

**Where to work:** An indented text outline plus a sketch with regions marked. If your prototype is a local HTML file, the browser alone lets you check heading levels and tab order without any extension.

- Starting material: Two current screens and your m06 heading outline.
- Create HaruCourse/Practice/m11-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Structure people can navigate

Input artifact: Two current screens and your m06 heading outline.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A heading outline per screen with correct nesting
- [ ] Named regions for banner, navigation, main and footer
- [ ] A reading-order check with any mismatch fixed
- [ ] A read-aloud test of the headings alone

## 1. Read and write the outline
- Read the assigned page-structure sections on headings and regions.
- Write each screen as an indented outline using your existing labels.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Fix the levels
- Check no level is skipped and there is exactly one page title.
- Rewrite any heading that does not describe its section.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Mark the regions
- Identify banner, navigation, main content, complementary and footer.
- Check the main content can be reached without passing the navigation.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Check reading order
- Write the order content is actually in, not how it looks.
- Compare with the visual order and fix any mismatch.
- Pay attention to sidebars, two-column forms and floating panels.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Read the headings aloud
- Read only the headings to another person and ask what the page contains.
- Rewrite anything they cannot infer.
- Save the outlines, regions and order notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Headings are correctly nested and descriptive: [evidence reference]
- Regions are named and main content is directly reachable: [evidence reference]
- Reading order matches visual order: [evidence reference]
- The read-aloud check was run and changed something: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Write each screen as a numbered outline and check each item is a genuine subsection of the one above.

</details>

<details>
<summary>Hint 2</summary>

Draw each screen and outline its regions, then state how someone reaches the main content first.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Headings are correctly nested and descriptive: Two outlines with one page title each, no skipped levels, and headings that describe their sections. Regions are named and main content is directly reachable: A region map per screen with a route that skips the navigation. Reading order matches visual order: A written content order compared against the visual order, with mismatches fixed. The read-aloud check was run and changed something: A record of reading headings alone to someone, with resulting rewrites.

**Bring forward:** A heading outline and region map beside the screen is a small artefact that shows structural thinking most portfolios omit. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and write the outline (~25 min): Read the assigned page-structure sections on headings and regions. Write each screen as an indented outline using your existing labels.
- Fix the levels (~25 min): Check no level is skipped and there is exactly one page title. Rewrite any heading that does not describe its section.
- Mark the regions (~30 min): Identify banner, navigation, main content, complementary and footer. Check the main content can be reached without passing the navigation.
- Check reading order (~25 min): Write the order content is actually in, not how it looks. Compare with the visual order and fix any mismatch. Pay attention to sidebars, two-column forms and floating panels.
- Read the headings aloud (~15 min): Read only the headings to another person and ask what the page contains. Rewrite anything they cannot infer. Save the outlines, regions and order notes.

Pause after any step; save the artifact and next action.

**Free tool path.** An indented text outline plus a sketch with regions marked. If your prototype is a local HTML file, the browser alone lets you check heading levels and tab order without any extension.

### Output

A heading outline per screen with correct nesting; Named regions for banner, navigation, main and footer; A reading-order check with any mismatch fixed; A read-aloud test of the headings alone

### Checks

- Why does skipping a heading level matter? Answer: Because levels are the only signal of nesting for someone navigating by outline. A skipped level describes a structure that does not exist.
- What do regions buy a person? Answer: The ability to skip repeated navigation and land on the content. Without them, every page starts with the same twenty links.
- Where does reading order usually break? Answer: Two-column layouts, sidebars and floating panels, where the visual position and the content order diverge and someone reading in sequence meets things late or separated.

### Rubric and remediation

**Headings are correctly nested and descriptive**

Adequate evidence: Two outlines with one page title each, no skipped levels, and headings that describe their sections.

- 0 — Headings chosen by visual size.
- 1 — Correct nesting with vague headings.
- 2 — Correct nesting and descriptive headings on both screens.
- 3 — As adequate, and headings reuse vocabulary evidenced in m06.

If below 2: Write each screen as a numbered outline and check each item is a genuine subsection of the one above. Show at recheck: The two outlines.

**Regions are named and main content is directly reachable**

Adequate evidence: A region map per screen with a route that skips the navigation.

- 0 — No regions.
- 1 — Regions named but no skip route.
- 2 — Regions named and main content directly reachable.
- 3 — As adequate, and repeated content is identified as something to skip on every page.

If below 2: Draw each screen and outline its regions, then state how someone reaches the main content first. Show at recheck: The region maps.

**Reading order matches visual order**

Adequate evidence: A written content order compared against the visual order, with mismatches fixed.

- 0 — Order not examined.
- 1 — Examined without fixing a known mismatch.
- 2 — Checked and mismatches corrected.
- 3 — As adequate, and a layout was changed rather than patched to make the orders agree.

If below 2: Write the content order as a numbered list and walk the screen visually alongside it. Show at recheck: The order comparison.

**The read-aloud check was run and changed something**

Adequate evidence: A record of reading headings alone to someone, with resulting rewrites.

- 0 — Not run.
- 1 — Run alone with no changes.
- 2 — Run with another person and rewrites recorded.
- 3 — As adequate, and the listener's summary is quoted beside the outline.

If below 2: Read only the headings to someone and ask what the page contains. Rewrite what they cannot infer. Show at recheck: The read-aloud record.

### Portfolio contribution

A heading outline and region map beside the screen is a small artefact that shows structural thinking most portfolios omit.

### Assigned resources

- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The headings and page regions sections. Purpose: Supplies the outline and region rules this lesson applies. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. It covers structural semantics, not navigation design or content wording. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The heading and page title checks. Purpose: Gives self-runnable verification for the outline you wrote. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks only; passing them is not conformance. Fallback: R28.

## Lesson 4: Text people can actually read

Stable ID: m11-l04-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.

**Bring forward.** Your m08 token sheet and two screens.

Text is the product for most people most of the time, and it is the easiest thing to make unreadable while it looks elegant.

### Learn

Contrast is measurable, which means opinions about it are unnecessary. The assigned threshold reading gives the ratios and their exceptions for large text and incidental elements. Measure every pair you allow — including the ones you consider decorative, because a caption carrying the price is not decorative — and record the number beside the pair in your token sheet.

Quiet text is where products fail. Placeholder grey, disabled labels, captions on tinted panels: each was chosen to be visually recessive, and recessive is exactly what fails a ratio. If a piece of text matters enough to appear, it matters enough to be readable; if it does not matter, remove it rather than dimming it.

Enlarging text is a reflow test, not a zoom test. A person who has set their text larger should get a layout that adapts: content wrapping, columns stacking, nothing clipped, no horizontal scrolling of the page. Fixed-height containers and text sized in absolute units are the two usual causes of failure, and both are decisions you made in m03 and m08.

Comfort is broader than the threshold. Line length, line height, paragraph spacing and the amount of text on screen all affect whether people read or skim, and none of them appear in a contrast measurement. Meeting the ratio is where you start rather than where you finish.

**Common misconception.** “It passes the contrast check, so the text is fine.” The ratio covers foreground against background at a given size and weight. It says nothing about thin type at small sizes, long unbroken lines, or text over an image where the background varies.

### Worked example

Nine text pairs were measured. Three failed: the caption at 3.1:1, the placeholder at 2.8:1 and the disabled button label at 2.4:1. The caption was darkened; the placeholder was replaced with a permanent hint under the label, removing the problem instead of repairing it; the disabled label was given a stronger colour and a written explanation beside it, since a disabled control with unreadable text tells nobody anything. At 200 per cent text the price panel clipped its last line and the header wrapped over the logo; both were fixed by allowing the containers to grow. Line length on the description exceeded ninety characters at wide widths and was capped.

#### Text people can actually read

Measure contrast for every text pair in your design, test the layout at 200 per cent text size, and repair what breaks without removing content.

**Where to work:** Any free browser-based contrast checker, or compute the ratio in a spreadsheet from the published formula. For enlarged text, your browser's own text-size setting shows real reflow with no tooling.

- Starting material: Your token sheet with its text and surface pairs.
- Create HaruCourse/Practice/m11-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Text people can actually read

Input artifact: Your token sheet with its text and surface pairs.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Measured ratios for every text-on-surface pair
- [ ] Repairs for every failing pair, recorded
- [ ] A 200 per cent text test with breakages named and fixed
- [ ] A line-length and spacing decision for body text

## 1. Measure everything
- List every text-on-surface pair, including quiet text.
- Measure each ratio and record it in the token sheet.
- Mark every pair below the relevant threshold.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Repair the failures
- Darken, remove or replace each failing pair.
- Prefer removing decorative text over dimming meaningful text.
- Re-measure after each repair.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Enlarge the text
- Set text to about 200 per cent and reload the screens.
- Record every clip, overlap, truncation and horizontal scroll.
- Fix by letting containers grow rather than shrinking the text.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Check reading comfort
- Measure line length at your widest layout and cap it if needed.
- Check line height and paragraph spacing on the longest text block.
- Read one screen aloud at arm's length to test the result.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Update the token sheet with measured ratios.
- Write what you could not fix and why.
- Save the enlarged-text screenshots with the notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every text pair carries a measured ratio: [evidence reference]
- Failing pairs are repaired and re-measured: [evidence reference]
- A 200 per cent test was run with breakages fixed: [evidence reference]
- Line length and spacing decisions are recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List every place text meets a surface and measure each; the ones you skipped are usually the failing ones.

</details>

<details>
<summary>Hint 2</summary>

Repair each failing pair and record the new number beside the old one.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every text pair carries a measured ratio: A measured number per pair in the token sheet, including quiet text. Failing pairs are repaired and re-measured: Repairs recorded with new ratios, including any text removed rather than dimmed. A 200 per cent test was run with breakages fixed: Screens at enlarged text with named breakages and their fixes. Line length and spacing decisions are recorded: A measured line length at the widest layout and stated spacing values.

**Bring forward:** Measured ratios and an enlarged-text screenshot are concrete craft evidence and take minutes to produce. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Measure everything (~25 min): List every text-on-surface pair, including quiet text. Measure each ratio and record it in the token sheet. Mark every pair below the relevant threshold.
- Repair the failures (~25 min): Darken, remove or replace each failing pair. Prefer removing decorative text over dimming meaningful text. Re-measure after each repair.
- Enlarge the text (~30 min): Set text to about 200 per cent and reload the screens. Record every clip, overlap, truncation and horizontal scroll. Fix by letting containers grow rather than shrinking the text.
- Check reading comfort (~25 min): Measure line length at your widest layout and cap it if needed. Check line height and paragraph spacing on the longest text block. Read one screen aloud at arm's length to test the result.
- Record (~15 min): Update the token sheet with measured ratios. Write what you could not fix and why. Save the enlarged-text screenshots with the notes.

Pause after any step; save the artifact and next action.

**Free tool path.** Any free browser-based contrast checker, or compute the ratio in a spreadsheet from the published formula. For enlarged text, your browser's own text-size setting shows real reflow with no tooling.

### Output

Measured ratios for every text-on-surface pair; Repairs for every failing pair, recorded; A 200 per cent text test with breakages named and fixed; A line-length and spacing decision for body text

### Checks

- Why measure rather than judge contrast? Answer: Because your eyes are adapted to your screen and your lighting. The ratio is a number, and the number is the same for everyone reading your design.
- What usually breaks at 200 per cent text? Answer: Fixed-height containers and absolute text sizes: content clips, headers wrap over other elements, and pages start scrolling sideways. Both causes are earlier design decisions.
- Is a passing ratio enough? Answer: No. It is a floor. Thin type, long lines, tight spacing and text over variable backgrounds can pass and still be hard to read.

### Rubric and remediation

**Every text pair carries a measured ratio**

Adequate evidence: A measured number per pair in the token sheet, including quiet text.

- 0 — No measurements.
- 1 — Body text measured only.
- 2 — All pairs measured including captions, placeholders and disabled text.
- 3 — As adequate, and the sheet marks which pairs are permitted and which are forbidden.

If below 2: List every place text meets a surface and measure each; the ones you skipped are usually the failing ones. Show at recheck: The measured token sheet.

**Failing pairs are repaired and re-measured**

Adequate evidence: Repairs recorded with new ratios, including any text removed rather than dimmed.

- 0 — Failures left in place.
- 1 — Repaired without re-measuring.
- 2 — Repaired and re-measured, with removals justified.
- 3 — As adequate, and one repair removed the need for the text rather than restyling it.

If below 2: Repair each failing pair and record the new number beside the old one. Show at recheck: The repair record.

**A 200 per cent test was run with breakages fixed**

Adequate evidence: Screens at enlarged text with named breakages and their fixes.

- 0 — Not tested.
- 1 — Tested with breakages recorded but unfixed.
- 2 — Tested, named and fixed by allowing reflow.
- 3 — As adequate, and no fix reduced the text size or removed content.

If below 2: Enlarge the text and screenshot each screen. Name each breakage concretely, then let the containers grow. Show at recheck: The enlarged screenshots and fixes.

**Line length and spacing decisions are recorded**

Adequate evidence: A measured line length at the widest layout and stated spacing values.

- 0 — Not considered.
- 1 — Mentioned without measurement.
- 2 — Measured, capped where needed, and spacing recorded.
- 3 — As adequate, and the decision references your m03 typography work.

If below 2: Count characters per line at your widest breakpoint and cap the container if it runs long. Show at recheck: The measurements.

### Portfolio contribution

Measured ratios and an enlarged-text screenshot are concrete craft evidence and take minutes to produce.

### Assigned resources

- R30: [W3C: understanding contrast (minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — The thresholds and the large-text and incidental exceptions. Purpose: Supplies the measurable target for every pair you allow. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. A passing ratio is not proof of legibility at real sizes in real light. Fallback: R29.
- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour perception, colour-vision deficiency and contrast in practice. Purpose: Explains why measured contrast matters more than how the text looks to you. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. No code samples; the measurement and reflow tests here are the practical work. Fallback: R30.

## Lesson 5: Never colour alone

Stable ID: m11-l05-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.

**Bring forward.** Your m08 states, messages and charts.

Colour is the signal most designers reach for and the one most likely to be unavailable to the reader.

### Learn

The rule is narrow and strict: information must not be conveyed by colour alone. It does not forbid colour, and it does not require a drab product. It requires that anyone who cannot distinguish your colours — through a colour-vision difference, a monochrome display, sunlight, a cheap projector or a printed page — can still get the information.

The second signal has to be perceptible, not merely present. An icon that differs only in colour is not a second signal; an icon with a distinct silhouette is. Text is the most reliable of all: “Full” beside the red dot carries the meaning to everyone, including a screen-reader user for whom the dot does not exist at all.

Greyscale catches most failures in seconds, and it is the check to run habitually. A colour-vision simulation catches the rest — particularly red and green pairs, which look distinct to you and identical to a significant share of readers, and which products use constantly for success and failure.

Three places recur across products: chart series distinguished only by colour, status shown only by a coloured dot or background, and required fields marked only in red. Check these three first; they are almost always present and almost always unfixed.

**Common misconception.** “We use a colour-blind-safe palette, so we are fine.” A safe palette reduces the chance of confusion between hues and does nothing for a monochrome display, sunlight, printing, or a screen-reader user. The second signal is what carries the meaning.

### Worked example

Four places carried meaning by colour alone. Availability dots — green, amber, red — gained text: “Places available”, “2 left”, “Full”. Required fields, marked with red labels, gained the word “required”. The chart's three series gained direct labels rather than a colour legend. The error state, which had used only a red border, gained an icon with a distinct shape and the message text tied to the field. In greyscale all four remained readable, and a colour-vision simulation confirmed the amber and red dots had previously been indistinguishable for some readers.

#### Never colour alone

Find every place your design carries meaning by colour, add a second signal to each, and prove the design still works in greyscale and in a colour-vision simulation.

**Where to work:** Greyscale is free: your operating system's accessibility settings, a photocopy, or a phone photo converted to black and white. Colour-vision simulation is available in browser developer tools with no account.

- Starting material: Your state and message specifications.
- Create HaruCourse/Practice/m11-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Never colour alone

Input artifact: Your state and message specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A list of every place meaning is carried by colour
- [ ] A second signal added to each, named
- [ ] A greyscale pass with any remaining failures
- [ ] A colour-vision simulation pass with results

## 1. Find the colour-only signals
- Walk your screens listing everything whose meaning depends on colour.
- Check status, charts, required fields, links and errors specifically.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Add second signals
- Add text where possible; it works for every reader including screen readers.
- Use distinct shapes rather than same-shape different-colour icons.
- Keep the colour; you are adding, not replacing.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Greyscale everything
- View every screen in greyscale.
- Mark anything you can no longer distinguish or interpret.
- Repair and re-check.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Simulate colour-vision differences
- Run a colour-vision simulation in your browser tools.
- Check red and green pairs first.
- Record what changed and what still fails.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- List the signals you added and where.
- Note anything you could not fix and why.
- Save the greyscale and simulation evidence.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every colour-only signal is found and listed: [evidence reference]
- Each has a perceptible second signal: [evidence reference]
- A greyscale pass was run and repairs made: [evidence reference]
- A colour-vision simulation was run and recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Walk each screen asking what a person would miss if every colour were the same grey.

</details>

<details>
<summary>Hint 2</summary>

For each case, add the word that states the meaning; then decide whether a shape helps as well.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every colour-only signal is found and listed: A list covering status, charts, required fields, links and error states. Each has a perceptible second signal: A named second signal per case, preferring text where possible. A greyscale pass was run and repairs made: Greyscale renderings with failures marked and repaired. A colour-vision simulation was run and recorded: Simulation results, with red and green pairs specifically checked.

**Bring forward:** Before-and-after greyscale pairs are compact, visual and immediately convincing evidence of accessible craft. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Find the colour-only signals (~20 min): Walk your screens listing everything whose meaning depends on colour. Check status, charts, required fields, links and errors specifically.
- Add second signals (~30 min): Add text where possible; it works for every reader including screen readers. Use distinct shapes rather than same-shape different-colour icons. Keep the colour; you are adding, not replacing.
- Greyscale everything (~25 min): View every screen in greyscale. Mark anything you can no longer distinguish or interpret. Repair and re-check.
- Simulate colour-vision differences (~30 min): Run a colour-vision simulation in your browser tools. Check red and green pairs first. Record what changed and what still fails.
- Record (~15 min): List the signals you added and where. Note anything you could not fix and why. Save the greyscale and simulation evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** Greyscale is free: your operating system's accessibility settings, a photocopy, or a phone photo converted to black and white. Colour-vision simulation is available in browser developer tools with no account.

### Output

A list of every place meaning is carried by colour; A second signal added to each, named; A greyscale pass with any remaining failures; A colour-vision simulation pass with results

### Checks

- Does the rule forbid using colour? Answer: No. It forbids colour being the only carrier of information. Colour reinforcing a text or shape signal is exactly what it is for.
- Why is text the most reliable second signal? Answer: Because it survives greyscale, colour-vision differences, printing and screen readers. A shape helps sighted readers; text helps everyone.
- Which three places usually fail? Answer: Chart series distinguished by colour, status shown as a coloured dot or background, and required fields marked only in red.

### Rubric and remediation

**Every colour-only signal is found and listed**

Adequate evidence: A list covering status, charts, required fields, links and error states.

- 0 — Not audited.
- 1 — Obvious cases only.
- 2 — All the usual categories checked and listed.
- 3 — As adequate, and one signal is found in a place you had not considered, such as a hover or a chart legend.

If below 2: Walk each screen asking what a person would miss if every colour were the same grey. Show at recheck: The audit list.

**Each has a perceptible second signal**

Adequate evidence: A named second signal per case, preferring text where possible.

- 0 — Colour retained as the only signal.
- 1 — Second signals added but some rely on colour to be distinguished.
- 2 — Each has a genuinely perceptible second signal.
- 3 — As adequate, and at least one case uses text so the meaning also reaches a screen reader.

If below 2: For each case, add the word that states the meaning; then decide whether a shape helps as well. Show at recheck: The signals list.

**A greyscale pass was run and repairs made**

Adequate evidence: Greyscale renderings with failures marked and repaired.

- 0 — Not run.
- 1 — Run without repairs.
- 2 — Run, failures marked and repaired.
- 3 — As adequate, and the pass covers states and messages as well as static screens.

If below 2: Convert every screen and state to greyscale and repair anything you cannot interpret. Show at recheck: The greyscale evidence.

**A colour-vision simulation was run and recorded**

Adequate evidence: Simulation results, with red and green pairs specifically checked.

- 0 — Not run.
- 1 — Run without recording specific findings.
- 2 — Run with findings recorded and repairs made.
- 3 — As adequate, and a palette pair was changed as well as a second signal added.

If below 2: Use your browser's simulation, check the status colours first, and record what becomes indistinguishable. Show at recheck: The simulation record.

### Portfolio contribution

Before-and-after greyscale pairs are compact, visual and immediately convincing evidence of accessible craft.

### Assigned resources

- R29: [web.dev: colour and contrast](https://web.dev/learn/accessibility/color-contrast) — Colour-vision deficiency and the rule against relying on colour alone. Purpose: Supplies the rule and the perceptual reasoning behind it. Effort: 25–40 min. Free reading, no account. Verified 2026-09-06. The page carries no code samples; the greyscale and simulation passes are the practical test. Fallback: R30.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The use-of-colour criterion and the contrast criteria at level AA. Purpose: Names the criteria this lesson satisfies so the mapping stays traceable. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard, not a design method; reading a criterion is not conformance. Fallback: R41.

## Lesson 6: Everything works from a keyboard

Stable ID: m11-l06-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.

**Bring forward.** Your m09 key tables and focus rules, and a rough build.

If a task cannot be completed from a keyboard, it cannot be completed by a large group of people, including many who do not consider themselves disabled.

### Learn

The criterion is blunt: all functionality available from a keyboard. It is also the one most often failed by otherwise careful products, because keyboard support is invisible to anyone using a pointer and therefore never noticed in review. Testing it takes ten minutes and is the highest-value check in this module.

Three things must hold together. Reachability: you can get to every control. Visibility: you can see where you are at every step. Order: the sequence follows the visual and logical order rather than the order elements happen to appear. A design failing any one of them fails the task, even if the other two are perfect.

Keyboard traps are the most serious failure because they end the session. A custom dropdown that captures the arrow keys and never releases focus, a dialogue with no escape, an embedded widget you can enter and not exit: each strands the person entirely. Check every custom control specifically for whether you can leave it.

Native controls mostly work; custom ones mostly do not, unless someone specified them. That is what your m09 key tables were for, and this lesson is where they meet reality — testing what was built against what you wrote.

**Common misconception.** “Keyboard use is a niche case.” It includes people with motor impairments, people using switch devices and voice control that maps to keyboard interaction, many screen-reader users, anyone with a broken trackpad, and a large number of fast, experienced users. It is also the substrate other assistive technologies build on.

### Worked example

The booking task was attempted with the mouse unplugged. Four failures. The date picker could be reached and not operated: arrow keys did nothing, so no date could be chosen — a total block, repaired against the m09 key table. The filter panel trapped focus, with escape doing nothing. The remove control, hover-only, could not be reached at all. Focus was invisible on the tinted review panel. The repair addressed the date picker first, because it stopped the task entirely; the trap was recorded as the second, and the write-up noted that a mouse-only workaround was explicitly not acceptable as a fix.

#### Everything works from a keyboard

Complete one whole task using only a keyboard, record every point where it was impossible or unclear, and repair the worst without adding a mouse-only workaround.

**Where to work:** Unplug the mouse or put it out of reach, and use the tab, arrow, enter, space and escape keys. If your prototype is a local HTML file, this test is fully available with no tooling.

- Starting material: Your key tables and, if possible, a rough running page.
- Create HaruCourse/Practice/m11-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Everything works from a keyboard

Input artifact: Your key tables and, if possible, a rough running page.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A recorded keyboard-only attempt at one full task
- [ ] A list of unreachable, unoperable and trapping controls
- [ ] One repair addressing the most blocking failure
- [ ] A statement of which key tables were satisfied and which were not

## 1. Prepare the test
- Open your prototype and put the mouse out of reach.
- Have your m09 key tables beside you.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Attempt the task
- Complete one full task using only the keyboard.
- Record every point where you could not proceed or lost your place.
- Note anywhere focus disappeared or the order jumped.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Hunt for traps
- Enter every custom control and try to leave it with tab and escape.
- Record anything that captures focus.
- Check dialogues, pickers, menus and embedded content.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Repair the worst
- Fix the failure that most completely blocks the task.
- Use your key table as the specification for the fix.
- Do not accept a pointer-based workaround as a repair.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record against the tables
- Mark each key-table row satisfied or failed.
- List failures as build defects with expected behaviour.
- Save the results and the repair.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A full task was attempted with no pointer: [evidence reference]
- Unreachable, unoperable and trapping controls are listed: [evidence reference]
- The most blocking failure was repaired properly: [evidence reference]
- Key-table rows are marked satisfied or failed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Put the mouse out of reach and try again from the start, writing down each step.

</details>

<details>
<summary>Hint 2</summary>

Go through each custom control and try to enter, operate and leave it. Record which of the three fails.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A full task was attempted with no pointer: A record of a complete keyboard-only attempt, including where it stopped. Unreachable, unoperable and trapping controls are listed: A categorised list distinguishing the three failure kinds. The most blocking failure was repaired properly: A repair implementing the key table, with no pointer-based workaround. Key-table rows are marked satisfied or failed: Your m09 tables annotated with results per row and defects named.

**Bring forward:** A keyboard-only walkthrough with named failures and one repair is direct evidence of accessible practice, and it costs an afternoon. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Prepare the test (~20 min): Open your prototype and put the mouse out of reach. Have your m09 key tables beside you.
- Attempt the task (~30 min): Complete one full task using only the keyboard. Record every point where you could not proceed or lost your place. Note anywhere focus disappeared or the order jumped.
- Hunt for traps (~25 min): Enter every custom control and try to leave it with tab and escape. Record anything that captures focus. Check dialogues, pickers, menus and embedded content.
- Repair the worst (~30 min): Fix the failure that most completely blocks the task. Use your key table as the specification for the fix. Do not accept a pointer-based workaround as a repair.
- Record against the tables (~15 min): Mark each key-table row satisfied or failed. List failures as build defects with expected behaviour. Save the results and the repair.

Pause after any step; save the artifact and next action.

**Free tool path.** Unplug the mouse or put it out of reach, and use the tab, arrow, enter, space and escape keys. If your prototype is a local HTML file, this test is fully available with no tooling.

### Output

A recorded keyboard-only attempt at one full task; A list of unreachable, unoperable and trapping controls; One repair addressing the most blocking failure; A statement of which key tables were satisfied and which were not

### Checks

- Why is reachability not enough? Answer: Because a control you can reach and cannot see or operate still blocks the task. Visibility of focus and a sensible order are part of the same requirement.
- Why are keyboard traps the most serious failure? Answer: Because they end the session entirely. A person who enters a control and cannot leave it has no route forward and no route back.
- Where does keyboard support usually disappear? Answer: In custom controls — pickers, dropdowns, menus, embedded widgets — which have no behaviour except what someone specified and built.

### Rubric and remediation

**A full task was attempted with no pointer**

Adequate evidence: A record of a complete keyboard-only attempt, including where it stopped.

- 0 — Not attempted, or attempted partially.
- 1 — Attempted with occasional pointer use.
- 2 — A full attempt with the pointer unavailable, recorded step by step.
- 3 — As adequate, and a second task was attempted to check the failures generalise.

If below 2: Put the mouse out of reach and try again from the start, writing down each step. Show at recheck: The attempt record.

**Unreachable, unoperable and trapping controls are listed**

Adequate evidence: A categorised list distinguishing the three failure kinds.

- 0 — Failures described generally.
- 1 — Listed without distinguishing the kinds.
- 2 — All three kinds distinguished with specific controls named.
- 3 — As adequate, and every custom control was explicitly checked for trapping.

If below 2: Go through each custom control and try to enter, operate and leave it. Record which of the three fails. Show at recheck: The categorised list.

**The most blocking failure was repaired properly**

Adequate evidence: A repair implementing the key table, with no pointer-based workaround.

- 0 — Repair offers a mouse alternative instead.
- 1 — Repaired partially, leaving the control operable but not conventional.
- 2 — Repaired to the key table, keyboard-only.
- 3 — As adequate, and the repair was re-tested with the pointer unavailable.

If below 2: Take the m09 key table for that control and implement each row; a workaround does not satisfy the criterion. Show at recheck: The repair and re-test.

**Key-table rows are marked satisfied or failed**

Adequate evidence: Your m09 tables annotated with results per row and defects named.

- 0 — Tables not used.
- 1 — Overall pass or fail without row detail.
- 2 — Row-level results with defects stated.
- 3 — As adequate, and untested rows are marked untested rather than assumed.

If below 2: Walk each row of the table against the build and mark the result. Show at recheck: The annotated tables.

### Portfolio contribution

A keyboard-only walkthrough with named failures and one repair is direct evidence of accessible practice, and it costs an afternoon.

### Assigned resources

- R65: [W3C ARIA Authoring Practices: patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) — The patterns for the custom controls you use, read for expected keys and focus behaviour. Purpose: Supplies the specification your repair implements. Effort: 45–90 selected min. Free reading, no account. Verified 2026-09-06; the pages carry no date. Guidance rather than a conformance standard, covering semantics and keys only. Fallback: R14.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Gives the self-runnable procedure for the reachability and focus parts of this test. Effort: 10–20 selected min. Free reading, no account. Verified 2026-09-06. Preliminary only; passing is not conformance and is not testing with disabled people. Fallback: R28.

## Lesson 7: Forms that do not exclude

Stable ID: m11-l07-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.

**Bring forward.** Your m08 field table and the m07 error wording.

Forms are where accessibility failures cost money directly: a person who cannot complete the form cannot buy, book or apply.

### Learn

A label has to be associated with its field, not merely near it. Visually adjacent text is not a label to a screen reader, which is why a form that looks perfectly clear can announce a series of unlabelled edit fields. The assigned tutorial covers the association explicitly, and it is the single most common failure in forms.

Grouping matters when several fields answer one question — a date split into three, a set of radio options, an address block. Without a group, each field is announced alone and the question they belong to is lost. With one, the person hears the question then the options, which is how the form reads visually.

Instructions must be associated too. A hint sitting above a field is read at the wrong time, or not at all, unless it is tied to the field. That association is what makes the m08 rule — help before the mistake — work for people who are not reading the layout.

Errors have three obligations here: name the fix, be reachable directly from a summary, and be announced when they appear rather than silently inserted. This is the same wording you already wrote; the difference is that this lesson makes it reach people who are not looking at the screen.

**Common misconception.** “The form is accessible because it uses standard fields.” Standard fields help and do not supply labels, grouping, instructions or error association. Those are decisions someone has to make, and by default they are not made.

### Worked example

The booking form was rebuilt. Each field gained an associated label, including the ones whose labels had been visual only. The date fields were grouped under one question, and the group name was announced with them. The phone hint moved under the label and was associated with the field. Errors were rewritten to name the fix, a summary at the top linked to each problem field, and the summary was announced when it appeared. The placeholder text disappeared entirely; nothing in the form now depends on it, and one field was removed because no decision needed it.

#### Forms that do not exclude

Rebuild one form so every field is labelled, grouped and described accessibly, errors are announced and locatable, and nothing depends on placeholder text or colour.

**Where to work:** A local HTML file with proper labels, groups and hints costs an evening and lets you check the behaviour. On paper, specify each association explicitly and mark the announcement behaviour as untested.

- Starting material: Your field table and error messages.
- Create HaruCourse/Practice/m11-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Forms that do not exclude

Input artifact: Your field table and error messages.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A field table with associated labels, hints and error text
- [ ] Grouped fields where several answer one question
- [ ] An error summary that links to each problem field
- [ ] A statement of what was verified and what remains untested

## 1. Read and audit
- Read the assigned sections on labels, grouping, instructions and errors.
- Audit your form against each: label, hint, error, grouping.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Associate everything
- Give every field an associated label and hint.
- Group fields that answer one question, and name the group.
- Remove any placeholder that was carrying meaning.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Rebuild the errors
- Rewrite each error to name the fix.
- Add a summary at the top that links to each problem field.
- Specify that the summary is announced when it appears.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Test what you can
- Tab through the form and confirm labels and hints are reachable in order.
- Trigger errors and check the summary and links behave.
- Record anything you cannot verify without a build.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Update the field table with associations and error text.
- List the untested behaviour explicitly.
- Save the table and the test notes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every field has an associated label and hint: [evidence reference]
- Related fields are grouped and the group is named: [evidence reference]
- Errors name fixes and a summary links to each field: [evidence reference]
- Untested behaviour is recorded rather than assumed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously.

</details>

<details>
<summary>Hint 2</summary>

Find every place several fields answer one question and specify the group and its name.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every field has an associated label and hint: A field table specifying the association for each label and hint, with no meaning left in placeholders. Related fields are grouped and the group is named: Groups specified for multi-field questions with the shared question named. Errors name fixes and a summary links to each field: Rewritten errors plus a linked summary with announcement behaviour specified. Untested behaviour is recorded rather than assumed: A list of what was checked in a build and what could not be.

**Bring forward:** An accessible field table is directly usable by an engineer and shows the level of specification a designer can own. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and audit (~25 min): Read the assigned sections on labels, grouping, instructions and errors. Audit your form against each: label, hint, error, grouping.
- Associate everything (~30 min): Give every field an associated label and hint. Group fields that answer one question, and name the group. Remove any placeholder that was carrying meaning.
- Rebuild the errors (~25 min): Rewrite each error to name the fix. Add a summary at the top that links to each problem field. Specify that the summary is announced when it appears.
- Test what you can (~25 min): Tab through the form and confirm labels and hints are reachable in order. Trigger errors and check the summary and links behave. Record anything you cannot verify without a build.
- Record (~15 min): Update the field table with associations and error text. List the untested behaviour explicitly. Save the table and the test notes.

Pause after any step; save the artifact and next action.

**Free tool path.** A local HTML file with proper labels, groups and hints costs an evening and lets you check the behaviour. On paper, specify each association explicitly and mark the announcement behaviour as untested.

### Output

A field table with associated labels, hints and error text; Grouped fields where several answer one question; An error summary that links to each problem field; A statement of what was verified and what remains untested

### Checks

- Why is nearby text not a label? Answer: Because the association has to be explicit for assistive technology. Visually adjacent text leaves the field announced as an unlabelled input.
- When do fields need grouping? Answer: When several answer one question — a split date, a radio set, an address. Without a group each field is announced alone and the question is lost.
- What does an error summary need to do? Answer: Name the fix, link to each problem field, and be announced when it appears. A silent summary is invisible to the people who most need it.

### Rubric and remediation

**Every field has an associated label and hint**

Adequate evidence: A field table specifying the association for each label and hint, with no meaning left in placeholders.

- 0 — Visual labels only, or placeholders used as labels.
- 1 — Labels associated but hints left unassociated.
- 2 — Both associated for every field.
- 3 — As adequate, and a field was removed because it served no decision.

If below 2: List each field and write how its label and hint are associated. Anything ambiguous will be built ambiguously. Show at recheck: The field table.

**Related fields are grouped and the group is named**

Adequate evidence: Groups specified for multi-field questions with the shared question named.

- 0 — No grouping.
- 1 — Visual grouping only.
- 2 — Groups specified with names.
- 3 — As adequate, and the group name is the question rather than a section label.

If below 2: Find every place several fields answer one question and specify the group and its name. Show at recheck: The grouping specification.

**Errors name fixes and a summary links to each field**

Adequate evidence: Rewritten errors plus a linked summary with announcement behaviour specified.

- 0 — Errors describe the problem only.
- 1 — Fixes named but no linked summary.
- 2 — Fixes, summary links and announcement all specified.
- 3 — As adequate, and the specification says what happens when several fields fail at once.

If below 2: Rewrite each error as the action to take, then add the summary and its links. Show at recheck: The error specification.

**Untested behaviour is recorded rather than assumed**

Adequate evidence: A list of what was checked in a build and what could not be.

- 0 — Behaviour claimed without testing.
- 1 — Testing implied without a list.
- 2 — Verified and unverified items both listed.
- 3 — As adequate, and the list names which untested item is most likely to fail.

If below 2: Split your claims into two lists: observed in a build, and specified but untested. Show at recheck: The two lists.

### Portfolio contribution

An accessible field table is directly usable by an engineer and shows the level of specification a designer can own.

### Assigned resources

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, grouping controls, instructions, validating input and user notifications. Purpose: Supplies every requirement this lesson applies to the form. Effort: 60–90 selected min. Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than form content or persuasion; implemented behaviour still needs testing in a build. Fallback: R10.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on labels, instructions, error identification and error suggestion at level A and AA. Purpose: Names the criteria your rebuilt form is meeting so the mapping stays traceable. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; reading it is not conformance. Fallback: R41.

## Lesson 8: Images, icons and the words that replace them

Stable ID: m11-l08-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.

**Bring forward.** Your m08 screens, icons and any charts.

Alternative text is writing, not markup. Written badly it is noise; written well it is the only version of the image some people get.

### Learn

The first decision is what the image is for. An informative image adds something the surrounding text does not: a photograph showing what a class involves, a diagram carrying a relationship. Its alternative text must carry that same information in words, which is usually shorter than people expect and never begins with “image of”.

Decorative images add mood and no information, and announcing them wastes the reader's time. They take empty alternative text so assistive technology skips them entirely. The mistake is describing them helpfully, which produces a screen reader announcing “abstract green background pattern” between the price and the button.

A functional image is a control: an icon button, a logo linking home. Its alternative text is the action or destination — “Remove from shortlist”, “Home” — never the shape. This is the same rule as your m08 action labels: the person needs the outcome, not the picture.

Text baked into an image is invisible to screen readers, to translation, to search and to anyone who enlarges it. Prices, dates and offers set inside a promotional image are the common case, and the alternative text has to reproduce all of it — which is usually the argument for not putting the text in the image at all.

**Common misconception.** “Every image needs alt text describing it.” Every image needs a decision. Decorative images need empty alt text; describing them makes the experience worse, and long descriptions of photographs that add nothing are a common way of appearing to do the work.

### Worked example

Fourteen images and icons were classified. Two were informative: the class photograph, whose alt text became “Six people at a pottery wheel in a bright studio”, and the availability chart, whose alternative text carried the counts. Nine were decorative and took empty alt text, including the background pattern that had previously been announced. Three were functional: the shortlist heart became “Add to shortlist”, the logo became “Home”, and the filter icon became “Filters”. One promotional image had the price set inside it; the text was moved out of the image entirely rather than duplicated in alt text.

#### Images, icons and the words that replace them

Write alternative text for every image and icon in your design, deciding for each whether it carries information, is decorative, or is itself a control.

**Where to work:** Writing. If your prototype is a local HTML file you can add the alt attributes and check them; on paper, write the alt text beside each image in the specification.

- Starting material: Your screens with their images and icons.
- Create HaruCourse/Practice/m11-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Images, icons and the words that replace them

Input artifact: Your screens with their images and icons.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Every image classified informative, decorative or functional
- [ ] Alt text written for informative and functional images
- [ ] Empty alt specified for decorative images
- [ ] Any text inside images identified and moved out

## 1. Inventory and classify
- List every image, icon and illustration in your screens.
- Classify each informative, decorative or functional.
- Mark any image containing text.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the informative alt text
- Write what the image tells the reader, not what it looks like.
- Keep it as short as the information allows.
- Never start with image of or picture of.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Name the functional ones
- Give each icon control the name of its action or destination.
- Match the wording to your m08 action labels.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Handle decoration and embedded text
- Specify empty alt text for decorative images.
- Move any text out of images into real text.
- Where it cannot move, reproduce it fully in the alt text and record why.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Test by removal
- Read the screen with every image replaced by its alt text.
- Check nothing essential disappeared and nothing noisy appeared.
- Save the classification and the alt text.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Every image is classified into one of the three kinds: [evidence reference]
- Informative alt text carries information, not appearance: [evidence reference]
- Functional images are named by action: [evidence reference]
- Text inside images is identified and moved out: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional.

</details>

<details>
<summary>Hint 2</summary>

For each image, write what a reader would lose without it, then make that the alt text.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Every image is classified into one of the three kinds: A complete inventory with a classification per item, including icons. Informative alt text carries information, not appearance: Alt text stating what the image tells the reader, with no image-of prefixes. Functional images are named by action: Icon controls named by their action or destination, consistent with your action labels. Text inside images is identified and moved out: A list of images containing text, with the text moved into real text or fully reproduced with a reason.

**Bring forward:** An alt-text table with classifications is a small artefact that demonstrates you treat accessibility as writing rather than markup. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Inventory and classify (~20 min): List every image, icon and illustration in your screens. Classify each informative, decorative or functional. Mark any image containing text.
- Write the informative alt text (~30 min): Write what the image tells the reader, not what it looks like. Keep it as short as the information allows. Never start with image of or picture of.
- Name the functional ones (~20 min): Give each icon control the name of its action or destination. Match the wording to your m08 action labels.
- Handle decoration and embedded text (~25 min): Specify empty alt text for decorative images. Move any text out of images into real text. Where it cannot move, reproduce it fully in the alt text and record why.
- Test by removal (~25 min): Read the screen with every image replaced by its alt text. Check nothing essential disappeared and nothing noisy appeared. Save the classification and the alt text.

Pause after any step; save the artifact and next action.

**Free tool path.** Writing. If your prototype is a local HTML file you can add the alt attributes and check them; on paper, write the alt text beside each image in the specification.

### Output

Every image classified informative, decorative or functional; Alt text written for informative and functional images; Empty alt specified for decorative images; Any text inside images identified and moved out

### Checks

- What should informative alt text contain? Answer: The information the image carries, in words. Not a description of its appearance, and not a caption repeated from the surrounding text.
- Why do decorative images take empty alt text? Answer: So they are skipped. Describing them inserts noise between the things the reader actually needs.
- What is wrong with text inside an image? Answer: It is invisible to screen readers, translation and search, and it does not reflow when enlarged. The usual fix is to take the text out of the image.

### Rubric and remediation

**Every image is classified into one of the three kinds**

Adequate evidence: A complete inventory with a classification per item, including icons.

- 0 — No classification.
- 1 — Images classified but icons ignored.
- 2 — Everything classified including icons and illustrations.
- 3 — As adequate, and one image is reclassified after asking what it actually tells the reader.

If below 2: List everything visual and ask what each adds. If nothing, it is decorative; if it acts, it is functional. Show at recheck: The classified inventory.

**Informative alt text carries information, not appearance**

Adequate evidence: Alt text stating what the image tells the reader, with no image-of prefixes.

- 0 — Descriptions of appearance or filenames.
- 1 — Some informative text mixed with descriptions.
- 2 — All informative images carry their information in words.
- 3 — As adequate, and one alt text is shorter than the original description because the surrounding text already carried part of it.

If below 2: For each image, write what a reader would lose without it, then make that the alt text. Show at recheck: The alt text list.

**Functional images are named by action**

Adequate evidence: Icon controls named by their action or destination, consistent with your action labels.

- 0 — Icons named by shape.
- 1 — Some named by action.
- 2 — All functional images named by action or destination.
- 3 — As adequate, and the names match the visible labels used elsewhere for the same actions.

If below 2: Rename each icon control after what it does, using the same words as your m08 labels. Show at recheck: The functional names.

**Text inside images is identified and moved out**

Adequate evidence: A list of images containing text, with the text moved into real text or fully reproduced with a reason.

- 0 — Embedded text unnoticed.
- 1 — Identified but left with partial alt text.
- 2 — Moved out, or fully reproduced with the reason recorded.
- 3 — As adequate, and the decision references the reflow and translation cost.

If below 2: Find every image containing words and move those words into text; reproduce them only where the image cannot change. Show at recheck: The embedded-text list.

### Portfolio contribution

An alt-text table with classifications is a small artefact that demonstrates you treat accessibility as writing rather than markup.

### Assigned resources

- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The alternative text check. Purpose: Gives the self-runnable check and the classification this lesson applies. Effort: 15–25 selected min. Free reading, no account. Verified 2026-09-06. Preliminary only; it does not teach how to write good alternative text, which is the work here. Fallback: R28.
- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — The passages on how images relate to surrounding content and headings. Purpose: Places images in the page structure so alt text does not duplicate nearby text. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Structural semantics rather than content writing. Fallback: R14.

## Lesson 9: Motion, media and time limits

Stable ID: m11-l09-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.

**Bring forward.** Your m09 motion audit and reduced-motion pairs, and any media or timed states.

Automatic movement, missing captions and unannounced timeouts each exclude people completely rather than inconveniencing them.

### Learn

Automatically moving content — a carousel, an animated banner, a live-updating region — competes for attention and, for some people, prevents reading entirely. If it moves for more than a few seconds it needs a pause control, and the pause has to be reachable by keyboard and visible without hovering. This is one of the least-implemented requirements in ordinary products.

Rapid flashing is the one accessibility failure that can cause direct physical harm. If your design contains anything that flashes more than a couple of times a second — a loading effect, a video transition, an alert — it should not, and no visual justification outweighs that.

Captions and transcripts are content work, not a technical step. Captions serve deaf and hard-of-hearing people, and also everyone in a noisy room or without headphones; a transcript additionally serves people who prefer to read, who want to search the content, or whose connection cannot carry the video. If you cannot produce them, the honest response is not to publish the media as the only route to the information.

Time limits appear in more places than teams remember: a held place, a session timeout, a code that expires, a form that clears. Each needs warning before it expires, a way to extend where possible, and preservation of what the person had entered. This is your m07 payment work meeting the criterion that says so explicitly.

**Common misconception.** “Captions are the video platform's job.” Automatic captions are frequently wrong in ways that change meaning, particularly with names, numbers and accents. If the video carries information, someone has to check them, and that someone is on your team.

### Worked example

Three problems and three fixes. The class carousel rotated every four seconds with no pause; it was replaced with a static set of three cards, which also removed a motion problem for reduced-motion users. The introductory video had automatic captions that rendered the studio name as three different things; they were corrected by hand and a transcript was published beside the video. The held-place timer expired silently after ten minutes, losing the form; it now warns at two minutes, offers an extension, and preserves entered details either way. Nothing in the product flashes.

#### Motion, media and time limits

Audit your design for motion that plays without asking, media without alternatives, and time limits people cannot control, and specify a fix for each.

**Where to work:** Writing captions and transcripts by hand costs time and no money. Pause controls and timer warnings are specification work; test them in a local HTML file if you have one.

- Starting material: Your m09 motion work and any timed or media elements.
- Create HaruCourse/Practice/m11-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Motion, media and time limits

Input artifact: Your m09 motion work and any timed or media elements.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] An audit of automatic motion with a pause or removal decision
- [ ] Captions or a transcript specified for any media
- [ ] Time limits with warning, extension and preservation
- [ ] A confirmation that nothing flashes rapidly

## 1. Audit automatic motion
- List everything that moves without the person starting it.
- For each, decide: remove, or provide a visible pause control.
- Check the pause is keyboard reachable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Handle media
- List any audio or video in your product.
- Specify captions and a transcript, and who will write them.
- If neither is possible, provide the information in text instead.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Find the time limits
- List every timeout: held places, sessions, codes, forms.
- Specify a warning before expiry and an extension where possible.
- Specify that entered data survives expiry.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Check flashing and reduced motion
- Confirm nothing flashes more than a couple of times per second.
- Re-check your reduced-motion pairs still cover everything here.
- Test with the reduced-motion setting enabled.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write the decisions and who is responsible for captions.
- Note anything you could not fix and why.
- Save the audit with the fixes.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Automatic motion is removed or pausable: [evidence reference]
- Media has checked captions or a transcript: [evidence reference]
- Time limits warn, extend and preserve: [evidence reference]
- Flashing and reduced motion are both confirmed: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

List everything that moves on its own and decide each; a carousel with no pause is the usual offender.

</details>

<details>
<summary>Hint 2</summary>

Watch the video with the captions on and correct every error; names and numbers first.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Automatic motion is removed or pausable: A list of moving elements with a decision each, and a keyboard-reachable pause where kept. Media has checked captions or a transcript: Captions corrected by a person, or a transcript, or the information provided as text instead. Time limits warn, extend and preserve: Each timeout specified with warning timing, extension and data preservation. Flashing and reduced motion are both confirmed: A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.

**Bring forward:** Time-limit handling is rarely designed and easy to show: the warning, the extension and the preserved data make a small, convincing sequence. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Audit automatic motion (~25 min): List everything that moves without the person starting it. For each, decide: remove, or provide a visible pause control. Check the pause is keyboard reachable.
- Handle media (~30 min): List any audio or video in your product. Specify captions and a transcript, and who will write them. If neither is possible, provide the information in text instead.
- Find the time limits (~25 min): List every timeout: held places, sessions, codes, forms. Specify a warning before expiry and an extension where possible. Specify that entered data survives expiry.
- Check flashing and reduced motion (~25 min): Confirm nothing flashes more than a couple of times per second. Re-check your reduced-motion pairs still cover everything here. Test with the reduced-motion setting enabled.
- Record (~15 min): Write the decisions and who is responsible for captions. Note anything you could not fix and why. Save the audit with the fixes.

Pause after any step; save the artifact and next action.

**Free tool path.** Writing captions and transcripts by hand costs time and no money. Pause controls and timer warnings are specification work; test them in a local HTML file if you have one.

### Output

An audit of automatic motion with a pause or removal decision; Captions or a transcript specified for any media; Time limits with warning, extension and preservation; A confirmation that nothing flashes rapidly

### Checks

- What does automatically moving content require? Answer: A way to pause or stop it if it runs beyond a few seconds, reachable by keyboard and visible without hovering — or removal, which is often the better design anyway.
- Why are automatic captions insufficient? Answer: Because they misrender names, numbers and accents in ways that change meaning. If the video carries information, someone has to check them.
- What does a time limit owe the person? Answer: A warning before it expires, an extension where possible, and preservation of what they had entered. A silent expiry that clears a form is a designed loss.

### Rubric and remediation

**Automatic motion is removed or pausable**

Adequate evidence: A list of moving elements with a decision each, and a keyboard-reachable pause where kept.

- 0 — Automatic motion left uncontrolled.
- 1 — Pause added but only reachable by pointer.
- 2 — Each element removed or given a keyboard-reachable pause.
- 3 — As adequate, and one element was removed because it explained nothing.

If below 2: List everything that moves on its own and decide each; a carousel with no pause is the usual offender. Show at recheck: The motion decisions.

**Media has checked captions or a transcript**

Adequate evidence: Captions corrected by a person, or a transcript, or the information provided as text instead.

- 0 — Media published with no alternative.
- 1 — Automatic captions accepted unchecked.
- 2 — Captions checked or a transcript written, with ownership named.
- 3 — As adequate, and the transcript is offered as an alternative route rather than a fallback.

If below 2: Watch the video with the captions on and correct every error; names and numbers first. Show at recheck: The captions or transcript.

**Time limits warn, extend and preserve**

Adequate evidence: Each timeout specified with warning timing, extension and data preservation.

- 0 — Silent expiry.
- 1 — Warning specified without extension or preservation.
- 2 — All three specified for every timeout.
- 3 — As adequate, and the specification says what happens if the person is away when the warning appears.

If below 2: List every timer in the product and write the three behaviours for each. Show at recheck: The timeout specifications.

**Flashing and reduced motion are both confirmed**

Adequate evidence: A statement that nothing flashes rapidly and a re-check of reduced-motion coverage.

- 0 — Neither checked.
- 1 — One checked.
- 2 — Both checked and recorded.
- 3 — As adequate, and the reduced-motion test was run on a device with the setting enabled.

If below 2: Enable reduced motion, walk the product, and separately confirm nothing flashes. Show at recheck: The two confirmations.

### Portfolio contribution

Time-limit handling is rarely designed and easy to show: the warning, the extension and the preserved data make a small, convincing sequence.

### Assigned resources

- R64: [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) — The reduce value and where the setting lives on each platform. Purpose: Lets you test the reduced-motion behaviour on your own device. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only, and says nothing about media, captions or time limits. Fallback: R13.
- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria on pause, stop and hide, on flashing, on captions, and on timing adjustable. Purpose: Names the specific requirements this lesson satisfies. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; captions and transcripts remain content work it does not teach. Fallback: R41.

## Lesson 10: Listening to your own product

Stable ID: m11-l10-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.

**Bring forward.** Your heading outlines, alt text, form associations and key tables.

Reading about screen readers teaches you the concepts. Hearing your own product teaches you what your decisions actually produced.

### Learn

The assigned article is explicit about both halves of this lesson: how to run a basic screen-reader test, and what a sighted occasional tester may not conclude from it. Both matter. Running the test will show you concrete failures — an unlabelled field, an image announced as a filename, a status change nobody hears — and it will not tell you whether your product is usable for someone who navigates this way every day.

Five commands are enough to start. Navigating by heading tells you whether your outline works. Navigating by link and by form field tells you whether your labels carry. Read-all tells you the order and what is announced. Stop is what you will need most in the first ten minutes. Learning the whole command set is a different project.

Listen for absence rather than presence. The failures are usually silence where something happened: a filter applied and nothing announced, an error appearing with no notification, an icon button read as “button”. Your m09 focus rules and m11 form associations are exactly what these gaps test.

Say what your session establishes. It establishes that specific failures exist — that is real and useful. It does not establish that the product works, because you know where everything is, you can see the screen, and you are not using the software the way a daily user does. The catalog row for this reading says the same thing, and your write-up should repeat it.

**Common misconception.** “I tested with a screen reader, so the product is accessible for blind users.” You found some failures. A sighted person who can see the screen and knows the design is not simulating blindness, and a competent write-up says so in the same paragraph as the findings.

### Worked example

Twenty minutes with VoiceOver on the researcher's own phone. Navigating by heading confirmed the m06 outline worked. Six failures were found: the shortlist icon was announced as “button”, the availability dot was silent so full classes sounded identical to available ones, applying a filter announced nothing at all, the error summary was not announced when it appeared, one image was read as its filename, and the date group's question was not announced with its fields. Each mapped to a decision made earlier in the course. The write-up recorded the device, the software, the twenty minutes, and stated that no person who uses a screen reader daily had been involved.

#### Listening to your own product

Run one task with the screen reader already on your device, record what was announced and what was missing, and state plainly what your own session does and does not establish.

**Where to work:** The screen reader already on your device: NVDA on Windows, VoiceOver on Apple devices, TalkBack on Android. All are free and already installed or freely downloadable; no purchase and no account are involved.

- Starting material: Your structure, alt text and form specifications.
- Create HaruCourse/Practice/m11-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Listening to your own product

Input artifact: Your structure, alt text and form specifications.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] One task attempted with a screen reader, recorded
- [ ] A list of what was announced and what was missing
- [ ] Each failure mapped to the design decision behind it
- [ ] A statement of what your session does and does not establish

## 1. Read and set up
- Read the assigned article, including what an occasional tester cannot conclude.
- Turn on the screen reader for your platform and learn five commands.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Navigate by structure
- Move by heading through one screen and note what you hear.
- Move by link and by form field.
- Compare with your written outline.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Attempt the task
- Complete one full task listening rather than looking where you can.
- Record every silence where something happened.
- Record anything announced that was noise.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Map failures to decisions
- For each failure, name the earlier decision that caused it.
- Mark which are specification failures and which are build defects.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Write the boundary
- Record the device, software, version and duration.
- State that no daily screen-reader user was involved.
- Save the findings with the boundary statement.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- A real screen-reader session was run and recorded: [evidence reference]
- Missing announcements are listed specifically: [evidence reference]
- Failures map to earlier design decisions: [evidence reference]
- The limits of a self-run session are stated plainly: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Turn on the screen reader already on your device and attempt one task, writing what you hear.

</details>

<details>
<summary>Hint 2</summary>

For each failure write what you heard and what you should have heard.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A real screen-reader session was run and recorded: A record naming the software, device, duration and task attempted. Missing announcements are listed specifically: A list of silences and noise, each naming the element and what should have been said. Failures map to earlier design decisions: Each failure traced to a specification or a build defect. The limits of a self-run session are stated plainly: A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.

**Bring forward:** A screen-reader session with its boundary clearly stated is credible; the same session presented as proof of accessibility is not, and experienced reviewers can tell the difference immediately. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and set up (~25 min): Read the assigned article, including what an occasional tester cannot conclude. Turn on the screen reader for your platform and learn five commands.
- Navigate by structure (~20 min): Move by heading through one screen and note what you hear. Move by link and by form field. Compare with your written outline.
- Attempt the task (~35 min): Complete one full task listening rather than looking where you can. Record every silence where something happened. Record anything announced that was noise.
- Map failures to decisions (~25 min): For each failure, name the earlier decision that caused it. Mark which are specification failures and which are build defects.
- Write the boundary (~15 min): Record the device, software, version and duration. State that no daily screen-reader user was involved. Save the findings with the boundary statement.

Pause after any step; save the artifact and next action.

**Free tool path.** The screen reader already on your device: NVDA on Windows, VoiceOver on Apple devices, TalkBack on Android. All are free and already installed or freely downloadable; no purchase and no account are involved.

### Output

One task attempted with a screen reader, recorded; A list of what was announced and what was missing; Each failure mapped to the design decision behind it; A statement of what your session does and does not establish

### Checks

- What are the five commands worth learning first? Answer: Next heading, next link, next form field, read all, and stop. They test your outline, your labels and your announcement behaviour without learning the whole tool.
- What are you listening for? Answer: Absence. Silence where something changed, fields announced without labels, images read as filenames, and status that is never spoken at all.
- What does your own session establish? Answer: That specific failures exist, which is genuinely useful. It does not establish usability for daily screen-reader users, and the write-up must say so.

### Rubric and remediation

**A real screen-reader session was run and recorded**

Adequate evidence: A record naming the software, device, duration and task attempted.

- 0 — Not run.
- 1 — Run briefly without recording conditions.
- 2 — Run with conditions and observations recorded.
- 3 — As adequate, and structure navigation was used as well as reading straight through.

If below 2: Turn on the screen reader already on your device and attempt one task, writing what you hear. Show at recheck: The session record.

**Missing announcements are listed specifically**

Adequate evidence: A list of silences and noise, each naming the element and what should have been said.

- 0 — General impressions.
- 1 — Some failures named without the expected announcement.
- 2 — Each failure names the element and what was missing.
- 3 — As adequate, and the list distinguishes silence from misleading announcements.

If below 2: For each failure write what you heard and what you should have heard. Show at recheck: The failure list.

**Failures map to earlier design decisions**

Adequate evidence: Each failure traced to a specification or a build defect.

- 0 — Failures listed without causes.
- 1 — Causes guessed generally.
- 2 — Each traced to a decision or marked a build defect.
- 3 — As adequate, and at least one failure traces to a decision you made earlier in the course.

If below 2: For each failure, find the specification that should have prevented it. If none exists, that is the gap. Show at recheck: The mapped failures.

**The limits of a self-run session are stated plainly**

Adequate evidence: A written statement that a sighted occasional tester's session is preliminary and no daily user was involved.

- 0 — Findings presented as proof of accessibility.
- 1 — A vague acknowledgement of limits.
- 2 — The limit stated plainly with the conditions recorded.
- 3 — As adequate, and the statement names what testing with daily users would add.

If below 2: Copy the boundary the assigned article states and apply it to your own session in your own words. Show at recheck: The boundary statement.

### Portfolio contribution

A screen-reader session with its boundary clearly stated is credible; the same session presented as proof of accessibility is not, and experienced reviewers can tell the difference immediately.

### Assigned resources

- R40: [WebAIM: screen reader testing](https://webaim.org/articles/screenreader_testing/) — How to run a basic test, and what a sighted occasional tester may not conclude from it. Purpose: Supplies both the procedure and the boundary this lesson enforces. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Use the free software already on your device: NVDA, VoiceOver or TalkBack. Your own session never substitutes for testing with disabled participants. Fallback: R41.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The checks you can pair with a listening session. Purpose: Provides complementary self-checks so failures can be confirmed visually as well. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance. Fallback: R28.

## Lesson 11: Access in the Indian context

Stable ID: m11-l11-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.

**Bring forward.** Your m06 label stress test and your m08 screens.

Most accessibility guidance you have read is written for English-language, high-bandwidth, single-device contexts. Your learner and her users are frequently in none of those.

### Learn

The assigned Indian guidelines are the primary source available to you for this context, covering accessibility alongside local-language and mobile requirements. Comparing two of their requirements against your own work is a concrete exercise, and it will usually surface something the international guidance did not: a format assumption, a language assumption, or an expectation about connectivity.

Language is an access question. A person who reads Hindi or Tamil more comfortably than English meets an English-only interface as a barrier in the same sense as an unlabelled field. Full localisation may be beyond your project, and the honest intermediate steps are real: plain language, avoiding idiom, not embedding text in images, and making formats — dates, numbers, addresses — follow local convention.

Scripts have mechanical consequences you can test now. Indic scripts need more line height than Latin text of the same size, and clipping matras or conjuncts makes text unreadable rather than merely tight. Sorting order differs by language, so an alphabetical list is a different list. Input methods differ too, which affects field behaviour and what autocomplete can offer.

Connectivity and device sharing are access conditions. A product that only works on a fast connection excludes people at particular times and places rather than permanently, which is exactly the situational barrier this module started with. A shared family phone raises questions about staying signed in, notifications and what appears on a lock screen — questions your m07 authentication work opened and this lesson closes.

**Common misconception.** “Localisation comes after launch.” Layouts built to English string lengths, text baked into images and hard-coded date formats are decisions that make later localisation expensive. The cheap steps are design decisions available now.

### Worked example

Two requirements were compared. The first, on local-language support, exposed that dates were formatted in a way that assumed one convention and that the month names were English-only; both were changed. The second, on mobile, exposed a page weight that took eleven seconds to become usable on a throttled connection. Separately, a Hindi rendering of the navigation clipped matras until line height was increased, and the class list's alphabetical sort was noted as language-dependent and left with a recorded limitation. The shared-device question from m07 was revisited: notifications now say “a class you booked” rather than naming the class on the lock screen.

#### Access in the Indian context

Check your design against two named requirements from the Indian government guidelines and against language and bandwidth conditions your users will actually meet.

**Where to work:** The guidelines site with its free PDF manual, your browser's throttling, and hand-written text in a second script if your prototype cannot render one. No paid localisation service is required for any of this.

- Starting material: Your label work and current screens.
- Create HaruCourse/Practice/m11-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# Access in the Indian context

Input artifact: Your label work and current screens.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] Two named requirements compared against your design
- [ ] A language check covering formats, embedded text and plain wording
- [ ] A script rendering check with line height and clipping
- [ ] A slow-connection check with a recorded time to usable

## 1. Read and choose two requirements
- Open the assigned guidelines and choose two requirements relevant to your product.
- Write each in your own words.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Compare against your design
- Check your screens against each requirement.
- Record where you meet it, where you do not, and what would be needed.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Check language and formats
- Check date, number and address formats against local convention.
- Find any text embedded in images and move it out.
- Simplify wording that depends on idiom.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Check script and connection
- Render key labels in an Indic script and check for clipping.
- Increase line height where characters are cut.
- Load on a throttled connection and time when the page becomes usable.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Record
- Write what you fixed and what remains.
- Note where the international guidance and the Indian guidance differ.
- Save the comparison with the evidence.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- Two named requirements are compared with results: [evidence reference]
- Formats and embedded text are checked and fixed: [evidence reference]
- A second script was rendered and clipping checked: [evidence reference]
- Time to usable on a slow connection is recorded: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Choose two requirements that touch your product and walk your screens against each.

</details>

<details>
<summary>Hint 2</summary>

List every formatted value and every image containing words, then fix each.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Two named requirements are compared with results: Two requirements quoted in your own words with a met, unmet or partial result each. Formats and embedded text are checked and fixed: A check of date, number and address formats, and a list of text moved out of images. A second script was rendered and clipping checked: Labels rendered in an Indic script, with clipping identified and line height adjusted. Time to usable on a slow connection is recorded: A throttled load with a recorded time to first usable content.

**Bring forward:** This section distinguishes a designer who has worked with Indian and multilingual constraints from one who has read international guidance. Include the script and timing evidence. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Read and choose two requirements (~25 min): Open the assigned guidelines and choose two requirements relevant to your product. Write each in your own words.
- Compare against your design (~30 min): Check your screens against each requirement. Record where you meet it, where you do not, and what would be needed.
- Check language and formats (~25 min): Check date, number and address formats against local convention. Find any text embedded in images and move it out. Simplify wording that depends on idiom.
- Check script and connection (~25 min): Render key labels in an Indic script and check for clipping. Increase line height where characters are cut. Load on a throttled connection and time when the page becomes usable.
- Record (~15 min): Write what you fixed and what remains. Note where the international guidance and the Indian guidance differ. Save the comparison with the evidence.

Pause after any step; save the artifact and next action.

**Free tool path.** The guidelines site with its free PDF manual, your browser's throttling, and hand-written text in a second script if your prototype cannot render one. No paid localisation service is required for any of this.

### Output

Two named requirements compared against your design; A language check covering formats, embedded text and plain wording; A script rendering check with line height and clipping; A slow-connection check with a recorded time to usable

### Checks

- Why is language an accessibility question? Answer: Because a person who cannot read the interface cannot use it, whatever its contrast and focus behaviour. The barrier is the same kind; only the cause differs.
- What changes with a different script? Answer: Line height needs, character clipping, sorting order and input methods. A layout tuned to Latin text frequently cuts marks that carry meaning.
- How does a slow connection exclude people? Answer: By making the product unusable at particular times and places. It is a situational barrier with the same effect as a permanent one, and it is measurable with throttling.

### Rubric and remediation

**Two named requirements are compared with results**

Adequate evidence: Two requirements quoted in your own words with a met, unmet or partial result each.

- 0 — No comparison.
- 1 — Requirements named without checking your design.
- 2 — Both compared with specific results.
- 3 — As adequate, and one requirement produced a change to the design.

If below 2: Choose two requirements that touch your product and walk your screens against each. Show at recheck: The comparison.

**Formats and embedded text are checked and fixed**

Adequate evidence: A check of date, number and address formats, and a list of text moved out of images.

- 0 — Not checked.
- 1 — Formats checked but embedded text left.
- 2 — Both checked with fixes made.
- 3 — As adequate, and wording was simplified where it depended on idiom.

If below 2: List every formatted value and every image containing words, then fix each. Show at recheck: The format and text list.

**A second script was rendered and clipping checked**

Adequate evidence: Labels rendered in an Indic script, with clipping identified and line height adjusted.

- 0 — Not attempted.
- 1 — Attempted without checking for clipping.
- 2 — Rendered, clipping checked and adjusted.
- 3 — As adequate, and sorting order is noted as language-dependent.

If below 2: Write the labels by hand in the script if your prototype cannot render it, and record that the digital rendering is untested. Show at recheck: The script check.

**Time to usable on a slow connection is recorded**

Adequate evidence: A throttled load with a recorded time to first usable content.

- 0 — Not measured.
- 1 — Loaded slowly without timing.
- 2 — Timed with the profile recorded.
- 3 — As adequate, and one change was made because of the result.

If below 2: Throttle the connection, disable the cache, and time when the page first becomes usable rather than fully loaded. Show at recheck: The timing record.

### Portfolio contribution

This section distinguishes a designer who has worked with Indian and multilingual constraints from one who has read international guidance. Include the script and timing evidence.

### Assigned resources

- R43: [Guidelines for Indian Government Websites and Apps](https://guidelines.india.gov.in/) — Two requirements of your choice from the accessibility, local-language or mobile sections. Purpose: Supplies the India-specific requirements your learner's work will be held to. Effort: 45–60 selected min. Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Written for government sites; comparing two requirements is the exercise, not reading it end to end. Fallback: R41.
- R42: [W3C: localization versus internationalization](https://www.w3.org/International/questions/qa-i18n) — What internationalization involves: encoding, text expansion, formats and sorting. Purpose: Explains the mechanical consequences of language and script differences. Effort: 10–15 min. Free reading, no account. Verified 2026-09-06. A short definitional page with no layout guidance; the rendering and timing tests are the practical work. Fallback: R10.

## Lesson 12: An honest accessibility statement

Stable ID: m11-l12-v1. Core. Areas 11. Optional effort ~120 min.

**Objective.** Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.

**Bring forward.** Every check from this module and your barrier list.

A statement that claims compliance you have not tested is worse than none. A statement that says exactly what you know is a professional artefact.

### Learn

An accessibility statement is a factual document, and its usefulness comes from precision. What was checked, with which software, on what device, on what date. Which criteria you worked to. What you found and fixed. What you found and did not fix, and why. What you have not examined at all. Read by someone who relies on assistive technology, that document tells them whether to try, which is the point.

Known problems belong in it. Listing an unfixed problem is not an admission of incompetence; it is information a person can act on, and it commits you publicly to a repair. The alternative — silence — means someone discovers it by being unable to complete a task.

The tested-versus-specified distinction runs through this whole module. You specified associations, key behaviour and announcements; you tested some of them on your own device. Both are real; conflating them turns a design intention into a claim about a build.

Involving disabled participants is the gap this module cannot close by itself, and the plan is part of the deliverable: who you would recruit, through which organisations, with what lead time, and what it would cost in time or compensation. Your recruitment reading gives the lead times, and they are longer than for other participants — a month is realistic, six to eight weeks where cognitive disabilities are involved.

**Common misconception.** “We should not publish a statement until everything is fixed.” Then it will never be published. A dated, specific statement with known problems listed is more useful to a person deciding whether to attempt your product than a perfect one that does not exist.

### Worked example

The statement ran to one page. Tested: keyboard operation of the booking task on Windows with the pointer unavailable; a twenty-minute VoiceOver session on an iPhone; contrast measured for all text pairs; 200 per cent text; greyscale and colour-vision simulation; a throttled load. Found and fixed: nine items, listed. Found and not yet fixed: three, listed with intended dates — the date picker's arrow-key support, the unannounced filter change, and captions for the introductory video. Not tested at all: any use with switch access or voice control, any Android screen reader, and any session with a person who uses assistive technology daily. Target: WCAG 2.2 level AA, worked to and not tested for conformance. Plan: contact two local disability organisations, allow a month, and budget compensation.

#### An honest accessibility statement

Write an accessibility statement naming what you tested, what you found, what remains unfixed and what you have not tested at all, plus a plan for involving disabled participants.

**Where to work:** One page of plain text. The statement is writing, and the honesty is the whole deliverable.

- Starting material: All check results and your original barrier list.
- Create HaruCourse/Practice/m11-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

<details>
<summary>Copyable starter template</summary>

```text
# An honest accessibility statement

Input artifact: All check results and your original barrier list.
Source labels: real observation / hypothesis / simulation / self-pilot

## Output checklist
- [ ] A dated statement of what was tested, with what and on which device
- [ ] Lists of fixed, unfixed and untested items
- [ ] A stated target level with no untested conformance claim
- [ ] A plan for testing with disabled participants, with lead times

## 1. Collect the evidence
- Gather every check from this module with its date and conditions.
- Separate results into fixed, unfixed and untested.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 2. Write the statement
- State what was tested, with what software, on which device and when.
- List the known problems with intended repairs.
- State the target level and that conformance was not tested.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 3. Write the untested list
- Name what you have not examined, including assistive technologies you do not use.
- Say which untested area you think most likely hides a problem.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 4. Plan participant testing
- Read the assigned recruitment guidance on lead times and accommodations.
- Name the organisations or routes you would approach.
- Write the lead time and what compensation you would offer.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## 5. Check the language
- Remove any sentence claiming compliance, conformance or full accessibility.
- Add a contact route for someone who meets a barrier.
- Save the statement with the evidence behind it.

My work / artifact reference:
Evidence status and source:
Decision and reason:

## Review and handoff
- The statement names what was tested, how and when: [evidence reference]
- Fixed, unfixed and untested are listed separately: [evidence reference]
- No untested conformance is claimed: [evidence reference]
- A participant testing plan names routes, lead times and compensation: [evidence reference]
What remains untested:
Next action when I return:

```

</details>





<details>
<summary>Hint 1</summary>

Go back through the module and record the conditions for each check you ran.

</details>

<details>
<summary>Hint 2</summary>

Split your results into the three categories; anything you specified but did not verify goes in untested.

</details>



**Save:**

- Save the filled note as HaruCourse/Practice/m11-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The statement names what was tested, how and when: A dated list of checks with software, device and task named. Fixed, unfixed and untested are listed separately: Three distinct lists, with intended repairs for the unfixed items. No untested conformance is claimed: A stated target level with an explicit statement that conformance was not tested. A participant testing plan names routes, lead times and compensation: A written plan with organisations or routes, realistic lead times and an offer.

**Bring forward:** The accessibility statement is the module's case-study artefact and the clearest signal of professional judgement in the whole course: it is a document whose value comes from what it admits. Module handoff: Transfer learning to responsive web Project 2


### Practice and pause points

- Collect the evidence (~25 min): Gather every check from this module with its date and conditions. Separate results into fixed, unfixed and untested.
- Write the statement (~30 min): State what was tested, with what software, on which device and when. List the known problems with intended repairs. State the target level and that conformance was not tested.
- Write the untested list (~25 min): Name what you have not examined, including assistive technologies you do not use. Say which untested area you think most likely hides a problem.
- Plan participant testing (~25 min): Read the assigned recruitment guidance on lead times and accommodations. Name the organisations or routes you would approach. Write the lead time and what compensation you would offer.
- Check the language (~15 min): Remove any sentence claiming compliance, conformance or full accessibility. Add a contact route for someone who meets a barrier. Save the statement with the evidence behind it.

Pause after any step; save the artifact and next action.

**Free tool path.** One page of plain text. The statement is writing, and the honesty is the whole deliverable.

### Output

A dated statement of what was tested, with what and on which device; Lists of fixed, unfixed and untested items; A stated target level with no untested conformance claim; A plan for testing with disabled participants, with lead times

### Checks

- Why list unfixed problems publicly? Answer: Because it tells a person whether to attempt the task and commits you to a repair. The alternative is that they discover it by failing.
- What is the difference between a target and a claim? Answer: A target is what you worked to; a claim is what you tested. Stating the target honestly is normal practice, and claiming untested conformance is not.
- Why does the plan for participant testing belong here? Answer: Because it is the gap self-testing cannot close. Naming the route, the lead time and the cost turns an intention into something that can actually be scheduled.

### Rubric and remediation

**The statement names what was tested, how and when**

Adequate evidence: A dated list of checks with software, device and task named.

- 0 — General claims about accessibility.
- 1 — Checks named without conditions or dates.
- 2 — Each check with software, device and date.
- 3 — As adequate, and the duration of each test is included so the depth is visible.

If below 2: Go back through the module and record the conditions for each check you ran. Show at recheck: The tested list.

**Fixed, unfixed and untested are listed separately**

Adequate evidence: Three distinct lists, with intended repairs for the unfixed items.

- 0 — One undifferentiated list, or only fixed items.
- 1 — Fixed and unfixed listed; untested omitted.
- 2 — All three separated with repairs named for the unfixed.
- 3 — As adequate, and the untested list names the area most likely to hide a problem.

If below 2: Split your results into the three categories; anything you specified but did not verify goes in untested. Show at recheck: The three lists.

**No untested conformance is claimed**

Adequate evidence: A stated target level with an explicit statement that conformance was not tested.

- 0 — Compliance or conformance claimed.
- 1 — Ambiguous wording that implies conformance.
- 2 — Target stated and the absence of a conformance test stated plainly.
- 3 — As adequate, and the statement says what a conformance evaluation would require.

If below 2: Search the statement for compliant, conformant and accessible-as-a-claim, and rewrite each as what you worked to and what you tested. Show at recheck: The revised statement.

**A participant testing plan names routes, lead times and compensation**

Adequate evidence: A written plan with organisations or routes, realistic lead times and an offer.

- 0 — No plan.
- 1 — An intention without routes or timings.
- 2 — Routes, lead times and compensation all stated.
- 3 — As adequate, and the plan accounts for accommodations the sessions themselves will need.

If below 2: Use the assigned lead times — up to a month, longer for cognitive disabilities — and name two real routes you could approach. Show at recheck: The plan.

### Portfolio contribution

The accessibility statement is the module's case-study artefact and the clearest signal of professional judgement in the whole course: it is a document whose value comes from what it admits.

### Assigned resources

- R66: [W3C: How to Meet WCAG 2.2 (quick reference)](https://www.w3.org/WAI/WCAG22/quickref/) — The criteria you worked to, revisited to confirm what your statement can and cannot say. Purpose: Keeps the statement's target accurate and its claims bounded. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. An index of the standard; conformance is a property of a tested build, not of a design that consulted the criteria. Fallback: R41.
- R52: [GOV.UK: finding user research participants](https://www.gov.uk/service-manual/user-research/find-user-research-participants) — Recruiting disabled participants, lead times and accommodations. Purpose: Supplies realistic timings and requirements for the testing this module could not do. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. It advises contacting organisations at least a month ahead, longer where cognitive disabilities are involved, and gives no compensation amounts. Fallback: R08.
