import type { LegacyLesson as Lesson } from "./teaching";
// Module 7 joins area 6 (flows) to area 7 (wireframes) deliberately: a flow
// nobody has drawn screens for hides its hardest moments, and screens drawn
// without a flow invent a happy path. The module needs no new catalog rows —
// every assigned reading was verified for earlier modules — but two of them
// are used strictly inside their recorded limits: R44 supplies permission
// vocabulary and no interface patterns, and R11 supplies multi-step task
// patterns rather than a general navigation library.
const patterns = {
  title: "GOV.UK Design System: patterns",
  id: "R11",
  url: "https://design-system.service.gov.uk/patterns/",
};
const prototypes = {
  title: "GOV.UK: making prototypes",
  id: "R12",
  url: "https://www.gov.uk/service-manual/design/making-prototypes",
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
const forms = {
  title: "W3C: forms tutorial",
  id: "R14",
  url: "https://www.w3.org/WAI/tutorials/forms/",
};
const permissions = {
  title: "Google Cloud: IAM overview",
  id: "R44",
  url: "https://docs.cloud.google.com/iam/docs/overview",
};
const responsive = {
  title: "web.dev: learn responsive design",
  id: "R16",
  url: "https://web.dev/learn/design/",
};
const styles = {
  title: "GOV.UK Design System: styles",
  id: "R06",
  url: "https://design-system.service.gov.uk/styles/",
};
const recall = {
  title: "NN/g: recognition and recall",
  id: "R33",
  url: "https://www.nngroup.com/articles/recognition-and-recall/",
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
const needs = {
  title: "GOV.UK: start by learning user needs",
  id: "R35",
  url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
};
export const module7: Lesson[] = [
  {
    id: "m07-l01-v1",
    module: "m07",
    week: 7,
    day: 1,
    level: 2,
    areas: [6],
    title: "Draw the flow, including how people arrive and leave",
    objective:
      "Draw one end-to-end flow with every entry point, decision, system state and exit marked, and list the three moments where a person is most likely to stop — with the evidence for each.",
    bringForward:
      "Your m06 structure and change note, and the m05 journey map. The map showed the journey as experience over time; a flow states it precisely enough to build.",
    why: "A flow is the first artefact that has to be exactly right. A vague journey map is still useful; a vague flow produces screens for the parts you thought about and silence for the parts you did not, which are the parts people get stuck in.",
    teach: [
      "A flow has four kinds of node and most beginners draw only one. Actions are what the person does. Decisions are points where the path forks, and the fork belongs to the person or to the system — “do they have an account?” is a system decision the person never sees and still shapes everything. States are what the system is doing while they wait: submitted, pending, failed, expired. And exits are how the flow ends, including the ways it ends badly — abandoned, timed out, transferred to a phone call.",
      "Entry points are plural and you rarely control them. People arrive at a booking from a search engine on a class page rather than a home page, from a friend's forwarded link, from a message with a half-remembered detail, or by returning three days later on a different phone. Draw each real entry you have evidence for, because a flow that begins at a home page nobody visits describes a product nobody uses.",
      "Mark what has to be true before each step, and what the person must be holding. To pay, someone needs an amount they trust, a payment method to hand and often a decision from someone else. Prerequisites drawn on the flow are how you notice that your third screen asks for something the person cannot possibly have yet — the single most common structural fault in a first flow, and it is invisible until the prerequisites are written down.",
      "Waiting is part of the flow, not an absence of it. Anything involving payment, another person, or a network can hold someone in an ambiguous state, and that state needs its own node, its own message and its own way out. A flow that draws payment as a single arrow between two screens has hidden precisely where people pay twice, ring the shop or give up.",
    ],
    misconception:
      "“The flow is the happy path, and errors are edge cases we will add later.” The recovery paths are where most of the design work lives and where the trust is won or lost. Added later, they get bolted onto screens whose layouts already assumed everything went well, which is why so many error messages appear in places nobody looks.",
    example:
      "A booking flow redrawn with all four node kinds grew from six boxes to nineteen. Three entry points were real, and only one was the home page. Two decisions turned out to be system decisions the person never saw — whether a place was still available, and whether their earlier session had expired — and both had been drawn as if the person chose. Two states had been missing entirely: payment pending, where the observation session in m05 had shown someone standing at a window waiting, and place-held-but-unconfirmed. Four exits existed, of which only one was success: the others were abandonment at the price, expiry of a held place, and ringing the provider instead — the last being the most common ending in the research and the one nobody had drawn.",
    steps: [
      {
        minutes: 25,
        title: "Read the multi-step patterns",
        text: "Read the assigned patterns for tasks that take several steps. Note how each handles progress, review and returning later.",
      },
      {
        minutes: 30,
        title: "Draw the spine",
        text: "Draw the main path from a real entry point to a successful outcome, using distinct shapes for actions, decisions, states and exits. Keep it to one page.",
      },
      {
        minutes: 25,
        title: "Add the other entries and exits",
        text: "Add every entry point you have evidence for, and every way the flow can end, including abandonment, expiry and moving to a phone call.",
      },
      {
        minutes: 25,
        title: "Mark prerequisites and waits",
        text: "For each step write what must be true and what the person must be holding. Add a node for every wait, including anything depending on another person.",
      },
      {
        minutes: 15,
        title: "Name the stopping points and pause",
        text: "Mark the three places a person is most likely to stop, and write the evidence for each — an observation, a quotation, a tree-test failure. Save the flow.",
      },
    ],
    freeToolPath:
      "Paper and a pencil, photographed. Boxes and arrows drawn by hand are faster to change than any diagram tool, and at this stage changing it often is the point. If you want it digital later, an indented text list of steps with their decisions works and diffs cleanly.",
    deliverable:
      "A one-page flow using distinct notation for actions, decisions, states and exits, showing every evidenced entry point and every ending, with prerequisites and waits marked and three evidenced stopping points named.",
    check: [
      {
        question: "Why draw system decisions the person never sees?",
        answer:
          "Because they change what the person meets next. Availability, session expiry and account status all fork the flow invisibly, and if they are not on the diagram nobody designs what the person sees when the fork goes the other way.",
      },
      {
        question: "What does marking prerequisites catch?",
        answer:
          "Steps that ask for something the person cannot yet have — a total they have not been shown, a decision from someone who is not present, a document at home. It is the commonest structural fault in a first flow and is invisible until written down.",
      },
      {
        question: "Why does waiting need its own node?",
        answer:
          "Because a person in an ambiguous state needs a message, a way out and often reassurance that their money is safe. Drawn as an arrow, waiting gets no design at all, and that is where people pay twice.",
      },
    ],
    rubric: [
      "Actions, decisions, states and exits are distinguished",
      "Every evidenced entry point and ending appears",
      "Prerequisites and waits are marked on the flow",
      "Stopping points are named with evidence",
    ],
    criteria: [
      {
        criterion: "Actions, decisions, states and exits are distinguished",
        evidence:
          "A flow using visibly different notation for the four kinds, with a small key.",
        levels: [
          "A sequence of screens joined by arrows.",
          "Actions and decisions distinguished, states and exits missing.",
          "All four kinds present and visually distinct, with a key.",
          "As adequate, and system decisions are marked separately from decisions the person makes.",
        ],
        remediation:
          "Go through your flow and label each node with one of the four words. Anything you cannot label is probably a screen name rather than a step.",
        recheck: "The relabelled flow with its key.",
      },
      {
        criterion: "Every evidenced entry point and ending appears",
        evidence:
          "Multiple entry points drawn from real evidence, and every ending including abandonment and transfer to another channel.",
        levels: [
          "One entry point and one successful ending.",
          "Several entries or several endings, but not both.",
          "All evidenced entries and all endings, including the unsuccessful ones.",
          "As adequate, and the most common real ending in your research is identified even if it is not success.",
        ],
        remediation:
          "List how each m05 participant actually arrived and how each session actually ended. Add every one to the flow.",
        recheck: "The flow with entries and endings.",
      },
      {
        criterion: "Prerequisites and waits are marked on the flow",
        evidence:
          "A prerequisite note on each step and a node for every wait, including waits on other people.",
        levels: [
          "Neither marked.",
          "Prerequisites noted on some steps; waiting still drawn as an arrow.",
          "Both marked throughout.",
          "As adequate, and one step is moved or split because its prerequisite could not be met when it was asked for.",
        ],
        remediation:
          "For each step write “to do this they must already have …”. Then find every place the system or another person takes time and give it a node.",
        recheck: "The annotated flow.",
      },
      {
        criterion: "Stopping points are named with evidence",
        evidence:
          "Three marked stopping points, each with a source — an observation, a quotation or a test result.",
        levels: [
          "No stopping points, or points chosen by intuition.",
          "Points named but with no evidence attached.",
          "Three points named, each with its evidence.",
          "As adequate, and one stopping point contradicts what you expected before the research, with that noted.",
        ],
        remediation:
          "Go back to your m05 notes and m06 test results and find the moments where people actually stopped. Use those rather than the ones that feel risky.",
        recheck: "The three stopping points with sources.",
      },
    ],
    portfolio:
      "Core project evidence. A flow showing real entry points, waits and unsuccessful endings reads as work done from research; a flow of five happy screens reads as work done from imagination.",
    resource: patterns,
    resources: [
      {
        ...patterns,
        section:
          "The task list, check answers and complete related tasks patterns.",
        purpose:
          "Shows how multi-step tasks handle progress, review and resumption — the structural questions a flow has to answer.",
        minutes: "45–60 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. These are patterns for multi-step government tasks, not a general navigation library, and their visual style is a government design system rather than a universal aesthetic; take the structure, not the look.",
        fallbackId: "R02",
      },
      {
        ...needs,
        section:
          "Needs across the whole journey, including before and after the product.",
        purpose:
          "Keeps entry points and endings anchored to what people are actually doing rather than to where your product starts.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is about need statements rather than flow notation, which is this lesson's own.",
        fallbackId: "R08",
      },
    ],
  },
  {
    id: "m07-l02-v1",
    module: "m07",
    week: 7,
    day: 2,
    level: 2,
    areas: [6],
    title: "First run: what must be learned now and what can wait",
    objective:
      "Design an onboarding path that lets someone reach a first real outcome without setup they do not yet need, and list every piece of information you deferred with the moment it becomes necessary.",
    bringForward:
      "Your flow and the entry points on it. Onboarding is not a separate product: it is the first pass through the same flow by someone who knows nothing.",
    why: "Most onboarding asks for things before the person has any reason to care, which is why people abandon at setup screens. The design question is not how to explain your product; it is how little someone can know and still succeed once.",
    teach: [
      "Separate what someone must know now from what they can learn by using the thing. Must-know is anything without which the next action is impossible or dangerous: what this costs, what they are committing to, whether their data is shared. Everything else — features, preferences, profile details — can wait for the moment it matters, at which point it is easy to explain because the person now has a reason to listen.",
      "A tour is not onboarding. Sequential overlays explaining the interface are read as an obstacle, forgotten immediately, and are usually a sign the interface itself needs work: if a screen requires a tour, the screen is the problem. Prefer showing a person something they recognise — a familiar pattern, sensible defaults, an example already filled in — because recognition costs almost nothing and recall costs a great deal, which the assigned reading covers directly.",
      "Empty states are onboarding. The first screen of a product with no content yet is doing more teaching than any tour: it should say what will appear here, why, and what one action would produce the first item. A blank list with a plus button teaches nothing; a blank list saying “your bookings appear here — find a class to make your first one” teaches the model and offers the next step in one sentence.",
      "Ask for setup at the moment it buys the person something. A phone number requested at registration is a cost with no benefit; the same request at the point of holding a place is obviously worth it. Deferral has a cost you must state — you will have less complete records and some flows will interrupt later — so record what you deferred and where it becomes necessary, rather than deferring everything and hoping.",
    ],
    misconception:
      "“People need to be shown the features or they will not find them.” People find the features they have a reason to look for. Showing everything at the start reliably produces a person who remembers none of it and now believes the product is complicated. Teach at the moment of need, where the explanation is short and the motivation is present.",
    example:
      "A first-run flow that asked for name, phone number, interests and notification preferences before showing a single class was rebuilt to ask for nothing. A first-time visitor could browse, see full prices, see what to bring and reach the booking step before anything was requested; there the flow asked for a name and a phone number, and said why — “so we can tell you if the class is cancelled” — which is a benefit rather than a form. The empty bookings list said what would appear there and linked to Saturday's classes. Deferred items were listed with their trigger: interests at the point of a second booking, notification preferences only after the first confirmation, and nothing else at all.",
    steps: [
      {
        minutes: 25,
        title: "Read on recognition and patterns",
        text: "Read the assigned article on recognition versus recall and the patterns for starting a multi-step task. Note what each says about reducing what a person has to remember.",
      },
      {
        minutes: 25,
        title: "Split must-know from can-wait",
        text: "List everything your product currently asks for or explains at the start. Split it into what makes the next action possible and what does not. Be strict; the second list should be longer.",
      },
      {
        minutes: 30,
        title: "Design the shortest path to a first outcome",
        text: "Redraw the first-run path so someone reaches a real outcome with the minimum they must know. Mark where each deferred item now gets asked for and what it buys the person there.",
      },
      {
        minutes: 25,
        title: "Write the empty states",
        text: "Write the wording for every empty state in the flow: what appears here, why, and the one action that produces the first item. Use your m06 labels.",
      },
      {
        minutes: 15,
        title: "Record the cost and pause",
        text: "Write what deferring each item costs — less complete records, an interruption later, a support question — and which deferrals you are least sure about. Save the path and the deferral list.",
      },
    ],
    freeToolPath:
      "Sketched screens on paper with the empty-state wording written out in full. Writing the words before drawing is the whole technique here, and it needs nothing but a pen.",
    deliverable:
      "A first-run path reaching a real outcome with minimum prerequisites, a two-column must-know and can-wait split, a deferral list with triggers and costs, and written wording for every empty state.",
    check: [
      {
        question: "Why is a feature tour usually a poor answer?",
        answer:
          "Because it is read as an obstacle to what the person came for, and it is forgotten before it becomes relevant. It also masks the real problem: a screen that needs a tour is a screen that needs redesigning.",
      },
      {
        question: "What should an empty state contain?",
        answer:
          "What will appear here, why it will appear, and the single action that produces the first item. It is the clearest teaching moment in the product and is usually wasted on a blank panel.",
      },
      {
        question: "When should you ask for a phone number?",
        answer:
          "At the moment it buys the person something they want — being told if the class is cancelled, for example — and with that reason stated. Asked at registration it is a cost with no visible benefit, which is what people abandon.",
      },
    ],
    rubric: [
      "Must-know and can-wait are separated strictly",
      "A first real outcome is reachable with minimum prerequisites",
      "Every empty state has written wording",
      "Deferrals record their trigger and their cost",
    ],
    criteria: [
      {
        criterion: "Must-know and can-wait are separated strictly",
        evidence:
          "Two lists, with must-know limited to what makes the next action possible or safe.",
        levels: [
          "No separation; everything is treated as necessary.",
          "A separation that leaves most items in must-know.",
          "A strict split with must-know limited to what the next action requires.",
          "As adequate, and one item is moved to must-know for a safety or money reason with that reason stated.",
        ],
        remediation:
          "For each must-know item, write which action becomes impossible without it. Items with no answer move to can-wait.",
        recheck: "The two lists with justifications.",
      },
      {
        criterion:
          "A first real outcome is reachable with minimum prerequisites",
        evidence:
          "A redrawn path where a new person reaches a genuine outcome, with the prerequisites counted before and after.",
        levels: [
          "Setup still precedes any outcome.",
          "Some setup deferred but the first outcome is still a configuration step.",
          "A real outcome is reachable, with the reduction in prerequisites shown.",
          "As adequate, and the path was walked by someone unfamiliar with the product, with what they asked recorded.",
        ],
        remediation:
          "Count the screens and fields before the first real outcome in both versions. If the number did not fall, nothing was actually deferred.",
        recheck: "The two counts and the redrawn path.",
      },
      {
        criterion: "Every empty state has written wording",
        evidence:
          "Wording for each empty state saying what appears, why and the next action, using your m06 labels.",
        levels: [
          "Empty states unaddressed or shown as blank panels.",
          "Wording for some, or wording that only names the section.",
          "All three elements written for every empty state.",
          "As adequate, and one empty state also handles the case where the list is empty because of a filter rather than because nothing exists.",
        ],
        remediation:
          "List every screen that can be empty, including filtered lists and cancelled items, and write the three elements for each.",
        recheck: "The empty-state wording.",
      },
      {
        criterion: "Deferrals record their trigger and their cost",
        evidence:
          "A list of deferred items, each with the moment it is asked for and what deferring it costs.",
        levels: [
          "Items deferred with no record.",
          "Triggers recorded but no costs.",
          "Both recorded for every deferral.",
          "As adequate, and the least certain deferral is named with what would settle it.",
        ],
        remediation:
          "For each deferred item write when it is asked for and what goes wrong because you waited. A deferral with no cost is usually a request you can remove entirely.",
        recheck: "The deferral list.",
      },
    ],
    portfolio:
      "Project evidence, and a strong before-and-after: prerequisites before the first outcome is a number you can put in a case study honestly, because it is a property of your design rather than a claim about users.",
    resource: recall,
    resources: [
      {
        ...recall,
        section:
          "Recognition versus recall and the interface implications.",
        purpose:
          "Explains why showing and defaulting beats explaining, and why a tour is remembered so poorly.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover Miller's limit; if you need chunk limits use the assigned Laws of UX page, with the caution recorded there.",
        fallbackId: "R31",
      },
      {
        ...patterns,
        section:
          "The start pattern and the task list pattern, read for how a first pass through a long task is introduced.",
        purpose:
          "Shows a worked approach to beginning a multi-step task without front-loading setup.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government service patterns assume a citizen with an obligation rather than a customer who can leave; adapt the structure and question the motivation.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m07-l03-v1",
    module: "m07",
    week: 7,
    day: 3,
    level: 2,
    areas: [6, 7],
    title: "Getting in and getting back in",
    objective:
      "Design the sign-in, sign-up and recovery paths for your product, including the shared-device and lost-access cases, with every form field labelled, every error message written and the recovery path shown to work without the thing that was lost.",
    bringForward:
      "Your flow and the deferral list. Whatever you deferred to “when they have an account” now needs an account path that people can actually complete.",
    why: "Authentication is where products lose people who already wanted to use them. It is also the part most often designed from the happy path, and the recovery case — the person who cannot get in — is the one that decides whether they ever come back.",
    teach: [
      "Every field in an authentication form needs a persistent, visible label, an accessible error message tied to the field, and input that survives a failed attempt. The assigned forms tutorial covers labels, instructions, validation and notifications precisely, and these are not stylistic preferences: a placeholder that disappears when typing, an error at the top of the page with no link to the field, or a form that clears itself after a mistake are the three reliable ways to make a person give up on their third attempt.",
      "Recovery must not depend on the thing that was lost. If a person cannot sign in because they have lost access to the phone number they registered with, sending a code to that number is not a recovery path, it is the same wall. Design at least one route that uses a different factor, and be explicit about what happens when someone genuinely has nothing: a way to reach a human is a legitimate part of the design and belongs on the flow rather than being left to the support inbox.",
      "Shared and borrowed devices are ordinary, not an edge case — in India and in many contexts a phone is shared within a family, and a person may book from someone else's device once and never again. That has design consequences: staying signed in by default can expose one person's bookings to another; sending a code to a shared phone may reach the wrong person; and “remember me” has to be a visible choice rather than an assumption. Design for the borrowed device and the sole-device person, not only for the individual with their own laptop.",
      "Ask what the account is actually for before designing it. Sometimes the answer is nothing: a booking can be identified by a reference and a phone number, and forcing an account is an obstacle that costs you the booking. Where an account genuinely serves the person — seeing history, changing a booking, not re-entering details — say which of those it provides, and let the identity requirement follow from that rather than from habit.",
    ],
    misconception:
      "“More authentication steps mean better security.” They mean more failure points, and the commonest response to a wall is not a more careful person but a person who writes the password down, reuses one, or leaves. Security decisions are trade-offs against access, and a design that locks out the legitimate person has not made anyone safer.",
    example:
      "A booking product asked people to register before seeing a price. Rebuilt: no account to browse or book, a booking reference plus phone number to look up a booking later, and an optional account for people who book often. Sign-in offered a code to phone or email, and recovery worked from either — because in the observation session a participant had changed her number and could no longer receive codes. On a shared device, “stay signed in” was off by default with the choice visible, and the confirmation screen offered “finish and sign out” explicitly. Every error message was written out: “That code has expired — request a new one” rather than “Invalid credentials”, and every failed attempt kept the phone number the person had already typed.",
    steps: [
      {
        minutes: 25,
        title: "Read the forms guidance",
        text: "Read the assigned sections on labels, instructions, validation and user notifications. List the rules you will apply to every field.",
      },
      {
        minutes: 25,
        title: "Decide what the account is for",
        text: "Write what an account gives the person, and design the path for someone who never creates one. If nothing on your list benefits the person, remove the requirement.",
      },
      {
        minutes: 30,
        title: "Draw sign-up, sign-in and recovery",
        text: "Draw all three paths on your flow, including at least one recovery route that does not depend on the lost factor, and the ending for someone with nothing left — a route to a person.",
      },
      {
        minutes: 25,
        title: "Write every message",
        text: "Write the exact wording for each error and confirmation: what happened, what to do next, and what was kept. Attach each error to its field.",
      },
      {
        minutes: 15,
        title: "Walk the shared device and pause",
        text: "Walk the flow as someone using a family member's phone: what stays signed in, who receives the code, what the next person sees. Record the changes this forces. Save the paths and the messages.",
      },
    ],
    freeToolPath:
      "Paper screens with the real message wording written on them. If you want to check the field behaviour, a single local HTML file with labelled inputs shows you what happens on a failed submission without any framework or account.",
    deliverable:
      "Sign-up, sign-in and recovery paths drawn on the flow, a stated purpose for the account with a no-account path, written wording for every error and confirmation attached to its field, and a recorded shared-device walkthrough with the changes it forced.",
    check: [
      {
        question: "Why must recovery avoid the lost factor?",
        answer:
          "Because otherwise it is not recovery. Sending a code to the phone number the person no longer has is the same wall with a friendlier label; a real recovery path uses a different factor or reaches a human.",
      },
      {
        question:
          "Why is preserving input after a failed attempt a design requirement?",
        answer:
          "Because retyping everything after one mistake is where people give up, and the mistake was usually small. Keeping what they typed also tells them the system noticed only the one problem, which is reassuring rather than punishing.",
      },
      {
        question: "When should a product not require an account?",
        answer:
          "When the account gives the person nothing they want. If a reference number and a phone number identify a booking well enough, requiring registration is an obstacle that costs bookings and buys the person nothing.",
      },
    ],
    rubric: [
      "Every field has a persistent label and a field-level error",
      "Recovery works without the lost factor",
      "The shared-device case is designed, not assumed away",
      "The account's purpose is stated or the requirement removed",
    ],
    criteria: [
      {
        criterion: "Every field has a persistent label and a field-level error",
        evidence:
          "Field-by-field wording showing labels that remain visible and error messages tied to specific fields, with input preserved.",
        levels: [
          "Placeholders used as labels, or errors only at page level.",
          "Labels present but errors generic or detached from fields.",
          "Persistent labels, field-level errors, and preserved input throughout.",
          "As adequate, and one message states what was kept so the person knows they need not retype it.",
        ],
        remediation:
          "List every field and write its label, its instruction and its error text. Any error that could apply to two fields is not yet field-level.",
        recheck: "The field-by-field table.",
      },
      {
        criterion: "Recovery works without the lost factor",
        evidence:
          "At least one recovery route using a different factor, plus a defined ending for someone with nothing left.",
        levels: [
          "Recovery depends on the lost factor.",
          "An alternative exists but is not drawn or is unavailable to your real users.",
          "A genuine alternative route and a route to a human are both on the flow.",
          "As adequate, and the design states what identity check the human route uses, so it is not simply an unspecified promise.",
        ],
        remediation:
          "Walk the flow as someone who has changed their phone number and lost the email password. Draw what they can actually do.",
        recheck: "The recovery paths on the flow.",
      },
      {
        criterion: "The shared-device case is designed, not assumed away",
        evidence:
          "A walkthrough on a borrowed or shared device with the resulting design changes recorded.",
        levels: [
          "Not considered.",
          "Mentioned without design consequences.",
          "Walked, with specific changes made — default sign-out, visible choice, sign-out prompt.",
          "As adequate, and the design considers who receives a code sent to a shared phone.",
        ],
        remediation:
          "Walk the flow twice on one device as two different people and write down everything the second person can see.",
        recheck: "The walkthrough and the changes.",
      },
      {
        criterion:
          "The account's purpose is stated or the requirement removed",
        evidence:
          "A written statement of what the account gives the person, plus a working path for someone who does not create one.",
        levels: [
          "An account is required with no stated benefit.",
          "Benefits stated but no path exists without one.",
          "Purpose stated and a no-account path is designed.",
          "As adequate, and the write-up names what the product loses by not requiring an account and accepts it.",
        ],
        remediation:
          "Write what the account does for the person, not for you. If the list is empty or entirely about your records, design the flow without it.",
        recheck: "The purpose statement and the no-account path.",
      },
    ],
    portfolio:
      "Project evidence, and a genuinely differentiating one: most junior portfolios show a sign-up screen and no recovery path. Showing the shared-device walkthrough demonstrates you design for the conditions people actually use products in.",
    resource: forms,
    resources: [
      {
        ...forms,
        section:
          "Labels, instructions, validating input and user notifications.",
        purpose:
          "Supplies the requirements every authentication field in this lesson must meet.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers form accessibility rather than authentication design; the shared-device and recovery reasoning here is the course's own. Implemented keyboard and screen-reader behaviour still needs testing in a real build.",
        fallbackId: "R10",
      },
      {
        ...errors,
        section:
          "Slips versus mistakes, prevention, and helping people recover.",
        purpose:
          "Frames a failed sign-in as a recoverable event to be designed rather than a user failure to be reported.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m07-l04-v1",
    module: "m07",
    week: 7,
    day: 4,
    level: 2,
    areas: [6],
    title: "Who may see and do what",
    objective:
      "Produce a two-role permission matrix for your product and design what each role sees when an action is unavailable, distinguishing hidden, visible-but-disabled and visible-with-a-route-to-ask.",
    bringForward:
      "Your flow, including anywhere a second person appears — someone booking for another person, an owner managing classes, a colleague with partial access.",
    why: "Any product with more than one kind of user has permissions, whether or not anyone designed them. Undesigned, they surface as dead ends and confusing absences; designed, they are one of the clearest signals that you can think about a system rather than a screen.",
    teach: [
      "The vocabulary is worth borrowing precisely, and the assigned reading supplies it: a principal is who is acting, a permission is a specific thing that may be done, a role is a named bundle of permissions, resources are arranged in a hierarchy, and access granted higher up is inherited lower down. Least privilege means giving the smallest set that lets someone do their job. That page is infrastructure documentation, not an interface pattern library, so take the model from it and design the interface yourself.",
      "The interface decision for an unavailable action has three answers and choosing badly is a common fault. Hide it when the person has no path to it and its presence would only confuse — a customer never needs to see class-management controls. Show it disabled when the person could plausibly have it and needs to know it exists, with an explanation of why it is unavailable. Show it with a route to ask when someone else can grant it, which turns a dead end into a request. A disabled control with no explanation is the worst of the three: it says no without saying why, and people conclude the product is broken.",
      "Roles drift from reality. The real world contains the person covering for someone on leave, the owner who is also an attendee, and the family member with the phone. Model roles from what people actually do, expect overlap, and check what happens when one person holds two roles at once — that is where interfaces contradict themselves, showing an owner their own class as if they were a customer and then refusing to let them book it.",
      "Permission errors need the same care as any other error, and usually get less. “Access denied” tells a person nothing about whether they took a wrong turn, need to sign in as someone else, or should ask a colleague. Write what is not permitted, why if you can say so safely, and what they can do next — including who can grant it.",
    ],
    misconception:
      "“Permissions are a back-end concern.” The model may live in the back end, and every consequence is in the interface: what appears in navigation, which controls are visible, what an unavailable action says, and whether a person can tell they are looking at a limited view rather than the whole product. Undesigned, those appear as randomness.",
    example:
      "A class provider had three real roles. Customers book and manage their own bookings. The owner manages classes and sees everyone's bookings. A helper takes attendance and sees the day's list with names, but no payment information — least privilege made concrete. The matrix showed twelve actions against three roles, and drawing it exposed two problems: nobody had decided whether a helper could cancel someone's place, which the owner did daily by message; and the owner's own view had no way to book a place as an attendee, which she also did. For unavailable actions the rule was: customers never see management controls at all; helpers see the refund control disabled with “only the owner can issue refunds — ask her”; and everyone gets a specific message rather than a generic denial.",
    steps: [
      {
        minutes: 25,
        title: "Read the permission model",
        text: "Read the assigned overview for the vocabulary: principals, permissions, roles, hierarchy, inheritance and least privilege. Write each in one sentence of your own.",
      },
      {
        minutes: 25,
        title: "List the real roles and actions",
        text: "List the kinds of people in your product from your research, and every action anyone can take. Include the actions currently done by message or in person.",
      },
      {
        minutes: 30,
        title: "Build the matrix",
        text: "Draw actions against roles and mark each cell allowed, not allowed, or undecided. The undecided cells are the finding; write what would settle each one.",
      },
      {
        minutes: 25,
        title: "Design the unavailable states",
        text: "For each not-allowed cell, choose hidden, disabled with an explanation, or a route to ask. Write the message wording for every disabled and ask case.",
      },
      {
        minutes: 15,
        title: "Test the overlap and pause",
        text: "Walk the flow as one person holding two roles. Record every contradiction. Save the matrix, the state decisions and the messages.",
      },
    ],
    freeToolPath:
      "A grid on paper or in a text table, with the message wording written beside it. No permissions tooling is involved; the artefact is a matrix and a set of written messages.",
    deliverable:
      "A permission matrix of at least two roles against every action with undecided cells marked, a hidden, disabled or ask decision for every not-allowed cell with written wording, and a recorded dual-role walkthrough.",
    check: [
      {
        question:
          "When should an unavailable action be hidden rather than disabled?",
        answer:
          "When the person has no path to it at all and its presence only raises a question with no answer. Disable it when they could plausibly obtain it and need to know it exists — and then explain why it is unavailable.",
      },
      {
        question: "What does an undecided cell in the matrix tell you?",
        answer:
          "That a real decision has never been made and is currently resolved ad hoc, usually by a person doing it manually. Those cells are the most valuable output of the exercise.",
      },
      {
        question: "Why walk the flow as someone holding two roles?",
        answer:
          "Because real people do — the owner is also an attendee, the helper is also a customer. Interfaces built on one-role-per-person contradict themselves there, and the contradiction is invisible until you walk it.",
      },
    ],
    rubric: [
      "The matrix covers real roles and every action",
      "Undecided cells are marked rather than guessed",
      "Each unavailable action has a designed state and wording",
      "The dual-role case was walked and its contradictions recorded",
    ],
    criteria: [
      {
        criterion: "The matrix covers real roles and every action",
        evidence:
          "A grid of at least two roles against every action, including actions currently performed manually or by message.",
        levels: [
          "Roles named without a matrix.",
          "A matrix covering only actions the product already has screens for.",
          "All roles and all actions, including the manual ones.",
          "As adequate, and the roles are drawn from observed behaviour rather than from job titles.",
        ],
        remediation:
          "List everything anyone does in the whole service, including by phone and message, and add each as a row.",
        recheck: "The extended matrix.",
      },
      {
        criterion: "Undecided cells are marked rather than guessed",
        evidence:
          "Cells with no settled answer marked undecided, each with what would settle it.",
        levels: [
          "Every cell filled confidently, including ones nobody has decided.",
          "Some uncertainty noted informally.",
          "Undecided cells marked with the question that would settle each.",
          "As adequate, and one undecided cell is identified as the one most likely to cause harm if guessed wrongly.",
        ],
        remediation:
          "For each allowed or denied cell, ask who decided and when. Cells where the answer is “I just did, now” are undecided.",
        recheck: "The matrix with undecided cells and questions.",
      },
      {
        criterion: "Each unavailable action has a designed state and wording",
        evidence:
          "A hidden, disabled or ask decision per not-allowed cell, with message wording for the latter two.",
        levels: [
          "Unavailable actions undefined or shown as generic denials.",
          "Decisions made but wording not written.",
          "Every not-allowed cell has a decision and, where needed, wording.",
          "As adequate, and at least one message names who can grant the permission and how to reach them.",
        ],
        remediation:
          "Write each message as what is not permitted, why where safe to say, and what to do next. Replace every generic denial.",
        recheck: "The state decisions with wording.",
      },
      {
        criterion:
          "The dual-role case was walked and its contradictions recorded",
        evidence:
          "A walkthrough as one person with two roles, listing every contradictory or nonsensical state found.",
        levels: [
          "Not walked.",
          "Walked without recording specific contradictions.",
          "Walked with contradictions recorded.",
          "As adequate, and at least one contradiction is resolved with the resolution's cost stated.",
        ],
        remediation:
          "Take the most likely double role in your product and complete a full task as that person. Write down every moment the interface disagreed with itself.",
        recheck: "The walkthrough record.",
      },
    ],
    portfolio:
      "Strong portfolio evidence for anyone aiming at B2B or internal-tool work, where permissions are most of the design. Present the matrix with the undecided cells visible; showing what was unresolved is more credible than a grid of confident ticks.",
    resource: permissions,
    resources: [
      {
        ...permissions,
        section:
          "Principals, roles, permissions, the resource hierarchy, inheritance and least privilege.",
        purpose:
          "Supplies precise vocabulary for a permission model so your matrix uses the same words engineers will.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Permission-model vocabulary only: it is cloud infrastructure documentation, not a role-based interface pattern library, so every interface decision in this lesson is the course's own.",
        fallbackId: "R19",
      },
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors.",
        purpose:
          "Sets the standard a permission message must meet: say what happened and what to do next.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics identify candidate problems; whether your wording works is a question for a usability test.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m07-l05-v1",
    module: "m07",
    week: 7,
    day: 5,
    level: 2,
    areas: [6],
    title: "Search, refine and get back to where you were",
    objective:
      "Design the browse-and-search flow through to a chosen item, including refinement, returning to results without losing them, and the paths for no results and too many results.",
    bringForward:
      "Your m06 search and filter work and your structure. That lesson designed what search should find; this one designs the journey around it.",
    why: "Finding something is not one action; it is a loop of narrowing, opening, going back and comparing. Products that treat it as a single search box lose people at the moment they return from a detail page and find their results gone.",
    teach: [
      "The loop is: express a need, see a set, narrow it, open one, judge it, and either finish or go back. The back step is the one designed least often and used most: returning to results must restore the position, the filters and the scroll place, because a person who has to rebuild their search after every look stops comparing and settles for whatever they saw first — which is a design decision you did not intend to make.",
      "Give people a way to hold candidates. Comparing three classes across four attributes exceeds what anyone will keep in their head, and the assigned reading on recognition and recall explains why: recall is expensive, recognition is cheap. A shortlist, a compare view or even keeping the last-viewed items visible converts a memory task into a looking task, and it is often the single most useful thing you can add to a browse flow.",
      "Too many results and no results are the same failure of calibration and both need designed responses. Too many means the person cannot start; suggest the narrowing dimension that would help most, and show counts so they can see the effect before committing. None means they have over-narrowed or used words you do not have; say which filter is responsible where you can, offer removing it, and offer the route that does not depend on the same words.",
      "The result item is where the whole design gets decided. It must contain exactly what people need to judge and no more — from your research, the price, the time, the place and whether there is space. Too little and everyone must open every result, which is the slowest possible loop; too much and the list becomes unscannable. This is where the m05 research pays off directly: you already know what people compared on, because you watched them.",
    ],
    misconception:
      "“Search solves browsing.” Search works for people who can name what they want. Many arrive able to describe only a situation — “something on a Saturday near me that my daughter would like” — and for them the browse structure, the filters and the result content are the entire product. Design both and let people move between them.",
    example:
      "The browse flow was redrawn as a loop after an observation showed a participant opening four classes and losing her filters each time, then booking the third because she could not face rebuilding the list. Returning to results restored filters and scroll position. Each result showed the four things she had actually compared: day and time, price, place and remaining spaces. A shortlist held candidates so she could compare without keeping them in her head. Filters showed counts, so “Saturday morning + under 500” could be seen to leave two before it was applied, and if a combination emptied the list the interface named the filter that had done it and offered to remove it.",
    steps: [
      {
        minutes: 25,
        title: "Read on memory and status",
        text: "Read the assigned article on recognition and recall and the heuristics on system status and user control. Note what each implies for returning to a result set.",
      },
      {
        minutes: 25,
        title: "Draw the loop",
        text: "Draw the flow as a loop rather than a line: express, see, narrow, open, judge, return or finish. Mark exactly what must be preserved on the return step.",
      },
      {
        minutes: 30,
        title: "Design the result item",
        text: "Decide what appears on a result, using what your participants actually compared on. Write the fields in priority order and say what you deliberately left out.",
      },
      {
        minutes: 25,
        title: "Handle both extremes",
        text: "Design the too-many-results and no-results states: what is suggested, what is shown about which filter caused it, and what route out exists that does not need the same words.",
      },
      {
        minutes: 15,
        title: "Add a way to hold candidates, then pause",
        text: "Design the lightest mechanism that lets someone compare without remembering — shortlist, compare, or recently viewed. Record why you chose that one. Save the loop and the states.",
      },
    ],
    freeToolPath:
      "Paper screens for the list, the detail and the return, with the filter state written on each so you can see what survives. Cutting the result item out as a small card and laying three side by side is the quickest way to test whether it carries enough to compare.",
    deliverable:
      "A browse-and-search flow drawn as a loop with the preserved state named on the return step, a prioritised result-item content list with deliberate omissions, designed too-many and no-results states, and a candidate-holding mechanism with its justification.",
    check: [
      {
        question: "What must be preserved when someone returns to results?",
        answer:
          "The filters, the position in the list and the scroll place. Losing them makes comparison expensive enough that people stop comparing, which quietly turns your product into one that promotes whatever appeared first.",
      },
      {
        question: "Why does a shortlist help more than it looks like it should?",
        answer:
          "Because comparing several items on several attributes is a recall task, and recall is expensive. Holding candidates where they can be seen converts it into recognition, which is close to free.",
      },
      {
        question: "How do you decide what appears on a result item?",
        answer:
          "From what people were observed comparing on. Anything not used in the comparison makes the list harder to scan; anything missing forces the person to open every result to judge it.",
      },
    ],
    rubric: [
      "The flow is drawn as a loop with a designed return",
      "Result content comes from what people compared on",
      "Too many and no results are both designed",
      "A candidate-holding mechanism is chosen and justified",
    ],
    criteria: [
      {
        criterion: "The flow is drawn as a loop with a designed return",
        evidence:
          "A loop showing narrowing, opening and returning, with the preserved state explicitly named.",
        levels: [
          "A linear search-to-detail flow.",
          "A loop drawn but the return step does not say what is preserved.",
          "The loop and the preserved state — filters, position, scroll — are both explicit.",
          "As adequate, and the design says what happens to the state when the person returns hours later or on another device.",
        ],
        remediation:
          "Walk your own flow: search, open the third result, go back. Write down everything you lost, then put each item on the return step.",
        recheck: "The loop with the preserved-state list.",
      },
      {
        criterion: "Result content comes from what people compared on",
        evidence:
          "A prioritised field list traced to research observations, with deliberate omissions stated.",
        levels: [
          "Fields chosen by what the database contains.",
          "A reasoned list, but with no trace to what people actually compared.",
          "Fields traced to observed comparison behaviour, with omissions stated.",
          "As adequate, and one field is included specifically because its absence caused someone to open every result.",
        ],
        remediation:
          "Re-read your m05 notes for the attributes participants mentioned while choosing. Those are your fields; everything else is a candidate for omission.",
        recheck: "The field list with sources.",
      },
      {
        criterion: "Too many and no results are both designed",
        evidence:
          "Designed states for both extremes, naming the responsible filter where possible and offering a route out.",
        levels: [
          "Neither designed.",
          "One designed, usually no-results.",
          "Both designed, with a route out that does not depend on the same words.",
          "As adequate, and filter counts are shown so a dead end is visible before it is chosen.",
        ],
        remediation:
          "Choose filter combinations that produce nothing and everything, and write exactly what the person sees and can do in each case.",
        recheck: "The two designed states.",
      },
      {
        criterion: "A candidate-holding mechanism is chosen and justified",
        evidence:
          "One mechanism designed, with a written reason for choosing it over the alternatives.",
        levels: [
          "No mechanism; comparison left to memory.",
          "A mechanism added without justification or heavier than the task needs.",
          "One mechanism chosen with a reason and a stated cost.",
          "As adequate, and the choice is the lightest that solves the observed comparison, with heavier options explicitly rejected.",
        ],
        remediation:
          "Write what a person is trying to hold in mind and for how long. Choose the smallest mechanism that removes that burden, then say what you rejected.",
        recheck: "The mechanism and its justification.",
      },
    ],
    portfolio:
      "Project evidence. The return-to-results detail is small, specific and immediately recognisable to an experienced reviewer as something learned from watching someone rather than from a pattern library.",
    resource: recall,
    resources: [
      {
        ...recall,
        section:
          "Recognition versus recall and the interface implications for comparison.",
        purpose:
          "Explains why holding candidates visibly beats asking people to remember them.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover Miller's limit; use the assigned Laws of UX page for chunk limits, with the caution recorded there.",
        fallbackId: "R31",
      },
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, heuristic 3, user control and freedom, and heuristic 6, recognition rather than recall.",
        purpose:
          "Gives the standards for the return step, the filter feedback and the result content.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics generate candidate problems; the loop design here is settled by your own observation evidence.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m07-l06-v1",
    module: "m07",
    week: 7,
    day: 6,
    level: 2,
    areas: [6],
    title: "Commitment, payment and the uncertain wait",
    objective:
      "Design the commitment step through to confirmation, including a review before committing, every state the wait can be in, and what a person sees when they do not know whether their money left.",
    bringForward:
      "Your flow with its wait nodes, and any m05 evidence about payment — the observed session, anything a participant said about not knowing whether something worked.",
    why: "This is the step where a design failure costs someone real money, and where uncertainty makes people act: they press again, they pay twice, they ring, they stop trusting the product. Everything else in the flow can be improved later; this has to be right the first time.",
    teach: [
      "Show everything being committed to before the commitment. The assigned check-answers pattern exists for exactly this: a single review of what has been entered and chosen, with a way to change each part, immediately before the irreversible step. The total must include everything — no charges appearing after the button — and anything that is a commitment rather than a payment, such as a place held for twenty minutes or a cancellation deadline, belongs on the same screen in the same plain words.",
      "The wait has states and each one needs its own message. Submitted-not-yet-confirmed, confirmed, failed-and-nothing-taken, and the worst one: unknown, where the request left and no answer came back. Unknown is not an error; it is a state the person is in, and they need to be told what is true so far — “we have not confirmed your payment. Do not pay again. We will message you within an hour, and here is your reference” — because the alternative is a second payment made out of anxiety, which is a real cost you designed.",
      "Design for the connection people actually have. Throttle your prototype to a slow profile with the cache disabled and watch what appears first and how long the gap between action and feedback lasts, using the browser tools you already have. A spinner that is honest for two seconds is dishonest at twenty; long waits need a message that says what is happening, an assurance about the money, and a way to check later that does not depend on this page staying open — because on a poor connection it will not.",
      "Never let the same action be taken twice by accident. Disable the button on submission, but treat that as the weak defence it is: people close tabs, hit back, resend forms and press once more when nothing appears to happen. The strong defence is that the second identical request is recognised and does nothing new, which is a decision to agree with an engineer, and which belongs in your flow annotation because it is the difference between a slip and a double charge.",
    ],
    misconception:
      "“The confirmation screen is the end of the flow.” It is the middle. People screenshot it, forward it, look for it in email, come back three days later to check, and arrive at the class holding a phone with no signal. The confirmation must exist somewhere that survives the tab closing, and your flow should show where it lives afterwards and how it is retrieved.",
    example:
      "The commitment step became a review screen listing class, date, time, place, total, what is included, the cancellation deadline in plain words, and a change link beside each. The pay button carried the exact amount. Four wait states were designed after the m05 observation of a woman standing at a window waiting: pending said what was happening and told her not to pay again; failed said nothing had been taken and offered a retry that kept her details; unknown gave a reference, a promise of a message within an hour and a number to ring. Confirmation gave the reference first, sent it by message, and stated that it could be found later with the reference and phone number — no account needed. Throttled to a slow connection, the pending message arrived before any styling, which was the point of writing it as text rather than an animation.",
    steps: [
      {
        minutes: 25,
        title: "Read the review pattern",
        text: "Read the assigned check-answers pattern and the error-prevention article. Note what the pattern shows before commitment and how it lets people change each part.",
      },
      {
        minutes: 25,
        title: "Design the review screen",
        text: "List everything being committed to, including money, time, place and any deadline or held place. Design the review with a change route for each item and the exact total on the button.",
      },
      {
        minutes: 30,
        title: "Design the four wait states",
        text: "Write the screen and message for pending, confirmed, failed and unknown. For unknown, state what is true, what not to do, when they will hear and how to check.",
      },
      {
        minutes: 25,
        title: "Throttle and watch",
        text: "Load your prototype or a comparable page on a slow throttled connection with the cache disabled. Record what appears first, how long the feedback gap is, and what you would do differently.",
      },
      {
        minutes: 15,
        title: "Prevent the double action and pause",
        text: "Write how a repeated identical request is prevented from doing anything twice, and where the confirmation lives after the tab closes. Save the review, the states and the throttling notes.",
      },
    ],
    freeToolPath:
      "Paper screens with the full message wording, plus any browser's own developer tools for the throttling check — no account, extension or paid service. If you have no prototype yet, throttle any comparable live page and record what a slow connection does to feedback timing.",
    deliverable:
      "A review screen listing every commitment with change routes and an exact total, written screens for pending, confirmed, failed and unknown states, throttled-connection observations, and a stated mechanism for preventing a duplicate action plus where the confirmation lives afterwards.",
    check: [
      {
        question: "Why is the unknown state the most important one to design?",
        answer:
          "Because it is where people act on anxiety. Told nothing, they pay again, ring, or both. Told what is true, what not to do and when they will hear, they wait — and the double charge you would otherwise have caused never happens.",
      },
      {
        question: "Why is disabling the submit button not enough?",
        answer:
          "Because it only stops one of the ways a request repeats. Back buttons, closed tabs, resubmitted forms and impatient second attempts all bypass it, so the request itself has to be recognised as a repeat and do nothing new.",
      },
      {
        question:
          "What does a throttled connection reveal that a fast one hides?",
        answer:
          "The real length of the gap between action and feedback, and what arrives first. A design that feels instant on your connection can leave someone staring at an unchanged screen for twenty seconds, which is when they press again.",
      },
    ],
    rubric: [
      "Everything committed to is shown before the commitment",
      "Pending, confirmed, failed and unknown are all designed",
      "The design was checked on a throttled connection",
      "Duplicate actions are prevented beyond disabling a button",
    ],
    criteria: [
      {
        criterion: "Everything committed to is shown before the commitment",
        evidence:
          "A review screen listing money, time, place, inclusions and deadlines, each with a route to change it, and an exact total on the action.",
        levels: [
          "The commitment happens with no review.",
          "A review showing some items, or a total that changes afterwards.",
          "Everything shown with change routes and an exact total.",
          "As adequate, and non-money commitments such as a cancellation deadline are stated in plain words rather than linked to.",
        ],
        remediation:
          "List everything a person is agreeing to, including anything they cannot undo later. Anything missing from the review must be added or removed from the commitment.",
        recheck: "The review screen with the complete list.",
      },
      {
        criterion: "Pending, confirmed, failed and unknown are all designed",
        evidence:
          "Written screens and messages for all four, with the unknown state saying what is true, what not to do and when they will hear.",
        levels: [
          "Only success and a generic error.",
          "Three states, with unknown treated as an error.",
          "All four designed, with the unknown state's three elements present.",
          "As adequate, and each state says explicitly what has happened to the money.",
        ],
        remediation:
          "Write the unknown state first, as though to someone who has just paid and seen nothing. Then check the other three say what happened to their money too.",
        recheck: "The four state designs.",
      },
      {
        criterion: "The design was checked on a throttled connection",
        evidence:
          "Recorded observations from a slow throttled load with the cache disabled: what appeared first and how long feedback took.",
        levels: [
          "Not checked.",
          "Checked informally without recording what appeared or how long it took.",
          "Checked with specific observations recorded.",
          "As adequate, and one change was made because of what the throttled load showed.",
        ],
        remediation:
          "Run the load again with throttling on and the cache disabled, and write down the sequence and the timings rather than the impression.",
        recheck: "The throttling notes and any resulting change.",
      },
      {
        criterion: "Duplicate actions are prevented beyond disabling a button",
        evidence:
          "A stated mechanism by which a repeated identical request does nothing new, plus where the confirmation is retrievable afterwards.",
        levels: [
          "No prevention, or the button state only.",
          "Prevention mentioned without a mechanism to agree with an engineer.",
          "A specific mechanism stated, and the confirmation's later location defined.",
          "As adequate, and the design says how a person retrieves the confirmation with no account and no email.",
        ],
        remediation:
          "Write the sentence you would say to an engineer about what should happen if the same request arrives twice. Then write where the confirmation lives after the tab closes.",
        recheck: "The mechanism note and retrieval route.",
      },
    ],
    portfolio:
      "Strong project evidence. Payment uncertainty states are rarely designed in student work and are immediately recognisable as real product thinking. Present the four states together; the unknown one is the interesting artefact.",
    resource: patterns,
    resources: [
      {
        ...patterns,
        section:
          "The check answers pattern and the related multi-step task patterns.",
        purpose:
          "Supplies a proven structure for reviewing everything before an irreversible step.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Government patterns cover submission rather than payment, and their visual style is not a universal aesthetic; the payment and wait-state design here is the course's own.",
        fallbackId: "R02",
      },
      {
        ...throttling,
        section:
          "Throttling profiles and disabling the cache.",
        purpose:
          "Provides the account-free way to see what your design does on the connection people actually have.",
        minutes: "10–20 selected",
        limits:
          "Free documentation, no account; any Chromium browser works. Verified 2026-09-06. Throttling simulates bandwidth and latency, not an unreliable connection that drops entirely — test that by turning the network off mid-action.",
        fallbackId: "R16",
      },
    ],
  },
  {
    id: "m07-l07-v1",
    module: "m07",
    week: 7,
    day: 7,
    level: 2,
    areas: [6],
    title: "The paths where things go wrong",
    objective:
      "Produce an exception table for your whole flow listing at least twelve failure cases, each classified as a slip or a mistake, with its prevention, its message and its recovery route.",
    bringForward:
      "Your complete flow with its states and waits. Every decision point and every wait is a place something can go wrong; this lesson makes that list exhaustive rather than intuitive.",
    why: "The difference between a product people trust and one they abandon is almost entirely in what happens when something goes wrong. Happy paths are easy and everybody designs them; the exception table is the work.",
    teach: [
      "The assigned reading separates slips from mistakes, and the distinction decides the response. A slip is when someone knew what to do and their hands or attention failed — the wrong date tapped, a digit missed, the wrong button on a crowded screen. A mistake is when the person's model was wrong — they believed booking held a place, or that cancelling was free. Slips are prevented by design: bigger targets, sensible defaults, confirmation of consequential actions, forgiving formats. Mistakes are prevented by explanation and feedback: telling people what is true before they act on their assumption.",
      "Generate the list systematically rather than by imagination. Walk your flow and at every node ask four questions: what if the input is wrong, what if the system fails, what if the person leaves and comes back, and what if someone else changed something meanwhile. That last one produces the failures nobody thinks of — the place taken while they were deciding, the class cancelled while they were paying, the price changed between two screens.",
      "Every message needs three things and most have one. What happened, in the person's terms rather than the system's. What it means for them — is their money safe, is their place held, is the work they did lost. And what to do next, as an action they can take now. “Something went wrong” has none of the three; “We could not reach the payment service. Nothing has been taken and your place is held for ten more minutes — try again or pay later with this reference” has all three.",
      "Recovery beats prevention where the cost of prevention is a worse experience for everyone. A confirmation dialogue on every action prevents rare slips and irritates people constantly; an undo that works for a few minutes costs nothing until it is needed. Prefer undo where the action can be reversed, confirmation where it truly cannot, and neither where the action is trivial — and write down which you chose and why, because this is one of the decisions reviewers most often ask you to defend.",
    ],
    misconception:
      "“Error handling is a development detail.” The message text, the state the person is left in and the route back are design decisions with a direct cost in abandoned tasks and support calls. Left to be written during implementation, they become the database's vocabulary, which is how people meet the word “invalid” in a product they are trying to buy something from.",
    example:
      "An exception table for a booking flow reached nineteen rows. Slips: wrong date tapped on a crowded calendar — prevented with larger targets and the day name shown beside the number; a mistyped phone number — prevented by a forgiving format and an echo of what was entered. Mistakes: believing a held place was a booking — prevented by naming the state on screen and in the message; believing cancellation was free — prevented by stating the deadline on the review screen. Concurrency: the last place taken while the person was on the payment screen, which had never been considered, and which produced the worst message in the product until it was written properly. Undo was chosen for cancelling a booking within five minutes; confirmation was reserved for the one genuinely irreversible action; nothing else got either.",
    steps: [
      {
        minutes: 25,
        title: "Read on slips and mistakes",
        text: "Read the assigned article on preventing user errors and the recovery heuristic. Write the difference between a slip and a mistake in your own words, with one example from your own flow for each.",
      },
      {
        minutes: 35,
        title: "Walk every node with four questions",
        text: "At each node ask: wrong input, system failure, person leaves and returns, someone else changed something. Write down every case, including the ones that seem unlikely.",
      },
      {
        minutes: 25,
        title: "Classify and choose the response",
        text: "Mark each case slip or mistake, then choose prevention, undo, confirmation or recovery only — with a reason. Prefer undo to confirmation where the action can be reversed.",
      },
      {
        minutes: 25,
        title: "Write the messages",
        text: "For each case write what happened, what it means for the person and what to do next. No message may use system vocabulary or leave the money question unanswered.",
      },
      {
        minutes: 10,
        title: "Rank and pause",
        text: "Rank the cases by how much harm they do, not by how likely they are. Mark the three you would fix first. Save the table.",
      },
    ],
    freeToolPath:
      "A table on paper or in a text file with one row per failure. Writing the message text in full is the required part — an exception table listing cases without their wording is a list of problems rather than a design.",
    deliverable:
      "An exception table of at least twelve cases, each classified slip or mistake, with the chosen response and its reason, full message wording covering what happened, what it means and what to do next, and a harm ranking with three cases marked to fix first.",
    check: [
      {
        question: "Why does the slip-or-mistake classification matter?",
        answer:
          "Because they need different responses. A slip is answered by making the right action easier and the wrong one recoverable; a mistake is answered by correcting what the person believes, which no amount of bigger buttons will do.",
      },
      {
        question:
          "When should you prefer undo over a confirmation dialogue?",
        answer:
          "Whenever the action can be reversed. Confirmation taxes everyone on every action to prevent a rare slip; undo costs nothing until someone needs it, and it is there for the person who confirmed by reflex too.",
      },
      {
        question: "What must every error message answer?",
        answer:
          "What happened, what it means for them — especially about money, time and lost work — and what to do next. A message missing the second is the one that generates a phone call.",
      },
    ],
    rubric: [
      "At least twelve cases generated systematically, not by intuition",
      "Each case is classified slip or mistake",
      "Responses are chosen with a stated reason",
      "Every message says what happened, what it means and what to do",
    ],
    criteria: [
      {
        criterion:
          "At least twelve cases generated systematically, not by intuition",
        evidence:
          "A table covering every node against the four questions, including concurrency cases.",
        levels: [
          "A handful of obvious errors.",
          "A longer list, but generated ad hoc and missing whole classes such as concurrency.",
          "Twelve or more from a systematic walk, including someone-else-changed-it cases.",
          "As adequate, and at least one case is one you would not have thought of without the four-question walk, and is marked as such.",
        ],
        remediation:
          "Go back through the flow node by node with the four questions written in front of you. Do not skip nodes that feel safe; the wait states usually hide the worst cases.",
        recheck: "The extended exception table.",
      },
      {
        criterion: "Each case is classified slip or mistake",
        evidence:
          "A classification per row, consistent with the definitions, with the response following from it.",
        levels: [
          "No classification.",
          "Classified inconsistently, or all cases treated as slips.",
          "Every case classified and the response follows from the class.",
          "As adequate, and one case is identified as both — a slip made likely by a mistaken belief — with both addressed.",
        ],
        remediation:
          "For each case ask whether the person intended the right thing. If they did, it is a slip; if their belief was wrong, it is a mistake.",
        recheck: "The classified table.",
      },
      {
        criterion: "Responses are chosen with a stated reason",
        evidence:
          "Prevention, undo, confirmation or recovery-only chosen per case, with a reason and no blanket use of confirmation.",
        levels: [
          "Responses missing, or confirmation applied everywhere.",
          "Responses chosen without reasons.",
          "Each response has a reason, with undo preferred where reversal is possible.",
          "As adequate, and at least one case is deliberately left unprevented because prevention would cost everyone more than the failure costs.",
        ],
        remediation:
          "For every confirmation dialogue, ask whether the action could simply be undone instead. Replace the ones that could.",
        recheck: "The response column with reasons.",
      },
      {
        criterion:
          "Every message says what happened, what it means and what to do",
        evidence:
          "Full wording per case, in the person's vocabulary, answering the money and lost-work questions where they apply.",
        levels: [
          "Messages missing or written as system errors.",
          "Wording present but missing what it means for the person.",
          "All three elements in every message, in plain words.",
          "As adequate, and one message is written for the worst case — unknown outcome — and says what not to do.",
        ],
        remediation:
          "Read each message as someone who has just lost twenty minutes of work or six hundred rupees. Add whatever you would want to know first.",
        recheck: "The message column.",
      },
    ],
    portfolio:
      "The exception table is one of the most useful things you can show. It is unglamorous and instantly credible: it demonstrates that you design the parts nobody demos, which is what separates product designers from people who make screens.",
    resource: errors,
    resources: [
      {
        ...errors,
        section:
          "Slips versus mistakes, the gulfs of execution and evaluation, affordances, signifiers, feedback and undo.",
        purpose:
          "Supplies the classification this lesson is built on and the range of responses available.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options to choose between, not a checklist to apply wholesale; the concurrency cases are this lesson's addition.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 5, error prevention, and heuristic 9, help users recognise, diagnose and recover from errors.",
        purpose:
          "Sets the standard each message and recovery route is written against.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic identifies a candidate problem; whether your message works is a question for the usability test in lesson 13.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m07-l08-v1",
    module: "m07",
    week: 7,
    day: 8,
    level: 2,
    areas: [7],
    title: "From flow to low-fidelity wireframes",
    objective:
      "Turn one branch of your flow into low-fidelity wireframes for every screen it touches, each carrying its real content in priority order and none carrying visual styling.",
    bringForward:
      "Your flow, your exception table and your m06 labels. The wireframes take their words from the labelling table, not from new invention.",
    why: "A wireframe exists to make the structure of a screen arguable before anyone spends time on how it looks. Its usefulness comes entirely from being cheap enough to throw away, which is why the fidelity is low on purpose rather than because you have not finished.",
    teach: [
      "Low fidelity means the arrangement and the priority are decided and nothing else is. Boxes, real words, sizes that show relative importance — no colour decisions, no type choices, no icon sets, no borrowed component library. The discipline is protective: the moment a wireframe starts looking finished, feedback shifts to the colours and away from whether the screen contains the right things in the right order, which is the only question it can answer.",
      "Real content, always. Placeholder text hides every problem a wireframe exists to find: the label that is three words too long, the price that needs a qualifier, the empty state nobody wrote. Use the labels from your m06 table and the message wording from your exception table, and where you do not yet know what the words are, write “unknown — needs a decision” rather than filling the space with something plausible.",
      "Design each screen around its one job. A screen usually exists to let a person do one thing and understand one state, and the content order should follow: the thing they came for first, what they need to judge it second, the action third, supporting material last. Write the job at the top of each wireframe. A screen with two jobs is usually two screens, or one screen that will test badly in both roles.",
      "Wireframe the exceptions too, not only the happy path. Your exception table names states — pending, unavailable, empty, permission-denied — and each is a screen a person will actually see. Drawing them at low fidelity costs minutes and reveals immediately whether your layout has anywhere to put a two-line explanation, which is the commonest reason error messages end up somewhere useless.",
    ],
    misconception:
      "“Wireframes are just ugly versions of the final design.” They are a different instrument. A wireframe answers what is on the screen and in what order; a visual design answers how it feels and where the eye goes. Skipping the first because you can do the second quickly means the ordering questions get settled by whatever looked balanced.",
    example:
      "One branch — find a class, review it, commit, wait, confirm — produced nine wireframes including four states from the exception table. The class detail screen was drawn twice: once with the description first, as the product had it, and once with what to bring, price and time first, as the research said people compared on. Drawn at low fidelity the second version obviously worked better on a small screen, and the argument took four minutes instead of a week. The pending state got its own frame, which immediately showed that the layout had nowhere sensible for a three-line reassurance message — a problem discovered with a pencil rather than in code.",
    steps: [
      {
        minutes: 25,
        title: "Read on prototype fidelity",
        text: "Read the assigned page on making prototypes and choosing fidelity. Write what a low-fidelity artefact can answer and what it cannot.",
      },
      {
        minutes: 25,
        title: "List the screens and their jobs",
        text: "From one branch of your flow, list every screen including the exception states. Write the single job of each in one sentence.",
      },
      {
        minutes: 35,
        title: "Draw with real content",
        text: "Draw each screen using real labels and real message wording, ordered by priority. Mark anything you do not yet know as an open decision rather than inventing it.",
      },
      {
        minutes: 20,
        title: "Draw one screen two ways",
        text: "Take the screen you are least sure about and draw a second version with a different content order. Note what each favours.",
      },
      {
        minutes: 15,
        title: "Check against the flow and pause",
        text: "Walk the branch screen by screen and confirm every state in your flow has a frame and every prerequisite is available when asked for. Save the set with the open decisions listed.",
      },
    ],
    freeToolPath:
      "Paper, a pencil and one pen weight for emphasis. This is the recommended route, not a fallback: hand-drawn frames stay low fidelity by nature, which keeps feedback on structure. If you prefer digital, use a plain shape tool without a component library, and if you want a vector version later, hand-written SVG needs only a text editor.",
    deliverable:
      "Low-fidelity wireframes for every screen and state in one branch, each with its job written at the top and real content in priority order, one screen drawn in two content orders with a comparison, and a list of open content decisions.",
    check: [
      {
        question: "Why avoid placeholder text?",
        answer:
          "Because it hides the problems the wireframe exists to find: labels that are too long, values needing qualifiers, and words nobody has written yet. A screen full of lorem ipsum tests a layout that will never exist.",
      },
      {
        question: "Why keep the fidelity deliberately low?",
        answer:
          "Because feedback follows finish. A polished frame draws comments about colour and spacing, while the questions a wireframe can actually settle — what is here and in what order — go unasked.",
      },
      {
        question: "Why wireframe the error and empty states?",
        answer:
          "Because people see them, and because drawing them shows immediately whether the layout has room for the explanation they need. That discovery costs minutes on paper and days in code.",
      },
    ],
    rubric: [
      "Every screen and state in the branch has a frame",
      "Real content is used and unknowns are marked",
      "Each screen states its single job",
      "One screen is drawn in two content orders and compared",
    ],
    criteria: [
      {
        criterion: "Every screen and state in the branch has a frame",
        evidence:
          "A frame set covering the happy path and the exception states from your table, checked against the flow.",
        levels: [
          "Happy path only.",
          "Some states included, chosen by convenience.",
          "Every screen and state in the branch has a frame.",
          "As adequate, and the check found a state in the flow with no frame, which was then drawn.",
        ],
        remediation:
          "List the states from your flow and tick off each frame. Draw the missing ones, however uninteresting they look.",
        recheck: "The complete frame set with the checklist.",
      },
      {
        criterion: "Real content is used and unknowns are marked",
        evidence:
          "Frames carrying labels and messages from your earlier work, with open decisions marked rather than filled with plausible text.",
        levels: [
          "Placeholder text throughout.",
          "Real content in places, invented text elsewhere.",
          "Real content throughout, with unknowns explicitly marked.",
          "As adequate, and at least one layout change was forced by the true length of a real label.",
        ],
        remediation:
          "Replace every invented string with either the real label from your m06 table or the words “unknown — needs a decision”.",
        recheck: "The frames with the open-decision list.",
      },
      {
        criterion: "Each screen states its single job",
        evidence:
          "A one-sentence job written on every frame, with any two-job screen identified.",
        levels: [
          "No jobs stated.",
          "Jobs written as screen names.",
          "Every frame has a one-sentence job.",
          "As adequate, and a screen doing two jobs is identified and either split or justified.",
        ],
        remediation:
          "For each frame complete “this screen lets someone …”. Frames needing “and” are candidates for splitting.",
        recheck: "The frames with job statements.",
      },
      {
        criterion:
          "One screen is drawn in two content orders and compared",
        evidence:
          "Two versions of one screen with a written note on what each favours and which was chosen.",
        levels: [
          "One version only.",
          "Two versions with no comparison.",
          "Two versions compared on what each favours, with a choice.",
          "As adequate, and the comparison references the research about what people compared on.",
        ],
        remediation:
          "Take the screen you are least sure about and reorder its content deliberately. Write which task each order serves better.",
        recheck: "The two versions and the comparison.",
      },
    ],
    portfolio:
      "Case-study material, especially the two-order comparison: showing an alternative you rejected and why is far more persuasive than showing one design that appears to have arrived complete.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section:
          "Choosing the fidelity of a prototype and what each level can be used to learn.",
        purpose:
          "Establishes what a low-fidelity artefact can and cannot answer, which is the discipline of this lesson.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for government service prototypes; the fidelity reasoning transfers, the delivery context does not. A paper click-through cannot validate performance, real data or implemented accessibility.",
        fallbackId: "R05",
      },
      {
        ...patterns,
        section:
          "One or two patterns matching screens in your branch, read for content order rather than for visual style.",
        purpose:
          "Gives worked examples of what belongs on a step of a multi-step task and in what order.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Do not copy the government visual style or brand; take the structure and the content order only.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m07-l09-v1",
    module: "m07",
    week: 7,
    day: 9,
    level: 2,
    areas: [7],
    title: "The same screen at three widths",
    objective:
      "Take two screens to mid fidelity at narrow, medium and wide widths, stating for each what reflows, what changes priority, what is hidden and what must never move.",
    bringForward:
      "Your low-fidelity frames and the m03 type scale and spacing work. Mid fidelity means real proportions and real text lengths, still without final visual design.",
    why: "A screen is not one layout. Deciding how it behaves across widths is a design decision that gets made either by you or by whatever the browser does when nobody decided — and the second reliably produces a phone layout that hides the thing people came for.",
    teach: [
      "Reflow is not shrinking. As the width narrows, content re-orders and re-groups rather than becoming smaller: a side panel moves below or above the main content, a row of cards becomes a column, a table becomes a set of records. The design question is what order things take when stacked, and the answer comes from the screen's job — the thing the person came for goes first, whatever it did on the wide layout.",
      "Decide the three behaviours explicitly for every element: reflow, change priority, or hide. Hiding is the one to be careful with. Content hidden on narrow screens is content unavailable to the people most likely to be on a phone, and the common pattern of hiding “secondary” material on mobile frequently hides exactly what a first-time visitor needed. If something is genuinely unnecessary on a small screen, ask honestly whether it is necessary on a large one.",
      "Some things must never move. The price, the total, the primary action, the state of the thing — anything a person is tracking must remain reachable and visible at every width, and its position should be predictable across the set of screens. This is where a stated rule beats case-by-case judgement: write down the elements that are fixed in the hierarchy and design the rest around them.",
      "Mid fidelity means real proportions and real text at real lengths, on a real grid, and still no final colour, imagery or type personality. That is enough to answer whether the layout works, which is the question at this stage, and not so much that feedback moves to aesthetics. Test with the longest real label you have, not the average one, and check what happens when the reader has enlarged their text — which the m03 lesson already taught you to do.",
    ],
    misconception:
      "“Design the desktop layout and then adapt it for mobile.” Adapting downward tends to preserve the desktop's priorities and squeeze them, which is how a phone screen ends up with a hero image, three navigation rows and the price below the fold. Deciding the narrow layout first forces the priority question honestly, and widening from there is easier than the reverse.",
    example:
      "The class detail screen at three widths. Narrow: title, date and time, price, what to bring, book action, then description — the order the research supported, with the image moved below the action because nobody had ever mentioned it. Medium: two columns, with the same four items still first in reading order. Wide: a side panel holding price, date and the action, sticky as the description scrolls. The never-move rule was written down — price, date, action and remaining places are visible at every width — and one element was hidden on narrow: a related-classes list, which was checked honestly and moved to the end rather than removed, since a first-time visitor might well want it.",
    steps: [
      {
        minutes: 25,
        title: "Read on responsive layout",
        text: "Read the assigned responsive chapters and the layout and spacing guidance. Note the difference between reflowing content and scaling a layout.",
      },
      {
        minutes: 25,
        title: "Write the rules first",
        text: "Before drawing, write which elements must never move, which may change priority and which may be hidden. Justify every hide.",
      },
      {
        minutes: 35,
        title: "Draw narrow, then wide",
        text: "Draw both screens at a narrow width first, then medium, then wide, using real text at its longest. Keep the never-move elements visible in all three.",
      },
      {
        minutes: 20,
        title: "Test the hard cases",
        text: "Check the longest label, the enlarged-text case from your m03 work, and what happens when an image fails to load. Record what breaks.",
      },
      {
        minutes: 15,
        title: "Write the behaviour notes and pause",
        text: "For each screen write what reflows, what changes priority and what is hidden at each width, in words a developer could implement from. Save the three versions and the notes.",
      },
    ],
    freeToolPath:
      "Paper at three sizes — a phone-width column, a half sheet and a full sheet — is enough, and drawing the narrow one first is the point. If you prefer to see real reflow, a single local HTML file with a few CSS rules shows it honestly at every width with no account, install or design tool.",
    deliverable:
      "Two screens drawn at three widths with real text at its longest, a written never-move, may-reprioritise and may-hide rule set with justified hides, results from the long-label, enlarged-text and failed-image checks, and behaviour notes a developer could work from.",
    check: [
      {
        question: "What is wrong with hiding secondary content on mobile?",
        answer:
          "That the people most likely to be on a phone then have less than everyone else, and “secondary” is usually judged from the wide layout. If it is genuinely unnecessary on a small screen, that is a reason to question whether it belongs on the large one.",
      },
      {
        question: "Why design the narrow layout first?",
        answer:
          "Because it forces the priority question. Adapting a wide layout downward tends to preserve its assumptions and compress them, which is how the thing people came for ends up below the fold.",
      },
      {
        question: "Why test with the longest real label rather than the average?",
        answer:
          "Because the longest one is what breaks the layout, and it exists. Designing to the average guarantees a broken screen for the real content you already know about — and worse after translation.",
      },
    ],
    rubric: [
      "Rules for never-move, reprioritise and hide are written first",
      "Both screens are drawn at three widths with real text",
      "Long labels, enlarged text and a failed image were checked",
      "Behaviour notes are specific enough to implement from",
    ],
    criteria: [
      {
        criterion: "Rules for never-move, reprioritise and hide are written first",
        evidence:
          "A written rule set produced before the drawings, with a justification for each hidden element.",
        levels: [
          "No rules; each screen decided ad hoc.",
          "Rules written after the fact to describe what was drawn.",
          "Rules written first, with every hide justified.",
          "As adequate, and one intended hide was rejected after the justification could not be written.",
        ],
        remediation:
          "List the elements a person tracks through the task — price, state, action — and declare them never-move. Then justify every remaining hide in one sentence each.",
        recheck: "The rule set with justifications.",
      },
      {
        criterion: "Both screens are drawn at three widths with real text",
        evidence:
          "Six drawings using real content at its longest, with the narrow version drawn first.",
        levels: [
          "One width, or wide-first with narrow adapted.",
          "Three widths but with shortened or placeholder text.",
          "Three widths for both screens with real text at its longest.",
          "As adequate, and the medium width is a genuine decision rather than an interpolation between the other two.",
        ],
        remediation:
          "Redraw the narrow version first from the content priority, then widen. Use your longest real label everywhere it appears.",
        recheck: "The six drawings.",
      },
      {
        criterion: "Long labels, enlarged text and a failed image were checked",
        evidence:
          "Recorded results for all three checks, with specific breakages named.",
        levels: [
          "No checks.",
          "One or two checks, or results described impressionistically.",
          "All three checked with specific breakages named.",
          "As adequate, and at least one breakage was repaired and re-checked.",
        ],
        remediation:
          "Run each check and write the breakages as concrete sentences — what overlaps, what truncates, what disappears — rather than as “it gets cramped”.",
        recheck: "The check results and any repair.",
      },
      {
        criterion: "Behaviour notes are specific enough to implement from",
        evidence:
          "Per-screen notes stating what reflows, what changes priority and what is hidden at each width, in implementable terms.",
        levels: [
          "No notes.",
          "Notes describing intent without stating what happens at which width.",
          "Specific per-width behaviour a developer could work from.",
          "As adequate, and the notes state the reading order at narrow width, not only the visual arrangement.",
        ],
        remediation:
          "Write each note as “at narrow, X moves above Y; Z is hidden; the action remains visible”. Anything vaguer will be decided by someone else.",
        recheck: "The behaviour notes.",
      },
    ],
    portfolio:
      "Project evidence, and one of the clearest signals of craft: three widths of the same screen with written behaviour rules shows you design behaviour rather than pictures. Include the enlarged-text check; almost nobody does.",
    resource: responsive,
    resources: [
      {
        ...responsive,
        section:
          "The layout and typography chapters, read for reflow and content priority rather than for code.",
        purpose:
          "Supplies the reasoning about how layouts respond to width rather than scale with it.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Its examples are web-focused; the priority reasoning applies to any medium, and reading it is not the same as having tested a real layout.",
        fallbackId: "R15",
      },
      {
        ...styles,
        section:
          "The layout and spacing sections.",
        purpose:
          "Gives a worked spacing and grid vocabulary to keep proportions consistent across the three widths.",
        minutes: "30–45 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Rebuild the reasoning; do not copy government branding, and treat its aesthetic as one considered option rather than a standard.",
        fallbackId: "R03",
      },
    ],
  },
  {
    id: "m07-l10-v1",
    module: "m07",
    week: 7,
    day: 10,
    level: 2,
    areas: [7],
    title: "Every state a component can be in",
    objective:
      "Specify one interactive component and one whole screen in every state they can occupy — default, focus, loading, empty, error, success, disabled and unavailable — with what triggers each and what the person can do in it.",
    bringForward:
      "Your wireframes, your exception table and the m03 component state work. This lesson makes states a deliverable rather than something discovered during development.",
    why: "Unspecified states are decided by whoever implements them, usually at speed, and that is where most of the small failures in a product come from: the button that looks enabled and does nothing, the list that appears broken when it is merely empty, the form that gives no sign it was submitted.",
    teach: [
      "A component's states are a list you can enumerate rather than a matter of judgement: default, hover where a pointer exists, focus for keyboard users, active while being pressed, loading, disabled, and error. Focus is the one most often forgotten, and it is the only way a keyboard user knows where they are — an interface where focus is invisible is unusable without a mouse, however it looks. Specify what changes in each state and never signal a state with colour alone, since the difference must survive being seen in greyscale.",
      "A screen has states too, and they are not the same list: empty, partially loaded, fully loaded, error, permission-denied, offline and success-after-action. Each needs its own content, not merely a spinner: an empty list should say what will appear and how to start it, an error should say what happened and what to do, and a successful action should say what changed and what is possible next. Your exception table already wrote most of this wording; this lesson places it.",
      "State what triggers each state and what leaves it. A loading state that has no defined end is how an interface hangs forever; an error state with no route out is a dead end. Write each as a small table — trigger, appearance, what the person can do, what ends it — because that is the form a developer can build from and a reviewer can check, and because writing it exposes the states you had not decided.",
      "Disabled and unavailable are different and the distinction matters more than it sounds. Disabled means not yet: something must be completed first, and the interface should say what. Unavailable means not for you, or not now, which is the permission and availability work from earlier lessons. A disabled control with no explanation is read as a broken product, and it is the single most common state failure in student work.",
    ],
    misconception:
      "“States are visual details for the UI stage.” They are behaviour, and they change what a person can do. Deciding them at the visual stage means deciding them by appearance — what looks good greyed out — rather than by what a person needs to know at that moment, which is why so many disabled buttons never explain themselves.",
    example:
      "The book-a-place button was specified in eight states. Default. Focus, with a visible outline that is not colour alone. Loading, showing that the request is in progress with the label changed rather than replaced by a spinner alone. Disabled before a date is chosen, with the reason beside it — “choose a date first” — rather than a silent grey. Unavailable when the class is full, with the alternative-dates route from the flow. Error after a failed submission, keeping everything the person had entered. Success, naming the reference. And offline, saying the action will not be attempted until the connection returns. The screen was specified in seven states, and the empty one — no classes this week — was the one nobody had drawn, which had been showing as a blank panel.",
    steps: [
      {
        minutes: 25,
        title: "Enumerate the states",
        text: "Read the assigned heuristics on status and error recovery. List every state your chosen component and screen can be in; aim for completeness before judging which matter.",
      },
      {
        minutes: 30,
        title: "Specify the component",
        text: "For each component state write the trigger, what changes visually, what the person can do and what ends it. Ensure no state is signalled by colour alone and that focus is visible.",
      },
      {
        minutes: 30,
        title: "Specify the screen",
        text: "Do the same for the whole screen, including empty, partially loaded, error, permission-denied, offline and success. Place the wording from your exception table.",
      },
      {
        minutes: 20,
        title: "Find the dead ends",
        text: "Check every state has a way out and every loading state has a defined end, including timeout. Fix any state a person could be stuck in.",
      },
      {
        minutes: 15,
        title: "Check greyscale and keyboard, then pause",
        text: "View the states in greyscale and confirm each is still distinguishable. Walk the screen by keyboard order and confirm focus is always visible. Record what you could not verify on paper.",
      },
    ],
    freeToolPath:
      "A state table plus a small sketch per state; photocopying or photographing in greyscale is the cheapest way to run the colour check. A local HTML file with a few CSS rules lets you check real focus behaviour, which paper cannot show — record it as untested if you do not build it.",
    deliverable:
      "State tables for one component and one screen, each row giving trigger, appearance, available actions and exit; a greyscale check; a keyboard focus check or a statement that it was not verified; and a list of any dead ends found and fixed.",
    check: [
      {
        question: "Why is focus state not optional?",
        answer:
          "Because it is how a keyboard user knows where they are. Without a visible focus indicator the interface is unusable without a pointer, regardless of how it looks to someone using a mouse.",
      },
      {
        question: "What is the difference between disabled and unavailable?",
        answer:
          "Disabled means not yet — something must be done first, and the interface should say what. Unavailable means not for you or not now. Conflating them produces a control that says no without saying why.",
      },
      {
        question: "Why must every loading state have a defined end?",
        answer:
          "Because otherwise the interface can wait forever and the person has no idea whether to keep waiting. A timeout with a message and a route out is part of the state, not an implementation detail.",
      },
    ],
    rubric: [
      "Component and screen states are both enumerated completely",
      "Each state has a trigger, an appearance, actions and an exit",
      "Disabled and unavailable are distinguished and explained",
      "Greyscale and focus checks were run or explicitly not verified",
    ],
    criteria: [
      {
        criterion: "Component and screen states are both enumerated completely",
        evidence:
          "Two state lists covering the standard states plus offline, permission-denied and empty where they apply.",
        levels: [
          "Default and one or two others.",
          "A reasonable component list but no screen states.",
          "Both enumerated, including empty, offline and permission-denied.",
          "As adequate, and a state specific to your product is identified and specified.",
        ],
        remediation:
          "Work through the standard list and mark each state as applicable or not, with a reason for each not. States excluded without a reason are usually the ones that were forgotten.",
        recheck: "The two complete lists.",
      },
      {
        criterion: "Each state has a trigger, an appearance, actions and an exit",
        evidence:
          "A table row per state with all four columns filled.",
        levels: [
          "States named only.",
          "Appearance described but triggers or exits missing.",
          "All four columns filled for every state.",
          "As adequate, and every loading state names its timeout behaviour.",
        ],
        remediation:
          "Fill the exit column first: any state you cannot say how a person leaves is a potential dead end, and that is the row to fix.",
        recheck: "The completed state tables.",
      },
      {
        criterion: "Disabled and unavailable are distinguished and explained",
        evidence:
          "Separate specifications for the two, each with wording explaining why the control cannot be used.",
        levels: [
          "One greyed state covering both, unexplained.",
          "Distinguished but at least one lacks an explanation.",
          "Both specified with explanations in the interface.",
          "As adequate, and the unavailable case offers the alternative route from your flow.",
        ],
        remediation:
          "For every disabled control write the sentence that appears beside it saying what must happen first. If no sentence is possible, the control should probably not be shown yet.",
        recheck: "The two specifications with wording.",
      },
      {
        criterion:
          "Greyscale and focus checks were run or explicitly not verified",
        evidence:
          "A greyscale check of all states and a keyboard focus check, or a written statement of what could not be verified on paper.",
        levels: [
          "Neither run nor mentioned.",
          "One run; the other assumed to pass.",
          "Both run, or honestly recorded as unverifiable in the current medium.",
          "As adequate, and a state that failed the greyscale check was repaired with a second signal added.",
        ],
        remediation:
          "Photograph or photocopy the states in greyscale and look for any pair you can no longer tell apart. Add a second signal — a label, an icon, a border weight — to each.",
        recheck: "The greyscale results and the focus check or its limitation.",
      },
    ],
    portfolio:
      "Portfolio material and a strong interview artefact: a state table is concrete, checkable and rare in junior work. Present it alongside the screen it belongs to rather than as a separate specification.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 9, error recovery, read as the requirements every state must satisfy.",
        purpose:
          "Sets what a person must be told in each state, which is what turns a list of states into a specification.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics do not enumerate states; the state list and the disabled-versus-unavailable distinction are the course's own.",
        fallbackId: "R11",
      },
      {
        ...errors,
        section:
          "Feedback, signifiers and recovery.",
        purpose:
          "Explains why a state without feedback is read as a broken product and what recovery each failure state owes.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. Prevention techniques are options rather than a checklist; the greyscale and focus checks come from the accessibility resources used in m03 and m06.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m07-l11-v1",
    module: "m07",
    week: 7,
    day: 11,
    level: 2,
    areas: [6, 7],
    title: "The wireflow: one artefact someone else could build from",
    objective:
      "Combine the flow, the screens and the state specifications into a single annotated wireflow, and have it read by someone who was not involved, recording every question they had to ask you.",
    bringForward:
      "The flow, the wireframes at three widths, the exception table and the state specifications. This lesson joins them; it should not require new design decisions, and anywhere it does is a gap worth finding.",
    why: "Four separate artefacts that only make sense together, in your head, are not a deliverable. A wireflow is the form a designer's work actually travels in — to an engineer, to a reviewer, to yourself in three months — and the test of it is whether someone else can follow it without you in the room.",
    teach: [
      "A wireflow is the flow diagram with each node replaced by, or linked to, the screen a person sees there, annotated with the transitions and the conditions. It answers three questions at once: what happens in what order, what the person sees at each point, and what causes each move. Kept as three separate documents those answers drift apart, and the drift is invisible until an engineer builds from the one that is out of date.",
      "Annotate what is not visible in a picture. What is required and what is optional, what happens on submission, what the back behaviour is, what is preserved when a person returns, what the timeout is, which elements never move across widths, and what happens when a request fails. These are the questions an engineer will otherwise ask you one at a time over a week, or decide alone if you are not available.",
      "Mark what is decided and what is not. A wireflow claiming completeness while three labels are still guesses invites everyone to build on them, and the guesses become facts by being drawn confidently. Use an explicit open-questions list on the artefact itself, carrying the guesses from your m06 change note, the undecided permission cells and any content nobody has written — that list is a feature of a good handover, not an admission.",
      "Version it and date it. The moment work is shared, several copies exist, and the commonest handover failure is not a missing annotation but two people looking at different versions confidently. A date, a version and a one-line note of what changed since the last one costs nothing and prevents an entire class of expensive confusion.",
    ],
    misconception:
      "“I will explain it in the handover meeting.” The meeting produces agreement in the room and nothing durable; the person building it two weeks later works from the artefact and their memory of a conversation. Anything that matters must survive on the page, and the meeting is best spent on the open questions rather than on narrating what the page already says.",
    example:
      "The wireflow assembled from a booking branch was one long sheet: nineteen nodes, nine screens attached at the nodes they belong to, transitions labelled with their conditions, and a margin column of annotations — required fields, back behaviour, what is preserved on return, the payment timeout, the never-move elements. It carried a dated version line and an open-questions list of six items, including two labels still marked as guesses and the refund rule that had never existed. A friend who had never seen the project read it and asked four questions, all recorded: what happens if the class is cancelled by the provider, whether the held place survives closing the browser, what the helper role sees on the day, and what “pending” means to a person who has never seen the word in that context. Three became design work; the fourth became a wording change.",
    steps: [
      {
        minutes: 25,
        title: "Read on prototype purpose",
        text: "Read the assigned prototype guidance and the patterns you used. Note what a shared artefact has to carry that a conversation does not.",
      },
      {
        minutes: 35,
        title: "Assemble the wireflow",
        text: "Place each screen at its node, label every transition with its condition, and include the exception states. Keep it on one sheet or one continuous document.",
      },
      {
        minutes: 25,
        title: "Annotate the invisible",
        text: "Add annotations for required and optional fields, submission behaviour, back behaviour, preserved state, timeouts, never-move elements and failure handling.",
      },
      {
        minutes: 20,
        title: "List what is still open",
        text: "Write the open-questions list on the artefact: guessed labels, undecided permissions, unwritten content, untested assumptions. Date and version the whole thing.",
      },
      {
        minutes: 15,
        title: "Have it read, then pause",
        text: "Give it to someone who was not involved and ask them to talk through what happens. Record every question they ask without answering until they finish. Save the artefact and the question list.",
      },
    ],
    freeToolPath:
      "Paper laid out on a table and photographed in sections, or a single Markdown document with the screens as images and the annotations as text — the second is easier to version and reads well on a phone. No handoff platform is involved anywhere in this module.",
    deliverable:
      "One dated, versioned wireflow with screens at their nodes, conditions on every transition, annotations for the non-visible behaviour, an open-questions list, and a recorded list of the questions an uninvolved reader had to ask.",
    check: [
      {
        question: "What belongs in an annotation rather than in a drawing?",
        answer:
          "Everything a picture cannot show: what is required, what happens on submission and on back, what is preserved, timeouts, and what happens when a request fails. Left out, each becomes a question or an unrecorded decision by someone else.",
      },
      {
        question: "Why list what is still undecided?",
        answer:
          "Because a confident-looking artefact turns guesses into facts. An explicit open list tells the reader which parts to build on and which to check, which makes the whole thing more trustworthy rather than less.",
      },
      {
        question:
          "Why record the reader's questions instead of answering them immediately?",
        answer:
          "Because each question marks something the artefact failed to say, and answering it in the room repairs the reader's understanding while leaving the document broken for the next person.",
      },
    ],
    rubric: [
      "Screens, transitions and conditions are in one artefact",
      "Non-visible behaviour is annotated",
      "Open questions are listed on the artefact",
      "An uninvolved reader's questions were recorded",
    ],
    criteria: [
      {
        criterion: "Screens, transitions and conditions are in one artefact",
        evidence:
          "A single document placing each screen at its node with every transition labelled by its condition, including exception states.",
        levels: [
          "Separate documents that only cohere in the designer's head.",
          "Combined but with transitions unlabelled or exception states omitted.",
          "One artefact with screens, labelled transitions and exception states.",
          "As adequate, and system-driven transitions are visually distinguished from ones the person initiates.",
        ],
        remediation:
          "Lay the flow out and attach each frame at its node. Any transition you cannot label with a condition is a decision that has not been made.",
        recheck: "The assembled wireflow.",
      },
      {
        criterion: "Non-visible behaviour is annotated",
        evidence:
          "Annotations covering required and optional fields, submission, back behaviour, preserved state, timeouts and failure handling.",
        levels: [
          "No annotations.",
          "Some annotations, mostly restating what the drawing shows.",
          "All the non-visible behaviours annotated.",
          "As adequate, and each annotation is written as something implementable rather than as an intention.",
        ],
        remediation:
          "Go through your own screens asking what an engineer would have to guess. Write an annotation for each guess.",
        recheck: "The annotated artefact.",
      },
      {
        criterion: "Open questions are listed on the artefact",
        evidence:
          "A visible list of guesses, undecided items and unwritten content, carried forward from earlier lessons, with a date and version.",
        levels: [
          "No open list; everything presented as settled.",
          "A list exists but omits known guesses from earlier work.",
          "A complete open list, dated and versioned.",
          "As adequate, and each open item names who or what would settle it.",
        ],
        remediation:
          "Collect the guesses from your m06 change note, the undecided permission cells and any unwritten content, and put them on the artefact.",
        recheck: "The open-questions list with the version line.",
      },
      {
        criterion: "An uninvolved reader's questions were recorded",
        evidence:
          "A list of the questions someone not involved had to ask, with what each will change.",
        levels: [
          "Not read by anyone else.",
          "Read, but questions answered in conversation and not recorded.",
          "Questions recorded, each with what it changes in the artefact.",
          "As adequate, and the artefact was revised and re-read, with the second reader's questions also recorded.",
        ],
        remediation:
          "Ask someone to narrate what happens from the artefact alone. Write down every point where they stop, without helping until they have finished.",
        recheck: "The question list and the resulting revisions.",
      },
    ],
    portfolio:
      "The single most reusable artefact from this module. A wireflow with annotations and an honest open-questions list is what a hiring reviewer means when they ask whether you can hand work over.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section:
          "What a prototype is for and what it must communicate to the people who build from it.",
        purpose:
          "Frames the wireflow as a communication artefact rather than a drawing exercise.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers prototypes rather than handover documents specifically; the annotation list here is the course's own.",
        fallbackId: "R05",
      },
      {
        ...patterns,
        section:
          "The patterns used in your branch, re-read for the behaviour each specifies beyond its layout.",
        purpose:
          "Shows the level of behavioural detail a documented pattern carries, as a standard for your annotations.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Take the specification habit and the structure; the visual style is a government design system and not a universal standard.",
        fallbackId: "R02",
      },
    ],
  },
  {
    id: "m07-l12-v1",
    module: "m07",
    week: 7,
    day: 12,
    level: 2,
    areas: [6, 7],
    title: "Walk it with someone: the paper prototype test",
    objective:
      "Run a moderated paper prototype test of two tasks with at least three participants, recording where each person hesitated, what they expected next and every place they went somewhere you had not drawn.",
    bringForward:
      "The wireflow and the open-questions list. Test the tasks your open questions bear on, not the parts you are confident about.",
    why: "Everything so far has been reasoning. This is the first time a person meets the design, and paper is enough: the failures that matter at this stage are about order, wording and expectation, all of which show up on a sheet of paper as clearly as in a built product.",
    teach: [
      "The assigned guidance covers running a moderated session, and three habits carry most of the value. Give a task and a situation rather than instructions — “you want to book the Saturday class for you and your sister” — and then stop talking. When the person asks what something does, ask what they expect it to do. And when they are stuck, wait: the pause before you rescue them is where you learn what the design failed to communicate.",
      "You are the computer, and you must be a dumb one. Show only what the design would show, respond only as it would, and resist explaining. If they tap something you have not drawn, that is a finding — write down what they expected to happen — and it is the most valuable result a paper test produces, because it shows the parts of the flow that exist in your head and nowhere else.",
      "Record expectation, not just outcome. Before a screen changes, ask what they think will happen; afterwards, ask whether it did. A mismatch between expected and actual is the mechanism behind most usability failures, and it is invisible if you record only whether the task was completed. Note hesitations with the same care you did in the tree test — a completed task done anxiously is not a success.",
      "Three participants will show you the serious problems, and this is a formative test rather than a measurement: no scores, no success rates, no comparison to a benchmark. What you are producing is a ranked list of problems with evidence, and the ranking should be by harm — what stops someone, costs them money, or loses their work — rather than by how often you saw it in three sessions.",
    ],
    misconception:
      "“Paper is too crude; people cannot judge it.” People judge tasks, not fidelity, and they will tell you plainly that they cannot find the price on a piece of paper. What paper does change is what they comment on: they critique structure and wording rather than colours, which at this stage is exactly what you want.",
    example:
      "Three sessions, two tasks, printed frames on a table. All three participants tried to tap the price to see what it included, which nothing in the design had anticipated — the single most valuable finding, and it came from an interaction that did not exist. Two hesitated at the review screen because the cancellation deadline was written as a date and they wanted to know how many days that was. One went back looking for the results list and found it gone, which confirmed the return-state problem from the browse lesson in a way no reasoning had. Nobody commented on the fact that the screens were pencil drawings. The problems were ranked by harm: losing the result set first, the deadline wording second, the unanticipated price tap third.",
    steps: [
      {
        minutes: 25,
        title: "Prepare the tasks and the kit",
        text: "Read the assigned session guidance. Write two task scenarios aimed at your open questions, print or lay out your frames, and extend your consent introduction to cover a design session.",
      },
      {
        minutes: 20,
        title: "Rehearse being the computer",
        text: "Run the tasks yourself, moving the paper as the design dictates. Note anywhere you would have to improvise a screen; draw those before the first session.",
      },
      {
        minutes: 40,
        title: "Run three sessions",
        text: "With consent, run both tasks with three participants. Ask what they expect before each change, wait during hesitation, and never explain. Record expectation, action, outcome and doubt.",
      },
      {
        minutes: 20,
        title: "Record the undrawn moments",
        text: "Immediately write every place a participant tried something you had not designed, with what they expected. These are your missing screens and interactions.",
      },
      {
        minutes: 15,
        title: "Rank by harm and pause",
        text: "List the problems and rank them by harm, not frequency. Note the participant count and route. If nobody consented, record the gap and keep the tasks and kit as the deliverable.",
      },
    ],
    freeToolPath:
      "Printed or hand-drawn frames, a table and a pen. Moving paper by hand is the whole method and it costs nothing; a clickable prototype adds nothing at this fidelity and takes an evening you could spend running a third session.",
    deliverable:
      "Two task scenarios tied to open questions, session records for at least three participants covering expectation, action, outcome and hesitation, a list of undrawn interactions people attempted, and a problem list ranked by harm with the sample stated.",
    check: [
      {
        question: "A participant asks what a button does. What do you say?",
        answer:
          "“What do you expect it to do?” Their answer is the finding. Explaining it repairs this session and hides the fact that the design did not communicate it.",
      },
      {
        question:
          "Why record what people expected before the screen changed?",
        answer:
          "Because the gap between expectation and outcome is the mechanism behind most usability failures. Recording only completion tells you that something went wrong, never what.",
      },
      {
        question:
          "Someone tapped something you never drew. What kind of result is that?",
        answer:
          "One of the best available at this stage. It shows an interaction people expect to exist, and it maps exactly onto a part of the flow that lives only in your head.",
      },
    ],
    rubric: [
      "Tasks are scenarios aimed at open questions",
      "Expectation and hesitation are recorded, not just outcomes",
      "Undrawn interactions people attempted are captured",
      "Problems are ranked by harm with the sample stated",
    ],
    criteria: [
      {
        criterion: "Tasks are scenarios aimed at open questions",
        evidence:
          "Two task scenarios describing a situation and goal, each traceable to an item on the open-questions list.",
        levels: [
          "Tasks are instructions naming the controls to use.",
          "Scenarios written but aimed at parts of the design you were already confident about.",
          "Both are situational and target real open questions.",
          "As adequate, and one task deliberately begins from a non-obvious entry point drawn from your flow.",
        ],
        remediation:
          "Take two items from your open-questions list and write the situation in which a person would meet each. Remove any control names from the wording.",
        recheck: "The two task scenarios with their open questions.",
      },
      {
        criterion:
          "Expectation and hesitation are recorded, not just outcomes",
        evidence:
          "Session records showing what each participant expected before a change, what happened and where they hesitated.",
        levels: [
          "Completion recorded only.",
          "Some commentary but no systematic expectation capture.",
          "Expectation, action, outcome and hesitation recorded throughout.",
          "As adequate, and at least one completed task is marked as a problem because of the doubt involved.",
        ],
        remediation:
          "In the next session, ask “what do you think will happen?” before every screen change and write the answer verbatim.",
        recheck: "The session records.",
      },
      {
        criterion: "Undrawn interactions people attempted are captured",
        evidence:
          "A list of everything participants tried that the design did not include, with what they expected it to do.",
        levels: [
          "Not captured.",
          "Noted informally without what was expected.",
          "Captured with the expectation for each.",
          "As adequate, and at least one is designed as a result, with the change traced to the sessions.",
        ],
        remediation:
          "Re-read your notes for every moment you had to say “that does not do anything”. Each is a row on this list.",
        recheck: "The undrawn-interaction list.",
      },
      {
        criterion: "Problems are ranked by harm with the sample stated",
        evidence:
          "A ranked problem list ordered by harm, with participant count and recruitment route attached.",
        levels: [
          "An unordered list, or one ordered by how often it appeared in three sessions.",
          "Ranked but with no sample statement.",
          "Ranked by harm with the sample stated.",
          "As adequate, and the ranking distinguishes problems that stop a task from those that merely slow it.",
        ],
        remediation:
          "For each problem write what it costs the person — the task, money, time, trust — and order by that. Then add the sample line.",
        recheck: "The ranked list with the sample statement.",
      },
    ],
    portfolio:
      "Real evidence, and a complete loop when shown with the repair in the next lesson. Photographs of a paper test in progress, anonymised, with a ranked problem list, are among the most credible artefacts in a junior portfolio.",
    resource: usability,
    resources: [
      {
        ...usability,
        section:
          "Planning and running a session, writing tasks and moderating without leading.",
        purpose:
          "Supplies the moderation discipline this lesson practises, including how to respond when a participant asks for help.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for sessions with a built prototype and a note-taker; alone and on paper, run fewer tasks and record less rather than claiming more.",
        fallbackId: "R12",
      },
      {
        ...prototypes,
        section:
          "What a paper prototype can and cannot validate.",
        purpose:
          "Keeps the claims from this test inside what paper can support — order, wording and expectation, not performance or real data.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. A paper click-through cannot validate implemented accessibility, timing, real content volumes or performance; state that beside any finding.",
        fallbackId: "R05",
      },
    ],
  },
  {
    id: "m07-l13-v1",
    module: "m07",
    week: 7,
    day: 13,
    level: 2,
    areas: [6, 7],
    title: "Repair, re-test and write the decision record",
    objective:
      "Repair the two highest-harm problems from your test, re-test them with someone new, and write a decision record for the whole module stating each significant decision, its evidence, its alternatives and what remains untested.",
    bringForward:
      "The ranked problem list, the wireflow and every open question. This lesson closes the module the way m05 and m06 closed: with a repair that was checked and a record another person could act on.",
    why: "A test that changes nothing was a way of spending three people's time. And a set of design decisions whose reasoning exists only in your memory cannot be defended in a review, handed over, or explained in an interview — which is where most of this work will eventually be judged.",
    teach: [
      "Repair the highest-harm problems, not the easiest ones. There is always a wording fix that takes ten minutes and a structural problem that takes an afternoon, and the ten-minute fix is tempting because it produces visible progress. Rank by harm, repair the top two, and record the rest honestly as known and unfixed — a known unfixed problem is a normal state for a real product, and pretending otherwise is what makes a case study unbelievable.",
      "Re-test with someone new. A person who has already seen the design cannot tell you whether the new version is clearer; they can only tell you whether they remember it. Re-test only the affected tasks, with fresh participants, and predict beforehand what should change — a prediction written in advance is what turns a re-test into evidence rather than a confirmation exercise.",
      "The decision record is the artefact that keeps its value longest. For each significant decision: what was decided, what evidence supports it, what alternatives were rejected and why, and what remains untested. Written properly it is the spine of a case study, the answer to “why did you do that?” in an interview, and the thing that stops a future team re-running an argument you already settled with evidence.",
      "Be exact about what this module did and did not establish. You have tested a paper prototype with a handful of people on two tasks. You have not established that the flow works at volume, on a real connection with real content, for people unlike your participants, or with assistive technology. Some of those come later in the course; all of them belong in the record now, because the gap between what was tested and what is claimed is the single most common failure in a design portfolio.",
    ],
    misconception:
      "“The case study should show the design improving until it works.” A record showing one repair that worked, one that did not, and three known problems left unfixed is more credible and more useful than a narrative of steady improvement. Reviewers who have shipped products recognise the second as fiction.",
    example:
      "The two highest-harm problems were repaired: results were preserved on return, and the cancellation deadline was rewritten as “free to cancel until Thursday 10 am — 3 days before the class”. Predicted outcomes were written first: people should return to their filtered list and continue comparing, and nobody should ask how many days. Re-tested with two new participants, the first prediction held and the second did not — both still asked, because the class date itself was not visible on that screen, which was a different problem than the one repaired. That was recorded rather than repaired again in the same breath. The decision record ran to twenty-two entries, of which five were marked as guesses, three as known unfixed problems, and one — the refund rule — as still not existing at all, four lessons after it was first discovered.",
    steps: [
      {
        minutes: 25,
        title: "Choose and predict",
        text: "Take the top two problems by harm. For each write what you will change and what should happen in the re-test if the change works.",
      },
      {
        minutes: 30,
        title: "Repair",
        text: "Make the two changes in the wireflow and any affected screens and states. Change nothing else, so the re-test can attribute the result.",
      },
      {
        minutes: 25,
        title: "Re-test with someone new",
        text: "Run the affected tasks with at least one and preferably two people who have not seen the design. Record expectation, action, outcome and doubt as before.",
      },
      {
        minutes: 25,
        title: "Write the decision record",
        text: "For every significant decision in this module write what was decided, the evidence, the rejected alternatives and what is untested. Include the decisions your test contradicted.",
      },
      {
        minutes: 15,
        title: "State the limits and pause",
        text: "Write what this module established and what it did not — volume, real content, connection, participants unlike yours, assistive technology. Save the record with the wireflow.",
      },
    ],
    freeToolPath:
      "A written record in plain text or Markdown, one entry per decision. Keeping it as text means it can be searched, versioned and pasted into a case study later; a decision record inside a design file is one you will not find when you need it.",
    deliverable:
      "Two repairs with predictions written in advance, re-test records from at least one new participant, a decision record covering every significant decision with evidence, alternatives and untested aspects, and a written statement of what the module did not establish.",
    check: [
      {
        question: "Why write the prediction before the re-test?",
        answer:
          "Because afterwards any result can be read as an improvement. A prediction written first makes the re-test capable of failing, which is what makes it evidence.",
      },
      {
        question:
          "Why re-test with someone new rather than the same participant?",
        answer:
          "Because a person who has seen the design already knows where things are. They can tell you whether they remember it, not whether it is now clearer to someone arriving fresh.",
      },
      {
        question:
          "What should a decision record say about problems you did not fix?",
        answer:
          "That they exist, how much harm they do and why they were not fixed. Known unfixed problems are the normal state of a real product; hiding them makes everything else in the record less believable.",
      },
    ],
    rubric: [
      "The two highest-harm problems were repaired, not the easiest",
      "Predictions were written before the re-test",
      "The decision record carries evidence, alternatives and gaps",
      "The limits of what was established are stated plainly",
    ],
    criteria: [
      {
        criterion: "The two highest-harm problems were repaired, not the easiest",
        evidence:
          "Repairs addressing the top of the harm ranking, with unfixed problems recorded.",
        levels: [
          "Only quick fixes made.",
          "One high-harm repair and one convenience fix.",
          "Both repairs address the top of the harm ranking, with the rest recorded as known.",
          "As adequate, and the record states what it would take to fix the highest remaining problem.",
        ],
        remediation:
          "Re-read your harm ranking and check what you actually changed. If the top two are untouched, repair them now and record why you started elsewhere.",
        recheck: "The repairs against the ranking.",
      },
      {
        criterion: "Predictions were written before the re-test",
        evidence:
          "A written prediction per repair, produced before the sessions, with the actual outcome beside it.",
        levels: [
          "No predictions.",
          "Predictions written after the sessions.",
          "Predictions written first with outcomes recorded against them.",
          "As adequate, and a prediction that failed is analysed rather than explained away.",
        ],
        remediation:
          "Write the prediction now for any repair not yet re-tested, then run it. For repairs already tested, mark honestly that the prediction was retrospective.",
        recheck: "The predictions and outcomes.",
      },
      {
        criterion: "The decision record carries evidence, alternatives and gaps",
        evidence:
          "An entry per significant decision with what was decided, the evidence, the rejected alternatives and what remains untested.",
        levels: [
          "A summary of the final design.",
          "Decisions listed with evidence but no alternatives or gaps.",
          "All four elements per entry, including guesses marked as guesses.",
          "As adequate, and at least one entry records a decision your own test contradicted, with what you did about it.",
        ],
        remediation:
          "Go through the wireflow and write one entry per decision. Entries with an empty evidence column are guesses and must be marked.",
        recheck: "The decision record.",
      },
      {
        criterion: "The limits of what was established are stated plainly",
        evidence:
          "A written statement naming what was not tested: volume, real content, real connection, different participants and assistive technology.",
        levels: [
          "Findings written as though the design is validated.",
          "A general note about limited testing.",
          "Specific untested aspects named, including who was not represented.",
          "As adequate, and the statement names which untested aspect is most likely to change a decision, and where in the course it will be addressed.",
        ],
        remediation:
          "List everything a real product meets that your paper test did not, then write the two sentences you would want a reviewer to read before believing anything else.",
        recheck: "The limitations statement.",
      },
    ],
    portfolio:
      "This is the module's case-study spine, and the point where the research-led project has a documented design with tested decisions. Present the record with its guesses and unfixed problems intact; a design story with no unresolved parts reads as invented to anyone who has shipped anything.",
    resource: prototypes,
    resources: [
      {
        ...prototypes,
        section:
          "Deciding what to change after testing, and what a prototype at this fidelity can support.",
        purpose:
          "Keeps the repair and the claims inside what a paper test can license.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not cover decision records, which are this lesson's own; nothing here validates performance, real data volumes or implemented accessibility.",
        fallbackId: "R05",
      },
      {
        ...heuristics,
        section:
          "All ten, used once as a final review pass over the repaired wireflow.",
        purpose:
          "Provides a last structured sweep for problems your two tasks did not touch, clearly separated from tested findings.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic finding is an expert opinion, not evidence: record any issue found this way in a separate list from the tested problems.",
        fallbackId: "R11",
      },
    ],
  },
];
