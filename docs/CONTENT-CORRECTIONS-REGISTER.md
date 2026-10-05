# Content corrections register — improvement plan, 4–5 October 2026

The first deliverable the plan asks for: every source-confirmed correction, with its module report. Each report in [`docs/corrections/`](corrections/) lists plan item → lessons and files → change → status, the arithmetic with working, counts, and remaining limits. Corrections were made per module in isolated branches, then merged and checked together. **No learner has used the corrected lessons yet.** A full independent review round followed (below); a human product-design reviewer's sign-off is still open. The [pilot test script](PILOT-TEST-SCRIPT.md) and [verification record](VERIFICATION-IMPROVEMENT-PLAN.md) hold those gates.

## Priority-zero items

| Plan item | Where | Status |
|---|---|---|
| Align research consent with actual storage | M5 throughout; M1 L3, M2 L1/L2/L5; every module's participant fields | Fixed: lessons state the real data flow (device → course server, readable by the reviewer); raw notes stay private with a deletion date; synced answers hold de-identified summaries only with agreement; "names removed ≠ anonymous"; adults-only, non-sensitive novice research. Participant fields carry `sensitive: true` and the device refuses to upload contact details in them. |
| Question keys valid and hard to guess | All 755 formative questions | Fixed: options display in a stable non-authored order; labels rewritten so the defensible option has no length or opening cue (`check-questions --strict` passes); facts each answer needs are in the question or supplied material; every changed label keeps its old wording in `was` so saved answers still map. |
| Unsafe prototype handover | M18 L6–L9 | Fixed: privacy and access-control stop gate with made-up records in L6, before measurement (L8) and handover (L9); the repair-shop page stays a demonstration. |
| Methods and arithmetic | M15 L2 funnel (58.00% vs 57.14%), L3 intervals, L4 sample size/duration; M3 contrast ratios; M8 L10 truncated axis; M10 intervals; M20 per-day vs five-day figures | Fixed with working in each report; Module 15 numbers reproduce with the in-app Wilson / Newcombe calculator. |
| Alternatives genuinely completable | M1–M20 rehearsal, supplied and self-pilot routes | Fixed: fields that need a real participant are optional or conditional on the route; criteria accept the honest rehearsal output; review never forces a change. |

## Module roadmap items

| Module | Report | Plan item status |
|---|---|---|
| 1 Foundations | [m01](corrections/m01.md) | Day 1 regrouped into three sessions (platform); L2 assumptions labelled; L5 reading order vs focus order vs programmatic hints. Fixed. |
| 2 Evidence and testing | [m02](corrections/m02.md) | One rehearsal completion contract; L4 no longer accepts a bare "Sorry, full" card. Fixed. |
| 3 Visual foundations | [m03](corrections/m03.md) | Skip route (platform, four lessons); contrast recalculated (two quoted ratios were wrong); real reflow demo replaces covering a sketch; extra token rows and justified no-change. Fixed. |
| 4 UX reasoning | [m04](corrections/m04.md) | Rehearsal no longer demands observed beliefs; practice notes F1–F4; findings reframed as decisions to check. Fixed. |
| 5 Research methods | [m05](corrections/m05.md) | Consent/sync/reviewer access aligned; three to five research questions; research vs participant questions by purpose; null findings accepted. Fixed. |
| 6 Information architecture | [m06](corrections/m06.md) | Maps and labels supplied for L4; backtracking facts in L7's question; tree tests are not traffic. Fixed. |
| 7 Flows and recovery | [m07](corrections/m07.md) | Verified-identity recovery without account enumeration; "system fault" through L7. Fixed. |
| 8 Interface craft | [m08](corrections/m08.md) | Editable SVG starter and annotated before/after; scenario-specific hierarchy; L10 chart arithmetic. Fixed (tool workflows in Inkscape/Penpot untested). |
| 9 Interaction and motion | [m09](corrections/m09.md) | Working state and reorder examples; keyboard and separate no-drag pointer route in L8; reduced motion, cancellation and recovery as outputs. Fixed. |
| 10 Prototyping and evaluation | [m10](corrections/m10.md) | Timed no-code transitions vs real network performance; exercise constraints with reasons. Fixed. |
| 11 Accessibility | [m11](corrections/m11.md) | Keyboard/screen-reader lab with barrier and repaired practice forms; Narrator; inactive-control exemption; captions vs transcripts; clean tests accepted. Fixed (lab not yet run with a real screen reader). |
| 12 Web foundations | [m12](corrections/m12.md) | Coding marked optional (technical extension); runnable starters with open/run/recovery steps; file:// fetch, no-server form and phone-preview assumptions corrected. See report. |
| 13 Design systems | [m13](corrections/m13.md) | Non-coding specification core with a supplied working component; coded construction as extension; diagnostic ladder. See report. |
| 14 Delivery | [m14](corrections/m14.md) | Annotated issue tracker; justified non-changes; defects and missing requirements triaged; investigation triggers. Fixed. |
| 15 Analytics | [m15](corrections/m15.md) | Arithmetic, intervals compared directly, A/B guidance verified, synthetic data never corroborates. Fixed. |
| 16 AI-assisted work | [m16](corrections/m16.md) | Supplied outputs with known issues; solo routes aligned with the rubric. Fixed. |
| 17 Strategy | [m17](corrections/m17.md) | One consistent case pack; comparable alternatives; changed-constraint tasks. Fixed. |
| 18 Independent project | [m18](corrections/m18.md) | Continue or justify the brief; stop gate before real use; consistent counts; missed-baseline interpretation. Fixed. |
| 19 Portfolio | [m19](corrections/m19.md) | First case study after Project 1 (core path); editable template and annotated example; private phone preview, PDF route and dated publishing steps. Fixed. |
| 20 Career | [m20](corrections/m20.md) | Units and causal wording; eligibility, location and time zone separated; revision against the learner's own capture. Fixed. |

