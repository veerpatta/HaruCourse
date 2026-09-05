# Haru Course

An installable, responsive Product Design learning app for Haru, built by the course creator. React, TypeScript, Vite, and a generated offline service worker; prepared for Cloudflare Workers Static Assets.

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
- One baseline exercise; later modules clearly marked as planned.
- Practice reflection, work reference, actual minutes, and review-readiness stored in this browser.
- Markdown review export and JSON progress export. No import UI yet.
- Install manifest and offline app shell/course content after a successful initial online load.
- No API keys, paid AI calls, backend, database, login, or MCP endpoint yet.

Saving a work reference does not upload the file. Ready for review is self-reported, not an assessment or notification. Local progress is not synchronized; clearing browser data removes it. Export a backup regularly. Deployment serves public course content, so do not place private submissions or credentials in the repository.

See [architecture and next milestones](docs/ARCHITECTURE.md). Learner data must move behind authenticated APIs before adding remote MCP or creator review access.

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
