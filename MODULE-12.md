# Web foundations and responsive behavior

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.

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

**Where to practise:** Build nothing yet — this lesson watches a page that already exists in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: Any Chromium browser's developer tools, which are free and installed already. No account, extension or performance service is required.

- Starting material: A browser and any page you can load repeatedly.
- Create HaruCourse/Practice/m12-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the sequence

- Read the assigned introduction to how the web works.
- Write the stages of a page load in your own words.

**You should end up with:** The stages of a page load written in your own words, in order.

Worksheet fields for this step:

- The stages of a page load, in your own words — Ask for it, get it back, read it, ask for the things it mentions, draw it, let the person use it. Six short lines is plenty.

<details>
<summary>Help with this step</summary>

- **Request:** Your browser asking a server for one file. A page is never one request; it is one request that leads to many more.
- **Parse:** The browser reading the HTML it received and working out what it says. It is during this that it discovers everything else it has to ask for.
- **Render:** Drawing the page on screen. It can begin before everything has arrived, which is why what you put first matters so much.

Stuck starting? Write the six stages as six short sentences without looking anything up, then read the assigned introduction and correct them.

Is it enough? Your list says what happens in order, and you could explain it to somebody without using the word optimisation.

</details>

#### 2. Trace a real load

**See it first.** Made-up example. Tracing a tool-library page for the first time, and measuring a page the browser already had.

- **What I did:** Opened developer tools, clicked Network, reloaded the page. Four requests, 40 kilobytes, 200 milliseconds. I wrote it down and thought the page was in excellent shape.
- **What looked odd:** Four requests for a page with nine photographs on it. The numbers did not match what I could see.
- **What was happening:** My browser already had almost everything from the last time I looked at the page. It was asking for four things and reusing the rest from its own store.
- **What I changed:** Ticked Disable cache at the top of the panel, left developer tools open, and reloaded again.
- **What it actually was:** 21 requests, 2.6 megabytes, 3.1 seconds. The same page, measured as a first-time visitor meets it rather than as I meet it.

**The wrong turn:** The wrong turn is measuring with the cache on, which is the default and which flatters every page you have visited before. The numbers look excellent and describe nobody but you.

**What it costs:** Disabling the cache means every reload is slow while you work, which is tedious. It is the only way the numbers describe a new visitor.

**Still unknown:** Still unknown: what a phone on a real network does with the same page. The desktop numbers are a floor, and the next step makes them more honest rather than making them true.

- Open the network tab, disable the cache and reload a real page.
- Record the number of requests, the total size and the time.
- Note which requests are images, fonts, scripts and styles.

**You should end up with:** One real page load traced, with the number of requests, the total bytes, the time, and how that splits by kind.

Worksheet fields for this step:

- Which page you traced, and in which browser
- How many requests, how many bytes in total, and how long
- How that splits into documents, styles, fonts, scripts and images — The filter buttons at the top of the network panel do this for you. Write the counts and the biggest item in each group.

<details>
<summary>Help with this step</summary>

- **Developer tools:** A panel built into your browser. F12 opens it on Windows, or right-click the page and choose Inspect. It is free, already installed, and needs no account.
- **The network panel:** The tab that lists every request the page made, with its size and how long it took. It shows the real sequence rather than the intended one.
- **Disable cache:** A tickbox at the top of the network panel. With it off, your browser reuses files it already has and the page looks far faster than it is for a new visitor.

Stuck starting? Press F12, click the Network tab, tick Disable cache, then reload the page with developer tools still open.

Is it enough? Your request count is more than a handful, which means you measured it as a stranger would meet it.

</details>

#### 3. Throttle it

- Set a slow connection profile and reload.
- Record when the first text appeared and when the page became usable.
- Note anything that shifted position as it loaded.

**You should end up with:** The same page reloaded on a throttled connection, with when text first appeared, when it became usable, and anything that moved.

Worksheet fields for this step:

- Which throttling profile you chose
- When the first readable text appeared
- When the person could actually do something, and what that something was
- Anything that jumped or moved as the rest arrived

<details>
<summary>Help with this step</summary>

- **Throttling:** Telling the browser to pretend the connection is slow. It is a dropdown in the network panel, usually offering profiles like Slow 4G.
- **Time to usable:** When the person could do something, not when loading stopped. It is the number that describes the experience.
- **Layout shift:** Content jumping as something arrives late, usually an image with no reserved space. People tap the wrong thing because of it.

Stuck starting? Choose a slow profile in the throttling dropdown, reload, and watch the screen rather than the numbers.

Is it enough? You have two separate times written down, and they are different from one another.

</details>

#### 4. Find the design-owned costs

- List every request that exists because of a design decision.
- Identify two you could remove or reduce without changing the product.

**You should end up with:** Every request that exists because of a design decision, and two you could reduce without changing what the product does.

**Try it with help.** Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

- A third typeface file, 78 kilobytes, used only by the quotation on the home page.
  - **a design decision** — Somebody chose three typefaces in a design file. Nobody can make the third one free; it can only be removed, and that is a design change.
  - an engineering decision — How the font is loaded is an engineering matter. That there are three of them is not.
  - the content itself — The quotation is content. The typeface it is set in is a choice about the quotation.
- A photograph at the top of the page, 1.8 megabytes, sitting above every piece of text.
  - **a design decision** — Its size can be reduced by engineering, and its position above all the text is why nothing readable appears until it arrives. The position is a design decision and it dominates.
  - an engineering decision — Compressing it is theirs. Putting it in front of the words is yours.
  - the content itself — A decorative header photograph is not what anybody came for.
- A JavaScript library, 130 kilobytes, providing the date picker and four things nobody uses.
  - a design decision — You asked for a date picker. Which library provides it is not a design choice.
  - **an engineering decision** — Choosing, replacing or trimming a library is engineering work, and you can raise it without owning it.
  - the content itself — Nothing here is content.
- Nine photographs of the actual tools, one per listing, at 40 kilobytes each.
  - a design decision — Their size and format are design-adjacent. That people want to see the drill before borrowing it is not a decision anybody is going to reverse.
  - an engineering decision — Loading them only when scrolled to is an engineering choice, and it does not change that they belong to the page.
  - **the content itself** — This is what the page is. Weight that is the point of the page is the last thing to attack.
- An icon font, 96 kilobytes, from which the page uses six icons.
  - **a design decision** — Six icons do not need a set of four hundred. Which icons the design uses, and whether they come as a set, is yours.
  - an engineering decision — They may well suggest a better delivery. The number of icons the design depends on is decided before that.
  - the content itself — Icons decorate and label the content; they are not it.
- Three tracking scripts, 60 kilobytes together, none of which draws anything.
  - a design decision — Nothing in the design asked for them, and nothing about them appears on screen.
  - **an engineering decision** — They arrive through decisions about measurement and tooling. Worth raising, and not yours to remove.
  - the content itself — They draw nothing and tell the reader nothing.

**Then:** Now mark your own request list the same way, and take your two findings from the design column.

**What to watch for:** The tool photographs are the case to notice. Weight that is the reason the page exists is not the place to economise; the third typeface and the icon set are, because nobody would miss them.

Worksheet fields for this step:

- Every request that exists because of a design decision — Typefaces, photographs, icons, decorative images, anything chosen in a design file rather than written in code.
- Two you could remove or reduce without changing what the product does

<details>
<summary>Help with this step</summary>

- **Design-owned cost:** Weight that exists because of a choice made in a design file: a typeface, a photograph, an icon set. Nobody can optimise it away without changing the design.
- **Engineering-owned cost:** Weight that comes from how the thing was built: libraries, bundles, duplicated code. It is real and it is not yours to change here.

Stuck starting? Go down your request list and mark each row design, engineering or content before choosing anything.

Is it enough? Both findings come from the design column, and you could make either one yourself.

</details>

#### 5. Record

**See it first.** Made-up example. Writing up two findings from a tool-library trace, and writing them as somebody else’s work.

- **What I wrote first:** “Optimise the font loading strategy” and “implement lazy loading for below-the-fold images”. Both are real improvements and both sounded properly technical.
- **What happened to them:** They went onto an engineering list behind fourteen other things and stayed there. Nobody disagreed with them; nobody had a reason to do them this month.
- **What I actually had:** Three typefaces loading and two in use. A 1.8 megabyte photograph sitting above every word on the page.
- **What those look like as design changes:** “Remove the third typeface from the design; it is used once, on the home page quotation.” “Move the header photograph below the first paragraph so the text can be read while it loads.”
- **What changed:** Both were things I could do in my own file that afternoon. The first needed nobody’s permission; the second needed one conversation about the home page.

**The wrong turn:** The wrong turn is translating your own findings into engineering language, because it sounds more credible. What it does is hand away the two changes you were in a position to make.

**What it costs:** Written as design changes, the findings are smaller and less impressive, and they do not cover the framework or the tracking scripts. Those remain worth raising, by somebody who owns them.

**Still unknown:** Still unknown: how much time either change actually saves. The trace tells me the weight and the order, not what the saving will be once both are done.

- Write the two findings as design changes, not engineering tasks.
- Save the request list and the timings.

**You should end up with:** The two findings written as design changes, the evidence saved, and the repair the Check questions asked for.

Worksheet fields for this step:

- Your two findings written as design changes rather than engineering tasks
- Where you saved the request list and the timings — A screenshot of the network panel is enough. Note its file name; it stays in your own folder.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Written as a design change:** Something you can do in your own file: remove the third typeface, move the photograph below the first paragraph, use six icons rather than a set.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take finding one and finish this sentence: “in the design file, I would …”.

Is it enough? Neither finding needs anybody else in order to be started.

</details>

**Save and continue.** Saved for you: Your stages, the request counts, the timings and the two findings save as you type, on this device first and then online. Kept outside the app: The screenshot of the network panel stays in your own folder. Note its file name in step 5; nothing about the traced page is uploaded. What your creator sees: Your creator reads the two findings and whether they are things you could do yourself. That is the difference between a trace and a complaint. Your next action: Open Your work and choose Ready for review. The next lesson builds one page of your own, in markup that means something.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the sequence as a list and add one sentence per stage saying what the browser is doing.

</details>

<details>
<summary>Hint 2</summary>

Reload with the cache disabled and record the totals from the network tab.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What happens between a tap and a page.
Task: Trace one real page load from request to rendered content, name each stage, and identify the two stages your design decisions can affect.
Challenge one thing at a time, and start with the mistake this lesson is about: “Performance is the engineer's problem.” Engineers optimise what exists. The number of typefaces, the size of the hero image and whether the design can show anything before the images arrive are decided in the design, and they usually dominate.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the written sequence and ask whether the load stages are named in the learner's own words. Look at the trace record and ask whether A real trace records requests, sizes and times. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build one page of your product as a real HTML file in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A text editor and a browser. Disabling the stylesheet is a single browser setting or a one-line change; no extension, framework or build tool is needed.

- Starting material: Your m11 outline and region map, and a text editor.
- Create HaruCourse/Practice/m12-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read and plan the markup

- Read the assigned HTML module sections on structure and semantics.
- Map your m11 outline onto heading elements and landmarks.

**You should end up with:** Your Module 11 outline carried across with levels, and an element chosen for each piece of content.

Worksheet fields for this step:

- Your Module 11 outline, with the heading level beside each line — You already decided these levels. This step copies them across rather than deciding them again.
- For each piece of content: the element whose shape matches it

<details>
<summary>Help with this step</summary>

- **Semantic element:** One whose name says what the content is: a heading, a list, a table, a button. The name is what assistive technology, search and translation read.
- **Generic container:** A box with no meaning at all. It is the right choice when something is purely for layout and the wrong one everywhere else.
- **Landmark:** A named region of the page: banner, navigation, main, footer. It is how somebody jumps past the menu to the content.

Stuck starting? Copy your Module 11 outline into the first field and write the level beside each line before choosing any element.

Is it enough? Every piece of content has an element named, including the ones that are just paragraphs.

</details>

#### 2. Build the page

**See it first.** Made-up example. Building the tool detail page, and using a link for something that was not going anywhere.

- **What I built:** The Reserve control as a link, styled to look like a button. On screen it was indistinguishable from the real thing, and it worked when clicked.
- **Why I did it:** The link was what the template had. Styling it was one line, and I was thinking about how it looked rather than what it was.
- **What broke:** From the keyboard, enter activated it and the space bar did nothing. A button responds to both; a link responds only to enter. People who work by keyboard press space on buttons.
- **What else was wrong:** It was announced as a link, so somebody listening was told they were about to go somewhere. They were about to reserve a drill.
- **What I changed:** Made it a button. The styling stayed exactly the same and two behaviours came back that I had not written a line of code for.

**The wrong turn:** The wrong turn is choosing the element by how it will look, because styling makes any element look like any other. What you lose is the behaviour that came free with the right one.

**What it costs:** Using the right element sometimes means undoing styling that assumed the wrong one, which is fiddly on a page you have already built.

**Still unknown:** Still unknown: whether anything else on the page is the wrong element underneath its styling. The unstyled reading in the next step is what finds those.

- Write the page using elements that match the content's shape.
- Use a button for actions and a link for navigation.
- Include the real content, not placeholder text.

**You should end up with:** One page built in a file of your own, using real content, with any trouble and its recovery written down.

**Try it with help.** Six controls from a made up tool-library page. For each one, decide what it should be.

- Reserve this drill, which holds the item for two hours and stays on the same page.
  - **a button** — Something happens and you stay where you are. That is a button, and it responds to both enter and the space bar.
  - a link — Nobody is going anywhere. Announced as a link, it tells a listener the opposite of what it does.
  - plain text — It is the main action on the page.
- See other dates, which opens a different page listing every available slot.
  - a button — A button says something will happen here. This takes the person somewhere else, which is worth knowing in advance.
  - **a link** — It goes somewhere, so it is a link, and it can be opened in a new tab like any other.
  - plain text — It is a route to another page and has to be reachable.
- A filter control that narrows the list on the same page.
  - **a button** — It changes what is on this page rather than moving anywhere. The keyboard behaviour that comes with a button is exactly what filtering needs.
  - a link — This is the commonest version of the mistake, because filters often carry a web address. The person is not navigating; they are acting.
  - plain text — It has to be operable.
- The words On loan beside an item, which say its current state.
  - a button — Nothing happens when you press it, and making it pressable invites people to try.
  - a link — It leads nowhere.
  - **plain text** — Status is information. Not everything in a list is a control, and marking information as a control is its own failure.
- The library logo at the top, which takes you to the home page.
  - a button — It moves you to another page, which is navigation.
  - **a link** — A link, announced as Home rather than as the name of the logo file.
  - plain text — It is the usual route back to the start and has to work.
- A control that expands the safety notes underneath it, on the same page.
  - **a button** — It changes this page and goes nowhere. It also needs to say whether it is currently open, which a button can carry and a link cannot.
  - a link — It is often built as one because it looks like a small piece of text. Nothing about it navigates.
  - plain text — It has to be operable and announceable.

**Then:** Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

**What to watch for:** The filter is the one that catches people out, because filters often have a web address behind them. The question is what the person is doing, not what the technology happens to use.

Worksheet fields for this step:

- Where the file lives, and what you called it — A folder of your own, and a name ending in .html. Double-clicking it opens it in your browser; no server is involved.
- Which real content you used, rather than placeholder text — Real content breaks layouts that placeholder text survives, which is the point of using it.
- Anything that went wrong and how you got past it — A blank page, text running together, a tag you forgot to close. Writing the recovery down is worth as much as the page.

