## Current standard — small actions and honest progress, 12 September 2026

The current release refines only Module 1 Lesson 1 (week1-day1-v1) into one small action at a time, preserving all 36 worksheet fields and the full workload. All 224 teaching lessons are published; the remaining 223 have not been reviewed against this new action-by-action standard. Shared tracking improvements do not establish teaching refinement or learner validation.

Follow [the action and tracking contract](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). Required work, practice finished, recorded time, creator feedback and mastery are distinct. Automatic time counts focused course activity and pauses outside the course or after five minutes without interaction. External study time is added manually. Time and navigation never finish practice.

Keep Learn → Do → Check → Your work and the existing cream/green/serif style. Show the exact action, destination and sufficient output beside its answer control; keep essential teaching visible. Present supported examples before independent work, collect a reason before feedback, and let the learner repair the relevant saved answer beside it. Save the exact action and formative Check responses for return; no score is calculated.

Preserve IDs, record version 1, storage keys, old answers and feedback revisions. Observe Haru completing and resuming Lesson 1 without coaching before redesigning another lesson. Her observed use is still pending. The original vision stays immutable. Dated historical sections below describe earlier states and do not override this current standard.

## Latest agreed refinement — beginner teaching quality across all lessons, 7 September 2026

The user approved an all-course beginner review after the Day 1 pilot showed that an editable worksheet alone does not close the teaching gap. `docs/BEGINNER-LESSON-AUDIT.md` records the 224-lesson audit. Keep the existing course map and evidence discipline, but refine every lesson through **See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue**. Each requested skill must be visibly taught or tied to a practised prerequisite; finished examples must expose reasoning and likely mistakes, not only the answer.

Checks must collect the learner's reason before showing feedback and lead to a bounded repair of the learner's work. Tool tasks must start from a known screen or supplied starter, name exact controls and expected results, and include recovery. Participant, team, engineer, live-build and prior-artifact dependencies require honest alternate practice routes. The alternate route must preserve the competency and never turn supplied or simulated material into claimed research. Saving, review and resume instructions must match the selected practice route.

Experience refinement, learner validation and formal assessment remain separate. The first implementation task is to repair delivery of the current update and conflicting save guidance, then revise Day 1 without renaming its shipped worksheet field IDs. Validate with Haru before using it as the repeating pattern.

## Guided learning refinement — 7 September 2026

The user approved [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md): practical step guidance, editable in-app worksheets, explicit practice destinations, optional verified videos paired with action, browser-based experiments, contextual help, examples that build independence, clearer My work and resume. Keep the cream/green/serif UI, existing navigation, course sequence, diagnostic independence and learner records. Implement lesson by lesson beginning with `week1-day1-v1` and the reusable UI it needs; observe the pilot with Haru before broad rollout when she is available. Candidate Hindi explanations, file uploads and formal scored review are not part of the first implementation.

Zero additional hosting cost within existing free allowances is a design constraint, not a certified bill. Prefer browser computation, bounded text saves and direct YouTube/external work links; do not introduce hosted video, paid AI or paid services. The plan owns the delivery sequence, free-tier details and refinement ledger. New features remain planned until evidence is recorded in PROGRESS.md.

## Practical apprenticeship refinement — 6 September 2026

The approved implementation adds concrete workspace setup, individually authored activity briefs, copyable starter templates, progressive hints, explicit save instructions and artifact handoffs to the baseline and the original 30 lessons. Integration on 7 September preserves the 194 later lessons now published on main; their workspace templates and handoffs derive from their existing authored tasks, free routes and criteria. The diagnostic remains independent, with an inventory template and no hints or AI coaching. Essential setup must remain visible; concise presentation must not remove actionable instructions.

Optional lesson-specific text-chat rehearsals support the learner's own first attempt. Every prompt has a non-AI alternative, bounded response, evidence restrictions and a learner-owned revision. No paid model, API, upload or subscription is required. AI does not establish mastery or substitute for research.

Three project packs offer two briefs each, selected around real participant access. The Course map connects starting evidence, challenge, tools, saved work and later use across all 21 modules. Publication status comes from src/modules.ts; all 20 mapped teaching modules are now published, with 224 lessons. Foundation artifacts build an evidence bank rather than automatically becoming case studies. Formal assessment and external-file synchronization remain unimplemented.

