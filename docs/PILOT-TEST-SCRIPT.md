# Pilot test script — beginner pattern (4 October 2026)

Purpose: decide, with the intended learner and where practical 3–5 non-technical graphic designers, whether the redesigned starter journey works **without coaching**. This script is the plan's learner gate. Nothing in it has been run yet; results belong in PROGRESS.md and [the improvement-plan verification](VERIFICATION-IMPROVEMENT-PLAN.md).

## What is being tested

1. **Starter journey** — Module 1 Lesson 1 (`week1-day1-v1`), all three sessions, including a pause and a resume on another day.
2. **Research route** — Module 5 Lesson 5 (consent and data plan) on the supplied, non-participant route.
3. **Flow / UI task** — Module 7 Lesson 7 (exception table with slips, mistakes and system faults).
4. **Testing and revision** — Module 10 Lesson 8 (repair, predict, re-test) on the self-pilot route.
5. **Optional technical starter** — Module 12 Lesson 2 with the runnable starter file.
6. **Transfer** — the "Use it on a new case" task of Lesson 1, attempted again after at least one day.

## Set-up (observer)

- **Accounts (once):** `node scripts/create-pilot-learners.mjs 5` writes private accounts pilot-1 … pilot-5 to the ignored `.secrets` folder; apply them with `npx wrangler d1 execute harucourse --remote --file .secrets/pilot-seed.sql`. Give each participant only their own username and password. After the pilot, `node scripts/create-pilot-learners.mjs --close` writes the SQL that deactivates them; delete records on the date promised in consent.
- **Reviewing:** as the creator, open Account → Learner workspace and choose the participant. Reviews you save go to that participant only; browsing never changes their progress or bookmark. Haru stays the default workspace.
- **Recording:** one [observation sheet](PILOT-OBSERVATION-SHEET.md) per participant. `node scripts/pilot-report.mjs --remote` reports what saved records show (finish, minutes, days used, transfer answer, checks, reviews); observer-only measures stay on the sheet.
- Use the participant's own device where possible. Use a dedicated learner account; never Haru's records for someone else, and never the creator account.
- Explain only: "Please use the course as if I were not here. Think aloud if you can. I cannot help during the task; I will answer questions afterwards." Consent: what is recorded (notes only, no recording unless separately agreed), where notes are kept, deletion date.
- Do not demonstrate, hint or answer questions during tasks. If the participant is stuck for more than three minutes, ask "What would you do now if I were not here?" and record it as an intervention.

## Tasks (read aloud exactly)

1. "Open the course and start the lesson it recommends." (Expect: Learn → Your next step → Lesson 1.)
2. "Work through the first session until the course suggests a pause, then stop." (Expect: pause point after entry 1.)
3. *(Later session)* "Open the course again and continue where you left off." (Expect: welcome-back panel, same action.)
4. "Finish the lesson and say whether you are ready for someone to review it." (Expect: Finish practice, then Ask for a review or self-review.)
5. "Here is a new screen. Use what you learned." (Lesson 1 transfer task, answered before seeing anchors.)
6. Repeat 1–4 for each additional lesson in the list above.

## Record for every task

| Measure | How |
|---|---|
| First misunderstanding | The first moment the participant does something the course did not intend; quote their words. |
| Help used | Each in-app help used (examples, terms, AI activity, supplied walkthrough) and each observer intervention. |
| Time to first useful artefact | Minutes from opening the lesson to the first saved answer that meets its "Enough for now" line. |
| Abandoned actions | Any action started and left without an answer, and why (participant's words). |
| Restart / resume | Did resume open the right action? Did they recognise their previous answer? |
| Independent explanation | Ask afterwards: "Explain the difference between observed and inferred, using your own example." Score with the Lesson 1 criteria anchors. |
| Artefact quality | Reviewer scores the saved version against the lesson criteria (0–3), without seeing the think-aloud notes. |

## Gate

At least 4 of 5 participants independently complete the starter journey and meet the agreed artefact criteria on an unfamiliar brief (task 5). With fewer participants, report individual results, not a percentage. Retest every critical blocker after it is fixed. Small-pilot success is a release decision for this audience, not a statistical claim.

## After the pilot

- List each blocker with the lesson, action ID and quote. Classify: teaching, interface, route, privacy.
- Fix, then rerun only the affected task with a participant who has not seen it.
- Update the readiness rubric in [the improvement-plan verification](VERIFICATION-IMPROVEMENT-PLAN.md) with the evidence and reasons; never average away a critical failure.
