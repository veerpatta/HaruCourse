# HaruCourse — Complete Project Plan

Updated: 6 September 2026. This is the main continuation document for the course and its web app. It records agreed decisions, implemented work, remaining work, and acceptance criteria. Planned lessons are not represented as completed content or learner achievements.

## 1. Purpose and people

Build a practical, broad Product Design apprenticeship for Haru, with the repository owner acting as course creator and mentor. Prepare her for India and international remote opportunities that accept applicants based in India. Her Applied Arts/UI-UX academic background and roughly five years in graphic design, communication, marketing, and social media are starting strengths; recent sales work is adjacent experience, not product-design seniority. Rebuild current UX/product knowledge and give dedicated support for web fundamentals.

The product should let her learn, practice, submit evidence, receive critique, revise, and build a credible portfolio on mobile or laptop. Prioritize demonstrated ability over certificates, deadlines, visual polish alone, or learning every tool. Do not force an industry niche.

## 2. Delivery and budget decisions

- GitHub repository: https://github.com/veerpatta/HaruCourse. Main is the integration branch after this release.
- Live PWA: https://harucourse.raj-39e.workers.dev.
- MCP endpoint: https://harucourse.raj-39e.workers.dev/mcp.
- Maintain local, editable course documents in Git alongside the web app. No paid LMS is needed.
- Target zero additional cost within provider free allowances. Do not upgrade plans, buy a domain, or add paid AI calls without explicit authorization.
- Cloudflare CLI deployment is authorized. No plan upgrade has been made; CLI billing access is unavailable, so zero billing has not been independently certified.
- Use existing/free design tools where adequate. Check current feature restrictions and document a free fallback before requiring a resource.

## 3. Learning-program design

Budget 10 core hours per week in five two-hour sessions, with optional catch-up up to 14 hours. A typical session allocates 25 minutes to learning, 70 to practice, 15 to review, and 10 to documentation. Adjust research and project days without exceeding the two-hour core limit.

The provisional program totals 620 hours: 62 weeks at 10 hours/week, about 52 at 12 hours/week, or 44 at 14 hours/week. Allow for interruptions and remediation; recalibrate from actual pace after four weeks. Project, research, tool, documentation, and planned iteration hours are already included. Advanced/expert practice continues beyond job readiness through real releases and repeated independent work.

Organize content as **Level → Month → Week → Day**. Every daily lesson must contain:

1. Stable lesson ID, version, prerequisites, topic, and learning objective.
2. Why the topic matters for product work.
3. Specific read/watch/do instructions with checked direct resource links.
4. A bounded time budget, stopping point, and optional extension outside the core hours.
5. A practical exercise and assignment where applicable.
6. Expected deliverable and evidence/submission instructions.
7. Understanding check and an assessment rubric where appropriate.
8. Portfolio contribution, tool skills practiced, and the next step.

The detailed curriculum blueprint, coverage, portfolio strategy, assessment rules, and source-research backlog are preserved in section 10 below.

## 4. Implemented application

| Area | Current behavior |
|---|---|
| Entry | Login appears before the course workspace. Returning visits restore a valid session. |
| Accounts | `haru` is the learner; `itsme` is the creator; `test` is a shared password-free learner with separate cloud records. |
| Credentials | Requested credentials live only in Git-ignored `.secrets/login-credentials.json`. D1 stores salted password hashes. Old key login is retired. |
| Persistence | HttpOnly, Secure production session cookie lasts 30 days. Offline profile cache is expiry-bounded and cannot authorize cloud API access. Logout clears remembered entry. |
| Course | Responsive dashboard, seven-level map, baseline diagnostic, and published Week 1. Later weeks remain planned. |
| Notebook | Per-account local draft with reflection, work reference, minutes, and readiness. Haru can recover the legacy draft. |
| Backups | Markdown review export and validated JSON import/export; replacement downloads the previous draft first. |
| Cloud records | Automatic save/load for baseline and each published lesson, with local drafts, revision conflicts, and immutable history. |
| Reviews | Creator feedback belongs to the exact submission revision. Creator cannot overwrite learner progress. |
| AI access | OAuth PKCE consent, scoped MCP tools, visible AI feedback, and connection revocation. |
| Offline/install | Install manifest and cached public lesson/app content; browser installation support depends on device. |

The test account must remain isolated from Haru's cloud records and creator permissions. It is a shared sample-work space. Do not put passwords or private student submissions into Markdown, committed files, or public assets.

## 5. Technical architecture and operating model

