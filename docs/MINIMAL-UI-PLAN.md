# Minimal learning UI — 5 October 2026

Requested by the creator: a calmer desktop and phone course for a graphic designer with no technical background, while retaining its learning design. Initial scope was local implementation and tests. The creator subsequently approved commit, push to main and deployment on 5 October; the parent approved the scoped release described below. The UI requires no migration.

## Starting point

The original local main `8d89b5a` is ahead of GitHub main `fb119439`. Initial UI work was reviewed on that local base. Release branch `codex/release-minimal-ui-2026-10-05` starts from GitHub main, preserves the six independent module-correction commits and the contrast/keyboard fixes, then applies the reviewed UI. It excludes the separate pilot learner switcher, viewing cookie, new learner-list API and account-provisioning scripts from mixed commit `5db27ab`. The UI has no dependency on those features. Server, shared record types, permissions, schemas and migrations match GitHub main. Uncommitted pilot documents and other worktrees remain untouched in the original checkout.

The course already has an action reader. Its main pain is repeated context: lesson orientation, section navigation, progress, three session cards, a second session plan, an introduction, and a desktop task sidebar all compete before an answer. Optional AI adds a full second activity below feedback. The Learn landing view leads with two progress panels before the next action.

## First implementation

1. Lead Learn with the existing exact-action resume card. Put the two course progress figures under an obvious “Course progress” summary; keep overdue revisit suggestions visible.
2. Give lesson reading one calm, bounded column. Replace the repeated orientation diagram with a short visible objective and prerequisite; keep the complete plan one click away. Keep missing-prerequisite/rehearsal warnings visible.
3. Keep Learn → Do → Check → Your work and their stable section IDs. Show one modest required-action count with “Practice, not a score”; keep the full action outline readily available. Move the session roadmap into that outline; the current session and all pause/resume cues remain visible.
4. Keep the plain-language introduction, definitions, example, outputs, starting route and answer destination visible. Make the repeated session plan optional. Remove the duplicate desktop task sidebar. Use whitespace and headings instead of nested tinted cards.
5. Offer optional AI through a labelled summary after the supported answer, preserving its complete prompt, privacy guidance, non-AI route and named return action. Optional reading stays reachable; task examples and What/How/Enough help remain beside answers.
6. Use one primary Next action; timer buttons use secondary styling. Avoid floating answer controls. Wrap large text and long labels at 360/390px, tablet and wide desktop. Keep 44px targets, 16px editable text, contrast, reduced motion and visible keyboard focus.

## Preservation map

| Learning or record behavior | Presentation treatment / authority |
|---|---|
| All 224 lessons, objectives, explanations, exercises and criteria | UI changes do not edit content sources; release preserves the existing local module corrections. Full plan and deeper reading remain lossless; plain teaching and examples remain visible. |
| Lesson/action/field/question/option IDs and old answers | No edits to content models, record schemas or question ordering. |
| Learn / Do / Check / Your work, exact-action resume | Existing navigation, bookmark and `record.learning.action` code retained. |
| Feedback and answer-before-explanation | `SavedQuestion`, repair controls and review requirements remain visible and unchanged. |
| Consent, participant data, provenance, missing artifacts, stop gates | Existing task notices, device upload hold, rehearsal warning and source labels remain visible. Never move them into optional details. |
| Practice finished / reviewed / demonstrated | Existing requirements, reviewer workflow and separate progress states unchanged. No score inferred from navigation, time or UI. |
| Draft, offline, save-on-hide, conflicts, backups and account isolation | Storage/synchronization code and keys unchanged; exercise representative flows with fictional local browser fixtures. |
| Keyboard and screen reader | Native details, labelled buttons, heading focus, current-step markers and landmarks; verify actual browser interaction. |

## Verification and next decisions

Capture actual before/after landing, intro and answer views on desktop and phone. Use a dedicated headless browser and local-only mocked API records (no learner mutations or live providers); run checks sequentially with shared installed dependencies. Check reflow, large text/zoom, reduced motion, keyboard, focus, save and resume, Back/reload, error/empty states, privacy holds and conflicts. Run focused browser regressions plus applicable content, question, worksheet, action, learning, improvement checks and both TypeScript builds. There is no configured lint task.

Then observe Haru, without coaching, finding the next task, explaining the example, completing one answer and resuming after a break on a real phone. Ask whether the AI/help controls are discoverable and whether the calmer view improves understanding. The prior readiness estimate remains 53/100; this UI pass cannot establish learner acceptance, physical-device behavior or assistive-technology usability. Any further redesign follows that evidence.