<details>
<summary>Help with this step</summary>

- **HTML file:** An ordinary text file whose name ends in .html. Double-click it and your browser opens it. Nothing is installed and no server is running.
- **Button and link:** A link goes somewhere; a button does something. They behave differently from a keyboard, and swapping them breaks that behaviour silently.

Stuck starting? Make a folder, save a file called index.html in it, type the page, then double-click the file to see it.

Is it enough? The page opens in your browser and shows your own content, however plain it looks.

</details>

#### 3. Read it without styling

**See it first.** Made-up example. Reading a tool-library page unstyled, and putting the styling back one rule at a time.

- **What it looked like:** Without the stylesheet, the three tool names ran together as one paragraph, the price comparison was a wall of numbers, and the status text sat nowhere in particular.
- **What I did first:** Added a rule giving the tool names some space. It looked right again in about a minute.
- **Why that was the wrong move:** The names ran together because they were three boxes with no meaning, not because they lacked spacing. My rule fixed my eyes and changed nothing for anybody reading the markup.
- **What the real repairs were:** The names became a list, which separates them for everybody. The numbers became a table with header cells, so each figure is announced with what it is. The status text moved inside the item it describes.
- **What happened when I put the stylesheet back:** Two of my old rules were no longer needed at all, because the elements were now doing the work I had been doing by hand.

**The wrong turn:** The wrong turn is repairing the unstyled reading with styling, which is the fastest way to make the symptom disappear and the fault permanent.

**What it costs:** Changing elements on a page you have already styled means some of your rules stop applying and have to be rewritten. Usually there are fewer of them afterwards.

**Still unknown:** Still unknown: whether the table reads well when announced cell by cell. It is correctly marked up, which is not the same as being easy to listen to.

- Disable the stylesheet and read the page top to bottom.
- Mark anything that loses meaning or order.
- Fix by changing elements, not by adding styling back.

**You should end up with:** The page read from top to bottom with the styling off, with everything that lost meaning fixed by changing elements.

Worksheet fields for this step:

- How you turned the styling off — Comment out the stylesheet link, or delete it for a minute and put it back. Both are a single line.
- Everything that lost its meaning or its order
- What you changed, by changing elements rather than adding styling back

<details>
<summary>Help with this step</summary>

- **Unstyled reading:** The page with its stylesheet removed. It is what a screen reader, a search engine, a translation tool and reader mode effectively see.
- **Fixing by element:** Changing what something is rather than how it looks. Adding styling back hides the problem again without solving it.

Stuck starting? Comment out the stylesheet link, reload, and read the whole page aloud before changing anything.

Is it enough? Every fix in this step changed an element, and none of them added a style rule.

</details>

#### 4. Check headings and landmarks

- Confirm one page title and no skipped levels.
- Confirm the main content can be reached directly.
- Run the applicable preliminary checks.

**You should end up with:** One page title, no skipped levels, main content directly reachable, and the Module 11 checks re-run on a real page.

Worksheet fields for this step:

- One page title, no skipped levels: what you found
- How somebody reaches the main content directly
- Which Module 11 checks you re-ran on this real page, and what changed — Keyboard, contrast and greyscale all work on a real page in a way they could not on a drawing.

<details>
<summary>Help with this step</summary>

- **Re-running a check:** Doing on a real page what you could only specify on a drawing. Keyboard operation, contrast and greyscale all become testable here.
- **Specification catching up with the build:** The moment a decision you wrote down earlier is either confirmed or found to have never been applied.

Stuck starting? Tab through the whole page from the address bar, before running anything else.

Is it enough? At least one Module 11 decision has been confirmed or found missing on the real page.

</details>

#### 5. Record

- List the mistakes the rebuild revealed.
- Save the page and the unstyled reading notes.

**You should end up with:** The mistakes the rebuild revealed about your earlier screens, and the repair the Check questions asked for.

Worksheet fields for this step:

- The mistakes the rebuild revealed about your earlier screens
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What the build reveals:** Things a drawing cannot show: a control that cannot be pressed with the space bar, a table with no header cells, a status nobody can hear.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Compare the page you built with the screen you drew, and list where they had to differ.

Is it enough? The list is about your earlier decisions rather than about the difficulty of writing HTML.

</details>

**Save and continue.** Saved for you: Your element plan, the build notes, the unstyled findings and the checks save as you type, on this device first and then online. Kept outside the app: The HTML file lives in your own folder and is never uploaded. Note the folder in step 2 so later lessons can find it; Module 12 builds on this same file. What your creator sees: Your creator reads what the rebuild revealed about your earlier screens. Those findings are the reason this module sits where it does. Your next action: Open Your work and choose Ready for review. The next lesson styles this page using the tokens you wrote in Module 8.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Go through the page asking what each block of content is, then use the element that means that.

</details>

<details>
<summary>Hint 2</summary>

Compare the built page against your outline line by line and correct the levels.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: HTML that means something.
Task: Build one page of your product in semantic HTML, with the heading outline and regions from m11, and verify the structure without looking at the styling.
Challenge one thing at a time, and start with the mistake this lesson is about: “It looks the same, so the markup does not matter.” It looks the same to you. To a screen reader, a search engine, a translation tool and a browser's reader mode, a page of generic containers has no structure at all.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the revised markup and ask whether elements match the content's shape. Look at the heading and landmark check and ask whether headings and landmarks follow the m11 outline. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build a stylesheet for the page you built last lesson in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A text editor, a browser and its element inspector. No preprocessor, framework or build step is required, and avoiding them at this stage is deliberate: you are learning what the browser does.

- Starting material: Your built page and token sheet.
- Create HaruCourse/Practice/m12-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the fundamentals

- Read the assigned CSS sections on the box model, flow and the cascade.
- Write the box model in your own words with a diagram.

**You should end up with:** The box model and normal flow written in your own words, with a drawing you made yourself.

Worksheet fields for this step:

- The box model in your own words — Content, then padding around it, then a border, then margin outside that. Draw it on paper and describe your drawing here.
- What normal flow does before you change anything

<details>
<summary>Help with this step</summary>

- **Box model:** Every element is a box: the content, padding inside the edge, the border on the edge, and margin outside it. Almost every width surprise comes from this.
- **Normal flow:** What the browser does before you tell it anything: blocks stack downward, text wraps along lines. Layout modes are changes to this, not replacements for it.
- **Box sizing:** Whether a width you set includes the padding and border or sits inside them. Setting it to include them once, at the top, prevents most of the surprises.

Stuck starting? Draw four nested rectangles on paper and label them content, padding, border, margin. Then write what you drew.

Is it enough? You could explain to somebody why a box can end up wider than the width you gave it.

</details>

#### 2. Declare your tokens

**See it first.** Made-up example. Moving a tool-library token sheet into a stylesheet, and renaming everything on the way.

- **What I did:** Declared the colours and spacing at the top, and gave them names that felt natural in code: --grey-light, --pad-small, --font-big.
- **Why it felt sensible:** The documentation names were longer, and shorter names are quicker to type. Nobody was going to read the stylesheet but me.
- **What broke a fortnight later:** Somebody asked which token the quiet caption used. The documentation says --surface-quiet. The stylesheet says --grey-light. Neither document mentions the other, and they had already drifted: --grey-light had been darkened and the sheet had not.
- **What I changed:** Renamed every property to match the documentation exactly, character for character, and left the shorter names nowhere at all.
- **What that bought:** The stylesheet and the token sheet can now be compared by searching for the same word, which is how anybody will ever notice they have drifted apart.

**The wrong turn:** The wrong turn is renaming tokens for the convenience of typing. It creates two vocabularies for one set of decisions, and they drift quietly because nothing connects them.

**What it costs:** Documentation names are longer and less comfortable to type, and you will resent them for the first afternoon.

**Still unknown:** Still unknown: whether the documentation names are good ones. They are the ones in use, and making the stylesheet agree with them is the fix available today.

- Write your token sheet as custom properties at the top of the stylesheet.
- Use the same names as your documentation.
- Style the page referring to them, never to raw values.

**You should end up with:** Your Module 8 tokens declared as custom properties with the same names, and any raw value you used written down with its reason.

Worksheet fields for this step:

- The custom properties you declared, with the same names as your documentation
- Any place you used a raw value instead of a token, and why — There are legitimate reasons. Writing them down is how a token sheet stays honest.

<details>
<summary>Help with this step</summary>

- **Custom property:** A named value you declare once and use everywhere: a colour, a spacing step, a type size. Changing it in one place changes everything that referred to it.
- **Raw value:** A number typed directly into a rule. Each one is a decision made in a place nobody will look at again.

Stuck starting? Open your Module 8 token sheet beside the stylesheet and copy the names across exactly.

Is it enough? Every name in the stylesheet could be found by searching your documentation for the same word.

</details>

#### 3. Diagnose a surprise

- Find something that does not look as you expected.
- Use the inspector to see which rule won and what it overrode.
- Write the explanation before changing anything.

**You should end up with:** One thing that surprised you, what the inspector showed, and your written explanation, produced before any fix.

**Try it with help.** Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

- A card given a width of 300 pixels measures 340 on screen, and it has 20 pixels of padding on each side.
  - **the box model** — The width was applied to the content, and the padding was added outside it. Setting box sizing to include padding makes 300 mean 300.
  - the cascade — Only one rule is setting the width. Nothing is competing.
  - inheritance — Width is not inherited from anywhere.
- A heading refuses to change colour, and the inspector shows your rule struck through with another one above it.
  - the box model — Nothing here is about size or spacing.
  - **the cascade** — The struck-through rule is the panel telling you it lost. A more particular selector elsewhere is winning, and the inspector names it.
  - inheritance — The colour is being set directly rather than passed down.
- You set the typeface once on the root and every paragraph, list and heading uses it without being told.
  - the box model — Nothing about boxes is involved.
  - the cascade — No two rules are competing. One rule is reaching many elements.
  - **inheritance** — Typeface, colour and line height pass down to everything inside. This is the behaviour that makes setting them once at the top the right move.
- Two stacked paragraphs have a 24-pixel gap between them, though each has a 24-pixel margin above and below.
  - **the box model** — Vertical margins between stacked blocks collapse into the larger of the two rather than adding up. It is part of how the box behaves in normal flow.
  - the cascade — Both rules applied exactly as written.
  - inheritance — Margins are not inherited.
- A button inside a dark panel keeps the panel’s pale text colour even though the button has a white background.
  - the box model — Nothing about the box is wrong; the colours are.
  - the cascade — No rule is competing for the button’s colour. Nothing set one.
  - **inheritance** — The pale colour is arriving from the panel, because nothing overrode it on the button. Inherited values are easy to miss precisely because no rule mentions them.
- A colour set in one rule is beaten by a shorter, apparently less particular rule in another file.
  - the box model — Nothing about boxes is involved.
  - **the cascade** — Something in that rule is raising its weight, and the inspector will show it. The cascade covers importance and order as well as particularity.
  - inheritance — Both rules are setting the value directly.

**Then:** Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

**What to watch for:** The inherited button colour is the one that catches people out. Nothing in any rule mentions it, so searching the stylesheet finds nothing and the inspector finds it in seconds.

Worksheet fields for this step:

- What did not look the way you expected
- What the inspector showed: which rule won, and what it crossed out — Select the element, look at the Styles panel. Rules that lost are shown struck through.
- Your explanation, written before the fix

<details>
<summary>Help with this step</summary>

- **The inspector:** Select an element in developer tools and the Styles panel lists every rule affecting it, with the ones that lost struck through. It answers which rule won without guessing.
- **Specificity:** How particular a selector is. A more particular rule beats a less particular one regardless of which came first, which is why order alone does not explain a conflict.
- **Inheritance:** Some values pass down to everything inside: colour, font, line height. It is why setting them once at the top is usually right.

Stuck starting? Right-click the element that surprised you and choose Inspect. Read the Styles panel before touching the file.

Is it enough? Your explanation was written before the fix and names the actual mechanism.

</details>

#### 4. Explain three rules

**See it first.** Made-up example. Explaining three rules from a tool-library stylesheet, and describing them instead.

- **What I wrote first:** “This rule sets the card padding to the medium spacing step.” Three sentences like that, one per rule, and the step looked finished.
- **What is missing from it:** It restates the rule in English. Anybody could produce it by reading the line aloud, and it proves nothing about whether I know why the page looks as it does.
- **The question I had been avoiding:** Why does this rule win? The card padding is set in two places, and I did not know which one was in effect until I inspected it.
- **What the explanation became:** “The card padding comes from the rule on the card class, not the one on the container, because the class is more particular. Deleting the class rule would give every card the container’s larger padding.”
- **How I chose the other two:** The ones I was least sure about rather than the ones I was proudest of. Both turned out to be doing something slightly different from what I assumed.

**The wrong turn:** The wrong turn is describing what a rule does, because it reads like an explanation and takes no understanding to write. The test is whether you can say what would change if it were deleted.

**What it costs:** Choosing the rules you are least sure about means the step takes longer and occasionally shows you that part of your stylesheet is doing nothing at all.

**Still unknown:** Still unknown: how many other rules in the file are inert. Three explained is three; the rest are unexamined and I am not implying otherwise.

- Choose three rules in your stylesheet and explain what each does and why.
- Include one about the cascade and one about inheritance.

**You should end up with:** Three rules from your own stylesheet explained, one about the cascade and one about inheritance.

Worksheet fields for this step:

- Rule 1 · what it does and why it wins
- Rule 2 · one about the cascade
- Rule 3 · one about inheritance

<details>
<summary>Help with this step</summary>

- **Explaining a rule:** Saying what it does, what it applies to, and why it wins where two rules meet. It is the difference between a stylesheet you wrote and one you understand.

Stuck starting? Choose the three rules you are least sure about rather than the three you are proudest of.

Is it enough? Somebody could delete each rule and predict, from your explanation, what would change.

</details>

#### 5. Record

- Note anything you set once and inherited rather than repeating.
- Save the stylesheet and the explanations.

**You should end up with:** What you set once and let inherit, where the stylesheet lives, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you set once at the top and let inherit rather than repeating
- Where the stylesheet is saved
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Setting it once:** Declaring colour, typeface and line height at the top and letting them reach everything. It is shorter, and it means one change reaches the whole page.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Search your stylesheet for the typeface name. If it appears more than once, you are repeating something inheritance would have carried.

Is it enough? You can name at least one value you set once rather than in several places.

</details>

**Save and continue.** Saved for you: Your box model note, the token declarations, the diagnosis and the three explanations save as you type, on this device first and then online. Kept outside the app: The stylesheet sits beside the HTML file in your own folder. Note where in step 5; the rest of Module 12 works on these same files. What your creator sees: Your creator reads the diagnosis you wrote before the fix. Explaining why a rule won is the thing this lesson is teaching, and the fix is a side effect. Your next action: Open Your work and choose Ready for review. The next lesson makes this page work at every width rather than at the one you designed for.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Search the stylesheet for literal colours and spacing values and replace each with its token.

</details>

<details>
<summary>Hint 2</summary>