React + TypeScript + Vite provide the frontend. `src/course.ts` contains the current lesson/map data; root Markdown files contain planning. A bundled Workbox service worker caches public assets and excludes API, OAuth, consent, and MCP routes. LocalStorage holds per-account drafts and the bounded offline profile, not passwords or bearer tokens.

A Cloudflare Worker serves static assets and authenticated API routes. D1 contains users, sessions, login-attempt buckets, progress, submission history, and versioned feedback. KV holds OAuth provider state. The official Workers OAuth provider and MCP SDK share the same authorization/data functions used by the app. Writes have ownership checks, validation, same-origin protection where cookies are used, and optimistic revision checks.

Use the configured account and bindings in `wrangler.jsonc`. Use migrations for schema changes; do not recreate existing production resources. Never run the destructive/local integration scenario against Haru's production progress. Keep generated credentials, seed SQL, test artifacts, and `.wrangler` state outside Git.

Commands: `npm.cmd ci`, `npm.cmd run build`, `npm.cmd run db:local`, `npm.cmd run dev:cloud`, `npm.cmd run test:cloud`, `npm.cmd run check:deploy`, and `npm.cmd run deploy`. Detailed provisioning and recovery instructions are in `docs/CLOUD-SETUP.md`.

## 6. AI and MCP teaching workflow

The external AI client supplies its own model; HaruCourse does not make paid model API calls. Current tools read progress, the lesson, rubric, and feedback; scoped writes save practice or AI feedback. A learner can ask for progress, the next exercise, a review of submitted work, or a critique against a rubric.

Use real screenshots/PDFs or accessible image evidence in the AI client. A private Figma link or local filename alone does not establish access to the design. Distinguish observed evidence, assumptions, simulated data, and actual product outcomes. AI critiques remain labelled separately from creator reviews and never automatically mark mastery.

Remaining end-to-end acceptance: connect Haru's actual compatible AI account, complete consent, read progress, critique accessible evidence, save permitted feedback, verify it appears in the app, and revoke the connection. Client/plan compatibility remains unverified. Manual exports stay available as a fallback.

## 7. Remaining roadmap and completion criteria

| Priority | Work package | Completion criteria |
|---|---|---|
| Next | Current hiring evidence | Approximately 15–20 dated employer postings across India and remote roles open to India; separate junior expectations from advanced benchmarks and map recurring skills to curriculum. |
| Next | Baseline review | Haru submits the diagnostic; creator reviews actual evidence, identifies gaps, and adjusts hours/exemptions. No assumed mastery from her background. |
| Next | First month and launch week | Publish complete daily lessons, checked free resources, exercises, outputs, two-hour limits, quizzes, and rubrics; include flexible catch-up/rest choices. |
| Next | Three project briefs | Define participant access, problem scope, deliverables, research, states, accessibility, testing, metrics, constraints, and case-study evidence. |
| Next | Multi-lesson tracker | Extend the baseline-only data model and UI to stable lesson IDs; retain drafts, revision history, feedback, actual minutes, and migration compatibility. |
| Then | Assessment progression | Model submitted, reviewed, repair-needed, completed, portfolio-ready, and mastered distinctly; creator decisions require evidence and revision references. |
| Then | Content authoring | Add draft/publish lesson revisions and creator path adjustments; keep published versions associated with submissions. |
| Then | Resource and tool library | One core resource and fallback per lesson, checked date, required/optional marker, tool target level, exercises, and free-tier constraints. |
| Then | Curriculum expansion | Produce subsequent months in coherent reviewed batches; increase practical work and reuse the three projects without double-counting hours. |
| Then | Portfolio/career | Three reviewed case studies, honest transition narrative, resume/LinkedIn, portfolio presentation, interview drills, and role-fit research. |
| Acceptance | Device/AI checks | Actual phone/laptop installation, session return behavior, offline lesson access, and learner-specific AI connection verified. |
| Ongoing | Maintenance | Check resource links/tool changes, backup recovery, accessibility, data ownership, quotas, and deployment behavior as features change. |
| Later | Advanced growth | Strategy, service/enterprise design, deeper experimentation, leadership, and advocacy grounded in real collaboration and delivery. |

No content editor, upload storage, email recovery, automatic sync, or complete day-by-day curriculum exists yet. Add these only when they serve the next learning milestone. Self-service account recovery is future work; current recovery is an administrator operation.

## 8. Assessment and tracking contract

