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

Deployed code commit 7a58cc9 from main on 7 September 2026 to https://harucourse.raj-39e.workers.dev. Cloudflare version: 0266c3b5-3548-40c2-bc24-2b139c2d9ac4. Upload and trigger publication succeeded; reported Worker startup was 98 ms. No migration was required.

Hosted Chromium signed in only as test. Verified all twenty module options, the first custom activity, template and AI-prompt clipboard contents, the m20-l12 derived workspace, current 21-module-including-baseline publication label, and no horizontal overflow at 320/390/1280px. Appending an explicitly labelled QA note to the test account's m20-l12 work saved through the UI; API readback and reload confirmed the note and Your work section persisted. No JavaScript page exceptions occurred. No real learner account was signed into or written.

Browser-context readback returned 200 for health, manifest, service worker and OAuth discovery. The served index-RcCaWYHd.js is 2,302,582 bytes and matches the local build SHA256 exactly: fc89b6e8b01ddd9b24268a364e4fb46708c0f3afd576059ba29fa6b79a561d2b. A direct Python urllib probe received 403; verification was completed through the normal authenticated browser context rather than interpreting that probe as a product outage.

The hosted screenshot and smoke script are retained in ignored output/playwright/hosted-apprenticeship-mobile.png and hosted-apprenticeship.js. Hosted offline/second-device/OAuth-authorization matrices were not repeated; corresponding local checks and the earlier release evidence remain separately documented. Figma/chatbot signed-in workflow verification remains open; those routes are optional.
