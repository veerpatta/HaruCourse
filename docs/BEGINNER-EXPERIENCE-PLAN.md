# Beginner understanding and AI learning plan

Planning revision: 13 September 2026. Requested deliverable: Markdown only. This is a proposal for improving the existing course, not a claim that lessons, software or the live site have changed.

## Start here

Make the course feel like a patient teacher working beside the learner. Begin with something recognisable, explain what it means, show a decision being made, help the learner attempt it, then ask for independent work. Keep the professional depth, but stop making the learner decode professional language and unfamiliar tools while also learning the concept.

Use this document for the experience, rollout and acceptance plan; [the research notes](BEGINNER-RESEARCH.md) for evidence and comparisons; [the AI activity guide](AI-LEARNING-ACTIVITIES.md) for prompts and return tasks; and [the all-lesson map](BEGINNER-LESSON-PLAN.md) for a distinct starting intervention for each of the 224 published teaching lessons. None of those rows is a completed rewrite. The [existing audit](BEGINNER-LESSON-AUDIT.md) remains the historical implementation register.

## What the feedback establishes

The creator reports that the course is detailed but confusing for a beginner: unfamiliar terms, uncertainty about what/where/how to work, and a succession of instructions that does not feel like engaging teaching. Record this as reported feedback. We do not have a recording, task-by-task observation, preferred explanation language or comprehension results from this report. The earlier uncoached Lesson 1 observation is still pending.

Current repository evidence matters: all 224 lessons already have saved action flows, definitions, demonstrations and formative questions. There are 2,866 preserved worksheet fields. Lesson 1 has 48 actions and 36 fields; the reader displays both lesson-work percentage and section position. Definitions appear in setup actions, which can be separated from the answer that needs them. Optional AI rehearsal content already exists in the apprenticeship model/panel; discoverability in the active reader needs inspection. These are reasons to improve continuity and explanation, not reasons to claim those features are absent. Sources: `src/lessonOneFlow.ts`, `src/LessonFlow.tsx`, `src/ApprenticeshipPanel.tsx`, `src/guided.ts`, and the current verification/authoring documents.

Working hypotheses to test:

| Possible cause | What a beginner may experience | Proposed response | Evidence needed |
|---|---|---|---|
| Too many new ideas at once | “I cannot explain the words in the question.” | Teach a small concept with an example at its point of use | Learner explains it using a different example |
| Fragmented actions | “I filled a box but forgot why.” | A visible story, current artifact and named work part | Learner describes how this answer contributes to the output |
| Instructions without a mental picture | “What is this supposed to look like?” | Annotated starter, demonstrated thinking and an adequate sample | Learner starts without copying the sample answer |
| Multiple destinations and hidden prerequisites | “Here, on paper, or in another app?” | One recommended destination and visible missing-material route | Learner opens the right workspace unaided |
| Professional wording in ordinary tasks | “What is an artifact/handoff/criterion?” | Everyday wording first; professional term second | Learner understands the task without a vocabulary detour |
| Competing progress signals | “Did I finish, or only read it?” | Separate place, work, explicit finish and feedback | Learner correctly explains each state |
| AI as another homework requirement | “Do I need to complete another course in chat?” | One optional bounded activity with a precise return | Learner returns and makes their own small improvement |

## Brainstorm: approaches worth testing

These are design hypotheses, not proven learning effects. Priorities reflect the reported problem and implementation cost.

