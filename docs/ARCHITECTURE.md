## Minimal reader update — 6 September 2026

- Learn and My work share LearningStudio and a single LessonReader, including the baseline; Course map expands levels/modules. Account contains utilities.
- Lessons retain published IDs and legacy MCP fields. Structured prerequisites, outputs, instructions, explanations and repairs live in the teaching sources; withLegacyText derives compatibility text.
- All teaching Markdown, including the baseline, is generated from those sources. Reading selections reference RESOURCE-LIBRARY.md IDs.
- The reader retains mounted draft state across hidden sections. Explicit section selection replaces scroll tracking and maps Learn/Do/Check/Your work to the existing server IDs.
- Published-lesson continuation still uses bookmark → latest unfinished practice → first core. Baseline browsing leaves that bookmark intact. Creator bookmarks belong to the creator; learner records remain read-only to creators.
- My work includes cloud records and the signed-in learner’s pending local drafts. Local creator caches never masquerade as learner summaries.
- Backups now carry {lessonId, record}; mismatched imports are rejected. Older plain RecordData imports support baseline and lesson backups whose filenames match the selected stable ID. No D1 migration or record-version change.
- The implementation does not add formal assessment. See VERIFICATION-MINIMAL.md for actual checks and release state.

## Self-paced update — 6 September 2026

The current content authority/synchronization table is in COURSE-AUTHORING.md. Modules are defined once in src/modules.ts and rendered by the app; the blueprint and legacy WEEK markdown views are generated. The course has no deadline.

GET/PUT /api/learning-position is authenticated and always uses the signed-in user ID, including creators. D1 learning_positions stores lesson_id, section_id, revision and server updated_at. PUT uses expectedRevision compare-and-swap; stale writes receive 409 with current position. The independent harucourse:position:<userId> offline queue retains a pending location and server base revision. Conflict keeps the server location; practice drafts retain their separate conflict workflow. Stable sections are learn, practice-plan, check and practice. Bookmark navigation never changes submission or feedback data. Cumulative practice minutes accept nonnegative safe integers.

# Application architecture

React, TypeScript, and Vite render the installable course PWA. Course material lives in `src/course.ts` and the root planning Markdown files. The baseline and Weeks 1–2 are published. The published lessons include teaching, examples, exercises, understanding checks, and per-lesson work records; later weeks remain planned.

The service worker caches public app content. Authentication, API, OAuth consent, and MCP routes bypass the app shell and cache. Offline drafts remain in localStorage. JSON backup import validates data and downloads the previous draft before replacing it.

A Cloudflare Worker serves assets and authorized APIs. D1 stores users, hashed sessions, login rate limits, learner progress, immutable submission revisions, and feedback tied to those revisions. Optimistic revision checks protect against concurrent overwrites. Creator access is enforced server-side and scoped to the course’s single learner, Haru.

The official Workers OAuth provider uses KV for grants and token state. The Streamable HTTP MCP endpoint uses the official MCP SDK and the same authorization/data functions as the app. PKCE S256, explicit consent, bounded request bodies, active-user checks, read/write scopes, token downscoping, and revocation are implemented. No tool accepts arbitrary user identity. AI feedback records its source and cannot mark competency as mastered.

No server-side model calls are made. Design critique requires actual image evidence in the connected AI client; a saved private file reference alone is insufficient. There is no file-upload storage, email service, public registration, or content publishing editor. Practice drafts now save automatically, with local queuing and conflict resolution.

The target remains zero additional cost within provider free allowances. Hosting is live at https://harucourse.raj-39e.workers.dev after explicit CLI deployment authorization; billing-plan visibility remains unavailable. See [setup and release prerequisites](CLOUD-SETUP.md). Local SDK/browser tests do not establish hosted availability, native device installation, or compatibility with the learner’s particular AI account.

Next work: follow PROJECT-PLAN.md for mapped m03/m04 authoring, deeper assessment and remaining AI-client acceptance.