## Cross-cutting additions

- A "use it on a new case" transfer task on every teaching lesson (224), with weak / adequate / strong anchors shown only after the learner writes.
- Full criteria with four levels for the twelve Module 1–2 lessons, so every lesson has review anchors.
- Supplied practice material wherever an answer depended on facts the learner was never given.

## Independent review round — 5 October 2026

After the per-module corrections above, every one of the 224 lessons was reviewed again by reviewers who had not written or corrected it, working from a per-lesson packet (`scripts/review-packet.mjs`). Each finding was applied by a separate fixer and every critical and major fix was re-checked by a third reviewer. The reviewers were AI agents; a human product-design reviewer's sign-off is still open (see [the verification](VERIFICATION-IMPROVEMENT-PLAN.md)).

| Modules | Reviewed | Clean | Critical | Major | Minor | Applied |
|---|---|---|---|---|---|---|
| 1–3 | 22 | 13 | 0 | 10 | 13 | 23 |
| 4–5 | 21 | 12 | 0 | 10 | 20 | 30 |
| 6–7 | 25 | 13 | 0 | 17 | 8 | 25 |
| 8–9 | 24 | 7 | 1 | 21 | 14 | 36 |
| 10–11 | 24 | 8 | 3 | 16 | 19 | 38 |
| 12–13 | 24 | 7 | 5 | 23 | 12 | 40 |
| 14–15 | 24 | 9 | 6 | 15 | 9 | 30 |
| 16–17 | 24 | 11 | 1 | 12 | 17 | 30 |
| 18–20 | 36 | 17 | 2 | 21 | 16 | 39 |
| **All** | **224** | **97** | **18** | **145** | **128** | **291** |

Re-verification of the 163 critical and major fixes: 149 resolved, 9 partly resolved, 5 resolved with a new small problem, none unresolved. The 14 residual items and the verifiers's leftover notes were then corrected in a final pass (24 items applied; 2 deliberately left: a saved select label in Module 18 Lesson 6 whose hint already gives the right test, and Laws of UX notes in Modules 3, 8 and 9 that are accurate for the pages those lessons assign).

What changed most often: sorter and check keys that contradicted the lesson's own example or feedback; steps whose text did not match the boxes beneath them (Module 3 Lesson 3, Module 5 Lesson 12, Module 18 Lesson 8, Module 19 Lesson 9); required rows a solo learner could not fill honestly (now optional or route-conditional, IDs kept); readings quoted for things they do not say (Module 4–5, Laws of UX); raw research material leaving the device (Module 10); a false performance claim about images (Module 12); and core-path steps that needed another person with no solo route (Modules 10, 14, 19). Saved answers stay valid: every relabelled option and renamed sorter bucket keeps its earlier wording, checked against the 4,888-label fixture.
