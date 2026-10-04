import type { RecordData } from "../shared/record";

// The recommended core path (improvement plan, 4 October 2026). All 224
// lessons stay published as a library; this path is one route through them for
// the stated learner — a graphic designer with strong visual skills and no
// technical background — with a visible reason for every lesson. Choosing it
// never erases work: full-library progress is still counted and shown, and a
// lesson outside the path keeps every answer it already holds.
//
// The path is a recommendation to test with the learner, not evidence that it
// is sufficient. Its order follows the module prerequisites.

export type PathStage = {
  id: string;
  title: string;
  purpose: string;
  evidence: string;
  lessons: { id: string; why: string }[];
};

// Visual-refresh lessons a working graphic designer may skip by showing an
// existing artefact against the lesson's criteria. Contrast, reflow, tokens
// for handoff and interaction states are kept: they are the usual gaps.
export const skippableLessons = new Set(["m03-l01-v1", "m03-l02-v1", "m03-l05-v1", "m03-l06-v1"]);

export const coreStages: PathStage[] = [
  {
    id: "start",
    title: "Start and orientation",
    purpose: "Learn the habits that separate product design from making screens, and close one small loop.",
    evidence: "One small problem frame, a flow with recovery and a first revised design.",
    lessons: [
      { id: "week1-day1-v1", why: "The habit everything rests on: keep what a screen shows apart from what you assume about people." },
      { id: "week1-day2-v1", why: "Stops you polishing a fix before anyone knows the problem." },
      { id: "week1-day4-v1", why: "Flows with failure and recovery are the first real difference from poster or social design." },
      { id: "week1-day5-v1", why: "Your visual strength applied to a task, plus the labels and focus order every screen needs." },
      { id: "week2-day1-v1", why: "Turns “do some research” into one small study that could change a decision." },
      { id: "week2-day2-v1", why: "Lets anyone trace a finding back to what was actually observed." },
      { id: "week2-day4-v1", why: "A paper prototype that answers one question instead of a polished mock-up." },
      { id: "week2-day5-v1", why: "Closes your first loop: test, change one thing and report without overclaiming." },
    ],
  },
  {
    id: "understand",
    title: "Understand a problem",
    purpose: "Plan honest research, make sense of it, structure information and design flows with recovery. Use the supplied case whenever you cannot recruit people.",
    evidence: "An evidence log, competing problem frames and a tested flow with recovery.",
    lessons: [
      { id: "m04-l01-v1", why: "Explains why people misread interfaces: the model they bring is not the one you built." },
      { id: "m04-l03-v1", why: "Gives you words for why a control looks pressable and whether it tells people it worked." },
      { id: "m04-l04-v1", why: "Designing for errors you caused is everyday product work, not an edge case." },
      { id: "m04-l06-v1", why: "Turns feature requests into needs so more than one solution can compete." },
      { id: "m04-l08-v1", why: "Teaches the smallest test that could change your mind before you build." },
      { id: "m05-l01-v1", why: "A short list of research questions keeps every later method honest." },
      { id: "m05-l02-v1", why: "Matches each question to a method you can genuinely run alone." },
      { id: "m05-l03-v1", why: "Desk and competitive review works even when nobody is available to interview." },
      { id: "m05-l05-v1", why: "Consent and a data plan you will actually keep come before any real person." },
      { id: "m05-l06-v1", why: "Interviews that produce evidence rather than agreement — rehearse first, then run one if you can." },
      { id: "m05-l10-v1", why: "Turns a pile of notes into findings with counts, contradictions and honest limits." },
      { id: "m05-l13-v1", why: "A one-page report someone can act on is how research earns its time." },
      { id: "m06-l01-v1", why: "You cannot structure content you have not inventoried." },
      { id: "m06-l02-v1", why: "Labels in people's own words are the cheapest findability fix." },
      { id: "m06-l04-v1", why: "Comparing two sitemaps against tasks is the core information-architecture decision." },
      { id: "m06-l07-v1", why: "A paper tree test checks whether people can find things before anything is drawn." },
      { id: "m06-l08-v1", why: "Turns test results into one bounded change instead of a redesign." },
      { id: "m06-l10-v1", why: "Headings and regions are structure screen-reader users rely on — accessibility early, not late." },
      { id: "m07-l01-v1", why: "One end-to-end flow with entry points, decisions and exits anchors the project." },
      { id: "m07-l03-v1", why: "Sign-in and recovery are where safety and usability meet; you will design them in every product." },
      { id: "m07-l06-v1", why: "The commitment step and the uncertain wait are where trust is won or lost." },
      { id: "m07-l07-v1", why: "An exception table — slips, mistakes and system faults — finds failures before users do." },
      { id: "m07-l08-v1", why: "Low-fidelity wireframes with real content, in priority order." },
      { id: "m07-l09-v1", why: "The same screen at three widths: responsive decisions made on purpose." },
      { id: "m07-l10-v1", why: "Specifying every state a component can be in is what engineers need most from a designer." },
      { id: "m07-l12-v1", why: "Walking a paper prototype with someone is the first real usability test." },
      { id: "m07-l13-v1", why: "Repair, re-test and a decision record show how your thinking changed." },
    ],
  },
  {
    id: "make",
    title: "Make and test",
    purpose: "Refresh visual craft (skip what you can already show), build interface states, check accessibility and test a prototype.",
    evidence: "A usable prototype, test notes and a justified revision, with accessibility checks you ran yourself.",
    lessons: [
      { id: "m03-l01-v1", why: "Type scales for screens. Skippable: show an existing artefact that already meets the criteria." },
      { id: "m03-l02-v1", why: "Readability on small screens. Skippable with an existing artefact that meets the criteria." },
      { id: "m03-l03-v1", why: "Colour that still works without colour — an accessibility gap even for experienced designers." },
      { id: "m03-l04-v1", why: "Measured contrast you can defend; impressions are not ratios." },
      { id: "m03-l05-v1", why: "Gestalt grouping and where it misleads. Skippable with an existing artefact." },
      { id: "m03-l06-v1", why: "Spacing as a system. Skippable with an existing artefact that meets the criteria." },
      { id: "m03-l07-v1", why: "Layouts that reflow instead of being clipped — the main gap moving from print to screens." },
      { id: "m03-l09-v1", why: "One component in all of its states, built from your own decisions." },
      { id: "m08-l01-v1", why: "What added fidelity decides, and what it hides." },
      { id: "m08-l03-v1", why: "Action hierarchy as a decision for this task and evidence, with real target sizes." },
      { id: "m08-l04-v1", why: "Forms at production quality: labels, help and errors that keep what people typed." },
      { id: "m08-l07-v1", why: "When an interruption is justified and what to use instead." },
      { id: "m08-l08-v1", why: "System messages that tell people what happened and what to do next." },
      { id: "m08-l09-v1", why: "Empty, loading and error states are where products feel broken or careful." },
      { id: "m08-l12-v1", why: "Assemble screens and critique them against evidence, not taste." },
      { id: "m09-l02-v1", why: "Every action needs immediate feedback; try the working example." },
      { id: "m09-l04-v1", why: "Reduced motion is part of the design, not an afterthought." },
      { id: "m09-l06-v1", why: "Keyboard behaviour specified key by key." },
      { id: "m09-l07-v1", why: "Where focus goes when things change decides whether keyboard users stay oriented." },
      { id: "m09-l08-v1", why: "Drag needs both a keyboard route and a no-drag pointer route." },
      { id: "m09-l10-v1", why: "Saving without a button: editable, saving, saved and failed must all be visible." },
      { id: "m10-l01-v1", why: "Build the cheapest prototype that answers the question." },
      { id: "m10-l02-v1", why: "A clickable prototype without an account, and an honest list of what it fakes." },
      { id: "m10-l03-v1", why: "Test tasks that do not give away the answer." },
      { id: "m10-l04-v1", why: "Consent and session setup before testing with anyone real." },
      { id: "m10-l05-v1", why: "Moderating without rescuing participants keeps your strongest findings." },
      { id: "m10-l06-v1", why: "Ranked problems with counts and cost, not a list of opinions." },
      { id: "m10-l07-v1", why: "What three or five sessions can and cannot claim." },
      { id: "m10-l08-v1", why: "Repair with a prediction written first, then re-test." },
      { id: "m10-l12-v1", why: "Close the first project into one evidence trail." },
      { id: "m11-l01-v1", why: "Name who is excluded, in what situation and by which decision." },
      { id: "m11-l03-v1", why: "Structure people can navigate with headings, regions and reading order." },
      { id: "m11-l04-v1", why: "Text that survives 200% zoom and measured contrast." },
      { id: "m11-l05-v1", why: "Never colour alone: a second signal for every meaning." },
      { id: "m11-l06-v1", why: "Complete a whole task with only a keyboard, using the course's keyboard lab." },
      { id: "m11-l07-v1", why: "Forms that announce and locate errors for everyone." },
      { id: "m11-l08-v1", why: "Alternative text decided by what each image is for." },
      { id: "m11-l10-v1", why: "Listen to your own product with the screen reader already on your device." },
      { id: "m11-l12-v1", why: "An honest accessibility statement: tested, found, unfixed and untested." },
    ],
  },
  {
    id: "explain",
    title: "Explain the work",
    purpose: "Write a first short, honest case study while Project 1 is fresh. You will improve it as better evidence arrives.",
    evidence: "One honest case study with limitations and inspectable artefacts.",
    lessons: [
      { id: "m19-l01-v1", why: "Know what a reviewer looks for in ninety seconds before you write anything." },
      { id: "m19-l04-v1", why: "A fixed case-study skeleton with every claim traced to an artefact — use Project 1." },
      { id: "m19-l05-v1", why: "State your role exactly: self-directed practice is valuable when it is labelled." },
      { id: "m19-l08-v1", why: "Write the outcome honestly when there is no measured outcome yet." },
    ],
  },
  {
    id: "collaborate",
    title: "Work with others",
    purpose: "Understand code, data, loading and errors well enough to work with engineers; specify components, hand over and plan measurement. No coding is required.",
    evidence: "A component and state specification, a handoff with QA notes and a measurement plan.",
    lessons: [
      { id: "m12-l01-v1", why: "What happens between a tap and a page, in plain terms — no coding." },
      { id: "m12-l12-v1", why: "How to talk with engineers about what is being built, using precise questions." },
      { id: "m13-l01-v1", why: "What a design system is for, and for whom." },
      { id: "m13-l03-v1", why: "The anatomy of one component: variants, states, content and keyboard rules." },
      { id: "m13-l05-v1", why: "A reusable test for “variant or new component?”." },
      { id: "m13-l06-v1", why: "Documentation someone can use without asking you." },
      { id: "m13-l08-v1", why: "Versions and breaking changes, written so people know what to do." },
      { id: "m13-l10-v1", why: "What a system can guarantee about accessibility, and what it cannot." },
      { id: "m14-l02-v1", why: "Write work that can be built: who, what and why." },
      { id: "m14-l03-v1", why: "Acceptance criteria another person can check, including failure and accessibility." },
      { id: "m14-l06-v1", why: "Handover is a conversation with a record of decisions." },
      { id: "m14-l07-v1", why: "Design QA: defects, missing requirements and justified non-changes are different things." },
      { id: "m14-l08-v1", why: "Defect reports someone can reproduce and fix without asking you." },
      { id: "m14-l11-v1", why: "Release with a plan for what you will look at and what would make you reverse it." },
      { id: "m15-l01-v1", why: "A metric tree connects an outcome to behaviours you can and cannot observe." },
      { id: "m15-l02-v1", why: "Funnels show where people stop, not why — with arithmetic you can reproduce." },
      { id: "m15-l03-v1", why: "Intervals keep small numbers honest; use the calculator in the lesson." },
      { id: "m15-l11-v1", why: "A measurement plan you could actually run with what you can obtain." },
    ],
  },
  {
    id: "extend",
    title: "Extend for the role",
    purpose: "Run a second, unfamiliar project on your own, finish the portfolio and prepare for real roles.",
    evidence: "A second project, a portfolio of honest case studies and a role-evidence gap plan.",
    lessons: [
      { id: "m16-l01-v1", why: "Separate using AI in your work from designing products that contain AI." },
      { id: "m16-l02-v1", why: "Use assistance without losing the work: record what it saved and what it got wrong." },
      { id: "m16-l03-v1", why: "Design for a system that is sometimes wrong, so people can calibrate trust." },
      { id: "m16-l05-v1", why: "Design the failures: confidently wrong, unable to answer, harmful." },
      { id: "m16-l12-v1", why: "Know when to argue against using AI at all." },
      { id: "m17-l01-v1", why: "Read the strategy a product actually follows from what it does." },
      { id: "m17-l03-v1", why: "A service blueprint shows the staff and systems behind every screen." },
      { id: "m17-l06-v1", why: "Stakeholders and what each is accountable for." },
      { id: "m17-l07-v1", why: "Decide without enough information and record how you will find out." },
      { id: "m17-l12-v1", why: "A short strategy note for your project: choices, exclusions and risks." },
      { id: "m18-l01-v1", why: "Choose a second project you can actually finish." },
      { id: "m18-l02-v1", why: "Plan the research properly once more, reusing what you built." },
      { id: "m18-l03-v1", why: "Fieldwork and synthesis without supervision." },
      { id: "m18-l04-v1", why: "Decide what to build and what not to." },
      { id: "m18-l05-v1", why: "Design it using everything you have, recording where your system did not fit." },
      { id: "m18-l06-v1", why: "Build, test and repair — privacy and access checks before any real use." },
      { id: "m18-l07-v1", why: "Critique from someone outside the project, or an honest labelled substitute." },
      { id: "m18-l08-v1", why: "Measure only what the project can honestly support." },
      { id: "m18-l09-v1", why: "Hand the work over so it survives without you." },
      { id: "m18-l10-v1", why: "The limitations page a reviewer will trust you for." },
      { id: "m18-l11-v1", why: "A retrospective across your projects: what actually improved." },
      { id: "m18-l12-v1", why: "Assemble the project record so someone else can follow it." },
      { id: "m19-l02-v1", why: "Audit the evidence you actually kept across your projects." },
      { id: "m19-l03-v1", why: "Give each case study one job in the portfolio." },
      { id: "m19-l06-v1", why: "Show research without exposing people." },
      { id: "m19-l07-v1", why: "Images that carry an argument, captioned honestly." },
      { id: "m19-l09-v1", why: "Make the portfolio itself usable on a phone and by keyboard." },
      { id: "m19-l12-v1", why: "Final honesty check, then publish deliberately — or keep it private." },
      { id: "m20-l02-v1", why: "Gather dated vacancy evidence from employers' own pages." },
      { id: "m20-l03-v1", why: "Read vacancies as counts in your own sample, not a market." },
      { id: "m20-l04-v1", why: "A role-evidence matrix: evidenced, partial or absent." },
      { id: "m20-l05-v1", why: "Close one gap with real work, not a certificate." },
      { id: "m20-l06-v1", why: "A resume where every line survives a question." },
      { id: "m20-l08-v1", why: "Your transition story, true and ninety seconds long." },
      { id: "m20-l10-v1", why: "Interview practice: the walkthrough and three examples." },
    ],
  },
];

