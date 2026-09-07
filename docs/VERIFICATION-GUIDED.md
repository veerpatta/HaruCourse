# Guided practice pilot verification — 7 September 2026

## Scope

Shared guided-practice UI (`src/PracticeGuide.tsx`, `src/worksheet.ts`) and the first refined lesson, `week1-day1-v1`: five manageable steps with exact actions and an expected output each, an editable in-app worksheet of 35 fields spread across the steps, contextual help (word explanations, a way to start, a way to judge enough, labelled made-up examples), an explicit practice route with the local-file alternative one disclosure away, one optional verified video paired with an immediate action and a written route, a downloadable plain-text copy, a Your work summary, and resume to the exact step from the Learn page. Worksheet answers and the step position are optional fields of the existing practice record; the schema, bounds and compatibility rules are in [LEARNING-EXPERIENCE-PLAN.md](LEARNING-EXPERIENCE-PLAN.md). No other lesson's behaviour changed except that the generated documents now carry the pilot note; the diagnostic carries none of the guided material.

## Video verification

The R01 Double Diamond page links two videos. The YouTube embed (5FpKuJSCbx0) is a 72-second montage of organisations' adaptations with only auto-generated captions and was rejected. The Vimeo video 857497488, "Jonathan Ball explains the Double Diamond", was verified on 7 September 2026 through its public page, its oEmbed metadata (owner Design Council, 177 seconds, uploaded 24 August 2023) and its publisher-authored English (United Kingdom) subtitle track retrieved as WebVTT. Every timestamp quoted in the lesson is copied from that track. Playback in a real player was not watched end to end by the agent; the subtitle file is the segment evidence, as the catalog policy permits. It is recorded as VID01 in RESOURCE-LIBRARY.md.

## Checks run

- `npm run docs:generate`, `npm run test:content` and `npm run build` pass. The content checker now enforces the guided contract: guide aligned with steps, unique bounded field ids, every field owned by a step, examples labelled made up, video ids present in the catalog's video table, and no guided material on the diagnostic. Main chunk 2,328.80 kB uncompressed, 676.68 kB gzip, against the previously recorded 2,302,582 bytes; the existing large-chunk and Workbox warnings remain.
- `node scripts/test-worksheet.mjs` (new, browser-free): resume-step fallbacks including an out-of-range saved step, the Markdown copy carrying multi-line answers and no table syntax, filled counts, a retired field id surviving parse, and ready-for-review gating in the shared schema.
- `HARU_TEST_BASE=http://localhost:8788 node scripts/test-cloud.mjs` passes all thirteen groups against a disposable local Worker and D1, including the new group: an older-shape record still writes, worksheet and guide round-trip at the next revision, a second signed-in session reads the same version, a stale write is refused with 409 and the newer answers are kept, bad keys, oversize values, too many fields and unknown or out-of-range guide fields are rejected with 400, a filled worksheet satisfies ready for review while an empty record does not, an older client's write leaves the record without a worksheet rather than corrupt, the creator cannot write, and Haru's record is byte-identical before and after.
- Browser, local Worker on port 8788, signed in only as the password-free `test` account, driven through the desktop app's browser pane (DOM and API readback; the pane could not render screenshots while hidden):
  - Lesson 1 Do renders the route, the five steps, the video block, worksheet fields and help with no console errors.
  - Typing two answers and ticking step 1 saved online at the next revision; the API record held both answers and `guide: {step: 2, done: [1]}`; the device copy matched.
  - Reload restored the lesson, the Do section, the open step and the answers. The Learn page then read "You were on step 2 · Observe" with "Continue at step 2 →", and that button opened Do at step 2.
  - "Load the video here" inserted the Vimeo iframe with `dnt=1`; nothing loads before the click. The served app shell carries no Content Security Policy (static-first routing), so the embed is not blocked; API responses keep theirs.
  - Offline: with the connection reported absent, a new answer showed "Saved on this device — it will upload when you're back online", the device copy held it with `dirty: true`, the server did not; on reconnect it uploaded as one write and read "Saved online".
  - Conflict: a write from a second session bumped the revision; the next edit here produced the existing two-version choice; "Keep my draft and save it" saved this device's answer at the next revision and the conflict card closed. The other session's answer to a different field was overwritten, which is the existing documented behaviour of keeping a draft.
  - Your work shows "Worksheet answers · n of 35 filled", the reference hint says the worksheet can stand in, and Ready for review is enabled with an empty reference once the worksheet has content.
  - 320 px and 390 px with every step, example and help expanded: no element wider than the viewport and no horizontal scroll; step headings 56 px and buttons 44 px tall; fields fill the width. Desktop at 1280 px rendered the same structure.
  - Focus: the step heading is a real button with `aria-expanded`; it receives a visible focus outline when tabbed to. The desktop pane's synthetic key presses did not reach the focused button, so Enter and Space activation were not observed there; the handler was exercised through the button's click path and relies on native button semantics.
  - Diagnostic regression: opening the baseline showed the plain six-step list, no route, worksheet, video or hints, and left the published-lesson bookmark on `week1-day1-v1`.

## Not done, stated plainly

- No learner study: Haru has not tried the pilot. The walkthrough for her is in PROGRESS.md.
- No creator sign-in in the browser (the generated local creator password is not typed by the agent); creator read-only behaviour is covered by the backend 403 and by the `readOnly` rendering path, not by a browser observation.
- No native soft-keyboard, assistive-technology, installed-app or real second-device test; the second device was a second session on the same machine.
- No deployment, hosted write, live billing or usage inspection. Local checks do not establish hosted availability.
- The video was verified through page metadata and its subtitle file, not watched in full by a person.
