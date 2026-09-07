# Practical apprenticeship integration verification — 7 September 2026

## Scope and sources

The original 30 lessons have individually authored activity briefs, workspace setup, starter tables, hints, optional bounded AI rehearsals and artifact handoffs. The diagnostic has an independent inventory and no AI/hints. Workspace and portfolio guides are shared by the app, generated documents and MCP.

During release, origin/main had advanced to 01a6def with m05–m20 already published. That work was merged without dropping lessons or reverting its resource audits. All 224 published lessons now carry the workspace contract; the later 194 derive their template, hints and handoff from existing authored steps, free routes, rubric evidence and portfolio intent. Publication labels read the module catalog. This is not a claim that the later 194 activities were individually redesigned in this revision.

## Checks

- docs:generate and test:content pass: 69 catalog IDs, prerequisite map, preserved lesson identities, guided teaching, activity contracts, three two-choice project packs, module handoffs and exact generated documents.
- build passes client/server TypeScript, Vite and PWA. Production JS is approximately 2.30 MB (669 kB gzip); the upstream large-bundle warning and Workbox deprecation remain. The curriculum is precached under the upstream 4 MiB limit; module splitting remains future performance work.
- test:cloud passes all twelve reported groups against disposable local D1/KV, including legacy records, account isolation, CSRF, stale revisions, feedback, OAuth/MCP and new lesson/workspace/project response checks.
- scripts/test-apprenticeship-browser.js passes against local test: actual clipboard content, manual fallback when clipboard is denied, keyboard-selectable text, 320/390/1280px no-overflow checks, unchanged practice record through reading/copy/reload, selected Do section on reload, cached offline reload/template access, and current portfolio publication labels.
- scripts/test-all-lessons-browser.js opens all 224 lessons through the twenty-module selector and checks each starter and save handoff. It also checks contrast boundaries/invalid inputs, diagnostic absence of coaching, browser Back and baseline section reload. Final sweep has zero self-conflicting bookmark writes.
- Earlier walkthrough fixtures in ignored output/walkthroughs cover observation, framing, interview preparation, a flow specification, contrast measurements and the non-AI rehearsal route. They are explicitly synthetic QA examples, not learner work or participant research.
- Desktop/mobile screenshots were inspected. No page overflow was found at 320/390/1280px with expanded materials. Native soft-keyboard behavior, device installation and full assistive-technology acceptance were not tested.
- wrangler deploy --dry-run passes. Remote D1 migration listing reports no pending migrations; no schema change is part of this release.
- Original vision SHA256 remains 2DE612EE9517A761ACEF52507D25FDD83B65DC22BE1C9F76F84816B20033F26C.

## Navigation repairs

Selecting a section now updates browser navigation as well as the account bookmark. The bookmark hook lives once per signed-in App instead of being restarted for each lesson, eliminating duplicate in-flight writes caused by lesson remounts. Existing keys, record schemas, revision conflict rules and account isolation remain intact. Initial verification found the reload issue and repeated 409s; both repairs were retested. Deliberate offline tests still produce expected disconnected-network entries.

## Reproduction and boundaries

Build, start npm.cmd run dev:cloud on 127.0.0.1:8787 with disposable local credentials, run test:cloud, then use playwright-cli run-code --filename with the two tracked browser scripts. Use the test account; the scripts reject other origins/accounts. Screenshots are ignored under output/playwright. A repeated earlier backend run exhausted the local login-attempt window; only local QA throttle rows were reset, with no production security change.

Figma Starter and ChatGPT/Gemini public documentation were checked separately from functionality. No signed-in Figma export or chatbot response workflow was performed. Those routes remain optional with non-AI/account-independent alternatives. No actual research participants, assessed mastery, formal assessment software or job readiness are claimed.

## Release state

Local integration is verified. Production deployment and hosted test-account acceptance are recorded below when completed.