Choose three rules and write, for each, what it does and why it wins or applies.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: CSS: the box, the flow and the cascade.
Task: Style your semantic page using your m08 tokens as custom properties, and explain in writing why three specific rules produce the layout they do.
Challenge one thing at a time, and start with the mistake this lesson is about: “CSS is unpredictable.” It is deterministic and mostly unfamiliar. The three things that produce nearly all surprises — the box model, the cascade and inheritance — take an afternoon to learn and remove the guesswork permanently.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the stylesheet and ask whether the stylesheet uses tokens as custom properties. Look at the explanations and ask whether three rules are explained including cascade and inheritance. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build the narrow-first layout for the page you already have in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A browser window you can drag, plus the device toolbar for a phone-sized viewport. Everything in this lesson works in a text editor and a browser with no build step.

- Starting material: Your three-width drawings and the built page.
- Create HaruCourse/Practice/m12-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Build narrow first

**See it first.** Made-up example. Making a tool-library page responsive, and starting from the layout I had already drawn.

- **What I did:** Built the wide layout first, because it was the one in my design file, then wrote rules to squeeze it down for narrow screens.
- **What the narrow version became:** A two-column layout with the columns stacked, in the order they happened to be written. The photograph came second, above the price, because that is where it sat in the wide grid.
- **What was wrong with that order:** Nobody had decided it. It was a side effect of a layout designed for a different width, and on a phone it put a decorative photograph between the title and the only thing anybody needed.
- **What I did instead:** Started again at 320 with nothing but the content, in the order I would give it to somebody over the telephone: what it is, the three facts, the action, then the description, then the picture.
- **What widening became:** A series of decisions about what to promote when there was room, rather than a series of rescues. Two of the wide layout’s columns turned out not to be worth restoring.

**The wrong turn:** The wrong turn is building the wide layout first and squeezing it, because the wide layout already exists in your design file. The narrow order then arrives by accident, and accidents are what people on phones actually meet.

**What it costs:** Starting narrow means throwing away some of the arrangement you already drew, including parts you liked. Two of my columns did not come back.

**Still unknown:** Still unknown: whether my priority order is the right one for this content. It is at least a decided order, which the squeezed version was not.

- Lay out the page at about 320 pixels with content in priority order.
- Use flexible sizing rather than fixed widths.
- Check nothing requires horizontal scrolling.

**You should end up with:** A layout at about 320 pixels with content in priority order, flexible sizing, and nothing scrolling sideways.

Worksheet fields for this step:

- The order the content appears in at the narrowest width
- Where you used flexible sizing instead of a fixed width, and where you could not
- Anything causing sideways scrolling at 320 pixels, and what you did — Wide tables, long unbroken words and fixed-width images are the usual three.

<details>
<summary>Help with this step</summary>

- **Narrow first:** Building the smallest layout before the others. It forces the content into priority order, because there is no room for anything else.
- **Flexible sizing:** Letting something take the room available rather than a number you chose. Flexible layouts wrap and grow; fixed ones break at sizes you never tested.
- **Horizontal page scrolling:** Having to drag the whole page sideways to read it. It is never acceptable, at any width, and it usually comes from one stubborn element.

Stuck starting? Open the device toolbar in developer tools and set the width to 320, then look at your page before changing anything.

Is it enough? The narrow layout reads top to bottom in an order you could defend, and nothing scrolls sideways.

</details>

#### 2. Widen and watch

**See it first.** Made-up example. Choosing change points for a tool-library page, and choosing them before looking at anything.

- **What I started with:** Three breakpoints copied from a table of device sizes: phone, tablet, desktop. The page then had three layouts and I considered it responsive.
- **Where it fell apart:** At about 600 pixels, which is inside the tablet range, the three key facts were each on their own line with an enormous empty column beside them. Nothing was broken and it looked abandoned.
- **What I did instead:** Set the window narrow and dragged it wider a pixel at a time, watching the content rather than the number.
- **What the content actually asked for:** About 520, where the key facts had room to sit in a row. About 700, where the description could take a comfortable column width. About 1,000, where a side panel became possible without squeezing the description.
- **What I noticed about those numbers:** None of them is a device. The middle one is the width at which the longest of my three facts stopped wrapping, which is a fact about my content and nothing else.

**The wrong turn:** The wrong turn is choosing breakpoints from a list of devices, because the list exists and is easy to copy. Devices come in every size and the layout then fails at all the widths between them.

**What it costs:** Content-derived change points look arbitrary written down, and somebody will ask why 520. The answer is that it is where your longest fact stops wrapping, which is a better reason than a phone from 2019.

**Still unknown:** Still unknown: whether 520 survives translation. A longer word in another language moves it, which is an argument for flexible rules rather than for more numbers.

- Drag the window wider slowly.
- Note each point where the layout becomes uncomfortable.
- Add a breakpoint only where content demands it, and record why.

**You should end up with:** Change points found by widening slowly, each recorded with the width you saw and the content reason for it.

Worksheet fields for this step, revealed a few at a time in the app:

- Change point 1 · the width, what became uncomfortable, and what you changed — Write the width you actually saw it at. It will not be a device name, and that is the point.
- Change point 2 · the width, what became uncomfortable, and what you changed
- Change point 3 · the width, what became uncomfortable, and what you changed

<details>
<summary>Help with this step</summary>

- **Change point:** A width where the content starts to want a different arrangement. It comes from your content, so it lands wherever it lands.
- **Device breakpoint:** A width named after a phone or tablet. Devices come in every size, people resize windows and split screens, and the names go out of date.

Stuck starting? Drag the window edge slowly from narrow to wide and stop the moment something looks uncomfortable. Write that width down.

Is it enough? Each change point names what became uncomfortable, and none of them is named after a device.

</details>

#### 3. Sweep the whole range

- Drag from narrow to wide in one pass.
- Record every overlap, clip, orphan and scroll.
- Fix with flexible rules before adding another breakpoint.

**You should end up with:** One slow pass across the whole range, with every failure between change points recorded and fixed flexibly where possible.

Worksheet fields for this step:

- Every overlap, clip, orphan and scroll you saw between your change points — Most failures live between breakpoints, because that is where nobody looks.
- What you fixed with a flexible rule rather than another change point

<details>
<summary>Help with this step</summary>

- **Sweeping:** Dragging from narrow to wide in one continuous pass. It is the only way to see the widths between your change points, which is where most failures are.
- **Orphan:** One item left alone on a row because the grid divides badly at that width. It is a wrapping problem, not a reason for another change point.

Stuck starting? Grab the window edge at 320 and drag it to full width in one slow movement, watching the page rather than the ruler.

Is it enough? You found at least one failure that was not at a change point.

</details>

#### 4. Test the hard content

- Use your longest real label and largest real number.
- Enlarge the text to about 200 per cent and sweep again.
- Fix what breaks by letting containers grow.

**You should end up with:** The layout tested with your longest real content and at about 200 per cent text, with fixes made by letting containers grow.

**Try it with help.** Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

- At about 840 pixels the card grid leaves one card alone on the last row.
  - **a flexible rule** — Letting the cards wrap and share the space handles every width, including the ones you did not test.
  - a new change point — It fixes 840 and leaves 870, 910 and everything else. Orphans appear wherever the division happens to be awkward.
  - change the content or the element — The cards are fine. It is the arrangement that is rigid.
- At 320 pixels the schedule table forces the whole page to scroll sideways.
  - a flexible rule — A table with five columns of real content has a minimum width, and no amount of flexibility gets it under 320.
  - a new change point — You will need one to make the change, and the change itself is the answer rather than the breakpoint.
  - **change the content or the element** — It becomes a set of records, one per row, which is the decision your Module 8 work already made. The element changes, not just its width.
- At about 520 pixels the three key facts have room to sit in a row instead of stacking.
  - a flexible rule — You could let them wrap, and they would sit awkwardly at two-and-one for a whole range of widths.
  - **a new change point** — This is what a change point is for: a genuine change of arrangement that the content asks for at a particular width.
  - change the content or the element — Nothing about the facts needs changing. They need more room.
- A tool name of one long unbroken word pushes the card wider than the screen.
  - **a flexible rule** — Allowing long words to break inside the card handles it at every width and for every name you have not seen yet.
  - a new change point — The word is too long at every width, not at one.
  - change the content or the element — Renaming the tool to fit a layout is the layout deciding your content.
- At 200 per cent text the header wraps over the logo, because the header has a fixed height.
  - **a flexible rule** — Let the header grow. More text needs more room, and a fixed height is a promise your content cannot keep.
  - a new change point — Text size is not width. A breakpoint cannot see it.
  - change the content or the element — The words are fine. The box refuses to grow.
- At about 1,000 pixels there is room for a side panel without squeezing the description.
  - a flexible rule — A panel that appears gradually is worse than one that appears at a width where it fits.
  - **a new change point** — A genuine change of arrangement, at a width the content chose. This is the third legitimate one on the page.
  - change the content or the element — The panel already exists; it now has somewhere to go.

**Then:** Now go through your own sweep findings and mark each one with its repair before you change anything.

**What to watch for:** Two rules of thumb come out of this. A failure that appears at one width and disappears at the next is usually a flexible rule; a failure that is there at every width is content or the wrong element. Only a genuine change of arrangement earns a change point.

Worksheet fields for this step:

- Your longest real label and largest real number, and what they did
- What happened sweeping again with the text at about 200 per cent
- What you changed by letting containers grow

<details>
<summary>Help with this step</summary>

- **Hard content:** Your longest label, your largest number, your most awkward name. Layouts survive placeholder text and fail on real content.
- **Letting a container grow:** Removing the fixed height or width so the box gets bigger when its content does. It is almost always the correct repair.

Stuck starting? Paste your longest real label into the page, then sweep the width again with the text enlarged.

Is it enough? No fix in this step made text smaller, and no fix added a change point for an orphan.

</details>

#### 5. Record

- List your breakpoints with the content reason for each.
- Compare the built result with your m07 drawings and note the differences.
- Save the page and the notes.

**You should end up with:** Change points listed with content reasons, and a comparison against your Module 7 drawings.

Worksheet fields for this step:

- Your change points listed with the content reason for each
- Where the built result differs from your Module 7 drawings — A drawing that turned out to be impossible is a finding, not a failure.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Comparing with the drawing:** Checking which of your earlier three-width drawings were possible. A drawing that turns out to be impossible is a finding about drawing, not a failure of the build.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Put your Module 7 drawings beside the built page at the same three widths and look for what differs.

Is it enough? Every change point has a content reason, and the comparison names at least one thing the drawing could not have shown.

</details>

**Save and continue.** Saved for you: Your priority order, change points, sweep findings and hard-content results save as you type, on this device first and then online. Kept outside the app: The page and stylesheet stay in your own folder, and screenshots at your three change points can sit beside them. Note the file names in step 5. What your creator sees: Your creator reads the reason beside each change point. A width chosen because your longest fact stopped wrapping is a real reason; a device name is not. Your next action: Open Your work and choose Ready for review. The next lesson puts real images into this page and measures what they cost.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container.

</details>

<details>
<summary>Hint 2</summary>

Remove your breakpoints, widen slowly, and add each one back only where you can name the problem.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Responsive layout, built rather than drawn.
Task: Make your page work from about 320 pixels to a wide screen without horizontal scrolling, using flexible layout rather than fixed breakpoint copies.
Challenge one thing at a time, and start with the mistake this lesson is about: “Responsive means three layouts for phone, tablet and desktop.” Devices come in every size, and people resize windows, split screens and enlarge text. A layout that only works at three widths fails at the dozens in between.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the narrow rendering and ask whether the page works from about 320 pixels with no horizontal scroll. Look at the breakpoint list and ask whether breakpoints are justified by content. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build the image work for the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A text editor for the SVG, following the assigned tutorial, and any free image resizer or your operating system's own export. No hosted design account is required to produce or export vector artwork.

- Starting material: Your built page and its images.
- Create HaruCourse/Practice/m12-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Audit the images

- List every image with its file size and its display size.
- Mark any served more than twice its display width.
- Mark flat graphics currently shipped as photographs.

**You should end up with:** Every image listed with its file size, served width and display width, with the oversized and wrongly formatted ones marked.

Worksheet fields for this step:

- Each image: its file size, the width it is served at, and the width it is displayed at — The network panel gives the file size; hovering an image in the inspector gives both widths.
- Any image served at more than twice its display width
- Any flat graphic currently shipped as a photograph — Icons, logos and diagrams are flat graphics. Saved as photographs they are both larger and blurrier.

<details>
<summary>Help with this step</summary>

- **Served width:** How many pixels wide the file actually is. A 3000-pixel photograph in a 400-pixel slot sends the person 3000 pixels and throws most of them away.
- **Flat graphic:** An icon, logo or diagram made of shapes rather than of a photograph. Saved as a photograph it is bigger and softer; as a vector it is tiny and sharp at any size.
- **Dense screen:** A display packing more pixels into the same space. It is why an image is usually served somewhat wider than its display width, rather than exactly at it.

Stuck starting? Open the network panel, filter to images, and write down the largest three before looking at anything else.

Is it enough? Every image has two widths beside it rather than one.

</details>

#### 2. Resize and re-format

**See it first.** Made-up example. Reducing the images on a tool-library page, and leaving the one that mattered most.

- **What I did first:** Compressed everything. Eleven images squeezed as hard as they would go without looking obviously worse. Total weight fell from 2.4 megabytes to 1.6.
- **What the timing did:** Time to usable on the slow profile went from about 11 seconds to about 10. Nearly a megabyte saved and almost nothing changed.
- **Why:** The header photograph was still 900 kilobytes and still sat above every word on the page. Nothing readable could appear until it arrived, so the other ten images were never the delay.
- **What actually worked:** Re-exporting that one photograph at 720 pixels rather than 3000, which took it to 96 kilobytes. Time to usable fell to about 3 seconds.
- **What I learned about the order:** The weight above the first screenful is what the person waits for. Everything below it can be large and late without anybody noticing.

**The wrong turn:** The wrong turn is compressing everything evenly, because it feels systematic and the total weight falls impressively. What the person waits for is the handful of things above the fold, and an even squeeze barely touches them.

**What it costs:** Re-exporting at 720 means the photograph is soft if anybody opens it full screen. It is a header image on a listing page, so nobody does, and that is a decision worth stating rather than assuming.

**Still unknown:** Still unknown: how it looks on a very dense screen. I exported somewhat wider than the display width for that reason, and I have not checked it on such a device.

- Export each photograph near its display size, allowing for dense screens.
- Move flat graphics to a vector format.
- Re-measure the total page weight.

**You should end up with:** Photographs re-exported near their display size, flat graphics moved to vector, and the new total weight measured.

Worksheet fields for this step:

- What you exported at what size, and the new file sizes
- The total page weight after resizing

<details>
<summary>Help with this step</summary>

- **Re-export:** Producing a new file at the size you actually need, from your original. Keep the original; you will want it again at a different size.
- **Format:** How the picture is stored. Photographs and flat graphics compress in completely different ways, which is why one format does not suit both.

Stuck starting? Take the largest image above the fold and re-export it at the width it is actually displayed.

Is it enough? You measured the total again rather than assuming the saving.

</details>

#### 3. Write an SVG by hand

**See it first.** Made-up example. Producing an icon as SVG for a tool-library page, and never opening the file.

- **What I did first:** Drew the icon in a graphics tool and exported it as SVG. Technically a vector, technically hand-free, and the file was 41 kilobytes.
- **What was in those 41 kilobytes:** When I finally opened it in a text editor: the editor’s own identifiers, a comment naming the version, four empty groups, and the shape itself in about two lines.
- **The other thing I found:** The colour was written into the file as a hex value. Three colour variants existed as three separate files, which is why the icon set had grown to nineteen files.
- **What writing it by hand gave me:** Under half a kilobyte, one file, and the colour left unset so it takes the colour of the text around it. One icon, three appearances, no extra files.
- **What I kept from the tool:** The drawing. I opened the exported file, found the two lines that were the shape, and threw the rest away.

