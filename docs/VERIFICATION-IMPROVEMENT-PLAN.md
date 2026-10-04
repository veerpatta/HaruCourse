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

Preserved: all 224 lesson IDs, all 2,866 original worksheet field IDs (verified against the pre-change commit), check counts and order, sorter item IDs, supported-practice positions, choice option labels, record version 1, storage keys, bookmarks, feedback history and existing finishes.

## Checks run

To be completed at release; local results so far:

- Generated documents regenerated; `test:content`, `test:questions --strict`, `test:improvements`, `test:worksheet`, `test:actions` (224 flows, 3,151 fields, 8,352 actions, 1,643 saved questions), `test:learning`, `audit:guided`, both TypeScript projects and the production build pass.
- Local worker with migration 0004: all 13 existing backend groups, the new review/sync suite, the learning/timer round-trip and all 224 lesson completion/conflict/reopen round-trips pass.
- Browser (local, 375 px): Learn core path and both progress figures, Lesson 1 sessions and annotated screens, M3 skip panel, reflow demo, reorder example, uncertainty calculator, M11 lab links and M12 starters render without horizontal overflow; starter and lab files are served as files, not the app shell; the Update now path loads the new build.

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
- One Module 7 Lesson 3 practice answer has no successor wording and shows as unanswered for anyone who chose it.

## Release

Recorded after deployment.
