# Level 2 complete: m06 and m07 authored and published — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. This entry continues the one below it; together they publish Level 2.

Authored m06 (Information architecture, twelve lessons, area 5) in src/module6.ts and m07 (Flows and wireframes, thirteen lessons, areas 6 and 7) in src/module7.ts, and moved both from planned to published. Sixty-eight lessons now exist across m01–m07, covering Levels 1 and 2; thirteen modules remain mapped and unauthored. Every lesson in both modules is core and carries the full lesson contract.

m06 runs from a content inventory of at least forty items — deliberately including the answers that live in emails, PDFs and people's heads rather than only pages — through labelling from the learner's own m05 participant vocabulary, two organisation schemes compared by naming where each breaks, depth against breadth, a paper card sort, an honest reading of it, a paper tree test, a diagnosis with exactly one change re-tested, matching a findability test to a symptom, heading outlines and regions, search and the zero-results path, and a label stress test under translation, an Indic script, a narrow width and a throttled connection, ending in a change note. Two rules run through it. Both evaluation methods are run on paper because the platforms the assigned articles name are paid, and a printed hierarchy read aloud tests the same thing. And at four or five participants the module reports counts of people, never percentages, similarity matrices or comparisons against published success-rate benchmarks — the benchmarks in the assigned reading come from studies far larger than a learner can run, and the lesson says so where it uses them.

m07 joins flows to wireframes on purpose: a flow nobody has drawn screens for hides its hardest moments, and screens drawn without a flow invent a happy path. It covers flow notation that distinguishes actions, decisions, system states and exits with real entry points; first-run design that defers everything not needed to reach a first outcome; sign-in and recovery including the shared or borrowed device and a recovery route that does not depend on the lost factor; a permission matrix whose undecided cells are the finding; the browse-and-search loop with a designed return; commitment and payment including the unknown-outcome wait that is where people pay twice; an exception table of at least twelve failures classified as slips or mistakes; low-fidelity frames with real content; mid fidelity at three widths with written never-move rules; component and screen state specifications; an annotated wireflow read by someone uninvolved; a paper prototype test; and a repair with the prediction written before the re-test. m07 needed no new catalog rows, and two of its readings are used strictly inside their recorded limits: the IAM overview supplies permission vocabulary and no interface patterns, and the GOV.UK patterns supply multi-step task structure rather than a navigation library.

Three new catalog rows were added for m06, R60–R62, each retrieved and scope-reviewed on 6 September 2026: running a tree test, interpreting its results, and matching four findability tests to four causes. The catalog now holds 62 verified readings and the assertion in scripts/course-docs.mjs was raised to match. One candidate was retrieved the same day and rejected: NN/g's information-architecture study guide is a link index wrapped around promotion for a paid live course, with no teaching of its own, and the catalog rule excludes promoted paid training. A GOV.UK content-writing source was also attempted and returned a redirect to a navigation hub, so no labelling resource was added and m06 teaches labelling from the learner's own participant vocabulary instead — which is better evidence than a style guide anyway. Both outcomes are recorded in the catalog's selection rationale rather than left as silence.

The generated module effort sentence was hardened: it now also handles a module whose lesson steps exceed its hour estimate, saying plainly that the estimate is low and should be re-set from real pace rather than producing a nonsensical remainder. m06 states 25 hours against 24 of lesson steps and m07 states 30 against 26; no module hour estimate in src/modules.ts was changed.

Verified on 6 September 2026: npm run docs:generate and npm run test:content pass, including the contract checks, the published-module gate and the 62-row catalog assertion; WEEK-01.md and WEEK-02.md remain byte-identical to their committed versions. npm run build passes both TypeScript projects and both bundles. The eleven-check backend suite passes against a local Worker with all seven modules published. In the browser at 375 x 812, signed in as the isolated test account: seven module tabs render with no horizontally overflowing element anywhere on the document, m06 lists twelve lessons and m07 thirteen under the correct level and module labels, and m07 lesson 12 renders its objective, bring-forward, misconception, free tool path, assigned readings and all four score levels with the repair. A Node probe saved and read back practice on m06-l01-v1, m06-l12-v1, m07-l01-v1 and m07-l13-v1 at revision 1, while m08-l01-v1 and a non-existent m06-l99-v1 were both refused with 404. Probe writes used the isolated test account only; Haru's records were not touched.