Assess framing, research evidence, flows/states, interface craft, accessibility, testing/iteration, feasibility, and communication on the existing 0–3 rubric. Applicable critical dimensions must reach 2, without unresolved blockers to the primary task or material exclusion. Assign focused two-to-four-hour remediation when needed and update the schedule.

A completion message triggers an evidence review, not automatic mastery. Record session ID/date, topic, actual minutes, resources, submission reference, status, portfolio contribution, practiced skills, confidence, quiz score where useful, feedback, remediation, and next step. Mastery requires repeated independent transfer after a delay.

Keep learner achievements separate from implementation/QA progress. Current learner completion hours are unreported; the baseline has not been assessed. Test records never count toward Haru's progress.

## 9. Verification and continuation checklist

Already verified: frontend/server builds, local ownership/conflict/feedback/OAuth/MCP tests, production login for all accounts, authenticated production progress reads, hosted MCP reads, mobile rendering, login gate, remembered reload, logout, and local offline restore. See `docs/VERIFICATION.md` for evidence and limitations. Hosted learner write flows, actual native installation, and her AI-client experience require their own acceptance checks.

When continuing:

1. Read this plan, `PROGRESS.md`, and the relevant lesson/submission evidence.
2. Inspect the current branch, uncommitted changes, and remote main before editing.
3. Choose the next bounded milestone from section 7; preserve the budget and evidence rules.
4. Update the app and its lesson documents together where appropriate.
5. Run checks relevant to the change; use isolated test data for write tests.
6. Commit/push authorized changes, deploy app changes when appropriate, and record actual verification. Never report a planned feature or a local-only check as hosted completion.

## 10. Detailed curriculum blueprint

The following preserves the current full curriculum blueprint in this single plan. The source document remains `COURSE-BLUEPRINT.md`; update both when curriculum decisions change.

# Course blueprint — version 0.1

Planning date: 5 September 2026

## Learner and initial role target

Your Applied Arts degree and professional visual communication experience are probable strengths in composition, typography, communication, and responding to business needs. These are hypotheses until work is reviewed. Past UI/UX study gives familiarity, but does not establish current product design competence.

We will assess research, product reasoning, web behaviour, interaction states, accessibility, systems, testing, and collaboration directly. Sales experience can support customer listening and commercial awareness; it should remain accurately described as sales experience.

Provisional application target: Associate/Junior Product Designer or UI/UX Designer roles with mentorship and meaningful product work. Consider unlevelled Product Designer roles when responsibilities match demonstrated ability. Five years in adjacent design work should strengthen positioning without being presented as five years of product design. Reassess level after the second project.

Use the same core competencies for India and international remote applications. Add written decision records, asynchronous critique, recorded presentations, timezone handoffs, and clear implementation specifications. Before shortlisting a remote vacancy, verify that it accepts applicants working from India.

## Workload and sequence

These are curriculum design estimates, not measured completion times or hiring guarantees. Project work, reading, tool practice, documentation, assessment, and planned iteration are INCLUDED in the hours below. Optional advanced work is excluded.

| Level | Hours | Weeks at 10 h/week | Approximate study months at 10 h/week | Main outputs and tool milestones |
|---|---:|---:|---|---|
| 0. Diagnostic and setup | 10 | 1 | Month 1 | Baseline, skills map, submission routine |
| 1. Modern product and UX foundations | 60 | 6 | Months 1–2 | Product teardown, UX reasoning, Figma basics, focused visual refresh |
| 2. Research, problem framing, IA and flows | 100 | 10 | Months 2–4 | Research plan, interviews, synthesis, opportunity framing, project 1 low-fidelity tests; FigJam or equivalent |
| 3. Interface, interaction, responsive web and accessibility | 130 | 13 | Months 4–7 | Tested project 1, project 2 responsive prototype; components, Auto Layout, HTML/CSS and browser exercises |
| 4. Design systems and product delivery | 100 | 10 | Months 7–10 | Documented design system, project 2 iteration and handoff; tokens, variables, tickets, design QA |
| 5. Independent product work, analytics and AI | 140 | 14 | Months 10–13 | Project 3, metrics plan, complex states, AI evaluation, advanced prototype and stakeholder review |
| 6. Portfolio and application readiness | 80 | 8 | Months 13–15 | Three reviewed case studies, portfolio, resume, interview and presentation practice |
| **Total** | **620** | **62** | **About 14.3 study months** | **Readiness assessed from work** |

