# Minimal course verification — 6 September 2026

**Release state: implemented and verified locally; not deployed or committed by this change.** No remote database writes, migration, paid service or new module. The live site still serves the earlier release.

## Implemented

- Three destinations: Learn, Course map and My work; Account contains utilities.
- A shared four-section reader for the baseline and all twelve published lessons.
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

Native installation, a full assistive-technology audit, the learner’s actual AI client and this revision’s hosted acceptance remain unverified. No real participant exercise was performed. Formal scored assessment, deeper per-criterion remediation, later modules and existing research gaps remain pending. Use only the hosted test account if this revision is released.