The pane hazard recorded last session recurred three times: wrangler's dev proxy exits when the browser pane freezes a hidden polling tab, which killed the Worker mid-verification. The workaround that worked is to drive API probes from Node, which never triggers it, and to keep pane work to short batches. scripts/test-cloud.mjs now takes HARU_TEST_BASE, so the suite can be pointed at 8788 rather than the unrelated dev server holding 8787 on this machine.

Not done this session, stated plainly: no deployment and no hosted verification; no offline, service-worker, second-device or cross-account re-run, because no persistence, authentication or synchronization code changed; no research, card sort, tree test or prototype test was run with any participant — these modules teach those methods and no session has taken place. Nothing in the app, the API or the MCP service computes, stores or returns a score, so the four score levels in 38 new lessons remain text for a human reviewer.

Still pending: m08 onward, formal scored assessment and repair software, the remaining tracker fields, market positioning sources, a real multi-employer hiring study at m20, an executed authenticated tool workflow, and project briefs. m08 is where the authenticated-tool question becomes pressing, since interface craft is the first module that would benefit from a design tool; the catalog's account-free vector path exists precisely so no exercise has to depend on one.

---
# Level 2 begins: m05 authored and published — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. This entry adds a module; it supersedes nothing above it.

Authored m05 (Research methods and synthesis, thirteen lessons, area 4) in src/module5.ts and moved it from planned to published in src/modules.ts. Forty-three lessons now exist across m01–m05; fifteen modules remain mapped and unauthored. Every m05 lesson is core, carries the full lesson contract, and stays inside the module's single requirement area.

The thirteen lessons run in the order the work actually happens: rank the questions by the decision each would change, pair each with a method and write down what that method may not license, look at existing evidence and compare rival flows on one identical task, recruit and screen, obtain consent and write a data plan, interview, observe in context, design a diary protocol, write a survey, synthesise notes into findings with participant counts and contradictions, write jobs and needs labelled evidenced or assumed, map the journey with every stage marked observed, reported or assumed, and report findings with limitations and a non-recommendation. Two rules run through all of them. Any lesson that cannot be completed because nobody consented ends in a dated recruitment gap and the designed instrument, never in an invented participant. And the exclusion sentence — what this method cannot establish — is written when the method is chosen, not when the report is due.

Ten new catalog rows were added, R50–R59, each retrieved and scope-reviewed on 6 September 2026: research questions, recruiting participants, informed consent, research data and participant privacy, contextual research and observation, note-taking and recording, and sharing findings from the GOV.UK service manual; competitive usability evaluations and survey question wording from NN/g; and creating an experience map from GOV.UK. The catalog now holds 59 verified readings and the count assertion in scripts/course-docs.mjs was raised to match. Boundaries are recorded on the rows and taught in the lessons rather than hidden: the competitive article states it excludes market positioning and pricing, the survey article excludes sampling and analysis, the sample-size row already excluded surveys, and several GOV.UK pages have stood unchanged since 2016–2018, so each row now carries the publisher's own date beside this catalog's retrieval date. None of these pages is written for India: the consent and data lessons say plainly that they establish UK practice, that Indian requirements have not been verified here, and that the learner must check a primary source before recruiting real participants. The course's own prohibition on pasting research notes into an AI tool is stated as the course's rule, because the assigned page does not discuss AI tools at all.

The generated module header changed for a reason worth recording. It read "Optional effort N hours across L lessons", which invited a reader to divide and get a per-lesson figure contradicting every lesson's own 120-minute step total. m05 estimates 45 hours while its lessons account for 26; the header now states both and says the remainder is fieldwork, waiting, recruitment and iteration. m03 and m04, where the two figures agree, say so instead. The module hour estimates in src/modules.ts were left untouched: they were never meant to be a sum of lesson steps.

