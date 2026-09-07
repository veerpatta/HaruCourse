## Guided practice pilot — 7 September 2026

Implemented for `week1-day1-v1` and available to any lesson whose activity carries the guided contract: `src/PracticeGuide.tsx` renders one open step at a time with the lesson's actions, expected output, the worksheet fields for that step, a labelled synthetic example, word explanations, a way to start and a way to judge enough, plus an optional click-to-load Vimeo segment paired with an immediate action and a written route. Answers and the step position are two optional fields of the existing practice record (schema and bounds in LEARNING-EXPERIENCE-PLAN.md), so they travel through `usePractice` unchanged: local first, debounced upload, revision conflicts, immutable history, backups and creator read-only review. The Learn page names the exact step to reopen. Ticked steps are a navigation aid and are never read as competence. The diagnostic carries none of it. No binding, migration, storage key, polling interval or service-worker rule changed; the video is an external embed loaded only on click and never proxied.

## Planned learning experience architecture — 7 September 2026

[LEARNING-EXPERIENCE-PLAN.md](LEARNING-EXPERIENCE-PLAN.md) defines the milestone the pilot above began. Reuse the shared reader and authoritative lesson/activity/journey model for guided practice and context-specific help. Keep exercises and downloadable outputs in the browser. Editable worksheets need bounded account-scoped drafts integrated with current revision/conflict handling, backup/import/export and immutable submissions; document the schema before implementation. Step-resume state must not change existing section bookmark meaning or infer mastery.

Preserve static-first asset routing and private API/auth cache exclusions. Direct click-to-load YouTube embeds need a written offline route. Begin My work improvements with text and external references; no file-upload storage or server-side AI is added by this plan. Preserve OAuth KV's current role. Monitor bundle growth and recheck actual account usage before claiming free-tier headroom. Existing architecture details below describe shipped behavior; the plan's ledger tracks future implementation.

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

React, TypeScript, and Vite render the installable course PWA. Teaching lives in the authoritative TypeScript sources listed in COURSE-AUTHORING.md; course Markdown is generated. The baseline and 224 lessons across m01–m20 are published, including teaching, examples, exercises, understanding checks and per-lesson work records. Experience refinement remains a separate planned milestone.

The service worker caches public app content. Authentication, API, OAuth consent, and MCP routes bypass the app shell and cache. Offline drafts remain in localStorage. JSON backup import validates data and downloads the previous draft before replacing it.

A Cloudflare Worker serves assets and authorized APIs. D1 stores users, hashed sessions, login rate limits, learner progress, immutable submission revisions, and feedback tied to those revisions. Optimistic revision checks protect against concurrent overwrites. Creator access is enforced server-side and scoped to the course’s single learner, Haru.

The official Workers OAuth provider uses KV for grants and token state. The Streamable HTTP MCP endpoint uses the official MCP SDK and the same authorization/data functions as the app. PKCE S256, explicit consent, bounded request bodies, active-user checks, read/write scopes, token downscoping, and revocation are implemented. No tool accepts arbitrary user identity. AI feedback records its source and cannot mark competency as mastered.

No server-side model calls are made. Design critique requires actual image evidence in the connected AI client; a saved private file reference alone is insufficient. There is no file-upload storage, email service, public registration, or content publishing editor. Practice drafts now save automatically, with local queuing and conflict resolution.

The target remains zero additional cost within provider free allowances. Hosting is live at https://harucourse.raj-39e.workers.dev after explicit CLI deployment authorization; billing-plan visibility remains unavailable. See [setup and release prerequisites](CLOUD-SETUP.md). Local SDK/browser tests do not establish hosted availability, native device installation, or compatibility with the learner’s particular AI account.

Next work: follow PROJECT-PLAN.md and LEARNING-EXPERIENCE-PLAN.md for the shared UI/first-lesson pilot and sequential refinement. Formal scored assessment and remaining AI-client acceptance are not implied complete.
