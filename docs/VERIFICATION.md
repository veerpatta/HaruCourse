# Foundation verification — 5 September 2026

Production preview at `http://127.0.0.1:4173`, Chromium via Playwright CLI. Initial rendering also checked with agent-browser.

| Check | Result |
|---|---|
| TypeScript and production build | Passed |
| Cloudflare Wrangler deployment dry run | Passed, static assets only, no bindings |
| Desktop dashboard | Visually inspected at 1440 × 1050 |
| Baseline navigation | Opens brief, timed exercises, deliverables, and rubric |
| Empty review submission | Blocked with a request for reflection and work reference |
| Save/reload | Test reflection, work reference, 110 minutes, and readiness persisted |
| Progress | Shows 110 minutes, one item awaiting review, zero assessed modules |
| Review export | Downloaded Markdown contains brief, rubric, reflection, reference, and reviewer instructions |
| Backup export | Downloaded JSON matches test record |
| Mobile | Visually inspected at 390 × 844; no document horizontal overflow |
| Offline | Service worker controls page; disabling network permits reload and opening baseline |
| Browser console | Zero errors and warnings reported |

Screenshots and test downloads are excluded from Git under `output/playwright/` and `.playwright-cli/`. QA data belongs to the isolated browser session and is not committed or preloaded into the app.

An upstream Workbox generated-template path escaping problem with the apostrophe in this workspace was resolved by switching to an explicit bundled service worker (`injectManifest`). The build emits a non-fatal upstream inlineDynamicImports deprecation warning.

These checks do not establish native-device installation, hosted availability, cloud synchronization, authentication, full accessibility conformance, or MCP connectivity. Those are later acceptance milestones.

## Cloud milestone — 6 September 2026

Full Worker preview at `http://127.0.0.1:8787`, local D1/KV, Chromium through Playwright CLI. Synthetic test users and records only.

- Frontend/server TypeScript, production build, and Worker deployment dry run passed.
- Integration tests passed: login/logout, unauthorized denial, role ownership, same-origin protection, validation, concurrent saves, versioned feedback, retry deduplication, OAuth PKCE/consent, SDK initialization, read-only scopes, AI feedback visibility, refresh downscoping, and grant revocation.
- Browser passed: learner login, cloud load with prior-draft download, saving a new revision, creator login and feedback submission, valid backup import, and invalid-backup draft preservation.
- A service-worker-controlled browser rendered the real OAuth consent page (`Connect your course`) instead of the cached application shell.
- Desktop and mobile screenshots inspected; mobile 390 × 844 had no horizontal overflow. No browser console errors were reported during the learner/creator flow.

Screenshots live outside the repository in the Codex visualization directory. No remote resources have been created. Hosted acceptance, actual device installation, and the learner’s own AI-account connection remain unverified. Free-plan confirmation is required before deployment.


## Hosted acceptance — 6 September 2026

- URL: https://harucourse.raj-39e.workers.dev
- Worker version: fe26a389-047d-4cc3-aec1-4c41dac8eb89.
- D1 migration applied and production user hashes seeded; credentials remain in Git-ignored .secrets/access-keys.json.
- Hosted learner/creator authentication, unauthenticated denial, OAuth discovery, PKCE exchange, consent CSRF, actual MCP SDK initialization/tool listing/progress read passed. Verification grant revoked and sessions signed out afterward.
- Chromium verified creator sign-in, empty learner record, sign-out, mobile width 390 without overflow, and zero console errors/warnings.
- Production learner progress was left untouched. Hosted write flows have not been exercised; their local integration tests passed. Learner-specific AI-client compatibility and native installation remain acceptance tasks.
- Deployment explicitly authorized through the CLI. No paid-plan upgrade performed; billing access is still unavailable.

## Username login — 6 September 2026

Replaced access-key sign-in with username/password authentication in the app and OAuth consent. Production credentials are in Git-ignored `.secrets/login-credentials.json`; D1 stores salted hashes. `test` is a password-free learner with separately owned cloud records.

Local integration tests passed for wrong/empty-password rejection, test login, test-write isolation, role denial, existing save/feedback behavior, and OAuth/MCP regression checks. Hosted API login, authorized progress read, and logout passed for all three accounts. Chromium verified the password-free test form and empty separate test record. Production deployment version: a7f4e018-c601-4e57-b7e6-6d881ae4a976.

## Login-first remembered sessions — 6 September 2026

The course now opens at a login gate before rendering the learner workspace. An HttpOnly session cookie persists for 30 days. Online visits validate it with the server; a cached, expiry-bounded profile permits public lessons and local drafts during a network outage, without granting access to cloud APIs. Passwords/tokens are never stored in localStorage. Signing out clears the remembered profile and returns to login. Local notebooks are scoped by user ID; Haru retains access to her legacy draft.

Chromium verified fresh login gate, successful login, online reload, offline reload after caching, logout, and signed-out reload. Build and TypeScript checks passed. Offline testing deliberately produces a network-disconnected console entry.

Hosted login gate, remembered session after reload, and logout also passed on deployment dc820b20-e5d0-4ae4-bdf9-5d952d3ddff1.

## Automatic saving and published Week 1

