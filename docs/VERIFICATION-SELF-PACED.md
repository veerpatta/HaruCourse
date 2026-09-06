> Historical verification: the results below describe their named releases. For the current concise reader and navigation, see [VERIFICATION-MINIMAL.md](VERIFICATION-MINIMAL.md).

# Self-paced release verification

Verified 6 September 2026. Cloudflare Worker version: 96e835de-ded1-4f0a-b3c9-dcd30fee6aa7. Live: https://harucourse.raj-39e.workers.dev. D1 migration 0003_learning_positions applied locally and remotely.

## Automated checks

- npm.cmd run test:content: all 17 areas mapped, ordered prerequisites, known module and lesson resource IDs, generated Markdown matches app sources.
- npm.cmd run build: client and backend TypeScript plus Vite/PWA build pass. Nonfatal Workbox inlineDynamicImports deprecation remains.
- npm.cmd run test:cloud: local authentication, role isolation, CSRF, record validation/concurrency, versioned feedback, per-lesson records, OAuth PKCE/MCP scopes/revocation, bookmark authentication/CAS/invalid targets/creator isolation pass. Test practice accepts 1500 cumulative minutes.
- Original prompt SHA256 unchanged: 2DE612EE9517A761ACEF52507D25FDD83B65DC22BE1C9F76F84816B20033F26C.

## Browser verification

Playwright Chromium local test account: initial login; open a lesson and navigate to Check without editing notes; GET bookmark confirms section; reload and Continue returns to Check. Offline section change remains dirty locally and syncs after reconnect. A second isolated browser context signed in to the same account resumes at the cloud section. While the first context is offline, a newer remote bookmark is written; reconnect preserves that remote position and clears the old queued bookmark. Missing lesson and section responses were mocked to test first-core and Learn fallback. A 390x844 viewport showed no horizontal overflow; module controls and Continue were visually inspected. Network failures and 409 responses during deliberate offline/conflict cases are expected.

Hosted test account: login, Module 2 first lesson, read-only Check bookmark, reload continuation and rejection of stale expectedRevision=0 all passed. Only test-account bookmark state was written for hosted QA. Existing production progress, submission history and feedback were compared byte-for-byte as parsed ordered rows with a private pre-release snapshot: unchanged (2 progress records, 3 history records, 0 feedback records). No Haru content was edited.

## Resource evidence and limits

RESOURCE-LIBRARY.md records exact public reading links, selection rationale, account/cost scope, estimated effort, fallbacks and exercises for all mapped areas. Twenty-eight public readings were retrieved and reviewed; optional authenticated Figma/Penpot/Analytics workflows were not executed and remain candidate paths. Advanced research gaps are explicit. Published introductions do not establish complete competency coverage or mastery. All lesson writing and formal assessment software are outside this milestone.

## Reproduce

Use local disposable credentials per CLOUD-SETUP.md, apply local migration, build and run npm.cmd run dev:cloud on port 8787, then npm.cmd run test:cloud. For browser cases follow the flows above; missing-target tests should intercept GET only and must not alter real learner records. Recheck the original vision checksum and content generator. Use the hosted test account for release checks, never learner submissions. Keep any record snapshot in ignored private storage.
