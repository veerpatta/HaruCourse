# Improvement-plan verification — 4–5 October 2026

The creator authorized implementing the *Haru Course Improvement Plan* (4 October 2026) completely, committing to `main`, applying migrations and deploying to the live Cloudflare site. This record states what was implemented and checked, what was not, and the readiness score the evidence supports. Per the plan: **implementation complete, learner validation pending.** This is not a 9/10 claim; the current score is 61/100 (see the rubric below).

## What changed

| Plan section | Implementation |
|---|---|
| Priority zero: consent vs storage | Module 5 and every research lesson teach the real data flow; raw notes stay private; synced answers hold de-identified summaries; 264 participant fields marked `sensitive` with a reader notice and a device-side upload hold on emails and phone numbers (`src/privacy.ts`). |
| Priority zero: question keys | 784 formative questions: stable non-authored display order (`shared/choices.ts`); labels rebalanced so the defensible option is the longest in 36% (was 97%) and never more than 15% longer than the longest alternative; facts added where answers depended on unstated observations; every relabelled option keeps its old wording in `was`. |
| Priority zero: unsafe handover, arithmetic, routes | Module 18 stop gate before real use; Module 15 funnel/intervals/A-B guidance, Module 3 contrast, Module 8 chart, Module 10 intervals and Module 20 units corrected with working; rehearsal and supplied routes completable everywhere. See [the corrections register](CONTENT-CORRECTIONS-REGISTER.md). |
| Shorter core path | `src/corePath.ts`: six stages, 131 lessons, a reason for each; technical extension (13 coding lessons); four skippable visual-refresh lessons satisfied by an existing artefact (server-checked). Learn shows core and full-library progress separately and a path switch; the 221-lesson library figure is unchanged. |
| Lesson pattern | Every teaching lesson has a transfer task with weak/adequate/strong anchors revealed after writing; Modules 1–2 now carry full four-level criteria; Learn suggests revisiting transfer tasks a day after finishing. |
| Lesson 1 | Three sessions (screens show / walkthrough as evidence / a new case), annotated booking screens, a point-to question, a three-statement sort, evidence entries as rows, a new-screen transfer and review anchors. Lesson ID and all 36 field IDs kept; older saved positions map to the new rows. |
| Review and portfolio | Review requests name criterion, question and version, show the reviewer and response window, and say nothing was sent; self-review fallback; structured creator reviews (criterion, outcome, evidence, next action); before/after repair trail from saved versions; four separate progress states; creator review queue and review-destination settings. |
| Module roadmap | All 20 modules corrected per the plan; per-module reports in `docs/corrections/`. |
| UI/code backlog | P0 route/privacy and question order; P1 core path, visual examples and starters (annotated screens, reflow demo, state and no-drag reorder examples, uncertainty calculator, SVG/HTML starters, keyboard/screen-reader lab), session pause and resume, review trail; P2 load: entry chunk 4.69 MB → 0.91 MB with the same 6.7 MB offline precache, and polling reduced from full reads every 5 s to a one-row version check every 60 s. |
| Migration 0004 | `users.records_version` with triggers, structured feedback columns, `course_settings`. |

Preserved: every one of the 4,888 option labels a learner could have saved before 4 October still selects an option (checked against a fixture of the pre-change labels); all 224 lesson IDs, all 2,866 original worksheet field IDs (verified against the pre-change commit), check counts and order, sorter item IDs, supported-practice positions, choice option labels, record version 1, storage keys, bookmarks, feedback history and existing finishes.

## Checks run

Local and hosted results:

- Generated documents regenerated; `test:content`, `test:questions --strict`, `test:improvements`, `test:worksheet`, `test:actions` (224 flows, 3,151 fields, 8,352 actions, 1,643 saved questions), `test:learning`, `audit:guided`, both TypeScript projects and the production build pass.
- Local worker with migration 0004: all 13 existing backend groups, the new review/sync suite, the learning/timer round-trip and all 224 lesson completion/conflict/reopen round-trips pass.
- Browser (local, 375 px): Learn core path and both progress figures, Lesson 1 sessions and annotated screens, M3 skip panel, reflow demo, reorder example, uncertainty calculator, M11 lab links and M12 starters render without horizontal overflow; starter and lab files are served as files, not the app shell; the Update now path loads the new build.

## Real-browser verification in Chrome — 5 October 2026

The creator asked for the remaining work to be completed and verified with Claude in Chrome, the creator's own desktop Chrome on Windows, signed in to the isolated test workspace. Test records were backed up first and restored exactly afterwards; Haru's account was not used.

