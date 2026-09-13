# All-course saved-action reader — 13 September 2026

## Scope and implementation

The creator approved continuing the saved Lesson 1 pattern from Module 6 through Module 20. All 224 published teaching lessons now use the saved Learn → Do → Check → Your work reader. Lesson 1 keeps its 48 permanent action IDs, and the explicit Module 1–5 plans remain unchanged.

The 181 later lessons retain their existing reviewed teaching, five-step guided practice, demonstrations, supported attempts or sorters, worksheets, checks and save routes. `src/lessonActions.ts` derives each later lesson's starting instruction from that lesson's recommended and alternative routes. It resolves each Check to the worksheet step explicitly named by the lesson's own repair instruction, so feedback opens the learner's relevant saved answers rather than a generic notes box.

Across the course, 2,866 existing worksheet field IDs appear exactly once in 7,974 saved actions. There are 1,601 persisted formative questions. These answers and feedback reveals are practice state, not a score. No database migration or record-version change is required.

## Module inventory

| Module | Lessons | Preserved fields | Saved actions | Saved questions |
|---|---:|---:|---:|---:|
| m01 | 7 | 143 | 267 | 33 |
| m02 | 5 | 107 | 203 | 20 |
| m03 | 10 | 130 | 320 | 40 |
| m04 | 8 | 98 | 250 | 32 |
| m05 | 13 | 138 | 389 | 52 |
| m06 | 12 | 177 | 425 | 68 |
| m07 | 13 | 190 | 457 | 72 |
| m08 | 12 | 170 | 430 | 68 |
| m09 | 12 | 157 | 417 | 68 |
| m10 | 12 | 169 | 429 | 68 |
| m11 | 12 | 165 | 465 | 108 |
| m12 | 12 | 159 | 459 | 108 |
| m13 | 12 | 146 | 446 | 108 |
| m14 | 12 | 137 | 437 | 108 |
| m15 | 12 | 131 | 431 | 108 |
| m16 | 12 | 135 | 435 | 108 |
| m17 | 12 | 129 | 429 | 108 |
| m18 | 12 | 128 | 428 | 108 |
| m19 | 12 | 126 | 426 | 108 |
| m20 | 12 | 131 | 431 | 108 |
| **Total** | **224** | **2,866** | **7,974** | **1,601** |

The per-lesson counts and stable IDs are recorded in `BEGINNER-LESSON-AUDIT.md`. The table above is computed from the same lesson objects consumed by the app and server.

## Local automated checks

- `npm.cmd run test:actions` passed all 224 flows: unique valid action IDs, five legacy timing steps, complete and unique worksheet-field coverage, retained demonstrations and supported attempts, resolvable repair fields, bounded record schema, incomplete/invalid-answer rejection, explicit completion and reopening after substantive edits.
- `npm.cmd run test:worksheet` passed shipped worksheet-ID and progressive-reveal regression checks.
- `npm.cmd run audit:guided` reported no guided-teaching contract problems.
- `npm.cmd run test:learning` passed progress and timer regressions: practice completion remains separate from time, navigation and review.
- `npm.cmd run build` passed both TypeScript projects and the production Vite build. The existing bundle remains about 1.62 MB gzip, so module code splitting remains a performance gap.
- `npm.cmd run test:cloud` passed all 13 existing local backend, authentication, isolation, worksheet, feedback and OAuth/MCP groups.
- All 224 local test-account records passed complete learning/worksheet round-trips, invalid/incomplete finish rejection, stale-write rejection and reopening. The integration restored the original records; revisions and timestamps advanced normally.

Generated Markdown and `test:content` passed after the all-course flow was applied. A passing structural or integration test does not mean a learner completed every action or understood the lesson.

## Public resource access

On 13 September 2026, all 63 distinct assigned reading URLs used by Modules 6–20 returned HTTP 200 with an identifiable page title. Redirects were followed; one Chrome DevTools page localized to Portuguese. These checks establish public page access only. They do not establish an authenticated free tool workflow, a vendor's future pricing, video playback or subtitle quality. Every required task retains its account-independent paper, local-file or in-app route.

## Browser, release and hosted verification

Local browser QA used the shared test workspace, which the Account screen explicitly identifies as separate from Haru's cloud records. Samples covered Modules 6, 10 and 11 at 320 × 740; Modules 12 and 16 at 390 × 844; and Module 20 at 1440 × 1000. Each sample rendered the action reader and the lesson's own starting/missing-work route. No sample had horizontal page overflow. At 320 px the four section controls measured 63.2 px high, visible editable controls used 16 px text, and the action card stayed within the viewport. Desktop placed a 726 px action card beside a 220 px task-context panel.

In Module 6 Lesson 1, a worksheet answer saved online and reopened at the same action after reload. A deliberately wrong formative answer revealed explanatory feedback and an inline repair selector containing the boundary, task and improvement fields named by the lesson's repair instruction. The chosen answer, reveal and repair state survived reload. No browser console errors appeared. The six practice records touched by the module samples were restored to empty test-account state; the browser returned to its prior Module 2 lesson. A temporary service-worker bypass and all viewport overrides were reset before the QA tab closed.

Implementation commit `7d1c71d` was pushed to `main`. Cloudflare deployed version `50ffac9c-7402-42c7-8306-8c79d535755b` at 100% on 13 September 2026, 16:31 UTC, at https://harucourse.raj-39e.workers.dev. Existing D1 and KV bindings were retained; no migration was needed.

All 224 hosted test-account records passed complete learning/worksheet round-trips, saved action/question persistence, incomplete-finish rejection, stale-write rejection and reopening on edits. The integration restored every original record, advancing only revisions and timestamps. A first sequential run was interrupted after several minutes; its one in-flight QA record was found and restored before the definitive pass. The integration runner now uses six independent workers against distinct lesson IDs, and the final hosted pass completed with all records restored. Haru's records were not touched.

Live `index.html`, JavaScript `index-Co3S-bdP.js` and CSS `index-Pskh__dC.css` matched the local build byte-for-byte by SHA-256. Health returned 200 with version 0.2.0, and unauthenticated progress returned 401. The signed-in test workspace applied the Update now path and loaded the release. Module 6 Lesson 1 at 390 × 844 and Module 20 Lesson 1 at 1440 × 1000 rendered the saved reader, lesson-specific starting route and overview with no horizontal overflow; the desktop card and task-context panel measured 726 px and 220 px. No console errors appeared. The test workspace was returned to its prior Module 3 Lesson 4 view, the viewport override was reset and the QA tab was closed.

Physical iOS/Android keyboard behavior, native screen-reader and other assistive-technology use, and Haru's uncoached observation remain separate gaps. Formal assessment remains unimplemented; nothing here computes, stores or claims a mastery score.