Verified on 6 September 2026: npm run docs:generate and npm run test:content pass, including the contract checks, the published-module gate and the 59-row catalog assertion; WEEK-01.md and WEEK-02.md are byte-identical to their committed versions, and MODULE-03.md and MODULE-04.md differ only in the effort sentence. npm run build passes both TypeScript projects and both bundles. The eleven-check backend suite passes against a local Worker with m05 published. In the browser at 375 × 812 against that Worker, signed in as the isolated test account: no horizontal overflow anywhere on the document, five module tabs render without an overflowing element, m05 lists thirteen lessons under "Level 2 · Module 5", and lesson 1 renders its objective, bring-forward, misconception, free tool path, assigned reading with the R50 limits, and all four score levels with the repair. A direct probe saved and read back practice on m05-l13-v1 at revision 1, and m08-l01-v1 was refused with 404 on both GET and PUT. Probe writes used the isolated test account only; Haru's records were not touched.

One environment fix, so the next session does not repeat it: scripts/test-cloud.mjs had 8787 hard-coded, which on this machine is an unrelated dev server, so the suite is now pointed by HARU_TEST_BASE and was run against 127.0.0.1:8788. Two known local hazards recurred — wrangler's dev proxy exits when the browser pane freezes a hidden polling tab, and the login rate limiter blocks a repeated suite run until login_attempts is cleared with the Worker stopped.

Not done this session, stated plainly: no deployment, no hosted verification, no assistive-technology or offline re-run (no persistence, authentication or synchronization code changed), and no research was conducted with any participant — m05 teaches how to do that and no session has been run. Written criteria and remediation remain text; nothing in the app, the API or the MCP service computes, stores or returns a score.

Still pending: m06 onward, and m06 in particular needs a verified tree-testing source before its lesson can be written, since the catalog's structural-IA row states it does not cover card-sort or tree-test methodology. Also pending: formal scored assessment and repair software, the remaining tracker fields, market positioning sources, a real multi-employer hiring study at m20, an executed authenticated tool workflow, and project briefs.

---
# Session timer, session log and plain-language pass — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. This entry supersedes the two below where they disagree about how practice time is recorded.

The learner no longer types minutes after the fact. Each lesson and the baseline carry one session timer — Start, Pause, Finish — and the learner can tap a step in the practice plan to record time against it. Time is folded into the existing `minutes` total as whole minutes only when the timer pauses, finishes, the step changes, the tab is hidden, the page unloads or the lesson closes; never on a tick. That is deliberate: every save mints a revision and an immutable submission_history row, so a per-tick write would have produced about 1,800 of each per practice hour and polluted the version numbers feedback is keyed to. Sub-minute remainders stay on the device and carry into the next fold, and Finish rounds a remainder of thirty seconds or more up. The timer counts for at most ten minutes after the last input and then pauses itself at that boundary, keeping everything before it; this single rule covers reading without scrolling, sketching in another app over the browser, a locked phone, a reload and a killed app. The constant lives in src/useTimer.ts.

The record schema gained two optional fields, `sessions` (at most fifty entries of date, minutes, optional step, optional hand-added flag; the total is authoritative and is never reduced when the log is trimmed) and `confidence` (1–5, a note to oneself, never a grade). Both are optional so every existing record, including the committed six-field backup, parses to exactly itself on every load path; `version` stays 1, `minutes` stays a whole number, and no D1 column or migration was added. These two fields are the “date/session history” and “confidence” items the original brief’s tracker asks for; resources completed, assignment identity, tool skills, quiz scores and assessment records remain pending. A hand-added entry (“Add or correct time”) exists for practice done on paper and is demoted behind a disclosure. The MCP save_practice description now tells an AI client to preserve both fields when writing back.