- **Update path:** Chrome was still on the pre-improvement build. Update now loaded the new build (the first press did not take; the second did), and a later update applied on the first press. When local drafts were still pending, the notice correctly refused to update and said how many lessons were still saving.
- **Module 7 Lesson 3 fix:** a record holding the removed option wording reopened with the restored option selected, its explanation shown and the action counted as done. A fixture of all 4,888 pre-change option labels now guards every question.
- **Lesson 1 learner journey:** session 1 by real clicks (annotated screens, point-to question, three-statement sort, definitions, first evidence row) reached the pause point; Pause and return, a reload and Continue your saved action reopened at session 2 with the welcome-back panel and 12 of 38 actions intact. Sessions 2–3 completed with four-answer evidence rows, the transfer task (anchors locked until written), three checks with inline repair, Finish practice (36/36 answers, 10/10 practice questions, 3/3 checks) and a labelled self-review; reviewed and demonstrated correctly stayed unset, and the server accepted the finish.
- **Fixed from this pass:** saves now run the moment the page is hidden (Chrome froze timers in the background window, leaving the finished lesson waiting to upload; re-tested: the typed answer reached the server immediately); Point to the price now shows the screens instead of pointing at the previous step; welcome-back no longer stacks with a pause banner. Deployed as Cloudflare version c6534738-5c4b-48f8-8f1b-553a2390e2bb.
- **Tools:** reorder by Alt+Arrow, by Move then Place without dragging, and Undo, each announced; uncertainty calculator funnel 58.00% (largest) vs 57.14%, Wilson 39.7–89.2% for 7 of 10, Newcombe 5.2–33.4% for 56/70 vs 48/80; reflow and clipped readouts; state example cancel path.
- **Files:** all eight Module 12 starters, the Module 13 component, both Module 19 files and the three Module 11 lab pages load with no console errors and no external requests, and none scrolls sideways at 320 or 390 px except page-responsive.html, whose one planted fixed-width element is the lesson's exercise; its documented repair removes the overflow (496 → 302 px).
- **Keyboard lab:** the barrier page shows all six planted barriers (tab order date, email, phone before name; Reserve not focusable; unlabelled name; icon button named only by its glyph; no focus outline; silent error). The repaired page has a logical order, named controls, and on an invalid phone moves focus to the field, marks it invalid, links the error and announces it.
- **Not possible in this pass:** the Chrome window was hidden, so real Tab key presses did not reach the page; the keyboard checks above inspected tab order and behaviour rather than pressing keys. A hands-on keyboard pass, screen readers and physical phones remain open.

## Readiness work toward the 90/100 gate — 5 October 2026

The creator asked for the readiness score to reach at least 90/100. Everything that can be earned without people outside this project was done and is recorded below. The remaining points depend on evidence the plan says only real learners, a human reviewer and real devices can provide; that evidence was not simulated.

### Independent content review of all 224 lessons

- **Method.** `scripts/review-packet.mjs` assembled each lesson's objective, route, supplied material, teaching, example, steps with expected output, demonstrations, supported questions with keys, sorters with keyed buckets, fields (required or conditional), checks with repair text, criteria levels, transfer anchors and hand-off. Nine reviewers who had not authored or corrected the lessons each read one module group against a written brief (answer keys, facts and methods, internal contradictions, completability alone, beginner blockers) and verified factual claims against sources (W3C/WCAG Understanding pages, GOV.UK, NN/g, Laws of UX, W3C translation-length data) and recomputed every figure.
- **Findings.** 224 lessons reviewed; 97 had no critical or major finding. 291 findings: 18 critical, 145 major, 128 minor. Examples: a Module 8 sorter keyed against the lesson's own evidence; a Module 12 claim that a large image stops text appearing; Module 10 consent scripts sending raw audio to the reviewer; a Module 18 appetite stated as "a fifth" when it was three quarters; core-path steps that needed another person with no solo route (Module 19 Lesson 12, Module 14 Lesson 5, Module 10 Lesson 10); keys that contradicted their own feedback (Modules 11, 13, 15, 16); Module 4–5 lessons quoting things their assigned readings do not say.
- **Fixes.** Nine separate fixers applied all 291 findings without renaming any lesson, field, sorter-item or section ID; every relabelled option or sorter bucket keeps its old wording, and the 4,888-label compatibility fixture still passes. Five new fields were added: `consent-line` (Module 10 Lesson 10), `cold-read-route` (Module 19 Lesson 12), `revised-guide` (Module 5 Lesson 6) and `closing-plan` (Module 5 Lesson 8) are required because they hold the lesson's main evidence; `q-more` (Module 5 Lesson 9) is optional. Learners who finished these lessons earlier keep their finish; the new answer is asked for only if they reopen the lesson. The content model gained `requiredWhen.or` and sorter-label aliases.
- **Verification.** Three further reviewers re-checked all 163 critical and major fixes against the merged source: 149 resolved, 9 partly resolved, 5 resolved with a new small problem, none unresolved. The 14 residual items and the verifiers's leftover notes were then corrected in a final pass (24 items applied; 2 deliberately left: a saved select label in Module 18 Lesson 6 whose hint already gives the right test, and Laws of UX notes in Modules 3, 8 and 9 that are accurate for the pages those lessons assign).
- **Source accuracy.** Laws of UX pages were re-read on 5 October 2026: the Miller's law page warns against using "seven" to justify design limits and the Hick's law page cautions against over-simplifying, so the course no longer says the source publishes no limits where those pages are assigned.
- **Limit.** The reviewers, fixers and verifiers were AI agents working separately from the authoring passes, not a human product-design reviewer. Their factual claims were checked against sources, but a human reviewer's sign-off is still the plan's standard.

