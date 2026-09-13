# Web foundations and responsive behavior

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the all-course action contract](docs/COURSE-AUTHORING.md#all-course-action-contract--13-september-2026). All 224 published teaching lessons use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module12.ts; edit that source, then run npm run docs:generate. Level 4 · Module m12 · requirement areas 13. Optional effort 35 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m11. This is guidance for meaningful practice, not a lock. Module approved resource pair: R15 / R16. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What happens between a tap and a page

Stable ID: m12-l01-v1. Core.

Design decisions about images, fonts and structure become performance decisions here. You cannot weigh them without knowing what the browser is doing.

Bring: A browser and any page you can load repeatedly.

Starting route: Recommended route: Build nothing yet — this lesson watches a page that already exists in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A traced load with each stage named
- A request list with sizes and times
- Two design-owned findings from the trace
- A note of what appeared first and what the person could do while waiting

### Start with a clear task

Section: learn. Stable action: welcome.

Trace one real page load from request to rendered content, name each stage, and identify the two stages your design decisions can affect.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

A page load is a sequence: request, response, parse, fetch more, render, become interactive.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

HTML arrives first; everything it references is a further request.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Fonts, images and scripts each delay something different.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

The network tab shows the real sequence, not the intended one.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Design choices decide how much is requested and in what order.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- One real class page traced in the network tab: the document arrived in 300ms, then two stylesheets, three font files, eleven images and four scripts — twenty-one requests before the page was usable, taking eleven seconds on a throttled connection. The two design-owned findings: three typefaces were being loaded and only two were used, and the hero image was 1.8 MB and appeared above every piece of text, so nothing readable appeared until it arrived. Both were design decisions; neither needed an engineer to identify.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build nothing yet — this lesson watches a page that already exists in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the sequence

Section: practice-plan. Stable action: step-1-brief.

The stages of a page load written in your own words, in order.

- Read the assigned introduction to how the web works.
- Write the stages of a page load in your own words.

**Start here:** Write the six stages as six short sentences without looking anything up, then read the assigned introduction and correct them.

**Enough:** Your list says what happens in order, and you could explain it to somebody without using the word optimisation.

**Request:** Your browser asking a server for one file. A page is never one request; it is one request that leads to many more.

**Parse:** The browser reading the HTML it received and working out what it says. It is during this that it discovers everything else it has to ask for.

**Render:** Drawing the page on screen. It can begin before everything has arrived, which is why what you put first matters so much.


### The stages of a page load, in your own words

Section: practice-plan. Stable action: write-stages.

Ask for it, get it back, read it, ask for the things it mentions, draw it, let the person use it. Six short lines is plenty.

**Answer:** The stages of a page load, in your own words

Ask for it, get it back, read it, ask for the things it mentions, draw it, let the person use it. Six short lines is plenty.


### Trace a real load

Section: practice-plan. Stable action: step-2-brief.

One real page load traced, with the number of requests, the total bytes, the time, and how that splits by kind.

- Open the network tab, disable the cache and reload a real page.
- Record the number of requests, the total size and the time.
- Note which requests are images, fonts, scripts and styles.

**Start here:** Press F12, click the Network tab, tick Disable cache, then reload the page with developer tools still open.

**Enough:** Your request count is more than a handful, which means you measured it as a stranger would meet it.

**Developer tools:** A panel built into your browser. F12 opens it on Windows, or right-click the page and choose Inspect. It is free, already installed, and needs no account.

**The network panel:** The tab that lists every request the page made, with its size and how long it took. It shows the real sequence rather than the intended one.

**Disable cache:** A tickbox at the top of the network panel. With it off, your browser reuses files it already has and the page looks far faster than it is for a new visitor.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Tracing a tool-library page for the first time, and measuring a page the browser already had.

**What I did:** Opened developer tools, clicked Network, reloaded the page. Four requests, 40 kilobytes, 200 milliseconds. I wrote it down and thought the page was in excellent shape.

**What looked odd:** Four requests for a page with nine photographs on it. The numbers did not match what I could see.

**What was happening:** My browser already had almost everything from the last time I looked at the page. It was asking for four things and reusing the rest from its own store.

**What I changed:** Ticked Disable cache at the top of the panel, left developer tools open, and reloaded again.

**What it actually was:** 21 requests, 2.6 megabytes, 3.1 seconds. The same page, measured as a first-time visitor meets it rather than as I meet it.

**Wrong turn:** The wrong turn is measuring with the cache on, which is the default and which flatters every page you have visited before. The numbers look excellent and describe nobody but you.

**Trade-off:** Disabling the cache means every reload is slow while you work, which is tedious. It is the only way the numbers describe a new visitor.

**Unknown:** Still unknown: what a phone on a real network does with the same page. The desktop numbers are a floor, and the next step makes them more honest rather than making them true.


### Which page you traced, and in which browser

Section: practice-plan. Stable action: write-page-traced.

Write your answer for “Which page you traced, and in which browser”. Use the task instructions below to decide what to include.

**Answer:** Which page you traced, and in which browser




### How many requests, how many bytes in total, and how long

Section: practice-plan. Stable action: write-request-count.

Write your answer for “How many requests, how many bytes in total, and how long”. Use the task instructions below to decide what to include.

**Answer:** How many requests, how many bytes in total, and how long



<details>
<summary>Example</summary>

Example (made up): 21 requests, 2.6 MB, 3.1 seconds on my normal connection.

</details>


### How that splits into documents, styles, fonts, scripts and images

Section: practice-plan. Stable action: write-request-kinds.

The filter buttons at the top of the network panel do this for you. Write the counts and the biggest item in each group.

**Answer:** How that splits into documents, styles, fonts, scripts and images

The filter buttons at the top of the network panel do this for you. Write the counts and the biggest item in each group.


### Throttle it

Section: practice-plan. Stable action: step-3-brief.

The same page reloaded on a throttled connection, with when text first appeared, when it became usable, and anything that moved.

- Set a slow connection profile and reload.
- Record when the first text appeared and when the page became usable.
- Note anything that shifted position as it loaded.

**Start here:** Choose a slow profile in the throttling dropdown, reload, and watch the screen rather than the numbers.

**Enough:** You have two separate times written down, and they are different from one another.

**Throttling:** Telling the browser to pretend the connection is slow. It is a dropdown in the network panel, usually offering profiles like Slow 4G.

**Time to usable:** When the person could do something, not when loading stopped. It is the number that describes the experience.

**Layout shift:** Content jumping as something arrives late, usually an image with no reserved space. People tap the wrong thing because of it.


### Which throttling profile you chose

Section: practice-plan. Stable action: write-throttle-setting.

Write your answer for “Which throttling profile you chose”. Use the task instructions below to decide what to include.

**Answer:** Which throttling profile you chose




### When the first readable text appeared

Section: practice-plan. Stable action: write-first-text.

Write your answer for “When the first readable text appeared”. Use the task instructions below to decide what to include.

**Answer:** When the first readable text appeared




### When the person could actually do something, and what that something was

Section: practice-plan. Stable action: write-usable-at.

Write your answer for “When the person could actually do something, and what that something was”. Use the task instructions below to decide what to include.

**Answer:** When the person could actually do something, and what that something was



<details>
<summary>Example</summary>

Example (made up): about 11 seconds, when the search box and the first four results were readable.

</details>


### Anything that jumped or moved as the rest arrived

Section: practice-plan. Stable action: write-shifting.

Write your answer for “Anything that jumped or moved as the rest arrived”. Use the task instructions below to decide what to include.

**Answer:** Anything that jumped or moved as the rest arrived




### Find the design-owned costs

Section: practice-plan. Stable action: step-4-brief.

Every request that exists because of a design decision, and two you could reduce without changing what the product does.

- List every request that exists because of a design decision.
- Identify two you could remove or reduce without changing the product.

**Start here:** Go down your request list and mark each row design, engineering or content before choosing anything.

**Enough:** Both findings come from the design column, and you could make either one yourself.

**Design-owned cost:** Weight that exists because of a choice made in a design file: a typeface, a photograph, an icon set. Nobody can optimise it away without changing the design.

**Engineering-owned cost:** Weight that comes from how the thing was built: libraries, bundles, duplicated code. It is real and it is not yours to change here.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

A third typeface file, 78 kilobytes, used only by the quotation on the home page.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — Somebody chose three typefaces in a design file. Nobody can make the third one free; it can only be removed, and that is a design change.

an engineering decision — How the font is loaded is an engineering matter. That there are three of them is not.

the content itself — The quotation is content. The typeface it is set in is a choice about the quotation.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

A photograph at the top of the page, 1.8 megabytes, sitting above every piece of text.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — Its size can be reduced by engineering, and its position above all the text is why nothing readable appears until it arrives. The position is a design decision and it dominates.

an engineering decision — Compressing it is theirs. Putting it in front of the words is yours.

the content itself — A decorative header photograph is not what anybody came for.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

A JavaScript library, 130 kilobytes, providing the date picker and four things nobody uses.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — You asked for a date picker. Which library provides it is not a design choice.

an engineering decision — Choosing, replacing or trimming a library is engineering work, and you can raise it without owning it.

the content itself — Nothing here is content.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

Nine photographs of the actual tools, one per listing, at 40 kilobytes each.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — Their size and format are design-adjacent. That people want to see the drill before borrowing it is not a decision anybody is going to reverse.

an engineering decision — Loading them only when scrolled to is an engineering choice, and it does not change that they belong to the page.

the content itself — This is what the page is. Weight that is the point of the page is the last thing to attack.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

An icon font, 96 kilobytes, from which the page uses six icons.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — Six icons do not need a set of four hundred. Which icons the design uses, and whether they come as a set, is yours.

an engineering decision — They may well suggest a better delivery. The number of icons the design depends on is decided before that.

the content itself — Icons decorate and label the content; they are not it.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six requests from a made up trace of a tool-library page. For each one, decide whose decision put it there.

Three tracking scripts, 60 kilobytes together, none of which draws anything.

- a design decision
- an engineering decision
- the content itself

<details>
<summary>After your attempt</summary>

a design decision — Nothing in the design asked for them, and nothing about them appears on screen.

an engineering decision — They arrive through decisions about measurement and tooling. Worth raising, and not yours to remove.

the content itself — They draw nothing and tell the reader nothing.

Now mark your own request list the same way, and take your two findings from the design column.

</details>


### Every request that exists because of a design decision

Section: practice-plan. Stable action: write-design-requests.

Typefaces, photographs, icons, decorative images, anything chosen in a design file rather than written in code.

**Answer:** Every request that exists because of a design decision

Typefaces, photographs, icons, decorative images, anything chosen in a design file rather than written in code.


### Two you could remove or reduce without changing what the product does

Section: practice-plan. Stable action: write-two-findings.

Write your answer for “Two you could remove or reduce without changing what the product does”. Use the task instructions below to decide what to include.

**Answer:** Two you could remove or reduce without changing what the product does




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your first trace showed four requests and 40 kilobytes. What is the most likely explanation?

- The browser reused most of the page from its own store, because Disable cache was not ticked.
- The page is genuinely very light.
- The network panel only records the first few requests.

<details>
<summary>After your attempt</summary>

The browser reused most of the page from its own store, because Disable cache was not ticked. — It is the default, and it makes every page you have visited before look excellent. The tickbox sits at the top of the network panel and has to be on before you reload.

The page is genuinely very light. — Possible, and four requests for a page with photographs on it does not add up. Check the tickbox before believing the number.

The network panel only records the first few requests. — It records everything from the moment it is open. What it does not do is force the browser to ask for things it already has.

Improve: Redo the trace in step 2 with Disable cache ticked and replace the numbers. Record the change in step 5.

Check again: Your request count reflects a first-time visitor rather than a return one.

Answers to revisit: page-traced, request-count, request-kinds, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody tells you performance is the engineer’s problem. What is the strongest reply?

- Engineers optimise what exists. How many typefaces there are, and whether anything readable appears before the photograph, are decided in the design.
- Designers should learn to optimise images themselves.
- Performance is everybody’s responsibility.

<details>
<summary>After your attempt</summary>

Engineers optimise what exists. How many typefaces there are, and whether anything readable appears before the photograph, are decided in the design. — Compression, caching and bundling are theirs. The number of requests and their order usually dominate, and both come from a design file.

Designers should learn to optimise images themselves. — Useful, and it concedes the point. The argument is about which decisions create the weight, not about who compresses it.

Performance is everybody’s responsibility. — True and unhelpful in a conversation. Naming the two specific costs you found is what changes anything.

Improve: Check your two findings in step 4 are things you could change in a design file, and swap any that are not. Record the change in step 5.

Check again: Neither finding needs an engineer in order to begin.

Answers to revisit: design-requests, two-findings, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your throttled load finished at 18 seconds. Is that the number to report?

- Not on its own. When the person could do something matters more, and it is usually much earlier.
- Yes, since it is when the page was fully ready.
- Yes, because it is the number the browser gives you.

<details>
<summary>After your attempt</summary>

Not on its own. When the person could do something matters more, and it is usually much earlier. — Loading finishing includes photographs nobody has scrolled to. Time to usable describes the experience, and needs you to say what usable meant on that page.

Yes, since it is when the page was fully ready. — Fully ready is rarely what anybody waits for. People start reading and tapping long before it.

Yes, because it is the number the browser gives you. — It is the easiest number to read off, which is exactly why it gets reported. The useful one takes a judgement about what usable means.

Improve: Write the moment the person could act, and what they could do, in the usable field in step 3. Record the change in step 5.

Check again: Your record holds two different times, with the second one defined.

Answers to revisit: throttle-setting, first-text, usable-at, shifting, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The two findings written as design changes, the evidence saved, and the repair the Check questions asked for.

- Write the two findings as design changes, not engineering tasks.
- Save the request list and the timings.

**Start here:** Take finding one and finish this sentence: “in the design file, I would …”.

**Enough:** Neither finding needs anybody else in order to be started.

**Written as a design change:** Something you can do in your own file: remove the third typeface, move the photograph below the first paragraph, use six icons rather than a set.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### See the decision being made

Section: practice. Stable action: step-5-demo.

Made-up example. Writing up two findings from a tool-library trace, and writing them as somebody else’s work.

**What I wrote first:** “Optimise the font loading strategy” and “implement lazy loading for below-the-fold images”. Both are real improvements and both sounded properly technical.

**What happened to them:** They went onto an engineering list behind fourteen other things and stayed there. Nobody disagreed with them; nobody had a reason to do them this month.

**What I actually had:** Three typefaces loading and two in use. A 1.8 megabyte photograph sitting above every word on the page.

**What those look like as design changes:** “Remove the third typeface from the design; it is used once, on the home page quotation.” “Move the header photograph below the first paragraph so the text can be read while it loads.”

**What changed:** Both were things I could do in my own file that afternoon. The first needed nobody’s permission; the second needed one conversation about the home page.

**Wrong turn:** The wrong turn is translating your own findings into engineering language, because it sounds more credible. What it does is hand away the two changes you were in a position to make.

**Trade-off:** Written as design changes, the findings are smaller and less impressive, and they do not cover the framework or the tracking scripts. Those remain worth raising, by somebody who owns them.

**Unknown:** Still unknown: how much time either change actually saves. The trace tells me the weight and the order, not what the saving will be once both are done.


### Your two findings written as design changes rather than engineering tasks

Section: practice. Stable action: write-findings-as-changes.

Write your answer for “Your two findings written as design changes rather than engineering tasks”. Use the task instructions below to decide what to include.

**Answer:** Your two findings written as design changes rather than engineering tasks



<details>
<summary>Example</summary>

Example (made up): three typefaces load and two are used. Remove the third from the design.

</details>


### Where you saved the request list and the timings

Section: practice. Stable action: write-trace-saved.

A screenshot of the network panel is enough. Note its file name; it stays in your own folder.

**Answer:** Where you saved the request list and the timings

A screenshot of the network panel is enough. Note its file name; it stays in your own folder.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson builds one page of your own, in markup that means something.


<details>
<summary>Optional hints and reference material</summary>

- Write the sequence as a list and add one sentence per stage saying what the browser is doing.
- Reload with the cache disabled and record the totals from the network tab.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The introductory modules on how the web works and what a browser does with HTML, CSS and JavaScript. Purpose: Supplies the sequence and vocabulary this module is built on. Free text documentation, no account. Verified 2026-09-06. Use the free written articles; exclude any promoted paid partner courses. It teaches implementation, not design judgement. Fallback: R16.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — The network panel: request list, sizes, timing and throttling profiles. Purpose: Gives the instrument for seeing the real sequence rather than the intended one. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a dropped connection. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The load stages are named in the learner's own words**

Adequate evidence: A written sequence from request to interactive.

0 — No sequence.

1 — Copied terminology without meaning attached.

2 — Stages named and explained in the learner's own words.

3 — As adequate, and each stage names what could delay it.

Repair: Write the sequence as a list and add one sentence per stage saying what the browser is doing. Recheck: The written sequence.

**A real trace records requests, sizes and times**

Adequate evidence: A recorded trace with counts, total weight and duration, cache disabled.

0 — No trace.

1 — Traced with the cache enabled, so costs are hidden.

2 — Traced with the cache disabled and figures recorded.

3 — As adequate, and requests are grouped by type so the biggest category is visible.

Repair: Reload with the cache disabled and record the totals from the network tab. Recheck: The trace record.

**A throttled load records first text and time to usable**

Adequate evidence: Timings for first readable content and interactivity under a slow profile.

0 — Not throttled.

1 — Throttled without timings.

2 — Both timings recorded with the profile named.

3 — As adequate, and any content shifting during load is noted.

Repair: Set a slow profile, reload, and time when you could first read and first act. Recheck: The throttled timings.

**Two findings are stated as design changes**

Adequate evidence: Two specific changes a designer could make, traced to requests in the list.

0 — Findings framed as engineering work.

1 — One design-owned finding.

2 — Two, each traced to a specific request.

3 — As adequate, and one is quantified — the weight or time it would save.

Repair: Look at the largest requests and ask which exist because of a design choice. Recheck: The two findings.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson builds one page of your own, in markup that means something.

**Review criteria:**

- The load stages are named in the learner's own words
- A real trace records requests, sizes and times
- A throttled load records first text and time to usable
- Two findings are stated as design changes

<details>
<summary>Reading, video and deeper explanation</summary>

- When someone opens a page, the browser asks a server for a document, receives HTML, and starts reading it. Every stylesheet, font, image and script referenced in that HTML becomes another request, and each one takes time proportional to its size and the connection. This is why a design with four typefaces and a hero video is a performance decision made at the moment of designing, long before anyone writes code.
- The stages fail differently. A slow stylesheet delays the first paint, so the person sees nothing. A slow font can leave text invisible or shifting when it swaps. A slow script can leave a page that looks finished and does not respond, which is the most confusing failure of all because the person taps and nothing happens.
- The network tab in your browser shows the real sequence: what was requested, in what order, how big it was and how long it took. Reading it once for a real page is more instructive than any amount of general advice about performance, and it costs ten minutes.
- Two stages are yours. How much is requested — the number and weight of images, fonts and scripts — is a design decision. And what appears first is a structural decision, because the browser renders what it has: a page whose text arrives before its images shows something useful immediately, and one that waits for everything shows nothing.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 2: HTML that means something

Stable ID: m12-l02-v1. Core.

The elements you choose are what assistive technology, search and translation read. Styling is what everyone else reads.

Bring: Your m11 outline and region map, and a text editor.

Starting route: Recommended route: Build one page of your product as a real HTML file in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- One page in semantic HTML with correct heading levels
- Landmarks for banner, navigation, main and footer
- Links and buttons used for their correct purposes
- A stylesheet-off reading with problems found and fixed

### Start with a clear task

Section: learn. Stable action: welcome.

Build one page of your product in semantic HTML, with the heading outline and regions from m11, and verify the structure without looking at the styling.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Elements carry meaning: a heading, a list, a button, a link are different things.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

A link goes somewhere; a button does something. Swapping them breaks behaviour.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Landmarks and headings give the page its navigable structure.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Lists, tables and definitions exist because content has shapes.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

If the page makes sense with the stylesheet removed, the markup is sound.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The class detail page was rebuilt in semantic HTML: one page title, four section headings at the right levels, the class list as a list, the schedule as a table with header cells, the booking action as a button and the “see other dates” as a link. Removing the stylesheet produced a readable document with a clear outline. Three earlier mistakes surfaced during the rebuild: the availability status had been a coloured div with no text, the filter controls were links that performed actions, and the price table was built from divs so its columns had no headers.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build one page of your product as a real HTML file in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read and plan the markup

Section: practice-plan. Stable action: step-1-brief.

Your Module 11 outline carried across with levels, and an element chosen for each piece of content.

- Read the assigned HTML module sections on structure and semantics.
- Map your m11 outline onto heading elements and landmarks.

**Start here:** Copy your Module 11 outline into the first field and write the level beside each line before choosing any element.

**Enough:** Every piece of content has an element named, including the ones that are just paragraphs.

**Semantic element:** One whose name says what the content is: a heading, a list, a table, a button. The name is what assistive technology, search and translation read.

**Generic container:** A box with no meaning at all. It is the right choice when something is purely for layout and the wrong one everywhere else.

**Landmark:** A named region of the page: banner, navigation, main, footer. It is how somebody jumps past the menu to the content.


### Your Module 11 outline, with the heading level beside each line

Section: practice-plan. Stable action: write-outline-mapping.

You already decided these levels. This step copies them across rather than deciding them again.

**Answer:** Your Module 11 outline, with the heading level beside each line

You already decided these levels. This step copies them across rather than deciding them again.


### For each piece of content: the element whose shape matches it

Section: practice-plan. Stable action: write-elements-planned.

Write your answer for “For each piece of content: the element whose shape matches it”. Use the task instructions below to decide what to include.

**Answer:** For each piece of content: the element whose shape matches it



<details>
<summary>Example</summary>

Example (made up): the three dates are a list, the price comparison is a table with header cells, Reserve is a button, See other dates is a link.

</details>


### Build the page

Section: practice-plan. Stable action: step-2-brief.

One page built in a file of your own, using real content, with any trouble and its recovery written down.

- Write the page using elements that match the content's shape.
- Use a button for actions and a link for navigation.
- Include the real content, not placeholder text.

**Start here:** Make a folder, save a file called index.html in it, type the page, then double-click the file to see it.

**Enough:** The page opens in your browser and shows your own content, however plain it looks.

**HTML file:** An ordinary text file whose name ends in .html. Double-click it and your browser opens it. Nothing is installed and no server is running.

**Button and link:** A link goes somewhere; a button does something. They behave differently from a keyboard, and swapping them breaks that behaviour silently.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Building the tool detail page, and using a link for something that was not going anywhere.

**What I built:** The Reserve control as a link, styled to look like a button. On screen it was indistinguishable from the real thing, and it worked when clicked.

**Why I did it:** The link was what the template had. Styling it was one line, and I was thinking about how it looked rather than what it was.

**What broke:** From the keyboard, enter activated it and the space bar did nothing. A button responds to both; a link responds only to enter. People who work by keyboard press space on buttons.

**What else was wrong:** It was announced as a link, so somebody listening was told they were about to go somewhere. They were about to reserve a drill.

**What I changed:** Made it a button. The styling stayed exactly the same and two behaviours came back that I had not written a line of code for.

**Wrong turn:** The wrong turn is choosing the element by how it will look, because styling makes any element look like any other. What you lose is the behaviour that came free with the right one.

**Trade-off:** Using the right element sometimes means undoing styling that assumed the wrong one, which is fiddly on a page you have already built.

**Unknown:** Still unknown: whether anything else on the page is the wrong element underneath its styling. The unstyled reading in the next step is what finds those.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six controls from a made up tool-library page. For each one, decide what it should be.

Reserve this drill, which holds the item for two hours and stays on the same page.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — Something happens and you stay where you are. That is a button, and it responds to both enter and the space bar.

a link — Nobody is going anywhere. Announced as a link, it tells a listener the opposite of what it does.

plain text — It is the main action on the page.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six controls from a made up tool-library page. For each one, decide what it should be.

See other dates, which opens a different page listing every available slot.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — A button says something will happen here. This takes the person somewhere else, which is worth knowing in advance.

a link — It goes somewhere, so it is a link, and it can be opened in a new tab like any other.

plain text — It is a route to another page and has to be reachable.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six controls from a made up tool-library page. For each one, decide what it should be.

A filter control that narrows the list on the same page.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — It changes what is on this page rather than moving anywhere. The keyboard behaviour that comes with a button is exactly what filtering needs.

a link — This is the commonest version of the mistake, because filters often carry a web address. The person is not navigating; they are acting.

plain text — It has to be operable.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six controls from a made up tool-library page. For each one, decide what it should be.

The words On loan beside an item, which say its current state.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — Nothing happens when you press it, and making it pressable invites people to try.

a link — It leads nowhere.

plain text — Status is information. Not everything in a list is a control, and marking information as a control is its own failure.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six controls from a made up tool-library page. For each one, decide what it should be.

The library logo at the top, which takes you to the home page.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — It moves you to another page, which is navigation.

a link — A link, announced as Home rather than as the name of the logo file.

plain text — It is the usual route back to the start and has to work.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six controls from a made up tool-library page. For each one, decide what it should be.

A control that expands the safety notes underneath it, on the same page.

- a button
- a link
- plain text

<details>
<summary>After your attempt</summary>

a button — It changes this page and goes nowhere. It also needs to say whether it is currently open, which a button can carry and a link cannot.

a link — It is often built as one because it looks like a small piece of text. Nothing about it navigates.

plain text — It has to be operable and announceable.

Now go through your own page and check each control against the same question: does it go somewhere, or does it do something?

</details>


### Where the file lives, and what you called it

Section: practice-plan. Stable action: write-file-location.

A folder of your own, and a name ending in .html. Double-clicking it opens it in your browser; no server is involved.

**Answer:** Where the file lives, and what you called it

A folder of your own, and a name ending in .html. Double-clicking it opens it in your browser; no server is involved.

<details>
<summary>Example</summary>

Example (made up): Documents/HaruCourse/Build/class-detail.html

</details>


### Which real content you used, rather than placeholder text

Section: practice-plan. Stable action: write-real-content.

Real content breaks layouts that placeholder text survives, which is the point of using it.

**Answer:** Which real content you used, rather than placeholder text

Real content breaks layouts that placeholder text survives, which is the point of using it.


### Anything that went wrong and how you got past it

Section: practice-plan. Stable action: write-build-trouble.

A blank page, text running together, a tag you forgot to close. Writing the recovery down is worth as much as the page.

**Answer:** Anything that went wrong and how you got past it

A blank page, text running together, a tag you forgot to close. Writing the recovery down is worth as much as the page.


### Read it without styling

Section: practice-plan. Stable action: step-3-brief.

The page read from top to bottom with the styling off, with everything that lost meaning fixed by changing elements.

- Disable the stylesheet and read the page top to bottom.
- Mark anything that loses meaning or order.
- Fix by changing elements, not by adding styling back.

**Start here:** Comment out the stylesheet link, reload, and read the whole page aloud before changing anything.

**Enough:** Every fix in this step changed an element, and none of them added a style rule.

**Unstyled reading:** The page with its stylesheet removed. It is what a screen reader, a search engine, a translation tool and reader mode effectively see.

**Fixing by element:** Changing what something is rather than how it looks. Adding styling back hides the problem again without solving it.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Reading a tool-library page unstyled, and putting the styling back one rule at a time.

**What it looked like:** Without the stylesheet, the three tool names ran together as one paragraph, the price comparison was a wall of numbers, and the status text sat nowhere in particular.

**What I did first:** Added a rule giving the tool names some space. It looked right again in about a minute.

**Why that was the wrong move:** The names ran together because they were three boxes with no meaning, not because they lacked spacing. My rule fixed my eyes and changed nothing for anybody reading the markup.

**What the real repairs were:** The names became a list, which separates them for everybody. The numbers became a table with header cells, so each figure is announced with what it is. The status text moved inside the item it describes.

**What happened when I put the stylesheet back:** Two of my old rules were no longer needed at all, because the elements were now doing the work I had been doing by hand.

**Wrong turn:** The wrong turn is repairing the unstyled reading with styling, which is the fastest way to make the symptom disappear and the fault permanent.

**Trade-off:** Changing elements on a page you have already styled means some of your rules stop applying and have to be rewritten. Usually there are fewer of them afterwards.

**Unknown:** Still unknown: whether the table reads well when announced cell by cell. It is correctly marked up, which is not the same as being easy to listen to.


### How you turned the styling off

Section: practice-plan. Stable action: write-unstyled-how.

Comment out the stylesheet link, or delete it for a minute and put it back. Both are a single line.

**Answer:** How you turned the styling off

Comment out the stylesheet link, or delete it for a minute and put it back. Both are a single line.


### Everything that lost its meaning or its order

Section: practice-plan. Stable action: write-unstyled-problems.

Write your answer for “Everything that lost its meaning or its order”. Use the task instructions below to decide what to include.

**Answer:** Everything that lost its meaning or its order




### What you changed, by changing elements rather than adding styling back

Section: practice-plan. Stable action: write-unstyled-fixes.

Write your answer for “What you changed, by changing elements rather than adding styling back”. Use the task instructions below to decide what to include.

**Answer:** What you changed, by changing elements rather than adding styling back




### Check headings and landmarks

Section: practice-plan. Stable action: step-4-brief.

One page title, no skipped levels, main content directly reachable, and the Module 11 checks re-run on a real page.

- Confirm one page title and no skipped levels.
- Confirm the main content can be reached directly.
- Run the applicable preliminary checks.

**Start here:** Tab through the whole page from the address bar, before running anything else.

**Enough:** At least one Module 11 decision has been confirmed or found missing on the real page.

**Re-running a check:** Doing on a real page what you could only specify on a drawing. Keyboard operation, contrast and greyscale all become testable here.

**Specification catching up with the build:** The moment a decision you wrote down earlier is either confirmed or found to have never been applied.


### One page title, no skipped levels: what you found

Section: practice-plan. Stable action: write-heading-check.

Write your answer for “One page title, no skipped levels: what you found”. Use the task instructions below to decide what to include.

**Answer:** One page title, no skipped levels: what you found




### How somebody reaches the main content directly

Section: practice-plan. Stable action: write-landmark-check.

Write your answer for “How somebody reaches the main content directly”. Use the task instructions below to decide what to include.

**Answer:** How somebody reaches the main content directly




### Which Module 11 checks you re-ran on this real page, and what changed

Section: practice-plan. Stable action: write-preliminary.

Keyboard, contrast and greyscale all work on a real page in a way they could not on a drawing.

**Answer:** Which Module 11 checks you re-ran on this real page, and what changed

Keyboard, contrast and greyscale all work on a real page in a way they could not on a drawing.


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your page looks exactly the same whether you use a heading element or a styled generic box. Does the choice matter?

- It looks the same to you. To a screen reader, a search engine, a translation tool and reader mode, a styled box has no structure at all.
- It matters only if somebody uses a screen reader.
- It matters for maintenance more than for readers.

<details>
<summary>After your attempt</summary>

It looks the same to you. To a screen reader, a search engine, a translation tool and reader mode, a styled box has no structure at all. — Those four all read the markup rather than the appearance. A page of generic containers is a page with no outline, no landmarks and nothing to navigate by.

It matters only if somebody uses a screen reader. — Four different readers of the markup are affected, and three of them are not people. Search and translation both depend on it.

It matters for maintenance more than for readers. — Maintenance benefits, and the readers are the argument. The markup is a second version of your page that a great many things consume.

Improve: Go through your element plan in step 1 and replace any generic box that is carrying meaning. Record the change in step 5.

Check again: No element in your page is generic unless it exists purely for layout.

Answers to revisit: outline-mapping, elements-planned, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The unstyled page has three tool names running together. What is the right repair?

- Make them a list, so they are separate for everybody rather than only for people who can see the spacing.
- Add a style rule giving them space.
- Leave it, since nobody reads the page unstyled.

<details>
<summary>After your attempt</summary>

Make them a list, so they are separate for everybody rather than only for people who can see the spacing. — They run together because they are three boxes with no relationship. A list states the relationship, and the spacing then follows from it rather than standing in for it.

Add a style rule giving them space. — That repairs your eyes and leaves the markup exactly as meaningless. The unstyled reading exists precisely to catch this.

Leave it, since nobody reads the page unstyled. — Several things read it that way all the time, including search engines and reader mode. The unstyled view is not hypothetical.

Improve: Redo one fix in step 3 by changing an element instead of adding a rule, and record what changed. Note it in step 5.

Check again: Every fix in step 3 is an element change.

Answers to revisit: unstyled-how, unstyled-problems, unstyled-fixes, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your Reserve control is a link styled to look like a button, and it works when clicked. What is broken?

- The space bar does nothing, and somebody listening is told they are about to go somewhere when they are about to reserve something.
- Nothing, provided it is keyboard reachable.
- It will not work on a phone.

<details>
<summary>After your attempt</summary>

The space bar does nothing, and somebody listening is told they are about to go somewhere when they are about to reserve something. — Buttons answer to enter and space; links answer only to enter. The announcement is the second half: a link promises navigation, and this one changes the state of a booking.

Nothing, provided it is keyboard reachable. — Reachable is not the same as behaving correctly. Half its expected keyboard behaviour is missing.

It will not work on a phone. — It works fine by touch, which is why the problem survives. The failure is for keyboard and for anybody listening.

Improve: Change that control to a button in step 2, keeping the styling, and note what behaviour returned. Record the change in step 5.

Check again: Everything that acts is a button and everything that navigates is a link.

Answers to revisit: file-location, real-content, build-trouble, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The mistakes the rebuild revealed about your earlier screens, and the repair the Check questions asked for.

- List the mistakes the rebuild revealed.
- Save the page and the unstyled reading notes.

**Start here:** Compare the page you built with the screen you drew, and list where they had to differ.

**Enough:** The list is about your earlier decisions rather than about the difficulty of writing HTML.

**What the build reveals:** Things a drawing cannot show: a control that cannot be pressed with the space bar, a table with no header cells, a status nobody can hear.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### The mistakes the rebuild revealed about your earlier screens

Section: practice. Stable action: write-mistakes-revealed.

Write your answer for “The mistakes the rebuild revealed about your earlier screens”. Use the task instructions below to decide what to include.

**Answer:** The mistakes the rebuild revealed about your earlier screens



<details>
<summary>Example</summary>

Example (made up): the filter controls were links that performed actions, so on the real page they could not be pressed with the space bar.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson styles this page using the tokens you wrote in Module 8.


<details>
<summary>Optional hints and reference material</summary>

- Go through the page asking what each block of content is, then use the element that means that.
- Compare the built page against your outline line by line and correct the levels.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The structuring content module: document structure, headings, lists, links and buttons. Purpose: Supplies the elements and their meanings for this rebuild. Free text documentation, no account. Verified 2026-09-06. Use the written articles and exclude promoted paid partner courses. Fallback: R16.
- R10: [W3C: page structure](https://www.w3.org/WAI/tutorials/page-structure/) — Headings, regions and their relationship to the page outline. Purpose: Connects the markup back to the structure decisions you already made. Free reading, no account. Verified 2026-09-06. Structural semantics only; it does not cover CSS or layout. Fallback: R14.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Elements match the content's shape**

Adequate evidence: Lists as lists, tables with header cells, forms with labelled fields.

0 — Generic containers throughout.

1 — Some semantic elements, with lists or tables built from containers.

2 — Elements match content throughout.

3 — As adequate, and one earlier design decision was corrected because no element fitted it.

Repair: Go through the page asking what each block of content is, then use the element that means that. Recheck: The revised markup.

**Headings and landmarks follow the m11 outline**

Adequate evidence: One page title, correct nesting, and named landmarks matching the region map.

0 — Headings chosen visually.

1 — Correct headings without landmarks.

2 — Both correct and matching the m11 work.

3 — As adequate, and a route to the main content skips the navigation.

Repair: Compare the built page against your outline line by line and correct the levels. Recheck: The heading and landmark check.

**Links and buttons are used correctly**

Adequate evidence: Every action a button, every navigation a link, with no styled substitutes.

0 — Links perform actions or buttons navigate.

1 — Mostly correct with one or two substitutions.

2 — Correct throughout.

3 — As adequate, and any control that looked like the wrong type was restyled rather than re-elemented.

Repair: List every control and ask whether it goes somewhere or does something, then use the matching element. Recheck: The control list.

**The unstyled reading was run and problems fixed**

Adequate evidence: A record of reading the page without styling, with fixes made in the markup.

0 — Not run.

1 — Run without fixes.

2 — Run, problems named and fixed in the markup.

3 — As adequate, and the fixes changed elements rather than adding styling back.

Repair: Disable the stylesheet, read the page aloud, and fix every place the meaning collapses. Recheck: The unstyled reading notes.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson styles this page using the tokens you wrote in Module 8.

**Review criteria:**

- Elements match the content's shape
- Headings and landmarks follow the m11 outline
- Links and buttons are used correctly
- The unstyled reading was run and problems fixed

<details>
<summary>Reading, video and deeper explanation</summary>

- Semantic markup is the cheapest accessibility work available, because the browser and assistive technology already know what a heading, a list and a button are. Using a generic container with a class instead throws that knowledge away and requires you to rebuild it — the keyboard behaviour, the announcement, the focus — by hand and usually incompletely.
- The link-versus-button distinction is the one that causes the most trouble. A link navigates; it can be opened in a new tab, copied and shared, and it responds to enter. A button performs an action in place and responds to enter and space. A link styled as a button that submits a form, or a button that navigates, breaks both sets of expectations and the keyboard behaviour with them.
- Content has shapes, and matching them costs nothing. A set of classes is a list; a schedule is a table; a term with its definition is a definition list. Marking them correctly gives you announcement, navigation and often layout behaviour without extra work, and it makes the document comprehensible to anything that reads it later.
- The stylesheet test is the fastest verification you have: disable the styling and read the page. If it reads as a sensible document — title, sections, lists, forms with labels — the markup is doing its job. If it reads as a stream of undifferentiated text, no amount of styling will make it navigable for anyone who is not looking at it.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 3: CSS: the box, the flow and the cascade

Stable ID: m12-l03-v1. Core.

Understanding the cascade is what turns CSS from guesswork into design. Most frustration with it comes from not knowing which rule won.

Bring: Your built page and token sheet.

Starting route: Recommended route: Build a stylesheet for the page you built last lesson in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A styled page using custom properties from your token sheet
- Written explanations of three rules and why they win
- One layout surprise diagnosed with the inspector
- A note of what you set once and inherited rather than repeating

### Start with a clear task

Section: learn. Stable action: welcome.

Style your semantic page using your m08 tokens as custom properties, and explain in writing why three specific rules produce the layout they do.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Everything is a box: content, padding, border, margin.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Normal flow stacks blocks and wraps inline content; layout modes change that.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Specificity and order decide which rule wins when two conflict.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Custom properties turn your token sheet into real, changeable values.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Inheritance is why setting a value once at the top is usually right.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The class page was styled with the token sheet declared as custom properties at the top: five neutrals, three semantic colours, six spacing values, six type steps. Three rules were then explained in writing. Why the card was wider than its container: padding was being added to a set width, fixed by including padding in the box sizing. Why the heading colour would not change: a more specific rule elsewhere was winning, visible in the inspector. Why the body font applied everywhere without being repeated: inheritance, set once on the root.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build a stylesheet for the page you built last lesson in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Read the fundamentals

Section: practice-plan. Stable action: step-1-brief.

The box model and normal flow written in your own words, with a drawing you made yourself.

- Read the assigned CSS sections on the box model, flow and the cascade.
- Write the box model in your own words with a diagram.

**Start here:** Draw four nested rectangles on paper and label them content, padding, border, margin. Then write what you drew.

**Enough:** You could explain to somebody why a box can end up wider than the width you gave it.

**Box model:** Every element is a box: the content, padding inside the edge, the border on the edge, and margin outside it. Almost every width surprise comes from this.

**Normal flow:** What the browser does before you tell it anything: blocks stack downward, text wraps along lines. Layout modes are changes to this, not replacements for it.

**Box sizing:** Whether a width you set includes the padding and border or sits inside them. Setting it to include them once, at the top, prevents most of the surprises.


### The box model in your own words

Section: practice-plan. Stable action: write-box-model.

Content, then padding around it, then a border, then margin outside that. Draw it on paper and describe your drawing here.

**Answer:** The box model in your own words

Content, then padding around it, then a border, then margin outside that. Draw it on paper and describe your drawing here.


### What normal flow does before you change anything

Section: practice-plan. Stable action: write-flow-note.

Write your answer for “What normal flow does before you change anything”. Use the task instructions below to decide what to include.

**Answer:** What normal flow does before you change anything



<details>
<summary>Example</summary>

Example (made up): blocks stack down the page, one under the next, and text inside them wraps along the line.

</details>


### Declare your tokens

Section: practice-plan. Stable action: step-2-brief.

Your Module 8 tokens declared as custom properties with the same names, and any raw value you used written down with its reason.

- Write your token sheet as custom properties at the top of the stylesheet.
- Use the same names as your documentation.
- Style the page referring to them, never to raw values.

**Start here:** Open your Module 8 token sheet beside the stylesheet and copy the names across exactly.

**Enough:** Every name in the stylesheet could be found by searching your documentation for the same word.

**Custom property:** A named value you declare once and use everywhere: a colour, a spacing step, a type size. Changing it in one place changes everything that referred to it.

**Raw value:** A number typed directly into a rule. Each one is a decision made in a place nobody will look at again.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Moving a tool-library token sheet into a stylesheet, and renaming everything on the way.

**What I did:** Declared the colours and spacing at the top, and gave them names that felt natural in code: --grey-light, --pad-small, --font-big.

**Why it felt sensible:** The documentation names were longer, and shorter names are quicker to type. Nobody was going to read the stylesheet but me.

**What broke a fortnight later:** Somebody asked which token the quiet caption used. The documentation says --surface-quiet. The stylesheet says --grey-light. Neither document mentions the other, and they had already drifted: --grey-light had been darkened and the sheet had not.

**What I changed:** Renamed every property to match the documentation exactly, character for character, and left the shorter names nowhere at all.

**What that bought:** The stylesheet and the token sheet can now be compared by searching for the same word, which is how anybody will ever notice they have drifted apart.

**Wrong turn:** The wrong turn is renaming tokens for the convenience of typing. It creates two vocabularies for one set of decisions, and they drift quietly because nothing connects them.

**Trade-off:** Documentation names are longer and less comfortable to type, and you will resent them for the first afternoon.

**Unknown:** Still unknown: whether the documentation names are good ones. They are the ones in use, and making the stylesheet agree with them is the fix available today.


### The custom properties you declared, with the same names as your documentation

Section: practice-plan. Stable action: write-tokens-declared.

Write your answer for “The custom properties you declared, with the same names as your documentation”. Use the task instructions below to decide what to include.

**Answer:** The custom properties you declared, with the same names as your documentation



<details>
<summary>Example</summary>

Example (made up): --space-3, --text-step-2, --surface-quiet, matching the Module 8 sheet exactly.

</details>


### Any place you used a raw value instead of a token, and why

Section: practice-plan. Stable action: write-raw-values.

There are legitimate reasons. Writing them down is how a token sheet stays honest.

**Answer:** Any place you used a raw value instead of a token, and why

There are legitimate reasons. Writing them down is how a token sheet stays honest.


### Diagnose a surprise

Section: practice-plan. Stable action: step-3-brief.

One thing that surprised you, what the inspector showed, and your written explanation, produced before any fix.

- Find something that does not look as you expected.
- Use the inspector to see which rule won and what it overrode.
- Write the explanation before changing anything.

**Start here:** Right-click the element that surprised you and choose Inspect. Read the Styles panel before touching the file.

**Enough:** Your explanation was written before the fix and names the actual mechanism.

**The inspector:** Select an element in developer tools and the Styles panel lists every rule affecting it, with the ones that lost struck through. It answers which rule won without guessing.

**Specificity:** How particular a selector is. A more particular rule beats a less particular one regardless of which came first, which is why order alone does not explain a conflict.

**Inheritance:** Some values pass down to everything inside: colour, font, line height. It is why setting them once at the top is usually right.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

A card given a width of 300 pixels measures 340 on screen, and it has 20 pixels of padding on each side.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — The width was applied to the content, and the padding was added outside it. Setting box sizing to include padding makes 300 mean 300.

the cascade — Only one rule is setting the width. Nothing is competing.

inheritance — Width is not inherited from anywhere.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

A heading refuses to change colour, and the inspector shows your rule struck through with another one above it.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — Nothing here is about size or spacing.

the cascade — The struck-through rule is the panel telling you it lost. A more particular selector elsewhere is winning, and the inspector names it.

inheritance — The colour is being set directly rather than passed down.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

You set the typeface once on the root and every paragraph, list and heading uses it without being told.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — Nothing about boxes is involved.

the cascade — No two rules are competing. One rule is reaching many elements.

inheritance — Typeface, colour and line height pass down to everything inside. This is the behaviour that makes setting them once at the top the right move.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

Two stacked paragraphs have a 24-pixel gap between them, though each has a 24-pixel margin above and below.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — Vertical margins between stacked blocks collapse into the larger of the two rather than adding up. It is part of how the box behaves in normal flow.

the cascade — Both rules applied exactly as written.

inheritance — Margins are not inherited.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

A button inside a dark panel keeps the panel’s pale text colour even though the button has a white background.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — Nothing about the box is wrong; the colours are.

the cascade — No rule is competing for the button’s colour. Nothing set one.

inheritance — The pale colour is arriving from the panel, because nothing overrode it on the button. Inherited values are easy to miss precisely because no rule mentions them.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six surprises from a made up stylesheet. For each one, decide which of the three ideas explains it.

A colour set in one rule is beaten by a shorter, apparently less particular rule in another file.

- the box model
- the cascade
- inheritance

<details>
<summary>After your attempt</summary>

the box model — Nothing about boxes is involved.

the cascade — Something in that rule is raising its weight, and the inspector will show it. The cascade covers importance and order as well as particularity.

inheritance — Both rules are setting the value directly.

Now take your own surprise, guess which of the three it is, and check your guess in the inspector before you change anything.

</details>


### What did not look the way you expected

Section: practice-plan. Stable action: write-surprise-what.

Write your answer for “What did not look the way you expected”. Use the task instructions below to decide what to include.

**Answer:** What did not look the way you expected




### What the inspector showed: which rule won, and what it crossed out

Section: practice-plan. Stable action: write-inspector-said.

Select the element, look at the Styles panel. Rules that lost are shown struck through.

**Answer:** What the inspector showed: which rule won, and what it crossed out

Select the element, look at the Styles panel. Rules that lost are shown struck through.


### Your explanation, written before the fix

Section: practice-plan. Stable action: write-explanation-first.

Write your answer for “Your explanation, written before the fix”. Use the task instructions below to decide what to include.

**Answer:** Your explanation, written before the fix




### Explain three rules

Section: practice-plan. Stable action: step-4-brief.

Three rules from your own stylesheet explained, one about the cascade and one about inheritance.

- Choose three rules in your stylesheet and explain what each does and why.
- Include one about the cascade and one about inheritance.

**Start here:** Choose the three rules you are least sure about rather than the three you are proudest of.

**Enough:** Somebody could delete each rule and predict, from your explanation, what would change.

**Explaining a rule:** Saying what it does, what it applies to, and why it wins where two rules meet. It is the difference between a stylesheet you wrote and one you understand.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Explaining three rules from a tool-library stylesheet, and describing them instead.

**What I wrote first:** “This rule sets the card padding to the medium spacing step.” Three sentences like that, one per rule, and the step looked finished.

**What is missing from it:** It restates the rule in English. Anybody could produce it by reading the line aloud, and it proves nothing about whether I know why the page looks as it does.

**The question I had been avoiding:** Why does this rule win? The card padding is set in two places, and I did not know which one was in effect until I inspected it.

**What the explanation became:** “The card padding comes from the rule on the card class, not the one on the container, because the class is more particular. Deleting the class rule would give every card the container’s larger padding.”

**How I chose the other two:** The ones I was least sure about rather than the ones I was proudest of. Both turned out to be doing something slightly different from what I assumed.

**Wrong turn:** The wrong turn is describing what a rule does, because it reads like an explanation and takes no understanding to write. The test is whether you can say what would change if it were deleted.

**Trade-off:** Choosing the rules you are least sure about means the step takes longer and occasionally shows you that part of your stylesheet is doing nothing at all.

**Unknown:** Still unknown: how many other rules in the file are inert. Three explained is three; the rest are unexamined and I am not implying otherwise.


### Rule 1 · what it does and why it wins

Section: practice-plan. Stable action: write-rule-1.

Write your answer for “Rule 1 · what it does and why it wins”. Use the task instructions below to decide what to include.

**Answer:** Rule 1 · what it does and why it wins




### Rule 2 · one about the cascade

Section: practice-plan. Stable action: write-rule-2.

Write your answer for “Rule 2 · one about the cascade”. Use the task instructions below to decide what to include.

**Answer:** Rule 2 · one about the cascade




### Rule 3 · one about inheritance

Section: practice-plan. Stable action: write-rule-3.

Write your answer for “Rule 3 · one about inheritance”. Use the task instructions below to decide what to include.

**Answer:** Rule 3 · one about inheritance




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody says CSS is unpredictable. Is that fair?

- It is deterministic and mostly unfamiliar. Nearly all surprises come from three things: the box model, the cascade and inheritance.
- It is fair, because browsers differ from one another.
- It is fair until you use a framework to manage it.

<details>
<summary>After your attempt</summary>

It is deterministic and mostly unfamiliar. Nearly all surprises come from three things: the box model, the cascade and inheritance. — Unpredictable means the same input gives different results, which is not what happens. The inspector will tell you which rule won in every case, once you know what to ask it.

It is fair, because browsers differ from one another. — They differ at the edges. The everyday surprises are the same in all of them and come from the three ideas this lesson covers.

It is fair until you use a framework to manage it. — A framework hides the cascade rather than removing it, and the surprises return with less to inspect.

Improve: Make sure one of your three explanations in step 4 is about the cascade and one about inheritance. Record the change in step 5.

Check again: Your three explanations cover more than one mechanism.

Answers to revisit: rule-1, rule-2, rule-3, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A card set to 300 pixels wide measures 340 on screen. What is happening?

- The width applies to the content, and the padding is being added outside it.
- Another rule is overriding the width.
- The browser is rounding the layout.

<details>
<summary>After your attempt</summary>

The width applies to the content, and the padding is being added outside it. — Twenty pixels of padding on each side adds forty. Setting box sizing to include padding and border, once at the top, makes a declared width mean what you expected.

Another rule is overriding the width. — Possible, and the inspector would show it struck through. When the difference is exactly twice the padding, the box model is the first place to look.

The browser is rounding the layout. — Rounding moves things by a fraction of a pixel. Forty is not rounding.

Improve: Write that mechanism into your box model note in step 1 so it is in your own words. Record the change in step 5.

Check again: Your box model note explains why a declared width can be exceeded.

Answers to revisit: box-model, flow-note, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your heading will not change colour. What should you do first?

- Inspect the element and read which rule is winning, before changing anything.
- Make your selector more specific until it wins.
- Move the rule to the end of the stylesheet.

<details>
<summary>After your attempt</summary>

Inspect the element and read which rule is winning, before changing anything. — The Styles panel shows the losing rule struck through and the winning one above it. Diagnosis takes ten seconds and tells you whether the fix is a selector, an order or an inherited value.

Make your selector more specific until it wins. — It works this time and adds a rule nobody can explain, which makes the next conflict worse. Two or three of these and the stylesheet stops being predictable.

Move the rule to the end of the stylesheet. — Order matters only between rules of equal weight. If the other rule is more particular, moving yours changes nothing.

Improve: Write your explanation in step 3 before the fix, and record what the inspector actually showed. Note the change in step 5.

Check again: The explanation in step 3 was written before the change was made.

Answers to revisit: surprise-what, inspector-said, explanation-first, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

What you set once and let inherit, where the stylesheet lives, and the repair the Check questions asked for.

- Note anything you set once and inherited rather than repeating.
- Save the stylesheet and the explanations.

**Start here:** Search your stylesheet for the typeface name. If it appears more than once, you are repeating something inheritance would have carried.

**Enough:** You can name at least one value you set once rather than in several places.

**Setting it once:** Declaring colour, typeface and line height at the top and letting them reach everything. It is shorter, and it means one change reaches the whole page.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What you set once at the top and let inherit rather than repeating

Section: practice. Stable action: write-inherited-once.

Write your answer for “What you set once at the top and let inherit rather than repeating”. Use the task instructions below to decide what to include.

**Answer:** What you set once at the top and let inherit rather than repeating




### Where the stylesheet is saved

Section: practice. Stable action: write-stylesheet-saved.

Write your answer for “Where the stylesheet is saved”. Use the task instructions below to decide what to include.

**Answer:** Where the stylesheet is saved




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson makes this page work at every width rather than at the one you designed for.


<details>
<summary>Optional hints and reference material</summary>

- Search the stylesheet for literal colours and spacing values and replace each with its token.
- Choose three rules and write, for each, what it does and why it wins or applies.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS styling basics module: the box model, values, the cascade, inheritance and custom properties. Purpose: Supplies the mechanics this lesson makes explicit. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout chapter, read for how flow behaves before layout modes are added. Purpose: Explains why keeping normal flow where possible produces more robust pages. Free reading, no account. Verified 2026-09-06. Design-focused rather than a CSS reference; the mechanics come from the MDN module. Fallback: R15.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The stylesheet uses tokens as custom properties**

Adequate evidence: Custom properties declared once with your documented names, referenced throughout.

0 — Raw values throughout.

1 — Some properties declared but raw values still used.

2 — Tokens declared and referenced consistently.

3 — As adequate, and the names match the m08 token sheet exactly.

Repair: Search the stylesheet for literal colours and spacing values and replace each with its token. Recheck: The stylesheet.

**Three rules are explained including cascade and inheritance**

Adequate evidence: Three written explanations covering what the rule does and why it applies.

0 — No explanations.

1 — Explanations describing effect without mechanism.

2 — Three explanations including a cascade case and an inheritance case.

3 — As adequate, and one explains a rule you originally wrote by trial and error.

Repair: Choose three rules and write, for each, what it does and why it wins or applies. Recheck: The explanations.

**One surprise was diagnosed with the inspector**

Adequate evidence: A recorded diagnosis naming the winning rule and what it overrode.

0 — Fixed by trial and error.

1 — Diagnosed loosely without naming the rules.

2 — Diagnosed with the inspector and written up before the fix.

3 — As adequate, and the fix removed a conflict rather than adding specificity.

Repair: Open the inspector on the element and read the applied and overridden rules, then write what happened. Recheck: The diagnosis.

**Values are set once and inherited where sensible**

Adequate evidence: A note of inherited values, with repetition removed.

0 — Values repeated per element.

1 — Some inheritance used without awareness.

2 — Inheritance used deliberately and documented.

3 — As adequate, and one repeated declaration was removed as redundant.

Repair: Find values repeated on many elements and set them once higher up instead. Recheck: The stylesheet and note.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson makes this page work at every width rather than at the one you designed for.

**Review criteria:**

- The stylesheet uses tokens as custom properties
- Three rules are explained including cascade and inheritance
- One surprise was diagnosed with the inspector
- Values are set once and inherited where sensible

<details>
<summary>Reading, video and deeper explanation</summary>

- The box model explains most layout surprises. Padding grows a box inward from its edge, margin pushes other boxes away, and whether the width you set includes the padding depends on one property. Knowing this converts “why is this 24 pixels too wide” from a mystery into arithmetic.
- Normal flow is the default behaviour you get for free: blocks stack, text wraps, and the page grows as tall as it needs. Every layout mode you add — flex, grid — is a deliberate departure from that, and a page that keeps normal flow wherever it can is more robust when content changes length, which it always does.
- The cascade decides conflicts by specificity and order, and most confusion comes from not being able to say which rule won. Your browser's element inspector shows you the winner and the rules it overrode; reading it once when something surprises you is the fastest way to learn the rules for good.
- Custom properties are where your token sheet becomes real. Declaring your colours, spacing and type steps once at the top and referring to them everywhere means a change happens in one place, the values have names in the code as well as in your documentation, and an engineer reading it sees the same vocabulary you use.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 4: Responsive layout, built rather than drawn

Stable ID: m12-l04-v1. Core.

You have drawn responsive layouts for five modules. Building one shows you which of those drawings were possible and which were wishes.

Bring: Your three-width drawings and the built page.

Starting route: Recommended route: Build the narrow-first layout for the page you already have in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A page working from about 320 pixels upward
- Breakpoints chosen from content, with the reason for each
- A slow width sweep with failures found between breakpoints
- No horizontal page scrolling at any width

### Start with a clear task

Section: learn. Stable action: welcome.

Make your page work from about 320 pixels to a wide screen without horizontal scrolling, using flexible layout rather than fixed breakpoint copies.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Start narrow: the small layout is the content in priority order.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Let content decide breakpoints, not device names.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Flexible layouts wrap and grow; fixed ones break at unexpected sizes.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Test between breakpoints, where most failures live.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

No horizontal scrolling of the page, at any width, ever.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The class page was built narrow first: title, key facts, action, then description, with the image below. Widening slowly revealed three genuine breakpoints — one where the key facts could sit in a row, one where the description could take a wider column, one where a side panel became viable. None matched a device name. Between the second and third, the card grid produced a single orphaned card, fixed with a flexible wrap rather than another breakpoint. At 320 pixels the schedule table caused horizontal scrolling of the page; it became records instead, matching the m08 decision.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build the narrow-first layout for the page you already have in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Build narrow first

Section: practice-plan. Stable action: step-1-brief.

A layout at about 320 pixels with content in priority order, flexible sizing, and nothing scrolling sideways.

- Lay out the page at about 320 pixels with content in priority order.
- Use flexible sizing rather than fixed widths.
- Check nothing requires horizontal scrolling.

**Start here:** Open the device toolbar in developer tools and set the width to 320, then look at your page before changing anything.

**Enough:** The narrow layout reads top to bottom in an order you could defend, and nothing scrolls sideways.

**Narrow first:** Building the smallest layout before the others. It forces the content into priority order, because there is no room for anything else.

**Flexible sizing:** Letting something take the room available rather than a number you chose. Flexible layouts wrap and grow; fixed ones break at sizes you never tested.

**Horizontal page scrolling:** Having to drag the whole page sideways to read it. It is never acceptable, at any width, and it usually comes from one stubborn element.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Making a tool-library page responsive, and starting from the layout I had already drawn.

**What I did:** Built the wide layout first, because it was the one in my design file, then wrote rules to squeeze it down for narrow screens.

**What the narrow version became:** A two-column layout with the columns stacked, in the order they happened to be written. The photograph came second, above the price, because that is where it sat in the wide grid.

**What was wrong with that order:** Nobody had decided it. It was a side effect of a layout designed for a different width, and on a phone it put a decorative photograph between the title and the only thing anybody needed.

**What I did instead:** Started again at 320 with nothing but the content, in the order I would give it to somebody over the telephone: what it is, the three facts, the action, then the description, then the picture.

**What widening became:** A series of decisions about what to promote when there was room, rather than a series of rescues. Two of the wide layout’s columns turned out not to be worth restoring.

**Wrong turn:** The wrong turn is building the wide layout first and squeezing it, because the wide layout already exists in your design file. The narrow order then arrives by accident, and accidents are what people on phones actually meet.

**Trade-off:** Starting narrow means throwing away some of the arrangement you already drew, including parts you liked. Two of my columns did not come back.

**Unknown:** Still unknown: whether my priority order is the right one for this content. It is at least a decided order, which the squeezed version was not.


### The order the content appears in at the narrowest width

Section: practice-plan. Stable action: write-priority-order.

Write your answer for “The order the content appears in at the narrowest width”. Use the task instructions below to decide what to include.

**Answer:** The order the content appears in at the narrowest width



<details>
<summary>Example</summary>

Example (made up): title, three key facts, the Reserve button, the description, then the photograph.

</details>


### Where you used flexible sizing instead of a fixed width, and where you could not

Section: practice-plan. Stable action: write-flexible-sizing.

Write your answer for “Where you used flexible sizing instead of a fixed width, and where you could not”. Use the task instructions below to decide what to include.

**Answer:** Where you used flexible sizing instead of a fixed width, and where you could not




### Anything causing sideways scrolling at 320 pixels, and what you did

Section: practice-plan. Stable action: write-narrow-scroll.

Wide tables, long unbroken words and fixed-width images are the usual three.

**Answer:** Anything causing sideways scrolling at 320 pixels, and what you did

Wide tables, long unbroken words and fixed-width images are the usual three.


### Widen and watch

Section: practice-plan. Stable action: step-2-brief.

Change points found by widening slowly, each recorded with the width you saw and the content reason for it.

- Drag the window wider slowly.
- Note each point where the layout becomes uncomfortable.
- Add a breakpoint only where content demands it, and record why.

**Start here:** Drag the window edge slowly from narrow to wide and stop the moment something looks uncomfortable. Write that width down.

**Enough:** Each change point names what became uncomfortable, and none of them is named after a device.

**Change point:** A width where the content starts to want a different arrangement. It comes from your content, so it lands wherever it lands.

**Device breakpoint:** A width named after a phone or tablet. Devices come in every size, people resize windows and split screens, and the names go out of date.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Choosing change points for a tool-library page, and choosing them before looking at anything.

**What I started with:** Three breakpoints copied from a table of device sizes: phone, tablet, desktop. The page then had three layouts and I considered it responsive.

**Where it fell apart:** At about 600 pixels, which is inside the tablet range, the three key facts were each on their own line with an enormous empty column beside them. Nothing was broken and it looked abandoned.

**What I did instead:** Set the window narrow and dragged it wider a pixel at a time, watching the content rather than the number.

**What the content actually asked for:** About 520, where the key facts had room to sit in a row. About 700, where the description could take a comfortable column width. About 1,000, where a side panel became possible without squeezing the description.

**What I noticed about those numbers:** None of them is a device. The middle one is the width at which the longest of my three facts stopped wrapping, which is a fact about my content and nothing else.

**Wrong turn:** The wrong turn is choosing breakpoints from a list of devices, because the list exists and is easy to copy. Devices come in every size and the layout then fails at all the widths between them.

**Trade-off:** Content-derived change points look arbitrary written down, and somebody will ask why 520. The answer is that it is where your longest fact stops wrapping, which is a better reason than a phone from 2019.

**Unknown:** Still unknown: whether 520 survives translation. A longer word in another language moves it, which is an argument for flexible rules rather than for more numbers.


### Change point 1 · the width, what became uncomfortable, and what you changed

Section: practice-plan. Stable action: write-breakpoint-1.

Write the width you actually saw it at. It will not be a device name, and that is the point.

**Answer:** Change point 1 · the width, what became uncomfortable, and what you changed

Write the width you actually saw it at. It will not be a device name, and that is the point.

<details>
<summary>Example</summary>

Example (made up): about 520 pixels, where the three key facts had room to sit in a row instead of stacking.

</details>


### Change point 2 · the width, what became uncomfortable, and what you changed

Section: practice-plan. Stable action: write-breakpoint-2.

Write your answer for “Change point 2 · the width, what became uncomfortable, and what you changed”. Use the task instructions below to decide what to include.

**Answer:** Change point 2 · the width, what became uncomfortable, and what you changed




### Change point 3 · the width, what became uncomfortable, and what you changed

Section: practice-plan. Stable action: write-breakpoint-3.

Write your answer for “Change point 3 · the width, what became uncomfortable, and what you changed”. Use the task instructions below to decide what to include.

**Answer:** Change point 3 · the width, what became uncomfortable, and what you changed




### Sweep the whole range

Section: practice-plan. Stable action: step-3-brief.

One slow pass across the whole range, with every failure between change points recorded and fixed flexibly where possible.

- Drag from narrow to wide in one pass.
- Record every overlap, clip, orphan and scroll.
- Fix with flexible rules before adding another breakpoint.

**Start here:** Grab the window edge at 320 and drag it to full width in one slow movement, watching the page rather than the ruler.

**Enough:** You found at least one failure that was not at a change point.

**Sweeping:** Dragging from narrow to wide in one continuous pass. It is the only way to see the widths between your change points, which is where most failures are.

**Orphan:** One item left alone on a row because the grid divides badly at that width. It is a wrapping problem, not a reason for another change point.


### Every overlap, clip, orphan and scroll you saw between your change points

Section: practice-plan. Stable action: write-sweep-findings.

Most failures live between breakpoints, because that is where nobody looks.

**Answer:** Every overlap, clip, orphan and scroll you saw between your change points

Most failures live between breakpoints, because that is where nobody looks.


### What you fixed with a flexible rule rather than another change point

Section: practice-plan. Stable action: write-sweep-fixes.

Write your answer for “What you fixed with a flexible rule rather than another change point”. Use the task instructions below to decide what to include.

**Answer:** What you fixed with a flexible rule rather than another change point




### Test the hard content

Section: practice-plan. Stable action: step-4-brief.

The layout tested with your longest real content and at about 200 per cent text, with fixes made by letting containers grow.

- Use your longest real label and largest real number.
- Enlarge the text to about 200 per cent and sweep again.
- Fix what breaks by letting containers grow.

**Start here:** Paste your longest real label into the page, then sweep the width again with the text enlarged.

**Enough:** No fix in this step made text smaller, and no fix added a change point for an orphan.

**Hard content:** Your longest label, your largest number, your most awkward name. Layouts survive placeholder text and fail on real content.

**Letting a container grow:** Removing the fixed height or width so the box gets bigger when its content does. It is almost always the correct repair.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

At about 840 pixels the card grid leaves one card alone on the last row.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — Letting the cards wrap and share the space handles every width, including the ones you did not test.

a new change point — It fixes 840 and leaves 870, 910 and everything else. Orphans appear wherever the division happens to be awkward.

change the content or the element — The cards are fine. It is the arrangement that is rigid.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

At 320 pixels the schedule table forces the whole page to scroll sideways.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — A table with five columns of real content has a minimum width, and no amount of flexibility gets it under 320.

a new change point — You will need one to make the change, and the change itself is the answer rather than the breakpoint.

change the content or the element — It becomes a set of records, one per row, which is the decision your Module 8 work already made. The element changes, not just its width.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

At about 520 pixels the three key facts have room to sit in a row instead of stacking.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — You could let them wrap, and they would sit awkwardly at two-and-one for a whole range of widths.

a new change point — This is what a change point is for: a genuine change of arrangement that the content asks for at a particular width.

change the content or the element — Nothing about the facts needs changing. They need more room.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

A tool name of one long unbroken word pushes the card wider than the screen.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — Allowing long words to break inside the card handles it at every width and for every name you have not seen yet.

a new change point — The word is too long at every width, not at one.

change the content or the element — Renaming the tool to fit a layout is the layout deciding your content.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

At 200 per cent text the header wraps over the logo, because the header has a fixed height.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — Let the header grow. More text needs more room, and a fixed height is a promise your content cannot keep.

a new change point — Text size is not width. A breakpoint cannot see it.

change the content or the element — The words are fine. The box refuses to grow.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six failures from a made up sweep of a tool-library page. For each one, decide what the right repair is.

At about 1,000 pixels there is room for a side panel without squeezing the description.

- a flexible rule
- a new change point
- change the content or the element

<details>
<summary>After your attempt</summary>

a flexible rule — A panel that appears gradually is worse than one that appears at a width where it fits.

a new change point — A genuine change of arrangement, at a width the content chose. This is the third legitimate one on the page.

change the content or the element — The panel already exists; it now has somewhere to go.

Now go through your own sweep findings and mark each one with its repair before you change anything.

</details>


### Your longest real label and largest real number, and what they did

Section: practice-plan. Stable action: write-longest-content.

Write your answer for “Your longest real label and largest real number, and what they did”. Use the task instructions below to decide what to include.

**Answer:** Your longest real label and largest real number, and what they did




### What happened sweeping again with the text at about 200 per cent

Section: practice-plan. Stable action: write-enlarged-sweep.

Write your answer for “What happened sweeping again with the text at about 200 per cent”. Use the task instructions below to decide what to include.

**Answer:** What happened sweeping again with the text at about 200 per cent




### What you changed by letting containers grow

Section: practice-plan. Stable action: write-grow-fixes.

Write your answer for “What you changed by letting containers grow”. Use the task instructions below to decide what to include.

**Answer:** What you changed by letting containers grow




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You have three layouts, for phone, tablet and desktop. Is the page responsive?

- Not really. Devices come in every size, people resize windows and split screens, and a layout that works at three widths fails at the dozens between them.
- It is, since those three cover most real devices.
- It is, provided the three layouts are well made.

<details>
<summary>After your attempt</summary>

Not really. Devices come in every size, people resize windows and split screens, and a layout that works at three widths fails at the dozens between them. — The sweep is what shows this: the awkward widths are almost never the ones named after a device. Content-derived change points land where your own content asks for them.

It is, since those three cover most real devices. — They cover three points on a continuous range. A window dragged to two thirds of a screen sits in none of them.

It is, provided the three layouts are well made. — Three well-made layouts with a broken range between them is the exact problem this lesson is about.

Improve: Redo the sweep in step 3 and record at least one failure that is not at one of your change points. Record the change in step 5.

Check again: Your findings include widths between your change points.

Answers to revisit: sweep-findings, sweep-fixes, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

At one width a grid leaves a single orphaned card. Should you add a breakpoint?

- No. A flexible wrapping rule handles every width, including the ones you have not looked at.
- Yes, since the layout genuinely needs to change there.
- Yes, and also make the cards narrower.

<details>
<summary>After your attempt</summary>

No. A flexible wrapping rule handles every width, including the ones you have not looked at. — Orphans appear wherever the division happens to be awkward, which is many widths rather than one. A change point fixes the width you were looking at.

Yes, since the layout genuinely needs to change there. — The arrangement does not need to change; the wrapping needs to be less rigid. A change point is for a genuine change of arrangement.

Yes, and also make the cards narrower. — That moves the orphan to a different width rather than removing it.

Improve: Move any orphan fix in step 3 from a change point to a flexible rule, and record the change in step 5.

Check again: No change point in your list exists because of an orphan.

Answers to revisit: sweep-findings, sweep-fixes, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

At 200 per cent text the header wraps over the logo. What is the correct repair?

- Let the header grow, so more text gets more room.
- Reduce the header text size at large text settings.
- Add a change point for enlarged text.

<details>
<summary>After your attempt</summary>

Let the header grow, so more text gets more room. — A fixed height is a promise the content cannot keep. Growing is what should happen, even though the header then takes two lines and looks different from the design.

Reduce the header text size at large text settings. — That takes the enlargement away from the person who asked for it, which is the one repair that makes things worse.

Add a change point for enlarged text. — Text size is not width, so a width-based change point cannot see it.

Improve: Fix that container in step 4 by removing its fixed height, and write what it does now. Record the change in step 5.

Check again: No fix in step 4 reduces a text size.

Answers to revisit: longest-content, enlarged-sweep, grow-fixes, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

Change points listed with content reasons, and a comparison against your Module 7 drawings.

- List your breakpoints with the content reason for each.
- Compare the built result with your m07 drawings and note the differences.
- Save the page and the notes.

**Start here:** Put your Module 7 drawings beside the built page at the same three widths and look for what differs.

**Enough:** Every change point has a content reason, and the comparison names at least one thing the drawing could not have shown.

**Comparing with the drawing:** Checking which of your earlier three-width drawings were possible. A drawing that turns out to be impossible is a finding about drawing, not a failure of the build.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Your change points listed with the content reason for each

Section: practice. Stable action: write-breakpoint-reasons.

Write your answer for “Your change points listed with the content reason for each”. Use the task instructions below to decide what to include.

**Answer:** Your change points listed with the content reason for each




### Where the built result differs from your Module 7 drawings

Section: practice. Stable action: write-drawing-differences.

A drawing that turned out to be impossible is a finding, not a failure.

**Answer:** Where the built result differs from your Module 7 drawings

A drawing that turned out to be impossible is a finding, not a failure.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson puts real images into this page and measures what they cost.


<details>
<summary>Optional hints and reference material</summary>

- Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container.
- Remove your breakpoints, widen slowly, and add each one back only where you can name the problem.

- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The layout and typography chapters, read for reflow, priority and content-driven breakpoints. Purpose: Supplies the responsive reasoning this build applies. Free reading, no account. Verified 2026-09-06. Web-focused; reading it is not the same as having tested a layout, which is why the sweep is the deliverable. Fallback: R15.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The CSS layout module: flexible boxes, grid and sizing. Purpose: Gives the mechanics for building the layouts flexibly. Free text documentation, no account. Verified 2026-09-06. Implementation reference; exclude promoted paid partner courses. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The page works from about 320 pixels with no horizontal scroll**

Adequate evidence: A narrow rendering with all content reachable and no page-level horizontal scrolling.

0 — Horizontal scrolling or clipped content at narrow widths.

1 — Works narrow but content is hidden rather than reordered.

2 — Works from 320 with content reordered and reachable.

3 — As adequate, and any genuinely wide content scrolls inside its own container.

Repair: Set the viewport to 320 and fix each overflow, converting wide content to records or its own scroll container. Recheck: The narrow rendering.

**Breakpoints are justified by content**

Adequate evidence: Each breakpoint recorded with the content problem that prompted it.

0 — Device-named breakpoints.

1 — Breakpoints without reasons.

2 — Each justified by an observed content problem.

3 — As adequate, and one problem was solved with flexible rules instead of a breakpoint.

Repair: Remove your breakpoints, widen slowly, and add each one back only where you can name the problem. Recheck: The breakpoint list.

**A full width sweep was run and failures fixed**

Adequate evidence: A record of sweeping the whole range with the failures found and repaired.

0 — Only fixed widths checked.

1 — Swept without recording failures.

2 — Swept, failures recorded and fixed.

3 — As adequate, and fixes preferred flexible rules over new breakpoints.

Repair: Drag from narrow to wide in one pass and write down everything that misbehaves. Recheck: The sweep notes.

**Long content and enlarged text were tested**

Adequate evidence: Renderings using the longest real content and text at about 200 per cent.

0 — Tested with short sample content only.

1 — One of the two tested.

2 — Both tested with breakages fixed by letting containers grow.

3 — As adequate, and the result is compared with the m07 drawings, noting which were unbuildable.

Repair: Substitute your longest real values, enlarge the text and sweep again. Recheck: The hard-content renderings.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson puts real images into this page and measures what they cost.

**Review criteria:**

- The page works from about 320 pixels with no horizontal scroll
- Breakpoints are justified by content
- A full width sweep was run and failures fixed
- Long content and enlarged text were tested

<details>
<summary>Reading, video and deeper explanation</summary>

- Building narrow first is not a slogan; it is the order that produces fewer decisions. The narrow layout is your content in priority order with almost no arrangement, and each wider layout adds arrangement as space allows. Starting wide means removing things, which is where content gets hidden rather than reordered.
- Breakpoints belong where your content breaks, not where a device is rumoured to be. Widen the browser slowly and watch: the point where a line becomes uncomfortably long, where a card becomes too narrow to read, where a gap opens — those are your breakpoints, and they are specific to this design.
- Flexible layout does most of the work without breakpoints at all: content that wraps when it runs out of room, columns that grow within limits, images that scale to their container. Layouts built from fixed sizes need a breakpoint for every problem, and they fail between the sizes you tested.
- The gaps between breakpoints are where failures hide, because that is where nobody looks. Drag the window slowly across the whole range once. Anything that overlaps, clips, or produces horizontal scrolling appears immediately, and horizontal scrolling of the page is never acceptable — content that must scroll sideways gets its own container.

[web.dev: learn responsive design](https://web.dev/learn/design/).

</details>

## Lesson 5: Images that do not cost the page

Stable ID: m12-l05-v1. Core.

Images are usually most of a page's weight, and almost all of that weight is a design decision.

Bring: Your built page and its images.

Starting route: Recommended route: Build the image work for the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Images served near their display size, with formats chosen deliberately
- One icon written by hand as SVG and styled with tokens
- A loading decision per image, with reserved space
- Before-and-after page weight and time to usable

### Start with a clear task

Section: learn. Stable action: welcome.

Put real images into your page at appropriate sizes and formats, produce one icon as hand-written SVG, and measure the weight you saved.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Serve an image near the size it is displayed; a 3000-pixel photo in a 400-pixel slot wastes everything.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Photographs and flat graphics want different formats.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

SVG is text: it scales, it is small, and you can write it by hand.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Images below the fold can load later; images above it should not.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Every image needs its alternative text decision from m11 carried through.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Eleven images were reviewed. The hero photograph was 1.8 MB at 3000 pixels wide, displayed at 720; re-exported at an appropriate size and format it became 96 KB. Six flat icons were replaced with hand-written SVG totalling under 4 KB, styled with the token colours rather than shipped in three colour variants. Four below-the-fold photographs were set to load later, with their space reserved so nothing jumped. Total page weight fell from 2.4 MB to 340 KB, and time to usable on a throttled connection fell from eleven seconds to three.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build the image work for the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Audit the images

Section: practice-plan. Stable action: step-1-brief.

Every image listed with its file size, served width and display width, with the oversized and wrongly formatted ones marked.

- List every image with its file size and its display size.
- Mark any served more than twice its display width.
- Mark flat graphics currently shipped as photographs.

**Start here:** Open the network panel, filter to images, and write down the largest three before looking at anything else.

**Enough:** Every image has two widths beside it rather than one.

**Served width:** How many pixels wide the file actually is. A 3000-pixel photograph in a 400-pixel slot sends the person 3000 pixels and throws most of them away.

**Flat graphic:** An icon, logo or diagram made of shapes rather than of a photograph. Saved as a photograph it is bigger and softer; as a vector it is tiny and sharp at any size.

**Dense screen:** A display packing more pixels into the same space. It is why an image is usually served somewhat wider than its display width, rather than exactly at it.


### Each image: its file size, the width it is served at, and the width it is displayed at

Section: practice-plan. Stable action: write-image-audit.

The network panel gives the file size; hovering an image in the inspector gives both widths.

**Answer:** Each image: its file size, the width it is served at, and the width it is displayed at

The network panel gives the file size; hovering an image in the inspector gives both widths.

<details>
<summary>Example</summary>

Example (made up): header photograph, 1.8 MB, served 3000 pixels wide, displayed at 720.

</details>


### Any image served at more than twice its display width

Section: practice-plan. Stable action: write-oversized.

Write your answer for “Any image served at more than twice its display width”. Use the task instructions below to decide what to include.

**Answer:** Any image served at more than twice its display width




### Any flat graphic currently shipped as a photograph

Section: practice-plan. Stable action: write-wrong-format.

Icons, logos and diagrams are flat graphics. Saved as photographs they are both larger and blurrier.

**Answer:** Any flat graphic currently shipped as a photograph

Icons, logos and diagrams are flat graphics. Saved as photographs they are both larger and blurrier.


### Resize and re-format

Section: practice-plan. Stable action: step-2-brief.

Photographs re-exported near their display size, flat graphics moved to vector, and the new total weight measured.

- Export each photograph near its display size, allowing for dense screens.
- Move flat graphics to a vector format.
- Re-measure the total page weight.

**Start here:** Take the largest image above the fold and re-export it at the width it is actually displayed.

**Enough:** You measured the total again rather than assuming the saving.

**Re-export:** Producing a new file at the size you actually need, from your original. Keep the original; you will want it again at a different size.

**Format:** How the picture is stored. Photographs and flat graphics compress in completely different ways, which is why one format does not suit both.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Reducing the images on a tool-library page, and leaving the one that mattered most.

**What I did first:** Compressed everything. Eleven images squeezed as hard as they would go without looking obviously worse. Total weight fell from 2.4 megabytes to 1.6.

**What the timing did:** Time to usable on the slow profile went from about 11 seconds to about 10. Nearly a megabyte saved and almost nothing changed.

**Why:** The header photograph was still 900 kilobytes and still sat above every word on the page. Nothing readable could appear until it arrived, so the other ten images were never the delay.

**What actually worked:** Re-exporting that one photograph at 720 pixels rather than 3000, which took it to 96 kilobytes. Time to usable fell to about 3 seconds.

**What I learned about the order:** The weight above the first screenful is what the person waits for. Everything below it can be large and late without anybody noticing.

**Wrong turn:** The wrong turn is compressing everything evenly, because it feels systematic and the total weight falls impressively. What the person waits for is the handful of things above the fold, and an even squeeze barely touches them.

**Trade-off:** Re-exporting at 720 means the photograph is soft if anybody opens it full screen. It is a header image on a listing page, so nobody does, and that is a decision worth stating rather than assuming.

**Unknown:** Still unknown: how it looks on a very dense screen. I exported somewhat wider than the display width for that reason, and I have not checked it on such a device.


### What you exported at what size, and the new file sizes

Section: practice-plan. Stable action: write-resize-done.

Write your answer for “What you exported at what size, and the new file sizes”. Use the task instructions below to decide what to include.

**Answer:** What you exported at what size, and the new file sizes




### The total page weight after resizing

Section: practice-plan. Stable action: write-weight-after.

Write your answer for “The total page weight after resizing”. Use the task instructions below to decide what to include.

**Answer:** The total page weight after resizing




### Write an SVG by hand

Section: practice-plan. Stable action: step-3-brief.

One icon written by hand as SVG, with a title, a token colour, and a size you measured.

- Follow the assigned tutorial to write one icon in a text editor.
- Give it a title and use your token colours.
- Check it scales cleanly and is under a few kilobytes.

**Start here:** Follow the assigned tutorial and write the simplest icon you use: a circle, a cross, an arrow.

**Enough:** Your icon is a few kilobytes, stays sharp when you scale it up, and takes its colour from a token.

**SVG:** A picture written as text. You can open it in a text editor, read it, change a colour and see the result, which is true of no other image format.

**Title:** A line inside the SVG naming what it is. It is how the icon is announced, and it is the same decision you made in the alternative-text lesson.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Producing an icon as SVG for a tool-library page, and never opening the file.

**What I did first:** Drew the icon in a graphics tool and exported it as SVG. Technically a vector, technically hand-free, and the file was 41 kilobytes.

**What was in those 41 kilobytes:** When I finally opened it in a text editor: the editor’s own identifiers, a comment naming the version, four empty groups, and the shape itself in about two lines.

**The other thing I found:** The colour was written into the file as a hex value. Three colour variants existed as three separate files, which is why the icon set had grown to nineteen files.

**What writing it by hand gave me:** Under half a kilobyte, one file, and the colour left unset so it takes the colour of the text around it. One icon, three appearances, no extra files.

**What I kept from the tool:** The drawing. I opened the exported file, found the two lines that were the shape, and threw the rest away.

**Wrong turn:** The wrong turn is treating SVG as an export format rather than as text. An exported file is a vector and is usually mostly editor bookkeeping, with the colour baked in so every variant needs its own file.

**Trade-off:** Hand-writing means learning what the two lines mean, which costs an evening the first time. After that it is faster than exporting.

**Unknown:** Still unknown: whether taking the colour from the surrounding text works everywhere it is used. It works on the three places I checked, and I have not checked the rest.


### Which icon you wrote, and the text of it

Section: practice-plan. Stable action: write-svg-icon.

Follow the assigned tutorial. It is a text file: you can read it, change a colour and see what happens.

**Answer:** Which icon you wrote, and the text of it

Follow the assigned tutorial. It is a text file: you can read it, change a colour and see what happens.


### The title you gave it, and which token colour it uses

Section: practice-plan. Stable action: write-svg-title.

Write your answer for “The title you gave it, and which token colour it uses”. Use the task instructions below to decide what to include.

**Answer:** The title you gave it, and which token colour it uses




### Its size in kilobytes, and how it looks when scaled up

Section: practice-plan. Stable action: write-svg-size.

Write your answer for “Its size in kilobytes, and how it looks when scaled up”. Use the task instructions below to decide what to include.

**Answer:** Its size in kilobytes, and how it looks when scaled up




### Decide loading per image

Section: practice-plan. Stable action: step-4-brief.

A loading decision for every image, reserved space so nothing jumps, and your Module 11 alternative-text decisions carried into the markup.

- Mark which images may load later and which must not.
- Reserve space for every image so nothing shifts.
- Carry the m11 alternative-text decision into the markup.

**Start here:** Scroll your own page and draw a line where the first screenful ends. Everything above it loads immediately.

**Enough:** Every image has a decision and a reason, and nothing jumps when the page loads.

**Loading later:** Telling the browser an image can wait until the person scrolls near it. It is right for everything below the first screenful and wrong for anything above it.

**Reserved space:** Telling the layout how big an image will be before it arrives, so nothing jumps when it does. Without it people tap the wrong thing.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six images from a made up tool-library page. For each one, decide how it should load.

The header photograph, at the very top, above all the text.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — It is the first thing on screen, so delaying it leaves an empty page. The better question is whether it should be above the text at all.

can load later — Later means after the person has scrolled to it, and they are looking at it now.

should not be an image at all — It is a photograph, which nothing else can be.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six images from a made up tool-library page. For each one, decide how it should load.

The eighth tool photograph in a list, three screenfuls down.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — Nobody has seen it yet, and loading it now delays what they are looking at.

can load later — Below the fold and in a long list is the clearest case for waiting. Reserve its space so the list does not jump.

should not be an image at all — A photograph of the actual tool is the point of the listing.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six images from a made up tool-library page. For each one, decide how it should load.

A filter icon shipped as a 12-kilobyte photograph file, displayed at 20 pixels.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — Loading it sooner does not fix that it is the wrong kind of file.

can load later — It is in the toolbar at the top, so it is needed at once.

should not be an image at all — It is a flat graphic. Written as SVG it is a fraction of the size, sharp at any scale, and can take its colour from a token.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six images from a made up tool-library page. For each one, decide how it should load.

The library logo in the header, a flat two-colour mark.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — It is at the top, so if it stays a photograph file it does have to load at once.

can load later — It is on screen from the first moment.

should not be an image at all — A two-colour mark is exactly what SVG is for, and it will be smaller than a favicon.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six images from a made up tool-library page. For each one, decide how it should load.

A chart of availability this week, halfway down the page.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — It sits below the first screenful, so waiting costs nobody anything.

can load later — Below the fold, with its space reserved. If it were drawn as SVG it would be small enough that the question hardly matters.

should not be an image at all — A chart is a reasonable candidate for SVG, and the loading decision is the one this step is asking for.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six images from a made up tool-library page. For each one, decide how it should load.

A decorative paper texture behind the whole page, 240 kilobytes.

- must load immediately
- can load later
- should not be an image at all

<details>
<summary>After your attempt</summary>

must load immediately — It is behind everything, and nothing about the page depends on it arriving.

can load later — It covers the whole page, so it cannot easily wait for a scroll.

should not be an image at all — 240 kilobytes for decoration nobody would miss. Either remove it or replace it with something the browser can draw itself.

Now make the decision for each of your own images, and write the reason beside it.

</details>


### For each image: loads immediately, or loads later, and why

Section: practice-plan. Stable action: write-load-decisions.

Anything above the first screenful must not wait. Anything below it usually should.

**Answer:** For each image: loads immediately, or loads later, and why

Anything above the first screenful must not wait. Anything below it usually should.


### How you reserved space so nothing jumps as images arrive

Section: practice-plan. Stable action: write-space-reserved.

Write your answer for “How you reserved space so nothing jumps as images arrive”. Use the task instructions below to decide what to include.

**Answer:** How you reserved space so nothing jumps as images arrive




### How your Module 11 alternative-text decisions reached the markup

Section: practice-plan. Stable action: write-alt-carried.

Write your answer for “How your Module 11 alternative-text decisions reached the markup”. Use the task instructions below to decide what to include.

**Answer:** How your Module 11 alternative-text decisions reached the markup




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You compressed all eleven images and the page got a megabyte lighter, but the time to usable barely moved. Why?

- The delay was one large image above the text, and an even squeeze barely touched it.
- Compression does not affect loading time.
- The connection profile was too slow for the difference to show.

<details>
<summary>After your attempt</summary>

The delay was one large image above the text, and an even squeeze barely touched it. — What the person waits for is the weight above the first screenful. Ten images below the fold can be large and late without anybody noticing.

Compression does not affect loading time. — It does, for whatever is being waited on. The saving landed on images nobody was waiting for.

The connection profile was too slow for the difference to show. — A slow profile makes differences larger rather than smaller. The saving was in the wrong place.

Improve: Identify the largest image above the fold in step 1 and re-export it at its display width, then measure again in step 5. Record the change.

Check again: Your before-and-after pair shows a change in time to usable, not only in weight.

Answers to revisit: image-audit, oversized, wrong-format, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your designer instinct says the developer will optimise the images. What does that miss?

- They can compress what you supply. Whether there is a full-width photograph at all, and whether it sits above the first line of text, are design decisions.
- Nothing much, provided you supply high-quality originals.
- That optimisation tools are not always available.

<details>
<summary>After your attempt</summary>

They can compress what you supply. Whether there is a full-width photograph at all, and whether it sits above the first line of text, are design decisions. — Compression is theirs and it operates on what you handed over. The number of images, their size in the layout and their order on the page dominate the result and come from the design.

Nothing much, provided you supply high-quality originals. — High-quality originals are exactly what produces a 1.8 megabyte header. Supplying the original is not the same as deciding what the page needs.

That optimisation tools are not always available. — They are widely available and free. The point is which decisions the tools cannot reach.

Improve: In your loading decisions in step 4, mark which are yours and which belong to whoever builds it. Record the change in step 5.

Check again: The decisions you listed as yours are ones you could make in your own file.

Answers to revisit: load-decisions, space-reserved, alt-carried, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Four photographs below the fold now load later, and the page jumps as the person scrolls. What went wrong?

- No space was reserved, so the layout only learns how big each image is when it arrives.
- Those images should load immediately after all.
- The images are too large, so they arrive slowly.

<details>
<summary>After your attempt</summary>

No space was reserved, so the layout only learns how big each image is when it arrives. — Loading later and reserving space are two halves of one decision. Without the second, people tap the wrong thing because the target moved as they reached it.

Those images should load immediately after all. — That undoes a good decision to fix a different one. The jumping is about space, not about timing.

The images are too large, so they arrive slowly. — A smaller image arriving into an unreserved space jumps just as much, only faster.

Improve: Reserve the space for every image in step 4 and write how you did it. Record the change in step 5.

Check again: Nothing on the page moves as images arrive.

Answers to revisit: load-decisions, space-reserved, alt-carried, improvement-made

</details>


### Measure the result

Section: practice. Stable action: step-5-brief.

Page weight and time to usable measured before and after, with both traces saved.

- Re-run the throttled load and record the new timings.
- Record before-and-after weight.
- Save the audit and the measurements.

**Start here:** Re-run the throttled load with the same profile you used in lesson 1, so the two numbers can be compared.

**Enough:** Both numbers were measured the same way, and you can say what changed between them.

**Before and after:** The same measurement, under the same conditions, on either side of a change. Without the conditions matching, the pair proves nothing.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Page weight before and after, and time to usable before and after

Section: practice. Stable action: write-before-after.

Write your answer for “Page weight before and after, and time to usable before and after”. Use the task instructions below to decide what to include.

**Answer:** Page weight before and after, and time to usable before and after



<details>
<summary>Example</summary>

Example (made up): 2.4 MB to 340 KB. Time to usable on the slow profile fell from about 11 seconds to about 3.

</details>


### Where you saved the two traces

Section: practice. Stable action: write-measure-saved.

Write your answer for “Where you saved the two traces”. Use the task instructions below to decide what to include.

**Answer:** Where you saved the two traces




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson adds the first behaviour that genuinely needs a script, and asks whether it does.


<details>
<summary>Optional hints and reference material</summary>

- List each image's file size against its display width and re-export the worst offenders.
- Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough.

- R49: [MDN: SVG from scratch](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch) — Shapes, paths, viewBox, fills and strokes, and text. Purpose: Supplies the account-free route to producing and exporting vector artwork by hand. Free documentation, no account. Verified 2026-09-06. Slower than a visual editor and not a replacement for one; it exists so no exercise depends on a hosted design account. Fallback: R15.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Request sizes and timing in the network panel. Purpose: Gives the measurement for the before-and-after comparison. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer, not perceived quality; check the images still look right. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Images are served near their display size in suitable formats**

Adequate evidence: An audit with before-and-after sizes and format decisions per image.

0 — Original files used at any size.

1 — Some resizing without format decisions.

2 — Sizes and formats both addressed with figures recorded.

3 — As adequate, and a design change removed an image rather than optimising it.

Repair: List each image's file size against its display width and re-export the worst offenders. Recheck: The image audit.

**One icon is hand-written SVG using tokens**

Adequate evidence: An SVG written in a text editor, styled with token colours, with a title.

0 — No SVG produced.

1 — SVG exported from a tool rather than written.

2 — Hand-written, token-styled and titled.

3 — As adequate, and it replaced multiple colour variants of the same icon.

Repair: Follow the assigned tutorial and write one simple icon by hand; a square and two paths is enough. Recheck: The SVG file.

**Loading decisions are per image with space reserved**

Adequate evidence: A per-image loading decision and reserved space preventing layout shift.

0 — One rule applied to all images.

1 — Decisions made without reserving space.

2 — Per-image decisions with space reserved.

3 — As adequate, and the above-the-fold image is explicitly excluded from deferral.

Repair: Mark each image above or below the fold and set the loading behaviour accordingly, reserving space in both cases. Recheck: The loading decisions.

**Weight and timing improvements are measured**

Adequate evidence: Before-and-after page weight and throttled time to usable.

0 — Not measured.

1 — Weight measured without timing.

2 — Both measured under the same conditions.

3 — As adequate, and the conditions are stated so the comparison is fair.

Repair: Re-run the same throttled profile before and after and record both numbers. Recheck: The measurements.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson adds the first behaviour that genuinely needs a script, and asks whether it does.

**Review criteria:**

- Images are served near their display size in suitable formats
- One icon is hand-written SVG using tokens
- Loading decisions are per image with space reserved
- Weight and timing improvements are measured

<details>
<summary>Reading, video and deeper explanation</summary>

- Serving an image far larger than its display size is the commonest and cheapest performance mistake. The browser downloads every pixel and then throws most of them away, so a photograph that appears at 400 pixels wide should be delivered near that size, with an allowance for higher-density screens rather than for every possible screen.
- Format follows content. Photographs compress well in formats designed for continuous tone; flat graphics, logos and icons belong in a vector format, where they are small, sharp at every size and colourable with your tokens. Getting this wrong in either direction is expensive — a logo as a large photograph-style file, or a photograph as a vector.
- SVG being text has a consequence worth exploiting: you can write an icon by hand in a text editor, without any design tool or account, and change it with a stylesheet. This is the course's account-free route to producing and exporting vector artwork, and doing it once removes any dependency on a hosted design tool for simple marks.
- Loading later is a legitimate technique for images the person has not scrolled to, and a mistake for the image at the top, which is often what the page is about. Decide per image rather than applying one rule, and remember that an image with no reserved space causes the layout jump you spent m08 and m09 preventing.

[MDN: SVG from scratch](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorials/SVG_from_scratch).

</details>

## Lesson 6: Just enough JavaScript

Stable ID: m12-l06-v1. Core.

Knowing where JavaScript becomes necessary — and what it costs — is what lets you argue for a simpler solution when one exists.

Bring: Your built page and an m09 interaction specification.

Starting route: Recommended route: Build one interactive behaviour on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- One interaction built with plain JavaScript
- A line-by-line explanation of what the code does
- A native or CSS alternative considered and recorded
- A stated behaviour when the script does not run

### Start with a clear task

Section: learn. Stable action: welcome.

Add one genuinely interactive behaviour to your page with plain JavaScript, keeping it usable when the script fails, and explain what the code does line by line.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Much of what people reach for scripts to do, HTML and CSS already do.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Scripts respond to events and change state; that is most of what they are for.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Anything you build with a script, you must also make keyboard operable.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Design for the script failing: slow connection, error, blocked.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

You are learning to read and reason about code, not to become an engineer.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The filter panel was built twice. The first version used a script for showing and hiding, and needed keyboard handling, focus management and announcement written by hand. The second used a native disclosure element and needed almost none of it, behaving correctly with the keyboard and announcing its state without any script at all. The genuinely script-requiring behaviour — filtering the list as options change — was written in about twenty lines, explained line by line, and made to fall back to a submit button that reloads with filters applied when the script does not run.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build one interactive behaviour on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Ask whether you need a script

Section: practice-plan. Stable action: step-1-brief.

One interaction chosen, the native or CSS answer looked for, and what that version gives you for nothing.

- Read the assigned sections on events and DOM changes.
- For your chosen interaction, find any native or CSS answer first.
- Record what the native version gives you free.

**Start here:** Search the assigned material for your interaction by name before writing anything.

**Enough:** You looked for a native answer and wrote down what you found, including finding none.

**Native element:** Something the browser already provides: a disclosure, a dialogue, form validation. It arrives with keyboard behaviour and announcements nobody had to write.

**Reaching for a script:** The habit of building behaviour by hand because that is how examples online do it. Much of what people script, HTML and CSS already do.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Building a filter panel for a tool-library page twice, and building the hard version first.

**What I built first:** A show-and-hide panel in JavaScript. About forty lines by the time it worked.

**What those forty lines were doing:** Six of them opened and closed the panel. The other thirty-four handled the keyboard, moved focus into the panel and back out, closed it on escape, and announced whether it was open.

**What I had not checked:** Whether the browser already had a disclosure element. It does. It opens, closes, works from the keyboard and announces its state, and none of that is written by me.

**What the second version was:** The native element, four lines of styling, and no script at all. It behaved better than mine, because mine had got the focus return wrong and I had not noticed.

**What genuinely needed a script:** Filtering the list as the options change. About twenty lines, which is a thing the browser has no element for.

**Wrong turn:** The wrong turn is starting from the script, because every example online starts there. Most of the code you then write is re-implementing behaviour that already existed, and re-implementing it slightly wrong.

**Trade-off:** Native elements look and behave the way the browser wants until you style them, and some of them are awkward to style. That is a smaller problem than thirty-four lines of keyboard handling you now own.

**Unknown:** Still unknown: whether the native disclosure animates the way the Module 9 specification asked for. It may not, and that is a conversation about the specification rather than a reason to rebuild it by hand.


### Which Module 9 interaction you are building

Section: practice-plan. Stable action: write-interaction-chosen.

Write your answer for “Which Module 9 interaction you are building”. Use the task instructions below to decide what to include.

**Answer:** Which Module 9 interaction you are building




### The native or CSS answer you looked for, and what you found

Section: practice-plan. Stable action: write-native-answer.

Disclosures, dialogues, details, form validation and hover states all exist without a script.

**Answer:** The native or CSS answer you looked for, and what you found

Disclosures, dialogues, details, form validation and hover states all exist without a script.


### What the native version gives you without writing anything

Section: practice-plan. Stable action: write-native-free.

Write your answer for “What the native version gives you without writing anything”. Use the task instructions below to decide what to include.

**Answer:** What the native version gives you without writing anything



<details>
<summary>Example</summary>

Example (made up): keyboard operation, the open or closed state announced, and focus behaving correctly. None of it written by me.

</details>


### Build the interaction

Section: practice-plan. Stable action: step-2-brief.

The interaction built in plain JavaScript, attached to real elements, and tested with the keyboard as well as the pointer.

- Write the script in plain JavaScript, as short as you can make it.
- Attach behaviour to real elements rather than replacing them.
- Test with the keyboard as well as the pointer.

**Start here:** Write the smallest version that does anything at all, load the page, and check the console before adding more.

**Enough:** It works with the keyboard as well as with the pointer, and you have written down what went wrong on the way.

**Event:** Something happening: a click, a key, a change. Scripts mostly wait for events and then change something.

**The console:** A tab in developer tools where errors appear in red, usually naming the file and the line. It is the first place to look when nothing happens.

**Progressive behaviour:** Adding to elements that already work rather than replacing them with things built from scratch. It keeps everything the browser gave you.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Building the filter behaviour on a tool-library page, and spending an hour on a page that was doing nothing.

**What happened:** I wrote the script, reloaded, and nothing at all happened. No movement, no error I could see, no clue.

**What I did for the first hour:** Read my own code over and over, changed things that looked suspicious, and reloaded after each change. Nothing improved and the file got worse.

**What I should have done first:** Opened the Console tab in developer tools. There was one line of red text: a name I had spelled two different ways, with the file and the line number beside it.

**The second thing the console told me:** Once that was fixed, a different message said the element was null. The script was running before the page had finished being read, so the thing it was looking for did not exist yet.

**What fixed it:** Moving the script to the end of the page. Two problems, both named by the console, both fixed in five minutes once I read it.

**Wrong turn:** The wrong turn is debugging by staring at your own code, because that is what feels like working. The browser has already told you the file and the line, in a tab most people never open.

**Trade-off:** Console messages are written for people who already know the vocabulary, and the first few will not mean much. Reading them badly is still faster than reading your own code hopefully.

**Unknown:** Still unknown: whether moving the script to the end is the right long-term answer or a convenience. It works, and there are other ways, and this lesson is not the place to choose between them.


### Where the script lives, and how the page loads it

Section: practice-plan. Stable action: write-script-where.

Write your answer for “Where the script lives, and how the page loads it”. Use the task instructions below to decide what to include.

**Answer:** Where the script lives, and how the page loads it




### What happened when you used it with the keyboard alone

Section: practice-plan. Stable action: write-keyboard-test.

Write your answer for “What happened when you used it with the keyboard alone”. Use the task instructions below to decide what to include.

**Answer:** What happened when you used it with the keyboard alone




### Anything that went wrong, and how you got past it

Section: practice-plan. Stable action: write-build-trouble.

Open the console in developer tools. Red text there usually names the file and the line.

**Answer:** Anything that went wrong, and how you got past it

Open the console in developer tools. Red text there usually names the file and the line.


### Explain the code

Section: practice-plan. Stable action: step-3-brief.

Every line explained in plain language, with anything you copied and do not understand written down honestly.

- Write what each line does in plain language.
- Name the event, the handler and the change.
- Mark anything you copied and do not yet understand.

**Start here:** Go line by line and write what each one does. Where you cannot, say so rather than guessing.

**Enough:** Every line has either an explanation or an honest admission beside it.

**Reading code:** The skill this lesson is actually for. It lets you tell a feasible request from an unreasonable one, follow an estimate, and notice an evasive answer.

**Copied and not understood:** A line taken from an example that works and that you cannot explain. Writing it down turns it into a question rather than a gap.


### What each line does, in plain language

Section: practice-plan. Stable action: write-line-explanation.

Name the event, the handler and the change. Three ideas cover most of it.

**Answer:** What each line does, in plain language

Name the event, the handler and the change. Three ideas cover most of it.


### Anything you copied and do not yet understand

Section: practice-plan. Stable action: write-copied-unclear.

Writing this down honestly is worth more than pretending. It is also the list to ask an engineer about.

**Answer:** Anything you copied and do not yet understand

Writing this down honestly is worth more than pretending. It is also the list to ask an engineer about.


### Design the failure

Section: practice-plan. Stable action: step-4-brief.

The page reloaded with JavaScript switched off, what still works recorded, and a route added that works without the script.

- Disable JavaScript and reload the page.
- Record what still works and what does not.
- Add a route that works without the script where the task requires it.

**Start here:** Open the developer tools settings and switch JavaScript off, then reload and try the task.

**Enough:** You know what a person gets when the script does not run, and it is not nothing.

**Without the script:** Not only somebody who turned JavaScript off. A slow connection, a blocked file or one error earlier in the page all produce the same result.

**Fallback route:** A way to complete the task when the enhancement is not there. For a filter, a submit button that reloads with the filters applied.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

Safety notes that expand when a control is pressed, on the same page.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — The browser has a disclosure element. It opens, closes, works from the keyboard and announces its state without a line from you.

CSS alone — There are tricks to do it with CSS, and they behave oddly with the keyboard and announce nothing.

a script — This is the case where forty lines get written to re-implement something that already exists.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

A card that lifts slightly when the pointer is over it.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — It is a visual state rather than a component.

CSS alone — A hover state is one rule. Remember it does not exist by touch, which is a design question rather than a technical one.

a script — Watching pointer movement with a script for a visual effect is expensive and unnecessary.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

The list narrowing as filter options are changed, without reloading.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — The browser has no element that filters a list of your content against your rules.

CSS alone — CSS can hide things it can select. It cannot decide which rows match a set of chosen options.

a script — This is the genuine case. Twenty lines, plus a submit button for when the script does not run.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

Telling somebody a required field is empty when they try to submit.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — Marking a field required gives you the check, the message and the focus behaviour without a script. You may want to improve the message; you do not need to build the mechanism.

CSS alone — CSS can style an invalid field and cannot stop a submission.

a script — Written by hand this is where accessible error handling usually goes wrong.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

A header that stays at the top as the page scrolls.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — It is a positioning behaviour rather than a component.

CSS alone — One property. Scripts that do this by watching scroll position are a common and expensive way to reinvent it.

a script — Watching every scroll event to reposition a header is exactly the sort of thing to avoid.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six behaviours from a made up tool-library page. For each one, decide what it needs.

A confirmation that appears over the page and takes focus until it is answered.

- a native element
- CSS alone
- a script

<details>
<summary>After your attempt</summary>

a native element — The browser has a dialogue element that handles focus, escape and the layer above the page. Those three are what hand-built versions get wrong.

CSS alone — CSS can draw it. It cannot manage focus, which is the whole difficulty.

a script — A script opens and closes it, and it should open and close a native dialogue rather than a box built from scratch.

Now check your own interaction against the same three options, and record what the native version would have cost or saved.

</details>


### What still works with JavaScript switched off, and what does not

Section: practice-plan. Stable action: write-without-script.

Developer tools can disable JavaScript from the settings panel. Reload after switching it off.

**Answer:** What still works with JavaScript switched off, and what does not

Developer tools can disable JavaScript from the settings panel. Reload after switching it off.


### The route you added that works without the script

Section: practice-plan. Stable action: write-fallback-route.

Write your answer for “The route you added that works without the script”. Use the task instructions below to decide what to include.

**Answer:** The route you added that works without the script




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You do not intend to write code professionally. Why read it?

- It lets you tell a feasible request from an unreasonable one, follow an estimate, and notice when an answer is evasive.
- Because designers are increasingly expected to code.
- So you can make small fixes yourself.

<details>
<summary>After your attempt</summary>

It lets you tell a feasible request from an unreasonable one, follow an estimate, and notice when an answer is evasive. — Writing a little is how reading is learned. The output of this module is judgement in conversations, not a second job.

Because designers are increasingly expected to code. — That is an argument about the market rather than about your work, and it invites the reply that you will hire for it.

So you can make small fixes yourself. — Sometimes useful, and it is not the reason. The reason is being able to reason about what you are being told.

Improve: Add anything you copied and cannot explain to the honest list in step 3. Record the change in step 5.

Check again: The list of what you do not understand is written down rather than left implicit.

Answers to revisit: line-explanation, copied-unclear, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your show-and-hide panel took forty lines. Thirty-four of them handle keyboard, focus and announcements. What does that suggest?

- That the browser probably has an element for this, and you are re-implementing behaviour that already existed.
- That accessible interactions are simply expensive to build.
- That the code needs refactoring.

<details>
<summary>After your attempt</summary>

That the browser probably has an element for this, and you are re-implementing behaviour that already existed. — A disclosure element opens, closes, works from the keyboard and announces its state with no script at all. Most hand-built versions get the focus return slightly wrong.

That accessible interactions are simply expensive to build. — They are, built from scratch. The reason to check for a native element first is exactly this cost.

That the code needs refactoring. — Shorter code doing the same unnecessary work is still unnecessary work.

Improve: Record in step 1 what the native version gives you free, even if you kept your own. Note the change in step 5.

Check again: Your record says what a native element would have provided without being written.

Answers to revisit: interaction-chosen, native-answer, native-free, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

With JavaScript off, your filter does nothing and the list cannot be narrowed at all. Is that acceptable?

- Not for a task the person needs to complete. A submit button that reloads with the filters applied costs little and keeps the task possible.
- It is acceptable, since almost nobody disables JavaScript.
- It is acceptable if the page says JavaScript is required.

<details>
<summary>After your attempt</summary>

Not for a task the person needs to complete. A submit button that reloads with the filters applied costs little and keeps the task possible. — Scripts fail for ordinary reasons: a slow connection, a blocked file, one error earlier in the page. Designing the failure is what keeps the task available when they do.

It is acceptable, since almost nobody disables JavaScript. — Almost nobody disables it deliberately, and plenty of people meet it not running. The reasons are network and error, not preference.

It is acceptable if the page says JavaScript is required. — That tells somebody why they cannot do the thing. It does not let them do it.

Improve: Add a route in step 4 that completes the task without the script, and write what it does. Record the change in step 5.

Check again: The task can be completed with JavaScript switched off, even if less pleasantly.

Answers to revisit: without-script, fallback-route, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

What the native alternative would have cost or saved, where the work is saved, and the repair the Check questions asked for.

- Write what the native alternative would have cost or saved.
- Save the code, the explanation and the failure behaviour.

**Start here:** Count the lines in your script that are about the behaviour, and the lines that are about the keyboard.

**Enough:** You can say what choosing the native element would have changed, in lines and in behaviour.

**What it saved:** The lines you did not write, and the behaviour you did not have to get right. Keyboard handling and announcements are the usual two.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What the native alternative would have cost or saved

Section: practice. Stable action: write-native-cost.

Write your answer for “What the native alternative would have cost or saved”. Use the task instructions below to decide what to include.

**Answer:** What the native alternative would have cost or saved




### Where the code and the explanation are saved

Section: practice. Stable action: write-script-saved.

Write your answer for “Where the code and the explanation are saved”. Use the task instructions below to decide what to include.

**Answer:** Where the code and the explanation are saved




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson deals with data that has not arrived yet.


<details>
<summary>Optional hints and reference material</summary>

- For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide.
- Test with the pointer unavailable and implement the missing key behaviour.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The scripting module: events, handling them, and changing the document. Purpose: Supplies the event-and-change shape this lesson builds and explains. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. This is enough to read and reason about code, not to become an engineer. Fallback: R16.
- R41: [W3C WAI: easy checks](https://www.w3.org/WAI/test-evaluate/preliminary/) — The keyboard access check. Purpose: Verifies the interaction you built is operable without a pointer. Free reading, no account. Verified 2026-09-06. Preliminary only; passing it is not conformance. Fallback: R28.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A native or CSS alternative was considered first**

Adequate evidence: A written record of the alternative and what it would have provided.

0 — Script written without considering alternatives.

1 — Alternative mentioned without evaluation.

2 — Alternative evaluated with what it gives free.

3 — As adequate, and one part of the interaction was replaced by a native element as a result.

Repair: For your interaction, look up whether an element or a CSS feature already does it, and write what that would provide. Recheck: The alternative record.

**The interaction works with a keyboard**

Adequate evidence: A keyboard test of the built interaction against your m09 key table.

0 — Pointer only.

1 — Reachable but not fully operable.

2 — Operable by keyboard and matching the key table.

3 — As adequate, and focus behaviour on open and close matches your m09 rules.

Repair: Test with the pointer unavailable and implement the missing key behaviour. Recheck: The keyboard test.

**The code is explained line by line**

Adequate evidence: Plain-language explanations naming the event, handler and change, with copied lines marked.

0 — No explanation.

1 — General description of the effect.

2 — Line-by-line explanation with unknowns marked honestly.

3 — As adequate, and one line was simplified or removed once it was explained.

Repair: Write a comment for each line; anything you cannot explain, mark and look up. Recheck: The annotated code.

**Behaviour without the script is specified and tested**

Adequate evidence: A recorded test with JavaScript disabled and a working route for the essential task.

0 — Not considered.

1 — Considered without testing.

2 — Tested with the essential task still completable.

3 — As adequate, and the fallback is a real route rather than an error message.

Repair: Disable JavaScript, reload, and add a non-script route for anything essential that broke. Recheck: The no-script test.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson deals with data that has not arrived yet.

**Review criteria:**

- A native or CSS alternative was considered first
- The interaction works with a keyboard
- The code is explained line by line
- Behaviour without the script is specified and tested

<details>
<summary>Reading, video and deeper explanation</summary>

- The first question is whether you need a script at all. Show and hide, expand and collapse, form validation basics, smooth scrolling and many transitions have native or CSS answers that come with keyboard and assistive-technology behaviour already correct. Reaching for a script first means rebuilding all of that by hand, and usually incompletely.
- When a script is warranted, its shape is simple: something happens, the script responds, the interface changes. Learning to read that shape — the event, the handler, the change — is enough to follow most front-end code and to ask precise questions about it.
- Anything built in script must be keyboard operable and announced, which is the m09 key table meeting the build. Native elements give you this behaviour free; custom ones give you nothing, which is the real cost of building an interaction from scratch and the strongest argument for using what the platform provides.
- Scripts fail: connections drop, errors are thrown, corporate networks block files. Design what the person gets when it does — ideally a page that still works with fewer features rather than a blank screen. This is the same graceful-failure thinking as your m07 exception table, one layer down.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 7: Data that arrives later

Stable ID: m12-l07-v1. Core.

Every state you have specified for four modules becomes real here, and building them is what proves they were designed rather than described.

Bring: Your state specifications and the built page.

Starting route: Recommended route: Build the four states of a list that has to wait for its data in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A page that fetches and renders real data
- Loading, content, empty and error branches built with your wording
- A slow-wait message and a timeout with a route out
- A list of specification errors the build revealed

### Start with a clear task

Section: learn. Stable action: welcome.

Fetch data from a public source into your page, and build the loading, empty, error and slow states you specified in m08 so they are real rather than drawn.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Data arrives after the page: something must be shown in the meantime.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Four outcomes: loading, content, empty and error. All four are your design.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Slow is a fifth: design what happens at three seconds and at thirty.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Errors are normal, not exceptional; the network fails routinely.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Never leave the person with a blank region and no explanation.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The class list was connected to a small public data source. Four branches were built with the m08 wording: loading reserved the row heights and, after three seconds, added “Still loading — this can take a moment on a slow connection”; content rendered the list; empty said what would appear and offered to widen the filters; error said what happened, that nothing was lost, and offered retry without losing filters. Building revealed two specification errors: the reserved space was for four rows where the real result was often twelve, and the error message referred to a retry control that had never been designed.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build the four states of a list that has to wait for its data in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Fetch something real

Section: practice-plan. Stable action: step-1-brief.

Real data arriving in your page and the content branch rendering it, with any trouble and its recovery written down.

- Read the assigned sections on fetching data.
- Connect your page to a public source or a local data file.
- Render the content branch first.

**Start here:** Render one row from real data before building anything else. Everything after that is states around it.

**Enough:** Real data appears on your page, even if it appears badly.

**Fetching:** Asking for data after the page has already loaded, and doing something with it when it comes back. The gap between asking and receiving is what the next three steps are about.

**Public source:** Data anybody can request without a key or an account. A file of your own realistic data, sitting beside the page, works just as well for this lesson.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Connecting a tool-library list to real data, and building against data I had written myself.

**What I built against:** Six rows of test data I typed out: short names, tidy dates, a photograph for each, every field filled.

**What the page looked like:** Immaculate. The cards lined up, every name fitted on one line, and the layout I had drawn in Module 7 came out exactly as drawn.

**What the real source returned:** Forty-one rows. Four with no photograph. One name of eleven words. Three dates in a format I had not expected, and two items where the availability field was simply absent.

**What broke:** The missing photographs left holes, the long name pushed its card off the grid, and the absent availability rendered as the word undefined in the place where On loan should have been.

**What I changed about the method:** Started from the real data, ugly as it was, and built the layout around what actually arrives rather than around what I would have chosen to arrive.

**Wrong turn:** The wrong turn is inventing tidy test data, because you need something to build against and yours is always well-behaved. Every shape you failed to imagine becomes a bug nobody sees until it is in front of a person.

**Trade-off:** Building against real data means the page looks bad for the first hour and you will be tempted to tidy the data instead of the design. The data is not yours to tidy.

**Unknown:** Still unknown: whether forty-one rows is a typical result. It is one request on one day, and the loading state I reserve space for depends on the answer.


### Where the data comes from

Section: practice-plan. Stable action: write-data-source.

A public source that needs no key, or a file of your own realistic data sitting beside the page. Either is fine; no account is needed.

**Answer:** Where the data comes from

A public source that needs no key, or a file of your own realistic data sitting beside the page. Either is fine; no account is needed.


### What the content branch renders, and what one real row looks like

Section: practice-plan. Stable action: write-content-branch.

Write your answer for “What the content branch renders, and what one real row looks like”. Use the task instructions below to decide what to include.

**Answer:** What the content branch renders, and what one real row looks like




### Anything that went wrong getting the data in, and how you got past it

Section: practice-plan. Stable action: write-fetch-trouble.

The console and the network panel between them name almost every failure here.

**Answer:** Anything that went wrong getting the data in, and how you got past it

The console and the network panel between them name almost every failure here.


### Build the other three branches

Section: practice-plan. Stable action: step-2-brief.

Loading, empty and error branches built with your own Module 8 wording, with space reserved and filters preserved.

- Add loading, empty and error branches using your m08 wording.
- Reserve the space content will occupy.
- Make the error branch preserve filters and offer retry.

**Start here:** Open your Module 8 state specifications and copy the wording across before writing any code.

**Enough:** All four branches exist, and the two you never see have the same care as the two you do.

**Branch:** One of the outcomes the page can be in. Four of them exist whether or not you design them: loading, content, empty and error.

**Preserving input:** Keeping the filters, the search text and anything typed when something fails. Losing it turns one failure into starting again.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Building the four branches for a tool-library list, and building the one that never happens to me.

**What I built first:** Content and loading. Both appear constantly while you work, so both got attention and both looked good.

**What I put off:** Empty and error. In three days of building, I had seen neither: my test data always returned rows, and my connection never failed.

**What I eventually wrote for them:** Two grey lines. “No results.” and “Something went wrong.” It took two minutes and I did not look at them again.

**What happened when I forced an error:** The message appeared, and every filter the person had set was gone. Retrying meant setting all four again, which is the moment somebody leaves.

**What the branches became:** Empty says what would appear here and offers to widen the dates. Error says what happened, that nothing was lost, and retries with the filters still set. Both took twenty minutes because the wording already existed in my Module 8 sheet.

**Wrong turn:** The wrong turn is building the branches in the order you happen to meet them, which means the two you never see get two minutes at the end. A person on a train meets the error branch more often than some features you will spend a week on.

**Trade-off:** Giving empty and error real wording and real behaviour costs most of an afternoon on states that, from your desk, look like they never happen.

**Unknown:** Still unknown: whether the retry actually helps, or whether the failure that produced it will simply repeat. The design assumes a transient failure, and I have not tested a persistent one.


### What loading shows, and how much space it reserves

Section: practice-plan. Stable action: write-loading-branch.

Reserve the space the content will take, so nothing jumps when it arrives.

**Answer:** What loading shows, and how much space it reserves

Reserve the space the content will take, so nothing jumps when it arrives.


### What empty says, using your Module 8 wording

Section: practice-plan. Stable action: write-empty-branch.

Write your answer for “What empty says, using your Module 8 wording”. Use the task instructions below to decide what to include.

**Answer:** What empty says, using your Module 8 wording



<details>
<summary>Example</summary>

Example (made up): No tools match those filters. Widening the date range usually helps, and here is a control to do it.

</details>


### What error says, what it preserves, and how retry works

Section: practice-plan. Stable action: write-error-branch.

Write your answer for “What error says, what it preserves, and how retry works”. Use the task instructions below to decide what to include.

**Answer:** What error says, what it preserves, and how retry works




### Make it slow and make it fail

Section: practice-plan. Stable action: step-3-brief.

The loading branch watched on a throttled connection, an error forced deliberately, and a timeout with a route out.

- Throttle the connection and watch the loading branch.
- Force an error by breaking the address or going offline.
- Add a timeout with its own message and a route out.

**Start here:** Open the network panel, set it to offline, and reload. That is your error branch, whether or not you built one.

**Enough:** You have seen all four branches on your own screen rather than in your specification.

**Forcing a failure:** Breaking the address, or switching to offline in the network panel. Errors are hard to find by waiting for them and easy to cause on purpose.

**The fifth state:** Slow. Not loading and not failed, just still going. Decide what happens at three seconds and at thirty, or the person waits for ever with a spinner.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

The request has been out for 800 milliseconds and nothing has come back yet.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — Ordinary waiting. Reserve the space, show the placeholder rows, and say nothing extra.

empty — Nothing has come back, which is not the same as nothing existing.

error — Nothing has failed. Announcing a problem this early creates one.

Now force each of these on your own page and check the person lands where you intended.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

The request came back successfully with a list containing no items, because the filters are narrow.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — The waiting is over. Leaving a spinner here is the commonest version of this mistake.

empty — It worked and there is nothing to show. Say what would appear here and offer the change most likely to help.

error — Calling a successful answer an error sends the person looking for a fault that does not exist.

Now force each of these on your own page and check the person lands where you intended.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

The device has no connection, so the request never leaves.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — It will wait for ever, which is the state nobody designs.

empty — It is not that there are no tools. It is that nobody could ask.

error — Say what happened, that nothing they typed was lost, and offer to try again when they are back.

Now force each of these on your own page and check the person lands where you intended.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

The request has been out for thirty seconds with no answer and no failure.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — Technically true and useless. After thirty seconds a spinner is telling somebody nothing they cannot already see.

empty — Nothing has come back to be empty.

error — Time out, say so plainly, and give a route out. Waiting indefinitely is a decision, and it is a bad one.

Now force each of these on your own page and check the person lands where you intended.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

The server answered, and what it answered was that something had gone wrong at its end.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — An answer arrived, so the waiting is finished.

empty — There may well be plenty of tools. Nobody managed to find out.

error — This is the clearest error case, and it is the one where saying nothing was lost matters most.

Now force each of these on your own page and check the person lands where you intended.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six moments from a made up tool-library list waiting for its data. For each one, decide which branch the person should be in.

Four seconds in, the request is still going, and it is going to succeed in another six.

- loading
- empty
- error

<details>
<summary>After your attempt</summary>

loading — Still loading, and long enough that the person deserves a word about it. This is where the slow message earns its place.

empty — Nothing has arrived yet to be empty.

error — Nothing has failed, and calling it a failure at four seconds would be wrong six seconds later.

Now force each of these on your own page and check the person lands where you intended.

</details>


### What the loading branch looked like on a throttled connection

Section: practice-plan. Stable action: write-slow-watch.

Write your answer for “What the loading branch looked like on a throttled connection”. Use the task instructions below to decide what to include.

**Answer:** What the loading branch looked like on a throttled connection




### How you forced an error, and what the person saw

Section: practice-plan. Stable action: write-forced-error.

Break the address, or go offline in the network panel. Both take one click.

**Answer:** How you forced an error, and what the person saw

Break the address, or go offline in the network panel. Both take one click.


### Your timeout message and the route out of it

Section: practice-plan. Stable action: write-timeout-route.

Waiting for ever is a fifth state nobody designs. Decide what happens at thirty seconds.

**Answer:** Your timeout message and the route out of it

Waiting for ever is a fifth state nobody designs. Decide what happens at thirty seconds.


### Compare with the specification

Section: practice-plan. Stable action: step-4-brief.

Each built state compared against your Module 8 specification, with every wrong or incomplete part named.

- Check each built state against what you specified in m08.
- Record every place the specification was wrong or incomplete.

**Start here:** Put your Module 8 sheet beside the built page and go state by state, in order.

**Enough:** You found at least one thing the specification got wrong, because almost every specification does.

**Specification error:** Something you wrote that turned out to be impossible, wrong or missing once it was built. Finding one is what this step is for.


### Every place the Module 8 specification was wrong or incomplete

Section: practice-plan. Stable action: write-spec-errors.

Write your answer for “Every place the Module 8 specification was wrong or incomplete”. Use the task instructions below to decide what to include.

**Answer:** Every place the Module 8 specification was wrong or incomplete



<details>
<summary>Example</summary>

Example (made up): the loading state reserved four rows and the real result is usually twelve, so the page jumped every time.

</details>


### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You expect the data source to work nearly always, so the error branch feels like a formality. Is it?

- It is not. Networks fail routinely, and a person on a train meets the error branch more often than several features you will spend a week on.
- Largely yes, if the source is reliable.
- Yes, provided the error message is clear.

<details>
<summary>After your attempt</summary>

It is not. Networks fail routinely, and a person on a train meets the error branch more often than several features you will spend a week on. — The failure rate at your desk, on your connection, is the least representative number available. Errors are a normal outcome rather than an exceptional one.

Largely yes, if the source is reliable. — The source being reliable does not make the connection between it and the person reliable, and that is where most failures happen.

Yes, provided the error message is clear. — The message is the smallest part. What the branch preserves and how it lets somebody retry is what decides whether they continue.

Improve: Check your error branch in step 2 preserves the filters and offers retry, and fix it if it does not. Record the change in step 5.

Check again: Nothing the person typed is lost when the request fails.

Answers to revisit: loading-branch, empty-branch, error-branch, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

A successful request comes back with no items. Which branch should the person be in?

- Empty. The question was answered, and the answer was none.
- Error, since they did not get what they wanted.
- Loading, until they change the filters.

<details>
<summary>After your attempt</summary>

Empty. The question was answered, and the answer was none. — Empty and error send people to look for different things. Calling a successful nothing an error sends somebody hunting a fault that does not exist.

Error, since they did not get what they wanted. — Not getting what you wanted is not a malfunction. The system worked and the answer was none.

Loading, until they change the filters. — A spinner that never resolves is the worst of the options, because it promises something is still coming.

Improve: Check your empty branch in step 2 says what would appear here and offers the change most likely to help. Record the change in step 5.

Check again: Empty and error say different things and offer different next moves.

Answers to revisit: loading-branch, empty-branch, error-branch, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your loading state reserved four rows and the real result is usually twelve. What kind of problem is that?

- A specification error the build revealed, and the specification is what needs correcting.
- A build problem to fix in the code and move on.
- Not a problem, since the rows arrive quickly.

<details>
<summary>After your attempt</summary>

A specification error the build revealed, and the specification is what needs correcting. — You could not have known the usual result size from a drawing. Updating the Module 8 document is what stops the next person building the same jump.

A build problem to fix in the code and move on. — Fixing the code leaves a document that still says four, which somebody will build from later.

Not a problem, since the rows arrive quickly. — The page jumps by eight rows when they arrive, and people tap the wrong thing because of it.

Improve: Correct the Module 8 specification in step 5, not only the code, and say what you changed. Record it.

Check again: The specification and the build now agree.

Answers to revisit: spec-updated, states-saved, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

The specification updated to match what the build showed, and the repair the Check questions asked for.

- Update the specifications to match what the build showed.
- Save the code and the list of corrections.

**Start here:** Open the Module 8 document and change it, rather than writing a note about changing it.

**Enough:** Somebody building from your specification today would build what you actually built.

**Updating the specification:** Correcting the earlier document rather than only the code. Otherwise the next person builds from a description you already know is wrong.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### What you changed in the specification to match what the build showed

Section: practice. Stable action: write-spec-updated.

Write your answer for “What you changed in the specification to match what the build showed”. Use the task instructions below to decide what to include.

**Answer:** What you changed in the specification to match what the build showed




### Where the code and the four states are saved

Section: practice. Stable action: write-states-saved.

Write your answer for “Where the code and the four states are saved”. Use the task instructions below to decide what to include.

**Answer:** Where the code and the four states are saved




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson builds a form that really submits.


<details>
<summary>Optional hints and reference material</summary>

- Force each state in turn — no data, bad address, offline — and build whichever branch is missing.
- Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The scripting module sections on fetching data and handling responses and failures. Purpose: Supplies the mechanics for requesting and rendering data. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Use a public source that needs no key, or local data. Fallback: R16.
- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling, disabling the cache, and inspecting requests and responses. Purpose: Lets you produce the slow and failed conditions deliberately. Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling does not simulate a dropped connection; disconnect to test that. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**All four branches are built and reachable**

Adequate evidence: Loading, content, empty and error branches, each demonstrable.

0 — Content branch only.

1 — Three branches, usually missing empty.

2 — All four built and reachable on demand.

3 — As adequate, and each can be triggered deliberately for testing.

Repair: Force each state in turn — no data, bad address, offline — and build whichever branch is missing. Recheck: The four demonstrated states.

**The wording comes from the m08 specifications**

Adequate evidence: Built states using the specified wording, with any changes recorded.

0 — Placeholder or default framework messages.

1 — Some specified wording, some improvised.

2 — Specified wording throughout, with deliberate changes noted.

3 — As adequate, and improvements found while building are fed back into the specification.

Repair: Replace every improvised string with the m08 wording, then update the specification where the build showed it was wrong. Recheck: The wording comparison.

**Slow and failed requests are handled with a route out**

Adequate evidence: A slow-wait message, a timeout, and an error branch preserving filters with retry.

0 — Neither slowness nor failure handled.

1 — Errors handled but no timeout or slow message.

2 — All three handled with a route out.

3 — As adequate, and retry preserves scroll position as well as filters.

Repair: Throttle and disconnect deliberately, then build what the person needs in each case. Recheck: The slow and error handling.

**Specification errors revealed by the build are recorded**

Adequate evidence: A list of places where the m08 specification was wrong, with corrections.

0 — No comparison made.

1 — Differences noticed but not recorded.

2 — Errors listed and specifications corrected.

3 — As adequate, and one correction is traced to a wrong assumption about data volume or timing.

Repair: Walk your specification beside the running page and note every mismatch. Recheck: The correction list.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson builds a form that really submits.

**Review criteria:**

- All four branches are built and reachable
- The wording comes from the m08 specifications
- Slow and failed requests are handled with a route out
- Specification errors revealed by the build are recorded

<details>
<summary>Reading, video and deeper explanation</summary>

- A page that requests data has a gap between arriving and being useful, and everything you have specified about loading states was written for this gap. Building it makes the specification honest: you will discover whether the reserved space was the right size, whether the message reads well at three seconds, and whether the layout still holds when the data is longer than expected.
- Four outcomes need code, not just design. Loading, content, empty and error each need a branch, and the empty case is the one most often forgotten, producing a blank region that looks like a failure. Your m08 wording for all four goes in here directly.
- Slowness is not a fifth outcome but it behaves like one. The message that suits a two-second wait is wrong at twenty, and a request that never resolves needs a timeout with its own message and route out. Deciding those thresholds is design work you can now implement.
- Errors are ordinary. Mobile connections drop mid-request, servers return failures, and requests time out — routinely, not exceptionally. Treating the error branch as an edge case produces the products where a moment of poor signal leaves a permanently empty screen with no way forward.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 8: A form that actually submits

Stable ID: m12-l08-v1. Core.

Forms are where your accessibility and error specifications are either implemented or quietly dropped.

Bring: Your field table and error specifications.

Starting route: Recommended route: Build one working form, native behaviour first in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A working form using native validation where possible
- Custom rules only where the platform cannot know them
- Errors associated with fields, announced and linked from a summary
- A record of what was free and what was hand-written

### Start with a clear task

Section: learn. Stable action: welcome.

Build one working form with native validation, accessible errors and preserved input, and record what the browser gave you free versus what you had to write.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

The browser already validates common types and reports errors.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Native first, custom only where the native behaviour is genuinely insufficient.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Errors must be associated with fields and announced when they appear.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Never clear the form on failure; preserve everything.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Validation on the client is convenience; the server is where it counts.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The booking form was built with native input types and required attributes, adding custom rules only for two things the browser could not know: that the date must be a future class date, and that the phone number must match an accepted set of formats. Errors were associated with their fields, a summary at the top linked to each, and the summary was announced on appearance. On a failed submission everything the person had entered survived. The record noted what came free — type-appropriate keyboards, required handling, announcement — and what was written by hand, which was about fifteen lines.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build one working form, native behaviour first in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Build with native behaviour

Section: practice-plan. Stable action: step-1-brief.

A form built from appropriate input types and required fields, with what the browser does on its own observed before anything is added.

- Read the assigned form sections and the accessibility requirements.
- Build the form with appropriate input types and required fields.
- Test what the browser does before adding anything.

**Start here:** Build the fields with types and required attributes only, then submit the form empty and watch.

**Enough:** You have written down what the browser did before you added anything.

**Input type:** Telling the browser what kind of thing a field holds. It changes the keyboard on a phone, the validation and the error message, without any code.

**Native validation:** The checking the browser does itself, including announcing the problem and moving focus. Custom versions routinely omit both of those.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Building a tool-request form, and rebuilding what the browser was already doing.

**What I assumed:** That native validation looks crude, so a custom version would be better. I had never actually watched the native one run.

**What I tried:** Built the form with types and required attributes and nothing else, then submitted it empty.

**What happened:** The browser stopped the submission, moved focus to the first empty field, showed a message beside it and announced it. On my phone the email field brought up a keyboard with an at sign on it.

**What I had planned to write:** All of that. The checking, the message, the focus move and the announcement, by hand, for six fields.

**What I wrote instead:** Two rules the browser cannot know: that the date must be one on which a class runs, and that the phone number must match one of two local formats. About fifteen lines.

**Wrong turn:** The wrong turn is judging native validation by its appearance without watching its behaviour. What looks plain is doing four things, and a custom version that looks better usually does one.

**Trade-off:** Native messages are worded by the browser and cannot be rewritten freely, so some of them are vaguer than your own wording would be. You can add your own beside them, which is a smaller job than replacing the mechanism.

**Unknown:** Still unknown: whether the native wording reads well in every browser your audience uses. It varies, and I have checked two.


### Which input types and required fields you used, and why each

Section: practice-plan. Stable action: write-input-types.

The type changes the keyboard on a phone, the validation and the error message, all without a line from you.

**Answer:** Which input types and required fields you used, and why each

The type changes the keyboard on a phone, the validation and the error message, all without a line from you.


### What the browser did on its own when you submitted with mistakes in it

Section: practice-plan. Stable action: write-native-observed.

Try it before adding anything. Most people never find out what they were about to rebuild.

**Answer:** What the browser did on its own when you submitted with mistakes in it

Try it before adding anything. Most people never find out what they were about to rebuild.


### Add only what is missing

Section: practice-plan. Stable action: step-2-brief.

Custom rules written only for what the browser cannot know, matching the native presentation.

- Identify rules the browser cannot know.
- Implement those, matching the native presentation.
- Keep the total custom code as small as you can.

**Start here:** List the rules you need, then cross off every one the browser already checks.

**Enough:** Everything left on the list is genuinely about your own subject rather than about formats in general.

**What the browser cannot know:** Anything about your world: which dates have classes, which formats your region accepts, whether that name is already taken. Everything else it probably already checks.

**Matching the presentation:** Making your errors look and behave like the browser’s. Two styles in one form suggests two kinds of mistake, and there is only one kind.


### The rules the browser has no way to know

Section: practice-plan. Stable action: write-cannot-know.

Write your answer for “The rules the browser has no way to know”. Use the task instructions below to decide what to include.

**Answer:** The rules the browser has no way to know



<details>
<summary>Example</summary>

Example (made up): that the date has to be one on which a class actually runs, and that the phone number has to match one of two accepted local formats.

</details>


### What you wrote for those, and roughly how many lines

Section: practice-plan. Stable action: write-custom-written.

Write your answer for “What you wrote for those, and roughly how many lines”. Use the task instructions below to decide what to include.

**Answer:** What you wrote for those, and roughly how many lines




### How your custom errors match the native ones in appearance and behaviour

Section: practice-plan. Stable action: write-presentation-match.

Two error styles in one form tells the person the two kinds of mistake are different things. They are not.

**Answer:** How your custom errors match the native ones in appearance and behaviour

Two error styles in one form tells the person the two kinds of mistake are different things. They are not.


### Make errors accessible

Section: practice-plan. Stable action: step-3-brief.

Every error associated with its field, a summary linking to each problem, and the announcement checked by listening.

- Associate each error with its field.
- Add a summary that links to each problem field.
- Ensure the summary is announced when it appears.

**Start here:** Turn the screen reader back on before you check this step. Seeing the summary appear is not the check.

**Enough:** You listened to a failed submission, rather than watching one.

**Association:** The error joined to its field, so reaching the field announces the error. A message sitting near a box is not associated with it.

**Announced:** Spoken when it appears, rather than appearing silently. This is the behaviour Module 11 recorded as specified and untested; here you can test it.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Building the error summary on a tool-request form, and building the half that is easy to see.

**What I built:** A summary at the top: “There are 3 problems with this form”, with three lines under it naming each field.

**What it looked like:** Exactly right. Prominent, clearly worded, using the Module 11 wording, and announced when it appeared because I had specified that.

**What happened by keyboard:** The person hears “There are 3 problems”. Then they tab, and tab, and tab, through the header and the navigation, hunting for the first field with something wrong.

**What was missing:** The three lines were text, not links. A summary that names problems without taking you to them is an announcement rather than a route.

**What I changed:** Each line became a link to its field, and focus moved to the summary when it appeared. Three problems, three key presses, no hunting.

**Wrong turn:** The wrong turn is building the part of the summary you can see and stopping there. It looks complete, it is announced, and it leaves somebody exactly where they were.

**Trade-off:** Moving focus to the summary interrupts wherever the person was. On a failed submission that is the right interruption, and on anything less serious it would not be.

**Unknown:** Still unknown: whether moving focus to the summary or straight to the first bad field is better. I chose the summary because it says how many, and I have not tested the alternative.


### How each error is associated with its field

Section: practice-plan. Stable action: write-association.

Write your answer for “How each error is associated with its field”. Use the task instructions below to decide what to include.

**Answer:** How each error is associated with its field




### What the summary says and what each line links to

Section: practice-plan. Stable action: write-summary-built.

Write your answer for “What the summary says and what each line links to”. Use the task instructions below to decide what to include.

**Answer:** What the summary says and what each line links to




### How you checked the summary is announced when it appears

Section: practice-plan. Stable action: write-announced.

The screen reader you used in Module 11 will tell you. Seeing it appear is not the same check.

**Answer:** How you checked the summary is announced when it appears

The screen reader you used in Module 11 will tell you. Seeing it appear is not the same check.


### Fail and recover

Section: practice-plan. Stable action: step-4-brief.

A failed submission with several mistakes, nothing lost, focus somewhere useful, and the whole form completed by keyboard.

- Submit with several errors and confirm nothing is lost.
- Check focus moves somewhere useful.
- Test the whole form with the keyboard only.

**Start here:** Fill in half the form, get three things wrong on purpose, and submit it.

**Enough:** Everything you typed is still there, and focus landed somewhere that helps.

**Preserved input:** Everything the person typed still being there after a failure. Clearing a form on failure is the single most common way to lose somebody entirely.

**Useful focus:** Landing somewhere that helps: the summary, or the first field with a problem. Landing at the top of the page makes the person hunt.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

On a phone, the email field brings up a keyboard with an at sign on it.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — The input type does this. It is one of the clearest arguments for using the right type rather than a plain box.

written by hand — Nothing you can write from a page changes the keyboard. The type is the only lever.

missing entirely — It is present as soon as the type is right.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

Submitting with a required field empty stops the submission, moves focus there and announces the problem.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — Three behaviours from one attribute: stopping, focusing and announcing. These are the three that hand-built validation usually misses.

written by hand — This is what people write by hand, after not checking whether it already happened.

missing entirely — It is there the moment a field is marked required.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

The form rejects a date on which no class runs.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — The browser can check that something is a date. It has no idea which dates have classes.

written by hand — This is genuinely yours: a rule about your own subject that nothing else could know.

missing entirely — It has to exist, and it has to be written.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

A summary appears at the top after a failed submission and is announced when it appears.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — The browser handles fields one at a time. A summary of several problems is your own addition.

written by hand — Worth writing on a form of any size, and it is the piece most often built to appear silently.

missing entirely — On many forms it is, which is why Module 11 recorded it as specified and untested.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

After a failed submission the form comes back empty, with everything the person typed gone.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — The browser preserves values by default. Losing them takes effort, usually a page reload somebody added.

written by hand — Nobody writes this deliberately. It arrives as a side effect and nobody tests for it.

missing entirely — What is missing is the preservation. This is the failure that ends the task rather than delaying it.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six form behaviours from a made up tool-library build. For each one, decide where it came from.

The same rules are checked again after the form is sent, where the person cannot change them.

- free from the browser
- written by hand
- missing entirely

<details>
<summary>After your attempt</summary>

free from the browser — Nothing the browser does survives leaving the browser.

written by hand — It is written by hand, and not here: it belongs on the other side, and this lesson does not build one.

missing entirely — From this page, yes, and that is the honest answer. Checking in the browser is convenience; the check that counts happens where the person cannot reach it.

Now sort your own form the same way, and let the three lists become your record in step 5.

</details>


### What survived a failed submission with several mistakes in it

Section: practice-plan. Stable action: write-nothing-lost.

Write your answer for “What survived a failed submission with several mistakes in it”. Use the task instructions below to decide what to include.

**Answer:** What survived a failed submission with several mistakes in it




### Where focus went after the failed submission

Section: practice-plan. Stable action: write-focus-after.

Write your answer for “Where focus went after the failed submission”. Use the task instructions below to decide what to include.

**Answer:** Where focus went after the failed submission




### What happened completing the whole form with the keyboard alone

Section: practice-plan. Stable action: write-keyboard-only.

Write your answer for “What happened completing the whole form with the keyboard alone”. Use the task instructions below to decide what to include.

**Answer:** What happened completing the whole form with the keyboard alone




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You believe a custom validation experience would be better than the browser’s. What is the risk?

- Native validation also announces the problem and moves focus, and custom versions routinely omit both.
- There is no real risk if you test it carefully.
- Custom validation is slower to run.

<details>
<summary>After your attempt</summary>

Native validation also announces the problem and moves focus, and custom versions routinely omit both. — What looks plain is doing four things at once. A custom version usually reproduces the visible one and drops the two that matter to somebody not looking at the screen.

There is no real risk if you test it carefully. — Testing carefully means testing by keyboard and by listening, which is exactly the testing that tends not to happen on a custom implementation.

Custom validation is slower to run. — Speed is not the issue at this scale. Announcement and focus are.

Improve: Write down in step 1 what the browser actually did before you added anything. Record the change in step 5.

Check again: Your record names the native behaviours you are relying on.

Answers to revisit: input-types, native-observed, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your form clears itself when submission fails. How bad is that?

- It is the failure most likely to end the task, and it is almost always accidental rather than designed.
- Mildly annoying, since the person knows what they typed.
- Acceptable if there is a clear error message.

<details>
<summary>After your attempt</summary>

It is the failure most likely to end the task, and it is almost always accidental rather than designed. — Browsers preserve values by default; losing them usually takes a reload somebody added. Nobody notices while building because nobody submits a broken form twice.

Mildly annoying, since the person knows what they typed. — They knew it the first time. On a phone, with four fields and a date, retyping it is where people leave.

Acceptable if there is a clear error message. — A clear message explaining that everything has been deleted does not help anybody continue.

Improve: Submit your own form with mistakes in it and check what survives, in step 4. Fix anything lost and record the change in step 5.

Check again: Nothing typed is lost on a failed submission.

Answers to revisit: nothing-lost, focus-after, keyboard-only, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your page checks every rule before sending. Is client-side validation enough?

- No. Checking in the browser is convenience; the check that counts happens where the person cannot reach it.
- It is enough for a design prototype.
- It is enough if the rules are thorough.

<details>
<summary>After your attempt</summary>

No. Checking in the browser is convenience; the check that counts happens where the person cannot reach it. — Anything in the page can be bypassed. The browser check exists to help somebody get it right quickly, not to guarantee anything about what arrives.

It is enough for a design prototype. — It is, for this lesson. The point is knowing that it is not the real check, so you do not describe it as one later.

It is enough if the rules are thorough. — Thoroughness is not the issue. The rules run somewhere the person controls.

Improve: Add that distinction to your written list in step 5, naming which checks would need to happen elsewhere. Record the change.

Check again: Your record does not describe the browser checks as the ones that guarantee anything.

Answers to revisit: free-list, written-list, improvement-made

</details>


### Record what was free

Section: practice. Stable action: step-5-brief.

Two lists: what the browser provided without code, and what you wrote with the reason it was necessary.

- List what the browser provided without code.
- List what you wrote and why it was necessary.
- Save the form and the two lists.

**Start here:** Write the free list first. It is usually longer than people expect.

**Enough:** Every item on the written list names a reason the native behaviour could not cover it.

**What was free:** Behaviour you did not write and now depend on. Knowing what it is protects it from being replaced by somebody who did not realise it was there.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Everything the browser provided without any code

Section: practice. Stable action: write-free-list.

Write your answer for “Everything the browser provided without any code”. Use the task instructions below to decide what to include.

**Answer:** Everything the browser provided without any code




### Everything you wrote, and why it was necessary

Section: practice. Stable action: write-written-list.

Write your answer for “Everything you wrote, and why it was necessary”. Use the task instructions below to decide what to include.

**Answer:** Everything you wrote, and why it was necessary




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson measures what the whole thing costs on a slow connection.


<details>
<summary>Optional hints and reference material</summary>

- Remove custom validation that duplicates a native type and test what the browser does alone.
- For each custom rule ask whether an input type or attribute already expresses it.

- R14: [W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — Labels, instructions, validating input and user notifications. Purpose: States the requirements the built form must satisfy. Free reading, no account. Verified 2026-09-06. It covers accessibility rather than implementation detail; the mechanics come from the MDN module. Fallback: R10.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The forms sections: input types, native validation and handling submission. Purpose: Supplies the implementation for the form you build. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Native validation is used wherever it can be**

Adequate evidence: Appropriate input types and required handling, with a record of what the browser did.

0 — Everything validated by custom code.

1 — Some native types with custom duplication.

2 — Native behaviour used wherever available.

3 — As adequate, and the input types produce the right keyboards on a phone.

Repair: Remove custom validation that duplicates a native type and test what the browser does alone. Recheck: The form and the native record.

**Custom rules exist only where the platform cannot know them**

Adequate evidence: A short list of custom rules, each justified by a domain fact.

0 — Custom rules replace native ones.

1 — Custom rules present without justification.

2 — Each custom rule justified as unavailable natively.

3 — As adequate, and the custom presentation matches the native one.

Repair: For each custom rule ask whether an input type or attribute already expresses it. Recheck: The custom-rule list.

**Errors are associated, announced and linked**

Adequate evidence: Field-associated messages, a linked summary, and announcement on appearance.

0 — Errors displayed without association.

1 — Associated but not announced.

2 — Associated, announced and linked from a summary.

3 — As adequate, and focus moves to the summary or the first problem field.

Repair: Implement the association and the summary from your m11 specification and test the announcement. Recheck: The error implementation.

**Input survives a failed submission**

Adequate evidence: A tested failed submission with all values retained.

0 — Fields cleared on failure.

1 — Most values retained, some lost.

2 — Everything retained and verified by test.

3 — As adequate, and the retention survives a page reload where appropriate.

Repair: Submit with deliberate errors and check every field; fix any that clears. Recheck: The failed-submission test.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson measures what the whole thing costs on a slow connection.

**Review criteria:**

- Native validation is used wherever it can be
- Custom rules exist only where the platform cannot know them
- Errors are associated, announced and linked
- Input survives a failed submission

<details>
<summary>Reading, video and deeper explanation</summary>

- The browser gives you a great deal free: required fields, input types that bring their own keyboards and validation, and error reporting that is announced. Starting from native behaviour and adding only what is missing produces an accessible form quickly; starting from a custom implementation means rebuilding announcement, focus and keyboard behaviour by hand.
- Custom validation is warranted when the rule is yours rather than the platform's — a date that must be in the future, a code that must match a pattern the browser does not know. Even then, the presentation should match the native behaviour people already recognise, and the association between field and error must be explicit.
- Announcement matters as much as display. An error that appears silently is invisible to anyone not looking at that region, so the summary and the field-level messages need to be announced when they appear and reachable afterwards. This is your m11 specification, and this lesson is where it either happens or does not.
- Client-side validation is a convenience that saves a round trip. It is not a guarantee: anything can be submitted directly. That is an engineering fact worth knowing, because it explains why a server will re-check everything and why your design needs to handle a rejection that arrives after the person thought they were finished.

[W3C: forms tutorial](https://www.w3.org/WAI/tutorials/forms/).

</details>

## Lesson 9: Making the page fast enough

Stable ID: m12-l09-v1. Core.

Speed is an accessibility and inclusion question in a country where connections vary enormously. It is also the easiest quality to lose without noticing.

Bring: Your built page and its first trace.

Starting route: Recommended route: Build a measured before-and-after on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A baseline measurement with conditions recorded
- Three changes, each with the reason
- An after measurement under identical conditions
- One change considered and rejected, with the trade-off

### Start with a clear task

Section: learn. Stable action: welcome.

Measure your page's weight and time to usable on a slow connection, make three changes, and report the before-and-after with the conditions stated.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Measure before changing; opinions about speed are unreliable.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Weight, number of requests and blocking resources are the three usual causes.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Time to usable matters more than time to fully loaded.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Fonts and images are the design-owned costs; scripts are usually shared.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Report conditions with every number, or the comparison is meaningless.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Baseline on a throttled profile with the cache disabled: 2.4 MB, twenty-one requests, eleven seconds to usable. Three changes: images resized and re-formatted, two of three typefaces removed, and the stylesheet made non-blocking for the parts not needed for first paint. After: 340 KB, twelve requests, three seconds to usable. The conditions were identical for both runs and stated with the figures. One further change was considered and rejected: deferring the script that renders the list would have made the page appear faster and be useful later, which is the wrong trade for this page.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build a measured before-and-after on the page you have been building in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Measure the baseline

Section: practice-plan. Stable action: step-1-brief.

A baseline measured with the conditions written down, and the requests that hold up the first render identified.

- Load with the cache disabled and a slow profile.
- Record weight, request count and time to usable.
- Note which requests block the first render.

**Start here:** Write the conditions down first, before you take a single number.

**Enough:** Somebody else could reproduce your measurement from what you wrote.

**Conditions:** Throttling profile, cache setting, device and browser. A number without them cannot be compared with anything, including your own later number.

**Blocking resource:** Something the browser waits for before drawing anything. Stylesheets and scripts in the head usually do, and they are often the whole delay.

**Time to usable:** When the person could act, not when loading finished. It needs you to say what usable meant on this page.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Measuring a tool-library page, and starting after the easy win was already in.

**What I did:** Noticed the header photograph was enormous, fixed it, and then sat down to take a baseline. It seemed sensible to measure a page that was not obviously broken.

**What I ended up with:** A baseline of 700 kilobytes and four seconds, and after two more changes, 340 kilobytes and three seconds. A real improvement, and a modest-looking one.

**What I could not say:** Anything about the change that mattered most. The page had been 2.4 megabytes and eleven seconds that morning, and no record of it existed.

**What that cost:** The report showed a page getting slightly faster. The actual story was a page getting three times faster, and the evidence for it had been thrown away before I started.

**What I do now:** Take the baseline first, before touching anything, even when the first problem is obvious. It costs two minutes and it is the only number that cannot be recovered later.

**Wrong turn:** The wrong turn is fixing the obvious thing before measuring, because it feels wasteful to measure something you already know is wrong. The baseline is the one number you cannot go back for.

**Trade-off:** Measuring first means recording a figure you already know is bad, and on a page you are showing to somebody that is uncomfortable.

**Unknown:** Still unknown: how much day-to-day variation there is in these figures. One baseline is one measurement, and I have not taken it twice to find out.


### The conditions: throttling profile, cache setting, device and browser

Section: practice-plan. Stable action: write-conditions.

Write these once and use exactly the same ones afterwards, or the pair proves nothing.

**Answer:** The conditions: throttling profile, cache setting, device and browser

Write these once and use exactly the same ones afterwards, or the pair proves nothing.


### Weight, request count and time to usable

Section: practice-plan. Stable action: write-baseline-numbers.

Write your answer for “Weight, request count and time to usable”. Use the task instructions below to decide what to include.

**Answer:** Weight, request count and time to usable




### Which requests hold up the first render

Section: practice-plan. Stable action: write-blocking.

Stylesheets and scripts in the head usually do. The network panel shows what arrives before anything is drawn.

**Answer:** Which requests hold up the first render

Stylesheets and scripts in the head usually do. The network panel shows what arrives before anything is drawn.


### Make three changes

Section: practice-plan. Stable action: step-2-brief.

Three changes made one at a time, starting with the largest design-owned cost, each with its reason.

- Reduce the largest design-owned cost first.
- Remove anything requested and unused.
- Stop something non-essential from blocking first render.

**Start here:** Take the largest thing above the first screenful and deal with that one first.

**Enough:** Each change has a reason that refers to your own baseline rather than to general advice.

**Design-owned cost:** Weight that exists because of a choice in a design file. It is the part you can act on without anybody’s agreement.

**Requested and unused:** Something loading that nothing needs: a third typeface, an icon set for six icons, a stylesheet for a page that no longer exists.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-2-sort-1.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Re-export the 1.8 megabyte header photograph at its display width. It sits above every word on the page.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — It is above the first line of text, so nothing readable appears until it arrives. This is the one change on the list that moves time to usable on its own.

reduces total weight only — It reduces weight enormously and it also reduces the wait, because of where it sits.

changes nothing measurable — It is three quarters of the page.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-2-sort-2.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Compress four photographs in the footer, saving 300 kilobytes.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — Nobody has scrolled to the footer at the moment they are waiting.

reduces total weight only — A real saving on the total, and invisible in time to usable. Worth doing and not worth doing first.

changes nothing measurable — The total weight figure moves by 300 kilobytes.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-2-sort-3.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Remove the third typeface, used once, which the browser fetches before drawing any text.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — Fonts are usually fetched before text is drawn, so an unused one delays every word on the page.

reduces total weight only — It saves weight and it also removes something standing between the person and the first sentence.

changes nothing measurable — Both numbers move.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-2-sort-4.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Strip the spaces and line breaks out of the HTML file, saving 3 kilobytes.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — Three kilobytes on a slow connection is a fraction of a second at most, and the file was never the delay.

reduces total weight only — Three kilobytes out of 2,400 will not show in any figure you are recording.

changes nothing measurable — It is the sort of change that feels like optimisation and moves nothing. Worth knowing so you do not spend an afternoon on it.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-2-sort-5.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Delay the script that renders the list, so the page paints in one second instead of three.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — It makes the frame appear sooner and the list appear later. The person waits longer to do anything.

reduces total weight only — Nothing is removed. The same bytes arrive in a different order.

changes nothing measurable — It moves first paint and worsens time to usable, so on the figures that matter here it is not an improvement at all. This is the one to reject in step 4.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-2-sort-6.

Six candidate changes to a made up tool-library page whose baseline is 2.4 megabytes and eleven seconds to usable. For each one, decide what it would actually buy.

Replace a 96 kilobyte icon font, fetched in the head, with six hand-written icons.

- reduces what the person waits for
- reduces total weight only
- changes nothing measurable

<details>
<summary>After your attempt</summary>

reduces what the person waits for — Fetched in the head means the browser waits for it. Removing it takes something out of the critical path as well as out of the total.

reduces total weight only — It does both, because of where in the page it is requested.

changes nothing measurable — 96 kilobytes on the critical path is several seconds on a slow profile.

Now sort your own candidate changes the same way, and take your three from the first group.

</details>


### Change 1 · what you did and why

Section: practice-plan. Stable action: write-change-1.

Write your answer for “Change 1 · what you did and why”. Use the task instructions below to decide what to include.

**Answer:** Change 1 · what you did and why



<details>
<summary>Example</summary>

Example (made up): re-exported the header photograph at its display width, because it was the only thing above the first line of text.

</details>


### Change 2 · what you did and why

Section: practice-plan. Stable action: write-change-2.

Write your answer for “Change 2 · what you did and why”. Use the task instructions below to decide what to include.

**Answer:** Change 2 · what you did and why




### Change 3 · what you did and why

Section: practice-plan. Stable action: write-change-3.

Write your answer for “Change 3 · what you did and why”. Use the task instructions below to decide what to include.

**Answer:** Change 3 · what you did and why




### Measure again

Section: practice-plan. Stable action: step-3-brief.

The same three figures under identical conditions, and anything that got worse.

- Repeat the load under identical conditions.
- Record the same three figures.
- Note anything that got worse.

**Start here:** Set the throttling profile and the cache tickbox back to exactly what you wrote in step 1.

**Enough:** Both sets of numbers were taken the same way, and you looked for what got worse rather than only for what improved.

**Identical conditions:** The same profile, the same cache setting, the same browser. Change one of them and the pair of numbers is not a comparison.

**Something getting worse:** A faster page that now jumps, or one that appears sooner and can be used later. Recording it is what stops a number standing in for the experience.


### The same three figures under identical conditions

Section: practice-plan. Stable action: write-after-numbers.

Write your answer for “The same three figures under identical conditions”. Use the task instructions below to decide what to include.

**Answer:** The same three figures under identical conditions




### Anything that got worse

Section: practice-plan. Stable action: write-got-worse.

Something usually does. A page that loads faster and jumps more is not an improvement.

**Answer:** Anything that got worse

Something usually does. A page that loads faster and jumps more is not an improvement.


### Consider and reject one

Section: practice-plan. Stable action: step-4-brief.

One change identified that would improve a number and harm the experience, with the trade-off and your decision.

- Identify a change that would improve a number and harm the experience.
- Write the trade-off and your decision.

**Start here:** Look for a change that moves a number without letting anybody do anything sooner.

**Enough:** Your rejected change has a number it would improve and a reason you decided against it anyway.

**Improving a number:** Making a measurement better without making anything better. Delaying the content that is the point of the page is the classic case.

**Appearing versus being usable:** A page can paint in one second and be useless for six. Optimising the first at the expense of the second is the commonest bad trade in this work.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Improving the numbers on a tool-library page, and improving the wrong one.

**What I found:** The script that renders the list was blocking the first paint. Delaying it would make the page appear in about a second instead of three.

**Why it was tempting:** It is one line, the number moves a lot, and “first paint in one second” is a sentence anybody would be pleased to write.

**What the person would get:** A header, a search box and an empty space where the tools are, for four seconds. Then the list. The page appears sooner and becomes usable later.

**What I checked:** The two numbers moved in opposite directions. First paint improved by two seconds; time to usable got worse by one.

**What I did:** Rejected it, and wrote down why. The list is the page. Making its container arrive early is a measurement rather than an improvement.

**Wrong turn:** The wrong turn is optimising the number that is easiest to move. First paint responds to almost anything, which is why it is so often reported and so often meaningless on its own.

**Trade-off:** Keeping the script blocking means the page shows nothing for three seconds, and on a very slow connection that is uncomfortable. A skeleton of the list would be the real answer, and it is more work than one line.

**Unknown:** Still unknown: whether people prefer an empty frame quickly or a complete page slightly later. Nothing here measured a preference, and the argument rests on when the task can start.


### A change that would improve a number and harm the experience

Section: practice-plan. Stable action: write-rejected-change.

Write your answer for “A change that would improve a number and harm the experience”. Use the task instructions below to decide what to include.

**Answer:** A change that would improve a number and harm the experience



<details>
<summary>Example</summary>

Example (made up): delaying the script that renders the list would make the page appear sooner and be useful later. The number improves and the person waits longer.

</details>


### The trade-off, and your decision

Section: practice-plan. Stable action: write-rejected-reason.

Write your answer for “The trade-off, and your decision”. Use the task instructions below to decide what to include.

**Answer:** The trade-off, and your decision




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The page feels fast to you. Why is that not evidence?

- You are on a fast connection, with a warm cache, on a machine you chose, looking at a page you already understand.
- Because feelings are always unreliable.
- Because speed varies between browsers.

<details>
<summary>After your attempt</summary>

You are on a fast connection, with a warm cache, on a machine you chose, looking at a page you already understand. — Four separate advantages, none of which a first-time visitor on a mid-range phone has. This is why the measurement comes before the opinion.

Because feelings are always unreliable. — Your sense of speed is quite good at judging what you experienced. The problem is that what you experienced is unrepresentative.

Because speed varies between browsers. — It does, and that is a smaller effect than the cache and the connection.

Improve: Check the conditions in step 1 include the cache setting, and redo the baseline if it was warm. Record the change in step 5.

Check again: Your baseline was taken with the cache disabled on a throttled profile.

Answers to revisit: conditions, baseline-numbers, blocking, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Delaying the script that renders your list would improve first paint by two seconds. Should you do it?

- Not for this page. It appears sooner and becomes usable later, which is the wrong direction for the number that matters.
- Yes, since first paint is a standard measure.
- Yes, provided you show a loading indicator.

<details>
<summary>After your attempt</summary>

Not for this page. It appears sooner and becomes usable later, which is the wrong direction for the number that matters. — First paint responds to almost anything, which is why it gets reported so often. The list is the page, and delaying it delays the task.

Yes, since first paint is a standard measure. — Standard measures can still be the wrong one for a particular page. Ask what the person can do at each moment.

Yes, provided you show a loading indicator. — A well-designed skeleton would be a genuine answer and is more work than the one-line change. A spinner in an empty frame is the same wait with something turning in it.

Improve: Write that change into the rejected field in step 4 with both numbers, and record the change in step 5.

Check again: Your rejected change names the number it would improve and the one it would harm.

Answers to revisit: rejected-change, rejected-reason, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your report says the page went from eleven seconds to three. What is missing?

- The conditions: throttling profile, cache setting, device and browser, stated once beside the pair.
- The percentage improvement.
- The list of every change you made.

<details>
<summary>After your attempt</summary>

The conditions: throttling profile, cache setting, device and browser, stated once beside the pair. — Without them the figures will be quoted somewhere they mean something else, usually as though they described a real phone on a real network.

The percentage improvement. — It is easy to calculate from the figures and adds nothing the figures do not say.

The list of every change you made. — Worth including and not the omission that makes the numbers misleading.

Improve: Add the conditions line to your report in step 5 and state what you did not measure. Record the change.

Check again: The figures cannot be read without their conditions.

Answers to revisit: before-after-report, not-measured, improvement-made

</details>


### Report

Section: practice. Stable action: step-5-brief.

A before-and-after report with the conditions stated once, and a plain list of what you did not measure.

- Write the before and after with the conditions stated once.
- State what you did not measure, such as real-device performance.
- Save the report with the traces.

**Start here:** Write the conditions line first, then the two sets of figures under it.

**Enough:** Nobody could quote your figures without also quoting the conditions.

**Stating conditions once:** Putting the profile, cache setting and device beside the pair of figures. Without them somebody will quote the number in a context where it means something else.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Before and after, with the conditions stated once

Section: practice. Stable action: write-before-after-report.

Write your answer for “Before and after, with the conditions stated once”. Use the task instructions below to decide what to include.

**Answer:** Before and after, with the conditions stated once




### What you did not measure

Section: practice. Stable action: write-not-measured.

A real mid-range phone on a real network is the usual gap. Throttling models speed and not dropouts.

**Answer:** What you did not measure

A real mid-range phone on a real network is the usual gap. Throttling models speed and not dropouts.


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson learns the three panels that have been answering your questions all module.


<details>
<summary>Optional hints and reference material</summary>

- Re-run the load with the cache disabled and a slow profile and record all three figures.
- Sort your requests by size and time, and address the top of that list.

- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — Throttling profiles, disabling the cache, request sizes and timing. Purpose: Supplies the measurement instrument and its conditions. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It measures transfer and timing, not real-device rendering performance. Fallback: R16.
- R16: [web.dev: learn responsive design](https://web.dev/learn/design/) — The chapters on images and delivering appropriate assets. Purpose: Connects the measured costs back to the design decisions that created them. Free reading, no account. Verified 2026-09-06. Design-focused; the measurement comes from the browser tools. Fallback: R15.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**A baseline is measured with conditions recorded**

Adequate evidence: Weight, request count and time to usable, with device, profile and cache state.

0 — No baseline.

1 — Figures without conditions.

2 — All three figures with full conditions.

3 — As adequate, and blocking resources are identified separately.

Repair: Re-run the load with the cache disabled and a slow profile and record all three figures. Recheck: The baseline record.

**Three changes are made, each with a reason**

Adequate evidence: Three specific changes traced to a measured cost.

0 — Changes made without reference to measurement.

1 — Some changes justified.

2 — All three traced to a measured cost.

3 — As adequate, and the largest cost was addressed first.

Repair: Sort your requests by size and time, and address the top of that list. Recheck: The change list.

**The after measurement uses identical conditions**

Adequate evidence: A second measurement with the same profile, cache state and content volume.

0 — Measured under different conditions.

1 — Conditions matched but not recorded.

2 — Identical conditions, recorded.

3 — As adequate, and anything that got worse is reported as well.

Repair: Repeat the load with exactly the same settings and record the figures again. Recheck: The after measurement.

**One rejected change is recorded with its trade-off**

Adequate evidence: A change that would improve a metric while harming the experience, with your decision.

0 — No rejection recorded.

1 — A rejection without a stated trade-off.

2 — The trade-off is stated and the decision explained.

3 — As adequate, and the reasoning names who would be harmed by the improvement.

Repair: Ask which optimisation would make a number better and the page worse; deferring essential content is the usual candidate. Recheck: The rejection note.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson learns the three panels that have been answering your questions all module.

**Review criteria:**

- A baseline is measured with conditions recorded
- Three changes are made, each with a reason
- The after measurement uses identical conditions
- One rejected change is recorded with its trade-off

<details>
<summary>Reading, video and deeper explanation</summary>

- The first rule is measurement, because perceived speed on a developer's machine has almost no relationship to a person's experience on a mid-range phone. The network panel gives you weight, request count and timing; a throttled profile gives you conditions closer to the ones your users meet.
- Three causes cover most problems. Total weight, dominated by images and fonts. The number of requests, since each one costs time even when small. And blocking resources — a stylesheet or script that must arrive before anything renders — which is why a page can be light and still slow to appear.
- Time to usable is the number that matters. A page that shows readable content in two seconds and finishes in eight is better than one that shows nothing for five and finishes in six. This is why the design decision about what can render before everything arrives is worth more than most optimisation.
- State the conditions with every figure: device, browser, throttling profile, cache state and content volume. A before-and-after comparison taken under different conditions is not a comparison, and this is the most common way performance improvements are overstated.

[Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference).

</details>

## Lesson 10: Finding out what is actually happening

Stable ID: m12-l10-v1. Core.

Being able to find out what is happening, rather than guessing and changing things, is what makes you useful to an engineering conversation.

Bring: Your built page and its known issues.

Starting route: Recommended route: Build three written diagnoses of problems in your own page in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Three problems diagnosed with the cause written first
- Evidence from the inspector, the console and the network panel
- A record of one hypothesis that turned out to be wrong
- Fixes made after the diagnosis, not before

### Start with a clear task

Section: learn. Stable action: welcome.

Diagnose three problems in your own page using the element inspector, the console and the network panel, writing the cause before making any fix.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

The inspector shows the real applied styles and which rules were overridden.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

The console shows errors; a page can look fine and be failing quietly.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

The network panel shows what was requested and what came back.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Diagnose before you change: write the cause, then the fix.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Reproduce first — a problem you cannot reproduce is not yet understood.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Three problems diagnosed. The card was wider than its container: the inspector showed padding being added to a set width — cause written, then fixed with box sizing. The filter did nothing on one screen: the console showed a script error on a line that assumed an element existed — cause written, then fixed with a guard. An icon was missing on the phone but not the laptop: the network panel showed a 404 for a file whose name differed by case, which matters on the server and not on the local machine. Each cause was written before the fix, and one initial hypothesis turned out to be wrong.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build three written diagnoses of problems in your own page in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Learn the three panels

Section: practice-plan. Stable action: step-1-brief.

The three panels named with the kind of question each one answers.

- Read the assigned sections on the browser tools.
- Write which panel answers which kind of question.

**Start here:** Open all three tabs on your own page and look at each for a minute before writing anything.

**Enough:** You could say, for a new problem, which panel to open first.

**Inspector:** Select an element and see every rule affecting it, with the losers struck through. It answers why something looks the way it does.

**Console:** Where errors appear in red, usually with the file and line number. A page can look perfectly fine and be failing here silently.

**Network panel:** Every request the page made, with its status and size. It answers why something is missing, wrong or slow.


### The three panels, and the kind of question each one answers

Section: practice-plan. Stable action: write-panel-map.

Write your answer for “The three panels, and the kind of question each one answers”. Use the task instructions below to decide what to include.

**Answer:** The three panels, and the kind of question each one answers



<details>
<summary>Example</summary>

Example (made up): inspector for why does it look like that; console for why did nothing happen; network for why is it missing or slow.

</details>


### Diagnose a style problem

Section: practice-plan. Stable action: step-2-brief.

One style problem reproduced, the inspector evidence recorded, and the cause written before any fix.

- Find something that does not look as intended.
- Use the inspector to see the applied and overridden rules.
- Write the cause before touching the code.

**Start here:** Right-click the element and choose Inspect. Read the Styles panel top to bottom before changing anything.

**Enough:** The cause is written in the worksheet and the file is still untouched.

**Reproducing:** Being able to make it happen again on purpose. A problem you cannot reproduce is not yet understood, however well you can describe it.

**Overridden rule:** One shown struck through in the Styles panel. The panel is telling you it lost, and naming what beat it.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Diagnosing a card that is wider than its container on a tool-library page, and guessing three times first.

**What I did first:** Guessed. Changed the width, reloaded. Changed the margin, reloaded. Removed a rule I suspected, reloaded. Twenty minutes, three changes, no improvement, and a stylesheet now slightly worse than it started.

**What I should have done:** Right-clicked the card and chosen Inspect. The Styles panel lists every rule affecting it, in order, with the ones that lost struck through.

**What the panel showed:** One width rule, applying cleanly, nothing struck through. The computed size at the bottom of the panel showed 300 of content and 20 of padding on each side.

**The cause, written down before any fix:** The width applies to the content and the padding is added outside it, so a 300 pixel card measures 340. The box model, not a conflict.

**Why writing it first mattered:** My guess had been that another rule was winning. Writing the cause forced me to look, and the answer was in a completely different part of the panel from where I had been searching.

**Wrong turn:** The wrong turn is changing things to see what happens, because it feels like progress and each reload takes seconds. Three changes later you have a worse file and the same problem.

**Trade-off:** Writing the cause before the fix is slower on the problems you would have guessed right, and those are the minority.

**Unknown:** Still unknown: whether other cards on other pages have the same arrangement. I fixed one and set box sizing at the top, which probably covers them, and I have not checked.


### What it looks like, and how you reproduce it

Section: practice-plan. Stable action: write-style-symptom.

Write your answer for “What it looks like, and how you reproduce it”. Use the task instructions below to decide what to include.

**Answer:** What it looks like, and how you reproduce it




### What the inspector showed: the applied rule and the overridden ones

Section: practice-plan. Stable action: write-style-evidence.

Write your answer for “What the inspector showed: the applied rule and the overridden ones”. Use the task instructions below to decide what to include.

**Answer:** What the inspector showed: the applied rule and the overridden ones




### The cause, written before the fix

Section: practice-plan. Stable action: write-style-cause.

Write your answer for “The cause, written before the fix”. Use the task instructions below to decide what to include.

**Answer:** The cause, written before the fix




### Diagnose a behaviour problem

Section: practice-plan. Stable action: step-3-brief.

One behaviour problem reproduced, the console message copied exactly, and the cause written before the fix.

- Find something that does not work as intended.
- Check the console for errors and read the file and line.
- Write the cause, then fix it.

**Start here:** Reproduce the problem with the console open, and read whatever appears in red.

**Enough:** You have the exact message, the file and the line written down.

**Silent failure:** A page that looks entirely normal while a script has stopped. Nothing on screen says so, and the console says so immediately.

**File and line:** The two things at the end of an error message. They turn “something is broken” into a specific place to look.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

A card is wider than the container it sits in.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — It is a question about applied styles: which rules are in effect and what the computed size is. The inspector answers both in seconds.

the console — Nothing has failed. The page is doing exactly what it was told.

the network panel — Everything arrived. The problem is what happened afterwards.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

The filter control does nothing at all when pressed, on one page only.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — It would tell you the control is there and styled. It cannot tell you the script stopped.

the console — Nothing happening is the classic silent failure. There is almost certainly red text naming a file and a line.

the network panel — Worth a look if the script file itself never arrived, and the console will tell you that too.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

One icon shows on your laptop and not on your phone.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — It will show an element expecting an image. It will not say what came back.

the console — A missing file sometimes appears here, and the status code is in the network panel.

the network panel — A 404 for a file whose name differs in capitalisation is the usual answer, because it matters on a server and not on your own machine.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

The page takes far longer to become usable than you expected.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — Styles are not the question. Timing is.

the console — It will show errors and not delays.

the network panel — What was requested, in what order, how big and how long. This is exactly the panel for it.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

A heading is the wrong colour, and the rule you wrote for it appears to be correct.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — Your rule will be struck through with the winner above it, or the colour will be arriving by inheritance with no rule at all.

the console — Nothing has failed.

the network panel — The stylesheet arrived, or nothing would be styled.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six symptoms from a made up tool-library page. For each one, decide which panel to open first.

The list is empty, and you are certain the data source has rows in it.

- the inspector
- the console
- the network panel

<details>
<summary>After your attempt</summary>

the inspector — An empty list looks the same whatever caused it.

the console — A good second look, because the answer may have arrived and failed to be read. Start with whether it arrived at all.

the network panel — Find the request, read its status and open the response. Either nothing came back, or something came back in a shape you did not expect.

Now take your own three problems and open the right panel for each before doing anything else.

</details>


### What does not work, and how you reproduce it

Section: practice-plan. Stable action: write-behaviour-symptom.

Write your answer for “What does not work, and how you reproduce it”. Use the task instructions below to decide what to include.

**Answer:** What does not work, and how you reproduce it




### What the console said, including the file and the line

Section: practice-plan. Stable action: write-behaviour-console.

Red text names the file and the line number. Copy it exactly rather than summarising it.

**Answer:** What the console said, including the file and the line

Red text names the file and the line number. Copy it exactly rather than summarising it.


### The cause, written before the fix

Section: practice-plan. Stable action: write-behaviour-cause.

Write your answer for “The cause, written before the fix”. Use the task instructions below to decide what to include.

**Answer:** The cause, written before the fix




### Diagnose a loading problem

Section: practice-plan. Stable action: step-4-brief.

One loading problem reproduced, the request and its status recorded, and the cause written before the fix.

- Look for anything missing or slow.
- Use the network panel to see the request and its response.
- Write the cause, then fix it.

**Start here:** Reload with the network panel open and find the request for the thing that is missing.

**Enough:** You know whether it arrived, and if so what it contained.

**Status code:** What the server said: 200 means here it is, 404 means no such file, 500 means something broke at their end. It is the first thing to read.

**The response:** What actually came back. Clicking a request shows it, which is how you find out that data arrived in a shape you did not expect.


### See the decision being made

Section: practice-plan. Stable action: step-4-demo.

Made-up example. Diagnosing a missing tool photograph, and believing the first thing the panel said.

**The symptom:** One photograph showed as a broken image on the listing page. Every other image on the same page was fine.

**What I assumed:** A wrong path. It is nearly always a wrong path, and I had renamed some files that morning.

**What the panel actually said:** Status 200. The request succeeded and something came back, which is the opposite of a missing file.

**What came back:** Clicking the request and opening the response showed a small page of text: the server saying the image was too large and had been rejected. It had arrived, with a 200, and was not an image.

**What the cause turned out to be:** The original 1.8 megabyte photograph, uploaded before the resizing lesson, over a limit nobody had told me about. The fix was the export, not the path.

**Wrong turn:** The wrong turn is reading the symptom and skipping the status. A broken image looks identical whether nothing came back or the wrong thing came back, and those have completely different causes.

**Trade-off:** Opening the response for every failing request is slower than assuming, and most of the time the assumption would have been right.

**Unknown:** Still unknown: what the limit actually is. The message did not say a number, and I have not found where it is configured.


### What is missing or slow, and where

Section: practice-plan. Stable action: write-loading-symptom.

Write your answer for “What is missing or slow, and where”. Use the task instructions below to decide what to include.

**Answer:** What is missing or slow, and where




### What the network panel showed: the request, its status and its size

Section: practice-plan. Stable action: write-loading-evidence.

A status of 404 means the file was not found. 200 means it arrived, whatever it looks like on screen.

**Answer:** What the network panel showed: the request, its status and its size

A status of 404 means the file was not found. 200 means it arrived, whatever it looks like on screen.


### The cause, written before the fix

Section: practice-plan. Stable action: write-loading-cause.

Write your answer for “The cause, written before the fix”. Use the task instructions below to decide what to include.

**Answer:** The cause, written before the fix




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody says debugging is for developers. What does that miss?

- Being able to say “the request returned a 404” turns a complaint into a starting point, and saves everybody a round trip.
- Designers should be able to fix their own bugs.
- Modern tools make debugging easy enough for anyone.

<details>
<summary>After your attempt</summary>

Being able to say “the request returned a 404” turns a complaint into a starting point, and saves everybody a round trip. — A report that names what was requested, what came back and which rule won is a report an engineer can act on immediately. It is also how you notice when an explanation does not fit the evidence.

Designers should be able to fix their own bugs. — Sometimes you can, and that is not the argument. The value is in the conversation rather than in the fix.

Modern tools make debugging easy enough for anyone. — The tools are approachable, and that says nothing about why it is worth doing.

Improve: Rewrite one of your three causes in step 2, 3 or 4 so it names what an engineer would need: the rule, the message, or the status code. Record the change in step 5.

Check again: Each cause names specific evidence rather than describing the symptom again.

Answers to revisit: style-symptom, style-evidence, style-cause, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your card is too wide and you have already changed three rules trying to fix it. What should you do?

- Undo the changes, inspect the element, and write the cause before touching anything again.
- Keep going; one of the changes will work eventually.
- Add a more specific rule to force the width.

<details>
<summary>After your attempt</summary>

Undo the changes, inspect the element, and write the cause before touching anything again. — Each hopeful change makes the file worse and the problem harder to see. The Styles panel names the winning rule and shows the computed size, which is usually the whole answer.

Keep going; one of the changes will work eventually. — Something will look right and you will not know why, which means it will break again somewhere you have not looked.

Add a more specific rule to force the width. — A forced rule nobody can explain makes the next conflict worse. It also does not help if the cause is the box model rather than a conflict.

Improve: Undo your speculative changes, then write the cause in step 2 before fixing it. Record the change in step 5.

Check again: The cause in step 2 was written while the file was still untouched.

Answers to revisit: style-symptom, style-evidence, style-cause, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

An icon appears on your laptop and not on your phone. Which panel, and what are you looking for?

- The network panel, looking for a 404 — most often a file name whose capitalisation differs.
- The inspector, to check the image element is present.
- The console, since a missing image is an error.

<details>
<summary>After your attempt</summary>

The network panel, looking for a 404 — most often a file name whose capitalisation differs. — Your own machine usually ignores capitalisation in file names and a server usually does not. It is the classic works-here-fails-there problem and the status code names it instantly.

The inspector, to check the image element is present. — It will be present and expecting an image. That tells you nothing about what came back.

The console, since a missing image is an error. — Sometimes it appears there too. The status code, which is the actual answer, is in the network panel.

Improve: Record the status code and the exact requested file name in step 4, rather than describing what is missing. Record the change in step 5.

Check again: Your loading diagnosis contains a status code.

Answers to revisit: loading-symptom, loading-evidence, loading-cause, improvement-made

</details>


### Record

Section: practice. Stable action: step-5-brief.

A hypothesis that turned out to be wrong, what it actually was, and the repair the Check questions asked for.

- Note any hypothesis that proved wrong and what it actually was.
- Save the three diagnoses with their evidence.

**Start here:** Look back at the three causes you wrote and compare each with what you eventually found.

**Enough:** At least one wrong hypothesis is recorded, because guessing right three times out of three is unusual.

**Hypothesis:** Your guess at the cause, written down before you look. Writing it is what makes being wrong visible and useful.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### A hypothesis that turned out to be wrong, and what it actually was

Section: practice. Stable action: write-wrong-hypothesis.

At least one of the three usually is. Recording it is the point of writing causes before fixes.

**Answer:** A hypothesis that turned out to be wrong, and what it actually was

At least one of the three usually is. Recording it is the point of writing causes before fixes.


### Where the three diagnoses and their evidence are saved

Section: practice. Stable action: write-diagnoses-saved.

Write your answer for “Where the three diagnoses and their evidence are saved”. Use the task instructions below to decide what to include.

**Answer:** Where the three diagnoses and their evidence are saved




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The next lesson puts everything from this module together and runs it on a real phone.


<details>
<summary>Optional hints and reference material</summary>

- Pick one problem of each kind and use the matching panel to find the cause.
- For your next problem, write the cause in a file before touching the code.

- R46: [Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference) — The network panel: requests, statuses, sizes and timing. Purpose: Supplies the loading diagnosis for this lesson. Free documentation, no account; any Chromium browser. Verified 2026-09-06. It documents the network panel only; the inspector and console are learned by use. Fallback: R16.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — The debugging sections of the CSS and scripting modules. Purpose: Explains what the inspector and console are showing you. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**Three problems are diagnosed using three different panels**

Adequate evidence: One style, one behaviour and one loading problem, each with the panel used.

0 — Problems fixed without diagnosis.

1 — One or two diagnosed, using one panel.

2 — Three problems across the three panels.

3 — As adequate, and the write-up says which panel would have been wrong for each problem.

Repair: Pick one problem of each kind and use the matching panel to find the cause. Recheck: The three diagnoses.

**Causes are written before fixes**

Adequate evidence: A written cause per problem, produced before the change.

0 — Fixed first, explained afterwards.

1 — Causes written for some.

2 — Cause written before every fix.

3 — As adequate, and one cause was disproved by the fix, which is recorded.

Repair: For your next problem, write the cause in a file before touching the code. Recheck: The written causes.

**Evidence from the tools is recorded**

Adequate evidence: The specific rule, error message or response recorded per problem.

0 — No evidence.

1 — General description without the specific message or rule.

2 — Specific evidence recorded per problem.

3 — As adequate, and the evidence is written in terms an engineer would recognise.

Repair: Copy the exact overridden rule, error text or status code into your notes. Recheck: The evidence record.

**A wrong hypothesis is recorded honestly**

Adequate evidence: At least one initial explanation that turned out to be wrong, with what it actually was.

0 — Only correct diagnoses reported.

1 — A wrong guess mentioned without what was actually happening.

2 — Recorded with the real cause beside it.

3 — As adequate, and the record says what would have shown the mistake sooner.

Repair: Look back at the problems: your first idea was probably wrong at least once. Record it. Recheck: The hypothesis record.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The next lesson puts everything from this module together and runs it on a real phone.

**Review criteria:**

- Three problems are diagnosed using three different panels
- Causes are written before fixes
- Evidence from the tools is recorded
- A wrong hypothesis is recorded honestly

<details>
<summary>Reading, video and deeper explanation</summary>

- Trial and error is how most people first change CSS, and it produces code nobody can explain and problems that return. The inspector removes the guesswork: it shows what is applied, what is inherited and what was overridden by what, so a layout surprise becomes a fact rather than a mystery.
- The console is the first place to look when something behaves oddly, because a page can look complete while a script has failed silently. An error message names a file and a line, which converts a vague fault into a specific one, and it is the single most useful thing to check before asking anyone else.
- The network panel answers a different class of question: was it requested, did it arrive, what came back. Missing images, failed data, wrong addresses and slow responses all show here, and knowing which panel answers which question is most of the skill.
- Writing the cause before the fix is the discipline that makes this learning stick. Change first and you often fix something by accident and learn nothing; write the cause first and you either confirm it or discover you were wrong, which is more useful than the fix.

[Chrome DevTools: network features](https://developer.chrome.com/docs/devtools/network/reference).

</details>

## Lesson 11: The whole thing, running

Stable ID: m12-l11-v1. Core.

Separate exercises prove separate points. A running prototype proves they hold together, which is a different claim.

Bring: Your built pages, data fetching, form and styling.

Starting route: Recommended route: Build the whole prototype, assembled from everything in this module in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- One assembled, running prototype
- A list of contradictions found and reconciled
- Re-run checks on the assembled result
- A real-phone test with findings, and an updated fakes sheet

### Start with a clear task

Section: learn. Stable action: welcome.

Assemble your pages into one working responsive prototype with real data, accessible structure and measured performance, and test it on a real phone.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Assembly finds the contradictions: two stylesheets, two patterns, two vocabularies.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Re-run every check on the assembled thing; passing separately is not passing.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

Test on a real phone, not only an emulated viewport.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Record what is faked, exactly as in m10.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

A running prototype is not a product; say so wherever you show it.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- Four pages were assembled. Three contradictions appeared: two spacing rhythms, two card treatments and two different words for the same action. Each was reconciled and the inventory updated. Re-running the checks found a heading outline broken by the shared header and one contrast failure on a component now sitting on a tinted panel. Ten minutes on a real phone found two more: the sticky action bar sat under the on-screen keyboard, and the tap target for the date was comfortable with a mouse and not with a thumb. The fakes sheet recorded invented data, a faked payment and a search box that does nothing.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build the whole prototype, assembled from everything in this module in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Assemble

Section: practice-plan. Stable action: step-1-brief.

The pages assembled with shared styling and navigation, every contradiction recorded, and the inventory updated.

- Bring the pages together with shared styling and navigation.
- Record every contradiction you have to reconcile.
- Update the inventory and token sheet accordingly.

**Start here:** Put the pages side by side and look for the same thing done two ways before you merge anything.

**Enough:** Every contradiction is written down, including the ones you resolved in seconds.

**Assembly:** Putting separately built pages into one thing. It is where contradictions surface, because two pages built a fortnight apart are always slightly two different products.

**Contradiction:** Two answers to one question: two spacing rhythms, two card treatments, two words for one action. Each has to be decided rather than averaged.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Assembling four tool-library pages, and treating the contradictions as tidying.

**What I found:** Three contradictions. Two spacing rhythms, two card treatments, and the same action called Reserve on one page and Book on another.

**What I did with the first two:** Picked one of each and applied it everywhere. Twenty minutes, and the prototype looked like one product.

**What I did with the third:** The same: chose Reserve, changed the other page, moved on. It felt identical to the other two decisions.

**Why it was not identical:** Spacing and cards are appearance. Two words for one action is two mental models: on one page the person was holding something for two hours, on the other they were committing to a slot. The wording had drifted because the behaviour had.

**What I actually had to decide:** Which behaviour was right, and then make both pages do it. That was a design decision an hour long, not a rename, and it went into the inventory rather than the stylesheet.

**Wrong turn:** The wrong turn is treating every contradiction as tidying, because most of them are. The one that is not is usually a wording difference, and wording drifts when behaviour has already drifted.

**Trade-off:** Chasing the wording contradiction properly cost an hour in a step that was supposed to be assembly, and it changed a specification in an earlier module.

**Unknown:** Still unknown: whether holding for two hours is the right behaviour at all. Assembly forced the question and did not answer it, and it goes to the module handover as an open decision.


### Which pages you assembled, and how they share styling and navigation

Section: practice-plan. Stable action: write-pages-assembled.

Write your answer for “Which pages you assembled, and how they share styling and navigation”. Use the task instructions below to decide what to include.

**Answer:** Which pages you assembled, and how they share styling and navigation




### Every contradiction you had to reconcile

Section: practice-plan. Stable action: write-contradictions.

Write your answer for “Every contradiction you had to reconcile”. Use the task instructions below to decide what to include.

**Answer:** Every contradiction you had to reconcile



<details>
<summary>Example</summary>

Example (made up): two spacing rhythms, two card treatments, and the same action called Reserve on one page and Book on another.

</details>


### What you changed in the inventory and token sheet as a result

Section: practice-plan. Stable action: write-inventory-updated.

Write your answer for “What you changed in the inventory and token sheet as a result”. Use the task instructions below to decide what to include.

**Answer:** What you changed in the inventory and token sheet as a result




### Re-run the checks

Section: practice-plan. Stable action: step-2-brief.

Headings, landmarks, contrast and keyboard re-run on the assembled result, with anything that now fails recorded.

- Re-check headings, landmarks, contrast and keyboard on the assembled result.
- Record anything that passed separately and fails together.

**Start here:** Start with the heading outline, because the shared header is the thing most likely to have broken it.

**Enough:** You found at least one thing that passed separately and fails together, or you can say you looked for it.

**Passing separately:** Every page being fine on its own. It is not the same as the assembled thing being fine, because the shared parts are new.

**Shared header:** The commonest source of a broken outline after assembly: a heading in the header plus a page title on the page makes two page titles.


### Headings, landmarks, contrast and keyboard on the assembled result

Section: practice-plan. Stable action: write-recheck-results.

Write your answer for “Headings, landmarks, contrast and keyboard on the assembled result”. Use the task instructions below to decide what to include.

**Answer:** Headings, landmarks, contrast and keyboard on the assembled result




### Anything that passed on its own page and fails now

Section: practice-plan. Stable action: write-passed-separately.

A shared header can break a heading outline; a component moved onto a tinted panel can fail contrast that passed on white.

**Answer:** Anything that passed on its own page and fails now

A shared header can break a heading outline; a component moved onto a tinted panel can fail contrast that passed on white.


### Test on a real phone

Section: practice-plan. Stable action: step-3-brief.

One task completed by thumb on a real phone, with everything the emulated viewport did not show.

- Open the prototype on an actual phone.
- Complete one task by thumb, including a form.
- Record everything the emulated viewport did not show.

**Start here:** Open the prototype on your own phone and complete one task standing up, using only your thumb.

**Enough:** You found something the emulated viewport had not shown you.

**Real device:** An actual phone in your hand. The emulated viewport gets the width right and nothing else: no thumb, no keyboard covering the screen, no real network.

**On-screen keyboard:** It covers the bottom third of the screen when a field is focused, which is where sticky action bars live. An emulator never shows this.


### See the decision being made

Section: practice-plan. Stable action: step-3-demo.

Made-up example. Testing a tool-library prototype on a real phone, and testing it in the least real way possible.

**What I did:** Opened it on my phone at my desk, held in both hands, propped against the monitor, in good light, on my home network. Completed the task in under a minute and found nothing.

**Why that found nothing:** Two hands, a steady position and a fast connection remove almost everything a phone would otherwise show. It was the emulator with a nicer screen.

**What I did instead:** Stood up, held it in one hand, and did the task with my thumb while walking to the window.

**What that found in four minutes:** The Reserve bar sits under the on-screen keyboard while the notes field is focused. The date control is 44 pixels and still awkward, because it sits where the thumb has least reach. My hand covers the availability line while I tap.

**What I could not test that way:** A poor connection. My home network is fast, so the loading states looked as instant as they do on the laptop, and that stays untested.

**Wrong turn:** The wrong turn is testing on a real device in an unreal posture. Two hands at a desk removes reach, occlusion and the keyboard, which are three of the four things the device was going to tell you.

**Trade-off:** One-handed testing is slower and you will mistype things, which is the point and is also frustrating when you are trying to check something else.

**Unknown:** Still unknown: how it behaves on a slow or intermittent connection on a real network. I tested a device, not a network, and the fakes sheet says so.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-3-sort-1.

Six problems from a made up prototype. For each one, decide what would have found it.

The sticky Reserve bar sits underneath the on-screen keyboard while a field is focused.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — It has no on-screen keyboard, so the bar looks perfectly placed at every width.

only a real phone — The keyboard covers the bottom third, and sticky bars live there. Ten minutes on a device finds it immediately.

neither — it needs a person — You are the person here, and you will meet it the first time you tap a field.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-3-sort-2.

Six problems from a made up prototype. For each one, decide what would have found it.

At 320 pixels the schedule table forces the page to scroll sideways.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — It is purely a width problem, and the emulator sets widths perfectly well. This is what it is for.

only a real phone — A phone would show it too, and you do not need one.

neither — it needs a person — Nothing subjective about it.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-3-sort-3.

Six problems from a made up prototype. For each one, decide what would have found it.

The date control is comfortable with a mouse and awkward with a thumb, though it meets the target size.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — A pointer clicking a 44 pixel target is accurate in a way a thumb is not. The measurement passes and the experience does not.

only a real phone — Reach, accuracy and where the hand covers the screen are all things only a hand shows you.

neither — it needs a person — Your own thumb is enough to find it. Whether it matters to others is a separate question.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-3-sort-4.

Six problems from a made up prototype. For each one, decide what would have found it.

People do not understand whether Reserve holds the tool or commits them to collecting it.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — Nothing about the layout is involved.

only a real phone — It reads the same on every device.

neither — it needs a person — This is a comprehension question, and it belongs to a session with somebody rather than to any device test.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-3-sort-5.

Six problems from a made up prototype. For each one, decide what would have found it.

A component that passed contrast on white now sits on a tinted panel and fails.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — Contrast is measurable on any screen. What found it was re-running the check after assembly rather than the device.

only a real phone — A phone adds nothing; the numbers are the same.

neither — it needs a person — It is a measurement, not a judgement.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-3-sort-6.

Six problems from a made up prototype. For each one, decide what would have found it.

On a real network in a train the page stalls halfway through loading and never recovers.

- the emulated viewport
- only a real phone
- neither — it needs a person

<details>
<summary>After your attempt</summary>

the emulated viewport — Throttling models a steady slow connection. It does not model dropping out.

only a real phone — Real networks fail in ways no profile reproduces. This is the honest limit of everything you measured at your desk.

neither — it needs a person — You can meet it yourself on a train, which is exactly how it gets found.

Now record your own phone findings, and mark which ones the emulator had already shown you.

</details>


### Which phone, and how you opened the prototype on it

Section: practice-plan. Stable action: write-phone-how.

Over your own network, or copied onto the device. No hosting or account is needed.

**Answer:** Which phone, and how you opened the prototype on it

Over your own network, or copied onto the device. No hosting or account is needed.


### The task you completed by thumb, including a form

Section: practice-plan. Stable action: write-phone-task.

Write your answer for “The task you completed by thumb, including a form”. Use the task instructions below to decide what to include.

**Answer:** The task you completed by thumb, including a form




### Everything the emulated viewport did not show

Section: practice-plan. Stable action: write-phone-findings.

Write your answer for “Everything the emulated viewport did not show”. Use the task instructions below to decide what to include.

**Answer:** Everything the emulated viewport did not show



<details>
<summary>Example</summary>

Example (made up): the sticky action bar sat under the on-screen keyboard, and the date target was comfortable with a mouse and not with a thumb.

</details>


### Measure again

Section: practice-plan. Stable action: step-4-brief.

The assembled prototype measured under the same conditions as lesson 9, with what changed recorded.

- Re-run the throttled measurement on the assembled prototype.
- Record weight, requests and time to usable.

**Start here:** Use exactly the throttling profile and cache setting you wrote down in lesson 9.

**Enough:** The figures are comparable with your earlier ones because the conditions match.

**Shared files:** One stylesheet across four pages means the second page loads faster than the first. It also means one change reaches all four.


### Weight, requests and time to usable, under the same conditions as before

Section: practice-plan. Stable action: write-assembled-numbers.

Write your answer for “Weight, requests and time to usable, under the same conditions as before”. Use the task instructions below to decide what to include.

**Answer:** Weight, requests and time to usable, under the same conditions as before




### What changed now that the pages share files

Section: practice-plan. Stable action: write-measure-change.

Write your answer for “What changed now that the pages share files”. Use the task instructions below to decide what to include.

**Answer:** What changed now that the pages share files




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Each page passed its checks on its own. Do you need to re-run them after assembly?

- Yes. The shared parts are new, and a shared header commonly creates a second page title or moves something onto a tinted panel.
- No, provided nothing about the pages themselves changed.
- Only the contrast checks, since colours may combine differently.

<details>
<summary>After your attempt</summary>

Yes. The shared parts are new, and a shared header commonly creates a second page title or moves something onto a tinted panel. — Passing separately is a claim about pages that no longer exist in that form. Assembly creates exactly the conditions nobody tested.

No, provided nothing about the pages themselves changed. — Something did change: each page now has a header, a navigation and a stylesheet it did not have alone.

Only the contrast checks, since colours may combine differently. — Contrast is one of them. The heading outline is the one most reliably broken by a shared header.

Improve: Re-check the heading outline of the assembled prototype in step 2 and record what you find. Note the change in step 5.

Check again: The assembled prototype has exactly one page title per page.

Answers to revisit: recheck-results, passed-separately, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your prototype runs, with real data, accessible structure and measured performance. How close is it to a product?

- Not close. It runs with your data, on your machine, for the paths you built, and a product meets volume, edge cases, other people’s content and years of change.
- Fairly close, since the hard parts are done.
- Close enough to show as a product in a portfolio.

<details>
<summary>After your attempt</summary>

Not close. It runs with your data, on your machine, for the paths you built, and a product meets volume, edge cases, other people’s content and years of change. — Running is a genuine achievement and a different claim. The fakes sheet exists so that nobody reads the first as the second.

Fairly close, since the hard parts are done. — The parts you did are real and they are the parts you chose. Volume, security, other people’s content and maintenance are all still ahead.

Close enough to show as a product in a portfolio. — Showing it is right. Describing it as a product is the thing an experienced reviewer will notice immediately.

Improve: Write the prototype sentence in step 5 so it names three things this is not, and record the change.

Check again: Nothing in your record describes the prototype as a product.

Answers to revisit: fakes-list, prototype-sentence, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

The emulated viewport showed no problems at phone width. Is a real phone still worth ten minutes?

- Yes. The emulator gets the width right and has no thumb, no on-screen keyboard covering the screen and no real network.
- Not really, since the emulator models the device accurately.
- Only if you have a low-end phone to test on.

<details>
<summary>After your attempt</summary>

Yes. The emulator gets the width right and has no thumb, no on-screen keyboard covering the screen and no real network. — Sticky bars under the keyboard and targets that pass a measurement and fail a thumb are both found in the first minute on a device, and neither is visible at any width.

Not really, since the emulator models the device accurately. — It models the viewport. Almost everything else about holding a phone is absent from it.

Only if you have a low-end phone to test on. — A low-end phone adds a performance dimension, and any phone finds the keyboard and thumb problems.

Improve: Complete one task on a real phone in step 3 and record what the emulator had not shown. Note the change in step 5.

Check again: Your phone findings include something the emulator could not have shown.

Answers to revisit: phone-how, phone-task, phone-findings, improvement-made

</details>


### Update the fakes sheet

Section: practice. Stable action: step-5-brief.

Everything invented, faked or non-functional listed, and one sentence saying this is a prototype rather than a product.

- List everything invented, faked or non-functional.
- Write one sentence stating this is a prototype, not a product.
- Save the prototype, the checks and the sheet.

**Start here:** Walk the prototype pretending you are somebody else and note everything that would disappoint them.

**Enough:** Somebody could read the sheet and know exactly what they must not rely on.

**Fakes sheet:** The written list of what is invented. Without it somebody plans around a search box that does nothing or a payment that goes nowhere.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Everything invented, faked or not working

Section: practice. Stable action: write-fakes-list.

Invented data, a payment that goes nowhere, a search box that does nothing, one working path and no others.

**Answer:** Everything invented, faked or not working

Invented data, a payment that goes nowhere, a search box that does nothing, one working path and no others.


### One sentence saying this is a prototype rather than a product

Section: practice. Stable action: write-prototype-sentence.

Write your answer for “One sentence saying this is a prototype rather than a product”. Use the task instructions below to decide what to include.

**Answer:** One sentence saying this is a prototype rather than a product




### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. The last lesson of the module turns all of this into a conversation with an engineer.


<details>
<summary>Optional hints and reference material</summary>

- Walk the main task and connect whatever is missing, including one failure route.
- Compare the pages side by side for spacing, components and wording, and list every difference.

- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — Whichever modules you need to finish the assembly: layout, scripting or forms. Purpose: Supports the remaining implementation work. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.
- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype is for and what it cannot claim. Purpose: Keeps the running prototype honestly bounded despite being convincing. Free reading, no account. Verified 2026-09-06. Written for government service prototypes; the honesty rules transfer directly. Fallback: R05.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The prototype is assembled and runs end to end**

Adequate evidence: One task completable from start to finish in the running prototype.

0 — Separate pages that do not connect.

1 — Connected but with a break in the main task.

2 — One complete task runs end to end.

3 — As adequate, and at least one failure path is reachable too.

Repair: Walk the main task and connect whatever is missing, including one failure route. Recheck: The running prototype.

**Contradictions are recorded and reconciled**

Adequate evidence: A list of inconsistencies found during assembly, each resolved and reflected in the inventory.

0 — Contradictions absorbed silently.

1 — Noted without resolution.

2 — Recorded, resolved and fed back into the inventory.

3 — As adequate, and one contradiction revealed a genuine missing component.

Repair: Compare the pages side by side for spacing, components and wording, and list every difference. Recheck: The contradiction list.

**Checks are re-run on the assembled result**

Adequate evidence: Heading, contrast and keyboard checks repeated on the whole prototype.

0 — Relying on the earlier per-page checks.

1 — Some checks repeated.

2 — All repeated with new failures recorded.

3 — As adequate, and a failure that only appears in assembly is identified.

Repair: Re-run each check on the assembled prototype and record what changed. Recheck: The re-run results.

**A real-phone test and an updated fakes sheet exist**

Adequate evidence: Findings from a real device and a current list of everything faked.

0 — Emulated viewport only, no fakes sheet.

1 — One of the two present.

2 — Both present, with device findings recorded.

3 — As adequate, and one design change was made because of the phone test.

Repair: Open the prototype on your phone, complete a task by thumb, and update the fakes sheet afterwards. Recheck: The phone findings and fakes sheet.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. The last lesson of the module turns all of this into a conversation with an engineer.

**Review criteria:**

- The prototype is assembled and runs end to end
- Contradictions are recorded and reconciled
- Checks are re-run on the assembled result
- A real-phone test and an updated fakes sheet exist

<details>
<summary>Reading, video and deeper explanation</summary>

- Assembly is a test. Pages built separately develop their own conventions — a different spacing rhythm, a second way of writing a card, a slightly different button — and putting them together surfaces every one. Reconciling them is the work, and the reconciliations belong in your component inventory and token sheet.
- Checks must be re-run on the assembled result. A heading outline that was correct per page can break when pages share a header; a contrast ratio that passed can fail where a component now sits on a different surface; a keyboard route that worked can be interrupted by a new element. Passing separately is genuinely not the same as passing together.
- Emulated viewports are convenient and not sufficient. A real phone has a real connection, real touch targets, a real keyboard that covers half the screen, and real interruptions. Ten minutes on a phone finds things an afternoon of resizing a window does not.
- The honesty rules from m10 apply unchanged: record what is faked, what data is invented, and what a person would meet in a real product that this does not have. A running prototype is more convincing than a drawing, which is exactly why its limits need stating more clearly.

[MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core).

</details>

## Lesson 12: Talking to engineers about what you built

Stable ID: m12-l12-v1. Core.

The point of building was never to become an engineer. It was to make the conversation with engineers specific.

Bring: Your prototype, key tables and state specifications.

Starting route: Recommended route: Build a technical handover document for one feature in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- A technical handover covering behaviour, states and constraints
- Three cost-shaped questions for an engineer
- The fakes sheet attached and declared
- A written record of what you now understand

### Start with a clear task

Section: learn. Stable action: welcome.

Write a technical handover for one feature, ask three precise questions an engineer would find useful, and record what you now understand that you did not before this module.


### Understand the idea · 1

Section: learn. Stable action: learn-1.

Hand over behaviour and states, not only appearance.


### Understand the idea · 2

Section: learn. Stable action: learn-2.

Ask about constraints and cost, not just feasibility.


### Understand the idea · 3

Section: learn. Stable action: learn-3.

“Is this possible?” is almost always yes; ask what it would cost.


### Understand the idea · 4

Section: learn. Stable action: learn-4.

Name what your prototype fakes so nobody plans around it.


### Understand the idea · 5

Section: learn. Stable action: learn-5.

Record what you learned, including where you were previously wrong.


### Connect the idea to an example

Section: learn. Stable action: worked-example.

Illustrative teaching example. This is not research you conducted or evidence about your own design.

- The handover for the booking feature ran to three pages: the flow with its states, the component specifications with their key tables, the four data branches with their wording, the responsive behaviour rules, and the accessibility notes with what had been tested and what had not. Three questions were asked: what would it cost to keep the held-place timer accurate across devices, what does the current data shape make expensive to change later, and which of these states will need server work rather than front-end work. The fakes sheet was attached. The reflection recorded three things learned, including that a change she had previously been told was trivial turned out to be structural, and one where the opposite was true.


### Get your practice ready

Section: learn. Stable action: workspace.

Recommended route: Build a technical handover document for one feature in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded. Alternative route: Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.

- Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.


### Assemble the handover

Section: practice-plan. Stable action: step-1-brief.

One document covering flow, states, key tables, responsive rules and accessibility notes, with exact wording and a tested-versus-specified split.

- Collect the flow, states, key tables, responsive rules and accessibility notes.
- Write them as one document a developer could work from.
- Include the wording for every message.

**Start here:** List the sections first, then fill them from artefacts you already have rather than writing anything new.

**Enough:** Somebody could build the feature from the document without opening your design file.

**Handover:** A document somebody could build from. Behaviour and states, not only appearance, because appearance is the part screenshots already carry.

**Exact wording:** The messages written as text in the document. Wording that exists only inside a picture gets retyped, and retyped wording drifts.


### See the decision being made

Section: practice-plan. Stable action: step-1-demo.

Made-up example. Handing over a tool-library booking feature, and handing over the part that was easiest to export.

**What I sent:** Twelve screens, annotated, with spacing and colours marked. It took an afternoon to prepare and it looked thorough.

**What came back three days later:** Eleven questions, all of the same kind. What happens if the tool is taken while somebody is filling the form. What the list shows before the data arrives. What happens if the date is a day with no classes.

**What the screens had said about any of that:** Nothing. Every screen was a moment when everything had gone right, and eleven of the questions were about the moments when it had not.

**What I sent instead:** The flow with its states, the four data branches with their exact wording, the key tables, the responsive rules, and the accessibility notes marked tested or specified.

**What that changed:** The questions that came back were about cost rather than about intent, which is the conversation I had wanted in the first place.

**Wrong turn:** The wrong turn is handing over appearance, because appearance is what a design tool exports and it exports beautifully. Behaviour and states are the part somebody has to build and the part screenshots cannot carry.

**Trade-off:** A behaviour document is duller to produce and nobody admires it. It also stops the three days of questions, and the questions were never about the spacing.

**Unknown:** Still unknown: whether the four branches cover everything that can happen. Eleven questions found the ones I had missed, and there may be more that nobody has thought of yet.


### What the document contains, section by section

Section: practice-plan. Stable action: write-handover-contents.

Flow with states, component specifications with key tables, the four data branches with wording, responsive rules, accessibility notes with what was tested.

**Answer:** What the document contains, section by section

Flow with states, component specifications with key tables, the four data branches with wording, responsive rules, accessibility notes with what was tested.


### Where the exact wording of every message lives in it

Section: practice-plan. Stable action: write-message-wording.

If the wording is only in screenshots, somebody will retype it and change it.

**Answer:** Where the exact wording of every message lives in it

If the wording is only in screenshots, somebody will retype it and change it.


### How the document separates what was tested from what was specified

Section: practice-plan. Stable action: write-tested-untested.

Write your answer for “How the document separates what was tested from what was specified”. Use the task instructions below to decide what to include.

**Answer:** How the document separates what was tested from what was specified




### Write the questions

Section: practice-plan. Stable action: step-2-brief.

Three questions about cost and constraint, each tied to a decision in this feature.

- Write three questions about cost and constraint rather than possibility.
- Make each specific to a decision in this feature.

**Start here:** Take a decision you have not been able to make and write the question that would settle it.

**Enough:** None of your three questions can be answered with yes.

**A cost-shaped question:** One that asks what something would take, or what it forecloses. “Is this possible?” is almost always yes, which is why it tells you nothing.

**Constraint:** Something already decided that limits what is cheap now: a data shape, a platform, an existing component. Knowing them early changes what you design.


### See the decision being made

Section: practice-plan. Stable action: step-2-demo.

Made-up example. Asking an engineer about a held-place timer on a tool-library feature, and asking the question that always gets a yes.

**What I asked first:** “Is it possible to hold a tool for two hours and show a countdown?” The answer was yes, in about four seconds, and I wrote it down as settled.

**What I found out later:** Yes meant yes, and the timer would be accurate on the device that started it and roughly right on any other, because the hold lives in one place and the countdown in another.

**Why that mattered:** My design showed the countdown on the confirmation screen, the list and the email. Two of those three would have been wrong by up to a minute, which is a promise breaking rather than a display wobbling.

**What I should have asked:** “What would it cost to keep the countdown accurate across devices, and what is the error if we do not?” That is a question with a number in the answer.

**What I did with the real answer:** Showed an exact time rather than a countdown in two of the three places. The expensive version was not needed once the question was specific.

**Wrong turn:** The wrong turn is asking whether something is possible, because almost everything is and the answer closes the conversation. Cost and error are where the design decision actually is.

**Trade-off:** Cost-shaped questions take longer to answer and sometimes cannot be answered on the spot, so you leave the conversation with less certainty than a yes would have given you.

**Unknown:** Still unknown: what the actual drift is in seconds. The answer was “up to about a minute”, which was enough to change the design and is not a measurement.


### Question 1 · the question, and the decision it would inform

Section: practice-plan. Stable action: write-question-1.

Write your answer for “Question 1 · the question, and the decision it would inform”. Use the task instructions below to decide what to include.

**Answer:** Question 1 · the question, and the decision it would inform



<details>
<summary>Example</summary>

Example (made up): what would it cost to keep the held-place timer accurate across two devices? It decides whether the timer is a promise or a display.

</details>


### Question 2 · the question, and the decision it would inform

Section: practice-plan. Stable action: write-question-2.

Write your answer for “Question 2 · the question, and the decision it would inform”. Use the task instructions below to decide what to include.

**Answer:** Question 2 · the question, and the decision it would inform




### Question 3 · the question, and the decision it would inform

Section: practice-plan. Stable action: write-question-3.

Write your answer for “Question 3 · the question, and the decision it would inform”. Use the task instructions below to decide what to include.

**Answer:** Question 3 · the question, and the decision it would inform




### Declare the fakes

Section: practice-plan. Stable action: step-3-brief.

Everything an engineer might assume works declared, and the data shape named as invented where it is.

- Attach the fakes sheet and mark anything an engineer might assume works.
- State what data shape you invented.

**Start here:** Open your fakes sheet from the previous lesson and mark anything that looks convincing enough to be assumed.

**Enough:** Nothing in the handover could be planned around by mistake.

**Invented data shape:** Field names and structures you made up so the prototype could run. Planning around them is expensive to undo, so they have to be labelled.

**Assumed to work:** Anything that looks finished and is not: a search box that does nothing, a payment that goes nowhere, one path that works out of five.


### What an engineer might assume works and does not

Section: practice-plan. Stable action: write-fakes-attached.

Write your answer for “What an engineer might assume works and does not”. Use the task instructions below to decide what to include.

**Answer:** What an engineer might assume works and does not




### The data shape you invented, and where you got it from

Section: practice-plan. Stable action: write-data-shape.

If you made the field names up, say so. Planning around an invented shape is expensive to undo.

**Answer:** The data shape you invented, and where you got it from

If you made the field names up, say so. Planning around an invented shape is expensive to undo.


### Ask someone

Section: practice-plan. Stable action: step-4-brief.

The questions asked of somebody, or an honest record that they are unasked with what you expect.

- If you can, ask your questions of a developer and record the answers.
- If not, record that the questions are unasked and what you expect.

**Start here:** Ask if you can. If you cannot, write down the answers you expect and date it.

**Enough:** Either you have answers, or you have written expectations you can check against later.

**Unasked:** A complete and honest answer to this step. Writing what you expect lets you compare later, which is more useful than an invented answer.


### Try the distinction · 1 of 6

Section: practice-plan. Stable action: step-4-sort-1.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

Is it possible to show a countdown while a tool is held?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — You will get an answer in four seconds and learn nothing from it.

a yes that settles nothing — Almost everything is possible. The design decision is about cost and accuracy, and this question asks about neither.

a question they cannot answer yet — They can answer it easily. That is the problem.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Try the distinction · 2 of 6

Section: practice-plan. Stable action: step-4-sort-2.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

What would it cost to keep that countdown accurate across two devices, and how wrong is it if we do not?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — It asks for a number and a bound. Either answer changes what you design, which is the test of a good question.

a yes that settles nothing — There is no yes available to it.

a question they cannot answer yet — It is exactly the sort of thing an engineer can estimate, even roughly.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Try the distinction · 3 of 6

Section: practice-plan. Stable action: step-4-sort-3.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

What does the current data shape make expensive to change later?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — It surfaces constraints before you design against them. Answers here often change a whole flow cheaply.

a yes that settles nothing — It cannot be answered with yes.

a question they cannot answer yet — It is one of the things they know best.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Try the distinction · 4 of 6

Section: practice-plan. Stable action: step-4-sort-4.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

How long will the whole feature take to build?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — You will get a number with no confidence behind it, which is worse than no number.

a yes that settles nothing — It is not a yes-or-no question.

a question they cannot answer yet — Not from a handover read once. Sliced into pieces with acceptance criteria, it becomes answerable, and that is a later module.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Try the distinction · 5 of 6

Section: practice-plan. Stable action: step-4-sort-5.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

Which of these four states need work on the server rather than in the page?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — It tells you which parts of your design are cheap to change and which are not, which is what you need before iterating.

a yes that settles nothing — There is no yes.

a question they cannot answer yet — They can, and quickly.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Try the distinction · 6 of 6

Section: practice-plan. Stable action: step-4-sort-6.

Six questions a designer might put to an engineer about a made up booking feature. For each one, decide what kind of answer it will get.

Is there a better way to do this?

- a useful answer
- a yes that settles nothing
- a question they cannot answer yet

<details>
<summary>After your attempt</summary>

a useful answer — Occasionally it produces one, and usually it produces a polite pause, because better depends on what you are optimising for.

a yes that settles nothing — It is not really a yes-or-no question, though it often receives a no.

a question they cannot answer yet — Not without knowing which constraint you care about. Naming that turns it into one of the useful questions above.

Now check your own three questions against the same three kinds, and rewrite any that would get a yes.

</details>


### Who you asked, or that the questions are unasked

Section: practice-plan. Stable action: write-asked-who.

Unasked is an honest answer. Write what you expect the answers to be, so you can compare later.

**Answer:** Who you asked, or that the questions are unasked

Unasked is an honest answer. Write what you expect the answers to be, so you can compare later.


### What they said, or what you expect

Section: practice-plan. Stable action: write-answers.

Write your answer for “What they said, or what you expect”. Use the task instructions below to decide what to include.

**Answer:** What they said, or what you expect




### Check your reasoning · 1 of 3

Section: check. Stable action: reason-1.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Somebody says designers who code are more valuable. Is that the lesson of this module?

- No. Designers who understand the material are more valuable, and writing production code is a different job.
- Yes, since you can now build what you design.
- Yes, because it removes the need for handover.

<details>
<summary>After your attempt</summary>

No. Designers who understand the material are more valuable, and writing production code is a different job. — Reading code, building a prototype and asking precise questions is what makes design work land. Building was the route to that, not the destination.

Yes, since you can now build what you design. — You can build a prototype, which is not the same as production code, and the module never claimed otherwise.

Yes, because it removes the need for handover. — The handover is this lesson. Building made it more specific rather than unnecessary.

Improve: Check your three learnings in step 5 are about understanding rather than about coding ability. Record the change.

Check again: Your list does not describe the outcome of this module as being able to code.

Answers to revisit: learned-three, was-wrong, improvement-made

</details>


### Check your reasoning · 2 of 3

Section: check. Stable action: reason-2.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

You ask an engineer “is this possible?” and they say yes. What have you learned?

- Almost nothing. Nearly everything is possible, and the decision you needed was about cost or accuracy.
- That the feature can go ahead as designed.
- That there are no technical constraints.

<details>
<summary>After your attempt</summary>

Almost nothing. Nearly everything is possible, and the decision you needed was about cost or accuracy. — A yes arrives in four seconds and closes the conversation. What would it cost, and what breaks if we do not, are questions with numbers in the answers.

That the feature can go ahead as designed. — It can be built. Whether it can be built this quarter, accurately, is a different answer you did not ask for.

That there are no technical constraints. — The constraints are exactly what a yes hides, because they live in the cost rather than in the possibility.

Improve: Rewrite any question in step 2 that could be answered with yes, so it asks for a cost or a bound. Record the change in step 5.

Check again: None of your three questions can be answered yes or no.

Answers to revisit: question-1, question-2, question-3, improvement-made

</details>


### Check your reasoning · 3 of 3

Section: check. Stable action: reason-3.

Choose the reason you believe, read the feedback, then improve the relevant answer if needed.

Your handover includes screenshots of every screen with the messages visible. Is the wording handed over?

- Not reliably. Wording that exists only in a picture gets retyped, and retyped wording drifts.
- Yes, since the messages are legible in the images.
- Yes, if the screenshots are high resolution.

<details>
<summary>After your attempt</summary>

Not reliably. Wording that exists only in a picture gets retyped, and retyped wording drifts. — Every message needs to be in the document as text, where it can be copied exactly. Screenshots show placement; they do not hand over words.

Yes, since the messages are legible in the images. — Legible and copyable are different. Somebody will type what they read, and one word will change.

Yes, if the screenshots are high resolution. — Resolution helps them read it and does nothing about the retyping.

Improve: Put every message as text in the document in step 1 and say where it lives. Record the change in step 5.

Check again: No message in the handover exists only inside an image.

Answers to revisit: handover-contents, message-wording, tested-untested, improvement-made

</details>


### Write what you learned

Section: practice. Stable action: step-5-brief.

Three things you understand now that you did not, including at least one where you were previously wrong.

- List three things you understand now that you did not before.
- Include at least one where you were previously wrong.
- Save the handover, questions and reflection.

**Start here:** Look back at what you expected at the start of the module and find the first thing that turned out differently.

**Enough:** At least one item is about a belief you had, not about a skill you gained.

**Where you were wrong:** Something you believed before this module and no longer do. It is the most useful item on the list and the hardest to write.

**Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.


### Three things you understand now that you did not before this module

Section: practice. Stable action: write-learned-three.

Write your answer for “Three things you understand now that you did not before this module”. Use the task instructions below to decide what to include.

**Answer:** Three things you understand now that you did not before this module




### At least one where you were previously wrong

Section: practice. Stable action: write-was-wrong.

Write your answer for “At least one where you were previously wrong”. Use the task instructions below to decide what to include.

**Answer:** At least one where you were previously wrong



<details>
<summary>Example</summary>

Example (made up): I had been told a change was trivial and it was structural, and separately I had assumed a custom date picker was cheaper than the native one.

</details>


### What you changed after the Check questions

Section: practice. Stable action: write-improvement-made.

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.

**Answer:** What you changed after the Check questions

Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.


### Review and finish your practice

Section: practice. Stable action: review-work.

Open Your work and choose Ready for review. This closes Module 12. Module 13 turns the components you built into a system somebody else could use.


<details>
<summary>Optional hints and reference material</summary>

- Collect your existing specifications into one file; most of the content already exists.
- Rewrite each question as “what would it take to …” or “what does this make harder later”.

- R12: [GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes) — What a prototype communicates to the people who build the real thing. Purpose: Frames the handover as communication rather than documentation. Free reading, no account. Verified 2026-09-06. It does not cover technical handover specifically; the document structure here is the course's own. Fallback: R05.
- R15: [MDN: core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) — Any module you needed while building, revisited to name the concepts precisely. Purpose: Ensures your questions and handover use terms an engineer will recognise. Free text documentation, no account. Verified 2026-09-06. Use the written articles; exclude promoted paid partner courses. Fallback: R16.

</details>
<details>
<summary>Creator review and remediation criteria</summary>

**The handover covers behaviour and states, not only appearance**

Adequate evidence: A document containing flow, states, key behaviour, responsive rules and message wording.

0 — Screens with annotations.

1 — Some behaviour documented, states missing.

2 — All the behavioural material assembled in one document.

3 — As adequate, and it names what is still undecided rather than implying completeness.

Repair: Collect your existing specifications into one file; most of the content already exists. Recheck: The handover document.

**Three questions are about cost and constraint**

Adequate evidence: Three specific questions asking what something would take or prevent.

0 — Feasibility questions.

1 — Mixed, with at least one is-it-possible question.

2 — All three about cost, constraint or consequence.

3 — As adequate, and each names the decision it would change.

Repair: Rewrite each question as “what would it take to …” or “what does this make harder later”. Recheck: The three questions.

**The fakes are declared explicitly**

Adequate evidence: The fakes sheet attached with the invented data shape stated.

0 — Not declared.

1 — Attached without highlighting what looks real.

2 — Attached with the assumable items marked.

3 — As adequate, and the data shape is flagged as invented rather than proposed.

Repair: Mark every part of the prototype an engineer could mistake for working. Recheck: The declared fakes.

**The reflection includes something you had been wrong about**

Adequate evidence: Three learnings, at least one correcting a previous belief.

0 — No reflection.

1 — Learnings listed without any correction.

2 — Three learnings including a correction.

3 — As adequate, and the correction changes how you will estimate or argue in future.

Repair: Think back over the module for a moment where a build contradicted your expectation, and write it. Recheck: The reflection.

</details>
Your answers and exact action save to this device first, then online. Formative answers are saved for return, not scored. In Your work, review all required answers and record the repair or why none was needed, then choose Finish practice. Optional and unavailable-participant fields do not require invented work. Request creator feedback separately. A file reference does not upload the file. Active course time records automatically; add external work time manually.

**Keep for later:** Open Your work and choose Ready for review. This closes Module 12. Module 13 turns the components you built into a system somebody else could use.

**Review criteria:**

- The handover covers behaviour and states, not only appearance
- Three questions are about cost and constraint
- The fakes are declared explicitly
- The reflection includes something you had been wrong about

<details>
<summary>Reading, video and deeper explanation</summary>

- A handover that consists of screens leaves an engineer to invent everything you did not draw: states, transitions, error handling, keyboard behaviour, what happens when data is long. You have specified all of those over the last five modules, and this lesson assembles them into a document that answers questions before they are asked.
- Feasibility questions rarely produce useful answers, because almost anything is possible. Cost questions do: what would this take, what would it constrain later, what would it prevent us changing. Asking in that form gets you a real trade-off rather than a yes that turns into a delay.
- Your prototype's fakes need declaring in the handover as clearly as in a test. An engineer who assumes the search works, or that the data shape matches, plans around something that does not exist, and the correction is more expensive later than the sentence would have been now.
- Recording what you now understand is worth doing once, plainly. This module was not intended to make you an engineer, and it should have changed what you can ask, what you can read, and what you no longer accept as an answer. Naming those explicitly makes them usable in an interview and in the next project.

[GOV.UK: making prototypes](https://www.gov.uk/service-manual/design/making-prototypes).

</details>
