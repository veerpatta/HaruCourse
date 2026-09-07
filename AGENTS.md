## Latest agreed plan — 7 September 2026

Read [docs/LEARNING-EXPERIENCE-PLAN.md](docs/LEARNING-EXPERIENCE-PLAN.md) after the authorities listed below. Implement the agreed guided practice, in-app worksheets, contextual help, optional verified video-action pairs and clearer work/resume flow one lesson at a time. Start with shared UI and `week1-day1-v1`; preserve the independent baseline. Keep browser-side exercises, bounded cloud saves and external video/file links within existing free allowances. Uploads, paid services and formal scored assessment are separate deferred work. Track refinement separately from publication and learner progress. This planning update does not implement features. All 224 teaching lessons are already published; refine them rather than treating later modules as unauthored.

## Practical apprenticeship refinement — 6 September 2026

Use the activity authority in src/apprenticeship.ts and journey authority in src/journey.ts alongside the existing teaching. Every published lesson needs concrete workspace setup, a starter, hints, save instructions and an artifact handoff; the diagnostic gets no coaching or AI. AI rehearsals are optional, text-only and paired with a non-AI route. Keep future modules planned until authored. Generate workspace and portfolio documents with the lesson documents; see docs/COURSE-AUTHORING.md.

## Latest design instruction — 6 September 2026

Keep the established cream/green/serif style. Use concise teaching and a guided Learn → Do → Check → Your work reader for existing and future lessons. Show exact actions and expected outputs; put deeper explanation in optional details. Main navigation is Learn, Course map and My work; Account holds utilities. Follow docs/COURSE-AUTHORING.md for the shared content model and generated baseline/lesson documents. Preserve original vision, IDs, records and bookmarks.

# HaruCourse agent instructions

Before authoring or changing behavior, read in order:
1. COURSE-VISION-ORIGINAL.md (preserved source; never rewrite it).
2. COURSE-REQUIREMENTS.md, especially the latest agreed refinements and 17-area matrix.
3. COURSE-BLUEPRINT.md and src/modules.ts (complete sequence and prerequisites).
4. RESOURCE-LIBRARY.md (approved IDs, free restrictions, verification scope and open research).
5. PROJECT-PLAN.md, PROGRESS.md and docs/COURSE-AUTHORING.md.

Explicit user refinements override earlier scheduling text. Use Levels → Modules → Lessons, no deadlines; two hours is optional session guidance. Preserve all published lesson IDs, record versions, local-storage keys and feedback associations. Never infer mastery from reading, time or readiness. Creator browsing must not change learner progress or bookmark.

Follow the full lesson contract and authority table in docs/COURSE-AUTHORING.md. Do not expand lessons outside the mapped sequence or claim planned modules are published. Verify changing links and cost restrictions at authoring/release. Public documentation access is not proof that a free tool workflow was tested. No required trials, cards, paid features, paid AI or pirated books. Use the approved free alternative when an optional tool is unavailable. Never fabricate participants, research or impact.

Run npm.cmd run docs:generate after content edits, npm.cmd run test:content, npm.cmd run build, and meaningful persistence tests for backend changes. Test offline, reload, conflicts and account isolation whenever synchronization changes. Use the test account for hosted write QA; preserve Haru's records. Secrets stay in ignored files/Cloudflare bindings, never tracked docs or logs. Report actual checks, unresolved gaps and release state honestly. Do not call the complete course authored or formal assessment implemented until that is true.