Plain-language pass for a non-technical learner: one course-wide practice total replaces the two partial figures that disagreed (the Lessons notice summed one module; Progress showed only the baseline); status reads “In progress” rather than “practicing”; sync and conflict copy no longer says cloud, sync, draft or revision; “0 assessed completions” and the “submission state” sentence are gone, with one “How reviews work” disclosure in their place; the Progress tab now shows the course total, lessons in progress, ready for review, the session log and confidence by lesson; the pick-up card comes first on Lessons and appears on the Dashboard once anything is in progress; the AI-app connection block is behind an “Advanced” disclosure for learners; the baseline sync line shows only where the baseline is edited; section labels are words; lesson cards say “about 2 h”; the reading-position status line is silent except on a cross-device conflict; “Ready for review” explains why it is unavailable; the field asks for “a link to your work (Figma, Drive, or a file name)”; backups sit behind a disclosure; and the review export includes the session log and confidence. Also fixed: a later stylesheet rule had silently overridden the phone-readable size of the stat labels back to 8 px. Deferred, recorded here: replacing the status select with buttons, a global mini-bar for a running timer on other tabs, and renaming Dashboard to Home.

Mobile: the bar is fixed directly above the bottom tab bar with safe-area insets, hides while a field has focus (a fixed bar over a soft keyboard floats or is covered) with the running time shown inline in the practice heading meanwhile, and a clearance spacer keeps the last card scrollable past both bars. Step rows are 56 px buttons; confidence is five 44 px targets; the pulsing dot is off under reduced motion; the live region announces transitions only, never the seconds.

Verified on 6 September 2026, detail in docs/VERIFICATION.md: schema compatibility and rejections; test:content with byte-identical generated documents; build; the backend suite with a new sessions/confidence check (old-shape write still accepted afterwards, out-of-range and unknown fields rejected, Haru unchanged); in Chromium at 375×812 against a live local Worker with writes counted — zero writes while running, exactly one on pause with the right minutes, session and step, reload preserving the paused state, the ten-minute cap and mount repair producing one write, bar geometry above the tab bar, keyboard hide and restore; offline with the Worker stopped — finish, confidence and a hand-added entry all landed locally with zero successful writes, then uploaded as one write on reconnect; Dashboard and Progress totals agreeing. Probe writes used the isolated test account only.

Not verified in a browser, stated plainly: the creator’s read-only timer summary (creator sign-in needs a password the agent does not enter; the server 403 on creator writes is covered by the suite), a real second-device conflict involving the timer (one browser profile; the concurrent-write 409 is covered by the suite and the timer writes through the same path as typing), and the baseline page in a browser (same hook and component, exercised on lessons). Two environment facts affected this session and are recorded so nobody repeats them: port 8787 on this machine is held by an unrelated dev server that the pane fell through to once the Worker exited, so pane evidence from that port was discarded and the Worker was rerun on 8788; and wrangler’s dev proxy exits on “Network connection lost” when the pane freezes a hidden tab mid-poll, which Node traffic never triggers. A .claude/launch.json entry now runs the Worker on 8788.

Deployed to production on 6 September 2026 as Worker version 87ba6e41-1ce2-4c56-8a01-1ce9aedead4f; no migration was required. Hosted health, bundle identity and a test-account round-trip of sessions and confidence passed, with the fractional-minutes rejection confirmed on the live API and Haru’s records untouched. Detail in docs/VERIFICATION.md.

Still pending: m05 onward, formal scored assessment and repair software, the remaining tracker fields, the three research gaps above, and project briefs. A timer records effort; it does not and must not establish mastery, drive status, or unlock anything.

---
# m03 and m04 published — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. This entry supersedes the release note below only where the two disagree about lesson counts and catalog size.

Authored m03 (Visual foundations refresh, ten lessons, 20 optional hours, areas 1 and 8) in src/module3.ts and m04 (UX reasoning and product value, eight lessons, 16 optional hours, areas 2 and 3) in src/module4.ts. Both modules moved from planned to published in src/modules.ts. Thirty lessons now exist across m01–m04; the other sixteen modules remain mapped and unauthored. m04 lesson 5 is optional; the rest are core.

