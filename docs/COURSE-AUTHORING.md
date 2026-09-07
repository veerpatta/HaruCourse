## Beginner teaching contract — 7 September 2026

A lesson refined against `docs/BEGINNER-LESSON-AUDIT.md` adds these optional members to its `src/apprenticeship.ts` entry, on top of the guided contract below. `npm run test:content` enforces every rule named here.

| Member | Shape | Rules |
|---|---|---|
| `guide[i].demo` | `scenario`, `beats[]` of `{label, text}`, `wrongTurn`, `tradeoff`, `uncertainty` | The "See it" demonstration, rendered in the visible path rather than a disclosure. At least three beats. The scenario must say it is made up. Show the reasoning and the turn the author nearly took wrongly, never a finished answer alone |
| `guide[i].supported` | `material`, `question`, `options[]`, `then` | "Try it with help": one small supplied case. Exactly one option is `correct`; every option, especially a plausible wrong one, explains itself. Feedback appears only after the learner answers |
| `guide[i].reveal` | `{first, group, count?, addLabel, note}` | Repeated rows arrive `group` at a time. A field already holding an answer always stays visible, so a saved worksheet reopens intact. Fields after `count` always show |
| `checks` | `ActiveCheck[]` of `question`, `options[]`, `repair`, `recheck` | "Check the reason" and "Improve your work". The learner answers before any feedback; the answer is held in component state only and is never saved, marked or scored. `repair` must send one specific change back into the learner's own artefact, and the lesson should carry a field where that change is recorded |
| `saveRoute` | `{auto, external, creator, next}` | "Save and continue" for the route the lesson actually recommends. When present, the generic local-file save list is suppressed so the two cannot contradict each other; those steps stay inside the "work in a file instead" disclosure |

Option feedback must explain rather than restate the verdict the interface already shows; the checker rejects feedback that opens with "Yes", "No", "Not quite" and similar. The diagnostic carries none of these members. Worksheet field IDs are record keys: add freely, rename never — `npm run test:worksheet` pins the IDs shipped with a lesson.

## Guided practice contract — 7 September 2026

A refined lesson adds four optional members to its entry in `src/apprenticeship.ts`, which `withApprenticeship` passes through to the shared `Apprenticeship` type in `src/teaching.ts`: `route` (the recommended practice destination and the local-file alternative), `worksheet` (sections of fields with `id`, `label`, `kind` short/long/choice, optional `hint` and `example`), `guide` (one entry per lesson step: `expect`, the `fields` filled in that step, optional `example`, `terms`, `start`, `enough` and `video`), and `video` (`id` of a row in the catalog's video table plus the lesson's own `then` and `written`). The per-ID video selection lives in `src/reading.ts` beside the reading selections; the catalog row holds the evidence. Field ids are record keys: stable once shipped, renamed never. Every example must say it is made up. `npm run test:content` enforces alignment, uniqueness, bounds, labelling and the diagnostic's exclusion; the generator renders the same material into the lesson Markdown, and the MCP lesson object carries it unchanged. `src/PracticeGuide.tsx` renders it for any lesson that carries it; a lesson without it keeps the plain step list.

## Guided experience authoring refinement — 7 September 2026

Apply [LEARNING-EXPERIENCE-PLAN.md](LEARNING-EXPERIENCE-PLAN.md) one lesson at a time, starting with `week1-day1-v1`. The plan owns improvement scope, cost constraints, delivery order and refinement ledger; this document remains the content/authority contract. Add clear practice destinations, manageable actions, adequate output examples, contextual help and original written equivalents for optional verified videos. Prefer editable ordinary-language worksheets over requiring Markdown syntax or handwritten SVG in introductory design work. Keep the diagnostic uncoached and AI optional, text-only and paired with non-AI work.

New interaction/worksheet data must have one shared authority and additive compatible persistence when needed, including backups and account isolation. Do not add state as an undocumented second progress source. Preserve lesson IDs, record versions, section IDs and feedback associations. Shared UI improvement does not mark all lessons individually refined. The document generator inserts a plan reference into generated course views; generated teaching remains derived from the same lesson sources. Run existing content/build checks and meaningful persistence/browser checks when behavior changes.

## Integrated publication status — 7 September 2026

