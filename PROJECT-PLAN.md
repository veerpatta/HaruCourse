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
