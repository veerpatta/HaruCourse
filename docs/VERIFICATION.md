> Historical verification: the results below describe their named releases. For the current concise reader and navigation, see [VERIFICATION-MINIMAL.md](VERIFICATION-MINIMAL.md).

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
