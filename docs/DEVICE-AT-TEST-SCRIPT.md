# Device and assistive-technology test script

The readiness rubric's usability dimension needs the journey to work "on agreed real devices with keyboard and screen-reader checks". Automated audits, emulated phones and an agent's keyboard pass ([verification](VERIFICATION-IMPROVEMENT-PLAN.md)) cannot stand in for these. This script makes each session short and repeatable. Use the shared **test** workspace (username `test`, blank password) on https://harucourse.raj-39e.workers.dev, never Haru's account, and restore nothing: the test workspace is disposable.

## Agreed devices

| # | Device | Browser | Screen reader | Start / stop |
|---|---|---|---|---|
| 1 | Any iPhone on a current iOS | Safari, then installed (Share → Add to Home Screen) | VoiceOver | Settings → Accessibility → VoiceOver, or triple-click the side button if set |
| 2 | Any Android phone on a current version | Chrome, then installed (menu → Install app) | TalkBack | Hold both volume keys three seconds, or Settings → Accessibility |
| 3 | Windows laptop | Chrome or Edge | Narrator (built in) or NVDA (free, nvaccess.org) | Narrator: Ctrl + Windows + Enter |
| 4 | Any laptop | Any current browser | none — **keyboard only**, mouse unplugged or untouched | — |

Record device model, OS version and browser version for each run.

## The journey (same on every device)

| Step | Do | Pass when |
|---|---|---|
| 1 Start | Sign in as `test`. | The sign-in field names are read ("Username", "Password"); after signing in, the page heading "Learn" is announced or reachable by heading navigation. |
| 2 Find the next step | Move to "Your next step" and open the recommended lesson (or Course map → Stage 1 → Module 1 Lesson 1). | The lesson title is announced as the page's main heading when it opens. |
| 3 Learn | Read the first action; move to Next and activate it. | The new action's heading ("Look at two booking screens") is announced after Next. The made-up screens' notes are reachable in reading order. |
| 4 Answer | On "Point to the price", choose an option and activate "Show me why". | Options are announced as a radio group with their labels; the explanation is read or reachable straight after. |
| 5 Sort | On the three-statement sort, place each statement. | Each choice is operable without dragging; the result is announced. |
| 6 Type | Fill the first evidence row (what you saw, how you would check). | Each box's label is read before typing; the saved state ("Saved online" or "Saved on this device") is reachable. |
| 7 Pause and resume | Choose Pause at the suggested point, close the tab or app, reopen, choose Continue your saved action. | The welcome-back panel is announced and focus or reading lands on the same action with the earlier answer present. |
| 8 Recover | Turn on airplane mode, type one more answer, turn it off. | The offline state and later "Saved online" are announced or visible; no answer is lost. |
| 9 Request review | Finish what you can, open Your work, use Ask for a review (or the self-review fallback). | The form's fields and the result message are read; the text says nothing was sent automatically. |
| 10 Module 11 lab | Open Module 11 Lesson 1 → the keyboard and screen-reader lab → the barrier page, then the repaired page. | On the barrier page you meet the planted problems (unnamed field, icon-only button, no focus outline, silent error). On the repaired page a wrong phone number moves focus to the field and the error is read. |

Also on phones: rotate to landscape on steps 3–6, and set text size to the largest standard size once. On the laptop, zoom to 200% once and check that nothing needs sideways scrolling.

## Record for every step

`Device # · step · pass / fail · what was announced or what happened (quote) · workaround used, if any`

A failure is anything that stops a screen-reader or keyboard-only user from completing the step without sighted help, or that loses work. Record it with the lesson and action name. Fix, then rerun only that step on the device that failed.

## Gate

Every step passes on at least one phone with its screen reader, on the laptop with a screen reader, and keyboard-only. Report results per device; do not average a failure away. Record the results in [the improvement-plan verification](VERIFICATION-IMPROVEMENT-PLAN.md) under the usability dimension.
