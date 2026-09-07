# Guided learning experience plan

## All-course beginner audit and teaching direction — 7 September 2026

The creator requested a beginner-perspective review of the complete course after the Day 1 pilot still felt incomplete. [BEGINNER-LESSON-AUDIT.md](BEGINNER-LESSON-AUDIT.md) now records all 224 published lessons, module-level gaps and the specific revision focus for every stable ID. Its finding is that worksheets improve practice delivery but do not by themselves teach the reasoning needed for professional-quality assignments.

The refined lesson pattern is **See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue**. Keep the app's Learn → Do → Check → Your work sections. Put one essential demonstration in the visible path, collect a learner response before explanatory feedback, and tie one repair to the learner's own artefact. Tool, participant, team and prior-artifact dependencies need explicit readiness and no-access routes. Simulations remain labelled practice.

The next work is: fix update adoption and conflicting save instructions; revise Day 1 teaching without renaming its worksheet fields; observe Haru; then re-review and refine the rest of Module 1 before continuing from Module 2. “Worksheet implemented”, “teaching refined”, “functionally verified”, “released” and “validated with Haru” are separate states.

Approved 7 September 2026. Status: the shared guided-practice UI and Module 1 worksheets are implemented and functionally verified as recorded in the ledger. Their beginner teaching review is open under the all-course audit, beginning again with `week1-day1-v1`. This plan refines the existing 224 lessons; it does not reset the curriculum or learner progress.

## Worksheet and step state (implemented 7 September 2026)

One authority, no second progress source: worksheet answers and the guided-step position live inside the existing per-lesson practice record (`shared/record.ts`), so they use the same local-first draft, 800 ms debounced upload, revision compare-and-swap, 409 conflict choice, immutable `submission_history` rows, feedback-by-revision, backup download/import and creator read-only rules as notes. No D1 column, migration, storage key or record version changed.

| Field | Shape and bound | Meaning |
|---|---|---|
| `worksheet` (optional) | Object keyed by field id `^[a-z0-9][a-z0-9-]{0,39}$`; at most 40 fields, 2,000 characters each, 24,000 in all | Answers to the fields the lesson's activity authority declares in `src/apprenticeship.ts`. An answer whose field a later content revision no longer declares is kept, not dropped. Empty answers are removed from the object |
| `guide` (optional) | `{ step?: 1–99, done: number[] ≤ 99 }`, strict | `step` is the step to reopen on return; `done` is the steps ticked. A navigation aid only: nothing reads it as competence, completion, mastery or a score |

Compatibility: both fields are optional, so every record and backup written before them parses to exactly itself; a record written by an older client simply lacks them. Account isolation is unchanged (keys and rows are per user; creators cannot write). `Ready for review` now accepts a filled worksheet in place of a work reference or notes; an empty record still cannot be marked ready. The MCP `save_practice` description tells AI clients to preserve both fields. Export review and the downloadable worksheet copy render the answers as plain Markdown in the browser; nothing is uploaded or generated server-side.

Cost profile: every save is still one bounded text row, written only after typing pauses or on an explicit tick, so a lesson's worksheet costs the same order of D1 writes as its notes did. Videos are external links or click-to-load Vimeo embeds; nothing is proxied. The build after this pilot is about 2.33 MB uncompressed (677 kB gzip), roughly 26 kB more than the previous release; per-module splitting remains the unfixed size work.

## Intended outcome

Haru should be able to open a lesson, understand its purpose, start the exercise, find the right practice space, save reviewable work, identify one improvement and resume later without verbal help. Preserve her visual-design strengths while explaining unfamiliar digital tools in ordinary language.

Keep the cream surfaces, green accents, serif headings and Learn / Course map / My work navigation. Account contains utilities. Keep Learn → Do → Check → Your work and the stable underlying section IDs. No deadlines, streak penalties, compulsory session lengths or mastery inferred from clicks, time, confidence or reading.

## Agreed improvements