### Accessibility and keyboard

- **Automated audit.** axe-core 4.13 (WCAG 2.0, 2.1 and 2.2 A/AA plus best practice) first found 28 text colours below 4.5:1 (for example the status label at 3.86:1 and page introductions at 3.82:1), a skipped heading level in the portfolio path and a scrolling starter text that could not be reached by keyboard. All were fixed. Afterwards **0 violations** on 101 desktop screens (Learn, Course map, My work, Account, the baseline, and 24 lessons from every module × Learn/Do/Check/Your work with every collapsible section open) and on 52 screens at 320 px, with **no horizontal scrolling** at 320 px.
- **Hands-on keyboard pass** (real key events in the built-in browser): the skip link comes first; tab order follows the page (brand, navigation, account, next step, path switch, stages, lessons); every control reached shows a focus outline of at least 2 px; opening a lesson focuses its title and Next focuses the new action's heading; radio groups are one tab stop with arrow and space selection; menus change with arrow keys; the creator review form was filled and saved entirely by keyboard.
- **Limit.** Automated rules catch a subset of barriers. No screen reader and no physical phone were used; [the device and assistive-technology script](DEVICE-AT-TEST-SCRIPT.md) lists the ten-step journey and pass conditions for VoiceOver, TalkBack, Narrator/NVDA and keyboard-only.

### Review loop and pilot readiness

- **Multiple learners.** The creator can now choose which learner workspace to read (Account → Learner workspace); the choice is checked on every request against active learners, Haru stays the default, and learners cannot use it. Reviews land on the chosen learner only. `scripts/test-pilot-workspaces.mjs` checks this (5 groups pass locally).
- **End-to-end in the interface (local accounts).** The creator chose Pilot 1, saw that learner's saved version and earlier review, and saved a structured review (criterion, Meets the criterion, evidence, comment, next action) by keyboard; Pilot 1 then saw all of it and the four progress states showed "Reviewed against criteria" with that outcome while "Practice finished" and "Demonstrated independently" stayed unset. Two issues found here were fixed: summaries now refresh as soon as a review is saved, and each state's description matches whether it is done.
- **Pilot tooling.** `scripts/create-pilot-learners.mjs` creates private pilot accounts in the ignored `.secrets` folder (and the SQL to close them afterwards); [the observation sheet](PILOT-OBSERVATION-SHEET.md) holds the observer-only measures; `scripts/pilot-report.mjs` reports what records show (finish, active minutes, days used, first saved answer, transfer answer, checks, reviews) and the records part of the 4-of-5 gate. The report was tested only with clearly synthetic local data.

### Regression and maintenance

GitHub Actions now runs the content contract, question-cue check, saved-answer compatibility, worksheet, actions, learning, guided-audit, type and build checks on every push, and a weekly link check; today all 105 external links answered. Locally, after all merges: `test:all` and the production build pass; the backend suite (all groups), the review/sync suite, the pilot-workspace suite, the learning/timer round-trip and all 224 lesson completion, saved-question, stale-write and reopening round-trips pass.

## Readiness rubric (plan's 100-point scale)

Scores reflect evidence available on 5 October 2026 after the readiness work above. The plan's gate is at least 90/100, **no dimension below 4/5**, and no unresolved critical correctness, privacy or data-loss issue. Anchors: 4/5 means the requirement works in representative cases, independently reviewed, with only minor limits; 5/5 adds successful unfamiliar-task and later-return checks, or comprehensive content/regression evidence where learner transfer does not apply.

