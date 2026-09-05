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