| Area | Planned experience | Boundary |
|---|---|---|
| Guided practice | One manageable action with visible expected output, optional example, help and a clear next action; allow free step navigation and resume | A checked step is a navigation aid, not competence |
| Editable worksheets | Fill observations, questions, decisions and reflections inside the app; clear save state and downloadable copy | Design account-owned persistence before implementation; preserve existing drafts, exports and conflicts |
| Where to practice | One recommended route per lesson, explicit setup, starter, exact controls, output and save/handoff; alternatives underneath | Early design lessons must not require Markdown syntax or handwritten SVG |
| Video plus action | One selected video or segment when useful, language/captions, timestamps, what to notice and immediate practice | Optional written equivalent; no autoplay, endless playlists or hosted video dependency |
| Interactive experiments | Browser-based spacing/grouping, responsive cards, form errors, interface comparison and question rewriting; reuse the contrast calculator | Choose only experiments that teach the lesson competency; keyboard/button alternatives to dragging |
| Contextual help | Explain a word, find a tool, start an attempt or judge adequate evidence; authored hints and annotated screenshots | Diagnostic gets no coaching, worked solution or AI; AI rehearsals remain optional and text-only |
| Examples and independence | Compare unfinished, adequate and stronger work with reasons; progress from guided example to variation to independent challenge | Label synthetic examples; never present sample observations as Haru's research |
| My work and portfolio | Reviewable work, original/revision, feedback, next action and case-study contribution | Begin with worksheets and links; uploads and formal scored review are separate deferred milestones |
| Return and accessibility | Continue the specific unfinished action, needed work beside it, concise primary screen, optional deeper explanations | Preserve full map, all published content, bookmarks and creator/learner isolation |

Optional English/Hindi explanations are a candidate to validate with Haru, not an approved full-course translation. Retain tool labels in English where needed to match the actual interface.

## Practice routes

| Skill | Recommended direction |
|---|---|
| Product thinking | In-app brief and decision worksheet |
| Research planning/synthesis | In-app notes, source labels and observation grouping; real consenting participants where evidence is required |
| Flows/wireframes | Paper starter or optional tested visual-tool walkthrough |
| UI/components | Guided Figma route only after the free account exercise is tested through export; keep an account-independent alternative |
| Web/responsive behavior | Bounded browser playground and downloadable local starter, introduced at mapped web prerequisites |
| Usability testing | Real participant with paper or working prototype; self-rehearsal only prepares materials |

Do not require another account merely to write notes. A saved file path remains a reference, not an upload or cross-device file synchronization. Label links, local references and any future uploaded files distinctly.

## Free-tier implementation constraints

Target zero additional Cloudflare cost within existing free allowances. Current configuration uses Workers Static Assets, Workers APIs, D1 and OAuth KV. No R2 upload binding or server-side model service is configured. Configuration does not prove the live account plan or remaining allowance.

- Run interactive exercises and document downloads in the browser where practical. Avoid server work for each drag, slider move, keystroke or video event.
- Save worksheet drafts locally first; use bounded debounced or explicit cloud saves, save only meaningful changes, and avoid new background polling. Integrate with existing account-scoped revision/conflict behavior.
- Use YouTube links or click-to-load embeds directly. Do not proxy, download or self-host third-party videos. Provide original written instructions offline; videos require connectivity.
- Store bounded text and work references in D1. Preserve immutable submitted versions. Do not place image/video bytes or base64 attachments in practice records.
- Keep portfolio files in the learner's existing storage and link only intended reviewable material. File uploads, server-generated media, video hosting, live collaboration and built-in AI inference require a separate usage/cost design; they are not needed for the first release.
- Preserve static-first routing, API/auth cache exclusions and OAuth KV's existing purpose. Do not add a new paid service or change a billing plan as routine implementation.
- Split/lazy-load new activities and media as appropriate; preserve deliberately available offline lessons and identify uncached material honestly. Record bundle impact rather than making every learner load every playground/video embed.

