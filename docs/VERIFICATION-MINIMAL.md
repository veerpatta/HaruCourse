# Minimal course verification — 6 September 2026

**Release state: deployed and hosted acceptance passed.** Code commit `4904230` on main integrates the initial simplification (`0e2d7b4`) with newer publications and session logging. Worker version `b18804cd-40f4-4d3a-990f-fc003a148b45` serves https://harucourse.raj-39e.workers.dev. No migration was needed.

## Implemented

- Three destinations: Learn, Course map and My work; Account contains utilities.
- A shared four-section reader for the baseline and the original twelve published lessons; the eighteen newer m03/m04 lessons also use the reader while retaining their detailed source contract.
- Individually authored concept bullets, numbered action lists, outputs, prerequisites and repair guidance; optional examples, explanations, reading and effort details.
- Explicit section bookmarks, existing continuation fallbacks, unchanged draft keys and record versions, preserved creator/learner isolation.
- Lesson-labelled backup/review exports; matching imports preserve a downloaded prior copy. Legacy baseline backups and matching lesson conflict filenames remain supported.
- App/MCP compatibility text derived from structured instructions; generated baseline, lesson Markdown and blueprint. Updated future-authoring contract.

## Checks and results

| Check | Result |
|---|---|
| `npm.cmd run docs:generate` and `npm.cmd run test:content` | Pass: module prerequisites, all 17 mapped areas, approved resources, stable published lesson IDs, concise essential bullets, derived compatibility text and exact generated views |
| `npm.cmd run build` | Pass: client/server TypeScript, Vite and PWA; existing nonfatal Workbox inlineDynamicImports deprecation remains |
| `npm.cmd run test:cloud` | Pass on local disposable D1/KV: authentication, CSRF, account isolation, validation, concurrent writes, versioned feedback, OAuth/MCP scopes and revocation, bookmark CAS and invalid targets |
| Main navigation and map | Three destinations; expandable levels/modules; map lesson opens and saves Learn bookmark; same-tab Learn returns to the list; module selector follows saved module |
| Guided reader | Exactly one teaching/work panel visible; direct selection and Back/Next work; examples expand/collapse with keyboard; baseline uses the same reader |
| Read-only reload | Check restored through Continue; reading and navigation left practice revision unchanged |
| Draft and My work | Notes, reference, actual minutes and readiness saved/reloaded; My work opens the corresponding record and includes pending local edits |
| Offline | Service-worker-controlled reload succeeds; notes and section survive; reconnection saves pending work |
| Two contexts and conflicts | Second isolated context restores the account’s cloud section/work; newer server bookmark wins stale offline position; independent draft conflict preserves downloadable old draft and accepts explicit cloud choice |
| Missing bookmark targets | Mocked GET-only responses: unknown section opens Learn; unknown lesson falls through to unfinished practice, then first core with an empty summary |
| Creator review | Local synthetic Haru fixture reviewed against its saved revision; learner notes/reference disabled and backup import absent; learner record and bookmark compared unchanged; new feedback readable through learner API |
| Backups | Download includes lessonId/record; mismatched lesson import rejected without mutation; matching import restores and downloads prior draft |
| Responsive | Chromium 1440×1000 desktop and 390×844 mobile visually inspected; 320px and 390px have no horizontal overflow; mobile Do inspected |
| Browser errors | No JavaScript page exceptions in ordinary and final-build flows; expected network failures and HTTP 409 entries during deliberate offline/conflict tests |
| Original vision | SHA256 unchanged: `2DE612EE9517A761ACEF52507D25FDD83B65DC22BE1C9F76F84816B20033F26C` |

The six assigned reading pages (R01/R04/R05/R07/R27/R28) were reopened and their assigned sections inspected. Public article access required no login, card or trial. RESOURCE-LIBRARY.md remains the evidence authority; no authenticated optional tool workflow was claimed.

## Reproduce and limits

Use CLOUD-SETUP.md with disposable local credentials, build, and start `npm.cmd run dev:cloud` on port 8787. Run the backend suite, then the browser scenarios above. Local repeated QA can exhaust the ten-attempt login window; reset only the disposable local login-attempt fixture or wait for its expiry, never weaken production rate limits.

Browser scripts and screenshots are ignored under `output/playwright/`: verify-minimal.js, verify-offline.js, verify-creator.js, verify-fallbacks.js and verify-final.js; minimal-desktop.png, minimal-mobile.png and minimal-mobile-do.png. Initial browser checks were corrected to wait for asynchronous record hydration and to review a populated local fixture before declaring their results.

Native installation, a full assistive-technology audit and the learner’s actual AI client remain unverified. No real participant exercise was performed. Formal scored assessment, formal remediation workflow, modules after m04 and existing research gaps remain pending. Hosted writes for this release used only the test account.

## Integrated main-branch acceptance

All four published module choices, original and rich guided readers, notes/section restoration, timer controls, My work history, browser Back/Forward and mobile widths 320/390px passed. Screenshot review confirms timer and bottom navigation remain reachable. New module Markdown remains derived from the upstream rich contract. The backend suite includes optional session/confidence compatibility. Build and deployment dry run pass, with nonfatal large-bundle and Workbox deprecation warnings. Remote migration listing: none pending.

## Hosted release acceptance

Deployed 6 September 2026 from code commit `4904230`; live script `index-CIBJddct.js` matches the local production build. Wrangler reported successful asset/Worker publication and no pending D1 migrations. Hosted Chromium verified all four published module choices, original and rich guided sections, Start/Pause/Finish, My work history, browser Back/Forward, Check/Your work restoration and 320/390px overflow checks. Desktop/mobile captures are in ignored output/playwright/hosted-*.png.

Only username `test` was used for hosted writes. API readback confirmed sample notes, a two-minute session entry and confidence 3; reload retained notes and selected Your work section. No real learner account was signed into or written during hosted QA. The first automated run edited before remote hydration and correctly encountered a protected draft conflict; the test draft was explicitly retained. Acceptance was rerun waiting for record hydration and settled bookmark saves. No JavaScript page exceptions occurred; protected 409 responses are recorded separately from runtime failures.

Earlier local offline/conflict/feedback evidence remains above; this release did not repeat a hosted OAuth authorization or native installation. The newer m03/m04 resource verification evidence is retained from its upstream publication, not claimed as a new authenticated tool test.
