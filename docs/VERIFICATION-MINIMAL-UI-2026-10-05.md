# Minimal UI verification — 5 October 2026

Local implementation of [the UI plan and preservation map](MINIMAL-UI-PLAN.md). Parent review is required before publication. Nothing was pushed, merged, migrated or deployed; no learner account or live provider was used.

## Scope and preservation

Branch: `codex/minimal-learning-ui-2026-10-05`, based on updated local main `8d89b5a`. GitHub main returned `fb119439` at inspection. The original checkout's modified pilot script, untracked observation sheet and pilot-report script were left untouched; its main commit remained `8d89b5a` at the closing check.

Five UI sources changed: `LearningStudio.tsx`, `LessonFlow.tsx`, `orientation.tsx`, `SessionTimer.tsx`, `style.css`. The landing page leads with the resume card; both progress figures remain under Course progress. The reader uses one bounded column, visible prerequisites and a complete optional lesson plan. Repeated session cards and the desktop task sidebar were consolidated into All actions & sessions. Plain teaching, definitions, examples, outputs, task instructions, participant notices, feedback and repair controls stay visible. Optional AI uses a native disclosure and retains the complete prompt, non-AI route and return action. Timer controls use secondary styling and visible phone labels; Back/Next stay in normal flow, with mobile sections still reachable while scrolling.

No changes to lesson sources, content/action/field/question/option IDs, aliases, schemas, storage keys, bookmarks, synchronization, reviewer rules, server, migrations or completion requirements. Source diff verification plus the course regressions cover this boundary. UI work does not claim new lesson refinement, independent content validation, learner acceptance or mastery.

## Passed

- `npm run test:all`: generated-document consistency, content and prerequisites, strict questions, improvement checks, worksheets, actions, learning/timer regression and guided audit. Latest local content: 224 flows, 3,155 preserved fields, 8,358 actions and 1,643 saved questions. Required library remains 221 lessons; recommended core remains 131. Existing saved-option compatibility and completion/reopen gates pass.
- `npm run build`: both TypeScript projects and Vite production/PWA build. Final precache: 44 entries, approximately 6.78 MB. The existing large-entry-chunk and deprecated inlineDynamicImports warnings remain. An initial default-sandbox Vite helper spawn failed with EPERM; the permitted process-access rerun and final build passed.
- `npm run test:ui`: actual local app in dedicated headless Chrome, with fictional records and intercepted loopback API. Intro and editable-answer reflow at 320, 360, 390, 768, 1440 and 1920px; long answer saved and restored at the exact action; heading focus and sticky-section clearance; section navigation and browser Back; simulated API outage, draft reload/reconnect; visible conflict and retained local draft; 200% text at 360px; keyboard disclosure/Tab access; visible worked screens; optional AI reveal/non-AI alternative/return; complete orientation access; participant notice and upload hold; unavailable-record recovery; uncoached baseline. No page errors or external requests.
- Axe WCAG 2 A/AA and 2.1 AA checks on the sampled desktop and mobile lesson introductions: zero reported violations. This is a sampled automated check, not a screen-reader usability result.
- `npm run test:ui:offline`: built production PWA, separate loopback server with an in-memory fictional API. Active service worker controls the app; the browser network was disabled, not merely an API mocked away. Reload restored remembered sign-in, cached course, exact action and offline draft. Reconnection saved the draft to the fictional API. Mobile Next was clear of bottom navigation; 200% CSS zoom reflowed at 1440px.
- Both new browser scripts pass `node --check`; `git diff --check` passes. There is no configured lint task and no dependency added. Installed dependencies were reused through a workspace junction; the browser was separate from existing user windows.

Test-harness failures during development were corrected (history reset, collapsed outline groups, fixture import hook and asynchronous status waits); final suites pass. The evidence is client/UI behavior against local fixtures, not proof of hosted database transport or authorization.

## Visual evidence

Actual app screenshots were captured before editing, then after the final UI changes, at desktop 1440×1000 and phone 390×844. Full-page captures naturally include fixed navigation at the capture viewport boundary. The before/after landing and introduction images and final answer/large-text views were inspected. Evidence is in ignored `output/minimal-ui/`; Library delivery identifiers are reported separately after upload.

The captured Lesson 1 introduction page height changed from 3,669 to 2,617px on desktop and 4,653 to 3,325px on phone, with the same teaching and required workload. This reflects less repeated context, about 28% less page height in that sample; it is not a measured reduction in learning time or cognitive load.

Reports: `after-report.json` and `offline-report.json`; before report and PNGs remain alongside them. Reproduce the browser checks with an available Playwright install via `UI_QA_PLAYWRIGHT_MODULE`, installed Chrome/Edge via `UI_QA_BROWSER_EXECUTABLE`, and the local Vite URL via `UI_QA_URL` (default 127.0.0.1:5192). The offline test serves the built `dist` itself on 127.0.0.1:5193. Both scripts close their own browser; the offline script also closes its server.

## Not run / acceptance still open

No hosted DB/load tests, live provider calls, account mutations, release or migration. Backend/auth/account-isolation tests were not rerun because that code is unchanged. No new resource/tool verification was needed or claimed. Browser zoom shortcuts, physical iOS/Android and soft-keyboard behavior, screen-reader tasks, installed-device update delivery and a second physical device remain separate. Browser fixtures do not establish learner understanding or all-224-lesson visual acceptance.

Observe Haru finding the next task, explaining the example, answering without coaching and returning after a break. Check help discoverability and comfortable reading on her phone. Keep the previous 53/100 readiness estimate unchanged until those observations and the remaining course gates justify a new score.