## Latest agreed refinement — concise course experience, 6 September 2026

- Preserve the cream, green, serif design language on mobile and desktop.
- Use Learn, Course map and My work; Account contains connections, backups and installation help.
- Present Learn → Do → Check → Your work one section at a time, with direct access and Back/Next controls.
- Show the outcome, prerequisites, essential concepts, exact actions and output lists in concise language. Expand examples, explanation, optional effort and portfolio context on demand.
- Rewrite the baseline and all twelve published lessons; preserve their IDs, competency intent, evidence requirements and free paths.
- Apply this standard to every future lesson and course extension in this repository. Concision must not remove the instructions needed to do the work.
- Reading, navigation, elapsed time and readiness do not establish mastery. Preserve learner records, feedback and account-owned bookmarks.
- Original vision remains immutable. Implementation and release evidence belong in PROGRESS.md and the verification documents.
- Mobile refinement: use a compact header, sticky section controls, comfortable touch targets and enough scroll clearance for fixed controls. Keep the idle timer inline; float it during an active or paused session.

# Course requirements and alignment review

Reviewed 6 September 2026 against [the original user brief](COURSE-VISION-ORIGINAL.md). This file translates the brief into production requirements; it does not replace the preserved original. Later explicit user decisions can refine these requirements. Update this record when they do.

## Guiding purpose

HaruCourse is a long-term Product Design apprenticeship for Haru. The repository owner is her course creator. Teach broad, transferable ability, produce a credible portfolio, and prepare for suitable India and international remote roles. The web app, storage, and MCP are delivery/support tools—not the educational outcome.

Build on Applied Arts, past UI/UX study, and visual/marketing experience without assuming present product-design competence. Describe sales experience honestly as adjacent experience. Rebuild modern foundations, especially research, product thinking, web behavior, systems, and engineering collaboration. Avoid unnecessary repetition of established visual skills, subject to diagnostic evidence.

## Non-negotiable teaching requirements

- Organize the journey as Levels → Modules → Lessons; see the generated module map in COURSE-BLUEPRINT.md.
- No completion deadline or daily requirement. Two hours is a suggested session; split and revisit lessons freely. Effort estimates are not gates.
- Every lesson follows docs/COURSE-AUTHORING.md and approved resources in RESOURCE-LIBRARY.md.
- Increase practical work over time: learn, practice, build, critique, iterate, and ship when feasible. Readings support assignments rather than replace teaching.
- Teach across products and industries. The workshop example is an introductory practice context, not a portfolio specialization or the only future domain.
- Develop approximately three to five strong portfolio projects progressively. Three core projects are the current proposal; add a fourth/fifth only when a concrete evidence gap justifies them.
- Include realistic ambiguity, constraints, conflicting needs, design QA, and occasional briefs without a supplied solution.
- Teach AI-assisted work separately from designing AI products; AI must not replace reasoning, genuine research, or evidence-based assessment.
- Use practical assessment and focused remediation. Reading, navigation, elapsed time, self-report, and AI praise do not establish completion or mastery.
- Separate job readiness from advanced practice and expert performance. A course cannot guarantee employment or expertise through a completion count.
- Maintain free required paths and free alternatives. Do not require a paid tool or book without revisiting the user's zero-cost constraint.

## Coverage matrix

Status meanings: **Intro only** = some published exposure, not full coverage; **Planned** = direction recorded but detailed teaching not authored; **Partial system** = working software supports part of the requirement. None of the rows below is a claim that Haru has passed an assessment.