The Lesson type gained optional contract fields: module, level, areas, objective, bringForward, misconception, freeToolPath, assigned resources with section, purpose, effort, limits and fallback, and criteria carrying all four score descriptions, a bounded repair and a recheck artifact. The fields are optional so the twelve earlier lessons are unchanged; WEEK-01.md and WEEK-02.md were confirmed byte-identical to their committed versions after regeneration. New generated documents MODULE-03.md and MODULE-04.md carry the contract fields the legacy template cannot express. npm run test:content now also checks that a lesson's module exists and is published, that its areas fall inside the module's, that every assigned resource and fallback ID is in the catalog, that each criterion has four levels with evidence, remediation and recheck, and that the flat rubric still lists exactly the criterion names — that last check caught a real mismatch during authoring.

Written criteria and remediation are not an assessment system. Nothing in the app, the API or the MCP service computes, stores or returns a score. get_review_rubric now returns the criteria, the four score meanings and an explicit statement of that limit so a reviewing client cannot mistake the text for a scored workflow.

RESOURCE-LIBRARY.md grew from 28 to 49 verified public readings (R29–R49) across two passes, each retrieved and scope-reviewed on 6 September 2026. Six of the eight recorded research gaps are now sourced: colour and Gestalt (R29–R31), quantitative intervals and sample size (R37, R45), diary studies and JTBD (R38, R39), assistive-technology testing on the learner's own devices (R40, R41), India multilingual and low-bandwidth context (R42, R43, R46) and enterprise permission vocabulary (R44). Boundaries are recorded on the rows themselves: R33 does not cover Miller's limit, R37 supplies no formulas, R45 covers binary metrics only, R31 publishes no caveats so the limitations in the lessons are the course's own, and R44 is infrastructure documentation rather than a role-based UI pattern library. R40 and R41 are sourced as readings only: no assistive-technology session was run on any device in this session, and the catalog rule that documentation access is not proof of a tested workflow still applies.

A second pass worked the three rows left open by the first. Leadership is now sourced: the GitLab job-families page for product design management retrieved in full on a different URL (R48), covering four management levels, strategic partnership, stakeholder influence and team development. U02 stays recorded because the two handbook workflow pages still returned navigation only. Market strategy is partially sourced: R47 (Shape Up, read free online) supplies appetite, fixed time with variable scope, betting and deciding what not to build, but market positioning and segmentation still have no verified free primary source — an Atlassian strategy page returned navigation only and a published company direction page returned HTTP 403, so m17 must not teach positioning from an unverified source.

Hiring is partially sourced and is explicitly not a study. Eight vacancy URLs were attempted on 6 September 2026: one full capture (Atomicwork, Lead Product Designer, Bengaluru hybrid, minimum three years, naming B2B SaaS, design systems, accessibility and four interchangeable design tools), one partial (HackerRank, Senior Product Designer, Bangalore, application form only), six already expired to their employer board index, and one host returned HTTP 403. Both captures are recorded in a dated vacancy table in RESOURCE-LIBRARY.md with an explicit statement of what two rows cannot support: demand, pay, remote eligibility or junior expectations. The failure rate is itself the finding — vacancy URLs are short-lived — so m20 must repeat this by hand across many employers.

Authenticated free tool export workflows remain **open and cannot be closed by reading**. No account was created and no sign-in was attempted, so T01–T03 stay candidate. What did change is that nothing depends on them: R49 (MDN, SVG written by hand) is a verified account-free route to producing and exporting vector artwork using only a text editor and a browser, so no required exercise anywhere in the course needs a hosted design account.

App changes: module tabs, the level and module labels, the per-lesson effort estimate and the published-module counts are now derived from src/modules.ts and the lesson steps instead of being hard-coded to two modules and 120 minutes. The reader renders bringForward, objective, misconception, free tool path, assigned resources with their limits and fallback, and each criterion's four levels, repair and recheck. Legacy lessons keep the previous rendering because the new fields are absent.