// Coding lessons: optional, with runnable starters. Never the only route to
// systems, delivery or portfolio work.
export const technicalExtension = new Set([
  "m12-l02-v1", "m12-l03-v1", "m12-l04-v1", "m12-l05-v1", "m12-l06-v1", "m12-l07-v1",
  "m12-l08-v1", "m12-l09-v1", "m12-l10-v1", "m12-l11-v1", "m13-l04-v1", "m13-l09-v1", "m13-l11-v1",
]);

const placed = new Map(coreStages.flatMap((stage, index) => stage.lessons.map((l) => [l.id, { stage, index, why: l.why }] as const)));
export const corePathIds = coreStages.flatMap((s) => s.lessons.map((l) => l.id));

export type LessonTrack =
  | { kind: "core"; stage: PathStage; stageNumber: number; why: string; skippable: boolean }
  | { kind: "extension" }
  | { kind: "library" };

export function lessonTrack(id: string): LessonTrack {
  const found = placed.get(id);
  if (found) return { kind: "core", stage: found.stage, stageNumber: found.index + 1, why: found.why, skippable: skippableLessons.has(id) };
  if (technicalExtension.has(id)) return { kind: "extension" };
  return { kind: "library" };
}

type RecordLike = { lessonId: string; record: RecordData };
// A core lesson is satisfied by finished practice, or — for a skippable
// visual-refresh lesson only — by existing skill shown with an artefact.
export function coreSatisfied(id: string, records: RecordLike[]) {
  const record = records.find((r) => r.lessonId === id)?.record;
  if (record?.learning?.finishedAt) return "finished" as const;
  if (skippableLessons.has(id) && record?.learning?.demonstrated) return "skill-shown" as const;
  return null;
}

export function coreProgress(records: RecordLike[]) {
  let finished = 0, shown = 0;
  for (const id of corePathIds) {
    const state = coreSatisfied(id, records);
    if (state === "finished") finished++;
    if (state === "skill-shown") shown++;
  }
  const total = corePathIds.length;
  const done = finished + shown;
  return { finished, shown, done, total, percent: total ? Math.floor((done / total) * 1000) / 10 : 0 };
}

// Next core lesson: the bookmarked lesson when it is an unfinished core lesson,
// otherwise the first unsatisfied lesson in path order.
export function nextCoreLesson(records: RecordLike[], bookmarkedId?: string) {
  if (bookmarkedId && placed.has(bookmarkedId) && !coreSatisfied(bookmarkedId, records)) return bookmarkedId;
  return corePathIds.find((id) => !coreSatisfied(id, records)) || corePathIds.at(-1)!;
}

export function stageProgress(stage: PathStage, records: RecordLike[]) {
  const done = stage.lessons.filter((l) => coreSatisfied(l.id, records)).length;
  return { done, total: stage.lessons.length };
}