Month bands overlap because stages do not begin on calendar boundaries. At 12 h/week this is 51.7 weeks (11.9 months); at 14 h/week, 44.3 weeks (10.2 months). Allowing a further 10–15% for interruptions and extra remediation gives roughly 11–16.5 calendar months across the capacity range. Update the forecast using actual pace after four weeks. Do not add project hours twice.

Advanced study follows job readiness: strategy, service design, enterprise systems, experimentation depth, leadership, and design advocacy. Budget this separately after the core program. Expert performance requires repeated real product decisions, releases, outcomes, and collaboration; course completion alone cannot establish it.

## Coverage architecture

- Foundations: product/UX/UI/graphic design distinctions; PM and researcher roles; company lifecycle; human-centered design; design thinking; user, business, and product goals; targeted visual principles and critique.
- UX and discovery: mental models, cognitive load, affordances, signifiers, feedback, relevant UX laws and their limits, research methods, ethics, recruitment, bias, synthesis, JTBD, journeys, and evidence-based use of personas.
- Structure: content, labels, taxonomies, navigation, card sorting, tree testing, task flows, authentication, onboarding, checkout, search, happy paths, failures, and recovery.
- Craft: sketching through high fidelity, responsive layout, typography and spacing systems, forms, tables, charts, dashboards, components, loading/empty/error states, interaction and motion.
- Accessibility: integrated into each project plus dedicated instruction in WCAG, focus, keyboard use, screen readers, touch targets, accessible forms, and reduced motion. Visual mockups alone cannot prove implementation accessibility.
- Systems: tokens, component architecture, variants, properties, variables, naming, documentation, governance, change management, and accessibility testing.
- Web and delivery: HTML structure, CSS layout, responsive behaviour, JavaScript concepts, browser tools, APIs, front/back-end concepts, feasibility, handoff, tickets, acceptance criteria, Agile/Scrum, QA, versioning, and releases. Coding goal: understand and adjust a small responsive interface and discuss behaviour with engineers.
- Product and data: value propositions, strategy, product-market fit, prioritization, MVPs, constraints, roadmaps, hypotheses, North Star metrics, funnels, activation, retention, instrumentation, experiment design, and A/B testing limitations.
- AI: separate AI-assisted work from designing AI experiences. Cover ideation, prototyping, research support, source verification, privacy, uncertainty, human control, conversational interfaces, agents, evaluation, and when to avoid AI. Never substitute invented participants for research.
- Career: case studies, honest transition narrative, resume/LinkedIn, networking, outreach drafts, portfolio talks, product sense, whiteboard exercises, critique, behavioural interviews, and role matching.

## Portfolio strategy

Choose exact problem domains after checking participant access. Keep the program broad and avoid a forced industry specialization.

| Project | Scope | Evidence required |
|---|---|---|
| 1. Consumer mobile task | One meaningful user problem and a bounded end-to-end flow | Research, framing, alternatives, prototype, usability findings, iteration, limitations |
| 2. Responsive web product | A service or commerce task across desktop and mobile | IA, content, responsive behaviour, accessibility, complete states, system documentation, handoff |
| 3. Complex operational workflow | Multi-step work with data, permissions, exceptions, and competing needs | Prioritization, complex interaction, analytics plan, feasibility decisions, critique and independent iteration |

AI can be a justified feature in project 3 or a fourth optional project. A fifth project is only useful if portfolio review identifies a meaningful missing competency. The design system is a dedicated assessed deliverable used in project 2 and tested against project 3.

Every project brief will specify problem, context, participants, business assumptions, research, synthesis, IA/flows, wireframes, UI, prototype, system use, testing, iteration, final solution, impact evidence, reflection, and case-study outline. Artifacts such as personas are conditional on their usefulness; learners explain omissions.

Keep an evidence log from the start. Distinguish observed usability results, simulated datasets, proposed metrics, and actual production outcomes. Never claim conversion or retention gains from an unshipped concept. Seek a small real collaboration when feasible; assess simulations honestly when engineering access is unavailable.

## Weekly teaching pattern

Five core sessions of two hours; a sixth session is optional catch-up/practice, and the seventh defaults to rest. A requested seven-day launch plan will include flexible review/rest options so it does not silently require 14 hours every week.

Typical session: 25 minutes learning, 70 minutes practice, 15 minutes review, 10 minutes documentation. Research/testing days may use nearly the whole block for practice. Split recruitment and longer assignments across sessions. Increase practical work as the learner progresses.