| Brief requirement | Intended place | Present evidence | Remaining production work |
|---|---|---|---|
| 1. Design foundations | Level 1, targeted refresh | m03 published: type scale, readability, colour meaning, measured contrast, Gestalt grouping, spacing scale, layout reflow, tokens and a rebuild critique | Composition and communication exercises beyond screen systems; diagnostic-driven adjustment once a baseline is reviewed |
| 2. UX foundations | Levels 1–2 | m04 published: mental and conceptual models, recognition/recall and memory demand, affordances, signifiers and feedback, slips versus mistakes, UX laws with counterexamples | Deeper interaction cognition alongside m09 and m11; none of this is assessed |
| 3. Product thinking | Levels 1, 2, 5 | m04, m15 and m17 published: need statements and a riskiest-assumption test with a pre-written stopping rule; success measures defined before release, counts rather than rates, and an A/B test designed and then refused for lack of traffic; operating strategy read from behaviour, second-order effects traced as loops, and deciding under uncertainty with a recorded assumption and check date | Market positioning still has no verified free source, so m17 teaches the catalog's verification rules and records a rejection rather than teaching a positioning method |
| 4. UX research | Level 2, deeper work in Level 5 | m05 published: research questions ranked by decision, method selection with a written exclusion per pairing, desk and competitive review, recruitment and screening, consent and a data plan, interviews, contextual observation, a diary protocol, survey wording with counts rather than rates, synthesis with participant counts and contradictions, jobs and needs labelled evidenced or assumed, an evidence-marked experience map and a findings report | Moderated usability testing in depth stays with m10 and quantitative work with m15. Consent and data lessons use UK guidance and explicitly do not establish Indian legal requirements; the learner must check a primary source before recruiting real participants |
| 5. Information architecture | Levels 2–3 | m06 published: content inventory including answers that live outside pages, labelling from participant vocabulary, two organisation schemes compared on their breakages, depth versus breadth, a paper card sort and its honest analysis, a paper tree test with diagnosis and one re-tested change, matching a findability test to a symptom, heading outlines and regions, search and zero-results paths, and a label stress test under translation, narrow width and a slow connection | Complex enterprise information sets and larger-sample sorting or tree testing, which need participant numbers a self-funded learner cannot reach; the module teaches counts instead of rates and says so |
| 6. User flows | Levels 2–3, 5 | m07 published: flow notation covering actions, decisions, system states and exits with real entry points, first-run and deferred setup, sign-in and recovery including shared devices, a permission matrix with designed unavailable states, the browse-and-search loop, commitment and payment including the unknown-outcome wait, and an exception table of at least twelve failures classified as slips or mistakes | Complex multi-party and long-running workflows stay with m17; nothing in m07 has been tested at volume or on a built product |
| 7. Wireframing | Levels 1–3 | m07 published: low-fidelity frames with real content and one screen drawn in two content orders, mid fidelity at three widths with written never-move, reprioritise and hide rules, full component and screen state specifications, an annotated wireflow, a paper prototype test and a repair with a prediction written first | High fidelity and the component repertoire remain m08; the state work is specified but not implemented, so keyboard and screen-reader behaviour is stated as untested |
| 8. UI design | Level 3 | m03 and m08 published: type, contrast, spacing and tokens, then components read for usage rather than style, dense content, forms with labels and errors, navigation and headers, notification and error patterns, and a heuristic sweep kept separate from evidence-based critique | Charts, dashboards and large data tables are touched only through m15's reporting work; this is not a complete enterprise component repertoire |
| 9. Design systems | Dedicated Level 4 module | m13 published: foundational decisions grouped and documented, component anatomy, variants and states, when not to use a component, contribution and deprecation practices written for a system of one, tokens kept in one place through custom properties, and versioning under semver | Tool-specific system building (variables, Auto Layout, published libraries) is still absent, because no authenticated free tool workflow has been executed and verified |
| 10. Responsive/web design | Dedicated Levels 3–4 | m12 published: how a browser treats HTML, CSS and JavaScript, document structure, the box model and the cascade, flexible boxes and grid, events and the document, fetching data and handling failure, forms and native validation, images and asset delivery, browser debugging, and an assembled page whose claims are bounded | Server-side work, build tooling and framework practice stay out of scope; this is literacy for collaboration, not software-engineer training |
| 11. Interaction design | Level 3, advanced Level 5 | m09 published: what an animation is composed of, duration and timing functions, motion that carries system status, focus behaviour around validation, recognition and efficiency, control and reversibility, reduced-motion practice, and a documented motion sheet | Gesture-driven and platform-native interaction remain unaddressed, as does anything needing a device lab |
| 12. Prototyping | Levels 1–3, advanced Level 5 | m07, m10, m12 and m18 published: fidelity chosen by the question being asked, paper and running prototypes, moderated testing with tasks written not to lead, unmoderated data and what the absence of moderation removes, repairs with a prediction written first and a re-test, and a third project built and repaired alone | Advanced tool prototyping with variables and conditions is still absent, for the same tool-account reason recorded against area 9 |
| 13. Accessibility | Integrated plus dedicated Level 3 work | m11 published and reinforced in m12, m13, m19 and m20: headings and regions, images in context, forms and validation, contrast and colour independence, keyboard paths and visible focus, and the WCAG criteria an artefact can actually affect | Every check taught is one the learner can run alone. Testing with disabled people is named as a gap the course cannot close for them, and reading a criterion is never described as conformance |
| 14. Product analytics | Level 5 | m15 published: defining success before release, choosing measures that reflect it, counts rather than rates at small numbers, what a measure cannot show, sample size and intervals, reading performance over time with its confounds, reporting honestly, and an A/B test designed and then refused for lack of traffic | No live analytics platform is used, because none has been verified as free without an account; the module teaches interpretation and honest reporting rather than a vendor tool |
| 15. AI + Product Design | Level 5 with responsible-use habits earlier | m16 published: how an AI product differs from a deterministic one, setting expectations and explainability, user control, correction and graceful failure, conversational patterns, trust calibration, evaluating output, and deciding whether AI adds value at all | Model evaluation at scale and agent architectures stay out of scope. Research data is never pasted into AI tools, on the course's own authority |
| 16. Product delivery | Level 4 and all major projects | m14 published: how work is described so it can be planned and built, stories as placeholders for a conversation, acceptance criteria as verifiable conditions, what a prototype must communicate to the people who build it, getting a decision rather than approval, and defining success before release | The learner has never worked in an established team, and m20 requires that gap to be stated rather than closed; team collaboration cannot be manufactured alone |
| 17. Advanced practice | Level 5 and post-readiness extension | m17 to m20 published: strategy read from behaviour, service blueprints, second-order effects traced as loops, stakeholders mapped by accountability and manipulative patterns refused; an independent third project with a handover package and a limitations page; three case studies checked against their own evidence; and a career method that gathers dated vacancy evidence instead of asserting market conclusions | Leadership and advocacy are described from one employer's published expectations only. The course holds no evidence about hiring in India and teaches the gathering method instead |