**The wrong turn:** The wrong turn is treating SVG as an export format rather than as text. An exported file is a vector and is usually mostly editor bookkeeping, with the colour baked in so every variant needs its own file.

**What it costs:** Hand-writing means learning what the two lines mean, which costs an evening the first time. After that it is faster than exporting.

**Still unknown:** Still unknown: whether taking the colour from the surrounding text works everywhere it is used. It works on the three places I checked, and I have not checked the rest.

- Follow the assigned tutorial to write one icon in a text editor.
- Give it a title and use your token colours.
- Check it scales cleanly and is under a few kilobytes.

**You should end up with:** One icon written by hand as SVG, with a title, a token colour, and a size you measured.

Worksheet fields for this step:

- Which icon you wrote, and the text of it — Follow the assigned tutorial. It is a text file: you can read it, change a colour and see what happens.
- The title you gave it, and which token colour it uses
- Its size in kilobytes, and how it looks when scaled up

<details>
<summary>Help with this step</summary>

- **SVG:** A picture written as text. You can open it in a text editor, read it, change a colour and see the result, which is true of no other image format.
- **Title:** A line inside the SVG naming what it is. It is how the icon is announced, and it is the same decision you made in the alternative-text lesson.

Stuck starting? Follow the assigned tutorial and write the simplest icon you use: a circle, a cross, an arrow.

Is it enough? Your icon is a few kilobytes, stays sharp when you scale it up, and takes its colour from a token.

</details>

#### 4. Decide loading per image

- Mark which images may load later and which must not.
- Reserve space for every image so nothing shifts.
- Carry the m11 alternative-text decision into the markup.

**You should end up with:** A loading decision for every image, reserved space so nothing jumps, and your Module 11 alternative-text decisions carried into the markup.

**Try it with help.** Six images from a made up tool-library page. For each one, decide how it should load.

- The header photograph, at the very top, above all the text.
  - **must load immediately** — It is the first thing on screen, so delaying it leaves an empty page. The better question is whether it should be above the text at all.
  - can load later — Later means after the person has scrolled to it, and they are looking at it now.
  - should not be an image at all — It is a photograph, which nothing else can be.
- The eighth tool photograph in a list, three screenfuls down.
  - must load immediately — Nobody has seen it yet, and loading it now delays what they are looking at.
  - **can load later** — Below the fold and in a long list is the clearest case for waiting. Reserve its space so the list does not jump.
  - should not be an image at all — A photograph of the actual tool is the point of the listing.
- A filter icon shipped as a 12-kilobyte photograph file, displayed at 20 pixels.
  - must load immediately — Loading it sooner does not fix that it is the wrong kind of file.
  - can load later — It is in the toolbar at the top, so it is needed at once.
  - **should not be an image at all** — It is a flat graphic. Written as SVG it is a fraction of the size, sharp at any scale, and can take its colour from a token.
- The library logo in the header, a flat two-colour mark.
  - must load immediately — It is at the top, so if it stays a photograph file it does have to load at once.
  - can load later — It is on screen from the first moment.
  - **should not be an image at all** — A two-colour mark is exactly what SVG is for, and it will be smaller than a favicon.
- A chart of availability this week, halfway down the page.
  - must load immediately — It sits below the first screenful, so waiting costs nobody anything.
  - **can load later** — Below the fold, with its space reserved. If it were drawn as SVG it would be small enough that the question hardly matters.
  - should not be an image at all — A chart is a reasonable candidate for SVG, and the loading decision is the one this step is asking for.
- A decorative paper texture behind the whole page, 240 kilobytes.
  - must load immediately — It is behind everything, and nothing about the page depends on it arriving.
  - can load later — It covers the whole page, so it cannot easily wait for a scroll.
  - **should not be an image at all** — 240 kilobytes for decoration nobody would miss. Either remove it or replace it with something the browser can draw itself.

**Then:** Now make the decision for each of your own images, and write the reason beside it.

**What to watch for:** Two of the six are not loading questions at all. Before deciding when an image arrives, ask whether it should be a photograph file, a vector, or nothing.

Worksheet fields for this step:

- For each image: loads immediately, or loads later, and why — Anything above the first screenful must not wait. Anything below it usually should.
- How you reserved space so nothing jumps as images arrive
- How your Module 11 alternative-text decisions reached the markup

<details>
<summary>Help with this step</summary>

- **Loading later:** Telling the browser an image can wait until the person scrolls near it. It is right for everything below the first screenful and wrong for anything above it.
- **Reserved space:** Telling the layout how big an image will be before it arrives, so nothing jumps when it does. Without it people tap the wrong thing.

Stuck starting? Scroll your own page and draw a line where the first screenful ends. Everything above it loads immediately.

Is it enough? Every image has a decision and a reason, and nothing jumps when the page loads.

</details>

#### 5. Measure the result

- Re-run the throttled load and record the new timings.
- Record before-and-after weight.
- Save the audit and the measurements.

**You should end up with:** Page weight and time to usable measured before and after, with both traces saved.

Worksheet fields for this step:

- Page weight before and after, and time to usable before and after
- Where you saved the two traces
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Before and after:** The same measurement, under the same conditions, on either side of a change. Without the conditions matching, the pair proves nothing.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Re-run the throttled load with the same profile you used in lesson 1, so the two numbers can be compared.

Is it enough? Both numbers were measured the same way, and you can say what changed between them.

</details>

**Save and continue.** Saved for you: The image audit, the resizing record, the SVG notes, the loading decisions and both measurements save as you type, on this device first and then online. Kept outside the app: Original images stay in your own folder; keep them, because you will want a different size later. The two network traces can sit beside them. What your creator sees: Your creator reads the before-and-after pair and the conditions beside it. Two numbers measured the same way are the whole evidence here. Your next action: Open Your work and choose Ready for review. The next lesson adds the first behaviour that genuinely needs a script, and asks whether it does.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List each image's file size against its display width and re-export the worst offenders.

</details>

<details>
<summary>Hint 2</summary>

Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Images that do not cost the page.
Task: Put real images into your page at appropriate sizes and formats, produce one icon as hand-written SVG, and measure the weight you saved.
Challenge one thing at a time, and start with the mistake this lesson is about: “The developer will optimise the images.” They can compress what you supply. Whether the page has a full-width photograph at all, and whether it appears above the first line of text, are design decisions that dominate the outcome.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the image audit and ask whether images are served near their display size in suitable formats. Look at the SVG file and ask whether one icon is hand-written SVG using tokens. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build one interactive behaviour on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A text editor and a browser console. No framework, build step, package manager or account: plain files are the point at this stage.

- Starting material: Your built page and an m09 interaction specification.
- Create HaruCourse/Practice/m12-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Ask whether you need a script

**See it first.** Made-up example. Building a filter panel for a tool-library page twice, and building the hard version first.

- **What I built first:** A show-and-hide panel in JavaScript. About forty lines by the time it worked.
- **What those forty lines were doing:** Six of them opened and closed the panel. The other thirty-four handled the keyboard, moved focus into the panel and back out, closed it on escape, and announced whether it was open.
- **What I had not checked:** Whether the browser already had a disclosure element. It does. It opens, closes, works from the keyboard and announces its state, and none of that is written by me.
- **What the second version was:** The native element, four lines of styling, and no script at all. It behaved better than mine, because mine had got the focus return wrong and I had not noticed.
- **What genuinely needed a script:** Filtering the list as the options change. About twenty lines, which is a thing the browser has no element for.

**The wrong turn:** The wrong turn is starting from the script, because every example online starts there. Most of the code you then write is re-implementing behaviour that already existed, and re-implementing it slightly wrong.

**What it costs:** Native elements look and behave the way the browser wants until you style them, and some of them are awkward to style. That is a smaller problem than thirty-four lines of keyboard handling you now own.

**Still unknown:** Still unknown: whether the native disclosure animates the way the Module 9 specification asked for. It may not, and that is a conversation about the specification rather than a reason to rebuild it by hand.

- Read the assigned sections on events and DOM changes.
- For your chosen interaction, find any native or CSS answer first.
- Record what the native version gives you free.

**You should end up with:** One interaction chosen, the native or CSS answer looked for, and what that version gives you for nothing.

Worksheet fields for this step:

- Which Module 9 interaction you are building
- The native or CSS answer you looked for, and what you found — Disclosures, dialogues, details, form validation and hover states all exist without a script.
- What the native version gives you without writing anything

<details>
<summary>Help with this step</summary>

- **Native element:** Something the browser already provides: a disclosure, a dialogue, form validation. It arrives with keyboard behaviour and announcements nobody had to write.
- **Reaching for a script:** The habit of building behaviour by hand because that is how examples online do it. Much of what people script, HTML and CSS already do.

Stuck starting? Search the assigned material for your interaction by name before writing anything.

Is it enough? You looked for a native answer and wrote down what you found, including finding none.

</details>

#### 2. Build the interaction

**See it first.** Made-up example. Building the filter behaviour on a tool-library page, and spending an hour on a page that was doing nothing.

- **What happened:** I wrote the script, reloaded, and nothing at all happened. No movement, no error I could see, no clue.
- **What I did for the first hour:** Read my own code over and over, changed things that looked suspicious, and reloaded after each change. Nothing improved and the file got worse.
- **What I should have done first:** Opened the Console tab in developer tools. There was one line of red text: a name I had spelled two different ways, with the file and the line number beside it.
- **The second thing the console told me:** Once that was fixed, a different message said the element was null. The script was running before the page had finished being read, so the thing it was looking for did not exist yet.
- **What fixed it:** Moving the script to the end of the page. Two problems, both named by the console, both fixed in five minutes once I read it.

**The wrong turn:** The wrong turn is debugging by staring at your own code, because that is what feels like working. The browser has already told you the file and the line, in a tab most people never open.

**What it costs:** Console messages are written for people who already know the vocabulary, and the first few will not mean much. Reading them badly is still faster than reading your own code hopefully.

**Still unknown:** Still unknown: whether moving the script to the end is the right long-term answer or a convenience. It works, and there are other ways, and this lesson is not the place to choose between them.

- Write the script in plain JavaScript, as short as you can make it.
- Attach behaviour to real elements rather than replacing them.
- Test with the keyboard as well as the pointer.

**You should end up with:** The interaction built in plain JavaScript, attached to real elements, and tested with the keyboard as well as the pointer.

Worksheet fields for this step:

- Where the script lives, and how the page loads it
- What happened when you used it with the keyboard alone
- Anything that went wrong, and how you got past it — Open the console in developer tools. Red text there usually names the file and the line.

<details>
<summary>Help with this step</summary>

- **Event:** Something happening: a click, a key, a change. Scripts mostly wait for events and then change something.
- **The console:** A tab in developer tools where errors appear in red, usually naming the file and the line. It is the first place to look when nothing happens.
- **Progressive behaviour:** Adding to elements that already work rather than replacing them with things built from scratch. It keeps everything the browser gave you.

Stuck starting? Write the smallest version that does anything at all, load the page, and check the console before adding more.

Is it enough? It works with the keyboard as well as with the pointer, and you have written down what went wrong on the way.

</details>

#### 3. Explain the code

- Write what each line does in plain language.
- Name the event, the handler and the change.
- Mark anything you copied and do not yet understand.

**You should end up with:** Every line explained in plain language, with anything you copied and do not understand written down honestly.

Worksheet fields for this step:

- What each line does, in plain language — Name the event, the handler and the change. Three ideas cover most of it.
- Anything you copied and do not yet understand — Writing this down honestly is worth more than pretending. It is also the list to ask an engineer about.

<details>
<summary>Help with this step</summary>

- **Reading code:** The skill this lesson is actually for. It lets you tell a feasible request from an unreasonable one, follow an estimate, and notice an evasive answer.
- **Copied and not understood:** A line taken from an example that works and that you cannot explain. Writing it down turns it into a question rather than a gap.

Stuck starting? Go line by line and write what each one does. Where you cannot, say so rather than guessing.

Is it enough? Every line has either an explanation or an honest admission beside it.

</details>

#### 4. Design the failure

- Disable JavaScript and reload the page.
- Record what still works and what does not.
- Add a route that works without the script where the task requires it.

**You should end up with:** The page reloaded with JavaScript switched off, what still works recorded, and a route added that works without the script.

**Try it with help.** Six behaviours from a made up tool-library page. For each one, decide what it needs.

- Safety notes that expand when a control is pressed, on the same page.
  - **a native element** — The browser has a disclosure element. It opens, closes, works from the keyboard and announces its state without a line from you.
  - CSS alone — There are tricks to do it with CSS, and they behave oddly with the keyboard and announce nothing.
  - a script — This is the case where forty lines get written to re-implement something that already exists.
- A card that lifts slightly when the pointer is over it.
  - a native element — It is a visual state rather than a component.
  - **CSS alone** — A hover state is one rule. Remember it does not exist by touch, which is a design question rather than a technical one.
  - a script — Watching pointer movement with a script for a visual effect is expensive and unnecessary.
- The list narrowing as filter options are changed, without reloading.
  - a native element — The browser has no element that filters a list of your content against your rules.
  - CSS alone — CSS can hide things it can select. It cannot decide which rows match a set of chosen options.
  - **a script** — This is the genuine case. Twenty lines, plus a submit button for when the script does not run.
- Telling somebody a required field is empty when they try to submit.
  - **a native element** — Marking a field required gives you the check, the message and the focus behaviour without a script. You may want to improve the message; you do not need to build the mechanism.
  - CSS alone — CSS can style an invalid field and cannot stop a submission.
  - a script — Written by hand this is where accessible error handling usually goes wrong.
- A header that stays at the top as the page scrolls.
  - a native element — It is a positioning behaviour rather than a component.
  - **CSS alone** — One property. Scripts that do this by watching scroll position are a common and expensive way to reinvent it.
  - a script — Watching every scroll event to reposition a header is exactly the sort of thing to avoid.
- A confirmation that appears over the page and takes focus until it is answered.
  - **a native element** — The browser has a dialogue element that handles focus, escape and the layer above the page. Those three are what hand-built versions get wrong.
  - CSS alone — CSS can draw it. It cannot manage focus, which is the whole difficulty.
  - a script — A script opens and closes it, and it should open and close a native dialogue rather than a box built from scratch.

**Then:** Now check your own interaction against the same three options, and record what the native version would have cost or saved.

**What to watch for:** The dialogue and the disclosure are the two most commonly rebuilt by hand, and they are the two where the browser’s version is hardest to beat: focus management and state announcement are exactly what a hand-built version forgets.

Worksheet fields for this step:

- What still works with JavaScript switched off, and what does not — Developer tools can disable JavaScript from the settings panel. Reload after switching it off.
- The route you added that works without the script

<details>
<summary>Help with this step</summary>

- **Without the script:** Not only somebody who turned JavaScript off. A slow connection, a blocked file or one error earlier in the page all produce the same result.
- **Fallback route:** A way to complete the task when the enhancement is not there. For a filter, a submit button that reloads with the filters applied.

Stuck starting? Open the developer tools settings and switch JavaScript off, then reload and try the task.

Is it enough? You know what a person gets when the script does not run, and it is not nothing.

</details>

#### 5. Record

- Write what the native alternative would have cost or saved.
- Save the code, the explanation and the failure behaviour.

