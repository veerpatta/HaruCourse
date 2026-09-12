# Modules 1–5 action reader — 12 September 2026

## Scope and evidence

The creator approved this expansion after the Lesson 1 release. All 43 lessons in Modules 1–5 now use the same saved Learn → Do → Check → Your work reader. Lesson 1's 48 action IDs remain unchanged. The other 42 lessons have individually reviewed starting material and Check-to-field mappings in src/moduleActionPlans.ts. src/lessonActions.ts composes their existing authored teaching, demonstrations, supported attempts, five legacy timing steps and worksheet fields into the shared action model used by the app, API/MCP and generated Markdown.

All 616 original worksheet fields are retained. Optional quotes, optional sixth type-scale step and optional third competitive service can stay blank. Participant-only evidence is required only when the chosen status says a real consented session happened. Rehearsal and missing-access routes retain preparation and limitations; they never need invented evidence. Six explicitly simulated notes support the evidence/synthesis/journey lessons when no prior research exists.

Desktop uses a readable main column and task context beside it. Narrow layouts use one column, wrapping text, 44 px or larger action controls, a bounded overview and one inline repair editor. Task instructions and related saved answers stay available beside the active field. The contrast lesson keeps its offline calculator. The timer keeps controls in a stable layout and starts on completed clicks to avoid moving a control mid-tap. No additional paid service or hosted media is introduced.

## Automated checks

- All 43 action contracts passed: field coverage/uniqueness, permanent valid IDs, five legacy timing steps, every authored demonstration and supported attempt retained, all repair references resolve, bounded records and completion/reopening rules.
- All 43 local backend records passed: saved actions/questions, valid completion, invalid completion rejection, stale-write conflict, reopening after edits and restoration of original test records. Revisions/timestamps advance normally.
- All 13 existing local backend groups passed, including isolation, offline-compatible record shape, authenticated access, worksheet limits, feedback and OAuth/MCP behavior.
- Final docs generation/content check, worksheet regression, learning/timer regression, all 43 action contracts, both TypeScript checks and production build passed. The 43-record local integration was repeated after the conditional-route refinements and passed with originals restored.

Optional fields no longer create progress on an untouched lesson. Explicit completion remains separate from review and mastery. Previously explicit finishes survive the teaching expansion; time/navigation updates can still save. Substantive edits reopen the work and a new finish uses the current requirements. No migration or record-version change is needed.

## Per-lesson verification inventory

Each row passed the structural and local API checks above. It does not claim every action was entered by a person, or that Haru understands it.

| Lesson | Actions | Preserved fields | Saved questions |
|---|---:|---:|---:|
| week1-day1-v1 | 48 | 36 | 9 |
| week1-day2-v1 | 46 | 27 | 4 |
| week1-day3-v1 | 39 | 20 | 4 |
| week1-day4-v1 | 35 | 16 | 4 |
| week1-day5-v1 | 36 | 17 | 4 |
| week1-day6-v1 | 30 | 12 | 4 |
| week1-day7-v1 | 33 | 15 | 4 |
| week2-day1-v1 | 36 | 17 | 4 |
| week2-day2-v1 | 52 | 32 | 4 |
| week2-day3-v1 | 39 | 20 | 4 |
| week2-day4-v1 | 38 | 19 | 4 |
| week2-day5-v1 | 38 | 19 | 4 |
| m03-l01-v1 | 34 | 15 | 4 |
| m03-l02-v1 | 32 | 13 | 4 |
| m03-l03-v1 | 32 | 13 | 4 |
| m03-l04-v1 | 32 | 13 | 4 |
| m03-l05-v1 | 30 | 11 | 4 |
| m03-l06-v1 | 31 | 12 | 4 |
| m03-l07-v1 | 31 | 12 | 4 |
| m03-l08-v1 | 35 | 16 | 4 |
| m03-l09-v1 | 34 | 15 | 4 |
| m03-l10-v1 | 29 | 10 | 4 |
| m04-l01-v1 | 30 | 11 | 4 |
| m04-l02-v1 | 32 | 13 | 4 |
| m04-l03-v1 | 31 | 12 | 4 |
| m04-l04-v1 | 32 | 13 | 4 |
| m04-l05-v1 | 31 | 12 | 4 |
| m04-l06-v1 | 35 | 16 | 4 |
| m04-l07-v1 | 30 | 11 | 4 |
| m04-l08-v1 | 29 | 10 | 4 |
| m05-l01-v1 | 30 | 11 | 4 |
| m05-l02-v1 | 28 | 9 | 4 |
| m05-l03-v1 | 28 | 9 | 4 |
| m05-l04-v1 | 31 | 12 | 4 |
| m05-l05-v1 | 28 | 9 | 4 |
| m05-l06-v1 | 33 | 14 | 4 |
| m05-l07-v1 | 32 | 13 | 4 |
| m05-l08-v1 | 30 | 11 | 4 |
| m05-l09-v1 | 30 | 11 | 4 |
| m05-l10-v1 | 30 | 10 | 4 |
| m05-l11-v1 | 31 | 11 | 4 |
| m05-l12-v1 | 29 | 9 | 4 |
| m05-l13-v1 | 29 | 9 | 4 |