## Required supporting programs

| Requirement | Current state | What must be authored or implemented |
|---|---|---|
| Complete self-paced module roadmap | High-level 620-hour blueprint; m00 baseline plus m01–m20 published, 224 authored lessons covering Levels 1 to 6. Every mapped module is now authored | Nothing remains to author. The open work is assessment: no score recorded anywhere is produced or stored by the app, and readiness is still self-reported |
| Dedicated tool training | Priority sketch only | Evaluate Figma, FigJam, Illustrator, Photoshop, After Effects, ProtoPie, Framer, Webflow, Notion, Miro, Jira, Confluence, analytics/behavior tools, AI and handoff tools. For each: essential/important/useful/optional, reason, target level, path, exercises, mini-project and curriculum placement. Do not require all of them |
| Progressive portfolio | Three project categories proposed | Complete each brief's problem, context, users, business, research, competition, synthesis, conditional personas/JTBD, journey, IA, flows, wireframes, prototype, UI, system, testing, iteration, solution, honest metrics, reflection and case-study structure |
| Current resources | 69 verified public readings, twenty of them added for m05 to m17 and retrieved on 6 September 2026. Of the eight recorded subtopic gaps, six are sourced and two remain bounded: market positioning still lacks a verified free source, and m17 teaches the catalog's verification rules and records a rejection rather than filling it; hiring is handled as method rather than conclusion, since the course's two dated vacancy captures are not a study and m20 requires the learner to run the multi-employer pass by hand. Authenticated tool workflows remain open but nothing depends on them, since R49 gives an account-free vector path | Find a verified market-positioning source; re-check every row's link, cost status and checked date at each release, since vacancy and vendor pages expire fastest |
| Book list | Not authored | Small Must Read / Highly Recommended / Advanced / Reference list with reading budgets and free alternatives/access paths |
| Stay Current system | Sustainable principle noted | Optional session/module/portfolio-checkpoint routine, selected people/publications/communities, time cap, and a test for evidence versus promotional trend claims |
| Career preparation | Initial target and transition principles | Evidence-backed junior/mid-level expectations, resume, LinkedIn, case studies, letters, networking/outreach drafts, communities and interview practice across required formats |
| Whole-program tracker | Partial system: account-owned notes, reference, an in-app session timer with per-step attribution, a dated session log, a 1–5 confidence note, readiness, revisions and feedback; the review export carries the log and confidence | Add resources completed, assignment identity, portfolio contributions, tool skills, quiz scores, revision needs and assessment records; extend portable exports beyond the baseline |
| Assessment and remediation | Every lesson authored under the contract — m03 through m07 — states four score descriptions, a bounded repair and a recheck per criterion, and the MCP rubric tool returns them. Still no software: nothing computes, stores or displays a score | Creator assessment tied to a submitted revision, recorded dimension scores, outcome, repair task, recheck and evidence gates; quizzes/tool tests/presentations supplement practical work |
| Long-term mentoring | Lesson/feedback/MCP support | On “Day N completed,” request missing evidence, review, explain gaps, assign bounded repair and adjust next work. Do not only advance a pointer |