The original 30 activities are individually authored in src/apprenticeship.ts. Later published modules retain their authoritative teaching and derive their workspace template, hints, adequate evidence and handoff from those tasks, criteria and free routes. All 224 published lessons now expose the common workspace contract. The module catalog alone determines publication status; never hard-code m05 onward as planned. This integration does not certify every free hosted tool or learner assessment.

## Practical apprenticeship authority — 6 September 2026

This refinement supersedes earlier instructions to leave the original lessons unchanged. Keep original IDs and competencies; apply concrete setup and task support to all published lessons. `src/apprenticeship.ts` is the authored activity authority, enriched into shared Lesson objects by `withApprenticeship`; `src/journey.ts` owns workspace instructions, project briefs and module artifact handoffs. The baseline imports only its independent workspace inventory. The shared optional `apprenticeship` type is in `src/teaching.ts`; all currently published lessons must populate it.

Every activity names its mission, tools, setup, copyable starter, two progressive hints, adequate evidence, output filename, save steps and next use. The diagnostic has no hints or AI support. Activities must be individually chosen for the competency, not generated from a repeating exercise pattern. Preserve the original teaching, outputs, criteria and repairs; templates assist those tasks rather than replace them.

When AI helps, provide lesson context, an explicit learner-input placeholder, a bounded request, a response format, a learner-owned revision and an equivalent non-AI activity. Use simulations only as simulations. No manufactured interviews, quotes or outcomes. Keep AI optional and separate from assessed completion. Teach basic free visual-tool controls before use; keep hosted workflows optional until tested through export.

`WORKSPACE-GUIDE.md` and `PORTFOLIO-PATH.md` are generated from journey content. All lesson Markdown includes the same activity material as the app and MCP. Run docs:generate, test:content and build after edits. Check templates, copy fallback, keyboard access, narrow layouts and cached offline access. Preserve storage and bookmarks. Do not add an assessment schema, external synchronization or AI API as part of lesson authoring.

# Course authoring contract

## Beginner teaching sequence — 7 September 2026

Use `BEGINNER-LESSON-AUDIT.md` as the row-by-row implementation register. Every refined teaching lesson uses the following learning sequence inside the existing Learn → Do → Check → Your work reader:

1. **See it:** state one observable outcome and demonstrate one complete, labelled reasoning chain. Show the uncertainty, trade-off and a likely wrong turn, not only a polished result.
2. **Try it with help:** give a small supplied case. Ask for one decision at a time, provide contextual terms and let the learner compare their reason with explanatory feedback.
3. **Try it yourself:** apply the same reasoning to the learner's artefact. Reveal repeated rows progressively. Do not use a large worksheet as a substitute for instruction.
4. **Check the reason:** collect a choice or short explanation before showing the answer. Diagnose the likely misconception and distinguish a plausible answer from an evidenced one.
5. **Improve your work:** direct one bounded repair tied to the learner's answer and name what to show again. This is formative feedback, not a stored score.
6. **Save and continue:** state exactly what the app saved, what an external file/reference means, what the reviewer can see and the next action on return. Match these instructions to the route the learner chose.

Every new idea requested by the task must be taught visibly or point to a prerequisite where the learner practised it. Keep essential definitions and one worked demonstration in the primary path; optional details can deepen them. Avoid assuming that reading a linked page supplies a different concept.

When a task needs a tool, begin from a known screen or supplied starter. Name the controls, the expected visible result and recovery from at least one common failure. Before m12, do not require the learner to author HTML, CSS, JavaScript or SVG. A provided playground may demonstrate behaviour, while paper remains valid only for what paper can actually test.

When a task needs a participant, team, engineer, live build, public portfolio or prior artefact, define the readiness condition and the honest no-access output. Supplied cases and rehearsals must be labelled. They can demonstrate method and reasoning; they cannot become participant findings, business impact or shipped work.

Preserve every shipped worksheet field ID and saved answer. Prefer fewer fields and progressive reveal. A lesson is not marked refined until its specific audit row has been reviewed, content checks pass and relevant learner-facing behavior has been inspected. Shared UI, generated Markdown or a filled worksheet cannot close multiple audit rows by itself.

Mobile layouts keep sections reachable while scrolling, use touch targets of at least 44px, and leave Back/Next clear of active timers and bottom navigation. Keep idle timers in normal flow. Verify 320px and 390px layouts, long references, focus transitions and desktop. Browser focus emulation is not proof of native soft-keyboard behavior.