**You should end up with:** What the native alternative would have cost or saved, where the work is saved, and the repair the Check questions asked for.

Worksheet fields for this step:

- What the native alternative would have cost or saved
- Where the code and the explanation are saved
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What it saved:** The lines you did not write, and the behaviour you did not have to get right. Keyboard handling and announcements are the usual two.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Count the lines in your script that are about the behaviour, and the lines that are about the keyboard.

Is it enough? You can say what choosing the native element would have changed, in lines and in behaviour.

</details>

**Save and continue.** Saved for you: Your native-answer notes, the keyboard test, the line-by-line explanation and the failure behaviour save as you type, on this device first and then online. Kept outside the app: The script sits beside your page and stylesheet in your own folder. Nothing is uploaded, and no package manager or build step is involved. What your creator sees: Your creator reads the native alternative you considered and the list of lines you cannot explain. Both are more informative than working code. Your next action: Open Your work and choose Ready for review. The next lesson deals with data that has not arrived yet.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide.

</details>

<details>
<summary>Hint 2</summary>

Test with the pointer unavailable and implement the missing key behaviour.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Just enough JavaScript.
Task: Add one genuinely interactive behaviour to your page with plain JavaScript, keeping it usable when the script fails, and explain what the code does line by line.
Challenge one thing at a time, and start with the mistake this lesson is about: “I do not need to write code, so I do not need to read it.” Reading it is what lets you tell a feasible request from an unreasonable one, understand an estimate and notice when an answer is evasive. Writing a little is how you learn to read.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the alternative record and ask whether A native or CSS alternative was considered first. Look at the keyboard test and ask whether the interaction works with a keyboard. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build the four states of a list that has to wait for its data in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A public data source that needs no key, or a local file of your own realistic data served alongside the page. Nothing here requires an account, a paid API or a backend.

- Starting material: Your state specifications and the built page.
- Create HaruCourse/Practice/m12-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Fetch something real

**See it first.** Made-up example. Connecting a tool-library list to real data, and building against data I had written myself.

- **What I built against:** Six rows of test data I typed out: short names, tidy dates, a photograph for each, every field filled.
- **What the page looked like:** Immaculate. The cards lined up, every name fitted on one line, and the layout I had drawn in Module 7 came out exactly as drawn.
- **What the real source returned:** Forty-one rows. Four with no photograph. One name of eleven words. Three dates in a format I had not expected, and two items where the availability field was simply absent.
- **What broke:** The missing photographs left holes, the long name pushed its card off the grid, and the absent availability rendered as the word undefined in the place where On loan should have been.
- **What I changed about the method:** Started from the real data, ugly as it was, and built the layout around what actually arrives rather than around what I would have chosen to arrive.

**The wrong turn:** The wrong turn is inventing tidy test data, because you need something to build against and yours is always well-behaved. Every shape you failed to imagine becomes a bug nobody sees until it is in front of a person.

**What it costs:** Building against real data means the page looks bad for the first hour and you will be tempted to tidy the data instead of the design. The data is not yours to tidy.

**Still unknown:** Still unknown: whether forty-one rows is a typical result. It is one request on one day, and the loading state I reserve space for depends on the answer.

- Read the assigned sections on fetching data.
- Connect your page to a public source or a local data file.
- Render the content branch first.

**You should end up with:** Real data arriving in your page and the content branch rendering it, with any trouble and its recovery written down.

Worksheet fields for this step:

- Where the data comes from — A public source that needs no key, or a file of your own realistic data sitting beside the page. Either is fine; no account is needed.
- What the content branch renders, and what one real row looks like
- Anything that went wrong getting the data in, and how you got past it — The console and the network panel between them name almost every failure here.

<details>
<summary>Help with this step</summary>

- **Fetching:** Asking for data after the page has already loaded, and doing something with it when it comes back. The gap between asking and receiving is what the next three steps are about.
- **Public source:** Data anybody can request without a key or an account. A file of your own realistic data, sitting beside the page, works just as well for this lesson.

Stuck starting? Render one row from real data before building anything else. Everything after that is states around it.

Is it enough? Real data appears on your page, even if it appears badly.

</details>

#### 2. Build the other three branches

**See it first.** Made-up example. Building the four branches for a tool-library list, and building the one that never happens to me.

- **What I built first:** Content and loading. Both appear constantly while you work, so both got attention and both looked good.
- **What I put off:** Empty and error. In three days of building, I had seen neither: my test data always returned rows, and my connection never failed.
- **What I eventually wrote for them:** Two grey lines. “No results.” and “Something went wrong.” It took two minutes and I did not look at them again.
- **What happened when I forced an error:** The message appeared, and every filter the person had set was gone. Retrying meant setting all four again, which is the moment somebody leaves.
- **What the branches became:** Empty says what would appear here and offers to widen the dates. Error says what happened, that nothing was lost, and retries with the filters still set. Both took twenty minutes because the wording already existed in my Module 8 sheet.

**The wrong turn:** The wrong turn is building the branches in the order you happen to meet them, which means the two you never see get two minutes at the end. A person on a train meets the error branch more often than some features you will spend a week on.

**What it costs:** Giving empty and error real wording and real behaviour costs most of an afternoon on states that, from your desk, look like they never happen.

**Still unknown:** Still unknown: whether the retry actually helps, or whether the failure that produced it will simply repeat. The design assumes a transient failure, and I have not tested a persistent one.

- Add loading, empty and error branches using your m08 wording.
- Reserve the space content will occupy.
- Make the error branch preserve filters and offer retry.

**You should end up with:** Loading, empty and error branches built with your own Module 8 wording, with space reserved and filters preserved.

Worksheet fields for this step:

- What loading shows, and how much space it reserves — Reserve the space the content will take, so nothing jumps when it arrives.
- What empty says, using your Module 8 wording
- What error says, what it preserves, and how retry works

<details>
<summary>Help with this step</summary>

- **Branch:** One of the outcomes the page can be in. Four of them exist whether or not you design them: loading, content, empty and error.
- **Preserving input:** Keeping the filters, the search text and anything typed when something fails. Losing it turns one failure into starting again.

Stuck starting? Open your Module 8 state specifications and copy the wording across before writing any code.

Is it enough? All four branches exist, and the two you never see have the same care as the two you do.

</details>

#### 3. Make it slow and make it fail

- Throttle the connection and watch the loading branch.
- Force an error by breaking the address or going offline.
- Add a timeout with its own message and a route out.

**You should end up with:** The loading branch watched on a throttled connection, an error forced deliberately, and a timeout with a route out.

**Try it with help.** Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

- The request has been out for 800 milliseconds and nothing has come back yet.
  - **loading** — Ordinary waiting. Reserve the space, show the placeholder rows, and say nothing extra.
  - empty — Nothing has come back, which is not the same as nothing existing.
  - error — Nothing has failed. Announcing a problem this early creates one.
- The request came back successfully with a list containing no items, because the filters are narrow.
  - loading — The waiting is over. Leaving a spinner here is the commonest version of this mistake.
  - **empty** — It worked and there is nothing to show. Say what would appear here and offer the change most likely to help.
  - error — Calling a successful answer an error sends the person looking for a fault that does not exist.
- The device has no connection, so the request never leaves.
  - loading — It will wait for ever, which is the state nobody designs.
  - empty — It is not that there are no tools. It is that nobody could ask.
  - **error** — Say what happened, that nothing they typed was lost, and offer to try again when they are back.
- The request has been out for thirty seconds with no answer and no failure.
  - loading — Technically true and useless. After thirty seconds a spinner is telling somebody nothing they cannot already see.
  - empty — Nothing has come back to be empty.
  - **error** — Time out, say so plainly, and give a route out. Waiting indefinitely is a decision, and it is a bad one.
- The server answered, and what it answered was that something had gone wrong at its end.
  - loading — An answer arrived, so the waiting is finished.
  - empty — There may well be plenty of tools. Nobody managed to find out.
  - **error** — This is the clearest error case, and it is the one where saying nothing was lost matters most.
- Four seconds in, the request is still going, and it is going to succeed in another six.
  - **loading** — Still loading, and long enough that the person deserves a word about it. This is where the slow message earns its place.
  - empty — Nothing has arrived yet to be empty.
  - error — Nothing has failed, and calling it a failure at four seconds would be wrong six seconds later.

**Then:** Now force each of these on your own page and check the person lands where you intended.

**What to watch for:** The pair to keep apart is empty and error. Empty means the question was answered and the answer was none; error means nobody got to ask. Sending somebody to the wrong one of those sends them looking for the wrong repair.

Worksheet fields for this step:

- What the loading branch looked like on a throttled connection
- How you forced an error, and what the person saw — Break the address, or go offline in the network panel. Both take one click.
- Your timeout message and the route out of it — Waiting for ever is a fifth state nobody designs. Decide what happens at thirty seconds.

<details>
<summary>Help with this step</summary>

- **Forcing a failure:** Breaking the address, or switching to offline in the network panel. Errors are hard to find by waiting for them and easy to cause on purpose.
- **The fifth state:** Slow. Not loading and not failed, just still going. Decide what happens at three seconds and at thirty, or the person waits for ever with a spinner.

Stuck starting? Open the network panel, set it to offline, and reload. That is your error branch, whether or not you built one.

Is it enough? You have seen all four branches on your own screen rather than in your specification.

</details>

#### 4. Compare with the specification

- Check each built state against what you specified in m08.
- Record every place the specification was wrong or incomplete.

**You should end up with:** Each built state compared against your Module 8 specification, with every wrong or incomplete part named.

Worksheet fields for this step:

- Every place the Module 8 specification was wrong or incomplete

<details>
<summary>Help with this step</summary>

- **Specification error:** Something you wrote that turned out to be impossible, wrong or missing once it was built. Finding one is what this step is for.

Stuck starting? Put your Module 8 sheet beside the built page and go state by state, in order.

Is it enough? You found at least one thing the specification got wrong, because almost every specification does.

</details>

#### 5. Record

- Update the specifications to match what the build showed.
- Save the code and the list of corrections.

**You should end up with:** The specification updated to match what the build showed, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you changed in the specification to match what the build showed
- Where the code and the four states are saved
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Updating the specification:** Correcting the earlier document rather than only the code. Otherwise the next person builds from a description you already know is wrong.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Open the Module 8 document and change it, rather than writing a note about changing it.

Is it enough? Somebody building from your specification today would build what you actually built.

</details>

**Save and continue.** Saved for you: Your data notes, the four branches, the slow and failure observations and the specification corrections save as you type, on this device first and then online. Kept outside the app: The page, the script and any local data file stay in your own folder. Nothing about them is uploaded from here. What your creator sees: Your creator reads the specification errors the build revealed. A specification that survived contact with a build unchanged usually means it was not specific enough to be wrong. Your next action: Open Your work and choose Ready for review. The next lesson builds a form that really submits.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Force each state in turn — no data, bad address, offline — and build whichever branch is missing.

</details>

<details>
<summary>Hint 2</summary>

Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Data that arrives later.
Task: Fetch data from a public source into your page, and build the loading, empty, error and slow states you specified in m08 so they are real rather than drawn.
Challenge one thing at a time, and start with the mistake this lesson is about: “The API will usually work, so the error state is a formality.” It fails often enough that a person on a train meets it regularly. The error branch is used more than most features you will design.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the four demonstrated states and ask whether all four branches are built and reachable. Look at the wording comparison and ask whether the wording comes from the m08 specifications. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build one working form, native behaviour first in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A text editor and a browser. Submission can go to a local endpoint or simply be intercepted; nothing here needs a server, a form service or an account.

- Starting material: Your field table and error specifications.
- Create HaruCourse/Practice/m12-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Build with native behaviour

**See it first.** Made-up example. Building a tool-request form, and rebuilding what the browser was already doing.

- **What I assumed:** That native validation looks crude, so a custom version would be better. I had never actually watched the native one run.
- **What I tried:** Built the form with types and required attributes and nothing else, then submitted it empty.
- **What happened:** The browser stopped the submission, moved focus to the first empty field, showed a message beside it and announced it. On my phone the email field brought up a keyboard with an at sign on it.
- **What I had planned to write:** All of that. The checking, the message, the focus move and the announcement, by hand, for six fields.
- **What I wrote instead:** Two rules the browser cannot know: that the date must be one on which a class runs, and that the phone number must match one of two local formats. About fifteen lines.

**The wrong turn:** The wrong turn is judging native validation by its appearance without watching its behaviour. What looks plain is doing four things, and a custom version that looks better usually does one.

**What it costs:** Native messages are worded by the browser and cannot be rewritten freely, so some of them are vaguer than your own wording would be. You can add your own beside them, which is a smaller job than replacing the mechanism.

**Still unknown:** Still unknown: whether the native wording reads well in every browser your audience uses. It varies, and I have checked two.

- Read the assigned form sections and the accessibility requirements.
- Build the form with appropriate input types and required fields.
- Test what the browser does before adding anything.

**You should end up with:** A form built from appropriate input types and required fields, with what the browser does on its own observed before anything is added.

Worksheet fields for this step:

- Which input types and required fields you used, and why each — The type changes the keyboard on a phone, the validation and the error message, all without a line from you.
- What the browser did on its own when you submitted with mistakes in it — Try it before adding anything. Most people never find out what they were about to rebuild.

<details>
<summary>Help with this step</summary>

- **Input type:** Telling the browser what kind of thing a field holds. It changes the keyboard on a phone, the validation and the error message, without any code.
- **Native validation:** The checking the browser does itself, including announcing the problem and moving focus. Custom versions routinely omit both of those.

Stuck starting? Build the fields with types and required attributes only, then submit the form empty and watch.

Is it enough? You have written down what the browser did before you added anything.

</details>

#### 2. Add only what is missing

- Identify rules the browser cannot know.
- Implement those, matching the native presentation.
- Keep the total custom code as small as you can.

**You should end up with:** Custom rules written only for what the browser cannot know, matching the native presentation.

Worksheet fields for this step:

- The rules the browser has no way to know
- What you wrote for those, and roughly how many lines
- How your custom errors match the native ones in appearance and behaviour — Two error styles in one form tells the person the two kinds of mistake are different things. They are not.

<details>
<summary>Help with this step</summary>

- **What the browser cannot know:** Anything about your world: which dates have classes, which formats your region accepts, whether that name is already taken. Everything else it probably already checks.
- **Matching the presentation:** Making your errors look and behave like the browser’s. Two styles in one form suggests two kinds of mistake, and there is only one kind.

Stuck starting? List the rules you need, then cross off every one the browser already checks.

Is it enough? Everything left on the list is genuinely about your own subject rather than about formats in general.

</details>

#### 3. Make errors accessible

**See it first.** Made-up example. Building the error summary on a tool-request form, and building the half that is easy to see.

- **What I built:** A summary at the top: “There are 3 problems with this form”, with three lines under it naming each field.
- **What it looked like:** Exactly right. Prominent, clearly worded, using the Module 11 wording, and announced when it appeared because I had specified that.
- **What happened by keyboard:** The person hears “There are 3 problems”. Then they tab, and tab, and tab, through the header and the navigation, hunting for the first field with something wrong.
- **What was missing:** The three lines were text, not links. A summary that names problems without taking you to them is an announcement rather than a route.
- **What I changed:** Each line became a link to its field, and focus moved to the summary when it appeared. Three problems, three key presses, no hunting.

**The wrong turn:** The wrong turn is building the part of the summary you can see and stopping there. It looks complete, it is announced, and it leaves somebody exactly where they were.

