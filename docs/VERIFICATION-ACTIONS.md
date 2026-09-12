# Lesson 1 actions, time and progress — 12 September 2026

## Scope

`week1-day1-v1` now presents 48 small actions through Learn → Do → Check → Your work. All 36 shipped worksheet field IDs, five evidence entries, two improvements, six sorter questions and three reasoning checks remain. Answers, feedback reveals, current action and chosen save route persist. Other lessons receive shared tracking/check persistence and the authoring contract; their teaching has not been rewritten into this action flow.

Practice completion is explicit and validated in the client and server. It is distinct from review status, confidence and mastery. Substantive edits reopen finished practice; time changes do not. The course denominator is 221 required teaching lessons, excluding the baseline and three optional lessons. Existing records receive no inferred completion credit.

Automatic time counts focused, visible course use after interaction, pauses on leaving, and stops after five minutes without input. Manual pause survives navigation/reload. External work is added manually. Fractional minutes, bounded segment IDs and absolute elapsed checkpoints prevent rounding loss and replay. The device uses a single active-tab lease; cross-device conflicts still require an explicit choice between drafts.

## Automated checks

- `npm.cmd run docs:generate`, `npm.cmd run test:content`, `npm.cmd run test:worksheet`, `npm.cmd run test:learning` passed.
- Both typechecks and `npm.cmd run build` passed. Main script is 5,699.27 kB (1,613.39 kB gzip); the existing large-bundle warning remains. Module splitting is deferred.
- All 13 `test:cloud` groups passed against the local Worker and isolated local fixtures, including account isolation and conflict behavior.
- `scripts/test-learning-cloud.mjs` passed locally: full learning/timing round-trip, worksheet-only review, incomplete completion rejected, stale write rejected, second-session read, edit reopening and original test-record restoration.
- Pure regression checks cover unchanged legacy records, all field/action IDs, invalid choices, unscored formative answers, required/optional denominators, time fractions, idempotent checkpoint replay, clock rollback, correction and caps.

## Real Chrome checks using the test account

- Completed the 36 worksheet fields and all nine saved questions. Feedback waits for an answer; incorrect attempts remain formative and can continue. An inline repair can edit the learner's answer.
- Reload resumed the exact action and saved answer. Offline typing and reload retained the draft. Reconnection saved it.
- Created a genuine stale revision while an offline draft existed. The conflict UI displayed both versions; Keep my draft preserved the chosen offline work.
- Finish practice reached 100%; My work showed 1 of 221 required lessons (0.4%). Editing a reflection reopened practice. A worksheet-only record remained ready for review with empty notes and work reference.
- Tested viewports 320×740, 390×844, 768×1024 and 1440×1000. No horizontal overflow; section controls, question options and action buttons wrap. The timer is inline and does not cover the worksheet. Keyboard activation, focus movement and responsive visual layout were checked.
- Applied a waiting service-worker update through Update now in Chrome; the page reloaded into the new action/timer experience.
- The timer retained cumulative lesson time across Learn → Do. A second tab's Resume was refused while the first tab owned tracking, then succeeded after the first tab was paused. Background focus switching through the automation surface was inconclusive; physical tab/phone background behavior remains an observation gap.

## Remaining evidence boundaries

These are agent QA results, not observations of Haru. Her uncoached Lesson 1 walkthrough remains pending before changing the next lesson's teaching. Native iOS/Android keyboard behavior, long device sleep, and sustained multi-device timing have not been observed on physical phones. The five-minute boundary and replay arithmetic have automated coverage; a full five-minute real-browser idle run is not claimed. Other lessons' older supported attempts/sorters are not all persisted by this change. No new video playback or subtitle verification is claimed; Lesson 1 retains its optional verified assignment and complete written route.

## Release

Release metadata and hosted checks will be recorded below after deployment. No database migration is needed: the existing version-1 JSON record gains optional members. Published IDs, record keys and existing work remain intact. Older cached clients should accept the Update now notice before using records containing the new members. Prefer a forward fix over rolling back the server to a strict schema that predates those members.