Each daily lesson must include: what to learn, why, read/watch/do instructions, time budget, exercise, assignment if applicable, expected output, understanding check, portfolio contribution, and direct resource links. Also include prerequisites, a stopping point at 120 minutes, and an optional extension that is excluded from the core budget.

## Assessment and progression

Use a 0–3 rubric: 0 absent or unsupported; 1 possible with substantial help; 2 independently competent for a bounded task; 3 strong reasoning across trade-offs and unfamiliar conditions.

Assess problem framing, evidence quality, flows/states, interface craft, accessibility, testing/iteration, feasibility, and communication. A module passes when every applicable critical dimension reaches 2, with no unresolved issue that prevents the primary task or materially excludes users. This is a course rubric, not an externally validated hiring score.

If a dimension falls short: identify the specific issue, assign a focused 2–4 hour repair, repeat a related task, then reassess. Schedule repairs within capacity and update dates. Quizzes check knowledge; they cannot compensate for weak practical work.

Job readiness requires three reviewed case studies, an independent bounded project, credible research, usable responsive flows, documented system use, tested iteration, a handoff/QA exercise, metrics reasoning, and a clear portfolio presentation. The learner should explain decisions and limitations without a script. Start role research and networking before the final stage; application timing follows evidence.

Tracking states: Not Started = untouched; Learning = studying; Practicing = applying with unfinished evidence; Completed = assignment submitted and reviewed against its criteria; Portfolio Ready = edited and cleared for external presentation; Mastered = repeated independent transfer to a new problem after a delay. Portfolio Ready applies to artifacts, so it is optional in a skill's progression.

## Tool policy

Provisional priorities to validate in the detailed tool roadmap:

- Essential: Figma for interface work; one lightweight research/flow workspace; browser tools; course records. Learn concepts in transferable terms.
- Important: Figma systems/prototyping features and handoff workflow; familiarity with one ticket/documentation workflow; one analytics environment.
- Useful when a project needs them: Framer OR Webflow for publishing, ProtoPie for interactions beyond the main prototype tool, motion tooling, behaviour analytics.
- Existing strengths/reference: Illustrator and Photoshop; avoid repeating training unless the diagnostic finds a gap.
- Optional substitutes: Miro vs FigJam, Notion vs local records, other AI and specialist tools. Do not require parallel mastery of equivalent products.

Before any paid dependency, record the required feature, current plan restrictions, and a free fallback. Each selected tool will get a target skill level, lesson sequence, exercise, mini-project, and curriculum placement.

## Research status and sources

This is an initial evidence pass, not a completed September 2026 hiring-market study. Job postings are examples, not a representative sample; listing availability and location eligibility must be rechecked. Senior postings inform advanced expectations, not beginner requirements.

- [Paytm Product Designer 2](https://jobs.lever.co/paytm/f4d11ada-d624-4bf8-9cb4-fb9f98a31670): end-to-end ownership and collaboration; India example, not an entry-level benchmark.
- [Remote Senior Product Designer](https://job-boards.greenhouse.io/remotecom/jobs/7762220003): end-to-end portfolio and impact; advanced benchmark, not evidence of India eligibility.
- [Monzo Staff Product Designer](https://job-boards.greenhouse.io/monzo/jobs/6994700): portfolio presentation; listing specifies UK remote, illustrating why remote eligibility must be checked.
- [Figma variables in prototypes](https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes): current documented variable/conditional prototyping workflow; page lists paid-plan access.
- [W3C Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/understanding/): reference for accessibility teaching and assessment.

Next research pass: collect approximately 15–20 employer postings across India and remote roles explicitly open to India, including junior/unlevelled roles; record seniority, location, required vs preferred skills, portfolio evidence, and observation date. Separate recurring requirements from isolated preferences. Validate current tool capabilities and curate one core resource plus one fallback per lesson. Keep enduring principles separate from dated workflow notes.

The resource library will distinguish required reading from reference material, include a small prioritized book list, and allocate a bounded weekly current-awareness session rather than daily content consumption.

## Implementation update — automatic practice and Week 1

Published `WEEK-01.md` and matching app lessons: five core sessions plus two optional days. Each includes teaching, a worked example, two-hour tasks, deliverables, understanding checks, review criteria, and checked references. The app starts in Lessons. Baseline and lesson records auto-load and save; offline drafts remain local and reconnect while open. Conflicts require an explicit copy choice. Creator feedback and MCP now accept published lesson IDs. The remaining roadmap begins with Month 1’s later weeks, assessments, and resource expansion; the full 620-hour course is still not authored.
