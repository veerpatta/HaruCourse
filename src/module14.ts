import { withLegacyText, type Lesson } from "./teaching";
// Module 14 is about the part of the job that happens between a design being
// agreed and a person using it. Haru will work with engineers and product
// people who have their own constraints, and the module treats those
// constraints as material rather than obstacles: what a story has to contain
// to be buildable, what an estimate is actually answering, what design QA
// finds, and how to report a defect so it gets fixed.
const stories = {
  title: "Atlassian: user stories",
  id: "R18",
  url: "https://www.atlassian.com/agile/project-management/user-stories",
};
const criteria = {
  title: "Atlassian: acceptance criteria",
  id: "R26",
  url: "https://www.atlassian.com/work-management/project-management/acceptance-criteria",
};
const standard = {
  title: "GOV.UK: Service Standard",
  id: "R19",
  url: "https://www.gov.uk/service-manual/service-standard",
};
const shapeUp = {
  title: "Ryan Singer: Shape Up",
  id: "R47",
  url: "https://basecamp.com/shapeup/webbook",
};
const prototypes = {
  title: "GOV.UK: making prototypes",
  id: "R12",
  url: "https://www.gov.uk/service-manual/design/making-prototypes",
};
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
const measuring = {
  title: "GOV.UK: measuring success",
  id: "R20",
  url: "https://www.gov.uk/service-manual/measuring-success",
};
const semver = {
  title: "Semantic Versioning 2.0.0",
  id: "R67",
  url: "https://semver.org/",
};
export const module14: Lesson[] = [
  withLegacyText({
    id: "m14-l01-v1",
    module: "m14",
    week: 14,
    day: 1,
    level: 4,
    areas: [16],
    guided: true,
    title: "How the work actually reaches people",
    objective:
      "Map the path a design takes from agreed to used in a team you can observe or read about, and name the three points where designs most often change.",
    bringForward: "Your m12 handover and m13 system documentation.",
    prerequisite: "Your handover document and system pages.",
    why: "Designers who do not understand delivery hand over work that gets changed without them and then feel surprised.",
    teach: [
      "Work is sliced, estimated, built, reviewed, tested and released.",
      "Designs change at the slice, at the estimate and during build.",
      "Every team's process differs; the stages recur under different names.",
      "Being present at the slicing is worth more than any specification.",
      "The standard names the outcomes a good process protects.",
    ],
    explanation: [
      "The stages are recognisable across teams even when the vocabulary differs: someone decides what to do next, someone estimates it, someone builds it, someone reviews and tests it, and it reaches people. Learning to recognise those stages in whatever process you meet is more useful than learning one methodology's terminology.",
      "Designs change at three predictable points. At slicing, because the whole thing does not fit and someone chooses a part. At estimation, because a detail turns out to be expensive. And during build, because reality asserts itself. A designer who is present at the first two changes the outcome; one who is absent finds out at review.",
      "The assigned service standard is not a process description but a list of outcomes a process should protect: understanding users, solving whole problems, iterating, making things accessible, and measuring. Reading it as a checklist for your own delivery is a way of noticing which outcome your team is currently sacrificing.",
      "None of this makes design decisions someone else's job. It makes the timing of your involvement a decision: specifications answer questions asked at build time, and presence answers questions asked at slicing time, which are usually the bigger ones.",
    ],
    misconception:
      "“I hand over the design and the team builds it.” Every team modifies designs during delivery, because building reveals what drawing did not. The choice is whether those modifications happen with you or without you.",
    example:
      "The path was mapped from a real team: a fortnightly planning session picks work; an engineer estimates and often splits it; a build takes days to a week; a review compares the build with the design; a test pass finds defects; and a release goes out weekly behind a flag. The three change points were named with examples: at slicing the booking flow was split so that the cancellation path shipped a fortnight later; at estimation the held-place timer turned out to need server work and was simplified; during build the empty state was invented by the engineer because the design had not included one — which the m08 lessons would have prevented.",
    freeToolPath:
      "Reading and observation. If you cannot observe a team, the assigned standard and a public project's issue tracker give enough structure to map the stages.",
    outputs: [
      "A mapped path from agreed design to person using it",
      "Three named points where designs change, with examples",
      "A note of where you would need to be present",
      "Two outcomes from the standard your process would currently fail",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read the standard",
        instructions: [
          "Read the assigned standard's points about iteration, accessibility and measurement.",
          "Write which outcomes a delivery process is supposed to protect.",
        ],
      },
      {
        minutes: 30,
        title: "Map a real path",
        instructions: [
          "Map the stages from decision to release in a team you can observe or read about.",
          "Name who decides at each stage.",
        ],
      },
      {
        minutes: 25,
        title: "Find the change points",
        instructions: [
          "Identify where designs get modified.",
          "Give a real or plausible example for each.",
        ],
      },
      {
        minutes: 25,
        title: "Decide where to be",
        instructions: [
          "Mark the stages where your presence changes the outcome.",
          "Mark the stages where a specification is enough.",
        ],
      },
      {
        minutes: 15,
        title: "Check against the standard",
        instructions: [
          "Name two outcomes your mapped process would currently fail.",
          "Save the map and the notes.",
        ],
      },
    ],
    check: [
      {
        question: "Where do designs change most?",
        answer:
          "At slicing, at estimation and during build. The first two are decisions about scope; the third is reality. A designer present at the first two changes the outcome.",
      },
      {
        question: "What is the service standard useful for here?",
        answer:
          "It names the outcomes a delivery process should protect — user understanding, whole problems, iteration, accessibility, measurement — so you can see which one is being sacrificed.",
      },
      {
        question: "Is a good specification enough?",
        answer:
          "It answers questions asked at build time. Questions asked at slicing time — what ships first, what is cut — need you in the room.",
      },
    ],
    rubric: [
      "The path is mapped with decision-makers named",
      "Three change points are identified with examples",
      "Presence versus specification is decided per stage",
      "Two failing standard outcomes are named",
    ],
    criteria: [
      {
        criterion: "The path is mapped with decision-makers named",
        evidence:
          "A stage-by-stage map from decision to release with who decides at each.",
        levels: [
          "A generic process diagram.",
          "Stages named without decision-makers.",
          "Both, based on a real or documented team.",
          "As adequate, and the map notes where the stages overlap or repeat.",
        ],
        remediation:
          "Write the stages you can actually observe or read about, and name who decides at each.",
        recheck: "The mapped path.",
      },
      {
        criterion: "Three change points are identified with examples",
        evidence:
          "Slicing, estimation and build named with a concrete example each.",
        levels: [
          "Change points not identified.",
          "Named without examples.",
          "All three with examples.",
          "As adequate, and one example is from your own work.",
        ],
        remediation:
          "For each stage ask what could force the design to change there, and give an instance.",
        recheck: "The change points.",
      },
      {
        criterion: "Presence versus specification is decided per stage",
        evidence:
          "A per-stage decision about whether documentation suffices.",
        levels: [
          "Not considered.",
          "A general preference for being involved.",
          "Each stage marked with a reason.",
          "As adequate, and the marking accounts for your own available time.",
        ],
        remediation:
          "For each stage ask what a specification could answer and what only a conversation could.",
        recheck: "The per-stage decisions.",
      },
      {
        criterion: "Two failing standard outcomes are named",
        evidence:
          "Two outcomes the mapped process would currently fail, with why.",
        levels: [
          "Not checked.",
          "Outcomes named without reasoning.",
          "Two named with the reason each would fail.",
          "As adequate, and one is something you could influence yourself.",
        ],
        remediation:
          "Read the standard's points against your map and find the two weakest.",
        recheck: "The failing outcomes.",
      },
    ],
    repairs: [
      "If the map is generic, base it on a team you can actually observe.",
      "If change points lack examples, add a concrete instance for each.",
      "If presence is a general preference, decide it stage by stage.",
      "If the standard was not applied, name two outcomes your process fails.",
    ],
    portfolio:
      "A delivery map with change points is a useful interview artefact: it shows you understand where design decisions are actually made.",
    resource: standard,
    resources: [
      {
        ...standard,
        section:
          "The points on solving a whole problem for users, iterating and improving frequently, making sure everyone can use the service, and defining what success looks like.",
        purpose:
          "Names the outcomes a delivery process is supposed to protect.",
        minutes: "60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for UK government services with statutory obligations; the outcomes transfer, the compliance context does not.",
        fallbackId: "R07",
      },
      {
        ...stories,
        section: "How work is described so it can be planned and built.",
        purpose:
          "Introduces the unit of delivery work the rest of this module uses.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Vendor-published but tool-neutral in content; no Jira subscription is required or implied.",
        fallbackId: "R26",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l02-v1",
    module: "m14",
    week: 14,
    day: 2,
    level: 4,
    areas: [16],
    guided: true,
    title: "Writing work that can be built",
    objective:
      "Write five stories for your product that each state who, what and why, are independently valuable, and are small enough to build in a few days.",
    bringForward: "Your m10 findings and m12 handover.",
    prerequisite: "Your findings and a feature you want built.",
    why: "A story is where research becomes work. Written badly it delivers a screen; written well it delivers an outcome.",
    teach: [
      "A story names the person, what they can do, and why it matters to them.",
      "Independently valuable means shipping it alone would help someone.",
      "Small enough to build in days keeps feedback frequent.",
      "The why is what lets an engineer propose a better how.",
      "A story is a placeholder for a conversation, not a specification.",
    ],
    explanation: [
      "The three-part form exists to keep the outcome attached to the work. “Add a status line to the review screen” describes a change; “as someone booking for two people, I can see that my place is held so that I do not pay twice” describes a result, and the second lets an engineer suggest a cheaper way to achieve it.",
      "Independent value is the harder discipline. Work sliced by layer — the interface this week, the logic next — delivers nothing for weeks and hides risk. Work sliced by outcome delivers something usable each time, which is what makes feedback possible and cancellation cheap.",
      "Size matters because feedback frequency matters. A story that takes a month accumulates decisions nobody revisits; a story that takes three days gets seen, used and corrected. If a story is too big, the honest move is to find the smaller outcome inside it rather than to split it by component.",
      "The assigned reading is explicit that a story is a placeholder for a conversation. That is why your specification work still matters: the story carries the outcome and the conversation carries the detail, with your states, wording and behaviour as its material.",
    ],
    misconception:
      "“Stories are a formality that translate designs into tickets.” Written as translations they lose the reason, and the first time an engineer meets a constraint they will guess at the intent. The why is the part that survives contact with reality.",
    example:
      "Five stories from the booking work. “As someone who has booked, I can see that my place is held and for how long, so that I do not pay twice.” “As someone whose payment did not confirm, I can find out what happened without ringing, so that I do not book again.” Three were sized in days; two were too big and were re-sliced by outcome rather than by layer — the second became “I can see the status of a booking from the confirmation message” and “I can see the status without the message”, each independently useful.",
    freeToolPath:
      "Written work in any text file. Trackers are common in teams and are not required for the exercise.",
    outputs: [
      "Five stories in who, what, why form",
      "An independence check per story",
      "A size estimate in days with anything larger re-sliced",
      "One story re-sliced by outcome rather than by layer",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and draft",
        instructions: [
          "Read the assigned story guidance.",
          "Draft five stories from your findings and design work.",
        ],
      },
      {
        minutes: 25,
        title: "Restore the why",
        instructions: [
          "Check each story states why it matters to the person.",
          "Rewrite any that describes a change rather than an outcome.",
        ],
      },
      {
        minutes: 30,
        title: "Test independence",
        instructions: [
          "For each story ask whether shipping it alone would help someone.",
          "Merge or re-slice the ones that fail.",
        ],
      },
      {
        minutes: 25,
        title: "Size and re-slice",
        instructions: [
          "Estimate each in days.",
          "Re-slice anything over about a week by outcome, not by layer.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Note which stories came directly from research findings.",
          "Save the five stories with their checks.",
        ],
      },
    ],
    check: [
      {
        question: "Why does the why matter to an engineer?",
        answer:
          "Because it lets them propose a cheaper way to reach the same outcome. Without it they build the described change and cannot know what would have been acceptable instead.",
      },
      {
        question: "What is wrong with slicing by layer?",
        answer:
          "It delivers nothing usable for weeks, hides risk until integration, and makes feedback impossible until everything is done.",
      },
      {
        question: "Is a story a specification?",
        answer:
          "No, it is a placeholder for a conversation. Your states, wording and behaviour specifications are the material of that conversation.",
      },
    ],
    rubric: [
      "Each story names person, capability and reason",
      "Each is independently valuable",
      "Sizes are estimated and large ones re-sliced",
      "At least one re-slice is by outcome, not layer",
    ],
    criteria: [
      {
        criterion: "Each story names person, capability and reason",
        evidence: "Five stories in the three-part form with real outcomes.",
        levels: [
          "Stories describe changes to screens.",
          "Form used but the reason is a restatement of the capability.",
          "All five name a person, a capability and a genuine reason.",
          "As adequate, and the reasons trace to research findings.",
        ],
        remediation:
          "For each story complete “so that …” with something the person cares about, not a restatement.",
        recheck: "The rewritten stories.",
      },
      {
        criterion: "Each is independently valuable",
        evidence:
          "An independence check per story with merges or re-slices where it failed.",
        levels: [
          "Stories depend on each other to be useful.",
          "Independence asserted without checking.",
          "Each checked, with failures resolved.",
          "As adequate, and the order of value is stated.",
        ],
        remediation:
          "For each story ask what shipping only that would give someone. If nothing, re-slice.",
        recheck: "The independence checks.",
      },
      {
        criterion: "Sizes are estimated and large ones re-sliced",
        evidence:
          "Day estimates with anything over about a week split.",
        levels: [
          "No sizing.",
          "Sizes given without action on large stories.",
          "Sizes with large ones re-sliced.",
          "As adequate, and the sizing acknowledges what you cannot know without an engineer.",
        ],
        remediation:
          "Estimate in days, then split anything larger by finding the smaller outcome inside it.",
        recheck: "The sized list.",
      },
      {
        criterion: "At least one re-slice is by outcome, not layer",
        evidence:
          "A split producing two independently useful stories rather than layers.",
        levels: [
          "Splits are by component or layer.",
          "One outcome-based split attempted but the halves are not independently useful.",
          "A genuine outcome split with both halves useful.",
          "As adequate, and the write-up shows the layer-based split you rejected.",
        ],
        remediation:
          "Take your largest story and find the smallest version that would still help someone.",
        recheck: "The re-slice.",
      },
    ],
    repairs: [
      "If stories describe screen changes, rewrite them as outcomes.",
      "If a story is not independently useful, merge or re-slice it.",
      "If nothing is sized, estimate in days and split the large ones.",
      "If splits are by layer, find the smaller outcome instead.",
    ],
    portfolio:
      "Five well-formed stories traced to research findings show that you can carry evidence into delivery, which is where most research is lost.",
    resource: stories,
    resources: [
      {
        ...stories,
        section:
          "The story structure, examples, and the point that a story is a placeholder for a conversation.",
        purpose: "Supplies the form and the discipline this lesson applies.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Vendor-published; the content is tool-neutral and no subscription is required.",
        fallbackId: "R26",
      },
      {
        ...shapeUp,
        section:
          "Setting the appetite and fixed time with variable scope.",
        purpose:
          "Frames sizing as a decision about how much time is worth spending rather than a prediction.",
        minutes: "60–90 selected",
        limits:
          "Free to read online; a print edition is sold and is not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build, not market positioning.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l03-v1",
    module: "m14",
    week: 14,
    day: 3,
    level: 4,
    areas: [16],
    guided: true,
    title: "Acceptance criteria that can be checked",
    objective:
      "Write acceptance criteria for three stories, covering success, failure and accessibility, that another person could verify without asking you what you meant.",
    bringForward: "Your five stories and your m11 accessibility work.",
    prerequisite: "Your stories and accessibility requirements.",
    why: "Criteria are the difference between “it is done” and “we agree it is done”. They are also where accessibility either enters delivery or does not.",
    teach: [
      "A criterion is observable: someone can check it and agree.",
      "Cover the failure paths, not only the success path.",
      "Put accessibility requirements in the criteria, or they are optional.",
      "Avoid criteria that describe implementation; describe the outcome.",
      "If two people could disagree about whether it passed, rewrite it.",
    ],
    explanation: [
      "Observable is the whole test. “The status is clear” cannot be checked; “the review screen states that the place is held and shows the remaining time” can. The assigned reading frames criteria as conditions of satisfaction, and the practical version is that a person with no context can read the criterion, look at the build and say yes or no.",
      "Failure paths belong in the criteria because they are what gets dropped under time pressure. If the error state, the empty state and the expiry behaviour are not written as conditions, they are optional, and the first version to ship will not have them.",
      "Accessibility is the same argument with higher stakes. Criteria naming keyboard operation, focus visibility, announced errors and contrast are what make those things part of done rather than a later ticket that is never scheduled. Your m11 work becomes deliverable here or it does not become deliverable at all.",
      "Criteria should describe outcomes, not implementations. “Uses a dialog element” constrains the engineer without saying why; “can be dismissed with the keyboard and returns focus to the control that opened it” states what must be true and leaves the how open, which is both more respectful and more durable.",
    ],
    misconception:
      "“Acceptance criteria are a testing artefact.” They are a design artefact that testing uses. They record what the design actually requires, which is why writing them is your work and not the tester's.",
    example:
      "The held-place story got seven criteria. Success: the review screen states the place is held and the remaining time; the time counts down; when it expires the person is told and their details are preserved. Failure: if the hold cannot be confirmed the screen says so and does not proceed to payment. Accessibility: the timer is announced when it appears and at expiry rather than every second; the state is distinguishable without colour; the screen is operable from a keyboard. Two criteria were rewritten after someone read them and asked what “clearly” meant.",
    freeToolPath:
      "Written criteria beside each story. No tooling required.",
    outputs: [
      "Criteria for three stories covering success and failure",
      "Accessibility criteria drawn from your m11 work",
      "Outcome-shaped criteria with no implementation constraints",
      "A read-through by someone else with ambiguities rewritten",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read and draft",
        instructions: [
          "Read the assigned guidance on acceptance criteria.",
          "Draft criteria for three stories, success paths first.",
        ],
      },
      {
        minutes: 25,
        title: "Add the failure paths",
        instructions: [
          "For each story, write criteria for the error, empty and expiry cases.",
          "Use the wording from your m07 exception table.",
        ],
      },
      {
        minutes: 25,
        title: "Add accessibility",
        instructions: [
          "Write criteria for keyboard operation, focus, announcement and contrast.",
          "Take them from your m11 checks rather than inventing them.",
        ],
      },
      {
        minutes: 25,
        title: "Remove implementation",
        instructions: [
          "Rewrite any criterion that names a technique rather than an outcome.",
          "Keep constraints only where they are genuinely required.",
        ],
      },
      {
        minutes: 20,
        title: "Test for ambiguity",
        instructions: [
          "Ask someone to read the criteria and say how they would check each.",
          "Rewrite anything two people could disagree about.",
          "Save the criteria with the stories.",
        ],
      },
    ],
    check: [
      {
        question: "What makes a criterion observable?",
        answer:
          "Someone with no context can read it, look at the build and answer yes or no. Anything requiring your interpretation is not yet a criterion.",
      },
      {
        question: "Why put accessibility in the criteria?",
        answer:
          "Because otherwise it is optional. Criteria are what define done, and anything outside them becomes a ticket that is never scheduled.",
      },
      {
        question: "Why avoid naming implementations?",
        answer:
          "Because it constrains the engineer without stating why. Describe what must be true and leave the how open unless the how is genuinely the requirement.",
      },
    ],
    rubric: [
      "Criteria are observable by someone without context",
      "Failure paths are covered as well as success",
      "Accessibility criteria come from the m11 work",
      "Criteria describe outcomes rather than implementations",
    ],
    criteria: [
      {
        criterion: "Criteria are observable by someone without context",
        evidence:
          "Criteria a reader could verify, confirmed by a read-through with someone else.",
        levels: [
          "Criteria use words like clear, easy or intuitive.",
          "Mostly observable with one or two subjective items.",
          "All observable and confirmed by a reader.",
          "As adequate, and the reader's questions are recorded and resolved.",
        ],
        remediation:
          "Rewrite any criterion containing a judgement word as something a person can look at and confirm.",
        recheck: "The rewritten criteria.",
      },
      {
        criterion: "Failure paths are covered as well as success",
        evidence:
          "Criteria for error, empty and expiry cases per story where they apply.",
        levels: [
          "Success only.",
          "One failure case covered.",
          "All applicable failure paths covered.",
          "As adequate, and the wording matches the m07 exception table exactly.",
        ],
        remediation:
          "Take your exception table and write a criterion for each case that applies to these stories.",
        recheck: "The failure criteria.",
      },
      {
        criterion: "Accessibility criteria come from the m11 work",
        evidence:
          "Criteria naming keyboard, focus, announcement and contrast requirements.",
        levels: [
          "Absent.",
          "A general accessibility criterion with no specifics.",
          "Specific criteria drawn from your own checks.",
          "As adequate, and the criteria name how each would be verified.",
        ],
        remediation:
          "Copy the relevant checks from m11 into criteria form for each story.",
        recheck: "The accessibility criteria.",
      },
      {
        criterion:
          "Criteria describe outcomes rather than implementations",
        evidence:
          "No criterion names a technique unless the technique is the requirement.",
        levels: [
          "Implementation prescribed throughout.",
          "Some prescription remaining.",
          "Outcomes throughout, with justified exceptions.",
          "As adequate, and one prescription was removed after asking why it mattered.",
        ],
        remediation:
          "For each criterion naming a technique, ask what outcome it protects and write that instead.",
        recheck: "The revised criteria.",
      },
    ],
    repairs: [
      "If criteria use judgement words, rewrite them as observable conditions.",
      "If only success is covered, add the failure paths from your exception table.",
      "If accessibility is missing, add criteria from your m11 checks.",
      "If techniques are prescribed, state the outcome they protect instead.",
    ],
    portfolio:
      "Acceptance criteria including accessibility are direct evidence that your standards reach delivery rather than stopping at the design file.",
    resource: criteria,
    resources: [
      {
        ...criteria,
        section: "What acceptance criteria are, with examples of good and poor ones.",
        purpose: "Supplies the form and the observability test this lesson uses.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Vendor-published and tool-neutral; no subscription is required. It does not cover accessibility criteria, which come from your own m11 work.",
        fallbackId: "R18",
      },
      {
        ...easyChecks,
        section: "The checks relevant to your stories.",
        purpose:
          "Gives verifiable accessibility conditions to turn into criteria.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary checks; passing them is not conformance, and criteria should say what will be checked and how.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l04-v1",
    module: "m14",
    week: 14,
    day: 4,
    level: 4,
    areas: [16],
    guided: true,
    title: "Appetite, and deciding what not to build",
    objective:
      "Set an appetite for one feature, cut the scope to fit it, and write what you removed and what would justify bringing each part back.",
    bringForward: "Your stories and criteria.",
    prerequisite: "Your stories, criteria and the feature they describe.",
    why: "Estimating how long something will take is guessing. Deciding how much time it is worth is a decision you can actually make.",
    teach: [
      "Appetite is how much time this is worth, decided before scoping.",
      "Fixed time with variable scope: the date holds and the scope moves.",
      "Cutting is design work, not failure; decide what survives.",
      "Record what you cut and what would bring it back.",
      "Some things are not worth building at all; say so.",
    ],
    explanation: [
      "The assigned book's central move is to set the appetite first: this is worth two weeks, not six, and then shape something that fits. That inverts the usual order, where a design is produced and then estimated, and the estimate is negotiated by removing quality rather than scope.",
      "Fixed time with variable scope is the practical consequence. When the date is fixed and the scope moves, the team makes design decisions under a constraint you set deliberately. When the scope is fixed and the date moves, the constraint arrives later as pressure, and the things that get dropped are the ones nobody wrote down: the error states, the accessibility work, the empty screens.",
      "Cutting well is design work. It means finding the version that still delivers the outcome — the reason in your story — with less. That is why the story's why matters here: a feature described as a screen cannot be cut, while a feature described as an outcome usually has a smaller version.",
      "Recording what you cut turns a loss into a decision. Each cut item should carry what would justify bringing it back: evidence, a specific number of complaints, a second use case. Without that, cuts return through advocacy rather than evidence, which is how scope grows again.",
    ],
    misconception:
      "“We will build it properly and see how long it takes.” That defers the constraint rather than removing it, and the constraint arrives as a rushed final week in which quality is cut silently. Deciding the appetite first makes the trade visible while you can still design for it.",
    example:
      "The appetite for the booking improvements was set at two weeks. The full design was six. Cutting to fit kept the held-place message, the payment states and the accessible form, and removed the shortlist, the filter presets and the redesigned card. Each removal recorded what would bring it back: the shortlist if a second study showed people comparing more than three options, the presets if support saw repeated requests, and the card if the system needed it elsewhere. One item was marked not worth building at all — an animated confirmation — with the reason.",
    freeToolPath:
      "Written work. The discipline is deciding and recording, not tooling.",
    outputs: [
      "A stated appetite for one feature",
      "A scope that fits it, with what survives",
      "A cut list with what would bring each item back",
      "At least one item marked not worth building",
    ],
    steps: [
      {
        minutes: 30,
        title: "Read and set the appetite",
        instructions: [
          "Read the assigned chapters on appetite and fixed time with variable scope.",
          "Decide how much time this feature is worth, before scoping it.",
          "Write why that amount and not more.",
        ],
      },
      {
        minutes: 30,
        title: "Cut to fit",
        instructions: [
          "List everything in the current design.",
          "Keep only what delivers the outcome in your story's why.",
          "Stop when the remainder fits the appetite.",
        ],
      },
      {
        minutes: 25,
        title: "Record the cuts",
        instructions: [
          "For each removed item write what would justify bringing it back.",
          "Make the justification evidence, not enthusiasm.",
        ],
      },
      {
        minutes: 20,
        title: "Name what should never be built",
        instructions: [
          "Identify at least one item not worth building at all.",
          "Write the reason so it does not return.",
        ],
      },
      {
        minutes: 15,
        title: "Check the remainder",
        instructions: [
          "Confirm what survives still delivers the outcome.",
          "Save the appetite, the scope and the cut list.",
        ],
      },
    ],
    check: [
      {
        question: "What does setting an appetite change?",
        answer:
          "It makes the constraint a decision you design within rather than a pressure that arrives later and removes quality silently.",
      },
      {
        question: "Why does the story's why make cutting possible?",
        answer:
          "Because an outcome usually has a smaller version, while a feature described as a screen can only be built or not built.",
      },
      {
        question: "Why record what would bring a cut item back?",
        answer:
          "Because otherwise it returns through advocacy rather than evidence, and the scope grows again for reasons nobody can examine.",
      },
    ],
    rubric: [
      "An appetite is set before scoping, with a reason",
      "The scope fits and still delivers the outcome",
      "Cuts are recorded with evidence-based return conditions",
      "At least one item is refused outright",
    ],
    criteria: [
      {
        criterion: "An appetite is set before scoping, with a reason",
        evidence:
          "A stated time budget with the reasoning for that amount.",
        levels: [
          "Scope decided first and estimated afterwards.",
          "An appetite stated without reasoning.",
          "Appetite set first with a reason.",
          "As adequate, and the reason references the value of the outcome rather than availability.",
        ],
        remediation:
          "Write how much time this outcome is worth before looking at the design again.",
        recheck: "The appetite statement.",
      },
      {
        criterion: "The scope fits and still delivers the outcome",
        evidence:
          "A reduced scope with a check that the story's why is still met.",
        levels: [
          "Scope unchanged.",
          "Reduced by removing quality — states, accessibility — rather than features.",
          "Reduced by feature while the outcome survives.",
          "As adequate, and the reduction is checked against the acceptance criteria.",
        ],
        remediation:
          "Restore any quality you cut and remove a feature instead; quality cuts are the ones that come back as defects.",
        recheck: "The reduced scope.",
      },
      {
        criterion:
          "Cuts are recorded with evidence-based return conditions",
        evidence:
          "Each removed item with what evidence would justify building it.",
        levels: [
          "Cuts unrecorded.",
          "Recorded without return conditions.",
          "Each with an evidence-based condition.",
          "As adequate, and one condition names the study or signal that would produce it.",
        ],
        remediation:
          "For each cut write what you would have to see before building it.",
        recheck: "The cut list.",
      },
      {
        criterion: "At least one item is refused outright",
        evidence:
          "One item marked as not worth building, with the reason.",
        levels: [
          "Everything deferred rather than refused.",
          "A refusal without reasoning.",
          "A clear refusal with the reason recorded.",
          "As adequate, and the refusal names what it would cost to maintain if built.",
        ],
        remediation:
          "Find the item that would add cost without serving the outcome, and refuse it in writing.",
        recheck: "The refusal.",
      },
    ],
    repairs: [
      "If scope came first, set the appetite and re-cut.",
      "If quality was cut, restore it and remove a feature instead.",
      "If cuts have no return conditions, write the evidence each needs.",
      "If nothing was refused, find the item that adds cost without value.",
    ],
    portfolio:
      "A cut list with return conditions is unusual and persuasive: it shows you can shape work to a constraint rather than only design the ideal.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section:
          "Setting the appetite, fixed time with variable scope, and risks and rabbit holes.",
        purpose:
          "Supplies the appetite-first method this lesson applies.",
        minutes: "60–90 selected",
        limits:
          "Free to read online; a print edition is sold and not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build; it is not market positioning and describes one company's process.",
        fallbackId: "R07",
      },
      {
        ...stories,
        section: "The role of the reason in a story.",
        purpose:
          "Connects cutting to the outcome the story protects.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required.",
        fallbackId: "R26",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l05-v1",
    module: "m14",
    week: 14,
    day: 5,
    level: 4,
    areas: [16],
    guided: true,
    title: "What an estimate is answering",
    objective:
      "Take three stories to an engineer or an informed reader, record what made each estimate uncertain, and redesign one to remove the uncertainty.",
    bringForward: "Your stories, criteria and cut scope.",
    prerequisite: "Your stories with criteria.",
    why: "Estimates are mostly a measure of how unclear the work is. Reading them that way turns them from a negotiation into information.",
    teach: [
      "Uncertainty, not effort, is what makes an estimate large.",
      "Ask what would make it smaller; the answer is usually a decision you can make.",
      "Unknowns hide in integrations, data, edge cases and undefined states.",
      "A design that removes an unknown is worth more than one that looks better.",
      "Never argue an estimate down; change what is being estimated.",
    ],
    explanation: [
      "When an engineer says something will take longer than you expected, the productive question is not whether that is right but what is uncertain. Large estimates usually come from unknowns — an integration nobody has tried, a data shape nobody has confirmed, a state nobody has defined — and unknowns are frequently removable by a decision rather than by effort.",
      "That is where your specifications earn their cost. A story with defined states, wording and failure behaviour has fewer unknowns than one with a screen and an intention, and the estimate reflects it. It is common for the same work to halve when the undefined parts are defined, which is worth knowing before you are in the conversation.",
      "The unknowns cluster predictably: anything involving another system, anything involving data whose shape you have assumed, anything with edge cases nobody has enumerated, and anything whose failure behaviour is undefined. Asking about those four directly is faster than waiting for them to surface.",
      "Arguing an estimate down changes nothing except how much slack the engineer keeps to themselves. Changing what is being estimated — cutting a case, defining a state, deferring an integration — changes the work, and it is a design contribution rather than a negotiation.",
    ],
    misconception:
      "“Engineers pad estimates.” They add contingency for uncertainty, which is rational. Removing the uncertainty removes the contingency; pressing on the number just moves it somewhere less visible.",
    example:
      "Three stories were taken to an engineer. The held-place story estimated at a week, and the uncertainty was the timer's behaviour across devices and what happens if the person returns after expiry — both undefined in the design. Defining them dropped it to three days. The payment-status story stayed large because it depended on another system nobody had used; the response was to defer it and ship the message-based version first. The third was small and unchanged. The write-up recorded that specification, not persuasion, moved two of the three.",
    freeToolPath:
      "Conversation and notes. If no engineer is available, ask an informed reader to identify what they could not answer from your story and criteria; the unanswerable parts are the unknowns.",
    outputs: [
      "Three stories estimated, with the reasoning recorded",
      "The uncertainty behind each estimate named",
      "One story redesigned to remove an unknown",
      "A note of which unknowns were decisions rather than effort",
    ],
    steps: [
      {
        minutes: 25,
        title: "Prepare the stories",
        instructions: [
          "Take three stories with their criteria.",
          "Mark anything you know is still undefined.",
        ],
      },
      {
        minutes: 30,
        title: "Get the estimates",
        instructions: [
          "Ask an engineer, or an informed reader, how long each would take and why.",
          "Record what they could not answer from your material.",
        ],
      },
      {
        minutes: 25,
        title: "Name the uncertainty",
        instructions: [
          "For each estimate write what made it uncertain.",
          "Classify each as integration, data, edge case or undefined state.",
        ],
      },
      {
        minutes: 25,
        title: "Redesign one",
        instructions: [
          "Choose the story whose uncertainty you can remove by deciding.",
          "Define what was undefined and re-estimate.",
        ],
      },
      {
        minutes: 15,
        title: "Record",
        instructions: [
          "Note which unknowns were decisions and which were genuine effort.",
          "Save the estimates, uncertainties and the redesign.",
        ],
      },
    ],
    check: [
      {
        question: "What makes an estimate large?",
        answer:
          "Usually uncertainty rather than effort. Unknowns attract contingency, and many of them are decisions nobody has made rather than work nobody has done.",
      },
      {
        question: "Where do unknowns cluster?",
        answer:
          "Integrations, assumed data shapes, unenumerated edge cases and undefined failure states. Asking about those four directly saves waiting for them to appear.",
      },
      {
        question: "Why not argue an estimate down?",
        answer:
          "Because it changes only how visible the contingency is. Changing what is being estimated — by deciding or deferring — changes the actual work.",
      },
    ],
    rubric: [
      "Three estimates are collected with reasoning",
      "The uncertainty behind each is named and classified",
      "One story is redesigned to remove an unknown",
      "Decisions are separated from genuine effort",
    ],
    criteria: [
      {
        criterion: "Three estimates are collected with reasoning",
        evidence:
          "Three estimates with what the estimator could not answer from your material.",
        levels: [
          "Estimates guessed by the designer.",
          "Estimates collected without reasoning.",
          "Three with reasoning and unanswered questions recorded.",
          "As adequate, and the questions are grouped by what would have prevented them.",
        ],
        remediation:
          "Ask an engineer or an informed reader what they cannot answer from your story and criteria.",
        recheck: "The estimates and questions.",
      },
      {
        criterion: "The uncertainty behind each is named and classified",
        evidence:
          "Each estimate with its uncertainty labelled integration, data, edge case or undefined state.",
        levels: [
          "Uncertainty unexamined.",
          "Named without classification.",
          "Named and classified for all three.",
          "As adequate, and the classification points at which artefact would have removed it.",
        ],
        remediation:
          "For each estimate ask what the estimator did not know, then classify it.",
        recheck: "The classified uncertainties.",
      },
      {
        criterion: "One story is redesigned to remove an unknown",
        evidence:
          "A story with the undefined part now defined and a revised estimate.",
        levels: [
          "No redesign.",
          "Redesigned without re-estimating.",
          "Redesigned, re-estimated and the change recorded.",
          "As adequate, and the definition came from an existing specification rather than new invention.",
        ],
        remediation:
          "Take the story with the most removable uncertainty and define what was missing.",
        recheck: "The redesign and new estimate.",
      },
      {
        criterion: "Decisions are separated from genuine effort",
        evidence:
          "A note distinguishing unknowns you could resolve from work that is simply large.",
        levels: [
          "Not separated.",
          "Separated loosely.",
          "Each unknown marked as decision or effort.",
          "As adequate, and the genuine-effort items are accepted rather than argued about.",
        ],
        remediation:
          "Go through the uncertainties and mark which you could remove by deciding something.",
        recheck: "The separation note.",
      },
    ],
    repairs: [
      "If estimates were guessed, ask someone who would build it.",
      "If uncertainty is unexamined, ask what the estimator could not answer.",
      "If nothing was redesigned, define the missing state and re-estimate.",
      "If decisions and effort are merged, mark each unknown.",
    ],
    portfolio:
      "Showing that specification reduced an estimate is concrete evidence that design work has delivery value, which is difficult to demonstrate any other way.",
    resource: shapeUp,
    resources: [
      {
        ...shapeUp,
        section: "Risks and rabbit holes, and the betting table.",
        purpose:
          "Explains why unknowns dominate estimates and how to remove them before committing.",
        minutes: "60–90 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; take the reasoning about unknowns rather than the ceremony.",
        fallbackId: "R07",
      },
      {
        ...criteria,
        section: "How criteria remove ambiguity before work starts.",
        purpose:
          "Connects your criteria work directly to the size of the estimate.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required.",
        fallbackId: "R18",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l06-v1",
    module: "m14",
    week: 14,
    day: 6,
    level: 4,
    areas: [16],
    guided: true,
    title: "Handover as a conversation",
    objective:
      "Run a handover for one story: prepare the artefacts, hold the conversation, and record every question asked and every decision made in it.",
    bringForward: "Your m12 handover document and this module's stories.",
    prerequisite: "Your handover document and criteria.",
    why: "A handover is where the design meets the constraints it will actually be built under. Treated as a delivery, it produces surprises later.",
    teach: [
      "Send the artefacts before the conversation; do not present them in it.",
      "Use the time for questions and decisions, not for narrating screens.",
      "Record every decision made in the room, or it will be re-made differently.",
      "Expect to change something; a handover with no changes was a briefing.",
      "Agree who decides what when something unexpected appears mid-build.",
    ],
    explanation: [
      "Sending the material beforehand changes what the meeting is for. If people read the states, criteria and wording first, the time is spent on what they could not resolve alone, which is where your presence adds something. Narrating the design aloud spends the time on what the document already said.",
      "The valuable output is a decision record. Handover conversations produce agreements — this state is out of scope for now, this animation will not be built, this error message needs the server to send something new — and if none of that is written down, each will be re-decided during the build, usually differently.",
      "A handover where nothing changes was a briefing. The engineer knows things you do not: what is expensive, what already exists, what will conflict with something else. Expecting to leave with a modified design is what makes the conversation worth holding.",
      "Agreeing the escalation path is the part everyone forgets. When something unexpected appears mid-build — a case nobody designed, a constraint nobody knew — who decides, and how fast? Without an answer, the build stops or the engineer decides alone, and both are worse than a named route.",
    ],
    misconception:
      "“Handover means giving the design to the team.” It means agreeing what will be built, under what constraints, with what still undecided. The document is the input, not the event.",
    example:
      "The held-place story was sent two days ahead with its criteria, states and wording. The conversation lasted forty minutes and produced six decisions: the timer would be server-driven rather than local, the expiry warning would come from the same source, two of the five states were deferred with a note, the announcement wording changed because the chosen phrasing would repeat every second, and one criterion was rewritten because it prescribed an implementation. The escalation route was agreed: anything not covered comes to the designer same day, and if unavailable, the engineer chooses the option that preserves the person's data.",
    freeToolPath:
      "Your existing documents plus a written decision record. No handover tool is required.",
    outputs: [
      "Artefacts sent before the conversation",
      "A decision record from the conversation",
      "At least one change to the design, recorded",
      "An agreed escalation route for the unexpected",
    ],
    steps: [
      {
        minutes: 25,
        title: "Prepare and send",
        instructions: [
          "Assemble the story, criteria, states and wording into one place.",
          "Send it far enough ahead to be read.",
          "Ask people to note questions before the conversation.",
        ],
      },
      {
        minutes: 35,
        title: "Hold the conversation",
        instructions: [
          "Start with their questions, not your narration.",
          "Write down every decision as it is made.",
          "Ask what is expensive and what already exists.",
        ],
      },
      {
        minutes: 25,
        title: "Record the decisions",
        instructions: [
          "Write the decision record and circulate it the same day.",
          "Mark anything deferred and anything still undecided.",
        ],
      },
      {
        minutes: 20,
        title: "Agree the escalation",
        instructions: [
          "Agree who decides when something unexpected appears.",
          "Agree the default if you are unavailable.",
        ],
      },
      {
        minutes: 15,
        title: "Update the artefacts",
        instructions: [
          "Change the design and criteria to match what was agreed.",
          "Save the decision record with them.",
        ],
      },
    ],
    check: [
      {
        question: "Why send the material beforehand?",
        answer:
          "So the conversation is spent on what could not be resolved alone. Narrating the document aloud wastes the only time you have with everyone present.",
      },
      {
        question: "Why record decisions the same day?",
        answer:
          "Because unrecorded agreements are re-made during the build, differently, and nobody can tell which version was intended.",
      },
      {
        question: "What does it mean if nothing changed?",
        answer:
          "That it was a briefing rather than a handover. Engineers know what is expensive and what exists; a conversation that changes nothing did not use that.",
      },
    ],
    rubric: [
      "Artefacts were sent before the conversation",
      "A decision record exists and was circulated",
      "At least one design change came from the conversation",
      "An escalation route is agreed with a default",
    ],
    criteria: [
      {
        criterion: "Artefacts were sent before the conversation",
        evidence:
          "Material shared in advance with a request for questions.",
        levels: [
          "Presented for the first time in the meeting.",
          "Sent too late to be read.",
          "Sent with enough time and questions invited.",
          "As adequate, and the questions arrived before the meeting and shaped its agenda.",
        ],
        remediation:
          "Send the material two days ahead next time and ask for questions in advance.",
        recheck: "The send record.",
      },
      {
        criterion: "A decision record exists and was circulated",
        evidence:
          "A written record of decisions, deferrals and open items, shared promptly.",
        levels: [
          "No record.",
          "Notes kept privately.",
          "Record written and circulated the same day.",
          "As adequate, and deferrals name what would bring them back.",
        ],
        remediation:
          "Write the decisions from memory now and circulate them, marking anything uncertain as such.",
        recheck: "The decision record.",
      },
      {
        criterion:
          "At least one design change came from the conversation",
        evidence:
          "A change made because of what the engineer knew, recorded with the reason.",
        levels: [
          "No changes.",
          "Changes made without recording why.",
          "At least one change with the reason recorded.",
          "As adequate, and the change improved the outcome rather than only reducing cost.",
        ],
        remediation:
          "Ask what is expensive and what already exists; those two questions usually produce a change.",
        recheck: "The recorded change.",
      },
      {
        criterion: "An escalation route is agreed with a default",
        evidence:
          "A named route for unexpected cases and a default when you are unavailable.",
        levels: [
          "Not discussed.",
          "Route agreed without a default.",
          "Both agreed and written down.",
          "As adequate, and the default protects the person's data or money rather than the schedule.",
        ],
        remediation:
          "Agree who to ask and what to do if nobody answers, and write it in the record.",
        recheck: "The escalation agreement.",
      },
    ],
    repairs: [
      "If material was presented cold, send it ahead next time.",
      "If decisions were not recorded, write and circulate them now.",
      "If nothing changed, ask what is expensive and what already exists.",
      "If escalation is undefined, agree the route and the default.",
    ],
    portfolio:
      "A handover decision record shows that you work with delivery constraints rather than around them, which is what collaboration questions in interviews are asking about.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section:
          "What a prototype must communicate to the people who build the real thing.",
        purpose: "Frames the handover artefacts as communication.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover handover conversations, which are this lesson's own.",
        fallbackId: "R05",
      },
      {
        ...criteria,
        section: "Criteria as the shared definition of done.",
        purpose:
          "Gives the conversation a concrete object to agree or change.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Tool-neutral; no subscription required.",
        fallbackId: "R18",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l07-v1",
    module: "m14",
    week: 14,
    day: 7,
    level: 4,
    areas: [16],
    guided: true,
    title: "Design QA on a real build",
    objective:
      "Review a built feature against its criteria and specifications, and produce a prioritised list separating defects from changes of mind.",
    bringForward: "Your criteria, state specifications and the built feature.",
    prerequisite: "Your criteria and something built to check.",
    why: "The build is where specifications either survived or did not. Checking is your job, and doing it well makes you trusted rather than tiresome.",
    teach: [
      "Check against the criteria first; they are what was agreed.",
      "Separate defects from changes of mind, and label them honestly.",
      "Check the states, not only the default screen.",
      "Check on a real device and at the widths you specified.",
      "Prioritise by harm, as with any other problem list.",
    ],
    explanation: [
      "Criteria are the agreement, so they are where the review starts. Anything failing a criterion is a defect and is not negotiable; anything else is a request. Keeping that line clear is what makes your reviews welcome, because an engineer can act on defects immediately and discuss the rest.",
      "The changes of mind are legitimate and must be labelled. Seeing the built thing frequently reveals a better decision, and asking for it is fine — as a request, with a reason, going through the same prioritisation as any other work. Presenting it as a defect is how designers acquire a reputation for moving goalposts.",
      "States are where builds differ from designs, because the default screen is what gets built first and checked most. Walk the state tables from m09 and the exception table from m07 explicitly, forcing each state rather than waiting to encounter it.",
      "Check where people will use it. A build reviewed only on your laptop at a comfortable width will pass while failing on the phone your users have, and the difference is usually in touch targets, keyboard behaviour, long content and the connection.",
    ],
    misconception:
      "“Design QA means checking the visual details.” Spacing matters and is the smallest part. The important part is whether the states exist, the failures behave, the keyboard works and the content survives — the things nobody sees in a screenshot.",
    example:
      "The built held-place feature was reviewed against seven criteria. Five passed. Two failed: the expiry warning announced every second rather than at appearance and expiry, and the state was distinguishable only by colour. Both were logged as defects with the criterion quoted. Four further observations were logged as requests, including a spacing inconsistency and a better wording idea, each marked as a change of mind rather than a defect. The review was done on a phone at two widths and with the keyboard, which is where both defects were found.",
    freeToolPath:
      "The built feature, your criteria and a phone. No QA tool is required; a written list is the deliverable.",
    outputs: [
      "A criterion-by-criterion pass or fail record",
      "Defects separated from requests, each labelled",
      "State-by-state checks including failure paths",
      "A prioritised list ordered by harm",
    ],
    steps: [
      {
        minutes: 25,
        title: "Check the criteria",
        instructions: [
          "Walk each acceptance criterion against the build.",
          "Record pass or fail with what you observed.",
        ],
      },
      {
        minutes: 30,
        title: "Force the states",
        instructions: [
          "Trigger every state from your tables, including failures.",
          "Record any state that does not exist or behaves differently.",
        ],
      },
      {
        minutes: 25,
        title: "Check where it will be used",
        instructions: [
          "Review on a real phone and at your specified widths.",
          "Check keyboard operation and long content.",
        ],
      },
      {
        minutes: 25,
        title: "Separate and prioritise",
        instructions: [
          "Label each finding a defect or a request.",
          "Order by harm rather than by ease of fixing.",
        ],
      },
      {
        minutes: 15,
        title: "Send it well",
        instructions: [
          "Write the list so each item is actionable without a conversation.",
          "Save the review with the criteria results.",
        ],
      },
    ],
    check: [
      {
        question: "What separates a defect from a request?",
        answer:
          "A defect fails an agreed criterion. A request is a change of mind, which is legitimate and goes through prioritisation like any other work.",
      },
      {
        question: "Why force the states rather than browsing?",
        answer:
          "Because default screens get built first and checked most. Failure and empty states are where builds diverge from specifications.",
      },
      {
        question: "Why review on a phone?",
        answer:
          "Because touch targets, keyboard behaviour, long content and connection speed differ there, and that is where your users are.",
      },
    ],
    rubric: [
      "Every criterion is checked and recorded",
      "Defects and requests are separated and labelled",
      "States including failures were forced and checked",
      "The list is prioritised by harm and actionable",
    ],
    criteria: [
      {
        criterion: "Every criterion is checked and recorded",
        evidence:
          "A pass or fail per criterion with the observation.",
        levels: [
          "General impressions of the build.",
          "Some criteria checked.",
          "All checked with observations recorded.",
          "As adequate, and a criterion that turned out to be unverifiable is identified.",
        ],
        remediation:
          "Walk the criteria list one item at a time and record what you saw.",
        recheck: "The criteria results.",
      },
      {
        criterion: "Defects and requests are separated and labelled",
        evidence:
          "Each finding labelled, with defects tied to a specific criterion.",
        levels: [
          "Everything reported as a bug.",
          "Some separation without criteria references.",
          "Clean separation with criteria quoted for defects.",
          "As adequate, and requests carry a reason and a priority suggestion.",
        ],
        remediation:
          "For each finding ask which criterion it fails. If none, it is a request.",
        recheck: "The labelled list.",
      },
      {
        criterion: "States including failures were forced and checked",
        evidence:
          "A record of each state triggered deliberately, including error and empty.",
        levels: [
          "Only the default screen checked.",
          "Some states encountered incidentally.",
          "Each state forced and checked.",
          "As adequate, and a state that does not exist in the build is identified.",
        ],
        remediation:
          "Use your state tables as a checklist and trigger each one deliberately.",
        recheck: "The state check record.",
      },
      {
        criterion: "The list is prioritised by harm and actionable",
        evidence:
          "An ordered list where each item can be acted on without further conversation.",
        levels: [
          "Unordered or ordered by ease.",
          "Ordered by harm but items need explanation.",
          "Ordered by harm and each item actionable alone.",
          "As adequate, and each defect names how to reproduce it.",
        ],
        remediation:
          "Rewrite each item so someone else could act on it, then sort by what it costs the person.",
        recheck: "The prioritised list.",
      },
    ],
    repairs: [
      "If criteria were not walked, check them one at a time.",
      "If everything is a bug, label the changes of mind as requests.",
      "If states were not forced, use the tables as a checklist.",
      "If items need explanation, rewrite them to stand alone.",
    ],
    portfolio:
      "A design QA list that separates defects from requests demonstrates professional collaboration more convincingly than any statement about working well with engineers.",
    resource: criteria,
    resources: [
      {
        ...criteria,
        section: "Criteria as the agreed definition of done.",
        purpose:
          "Provides the line between a defect and a request.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Tool-neutral; it does not cover QA process, which is this lesson's own.",
        fallbackId: "R18",
      },
      {
        ...easyChecks,
        section: "The checks relevant to the built feature.",
        purpose:
          "Gives repeatable accessibility checks to run against the build rather than the design.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary checks; passing is not conformance and self-testing is not testing with disabled people.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l08-v1",
    module: "m14",
    week: 14,
    day: 8,
    level: 4,
    areas: [16],
    guided: true,
    title: "Reporting a defect so it gets fixed",
    objective:
      "Write three defect reports that another person could reproduce and fix without asking you anything, and check them by having someone try.",
    bringForward: "Your design QA findings.",
    prerequisite: "Your QA list with its defects.",
    why: "An unreproducible report is not a report. Most design bug reports are rejected for lack of detail rather than for disagreement.",
    teach: [
      "State what you did, what happened and what should have happened.",
      "Give the exact conditions: device, browser, size, data, connection.",
      "One defect per report; combined reports get half fixed.",
      "Quote the criterion or specification the behaviour contradicts.",
      "Say how severe it is in terms of the person, not your annoyance.",
    ],
    explanation: [
      "The three-part structure is what makes a report actionable: the steps, the observed result and the expected result. Missing the third is the commonest failure, because the writer assumes the expected behaviour is obvious, and it very often is not to someone who did not design it.",
      "Conditions decide reproducibility. A defect that appears on a particular phone at a particular width with a long class name and a slow connection will not reproduce on a laptop with tidy test data, and a report that omits those conditions is closed as unreproducible — accurately, from the engineer's point of view.",
      "One defect per report matters because reports get assigned, prioritised and closed as units. A report containing four issues gets the easiest one fixed and closed, and the rest are lost, which is why they resurface as complaints three weeks later.",
      "Quoting the criterion turns your report from an opinion into a comparison. “The expiry announcement repeats every second; criterion four says it announces at appearance and at expiry” is checkable and needs no discussion, which is exactly what a busy engineer wants.",
    ],
    misconception:
      "“The screenshot shows the problem.” It shows the symptom on one screen at one moment. Without the steps, the conditions and the expected result, it is an invitation to a conversation rather than something anyone can fix.",
    example:
      "Three reports. First: steps — open the class page on a phone at 360 px with a class whose title runs long, throttle to a slow connection, tap book; observed — the price overlaps the button while the image loads; expected — the layout reserves the image space, per the m08 loading specification; conditions — device, browser, width, throttling profile, data used; severity — a person may tap the wrong control while paying. Two were reproduced by someone else on the first attempt; the third could not be, and the missing condition turned out to be the account state, which was added.",
    freeToolPath:
      "Written reports with a screenshot or a short screen recording where it helps. No bug tracker is required for the exercise, though most teams use one.",
    outputs: [
      "Three reports with steps, observed and expected results",
      "Full conditions on each: device, browser, size, data, connection",
      "The criterion or specification quoted per report",
      "A reproduction attempt by someone else, with the result",
    ],
    steps: [
      {
        minutes: 25,
        title: "Write the three parts",
        instructions: [
          "For each defect write the steps, what happened and what should have happened.",
          "Keep one defect per report.",
        ],
      },
      {
        minutes: 25,
        title: "Add the conditions",
        instructions: [
          "Record device, browser, viewport width, data used and connection.",
          "Note anything about account or state that matters.",
        ],
      },
      {
        minutes: 20,
        title: "Quote the source",
        instructions: [
          "Quote the criterion or specification the behaviour contradicts.",
          "If none exists, say so and mark it a request instead.",
        ],
      },
      {
        minutes: 25,
        title: "Rate severity honestly",
        instructions: [
          "State the effect on the person: blocked, at risk of loss, slowed, or cosmetic.",
          "Avoid severity language that reflects your own frustration.",
        ],
      },
      {
        minutes: 25,
        title: "Test reproducibility",
        instructions: [
          "Ask someone to reproduce each report using only what you wrote.",
          "Record failures and add the missing conditions.",
          "Save the three reports.",
        ],
      },
    ],
    check: [
      {
        question: "Which of the three parts is most often missing?",
        answer:
          "The expected result. The writer assumes it is obvious, and it is not to anyone who did not design the thing.",
      },
      {
        question: "Why one defect per report?",
        answer:
          "Because reports are assigned and closed as units. A combined report gets the easiest part fixed and the rest lost.",
      },
      {
        question: "Why quote the criterion?",
        answer:
          "Because it converts an opinion into a comparison that anyone can check, which removes the discussion entirely.",
      },
    ],
    rubric: [
      "Each report has steps, observed and expected results",
      "Conditions are complete enough to reproduce",
      "The contradicted criterion is quoted",
      "Reproduction was attempted by someone else",
    ],
    criteria: [
      {
        criterion: "Each report has steps, observed and expected results",
        evidence: "Three reports with all three parts present.",
        levels: [
          "Screenshots with a comment.",
          "Steps and observation without the expected result.",
          "All three parts in each report.",
          "As adequate, and the steps start from a state anyone can reach.",
        ],
        remediation:
          "Add the expected result to every report; without it nobody knows what fixing means.",
        recheck: "The three reports.",
      },
      {
        criterion: "Conditions are complete enough to reproduce",
        evidence:
          "Device, browser, size, data and connection recorded per report.",
        levels: [
          "No conditions.",
          "Some conditions, missing the ones that mattered.",
          "Complete conditions on each.",
          "As adequate, and any state-dependent condition such as account status is named.",
        ],
        remediation:
          "Reproduce the defect yourself and write down everything that had to be true.",
        recheck: "The conditions.",
      },
      {
        criterion: "The contradicted criterion is quoted",
        evidence:
          "A quoted criterion or specification per defect, or a request label where none exists.",
        levels: [
          "No source given.",
          "Referenced vaguely.",
          "Quoted per defect, with requests labelled.",
          "As adequate, and a missing criterion is identified as a specification gap.",
        ],
        remediation:
          "Find the criterion each defect contradicts; if there is none, relabel it a request.",
        recheck: "The quoted sources.",
      },
      {
        criterion: "Reproduction was attempted by someone else",
        evidence:
          "A record of someone attempting each report and what they could not do.",
        levels: [
          "Not tested.",
          "Tested by the author only.",
          "Attempted by someone else with results recorded.",
          "As adequate, and every failure to reproduce led to an added condition.",
        ],
        remediation:
          "Hand the reports to someone and watch them try; every question is a missing detail.",
        recheck: "The reproduction results.",
      },
    ],
    repairs: [
      "If the expected result is missing, add it to every report.",
      "If conditions are thin, reproduce it yourself and record what had to be true.",
      "If no criterion is quoted, find it or relabel the item a request.",
      "If nobody else tried, have them try and add what they needed.",
    ],
    portfolio:
      "Defect reports are unglamorous and unusually revealing: reproducible, criterion-quoting reports mark out a designer who has actually shipped.",
    resource: criteria,
    resources: [
      {
        ...criteria,
        section: "Criteria as verifiable conditions.",
        purpose:
          "Provides the reference each defect report quotes.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Tool-neutral; defect reporting practice is this lesson's own.",
        fallbackId: "R18",
      },
      {
        ...easyChecks,
        section:
          "The checks whose failures often become accessibility defects.",
        purpose:
          "Helps write accessibility defects with a check anyone can repeat.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Preliminary checks only; a failure is real, a pass is not conformance.",
        fallbackId: "R28",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l09-v1",
    module: "m14",
    week: 14,
    day: 9,
    level: 4,
    areas: [16],
    guided: true,
    title: "Arguing for the work with evidence",
    objective:
      "Make the case for one piece of design work in the terms the decision is actually made in, and write the version of the argument that would fail honestly.",
    bringForward: "Your findings, QA list and cut list.",
    prerequisite: "Your research findings and delivery lists.",
    why: "Design work competes with everything else for the same time. Arguing in design terms to people deciding in business terms loses reliably.",
    teach: [
      "Find out how the decision is actually made before making the case.",
      "Translate evidence into the consequences the decider is accountable for.",
      "Name the cost of not doing it, with what you observed.",
      "Offer the smaller version; a rejected large ask often hides an accepted small one.",
      "Be honest about uncertainty; overclaiming loses the next argument too.",
    ],
    explanation: [
      "Decisions get made on criteria you can find out: revenue, support load, risk, a commitment already made, a deadline. Making a case in terms of craft to someone accountable for support volume is not a failure of their judgement; it is a translation you did not do. Ask what the decision rests on before writing anything.",
      "Your evidence translates. Two of three participants unable to tell whether their place was held becomes a plausible cause of duplicate payments, refund requests and support calls — which is the thing the decider is accountable for. The translation must stay honest: you observed the confusion, you are inferring the consequence, and saying so protects you when someone checks.",
      "The cost of not doing it is usually stronger than the benefit of doing it, and both should be grounded in what you observed rather than in a number you invented. This is where the honesty rules from m05 and m10 matter most: an invented percentage wins the meeting and loses your credibility permanently the first time someone tests it.",
      "Offering the smaller version is what turns a rejection into a decision. The full redesign may be refused while the two-day fix to the held-place message is accepted, and the smaller version is often most of the value. Prepare it before the conversation rather than improvising it after a no.",
    ],
    misconception:
      "“Good work speaks for itself.” It speaks to people who already share your standards. Everyone else needs the connection between the work and the thing they are accountable for, and making that connection is part of the job.",
    example:
      "The case for the held-place work was written twice. The design version: the flow does not communicate state. The delivery version: two of three participants could not tell whether their place was secured, one said she would have paid again, and duplicate payments generate refunds and support contacts — this is a two-day change to a message and a state. The smaller version was prepared in advance: if two days is unavailable, one day covers the message without the countdown. The honest weakness was written too: three participants cannot establish how often this happens, and no support data was available to check it.",
    freeToolPath:
      "Written work. One page, or five sentences in a message; the format matters less than the translation.",
    outputs: [
      "A statement of how the decision is actually made",
      "The case written in the decider's terms, with evidence labelled",
      "A smaller version prepared in advance",
      "The honest weakness in your own argument",
    ],
    steps: [
      {
        minutes: 25,
        title: "Find out the criteria",
        instructions: [
          "Write what the person deciding is accountable for.",
          "If you do not know, ask before making the case.",
        ],
      },
      {
        minutes: 30,
        title: "Translate the evidence",
        instructions: [
          "State what you observed and what you infer from it, separately.",
          "Connect the inference to the decider's accountability.",
          "Keep every number honest, including the sample.",
        ],
      },
      {
        minutes: 25,
        title: "Prepare the smaller version",
        instructions: [
          "Write the reduced scope that delivers most of the value.",
          "State what the smaller version does not fix.",
        ],
      },
      {
        minutes: 20,
        title: "Write the weakness",
        instructions: [
          "State the strongest honest objection to your own case.",
          "Write what evidence would settle it.",
        ],
      },
      {
        minutes: 20,
        title: "Make the case",
        instructions: [
          "Deliver it, in writing or in person, and record the response.",
          "Note which part of the argument actually moved the decision.",
        ],
      },
    ],
    check: [
      {
        question: "Why translate evidence rather than presenting it?",
        answer:
          "Because the decider is accountable for something specific. Untranslated findings are asking them to do the translation, and they usually will not.",
      },
      {
        question: "Why prepare the smaller version beforehand?",
        answer:
          "Because a rejection of the large ask often hides an acceptance of a small one, and improvising the reduction after a no is worse than having designed it.",
      },
      {
        question: "Why state your own weakness?",
        answer:
          "Because it will be found, and finding it first keeps your credibility for the next argument. Overclaiming wins once.",
      },
    ],
    rubric: [
      "The decision criteria are stated, not assumed",
      "Observation and inference are labelled separately",
      "A smaller version exists with what it omits",
      "The honest weakness is written",
    ],
    criteria: [
      {
        criterion: "The decision criteria are stated, not assumed",
        evidence:
          "A written statement of what the decider is accountable for, found out rather than guessed.",
        levels: [
          "Case made in design terms only.",
          "Criteria assumed without checking.",
          "Criteria found out and stated.",
          "As adequate, and the case names which criterion it addresses most directly.",
        ],
        remediation:
          "Ask what the decision rests on before writing the argument.",
        recheck: "The criteria statement.",
      },
      {
        criterion: "Observation and inference are labelled separately",
        evidence:
          "A case distinguishing what you saw from what you conclude, with sample sizes attached.",
        levels: [
          "Inferences presented as findings.",
          "Some separation, with an unlabelled leap.",
          "Clean separation with samples attached.",
          "As adequate, and the inference names what would confirm it.",
        ],
        remediation:
          "Split each claim into what you observed and what you infer, and attach the count.",
        recheck: "The labelled case.",
      },
      {
        criterion: "A smaller version exists with what it omits",
        evidence:
          "A prepared reduced scope, with what it does not fix stated.",
        levels: [
          "No smaller version.",
          "A reduction without stating what it loses.",
          "Both present and prepared in advance.",
          "As adequate, and the smaller version is the one you would run if given the choice.",
        ],
        remediation:
          "Write the one-day version of your ask and what it leaves unaddressed.",
        recheck: "The smaller version.",
      },
      {
        criterion: "The honest weakness is written",
        evidence:
          "The strongest objection to your own case, with what would settle it.",
        levels: [
          "No weakness acknowledged.",
          "A token caveat.",
          "The strongest objection stated with settling evidence named.",
          "As adequate, and it is the objection someone actually raised.",
        ],
        remediation:
          "Ask what you would say against this if you were the decider, and write that down.",
        recheck: "The weakness statement.",
      },
    ],
    repairs: [
      "If the case is in design terms, find out what the decision rests on.",
      "If inferences read as findings, label them and attach counts.",
      "If there is no smaller version, write it before the conversation.",
      "If no weakness is stated, write the strongest objection yourself.",
    ],
    portfolio:
      "The two versions of the same argument, with the honest weakness, show that you can advocate without overclaiming — which is the harder half of influence.",
    resource: standard,
    resources: [
      {
        ...standard,
        section:
          "The points on solving a whole problem for users and defining what success looks like.",
        purpose:
          "Gives a shared vocabulary for arguing about outcomes rather than outputs.",
        minutes: "45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government services with different accountability; translate rather than quote.",
        fallbackId: "R07",
      },
      {
        ...shapeUp,
        section: "Setting the appetite and deciding what not to build.",
        purpose:
          "Supplies the language for offering a smaller version rather than defending the whole.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process, and not a market-positioning source.",
        fallbackId: "R07",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l10-v1",
    module: "m14",
    week: 14,
    day: 10,
    level: 4,
    areas: [16],
    guided: true,
    title: "Meetings that decide something",
    objective:
      "Run one design critique and one review with a stated purpose, a prepared question and a written decision record, and compare what each produced.",
    bringForward: "Your current design work and the QA findings.",
    prerequisite: "Work in progress worth discussing.",
    why: "Most design meetings produce opinions. A meeting with a stated question and a decision record produces a decision.",
    teach: [
      "State the purpose and the question before the meeting starts.",
      "Critique is for improving work in progress; review is for deciding.",
      "Ask for specific feedback: on this decision, against this evidence.",
      "Write the decisions and who made them, during the meeting.",
      "End by naming what happens next and by when.",
    ],
    explanation: [
      "A meeting without a stated question collects whatever is on people's minds, which is why design reviews so often produce colour opinions on a flow question. Naming the question — “does this state communicate that the place is held?” — narrows the input to the thing you need and makes irrelevant feedback easy to defer politely.",
      "Critique and review are different events with different rules. Critique improves work that is still moving: it invites problems, alternatives and doubts, and produces no decisions. Review decides: it takes work presented as ready, tests it against criteria and evidence, and produces a yes, a no or a specific change. Running them as one produces a meeting where people are unsure whether they are helping or approving.",
      "Feedback improves when the request is specific. “What do you think?” invites taste; “does this wording tell you your place is held, and what would you do next?” invites something checkable. This is the same discipline as writing a research task, applied to colleagues.",
      "Writing decisions during the meeting, rather than afterwards, is what makes them real. Read them back before people leave. Anything nobody can restate was not a decision, and anything unwritten will be remembered differently by everyone in the room.",
    ],
    misconception:
      "“Everyone should give feedback on everything.” Broad feedback on a specific question wastes the room's time and yours. Ask for what you need, and offer a separate route for the other things people noticed.",
    example:
      "The critique was run on the held-place state with one question: does this communicate that a place is secured and for how long? Three people responded; two raised the same problem, that the phrasing read as marketing rather than status. No decisions were taken and the notes were kept. The review a week later presented the revised version against its criteria and the QA findings, and produced three decisions: accept the wording, defer the countdown to a later story, and change one criterion that had proved unverifiable. Both meetings had a written record; the critique's was a problem list and the review's was a decision list.",
    freeToolPath:
      "A written agenda, a question, and notes. No meeting tool is required.",
    outputs: [
      "One critique with a stated question and a problem list",
      "One review with criteria and a decision record",
      "A comparison of what each produced",
      "A next action with an owner and a date",
    ],
    steps: [
      {
        minutes: 20,
        title: "Prepare the critique",
        instructions: [
          "Write the one question you need answered.",
          "Send the work and the question in advance.",
          "State that no decisions will be taken.",
        ],
      },
      {
        minutes: 30,
        title: "Run the critique",
        instructions: [
          "Ask for problems and alternatives, not approval.",
          "Record every problem raised, including the ones you disagree with.",
          "Defer off-topic feedback to a written route.",
        ],
      },
      {
        minutes: 30,
        title: "Prepare and run the review",
        instructions: [
          "Present the revised work against its criteria and evidence.",
          "Ask for a decision on each open item.",
          "Write the decisions as they are made.",
        ],
      },
      {
        minutes: 20,
        title: "Close properly",
        instructions: [
          "Read the decisions back before people leave.",
          "Name the next action, its owner and its date.",
        ],
      },
      {
        minutes: 20,
        title: "Compare",
        instructions: [
          "Write what each meeting produced.",
          "Note any feedback that would have been better in the other format.",
          "Save both records.",
        ],
      },
    ],
    check: [
      {
        question: "What is the difference between critique and review?",
        answer:
          "Critique improves work still in motion and produces problems and alternatives. Review decides on work presented as ready and produces yes, no or a specific change.",
      },
      {
        question: "Why state one question?",
        answer:
          "Because an unstated question collects whatever is on people's minds, which is why flow questions receive colour opinions.",
      },
      {
        question: "Why write decisions in the room?",
        answer:
          "Because unwritten decisions are remembered differently by everyone present, and anything nobody can restate was never decided.",
      },
    ],
    rubric: [
      "Each meeting had a stated purpose and question",
      "Critique produced problems, not approval",
      "Review produced written decisions with owners",
      "The next action has an owner and a date",
    ],
    criteria: [
      {
        criterion: "Each meeting had a stated purpose and question",
        evidence:
          "A written purpose and question sent before each meeting.",
        levels: [
          "No stated purpose.",
          "Purpose stated at the start only.",
          "Both sent in advance for each meeting.",
          "As adequate, and off-topic feedback was deferred to a stated route.",
        ],
        remediation:
          "Write the question you need answered and send it with the work.",
        recheck: "The two agendas.",
      },
      {
        criterion: "Critique produced problems, not approval",
        evidence:
          "A problem list including items you disagree with, and no decisions taken.",
        levels: [
          "The critique became an approval meeting.",
          "Problems collected but filtered to the ones you accepted.",
          "All problems recorded, no decisions taken.",
          "As adequate, and at least one alternative you had not considered was raised.",
        ],
        remediation:
          "Re-read your notes and add the problems you dismissed at the time.",
        recheck: "The problem list.",
      },
      {
        criterion: "Review produced written decisions with owners",
        evidence:
          "A decision record naming each decision and who made it.",
        levels: [
          "No decisions or no record.",
          "Decisions recorded without owners.",
          "Each decision recorded with its owner.",
          "As adequate, and deferrals name what would bring them back.",
        ],
        remediation:
          "Write the decisions now from memory, marking any you are unsure of as unconfirmed.",
        recheck: "The decision record.",
      },
      {
        criterion: "The next action has an owner and a date",
        evidence:
          "A named action with a person and a date, agreed before the meeting ended.",
        levels: [
          "No next action.",
          "An action without an owner or date.",
          "Both named and agreed in the room.",
          "As adequate, and the action was read back and confirmed.",
        ],
        remediation:
          "End the next meeting by reading back the decisions and naming who does what by when.",
        recheck: "The next action.",
      },
    ],
    repairs: [
      "If the purpose was unstated, write the question and send it ahead.",
      "If critique became approval, separate the two meetings.",
      "If decisions are unrecorded, write them and confirm with attendees.",
      "If no action was named, add an owner and a date.",
    ],
    portfolio:
      "A critique problem list beside a review decision record demonstrates that you can run the meetings design work depends on.",
    resource: standard,
    resources: [
      {
        ...standard,
        section:
          "The points on having a multidisciplinary team and iterating and improving frequently.",
        purpose:
          "Frames these meetings as the mechanism by which iteration actually happens.",
        minutes: "30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not prescribe meeting formats; the critique-versus-review distinction is the course's own.",
        fallbackId: "R07",
      },
      {
        ...prototypes,
        section: "Using a prototype to get a decision rather than approval.",
        purpose:
          "Connects the artefact you bring to the kind of meeting you are running.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government context; the framing transfers.",
        fallbackId: "R05",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l11-v1",
    module: "m14",
    week: 14,
    day: 11,
    level: 4,
    areas: [16],
    guided: true,
    title: "Release, and knowing whether it worked",
    objective:
      "Write a release plan for one feature naming what ships, what is held back, what you will look at afterwards and what would make you reverse it.",
    bringForward: "Your built feature, criteria and QA results.",
    prerequisite: "A feature ready to release and its criteria.",
    why: "Shipping is a decision with a follow-up. Without deciding what you will look at, a release produces relief rather than learning.",
    teach: [
      "Decide what ships and what is deliberately held back.",
      "Name what you will look at afterwards, before you ship.",
      "Say what would make you reverse or change it.",
      "Distinguish what you can measure from what you can only ask about.",
      "A release is not evidence that the design was right.",
    ],
    explanation: [
      "Releasing part of something is normal and worth deciding rather than discovering. Holding a state back, releasing to a subset of people, or shipping behind a flag are all ways of reducing the cost of being wrong, and each has a design consequence: someone will meet a partial version, and that version needs to make sense on its own.",
      "Deciding what to look at before shipping is what separates learning from relief. The assigned measuring guidance is about defining success in advance, and the design version is narrower: what would tell you this worked, what would tell you it did not, and where would you see either. Written afterwards, the answer is always the number that looks best.",
      "The reversal condition is the honest half. If support contacts about payment confusion do not fall, or if people still ring rather than using the flow, what will you do? Naming that before release stops a feature persisting on the strength of the effort it took.",
      "Be careful about what can be measured. Some things are countable — completions, contacts, repeat payments — and some are not, and asking a few people afterwards is a legitimate method rather than a failure. What is not legitimate is treating a released feature as evidence that the design was right; a release tells you what happened after it, and only if you decided to look.",
    ],
    misconception:
      "“It shipped, so it worked.” Shipping means it exists. Whether it helped is a separate question, and one you can only answer if you decided in advance what you would look at.",
    example:
      "The release plan: the held-place message and states ship; the countdown is held back until the timer is server-driven; the whole feature goes to everyone at once, since a subset would fragment support. Before shipping, three things were named: whether support contacts about payment status change over four weeks, whether anyone reports a duplicate payment, and a short round of three conversations with recent bookers. The reversal condition: if duplicate payments continue at the same rate after four weeks, the state design is not the cause and the work moves to the payment confirmation itself. It was recorded that none of the three is a controlled comparison.",
    freeToolPath:
      "A written plan. Counting support contacts or asking three people needs no analytics tool, and both are legitimate at this scale.",
    outputs: [
      "A release plan naming what ships and what is held back",
      "What you will look at afterwards, decided in advance",
      "A reversal or change condition",
      "A note of what cannot be measured and how you will ask instead",
    ],
    steps: [
      {
        minutes: 25,
        title: "Read on defining success",
        instructions: [
          "Read the assigned guidance on defining success before release.",
          "Write the difference between an output and an outcome here.",
        ],
      },
      {
        minutes: 25,
        title: "Decide the scope of the release",
        instructions: [
          "Name what ships and what is deliberately held back.",
          "Check the partial version makes sense on its own.",
        ],
      },
      {
        minutes: 30,
        title: "Decide what you will look at",
        instructions: [
          "Name what would suggest it worked and what would suggest it did not.",
          "Say where you would see each, and over what period.",
        ],
      },
      {
        minutes: 25,
        title: "Write the reversal condition",
        instructions: [
          "State what would make you change or reverse the feature.",
          "Name who decides that and when.",
        ],
      },
      {
        minutes: 15,
        title: "Record the limits",
        instructions: [
          "State what cannot be measured and how you will ask instead.",
          "State that none of this is a controlled comparison.",
          "Save the release plan.",
        ],
      },
    ],
    check: [
      {
        question: "Why decide what to look at before shipping?",
        answer:
          "Because afterwards you will choose the number that flatters the work. Deciding in advance makes the result capable of disappointing you, which is what makes it evidence.",
      },
      {
        question: "What does holding something back cost?",
        answer:
          "Someone meets a partial version, so it has to make sense alone. That is a design consequence, not only a delivery one.",
      },
      {
        question: "Is a release evidence the design was right?",
        answer:
          "No. It is evidence the design exists. What happened afterwards is a separate question and only answerable if you decided to look.",
      },
    ],
    rubric: [
      "What ships and what is held back is decided",
      "Success and failure signals are named in advance",
      "A reversal condition exists with an owner",
      "Unmeasurable things are named with how you will ask",
    ],
    criteria: [
      {
        criterion: "What ships and what is held back is decided",
        evidence:
          "A stated release scope with a check that the partial version stands alone.",
        levels: [
          "Everything ships by default.",
          "A scope decided without checking the partial experience.",
          "Scope decided and the partial version checked.",
          "As adequate, and the held-back part has a condition for release.",
        ],
        remediation:
          "Walk the partial version as a new person and check it makes sense without the held-back parts.",
        recheck: "The release scope.",
      },
      {
        criterion: "Success and failure signals are named in advance",
        evidence:
          "Written signals for both, with where and over what period.",
        levels: [
          "Nothing named.",
          "Only success signals named.",
          "Both named with locations and periods.",
          "As adequate, and at least one signal is something that could realistically be observed.",
        ],
        remediation:
          "Write what you would expect to see if this worked and if it did not, and where.",
        recheck: "The signals.",
      },
      {
        criterion: "A reversal condition exists with an owner",
        evidence:
          "A condition that would trigger change or reversal, with who decides.",
        levels: [
          "No condition.",
          "A condition without an owner or a date.",
          "Both stated.",
          "As adequate, and the condition would be uncomfortable to meet, which means it is real.",
        ],
        remediation:
          "Write what result would make you undo this, then name who would decide.",
        recheck: "The reversal condition.",
      },
      {
        criterion: "Unmeasurable things are named with how you will ask",
        evidence:
          "A list of what cannot be counted and the conversational alternative.",
        levels: [
          "Everything treated as measurable.",
          "Limits acknowledged without an alternative.",
          "Named with a method for asking instead.",
          "As adequate, and it is stated that none of this is a controlled comparison.",
        ],
        remediation:
          "List the claims you cannot count and plan three conversations instead.",
        recheck: "The limits note.",
      },
    ],
    repairs: [
      "If everything ships by default, decide what is held back.",
      "If only success signals exist, write the failure ones.",
      "If nothing would reverse it, find the result that should.",
      "If everything is treated as measurable, plan the conversations.",
    ],
    portfolio:
      "A release plan with a reversal condition is rare and shows you treat shipping as a decision rather than an achievement.",
    resource: measuring,
    resources: [
      {
        ...measuring,
        section:
          "Defining success measures before release and using performance data honestly.",
        purpose:
          "Supplies the discipline of deciding what to look at in advance.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government services with published performance data; at your scale, counts and conversations replace dashboards and neither is a controlled comparison.",
        fallbackId: "R07",
      },
      {
        ...semver,
        section: "The rules for what a release means and cannot be changed.",
        purpose:
          "Connects the release decision to the versioning discipline from m13.",
        minutes: "10–15",
        limits:
          "Free reading, no account, CC BY 3.0. Verified 2026-09-06. Written for software APIs; the release-immutability idea is what transfers.",
        fallbackId: "R18",
      },
    ],
  }),
  withLegacyText({
    id: "m14-l12-v1",
    module: "m14",
    week: 14,
    day: 12,
    level: 4,
    areas: [16],
    guided: true,
    title: "What to change about how you work",
    objective:
      "Run a retrospective on this delivery, identify the two things that cost the most, and commit to one change with a way of checking whether it helped.",
    bringForward:
      "Everything from this module: stories, criteria, handover, QA, release.",
    prerequisite: "Your delivery artefacts from this module.",
    why: "Delivery problems repeat until someone changes something. A retrospective that produces no change is a complaint session with an agenda.",
    teach: [
      "Look at what happened, not at who did it.",
      "Find the two costliest problems, not the most annoying ones.",
      "Commit to one change, with a person and a date.",
      "Decide in advance how you will know whether it helped.",
      "Record what you tried, including changes that did not work.",
    ],
    explanation: [
      "Retrospectives fail in two ways: they become complaint sessions, or they produce twelve improvements and nobody does any of them. Both are avoided by the same discipline — look at events rather than people, choose the costliest problem rather than the most irritating, and commit to one change with an owner.",
      "Cost is measurable in rework, delay and defects. The spacing inconsistency that annoyed you all fortnight probably cost an hour; the undefined empty state cost an engineer a day and produced a defect. Ranking by cost rather than by irritation is what makes retrospectives change the expensive things.",
      "One change is enough. A single change with an owner and a date has a chance of happening; a list of twelve is a document. If the same problem returns next time, that is information about the change rather than a reason to add eleven more.",
      "Deciding how you will know it helped is the same discipline as the release plan and the repair prediction: write what should be different next time, so the retrospective after next can check. Over three or four rounds this produces something rare — a record of how your own working practice actually changed.",
    ],
    misconception:
      "“The retrospective is where the team says what went wrong.” It is where the team decides what to change. Without a committed change and a way of checking it, the same problems will be listed again next time in the same words.",
    example:
      "The retrospective looked at the whole delivery. The two costliest problems: undefined states that were invented during the build, costing a day and producing two defects; and a handover held too late, which meant the estimate was made without the criteria. The committed change: criteria and states go into the story before estimation, owned by the learner, starting with the next story. The check: at the next retrospective, count how many states were invented during the build; the target is zero, and if it is not, the change was not enough. A previous change — sending material two days ahead — was reviewed and had worked.",
    freeToolPath:
      "A written retrospective and a change log. No facilitation tool is needed for a team of one or a few.",
    outputs: [
      "A list of what happened, framed as events not people",
      "The two costliest problems with their cost",
      "One committed change with an owner and a date",
      "A check for whether it helped, decided now",
    ],
    steps: [
      {
        minutes: 25,
        title: "List what happened",
        instructions: [
          "Write the events of this delivery, without names attached to failures.",
          "Include what went well.",
        ],
      },
      {
        minutes: 30,
        title: "Cost the problems",
        instructions: [
          "Estimate what each problem cost in rework, delay or defects.",
          "Rank by cost, not by how irritating it was.",
        ],
      },
      {
        minutes: 25,
        title: "Choose one change",
        instructions: [
          "Choose the change that addresses the costliest problem.",
          "Name who does it and when it starts.",
        ],
      },
      {
        minutes: 25,
        title: "Decide the check",
        instructions: [
          "Write what should be different next time if this works.",
          "Make it countable where you can.",
        ],
      },
      {
        minutes: 15,
        title: "Review the last change",
        instructions: [
          "If you have made a previous change, check whether it helped.",
          "Record the result, including if it did not.",
          "Save the retrospective and the change log.",
        ],
      },
    ],
    check: [
      {
        question: "Why rank by cost rather than irritation?",
        answer:
          "Because the irritating problems are usually small and the expensive ones are usually structural. Retrospectives that fix irritations feel productive and change nothing.",
      },
      {
        question: "Why commit to only one change?",
        answer:
          "Because one change with an owner happens and twelve do not. If the problem returns, that is information about the change rather than a reason for a longer list.",
      },
      {
        question: "Why decide the check now?",
        answer:
          "Because afterwards everyone remembers improvement. A countable check makes the next retrospective able to say the change failed.",
      },
    ],
    rubric: [
      "Events are described without blaming people",
      "Problems are ranked by cost with estimates",
      "One change is committed with an owner and a date",
      "A check for the change is decided in advance",
    ],
    criteria: [
      {
        criterion: "Events are described without blaming people",
        evidence:
          "A written account focused on what happened and what made it likely.",
        levels: [
          "Problems attributed to individuals.",
          "Neutral wording but no causes examined.",
          "Events described with the conditions that produced them.",
          "As adequate, and what went well is recorded as deliberately as what did not.",
        ],
        remediation:
          "Rewrite each item as an event and the condition that made it likely.",
        recheck: "The event list.",
      },
      {
        criterion: "Problems are ranked by cost with estimates",
        evidence:
          "Cost estimates in rework, delay or defects, with a ranking.",
        levels: [
          "Unranked, or ranked by annoyance.",
          "Ranked without estimates.",
          "Estimated and ranked by cost.",
          "As adequate, and the most annoying problem is shown not to be the most expensive.",
        ],
        remediation:
          "For each problem estimate the hours or defects it produced, then re-sort.",
        recheck: "The ranked list.",
      },
      {
        criterion: "One change is committed with an owner and a date",
        evidence:
          "A single change naming who and when, addressing the top problem.",
        levels: [
          "A list of improvements with no owners.",
          "One change without a date or owner.",
          "One change with both, addressing the costliest problem.",
          "As adequate, and the change is small enough to actually happen.",
        ],
        remediation:
          "Cut your list to one item and attach a person and a start date.",
        recheck: "The committed change.",
      },
      {
        criterion: "A check for the change is decided in advance",
        evidence:
          "A countable or observable difference expected next time.",
        levels: [
          "No check.",
          "A vague expectation of improvement.",
          "A countable or observable check.",
          "As adequate, and a previous change was reviewed with its result recorded honestly.",
        ],
        remediation:
          "Write what you will count next time, and what number would mean the change failed.",
        recheck: "The check.",
      },
    ],
    repairs: [
      "If problems are attributed to people, rewrite them as events and conditions.",
      "If ranking is by annoyance, estimate costs and re-sort.",
      "If several changes are listed, choose one and assign it.",
      "If no check exists, decide what you will count next time.",
    ],
    portfolio:
      "A retrospective with a committed change and a later review of whether it worked is unusual evidence of professional practice rather than of design output.",
    resource: standard,
    resources: [
      {
        ...standard,
        section: "The point on iterating and improving frequently.",
        purpose:
          "Frames process change as part of the work rather than an extra.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It states the outcome rather than a retrospective method, which is this lesson's own.",
        fallbackId: "R07",
      },
      {
        ...shapeUp,
        section: "The reasoning about fixed time and what happens when work overruns.",
        purpose:
          "Gives a frame for discussing overruns as scope decisions rather than personal failures.",
        minutes: "45–60 selected",
        limits:
          "Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; adopt the reasoning rather than the ceremony.",
        fallbackId: "R07",
      },
    ],
  }),
];