Read root AGENTS.md first. All lessons belong to the mapped self-paced sequence. No calendar obligations or inferred assessed completion.

## Authority and synchronization

| Content | Authority | Derived representations and update procedure |
|---|---|---|
| Original intent | COURSE-VISION-ORIGINAL.md | Immutable; refinements only in requirements |
| Decisions and coverage requirements | COURSE-REQUIREMENTS.md | Project plan links to these; do not duplicate the matrix |
| Module order, prerequisites, effort, resource pair | src/modules.ts | App imports it; COURSE-BLUEPRINT.md generated by npm run docs:generate |
| Resource evidence and restrictions | RESOURCE-LIBRARY.md | Module/lesson IDs reference it; no second independent catalog |
| Published teaching | src/lessons.ts, src/week2.ts and src/module3.ts through src/module20.ts; baseline src/course.ts; shared model src/teaching.ts | App/MCP import these; WEEK-01.md, WEEK-02.md, MODULE-03.md through MODULE-20.md and BASELINE-DIAGNOSTIC.md are generated views. A new module adds src/moduleN.ts, an import and a spread in src/lessons.ts (through adaptPublished only for the legacy-shape modules m03–m07) and a status change in src/modules.ts; the document generator finds it from there |
| Roadmap and release evidence | PROJECT-PLAN.md / PROGRESS.md | Plan records work order; progress records what actually shipped |
| Learner practice and feedback | D1 progress/submission/feedback tables | Existing local draft cache is a recovery/sync copy, not a competing content source. Worksheet answers and the guided-step position are optional fields of the same record (see LEARNING-EXPERIENCE-PLAN.md), never a separate store |
| Guided worksheet, steps and video pairing | `src/apprenticeship.ts` (`route`, `worksheet`, `guide`, `video`) with video selections in `src/reading.ts` | Rendered by `src/PracticeGuide.tsx`, generated into the lesson Markdown and exposed through the MCP lesson object; the catalog's video table records access evidence |
| Reading position | D1 learning_positions | Account-scoped offline queue; server revision wins conflicts; never merged with practice drafts |

Run npm.cmd run docs:generate then npm.cmd run test:content. The checker verifies all 17 areas, prerequisite order, resource references and exact generated-document consistency. Legacy week/day data fields are compatibility metadata only; do not present them as a schedule.

## Repeatable lesson contract

Every new lesson must explicitly contain:

1. Stable lesson ID, module, level, optional/core flag, competency areas and approved resource IDs.
2. Observable objective and prerequisites, including the artifact brought forward. A prerequisite is guidance for meaningful practice, not a calendar lock.
3. Concise concept bullets and a one-sentence purpose. Keep misconception/counterexample, worked example and deeper reasoning available in expandable details; connected prose is optional detail, never the default lesson body.
4. A practical task with context, constraints, exact steps, optional effort estimates and an equivalent free tool path.
5. Pause points after meaningful steps, saved artifact and next action for resuming. Allow splitting and revisiting without penalties.
6. Expected output and understanding checks with explanatory answers, not recall-only quizzes.
7. Observable rubric criteria: 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. Explain what adequate evidence looks like.
8. Remediation tied to missing criteria, a bounded repair task and what to show at recheck.
9. Portfolio contribution, including whether this is only practice. Distinguish assumptions, synthetic data, real research and measured outcomes.
10. Approved resources with exact assigned section, purpose, estimated reading effort, verification date, account/free limitations and fallback. Required exercises may not depend on candidate tools.

The twelve original published lessons now include concise instructions and lesson-specific repair guidance. They remain introductory; formal scored remediation software remains pending.

The twelve legacy lessons in m01/m02 have teaching, examples, practice, checks and criteria, but are introductory and carry criterion names only. The 212 lessons in m03 through m20 add the optional contract fields: module, level, areas, objective, the artifact brought forward, the misconception, the free tool path, assigned resources with section, purpose, effort, limits and fallback, and criteria carrying all four score descriptions, a bounded repair and what to show at recheck. Keep the new fields optional so earlier lessons and their generated documents stay unchanged; npm run test:content enforces the contract wherever `module` is set, including that the flat rubric still lists exactly the criterion names.