| Idea | Concrete experience | Why try it / main risk | Decision |
|---|---|---|---|
| Start with a small mystery | “This booking page looks good. Why can’t you tell what you’ll pay?” | Creates a reason to learn; needs enough context to avoid guessing | Pilot |
| Show the designer thinking | Annotated before/after with the rejected idea and reason | Makes invisible reasoning visible; avoid another long monologue | Pilot |
| Explain this word here | Plain meaning plus one example beside the question | Removes a detour; a giant glossary still overwhelms | Pilot |
| Complete the missing piece | One worked row, one partially worked row, then the learner’s own | Gives a safe start; samples must not auto-fill saved evidence | Pilot |
| A visible object being built | Show the current note, flow or screen accumulating across actions | Restores continuity; do not crowd the phone layout | Pilot |
| Remove repeated administration | Explain setup/save once per destination, with contextual reminders only on change | Reduces instruction fatigue without removing work | Pilot |
| Let the learner predict first | Choose which result will happen, then reveal and explain | Encourages attention; never demand an uninformed guess before teaching | Use after explanation |
| “Teach it to me” AI conversation | AI asks one question about the learner’s explanation | Encourages recall; needs hints and a fallback when the learner is stuck | Pilot |
| “Catch my mistake” AI activity | A deliberately flawed fictional claim, then a correction | Makes critique playful; must reveal and repair false statements | Pilot in suitable lessons |
| A help ladder | “Explain the word”, “Show one example”, “Help me begin”, “Show enough work” | Help matches the actual blockage; too many visible controls create noise | One Help entry, test options |
| A short visual experiment | Resize a supplied layout or try a broken form | Makes cause and effect tangible; needs keyboard and written equivalents | After core pilot |
| Reverse the teaching order for experienced topics | “Already familiar? Try this small application, then revisit what you need.” | Respects visual-design experience; never bypass required evidence | Later, after foundations |
| Separate calm reading from work | A readable overview of the complete explanation, with a return to the exact action | Tests whether forced fragmentation is part of confusion | Prototype alongside action view |
| Personal language bridge | AI explains in the learner’s chosen language, retaining actual tool labels | Helps understanding; translation can alter technical meaning | Optional; validate preference |
| Audio, animations and conversational tutor everywhere | Every screen talks or chats | High maintenance, bandwidth and distraction; not necessary to test the hypothesis | Defer |
| Points, streaks and a countdown | Reward more clicks and time | Does not answer the beginner’s question and may add pressure | Exclude |

First investment: explanation at the point of need, visible continuity, and a trustworthy stop/resume experience. AI supplements these improvements. Do not add 224 chat tasks to an already large workload.

## The lesson experience to author

Keep Learn → Do → Check → Your work, the cream/green/serif style, and Levels → Modules → Lessons. Each section can contain connected short paragraphs, diagrams, examples and a small action; it does not have to be a list of commands. This proposal supersedes the older “connected prose is optional detail, never the default” rule when that rule would hide essential explanation. Concise means understandable with little unnecessary effort, not the fewest words.

| Stage inside the existing reader | What the learner receives | What the author must supply |
|---|---|---|
| Learn: recognise the situation | A familiar problem and why today’s skill helps | A concrete context, one main outcome, relevant prerequisite reminder |
| Learn: understand it | Plain explanation before specialist vocabulary | Meaning, everyday example, professional term and a useful non-example |
| Learn: see the thinking | A worked example with visible reasoning | Starting state, choice, consequence, likely mistake and repair |
| Do: try with support | One manageable decision with feedback | Supplied material and hints that fade; no finished assignment to copy |
| Do: use it yourself | A variation that produces part of the existing output | Exact destination, controls/materials, visible result and “enough for this part” |
| Optional AI learning | One conversation selected for this concept | Copyable context, bounded activity, stop, return destination and no-AI equivalent |
| Check: explain and improve | Answer and reason before feedback | Diagnose the misconception; reopen the relevant answer beside feedback |
| Your work: keep and continue | The artifact, save state and next action | Difference between saved, practice finished and feedback requested |

Suggested editorial starting points, to test rather than enforce mechanically: one central new idea per work part; two or three essential unfamiliar terms introduced together; a brief explanation followed by a visible example; three to five meaningful parts for the first lesson’s overview. A part can contain several existing actions. Do not delete required work to meet these numbers, turn every sentence into a screen, or impose a reading speed.

### Writing for someone who does not know the words

Explain before asking the learner to use a concept. Define acronyms on first use and recap them on return after a gap. Avoid definitions that contain other undefined terms. Use concrete subjects instead of “it”, “this” and “the above”. Keep tool labels exactly as they appear on the verified screen; explain those labels beside them. Adult simplicity should be respectful, not childish.

| Current kind of language | Beginner-facing wording to test |
|---|---|
| Produce an artifact | Make something you can keep: today, a short note about the booking screen |
| Synthesize findings | Put similar notes together. Then explain what those notes suggest, and which notes support it |
| Formulate a hypothesis | Write your best guess about what may help. Say what you would look for to check that guess |
| Iterate on the wireframe | Change one part of your rough screen drawing, then check whether it addresses the problem |
| Handoff and acceptance criteria | Leave instructions another person could follow, plus checks showing whether the result works |
| External-work reference | Where you kept your work: paste a share link, or write the file name and folder |