**What it costs:** Moving focus to the summary interrupts wherever the person was. On a failed submission that is the right interruption, and on anything less serious it would not be.

**Still unknown:** Still unknown: whether moving focus to the summary or straight to the first bad field is better. I chose the summary because it says how many, and I have not tested the alternative.

- Associate each error with its field.
- Add a summary that links to each problem field.
- Ensure the summary is announced when it appears.

**You should end up with:** Every error associated with its field, a summary linking to each problem, and the announcement checked by listening.

Worksheet fields for this step:

- How each error is associated with its field
- What the summary says and what each line links to
- How you checked the summary is announced when it appears — The screen reader you used in Module 11 will tell you. Seeing it appear is not the same check.

<details>
<summary>Help with this step</summary>

- **Association:** The error joined to its field, so reaching the field announces the error. A message sitting near a box is not associated with it.
- **Announced:** Spoken when it appears, rather than appearing silently. This is the behaviour Module 11 recorded as specified and untested; here you can test it.

Stuck starting? Turn the screen reader back on before you check this step. Seeing the summary appear is not the check.

Is it enough? You listened to a failed submission, rather than watching one.

</details>

#### 4. Fail and recover

- Submit with several errors and confirm nothing is lost.
- Check focus moves somewhere useful.
- Test the whole form with the keyboard only.

**You should end up with:** A failed submission with several mistakes, nothing lost, focus somewhere useful, and the whole form completed by keyboard.

**Try it with help.** Six form behaviours from a made up tool-library build. For each one, decide where it came from.

- On a phone, the email field brings up a keyboard with an at sign on it.
  - **free from the browser** — The input type does this. It is one of the clearest arguments for using the right type rather than a plain box.
  - written by hand — Nothing you can write from a page changes the keyboard. The type is the only lever.
  - missing entirely — It is present as soon as the type is right.
- Submitting with a required field empty stops the submission, moves focus there and announces the problem.
  - **free from the browser** — Three behaviours from one attribute: stopping, focusing and announcing. These are the three that hand-built validation usually misses.
  - written by hand — This is what people write by hand, after not checking whether it already happened.
  - missing entirely — It is there the moment a field is marked required.
- The form rejects a date on which no class runs.
  - free from the browser — The browser can check that something is a date. It has no idea which dates have classes.
  - **written by hand** — This is genuinely yours: a rule about your own subject that nothing else could know.
  - missing entirely — It has to exist, and it has to be written.
- A summary appears at the top after a failed submission and is announced when it appears.
  - free from the browser — The browser handles fields one at a time. A summary of several problems is your own addition.
  - **written by hand** — Worth writing on a form of any size, and it is the piece most often built to appear silently.
  - missing entirely — On many forms it is, which is why Module 11 recorded it as specified and untested.
- After a failed submission the form comes back empty, with everything the person typed gone.
  - free from the browser — The browser preserves values by default. Losing them takes effort, usually a page reload somebody added.
  - written by hand — Nobody writes this deliberately. It arrives as a side effect and nobody tests for it.
  - **missing entirely** — What is missing is the preservation. This is the failure that ends the task rather than delaying it.
- The same rules are checked again after the form is sent, where the person cannot change them.
  - free from the browser — Nothing the browser does survives leaving the browser.
  - written by hand — It is written by hand, and not here: it belongs on the other side, and this lesson does not build one.
  - **missing entirely** — From this page, yes, and that is the honest answer. Checking in the browser is convenience; the check that counts happens where the person cannot reach it.

**Then:** Now sort your own form the same way, and let the three lists become your record in step 5.

**What to watch for:** The cleared form is the one worth remembering. It is not something anybody built; it is preservation that was lost, usually to a reload, and nobody notices because nobody submits a broken form twice while building.

Worksheet fields for this step:

- What survived a failed submission with several mistakes in it
- Where focus went after the failed submission
- What happened completing the whole form with the keyboard alone

<details>
<summary>Help with this step</summary>

- **Preserved input:** Everything the person typed still being there after a failure. Clearing a form on failure is the single most common way to lose somebody entirely.
- **Useful focus:** Landing somewhere that helps: the summary, or the first field with a problem. Landing at the top of the page makes the person hunt.

Stuck starting? Fill in half the form, get three things wrong on purpose, and submit it.

Is it enough? Everything you typed is still there, and focus landed somewhere that helps.

</details>

#### 5. Record what was free

- List what the browser provided without code.
- List what you wrote and why it was necessary.
- Save the form and the two lists.

**You should end up with:** Two lists: what the browser provided without code, and what you wrote with the reason it was necessary.

Worksheet fields for this step:

- Everything the browser provided without any code
- Everything you wrote, and why it was necessary
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **What was free:** Behaviour you did not write and now depend on. Knowing what it is protects it from being replaced by somebody who did not realise it was there.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the free list first. It is usually longer than people expect.

Is it enough? Every item on the written list names a reason the native behaviour could not cover it.

</details>

**Save and continue.** Saved for you: Your input types, custom rules, error handling, recovery notes and the two lists save as you type, on this device first and then online. Kept outside the app: The form file sits with the rest of your build in your own folder. No form service, account or server is involved, and nothing is submitted anywhere. What your creator sees: Your creator reads the two lists at the end. A short written list beside a long free list is the result this lesson is looking for. Your next action: Open Your work and choose Ready for review. The next lesson measures what the whole thing costs on a slow connection.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Remove custom validation that duplicates a native type and test what the browser does alone.

</details>

<details>
<summary>Hint 2</summary>

For each custom rule ask whether an input type or attribute already expresses it.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A form that actually submits.
Task: Build one working form with native validation, accessible errors and preserved input, and record what the browser gave you free versus what you had to write.
Challenge one thing at a time, and start with the mistake this lesson is about: “Custom validation gives a better experience.” It gives a different one, and usually a less accessible one, because the native behaviour includes announcement and keyboard handling that custom implementations routinely omit.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the form and the native record and ask whether native validation is used wherever it can be. Look at the custom-rule list and ask whether custom rules exist only where the platform cannot know them. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build a measured before-and-after on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: Your browser's network panel and throttling. No performance service, account or paid audit tool is required; the measurements you need are already in the browser.

- Starting material: Your built page and its first trace.
- Create HaruCourse/Practice/m12-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Measure the baseline

**See it first.** Made-up example. Measuring a tool-library page, and starting after the easy win was already in.

- **What I did:** Noticed the header photograph was enormous, fixed it, and then sat down to take a baseline. It seemed sensible to measure a page that was not obviously broken.
- **What I ended up with:** A baseline of 700 kilobytes and four seconds, and after two more changes, 340 kilobytes and three seconds. A real improvement, and a modest-looking one.
- **What I could not say:** Anything about the change that mattered most. The page had been 2.4 megabytes and eleven seconds that morning, and no record of it existed.
- **What that cost:** The report showed a page getting slightly faster. The actual story was a page getting three times faster, and the evidence for it had been thrown away before I started.
- **What I do now:** Take the baseline first, before touching anything, even when the first problem is obvious. It costs two minutes and it is the only number that cannot be recovered later.

**The wrong turn:** The wrong turn is fixing the obvious thing before measuring, because it feels wasteful to measure something you already know is wrong. The baseline is the one number you cannot go back for.

**What it costs:** Measuring first means recording a figure you already know is bad, and on a page you are showing to somebody that is uncomfortable.

**Still unknown:** Still unknown: how much day-to-day variation there is in these figures. One baseline is one measurement, and I have not taken it twice to find out.

- Load with the cache disabled and a slow profile.
- Record weight, request count and time to usable.
- Note which requests block the first render.

**You should end up with:** A baseline measured with the conditions written down, and the requests that hold up the first render identified.

Worksheet fields for this step:

- The conditions: throttling profile, cache setting, device and browser — Write these once and use exactly the same ones afterwards, or the pair proves nothing.
- Weight, request count and time to usable
- Which requests hold up the first render — Stylesheets and scripts in the head usually do. The network panel shows what arrives before anything is drawn.

<details>
<summary>Help with this step</summary>

- **Conditions:** Throttling profile, cache setting, device and browser. A number without them cannot be compared with anything, including your own later number.
- **Blocking resource:** Something the browser waits for before drawing anything. Stylesheets and scripts in the head usually do, and they are often the whole delay.
- **Time to usable:** When the person could act, not when loading finished. It needs you to say what usable meant on this page.

Stuck starting? Write the conditions down first, before you take a single number.

Is it enough? Somebody else could reproduce your measurement from what you wrote.

</details>

#### 2. Make three changes

- Reduce the largest design-owned cost first.
- Remove anything requested and unused.
- Stop something non-essential from blocking first render.

**You should end up with:** Three changes made one at a time, starting with the largest design-owned cost, each with its reason.

**Try it with help.** Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

- Re-export the 1.8 megabyte header photograph at its display width. It sits above every word on the page.
  - **reduces what the person waits for** — It is above the first line of text, so nothing readable appears until it arrives. This is the one change on the list that moves time to usable on its own.
  - reduces total weight only — It reduces weight enormously and it also reduces the wait, because of where it sits.
  - changes nothing measurable — It is three quarters of the page.
- Compress four photographs in the footer, saving 300 kilobytes.
  - reduces what the person waits for — Nobody has scrolled to the footer at the moment they are waiting.
  - **reduces total weight only** — A real saving on the total, and invisible in time to usable. Worth doing and not worth doing first.
  - changes nothing measurable — The total weight figure moves by 300 kilobytes.
- Remove the third typeface, used once, which the browser fetches before drawing any text.
  - **reduces what the person waits for** — Fonts are usually fetched before text is drawn, so an unused one delays every word on the page.
  - reduces total weight only — It saves weight and it also removes something standing between the person and the first sentence.
  - changes nothing measurable — Both numbers move.
- Strip the spaces and line breaks out of the HTML file, saving 3 kilobytes.
  - reduces what the person waits for — Three kilobytes on a slow connection is a fraction of a second at most, and the file was never the delay.
  - reduces total weight only — Three kilobytes out of 2,400 will not show in any figure you are recording.
  - **changes nothing measurable** — It is the sort of change that feels like optimisation and moves nothing. Worth knowing so you do not spend an afternoon on it.
- Delay the script that renders the list, so the page paints in one second instead of three.
  - reduces what the person waits for — It makes the frame appear sooner and the list appear later. The person waits longer to do anything.
  - reduces total weight only — Nothing is removed. The same bytes arrive in a different order.
  - **changes nothing measurable** — It moves first paint and worsens time to usable, so on the figures that matter here it is not an improvement at all. This is the one to reject in step 4.
- Replace a 96 kilobyte icon font, fetched in the head, with six hand-written icons.
  - **reduces what the person waits for** — Fetched in the head means the browser waits for it. Removing it takes something out of the critical path as well as out of the total.
  - reduces total weight only — It does both, because of where in the page it is requested.
  - changes nothing measurable — 96 kilobytes on the critical path is several seconds on a slow profile.

**Then:** Now sort your own candidate changes the same way, and take your three from the first group.

**What to watch for:** Where something sits matters as much as how big it is. The same 300 kilobytes above the fold and below it are two completely different changes, and the one that only reorders bytes is not a change at all.

Worksheet fields for this step, revealed a few at a time in the app:

- Change 1 · what you did and why
- Change 2 · what you did and why
- Change 3 · what you did and why

<details>
<summary>Help with this step</summary>

- **Design-owned cost:** Weight that exists because of a choice in a design file. It is the part you can act on without anybody’s agreement.
- **Requested and unused:** Something loading that nothing needs: a third typeface, an icon set for six icons, a stylesheet for a page that no longer exists.

Stuck starting? Take the largest thing above the first screenful and deal with that one first.

Is it enough? Each change has a reason that refers to your own baseline rather than to general advice.

</details>

#### 3. Measure again

- Repeat the load under identical conditions.
- Record the same three figures.
- Note anything that got worse.

**You should end up with:** The same three figures under identical conditions, and anything that got worse.

Worksheet fields for this step:

- The same three figures under identical conditions
- Anything that got worse — Something usually does. A page that loads faster and jumps more is not an improvement.

<details>
<summary>Help with this step</summary>

- **Identical conditions:** The same profile, the same cache setting, the same browser. Change one of them and the pair of numbers is not a comparison.
- **Something getting worse:** A faster page that now jumps, or one that appears sooner and can be used later. Recording it is what stops a number standing in for the experience.

Stuck starting? Set the throttling profile and the cache tickbox back to exactly what you wrote in step 1.

Is it enough? Both sets of numbers were taken the same way, and you looked for what got worse rather than only for what improved.

</details>

#### 4. Consider and reject one

**See it first.** Made-up example. Improving the numbers on a tool-library page, and improving the wrong one.

- **What I found:** The script that renders the list was blocking the first paint. Delaying it would make the page appear in about a second instead of three.
- **Why it was tempting:** It is one line, the number moves a lot, and “first paint in one second” is a sentence anybody would be pleased to write.
- **What the person would get:** A header, a search box and an empty space where the tools are, for four seconds. Then the list. The page appears sooner and becomes usable later.
- **What I checked:** The two numbers moved in opposite directions. First paint improved by two seconds; time to usable got worse by one.
- **What I did:** Rejected it, and wrote down why. The list is the page. Making its container arrive early is a measurement rather than an improvement.

**The wrong turn:** The wrong turn is optimising the number that is easiest to move. First paint responds to almost anything, which is why it is so often reported and so often meaningless on its own.

**What it costs:** Keeping the script blocking means the page shows nothing for three seconds, and on a very slow connection that is uncomfortable. A skeleton of the list would be the real answer, and it is more work than one line.

**Still unknown:** Still unknown: whether people prefer an empty frame quickly or a complete page slightly later. Nothing here measured a preference, and the argument rests on when the task can start.

- Identify a change that would improve a number and harm the experience.
- Write the trade-off and your decision.

**You should end up with:** One change identified that would improve a number and harm the experience, with the trade-off and your decision.

Worksheet fields for this step:

- A change that would improve a number and harm the experience
- The trade-off, and your decision

<details>
<summary>Help with this step</summary>

- **Improving a number:** Making a measurement better without making anything better. Delaying the content that is the point of the page is the classic case.
- **Appearing versus being usable:** A page can paint in one second and be useless for six. Optimising the first at the expense of the second is the commonest bad trade in this work.

Stuck starting? Look for a change that moves a number without letting anybody do anything sooner.

Is it enough? Your rejected change has a number it would improve and a reason you decided against it anyway.

</details>

#### 5. Report

- Write the before and after with the conditions stated once.
- State what you did not measure, such as real-device performance.
- Save the report with the traces.

**You should end up with:** A before-and-after report with the conditions stated once, and a plain list of what you did not measure.

Worksheet fields for this step:

- Before and after, with the conditions stated once
- What you did not measure — A real mid-range phone on a real network is the usual gap. Throttling models speed and not dropouts.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Stating conditions once:** Putting the profile, cache setting and device beside the pair of figures. Without them somebody will quote the number in a context where it means something else.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the conditions line first, then the two sets of figures under it.

Is it enough? Nobody could quote your figures without also quoting the conditions.

</details>

**Save and continue.** Saved for you: Your conditions, both sets of figures, the three changes and the rejected one save as you type, on this device first and then online. Kept outside the app: The two network traces stay in your own folder. Note their file names in step 5 so the pair can be checked later. What your creator sees: Your creator reads the rejected change and the conditions line. Both say more about judgement than the improvement does. Your next action: Open Your work and choose Ready for review. The next lesson learns the three panels that have been answering your questions all module.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Re-run the load with the cache disabled and a slow profile and record all three figures.

