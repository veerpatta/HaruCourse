# Mobile PWA optimization — 13 September 2026

## Beginner-orientation mobile follow-up — 14 September 2026

The course-wide beginner orientation added on 14 September was reworked for phones rather than merely allowed to wrap. Module and lesson diagrams now appear before the longer explanation. At phone widths the module path stays in one three-stage row and the lesson path stays in one four-stage row, with complete accessible names for each stage. Learn, Do, Keep and Need remain visible inside the lesson, while the course-map cards show two-line Learn and Do previews, hide the repeated Keep preview, and say that opening the lesson reveals the full plan. At 360 px and below, lesson state moves below its number so it cannot compete with the title.

The selected lesson now uses its own concise purpose in the course map instead of repeating a generic module-level beginner paragraph. Orientation surfaces, prerequisite recovery, route choice, resource briefs, ready-made starters and finish checklists use tighter phone spacing without changing their text, route logic or completion requirements. The action outline found during live QA no longer shrinks into a 33 px column; its disclosure and action list take the full reader width and its summary remains at least 44 px high.

Local validation passed generated-document parity, content and stable worksheet checks, the guided audit, all 224 lesson flows with 2,866 preserved field IDs, all 221 required-lesson learning/timer regressions, both TypeScript projects, the production PWA build and the Wrangler dry run. The existing large entry-chunk and Workbox deprecation warnings remain nonfatal. No API, database migration, record schema, lesson ID, worksheet ID or learning semantic changed.

Live signed-in browser QA used only the isolated `test` identity. At 320 × 568, 390 × 844 and 430 × 932 there was no horizontal document overflow and no visible button, link or summary below 44 × 44 CSS px. The lesson diagram measured 73 px high at each width. The complete orientation measured 885, 794 and 753 px respectively, while keeping the title, four-stage path and time/save explanation in the first screen. The repaired action outline measured the full content width — 273, 343 and 383 px — and 44 px high. Course-map cards measured 273 px high at 320 px with state stacked below the lesson number, and 207 px high at 390 px; both Learn and Do were clamped to two lines and the full content remained in the opened lesson.

The service-worker guard initially found two dirty sidecars in the shared test browser. Module 1 Lesson 3 had a conflict against an empty cloud copy, so the existing local test draft was explicitly preserved and saved; Module 20 Lesson 12 reconciled automatically. Both reached **Saved online** before **Update now** was used. The final app loaded `index-CaopVYLl.js` and `index-DAGIEq8Z.css`; each matched the local production artifact byte-for-byte by SHA-256. The live console had no warnings or errors.

The hosted focused integration passed incomplete-finish rejection, full learning/timing and worksheet round-trip, stale-write rejection, second-session persistence and substantive-edit reopening, then restored its original test record. The hosted all-course integration passed completion, saved-question round-trip, stale-write rejection and reopening for all 224 lessons and restored every original test record; only revisions and timestamps advanced. Health returned 200 with application version `0.2.0`, and unauthenticated progress returned 401.

Implementation commits `205961e` and `21dd2b8` are pushed to `main`. Cloudflare Worker version `2efd2b50-80fd-4b3d-b005-eea39752bbaf` serves `https://harucourse.raj-39e.workers.dev`. Haru's account and records were not used. Physical iOS/Android installation and keyboard behavior, VoiceOver, TalkBack and Haru's uncoached use remain separate and unverified.

## What changed

The phone UI now uses a safe-area aware app shell. The header is sticky and shows the Haru mark, current context, connection state and Account. Learn, Course map and My work remain in a fixed bottom tab bar above the home indicator. The same layout reflows at narrow widths and at browser zoom without horizontal scrolling.

Learn now leads with one compact course-progress card and a full-width continue action. Module selection, module progress and lesson choices form one browse section. Lesson rows are separate cards with a consistent lesson number, title and status. My work uses the same progress language and card pattern.

The lesson reader now keeps Back and automatic-save status on one toolbar, shortens the mobile breadcrumb and moves the full lesson purpose into an accessible About this lesson disclosure. The four Learn → Do → Check → Your work controls stay immediately below the app header. The timer uses a compact elapsed-time row with icon controls, while its disclosure still explains automatic active-course time, the five-minute idle pause, manually added external time and why time cannot finish practice. Action Back and Next controls remain above the bottom tabs and return to normal document flow when an input receives focus, leaving room for a software keyboard.

Course progress still counts only required lessons that the learner explicitly marks finished. The mobile copy identifies the denominator as lessons and says that time and review are separate. Lesson progress counts required actions with saved evidence and labels the percentage as practice rather than a score. No progress calculation, API, record schema or completion gate changed.