Verified on 6 September 2026: npm run docs:generate and npm run test:content pass, including the extended contract checks; npm run build passes both TypeScript projects and the client and worker bundles; the ten-check backend suite (npm run test:cloud) passes against a local worker. A direct probe with the isolated test account saved and read back practice on m03-l01-v1, m03-l10-v1, m04-l05-v1 and m04-l08-v1, confirmed that an unknown lesson ID (m05-l01-v1) is rejected with 404 — an existence check, not a module-status gate, which the runtime does not implement. The probe also set a bookmark to m04-l08-v1 and confirmed a stale-revision write is rejected with 409 while the server position is preserved. In the browser at 375x812 the four module tabs wrap without horizontal overflow, Module 3 lists ten lessons under the correct level and module label, and a lesson renders its objective, misconception, assigned reading, free tool path and expandable criteria with all four scores and the repair. Probe writes went to the shared disposable test account; Haru's records were not touched.

Not re-run this session, because no persistence, authentication or synchronization code changed: the offline queue, service-worker reload, second-device and cross-account isolation matrix. The nonfatal Workbox inlineDynamicImports deprecation remains. No deployment was performed and no hosted verification was repeated.

Closed a latent gap found during review: the API and the MCP tools validated only that a lesson ID existed, never that its module was published, so a lesson drafted for a still-planned module would have become reachable the moment its file was imported. src/lessons.ts now exports isPublishedLesson, publishedLessons and publishedLessonIds; the learning-position route, the lesson-scoped route guard, the MCP lesson schema, findLesson, the publishedLessons listing and the studio all gate on that set. npm run test:content asserts the gate against a synthetic catalog covering a published module, a planned module, an unknown module and a legacy week lesson, and separately asserts that every authored lesson currently belongs to a published module. The check was mutation-tested: forcing the gate to always allow makes test:content fail with "a lesson in a planned module must never be exposed", and restoring it passes. The ten-check backend suite and the new-lesson probe both pass against the gated server.

Still pending: m05 onward, formal scored assessment and repair software, the richer tracker fields, market positioning sources, a real multi-employer hiring study at m20, an executed authenticated tool workflow, and project briefs. Do not describe these as complete.

---

# Self-paced release — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. Earlier entries below are historical and their calendar proposals are superseded by COURSE-REQUIREMENTS.md.

Implemented: Levels → Modules → Lessons, no completion deadline; two renamed published modules with twelve stable lesson IDs. Full 21-module map (including baseline) covers all 17 areas. RESOURCE-LIBRARY.md has 28 verified public readings, three separately qualified candidate tool workflows, an unavailable retrieval and explicit advanced research gaps. Required learning excludes paid access; tools have local alternatives. The course is mapped, not fully authored.

Added account-owned reading position with stable sections, server revisions/timestamps, offline queue and conflict protection independent of draft synchronization. Creator browsing uses the creator bookmark. Continue falls back from bookmark to unfinished practice to first core. Cumulative minutes no longer have a 1440-minute cap. Existing practice and feedback schema/IDs stay intact.

Verification completed locally: content coverage/prerequisites/resource IDs/generated-doc consistency; TypeScript/client/worker build; backend authentication/CSRF/concurrency/feedback/OAuth/MCP suite plus bookmark isolation and stale revision checks. Browser: first login, read-only section save, reload, second isolated browser context, offline reconnection, stale offline conflict preserving server, missing lesson/section fallback using mocked GET responses, mobile 390x844 without horizontal overflow. Offline/conflict tests deliberately cause network/409 console entries. Original vision SHA256 remains 2DE612EE9517A761ACEF52507D25FDD83B65DC22BE1C9F76F84816B20033F26C. Nonfatal Workbox inlineDynamicImports deprecation remains.

Production migration 0003_learning_positions applied. Hosted verification and final release identifier are recorded in docs/VERIFICATION-SELF-PACED.md.

Still pending as at that release, and superseded by the entry above where they differ: m03 onward lessons (m03 and m04 have since been authored), remaining advanced subtopic research, authenticated optional tool workflow tests, formal scored assessment/remediation software, richer tracker and representative current India/remote hiring evidence. See RESOURCE-LIBRARY.md for the current gap ledger; do not describe these as complete.

