# Haru Course

[Original course vision](COURSE-VISION-ORIGINAL.md) · [Requirements and alignment](COURSE-REQUIREMENTS.md) · [Authoring standards](docs/COURSE-AUTHORING.md)

[Complete project plan](PROJECT-PLAN.md) — agreed scope, implementation status, curriculum blueprint, roadmap, and continuation checklist.

An installable, responsive Product Design learning app for Haru, built by the course creator. React, TypeScript, Vite, and a generated offline service worker; with a Cloudflare Worker, D1 progress storage, and OAuth-protected MCP. Live app: https://harucourse.raj-39e.workers.dev. Hosted login and read-only OAuth MCP are verified.

## Run locally

Requires Node.js 22.12+ (or a supported newer release) and npm.

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

- Responsive learner dashboard and full high-level course map.
- Baseline plus 12 published lessons across Weeks 1–2 (ten core, two optional); later weeks clearly marked as planned.
- Practice reflection, work reference, actual minutes, and review-readiness stored in this browser.
- Markdown review export and validated JSON backup import/export.
- Install manifest and offline app shell/course content after a successful initial online load.
- Username/password sign-in, automatic cloud saving with conflict protection, versioned creator/AI feedback, and revocable OAuth MCP access.
- No paid AI API calls; a connected AI client supplies its own model.

Saving a work reference does not upload the file. Ready for review is self-reported, not an assessment or notification. Local progress synchronizes only when you explicitly save/load cloud records; clearing browser data removes local drafts. Export a backup regularly. Deployment serves public course content, so do not place private submissions or credentials in the repository.

See [architecture and next milestones](docs/ARCHITECTURE.md). See [cloud setup](docs/CLOUD-SETUP.md) for local credentials, tests, and deployment prerequisites.

## Curriculum planning

Personal course for a designer transitioning from Applied Arts, graphic design, marketing, and sales into Product Design.

- Target: India plus international remote opportunities.
- Delivery: local Markdown files first; platform choice deferred.
- Capacity: 10 core hours per week; up to 14 when practical.
- Status: initial app foundation; curriculum planning continues and no learner assessments have been completed.

## Start here

1. [Course blueprint](COURSE-BLUEPRINT.md) — proposed structure, workload, projects, and assessment rules.
2. [Baseline diagnostic](BASELINE-DIAGNOSTIC.md) — one two-hour session to personalize the plan.
3. [Planning and progress record](PROGRESS.md) — decisions and next production steps.

The blueprint is a planning estimate, not the complete daily curriculum. Lessons, resource library, tool exercises, and the full tracker will be produced in the next stages. Save assignment files alongside the course so future reviews can use actual evidence.