Default to clear English; do not assume a preferred second language. The AI activity can ask for the learner’s preferred language, including simple English, Hindi or Hinglish. Keep technical English terms with the explanation so the learner can recognise them in tools and workplace conversations. Full bilingual course translation remains separate work, including human terminology review. Judge reasoning separately from grammar. Explain math with counted objects and worked arithmetic before symbols.

### Make what, where and how unmistakable

Each task needs a named destination: “Write in the answer box below”, “Draw on one sheet of paper”, or “Open the supplied file on your computer”. A generic “use your preferred tool” is an alternative for an experienced learner, not the default for a beginner.

For tool tasks, author a known starting screen/file; exact control names; a numbered screenshot or original diagram with text equivalent; one action and expected visible result; a common failure and recovery; and save/export/reopen directions. Verify the free workflow through the output. Teach selecting text, copying, pasting, finding a downloaded file and returning to the course when first needed. Before m12, supply working examples for code-dependent behaviour instead of requiring coding. Paper can teach reasoning but cannot prove keyboard, browser or screen-reader behaviour.

Reuse an existing relevant case within a module. Link previous work by what it contains and where it was saved. Supply a clearly fictional starter when earlier work is missing; never silently populate learner answers with it. Show a preview of that starter at the point of need. Vary industries over the course so the pottery example does not become an assumed career niche.

### Lesson 1 example: make the first success understandable

This is a proposed editorial example, not replacement lesson source. Keep `week1-day1-v1`, all 36 fields, six sorter questions and three reasoning checks.

Opening: “Imagine you want to join a pottery class. You can see a photo and a Reserve button, but you cannot find the total price. Making the button prettier might not help you decide. Today you’ll learn to notice the difficulty before choosing a fix.” Label the illustrated screens fictional.

Teach: “The interface, or UI, is what you use on the screen: words, controls and layout. The user experience, or UX, is what happens while you try to do something, including uncertainty and waiting. Product design asks what should help you complete that task and how the service can provide it.” Show a labelled screen and a short journey beside this explanation. Explain “product” and “user” in this context before using either repeatedly.

Model: “The price is not shown on the results screen” is visible in the supplied case. “Everyone leaves because it costs too much” goes beyond what the screen tells us. Show what changed between those sentences. The demonstrated case is separate from the learner’s work.

Supported attempt: show a different fictional class card with a missing date. Ask what can be seen and what remains a guess. Give a small hint if the learner is stuck, then explain the choice. An optional AI explain-back activity can follow this attempt; it is not needed to understand the page.

Independent work: keep the current in-app or external route and outputs. Present the lesson as meaningful parts: understand the difference; follow one task; record five entries; propose two changes; check and keep the work. Show the current entry beside its label, goal and possible check so the learner does not reconstruct it from memory. Only one answer needs editing at a time; the relevant context should stay visible.

First success is a supported classification the learner can explain. It is a safe stopping point, not “Lesson 1 complete”. The existing definition fields (`define-product-design`, `define-ux`, `define-ui`) remain, but they follow the concrete explanation. `entry-1-saw` and its companion fields still hold the learner’s own work. End with a clear preview of unfinished parts and the next saved action. Do not reduce the full workload or manufacture completion to make the first session look successful.

## AI learning as an optional course activity

Offer “Practise this with an AI app” beside the relevant taught concept or supported attempt. One visible activity is enough; keep extra modes behind Help. Reuse the existing `apprenticeship.ai` capability where it fits instead of introducing a second prompt catalog or embedded tutor.

The activity must tell the learner what they will practise, what to copy, where to paste, how the conversation proceeds, when to stop, and what to do back in the course. The AI explains, asks, role-plays or challenges a claim; the learner still produces and repairs their own work. Explanation mode may be used before an independent assignment, so a confused learner is not forced to solve that assignment before receiving help. Rehearsal and critique use a first attempt. The independent baseline remains uncoached and has no AI.

Use the complete prompt examples and activity families in [AI-LEARNING-ACTIVITIES.md](AI-LEARNING-ACTIVITIES.md). Every lesson-map row selects a family; later authors must fill its actual concept, practice material, misconception and existing return-field ID. Never ship a generic “teach me this lesson” prompt or ask the beginner to assemble an author template.