## Alignment judgment and corrections

The direction is aligned, but the deliverable is substantially incomplete. Sixty-eight published lessons across seven modules now cover Levels 1 and 2 — foundations, research, information architecture, flows and wireframes — which is enough to carry the first portfolio project as far as a tested paper prototype. Thirteen modules remain unauthored, and everything from interface craft and accessibility upward, including all of web foundations, systems, delivery, analytics, AI and strategy, is still only mapped. Written criteria and remediation are not an assessment system, and no learner work has been assessed. Future milestones should continue rebalancing toward content and assessment rather than platform.

1. Finish the dated 2026 hiring/tool evidence pass before claiming market alignment or fixing career-level conclusions. Existing enduring official references are useful but are not a representative hiring study.
2. Use Modules 1–2 as an initial practice loop. Do not infer proficiency in research, accessibility, systems or prototyping from a brief introductory exercise.
3. Use the complete module competency map before filling later lessons. Explain deliberate revisiting at greater depth.
4. Introduce an appropriate design-tool learning path and dedicated web foundations rather than leaving every exercise indefinitely at “paper or a familiar tool.” Keep free alternatives.
5. Plan different contexts for the core portfolio projects once participant access is known. Do not count the workshop practice as a finished portfolio project.
6. Implement formal creator assessment and richer tracking before presenting assessed completion totals. The app's current zero-assessed label reflects a missing workflow, not an assessment of the learner.
7. Write resource, book, current-awareness and career programs as bounded parts of the curriculum, not unstructured lists.

## Agreed refinements to the original brief

- The learner is Haru; the user making the course is the creator.
- Target India plus international remote roles, checking India eligibility per vacancy.
- Local course Markdown remains available; delivery now includes the Cloudflare-hosted installable app, backend and MCP.
- Required hosting/software should incur no additional cost within free allowances; no paid model API is required. Account billing remains unverified through the CLI.
- Refinement approved 6 September 2026: self-paced modules supersede calendar schedules in the unchanged original. No deadlines, mandatory cadence, graduation forecast or cumulative effort cap.
- Three core portfolio projects satisfy the original three-to-five range; extras need a reason.
- The 620-hour estimate is provisional and includes project/iteration hours. Adjust it based on actual evidence and pace.
- Requested account details are in local `.secrets`; never copy passwords into this brief or other tracked documents.

## Next production order

1. Follow the mapped prerequisite sequence in COURSE-BLUEPRINT.md. m03 through m20 are authored and published, completing Levels 1 to 6, so the sequence is now a study order rather than a production queue. The unresolved question is unchanged: no tool-specific exercise is required anywhere, because no authenticated free workflow has been executed and verified.
2. Validate optional tool workflows against free accounts before making any tool-specific task required; retain equivalent free local exercises.
3. Author detailed lessons using the contract, then add formal creator assessment and repair workflow.
4. Develop three complete project briefs and later modules, followed by dated India/remote hiring research and career exercises.
5. Keep richer tracker fields and assessments explicitly pending until implemented and verified.

## Continuation contract

Authenticated GET/PUT /api/learning-position stores the signed-in account's lesson, stable section, revision and server timestamp. Creator browsing has its own bookmark. Continue learning uses a valid bookmark, then the latest unfinished practice, then the first core lesson. Unknown section falls back to Learn; unavailable lesson falls through to practice/core. Offline bookmarks have their own cache/queue; a stale revision keeps the newer server position. Draft conflict resolution is separate. Reading, readiness, elapsed time and navigation do not imply assessed completion. Existing IDs, record versions, submissions, feedback and storage keys remain stable.
