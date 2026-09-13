# Beginner teaching verification — all 224 lessons

Implementation and local verification completed on 13 September 2026. Release evidence is added after the production deployment. This record covers all published teaching lessons from `week1-day1-v1` through `m20-l12-v1`. It does not claim learner observation or formal assessment.

## Beginner teaching now present

- Every lesson starts with a short everyday-language explanation, its first small result, up to three terms defined for that lesson, a labelled supplied example and the exact first answer the learner will later make.
- Teaching action headings name the idea being taught. Answer actions keep what to produce, how to start, a useful example where available and the definition needed at that point beside the answer control.
- Each lesson has one optional text-based AI learning activity after the first supported attempt. Its prompt names the lesson and return answer, uses supplied practice material, asks at most three questions and bars invented participants, evidence, impact and scores.
- Each AI activity has a complete course-only alternative tied to the visible supported question. The independent diagnostic has no coached teaching or AI prompt.
- Progress reports completed and total required actions and explicitly says this is saved work rather than mastery or a score. The timer distinguishes active in-course time, the five-minute idle pause, manually added external work and explicit practice completion.
- All published lesson IDs, action IDs, 2,866 worksheet field IDs, record version 1, storage keys, prior answers and feedback associations are retained.

## Local automated evidence

- `npm.cmd run docs:generate` regenerated `WEEK-01.md`, `WEEK-02.md` and `MODULE-03.md` through `MODULE-20.md` from the lesson source.
- `npm.cmd run test:content` passed course coverage, order, resource, lesson-contract and generated-document checks.
- `npm.cmd run test:worksheet` passed schema, stable field-ID and progressive-reveal checks.
- `npm.cmd run test:actions` passed all 224 flows: 2,866 preserved fields, 7,974 stable actions and 1,601 saved questions, including completion, reopening, beginner opening, lesson-specific AI prompt, named return answer and local alternative requirements.
- `npm.cmd run test:learning` passed the learning-progress and timer regression suite across the 221 required lessons.
- `npm.cmd run audit:guided` reported no guided-teaching contract problem.
- `npm.cmd run test:cloud` passed all 13 local backend, authentication, ownership, validation, conflict, feedback, lesson persistence, OAuth and logout groups.
- `HARU_TEST_BASE=http://127.0.0.1:8787 node scripts/test-learning-cloud.mjs` passed answer, action, time, completion, reopening, incomplete-finish and stale-write round-trips, then restored the original `test` record.
- `HARU_TEST_BASE=http://127.0.0.1:8787 node scripts/test-module-actions-cloud.mjs` passed the same stored-action contract for all 224 lessons and restored the original `test` records.
- `npm.cmd run build` and `npm.cmd run check:deploy` passed. The existing large main-chunk warning remains; the deploy dry run found the expected static assets, D1 database and OAuth KV bindings.

## Local browser evidence

The browser used only the isolated `test` account. Haru's account was not opened.

- `m11-l01-v1` showed the plain-language accessibility introduction, point-of-use definitions, supplied example and exact first answer. A typed answer reached **Saved online**. The supplied distinction revealed its explanation before the optional AI activity appeared.
- The Module 11 AI prompt included the lesson objective, three defined terms, labelled fictional material, a barrier-analysis activity, at most three questions and the named return answer. `Copy prompt` changed to **Copied — paste it in your AI chat**. The complete course-only route was visible beside it.
- `m16-l01-v1` and the final course lesson, `m20-l12-v1`, showed their subject-specific plain openings, terms, examples, exact starting answer, timer explanation and saved-work progress meaning.
- At 320, 390 and 1,440 CSS pixels, there was no horizontal document overflow. Timer number fields, the total-edit disclosure, lesson links and primary action controls have at least 44 CSS pixels of usable height after the final touch-target correction.
- No browser console failure was observed during the sampled course journey.

## Production evidence

Pending deployment. Add the pushed commit, Cloudflare version, asset checks, health/auth responses, hosted `test`-account round-trips and live browser results here after release.

## Evidence that remains open

Haru has not yet completed the revised lessons under observation without coaching. Native iOS/Android keyboards, VoiceOver/TalkBack and an external AI service were not exercised in this engineering pass. AI output can be wrong or change over time; the course-only activity remains complete. Formal scored assessment is not implemented and no score or mastery is inferred from saved work, elapsed time or practice completion.
