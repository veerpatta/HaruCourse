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
