# Application architecture

React, TypeScript, and Vite render the installable course PWA. Course material lives in `src/course.ts` and the root planning Markdown files. The first baseline exercise is implemented; later daily lessons remain planned.

The service worker caches public app content. Authentication, API, OAuth consent, and MCP routes bypass the app shell and cache. Offline drafts remain in localStorage. JSON backup import validates data and downloads the previous draft before replacing it.

A Cloudflare Worker serves assets and authorized APIs. D1 stores users, hashed sessions, login rate limits, learner progress, immutable submission revisions, and feedback tied to those revisions. Optimistic revision checks protect against concurrent overwrites. Creator access is enforced server-side and scoped to the course’s single learner, Haru.

The official Workers OAuth provider uses KV for grants and token state. The Streamable HTTP MCP endpoint uses the official MCP SDK and the same authorization/data functions as the app. PKCE S256, explicit consent, bounded request bodies, active-user checks, read/write scopes, token downscoping, and revocation are implemented. No tool accepts arbitrary user identity. AI feedback records its source and cannot mark competency as mastered.

No server-side model calls are made. Design critique requires actual image evidence in the connected AI client; a saved private file reference alone is insufficient. There is no file-upload storage, email service, public registration, content publishing editor, or automatic synchronization.

The target remains zero additional cost within provider free allowances. Hosting awaits account-plan confirmation. See [setup and release prerequisites](CLOUD-SETUP.md). Local SDK/browser tests do not establish hosted availability, native device installation, or compatibility with the learner’s particular AI account.

Next work: publish the hosted app after Free-plan confirmation, verify an actual AI connection, and produce the first complete week of lessons with checked resources and assessment rubrics.