AI is not automatically current or correct. Stable concepts use course-authored context. A separate current-information activity asks for an official dated source, uncertainty and manual verification; it must work by saying “unverified” if browsing is unavailable. No invented controls, videos, research participants, vacancies, quotes or impact. No uploads, personal research data, paid model, API or subscription is required. Skipping AI leaves the required work and finish rules unchanged.

## Progress, time and saving in ordinary language

Keep existing completion and timing semantics. This is primarily a presentation plan; a new grouping is not a new progress database or a changed denominator.

| Question | Proposed presentation | Meaning and behaviour |
|---|---|---|
| Where am I? | “Do · Record what you noticed · Entry 2 of 5” | Position only. Can change through navigation without earning completion |
| How much required work is recorded? | “Required work: X of Y actions complete” with one labelled bar | Derived from the current required-action calculation. Explain that checks being attempted does not establish understanding. Do not relabel the number as skills learned |
| Is this lesson finished? | “Practice in progress” / “Practice finished” | Existing explicit finish and server validation. If requirements are missing, link to the exact missing action |
| How much of the course have I finished? | “Practice finished in X of 221 required lessons” on Course map | Current required denominator; derive it from source, never hard-code it. Keep 3 optional lessons and baseline separate |
| Has anyone reviewed it? | Existing feedback/request state in Your work | Separate from finished practice and from assessment |
| How much time is recorded? | “Recorded study time: 24 min” and a quiet current state | No countdown, target, completion reward or learning-quality claim |
| Has my answer saved? | “Saved on this device” / “Saved online” / “Needs attention” | Display the actual persistence state; online status alone is not proof of upload |

Do not put lesson percentage, section percentage and overall course percentage together on the action card. Keep course totals on Course map/My work. Optional AI clicks and external chat duration never fill the work bar. Work edits can reopen finished practice under the existing rules; explain this beside the change. Time corrections and navigation do not reopen it. Old finishes must not be silently invalidated by editorial changes; audit any content change that alters an action’s meaning before implementation.

Timer copy to test:

- While active: “Recording time while you use this lesson.”
- After leaving the course: “Course timer paused. You can add time spent in another app or on paper.”
- After five quiet minutes: “Time paused after 5 minutes without interaction. Your work is safe. Continue using the lesson to resume.” Add the explanation that uninterrupted reading may need a manual time addition.
- After a manual pause: “Time paused by you.” Offer the existing Resume action; interaction must not override that choice.
- On return from AI: offer the existing manual time controls through a clear label, “Add study time”. The learner enters an estimate; it is not calculated from how long the tab was away.
- On adjustment: “Add only time that is not already recorded. You can correct the total.” Show the existing value and resulting total before saving, and preserve segment identity/retry protection.

Example: 12 recorded course minutes plus 8 manually entered AI minutes gives 20 recorded minutes. Neither number changes practice completion. The app cannot know whether someone studied while away. A phone with the keyboard open must retain the answer, save state and navigation without a floating timer covering them.

## How to improve all lessons without repeating this problem

Every row in [BEGINNER-LESSON-PLAN.md](BEGINNER-LESSON-PLAN.md) inherits this experience contract. The row is the opening intervention, not the full workload. Re-read the authoritative lesson, guided material, action plan, prerequisites and original required outputs before writing. Later modules should gradually remove solution hints while retaining accessible language, setup and missing-access explanations. In m18, teach navigation and offer process clarification without supplying the independent project’s decisions.

For each lesson, the author records: stable ID and required/optional flag; one main outcome; prerequisites and starter; exact new terms and plain meanings; demonstration and common misconception; supported-to-independent transition; recommended destination and recovery; AI family and a fully authored prompt; complete no-AI route; existing fields used for return/repair; all retained outputs/IDs; and review evidence. Start each register entry as Planned. Move separately through Drafted, Content checked, Interface checked, Learner observed and Released, with dated evidence. A batch build never marks every lesson learner-validated.

### Delivery phases and acceptance gates