## Public resource access

The 32 distinct assigned reading URLs in these modules were checked. Thirty returned HTTP 200 directly with identifiable article titles. R02 and R57 failed the direct client fetch but were retrieved publicly through the web tool. W3C contrast and the GOV.UK consent/privacy pages were also read with the web tool. This is public article access, not an authenticated tool-workflow or new video-playback check. The existing free paper/in-app routes remain available. web.dev may localize its response; use its language selector if needed.

## Browser and release results

Browser QA used the signed-in local test account in the Codex Chromium browser. Screenshots/DOM checks covered 320 × 740, 390 × 844, 768 × 1024 and 1440 × 1000. Inspected layouts had no horizontal page overflow. Samples covered the original Module 1 pilot; Module 2 Lesson 2 supported questions, saved feedback and a long inline repair with a six-field selector; Module 3 Lesson 4 measurement/calculator; Module 4 Lesson 1 definitions/task instructions; and Module 5 Lesson 6 rehearsal and skipping empty Said evidence. This is sampled visual QA, not a claim of manually completing all 1,429 actions.

The Module 2 supported choice/reveal survived reload at the same action. A repair typed offline survived offline reload and reconnected successfully. The local Wrangler process separately stopped during an asset rebuild; the reader kept device drafts, displayed the unavailable-server state and recovered after the worker restarted. Course totals returned after reconnection. The Update now button swapped the saved reader without losing the action. Phone-width section clicks worked after the timer's start event changed from pointerdown to click, avoiding a layout shift during the tap.

Contrast inputs returned 21:1 for black/white and 4.478:1 for #777777/white, correctly below the normal-text threshold. Keyboard Tab showed a visible focus outline. Text inputs are 16 px; action controls and the final calculator inputs have at least 44 px targets. The final calculator sizing and clearer rehearsal copy also passed the build; hosted visual verification follows release.

Physical iOS/Android keyboard and long-background lifecycle tests, real screen-reader use and Haru's uncoached observation remain separate gaps. Desktop viewport emulation does not establish them. The existing all-course bundle remains large (about 1.62 MB gzipped); module splitting was not added to this teaching release.

## Release and hosted verification

Implementation commit `e98b810` was pushed to `main`. Cloudflare deployed version `c88ff667-839a-4967-8306-8c79d535755b` at 100% on 12 September 2026, 18:38 UTC, at https://harucourse.raj-39e.workers.dev. Wrangler dry-run passed; the existing D1/KV bindings were retained and no schema migration was needed.

All 43 hosted test-account records passed complete learning/worksheet round-trips, incomplete-finish rejection, stale-write rejection and reopening on edits. The integration restored original test records, advancing only their revisions/timestamps. Browser QA also used only the test account; Haru's records were not edited.

The live HTML, service worker, JavaScript `index-CO1klV3-.js` and CSS `index-Pskh__dC.css` matched the local build byte-for-byte by SHA-256. Health returned 200 and unauthenticated progress returned 401. The live test workspace showed the 13-lesson Module 5 list and the revised interview action at 390 px, including the explicit rehearsal stop condition. The live contrast calculator fit without horizontal overflow, returned 4.478:1 for #777777/white, and its inputs measured 47.375 px high with 16 px text. No client errors were observed in the hosted QA tab. Temporary browser viewport/network overrides were reset and QA tabs closed.