m03 through m07 are authored in the legacy contract shape and reach the app through adaptPublished in src/teaching.ts, which derives the concise teach line, prerequisite, outputs, repairs and step instructions from the fields those lessons already carry. New modules from m08 onward are authored directly in the Learn → Do → Check → Your work shape described below, so the adapter stays a bridge for existing content rather than the authoring standard.

One contract rule the checker cannot enforce, so enforce it by hand: an assigned resource's `section` must stay inside the selection its RESOURCE-LIBRARY.md row records. The checker verifies the resource ID exists and that the contract fields are non-empty; it has no way to notice a lesson citing a chapter nobody verified. Where a lesson needs more of a source than the row covers, retrieve the additional part, widen the row and record the retrieval date there — do not widen the lesson alone.

`node scripts/section-audit.mjs [moduleId...]` prints every assigned section beside its row's recorded selection so that judgement can actually be made; it deliberately does not fail a build, because the rule is about meaning. Run it after authoring a module, not only at the end of a batch: the sections that drifted furthest in this repository were written in batches where nobody re-read the row.

Written criteria and remediation are still not an assessment system. Nothing in the app or the MCP service computes, stores or returns a score; a score exists only in a reviewer's judgement of submitted work. Do not describe formal scored assessment or a repair workflow as implemented.


## Definition of ready to publish

Review alignment with the module objective and all listed prerequisites. Reopen the exact resource section and verify changed restrictions. For a tool-specific task actually execute the free workflow through output/export, or keep it optional and supply the account-independent path. Where an assigned reading recommends a paid platform for its own method — as the tree-testing and card-sorting articles do — the required exercise is the manual route that tests the same thing, and the lesson says so rather than leaving the learner to discover the price. Where an assigned method produces numbers, the lesson states what the learner's realistic sample can support: counts of people, not rates, similarity matrices or comparisons against benchmarks drawn from far larger studies. No invented research, copyrighted book copies, paid features or card-required trials. Test narrow-screen reading/navigation and stable section fallback. Preserve IDs and existing saved records. Generate Markdown and run content/build checks. For persistence changes also test first visit, read-only save, reload, second device, offline reconnection, stale revisions and creator/learner isolation. Record what was tested and remaining gaps in PROGRESS.md.


## Minimal teaching and interface standard

- Preserve the existing cream surfaces, green accents and serif headings. Reduce duplication and competing panels; do not reduce readability to fit more text.
- Use Learn, Course map and My work. Account holds connections, lesson-labelled backups and install help.
- Use Learn → Do → Check → Your work for all published teaching, including the diagnostic. Show one section at a time; never lock navigation behind time or reading.
- Lead with one observable outcome and explicit prerequisite artifacts. Write one action per bullet, name tools/materials and quantities, and put the output checklist before numbered practice steps.
- Keep essential concept and action bullets under 240 characters. This is a guardrail, not a target; edit individually for clarity instead of mechanically splitting sentences.
- Put longer reasoning, worked examples, optional effort and portfolio context in labelled details. Keep consent, source labels and constraints visible beside the action where they matter.
- The baseline tests existing reasoning: show the brief and tasks, not a model solution or preparatory teaching.
- Give specific repairs for likely missing evidence, then ask to show the changed artifact and criterion at recheck. Do not imply that this implements formal assessment.
- Author structured lists once. Derive legacy MCP step text and deliverable strings with withLegacyText; do not maintain a second prose version of instructions.
- src/reading.ts records assigned selections of approved IDs. RESOURCE-LIBRARY.md remains the authority for access evidence and restrictions. Recheck changed reading pages and record actual public-access evidence separately from tool tests.
- Preserve section IDs learn, practice-plan, check and practice. Explicit selection updates the bookmark; scrolling does not. Baseline uses its existing record and does not replace the published-lesson bookmark.
- Account backup exports use {lessonId, record}; import must match the selected lesson. Accept older unlabelled record backups for baseline, or for a lesson whose existing backup/conflict filename matches its stable ID. Download the prior draft before replacement; creator controls remain read-only.

Publication checks: generate all Markdown views, run test:content and build, inspect desktop/mobile and keyboard flows, and test reload/offline/conflict/account isolation when continuation behavior changes. Keep historical verification intact and add a dated current record.