Account listens for the browser's native install event and presents an Install Haru Course button when the browser offers one. Installed display mode is recognized on Android-compatible browsers and iOS. When a prompt is unavailable, the page gives short Install app / Add to Home Screen steps. The manifest also exposes Continue learning and My work shortcuts, and shortcut URLs resolve into the matching in-app tab.

Modules 3–20 build into stable course chunks. The JavaScript entry changed from 5,744.90 kB (1,627.76 kB gzip) to 3,877.73 kB (1,093.11 kB gzip), a 32.5% raw and 32.8% gzip reduction in the largest parse unit. The 18 module chunks range from 71.65 to 151.15 kB raw. The full authored course still totals about 5.67 MB in the service-worker precache, so offline coverage is unchanged; this split primarily improves update reuse, cache granularity and the largest parsing unit.

## Local validation

- `npm.cmd run docs:generate` and `npm.cmd run test:content` passed generated-document, coverage, prerequisite, resource-ID and lesson-contract checks.
- `npm.cmd run test:worksheet` preserved all 2,866 worksheet field IDs and passed reveal bounds.
- `npm.cmd run test:actions` passed all 224 lessons, 7,974 actions, 1,601 saved questions, conditional routes and finish/reopen gates.
- `npm.cmd run test:learning` passed learning-progress and timer regressions.
- `npm.cmd run audit:guided` reported no problems.
- `npm.cmd run test:cloud` passed all 13 local backend groups, including authentication, account isolation, per-lesson persistence, concurrent conflicts, guided worksheet round-trip, feedback, OAuth/MCP and logout.
- `npm.cmd run build` passed both TypeScript projects and produced the PWA with 27 precache entries. `npm.cmd run check:deploy` passed the production build and Wrangler dry run with the existing D1, KV and Assets bindings.
- `git diff --check` passed.

Browser QA used the local disposable `test` workspace. At 320 × 700, 390 × 844 and 430 × 932, document width equaled viewport width and every visible button, link, summary and select measured at least 44 px in both dimensions where applicable. The header and bottom navigation stayed within the viewport. Learn showed course progress and the next lesson in the first screen. A lesson showed its title, timer, section controls, lesson-action progress and current action in the first screen.

A temporary answer in Module 2 Lesson 1 changed lesson work from 4 to 5 saved actions, reached Saved online, survived reload in the same `write-decision` action and returned to 4 after the answer was removed. Input focus changed both sticky action regions to normal flow, preventing a mobile keyboard overlap. The PWA reopened Learn with five lesson cards while Chrome network emulation was offline. The Update now flow activated the final per-module split build, and its browser console had no errors. The generated My work shortcut opened My work and selected its bottom tab.

The temporary local answer was removed. Haru's records were not used.

## Release and hosted verification

Implementation commit `c7409a1` was pushed to `main`. Cloudflare deployed version `057d52e7-7d57-461f-9e9e-a32feda2d529` at 100% on 13 September 2026, 19:32 UTC, at https://harucourse.raj-39e.workers.dev. The existing D1, KV and Assets bindings were retained; no migration was needed.

Live `index.html`, `sw.js`, CSS `index-CDxXm0Xl.css`, JavaScript entry `index-3bARN_Sr.js` and all 18 course-module chunks matched the local production build by SHA-256. Health returned 200 and an unauthenticated lesson-progress request returned 401.

The hosted `test` identity passed the focused learning and timer integration: incomplete finish rejection, a complete worksheet and timing round-trip, worksheet-only review, stale-write rejection, a second signed-in session, substantive-edit reopening and course-summary persistence. Its original record was restored in the integration's `finally` block; only the expected server revision and timestamp advanced.

The previously installed live browser accepted the release through Update now after its saved-draft guard was clear. Two old local sidecars in the shared test browser reported conflicts against newer hosted test records; each was resolved with Back up my draft and use cloud, preserving the local copy and using the authoritative test record. This was test-account state only. After activation, the app loaded `index-3bARN_Sr.js` at 390 × 844 with no horizontal overflow, no visible button, link, summary or select below 44 × 44 px, and no console errors. Module 20 Lesson 12 reopened from the service-worker cache under network-offline emulation, then returned to Saved online after reconnect. The live My work shortcut selected My work, and Account exposed the mobile installation and offline guidance. Haru's records were not read or changed during browser QA.

Physical iOS and Android installation, native keyboard behavior, screen-reader output and Haru's uncoached use remain unverified. Browser emulation does not replace those checks. Formal scored assessment remains unimplemented.
