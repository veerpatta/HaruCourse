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
