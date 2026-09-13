# Beginner teaching verification — Modules 1–10

Verified locally on 13 September 2026. This evidence covers the 104 published lessons from `week1-day1-v1` through `m10-l12-v1`. It does not cover m11–m20, release state, learner observation or formal assessment.

## What changed

- Every scoped lesson now opens with a short module-level explanation, the lesson's first small result, up to three lesson-specific term definitions, a labelled supplied example and the exact first worksheet answer the learner will later make.
- Teaching actions use their actual idea as the heading instead of `Understand the idea · N`.
- At answer actions, the expected result, exact starting move, relevant example and point-of-use terms remain visible beside the control. Full step instructions stay available in a disclosure.
- One optional text-AI learning activity appears after the first supported question has been attempted and its explanation revealed. Each prompt names the lesson, embeds bounded supplied material, asks at most three questions and sends the learner back to a named course answer. A complete course-only alternative is visible beside it.
- Lesson 1 uses a dedicated activity for distinguishing product design, UX, UI, known facts, guesses and unknowns. The diagnostic has no AI or coached teaching.
- Progress names the completed and total required actions and says that it is saved work rather than a score or mastery. Time guidance distinguishes active course time, the five-minute idle pause, manual external time and explicit practice completion.

## Identity and scope checks

The scoped lessons total 104 and retain all 1,479 existing worksheet field IDs. The all-course regression covered all 224 published flows, 2,866 worksheet fields, 7,974 stable actions and 1,601 persisted formative questions. No lesson ID, action ID, field ID, record version, storage key or completion rule changed.

## Automated checks

- `npm.cmd run docs:generate` — generated `WEEK-01.md`, `WEEK-02.md` and `MODULE-03.md` through `MODULE-10.md` from the current lesson source.
- `npm.cmd run test:content` — course coverage, prerequisite order, resource IDs, lesson contracts and generated-document parity passed.
- `npm.cmd run test:worksheet` — schema gates, shipped IDs and bounded reveal behavior passed.
- `npm.cmd run test:actions` — every published action flow, field binding, question, optional route, completion gate and reopen behavior passed; additional assertions require the beginner opening, AI prompt, named return answer and local alternative on all 104 scoped lessons.
- `npm.cmd run test:learning` — learning and timer regressions passed.
- `npm.cmd run audit:guided` — no guided-teaching contract problem across the full published course.
- `npm.cmd run build` — both TypeScript projects and the Vite/PWA production build passed. The existing large-main-chunk warning remains; the generated main JavaScript is about 5.74 MB uncompressed and 1.63 MB gzip.

## Browser checks

The local Cloudflare worker and isolated test account were used. Haru's account and records were not opened.

- Lesson 1 showed the everyday-language opening, Product design/UX/UI definitions, supplied pottery example and named first answer before independent work.
- The lesson overview grouped the 48 actions under Learn, Do, Check and Your work with a completed/total count for each section.
- The Lesson 1 AI activity stayed hidden until the first supplied sorter answer had been chosen and its explanation revealed. The prompt, three exact usage steps, return task and course-only alternative then appeared together. `Copy prompt` changed to a clear copied state.
- At 320, 390 and 1440 CSS pixels, the Lesson 1 opening and AI prompt produced no horizontal document overflow. The prompt remained inside its card and the copy control was at least 44 pixels high.
- `m05-l06-v1` showed the plain research boundary, the lesson terms, the supplied exchange and the participant-free rehearsal route without asking the learner to invent interview evidence.
- `m10-l01-v1` showed the plain prototype definition, Fidelity and Paper prototype definitions, a supplied wrong-turn example, the exact first result and the worksheet/file routes.
- No browser console failure was observed during these checks. Test-account navigation, one Lesson 1 supplied answer and recorded local practice time were used only for QA.

## Open evidence

No learner has yet completed a scoped lesson under observation without coaching. Real phone keyboards, VoiceOver/TalkBack and an external AI app were not tested in this pass. The prompts are copyable text and do not depend on a paid API, but an AI service can still respond incorrectly or change over time; the local learning route remains complete. Nothing was committed, pushed or deployed in this verification.