</details>

<details>
<summary>Hint 2</summary>

Sort your requests by size and time, and address the top of that list.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Making the page fast enough.
Task: Measure your page's weight and time to usable on a slow connection, make three changes, and report the before-and-after with the conditions stated.
Challenge one thing at a time, and start with the mistake this lesson is about: “It feels fast to me.” You are on a fast connection, with a warm cache, on a machine you chose, looking at a page you already understand. None of that describes a first visit on a mid-range phone.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the baseline record and ask whether A baseline is measured with conditions recorded. Look at the change list and ask whether three changes are made, each with a reason. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build three written diagnoses of problems in your own page in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: The developer tools already in your browser. No account, extension or paid tooling is required for anything in this lesson.

- Starting material: Your built page and its known issues.
- Create HaruCourse/Practice/m12-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Learn the three panels

- Read the assigned sections on the browser tools.
- Write which panel answers which kind of question.

**You should end up with:** The three panels named with the kind of question each one answers.

Worksheet fields for this step:

- The three panels, and the kind of question each one answers

<details>
<summary>Help with this step</summary>

- **Inspector:** Select an element and see every rule affecting it, with the losers struck through. It answers why something looks the way it does.
- **Console:** Where errors appear in red, usually with the file and line number. A page can look perfectly fine and be failing here silently.
- **Network panel:** Every request the page made, with its status and size. It answers why something is missing, wrong or slow.

Stuck starting? Open all three tabs on your own page and look at each for a minute before writing anything.

Is it enough? You could say, for a new problem, which panel to open first.

</details>

#### 2. Diagnose a style problem

**See it first.** Made-up example. Diagnosing a card that is wider than its container on a tool-library page, and guessing three times first.

- **What I did first:** Guessed. Changed the width, reloaded. Changed the margin, reloaded. Removed a rule I suspected, reloaded. Twenty minutes, three changes, no improvement, and a stylesheet now slightly worse than it started.
- **What I should have done:** Right-clicked the card and chosen Inspect. The Styles panel lists every rule affecting it, in order, with the ones that lost struck through.
- **What the panel showed:** One width rule, applying cleanly, nothing struck through. The computed size at the bottom of the panel showed 300 of content and 20 of padding on each side.
- **The cause, written down before any fix:** The width applies to the content and the padding is added outside it, so a 300 pixel card measures 340. The box model, not a conflict.
- **Why writing it first mattered:** My guess had been that another rule was winning. Writing the cause forced me to look, and the answer was in a completely different part of the panel from where I had been searching.

**The wrong turn:** The wrong turn is changing things to see what happens, because it feels like progress and each reload takes seconds. Three changes later you have a worse file and the same problem.

**What it costs:** Writing the cause before the fix is slower on the problems you would have guessed right, and those are the minority.

**Still unknown:** Still unknown: whether other cards on other pages have the same arrangement. I fixed one and set box sizing at the top, which probably covers them, and I have not checked.

- Find something that does not look as intended.
- Use the inspector to see the applied and overridden rules.
- Write the cause before touching the code.

**You should end up with:** One style problem reproduced, the inspector evidence recorded, and the cause written before any fix.

Worksheet fields for this step:

- What it looks like, and how you reproduce it
- What the inspector showed: the applied rule and the overridden ones
- The cause, written before the fix

<details>
<summary>Help with this step</summary>

- **Reproducing:** Being able to make it happen again on purpose. A problem you cannot reproduce is not yet understood, however well you can describe it.
- **Overridden rule:** One shown struck through in the Styles panel. The panel is telling you it lost, and naming what beat it.

Stuck starting? Right-click the element and choose Inspect. Read the Styles panel top to bottom before changing anything.

Is it enough? The cause is written in the worksheet and the file is still untouched.

</details>

#### 3. Diagnose a behaviour problem

- Find something that does not work as intended.
- Check the console for errors and read the file and line.
- Write the cause, then fix it.

**You should end up with:** One behaviour problem reproduced, the console message copied exactly, and the cause written before the fix.

**Try it with help.** Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

- A card is wider than the container it sits in.
  - **the inspector** — It is a question about applied styles: which rules are in effect and what the computed size is. The inspector answers both in seconds.
  - the console — Nothing has failed. The page is doing exactly what it was told.
  - the network panel — Everything arrived. The problem is what happened afterwards.
- The filter control does nothing at all when pressed, on one page only.
  - the inspector — It would tell you the control is there and styled. It cannot tell you the script stopped.
  - **the console** — Nothing happening is the classic silent failure. There is almost certainly red text naming a file and a line.
  - the network panel — Worth a look if the script file itself never arrived, and the console will tell you that too.
- One icon shows on your laptop and not on your phone.
  - the inspector — It will show an element expecting an image. It will not say what came back.
  - the console — A missing file sometimes appears here, and the status code is in the network panel.
  - **the network panel** — A 404 for a file whose name differs in capitalisation is the usual answer, because it matters on a server and not on your own machine.
- The page takes far longer to become usable than you expected.
  - the inspector — Styles are not the question. Timing is.
  - the console — It will show errors and not delays.
  - **the network panel** — What was requested, in what order, how big and how long. This is exactly the panel for it.
- A heading is the wrong colour, and the rule you wrote for it appears to be correct.
  - **the inspector** — Your rule will be struck through with the winner above it, or the colour will be arriving by inheritance with no rule at all.
  - the console — Nothing has failed.
  - the network panel — The stylesheet arrived, or nothing would be styled.
- The list is empty, and you are certain the data source has rows in it.
  - the inspector — An empty list looks the same whatever caused it.
  - the console — A good second look, because the answer may have arrived and failed to be read. Start with whether it arrived at all.
  - **the network panel** — Find the request, read its status and open the response. Either nothing came back, or something came back in a shape you did not expect.

**Then:** Now take your own three problems and open the right panel for each before doing anything else.

**What to watch for:** Two of the six could reasonably start in a second panel, and that is fine. The habit worth building is opening one deliberately rather than changing code hopefully.

Worksheet fields for this step:

- What does not work, and how you reproduce it
- What the console said, including the file and the line — Red text names the file and the line number. Copy it exactly rather than summarising it.
- The cause, written before the fix

<details>
<summary>Help with this step</summary>

- **Silent failure:** A page that looks entirely normal while a script has stopped. Nothing on screen says so, and the console says so immediately.
- **File and line:** The two things at the end of an error message. They turn “something is broken” into a specific place to look.

Stuck starting? Reproduce the problem with the console open, and read whatever appears in red.

Is it enough? You have the exact message, the file and the line written down.

</details>

#### 4. Diagnose a loading problem

**See it first.** Made-up example. Diagnosing a missing tool photograph, and believing the first thing the panel said.

- **The symptom:** One photograph showed as a broken image on the listing page. Every other image on the same page was fine.
- **What I assumed:** A wrong path. It is nearly always a wrong path, and I had renamed some files that morning.
- **What the panel actually said:** Status 200. The request succeeded and something came back, which is the opposite of a missing file.
- **What came back:** Clicking the request and opening the response showed a small page of text: the server saying the image was too large and had been rejected. It had arrived, with a 200, and was not an image.
- **What the cause turned out to be:** The original 1.8 megabyte photograph, uploaded before the resizing lesson, over a limit nobody had told me about. The fix was the export, not the path.

**The wrong turn:** The wrong turn is reading the symptom and skipping the status. A broken image looks identical whether nothing came back or the wrong thing came back, and those have completely different causes.

**What it costs:** Opening the response for every failing request is slower than assuming, and most of the time the assumption would have been right.

**Still unknown:** Still unknown: what the limit actually is. The message did not say a number, and I have not found where it is configured.

- Look for anything missing or slow.
- Use the network panel to see the request and its response.
- Write the cause, then fix it.

**You should end up with:** One loading problem reproduced, the request and its status recorded, and the cause written before the fix.

Worksheet fields for this step:

- What is missing or slow, and where
- What the network panel showed: the request, its status and its size — A status of 404 means the file was not found. 200 means it arrived, whatever it looks like on screen.
- The cause, written before the fix

<details>
<summary>Help with this step</summary>

- **Status code:** What the server said: 200 means here it is, 404 means no such file, 500 means something broke at their end. It is the first thing to read.
- **The response:** What actually came back. Clicking a request shows it, which is how you find out that data arrived in a shape you did not expect.

Stuck starting? Reload with the network panel open and find the request for the thing that is missing.

Is it enough? You know whether it arrived, and if so what it contained.

</details>

#### 5. Record

- Note any hypothesis that proved wrong and what it actually was.
- Save the three diagnoses with their evidence.

**You should end up with:** A hypothesis that turned out to be wrong, what it actually was, and the repair the Check questions asked for.

Worksheet fields for this step:

- A hypothesis that turned out to be wrong, and what it actually was — At least one of the three usually is. Recording it is the point of writing causes before fixes.
- Where the three diagnoses and their evidence are saved
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Hypothesis:** Your guess at the cause, written down before you look. Writing it is what makes being wrong visible and useful.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Look back at the three causes you wrote and compare each with what you eventually found.

Is it enough? At least one wrong hypothesis is recorded, because guessing right three times out of three is unusual.

</details>

**Save and continue.** Saved for you: Your panel notes and the three diagnoses save as you type, on this device first and then online. Kept outside the app: Screenshots of the inspector, the console and the network panel stay in your own folder. Note the file names in step 5; the evidence is what makes a diagnosis more than an opinion. What your creator sees: Your creator reads the wrong hypothesis. Writing the cause before the fix is what makes it possible to have one, and a lesson with none is usually a lesson where the fixes came first. Your next action: Open Your work and choose Ready for review. The next lesson puts everything from this module together and runs it on a real phone.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Pick one problem of each kind and use the matching panel to find the cause.

</details>

<details>
<summary>Hint 2</summary>

For your next problem, write the cause in a file before touching the code.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Finding out what is actually happening.
Task: Diagnose three problems in your own page using the element inspector, the console and the network panel, writing the cause before making any fix.
Challenge one thing at a time, and start with the mistake this lesson is about: “Debugging is for developers.” Being able to say “the request returned a 404” or “this rule is being overridden by that one” is what turns a design bug report from a complaint into a starting point, and it saves everyone a round trip.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three diagnoses and ask whether three problems are diagnosed using three different panels. Look at the written causes and ask whether causes are written before fixes. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build the whole prototype, assembled from everything in this module in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: Your local files opened on your phone over the same network, or copied to it. No hosting, deployment or account is required to test on a real device.

- Starting material: Your built pages, data fetching, form and styling.
- Create HaruCourse/Practice/m12-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Assemble

**See it first.** Made-up example. Assembling four tool-library pages, and treating the contradictions as tidying.

- **What I found:** Three contradictions. Two spacing rhythms, two card treatments, and the same action called Reserve on one page and Book on another.
- **What I did with the first two:** Picked one of each and applied it everywhere. Twenty minutes, and the prototype looked like one product.
- **What I did with the third:** The same: chose Reserve, changed the other page, moved on. It felt identical to the other two decisions.
- **Why it was not identical:** Spacing and cards are appearance. Two words for one action is two mental models: on one page the person was holding something for two hours, on the other they were committing to a slot. The wording had drifted because the behaviour had.
- **What I actually had to decide:** Which behaviour was right, and then make both pages do it. That was a design decision an hour long, not a rename, and it went into the inventory rather than the stylesheet.

**The wrong turn:** The wrong turn is treating every contradiction as tidying, because most of them are. The one that is not is usually a wording difference, and wording drifts when behaviour has already drifted.

**What it costs:** Chasing the wording contradiction properly cost an hour in a step that was supposed to be assembly, and it changed a specification in an earlier module.

**Still unknown:** Still unknown: whether holding for two hours is the right behaviour at all. Assembly forced the question and did not answer it, and it goes to the module handover as an open decision.

- Bring the pages together with shared styling and navigation.
- Record every contradiction you have to reconcile.
- Update the inventory and token sheet accordingly.

**You should end up with:** The pages assembled with shared styling and navigation, every contradiction recorded, and the inventory updated.

Worksheet fields for this step:

- Which pages you assembled, and how they share styling and navigation
- Every contradiction you had to reconcile
- What you changed in the inventory and token sheet as a result

<details>
<summary>Help with this step</summary>

- **Assembly:** Putting separately built pages into one thing. It is where contradictions surface, because two pages built a fortnight apart are always slightly two different products.
- **Contradiction:** Two answers to one question: two spacing rhythms, two card treatments, two words for one action. Each has to be decided rather than averaged.

Stuck starting? Put the pages side by side and look for the same thing done two ways before you merge anything.

Is it enough? Every contradiction is written down, including the ones you resolved in seconds.

</details>

#### 2. Re-run the checks

- Re-check headings, landmarks, contrast and keyboard on the assembled result.
- Record anything that passed separately and fails together.

**You should end up with:** Headings, landmarks, contrast and keyboard re-run on the assembled result, with anything that now fails recorded.

Worksheet fields for this step:

- Headings, landmarks, contrast and keyboard on the assembled result
- Anything that passed on its own page and fails now — A shared header can break a heading outline; a component moved onto a tinted panel can fail contrast that passed on white.

<details>
<summary>Help with this step</summary>

- **Passing separately:** Every page being fine on its own. It is not the same as the assembled thing being fine, because the shared parts are new.
- **Shared header:** The commonest source of a broken outline after assembly: a heading in the header plus a page title on the page makes two page titles.

Stuck starting? Start with the heading outline, because the shared header is the thing most likely to have broken it.

Is it enough? You found at least one thing that passed separately and fails together, or you can say you looked for it.

</details>

#### 3. Test on a real phone

**See it first.** Made-up example. Testing a tool-library prototype on a real phone, and testing it in the least real way possible.

- **What I did:** Opened it on my phone at my desk, held in both hands, propped against the monitor, in good light, on my home network. Completed the task in under a minute and found nothing.
- **Why that found nothing:** Two hands, a steady position and a fast connection remove almost everything a phone would otherwise show. It was the emulator with a nicer screen.
- **What I did instead:** Stood up, held it in one hand, and did the task with my thumb while walking to the window.
- **What that found in four minutes:** The Reserve bar sits under the on-screen keyboard while the notes field is focused. The date control is 44 pixels and still awkward, because it sits where the thumb has least reach. My hand covers the availability line while I tap.
- **What I could not test that way:** A poor connection. My home network is fast, so the loading states looked as instant as they do on the laptop, and that stays untested.

**The wrong turn:** The wrong turn is testing on a real device in an unreal posture. Two hands at a desk removes reach, occlusion and the keyboard, which are three of the four things the device was going to tell you.

**What it costs:** One-handed testing is slower and you will mistype things, which is the point and is also frustrating when you are trying to check something else.

**Still unknown:** Still unknown: how it behaves on a slow or intermittent connection on a real network. I tested a device, not a network, and the fakes sheet says so.

- Open the prototype on an actual phone.
- Complete one task by thumb, including a form.
- Record everything the emulated viewport did not show.

**You should end up with:** One task completed by thumb on a real phone, with everything the emulated viewport did not show.

**Try it with help.** Six problems from a made up prototype. For each one, decide what would have found it.

