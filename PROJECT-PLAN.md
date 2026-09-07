# Current milestone — beginner teaching quality across all lessons, 7 September 2026

The all-course review is [docs/BEGINNER-LESSON-AUDIT.md](docs/BEGINNER-LESSON-AUDIT.md). It records a row for all 224 published lessons and replaces “add a worksheet” as the definition of refinement. The target teaching path is See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue, presented inside Learn → Do → Check → Your work.

Proceed in this order: diagnose adoption of the already-deployed app update and remove conflicting in-app/file save directions; revise `week1-day1-v1` while preserving its field IDs and learner records; observe Haru using it without verbal help; refine the remaining Module 1 lessons; then continue from Module 2 in prerequisite order. Before m08–m11, supply the interactive starters those lessons need without expecting the learner to know HTML before m12. The audit, refinement ledger and PROGRESS.md must agree on each lesson's teaching, functional and release state.

The audit itself is documentation, not proof of learner understanding. All lessons remain published. Do not batch-mark lessons complete and do not infer mastery from worksheet completion, revealed answers, time or confidence.

# Previous milestone — guided learning refinement, 7 September 2026

The active roadmap is [docs/LEARNING-EXPERIENCE-PLAN.md](docs/LEARNING-EXPERIENCE-PLAN.md). The shared practice UI and `week1-day1-v1` are implemented and locally verified (7 September 2026); next is Haru's pilot observation, then refining the existing lessons individually in prerequisite order. Do not batch-rewrite the curriculum. Track every lesson and the next stable ID in the plan ledger, with actual verification/release evidence in PROGRESS.md.

Priorities: editable worksheets, visual step guidance, explicit practice route, contextual help and a verified relevant video plus action where useful. Browser-side activities and modest bounded text saves protect free allowances. File uploads and formal scored assessment remain later separately designed milestones. All 224 lessons are already published; publication does not establish refinement or mastery.

Implementation has not begun in this documentation milestone. Earlier production queues below are historical and are superseded by this current milestone where they describe already-authored modules as future work.

# Practical apprenticeship milestone — 6 September 2026

Implement the approved baseline/30-lesson activity guidance, free workspace setup, optional copyable AI rehearsals, three two-choice project brief packs and the complete module artifact path. Preserve existing teaching, identities, records and bookmarks. Source authorities and future authoring requirements are in docs/COURSE-AUTHORING.md. Validation and release status are recorded in docs/VERIFICATION-APPRENTICESHIP.md and PROGRESS.md.

This milestone does not author m05 onward, implement formal assessment, synchronize external files or deploy a model API. Earlier milestone entries below remain historical.

# Current milestone — minimalist course

- Implement the approved concise lesson format for the baseline and all twelve published lessons.
- Merge Dashboard/Lessons into Learn; add compact My work, expandable Course map and Account utilities.
- Preserve all existing record and bookmark interfaces; explicitly select guided sections.
- Generate baseline and lesson Markdown from shared app/MCP teaching; make this the future authoring standard.
- Verify content/build, local backend and browser persistence before recording completion. No database migration or new module is part of this milestone.
- Release state and actual checks: PROGRESS.md and docs/VERIFICATION-MINIMAL.md.

The earlier milestone below is historical context. Modules m03/m04 were published in parallel and are preserved in this integrated release; continue future authoring from the current blueprint.

# HaruCourse project plan

Updated 6 September 2026. The educational authority is COURSE-REQUIREMENTS.md and the unchanged COURSE-VISION-ORIGINAL.md. The full sequence is COURSE-BLUEPRINT.md; resource research, comparisons, supporting programs and gaps are in RESOURCE-LIBRARY.md. Future agents start at AGENTS.md.

## Approved refinement

Levels → Modules → Lessons; no course deadline, daily requirement or graduation forecast. Two hours is optional session guidance. Preserve legacy IDs and data. m01 is Product Design Foundations; m02 is Evidence to a Testable Design. Continue from account-owned saved lesson/section, with offline caching and revision conflict protection. Cumulative minutes span sessions. Reading is not assessment.

## This milestone

- Map all 17 areas before further lesson writing; include paired free public resources and tool/portfolio/career/book/current-awareness programs.
- Document resource verification separately from authenticated free tool functionality; explicitly retain open advanced research gaps.
- Add D1 learning_positions and authenticated GET/PUT endpoint, isolated per signed-in account; preserve newer server position on stale queued writes.
- Keep practice synchronization separate. Continue from bookmark, latest unfinished practice or first core lesson, with missing lesson/section fallback.
- Update live labels, remove schedule pressure, generate Markdown from the same content used by app/MCP, and provide repeatable agent instructions.
- Run content/build/backend/browser checks, deploy additive migration and Worker, verify test account, commit and push main. See PROGRESS.md for actual results.

## Remaining production sequence

1. Author mapped m03/m04 with diagnostic adaptation and explicit rubric/remediation. Deepen catalog gaps required by those lessons first.
2. Develop m05–m11 and the first full research-led project; validate optional Figma Starter exercises through export.
3. Implement version-tied formal creator assessments, repairs and richer portable progress tracking. Current readiness/text feedback is not a pass.
4. Develop web/systems/delivery modules and project two, then analytics/AI/complex strategy and project three.
5. Complete portfolio/career modules with dated multi-employer India/India-eligible remote evidence. Employment and expertise are not guaranteed by course completion.

## Delivery and operating constraints

Cloudflare Worker serves the installable React app, authenticated API and MCP. D1 stores durable records; local storage caches offline drafts and bookmarks independently. Existing secure sessions and role/assessment rules stay intact. Required learning has no paid access, trials or card requirements. Free accounts are allowed. No paid model API is required. Account billing is not certified by code/deployment success; remain within configured free allowances and do not enable paid services without authorization.

This milestone maps the whole course; it does not finish all lessons, advanced subtopic research, authenticated optional-tool validation or formal assessment software.