---

# Planning and progress record

## Confirmed decisions — 5 September 2026

- The user is the course creator; Haru is the learner. References to learner background describe her.
- GitHub repository: https://github.com/veerpatta/HaruCourse.
- App direction: installable PWA, free-tier Cloudflare hosting, D1 and authenticated MCP.
- Local notebook plus explicit cloud synchronization and creator review are implemented; hosting is live.

- Prepare for India plus international remote roles.
- Keep lessons and records in local course files initially.
- Build on Applied Arts and professional visual design experience.
- Plan around 10–14 hours per week alongside a full-time job.
- Prioritize practical ability, honest evidence, and three strong core projects.

## Current state

- App foundation implemented on `codex/course-app-foundation`: dashboard, level map, baseline, browser-local practice records, review/backup exports, install manifest, and offline service worker.
- Verified locally: TypeScript/build, Cloudflare dry run, desktop/mobile rendering, required review fields, save/reload, export contents, and offline reload/navigation. No browser console errors reported.
- Cloud milestone implemented and verified locally: authenticated learner/creator roles, D1 revision history, conflict-safe saves, versioned feedback, backup import, OAuth PKCE, scoped MCP tools, and connection revocation.
- Cloudflare deployed via the authorized CLI on 6 September 2026: https://harucourse.raj-39e.workers.dev. Hosted learner/creator login and OAuth MCP reads passed. Actual device installation and connection from the learner’s AI account still need acceptance checks. Billing-plan visibility remains unavailable; no plan upgrade was performed.

- Blueprint v0.1: drafted; workload and module allocation provisional.
- Initial source check: completed; representative hiring research still pending.
- Baseline diagnostic: drafted, not attempted or reviewed.
- Full daily curriculum, curated resource library, detailed tool paths, project briefs, and tracker: not yet produced.
- Completed learner hours: no hours reported.

## Next production steps

1. Complete hiring evidence table and requirements-to-curriculum coverage check.
2. Review diagnostic when submitted; adjust level hours and exemptions.
3. Write detailed project briefs and assessment rubrics.
4. Draft Month 1 and its first seven-day plan, with checked resources and two-hour limits.
5. Create the complete local tracker and expand later daily lessons in coherent batches.

## Future session record template

- Session ID/date:
- Topic and actual minutes:
- Resource completed:
- Assignment and submission path:
- Status:
- Portfolio contribution:
- Tool skill practiced:
- Confidence (1–5):
- Quiz score where applicable:
- Mentor feedback and evidence:
- Revision required:
- Next session and schedule adjustment:

When resuming, read this record and the latest submitted work. A message such as “Day 7 completed” triggers evidence review; it does not automatically establish mastery.

- Username login added: Haru (`haru`), creator (`itsme`), and isolated shared test learner (`test`, password-free). Credentials are private in `.secrets/login-credentials.json`; old key login is retired.

- Published Week 1 in the app and `WEEK-01.md`, with five core/two optional lessons and separate records. Practice now auto-loads and saves with visible status, local draft recovery, and conflict resolution. Creator review and MCP support lesson IDs. Full later-week content remains pending.

- Week 2 published: five two-hour core lessons on research planning, evidence synthesis, prioritization, prototyping, and a small testing/revision loop. Added week selection, saved-work continuation, and next-lesson navigation. Material preserved in WEEK-02.md.

## Guiding brief reaffirmed — 6 September 2026

The original request is preserved in COURSE-VISION-ORIGINAL.md. COURSE-REQUIREMENTS.md maps all 17 curriculum areas and supporting programs, records current gaps, and sets the updated production order. docs/COURSE-AUTHORING.md defines daily lessons, tools, project briefs, assessment, resource and publication requirements. The broad apprenticeship remains the purpose; workshops are only an introductory example. Current work is aligned but incomplete. No full 2026 hiring study or learner mastery is claimed.