| Phase | Work and ownership | Acceptance gate | Stop/rollback condition |
|---|---|---|---|
| 0. This documentation milestone | Course planner: capture feedback, research, 224-row map, prompt examples and testing plan | Only `.md` changes; links and lesson coverage checked; original vision and generated lesson views untouched | A source/app edit belongs outside this request |
| 1. Observe and draft Lesson 1 | Creator records the reported friction more precisely; author prepares one complete pilot and low-cost layout alternatives | Observe current start, first answer, help, AI return, save and resume; distinguish language, concept, tool and navigation failures | If Haru is unavailable, draft/prototype QA can continue; learner validation stays open |
| 2. Pilot implementation, when implementation is requested | Author/frontend maintainer improves Lesson 1 and relevant shared rendering; reviewer checks compatibility | Full Lesson 1 outputs retained; free/no-AI/offline path works; fresh-example explanation, own work, repair and resume demonstrated without coaching | Fix any comprehension blocker before expanding the new teaching pattern |
| 3. Validate representative difficulty types | Review m01-later lessons and representative `week2-day2-v1`, `m06-l01-v1`, `m09-l02-v1`, `m12-l01-v1`, `m15-l02-v1`, `m18-l01-v1` | Supplied cases allow reviewer QA without pretending the learner completed prerequisites; direct learner trials occur when relevant to their sequence | Reject a template that works only for definitions or text worksheets |
| 4. Refine foundations and research | Authors follow m01–m07 in prerequisite order; review each lesson and batches of roughly 3–5 | Each row has its own terms/example/transfer/AI-return check; missing participants route remains honest | Stop the batch at repeated confusion; repair the underlying pattern |
| 5. Refine tools, interactions and delivery | m08–m14; test each tool family through save/export/reopen | No unexplained controls; no required unverified account workflow; code literacy stays at m12 | Keep an inaccessible workflow optional until an equivalent valid path exists |
| 6. Refine advanced and career work | m15–m20, preserving independent decisions and evidence gates | Explained arithmetic, labelled simulations, independent project boundaries and truthful portfolio/career claims | Do not fill missing research, impact or credentials with generated content |
| 7. Release and review | Maintainer/reviewer: scoped release under applicable authorization, verification ledger and follow-up observation | Required checks pass, hosted test account restored, published state distinguished from observation | Restore prior rendering/content release if needed; preserve additive records and learner work |

This plan covers all lessons now. It does not request coding, deployment, migration, paid services or messages to others. Existing approved action releases remain historical facts; they do not prove this new comprehension approach works. Implementers should not treat this planning request as a new bulk-release instruction.

### Pilot observation script

Ask the learner to use the course normally. Observe rather than explain the next step. If they become stuck, record the last successful action, exact words they did not understand, intended destination and what they tried; then help, marking that attempt assisted. No arbitrary silence timeout is a failure.

1. Open Lesson 1 and explain what they expect to learn and keep.
2. Explain UI/UX using a new example, with permission to use their own language.
3. Find the supported activity, attempt it and use Help if needed.
4. Produce one original evidence entry and explain the label without copying.
5. Optionally copy the AI prompt, use another app, stop and return to the named answer; repeat the equivalent route without AI.
6. Explain what the work bar and timer mean, including leaving the tab and a manual pause.
7. Save, close, reopen and resume the exact action. Confirm what would finish practice and what would request feedback.
8. At a later return, apply the idea to an unfamiliar example; record reasoning rather than confidence alone.

Pilot success: the learner can orient, begin, explain, act, repair and resume without coaching at the key points. Record help used, wrong destinations, misunderstood terms, copied-versus-original reasoning, task result and assisted/unassisted state. Report counts and examples, not a percentage suggesting population evidence from one person. If comprehension improves but navigation fails, fix navigation before calling the pilot successful. A successful pilot is formative evidence, not formal mastery or proof for all beginners.

### Implementation verification when code/content work begins

Run `npm.cmd run docs:generate`, `npm.cmd run test:content`, `npm.cmd run test:worksheet`, `npm.cmd run audit:guided`, `npm.cmd run test:actions`, `npm.cmd run test:learning` and `npm.cmd run build` as relevant to the actual change. Inspect generated documents and MCP parity from the same authority. Review sources at release; compare required fields/actions and preserve old backups, submissions and feedback.

Verify 320/390 px, tablet and desktop for wrapping, hierarchy, real readable context, keyboard order and touch targets, not only overflow. Test copy failure, long translated explanations, missing starter, unavailable AI, interrupted chat and offline course use. For changed save/resume/progress/timing behaviour, test reload, offline reconnect, stale revision conflicts, multiple tabs, account switching and creator read-only access. Hosted writes use the test account with restoration. Native phone keyboard, assistive technology and actual learner observation require their own evidence.

The present Markdown-only check does not establish any of that runtime behaviour. Keep the original vision immutable; do not edit generated lesson Markdown as a shortcut around source authoring.
