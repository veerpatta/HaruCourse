# Improvement-plan verification — 4–5 October 2026

The creator authorized implementing the *Haru Course Improvement Plan* (4 October 2026) completely, committing to `main`, applying migrations and deploying to the live Cloudflare site. This record states what was implemented and checked, what was not, and the readiness score the evidence supports. Per the plan: **implementation complete, learner validation pending.** This is not a 9/10 claim.

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

## Readiness rubric (plan's 100-point scale)

Scores reflect evidence available today. Anchors: 4/5 needs representative cases independently reviewed; 5/5 needs unfamiliar-task and later-return evidence.

| Dimension | Weight | Score | Reason |
|---|---|---|---|
| Independent learning and transfer | 25 | 2/5 → 10 | Transfer tasks and anchors exist on every lesson, but no learner has attempted one. |
| Content accuracy and consistency | 20 | 3/5 → 12 | Source-confirmed issues corrected with working and automated consistency checks; no independent product-design reviewer yet. |
| Practice and useful artefacts | 20 | 3/5 → 12 | Every core lesson produces inspectable work with completable routes; artefact quality unobserved. |
| Feedback and assessment | 15 | 3/5 → 9 | Structured review loop implemented and tested; no real review cycle has run. |
| Usability and accessibility | 15 | 2/5 → 6 | Emulated phone checks only; no physical-device, keyboard-only end-to-end or screen-reader task test. |
| Maintainability and safe progression | 5 | 4/5 → 4 | One contract, stable records, tested migration path, automated checks. |
| **Total** | 100 | **53/100** | Below the 90 gate, as expected before the pilot. |

## Open gates (not claimed)

- Haru's uncoached use and the 3–5 designer pilot ([script](PILOT-TEST-SCRIPT.md)).
- Independent content review of the corrected lessons.
- Physical iOS/Android, VoiceOver, TalkBack and Narrator task tests, including the Module 11 lab.
- Field Core Web Vitals; only build-size and request-count changes were measured.
- Starters opened only in a desktop browser; free-tool workflows (Inkscape, Penpot) and GitHub Pages steps were not executed end to end.

## Release

On 5 October 2026 the live D1 database had exhausted its free daily read allowance (caused by the old five-second polling), so deployment waited for the 00:00 UTC reset. Migration 0004 was then applied to the remote database (10 commands, additive only) and Cloudflare version f5a00519-20da-48e8-9640-fb8613e1653e deployed to https://harucourse.raj-39e.workers.dev. Health returned 200 with version 0.3.0; unauthenticated progress returned 401; starter and lab files are served as files; the live entry JavaScript and CSS match the local build by SHA-256; the browser console was clean.

Hosted QA used only the isolated test identity: the review/sync suite (version change detection, saved-version history, review request, self-review, skip guard, no-reviewer workspace), the learning/timer round-trip and all 224 lesson completion, saved-question, stale-write and reopening round-trips passed, with original test records restored. Creator review outcomes were verified locally only, because exercising them live would write to Haru's records. Haru's account was not opened.
