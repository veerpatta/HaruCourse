# Application architecture and build sequence

## Roles and budget

The repository owner creates the course; Haru studies it. The target is zero additional hosting/software cost within provider free allowances. No custom domain, paid AI API, subscription upgrade, or metered storage dependency is required for the initial app.

## Implemented foundation

React + TypeScript, Vite, lucide-react icons, and vite-plugin-pwa. Course content lives in `src/course.ts`; existing detailed Markdown planning remains at the root. `localStorage` stores a versioned baseline record. Exports provide a portable review package and a JSON record. The app is static and has no credentials or private server data.

Wrangler serves `dist` as static assets. The manifest includes mobile and desktop icons. Workbox precaches production code/content; prompt-based service worker updates avoid reloading an unfinished reflection. Production must use HTTPS; localhost is suitable for testing. Browser installation support varies. Native-device installation still needs an actual phone/laptop acceptance check.

## Next milestones

1. **Content:** validate the curriculum data model, turn month/week/day lessons into content files, and add the first complete week with checked resources. Preserve stable lesson IDs and versions.
2. **Records:** add validated backup import, submission versions, explicit feedback records, and stronger progress summaries. Distinguish working drafts, submitted work, and assessed competency.
3. **Identity and sync:** select a free authentication option, add owner/learner authorization, D1 migrations, per-user ownership checks, and save conflict handling. Restrict creator writes on the server, not with a view toggle. Keep local offline edits with explicit synchronization state and recovery.
4. **Creator experience:** draft/publish lesson revisions, review submissions, save rubric feedback, and adjust the learner's path. No email/messaging service required initially.
5. **MCP:** add an OAuth-protected remote Streamable HTTP endpoint. Expose bounded get-progress, get-lesson, get-submission, get-rubric, log-session, and save-feedback tools. Reuse the same authorized service functions as the app. Prevent clients from selecting another user's identity through tool parameters. Record source, submission version, timestamp, and author for feedback; keep writes scoped and auditable.
6. **Acceptance:** verify with the learner's actual AI account. Test authentication, a real progress read, actual accessible image evidence, permitted feedback write, and its appearance in the app. Keep manual exports working when a client or plan cannot connect.

MCP carries course data and actions; an external model supplies critique. Do not add a server-side AI API to make basic exports or progress work. Design reviews need screenshots/PDFs or another client-accessible representation, not only a link to a private Figma file. Large files can remain in existing learner-controlled storage initially.

## Verification boundaries

For this milestone verify dashboard and course navigation, reflection saving and reload, readiness validation, review/backup downloads, mobile layout, offline production reload, build/type checks, and Wrangler dry run. There is no server/database/authentication/MCP to verify yet. Never label static app completion as completion of those integrations.
