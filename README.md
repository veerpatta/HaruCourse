## Current improvement plan — 7 September 2026

[Guided learning experience plan](docs/LEARNING-EXPERIENCE-PLAN.md): improve the existing course lesson by lesson with clearer practice steps, editable worksheets, contextual help, optional verified videos, interactive exercises and easier save/resume. Preserve the established visual style and existing records. Start with shared UI and the first foundations lesson, then validate the pilot. Use browser-side exercises and bounded text synchronization within existing Cloudflare free allowances. The shared guided-practice UI and the first lesson (`week1-day1-v1`: steps, in-app worksheet, help, optional verified video, resume) are implemented; the plan's ledger and PROGRESS.md record which lessons are refined and what was verified.

## Concise course experience

- **Learn:** continue your saved lesson or choose a compact lesson row.
- **Course map:** expand levels and modules; Published and Planned are distinct.
- **My work:** open saved baseline/lesson notes and versioned feedback.
- **Account:** sign out, manage AI connections, export/restore lesson backups and find installation help.
- Lessons use **Learn → Do → Check → Your work**, one section at a time. Detailed explanations are optional.

Baseline and lesson Markdown are generated with `npm.cmd run docs:generate`. Future content follows [the authoring contract](docs/COURSE-AUTHORING.md). Current implementation verification and local/hosted state: [minimal experience checks](docs/VERIFICATION-MINIMAL.md).

# Haru Course

[Original course vision](COURSE-VISION-ORIGINAL.md) · [Requirements and alignment](COURSE-REQUIREMENTS.md) · [Authoring standards](docs/COURSE-AUTHORING.md)

[Complete project plan](PROJECT-PLAN.md) — agreed scope, implementation status, curriculum blueprint, roadmap, and continuation checklist.

An installable, responsive Product Design learning app for Haru, built by the course creator. React, TypeScript, Vite, and a generated offline service worker; with a Cloudflare Worker, D1 progress storage, and OAuth-protected MCP. Live app: https://harucourse.raj-39e.workers.dev. Hosted login and read-only OAuth MCP are verified.

## Run locally

Requires Node.js 22.15+ (or a supported newer release) and npm.

```powershell
npm.cmd ci
npm.cmd run dev
```

Production preview (includes the PWA service worker):

```powershell
npm.cmd run build
npm.cmd run preview
```

Cloudflare configuration validation: `npm.cmd run check:deploy`. Deployment command: `npm.cmd run deploy` after verifying the intended Cloudflare account and free plan. No deployment is required for local development.

## Current app scope

- Responsive Learn screen, expandable course map and saved-work list.
- Baseline plus 224 published lessons across Modules 1–20; experience refinement is a separate planned milestone.
- Practice reflection, work reference, optional session timer, confidence and review-readiness, with local recovery and account synchronization.
- Markdown review export and validated JSON backup import/export.
- Install manifest and offline app shell/course content after a successful initial online load.
- Username/password sign-in, automatic cloud saving with conflict protection, versioned creator/AI feedback, and revocable OAuth MCP access.
- No paid AI API calls; a connected AI client supplies its own model.

Saving a work reference does not upload the file. Ready for review is self-reported, not an assessment or notification. Practice and reading position synchronize automatically while the app is open; offline changes retry on reconnect; clearing browser data removes local drafts. Export a backup regularly. Deployment serves public course content, so do not place private submissions or credentials in the repository.

See [architecture and next milestones](docs/ARCHITECTURE.md). See [cloud setup](docs/CLOUD-SETUP.md) for local credentials, tests, and deployment prerequisites.

## Curriculum planning

Personal course for a designer transitioning from Applied Arts, graphic design, marketing, and sales into Product Design.

- Target: India plus international remote opportunities.
- Delivery: installable Cloudflare app with local Markdown course views.
- Pace: no deadline or daily requirement; two hours is optional session guidance.
- Status: all mapped teaching modules are authored; formal scored assessment software and the new experience refinement remain pending.

## Start here

1. [Course blueprint](COURSE-BLUEPRINT.md) — proposed structure, workload, projects, and assessment rules.
2. [Baseline diagnostic](BASELINE-DIAGNOSTIC.md) — a diagnostic that can span sessions to personalize the plan.
3. [Planning and progress record](PROGRESS.md) — decisions and next production steps.

The blueprint maps the published self-paced curriculum; effort estimates remain provisional. The resource library distinguishes verified reading from unverified tool workflows. Save assignment files alongside the course so future reviews can use actual evidence. The new plan improves the existing lessons without resetting them.

## Course authoring

Start with [AGENTS.md](AGENTS.md) and the [resource catalog](RESOURCE-LIBRARY.md). Run `npm.cmd run docs:generate` after editing course sources, then `npm.cmd run test:content`. Continue learning remembers the account-owned lesson and section, independently of practice drafts.
