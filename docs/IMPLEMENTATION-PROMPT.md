# Prompt to begin lesson-by-lesson refinement

Use the following prompt in this repository. It starts implementation of the approved pilot; it does not authorize a paid service or blanket curriculum rewrite.

---

Implement the approved HaruCourse learning-experience plan. Read AGENTS.md and its required documents in order, then docs/LEARNING-EXPERIENCE-PLAN.md. Inspect git status and the current app before editing; preserve unrelated work.

Begin with the reusable UI needed for the first teaching lesson, `week1-day1-v1` (From screens to product problems). Keep the cream/green/serif style, Learn / Course map / My work navigation and Learn → Do → Check → Your work flow. Make it easy for a nontechnical learner to understand the goal, start practice, find help, save reviewable work and resume the exact unfinished action.

Implement manageable practice steps, clear expected output, a suitable editable in-app worksheet, contextual help and an explicit practice destination with setup and save/handoff. Use a relevant visual example where it helps. Add one optional video-action pair only after verifying the exact relevant segment, captions/language, access and interface differences; keep a complete original written alternative. Do not invent timestamps or treat a fetched article as playback verification. Keep Figma optional until the free exercise is tested through export. Preserve diagnostic independence and all lesson IDs, records, feedback, bookmarks and account isolation.

Run exercises in the browser, keep text payloads bounded, and use local drafts with bounded debounced or explicit cloud saves. Document any new state schema and compatibility before implementing it; preserve revision conflicts, backups and immutable submissions. Do not introduce uploads, hosted video, paid AI, live collaboration or a new paid Cloudflare service. Recheck current free limits and actual usage where accessible; disclose unverified billing rather than promising a zero bill.

Edit authoritative sources and generate the Markdown. Run docs:generate, test:content and build, plus appropriate resource-section checks. Test the actual UI at 320px, 390px and desktop with keyboard/focus checks. For persistence changes, run meaningful backend and browser tests for reload, offline/reconnect, conflicts, multiple sessions/devices and account isolation. Hosted writes must use only the test account, never Haru's records.

Complete the pilot implementation and available verification rather than stopping at a proposal. Fix issues found within this scope. Commit the reviewed changes. Report deployment separately; deploy only if existing authorization and release prerequisites are satisfied, with no billing change. Update PROGRESS.md and the plan's refinement ledger with actual checks, limitations, commit/release state and the next lesson's verified stable ID. Do not mark every lesson refined because a shared component changed.

Finish with a concrete walkthrough for Haru to try the pilot without verbal guidance: start the lesson, locate practice, save work, identify a repair and resume later. Do not claim learner validation if it has not happened. Stop after this first lesson/shared UI milestone so its experience can be reviewed before repeating the process for the next lesson.
