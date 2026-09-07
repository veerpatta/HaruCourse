# Starter prompt for beginner-first lesson refinement

Use this prompt to begin the next implementation task in this repository. It authorizes one fully reviewed lesson milestone at a time, including shared fixes genuinely required by that lesson. It does not authorize paid services, fabricated evidence, destructive record changes or blanket completion claims.

---

Continue HaruCourse's beginner-first teaching refinement. Read `AGENTS.md` and its authorities in order, including `docs/BEGINNER-LESSON-AUDIT.md`, `docs/COURSE-AUTHORING.md` and `docs/LEARNING-EXPERIENCE-PLAN.md`. Inspect the worktree and current app before editing. Preserve unrelated work, stable lesson IDs, shipped worksheet field IDs, learner records, submissions, feedback, bookmarks and diagnostic independence.

Start with `week1-day1-v1`, unless its audit row and verification record already prove the beginner teaching revision complete; in that case use the next open stable ID in the audit and refinement ledger. Before changing lesson content, reproduce any update-adoption or conflicting-save problem that prevents the learner receiving or understanding the current experience. Fix only the shared behavior required to make this lesson usable, and verify it without touching Haru's records.

Review the lesson as a learner rebuilding product-design knowledge with limited technical knowledge. List every idea and action the independent task requires. For each, show where it was previously practised or teach it in this lesson. Identify the likely first point of confusion, unavailable prerequisite, tool barrier, participant/team dependency, excessive batch of fields, save ambiguity and misconception the current Check section would miss.

Refine the lesson through **See it → Try it with help → Try it yourself → Check the reason → Improve your work → Save and continue**, while keeping the app sections Learn → Do → Check → Your work:

- **See it:** one visible, complete and explicitly made-up example showing the reasoning, uncertainty, trade-off and likely wrong turn.
- **Try it with help:** one small supplied case, one decision at a time, with contextual definitions, a way to start and explanatory feedback.
- **Try it yourself:** the learner applies the same reasoning to their own artefact. Reveal repeated rows progressively and keep the worksheet only as large as the evidence requires.
- **Check the reason:** collect a choice or short explanation before revealing feedback. Explain why plausible wrong answers fail.
- **Improve your work:** direct one bounded revision tied to the learner's answer and state what to show at recheck. Do not compute or store a formal score.
- **Save and continue:** state what saved automatically, what remains in an external file, what the creator can see, and the exact next action. Show instructions for the selected route rather than contradictory generic guidance.

If the task needs software, begin from a known screen or downloadable starter; name exact controls, the expected visible result and recovery from a common failure. Do not require HTML, CSS, JavaScript or SVG before m12. Use an in-browser, static and offline-capable playground when behaviour cannot be learned on paper. Keep Figma optional until its free workflow is verified through export.

If the task needs a participant, team, engineer, live build, public account or earlier artefact, state the readiness condition and provide an honest no-access route that preserves the learning objective. Label all supplied and simulated material. Never turn rehearsal into research, testing, product impact or employment evidence.

Edit authoritative TypeScript lesson/activity sources and shared UI where required; do not hand-edit generated lesson Markdown. Update the selected row/status in `docs/BEGINNER-LESSON-AUDIT.md`, the refinement ledger in `docs/LEARNING-EXPERIENCE-PLAN.md`, and `PROGRESS.md` with actual findings and verification. Generate Markdown with `npm.cmd run docs:generate`, run `npm.cmd run test:content` and `npm.cmd run build`, and run worksheet/resource checks applicable to the change.

Inspect the actual lesson at 320 px, 390 px and desktop. Exercise keyboard/focus and long text. If persistence or continuation changes, test local save, reload, offline/reconnect, stale conflict, another session/device and account isolation. Hosted writes use only the test account. Never use Haru's learner records for QA.

Complete and review this one lesson milestone rather than stopping at a proposal. Record what is still unverified, especially Haru's understanding, real participant activity, native mobile behavior, external-tool access, billing and release state. Commit only the scoped reviewed work. Deploy only under the repository's existing release authorization and prerequisites, with no billing-plan change.

Finish with a short no-coaching walkthrough for Haru. Observe whether she can explain the idea with a new example, start the supported task, complete the independent task, answer the check with a reason, repair her work, save and resume. Record observed friction without supplying answers. Do not mark learner validation complete unless this observation actually happens.

Stop after the selected lesson is implemented and verified. Name the next open stable lesson ID from the audit register.
