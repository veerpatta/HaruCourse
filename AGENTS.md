## Current standard — small actions and honest progress, 12 September 2026

The current release refines only Module 1 Lesson 1 (week1-day1-v1) into one small action at a time, preserving all 36 worksheet fields and the full workload. All 224 teaching lessons are published; the remaining 223 have not been reviewed against this new action-by-action standard. Shared tracking improvements do not establish teaching refinement or learner validation.

Follow [the action and tracking contract](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Required work, practice finished, recorded time, creator feedback and mastery are distinct. Automatic time counts focused course activity and pauses outside the course or after five minutes without interaction. External study time is added manually. Time and navigation never finish practice.

Keep Learn → Do → Check → Your work and the existing cream/green/serif style. Show the exact action, destination and sufficient output beside its answer control; keep essential teaching visible. Present supported examples before independent work, collect a reason before feedback, and let the learner repair the relevant saved answer beside it. Save the exact action and formative Check responses for return; no score is calculated.

Preserve IDs, record version 1, storage keys, old answers and feedback revisions. Observe Haru completing and resuming Lesson 1 without coaching before redesigning another lesson. Her observed use is still pending. The original vision stays immutable. Dated historical sections below describe earlier states and do not override this current standard.

## Beginner teaching implementation — 7 September 2026

`week1-day1-v1` is revised against the audit and is the reference for the pattern; see the beginner teaching contract in docs/COURSE-AUTHORING.md for the `demo`, `supported`, `reveal`, `checks` and `saveRoute` members and the rules the content checker enforces. Update delivery is fixed (the worker answers `SKIP_WAITING`; the notice carries an Update now button that waits for unsaved drafts), but the live update swap still needs one confirmation in a real browser. Do not refine the next lesson before Haru has been observed using Day 1 without coaching; record what she does, not what she should do.

## Guided practice implementation — 7 September 2026

The shared guided-practice UI (`src/PracticeGuide.tsx`) and Module 1 worksheets are implemented. The all-course audit has reopened their beginner teaching review: worksheet-enabled does not mean teaching-refined or learner-validated. Follow the current audit and ledger, starting again with `week1-day1-v1`. Worksheet field ids are record keys and must never be renamed. Verify a video's playback or publisher subtitle track before assigning it; never invent timestamps.

## Latest agreed plan — 7 September 2026

Read [docs/LEARNING-EXPERIENCE-PLAN.md](docs/LEARNING-EXPERIENCE-PLAN.md) after the authorities listed below. Implement the agreed guided practice, in-app worksheets, contextual help, optional verified video-action pairs and clearer work/resume flow one lesson at a time. Start with shared UI and `week1-day1-v1`; preserve the independent baseline. Keep browser-side exercises, bounded cloud saves and external video/file links within existing free allowances. Uploads, paid services and formal scored assessment are separate deferred work. Track refinement separately from publication and learner progress. All 224 teaching lessons are already published; refine them rather than treating later modules as unauthored.

## Practical apprenticeship refinement — 6 September 2026

Use the activity authority in src/apprenticeship.ts and journey authority in src/journey.ts alongside the existing teaching. Every published lesson needs concrete workspace setup, a starter, hints, save instructions and an artifact handoff; the diagnostic gets no coaching or AI. AI rehearsals are optional, text-only and paired with a non-AI route. Keep future modules planned until authored. Generate workspace and portfolio documents with the lesson documents; see docs/COURSE-AUTHORING.md.

## Latest design instruction — 6 September 2026

Keep the established cream/green/serif style. Use concise teaching and a guided Learn → Do → Check → Your work reader for existing and future lessons. Show exact actions and expected outputs; put deeper explanation in optional details. Main navigation is Learn, Course map and My work; Account holds utilities. Follow docs/COURSE-AUTHORING.md for the shared content model and generated baseline/lesson documents. Preserve original vision, IDs, records and bookmarks.

# HaruCourse agent instructions

## Beginner teaching audit — 7 September 2026

Read `docs/BEGINNER-LESSON-AUDIT.md` before refining any lesson. It is the all-224-lesson gap register and the current implementation baseline. A refined lesson must teach through **See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue**, while the interface keeps Learn → Do → Check → Your work. Do not count a worksheet or shared component as completed teaching. Preserve shipped worksheet field IDs. Keep the learner's required work small enough to understand, reveal repeated rows progressively, make checks collect a reason before feedback, and make save/review instructions match the chosen route.

Do not assume access to participants, a team, an engineer, a working prototype or prior artifact. Provide an honest practice route that preserves the competency and labels supplied or simulated material. Tool lessons need a known starting screen or downloadable starter, exact controls, expected visible result and recovery from a common failure. Fix and validate lessons one at a time; update the audit row, refinement ledger and PROGRESS.md with actual evidence. Haru's observed use remains separate from agent or creator QA.

Before authoring or changing behavior, read in order:
1. COURSE-VISION-ORIGINAL.md (preserved source; never rewrite it).
2. COURSE-REQUIREMENTS.md, especially the latest agreed refinements and 17-area matrix.
3. COURSE-BLUEPRINT.md and src/modules.ts (complete sequence and prerequisites).
4. RESOURCE-LIBRARY.md (approved IDs, free restrictions, verification scope and open research).
5. PROJECT-PLAN.md, PROGRESS.md, docs/BEGINNER-LESSON-AUDIT.md and docs/COURSE-AUTHORING.md.

Explicit user refinements override earlier scheduling text. Use Levels → Modules → Lessons, no deadlines; two hours is optional session guidance. Preserve all published lesson IDs, record versions, local-storage keys and feedback associations. Never infer mastery from reading, time or readiness. Creator browsing must not change learner progress or bookmark.

Follow the full lesson contract and authority table in docs/COURSE-AUTHORING.md. Do not expand lessons outside the mapped sequence or claim planned modules are published. Verify changing links and cost restrictions at authoring/release. Public documentation access is not proof that a free tool workflow was tested. No required trials, cards, paid features, paid AI or pirated books. Use the approved free alternative when an optional tool is unavailable. Never fabricate participants, research or impact.

Run npm.cmd run docs:generate after content edits, npm.cmd run test:content, npm.cmd run build, and meaningful persistence tests for backend changes. Test offline, reload, conflicts and account isolation whenever synchronization changes. Use the test account for hosted write QA; preserve Haru's records. Secrets stay in ignored files/Cloudflare bindings, never tracked docs or logs. Report actual checks, unresolved gaps and release state honestly. Do not call the complete course authored or formal assessment implemented until that is true.
