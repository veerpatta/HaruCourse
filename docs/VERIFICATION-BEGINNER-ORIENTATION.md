# Beginner orientation and visual guidance verification — 14 September 2026

This release responds to a beginner smoke test of the live course and applies the resulting orientation accommodations through shared UI used by all 224 published teaching lessons. It preserves the independent diagnostic, every published lesson ID, all 2,866 worksheet field IDs, record version 1, existing answers, completion markers and feedback associations. It does not claim learner observation, mastery or formal assessment.

## Beginner smoke test that set the priorities

Only the isolated `test` identity was used. Haru's account was not opened.

- A random draw opened Module 12 Lesson 11, `m12-l11-v1`, with no prerequisite work. The lesson reported a starting route but did not clearly tell a newcomer how to recover from the missing earlier artifact. The test stopped at 8 of 38 required actions rather than inventing work.
- A second beginner-safe draw completed Module 1 Lesson 3, `week1-day3-v1`, through its explicitly allowed rehearsal route. All 36 required actions completed, the record changed to Practice finished and Ready for review, and the saved record survived reload.
- The smoke test found that lesson rows showed only title and status, useful module descriptions were buried in Course map, lesson entry could land below the introduction, a completed bookmark could remain the proposed next step, optional worksheet fields made a complete lesson look incomplete, route choice and reading status were hidden, long action headings could be visually clipped, internal `m10`-style shorthand appeared in learner copy, and optional AI practice had no direct return to the named course answer.

## Accommodations implemented for every teaching lesson

- Learn now explains each selected module's learning challenge, output, starting material, tools, approximate effort and Bring → Practise → Keep path.
- Every lesson row now previews what the learner will learn, do and keep, its approximate time, current status and whether an earlier module is recommended.
- Every lesson opens at its title with a visible Learn / Do / Keep / Need summary and a semantic four-stage diagram: Learn → Do → Check → Keep. The diagram has text equivalents and does not rely on color or arrows alone.
- Missing direct prerequisites produce an explicit recovery panel with progress in the earlier module, a button to its next unfinished lesson, and an honest rehearsal route using the lesson's supplied example, starter and training notes.
- The ready-made starter and destination choice are explicit in the opening path. Reading is labelled optional support and the course route remains complete if the external page is unavailable.
- Required action totals exclude optional and route-dependent worksheet fields. The worksheet summary reports required and optional counts separately, and Your work lists the exact remaining completion conditions.
- A finished bookmarked lesson no longer remains the next step when required work remains. Long headings wrap; mobile Back/Next controls no longer float over the lesson body. Internal module shorthand is expanded in learner-facing action copy.
- Optional AI practice now has a direct button back to the named saved answer. AI remains optional and outside completion; the diagnostic remains uncoached.

## Local evidence

- `npm.cmd run docs:generate` and `npm.cmd run test:content` passed course coverage, prerequisite order, resource IDs, lesson contracts and generated-document parity.
- `npm.cmd run test:worksheet` passed schema, stable field-ID and progressive-reveal checks.
- `npm.cmd run audit:guided` reported no problems.
- `npm.cmd run test:actions` passed all 224 flows with 2,866 preserved worksheet fields, 7,974 actions and 1,601 saved questions.
- `npm.cmd run test:learning` passed progress, completion, reopening and timer regressions across 221 required lessons.
- Both TypeScript projects and the production Vite build passed. The existing large entry-chunk warning remains.
- `git diff --check` passed. No database migration or record-schema change is present.

## Deployment and hosted evidence

Pending the production deployment and post-deploy test-identity smoke test.

## Boundaries

This is creator/agent QA, not observation of a new learner. Native iOS/Android keyboards, VoiceOver and TalkBack remain outside emulated browser verification. Optional external tools, readings and AI services can change and were not made a requirement. Practice completion remains learner-controlled and is not proof of mastery or impact.
