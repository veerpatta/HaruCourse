import { withLegacyText, type Lesson } from "./teaching";
// Module 9 treats motion as behaviour rather than decoration: every animation
// in it has to answer a question the person was about to ask, and every one
// has an alternative for someone who has asked their device for less motion.
// The keyboard half of interaction sits here too, because a component's key
// behaviour is designed at the same moment as its pointer behaviour or it is
// not designed at all.
const animations = {
  title: "MDN: CSS animations",
  id: "R13",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using",
};
const reducedMotion = {
  title: "MDN: prefers-reduced-motion",
  id: "R64",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
};
const keyboardPatterns = {
  title: "W3C ARIA Authoring Practices: patterns",
  id: "R65",
  url: "https://www.w3.org/WAI/ARIA/apg/patterns/",
};
const heuristics = {
  title: "Nielsen: ten usability heuristics",
  id: "R02",
  url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const recall = {
  title: "NN/g: recognition and recall",
  id: "R33",
  url: "https://www.nngroup.com/articles/recognition-and-recall/",
};
const laws = {
  title: "Laws of UX",
  id: "R31",
  url: "https://lawsofux.com/",
};
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
const forms = {
  title: "W3C: forms tutorial",
  id: "R14",
  url: "https://www.w3.org/WAI/tutorials/forms/",
};
const usability = {
  title: "GOV.UK: moderated usability testing",
  id: "R05",
  url: "https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing",
};
const throttling = {
  title: "Chrome DevTools: network features",
  id: "R46",
  url: "https://developer.chrome.com/docs/devtools/network/reference",
};
export const module9: Lesson[] = [
  withLegacyText({
    id: "m09-l01-v1",
    module: "m09",
    week: 9,
    day: 1,
    level: 3,
    areas: [9],
    guided: true,
    title: "What motion is actually for",
    objective:
      "Audit every animation you have proposed or seen in your product, classify each as feedback, continuity, attention or decoration, and remove the ones that answer no question.",
    bringForward:
      "Your m08 screens, state specifications and message set.",
    prerequisite: "Your m08 screens and state specifications.",
    why: "Motion is expensive attention. Each animation should answer a question the person was about to ask, or it is spending their time for someone else's pleasure.",
    teach: [
      "Feedback motion answers “did that work?” within the moment of acting.",
      "Continuity motion answers “where did this come from?” when something appears or moves.",
      "Attention motion answers “what changed?” for something the person did not cause.",
      "Decoration answers nothing. It is not forbidden, but it must be cheap and skippable.",
      "Anything that delays the person's next action must earn the delay.",
    ],
    explanation: [
      "The useful test for an animation is which question it answers. Feedback confirms that an action registered, and it must be immediate — a press state that appears after a delay reads as a failed tap. Continuity explains where a thing came from or went, which is what stops a panel appearing out of nowhere and forcing the person to reorient. Attention marks a change the person did not cause, and it is the category most often abused, because everything looks important to the team that built it.",
      "Decoration is not automatically wrong. A small flourish at the end of a booking can carry warmth that plain text cannot, and warmth is a legitimate design goal. What decoration must never do is delay the next action, repeat on every visit, or move the thing the person is about to tap. Judge it by whether it costs anything; if it does, it needs a better reason than that it looks nice in a demo.",
      "Every animation has a cost measured in the person's time and in the number of things they must track. A three-hundred-millisecond transition repeated at every step of a five-step booking is a second and a half of waiting spread across a task that felt fast before. Motion also competes for attention: two things moving at once means one of them is being missed.",
      "The audit is more useful than any single decision. Listing what you have and asking each one which question it answers usually removes a third of them, and the removals are the cheapest performance and clarity improvement available to you at this stage.",
    ],
    misconception:
      "“Motion makes an interface feel modern.” It makes an interface feel slower when it delays action, and it makes an interface feel confusing when several things move at once. What reads as quality is usually immediate feedback and continuity, not the amount of movement.",
    example:
      "An audit of the booking flow found eleven animations. Four were feedback and stayed. Three were continuity — the filter panel sliding from the control that opened it, the detail view expanding from its row — and stayed. Two were attention: one legitimate, marking a place that had just been taken by someone else, and one an animated banner promoting a class, which was demoted to a static card. Two were decoration: a bouncing icon on the confirmation screen, kept because it cost nothing and did not delay anything, and an animated page transition that added 400ms to every navigation, which was removed and immediately made the whole flow feel faster.",
    freeToolPath:
      "The audit is written work. Where you need to see a transition, a local HTML file with a few CSS rules shows real timing honestly; guessing at durations on paper is where most bad motion decisions are made.",
    outputs: [
      "An audit listing every animation with the question it answers",
      "A classification: feedback, continuity, attention or decoration",
      "A removal list with the time each removal gives back",
      "A stated rule for when your product animates",
    ],
    steps: [
      {
        minutes: 20,
        title: "List what moves",
        instructions: [
          "List every animation in your designs, including ones you assumed.",
          "Include page transitions, hovers, presses and anything that fades.",
        ],
      },
      {
        minutes: 30,
        title: "Ask what each answers",
        instructions: [
          "For each, write the question a person is asking at that moment.",
          "Classify it as feedback, continuity, attention or decoration.",
          "Mark any that answers nothing.",
        ],
      },
      {
        minutes: 25,
        title: "Count the cost",
        instructions: [
          "Estimate the delay each animation adds before the next action is possible.",
          "Add up the delay across one complete task.",
          "Mark anything that moves an element the person is about to tap.",
        ],
      },
      {
        minutes: 30,
        title: "Cut and justify",
        instructions: [
          "Remove every animation that answers nothing and costs time.",
          "Keep decoration only where it delays nothing and does not repeat.",
          "Write one sentence justifying each animation you keep.",
        ],
      },
      {
        minutes: 15,
        title: "Write the rule",
        instructions: [
          "Write when your product animates and when it does not.",
          "Record the total time your removals gave back across one task.",
          "Save the audit, the rule and the removal list.",
        ],
      },
    ],
    check: [
      {
        question: "What question does continuity motion answer?",
        answer:
          "Where did this come from, or where did it go. Without it a panel appears from nowhere and the person has to reorient before they can read it.",
      },
      {
        question: "Is decoration always wrong?",
        answer:
          "No. It is wrong when it costs something: delaying the next action, repeating on every visit, or moving a target. Warmth that costs nothing is a legitimate design choice.",
      },
      {
        question: "Why audit before designing new motion?",
        answer:
          "Because the fastest improvement is usually removal. Listing what exists and asking what each answers typically eliminates a third of it, at no cost to anyone.",
      },
    ],
    rubric: [
      "Every animation is listed with the question it answers",
      "Each is classified into one of the four kinds",
      "The time cost across one task is counted",
      "A rule for when the product animates is written",
    ],
    criteria: [
      {
        criterion: "Every animation is listed with the question it answers",
        evidence:
          "An audit covering presses, hovers, transitions and anything that fades, each with the person's question.",
        levels: [
          "A partial list of obvious animations.",
          "A full list without the questions.",
          "Every animation listed with the question it answers, including “none”.",
          "As adequate, and the list includes motion you had assumed rather than specified.",
        ],
        remediation:
          "Walk one task and note everything that changes over time, including hover and press states. Add each to the list.",
        recheck: "The completed audit.",
      },
      {
        criterion: "Each is classified into one of the four kinds",
        evidence:
          "A classification per animation, consistent with the definitions.",
        levels: [
          "No classification.",
          "Classified loosely, with attention and decoration conflated.",
          "Every animation classified with the definitions applied consistently.",
          "As adequate, and one animation is reclassified after examining what it actually does.",
        ],
        remediation:
          "For each animation ask whether the person caused it, whether it explains a movement, and whether anything would be lost without it.",
        recheck: "The classified audit.",
      },
      {
        criterion: "The time cost across one task is counted",
        evidence:
          "Estimated delays per animation and a total across one complete task.",
        levels: [
          "No cost considered.",
          "Individual durations noted but not summed.",
          "Per-animation delays and a task total.",
          "As adequate, and elements that move under a finger about to tap are identified separately.",
        ],
        remediation:
          "Add the durations along one task path. If the total surprises you, that is the finding.",
        recheck: "The cost total.",
      },
      {
        criterion: "A rule for when the product animates is written",
        evidence:
          "One or two sentences that would settle a future proposal, kept with the component inventory.",
        levels: [
          "No rule.",
          "A rule too vague to decide a case.",
          "A rule that resolves the next proposal.",
          "As adequate, and the rule is tested against the animation you removed.",
        ],
        remediation:
          "Write the rule, then apply it to the animation you cut. If the rule permits it, tighten the rule.",
        recheck: "The written rule.",
      },
    ],
    repairs: [
      "If the list is partial, walk a task and record everything that changes over time.",
      "If classifications conflate attention and decoration, ask who caused the change.",
      "If no cost was counted, sum the delays along one task path.",
      "If the rule permits the animation you removed, tighten it.",
    ],
    portfolio:
      "A motion audit with removals is unusual and persuasive: it shows judgement about restraint rather than a reel of transitions.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 8, aesthetic and minimalist design.",
        purpose:
          "Frames motion as feedback and noise rather than as style.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The heuristics do not discuss motion specifically; the four-way classification is this lesson's own.",
        fallbackId: "R11",
      },
      {
        ...animations,
        section:
          "The introduction on what an animation is composed of, read for vocabulary rather than for code at this stage.",
        purpose:
          "Gives the shared terms — duration, easing, keyframes — the rest of the module uses.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is implementation documentation, not motion design guidance; the design decisions here are the course's own.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l02-v1",
    module: "m09",
    week: 9,
    day: 2,
    level: 3,
    areas: [9],
    guided: true,
    title: "Immediate feedback and the feel of a control",
    objective:
      "Specify press, hover and focus feedback for three controls so that every action is acknowledged immediately, and separate acknowledgement from the result that follows later.",
    bringForward:
      "Your m08 action specification and state tables.",
    prerequisite: "Your m08 action components and their state tables.",
    why: "The gap between tapping and seeing anything is where people tap twice. Acknowledgement is not the result; it is the promise that the result is coming.",
    teach: [
      "Acknowledge the press immediately, even when the result takes seconds.",
      "Separate three moments: the press, the acknowledgement and the outcome.",
      "Hover does not exist on touch. Never hide anything essential behind it.",
      "Focus feedback is not optional styling; it is how keyboard users see where they are.",
      "If a control cannot respond instantly, change its label or state rather than doing nothing.",
    ],
    explanation: [
      "Three moments need designing, and products routinely design only the third. The press is when the person's finger is down and the control should look pressed. The acknowledgement is the instant afterwards, when the interface must show it heard — a state change, a label change, a disabled control with a spinner beside it. The outcome may take a second or ten, and it is the only one most teams specify, which is why so many products feel unresponsive while being technically fast.",
      "On a touch screen there is no hover, so anything that only appears on hover does not exist for most of your users. This is a structural rule rather than a preference: if an action is available on hover in a list row, it must also be reachable by another means, and a design where the only route to “remove” is hovering is a design that excludes every phone.",
      "Focus feedback is what a keyboard user has instead of a cursor. It must be visible against every background it can appear on, it must not be removed for aesthetic reasons, and it should be tested by pressing tab rather than assumed from the specification. This connects directly to the pattern guidance in this module: a component's keyboard behaviour and its focus appearance are the same design problem.",
      "When something genuinely cannot respond instantly, say so in the control itself. A button that becomes “Booking…” with a spinner tells the person their tap registered; a button that stays identical for two seconds tells them nothing, and the reasonable response to nothing is to try again.",
    ],
    misconception:
      "“The action completes quickly, so feedback is unnecessary.” Quickly on your machine and quickly on a five-year-old phone on a slow connection are different. Feedback costs nothing when the response is fast and saves the interaction when it is not.",
    example:
      "The book button did nothing visible until the server replied, which on a throttled connection took four seconds; in the m07 paper test one participant had tapped twice. Rebuilt into three moments: pressed state on touch-down, immediate change to “Booking…” with the control disabled and a spinner, and the outcome message when the server replied. Hover-only reveal of the “remove from shortlist” control was replaced with a permanently visible quiet control. Focus rings were specified against both the light surface and the tinted panel, and the tab pass found one control that could be reached but showed no focus at all.",
    freeToolPath:
      "A local HTML file with three buttons and a few CSS rules shows press, hover and focus honestly, including what happens on a touch screen if you open it on your phone. Paper cannot show feedback timing.",
    outputs: [
      "Press, hover and focus feedback specified for three controls",
      "The three moments separated: press, acknowledgement, outcome",
      "A list of anything currently hover-only, with its touch route",
      "A tab pass recording where focus was invisible",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and separate",
        instructions: [
          "Read the assigned status heuristic and the keyboard pattern for one component you use.",
          "Write the three moments for one control: press, acknowledgement, outcome.",
        ],
      },
      {
        minutes: 30,
        title: "Specify the feedback",
        instructions: [
          "For three controls, specify what changes on press, on hover and on focus.",
          "Make each state distinguishable without colour.",
          "Give the acknowledgement a label change, not only a spinner.",
        ],
      },
      {
        minutes: 25,
        title: "Remove hover dependence",
        instructions: [
          "List everything currently revealed only on hover.",
          "Give each a route that works on touch.",
          "Delete any hover-only control that turns out to be unnecessary.",
        ],
      },
      {
        minutes: 30,
        title: "Test focus and touch",
        instructions: [
          "Tab through your controls and record where focus is invisible.",
          "Open the same page on a phone and check every control is reachable.",
          "Repair the worst failure you find.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write what you could not verify without a full implementation.",
          "Save the specifications with the tab-pass results.",
        ],
      },
    ],
    check: [
      {
        question: "Why acknowledge a press before the outcome arrives?",
        answer:
          "Because the person needs to know their tap registered. Silence for two seconds reads as a failed tap, and the reasonable response to a failed tap is another tap.",
      },
      {
        question: "What is wrong with hover-only controls?",
        answer:
          "Hover does not exist on touch screens, so the control does not exist for most people. Anything essential needs a route that works without a pointer.",
      },
      {
        question: "Why is focus feedback not a styling preference?",
        answer:
          "Because it is the keyboard user's cursor. Removing it for aesthetics makes the interface unusable without a pointer, whatever it looks like in a screenshot.",
      },
    ],
    rubric: [
      "Press, hover and focus are specified for three controls",
      "Acknowledgement is separated from outcome",
      "Nothing essential depends on hover",
      "A tab pass is recorded with failures named",
    ],
    criteria: [
      {
        criterion: "Press, hover and focus are specified for three controls",
        evidence:
          "A state specification per control covering all three, distinguishable without colour.",
        levels: [
          "Only default and pressed specified.",
          "Three states specified but distinguished by colour alone.",
          "All three, distinguishable without colour, for three controls.",
          "As adequate, and focus is specified against every surface it can appear on.",
        ],
        remediation:
          "For each control, write what changes in each state. Then check the states in greyscale.",
        recheck: "The state specifications and greyscale check.",
      },
      {
        criterion: "Acknowledgement is separated from outcome",
        evidence:
          "A specification showing an immediate acknowledgement distinct from the later result, including a label change.",
        levels: [
          "Only the outcome is specified.",
          "An acknowledgement exists but is a spinner alone with no label change.",
          "Immediate acknowledgement with a label change, then the outcome.",
          "As adequate, and the acknowledgement prevents a second submission explicitly.",
        ],
        remediation:
          "Write the three moments as three rows. If the middle row is empty, the person will meet silence.",
        recheck: "The three-moment specification.",
      },
      {
        criterion: "Nothing essential depends on hover",
        evidence:
          "A list of previously hover-only elements, each with a touch route or removed.",
        levels: [
          "Hover-only controls remain.",
          "Identified but not resolved.",
          "Every one has a touch route or was removed.",
          "As adequate, and the check was made on a real phone rather than by emulation.",
        ],
        remediation:
          "Open your design on a phone and try every action. Anything you cannot reach is hover-dependent.",
        recheck: "The hover list with resolutions.",
      },
      {
        criterion: "A tab pass is recorded with failures named",
        evidence:
          "Notes from tabbing through the controls, naming where focus was invisible or the order was wrong.",
        levels: [
          "No tab pass.",
          "Claimed without specifics.",
          "Recorded with specific failures.",
          "As adequate, and one failure was repaired and re-checked.",
        ],
        remediation:
          "Build a rough local page with your controls and tab through it. Record what you see, not what you intend.",
        recheck: "The tab-pass notes.",
      },
    ],
    repairs: [
      "If only the outcome is designed, add an immediate acknowledgement with a label change.",
      "If states rely on colour, add a second distinguishing property.",
      "If controls are hover-only, give each a touch route or remove it.",
      "If focus is invisible anywhere, specify a ring that works on that surface.",
    ],
    portfolio:
      "Craft evidence with proof: a three-moment specification and a tab pass show interaction thinking that screenshots cannot.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section: "Heuristic 1, visibility of system status.",
        purpose:
          "States the obligation this lesson implements: the system tells people what is happening, promptly.",
        minutes: "10–15 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It gives no timings; the three-moment split and the timing rules here are the course's own.",
        fallbackId: "R11",
      },
      {
        ...keyboardPatterns,
        section:
          "One pattern matching a component you use, read for its Keyboard Interaction section.",
        purpose:
          "Shows the level of key-by-key specification a component owes before it is built.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; the pages carry no date. Semantics and keyboard behaviour only — no visual design, no motion — and it is guidance rather than a conformance standard.",
        fallbackId: "R14",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l03-v1",
    module: "m09",
    week: 9,
    day: 3,
    level: 3,
    areas: [9],
    guided: true,
    title: "Transitions that explain a change",
    objective:
      "Design three transitions that show where content came from or went, each with a stated duration and easing, and prove each one is doing explanatory work rather than filling time.",
    bringForward:
      "Your m08 screens and the continuity animations from the lesson 1 audit.",
    prerequisite: "Your audit's continuity items and the screens they occur on.",
    why: "When something appears without explanation, people spend a moment working out what happened. A transition can spend fifty milliseconds to save that moment — or waste four hundred and save nothing.",
    teach: [
      "A transition should connect a cause to an effect: this opened from that.",
      "Short is not always better: the distance travelled sets the duration.",
      "Easing carries meaning — entering fast then settling reads as arrival.",
      "If nothing moved from anywhere, a fade is honest and a slide is a lie.",
      "Two simultaneous transitions compete; sequence them or drop one.",
    ],
    explanation: [
      "The explanatory work of a transition is spatial: a panel that grows from the button that opened it tells the person where it came from and, crucially, where it will go when dismissed. That is why the same panel appearing with a slide from the screen edge, when nothing on the edge caused it, is worse than a plain fade — it asserts a spatial relationship that does not exist, and people trust the assertion.",
      "Duration should follow distance and size. A small control changing state can settle in under a tenth of a second; a full-screen panel travelling a long way needs longer or it appears to teleport. The common mistake is a single duration applied everywhere, which makes small feedback feel sluggish and large movements feel abrupt. Where you cannot measure, err short: people notice slowness far more readily than they notice speed.",
      "Easing is meaning rather than polish. Something entering quickly and settling reads as arriving under its own weight; something leaving with acceleration reads as dismissed. Linear motion reads as mechanical, which is occasionally what you want — a progress indicator — and rarely what you want for content.",
      "Two things moving at once split attention, and one of them will not be seen. When a panel opens while a list re-sorts beneath it, sequence them or animate only the one carrying the explanation. This is the same attention budget the audit in lesson 1 was counting.",
    ],
    misconception:
      "“Animation makes the change feel smooth.” It makes the change legible when it shows a relationship, and it makes the product slow when it does not. Smoothness is not the goal; understanding what happened is.",
    example:
      "Three transitions were designed. The filter panel scales and fades from the filter button, about 200ms, entering fast and settling — it explains where the panel came from and where it returns to. The detail view expands from its row over about 250ms, and the row stays in place beneath so the person knows what to go back to. The confirmation replaces the payment screen with a plain fade of 120ms, deliberately not a slide, because nothing moved anywhere and a slide would have implied a direction that does not exist. A fourth candidate — a staggered animation of every list row on load — was dropped: it delayed reading by half a second and explained nothing.",
    freeToolPath:
      "A local HTML file with CSS transitions lets you feel durations honestly and change them in seconds. Paper storyboards work for the spatial relationship; they cannot tell you whether 400ms is too slow, and it usually is.",
    outputs: [
      "Three transitions specified with origin, duration and easing",
      "A stated reason for each: what relationship it explains",
      "One rejected transition with the reason recorded",
      "A rule for what your product fades and what it moves",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and map the relationships",
        instructions: [
          "Read the assigned animation guidance for duration and easing vocabulary.",
          "For each continuity item from your audit, write what caused it and where it goes.",
        ],
      },
      {
        minutes: 30,
        title: "Design three",
        instructions: [
          "Specify origin, movement, duration and easing for each.",
          "Set duration from the distance and size, not from a single house value.",
          "Make dismissal reverse the entry so the relationship holds both ways.",
        ],
      },
      {
        minutes: 25,
        title: "Test the timings",
        instructions: [
          "Build the transitions roughly in a local file or storyboard the frames.",
          "Try each at half and double your chosen duration.",
          "Keep the shortest that still reads as connected.",
        ],
      },
      {
        minutes: 30,
        title: "Reject one and sequence the rest",
        instructions: [
          "Find a transition that explains nothing and remove it.",
          "Check no two transitions run at once in the same view.",
          "Sequence or drop where they compete.",
        ],
      },
      {
        minutes: 15,
        title: "Write the rule",
        instructions: [
          "Write when your product moves something and when it simply fades.",
          "Record the rejected transition and why.",
          "Save the three specifications with their timings.",
        ],
      },
    ],
    check: [
      {
        question: "When is a fade more honest than a slide?",
        answer:
          "When nothing moved from anywhere. A slide asserts a spatial relationship, and if there is none, the person builds a mental model of the product that is wrong.",
      },
      {
        question: "Why not use one duration everywhere?",
        answer:
          "Because duration should follow distance and size. One value makes small feedback sluggish and large movements abrupt, and both read as poor quality.",
      },
      {
        question: "What happens when two things animate at once?",
        answer:
          "Attention splits and one is missed. Sequence them, or animate only the one that carries the explanation.",
      },
    ],
    rubric: [
      "Each transition states the relationship it explains",
      "Duration follows distance and was tested at two speeds",
      "Dismissal reverses entry",
      "One transition was rejected with the reason recorded",
    ],
    criteria: [
      {
        criterion: "Each transition states the relationship it explains",
        evidence:
          "A written origin and destination per transition, with what the person learns from it.",
        levels: [
          "Transitions specified as effects with no relationship stated.",
          "Relationships asserted but not matched to what actually causes the change.",
          "Each names its true origin and what it explains.",
          "As adequate, and one transition was changed to a fade because no real relationship existed.",
        ],
        remediation:
          "For each transition ask what caused the change and where the content will go when dismissed. If neither has a place on screen, use a fade.",
        recheck: "The relationship notes.",
      },
      {
        criterion: "Duration follows distance and was tested at two speeds",
        evidence:
          "Durations set per transition with a record of trying them faster and slower.",
        levels: [
          "One duration applied everywhere.",
          "Varied durations chosen without testing.",
          "Durations set by distance and tested at two speeds, with the shortest readable kept.",
          "As adequate, and the specification states which transitions must stay under about 200ms.",
        ],
        remediation:
          "Halve and double each duration and record which reads as connected. Keep the shortest that still does.",
        recheck: "The timing test notes.",
      },
      {
        criterion: "Dismissal reverses entry",
        evidence:
          "A specified exit for each transition that returns content to where it came from.",
        levels: [
          "Exits unspecified.",
          "Exits specified but unrelated to the entry.",
          "Each exit reverses its entry.",
          "As adequate, and exits are shorter than entries, which is how dismissal usually reads best.",
        ],
        remediation:
          "For each transition write the exit as the reverse of the entry, then check it does not fight the person's next action.",
        recheck: "The exit specifications.",
      },
      {
        criterion: "One transition was rejected with the reason recorded",
        evidence:
          "A removed transition with what it cost and what it explained.",
        levels: [
          "Nothing rejected.",
          "Something removed with no reason recorded.",
          "A rejection with its cost and its absent explanation stated.",
          "As adequate, and the removal is connected to the time saved in the lesson 1 audit.",
        ],
        remediation:
          "Find the animation that delays the most and explains the least. Remove it and record what it cost.",
        recheck: "The rejection note.",
      },
    ],
    repairs: [
      "If a transition asserts a direction nothing caused, change it to a fade.",
      "If one duration is used everywhere, set each from distance and re-test.",
      "If exits are unspecified, write each as the reverse of its entry.",
      "If two transitions compete, sequence them or drop one.",
    ],
    portfolio:
      "Show the rejected transition alongside the three you kept; the rejection is the part that demonstrates judgement.",
    resource: animations,
    resources: [
      {
        ...animations,
        section:
          "Configuring the animation: duration, timing function and the properties worth animating.",
        purpose:
          "Supplies the vocabulary and mechanics for specifying a transition precisely.",
        minutes: "45–60",
        limits:
          "Free reading, no account. Verified 2026-09-06. Implementation documentation: it gives no guidance on when motion is appropriate, which is this lesson's subject.",
        fallbackId: "R02",
      },
      {
        ...recall,
        section: "Recognition versus recall and the interface implications.",
        purpose:
          "Explains why showing where something came from removes a memory task.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not discuss motion; the application is this lesson's own.",
        fallbackId: "R31",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l04-v1",
    module: "m09",
    week: 9,
    day: 4,
    level: 3,
    areas: [9],
    guided: true,
    title: "Reduced motion is not an afterthought",
    objective:
      "Turn on your own device's reduced-motion setting, design an alternative for every animation you kept, and state which are essential enough to survive in a reduced form.",
    bringForward:
      "Your kept animations and transition specifications.",
    prerequisite: "Your animation audit and the three transitions you designed.",
    why: "Motion makes some people ill. The setting exists on every device you are designing for, and a product that ignores it is unusable for those people rather than merely unfashionable.",
    teach: [
      "The setting is a request from the person, exposed by every major operating system.",
      "Reduced does not mean removed: replace movement with a gentler change, usually a fade.",
      "Essential motion — showing that something is loading — must survive in some form.",
      "Large-area and parallax movement is the most likely to cause harm; cut it first.",
      "Test with the setting on, on your own device, and record what you saw.",
    ],
    explanation: [
      "Vestibular disorders are common enough that any product with an audience will have users affected by them, and large or unexpected movement can cause genuine nausea and dizziness rather than mild annoyance. Every major operating system therefore exposes a reduced-motion setting, and the assigned page lists exactly where it lives on each — which means you can turn it on for yourself in under a minute and see what your design does.",
      "The right response is replacement rather than deletion. If a panel's entry explained where it came from, removing the animation entirely removes the explanation; a quick fade keeps the change legible without moving anything across the screen. The assigned example does exactly this: it swaps an animation for a gentler one rather than switching it off.",
      "Some motion is essential and must persist in a reduced form. A loading indicator communicates that the system is working, and a person who has asked for less motion still needs to know that. The reduced version should be smaller, local and non-oscillating — a subtle pulse or a text change rather than a spinning element crossing a large area.",
      "The riskiest patterns are the large ones: full-screen transitions, parallax scrolling, background video, anything that moves a large area or moves it repeatedly. Those are the first to cut when the setting is on, and honestly they are often worth cutting for everyone, since they cost the most and explain the least.",
    ],
    misconception:
      "“We will add reduced motion at the end.” Designed at the end it becomes “disable all animation”, which strips the explanatory work along with the decoration. Designing the alternative alongside the original takes minutes and keeps the meaning.",
    example:
      "With the setting on, three of the five kept animations needed alternatives. The filter panel's scale-and-fade became a fade of 120ms with no movement, keeping the change legible. The detail view's expansion became a cross-fade, and the row it came from stayed highlighted so the relationship survived. The loading spinner — essential — became a small pulsing dot with the label “Booking…”, local rather than crossing the screen. The confirmation flourish was removed entirely under the setting, since it explained nothing. Testing was done on the researcher's own phone with the setting on, and the result recorded with the device and version.",
    freeToolPath:
      "Your own device: the assigned page lists where the setting lives on Windows, macOS, iOS, Android and Linux. A local HTML file with a reduced-motion media query shows both versions side by side with no account or tooling.",
    outputs: [
      "The reduced-motion setting turned on and what changed recorded",
      "An alternative specified for every kept animation",
      "A list of essential motion with its reduced form",
      "Anything removed entirely, with the reason",
    ],
    steps: [
      {
        minutes: 20,
        title: "Turn it on and read",
        instructions: [
          "Read the assigned page and find the setting on your own device.",
          "Turn it on and note which apps visibly change behaviour.",
        ],
      },
      {
        minutes: 30,
        title: "Classify your motion",
        instructions: [
          "Mark each kept animation essential, explanatory or decorative.",
          "For essential motion, design a smaller local version.",
          "For explanatory motion, design a fade that preserves the meaning.",
        ],
      },
      {
        minutes: 25,
        title: "Cut the risky patterns",
        instructions: [
          "Identify anything moving a large area, repeating, or parallax.",
          "Remove those entirely under the setting.",
          "Ask whether each is worth keeping even without the setting.",
        ],
      },
      {
        minutes: 30,
        title: "Test with the setting on",
        instructions: [
          "Walk one complete task with reduced motion enabled.",
          "Record anything that became confusing because a relationship was lost.",
          "Repair by adding a gentler change, not by restoring the movement.",
        ],
      },
      {
        minutes: 15,
        title: "Record honestly",
        instructions: [
          "Write the device and setting you tested with.",
          "State that your own test is not testing with affected users.",
          "Save both versions of every animation.",
        ],
      },
    ],
    check: [
      {
        question: "Why is “disable all animation” the wrong implementation?",
        answer:
          "Because it strips explanation along with decoration. A person who asked for less motion still needs to know where a panel came from and that something is loading.",
      },
      {
        question: "Which motion must survive in reduced form?",
        answer:
          "Essential motion — chiefly that the system is working. It should become smaller, local and non-oscillating, or be replaced by a text change.",
      },
      {
        question: "What can you claim after testing with the setting yourself?",
        answer:
          "That the design responds to the setting on your device. Not that it is comfortable for people with vestibular disorders; that needs those people, and your write-up should say so.",
      },
    ],
    rubric: [
      "The setting was turned on and the test recorded",
      "Every kept animation has a reduced alternative",
      "Essential motion survives in a reduced form",
      "Large-area and repeating motion is removed under the setting",
    ],
    criteria: [
      {
        criterion: "The setting was turned on and the test recorded",
        evidence:
          "A record of enabling reduced motion on a named device and walking one complete task.",
        levels: [
          "Not tested.",
          "Claimed without a device or task named.",
          "Enabled on a named device with the task walked and results recorded.",
          "As adequate, and the record notes which other apps changed, showing the setting was genuinely active.",
        ],
        remediation:
          "Follow the assigned page to your platform's setting, turn it on and walk your task again, writing what you saw.",
        recheck: "The test record.",
      },
      {
        criterion: "Every kept animation has a reduced alternative",
        evidence:
          "A paired specification: full version and reduced version, for each animation retained.",
        levels: [
          "No alternatives.",
          "Alternatives for some, or a blanket disable.",
          "Each animation has a specified gentler alternative.",
          "As adequate, and each alternative preserves the explanation the original carried.",
        ],
        remediation:
          "For each animation write what the person learns from it, then design a change that teaches the same thing without movement.",
        recheck: "The paired specifications.",
      },
      {
        criterion: "Essential motion survives in a reduced form",
        evidence:
          "Loading and progress indicators specified in a smaller, local, non-oscillating form.",
        levels: [
          "Essential motion removed under the setting.",
          "Retained unchanged, defeating the setting.",
          "Reduced in size and movement while still communicating.",
          "As adequate, and a text alternative is specified for the case where any motion is unwelcome.",
        ],
        remediation:
          "Replace the spinner with a small local pulse plus a label change, and check it still says the system is working.",
        recheck: "The essential-motion specification.",
      },
      {
        criterion: "Large-area and repeating motion is removed under the setting",
        evidence:
          "A list of large, parallax or repeating motion, each removed when the setting is on.",
        levels: [
          "Retained.",
          "Reduced but still moving a large area.",
          "Removed under the setting, with the decision recorded.",
          "As adequate, and one is removed for everyone after considering what it cost and explained.",
        ],
        remediation:
          "List everything that moves more than a small region or repeats. Remove each under the setting first, then ask whether it earns its place at all.",
        recheck: "The removal list.",
      },
    ],
    repairs: [
      "If nothing was tested, enable the setting on your device and walk the task.",
      "If the response is a blanket disable, design gentler alternatives that keep the meaning.",
      "If loading motion disappears, replace it with a local pulse and a label.",
      "If large-area motion survives, remove it under the setting and reconsider it generally.",
    ],
    portfolio:
      "Rare and credible in a junior portfolio: both versions of each animation with a recorded device test, and an honest statement that self-testing is not testing with affected users.",
    resource: reducedMotion,
    resources: [
      {
        ...reducedMotion,
        section:
          "The reduce and no-preference values, the platform settings list, and the worked example that swaps rather than removes an animation.",
        purpose:
          "Tells you how the request reaches your design and where to turn it on for yourself.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06; the page states its own last modification as 10 June 2026. It documents the signal, not motion design: no durations, no easing guidance and no conformance criteria.",
        fallbackId: "R13",
      },
      {
        ...easyChecks,
        section: "The check on moving, flashing and blinking content.",
        purpose:
          "Gives a preliminary check for motion that runs without the person asking for it.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The checks are preliminary and passing them is not conformance; they are not a substitute for testing with affected people.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l05-v1",
    module: "m09",
    week: 9,
    day: 5,
    level: 3,
    areas: [9],
    guided: true,
    title: "Gestures and what people can discover",
    objective:
      "Specify the gestures your product uses, give every one a visible alternative, and record which were discoverable when someone tried the product without being told.",
    bringForward:
      "Your m08 list and card components and the m07 flows they appear in.",
    prerequisite: "Your m08 list components and the flows using them.",
    why: "A gesture nobody discovers is a feature nobody has. Gestures are shortcuts for people who already know, not routes for people who do not.",
    teach: [
      "Every gesture needs a visible alternative that does the same thing.",
      "Hidden gestures are shortcuts, never the only route to an action.",
      "Match the platform's conventions; inventing a new swipe teaches nobody.",
      "Destructive gestures need either a confirmation or a working undo.",
      "Gestures fail for people with tremors, one hand free, or a cracked screen.",
    ],
    explanation: [
      "Discoverability is the whole problem. A swipe on a list row is invisible: nothing on screen says it exists, so only people who have met the pattern elsewhere will try it. That makes it a fine accelerator and a poor primary route, and the rule follows directly — if the only way to remove an item is to swipe, then for a large share of your users the item cannot be removed.",
      "Convention does the teaching you cannot do yourself. Swipe-to-go-back, pull-to-refresh and long-press-for-options carry meaning because other products established them, and a product that reassigns them creates errors rather than delight. Where you genuinely need a new gesture, treat it as an accelerator for repeat users and design the visible route as the real one.",
      "Destructive gestures deserve particular care because they are easy to trigger by accident: a swipe while scrolling with a thumb on a moving bus is a slip, not a decision. Either confirm, or — usually better — perform the action and offer a real undo for long enough that a person who did not mean it can recover.",
      "Physical circumstances break gestures. Someone holding a child, with a cracked screen corner, with limited dexterity or with one hand on a rail cannot perform a precise two-finger action. The visible alternative is not a courtesy for edge cases; it is the route most of your users will actually take.",
    ],
    misconception:
      "“Gestures make the interface cleaner.” They make it emptier, which is not the same. The controls are still needed; they have been moved somewhere the person has to already know about, and the cleanliness is paid for by everyone who does not.",
    example:
      "The shortlist row used swipe-left to remove, with no visible control. Three people were asked to remove an item without being told how; none swiped, two looked for a control and one opened the detail view. The revision kept the swipe as an accelerator and added a visible quiet remove control on every row. Removal became immediate with a five-second undo rather than a confirmation dialogue. Pull-to-refresh was left alone because it matched the platform convention, and a proposed two-finger gesture for changing dates was dropped: it was undiscoverable, unconventional and impossible one-handed.",
    freeToolPath:
      "Paper prototypes work for discoverability: hand someone the printed screen and ask them to do the task, then watch what they reach for. For real gesture behaviour, open a local HTML page on your own phone.",
    outputs: [
      "A list of every gesture with its visible alternative",
      "Discoverability results from three people who were not told",
      "Destructive gestures specified with undo or confirmation",
      "Any gesture removed for being unconventional or one-handed-impossible",
    ],
    steps: [
      {
        minutes: 20,
        title: "List the gestures",
        instructions: [
          "List every gesture your design uses or assumes.",
          "Mark which are platform conventions and which you invented.",
          "Mark which are the only route to their action.",
        ],
      },
      {
        minutes: 30,
        title: "Add visible alternatives",
        instructions: [
          "Give every gesture a visible control that does the same thing.",
          "Keep the gesture as an accelerator where it matches convention.",
          "Remove any invented gesture that has no clear benefit.",
        ],
      },
      {
        minutes: 30,
        title: "Test discoverability",
        instructions: [
          "Ask three people to complete the action without telling them how.",
          "Record what each reached for first.",
          "Note anyone who gave up or used a longer route.",
        ],
      },
      {
        minutes: 25,
        title: "Make destruction recoverable",
        instructions: [
          "For each destructive gesture, specify undo with a stated window.",
          "Reserve confirmation for actions that cannot be undone.",
          "Check the undo is reachable one-handed.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Write which gestures survived and why.",
          "Record what a person with one hand free cannot do.",
          "Save the specification with the discoverability results.",
        ],
      },
    ],
    check: [
      {
        question: "Why can a gesture not be the only route to an action?",
        answer:
          "Because it is invisible: only people who already know the pattern will find it. Everyone else experiences the action as missing.",
      },
      {
        question: "Why prefer undo to confirmation for a swipe?",
        answer:
          "Because a swipe is easily triggered by accident while scrolling, and a confirmation on every swipe destroys the speed the gesture existed for. Undo protects the accident without taxing the intention.",
      },
      {
        question: "What does a one-handed check reveal?",
        answer:
          "Which actions require a grip or a precision most people do not have while standing, carrying something, or using a damaged screen — which is a large share of real use.",
      },
    ],
    rubric: [
      "Every gesture has a visible alternative",
      "Discoverability was tested with people who were not told",
      "Destructive gestures are recoverable",
      "One-handed and low-dexterity use is considered",
    ],
    criteria: [
      {
        criterion: "Every gesture has a visible alternative",
        evidence:
          "A paired list: gesture and the visible control performing the same action.",
        levels: [
          "Gestures are the only route to some actions.",
          "Alternatives exist for some gestures.",
          "Every gesture has a visible equivalent.",
          "As adequate, and the visible route is treated as primary in the specification.",
        ],
        remediation:
          "For each gesture, design the control someone would use if they had never met the gesture. That control is the real route.",
        recheck: "The paired list.",
      },
      {
        criterion: "Discoverability was tested with people who were not told",
        evidence:
          "Records from three people attempting the action unaided, with what each reached for.",
        levels: [
          "Not tested.",
          "Tested after explaining the gesture.",
          "Three unaided attempts recorded with first actions.",
          "As adequate, and the results changed the design rather than confirming it.",
        ],
        remediation:
          "Hand someone the screen and state the goal only. Say nothing else, and write down what they try.",
        recheck: "The discoverability records.",
      },
      {
        criterion: "Destructive gestures are recoverable",
        evidence:
          "Undo specified with a window, or a confirmation where the action is irreversible.",
        levels: [
          "Destructive gestures with no recovery.",
          "Confirmation on every swipe, removing the speed benefit.",
          "Undo with a stated window, confirmation reserved for the irreversible.",
          "As adequate, and the undo control is reachable one-handed.",
        ],
        remediation:
          "Specify what happens in the five seconds after a destructive gesture and where the person taps to reverse it.",
        recheck: "The recovery specification.",
      },
      {
        criterion: "One-handed and low-dexterity use is considered",
        evidence:
          "A written note of which gestures fail one-handed or with limited dexterity, and what those people use instead.",
        levels: [
          "Not considered.",
          "Mentioned without consequences.",
          "Specific failures named with the alternative route stated.",
          "As adequate, and a multi-finger or precision gesture was removed as a result.",
        ],
        remediation:
          "Try every gesture with one hand while holding something in the other. Anything you cannot do is not available to many of your users.",
        recheck: "The one-handed notes.",
      },
    ],
    repairs: [
      "If a gesture is the only route, add a visible control and treat it as primary.",
      "If discoverability was untested, run three unaided attempts.",
      "If a destructive gesture has no undo, specify one with a window.",
      "If a gesture needs two hands or fine precision, remove or replace it.",
    ],
    portfolio:
      "The unaided discoverability test is the valuable part: three people reaching for the wrong thing is more convincing than any argument about affordances.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 6, recognition rather than recall, and heuristic 7, flexibility and efficiency of use.",
        purpose:
          "Frames gestures as accelerators for experienced users layered over visible routes.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover touch gestures specifically; the discoverability rules here are the course's own.",
        fallbackId: "R11",
      },
      {
        ...errors,
        section: "Slips, prevention and undo.",
        purpose:
          "Explains why an accidental swipe is a slip and why undo suits it better than confirmation.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the gesture application is this lesson's.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l06-v1",
    module: "m09",
    week: 9,
    day: 6,
    level: 3,
    areas: [9],
    guided: true,
    title: "Keyboard behaviour, specified key by key",
    objective:
      "Write the expected keyboard behaviour for two of your components, key by key, against the assigned pattern, and test any built version against your own specification.",
    bringForward:
      "Two interactive components from your m08 inventory — ideally one simple and one composite.",
    prerequisite: "Two components from your inventory, one composite.",
    why: "Keyboard behaviour is designed or it is accidental. Written down before the build, it costs an hour; discovered afterwards, it is a rewrite.",
    teach: [
      "Tab moves between components; arrow keys usually move within one.",
      "Enter and space activate, and the difference matters for buttons and links.",
      "Escape closes, and it must return focus to whatever opened the thing.",
      "Every component you build should have a written key table before it is built.",
      "The assigned patterns are guidance, not a standard: cite them, then test.",
    ],
    explanation: [
      "The tab-versus-arrow distinction is what separates a usable composite component from an exhausting one. If every tab in a tab strip is a tab stop, a keyboard user passes through all of them to reach the content; the established pattern makes the strip one stop and the arrow keys move within it. Getting this right is invisible to mouse users and decisive for everyone else.",
      "Activation keys carry meaning. A button responds to both enter and space; a link responds to enter. Reproducing that correctly matters because people have learned it, and a control that looks like a button but ignores space is a small, repeated failure that is hard to articulate and easy to feel.",
      "Escape has an obligation beyond closing: focus must return somewhere sensible, normally the control that opened the thing. A dialogue that closes and drops focus back to the top of the document forces the keyboard user to travel all the way back, which is the equivalent of scrolling a mouse user to the top of the page every time they close something.",
      "The assigned patterns give you the expected key behaviour for the common components, and writing your own table from them before building is the point of this lesson. They are authoring practices rather than a conformance standard, and they cover semantics and keys only — nothing about how the component should look or move — so your table is a specification you still have to test against a real build.",
    ],
    misconception:
      "“Keyboard support means everything is reachable by tab.” Reachable is not usable. A composite where every element is a tab stop is technically reachable and practically unbearable, and a dialogue that traps focus with no escape is reachable and inescapable.",
    example:
      "The date-selection component and the filter panel were specified before building. For the date component: one tab stop for the group, arrow keys to move between dates, enter or space to select, home and end for the first and last available, escape to close returning focus to the field. For the filter panel: focus moves into the panel when it opens, escape closes it and returns focus to the filter button, and tab cycles inside while it is open. A rough build was tested against the table and failed two rows — escape did nothing, and focus returned to the document top — both recorded as defects rather than as design changes.",
    freeToolPath:
      "Writing the table needs nothing. Testing it needs a rough local HTML file and your own keyboard; where nothing is built, record every row as untested rather than assumed.",
    outputs: [
      "A key-by-key table for two components",
      "Tab and arrow behaviour distinguished for the composite",
      "Escape behaviour including where focus returns",
      "Test results against the table, or an explicit untested note",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the patterns",
        instructions: [
          "Read the assigned pattern pages for your two components.",
          "Copy out their keyboard interaction sections in your own words.",
        ],
      },
      {
        minutes: 30,
        title: "Write the tables",
        instructions: [
          "For each component write one row per key: key, context, expected behaviour.",
          "Distinguish what tab does from what the arrow keys do.",
          "Include home, end and escape where the pattern uses them.",
        ],
      },
      {
        minutes: 25,
        title: "Specify focus movement",
        instructions: [
          "State where focus goes when the component opens.",
          "State where focus returns when it closes or is cancelled.",
          "Check focus never lands somewhere invisible or off screen.",
        ],
      },
      {
        minutes: 25,
        title: "Test or mark untested",
        instructions: [
          "Build a rough version and test every row of the table.",
          "Record pass or fail per row with what happened.",
          "Where nothing is built, mark every row untested rather than assumed.",
        ],
      },
      {
        minutes: 15,
        title: "Record the gaps",
        instructions: [
          "List the failures as defects for the build, not as design changes.",
          "Note where you departed from the pattern and why.",
          "Save both tables with their results.",
        ],
      },
    ],
    check: [
      {
        question: "Why should a composite component be one tab stop?",
        answer:
          "So a keyboard user can pass it or enter it. Making every child a tab stop forces them through the whole set before reaching anything else.",
      },
      {
        question: "Where should focus go when a dialogue closes?",
        answer:
          "To the control that opened it. Dropping focus to the document start makes the person travel back through everything they had already passed.",
      },
      {
        question: "Are the assigned patterns a standard you must meet?",
        answer:
          "No, they are authoring guidance. Cite them, write your table from them, then test the build — meeting the pattern on paper proves nothing about the implementation.",
      },
    ],
    rubric: [
      "A key-by-key table exists for both components",
      "Tab and arrow roles are distinguished",
      "Focus movement on open and close is specified",
      "Results are recorded, including what was untested",
    ],
    criteria: [
      {
        criterion: "A key-by-key table exists for both components",
        evidence:
          "Two tables with one row per key giving context and expected behaviour.",
        levels: [
          "Keyboard mentioned in prose only.",
          "One component specified.",
          "Both specified key by key.",
          "As adequate, and the tables cover the keys the pattern lists rather than only tab and enter.",
        ],
        remediation:
          "Copy the pattern's keyboard section into a table and adapt each row to your component.",
        recheck: "The two key tables.",
      },
      {
        criterion: "Tab and arrow roles are distinguished",
        evidence:
          "A composite component where tab moves between components and arrows move within.",
        levels: [
          "Every child is a tab stop.",
          "Distinction asserted but not specified per key.",
          "Tab and arrow behaviour specified separately.",
          "As adequate, and the specification says what happens at the ends of the set.",
        ],
        remediation:
          "Rewrite the composite's rows: one stop for the group, arrows to move inside, and state the wrap behaviour.",
        recheck: "The revised composite table.",
      },
      {
        criterion: "Focus movement on open and close is specified",
        evidence:
          "Stated destinations for focus when the component opens, closes and is cancelled.",
        levels: [
          "Focus movement unspecified.",
          "Opening specified but not the return.",
          "Both specified, with cancellation included.",
          "As adequate, and the specification forbids focus landing off screen or on an invisible element.",
        ],
        remediation:
          "Write three sentences: focus on open, focus on close, focus on escape. Any missing one will be decided at build time.",
        recheck: "The focus specification.",
      },
      {
        criterion: "Results are recorded, including what was untested",
        evidence:
          "Pass or fail per row against a build, or an explicit statement that no build exists and every row is untested.",
        levels: [
          "Behaviour claimed without testing.",
          "Partially tested with results unrecorded.",
          "Every row marked tested with a result, or untested honestly.",
          "As adequate, and failures are recorded as build defects with the expected behaviour restated.",
        ],
        remediation:
          "Build a rough page with the two components and walk your tables row by row. Record what happens, not what should.",
        recheck: "The tables with results.",
      },
    ],
    repairs: [
      "If keyboard behaviour is prose, rewrite it as one row per key.",
      "If every child is a tab stop, make the group one stop with arrow movement.",
      "If focus return is unspecified, state where it goes on close and cancel.",
      "If nothing was tested, say so per row rather than implying it works.",
    ],
    portfolio:
      "A key table with test results is exactly the artefact an engineer wants and most portfolios lack. Include the untested rows honestly.",
    resource: keyboardPatterns,
    resources: [
      {
        ...keyboardPatterns,
        section:
          "The pattern pages for your two components, read for their Keyboard Interaction sections.",
        purpose:
          "Supplies the expected key behaviour your tables are written from.",
        minutes: "45–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; pages carry no date. Semantics and keyboard only — no visual design, no motion — and it is authoring guidance rather than a conformance standard, so the build still has to be tested.",
        fallbackId: "R14",
      },
      {
        ...forms,
        section: "The sections on labels and on notifying users of errors, read for focus behaviour around validation.",
        purpose:
          "Connects keyboard focus to the error handling you specified in m07 and m08.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than composite widget keyboard patterns, which is why the patterns resource carries this lesson.",
        fallbackId: "R10",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l07-v1",
    module: "m09",
    week: 9,
    day: 7,
    level: 3,
    areas: [9],
    guided: true,
    title: "Where focus goes when things change",
    objective:
      "Specify focus behaviour for four situations — opening, closing, content replacing, and an error appearing — and check that nothing your product does moves a person's place without telling them.",
    bringForward:
      "Your key tables and the m08 message and state specifications.",
    prerequisite: "Your key tables and the m08 message specifications.",
    why: "Focus is the keyboard user's cursor and the screen-reader user's position. Moving it carelessly is like scrolling someone else's page while they are reading.",
    teach: [
      "Move focus deliberately: on open, on close, on error, on content replacement.",
      "Never move focus without a reason the person would recognise.",
      "New content that matters must be announced or given focus, not silently inserted.",
      "Keep focus visible at every step; an invisible focus is a lost position.",
      "Test by tabbing with your eyes closed for one step: can you tell where you are?",
    ],
    explanation: [
      "Four moments deserve explicit decisions. Opening something — a panel, a dialogue — usually means focus moves into it, or the person's next tab lands somewhere unrelated. Closing means focus returns to the opener. Content replacing itself, as in a filtered list, usually means focus should stay where it is while the change is announced. An error appearing means focus moves to it, or to the first field concerned, so the person meets the problem rather than hunting for it.",
      "Unrequested focus movement is disorienting in the same way as an unrequested scroll. A page that steals focus to a newsletter field, or that resets focus to the top after each filter change, makes keyboard navigation feel like being pushed. The rule is simple: move focus when the person's action implies a new place to be, and leave it alone otherwise.",
      "Silently inserted content is invisible to anyone not looking at that part of the screen. Ten new results appearing below the fold, or an inline warning added above a field, needs either an announcement or focus, depending on urgency. This is the same obligation as the message design in m08, expressed for people who are not scanning visually.",
      "The cheapest test is to tab through your own component while watching only the focus indicator. If you lose track of where you are for even one step, so will someone who cannot see the whole layout at once — and if the indicator disappears entirely on some surface, that step is a hole in the interface.",
    ],
    misconception:
      "“Screen-reader support is a development task.” Where focus moves is a design decision with visible consequences for sighted keyboard users too. Left to implementation it becomes whatever the framework does, which is usually nothing or the document top.",
    example:
      "Four rules were written. Opening the filter panel moves focus to its first control. Closing it — by escape or by the close control — returns focus to the filter button. Applying a filter leaves focus on the control and announces “12 classes match”, because moving focus to the list would lose the person's place in the filters. A validation error moves focus to the first field with a problem and the message is tied to that field. A fifth situation was found while testing: after removing a shortlist item, focus was landing on the document top, which was recorded as a defect with the expected behaviour — focus should move to the next item, or to the list heading when the list is now empty.",
    freeToolPath:
      "A rough local HTML page and your own keyboard. If a screen reader is already on your device — the assigned catalog entry names the free ones — try one step with it, and record that as a preliminary check rather than a test with disabled users.",
    outputs: [
      "Focus rules for opening, closing, replacing content and errors",
      "A list of places focus currently moves without reason",
      "A visible focus indicator specified for every surface",
      "Tab-through results with any lost-position steps named",
    ],
    steps: [
      {
        minutes: 20,
        title: "Read and list the moments",
        instructions: [
          "Re-read the assigned pattern guidance on focus movement.",
          "List every moment in your product where content opens, closes, replaces or fails.",
        ],
      },
      {
        minutes: 30,
        title: "Write the four rules",
        instructions: [
          "State where focus goes on open and where it returns on close.",
          "State whether focus moves when content is replaced, and what is announced.",
          "State where focus goes when an error appears.",
        ],
      },
      {
        minutes: 25,
        title: "Find unrequested movement",
        instructions: [
          "Walk your flows looking for focus moving when the person did not ask.",
          "Record each and decide whether to remove or justify it.",
        ],
      },
      {
        minutes: 30,
        title: "Test the indicator",
        instructions: [
          "Tab through each screen and watch only the focus indicator.",
          "Note any step where you lose track of your position.",
          "Check the indicator is visible on every surface colour you use.",
        ],
      },
      {
        minutes: 15,
        title: "Record honestly",
        instructions: [
          "Write which rules you could verify and which remain untested.",
          "State that your own checks are not testing with disabled users.",
          "Save the rules and the tab-through results.",
        ],
      },
    ],
    check: [
      {
        question: "When should focus move on its own?",
        answer:
          "When the person's action implies a new place to be — opening a panel, submitting a form with an error. Otherwise leaving focus alone is the respectful default.",
      },
      {
        question: "What does silently inserted content cost?",
        answer:
          "Anyone not looking at that region misses it entirely. New content that matters needs an announcement or focus, chosen by urgency.",
      },
      {
        question: "What can a self-run tab-through establish?",
        answer:
          "That focus is visible and ordered sensibly on your device. It is a preliminary check, not evidence that the product works for people who rely on assistive technology.",
      },
    ],
    rubric: [
      "Focus rules cover open, close, replace and error",
      "Unrequested focus movement is found and resolved",
      "The focus indicator is specified for every surface",
      "Results distinguish what was verified from what was not",
    ],
    criteria: [
      {
        criterion: "Focus rules cover open, close, replace and error",
        evidence:
          "Four written rules naming the destination in each situation.",
        levels: [
          "No rules.",
          "Two or three situations covered.",
          "All four covered with destinations named.",
          "As adequate, and the replace rule states what is announced instead of moving focus.",
        ],
        remediation:
          "Write one sentence per situation. Any missing sentence becomes whatever the framework does.",
        recheck: "The four rules.",
      },
      {
        criterion: "Unrequested focus movement is found and resolved",
        evidence:
          "A list of places focus moved without a person's action, each removed or justified.",
        levels: [
          "Not examined.",
          "Noticed without resolution.",
          "Each instance removed or justified in writing.",
          "As adequate, and one is identified as a defect for the build rather than a design intention.",
        ],
        remediation:
          "Walk each flow watching the indicator. Every unexplained jump is an instance.",
        recheck: "The list with resolutions.",
      },
      {
        criterion: "The focus indicator is specified for every surface",
        evidence:
          "A specification showing the indicator against each background colour it can appear on.",
        levels: [
          "Indicator unspecified or removed for aesthetics.",
          "Specified for one surface only.",
          "Specified and checked on every surface in use.",
          "As adequate, and the indicator does not rely on colour alone to be seen.",
        ],
        remediation:
          "Place the indicator on each surface from your token sheet and check it is visible on all of them.",
        recheck: "The indicator specification.",
      },
      {
        criterion: "Results distinguish what was verified from what was not",
        evidence:
          "Tab-through results with lost-position steps named, and an explicit statement about untested assistive-technology behaviour.",
        levels: [
          "Claims made without checks.",
          "Checks run but limits unstated.",
          "Results recorded with limits stated.",
          "As adequate, and one preliminary screen-reader observation is recorded as preliminary.",
        ],
        remediation:
          "Write two lists: what you observed on your device, and what you have not established. Do not merge them.",
        recheck: "The results and limits.",
      },
    ],
    repairs: [
      "If a situation has no rule, write the destination for focus in one sentence.",
      "If focus jumps without cause, remove the movement or justify it.",
      "If the indicator vanishes on a surface, specify one that works there.",
      "If assistive-technology behaviour is claimed, mark it preliminary or untested.",
    ],
    portfolio:
      "Include the focus rules with your key tables. Together they are the interaction specification an engineer builds from and a reviewer can check.",
    resource: keyboardPatterns,
    resources: [
      {
        ...keyboardPatterns,
        section:
          "The patterns for a dialogue and a disclosure, read for how focus enters and returns.",
        purpose:
          "Gives worked focus behaviour for the two situations products most often get wrong.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; no date on the pages. Guidance rather than a standard, and it covers no visual design; the indicator rules here are the course's own.",
        fallbackId: "R14",
      },
      {
        ...easyChecks,
        section: "The keyboard access check.",
        purpose:
          "Gives a preliminary self-check for reachability and visible focus.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page states its checks are preliminary and not conformance, and running them yourself is not testing with disabled participants.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l08-v1",
    module: "m09",
    week: 9,
    day: 8,
    level: 3,
    areas: [9],
    guided: true,
    title: "Direct manipulation: drag, reorder and their consequences",
    objective:
      "Design one direct-manipulation interaction with a keyboard equivalent, a clear drop target, a recovery path, and a stated decision about what it costs people who cannot drag.",
    bringForward:
      "Any part of your product where people arrange, reorder or move something.",
    prerequisite: "One arranging or reordering task from your product.",
    why: "Dragging feels natural and excludes a lot of people. If you use it, it needs a keyboard route and a way back.",
    teach: [
      "Direct manipulation must always have a non-drag equivalent that does the same job.",
      "Show what can be picked up, what is being dragged, and where it will land.",
      "Commit on release, and make the result reversible for long enough to notice.",
      "Dragging on a phone competes with scrolling; decide which wins and when.",
      "If the interaction cannot be done by keyboard, it is not finished.",
    ],
    explanation: [
      "Drag and drop is a genuine improvement for arranging things and a genuine barrier for anyone with limited dexterity, a tremor, a touchpad they find awkward, or a screen reader. That does not make it wrong; it makes the equivalent route mandatory. Move up and move down controls, or a keyboard mode where the item is picked up and moved with arrow keys, cover the same task and are usually easy to add once you have decided to.",
      "Three signals make dragging legible: what is draggable, what is currently held, and where it will go. Products routinely provide the second and neglect the first and third, so people learn by accident that a row can be moved, and then guess where it will land. A visible drop indicator — a line, a gap, a highlighted target — is what turns a guess into a decision.",
      "Commit on release and offer a way back. An accidental reorder is a slip, and slips need recovery rather than confirmation; a brief undo is the right instrument, and the message that offers it should say what changed. Reordering that silently persists is unrecoverable for the person who did not notice they had done it.",
      "On touch screens, dragging and scrolling compete for the same gesture, and the resolution has to be deliberate: a long press to enter a drag mode, a dedicated handle, or drag only in a mode the person turned on. Choosing nothing means the product will feel unpredictable — sometimes scrolling, sometimes dragging — which is worse than either.",
    ],
    misconception:
      "“Drag and drop is intuitive.” It is familiar to people who have used it. It is invisible to people who have not, impossible for some, and ambiguous on touch screens where the same gesture already means scroll.",
    example:
      "The shortlist could be reordered by dragging, with no other route. Redesigned: a handle marks each draggable row, a line shows where the item will land, and the drop commits on release with a message — “Moved to position 2. Undo” — lasting several seconds. Keyboard equivalent: focus the handle, press space to pick up, arrow keys to move, space to drop, escape to cancel, matching the assigned pattern conventions. On touch, dragging requires the handle so scrolling keeps working elsewhere. The write-up records that no test with a screen-reader user has been run, so the keyboard route is specified but not validated.",
    freeToolPath:
      "Paper works for the drop-target design: cut a row out and move it around the printed list, asking someone where they expect it to land. The keyboard route is written as a key table like the previous lesson's.",
    outputs: [
      "A drag interaction with pick-up, drag and drop-target signals",
      "A keyboard equivalent specified key by key",
      "Undo after a move, with the message wording",
      "A stated decision about drag versus scroll on touch",
    ],
    steps: [
      {
        minutes: 20,
        title: "Choose the task and read",
        instructions: [
          "Choose one arranging task in your product.",
          "Read the assigned pattern guidance for a comparable component's keys.",
        ],
      },
      {
        minutes: 30,
        title: "Design the three signals",
        instructions: [
          "Show what is draggable, using a handle or an equivalent affordance.",
          "Show the item while it is held.",
          "Show where it will land with a visible drop indicator.",
        ],
      },
      {
        minutes: 30,
        title: "Write the keyboard route",
        instructions: [
          "Specify pick up, move, drop and cancel as keys.",
          "State what is announced at each step.",
          "Check the route completes the same task, not a reduced version.",
        ],
      },
      {
        minutes: 25,
        title: "Design recovery and touch behaviour",
        instructions: [
          "Specify undo with a window and write the message.",
          "Decide how drag and scroll are distinguished on touch.",
          "Check the decision does not break scrolling elsewhere.",
        ],
      },
      {
        minutes: 15,
        title: "Record the cost",
        instructions: [
          "Write who cannot use the drag route and what they use instead.",
          "State what remains untested, including any assistive-technology behaviour.",
          "Save the specification with the key table.",
        ],
      },
    ],
    check: [
      {
        question: "Why is a keyboard equivalent mandatory?",
        answer:
          "Because dragging is impossible or unreliable for many people. Without an equivalent, the task is unavailable to them rather than merely harder.",
      },
      {
        question: "What are the three signals a drag needs?",
        answer:
          "What can be picked up, what is currently held, and where it will land. Products usually show only the second, leaving people to guess the outcome.",
      },
      {
        question: "Why does dragging need a deliberate touch decision?",
        answer:
          "Because the same gesture already means scroll. Without a handle or a mode, the product behaves unpredictably, which is worse than either behaviour alone.",
      },
    ],
    rubric: [
      "All three drag signals are specified",
      "A keyboard equivalent completes the same task",
      "A move is reversible with stated wording",
      "The drag-versus-scroll decision is explicit",
    ],
    criteria: [
      {
        criterion: "All three drag signals are specified",
        evidence:
          "Specifications for the draggable affordance, the held state and the drop indicator.",
        levels: [
          "Only the held state is designed.",
          "Two of the three.",
          "All three specified.",
          "As adequate, and the drop indicator shows the resulting order rather than merely a target.",
        ],
        remediation:
          "Draw the three moments separately: before pick-up, during, and just before release. Each needs its own signal.",
        recheck: "The three specifications.",
      },
      {
        criterion: "A keyboard equivalent completes the same task",
        evidence:
          "A key table covering pick up, move, drop and cancel, achieving the same result as dragging.",
        levels: [
          "No keyboard route.",
          "A reduced route that cannot reach every position.",
          "A full equivalent specified key by key.",
          "As adequate, and each step states what is announced for a screen-reader user.",
        ],
        remediation:
          "Write the keys, then walk the task by keyboard on paper. If any arrangement is unreachable, the route is incomplete.",
        recheck: "The key table.",
      },
      {
        criterion: "A move is reversible with stated wording",
        evidence:
          "Undo specified with a window and a message naming what changed.",
        levels: [
          "Moves persist silently.",
          "Undo mentioned without wording or window.",
          "Undo specified with a window and the message written.",
          "As adequate, and the message says the new position rather than only offering undo.",
        ],
        remediation:
          "Write the message a person sees immediately after a move, including how to reverse it.",
        recheck: "The undo specification.",
      },
      {
        criterion: "The drag-versus-scroll decision is explicit",
        evidence:
          "A written rule for how touch distinguishes dragging from scrolling, checked against other scrolling areas.",
        levels: [
          "Not decided.",
          "Decided but untested against normal scrolling.",
          "A rule stated and checked so scrolling still works elsewhere.",
          "As adequate, and the rule was tried on a real phone rather than reasoned about.",
        ],
        remediation:
          "Choose a handle, a long press or a mode, then try scrolling the same list on a phone to confirm it still works.",
        recheck: "The touch rule and the check.",
      },
    ],
    repairs: [
      "If only the held state is designed, add a draggable affordance and a drop indicator.",
      "If the keyboard route cannot reach every position, extend it.",
      "If moves persist silently, specify undo with a window and message.",
      "If touch has no rule, choose a handle or a mode and test scrolling.",
    ],
    portfolio:
      "Showing the keyboard equivalent beside the drag interaction demonstrates that you design for the whole audience rather than the demo.",
    resource: keyboardPatterns,
    resources: [
      {
        ...keyboardPatterns,
        section:
          "A comparable pattern, read for how selection, movement and cancellation are expressed as keys.",
        purpose:
          "Supplies conventions for the keyboard equivalent so it matches what people expect.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06; no date on the pages. It offers no drag-and-drop pattern of its own, so the keyboard route here is adapted rather than quoted.",
        fallbackId: "R14",
      },
      {
        ...errors,
        section: "Slips, undo and recovery.",
        purpose:
          "Frames an accidental move as a slip needing recovery rather than a confirmation.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options; the touch drag rules are this lesson's own.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l09-v1",
    module: "m09",
    week: 9,
    day: 9,
    level: 3,
    areas: [9],
    guided: true,
    title: "Scrolling, sticky elements and long lists",
    objective:
      "Decide what stays fixed while a person scrolls, how a long list ends, and how someone returns to their place after leaving and coming back.",
    bringForward:
      "Your m07 browse loop and the m08 list and navigation components.",
    prerequisite: "Your browse loop and list components.",
    why: "Scrolling is the most-used interaction in your product and usually the least designed.",
    teach: [
      "Anything sticky costs screen height permanently; a phone has very little to spend.",
      "Keep sticky only what people need while scrolling: usually position and the primary action.",
      "A long list needs an end, a count, or a clear way to load more with the position kept.",
      "Restore scroll position when someone returns; losing it makes comparison expensive.",
      "Never move content under a finger that is about to tap.",
    ],
    explanation: [
      "Sticky elements are a permanent tax on the visible area. On a 640-pixel-tall phone viewport, a sticky header and a sticky action bar can take a quarter of the screen before any content appears, which means every scroll shows less and the person scrolls more. The test is whether the element is needed while scrolling — a filter summary or a running total usually is; a logo never is.",
      "Endless lists trade a clear ending for continuous browsing, and the cost falls on people who want to know how much there is, want to reach the footer, or want to come back to where they were. If you use infinite loading, provide a count, keep the position when the person returns, and make sure the footer is still reachable. A “load more” control is often the better trade for a product where people are comparing.",
      "Restoring position is the same requirement the browse loop had in m07, met here in the scroll layer: coming back from a detail view should return the person to the row they left, not the top. Products lose comparison behaviour here quietly, because nobody complains — they just stop comparing and take the first acceptable option.",
      "Content that arrives while a person is reaching for something moves the target under their finger. This is the layout-jump problem from m08 seen from the interaction side, and the answer is the same: reserve space for content that is coming, and insert new content above the viewport only when the person asked for it.",
    ],
    misconception:
      "“Sticky headers keep navigation available.” They keep it visible, at the cost of content, on the device with the least of it. Available means reachable; a header that returns when the person scrolls up is usually the better trade.",
    example:
      "The class list had a sticky header with a logo, a sticky filter bar and a sticky book button — 190 pixels of a 640-pixel viewport. Rebuilt: the logo header scrolls away and returns on scroll up, the filter summary stays because people were observed checking it, and the book button appears only on the detail view where it belongs. The list loads twenty at a time with a count — “Showing 20 of 63” — and a load-more control, so the footer stays reachable. Returning from a detail view restores the row and the filters. New results are appended below the fold only.",
    freeToolPath:
      "Paper at phone size, with a window cut out to represent the viewport, shows exactly how much a sticky element costs. A local HTML page shows real scroll and restore behaviour.",
    outputs: [
      "A decision for each sticky element with its height cost",
      "A list ending: a count, a load-more control, or a stated end",
      "Scroll position restoration specified for the browse loop",
      "A rule preventing content moving under a finger",
    ],
    steps: [
      {
        minutes: 20,
        title: "Measure the tax",
        instructions: [
          "List every element you intend to keep fixed while scrolling.",
          "Measure each one's height at phone size and total them.",
          "Express the total as a share of the viewport.",
        ],
      },
      {
        minutes: 30,
        title: "Justify or drop each",
        instructions: [
          "For each sticky element, write what the person needs it for while scrolling.",
          "Drop anything that fails, or make it return on scroll up instead.",
          "Re-measure the remaining total.",
        ],
      },
      {
        minutes: 25,
        title: "Design the list ending",
        instructions: [
          "Choose paging, load-more or infinite loading and state why.",
          "Show how many items exist in total.",
          "Check the footer remains reachable.",
        ],
      },
      {
        minutes: 30,
        title: "Specify return and insertion",
        instructions: [
          "Specify that returning from a detail view restores position and filters.",
          "State where new content is inserted and that nothing moves under a finger.",
          "Reserve space for content that is loading.",
        ],
      },
      {
        minutes: 15,
        title: "Test on a phone",
        instructions: [
          "Scroll your own design or a comparable page on a real phone.",
          "Record how much content is visible under the sticky elements.",
          "Save the decisions with their measurements.",
        ],
      },
    ],
    check: [
      {
        question: "What does a sticky element actually cost?",
        answer:
          "Screen height on every scroll, permanently. On a phone, two sticky bars can consume a quarter of the viewport, so each one has to be needed while scrolling rather than merely convenient.",
      },
      {
        question: "What does infinite loading take away?",
        answer:
          "A sense of how much there is, a reachable footer and, usually, position on return. Those matter most for people comparing options, which is the common case in a browse list.",
      },
      {
        question: "Why is restoring scroll position a design requirement?",
        answer:
          "Because losing it makes comparison expensive, and people respond by comparing less and settling for the first acceptable option — a behaviour change nobody reports as a bug.",
      },
    ],
    rubric: [
      "Sticky elements are justified and their cost measured",
      "The list has a stated ending and a total",
      "Position and filters are restored on return",
      "Nothing moves under a finger about to tap",
    ],
    criteria: [
      {
        criterion: "Sticky elements are justified and their cost measured",
        evidence:
          "A list of sticky elements with measured heights, a viewport share, and a use-while-scrolling justification each.",
        levels: [
          "Sticky elements chosen without cost or justification.",
          "Justified in general terms with no measurements.",
          "Measured and justified individually.",
          "As adequate, and at least one was dropped or made to return on scroll up.",
        ],
        remediation:
          "Measure the total sticky height at phone size and write it as a percentage of the viewport. Then justify each element or remove it.",
        recheck: "The measurements and justifications.",
      },
      {
        criterion: "The list has a stated ending and a total",
        evidence:
          "A chosen loading approach with a visible total and a reachable footer.",
        levels: [
          "Infinite loading with no count or reachable end.",
          "A count without a way to reach the end.",
          "Loading approach chosen with a total shown and the footer reachable.",
          "As adequate, and the choice is justified by the comparison behaviour observed in m05.",
        ],
        remediation:
          "Add the total to the list header and check you can reach the footer without fighting the loader.",
        recheck: "The list specification.",
      },
      {
        criterion: "Position and filters are restored on return",
        evidence:
          "A specification stating what is restored when a person returns from a detail view.",
        levels: [
          "Return resets to the top.",
          "Filters kept, position lost.",
          "Both restored, with the behaviour stated.",
          "As adequate, and the specification covers returning later or on another device.",
        ],
        remediation:
          "Walk the browse loop and write down everything lost on return. Specify each as preserved.",
        recheck: "The restoration specification.",
      },
      {
        criterion: "Nothing moves under a finger about to tap",
        evidence:
          "A rule about where new content is inserted and reserved space for loading content.",
        levels: [
          "Content inserted anywhere as it arrives.",
          "A rule stated but no space reserved.",
          "Insertion rule and reserved space both specified.",
          "As adequate, and the rule was checked on a throttled connection where insertion is visible.",
        ],
        remediation:
          "Specify that content loads into reserved space and that anything arriving above the viewport requires an explicit request.",
        recheck: "The insertion rule.",
      },
    ],
    repairs: [
      "If sticky elements are unmeasured, measure them and drop the unjustified.",
      "If a list has no ending, add a total and a reachable footer.",
      "If return resets to the top, specify restoration of position and filters.",
      "If content arrives anywhere, reserve space and restrict insertion.",
    ],
    portfolio:
      "The measured sticky tax is a small, specific detail that reads as real product experience rather than portfolio polish.",
    resource: laws,
    resources: [
      {
        ...laws,
        section: "The assigned pages only: fittss-law, law-of-proximity and cognitive-load.",
        purpose:
          "Explains why moving targets and crowded viewports cost accuracy and effort.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site publishes no caveats; the sticky-height measurement in this lesson is the evidence, not the law. A printed poster is sold and also offered free; no purchase is required.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 3, user control and freedom.",
        purpose:
          "Frames position, totals and return behaviour as questions of control rather than convenience.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It gives no guidance on scrolling or sticky layout; those rules are the course's own.",
        fallbackId: "R11",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l10-v1",
    module: "m09",
    week: 9,
    day: 10,
    level: 3,
    areas: [9],
    guided: true,
    title: "Editing in place and saving without a button",
    objective:
      "Design one in-place edit that shows clearly when it is editable, when it is saving and when it has saved, with a defined behaviour for failure and for leaving mid-edit.",
    bringForward:
      "Any editable value in your product: a booking date, a note, a profile field.",
    prerequisite: "One editable value from your product.",
    why: "Automatic saving removes a button and adds a burden: the person can no longer see whether their change is safe.",
    teach: [
      "Show three states plainly: viewing, editing and saved.",
      "If there is no save button, the save state must be visible and specific.",
      "Decide what happens when the person leaves mid-edit, and say so.",
      "A failed automatic save must not fail silently; the person must be told.",
      "Editing in place still needs a cancel that restores the previous value.",
    ],
    explanation: [
      "In-place editing removes a step and removes a signal. With a save button, the person knows their change is committed when they press it; without one, they have to infer it, and inference under uncertainty produces the same behaviour as an unacknowledged payment — repeated attempts, or leaving without trusting the result. The replacement signal has to be explicit: “Saved” with a timestamp, or a clear transient state that resolves visibly.",
      "The three states need distinct appearances. Viewing shows the value; editing shows that this is now a field with a cursor and a way out; saved shows that the change has been kept. Products that make the view and edit states look identical produce people who type into what they think is a label, or who never realise the value can be changed at all.",
      "Leaving mid-edit is common and must be decided rather than inherited. Options are: save automatically on blur, keep the draft and warn, or discard with a confirmation. Each is defensible; silence is not, because a person who navigates away and returns to find their edit gone will not try again.",
      "Silent failure is the worst outcome of automatic saving. If the network drops, the change must be retained locally, the person must be told plainly that it has not been saved, and a retry must exist. This is the same obligation as the payment states in m07: an unknown outcome is a state, not an absence.",
    ],
    misconception:
      "“Autosave is simpler for the user.” It is simpler when it works and worse when it does not, because it removes the moment the person knew they were safe. Simplicity here is paid for with a specific, visible save state.",
    example:
      "The note on a booking saved automatically with no feedback. Redesigned: the value shows an edit affordance on hover and focus; entering edit shows a bordered field with cancel and done controls; on blur the change saves and the label becomes “Saved 12:04” for several seconds before fading to a small “Saved” marker. If the save fails, the field keeps the text, shows “Not saved — check your connection” and offers retry, and the text is retained locally so a reload does not lose it. Cancel restores the previous value, and leaving mid-edit saves rather than discarding — with that decision recorded, because the alternative was defensible too.",
    freeToolPath:
      "Write the three states out on paper with the exact wording, then check the transitions in a local HTML file if you want to feel the timing of the saved indicator.",
    outputs: [
      "Viewing, editing and saved states specified distinctly",
      "A visible save confirmation with its wording and duration",
      "Behaviour for leaving mid-edit, stated and justified",
      "Failure handling that retains the text and offers retry",
    ],
    steps: [
      {
        minutes: 20,
        title: "Choose the value and read",
        instructions: [
          "Choose one editable value in your product.",
          "Read the assigned status heuristic and error guidance.",
        ],
      },
      {
        minutes: 30,
        title: "Design the three states",
        instructions: [
          "Specify how viewing shows that the value is editable.",
          "Specify the editing state with a cancel and a done route.",
          "Specify the saved state with its wording and how long it shows.",
        ],
      },
      {
        minutes: 25,
        title: "Decide the leaving case",
        instructions: [
          "Choose save on blur, keep a draft, or discard with confirmation.",
          "Write the reason for your choice.",
          "Specify what the person sees when they return.",
        ],
      },
      {
        minutes: 30,
        title: "Design failure",
        instructions: [
          "Specify that text is retained locally when a save fails.",
          "Write the message: what happened and what to do.",
          "Provide retry that does not lose the edit.",
        ],
      },
      {
        minutes: 15,
        title: "Check and record",
        instructions: [
          "Check the three states are distinguishable in greyscale.",
          "Record what you could not verify without a build.",
          "Save the specification with the wording.",
        ],
      },
    ],
    check: [
      {
        question: "What does removing the save button remove?",
        answer:
          "The moment the person knew their change was committed. Something explicit has to replace it, or they are left inferring safety from nothing.",
      },
      {
        question: "Why must leaving mid-edit be decided explicitly?",
        answer:
          "Because all three behaviours are defensible and silence is not. A person who loses an edit without warning stops trusting the field.",
      },
      {
        question: "What should a failed automatic save do?",
        answer:
          "Keep the text, say plainly that it is not saved, and offer a retry. Failing silently is the one option that guarantees lost work.",
      },
    ],
    rubric: [
      "Viewing, editing and saved are visually distinct",
      "The save confirmation is specific and timed",
      "Leaving mid-edit has a stated, justified behaviour",
      "Failure retains the text and offers a retry",
    ],
    criteria: [
      {
        criterion: "Viewing, editing and saved are visually distinct",
        evidence:
          "Three specified states, distinguishable in greyscale, with an edit affordance in the viewing state.",
        levels: [
          "View and edit look identical.",
          "Distinct but relying on colour alone.",
          "Three distinct states, distinguishable without colour.",
          "As adequate, and the viewing state shows the value is editable before the person hovers.",
        ],
        remediation:
          "Draw the three states side by side in greyscale. If you cannot tell them apart, add a border, a background or an icon.",
        recheck: "The three states.",
      },
      {
        criterion: "The save confirmation is specific and timed",
        evidence:
          "Wording for the saved state and how long it remains before settling.",
        levels: [
          "No confirmation.",
          "A generic tick with no wording or duration.",
          "Specific wording with a stated duration and resting state.",
          "As adequate, and the confirmation says when it saved rather than only that it did.",
        ],
        remediation:
          "Write the exact words the person sees after a save and how long they stay.",
        recheck: "The confirmation specification.",
      },
      {
        criterion: "Leaving mid-edit has a stated, justified behaviour",
        evidence:
          "A chosen behaviour with a reason and what the person sees on return.",
        levels: [
          "Undecided.",
          "Decided without a reason or a return state.",
          "Chosen, justified, with the return state specified.",
          "As adequate, and the alternative you rejected is recorded with its trade-off.",
        ],
        remediation:
          "Write what happens if the person navigates away with unsaved text, and what they find when they come back.",
        recheck: "The leaving behaviour.",
      },
      {
        criterion: "Failure retains the text and offers a retry",
        evidence:
          "A failure state keeping the text locally, with plain wording and a retry that preserves the edit.",
        levels: [
          "Failures lose the text or are silent.",
          "The message exists but the text is lost on reload.",
          "Text retained, message plain, retry preserves the edit.",
          "As adequate, and the specification says what happens if the person closes the page before a retry succeeds.",
        ],
        remediation:
          "Specify local retention explicitly and write the message that appears when the save has not happened.",
        recheck: "The failure specification.",
      },
    ],
    repairs: [
      "If view and edit look the same, add a visible edit affordance.",
      "If saving is silent, write the confirmation wording and its duration.",
      "If leaving is undecided, choose a behaviour and record the reason.",
      "If failures are silent, retain the text and add a plain message with retry.",
    ],
    portfolio:
      "A small interaction specified completely — three states, a failure and a leaving case — demonstrates thoroughness better than a large one specified partially.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 3, user control and freedom.",
        purpose:
          "States the obligation that replaces the save button: tell the person where their change stands.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not discuss automatic saving; the state model here is the course's own.",
        fallbackId: "R11",
      },
      {
        ...errors,
        section: "Feedback, recovery and undo.",
        purpose:
          "Frames a failed save as a recoverable event that must be visible rather than an error to log.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist.",
        fallbackId: "R02",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l11-v1",
    module: "m09",
    week: 9,
    day: 11,
    level: 3,
    areas: [9],
    guided: true,
    title: "An interaction sheet: durations, easings and rules",
    objective:
      "Produce an interaction sheet naming your durations, easings and interaction rules, and apply it across three components so nothing is decided twice.",
    bringForward:
      "Every specification from this module and your m08 token sheet.",
    prerequisite: "Your m08 token sheet and this module's specifications.",
    why: "Interaction decisions made per component drift. Named values and written rules are how a product feels like one thing.",
    teach: [
      "Name durations by role: instant, quick, moderate — not by number alone.",
      "Two or three easings are enough: entering, exiting and moving.",
      "Write the rules as sentences: what animates, what does not, what must never move.",
      "Include the reduced-motion pairing for every duration and pattern.",
      "The sheet is real only when three components use it without exception.",
    ],
    explanation: [
      "Motion values behave like colour values: unnamed, they multiply. A product ends up with 150, 180, 200 and 220 millisecond transitions that nobody chose and nobody can tell apart, each of which must be maintained. Naming three durations by role, with a number attached, gives you a vocabulary and makes the fourth value an explicit decision rather than an accident.",
      "Easing needs fewer entries than people expect. One curve for things entering, one for things leaving, and one for things moving between positions covers almost everything at this scale. Linear belongs to progress indicators only, where the constant rate carries meaning.",
      "The written rules are the part that survives you. “Anything under 40 pixels of movement uses quick; anything full-screen uses moderate; nothing animates while a person is typing; the price never moves” answers next month's questions without another discussion, and it is the part of a system that a new person can actually follow.",
      "Every entry needs its reduced-motion counterpart recorded beside it, or the alternative gets invented separately per component and drifts. Writing them as pairs is what keeps the reduced experience coherent rather than a set of disconnected exceptions.",
    ],
    misconception:
      "“Motion values belong in the code.” The numbers can live in code; the decisions and their reasons cannot, or the next person changes 200 to 320 because it felt nicer on their machine and nobody can say why it was 200.",
    example:
      "The sheet came to three durations — instant 0ms for state changes, quick 150ms for small movement, moderate 250ms for panels — three easings, and seven rules including “nothing animates while a person is typing”, “the price and remaining places never move”, and “only one thing animates at a time in a view”. Every duration carried its reduced-motion pair, mostly a 120ms fade. Applying the sheet to three components surfaced two exceptions: a 400ms transition nobody could justify, which became moderate, and a genuine missing role for a long list re-sort, which was added deliberately as a fourth duration with the reason recorded.",
    freeToolPath:
      "A written table plus the rules. If you want to compare durations honestly, a local HTML file with three buttons using your three values takes ten minutes and settles arguments quickly.",
    outputs: [
      "Named durations and easings with their numbers",
      "Written interaction rules that would settle a future case",
      "A reduced-motion pairing for every entry",
      "Three components using the sheet, with exceptions resolved",
    ],
    steps: [
      {
        minutes: 25,
        title: "Collect what you used",
        instructions: [
          "List every duration and easing across this module's specifications.",
          "Mark near-duplicates: values within 50ms of each other.",
        ],
      },
      {
        minutes: 30,
        title: "Name and cut",
        instructions: [
          "Group the values into three roles and give each a name and a number.",
          "Choose entering, exiting and moving easings.",
          "Remove every value that does not fit a role.",
        ],
      },
      {
        minutes: 25,
        title: "Write the rules",
        instructions: [
          "Write the rules as sentences a new person could follow.",
          "Include what must never move and what never animates.",
          "Include the one-thing-at-a-time rule if your audit found competition.",
        ],
      },
      {
        minutes: 25,
        title: "Pair with reduced motion",
        instructions: [
          "For every duration and pattern, record its reduced-motion alternative.",
          "Check the pairs preserve the explanation the original carried.",
        ],
      },
      {
        minutes: 15,
        title: "Apply and record exceptions",
        instructions: [
          "Apply the sheet to three components without exception.",
          "Record every value you had to invent and resolve each deliberately.",
          "Save the sheet with the rules and the exception list.",
        ],
      },
    ],
    check: [
      {
        question: "Why name durations by role?",
        answer:
          "So the vocabulary survives a change of value, and so a fourth number becomes a decision someone has to justify rather than a quiet addition.",
      },
      {
        question: "What makes a rule useful?",
        answer:
          "That it would settle the next proposal without another discussion. “Use motion tastefully” settles nothing; “nothing animates while a person is typing” settles a lot.",
      },
      {
        question: "Why pair reduced-motion alternatives in the sheet?",
        answer:
          "Because otherwise each component invents its own, and the reduced experience becomes a collection of unrelated exceptions rather than a coherent one.",
      },
    ],
    rubric: [
      "Durations and easings are named by role with numbers",
      "Rules are written as sentences that settle cases",
      "Every entry has a reduced-motion pair",
      "Three components use the sheet with exceptions resolved",
    ],
    criteria: [
      {
        criterion: "Durations and easings are named by role with numbers",
        evidence:
          "A short table of named durations and easings, with near-duplicates merged.",
        levels: [
          "Raw values scattered through specifications.",
          "Named but with more entries than roles.",
          "Three duration roles and three easings, near-duplicates merged.",
          "As adequate, and any fourth entry is justified by a role the others cannot serve.",
        ],
        remediation:
          "List every value you used, group them into three, and merge anything within 50ms.",
        recheck: "The named table.",
      },
      {
        criterion: "Rules are written as sentences that settle cases",
        evidence:
          "Rules specific enough to decide a future proposal, including what must never move.",
        levels: [
          "No rules, or aspirations rather than rules.",
          "Rules too vague to decide a case.",
          "Rules that would settle a proposal, including never-move elements.",
          "As adequate, and the rules were tested against a case from the lesson 1 audit.",
        ],
        remediation:
          "Take the animation you removed in lesson 1 and check whether your rules would have prevented it. If not, tighten them.",
        recheck: "The rules and the test case.",
      },
      {
        criterion: "Every entry has a reduced-motion pair",
        evidence:
          "A paired column recording the reduced alternative for each duration and pattern.",
        levels: [
          "No pairs.",
          "Pairs for some entries.",
          "Every entry paired, preserving the original explanation.",
          "As adequate, and essential motion has a reduced form rather than being removed.",
        ],
        remediation:
          "Work down the sheet and add the reduced alternative for each row, checking the meaning survives.",
        recheck: "The paired sheet.",
      },
      {
        criterion: "Three components use the sheet with exceptions resolved",
        evidence:
          "Three components respecified from the sheet, with every invented value classified and resolved.",
        levels: [
          "The sheet is not applied.",
          "Applied with untracked exceptions.",
          "Applied to three components with each exception resolved.",
          "As adequate, and at least one exception was resolved by changing the component rather than the sheet.",
        ],
        remediation:
          "Respecify each component using only the sheet and record every reach for something not on it.",
        recheck: "The three components and the exception list.",
      },
    ],
    repairs: [
      "If values are scattered, name three duration roles and merge near-duplicates.",
      "If rules are vague, rewrite each as something that decides a case.",
      "If reduced pairs are missing, add one per entry and check the meaning survives.",
      "If exceptions were absorbed, classify each as a missing role or an accident.",
    ],
    portfolio:
      "The interaction sheet with its rules is a systems artefact and a direct bridge to m13. Show the rules; they are the reusable part.",
    resource: animations,
    resources: [
      {
        ...animations,
        section:
          "Duration and timing-function configuration, read as the vocabulary your sheet names.",
        purpose:
          "Gives precise terms for the values you are naming so the sheet is implementable.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Implementation reference only: it recommends no values and gives no design rules, which are yours to write.",
        fallbackId: "R02",
      },
      {
        ...reducedMotion,
        section:
          "The reduce value and the example that swaps rather than removes an animation.",
        purpose:
          "Ensures the sheet's reduced pairs replace motion rather than deleting meaning.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06; page last modified 10 June 2026. It documents the signal only; the pairing discipline is this lesson's.",
        fallbackId: "R13",
      },
    ],
  }),
  withLegacyText({
    id: "m09-l12-v1",
    module: "m09",
    week: 9,
    day: 12,
    level: 3,
    areas: [9],
    guided: true,
    title: "Test the interactions and repair one",
    objective:
      "Test your interactions with at least three people on a real device, rank what you find by harm, repair the worst with a prediction written first, and record what remains untested.",
    bringForward:
      "Your interaction sheet, key tables, focus rules and specified components.",
    prerequisite: "Your interaction specifications and, if possible, a rough build.",
    why: "Interaction claims are the easiest to believe and the hardest to verify from a specification. Watching three people settles most of them.",
    teach: [
      "Test interactions on the device they will be used on, not on your laptop.",
      "Watch for the second tap: it means feedback arrived too late or not at all.",
      "Test one thing per session; interaction problems hide behind each other.",
      "Predict what a repair should change before you re-test it.",
      "Record every claim you could not test, especially assistive-technology behaviour.",
    ],
    explanation: [
      "Device matters more here than anywhere else in the course. Timing, target size, gesture conflicts and scroll behaviour all change between a laptop with a trackpad and a four-year-old phone held in one hand. Testing your interactions on the machine you designed them on will confirm they work and tell you almost nothing.",
      "The double tap is the single most informative observation in interaction testing. It means the person did not believe their first action registered, which is a feedback failure whatever the underlying system did. Count them, note where they happen and treat each as a defect rather than as user error.",
      "Interaction problems mask each other. If focus is invisible and the tab order is wrong, you cannot tell which caused the confusion, so test one at a time where you can: a session on the keyboard route, a session on touch, a session on the reduced-motion setting. Fewer variables per session produces findings you can act on.",
      "The prediction discipline from m07 applies again: write what the repair should change before you re-test, or any outcome will read as an improvement. And write the untested list plainly — no screen-reader testing with a screen-reader user, no testing on a low-end device you do not own, no long-term use — because these are the claims most likely to be assumed later.",
    ],
    misconception:
      "“It works on my machine, so the interaction is fine.” Your machine has a precise pointer, a fast connection, a large screen and a person who knows where everything is. None of those describe your users.",
    example:
      "Three sessions on the participants' own phones. Two double-tapped the book button, because the acknowledgement appeared only after the server replied on a slow connection — the worst finding by harm, since it produced duplicate requests. One could not find the remove control at all, having never met a swipe pattern. One had reduced motion enabled on her own device, which surfaced that the filter panel simply appeared with no fade, unexplained. The prediction for the repair was written first: with an immediate acknowledgement, nobody should tap twice. Re-tested with two new people on their own phones, neither did. The remaining findings were ranked and left recorded rather than repaired in the same pass.",
    freeToolPath:
      "A rough local HTML page opened on the participants' own phones over a shared connection, or a paper prototype for the parts that are about order rather than timing. No testing platform or device lab is required.",
    outputs: [
      "Session records from three people on their own devices",
      "A count of double taps and where they happened",
      "One repair with its prediction written beforehand and re-tested",
      "A ranked list of remaining problems and an untested list",
    ],
    steps: [
      {
        minutes: 25,
        title: "Plan the sessions",
        instructions: [
          "Read the assigned session guidance and write two tasks.",
          "Decide which single aspect each session focuses on.",
          "Extend your consent introduction to cover using their device.",
        ],
      },
      {
        minutes: 40,
        title: "Run three sessions",
        instructions: [
          "Run the tasks on each participant's own phone where possible.",
          "Record double taps, hesitations and anything they could not find.",
          "Do not explain gestures or controls during the task.",
        ],
      },
      {
        minutes: 20,
        title: "Rank by harm",
        instructions: [
          "List the problems and rank them by what they cost the person.",
          "Put duplicate actions and lost work above confusion and slowness.",
        ],
      },
      {
        minutes: 25,
        title: "Predict and repair",
        instructions: [
          "Write what the repair should change before making it.",
          "Change one thing only.",
          "Re-test with at least one person who has not seen it.",
        ],
      },
      {
        minutes: 10,
        title: "Record what is untested",
        instructions: [
          "List every interaction claim you could not verify.",
          "State plainly that no test with assistive-technology users was run.",
          "Save the records, the ranking and the repair result.",
        ],
      },
    ],
    check: [
      {
        question: "What does a double tap tell you?",
        answer:
          "That the person did not believe their first action registered. It is a feedback defect regardless of what the system was doing, and it produces duplicate requests.",
      },
      {
        question: "Why test one aspect per session?",
        answer:
          "Because interaction problems hide behind each other. With invisible focus and a wrong tab order in the same session, you cannot tell which caused the failure.",
      },
      {
        question: "Why must the untested list be explicit?",
        answer:
          "Because unstated gaps get read as tested. Assistive-technology behaviour and low-end devices are the two most commonly assumed, and both need naming.",
      },
    ],
    rubric: [
      "Sessions were run on participants' own devices",
      "Double taps and lost actions are counted, not interpreted away",
      "The repair carried a prediction and was re-tested",
      "The untested list names assistive technology explicitly",
    ],
    criteria: [
      {
        criterion: "Sessions were run on participants' own devices",
        evidence:
          "Records naming the devices used, or an explicit note where a participant's device was unavailable.",
        levels: [
          "Tested only on the designer's machine.",
          "Mixed, without recording which device each session used.",
          "Participants' own devices used and recorded.",
          "As adequate, and at least one older or slower device is included deliberately.",
        ],
        remediation:
          "Re-run at least one session on a phone you did not design on and record the device.",
        recheck: "The session records with devices.",
      },
      {
        criterion: "Double taps and lost actions are counted, not interpreted away",
        evidence:
          "A count of repeated actions with where each occurred, treated as defects.",
        levels: [
          "Repeated actions attributed to the participant.",
          "Noted without counting or locating.",
          "Counted, located and treated as feedback defects.",
          "As adequate, and each is linked to the specific acknowledgement that was missing.",
        ],
        remediation:
          "Re-read your notes for every moment someone acted twice and record it as a defect with its location.",
        recheck: "The double-tap record.",
      },
      {
        criterion: "The repair carried a prediction and was re-tested",
        evidence:
          "A prediction written before the change, one change made, and a re-test with someone new.",
        levels: [
          "Repairs made without prediction or re-test.",
          "Several changes made together.",
          "One change, predicted first, re-tested with a fresh participant.",
          "As adequate, and a prediction that failed is analysed rather than explained away.",
        ],
        remediation:
          "Write the prediction now for any repair not yet re-tested, then run it with someone new.",
        recheck: "The prediction and re-test result.",
      },
      {
        criterion: "The untested list names assistive technology explicitly",
        evidence:
          "A written list of unverified claims, including screen-reader use and devices you do not own.",
        levels: [
          "No untested list.",
          "A general note about limited testing.",
          "Specific untested claims named, including assistive technology.",
          "As adequate, and the list says which untested claim would most change a decision.",
        ],
        remediation:
          "Go through your key tables and focus rules and mark each row tested or untested. The untested rows are the list.",
        recheck: "The untested list.",
      },
    ],
    repairs: [
      "If testing happened only on your machine, re-run one session on a participant's phone.",
      "If repeated taps were dismissed, count them and treat each as a feedback defect.",
      "If a repair had no prediction, write one and re-test with someone new.",
      "If assistive-technology behaviour is unlisted, add it to the untested list.",
    ],
    portfolio:
      "The module's case-study spine: an interaction specification, a device test, a predicted repair and an honest untested list.",
    resource: usability,
    resources: [
      {
        ...usability,
        section:
          "Planning and running a session, writing tasks and moderating without leading.",
        purpose:
          "Supplies the session discipline for testing interactions rather than opinions.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for sessions with a built prototype and a note-taker; alone, run fewer tasks and claim less.",
        fallbackId: "R12",
      },
      {
        ...throttling,
        section: "Throttling profiles and disabling the cache.",
        purpose:
          "Lets you reproduce the slow-connection conditions where feedback failures actually appear.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser. Verified 2026-09-06. Throttling simulates bandwidth and latency, not a connection that drops entirely.",
        fallbackId: "R16",
      },
    ],
  }),
];