- The sticky Reserve bar sits underneath the on-screen keyboard while a field is focused.
  - the emulated viewport — It has no on-screen keyboard, so the bar looks perfectly placed at every width.
  - **only a real phone** — The keyboard covers the bottom third, and sticky bars live there. Ten minutes on a device finds it immediately.
  - neither — it needs a person — You are the person here, and you will meet it the first time you tap a field.
- At 320 pixels the schedule table forces the page to scroll sideways.
  - **the emulated viewport** — It is purely a width problem, and the emulator sets widths perfectly well. This is what it is for.
  - only a real phone — A phone would show it too, and you do not need one.
  - neither — it needs a person — Nothing subjective about it.
- The date control is comfortable with a mouse and awkward with a thumb, though it meets the target size.
  - the emulated viewport — A pointer clicking a 44 pixel target is accurate in a way a thumb is not. The measurement passes and the experience does not.
  - **only a real phone** — Reach, accuracy and where the hand covers the screen are all things only a hand shows you.
  - neither — it needs a person — Your own thumb is enough to find it. Whether it matters to others is a separate question.
- People do not understand whether Reserve holds the tool or commits them to collecting it.
  - the emulated viewport — Nothing about the layout is involved.
  - only a real phone — It reads the same on every device.
  - **neither — it needs a person** — This is a comprehension question, and it belongs to a session with somebody rather than to any device test.
- A component that passed contrast on white now sits on a tinted panel and fails.
  - **the emulated viewport** — Contrast is measurable on any screen. What found it was re-running the check after assembly rather than the device.
  - only a real phone — A phone adds nothing; the numbers are the same.
  - neither — it needs a person — It is a measurement, not a judgement.
- On a real network in a train the page stalls halfway through loading and never recovers.
  - the emulated viewport — Throttling models a steady slow connection. It does not model dropping out.
  - **only a real phone** — Real networks fail in ways no profile reproduces. This is the honest limit of everything you measured at your desk.
  - neither — it needs a person — You can meet it yourself on a train, which is exactly how it gets found.

**Then:** Now record your own phone findings, and mark which ones the emulator had already shown you.

**What to watch for:** The emulator gets width right and everything else wrong. Anything involving a hand, a keyboard covering the screen, or a real network needs a device; anything about comprehension needs a person, and neither device finds it.

Worksheet fields for this step:

- Which phone, and how you opened the prototype on it — Over your own network, or copied onto the device. No hosting or account is needed.
- The task you completed by thumb, including a form
- Everything the emulated viewport did not show

<details>
<summary>Help with this step</summary>

- **Real device:** An actual phone in your hand. The emulated viewport gets the width right and nothing else: no thumb, no keyboard covering the screen, no real network.
- **On-screen keyboard:** It covers the bottom third of the screen when a field is focused, which is where sticky action bars live. An emulator never shows this.

Stuck starting? Open the prototype on your own phone and complete one task standing up, using only your thumb.

Is it enough? You found something the emulated viewport had not shown you.

</details>

#### 4. Measure again

- Re-run the throttled measurement on the assembled prototype.
- Record weight, requests and time to usable.

**You should end up with:** The assembled prototype measured under the same conditions as lesson 9, with what changed recorded.

Worksheet fields for this step:

- Weight, requests and time to usable, under the same conditions as before
- What changed now that the pages share files

<details>
<summary>Help with this step</summary>

- **Shared files:** One stylesheet across four pages means the second page loads faster than the first. It also means one change reaches all four.

Stuck starting? Use exactly the throttling profile and cache setting you wrote down in lesson 9.

Is it enough? The figures are comparable with your earlier ones because the conditions match.

</details>

#### 5. Update the fakes sheet

- List everything invented, faked or non-functional.
- Write one sentence stating this is a prototype, not a product.
- Save the prototype, the checks and the sheet.

**You should end up with:** Everything invented, faked or non-functional listed, and one sentence saying this is a prototype rather than a product.

Worksheet fields for this step:

- Everything invented, faked or not working — Invented data, a payment that goes nowhere, a search box that does nothing, one working path and no others.
- One sentence saying this is a prototype rather than a product
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Fakes sheet:** The written list of what is invented. Without it somebody plans around a search box that does nothing or a payment that goes nowhere.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Walk the prototype pretending you are somebody else and note everything that would disappoint them.

Is it enough? Somebody could read the sheet and know exactly what they must not rely on.

</details>

**Save and continue.** Saved for you: The contradictions, the re-run checks, the phone findings, the measurements and the fakes sheet save as you type, on this device first and then online. Kept outside the app: The prototype stays in your own folder and on your own phone. Nothing is hosted, deployed or uploaded to produce the device test. What your creator sees: Your creator reads the contradictions and the fakes sheet. A contradiction that turned out to be a design decision is the most useful thing assembly produces. Your next action: Open Your work and choose Ready for review. The last lesson of the module turns all of this into a conversation with an engineer.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Walk the main task and connect whatever is missing, including one failure route.

</details>

<details>
<summary>Hint 2</summary>

Compare the pages side by side for spacing, components and wording, and list every difference.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The whole thing, running.
Task: Assemble your pages into one working responsive prototype with real data, accessible structure and measured performance, and test it on a real phone.
Challenge one thing at a time, and start with the mistake this lesson is about: “It runs, so it is nearly a product.” It runs with your data, on your machine, for the paths you built. Real products meet volume, edge cases, other people's content, security requirements and years of change.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the running prototype and ask whether the prototype is assembled and runs end to end. Look at the contradiction list and ask whether contradictions are recorded and reconciled. Anything you cannot show, write down as untested rather than assuming it holds.

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

**Where to practise:** Build a technical handover document for one feature in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

Tools: A written document plus your existing artefacts. No handover platform is required; a clear Markdown file with links is better than most of them.

- Starting material: Your prototype, key tables and state specifications.
- Create HaruCourse/Practice/m12-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Assemble the handover

**See it first.** Made-up example. Handing over a tool-library booking feature, and handing over the part that was easiest to export.

- **What I sent:** Twelve screens, annotated, with spacing and colours marked. It took an afternoon to prepare and it looked thorough.
- **What came back three days later:** Eleven questions, all of the same kind. What happens if the tool is taken while somebody is filling the form. What the list shows before the data arrives. What happens if the date is a day with no classes.
- **What the screens had said about any of that:** Nothing. Every screen was a moment when everything had gone right, and eleven of the questions were about the moments when it had not.
- **What I sent instead:** The flow with its states, the four data branches with their exact wording, the key tables, the responsive rules, and the accessibility notes marked tested or specified.
- **What that changed:** The questions that came back were about cost rather than about intent, which is the conversation I had wanted in the first place.

**The wrong turn:** The wrong turn is handing over appearance, because appearance is what a design tool exports and it exports beautifully. Behaviour and states are the part somebody has to build and the part screenshots cannot carry.

**What it costs:** A behaviour document is duller to produce and nobody admires it. It also stops the three days of questions, and the questions were never about the spacing.

**Still unknown:** Still unknown: whether the four branches cover everything that can happen. Eleven questions found the ones I had missed, and there may be more that nobody has thought of yet.

- Collect the flow, states, key tables, responsive rules and accessibility notes.
- Write them as one document a developer could work from.
- Include the wording for every message.

**You should end up with:** One document covering flow, states, key tables, responsive rules and accessibility notes, with exact wording and a tested-versus-specified split.

Worksheet fields for this step:

- What the document contains, section by section — Flow with states, component specifications with key tables, the four data branches with wording, responsive rules, accessibility notes with what was tested.
- Where the exact wording of every message lives in it — If the wording is only in screenshots, somebody will retype it and change it.
- How the document separates what was tested from what was specified

<details>
<summary>Help with this step</summary>

- **Handover:** A document somebody could build from. Behaviour and states, not only appearance, because appearance is the part screenshots already carry.
- **Exact wording:** The messages written as text in the document. Wording that exists only inside a picture gets retyped, and retyped wording drifts.

Stuck starting? List the sections first, then fill them from artefacts you already have rather than writing anything new.

Is it enough? Somebody could build the feature from the document without opening your design file.

</details>

#### 2. Write the questions

**See it first.** Made-up example. Asking an engineer about a held-place timer on a tool-library feature, and asking the question that always gets a yes.

- **What I asked first:** “Is it possible to hold a tool for two hours and show a countdown?” The answer was yes, in about four seconds, and I wrote it down as settled.
- **What I found out later:** Yes meant yes, and the timer would be accurate on the device that started it and roughly right on any other, because the hold lives in one place and the countdown in another.
- **Why that mattered:** My design showed the countdown on the confirmation screen, the list and the email. Two of those three would have been wrong by up to a minute, which is a promise breaking rather than a display wobbling.
- **What I should have asked:** “What would it cost to keep the countdown accurate across devices, and what is the error if we do not?” That is a question with a number in the answer.
- **What I did with the real answer:** Showed an exact time rather than a countdown in two of the three places. The expensive version was not needed once the question was specific.

**The wrong turn:** The wrong turn is asking whether something is possible, because almost everything is and the answer closes the conversation. Cost and error are where the design decision actually is.

**What it costs:** Cost-shaped questions take longer to answer and sometimes cannot be answered on the spot, so you leave the conversation with less certainty than a yes would have given you.

**Still unknown:** Still unknown: what the actual drift is in seconds. The answer was “up to about a minute”, which was enough to change the design and is not a measurement.

- Write three questions about cost and constraint rather than possibility.
- Make each specific to a decision in this feature.

**You should end up with:** Three questions about cost and constraint, each tied to a decision in this feature.

Worksheet fields for this step, revealed a few at a time in the app:

- Question 1 · the question, and the decision it would inform
- Question 2 · the question, and the decision it would inform
- Question 3 · the question, and the decision it would inform

<details>
<summary>Help with this step</summary>

- **A cost-shaped question:** One that asks what something would take, or what it forecloses. “Is this possible?” is almost always yes, which is why it tells you nothing.
- **Constraint:** Something already decided that limits what is cheap now: a data shape, a platform, an existing component. Knowing them early changes what you design.

Stuck starting? Take a decision you have not been able to make and write the question that would settle it.

Is it enough? None of your three questions can be answered with yes.

</details>

#### 3. Declare the fakes

- Attach the fakes sheet and mark anything an engineer might assume works.
- State what data shape you invented.

**You should end up with:** Everything an engineer might assume works declared, and the data shape named as invented where it is.

Worksheet fields for this step:

- What an engineer might assume works and does not
- The data shape you invented, and where you got it from — If you made the field names up, say so. Planning around an invented shape is expensive to undo.

<details>
<summary>Help with this step</summary>

- **Invented data shape:** Field names and structures you made up so the prototype could run. Planning around them is expensive to undo, so they have to be labelled.
- **Assumed to work:** Anything that looks finished and is not: a search box that does nothing, a payment that goes nowhere, one path that works out of five.

Stuck starting? Open your fakes sheet from the previous lesson and mark anything that looks convincing enough to be assumed.

Is it enough? Nothing in the handover could be planned around by mistake.

</details>

#### 4. Ask someone

- If you can, ask your questions of a developer and record the answers.
- If not, record that the questions are unasked and what you expect.

**You should end up with:** The questions asked of somebody, or an honest record that they are unasked with what you expect.

**Try it with help.** Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

- Is it possible to show a countdown while a tool is held?
  - a useful answer — You will get an answer in four seconds and learn nothing from it.
  - **a yes that settles nothing** — Almost everything is possible. The design decision is about cost and accuracy, and this question asks about neither.
  - a question they cannot answer yet — They can answer it easily. That is the problem.
- What would it cost to keep that countdown accurate across two devices, and how wrong is it if we do not?
  - **a useful answer** — It asks for a number and a bound. Either answer changes what you design, which is the test of a good question.
  - a yes that settles nothing — There is no yes available to it.
  - a question they cannot answer yet — It is exactly the sort of thing an engineer can estimate, even roughly.
- What does the current data shape make expensive to change later?
  - **a useful answer** — It surfaces constraints before you design against them. Answers here often change a whole flow cheaply.
  - a yes that settles nothing — It cannot be answered with yes.
  - a question they cannot answer yet — It is one of the things they know best.
- How long will the whole feature take to build?
  - a useful answer — You will get a number with no confidence behind it, which is worse than no number.
  - a yes that settles nothing — It is not a yes-or-no question.
  - **a question they cannot answer yet** — Not from a handover read once. Sliced into pieces with acceptance criteria, it becomes answerable, and that is a later module.
- Which of these four states need work on the server rather than in the page?
  - **a useful answer** — It tells you which parts of your design are cheap to change and which are not, which is what you need before iterating.
  - a yes that settles nothing — There is no yes.
  - a question they cannot answer yet — They can, and quickly.
- Is there a better way to do this?
  - a useful answer — Occasionally it produces one, and usually it produces a polite pause, because better depends on what you are optimising for.
  - a yes that settles nothing — It is not really a yes-or-no question, though it often receives a no.
  - **a question they cannot answer yet** — Not without knowing which constraint you care about. Naming that turns it into one of the useful questions above.

**Then:** Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

**What to watch for:** The two useless shapes are opposite. Is it possible gets an instant yes that settles nothing; how long will it take asks for certainty nobody has yet. The useful ones sit in between and ask what something costs or forecloses.

Worksheet fields for this step:

- Who you asked, or that the questions are unasked — Unasked is an honest answer. Write what you expect the answers to be, so you can compare later.
- What they said, or what you expect

<details>
<summary>Help with this step</summary>

- **Unasked:** A complete and honest answer to this step. Writing what you expect lets you compare later, which is more useful than an invented answer.

Stuck starting? Ask if you can. If you cannot, write down the answers you expect and date it.

Is it enough? Either you have answers, or you have written expectations you can check against later.

</details>

#### 5. Write what you learned

- List three things you understand now that you did not before.
- Include at least one where you were previously wrong.
- Save the handover, questions and reflection.

**You should end up with:** Three things you understand now that you did not, including at least one where you were previously wrong.

Worksheet fields for this step:

- Three things you understand now that you did not before this module
- At least one where you were previously wrong
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Where you were wrong:** Something you believed before this module and no longer do. It is the most useful item on the list and the hardest to write.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Look back at what you expected at the start of the module and find the first thing that turned out differently.

Is it enough? At least one item is about a belief you had, not about a skill you gained.

</details>

**Save and continue.** Saved for you: Your handover outline, the three questions, the fakes declaration and the reflection save as you type, on this device first and then online. Kept outside the app: The handover document itself is a file in your own folder, alongside the prototype it describes. A clear plain document with links beats any handover platform for this. What your creator sees: Your creator reads the three questions and the thing you were wrong about. Both are better evidence of what this module did than the prototype is. Your next action: Open Your work and choose Ready for review. This closes Module 12. Module 13 turns the components you built into a system somebody else could use.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Collect your existing specifications into one file; most of the content already exists.

</details>

<details>
<summary>Hint 2</summary>

Rewrite each question as “what would it take to …” or “what does this make harder later”.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Talking to engineers about what you built.
Task: Write a technical handover for one feature, ask three precise questions an engineer would find useful, and record what you now understand that you did not before this module.
Challenge one thing at a time, and start with the mistake this lesson is about: “Designers who code are more valuable.” Designers who understand the material are more valuable. Writing production code is a different job; being able to read it, build a prototype, and ask precise questions is the part that makes design work land.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the handover document and ask whether the handover covers behaviour and states, not only appearance. Look at the three questions and ask whether three questions are about cost and constraint. Anything you cannot show, write down as untested rather than assuming it holds.

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
