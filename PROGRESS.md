# Minimal course experience — 6 September 2026

Implemented locally: Learn, Course map and My work navigation; Account utilities; one-section-at-a-time Learn → Do → Check → Your work for the baseline and all twelve published lessons. Teaching now uses concise concepts, exact action lists, output checklists, explicit prerequisites and lesson-specific repairs. Examples and deeper reasoning are optional details. All current course Markdown views and the future authoring contract are updated.

Preserved: original vision checksum, published lesson IDs, record versions, storage keys, feedback revisions and account-owned bookmarks. Explicit section selection replaces scroll observation. Baseline keeps its original record and does not replace the published-lesson bookmark. Backups carry lesson IDs; compatible legacy baseline and matching conflict files remain supported.

Checks passed: documentation generation/content validation, TypeScript/Vite/PWA build, local backend/OAuth/MCP suite, desktop/mobile and keyboard checks, read-only reload, saved work, offline reload/reconnection, second-context restoration, stale bookmark and draft conflicts, creator isolation and version-tied review, bookmark fallbacks, matching/mismatched backup handling. Six assigned public reading sources were rechecked. Full evidence: docs/VERIFICATION-MINIMAL.md.

Release state: not deployed, committed or pushed in this revision. No remote learner records changed and no migration was introduced. Existing nonfatal Workbox warning remains. Formal assessment, later modules, native installation and authenticated optional-tool gaps remain pending.

Earlier entries below describe historical releases; use the current authoring contract for all future content.

---

# Self-paced release — 6 September 2026

Current plan: PROJECT-PLAN.md. Start future authoring with AGENTS.md. Earlier entries below are historical and their calendar proposals are superseded by COURSE-REQUIREMENTS.md.

Implemented: Levels → Modules → Lessons, no completion deadline; two renamed published modules with twelve stable lesson IDs. Full 21-module map (including baseline) covers all 17 areas. RESOURCE-LIBRARY.md has 28 verified public readings, three separately qualified candidate tool workflows, an unavailable retrieval and explicit advanced research gaps. Required learning excludes paid access; tools have local alternatives. The course is mapped, not fully authored.

Added account-owned reading position with stable sections, server revisions/timestamps, offline queue and conflict protection independent of draft synchronization. Creator browsing uses the creator bookmark. Continue falls back from bookmark to unfinished practice to first core. Cumulative minutes no longer have a 1440-minute cap. Existing practice and feedback schema/IDs stay intact.

Verification completed locally: content coverage/prerequisites/resource IDs/generated-doc consistency; TypeScript/client/worker build; backend authentication/CSRF/concurrency/feedback/OAuth/MCP suite plus bookmark isolation and stale revision checks. Browser: first login, read-only section save, reload, second isolated browser context, offline reconnection, stale offline conflict preserving server, missing lesson/section fallback using mocked GET responses, mobile 390x844 without horizontal overflow. Offline/conflict tests deliberately cause network/409 console entries. Original vision SHA256 remains 2DE612EE9517A761ACEF52507D25FDD83B65DC22BE1C9F76F84816B20033F26C. Nonfatal Workbox inlineDynamicImports deprecation remains.

Production migration 0003_learning_positions applied. Hosted verification and final release identifier are recorded in docs/VERIFICATION-SELF-PACED.md.

Still pending: deeper advanced subtopic research, authenticated optional tool workflow tests, detailed m03 onward lessons, formal scored assessment/remediation software, richer tracker and representative current India/remote hiring evidence. See RESOURCE-LIBRARY.md for specific research gaps; do not describe these as complete.

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
