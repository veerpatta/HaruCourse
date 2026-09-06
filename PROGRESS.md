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