Build and local integration tests passed, including lesson ID validation, per-lesson persistence, baseline isolation, course summary, and prior authentication/OAuth/MCP tests. Chromium verified automatic write without pressing Save, reload recovery, offline edit/reconnect, isolated lesson records, and conflict preserving the local draft. Seven authored lessons each total 120 minutes; Days 6 and 7 are optional. Three linked primary references checked on 6 September 2026.

Hosted test-account verification passed: a note entered without pressing Save produced D1 lesson record `week1-day1-v1`, revision 1, confirmed with a remote SQL read. Reload restored the note. Mobile 390 × 844 had no horizontal overflow. Haru’s records were not used for write testing. Source references and the complete first-week material are preserved in WEEK-01.md. Later weeks and file uploads remain unfinished.

## Week 2 and course navigation

Validated five unique Week 2 lesson IDs, 120 minutes per session, teaching and review criteria. Local integration tests passed including Week 2 writes, creator visibility, baseline isolation, and OAuth/MCP regression. Chromium passed week filtering, autosave, continuation after reload from the saved record, next-lesson navigation, and no mobile horizontal overflow at 390px. Source links were checked against primary GOV.UK guidance on 6 September 2026.

Hosted Week 2 release verified on 6 September 2026: five lessons visible, test-account autosave succeeded, and Continue learning restored the saved Week 2 reflection after reload. The guiding prompt was preserved byte-for-byte (matching SHA-256); links among the original vision, requirements, authoring standards and project plan were validated.

## Session timer and plain-language pass — 6 September 2026

Local Worker on `http://127.0.0.1:8788` (8787 was held by an unrelated dev server on this machine), local D1, the isolated `test` learner, Chromium in the desktop app's browser pane at 375 × 812.

- Schema: the committed six-field backup parses to exactly itself with no keys added; a record carrying `sessions` and `confidence` round-trips; `minutes: 1.2`, 51 sessions, `confidence` 0 or 6, fractional session minutes, `manual: false`, an unknown session key, an unknown record key and `version: 2` are all rejected.
- Content and build: `test:content` byte-identical generated documents (no lesson data changed); both TypeScript projects, client and Worker bundles built.
- Backend suite: all previous checks plus a new one — sessions and confidence round-trip through `/api/progress` and `/api/course-records`, an old-shape write afterwards is accepted and comes back without those keys, out-of-range and unknown fields return 400, and Haru’s record is unchanged.
- Timer, against the live Worker with `/api/progress` writes counted: Start → zero writes for 84 s → Pause → exactly one write (200), server minutes 7 → 8, one session entry with `step: 2`, 23.5 s banked on the device. Reload preserved the paused 1:23, the step marker, Resume/Finish, with only reads since load and the server unchanged. A stored running state 11 minutes old was capped at the 10-minute away limit on mount, auto-paused with the notice, and produced one write (revision 3 → 4, 8 → 18 min, the step-2 entry grown 1 → 11). The banked remainder reconciled to the second across every fold.
- Mobile: the fixed bar sits at 665–734 px above the tab bar at 743–812 px, full width, 44 px primary control, 24 px tabular digits, no horizontal overflow, an 84 px clearance spacer; a bubbling `focusin` on the notes field hides the bar and `focusout` restores it.
- Offline, with the Worker stopped: Finish rounded 11 min + 49.7 s up to a 12-minute session and cleared the timer; confidence 4 and a 30-minute hand-added entry landed locally (18 → 49 min); 1.5 as a total was refused client-side; the draft stayed dirty with zero successful and two failed writes. After the Worker returned, the whole batch uploaded as one write (revision 4 → 5) leaving 49 min, both entries and confidence 4 on the server, `dirty` cleared and “Saved online”.
- Totals: the Dashboard tile and the Progress tiles agree at 27 h 5 min; the session log shows date, lesson, step or “added by hand”, and minutes; the confidence list shows the lesson at 4 of 5.

Not verified in this pass, and why: the creator’s read-only timer summary in a browser (creator sign-in needs a password, which the agent does not enter — the server-side creator write block is covered by the suite’s 403 checks); a genuine second-device conflict with the timer (the pane has one profile — the concurrent-write 409 path is covered by the suite and the timer writes through the same code as typing); the baseline page and navigate-away pause in a browser (same hook and component, exercised on lessons only). Each of the last three Worker starts died when the pane froze a hidden tab mid-poll (`Network connection lost` in miniflare’s loopback, treated as fatal by wrangler’s dev proxy); Node traffic never triggered it. The pane’s earlier writes to `127.0.0.1:8787` reached the unrelated server on that port and were discarded from the evidence. The unrelated server was left untouched.

### Hosted release — 6 September 2026

Deployed with the authorized CLI to https://harucourse.raj-39e.workers.dev, Worker version `87ba6e41-1ce2-4c56-8a01-1ce9aedead4f`. No D1 migration was needed; the record’s new fields live inside the existing JSON blob. The live site serves the built bundle `assets/index-BatR2bQe.js`, and `/api/health` reports version 0.2.0.

Hosted test-account check, password-free `test` learner only: a record carrying `sessions` and `confidence` was written to `m03-l01-v1` (revision 0 → 1), read back identically through `/api/progress` and `/api/course-records`, a fractional session value was refused with 400, and the session was signed out afterwards. Haru’s records were not read or written. The hosted app was not driven in a browser this pass; the browser evidence above is from the local Worker on the same build.