| Dimension | Weight | Before | Now | Reason |
|---|---|---|---|---|
| Independent learning and transfer | 25 | 2/5 | **2/5 → 10** | Unchanged. Transfer tasks with anchors exist on every lesson, but no learner has attempted one; this needs the pilot. |
| Content accuracy and consistency | 20 | 3/5 | **4/5 → 16** | All 224 lessons reviewed by reviewers separate from the authors; all 291 findings fixed; every critical and major fix re-verified, with the residual items corrected; facts checked against sources; automated consistency checks pass. Provisional: the reviewers were AI agents, and the plan's standard is a human product-design reviewer's sign-off, which could change this score. |
| Practice and useful artefacts | 20 | 3/5 | **3/5 → 12** | Every lesson's required work was reviewed for completability alone and fixed where it was not; but no learner artefact has been produced and reviewed, so "works in representative cases" is unshown. |
| Feedback and assessment | 15 | 3/5 | **3/5 → 9** | The structured review loop now works across several learner workspaces and was exercised end to end in the interface with local accounts; no real reviewer has reviewed a real learner's artefact and seen them act on it. |
| Usability and accessibility | 15 | 2/5 | **3/5 → 9** | 0 axe violations on 153 desktop and 320 px screens after fixes, no 320 px horizontal scrolling, and a hands-on keyboard pass. No screen reader and no physical phone yet, which 4/5 requires. |
| Maintainability and safe progression | 5 | 4/5 | **5/5 → 5** | One contract, stable records and compatibility fixtures, tested migrations, separate core and extension paths, CI on every push and a weekly source-link check. |
| **Total** | 100 | 53 | **61/100** | Below the 90 gate. Four dimensions are below 4/5, and each is blocked only on evidence from people or devices outside this project. |

### What reaching 90 requires (cannot be produced by an agent)

One path to exactly 90: learning 5/5 (25, pilot learners succeed on the unfamiliar brief and again after at least a day), content 5/5 (20), practice 4/5 (16), feedback 4/5 (12), usability 4/5 (12) and maintainability 5/5 (5). Each step is ready to run:

1. **Learner pilot**: Haru and, where practical, 3–5 non-technical graphic designers, following [the pilot script](PILOT-TEST-SCRIPT.md) with private pilot accounts and [observation sheets](PILOT-OBSERVATION-SHEET.md). Gate: at least 4 of 5 complete the starter journey uncoached and meet the criteria on the unfamiliar brief; a later-return check after at least one day earns 5/5 on learning. This moves learning, practice and feedback.
2. **Real review cycle**: the creator or a reviewer reviews pilot artefacts in Account → Learner workspace against the criteria; learners revise and explain the change. This moves feedback to 4–5/5.
3. **Human content sign-off**: a product-design reviewer samples the corrected lessons (at least the core-path Lesson 1, one research, one UI, one evaluation and one technical-extension lesson) using the review packets. This confirms content at 4/5 and can earn 5/5.
4. **Devices and screen readers**: [the device and assistive-technology script](DEVICE-AT-TEST-SCRIPT.md) on an iPhone with VoiceOver, an Android phone with TalkBack, a laptop with Narrator or NVDA, and keyboard only. This moves usability to 4/5.

`node scripts/pilot-report.mjs --remote` turns the pilot's saved records into the records part of the gate; the observation sheets supply the rest. Record the results here and re-score each dimension with its evidence.

## Open gates (not claimed)

- Haru's uncoached use and the 3–5 designer pilot ([script](PILOT-TEST-SCRIPT.md)).
- A human product-design reviewer's sign-off on the corrected lessons (the full review above was by AI agents separate from the authors).
- A real review cycle: a reviewer reviews real learner artefacts and the learner acts on it.
- Physical iOS/Android, VoiceOver, TalkBack and Narrator task tests, including the Module 11 lab.
- Field Core Web Vitals; only build-size and request-count changes were measured.
- Starters opened only in a desktop browser; free-tool workflows (Inkscape, Penpot) and GitHub Pages steps were not executed end to end.

## Release

On 5 October 2026 the live D1 database had exhausted its free daily read allowance (caused by the old five-second polling), so deployment waited for the 00:00 UTC reset. Migration 0004 was then applied to the remote database (10 commands, additive only) and Cloudflare version f5a00519-20da-48e8-9640-fb8613e1653e deployed to https://harucourse.raj-39e.workers.dev. Health returned 200 with version 0.3.0; unauthenticated progress returned 401; starter and lab files are served as files; the live entry JavaScript and CSS match the local build by SHA-256; the browser console was clean.

Hosted QA used only the isolated test identity: the review/sync suite (version change detection, saved-version history, review request, self-review, skip guard, no-reviewer workspace), the learning/timer round-trip and all 224 lesson completion, saved-question, stale-write and reopening round-trips passed, with original test records restored. Creator review outcomes were verified locally only, because exercising them live would write to Haru's records. Haru's account was not opened.