Official limits checked 7 September 2026: Workers Free has 100,000 dynamic requests/day across the account; static asset requests are free and unlimited. D1 Free includes 5 million rows read/day, 100,000 rows written/day and 5 GB total storage, with separate database limits. These are ceilings, not measured app usage or guaranteed headroom. Other apps share account allowances; CPU, KV and other service limits still apply. D1 Free refuses queries when daily allowances are exhausted; this is not a guarantee of availability. Recheck at implementation/release and inspect live plan/usage where access allows; disclose gaps rather than claiming a zero bill.

Sources: [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [Workers limits](https://developers.cloudflare.com/workers/platform/limits/), [D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/), [D1 limits](https://developers.cloudflare.com/d1/platform/limits/).

## Video and tool research

RESOURCE-LIBRARY.md remains the sole catalog. Research candidates before assigning them; no new candidate here is an approved required resource. Record exact URL, publisher/title, relevant segment, purpose, language, captions, last check, interface differences, access restrictions and equivalent written exercise. Do not invent timestamps or claim playback from an article fetch. Test authenticated tool controls through export separately from public documentation retrieval.

Starting candidates from the brainstorm: [Figma official tutorials](https://www.youtube.com/@Figma), [Auto layout video](https://www.youtube.com/watch?v=Aik8tMRdI90) and [accompanying guide](https://help.figma.com/hc/en-us/articles/31351261703063-FD4B-Auto-layout-fundamentals), [NN/g research video index](https://www.nngroup.com/topic/usability-research/?asset=videos), [web.dev responsive design](https://web.dev/learn/design/). The Figma guide was retrieved and flags changed controls; YouTube playback was not verified. Indexes are discovery aids, not lesson assignments. Assign auto layout at its mapped prerequisite level, not to the first foundations lesson merely because a link is available.

## Delivery sequence

1. **Pilot shared UI and the first teaching lesson.** Start with `week1-day1-v1` (From screens to product problems). Inspect existing behavior, then implement a small reusable practice guide, one appropriate editable worksheet and clear save/resume/help. Add a video-action pair only if an exact relevant segment is verified; retain the written route if blocked. Exercise baseline navigation for regression without coaching it.
2. **Validate with Haru.** Ask her to start, find practice, save, identify a repair and resume without verbal help. Record observed friction and unresolved questions. Agent/test-account QA is not this learner study. Do not claim it occurred if she is unavailable; leave a concrete pilot checklist.
3. **Refine one lesson at a time.** Follow existing module prerequisites and lesson order. Inspect prior work each time; improve the selected lesson, test it and record the next stable ID. Shared components may benefit all lessons, but do not mark those lessons individually refined without reviewing them.
4. **Broaden interaction and My work.** Add competency-specific experiments and project evidence views when their lessons need them. Fade hints progressively. Carry small evidence fragments into the existing three-project path.
5. **Separate later decisions.** Formal scored reviews/repair records, file uploads, complete bilingual delivery and deeper collaboration remain deferred. Design migrations and costs explicitly when scheduled; written rubrics and current feedback are not formal scored assessment.

## Per-lesson implementation checklist

- Read the current authorities and previous ledger entry; inspect the lesson, prerequisites, learner-facing flow and existing persistence before edits.
- Name the lesson outcome, likely beginner friction, recommended practice route and final reviewable output. Preserve ID, competency, original records and evidence restrictions.
- Provide concise Learn, exact Do actions, adequate output/example, contextual help, meaningful Check, save/handoff and resume. Show tool setup when necessary, not generic repeated setup in every step.
- Edit authoritative sources and shared types/components; generate Markdown. Do not directly rewrite generated lesson files or invent a second resource catalog.
- For new worksheet/step state, document its schema, bounded payload, account ownership, backward compatibility, backup/export/import coverage and independent bookmark behavior before coding. Use additive migrations only if needed; never repurpose record versions or overwrite submitted work.
- Run docs:generate, test:content and build; review changed resource selections with the existing section audit. Check 320/390px and desktop, keyboard/focus, touch targets, long text and navigation. Report actual viewport/device coverage.
- For persistence changes test reload, offline/reconnect, stale conflicts, multiple sessions/devices and account isolation with meaningful backend tests and browser interaction. Hosted writes use only the test account; never use Haru's records for QA.
- Record checks, limitations, bundle/usage implications and release state. Commit only reviewed scoped changes. Deploy only within established authorization and verified prerequisites; never imply local testing means released.

## Refinement ledger

This ledger tracks experience refinement, not publication or learner assessment. All 224 teaching lessons already exist; none is marked refined by this planning update.

| Scope | Status | Verification / release | Next |
|---|---|---|---|
| All 224 lessons · beginner teaching audit | Audited 7 September 2026 | Every stable ID has a risk and revision focus in BEGINNER-LESSON-AUDIT.md; this is content analysis, not learner validation | Fix update/save delivery, then reopen Day 1 teaching |
| Plan and documentation | Documented 7 September 2026 | See PROGRESS.md for actual checks; no app release | Pilot |
| Update delivery and save instructions | Fixed 7 September 2026: the service worker answers a `SKIP_WAITING` message and the notice carries an "Update now" button that refuses while a practice draft is still unsaved; a lesson with its own save-and-continue block no longer also prints the generic local-file steps | Built worker contains the listener and the page renders the button; `unsavedDrafts` is unit-tested. The live waiting-to-active swap was **not** observed: the app's browser pane cannot register a service worker and the real-browser tool was disconnected | Creator confirms the swap once in a real browser |
| week1-day1-v1 · beginner teaching | Revised 7 September 2026 to See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue. Two demonstrations, one supplied case, evidence entries revealed one at a time, three answer-first checks each with a bounded repair, a new `improvement-made` field, route-specific saving. All 35 shipped field IDs unchanged | Content, worksheet and build checks pass; thirteen backend groups pass; browser checks cover the demonstration, supplied-case feedback, progressive reveal surviving a reload, offline save and reconnect, a clean stale-conflict resolution, 320/390/1280 px and the focus ring. Evidence in docs/VERIFICATION-GUIDED.md. Haru has not used it | Observe Haru without coaching, then apply the pattern to week1-day2-v1 |
| Shared UI + week1-day1-v1 (worksheet milestone) | Worksheet implementation complete; beginner teaching review reopened 7 September 2026, then revised as recorded in the row above. Preserve its 35 field IDs | Earlier functional checks remain in docs/VERIFICATION-GUIDED.md. The all-course audit found missing staged demonstration, active checking and route-specific save clarity; Haru has not validated it. A creator browser session also retained the older experience behind an update notice | Diagnose delivery, revise teaching, then Haru pilot |
| Haru pilot observation | Pending | No learner study conducted | Use the walkthrough in PROGRESS.md; record friction and open questions here |
| week1-day2-v1 to week1-day7-v1 · beginner teaching | Revised 7 September 2026 to the same pattern as Day 1. Each carries one demonstration with its wrong turn, one supplied case answered before feedback, three answer-first checks with a bounded repair, an improvement-made field and route-specific saving. Lessons 2, 3, 4 and 7 also reveal repeated rows a few at a time. Shipped field IDs unchanged | Content, worksheet, typecheck and build pass; thirteen backend groups pass; all six render their demonstration, supplied case, save route and three checks with no feedback before answering, a lesson 2 assumption saved online and the reveal behaved, and nothing overflows at 320 px. Haru has not used any of them | Observe Haru on Day 1 first; her friction may change this pattern before Module 2 |
| Module 2 (week2-day1-v1, Choose the evidence you need) | Next in authoritative order | Not refined; carries the shared reader only | Inspect after the Module 1 pilot; author its own route, worksheet and guide |
| Remaining lessons | Every lesson audited; sequential implementation pending | No blanket completion claim; published content, shared UI and worksheets do not mark teaching refined | Follow BEGINNER-LESSON-AUDIT.md after Day 1 is validated |

For each completed lesson add stable ID, what changed, test evidence, commit/release status and next lesson. Keep historical verification documents unchanged; append new dated evidence for this work.
