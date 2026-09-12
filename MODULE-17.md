# Strategy and complex systems

> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Follow [the small-action teaching and tracking standard](docs/COURSE-AUTHORING.md#small-action-and-tracking-contract--12-september-2026). All 43 lessons in Modules 1–5 use saved action flows. Published, teaching-refined, learner-validated and assessed remain separate states.

Generated from src/module17.ts; edit that source, then run npm run docs:generate. Level 5 · Module m17 · requirement areas 3, 17. Optional effort 40 hours across 12 lessons: 24 hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them. No deadlines; split any lesson across sessions and return to it without penalty.

Prerequisite: m16. This is guidance for meaningful practice, not a lock. Module approved resource pair: R19 / R07. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.

Each criterion below is scored 0 absent, 1 needs support, 2 independently adequate, 3 strong reasoning and tradeoffs. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.

## Lesson 1: What strategy means for someone doing the work

Stable ID: m17-l01-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Write the strategy your product is actually following — inferred from what it does, not from what anyone says — and name the three choices it implies.

**Bring forward.** Everything you know about your project and its constraints.

Strategy read as a document is inert. Strategy read as the pattern of what a team keeps choosing is something you can argue with.

### Learn

The written strategy and the operating strategy differ in most organisations, and the operating one is what shapes your work. It is legible in behaviour: which requests are always accommodated, which quality is always cut when time is short, which customer is never turned down. Reading that pattern is a skill and it takes an afternoon.

The test of a strategy is what it excludes. “Serve everyone well” excludes nothing and therefore decides nothing, which is why teams following it argue endlessly about priorities. A real strategy makes some requests obviously out of scope, and the relief of that is part of its value.

The designer's contribution here is usually articulation rather than invention. Writing down the choices a team is already making — “we optimise for the returning customer and accept a harder first experience” — turns an unexamined habit into a decision that can be defended or changed.

Naming an implied choice frequently changes it, because most implied choices were never chosen. A team that discovers it has been prioritising the loudest customer over the most common one usually does not defend that; it stops.

**Common misconception.** “Strategy is decided above me.” The written one is. The operating one is made of a thousand small decisions, many of them yours, and naming the pattern is available to anyone paying attention.

### Worked example

Reading the class provider's operating strategy from behaviour: every request from the two long-standing corporate clients is accommodated, however small; the first-time booking experience is the thing cut when time is short; and no request to support a new class format has ever been refused. The implied choices: retention over acquisition, breadth over depth, and existing customers over new ones. Written down, two of the three turned out to be unintentional — the first-time experience had been sacrificed by default rather than by decision — and naming it changed the next fortnight's work.

#### What strategy means for someone doing the work

Write the strategy your product is actually following — inferred from what it does, not from what anyone says — and name the three choices it implies.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work and observation. No canvas or framework template is required.

- Starting material: Your project, its history and its current decisions.
- Create HaruCourse/Practice/m17-l01-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on constraint

- Read the assigned chapters on appetite and deciding what not to build.
- Write what makes a choice strategic rather than tactical.

**You should end up with:** What makes a choice strategic rather than tactical, in your own words.

Worksheet fields for this step:

- What makes a choice strategic rather than tactical, in your own words — A strategic choice rules something out. A tactical one decides how to do what was already ruled in.

<details>
<summary>Help with this step</summary>

- **Strategic choice:** One that rules something out. If nothing is excluded, nothing was chosen.
- **Operating strategy:** The pattern of what actually gets built and refused, as opposed to the document. It is the one that decides what happens.

Stuck starting? Write the difference in one sentence, using the word rules out.

Is it enough? Your sentence would let you sort a real decision into one category or the other.

</details>

#### 2. Read the behaviour

**See it first.** Made-up example. Reading what a team always cuts, and asking them.

- **What I did:** Asked what gets cut when time is short. Everybody said the same thing: nothing important, we protect quality and we protect accessibility.
- **Why that answer arrives:** It is what everybody believes, and it is what everybody would want to be true. Nobody was being evasive.
- **What the last three releases showed:** The accessibility work went in two of the three, and the error states went in all three. Both were always the last thing unfinished, and being unfinished is what decides it.
- **Why nobody could have told me:** Nobody decided. It happened at five o’clock on a Thursday, three times, by whoever was still working, and it never became a memory of a choice.
- **What I wrote:** Cut first: error states, then accessibility work. Read from three releases rather than from anybody’s account of themselves.

**The wrong turn:** The wrong turn is asking what gets cut, because people answer honestly about what they intend. The operating strategy is made of decisions nobody remembers making, which is exactly why the behaviour has to be read rather than reported.

**What it costs:** Reading three releases takes an afternoon and produces a sentence that contradicts what colleagues sincerely believe about themselves.

**Still unknown:** Still unknown: whether the pattern holds over more than three. Three is what I could look at, and the sentence says so.

- List what the team always accommodates and always cuts.
- List who is never refused and what is never prioritised.

**You should end up with:** What is always accommodated, what is cut first, and who is never refused, read from behaviour rather than from a document.

Worksheet fields for this step:

- What is always accommodated, however small — Where you have no team to observe, read a public project’s issue tracker or your own product’s history. Say which.
- What is cut first when time is short
- Who is never refused, and what is never prioritised

<details>
<summary>Help with this step</summary>

- **Reading from behaviour:** Inferring the strategy from what recurs, what is protected and what goes first. It is available to anybody paying attention.
- **No team to observe:** A complete route. A public project’s tracker, or your own product’s history, shows the same patterns; the source line says which you used.

Stuck starting? Write what went first the last three times something had to be cut.

Is it enough? Every line names something that actually happened rather than a policy.

</details>

#### 3. Name the implied choices

**See it first.** Made-up example. Reading the strategy at Northside Tool Library, and reading the document.

- **What the document said:** To make tools available to everybody in the neighbourhood, sustainably and inclusively. Agreed by the committee, printed, and on the wall.
- **What the last six months showed:** Every request from the two workshops that run classes was accommodated within a week. The new-member sign-up, which three people had described as confusing, was postponed four times.
- **What that pattern actually is:** Existing regular users over new ones. Nobody chose it, nobody would defend it, and it is what the behaviour says without exception.
- **What the document could not do:** Be wrong. Everybody in the neighbourhood excludes nobody, so it rules nothing out, and no decision could ever contradict it.
- **What happened when I wrote the pattern down:** The committee disagreed with it, which is the first time anybody had disagreed with a strategy statement there. The sign-up work was scheduled a fortnight later.

**The wrong turn:** The wrong turn is reading the strategy from the document, because it exists and it is official. A statement that excludes nothing cannot be contradicted by any decision, so it describes nothing anybody does.

**What it costs:** Writing the pattern down produces a sentence nobody likes and nobody chose, and somebody will feel accused of a preference they never held.

**Still unknown:** Still unknown: whether the pattern would have changed anyway. It changed a fortnight after being named, which is not the same as because of it.

- Turn the patterns into three stated choices.
- Write each as a preference between two things.

**You should end up with:** Three implied choices, each written as a preference between two things, with the behaviour it is read from.

Worksheet fields for this step, revealed a few at a time in the app:

- Choice 1 · the preference, and the behaviour it is read from
- Choice 2 · the preference, and the behaviour it is read from
- Choice 3 · the preference, and the behaviour it is read from

<details>
<summary>Help with this step</summary>

- **A preference between two things:** The shape a choice has to take: this over that. Without the second half it is a value rather than a choice.
- **Making it explicit:** Writing down the pattern somebody is following without having said so. It is frequently enough to change it.

Stuck starting? Take your strongest pattern and write it as this over that.

Is it enough? Somebody at the organisation could disagree with each of your three.

</details>

#### 4. Test for exclusion

- Write what these choices rule out.
- If nothing is ruled out, say so plainly.

**You should end up with:** What the choices rule out, or a plain statement that they rule nothing out.

**Try it with help.** Six statements about a made up organisation. For each one, decide whether it is a strategy.

- Requests from regular users are accommodated first; work on the new-member experience waits.
  - **a strategic choice** — It rules something out: new members wait. It is unstated and it is the pattern every decision follows.
  - a value, not a choice — It prefers one group over another, which is what makes it a choice.
  - a tactic — It is not about how to do something; it is about what gets done at all.
- We make tools available to everybody in the neighbourhood.
  - a strategic choice — Everybody excludes nobody, so no decision could contradict it.
  - **a value, not a choice** — It says what the organisation is for. Worth having on the wall and useless for deciding anything.
  - a tactic — It is far too broad to be one.
- We open on Saturday mornings because that is when most people collect.
  - a strategic choice — It follows from serving people who work weekdays, which is the choice; the hours are how.
  - a value, not a choice — It has a reason attached and a real trade behind it.
  - **a tactic** — A decision about how to deliver something already decided. Changing it would not change who the library is for.
- We do not lend power tools that need training, even though members ask.
  - **a strategic choice** — It rules something out, against demand, for a reason. This is the clearest form a strategy takes.
  - a value, not a choice — A value would be about safety in general; this refuses a specific thing people want.
  - a tactic — It decides what the service is rather than how it runs.
- We care about quality.
  - a strategic choice — Nobody is against quality, so it excludes nothing.
  - **a value, not a choice** — It is the commonest sentence in strategy documents and it decides nothing.
  - a tactic — It is not specific enough to be one.
- Bookings are recorded in a spreadsheet updated each evening rather than a system.
  - a strategic choice — It has large consequences for the experience, and it was chosen for cost rather than as a position about what the library is.
  - a value, not a choice — It is a specific arrangement rather than a belief.
  - **a tactic** — A how, with consequences the next lesson traces. Tactics with big effects are still tactics.

**Then:** Now test your own three choices: does each rule something out?

**What to watch for:** Values and tactics both get mistaken for strategy, in opposite directions. A value is too broad to exclude anything; a tactic is downstream of a choice already made. Only the middle one can be disagreed with.

Worksheet fields for this step:

- What these choices rule out
- If nothing is ruled out, say so plainly — A strategy that excludes nothing is not one. Saying so is a finding rather than a failure of the exercise.

<details>
<summary>Help with this step</summary>

- **Exclusion:** What the strategy will not do. It is the test of whether a strategy exists at all.
- **Excluding nothing:** A real and common finding. Saying it plainly is more useful than manufacturing an exclusion to fill the field.

Stuck starting? For each choice, finish this sentence: “which means we will not …”.

Is it enough? Either you named exclusions, or you wrote plainly that there are none.

</details>

#### 5. Find the accident

- Mark any implied choice that was never deliberately made.
- Save the reading with the choices.

**You should end up with:** Any implied choice that was never deliberately made, with how you can tell.

Worksheet fields for this step:

- Any implied choice you believe was never deliberately made
- How you can tell it was an accident rather than a decision
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **An accidental choice:** A pattern nobody decided and nobody would defend. It is usually the one that costs most, because nothing about it has been weighed.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Ask of each choice whether anybody would defend it out loud.

Is it enough? Your evidence for the accident is behaviour rather than an assumption about intent.

</details>

**Save and continue.** Saved for you: Your definition, the behaviour you read, the three choices and the accident save as you type, on this device first and then online. Kept outside the app: If you read a public project’s tracker, keep your notes in your own folder and say in step 2 which project it was. What your creator sees: Your creator reads the accidental choice and how you can tell. A reading with no accident in it is usually a reading of the document. Your next action: Open Your work and choose Ready for review. The next lesson asks how this product pays for itself.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

List the last ten decisions and what each preferred; the pattern is the strategy.

</details>

<details>
<summary>Hint 2</summary>

Rewrite each choice as “we prefer … over …” and check it is falsifiable.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: What strategy means for someone doing the work.
Task: Write the strategy your product is actually following — inferred from what it does, not from what anyone says — and name the three choices it implies.
Challenge one thing at a time, and start with the mistake this lesson is about: “Strategy is decided above me.” The written one is. The operating one is made of a thousand small decisions, many of them yours, and naming the pattern is available to anyone paying attention.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the behavioural reading and ask whether the strategy is inferred from behaviour, not documents. Look at the three choices and ask whether three implied choices are stated as preferences. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l01-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The strategy is inferred from behaviour, not documents: Patterns drawn from what is accommodated, cut and refused. Three implied choices are stated as preferences: Three statements of the form A over B. Exclusions are named or their absence stated: What the strategy rules out, or an explicit statement that it rules out nothing. An unintentional choice is identified: One implied choice marked as never deliberately made, with the reasoning.

**Bring forward:** An inferred strategy with its implied choices is a strong piece of thinking to show, and it needs no access to anyone's confidential plans. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Read on constraint (~25 min): Read the assigned chapters on appetite and deciding what not to build. Write what makes a choice strategic rather than tactical.
- Read the behaviour (~30 min): List what the team always accommodates and always cuts. List who is never refused and what is never prioritised.
- Name the implied choices (~25 min): Turn the patterns into three stated choices. Write each as a preference between two things.
- Test for exclusion (~25 min): Write what these choices rule out. If nothing is ruled out, say so plainly.
- Find the accident (~15 min): Mark any implied choice that was never deliberately made. Save the reading with the choices.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work and observation. No canvas or framework template is required.

### Output

The operating strategy inferred from behaviour; Three implied choices named; What the strategy excludes, or a note that it excludes nothing; One implied choice you believe was never deliberate

### Checks

- Where do you read the operating strategy? Answer: In behaviour: what is always accommodated, what is cut first, who is never refused. The written document frequently describes something else.
- What is wrong with a strategy that excludes nothing? Answer: It decides nothing, so every priority argument has to be had from first principles. Exclusion is what makes a strategy useful.
- What is the designer's contribution? Answer: Usually articulation. Writing down the choice a team is already making converts an unexamined habit into something that can be defended or changed.

### Rubric and remediation

**The strategy is inferred from behaviour, not documents**

Adequate evidence: Patterns drawn from what is accommodated, cut and refused.

- 0 — A restatement of a written strategy.
- 1 — Some behavioural evidence mixed with stated intentions.
- 2 — Inferred from behaviour with examples.
- 3 — As adequate, and a contradiction between the written and operating strategy is named.

If below 2: List the last ten decisions and what each preferred; the pattern is the strategy. Show at recheck: The behavioural reading.

**Three implied choices are stated as preferences**

Adequate evidence: Three statements of the form A over B.

- 0 — Choices stated as values.
- 1 — Preferences implied but not stated.
- 2 — Three explicit preferences.
- 3 — As adequate, and one is uncomfortable to write down.

If below 2: Rewrite each choice as “we prefer … over …” and check it is falsifiable. Show at recheck: The three choices.

**Exclusions are named or their absence stated**

Adequate evidence: What the strategy rules out, or an explicit statement that it rules out nothing.

- 0 — Exclusions not considered.
- 1 — Vague statements about focus.
- 2 — Specific exclusions, or an honest statement of their absence.
- 3 — As adequate, and the absence of exclusions is connected to a real cost.

If below 2: Ask what request would be refused. If none would, write that down. Show at recheck: The exclusion list.

**An unintentional choice is identified**

Adequate evidence: One implied choice marked as never deliberately made, with the reasoning.

- 0 — All choices treated as deliberate.
- 1 — An accident suspected without reasoning.
- 2 — One identified with why it appears accidental.
- 3 — As adequate, and naming it changed or is likely to change something.

If below 2: Look for the quality that is always cut and ask whether anyone chose that. Show at recheck: The identified accident.

### Portfolio contribution

An inferred strategy with its implied choices is a strong piece of thinking to show, and it needs no access to anyone's confidential plans.

### Assigned resources

- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Setting the appetite, fixed time with variable scope, and the betting table. Purpose: Supplies a concrete account of strategy as recurring choices under constraint. Effort: 60–90 selected min. Free to read online; a print edition is sold and not required. Verified 2026-09-06. It teaches scope strategy and deciding what not to build. It is explicitly not a market-positioning source, and this course has no verified free source for positioning. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on solving a whole problem for users. Purpose: Gives an outcome-based frame for judging whether a pattern of choices serves anyone. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Public-service obligations differ from commercial ones; take the outcome framing. Fallback: R07.

## Lesson 2: How this product survives

Stable ID: m17-l02-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Write how your product actually sustains itself — what is exchanged, who pays, what it costs — and identify one design decision that changes the arithmetic.

**Bring forward.** Your project and whatever you know about its economics.

Design decisions have costs and produce value, and a designer who cannot describe the exchange is arguing in a language nobody in the room is using.

### Learn

Every product involves an exchange, and describing it plainly is more useful than any framework. Someone gives money, attention, data or time, and gets something they wanted. Writing that in one sentence exposes whether the product's value is real and who is actually served — and it can be done honestly without knowing anyone's revenue.

The payer and the user are frequently different people, and that difference shapes everything. A parent booking for a child, a company buying a tool its staff must use, a provider paying for a listing that customers browse: in each case the design question is whose experience wins when the two conflict, and that is a strategy question rather than a usability one.

Costs extend beyond money. A design that generates support contacts costs staff time; one that increases refunds costs money later; one that demands attention costs goodwill. Naming those costs is how a design argument enters the same conversation as a financial one.

You do not need real figures to reason about this, and you must not invent them. Describing the direction and the mechanism — this change would reduce support contacts about payment status, because that is what people currently ring about — is honest and usable, and the figures can be attached by someone who has them.

**Common misconception.** “Business is not my area.” Every design decision is an economic decision about someone's time, money or risk. Declining to describe it does not remove the effect; it removes you from the conversation about it.

### Worked example

The exchange, written plainly: a person gives money and a Saturday and gets a class they were confident about attending; the provider gives a place and their time and gets a booking they can rely on. The payer and user coincide here, except when a parent books for a child, where the design must serve both. Costs named: each unclear payment generates roughly one phone call to the provider, who is a single person with limited time; each duplicate payment generates a refund and a lost afternoon. One design decision changes the arithmetic directly: making payment status unambiguous reduces the calls, which is time the provider currently spends on the phone rather than teaching.

#### How this product survives

Write how your product actually sustains itself — what is exchanged, who pays, what it costs — and identify one design decision that changes the arithmetic.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work and, where possible, one conversation with whoever runs the service. No financial data is needed and none should be invented.

- Starting material: Your project and its business context.
- Create HaruCourse/Practice/m17-l02-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the exchange

- Write what each side gives and gets, in plain words.
- Check both sides are real rather than aspirational.

**You should end up with:** The exchange written in plain words, with both sides checked as real rather than aspirational.

Worksheet fields for this step:

- What each side gives and gets, in plain words
- How you checked both sides are real rather than aspirational — An aspirational exchange describes what you would like people to value. A real one describes why they actually turn up.

<details>
<summary>Help with this step</summary>

- **The exchange:** What each side gives and gets. Writing it plainly is most of what commercial literacy means in practice.
- **Aspirational:** What you would like people to value: community, sustainability, belonging. Sometimes true and rarely why anybody turned up today.

Stuck starting? Write what somebody gives up to use this, including time and inconvenience.

Is it enough? Both sides would be recognised by the people on them.

</details>

#### 2. Separate payer and user

**See it first.** Made-up example. Writing the exchange for Northside Tool Library, and writing the nice version.

- **What I wrote:** Members give a small subscription and get access to a shared resource, a sense of community, and a more sustainable way to do jobs at home.
- **Why it was comfortable:** It is what the library says about itself, it is true of some members, and nothing in it is contradicted by anything.
- **What two conversations produced:** Neither person mentioned community or sustainability. Both said they needed a tool for one job, once, and buying one for forty pounds to use for an hour was absurd.
- **What the real exchange was:** They give a deposit, a trip across town and the bother of returning it. They get the job done without owning a tool they would use twice.
- **What that changed:** The trip across town is a cost in the exchange, which makes collection hours a central design question rather than an operational detail. The community version had made the location invisible.

**The wrong turn:** The wrong turn is writing the exchange the organisation would like to be true, because it is on the wall and some of it is real. An aspirational exchange hides the costs people actually pay, and those are where the design decisions are.

**What it costs:** The honest version is less appealing to read and it makes the library sound like a rental shop, which somebody on the committee will resent.

**Still unknown:** Still unknown: how many members are in it for the community. Two conversations found two who were not, and both versions are probably true of somebody.

- Name who pays and who uses.
- Where they differ, write whose experience wins under conflict.

**You should end up with:** Who pays and who uses, with whose experience wins under conflict and who decided that.

Worksheet fields for this step:

- Who pays and who uses
- Where they differ, whose experience wins under conflict, and who decided that — A parent booking for a child, an employer paying for staff, a council funding a service. Someone always loses when they conflict.

<details>
<summary>Help with this step</summary>

- **Payer and user diverging:** A parent booking for a child, an employer paying for staff, a funder paying for a service. The product usually serves the payer without anybody deciding to.
- **Who decided:** Frequently nobody. It is the accidental choice from the previous lesson, appearing in the economics.

Stuck starting? Ask two people why they actually use it, and write their answers rather than yours.

Is it enough? Where payer and user differ, you have said who currently wins and whether anybody chose that.

</details>

#### 3. List the costs

- List costs in money, staff time, risk and attention.
- Mark which ones your design affects.

**You should end up with:** Costs in money, staff time, risk and attention, with the ones your design affects marked.

**Try it with help.** Six consequences of a design decision at the made up tool library. For each one, decide what kind of cost it is.

- An unclear payment screen produces about one phone call per unclear booking, to a staff of two.
  - money — It costs no money directly and it is the salary of somebody already employed.
  - **staff time or attention** — It is an hour somebody spends on the phone rather than checking tools in. In a two-person organisation this is the cost that matters most.
  - risk — Nothing uncertain is involved; it happens every time.
- A duplicate payment has to be refunded, with a transaction fee lost on each leg.
  - **money** — Two fees, gone, per occurrence. It is small, countable and the easiest thing to get attention for.
  - staff time or attention — It costs that as well, and the fee is the part with a number on it.
  - risk — It is a certain cost rather than an uncertain one.
- Holding a deposit means the library is responsible for money that is not theirs.
  - money — The money is held rather than spent.
  - staff time or attention — It takes attention, and the defining feature is what happens if it goes wrong.
  - **risk** — Holding other people’s money creates an obligation and an exposure that exists whether or not anything happens.
- Bookings are entered into the spreadsheet each evening by one person.
  - money — Nothing is paid for it beyond a wage already being paid.
  - **staff time or attention** — An hour a day and a process that must be remembered. Both, and the remembering is the part that fails on a busy week.
  - risk — The single point of failure is a risk as well, and the daily cost is the ordinary one.
- If the spreadsheet is a day behind, two people can be promised the same tool.
  - money — Nothing is spent when it happens.
  - staff time or attention — Sorting it out costs time, and it does not happen every day.
  - **risk** — Something uncertain with a consequence when it occurs. This is the shape of a risk rather than a running cost.
- A new volunteer needs a morning to learn the booking process.
  - money — Volunteers are not paid, which is what makes this cost easy to overlook.
  - **staff time or attention** — A morning of somebody teaching and a morning of somebody learning, every time the volunteers change. A simpler process is a design decision that reduces it.
  - risk — It is predictable rather than uncertain.

**Then:** Now list your own costs the same way, and mark which your design touches.

**What to watch for:** Money is the easiest to notice and rarely the largest. In a small organisation, staff time and attention are where design decisions land, and the volunteer training cost is invisible precisely because nobody is billing for it.

Worksheet fields for this step:

- Costs in money, staff time, risk and attention
- Which of those your design affects

<details>
<summary>Help with this step</summary>

- **Staff time:** The commonest hidden cost in a small organisation. An unclear screen becomes a phone call, and the phone call is an hour somebody was going to spend doing something else.
- **Attention:** What the organisation has to keep thinking about. A process that needs watching costs more than one that does not, even when it takes no longer.

Stuck starting? Ask what happens after somebody uses your product, and who deals with it.

Is it enough? At least one cost on your list is somebody’s time rather than money.

</details>

#### 4. Find the lever

**See it first.** Made-up example. Finding a design lever at the tool library, and finding one nobody could act on.

- **What I proposed:** Reduce staff time by replacing the evening spreadsheet with a proper booking system. It would remove an hour a day and several categories of error.
- **Why it was not a lever:** It costs money the library does not have, takes months, and is not a design decision. I had found a good idea belonging to somebody else.
- **What I could actually change:** The payment screen. Unclear payment status produces about one call per unclear booking, and calls arrive during the hour tools are being checked in.
- **The mechanism, step by step:** The screen states what has been taken and when confirmation arrives. The person does not ring. The staff member is not interrupted during check-in. Nothing else in the operation changes.
- **Why that version persuaded anybody:** It is a change I can make this week, the effect is traceable, and it needs nobody’s budget.

**The wrong turn:** The wrong turn is proposing the change that would help most, because the arithmetic on it is obvious. A lever is something your own decisions can move, and the obvious big change is usually somebody else’s to make.

**What it costs:** The screen change addresses a symptom rather than the cause, and the evening spreadsheet is still the real constraint.

**Still unknown:** Still unknown: how many calls are actually about payment status. The staff say most of them, and nobody counts, which the description says rather than converting into a figure.

- Identify one design decision that changes a cost or a value directly.
- Write the mechanism without inventing figures.

**You should end up with:** One design decision that changes a cost or a value directly, with the mechanism.

Worksheet fields for this step:

- One design decision that changes a cost or a value directly, and the mechanism

<details>
<summary>Help with this step</summary>

- **A lever:** A design decision whose effect on a cost you can trace. It is what lets you argue in the terms the decision is made in.
- **The mechanism:** How the change produces the effect, step by step. Without it the claim is an assertion about a number.

Stuck starting? Take the largest cost your design touches and trace how one change would reduce it.

Is it enough? The mechanism has steps rather than a jump from change to outcome.

</details>

#### 5. Check honesty

- Remove any number you cannot source.
- Save the description with the lever.

**You should end up with:** Any unsourced number removed, and the repair the Check questions asked for.

Worksheet fields for this step:

- Any number you removed because you could not source it — Describing economics does not require inventing figures, and an invented figure loses the argument the first time somebody checks.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **An unsourced number:** A figure you cannot say where you got. It is the fastest way to lose an economic argument, as Module 15 established.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Search your description for every digit and ask where each came from.

Is it enough? Every number left has a source, or has been replaced by a description.

</details>

**Save and continue.** Saved for you: Your exchange, the payer and user, the costs and the lever save as you type, on this device first and then online. Kept outside the app: Nothing confidential belongs here. If somebody told you about their finances in confidence, describe the shape rather than recording the figures. What your creator sees: Your creator reads the costs that are not money and the mechanism on your lever. Those two are where commercial literacy actually shows. Your next action: Open Your work and choose Ready for review. The next lesson draws what happens behind the interface.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write what each party actually hands over and actually receives.

</details>

<details>
<summary>Hint 2</summary>

Find a case where the payer and the user want different things and write who wins.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: How this product survives.
Task: Write how your product actually sustains itself — what is exchanged, who pays, what it costs — and identify one design decision that changes the arithmetic.
Challenge one thing at a time, and start with the mistake this lesson is about: “Business is not my area.” Every design decision is an economic decision about someone's time, money or risk. Declining to describe it does not remove the effect; it removes you from the conversation about it.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the exchange and ask whether the exchange is described plainly for both sides. Look at the payer analysis and ask whether payer and user are distinguished with conflicts named. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l02-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The exchange is described plainly for both sides: A sentence per side stating what is given and received. Payer and user are distinguished with conflicts named: A statement of who pays, who uses, and whose experience wins under conflict. Non-money costs are listed: Costs in staff time, risk and attention, with those your design affects marked. One lever is identified with its mechanism and no invented figures: A design decision with a stated causal mechanism and no unsourced numbers.

**Bring forward:** A plain description of how a product sustains itself, with a design lever attached, shows commercial literacy without pretending to data you do not have. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Write the exchange (~25 min): Write what each side gives and gets, in plain words. Check both sides are real rather than aspirational.
- Separate payer and user (~25 min): Name who pays and who uses. Where they differ, write whose experience wins under conflict.
- List the costs (~30 min): List costs in money, staff time, risk and attention. Mark which ones your design affects.
- Find the lever (~25 min): Identify one design decision that changes a cost or a value directly. Write the mechanism without inventing figures.
- Check honesty (~15 min): Remove any number you cannot source. Save the description with the lever.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work and, where possible, one conversation with whoever runs the service. No financial data is needed and none should be invented.

### Output

The exchange written in one or two sentences; Who pays and who uses, with any conflict named; Costs beyond money, listed; One design decision that changes the arithmetic, with the mechanism

### Checks

- Why write the exchange in plain words? Answer: Because it exposes whether the value is real and who is served, and it can be done honestly without access to anyone's financial data.
- Why does the payer-versus-user distinction matter? Answer: Because when their interests conflict, someone decides whose experience wins, and that decision is strategic rather than a usability detail.
- How do you discuss economics without figures? Answer: By naming the direction and the mechanism. Inventing numbers is worse than having none, and the figures can be supplied by whoever holds them.

### Rubric and remediation

**The exchange is described plainly for both sides**

Adequate evidence: A sentence per side stating what is given and received.

- 0 — Described in marketing language.
- 1 — One side described.
- 2 — Both sides in plain words.
- 3 — As adequate, and the description would be recognised by the person on each side.

If below 2: Write what each party actually hands over and actually receives. Show at recheck: The exchange.

**Payer and user are distinguished with conflicts named**

Adequate evidence: A statement of who pays, who uses, and whose experience wins under conflict.

- 0 — Treated as the same person.
- 1 — Distinguished without addressing conflict.
- 2 — Both, with the conflict resolution stated.
- 3 — As adequate, and the resolution is identified as a strategic choice.

If below 2: Find a case where the payer and the user want different things and write who wins. Show at recheck: The payer analysis.

**Non-money costs are listed**

Adequate evidence: Costs in staff time, risk and attention, with those your design affects marked.

- 0 — Only money considered.
- 1 — Other costs mentioned generally.
- 2 — Specific non-money costs listed and attributed.
- 3 — As adequate, and one cost falls on someone other than the business or the user.

If below 2: Ask what each design failure costs in someone's time and add it. Show at recheck: The cost list.

**One lever is identified with its mechanism and no invented figures**

Adequate evidence: A design decision with a stated causal mechanism and no unsourced numbers.

- 0 — A lever asserted with invented figures.
- 1 — A lever without a mechanism.
- 2 — Mechanism stated and no invented numbers.
- 3 — As adequate, and the mechanism is traceable to a research finding.

If below 2: Delete every figure you cannot source and write the causal chain in words. Show at recheck: The lever.

### Portfolio contribution

A plain description of how a product sustains itself, with a design lever attached, shows commercial literacy without pretending to data you do not have.

### Assigned resources

- R07: [GOV.UK: discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — What a discovery establishes about constraints and viability. Purpose: Frames the economic description as part of understanding the problem rather than a separate discipline. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06; published 18 November 2016. Written for public services with no revenue model, so the exchange framing here is the course's own. Fallback: R19.
- R35: [GOV.UK: start by learning user needs](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs) — Needs across the whole journey, including staff needs. Purpose: Brings the provider's time and effort into view as a real cost. Effort: 10–20 min. Free reading, no account. Verified 2026-09-06. Its supporting-staff framing is directly useful; it does not discuss commercial exchange. Fallback: R08.

## Lesson 3: The whole service, front and back

Stable ID: m17-l03-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Draw a service blueprint for one journey showing what the person sees, what staff do, and what systems are involved, and identify the two places where the back stage decides the front-stage experience.

**Bring forward.** Your m05 experience map and your m07 flows.

Many experience problems are staffing or process problems wearing an interface costume, and you cannot see that from the screens.

### Learn

An experience map records what a person does, thinks and feels. A blueprint keeps that and adds the layers beneath: what staff do in response, what systems are involved, and where the work waits. The assigned mapping guidance explicitly does not cover back-stage process, so this structure is an extension of it rather than a reading of it.

The line between what the person sees and what they do not is where most product problems actually live. A confirmation that takes an hour because someone checks it by hand, a cancellation that requires a phone call because the system has no route, a price that is wrong because two systems disagree — none of these is visible in the interface, and all of them are experienced as the product.

Staff constraints are design constraints. If the provider is one person who teaches for six hours a day, a design that assumes a two-hour response time is a design that fails on Tuesdays. Putting their availability on the blueprint makes that visible before it becomes a broken promise.

Two places usually dominate: where something waits for a person, and where two systems must agree. Finding those on your blueprint tells you where the experience is fragile regardless of how good the screens are.

**Common misconception.** “That is an operations problem.” It is the experience. A person waiting an hour for a confirmation does not distinguish between your interface and your staffing, and the design that promises immediacy the operation cannot deliver is the one at fault.

### Worked example

The blueprint for a booking: the person selects, reviews, pays and waits; the visible service shows a pending state and then a confirmation; behind the line the payment provider responds, the provider's own spreadsheet is updated by hand each evening, and a confirmation message is sent when that happens. Two decisive back-stage facts: the hand update means confirmation is not immediate, which the interface had been promising; and the spreadsheet is the only record, so a double payment is discovered a day later. Both changed the front-stage design — the pending state became honest about the timescale, and the reference number became the person's proof.

#### The whole service, front and back

Draw a service blueprint for one journey showing what the person sees, what staff do, and what systems are involved, and identify the two places where the back stage decides the front-stage experience.

**Where to practise:** Draw the three bands of a service blueprint for one journey on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: A long sheet of paper with three horizontal bands, drawn by hand and photographed. No blueprint tool or template is required.

- Starting material: Your experience map and flows.
- Create HaruCourse/Practice/m17-l03-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Start from the experience map

- Read the assigned mapping guidance, noting that it excludes back-stage process.
- Lay out your existing journey stages as the top band.

**You should end up with:** One journey chosen, with its stages laid out as the top band from your existing experience map.

Worksheet fields for this step:

- The stages from your existing experience map, as the top band
- Which journey, and why this one

<details>
<summary>Help with this step</summary>

- **Service blueprint:** Three bands: what the person does, what the service shows, and what happens behind it. The third band is what an experience map leaves out.
- **The top band:** The person’s journey, which you already have. Reusing it keeps the blueprint anchored in something observed.

Stuck starting? Take a long sheet of paper and rule three horizontal bands before writing anything.

Is it enough? The top band is your existing journey rather than a new one.

</details>

#### 2. Add the visible service

**See it first.** Made-up example. Drawing the visible band for a tool-library booking, and leaving the waiting out.

- **What I drew:** Select, review, pay, confirm. Four stages with something in the visible band at each one, and the blueprint looked complete.
- **What was missing:** The hours between paying and being confirmed. In my drawing, pay and confirm were adjacent, because on the screen they are.
- **What the person actually experiences:** An evening of not knowing, which is the longest stage of the whole journey and the one that produces the phone call.
- **What I added:** A waiting stage, as wide on the paper as the hours it takes, with the visible band showing exactly what is on screen during it: a pending message and nothing else.
- **What that made obvious:** The emptiest part of the visible band is the longest part of the journey. Everything I had designed carefully was for the four minutes, and nothing for the fourteen hours.

**The wrong turn:** The wrong turn is drawing the stages the interface has, because those are the screens and the screens are what you designed. Waiting is a stage, and leaving it out hides the longest and worst part of most services.

**What it costs:** Drawing waiting to scale makes the blueprint ugly and mostly empty, which is an accurate picture of the service.

**Still unknown:** Still unknown: what people do during the wait. One rang twice; the others may have done nothing at all, and the blueprint cannot say.

- Add what the product or a person shows or says at each stage.
- Mark the line between visible and invisible.

**You should end up with:** What the service shows or says at each stage, with the line of visibility drawn.

Worksheet fields for this step:

- What the product or a person shows or says at each stage
- Where the line between visible and invisible falls — Draw it. Everything below it is invisible to the person and decides most of their experience.

<details>
<summary>Help with this step</summary>

- **Line of visibility:** The boundary between what the person can see and what they cannot. Most delays and failures originate below it.
- **The visible service:** Screens, messages, and anything a person says to them. It is what a designer normally thinks of as the whole thing.

Stuck starting? Draw the line before filling the band below it, so you can see how much is hidden.

Is it enough? Every stage has something in the visible band, including the stages where the person is waiting.

</details>

#### 3. Add the back stage

**See it first.** Made-up example. Blueprinting a booking at Northside Tool Library, and treating the delay as an operations problem.

- **What the interface promised:** A confirmation, after payment, with the wording we had written carefully in an earlier module.
- **What actually happened:** Confirmations arrived the next morning. One member had rung twice in an evening, convinced her booking had failed.
- **What I said about it:** That it was an operations problem: the spreadsheet is updated by hand each evening, and the confirmation goes out when that happens. Nothing to do with the design.
- **What the blueprint showed:** The hand update sits directly beneath the confirmation stage. The design had promised immediacy that the operation cannot deliver, which makes the promise the thing at fault.
- **What changed on the front stage:** The pending state says the booking is held and confirmed by the next morning, and the reference number became the person’s proof in the meantime. The evening spreadsheet stayed exactly as it was.

**The wrong turn:** The wrong turn is calling it an operations problem, because the cause genuinely is behind the line. A person waiting does not distinguish your interface from your staffing, and a design promising what the operation cannot deliver is the design at fault.

**What it costs:** The honest pending state is much less satisfying than a confirmation, and somebody will say it makes the product look slow. It is slow, and the person now knows what to expect.

**Still unknown:** Still unknown: whether members would prefer a faster process. Changing the evening update is a real option and it belongs to somebody else, and the blueprint is how it gets raised.

- Add what staff do and what systems are involved at each stage.
- Mark where work waits for a person and where systems must agree.

**You should end up with:** What staff do and what systems are involved at each stage, with waits and agreements marked, and assumptions labelled.

Worksheet fields for this step:

- What staff do and what systems are involved at each stage — Where you cannot observe, use what you can find out by asking, and mark anything you had to assume.
- Where work waits for a person, and where two systems must agree

<details>
<summary>Help with this step</summary>

- **Back stage:** Staff work and systems the person never sees. Staff constraints are design constraints, whether or not anybody has treated them that way.
- **Where work waits for a person:** The commonest source of delay. A step done by hand each evening sets the timescale for everything the interface promises.

Stuck starting? Ask what happens after payment, step by step, until the confirmation goes out.

Is it enough? Anything you could not observe is marked as an assumption rather than drawn as a fact.

</details>

#### 4. Find the decisive constraints

- Identify the two back-stage facts that most shape the front-stage experience.
- Check them with whoever does the work, if you can.

**You should end up with:** Two back-stage facts that determine the front-stage experience, each with what it determines.

**Try it with help.** Six facts about the made up tool library. For each one, decide what it is on a blueprint.

- Bookings are entered into the spreadsheet by hand each evening.
  - **a back-stage fact that decides the experience** — It sets the timescale for confirmation, which the interface had been promising immediately. Nothing on the front stage can change it.
  - a back-stage detail with no front-stage effect — Its effect is the most visible thing in the whole journey.
  - a front-stage decision — Nobody using the service ever sees it.
- The spreadsheet is the only record of what is booked.
  - **a back-stage fact that decides the experience** — A double payment is discovered a day later, which decides what proof the person needs to be holding in the meantime.
  - a back-stage detail with no front-stage effect — It determines what can be checked and when.
  - a front-stage decision — It is invisible and decisive, which is the pattern this lesson is about.
- The spreadsheet is colour-coded green for collected and amber for overdue.
  - a back-stage fact that decides the experience — It helps the staff and changes nothing anybody outside can experience.
  - **a back-stage detail with no front-stage effect** — Not everything behind the line matters to the front. Marking these keeps the blueprint readable.
  - a front-stage decision — Nobody sees it.
- The pending state says the booking is held and confirmed by the next morning.
  - a back-stage fact that decides the experience — It is the response to one rather than a cause.
  - a back-stage detail with no front-stage effect — It is entirely front stage.
  - **a front-stage decision** — A design decision made because of a back-stage constraint, which is the outcome step 5 is asking for.
- Only one volunteer knows how to issue a refund, and she is there on Tuesdays.
  - **a back-stage fact that decides the experience** — It sets what a refund message can honestly promise, and it makes Wednesday to Monday a different service from Tuesday.
  - a back-stage detail with no front-stage effect — Anybody wanting a refund on a Wednesday meets it directly.
  - a front-stage decision — It is a staffing fact with front-stage consequences.
- The payment provider confirms within seconds.
  - a back-stage fact that decides the experience — It would be, if it were slow. Being fast means it is not what sets the timescale.
  - **a back-stage detail with no front-stage effect** — Worth having on the blueprint, because it shows the delay is not where everybody assumed.
  - a front-stage decision — It happens behind the line.

**Then:** Now mark your own back-stage band the same way, and take your two decisive facts from the first group.

**What to watch for:** The fast payment provider is the one worth noticing. Blueprinting often shows that the thing everybody blames is not the constraint, and the real one is a person doing something by hand each evening.

Worksheet fields for this step:

- Back-stage fact 1, and what it determines about the front-stage experience
- Back-stage fact 2, and what it determines

<details>
<summary>Help with this step</summary>

- **Decisive back-stage fact:** Something behind the line that sets what the front stage can honestly promise: a manual step, a single record, a person who is only there on Tuesdays.

Stuck starting? Go along the back-stage band and ask of each item what the person would notice if it changed.

Is it enough? Both decisive facts name something the front stage cannot fix.

</details>

#### 5. Change one thing

- Change a front-stage design because of a back-stage constraint.
- Save the blueprint with the change.

**You should end up with:** One front-stage change made because of a back-stage constraint, with anything assumed rather than observed marked.

Worksheet fields for this step:

- One front-stage change you made because of a back-stage constraint
- Anything in the blueprint you had to assume rather than observe
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **A front-stage change from a back-stage constraint:** Changing what you promise rather than what happens. It is usually the only change available to you, and it is frequently the right one.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take the decisive fact you cannot change and make the front stage honest about it.

Is it enough? The change makes a promise the operation can actually keep.

</details>

**Save and continue.** Saved for you: Your three bands, the line of visibility, the decisive facts and the front-stage change save as you type, on this device first and then online. Kept outside the app: The blueprint is a long sheet of paper. Photograph it, keep it in your own folder, and note the file name; the drawing is the artefact rather than this description of it. What your creator sees: Your creator reads the two decisive facts and what you assumed. A blueprint with no assumptions marked usually means the back stage was imagined. Your next action: Open Your work and choose Ready for review. The next lesson deals with the case where the person paying is not the person using it.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Add the band beneath your map for what staff and systems do at each stage.

</details>

<details>
<summary>Hint 2</summary>

Ask what actually happens after a booking and write the real steps.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: The whole service, front and back.
Task: Draw a service blueprint for one journey showing what the person sees, what staff do, and what systems are involved, and identify the two places where the back stage decides the front-stage experience.
Challenge one thing at a time, and start with the mistake this lesson is about: “That is an operations problem.” It is the experience. A person waiting an hour for a confirmation does not distinguish between your interface and your staffing, and the design that promises immediacy the operation cannot deliver is the one at fault.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the blueprint and ask whether three layers are drawn with the line of visibility marked. Look at the back-stage layer and ask whether back-stage work and systems are specific, not generic. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l03-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three layers are drawn with the line of visibility marked: A blueprint with person, visible service and back stage, and a marked line. Back-stage work and systems are specific, not generic: Named actions, people and systems rather than abstractions. Two decisive back-stage facts are identified: Two constraints that determine what the front stage can promise. A front-stage change follows from a back-stage constraint: A design change traced to a constraint on the blueprint.

**Bring forward:** A blueprint that changed a front-stage promise is strong evidence of service thinking, and it distinguishes a product designer from a screen designer. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Start from the experience map (~25 min): Read the assigned mapping guidance, noting that it excludes back-stage process. Lay out your existing journey stages as the top band.
- Add the visible service (~30 min): Add what the product or a person shows or says at each stage. Mark the line between visible and invisible.
- Add the back stage (~30 min): Add what staff do and what systems are involved at each stage. Mark where work waits for a person and where systems must agree.
- Find the decisive constraints (~20 min): Identify the two back-stage facts that most shape the front-stage experience. Check them with whoever does the work, if you can.
- Change one thing (~15 min): Change a front-stage design because of a back-stage constraint. Save the blueprint with the change.

Pause after any step; save the artifact and next action.

**Free tool path.** A long sheet of paper with three horizontal bands, drawn by hand and photographed. No blueprint tool or template is required.

### Output

A blueprint with three layers for one journey; The line of visibility marked; Two back-stage facts that determine the front-stage experience; One front-stage change made because of a back-stage constraint

### Checks

- What does a blueprint add to an experience map? Answer: The layers beneath the line of visibility: what staff do, what systems are involved, and where work waits. The mapping source explicitly stops before those.
- Why are staff constraints design constraints? Answer: Because a promise the operation cannot keep becomes a broken promise in the interface. One person teaching all day cannot answer within two hours.
- Where does fragility concentrate? Answer: Where work waits for a person and where two systems must agree. Both are invisible on screens and decisive in experience.

### Rubric and remediation

**Three layers are drawn with the line of visibility marked**

Adequate evidence: A blueprint with person, visible service and back stage, and a marked line.

- 0 — An experience map with no back stage.
- 1 — Layers drawn without a marked line.
- 2 — All three with the line marked.
- 3 — As adequate, and support processes are included alongside systems.

If below 2: Add the band beneath your map for what staff and systems do at each stage. Show at recheck: The blueprint.

**Back-stage work and systems are specific, not generic**

Adequate evidence: Named actions, people and systems rather than abstractions.

- 0 — Generic boxes such as processing.
- 1 — Some specifics.
- 2 — Named work, people and systems throughout.
- 3 — As adequate, and the detail was confirmed with whoever does the work.

If below 2: Ask what actually happens after a booking and write the real steps. Show at recheck: The back-stage layer.

**Two decisive back-stage facts are identified**

Adequate evidence: Two constraints that determine what the front stage can promise.

- 0 — None identified.
- 1 — One identified.
- 2 — Two, with their front-stage consequences.
- 3 — As adequate, and at least one contradicts something the interface currently implies.

If below 2: Look for where work waits for a person and where systems must agree. Show at recheck: The two facts.

**A front-stage change follows from a back-stage constraint**

Adequate evidence: A design change traced to a constraint on the blueprint.

- 0 — No change.
- 1 — A change unrelated to the blueprint.
- 2 — A change traced to a specific back-stage fact.
- 3 — As adequate, and the change makes an honest promise where the old one was optimistic.

If below 2: Find the promise the operation cannot keep and change the promise. Show at recheck: The change.

### Portfolio contribution

A blueprint that changed a front-stage promise is strong evidence of service thinking, and it distinguishes a product designer from a screen designer.

### Assigned resources

- R58: [GOV.UK: creating an experience map](https://www.gov.uk/service-manual/user-research/creating-an-experience-map) — The four steps and the layers of what people do, think and feel. Purpose: Supplies the front-stage foundation the blueprint extends. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06; published 21 February 2017. It explicitly does not cover service blueprints or back-stage process, so the lower layers in this lesson are the course's own extension. Fallback: R04.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users and on having a multidisciplinary team. Purpose: Grounds the argument that operations and interface are one experience. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-service framing; the staffing constraints in a small business are the course's own emphasis. Fallback: R07.

## Lesson 4: When the buyer is not the user

Stable ID: m17-l04-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Map the roles in a business-to-business version of your product — buyer, administrator, everyday user — and design one screen that serves two of them without failing the third.

**Bring forward.** Your product and its permission work from m07.

In business software the person choosing the product is rarely the person using it, and designs that ignore this fail slowly and expensively.

### Learn

The separation is structural. Someone decides to buy, someone configures and maintains, and someone uses it every day, and in many organisations these are three people with different incentives. Design decisions that please the buyer — dashboards, configurability, reporting — frequently cost the everyday user time, which is invisible at purchase and decisive at renewal.

The administrator is the most neglected of the three. They do the tedious work of setting up roles, importing data and fixing things when they break, and their tasks are usually designed last and least. In a product with real adoption problems, the administrator is often where the friction actually is.

The practical rule is to design for the everyday user and give the buyer evidence rather than features. A demonstration of how quickly someone completes their work is more persuasive than a configuration surface nobody will use, and it does not cost the daily experience anything.

Your permission work from m07 and m13 becomes structural here: the roles are not just about what people may do, but about whose experience the product optimises when they conflict, which is a strategy decision rather than a permissions one.

**Common misconception.** “The buyer is the customer.” The buyer decides once; the everyday user decides whether it is still used in a year. Products that optimise for the purchase decision accumulate resentment and lose renewals.

### Worked example

The class product's business version has three roles: an office manager who buys wellbeing classes for staff, an administrator who allocates places and chases attendance, and the staff member who books a class. Their conflicts: the buyer wants attendance reporting, which the staff member experiences as surveillance; the administrator wants bulk allocation, which the staff member experiences as being enrolled without choosing. The screen designed — the staff member's booking view — shows their own place clearly, shows what their employer can see about it, and gives the administrator an allocation route that the staff member can decline. The buyer gets an aggregate report with no individual attendance.

#### When the buyer is not the user

Map the roles in a business-to-business version of your product — buyer, administrator, everyday user — and design one screen that serves two of them without failing the third.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Paper and written role descriptions. No enterprise tooling is involved.

- Starting material: Your product and its role thinking.
- Create HaruCourse/Practice/m17-l04-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the permission vocabulary

- Read the assigned overview for principals, roles and least privilege.
- Note that it is infrastructure vocabulary rather than interface guidance.

**You should end up with:** What the permission reading gives you and what it does not.

Worksheet fields for this step:

- What the assigned overview gives you, and what it does not — It is infrastructure vocabulary. It says nothing about what a screen should show, which is this lesson’s work.

<details>
<summary>Help with this step</summary>

- **Least privilege:** Giving each role only the access its work needs. It is an infrastructure principle with a direct interface consequence: fewer things visible to people who should not see them.
- **Infrastructure vocabulary:** Words for how permissions are structured. None of it says what a screen should show, which is where the design work is.

Stuck starting? Read it for the vocabulary and note the question it leaves open.

Is it enough? You can say what the reading does not cover.

</details>

#### 2. Describe the three roles

- Write what each role wants and is accountable for.
- Note which of them chose the product.

**You should end up with:** Three roles described by what they want and are accountable for, with the one who chose the product named.

Worksheet fields for this step:

- The buyer · what they want and what they are accountable for
- The administrator · what they want and what they are accountable for
- The everyday user · what they want and what they are accountable for
- Which of them chose the product

<details>
<summary>Help with this step</summary>

- **The buyer:** Whoever decided to purchase. They decide once, and their accountability is usually budget and being able to show the thing is used.
- **The administrator:** Whoever runs it day to day: allocating, chasing, fixing. They are a user with their own tasks, and they are routinely designed for last.
- **The everyday user:** The person the product is nominally for, who did not choose it and decides whether it is still used in a year.

Stuck starting? Write what each is accountable for rather than what they would like.

Is it enough? All three are described by accountability rather than by attitude.

</details>

#### 3. Find the conflicts

**See it first.** Made-up example. Designing the business version of a class-booking product, and designing for whoever signed.

- **What the buyer asked for:** Attendance reporting: who booked, who turned up, who did not. Entirely reasonable from where she sits, since she has to show the scheme is used.
- **What we built:** Exactly that. The buyer was delighted, the purchase went through, and the feature took a fortnight.
- **What the staff experienced:** Being watched. Bookings dropped over two months and the classes that ran were the ones people felt safe being seen at.
- **What happened at renewal:** The report showed low usage, which was true and was caused by the report. The buyer concluded the scheme was not wanted.
- **What we should have given her:** An aggregate: how many places used, which classes were popular, month by month. It answers her accountability completely and names nobody.

**The wrong turn:** The wrong turn is building what the buyer asked for, because the buyer signed and the request is reasonable. The buyer decides once; the everyday user decides whether it is still used in a year, and a feature that costs them usage destroys the thing the buyer was buying.

**What it costs:** The aggregate cannot answer a manager asking about one named person, and occasionally somebody genuinely needs to. Saying no to that is the trade.

**Still unknown:** Still unknown: how much of the drop was the reporting. Two months and one change is not a controlled comparison, and the mechanism was what the staff said.

- Name two places where the roles want incompatible things.
- Say who currently wins and why.

**You should end up with:** Two conflicts named, each with the pair of roles and who currently wins.

Worksheet fields for this step:

- Conflict 1 · what two roles want incompatibly, and who currently wins
- Conflict 2 · the same, for a different pair

<details>
<summary>Help with this step</summary>

- **Conflict:** Two roles wanting incompatible things. Attendance reporting and not being watched is the standard one; bulk allocation and choosing for yourself is the other.
- **Who currently wins:** Usually the buyer, because the buyer signed. Naming it is what makes it a decision rather than a default.

Stuck starting? Ask what the buyer would want that the everyday user would dislike.

Is it enough? Both conflicts name a pair of roles and a current winner.

</details>

#### 4. Design the screen

- Design one screen serving two roles without harming the third.
- Show the everyday user what others can see about them.

**You should end up with:** One screen serving two roles without failing the third, showing the everyday user what others can see about them.

**Try it with help.** Six features somebody might ask for in a made up business version. For each one, decide who it serves and at whose cost.

- A monthly report of how many places were used and which classes were popular, naming nobody.
  - **serves everybody** — It answers the buyer’s accountability completely and costs the staff member nothing, because nobody is named.
  - serves the buyer at the user’s cost — The cost is what naming people would produce, and this does not.
  - serves the administrator at the user’s cost — It makes the administrator’s reporting easier as well.
- A report showing which named staff booked and which turned up.
  - serves everybody — The buyer gets what she asked for and the staff member gets watched.
  - **serves the buyer at the user’s cost** — Bookings fall, the report shows low usage, and the scheme is judged unwanted. The feature destroys the thing it measures.
  - serves the administrator at the user’s cost — The administrator is a conduit here rather than the beneficiary.
- Bulk allocation, so the administrator can enrol thirty staff into a class at once.
  - serves everybody — The staff member is enrolled in something they did not choose, at a time they may not be free.
  - serves the buyer at the user’s cost — The buyer benefits indirectly; the work saved is the administrator’s.
  - **serves the administrator at the user’s cost** — It is a real need and it needs a decline route, or it becomes enrolment by decree.
- Bulk allocation that arrives as an invitation the staff member can decline in one tap.
  - **serves everybody** — The administrator does the work once, the staff member keeps the choice, and the buyer still gets places used.
  - serves the buyer at the user’s cost — Nothing here costs the staff member anything.
  - serves the administrator at the user’s cost — It serves the administrator without the cost.
- A line on the staff member’s booking screen saying exactly what their employer can see.
  - **serves everybody** — It costs the buyer nothing and removes the assumption that the worst is true. Products that hide this lose trust for free.
  - serves the buyer at the user’s cost — The buyer loses nothing, unless the true answer is embarrassing, which is itself a finding.
  - serves the administrator at the user’s cost — It makes the administrator’s job easier by removing a recurring question.
- A control letting a manager cancel a staff member’s booking without telling them.
  - serves everybody — Somebody turns up to a class they are no longer booked into.
  - **serves the buyer at the user’s cost** — It solves a real scheduling problem by making the product unreliable for the person using it. Without telling them is the part that makes it indefensible.
  - serves the administrator at the user’s cost — The administrator may be the one operating it, and the request comes from above them.

**Then:** Now design your own screen, and check the third role would still choose to use the product because of it.

**What to watch for:** Two of the costly three become acceptable with one addition: a decline route, or telling the person. Most buyer-versus-user conflicts are not about the feature but about whether the person it happens to gets a say or a warning.

Worksheet fields for this step:

- The screen, and which two roles it serves
- How it shows the everyday user what others can see about them — Somebody who does not know what their employer sees assumes the worst, which is usually accurate and always corrosive.
- How the third role is not failed by it

<details>
<summary>Help with this step</summary>

- **What others can see:** Shown to the person it is about. Without it, people assume the worst, which is corrosive and frequently correct.
- **Failing the third role:** Serving two by making the third worse. The test is whether the third would still choose to use it.

Stuck starting? Design the everyday user’s screen first; it is the one nobody starts with.

Is it enough? The third role can see what the other two can see about them.

</details>

#### 5. Give the buyer evidence

**See it first.** Made-up example. Answering a buyer’s reporting need, and answering it with less of the same thing.

- **What I offered:** The same named attendance report, quarterly rather than monthly. Less surveillance, I thought, and still an answer.
- **What it changed for the staff member:** Nothing. Being named four times a year rather than twelve is the same kind of thing at a lower frequency, and people behave as though it were monthly.
- **What the buyer actually had to show:** That the scheme was being used and worth renewing. Nothing in her accountability required a name.
- **What answered it completely:** Places used, by class and by month, with nobody named. She could show usage, see which classes worked, and make the renewal case.
- **What I learned about offering alternatives:** Less of the harmful thing is not an alternative. The alternative has to answer the accountability by a different route.

**The wrong turn:** The wrong turn is offering a reduced version of the thing you objected to, because it feels like meeting somebody halfway. A smaller dose of the same harm changes the amount and not the kind.

**What it costs:** The aggregate genuinely cannot answer a manager asking about one named person, and occasionally somebody has a legitimate reason to ask.

**Still unknown:** Still unknown: whether the buyer will accept it at renewal. She has what she needs for the case she has to make, and somebody above her may ask for more.

- Decide what the buyer gets instead of the feature that would cost the user.
- Save the roles, conflicts and screen.

**You should end up with:** What the buyer gets instead of the feature that would cost the user.

Worksheet fields for this step:

- What the buyer gets instead of the feature that would cost the user
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Instead, not nothing:** The buyer has a real accountability. Refusing the feature without answering it loses the argument and deserves to.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write what the buyer has to be able to show, then find the smallest thing that shows it.

Is it enough? The buyer’s accountability is answered without naming anybody.

</details>

**Save and continue.** Saved for you: Your three roles, the conflicts, the screen and the buyer alternative save as you type, on this device first and then online. Kept outside the app: Sketches of the screen stay in your own folder. Nothing about any real employer or employee belongs here. What your creator sees: Your creator reads what the buyer gets instead. A refusal with no alternative is the half of this lesson that usually goes missing. Your next action: Open Your work and choose Ready for review. The next lesson traces what happens after people adapt to your design.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each role write what they are judged on; that explains what they want.

</details>

<details>
<summary>Hint 2</summary>

Look for a feature one role wants that another would experience as a cost.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: When the buyer is not the user.
Task: Map the roles in a business-to-business version of your product — buyer, administrator, everyday user — and design one screen that serves two of them without failing the third.
Challenge one thing at a time, and start with the mistake this lesson is about: “The buyer is the customer.” The buyer decides once; the everyday user decides whether it is still used in a year. Products that optimise for the purchase decision accumulate resentment and lose renewals.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the role descriptions and ask whether three roles are described with their accountabilities. Look at the conflict list and ask whether two genuine conflicts are named with the current winner. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l04-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three roles are described with their accountabilities: Buyer, administrator and everyday user described with what each answers for. Two genuine conflicts are named with the current winner: Two incompatible wants with who currently prevails. The designed screen serves two roles without failing the third: One screen with the third role's interests explicitly protected. The buyer receives evidence rather than a costly feature: A stated substitute for the feature that would harm the user.

**Bring forward:** Role conflicts with a designed resolution are exactly the material business-to-business interviews probe, and few junior portfolios contain any. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Read the permission vocabulary (~25 min): Read the assigned overview for principals, roles and least privilege. Note that it is infrastructure vocabulary rather than interface guidance.
- Describe the three roles (~30 min): Write what each role wants and is accountable for. Note which of them chose the product.
- Find the conflicts (~25 min): Name two places where the roles want incompatible things. Say who currently wins and why.
- Design the screen (~25 min): Design one screen serving two roles without harming the third. Show the everyday user what others can see about them.
- Give the buyer evidence (~15 min): Decide what the buyer gets instead of the feature that would cost the user. Save the roles, conflicts and screen.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper and written role descriptions. No enterprise tooling is involved.

### Output

Three roles described with their differing wants; Two conflicts between roles named; One screen serving two roles without failing the third; What the buyer gets instead of the feature they asked for

### Checks

- Why does the everyday user matter more than the buyer? Answer: Because the buyer decides once and the user decides whether it is still used in a year. Optimising for purchase accumulates resentment and loses renewals.
- Who is usually neglected? Answer: The administrator, whose setup, import and repair tasks are designed last and are frequently where the real friction lives.
- What do you give a buyer instead of a costly feature? Answer: Evidence: a demonstration of how quickly the work gets done. It persuades at purchase without taxing the daily experience.

### Rubric and remediation

**Three roles are described with their accountabilities**

Adequate evidence: Buyer, administrator and everyday user described with what each answers for.

- 0 — Roles named without wants.
- 1 — Wants described without accountability.
- 2 — All three with wants and accountabilities.
- 3 — As adequate, and it is stated which role chose the product.

If below 2: For each role write what they are judged on; that explains what they want. Show at recheck: The role descriptions.

**Two genuine conflicts are named with the current winner**

Adequate evidence: Two incompatible wants with who currently prevails.

- 0 — No conflicts identified.
- 1 — Conflicts named without resolution.
- 2 — Two named with the current winner and why.
- 3 — As adequate, and one conflict involves surveillance or autonomy.

If below 2: Look for a feature one role wants that another would experience as a cost. Show at recheck: The conflict list.

**The designed screen serves two roles without failing the third**

Adequate evidence: One screen with the third role's interests explicitly protected.

- 0 — A screen serving one role.
- 1 — Two served, the third unexamined.
- 2 — Two served with the third's protection stated.
- 3 — As adequate, and the everyday user can see what others can see about them.

If below 2: Walk the screen as the role you did not design for and write what it costs them. Show at recheck: The screen.

**The buyer receives evidence rather than a costly feature**

Adequate evidence: A stated substitute for the feature that would harm the user.

- 0 — The buyer's feature built as requested.
- 1 — The feature refused with no substitute.
- 2 — A substitute that serves the buyer's actual accountability.
- 3 — As adequate, and the substitute is cheaper to build than the feature.

If below 2: Ask what the buyer is trying to prove, and give them that instead of the mechanism they asked for. Show at recheck: The substitute.

### Portfolio contribution

Role conflicts with a designed resolution are exactly the material business-to-business interviews probe, and few junior portfolios contain any.

### Assigned resources

- R44: [Google Cloud: IAM overview](https://docs.cloud.google.com/iam/docs/overview) — Principals, roles, permissions, inheritance and least privilege. Purpose: Supplies precise vocabulary for describing multi-role products. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. Cloud infrastructure documentation, not a role-based interface pattern library: every interface decision here is the course's own. Fallback: R19.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users and on making sure everyone can use the service. Purpose: Supports designing for the person who did not choose the product. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public services have no buyer-user split of this kind; the application is the course's own. Fallback: R07.

## Lesson 5: Systems that push back

Stable ID: m17-l05-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Identify one place where your product's design creates a second-order effect, trace the loop, and design a response that does not simply add a warning.

**Bring forward.** Your blueprint and your product's incentives.

Designs change behaviour, and changed behaviour changes the system the design was built for. Ignoring the loop produces fixes that make things worse.

### Learn

First-order thinking asks what the change does. Second-order asks what people do about it. Making cancellation easier reduces friction and may increase casual bookings; adding reminders reduces no-shows and may train people to ignore messages. Neither effect is a reason not to act, and both are reasons to look one step further before declaring success.

Loops are where effects compound. If a design increases bookings, and increased bookings fill classes, and full classes produce disappointed people who then book earlier, you have a loop, and the loop determines the eventual behaviour more than the initial change did. Drawing it is usually enough to see it.

Delay is what hides loops. An effect that arrives six weeks later is attributed to something else, which is how teams keep re-fixing the same problem. Marking the delay on your loop is what makes the connection visible when the effect eventually arrives.

People optimise for what is measured and rewarded, including staff. A provider rewarded for filling classes will overbook if the design lets them; a support team measured on ticket closure will close tickets. The design response is structural — change what is easy and what is visible — rather than a warning nobody reads.

**Common misconception.** “We will monitor for unintended consequences.” Monitoring finds them after they have compounded and been attributed to something else. Tracing the likely loop before shipping costs an hour.

### Worked example

The loop: making cancellation one tap reduced the friction that had been suppressing casual bookings; casual bookings rose; more of them were cancelled late; late cancellations left classes half-full, which the provider experienced as unreliable demand and responded to by overbooking; overbooking produced turned-away attendees, which is the worst outcome in the whole service. The delay between the change and the overbooking response was about six weeks. The design response was structural rather than a warning: cancellation stayed one tap, and a late cancellation now offers the place to a short waiting list, which closes the loop at the point where it was doing harm.

#### Systems that push back

Identify one place where your product's design creates a second-order effect, trace the loop, and design a response that does not simply add a warning.

**Where to practise:** Draw the loop your change sets off, with the delay marked on each arrow on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper for the loop diagram. Boxes and arrows with the delay marked; no systems-modelling tool is required.

- Starting material: Your service blueprint.
- Create HaruCourse/Practice/m17-l05-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Choose a change and ask what follows

- Take a change you have made or plan to make.
- Write what people will do differently once it exists.

**You should end up with:** One change chosen, with what people will do differently once it exists.

Worksheet fields for this step:

- A change you have made or plan to make
- What people will do differently once it exists — The adaptation, not the intention. What does it now make easy that was not easy before?

<details>
<summary>Help with this step</summary>

- **Second-order effect:** What happens after people adapt to a change. The first-order effect is what you designed; the second is what they do with it.
- **Adaptation:** The behaviour your change makes easy. People do more of whatever you made cheap, whether or not you wanted them to.

Stuck starting? Ask what your change makes cheap that used to be expensive.

Is it enough? Your adaptation is a behaviour rather than an attitude.

</details>

#### 2. Trace the loop

**See it first.** Made-up example. Making cancellation one tap at a class provider, and watching the consequence arrive somewhere else.

- **What we changed:** Cancellation went from a phone call to one tap. An obvious improvement, and everybody who had struggled with it was pleased.
- **What people did:** Booked more casually, because the cost of being wrong had gone. Bookings rose about a fifth, which looked like a success.
- **What arrived four weeks later:** Late cancellations rose. Classes that looked full on Thursday ran half-full on Saturday, twice in a row.
- **What the provider did about it:** Overbooked, reasonably, to protect against the pattern. Two weeks after that, a class was genuinely full and four people were turned away at the door.
- **What the loop was:** Easier cancellation, more casual bookings, more late cancellations, unreliable demand, overbooking, turned-away attendees — which is the worst outcome in the service, six weeks after a change everybody liked.

**The wrong turn:** The wrong turn is stopping at the first effect, because it is the one you designed and it was good. Six weeks of delay means the turned-away attendees get attributed to overbooking rather than to a cancellation button.

**What it costs:** Tracing loops before shipping produces objections to changes that are genuinely improvements, and most of the loops you trace will not happen.

**Still unknown:** Still unknown: how much of the rise in late cancellations came from the change. Bookings rose too, and nobody separated the two.

- Follow the adaptation to its effect on the system.
- Check whether that effect feeds back to the original cause.
- Mark the delay on each arrow.

**You should end up with:** The chain traced from adaptation to system effect, whether it feeds back, and the delay on each arrow.

Worksheet fields for this step:

- The chain from the adaptation to its effect on the system
- Whether that effect feeds back to the original cause, and how
- The delay on each arrow — Delays are what hide loops. An effect six weeks later gets attributed to something else entirely.

<details>
<summary>Help with this step</summary>

- **Loop:** Where the effect of a change feeds back into its own cause. It is what makes a small change produce a large and delayed result.
- **Delay:** How long each step takes. Delays are what hide loops: an effect six weeks later gets attributed to something else entirely.

Stuck starting? Draw boxes and arrows on paper, and write a time on every arrow.

Is it enough? At least one arrow has a delay measured in weeks.

</details>

#### 3. Name the incentives

**See it first.** Made-up example. Checking incentives at a class provider, and checking only the members.

- **What I checked:** What the easier cancellation rewarded members for doing. More casual booking, which I had already traced.
- **Who I had not checked:** The provider. She is measured, by herself, on classes running rather than being cancelled for low numbers.
- **What that incentive produced:** Overbooking, as soon as demand looked unreliable. It is entirely rational from where she stands and it is the step that turned an annoyance into people turned away at the door.
- **What I had assumed:** That the provider was a fixed part of the system rather than a party with incentives of her own. Everybody in a loop is responding to something.
- **What changed in the response:** The waiting list serves her incentive directly: the class fills, so there is nothing for overbooking to protect against. It closes the loop at the point where somebody was being rewarded for something harmful.

**The wrong turn:** The wrong turn is checking the incentives of the people your design is for, because those are the ones you have been thinking about. Everybody in the loop responds to something, and the harmful step is usually somebody else being rational.

**What it costs:** Taking the provider’s incentive seriously means designing around a behaviour you would rather she did not have, instead of asking her to stop.

**Still unknown:** Still unknown: whether she would have stopped overbooking if asked. Possibly, and the structural answer works whether or not she does.

- Write what each party is rewarded or measured on.
- Check your change does not reward something harmful.

**You should end up with:** What each party is rewarded or measured on, and whether your change rewards anything harmful.

Worksheet fields for this step:

- What each party is rewarded or measured on
- Whether your change rewards anything harmful

<details>
<summary>Help with this step</summary>

- **Incentive:** What somebody is rewarded or measured on. People optimise for it, including in ways nobody intended.
- **Rewarding harm:** Making something easy or visible that damages the system. It rarely looks like that at the moment of the decision.

Stuck starting? Write what each party would do more of if they were trying to score well.

Is it enough? You checked your own change against each party’s incentive.

</details>

#### 4. Design the structural response

- Change what is easy or visible rather than adding a warning.
- Check the response does not create its own loop.

**You should end up with:** A structural response that changes what is easy or visible, with a check that it does not create its own loop.

**Try it with help.** Six responses to the made up cancellation loop. For each one, decide what it would do.

- A late cancellation offers the place to a short waiting list automatically.
  - **a structural response** — It closes the loop where it was doing harm: the class fills, demand stays legible, and nobody has to be more careful.
  - a warning in disguise — Nobody is being asked to change their behaviour.
  - a response that creates its own loop — It might, if the waiting list becomes the normal way to book. Worth watching, and much smaller than the loop it closes.
- A confirmation asking “Are you sure? Late cancellations affect other members.”
  - a structural response — Nothing about the system changes. One tap became two taps and a small guilt.
  - **a warning in disguise** — It asks the person to solve a structural problem by being more considerate, and the ones who read it are the ones least likely to be the problem.
  - a response that creates its own loop — It mostly produces irritation rather than a loop.
- A small fee for cancelling within 24 hours.
  - a structural response — It genuinely changes an incentive, which is why it is tempting.
  - a warning in disguise — It has teeth rather than words.
  - **a response that creates its own loop** — People stop cancelling and simply do not turn up, which is worse for the provider than a cancellation and invisible until the class starts.
- Put cancellation back to a phone call.
  - a structural response — It removes the loop by removing the improvement, along with everybody it helped.
  - a warning in disguise — It is a real change rather than a message.
  - **a response that creates its own loop** — The friction suppressed bookings before and would again, and the people it suppresses are the casual ones the provider needs.
- Show, at the moment of booking, how many places are left and that the class runs only if six people attend.
  - **a structural response** — It changes what is visible at the moment of the decision, so a casual booking is made with its consequence in view. Nobody is asked to be more careful in the abstract.
  - a warning in disguise — It states a fact about the class rather than an appeal to conscience.
  - a response that creates its own loop — It could suppress bookings for nearly-empty classes, which is worth watching and is roughly what the provider needs to know anyway.
- A reminder email the day before, asking people to cancel if they cannot attend.
  - a structural response — It changes nothing about what is easy; it asks people to remember and to care.
  - **a warning in disguise** — A polite one, and it moves the problem onto the person least able to fix the structure.
  - a response that creates its own loop — It is too weak to produce one.

**Then:** Now choose your own response, and check it does not simply ask somebody to be more careful.

**What to watch for:** Two of these change what somebody sees or what happens automatically, and neither asks anything of the person. The fee and the revert are real changes that trade one loop for another, which is worth knowing before shipping rather than after.

Worksheet fields for this step:

- What you changed about what is easy or visible — Not a warning. A warning asks the person to solve a structural problem by being more careful.
- Whether your response creates a loop of its own

<details>
<summary>Help with this step</summary>

- **Structural response:** Changing what is easy, visible or automatic. It works without anybody having to be more careful.
- **A warning:** Asking the person to solve a structural problem by paying attention. It is the commonest response and it moves the problem onto whoever is least able to fix it.

Stuck starting? Ask what would close the loop without anybody having to remember anything.

Is it enough? Your response changes what is easy, visible or automatic rather than what is requested.

</details>

#### 5. Record

- Write what you would watch for, and when it would appear.
- Save the loop and the response.

**You should end up with:** What you would watch for and when it would appear, and the repair the Check questions asked for.

Worksheet fields for this step:

- What you would watch for, and when it would appear
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **When it would appear:** The delay you marked, applied forward. Watching for something in the wrong week is the same as not watching.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Take the longest delay on your diagram and count forward from the ship date.

Is it enough? Your watch item has a date attached rather than an intention to keep an eye on it.

</details>

**Save and continue.** Saved for you: Your change, the traced loop, the incentives, the response and the watch item save as you type, on this device first and then online. Kept outside the app: The loop is a drawing. Photograph it, keep it in your own folder, and note the file name; the delays on the arrows are the part that matters. What your creator sees: Your creator reads the delays and whether your response is structural. A response that asks people to be careful is the commonest answer here. Your next action: Open Your work and choose Ready for review. The next lesson maps the people who can stop any of this happening.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Ask what people will do differently once the change exists, then what that causes.

</details>

<details>
<summary>Hint 2</summary>

Follow your chain until something affects the original cause, and estimate how long each step takes.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Systems that push back.
Task: Identify one place where your product's design creates a second-order effect, trace the loop, and design a response that does not simply add a warning.
Challenge one thing at a time, and start with the mistake this lesson is about: “We will monitor for unintended consequences.” Monitoring finds them after they have compounded and been attributed to something else. Tracing the likely loop before shipping costs an hour.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the effect statement and ask whether A second-order effect is identified with the adaptation behind it. Look at the loop and ask whether A loop is drawn with delays marked. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l05-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** A second-order effect is identified with the adaptation behind it: An effect stated with the behaviour change that produces it. A loop is drawn with delays marked: A diagram where an effect feeds back to its cause, with time marked. Incentives are named for each party: What each party is rewarded or measured on, including staff. The response is structural rather than a warning: A change to what is easy or visible, checked for its own loop.

**Bring forward:** A traced loop with a structural response is systems thinking made concrete, and it is a rare thing to be able to show at any level. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Choose a change and ask what follows (~25 min): Take a change you have made or plan to make. Write what people will do differently once it exists.
- Trace the loop (~30 min): Follow the adaptation to its effect on the system. Check whether that effect feeds back to the original cause. Mark the delay on each arrow.
- Name the incentives (~25 min): Write what each party is rewarded or measured on. Check your change does not reward something harmful.
- Design the structural response (~25 min): Change what is easy or visible rather than adding a warning. Check the response does not create its own loop.
- Record (~15 min): Write what you would watch for, and when it would appear. Save the loop and the response.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper for the loop diagram. Boxes and arrows with the delay marked; no systems-modelling tool is required.

### Output

One second-order effect identified with the adaptation that causes it; A drawn loop with its delay marked; What people are being rewarded to do, named; A structural response rather than a warning

### Checks

- What is a second-order effect? Answer: What happens after people adapt to your change. Easier cancellation reduces friction and may also increase casual bookings, which is a different problem.
- Why do delays matter? Answer: Because an effect arriving weeks later is attributed to something else, so the same problem gets re-fixed repeatedly without anyone connecting it to its cause.
- Why is a warning not a response? Answer: Because it asks people to act against what the design makes easy. Structural responses change what is easy or visible, which is what actually changes behaviour.

### Rubric and remediation

**A second-order effect is identified with the adaptation behind it**

Adequate evidence: An effect stated with the behaviour change that produces it.

- 0 — Only first-order effects considered.
- 1 — An effect asserted without the adaptation.
- 2 — Both stated.
- 3 — As adequate, and the effect is plausible enough that someone might dispute it.

If below 2: Ask what people will do differently once the change exists, then what that causes. Show at recheck: The effect statement.

**A loop is drawn with delays marked**

Adequate evidence: A diagram where an effect feeds back to its cause, with time marked.

- 0 — A linear chain.
- 1 — A loop without delays.
- 2 — A loop with delays on the arrows.
- 3 — As adequate, and the delay explains why the effect would be misattributed.

If below 2: Follow your chain until something affects the original cause, and estimate how long each step takes. Show at recheck: The loop.

**Incentives are named for each party**

Adequate evidence: What each party is rewarded or measured on, including staff.

- 0 — Incentives not considered.
- 1 — User incentives only.
- 2 — All parties including staff and the business.
- 3 — As adequate, and one incentive is identified as conflicting with the design's intent.

If below 2: Ask what each person is judged on; that predicts what they will do with your change. Show at recheck: The incentive list.

**The response is structural rather than a warning**

Adequate evidence: A change to what is easy or visible, checked for its own loop.

- 0 — A warning or education.
- 1 — A structural change without checking its effects.
- 2 — Structural, with its own second-order effects considered.
- 3 — As adequate, and the response closes the loop at the point of harm rather than at the original change.

If below 2: Replace the warning with a change to what the design makes easy, then trace that too. Show at recheck: The response.

### Portfolio contribution

A traced loop with a structural response is systems thinking made concrete, and it is a rare thing to be able to show at any level.

### Assigned resources

- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users and on iterating and improving frequently. Purpose: Frames second-order effects as part of solving the problem rather than as surprises. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. It does not teach systems modelling; the loops and delays here are the course's own. Fallback: R07.
- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — Slips, mistakes and how design shapes behaviour. Purpose: Supports the argument that structure changes behaviour where warnings do not. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. Written about individual errors rather than system loops; the extension is this lesson's. Fallback: R02.

## Lesson 6: Stakeholders and their actual interests

Stable ID: m17-l06-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Map the people who can affect or block your work, what each is accountable for, and design your approach to the one whose opposition would cost most.

**Bring forward.** Your project and the decisions you need made.

Work fails for stakeholder reasons more often than for design reasons, and stakeholder reasons are usually legible if anyone bothers to look.

### Learn

Accountability predicts behaviour better than title. A person judged on support volume will resist anything that might increase it, however junior they are; a person judged on launch dates will resist anything that adds a week. Mapping what each person answers for tells you what they will do, which seniority does not.

Interest and influence separate the map into four useful groups: people who care and can act, people who care and cannot, people who can act and do not care, and everyone else. The second group are your allies and are usually neglected; the third are the ones who block things absent-mindedly.

Opposition is rarely irrational. It is usually a correct perception of a cost that falls on that person, and treating it as obstruction rather than information is how designers acquire a reputation for being difficult. Finding the cost, and either removing it or acknowledging it, is the work.

The quiet blocker — the person who does not argue and simply never prioritises your thing — is more dangerous than the vocal sceptic, who at least tells you what the objection is. Identifying them is worth more than winning any meeting.

**Common misconception.** “If the design is right, it will win.” Designs are adopted by people with their own accountabilities and constraints. Understanding those is not politics; it is the ordinary work of getting something built.

### Worked example

The map for the booking work: the provider, accountable for revenue and her own time, high interest and high influence; the developer, accountable for delivery dates, moderate interest and high influence; the provider's assistant, accountable for the day-to-day list, high interest and low influence, and the person who best knew where the real problems were; and the payment provider, no interest and high influence over what is possible. The costly opposition was the developer, whose resistance was rational — the work threatened a date. The approach: reduce the scope so it fits the appetite, bring the estimate down by defining the states, and give him the ability to ship it in two parts.

#### Stakeholders and their actual interests

Map the people who can affect or block your work, what each is accountable for, and design your approach to the one whose opposition would cost most.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A written map or a simple two-axis sketch. No stakeholder-mapping tool is required.

- Starting material: Your project and its pending decisions.
- Create HaruCourse/Practice/m17-l06-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. List by accountability

- List everyone who can affect or block the work.
- Write what each is accountable for, not their title.

**You should end up with:** Everybody who can affect or block the work listed by what they are accountable for.

Worksheet fields for this step:

- Everybody who can affect or block the work, and what each is accountable for — Accountable for, not their job title. What does somebody else ask them about?
- If you have no team, whose decisions actually constrain your work — A client, a provider, a platform, a family member whose time you need. The mapping works on any of them.

<details>
<summary>Help with this step</summary>

- **Accountability:** What somebody else asks them about: a date, a budget, a queue, a number they report. It predicts behaviour far better than a job title.
- **Affect or block:** Anybody whose agreement you need or whose disagreement would stop it. It includes people with no formal authority at all.

Stuck starting? For each person, write the question their own manager asks them.

Is it enough? Nobody on your list is described only by their role.

</details>

#### 2. Place them

**See it first.** Made-up example. Placing stakeholders for booking work, and placing them by how much they talk.

- **Who I put at the top:** The two people who commented most: the provider, who has views about everything, and a committee member who replies to every message.
- **Who I put at the bottom:** The assistant, who had said almost nothing in three meetings.
- **What the assistant actually knew:** Everything. She handles the list every evening, takes the phone calls, and could name the four things that go wrong most, in order.
- **What she could decide:** Nothing at all. High interest, no influence, and the best-informed person in the project.
- **What placing her properly changed:** She became the person I checked things with rather than the person I informed. The committee member, who had high influence and almost no interest, needed two sentences a month rather than a conversation a week.

**The wrong turn:** The wrong turn is placing people by how much they contribute in meetings, because volume is the visible signal. It confuses interest with influence and hides the person who knows most.

**What it costs:** Treating a quiet colleague as the best source means a weekly conversation with somebody whose time is not formally yours to take.

**Still unknown:** Still unknown: whether the committee member’s low interest is permanent. Interest changes when something goes wrong, and the map is a snapshot.

- Place each on interest and influence.
- Mark the allies with interest and no influence.

**You should end up with:** Each person placed on interest and on influence, with the high-interest allies who decide nothing identified.

Worksheet fields for this step:

- Each person placed on interest and on influence — Two separate axes. Somebody can care enormously and decide nothing.
- The allies with high interest and no influence — Usually the people who know best where the real problems are.

<details>
<summary>Help with this step</summary>

- **Interest:** How much they care about this work. It is independent of whether they can do anything about it.
- **Influence:** How much their view decides. The two axes are separate, and confusing them is why people spend a week persuading somebody who was never going to decide.

Stuck starting? Place the two axes on paper and put people on it rather than writing a list.

Is it enough? Somebody appears with high interest and low influence.

</details>

#### 3. Understand the opposition

**See it first.** Made-up example. Mapping stakeholders for booking work, and reading opposition as obstruction.

- **What I thought:** The developer was blocking the work. Every conversation produced another reason it was difficult, and I had begun describing him as resistant to change.
- **What he was accountable for:** A release date, committed to somebody else three weeks earlier. My work threatened it and nothing about my proposal acknowledged that.
- **What that made his objection:** Entirely rational. From where he stood, saying yes meant missing a date he had promised, in exchange for improving something he had not been asked about.
- **What I changed:** Cut the scope to the appetite, defined the two undefined states so the estimate fell, and offered it in two parts so the first could ship after the date rather than before it.
- **What happened:** He agreed in ten minutes. Nothing about his view had changed; the proposal had stopped costing him the thing he was accountable for.

**The wrong turn:** The wrong turn is reading opposition as obstruction, because that is what it feels like from the other side of it. An objection you cannot construct a rational basis for is one you have not understood, and you cannot answer what you have not understood.

**What it costs:** Reshaping the proposal around somebody else’s accountability means a smaller piece of work, later, in two parts.

**Still unknown:** Still unknown: whether he would have agreed to the original after the date passed. Possibly, and the six weeks of waiting would have cost more than the split did.

- For the costliest opposition, write why their position is rational.
- Name the cost your work imposes on them.

**You should end up with:** Whose opposition would cost most, and why it is rational from where they stand.

Worksheet fields for this step:

- Whose opposition would cost most, and what they are accountable for
- Why their opposition is rational from where they stand — It nearly always is. If you cannot construct it, you have not understood their accountability yet.

<details>
<summary>Help with this step</summary>

- **Rational opposition:** An objection that makes sense given what somebody is accountable for. It nearly always is, and treating it as irrational guarantees you will not answer it.
- **Costliest:** Not the loudest. The person whose no is hardest to work around, which is usually about their accountability rather than their seniority.

Stuck starting? Write their objection in the first person, as they would put it.

Is it enough? You could argue their side convincingly.

</details>

#### 4. Design the approach

- Remove or reduce the cost where you can.
- Where you cannot, acknowledge it and say what you are asking for.

**You should end up with:** What your work does for them, or an honest statement that you are asking a favour, with the approach designed.

**Try it with help.** Six approaches to a made up stakeholder whose objection is rational. For each one, decide what it would achieve.

- Cut the scope so it fits inside the time before their committed date.
  - **addresses their accountability** — It removes the thing the objection was about. Nothing about their view has to change.
  - ignores it — It is aimed precisely at it.
  - makes it worse — It costs you scope rather than costing them anything.
- Define the two undefined states so the estimate falls from a week to three days.
  - **addresses their accountability** — The uncertainty was what made it expensive, as Module 14 showed. Removing it is work you can do alone.
  - ignores it — It is the most direct answer available.
  - makes it worse — It costs you an afternoon and costs them nothing.
- Take it to their manager and get the work mandated.
  - addresses their accountability — It overrides the accountability rather than answering it, and the date is still there.
  - ignores it — It does more than ignore it.
  - **makes it worse** — They now have the same problem and a reason to be careful with you. It also works once.
- Explain again why the work matters for users.
  - addresses their accountability — They may already agree it matters. Agreement was never the obstacle.
  - **ignores it** — It answers a question nobody asked. Repeating the value is what people do when they have not understood the objection.
  - makes it worse — It is ineffective rather than damaging, though the third repetition begins to be.
- Offer it in two parts, so the first ships after their date rather than before it.
  - **addresses their accountability** — The date is protected and the work still happens. It costs sequencing rather than substance.
  - ignores it — It is shaped entirely around their constraint.
  - makes it worse — It delays your work, which is a cost to you rather than to them.
- Describe them to others as resistant to change.
  - addresses their accountability — It replaces their reason with a character trait.
  - ignores it — Worse than ignoring: it makes the objection unanswerable by making it about them.
  - **makes it worse** — It also gets back to them, and it costs you the next five conversations.

**Then:** Now design your own approach from the first group, and write what it costs you rather than them.

**What to watch for:** Everything that works costs you something — scope, sequencing, an afternoon of definition — and costs them nothing. Escalating and re-explaining are the two moves that feel like progress and are not.

Worksheet fields for this step:

- What your work does for them, or that you are asking a favour — Both are legitimate. Asking a favour while pretending it is a benefit is not.
- The approach: what you would change, offer or ask

<details>
<summary>Help with this step</summary>

- **What it does for them:** The connection to their accountability. Where there genuinely is none, the honest framing is a favour.
- **Asking a favour:** A legitimate move, once. Asking one while calling it a benefit is how people stop believing your framing entirely.

Stuck starting? Ask what you could change about the proposal rather than about their mind.

Is it enough? Your approach costs you something rather than requiring them to change their view.

</details>

#### 5. Find the quiet one

- Identify who could simply never prioritise this.
- Write what would make them prioritise it.

**You should end up with:** The quiet blocker identified, with what their unstated reservation probably is.

Worksheet fields for this step:

- The quiet blocker: somebody whose unstated reservations could stop this — The loud sceptic tells you their objection. The quiet one does not, and is usually the one who decides whether it survives.
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **The quiet blocker:** Somebody with reservations they have not stated. They rarely say no; the work simply never quite happens, and nobody can point at why.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Look for somebody who has been agreeable in every meeting and has done nothing.

Is it enough? You named a person and a plausible reservation rather than a general worry.

</details>

**Save and continue.** Saved for you: Your list, the placements, the rational basis and the approach save as you type, on this device first and then online. Kept outside the app: Keep this one to yourself. A stakeholder map is working material, and it reads very differently to the people on it. What your creator sees: Your creator reads the rational basis you constructed. An opposition described as obstruction is one nobody has understood yet. Your next action: Open Your work and choose Ready for review. The next lesson decides what to do when the information is not going to arrive.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each person write what they are judged on at the end of a quarter.

</details>

<details>
<summary>Hint 2</summary>

Place each person on both axes and look at who cares but cannot act.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Stakeholders and their actual interests.
Task: Map the people who can affect or block your work, what each is accountable for, and design your approach to the one whose opposition would cost most.
Challenge one thing at a time, and start with the mistake this lesson is about: “If the design is right, it will win.” Designs are adopted by people with their own accountabilities and constraints. Understanding those is not politics; it is the ordinary work of getting something built.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the accountability map and ask whether people are mapped by what they are accountable for. Look at the placement and ask whether interest and influence are separated. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l06-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** People are mapped by what they are accountable for: A list with accountabilities rather than titles. Interest and influence are separated: A placement on both axes with the low-influence allies marked. One opposition is explained as rational, with its cost: A written account of why the person's position makes sense from where they stand. The quiet blocker is identified with what would move them: A named person who could deprioritise the work, and what would change that.

**Bring forward:** A stakeholder map by accountability, with a rational account of opposition, demonstrates the organisational judgement that senior design roles are actually hiring for. Module handoff: Scope independent delivery in m18


### Practice and pause points

- List by accountability (~25 min): List everyone who can affect or block the work. Write what each is accountable for, not their title.
- Place them (~25 min): Place each on interest and influence. Mark the allies with interest and no influence.
- Understand the opposition (~30 min): For the costliest opposition, write why their position is rational. Name the cost your work imposes on them.
- Design the approach (~25 min): Remove or reduce the cost where you can. Where you cannot, acknowledge it and say what you are asking for.
- Find the quiet one (~15 min): Identify who could simply never prioritise this. Write what would make them prioritise it.

Pause after any step; save the artifact and next action.

**Free tool path.** A written map or a simple two-axis sketch. No stakeholder-mapping tool is required.

### Output

A map of people by accountability, interest and influence; The rational basis of one person's opposition; An approach to the costliest opposition; The quiet blocker identified

### Checks

- Why map by accountability rather than seniority? Answer: Because what someone is judged on predicts what they will support. A junior person accountable for support volume will resist things a senior one would wave through.
- How should you treat opposition? Answer: As information about a cost that falls on that person. Treating it as obstruction loses both the information and the relationship.
- Why is the quiet blocker more dangerous? Answer: Because they never state an objection you can address; the work simply never reaches the top of their list.

### Rubric and remediation

**People are mapped by what they are accountable for**

Adequate evidence: A list with accountabilities rather than titles.

- 0 — Mapped by seniority.
- 1 — Accountabilities guessed.
- 2 — Accountabilities stated, checked where possible.
- 3 — As adequate, and one accountability explains a behaviour that had seemed arbitrary.

If below 2: For each person write what they are judged on at the end of a quarter. Show at recheck: The accountability map.

**Interest and influence are separated**

Adequate evidence: A placement on both axes with the low-influence allies marked.

- 0 — One axis only.
- 1 — Both axes without identifying allies.
- 2 — Both, with allies and absent-minded blockers marked.
- 3 — As adequate, and a high-interest, low-influence person is identified as a source of knowledge.

If below 2: Place each person on both axes and look at who cares but cannot act. Show at recheck: The placement.

**One opposition is explained as rational, with its cost**

Adequate evidence: A written account of why the person's position makes sense from where they stand.

- 0 — Opposition described as resistance.
- 1 — A rationale guessed without a cost.
- 2 — The specific cost to that person named.
- 3 — As adequate, and the account would be recognised by the person themselves.

If below 2: Write what your work costs that person in time, risk or accountability. Show at recheck: The opposition account.

**The quiet blocker is identified with what would move them**

Adequate evidence: A named person who could deprioritise the work, and what would change that.

- 0 — Not considered.
- 1 — Identified without a route.
- 2 — Identified with what would make it a priority for them.
- 3 — As adequate, and the route uses their accountability rather than persuasion.

If below 2: Ask who never says no and never does it; that is the person to plan for. Show at recheck: The quiet blocker.

### Portfolio contribution

A stakeholder map by accountability, with a rational account of opposition, demonstrates the organisational judgement that senior design roles are actually hiring for.

### Assigned resources

- R48: [GitLab job families: product design management](https://handbook.gitlab.com/job-families/product/product-design-management/) — The management levels' descriptions of stakeholder influence and strategic partnership. Purpose: Shows how one employer describes the stakeholder work expected at senior levels. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. One employer's published expectations, not a market standard, and its performance measures are its own. Fallback: R23.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on having a multidisciplinary team. Purpose: Frames stakeholder work as shared responsibility rather than persuasion. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-sector governance; the accountability mapping here is the course's own. Fallback: R07.

## Lesson 7: Deciding without enough information

Stable ID: m17-l07-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Make one real decision under uncertainty, recording what you knew, what you assumed, what would have changed it, and how you will find out whether it was right.

**Bring forward.** An open decision in your project.

Waiting for certainty is itself a decision, usually a worse one, and being able to decide well with gaps is what senior work consists of.

### Learn

The first move is separating your evidence from your assumptions, which is the m05 discipline applied to a decision rather than a finding. Most decisions that feel impossible become tractable once you see that two of the five inputs are known and three are guesses, and that only one of the guesses matters.

Cost and reversibility set how much certainty you need. A reversible decision with a small cost should be made immediately and revisited; an irreversible one with a large cost deserves the delay required to reduce the important uncertainty. Confusing the two produces either paralysis or recklessness, usually both in the same team.

The last responsible moment is the point after which delay costs you options. Deciding earlier throws away information you would have had; deciding later means the choice gets made by default or by someone else. Naming that moment for a decision is a useful discipline and it is usually earlier than you think.

Recording the assumption is what makes the decision reviewable. Six weeks later, when something is not working, the record tells you whether the reasoning was wrong or the assumption was — and those need different responses.

**Common misconception.** “We need more research before deciding.” Sometimes. Often the research would not change the decision, and the honest test is to ask which finding would produce a different choice. If none would, decide.

### Worked example

The decision: whether to build the waiting list before or after the improved payment states. Known: payment confusion produces duplicate payments and calls; late cancellations leave places empty. Assumed: that a waiting list would fill enough of those places to be worth a fortnight. Guessed: how many people would join one. The test applied: which finding would change the order? Only evidence that late cancellations were rare. A count from the provider's records took twenty minutes and showed they were common, so the decision was made. The assumption about filling places was recorded, with a check at four weeks.

#### Deciding without enough information

Make one real decision under uncertainty, recording what you knew, what you assumed, what would have changed it, and how you will find out whether it was right.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work, plus whatever cheap check reduces the one uncertainty that matters.

- Starting material: One decision you have been postponing.
- Create HaruCourse/Practice/m17-l07-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Separate the inputs

**See it first.** Made-up example. Listing what was known before a decision, and listing what everybody said.

- **What I wrote as knowns:** That members find the payment step confusing, that late cancellations are common, and that the provider wants a waiting list.
- **What I could actually show:** The third. The provider had said it, in writing, twice.
- **What the first one really was:** An assumption with a long history. Three people had said something adjacent to it in Module 5, and it had hardened into a known through repetition in my own documents.
- **What the second one was:** A guess. Everybody believed it, nobody had counted, and the count took twenty minutes and turned out to support it.
- **What the three lists looked like afterwards:** One known, one assumption with its evidence named, and one guess that became a known before lunch. The decision rested on the last one, which is why it was worth counting.

**The wrong turn:** The wrong turn is writing down what everybody believes, because agreement feels like evidence. Repetition inside your own documents is how an assumption becomes a known without anybody checking it.

**What it costs:** Crossing off most of your knowns is uncomfortable and makes the decision look less well-founded than it felt an hour earlier.

**Still unknown:** Still unknown: whether payment confusion is actually common. It is back in the assumption column, where it was all along.

- Write what you know, what you assume and what you are guessing.
- Mark which of them the decision actually depends on.

**You should end up with:** One open decision, with knowns, assumptions and guesses separated, and which the decision depends on.

Worksheet fields for this step:

- The open decision
- What you know, what you assume, and what you are guessing — Three separate lists. Most things people call knowns are assumptions with a long history.
- Which of them the decision actually depends on

<details>
<summary>Help with this step</summary>

- **Know:** Something you could show somebody: a count, a record, an observation. Far less than most lists of knowns contain.
- **Assume:** Something you are treating as true without evidence, usually reasonably. It is the category that needs writing down, because it is what you check later.
- **Guess:** Something you have no basis for at all. Naming it separately stops it being quietly promoted.

Stuck starting? Write the knowns first, then cross off everything you could not show somebody.

Is it enough? Your knowns list is shorter than you expected.

</details>

#### 2. Assess cost and reversibility

- Write what being wrong would cost and how hard it would be to undo.
- Decide how much certainty this level of cost justifies.

**You should end up with:** What being wrong would cost and to whom, how reversible it is for everybody affected, and how much certainty that justifies.

Worksheet fields for this step:

- What being wrong would cost, and to whom
- How hard it would be to undo, for everybody affected — Not how hard for you. The consequences are what have to be reversible.
- How much certainty this level of cost justifies

<details>
<summary>Help with this step</summary>

- **Reversible for everybody:** Whether the consequences can be undone, not whether the change can. Module 15 made the same distinction about measurement.
- **Certainty proportionate to cost:** A cheap, reversible decision justifies almost none. An expensive, irreversible one justifies waiting.

Stuck starting? Ask who pays if this is wrong, and whether they can get it back.

Is it enough? Your reversibility judgement is about the people affected rather than about your own effort.

</details>

#### 3. Find the decisive question

**See it first.** Made-up example. Deciding what to build first at a class provider, and asking for more research.

- **The decision:** Whether to build the waiting list before or after the improved payment states. Both were worth doing and there was time for one.
- **What I said:** That we needed more research before deciding. It is the responsible-sounding answer and nobody argues with it.
- **The question I had not asked:** Which finding would change the order. I listed five things research could tell me and four of them would not have moved the decision at all.
- **What the fifth was:** Whether late cancellations were actually common. If they were rare, the waiting list was pointless and payment states went first.
- **How long that took to answer:** Twenty minutes with the provider’s own records. They were common, and the decision was made that afternoon rather than in three weeks.

**The wrong turn:** The wrong turn is asking for more research without naming what it would change, because it sounds rigorous and postpones a difficult choice. Four of the five things I wanted to know were interesting and irrelevant to the decision in front of me.

**What it costs:** Deciding on one twenty-minute check means the other four questions stay unanswered, and one of them might have mattered for something else.

**Still unknown:** Still unknown: whether a waiting list will actually fill those places. That is the assumption the decision rests on, and it is written down with a check at four weeks.

- Write which finding would produce a different decision.
- If none would, decide now and record that.

**You should end up with:** The finding that would produce a different decision, or a written statement that none would.

Worksheet fields for this step:

- Which finding would produce a different decision
- If no finding would change it, write that and decide now — This is the commonest honest answer, and it is what turns more research into a delay rather than a step.

<details>
<summary>Help with this step</summary>

- **The decisive question:** The one whose answer changes the choice. Research that would not change it is worth doing later, for other reasons.
- **Deciding now:** What to do when no finding would change the choice. Waiting in that situation is a delay with a research budget attached.

Stuck starting? List everything research could tell you, then cross off everything that would not change the choice.

Is it enough? You can name the one finding that matters, or say plainly that there is none.

</details>

#### 4. Reduce it cheaply if you can

- Find the cheapest way to reduce the one uncertainty that matters.
- Do it if it takes under an hour; otherwise decide with the assumption stated.

**You should end up with:** The cheapest way to reduce the one uncertainty that matters, done if it takes under an hour, with what it showed.

**Try it with help.** Six responses to a made up decision that has to be made this week. For each one, decide what it is.

- Twenty minutes counting late cancellations in the provider’s existing records.
  - **a cheap check worth doing** — It answers the one question that changes the decision, from a record that already exists, before lunch.
  - a delay with a research budget — Twenty minutes is not a delay.
  - deciding with the assumption stated — There is no need to assume something you can count this morning.
- A three-week study of member attitudes to waiting lists.
  - a cheap check worth doing — Three weeks is the opposite of cheap when the decision is this week.
  - **a delay with a research budget** — It would produce interesting findings and the decision would already have been made by default in the meantime.
  - deciding with the assumption stated — It is a way of not deciding.
- One conversation with the provider about how often classes run half-full.
  - **a cheap check worth doing** — Ten minutes, and the person has watched it happen every week for two years.
  - a delay with a research budget — A conversation you could have this afternoon is not a delay.
  - deciding with the assumption stated — Asking first is cheaper than assuming.
- Recording that a waiting list is assumed to fill enough places to be worth a fortnight, with a check at four weeks.
  - a cheap check worth doing — Nothing available this week answers it; only running the thing does.
  - a delay with a research budget — Nothing is being delayed.
  - **deciding with the assumption stated** — The honest move for an uncertainty you cannot reduce cheaply: name it, decide, and set a date to look.
- Waiting until analytics are in place so the question can be answered properly.
  - a cheap check worth doing — Analytics do not exist and are not being built this quarter.
  - **a delay with a research budget** — Waiting for infrastructure that is not coming is the most expensive form of not deciding.
  - deciding with the assumption stated — It avoids stating anything.
- Building the waiting list in a rough form for one class this Saturday and seeing whether anybody joins.
  - **a cheap check worth doing** — It costs an afternoon, it answers the actual assumption rather than a proxy for it, and it is reversible.
  - a delay with a research budget — It is a day rather than a study.
  - deciding with the assumption stated — It does better than stating the assumption: it tests it.

**Then:** Now find your own cheapest check, and do it if it is under an hour.

**What to watch for:** The useful checks all use something that already exists: a record, a person who has been watching, or a rough version running once. The delays all wait for something that has to be built or arranged first.

Worksheet fields for this step:

- The cheapest way to reduce the one uncertainty that matters, and whether you did it — Under an hour: do it. Longer: decide with the assumption stated.
- What it showed

<details>
<summary>Help with this step</summary>

- **The cheapest check:** Twenty minutes in an existing record, one conversation, a count by hand. It is usually available and usually not looked for.
- **The last responsible moment:** When deciding later stops adding information and starts costing time. It is neither as early as possible nor as late as possible.

Stuck starting? Ask what already exists that would answer the decisive question.

Is it enough? Either you did the check, or you wrote the assumption down instead.

</details>

#### 5. Record and set a check

- Record the decision, the assumption and the reasoning.
- Set a date to check whether the assumption held.

**You should end up with:** The decision, the assumption, the reasoning, and a date to check whether the assumption held.

Worksheet fields for this step:

- The decision, the assumption it rests on, and the reasoning
- The date you will check whether the assumption held, and what you will look at
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **A decision with no way to find out:** A bet. Recording the assumption and a date is what makes it a decision instead.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the assumption in the form: this is right if ….

Is it enough? The check date is a date and names what you will look at.

</details>

**Save and continue.** Saved for you: Your three lists, the cost assessment, the decisive question, the check and the recorded decision save as you type, on this device first and then online. Kept outside the app: If the cheap check used somebody’s records, keep only your count. The records are theirs and stay where they are. What your creator sees: Your creator reads the decisive question and the check date. A decision with neither is a preference that happened to be acted on. Your next action: Open Your work and choose Ready for review. The next lesson looks at a gap this course cannot fill for you.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Label each input and ask what evidence you actually have for it.

</details>

<details>
<summary>Hint 2</summary>

Write what happens if this is wrong and how long it would take to undo.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Deciding without enough information.
Task: Make one real decision under uncertainty, recording what you knew, what you assumed, what would have changed it, and how you will find out whether it was right.
Challenge one thing at a time, and start with the mistake this lesson is about: “We need more research before deciding.” Sometimes. Often the research would not change the decision, and the honest test is to ask which finding would produce a different choice. If none would, decide.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three lists and ask whether knowns, assumptions and guesses are separated. Look at the assessment and ask whether cost and reversibility are assessed. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l07-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Knowns, assumptions and guesses are separated: Three labelled lists with the decision's real dependencies marked. Cost and reversibility are assessed: A written cost of being wrong and a reversibility judgement. The decisive finding is named, or its absence stated: The finding that would change the decision, or a statement that none would. The assumption is recorded with a check date: A written assumption and a date to test it.

**Bring forward:** A recorded decision with its assumptions and a check date is exactly the artefact senior interviews probe for, and it shows judgement rather than certainty. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Separate the inputs (~25 min): Write what you know, what you assume and what you are guessing. Mark which of them the decision actually depends on.
- Assess cost and reversibility (~25 min): Write what being wrong would cost and how hard it would be to undo. Decide how much certainty this level of cost justifies.
- Find the decisive question (~25 min): Write which finding would produce a different decision. If none would, decide now and record that.
- Reduce it cheaply if you can (~25 min): Find the cheapest way to reduce the one uncertainty that matters. Do it if it takes under an hour; otherwise decide with the assumption stated.
- Record and set a check (~20 min): Record the decision, the assumption and the reasoning. Set a date to check whether the assumption held.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work, plus whatever cheap check reduces the one uncertainty that matters.

### Output

A decision made, with knowns, assumptions and guesses separated; The cost and reversibility assessed; The one finding that would have changed it; A check date for the recorded assumption

### Checks

- What decides how much certainty you need? Answer: The cost of being wrong and how reversible the decision is. Cheap and reversible decisions should be made now and revisited.
- What is the test for needing more research? Answer: Whether a finding would change the decision. If no plausible result would, the research is delay rather than diligence.
- Why record the assumption? Answer: So that when something is not working you can tell whether the reasoning was wrong or the assumption was; they need different responses.

### Rubric and remediation

**Knowns, assumptions and guesses are separated**

Adequate evidence: Three labelled lists with the decision's real dependencies marked.

- 0 — Inputs undifferentiated.
- 1 — Separated without identifying dependencies.
- 2 — Separated with the load-bearing inputs marked.
- 3 — As adequate, and one supposed known turns out to be an assumption.

If below 2: Label each input and ask what evidence you actually have for it. Show at recheck: The three lists.

**Cost and reversibility are assessed**

Adequate evidence: A written cost of being wrong and a reversibility judgement.

- 0 — Neither assessed.
- 1 — Cost without reversibility.
- 2 — Both, with the certainty requirement they imply.
- 3 — As adequate, and the assessment changed how long you were willing to wait.

If below 2: Write what happens if this is wrong and how long it would take to undo. Show at recheck: The assessment.

**The decisive finding is named, or its absence stated**

Adequate evidence: The finding that would change the decision, or a statement that none would.

- 0 — Research proposed generally.
- 1 — A finding named but not decisive.
- 2 — The decisive finding named, or its absence stated plainly.
- 3 — As adequate, and a cheap check was actually run.

If below 2: For each candidate finding, ask whether it would change your choice; keep only those that would. Show at recheck: The decisive question.

**The assumption is recorded with a check date**

Adequate evidence: A written assumption and a date to test it.

- 0 — Assumption unrecorded.
- 1 — Recorded without a check.
- 2 — Recorded with a date and a signal.
- 3 — As adequate, and the signal is something you could realistically observe.

If below 2: Write the assumption as a sentence and put a date beside it. Show at recheck: The record.

### Portfolio contribution

A recorded decision with its assumptions and a check date is exactly the artefact senior interviews probe for, and it shows judgement rather than certainty.

### Assigned resources

- R07: [GOV.UK: discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works) — Deciding what happens next under uncertainty. Purpose: Frames decision-making as reducing the uncertainty that matters rather than all of it. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06; published 18 November 2016. It does not discuss reversibility or timing, which are this lesson's own. Fallback: R19.
- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Risks and rabbit holes, and the betting table. Purpose: Supplies a way of treating a decision as a bounded bet rather than a prediction. Effort: 45–60 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. One company's process; take the reasoning about bounded commitments. Fallback: R07.

## Lesson 8: Positioning: the gap this course does not fill

Stable ID: m17-l08-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Write what you would need to learn about market positioning, find one candidate source, assess it against this course's verification rules, and record the result honestly.

**Bring forward.** Your strategy reading and this course's resource rules.

This course has no verified free source for market positioning, and it will not teach it from an unverified one. Learning to close a gap yourself is the transferable skill.

### Learn

The gap is documented in this course's resource library: market positioning and segmentation have no verified free primary source, after attempts that returned navigation pages and a refusal. That is why every strategy lesson here has been about constraint, structure and stakeholders rather than about where a product sits in a market.

The reason it is hard to source is worth understanding. Most freely available strategy content is published by companies selling something, is written to be persuasive rather than examinable, and cites no evidence you can check. That does not make it wrong; it makes it unverifiable, which is a different problem and the one this course's rules are built around.

The rules are reusable: can you retrieve the exact page, is it free without an account or trial, can you review its actual teaching scope, does it state a date, and can you write down what it does not cover. A source failing any of those goes in the record as attempted, with the reason.

The discipline that matters is not teaching yourself from a source you would refuse to assign. A designer who learns positioning from a vendor's blog and then repeats it confidently has acquired a vocabulary rather than an understanding, which is worse than the gap.

**Common misconception.** “There is plenty written about positioning.” There is plenty published. The question this course asks is whether a specific page can be retrieved, is free, states its date and scope, and can have its limits written down — and most of what is published fails that.

### Worked example

The learner wrote what she would need: how a product's position relative to alternatives is described, how segments are defined without inventing them, and how positioning changes a design decision. One candidate was assessed: a company's strategy article, freely readable, undated, with no cited evidence, and written to sell the company's consulting. It was recorded as attempted and rejected, with the reason. The gap was left open in her own notes, with a plan to look for a book through a library rather than a blog — and, in the meantime, to avoid making positioning claims she could not support.

#### Positioning: the gap this course does not fill

Write what you would need to learn about market positioning, find one candidate source, assess it against this course's verification rules, and record the result honestly.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: A browser and the catalog's verification rules. Public libraries are a legitimate route to books this course cannot link to, and using one is not a paid dependency.

- Starting material: Your operating-strategy reading and the catalog's rules.
- Create HaruCourse/Practice/m17-l08-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. State the gap precisely

**See it first.** Made-up example. Stating a learning gap, and stating it as a subject.

- **What I wrote:** “I need to learn about positioning.” A subject, a heading, and something I could carry around for a year without it changing anything.
- **Why that is not a gap:** It has no end. Nothing would ever let me cross it off, and no source could be assessed against it, because it does not say what an answer would look like.
- **What I wrote instead:** Three questions. How do you describe where a product sits relative to the alternatives people actually consider? How are segments defined without inventing them? What design decision would change if I knew?
- **What the third question did:** Answered itself, badly. I could not name a decision that would change, which told me the gap was interesting rather than urgent.
- **What that changed about the plan:** A library book at some point, rather than a search this week. The honest priority of a gap that changes no current decision.

**The wrong turn:** The wrong turn is naming the subject, because that is how gaps feel: a topic you do not know. A subject cannot be closed, cannot be assessed against, and cannot be prioritised.

**What it costs:** Asking which decision would change often demotes a gap you feel embarrassed about, which is uncomfortable and correct.

**Still unknown:** Still unknown: whether a decision will turn on positioning later. If one does, the three questions are already written.

- Write the questions about positioning you cannot currently answer.
- Note which of your design decisions would change with an answer.

**You should end up with:** The positioning questions you cannot answer, and which design decisions would change with an answer.

Worksheet fields for this step:

- The questions about positioning you cannot currently answer
- Which of your design decisions would change with an answer — If none would, the gap is interesting rather than urgent, and saying so is a useful result.

<details>
<summary>Help with this step</summary>

- **Positioning:** How a product is described relative to the alternatives people actually consider. This course has no verified free source for it and will not teach it from an unverified one.
- **A gap that matters:** One where a real decision would change. A gap that changes nothing is worth noting and not worth closing this month.

Stuck starting? Write the questions as questions rather than as a topic.

Is it enough? You can say which decision would change, or that none would.

</details>

#### 2. Re-read the rules

- Read this course's verification and selection rules.
- Write the five checks you will apply to any candidate.

**You should end up with:** The five checks written out, taken from this course’s own selection rules.

Worksheet fields for this step:

- The five checks you will apply to any candidate source — Retrievable, free, scope-reviewed, dated, and possible to write limits for. Take them from this course’s own rules.

<details>
<summary>Help with this step</summary>

- **Retrievable:** You can actually open it, today, without an account. A page behind a sign-up is not retrievable for this purpose.
- **Scope-reviewed:** You can say what it covers and what it does not. A source whose limits you cannot write is one you cannot use responsibly.

Stuck starting? Copy the rules out rather than paraphrasing them.

Is it enough? All five are checks somebody else could apply the same way.

</details>

#### 3. Assess one candidate

**See it first.** Made-up example. Looking for a source on positioning, and finding a very good article.

- **What I found:** A long, clear, genuinely useful piece on positioning, freely readable, well written, and it explained more in twenty minutes than anything else I had seen.
- **What I wanted to do:** Use it. It was better than most of what this course does assign, and the temptation was to make an exception for quality.
- **What the checks said:** Retrievable and free: yes. Dated: no. Evidence cited: none. Scope statable: partly. Written to sell the author’s consulting: plainly, in the last three paragraphs.
- **Why quality is not the test:** I cannot tell whether it is right. It is persuasive, which is what it was written to be, and I have no way to check any of its claims or to know when it was written.
- **What I recorded:** Attempted and rejected, with the reasons, and a note that it is worth reading privately as an argument rather than as a source I would assign or cite.

**The wrong turn:** The wrong turn is making an exception for quality, because the checks are about verifiability and the article is obviously good. Persuasive is what promotional writing is for, and it is exactly the property that cannot be checked.

**What it costs:** Rejecting it leaves the gap open, and the alternative route is a library book that takes a fortnight to reach.

**Still unknown:** Still unknown: whether its claims are sound. Rejecting it is not saying it is wrong; it is saying I cannot tell, which is a different and more honest position.

- Find one candidate source and retrieve it.
- Apply each check and record the result.

**You should end up with:** One candidate retrieved and each check applied with its result.

Worksheet fields for this step:

- The candidate source, and how you found it
- Each check applied, with the result

<details>
<summary>Help with this step</summary>

- **Vendor content:** Material published to sell something. It can be accurate and it is written to a purpose, and it rarely dates itself or states its evidence.
- **Applying a check:** Recording the result rather than the impression. Undated is a fact about the page, whatever the writing is like.

Stuck starting? Open the candidate and look for a date before reading anything else.

Is it enough? Every check has a result rather than an impression.

</details>

#### 4. Record the verdict

- Accept, reject or mark it partial, with reasons.
- Write what it does not cover, whatever the verdict.

**You should end up with:** A verdict with reasons, and what the source does not cover whatever the verdict.

**Try it with help.** Six made up candidate sources on positioning. For each one, decide the verdict under this course’s rules.

- A well-written strategy article, free, undated, no cited evidence, ending with an offer of consulting services.
  - usable — Quality is not the test. Undated, unevidenced and promotional means you cannot tell whether it is right.
  - **reject and record** — Attempted and rejected, with reasons. It is worth reading privately as an argument and not as a source.
  - usable for part of it — No part of it is verifiable, so there is no part to keep.
- A standard book on the subject, borrowed from a public library, dated, with its sources cited.
  - **usable** — Dated, evidenced and scope-statable. A library is a legitimate route this course cannot link to, and borrowing is not a paid dependency.
  - reject and record — Nothing about it fails a check.
  - usable for part of it — It may cover less than you need, which is a note rather than a partial verdict.
- A respected report, clearly dated and evidenced, behind a paid subscription.
  - usable — It fails the free check, which this course applies without exception.
  - **reject and record** — Recorded as rejected on cost rather than on quality, so the reason is visible if the situation changes.
  - usable for part of it — None of it is retrievable.
- A free video course requiring a sign-up, with an emailed certificate.
  - usable — An account requirement makes it not retrievable for this purpose, and this course does not require sign-ups.
  - **reject and record** — Rejected on the account requirement, recorded with the reason.
  - usable for part of it — Nothing is available without the account.
- An open-access paper on segmentation methods, dated, peer-reviewed, and narrower than what you need.
  - usable — It passes every check and answers one of your three questions.
  - reject and record — Nothing about it fails.
  - **usable for part of it** — The commonest honest verdict: keep it, write the boundary, and note which questions it leaves open.
- A long, thoughtful discussion thread by practitioners, free, undated, anonymous.
  - usable — Nobody can be identified, nothing is dated, and no claim can be traced.
  - **reject and record** — Worth reading for ideas about what to look for, and not a source you would assign to somebody else.
  - usable for part of it — The verifiability problem applies to all of it equally.

**Then:** Now record your own verdict, with the reasons written so somebody else could check your judgement.

**What to watch for:** Two of the rejections are about access rather than quality, and one usable source is a library book this course cannot link to. The rule is about whether a claim can be checked, which is not the same as whether the writing is good.

Worksheet fields for this step:

- Accept, reject or partial, with reasons
- What it does not cover, whatever the verdict

<details>
<summary>Help with this step</summary>

- **A rejection is a result:** Recording an attempted and rejected source is work done. It stops the same candidate being considered again and shows the gap was taken seriously.
- **Partial:** Usable for part of what you need, with the boundary written. It is the commonest honest verdict.

Stuck starting? Write the verdict and then the reason, so the reason does not become an argument for the verdict.

Is it enough? Somebody could apply your reasoning to a different source.

</details>

#### 5. Plan the gap

- Write how you will fill this without an unverified source.
- Note what you will avoid claiming until you have.

**You should end up with:** A plan for closing the gap without an unverified source, and what you will avoid claiming meanwhile.

Worksheet fields for this step:

- How you will fill this without an unverified source — A library book is a legitimate route this course cannot link to. Using one is not a paid dependency.
- What you will avoid claiming until you have
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **A library:** A legitimate route to books this course cannot link to. Borrowing one is not a paid dependency and not an exception to the rules.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write what you will not claim before writing how you will learn it.

Is it enough? The plan names a specific route rather than an intention to read more.

</details>

**Save and continue.** Saved for you: Your gap statement, the five checks, the assessment and the plan save as you type, on this device first and then online. Kept outside the app: Keep a note of the candidate’s address in your own folder so the rejection is traceable. Nothing needs to be copied out of it. What your creator sees: Your creator reads the verdict and the reasons. A rejection with reasons somebody else could apply is the result this lesson is looking for. Your next action: Open Your work and choose Ready for review. The next lesson compares the same feature for a consumer and a business context.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Write the positioning questions someone could ask you that you could not answer.

</details>

<details>
<summary>Hint 2</summary>

Open the page, apply the five checks and write the answers.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Positioning: the gap this course does not fill.
Task: Write what you would need to learn about market positioning, find one candidate source, assess it against this course's verification rules, and record the result honestly.
Challenge one thing at a time, and start with the mistake this lesson is about: “There is plenty written about positioning.” There is plenty published. The question this course asks is whether a specific page can be retrieved, is free, states its date and scope, and can have its limits written down — and most of what is published fails that.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the gap statement and ask whether the gap is stated as specific questions. Look at the assessment and ask whether the catalog's checks are applied to a real candidate. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l08-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The gap is stated as specific questions: Questions you cannot answer, with the decisions they would change. The catalog's checks are applied to a real candidate: A retrieved source with each check answered. A verdict is recorded with reasons and exclusions: Accept, reject or partial, with what it does not cover. A plan exists that does not rely on unverified sources: A route to the knowledge — a library, a primary text, a practitioner — and what you will avoid claiming meanwhile.

**Bring forward:** A documented gap with an assessed and rejected source is unusual and demonstrates the research discipline the rest of this course rests on. Module handoff: Scope independent delivery in m18


### Practice and pause points

- State the gap precisely (~25 min): Write the questions about positioning you cannot currently answer. Note which of your design decisions would change with an answer.
- Re-read the rules (~25 min): Read this course's verification and selection rules. Write the five checks you will apply to any candidate.
- Assess one candidate (~30 min): Find one candidate source and retrieve it. Apply each check and record the result.
- Record the verdict (~25 min): Accept, reject or mark it partial, with reasons. Write what it does not cover, whatever the verdict.
- Plan the gap (~15 min): Write how you will fill this without an unverified source. Note what you will avoid claiming until you have.

Pause after any step; save the artifact and next action.

**Free tool path.** A browser and the catalog's verification rules. Public libraries are a legitimate route to books this course cannot link to, and using one is not a paid dependency.

### Output

A written statement of what you need to learn; One candidate source assessed against the catalog rules; A recorded verdict, including a rejection with reasons; A plan for closing the gap without unverified sources

### Checks

- Why does this course refuse to teach positioning? Answer: Because it has no verified free primary source for it, and teaching from an unverified one would break the rule every other module has followed.
- What makes most strategy content unverifiable? Answer: It is published to persuade, cites no checkable evidence, often carries no date, and exists to sell something. That is a different problem from being wrong.
- What should you avoid while the gap is open? Answer: Making positioning claims you cannot support. A vocabulary acquired from marketing material sounds like knowledge and is not.

### Rubric and remediation

**The gap is stated as specific questions**

Adequate evidence: Questions you cannot answer, with the decisions they would change.

- 0 — The gap stated as a topic.
- 1 — Questions listed without decisions.
- 2 — Specific questions with the decisions attached.
- 3 — As adequate, and one question is one you have already been asked.

If below 2: Write the positioning questions someone could ask you that you could not answer. Show at recheck: The gap statement.

**The catalog's checks are applied to a real candidate**

Adequate evidence: A retrieved source with each check answered.

- 0 — No candidate assessed.
- 1 — A candidate discussed without retrieval.
- 2 — Retrieved and each check answered.
- 3 — As adequate, and the retrieval date is recorded.

If below 2: Open the page, apply the five checks and write the answers. Show at recheck: The assessment.

**A verdict is recorded with reasons and exclusions**

Adequate evidence: Accept, reject or partial, with what it does not cover.

- 0 — No verdict.
- 1 — A verdict without reasons.
- 2 — Verdict, reasons and exclusions.
- 3 — As adequate, and the record is written so someone else could use it.

If below 2: Write the verdict and the boundary in the same form the catalog uses. Show at recheck: The verdict.

**A plan exists that does not rely on unverified sources**

Adequate evidence: A route to the knowledge — a library, a primary text, a practitioner — and what you will avoid claiming meanwhile.

- 0 — No plan.
- 1 — A plan relying on more of the same material.
- 2 — A route that meets the standard, with an interim restraint.
- 3 — As adequate, and the restraint is specific about the claims you will not make.

If below 2: Write where you would find a source that passes the checks, and what you will not say until then. Show at recheck: The plan.

### Portfolio contribution

A documented gap with an assessed and rejected source is unusual and demonstrates the research discipline the rest of this course rests on.

### Assigned resources

- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — The chapters on appetite and deciding what not to build, re-read as the strategy content this course can verify. Purpose: Marks the boundary between what is sourced here and what is not. Effort: 45–60 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. It is explicitly not a positioning or segmentation source, which is the gap this lesson addresses. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on understanding users and their needs and on solving a whole problem for users, as the alternative footing for strategic argument. Purpose: Gives a verified basis for strategic reasoning that does not depend on positioning theory. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-service framing with no market context, which is precisely why the gap remains. Fallback: R07.

## Lesson 9: Consumer and enterprise, and the trade between them

Stable ID: m17-l09-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Compare the same feature designed for a consumer product and for a business one, and name the three decisions that differ and why.

**Bring forward.** Your product and its business-to-business role mapping.

The two contexts reward opposite things, and a designer who applies consumer instincts to business software, or the reverse, produces work that fails for structural reasons.

### Learn

The structural difference is choice. A consumer can leave, which makes the first experience decisive and makes delight worth something. A person using their employer's software cannot leave, which makes the hundredth use decisive and turns frustration into accumulated resentment rather than lost custom.

That inverts several priorities. Onboarding matters less than efficiency for a daily tool; keyboard operation and density matter more; a slightly slower but clearer flow that a consumer would appreciate becomes an irritation for someone doing it forty times a day. The m08 dense-data and m09 keyboard lessons are business software's core rather than its edge.

Business contexts also add obligations: someone must be able to see who did what, data may be subject to retention rules, and an administrator has to configure it for people who will never meet you. Those are design surfaces, and they are usually where the real work is.

Neither context is more demanding, and treating enterprise as the serious kind is a common mistake among designers who have not worked in it. The skills transfer; the priorities do not, and knowing which you are designing for is the first question.

**Common misconception.** “Good design is good design.” The principles transfer and the priorities do not. A consumer flow optimised for a confident first use, applied to a tool someone uses hourly, produces a product people resent for reasons they cannot articulate.

### Worked example

The booking feature designed twice. Consumer: emphasis on the first booking, generous whitespace, one action per screen, a warm confirmation. Business, for an office manager booking wellbeing classes for staff: dense list, keyboard operable, bulk actions, a record of who booked what and when for the finance team, and configuration for someone who will do this monthly for two years. Three differing decisions, named: density over spaciousness, because of repetition; bulk actions over single ones, because of volume; and an audit record, because someone else's money is being spent.

#### Consumer and enterprise, and the trade between them

Compare the same feature designed for a consumer product and for a business one, and name the three decisions that differ and why.

**Where to practise:** Draw the same feature twice, once for a consumer and once for a business context on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.

Tools: Paper for both versions. No enterprise tooling is required to design an enterprise screen.

- Starting material: Your role mapping from earlier in this module.
- Create HaruCourse/Practice/m17-l09-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read on roles and obligations

**See it first.** Made-up example. Listing what a business context adds, and listing features.

- **What I wrote:** Roles, permissions, reporting, bulk actions, single sign-on. Five things business software has that consumer software does not.
- **What that list is:** A feature list. It says what such products contain and nothing about why, so none of it helps decide anything about a screen.
- **What I had skipped:** That the person did not choose the product and cannot leave. Everything on my list follows from that and from repetition.
- **What the conditions list became:** Mandatory use, so frustration accumulates instead of losing you the user. Repetition, so the thousandth use matters more than the first. Somebody else’s money, so a record is an obligation. An administrator, who is a user nobody designs for.
- **What that let me do:** Derive the features rather than copy them. Bulk actions come from volume; the audit record comes from whose money it is; density comes from repetition. Each has a reason attached rather than a precedent.

**The wrong turn:** The wrong turn is listing what business software has, because those products exist and their features are visible. Copying the features produces a screen that looks like enterprise software without being right for anybody.

**What it costs:** Deriving from conditions is slower and produces a shorter list, and it will omit features somebody expects to see because other products have them.

**Still unknown:** Still unknown: whether single sign-on matters here. It is on nobody’s list of conditions and it may be the first thing a buyer asks about.

- Re-read the assigned permission vocabulary and the standard's points on accountability.
- List what a business context adds that a consumer one does not.

**You should end up with:** What a business context adds that a consumer one does not.

Worksheet fields for this step:

- What a business context adds that a consumer one does not — Administrators, auditability, somebody else’s money, mandatory use, and a person who will do this monthly for two years.

<details>
<summary>Help with this step</summary>

- **Mandatory use:** The person did not choose the product and cannot leave. Frustration accumulates as resentment rather than losing you a user.
- **Auditability:** A record of who did what and when, because somebody else’s money is being spent and somebody has to answer for it.

Stuck starting? List what changes when the person did not choose the product.

Is it enough? Your list includes something about the person who never chose it.

</details>

#### 2. Design the consumer version

- Design for a first-time, self-selected user.
- Note what you optimised for.

**You should end up with:** The feature designed for a first-time, self-selected user, with what you optimised for.

Worksheet fields for this step:

- The feature designed for a first-time, self-selected user
- What you optimised for

<details>
<summary>Help with this step</summary>

- **Self-selected:** They chose to be here and can leave. It makes the first minute decisive and the thousandth use hypothetical.
- **Optimising for first use:** Generous space, one action per screen, a warm confirmation. It is right for somebody who has never been here and wrong for somebody who has been here four hundred times.

Stuck starting? Design it for somebody who has never seen your product and may not come back.

Is it enough? You wrote what you optimised for rather than only what you drew.

</details>

#### 3. Design the business version

**See it first.** Made-up example. Designing the business version of a booking screen, and designing the consumer one again.

- **What I drew:** The same screen, with an admin label and a couple of extra fields. Generous space, one action at a time, the warm confirmation, all of it.
- **What the office manager actually does:** Books twelve places across four classes, on the last Friday of every month, for two years. Two hundred and eighty-eight bookings by the time she leaves the job.
- **What my screen cost her:** One booking per screen, a confirmation to dismiss each time, and a scroll to find the next class. About forty minutes of her month, repeated.
- **What the business version became:** A dense list, keyboard operable, with bulk selection and one confirmation for the set. The same task in about four minutes.
- **What I had got backwards:** The warm confirmation is a kindness to somebody who has never done this. To somebody doing it for the two hundredth time it is an obstacle with a friendly tone.

**The wrong turn:** The wrong turn is applying consumer instincts to repeated work, because they are good instincts and they feel like quality. A flow optimised for a confident first use, met hourly, produces a product people resent for reasons they cannot articulate.

**What it costs:** The dense version is genuinely worse for a first-time administrator, and somebody in their first week will find it forbidding. A short introduction is a smaller cost than forty minutes a month for ever.

**Still unknown:** Still unknown: how long the first week is. Nobody has watched a new administrator learn it, and the density is a judgement about a trade rather than a measurement of it.

- Design for someone doing this repeatedly on behalf of others.
- Include the administrator's configuration task.

**You should end up with:** The same feature for somebody doing it monthly for staff with somebody else’s money, with the administrator’s task designed.

Worksheet fields for this step:

- The same feature for somebody doing it monthly, for staff, with somebody else’s money
- The administrator’s task, designed rather than assumed — They are a user with their own work. Designing for them last is how business software becomes hated.

<details>
<summary>Help with this step</summary>

- **The thousandth use:** What business software optimises for. Density, keyboard operation and bulk actions all follow from repetition rather than from a preference for complexity.
- **The administrator:** A user with their own tasks and frustrations, routinely designed for last. Their work is the one that decides whether the product is bearable.

Stuck starting? Count how many times the person will do this in two years before drawing anything.

Is it enough? The administrator’s own task is designed rather than assumed to be the same as the user’s.

</details>

#### 4. Name the differences

- Write the three decisions that differ and the structural reason for each.
- Check none of them is merely aesthetic.

**You should end up with:** Three decisions that differ between the two versions, each with its structural reason.

**Try it with help.** Six design decisions for the same made up booking feature. For each one, decide which context it suits.

- A dense list showing twenty rows at once, with no images.
  - the consumer version — A first-time visitor meets a wall of rows with nothing to orient them.
  - **the business version** — Somebody doing this monthly needs to see more at once and is not being introduced to anything. Density follows from repetition.
  - both, for different reasons — It is actively worse for a first use.
- Selecting twelve places across four classes and confirming once.
  - the consumer version — A consumer books one place for themselves, so there is nothing to bulk.
  - **the business version** — Volume. One booking per screen costs forty minutes a month, repeated for two years.
  - both, for different reasons — The consumer case has no volume to speak of.
- Every action reachable and operable from a keyboard.
  - the consumer version — It is an accessibility requirement for everybody, as Module 11 established, regardless of repetition.
  - the business version — Repetition makes it a speed question there, and somebody doing this hourly will learn the keys.
  - **both, for different reasons** — Both, and for genuinely different reasons: access in one case, speed in the other.
- A warm confirmation screen after each booking.
  - **the consumer version** — A kindness to somebody who has never done this and is not sure it worked.
  - the business version — To somebody doing it for the two hundredth time it is an obstacle with a friendly tone.
  - both, for different reasons — It is actively costly in the repeated case.
- A record of who booked what, when, and who paid for it.
  - the consumer version — Their own receipt is the whole of it.
  - **the business version** — Somebody else’s money is being spent and somebody has to answer for it. It is an obligation rather than a feature.
  - both, for different reasons — The consumer case needs a receipt rather than an audit trail.
- Errors that say what happened and what to do next.
  - the consumer version — A first-time user with a vague error simply leaves.
  - the business version — An administrator meeting a vague error on the last Friday of the month has nobody to ask and a deadline.
  - **both, for different reasons** — Both, and the consequence differs: one leaves, the other is stuck with it.

**Then:** Now write your own three differences, with the structural reason rather than the preference behind each.

**What to watch for:** Two of the six belong in both versions, and the reasons differ. What separates the contexts is repetition, volume and whose money it is — not whether the work is serious.

Worksheet fields for this step, revealed a few at a time in the app:

- Difference 1 · what differs, and the structural reason
- Difference 2 · what differs, and the structural reason
- Difference 3 · what differs, and the structural reason

<details>
<summary>Help with this step</summary>

- **Structural reason:** Repetition, volume, mandatory use, somebody else’s money. Not a preference for one style over another.
- **Neither is more sophisticated:** The two contexts optimise different things. Consumer work is not simpler and business work is not more serious.

Stuck starting? For each difference, finish this sentence: “because somebody doing this monthly …”.

Is it enough? No difference is justified by taste.

</details>

#### 5. Locate your project

- Decide which context your own project is in, and say what that implies.
- Save both designs and the comparison.

**You should end up with:** Which context your project actually is, and what follows from that.

Worksheet fields for this step:

- Which context your project actually is, and what follows from that
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Locating your own project:** Deciding which set of pressures applies. Many products are both, with different screens for each, and naming that is better than averaging them.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Ask whether your main user chose the product and how often they use it.

Is it enough? You named a context and something that follows from it rather than only the label.

</details>

**Save and continue.** Saved for you: Your two designs, the three differences and your context judgement save as you type, on this device first and then online. Kept outside the app: Both sketches stay in your own folder. Keep them side by side; the pair is the artefact rather than either one. What your creator sees: Your creator reads the structural reasons. A difference explained by preference is the one that shows the contexts were not really separated. Your next action: Open Your work and choose Ready for review. The next lesson deals with pressure to design something you should not.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Redesign the business version for someone doing this forty times a week.

</details>

<details>
<summary>Hint 2</summary>

For each difference ask what about the context forced it; if nothing did, it is taste.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Consumer and enterprise, and the trade between them.
Task: Compare the same feature designed for a consumer product and for a business one, and name the three decisions that differ and why.
Challenge one thing at a time, and start with the mistake this lesson is about: “Good design is good design.” The principles transfer and the priorities do not. A consumer flow optimised for a confident first use, applied to a tool someone uses hourly, produces a product people resent for reasons they cannot articulate.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the two designs and ask whether the same feature is designed for both contexts. Look at the difference list and ask whether three differences are named with structural reasons. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l09-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** The same feature is designed for both contexts: Two designs of one feature with the optimisation stated for each. Three differences are named with structural reasons: Three decisions with the structural cause of each difference. The administrator's task is designed: A configuration or management task designed rather than assumed. The project's own context is identified with implications: A statement of which context applies and what it implies for priorities.

**Bring forward:** Two versions of one feature with structural reasoning is a compact way to show you can work in either context, which widens the roles you can apply for. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Read on roles and obligations (~25 min): Re-read the assigned permission vocabulary and the standard's points on accountability. List what a business context adds that a consumer one does not.
- Design the consumer version (~30 min): Design for a first-time, self-selected user. Note what you optimised for.
- Design the business version (~30 min): Design for someone doing this repeatedly on behalf of others. Include the administrator's configuration task.
- Name the differences (~20 min): Write the three decisions that differ and the structural reason for each. Check none of them is merely aesthetic.
- Locate your project (~15 min): Decide which context your own project is in, and say what that implies. Save both designs and the comparison.

Pause after any step; save the artifact and next action.

**Free tool path.** Paper for both versions. No enterprise tooling is required to design an enterprise screen.

### Output

The same feature designed for both contexts; Three decisions that differ, with the structural reason for each; The administrator's task designed, not assumed; A note of which context your project actually is

### Checks

- What does mandatory use change? Answer: The meaning of frustration. A consumer leaves; a captive user accumulates resentment, and the hundredth use matters more than the first.
- What does a business context add as design surface? Answer: Administration, auditability and data obligations. Those are usually where the real work is, and they are routinely designed last.
- Is enterprise design more sophisticated? Answer: No. It optimises different things. Treating it as the serious kind is a common mistake, as is applying consumer instincts to a daily tool.

### Rubric and remediation

**The same feature is designed for both contexts**

Adequate evidence: Two designs of one feature with the optimisation stated for each.

- 0 — One design relabelled.
- 1 — Two designs differing only visually.
- 2 — Two designs with different structures and stated optimisations.
- 3 — As adequate, and the business version assumes repeated daily use.

If below 2: Redesign the business version for someone doing this forty times a week. Show at recheck: The two designs.

**Three differences are named with structural reasons**

Adequate evidence: Three decisions with the structural cause of each difference.

- 0 — Differences described aesthetically.
- 1 — Structural reasons for one or two.
- 2 — All three with structural reasons.
- 3 — As adequate, and one reason concerns who is spending the money.

If below 2: For each difference ask what about the context forced it; if nothing did, it is taste. Show at recheck: The difference list.

**The administrator's task is designed**

Adequate evidence: A configuration or management task designed rather than assumed.

- 0 — Administration ignored.
- 1 — Mentioned without design.
- 2 — Designed with its own flow.
- 3 — As adequate, and it accounts for someone configuring for people they will never meet.

If below 2: Design the setup task; it is where business software usually fails. Show at recheck: The administrator design.

**The project's own context is identified with implications**

Adequate evidence: A statement of which context applies and what it implies for priorities.

- 0 — Not addressed.
- 1 — Context named without implications.
- 2 — Both stated.
- 3 — As adequate, and one current design decision is revisited because of it.

If below 2: Decide whether your users chose your product, and follow the implications. Show at recheck: The context statement.

### Portfolio contribution

Two versions of one feature with structural reasoning is a compact way to show you can work in either context, which widens the roles you can apply for.

### Assigned resources

- R44: [Google Cloud: IAM overview](https://docs.cloud.google.com/iam/docs/overview) — Roles, inheritance and least privilege. Purpose: Supplies the vocabulary for the administrative surface a business product needs. Effort: 15–25 min. Free reading, no account. Verified 2026-09-06. Infrastructure documentation rather than an interface pattern library; the administrator's task design is the course's own. Fallback: R19.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on having a multidisciplinary team and on solving a whole problem for users. Purpose: Grounds auditability and obligation as design surfaces rather than compliance chores. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-sector obligations differ from commercial ones; take the framing. Fallback: R07.

## Lesson 10: Pressure, patterns and where you stop

Stable ID: m17-l10-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Identify three requests you would refuse, write what you would say, and design one honest alternative that serves the underlying business need.

**Bring forward.** Your product, its economics and its stakeholder map.

The pressure to design something that works against the person using it is ordinary, arrives politely, and is usually justified by a number.

### Learn

The patterns are recognisable and named: costs revealed only at the last step, cancellation routes that are harder than sign-up, countdowns that are not real, pre-ticked boxes, and choices worded so that the careless answer is the one that benefits the business. What they share is that they work by exploiting attention rather than by serving anyone.

Underneath each is usually a real need. Someone wants fewer cancellations, more sign-ups, higher basket values — legitimate goals with dishonest proposed means. Finding the honest version of the same goal is the work, and it is usually possible: fewer cancellations through better expectation-setting, more sign-ups by removing friction rather than by hiding the exit.

Refusal alone loses. A designer who says no without an alternative is overruled and excluded from the next conversation; one who says “not that, because it costs us this, but here is what would serve the same goal” stays in the room. This is the m14 argument skill applied to an ethical case rather than a resourcing one.

Writing your limits in advance is the practical safeguard, exactly as in m15 and m16. Under pressure, with a deadline and a persuasive colleague, a written line is easier to hold than an improvised judgement, and it lets you answer immediately rather than being talked round while you think.

**Common misconception.** “This is just persuasive design.” Persuasion presents a real offer well. These patterns work by making the person's attention fail, and the test is whether the person would object if they understood what had happened — which they generally do, later, loudly.

### Worked example

Three refusals were written. A countdown implying a place would be released in five minutes when it would not: refused, because it is a false statement, with the alternative of showing genuine remaining places. Cancellation requiring a phone call while booking took two taps: refused, because it obstructs exit, with the alternative of self-service cancellation and an optional reason field that gives the provider better information than an angry call. A pre-ticked box adding a newsletter: refused, with the alternative of asking after the booking is complete, which in the provider's own experience produced better-quality subscribers.

#### Pressure, patterns and where you stop

Identify three requests you would refuse, write what you would say, and design one honest alternative that serves the underlying business need.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Written work. The alternatives are design work you can do on paper.

- Starting material: Your economics reading and stakeholder map.
- Create HaruCourse/Practice/m17-l10-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Name the patterns

- List requests you could plausibly receive on your product.
- Name the pattern each one is an instance of.

**You should end up with:** Three plausible requests, each named as the pattern it is an instance of.

Worksheet fields for this step, revealed a few at a time in the app:

- Request 1 · what is asked for, and the pattern it is an instance of — Hidden costs, obstructed exits, manufactured urgency, pre-ticked consent. Naming the pattern is what makes it arguable.
- Request 2 · what is asked for, and the pattern it is an instance of
- Request 3 · what is asked for, and the pattern it is an instance of

<details>
<summary>Help with this step</summary>

- **Manufactured urgency:** A deadline that is not real: a countdown that resets, a place that was never going to be released. It works by making a person decide before they have thought.
- **Obstructed exit:** Leaving being much harder than arriving. Two taps to book and a phone call to cancel is the standard shape.
- **Hidden cost:** A charge or commitment revealed after the person has invested effort. It works because people continue rather than start again.

Stuck starting? Write requests somebody could plausibly make on a Monday, not ones nobody would make.

Is it enough? Each has a pattern name attached rather than only a description.

</details>

#### 2. Find the real need

**See it first.** Made-up example. Finding the need under a request at a class provider, and accepting the stated one.

- **What was asked for:** A pre-ticked newsletter box on the booking form. The stated reason was that the mailing list needed to grow.
- **What I nearly did:** Took that at face value and started designing an honest way to grow a mailing list, which is a perfectly good piece of work.
- **What one question found:** Why does the list need to grow? Because classes with low bookings get cancelled, and the newsletter is how she fills them.
- **What the real need was:** Filling classes that would otherwise be cancelled. The mailing list was one route to it, chosen because it is the one she had.
- **What that opened up:** The waiting list from the earlier lesson fills classes directly, without a newsletter at all. The honest alternative served the real need better than the dishonest version served the stated one.

**The wrong turn:** The wrong turn is designing an honest version of the stated need, because it is right in front of you and it is a real need. Asking why it matters once more usually finds something the original request was only an attempt at.

**What it costs:** Asking why twice can read as obstruction, particularly from somebody who has already been told no once.

**Still unknown:** Still unknown: whether the newsletter is the better route for some classes. It probably is for the ones announced months ahead, and both can exist.

- For each, write the legitimate business need underneath.
- Check the need is real rather than a rationalisation.

**You should end up with:** The legitimate business need underneath each request, checked as real.

Worksheet fields for this step:

- For each: the legitimate business need underneath — There nearly always is one. Somebody is accountable for something, and this was their idea of how to reach it.
- How you checked the need is real rather than a rationalisation

<details>
<summary>Help with this step</summary>

- **The need underneath:** What somebody is actually accountable for: filling classes, keeping subscribers, reducing empty places. The pattern was their idea of how to get there.
- **A rationalisation:** A need invented to justify a decision already wanted. It usually cannot name who is accountable for it or what would count as meeting it.

Stuck starting? For each request, ask what somebody is being asked about that made them think of it.

Is it enough? Each need names somebody accountable rather than an abstraction.

</details>

#### 3. Design one alternative

**See it first.** Made-up example. Refusing a countdown at a class provider, and refusing it on principle.

- **What was asked for:** A countdown on the review screen saying the place would be released in five minutes. Bookings were being abandoned at that step and something had to be done.
- **What I said:** That it was a dark pattern and we should not do it. True, and it left the person who asked with an abandonment problem and no help.
- **What happened:** It was built by somebody else three weeks later, in a worse version, and I was not asked about the screen again.
- **What the need actually was:** Places held by people who never complete, which the provider cannot sell to anybody else. Real, specific, and somebody is accountable for it.
- **What I should have offered:** The genuine number of places left, and a real hold with a real expiry, stated honestly. Urgent when it is urgent, and silent when it is not, which is the part the countdown could never do.

**The wrong turn:** The wrong turn is refusing on principle without an alternative, because the principle is sound and stating it feels like the whole job. The problem is still there, somebody else solves it worse, and you are no longer in the conversation.

**What it costs:** The honest version produces less urgency, because most of the time there is no urgency. Some of the abandonment it was meant to prevent will continue.

**Still unknown:** Still unknown: whether a real hold reduces abandonment at all. It can be counted in the provider’s records after a month, which the countdown version could never have been separated from.

- Design an honest way to serve one of those needs.
- Estimate what it would cost compared with the dishonest version.

**You should end up with:** One honest alternative designed, with what it costs compared with the dishonest version.

Worksheet fields for this step:

- An honest way to serve one of those needs
- What it would cost compared with the dishonest version

<details>
<summary>Help with this step</summary>

- **An honest alternative:** Something that serves the same need without depending on the person’s attention failing. It usually exists and usually works less quickly.
- **What it costs:** Named plainly. The honest version is frequently slower and occasionally worse on the number, and pretending otherwise loses the argument.

Stuck starting? Take the need and ask what would serve it if the person read everything carefully.

Is it enough? Your alternative would still work on somebody paying full attention.

</details>

#### 4. Write what you would say

- Write the sentence you would use to refuse, naming the cost.
- Practise it aloud so it is available under pressure.

**You should end up with:** The sentence you would use to refuse, naming the cost, practised aloud.

**Try it with help.** Six replies to a made up request for a false countdown. For each one, decide what it would achieve.

- A countdown that is not true will produce complaints and refund requests, and it makes the provider look dishonest. Here is the version with the real hold, which I can do this week.
  - **holds the line and keeps the room** — A named cost, a refusal, and something to say yes to. Nobody has to lose the argument in order to stop it.
  - holds the line and loses the room — It gives them something, which is what keeps you in the conversation.
  - gives way — Nothing dishonest is being agreed to.
- That is a dark pattern and we should not do it.
  - holds the line and keeps the room — It leaves the person with an abandonment problem and no help, and it uses a term that sounds like an accusation.
  - **holds the line and loses the room** — It is correct and it ends your involvement. Somebody builds it worse three weeks later.
  - gives way — It refuses clearly.
- We could make the countdown longer so it feels less pushy.
  - holds the line and keeps the room — It agrees to the false statement and negotiates its duration.
  - holds the line and loses the room — No line is being held.
  - **gives way** — This is how these things actually get built: not by anybody deciding to mislead, but by softening.
- Let us test it and see whether it increases completions.
  - holds the line and keeps the room — It will increase completions, which was never in doubt, and the test makes the question a matter of evidence rather than of honesty.
  - holds the line and loses the room — Nothing is refused.
  - **gives way** — Testing whether a false statement works is a way of agreeing to make it.
- I do not think we should, but it is not my decision.
  - holds the line and keeps the room — It registers a reservation and declines to make an argument.
  - holds the line and loses the room — Nothing is held.
  - **gives way** — It is the most common version, and it reads afterwards as having gone along with it.
- I will not write a timer that says something untrue. I can build a real hold with a real expiry this week, and we will know within a month whether it helps.
  - **holds the line and keeps the room** — A specific refusal, a specific offer, and a way to find out. The refusal is about the false statement rather than about the category of thing.
  - holds the line and loses the room — It offers a route forward in the same breath.
  - gives way — It refuses the thing that mattered.

**Then:** Now write your own sentence, and check it names a cost and offers something.

**What to watch for:** Giving way rarely looks like agreement. It looks like softening it, testing it, or noting a reservation and standing aside. All three leave the thing built and leave you unable to say you objected.

Worksheet fields for this step:

- The sentence you would use to refuse, naming the cost — Refunds, complaints, staff time, reputation. A refusal in terms of principle alone rarely survives a deadline.
- How you practised it, and what was hard to say

<details>
<summary>Help with this step</summary>

- **Naming the cost:** Refunds, complaints, support time, reputation. It puts the refusal in the terms the decision is made in, as Module 14 established.
- **Practised aloud:** Said once, before it is needed. Under pressure the sentence has to be available rather than constructed.

Stuck starting? Write the sentence, then say it out loud once. It will be shorter the second time.

Is it enough? Your sentence names a cost and offers something in the same breath.

</details>

#### 5. Write your limits

- Write the line you will not cross, before being asked.
- Save the refusals, the alternative and the limits.

**You should end up with:** The line you will not cross, written before anybody asks, and the repair the Check questions asked for.

Worksheet fields for this step:

- The line you will not cross, written before anybody asks
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **Written in advance:** Decided calmly, before a deadline and a reasonable person are pushing. The moment it is needed is the worst moment to work it out.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Finish this sentence: “I will not write, draw or specify anything that …”.

Is it enough? Your line names a kind of thing rather than a feeling about one.

</details>

**Save and continue.** Saved for you: Your three requests, the needs underneath, the alternative, your sentence and your line save as you type, on this device first and then online. Kept outside the app: Keep your line somewhere you will see it at work rather than only here. It exists for a specific bad afternoon. What your creator sees: Your creator reads the alternative and the sentence. A refusal with neither is a position you will not be able to hold twice. Your next action: Open Your work and choose Ready for review. The next lesson compares your work against one employer’s published expectations.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Think of what a provider under revenue pressure would ask for, not what a villain would.

</details>

<details>
<summary>Hint 2</summary>

Ask what the requester is actually trying to achieve, and write that.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Pressure, patterns and where you stop.
Task: Identify three requests you would refuse, write what you would say, and design one honest alternative that serves the underlying business need.
Challenge one thing at a time, and start with the mistake this lesson is about: “This is just persuasive design.” Persuasion presents a real offer well. These patterns work by making the person's attention fail, and the test is whether the person would object if they understood what had happened — which they generally do, later, loudly.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the three requests and ask whether three plausible requests are named as patterns. Look at the needs list and ask whether the legitimate need underneath each is identified. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l10-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three plausible requests are named as patterns: Three requests you could realistically receive, each identified as a known pattern. The legitimate need underneath each is identified: A real business need per request, distinguished from its dishonest means. One honest alternative is designed with its cost: A designed alternative and an estimate of its cost against the dishonest version. Written limits exist, prepared in advance: A written line with the sentence you would say.

**Bring forward:** A refusal with an honest alternative designed is a strong ethical artefact and a practical one, because it shows you can hold a line without losing the room. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Name the patterns (~25 min): List requests you could plausibly receive on your product. Name the pattern each one is an instance of.
- Find the real need (~25 min): For each, write the legitimate business need underneath. Check the need is real rather than a rationalisation.
- Design one alternative (~30 min): Design an honest way to serve one of those needs. Estimate what it would cost compared with the dishonest version.
- Write what you would say (~25 min): Write the sentence you would use to refuse, naming the cost. Practise it aloud so it is available under pressure.
- Write your limits (~15 min): Write the line you will not cross, before being asked. Save the refusals, the alternative and the limits.

Pause after any step; save the artifact and next action.

**Free tool path.** Written work. The alternatives are design work you can do on paper.

### Output

Three requests you would refuse, named as patterns; The legitimate need underneath each; One honest alternative designed; Your written limits, prepared in advance

### Checks

- What do these patterns have in common? Answer: They work by exploiting attention rather than by serving anyone. The test is whether the person would object if they understood what had happened.
- Why is refusal alone insufficient? Answer: Because it loses the argument and excludes you from the next one. The legitimate need underneath usually has an honest design that serves it.
- Why write your limits in advance? Answer: Because under deadline pressure a written line is easier to hold, and it lets you answer immediately rather than being talked round while you think.

### Rubric and remediation

**Three plausible requests are named as patterns**

Adequate evidence: Three requests you could realistically receive, each identified as a known pattern.

- 0 — Extreme examples nobody would propose.
- 1 — Plausible requests without naming the pattern.
- 2 — Three plausible requests named as patterns.
- 3 — As adequate, and one is something you might have designed without noticing.

If below 2: Think of what a provider under revenue pressure would ask for, not what a villain would. Show at recheck: The three requests.

**The legitimate need underneath each is identified**

Adequate evidence: A real business need per request, distinguished from its dishonest means.

- 0 — Requests treated as purely bad faith.
- 1 — Needs asserted vaguely.
- 2 — A specific legitimate need per request.
- 3 — As adequate, and one need is one you would want to serve.

If below 2: Ask what the requester is actually trying to achieve, and write that. Show at recheck: The needs list.

**One honest alternative is designed with its cost**

Adequate evidence: A designed alternative and an estimate of its cost against the dishonest version.

- 0 — No alternative.
- 1 — An alternative sketched without cost.
- 2 — Designed with a cost comparison.
- 3 — As adequate, and it serves the need at least as well.

If below 2: Design the version you would be happy to explain to the person affected. Show at recheck: The alternative.

**Written limits exist, prepared in advance**

Adequate evidence: A written line with the sentence you would say.

- 0 — No limits written.
- 1 — Limits stated abstractly.
- 2 — A specific line with prepared wording.
- 3 — As adequate, and the wording names the cost rather than only the principle.

If below 2: Write what you will not do and the sentence you would use, then say it aloud. Show at recheck: The limits.

### Portfolio contribution

A refusal with an honest alternative designed is a strong ethical artefact and a practical one, because it shows you can hold a line without losing the room.

### Assigned resources

- R36: [NN/g: preventing user errors](https://www.nngroup.com/articles/user-mistakes/) — How design shapes behaviour, and the difference between preventing errors and exploiting them. Purpose: Supports the argument that these patterns work by causing failure rather than by persuading. Effort: 20–30 min. Free reading, no account. Verified 2026-09-06. It is about error prevention rather than manipulative patterns; the naming and the refusals here are the course's own. Fallback: R02.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on making sure everyone can use the service and on solving a whole problem for users. Purpose: Gives a stated standard to cite rather than only a personal preference. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-service obligations; a commercial product has no equivalent obligation, which is why the written limits matter. Fallback: R07.

## Lesson 11: Influence without authority

Stable ID: m17-l11-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Compare your current work against one employer's published expectations for design leadership, and plan one concrete way to practise an expectation you cannot yet demonstrate.

**Bring forward.** Your project artefacts and this module's outputs.

Senior design work is largely getting things decided and built without controlling anyone, and it is describable, learnable and testable against a real employer's stated expectations.

### Learn

The assigned job-family page describes management levels with strategic partnership, stakeholder influence, team development and how design success is measured. Read as a checklist against your own work, it is more useful than any general advice about seniority, because it is specific, published and someone's actual expectation.

It is one employer's expectations. This course has one published source of this kind and records that plainly: it is not a market standard, its performance measures are its own, and a different company would describe the same level differently. Treat it as a specific example to reason from rather than as a definition.

The comparison should be against artefacts. For each expectation, either you can point to something you did — the stakeholder map, the argued case, the refusal with an alternative — or you cannot, and the honest answer is that you have read about it. This module and m14 have produced several of those artefacts deliberately.

Practising the gap means finding real work where the expectation applies. Influence cannot be practised in a document; it is practised by taking a decision you want changed to the person who can change it, with the argument prepared. That is available at any level, including on a project with one client.

**Common misconception.** “Leadership comes with a title.” The expectations describe behaviour: making decisions legible, influencing people who do not report to you, connecting design work to what the organisation is accountable for. All of that is practisable now.

### Worked example

The comparison found four expectations she could evidence: influencing a decision with a prepared argument, mapping stakeholders by accountability, connecting design work to a stated business cost, and refusing a request with an alternative. Two she could not: developing another designer's work through critique, and setting direction across more than one project. The plan: run a structured critique for a peer's work monthly, using the m14 critique format, and write a direction note covering both her project and the provider's other service, to be discussed rather than filed. Both were marked as unpractised until done.

#### Influence without authority

Compare your current work against one employer's published expectations for design leadership, and plan one concrete way to practise an expectation you cannot yet demonstrate.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Reading and written comparison, plus real work. Nothing here needs a role or a budget.

- Starting material: Your portfolio of work so far.
- Create HaruCourse/Practice/m17-l11-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Read the expectations

- Read the assigned job-family page for one level above your current work.
- List the expectations in your own words.

**You should end up with:** The expectations from one published job-family page, written in your own words.

Worksheet fields for this step:

- The expectations from the assigned job-family page, one level above your current work — In your own words. Copying the page teaches nothing and makes the comparison harder.

<details>
<summary>Help with this step</summary>

- **Design leadership:** Influence over decisions without controlling anybody. It describes behaviour rather than a title, which is what makes it practisable now.
- **Published expectations:** One employer’s written description of what a level means. It is evidence about that employer and not a market standard.

Stuck starting? Read the level above the work you are currently doing rather than the one you want.

Is it enough? Every expectation is in your words and describes a behaviour.

</details>

#### 2. Compare against artefacts

**See it first.** Made-up example. Comparing work against published expectations, and comparing against understanding.

- **What I did first:** Went down the list marking yes or no according to whether I could explain the expectation and would know how to do it.
- **What that produced:** Eleven yeses out of fourteen. A comfortable afternoon and a completely useless document.
- **What changed when I asked for the artefact:** Four of the eleven had one: a decision record, a stakeholder map, a prepared argument with an outcome, a refusal with an alternative. The other seven were things I had read about in this module.
- **Why the distinction matters:** In a level conversation, somebody asks for an example. Understanding the expectation produces a description of the expectation, which is exactly what somebody who has not done it sounds like.
- **What the honest version gave me:** Four evidenced, seven read-about, three not yet understood. The plan writes itself from the middle column.

**The wrong turn:** The wrong turn is marking what you understand rather than what you can evidence, because understanding is what reading a module produces and it feels like competence. Nothing is dishonest about it until somebody asks for an example.

**What it costs:** The honest comparison is much shorter and reads as though you have done far less than you have. It is also the only version that produces a plan.

**Still unknown:** Still unknown: whether four evidenced expectations is a lot or a little for somebody at this stage. One employer’s page cannot say, and comparing myself to it is the only thing this exercise does.

- For each expectation, name the artefact that evidences it.
- Where none exists, write read-about rather than done.

**You should end up with:** Each expectation matched to an artefact, or marked read-about where none exists.

Worksheet fields for this step:

- For each expectation: the artefact that evidences it — A specific artefact from this course or your own work. Not a belief that you could do it.
- Where no artefact exists, marked read-about rather than done — This distinction is the whole value of the exercise. Read-about is honest and it is not evidence.

<details>
<summary>Help with this step</summary>

- **Evidenced:** There is an artefact somebody could look at: a decision record, a stakeholder map, a prepared argument with its outcome.
- **Read-about:** You understand it and have not done it. Marking it honestly is the point of the exercise, and confusing the two is how people prepare badly for level conversations.

Stuck starting? For each expectation, name the file or the artefact before deciding whether you can do it.

Is it enough? Every yes has something somebody could look at.

</details>

#### 3. Choose one gap

- Choose the expectation whose absence most limits you.
- Check it is practisable on work you actually have.

**You should end up with:** The expectation whose absence most limits you, with how it is practisable on work you have.

Worksheet fields for this step:

- The expectation whose absence most limits you, and why
- How it is practisable on work you actually have — If it needs a team you do not have, choose another. A gap you cannot practise is a note rather than a plan.

<details>
<summary>Help with this step</summary>

- **Most limiting:** The one whose absence costs you most now, rather than the one that sounds most senior.
- **Practisable:** Doable on work you actually have, this month. An expectation requiring a team you do not have is a note for later rather than a plan.

Stuck starting? Ask which gap has already cost you something in the last three months.

Is it enough? You could start this on work that exists.

</details>

#### 4. Plan the practice

- Write what you will do, on which work, and when.
- Name what evidence it would produce.

**You should end up with:** A plan naming what you will do, on which work, and when, with the evidence it would produce.

**Try it with help.** Six plans for practising a made up leadership expectation. For each one, decide whether it would produce evidence.

- Run a structured critique of a peer’s work monthly, using the format from Module 14, and keep the problem lists.
  - **produces evidence** — A named format, a real cadence, and a record afterwards. Somebody could read the problem lists and see what was developed.
  - produces nothing to show — The records are the evidence.
  - needs something you do not have — It needs one peer willing to swap work, which most people can find.
- Read more about design leadership.
  - produces evidence — It produces understanding, which is the read-about column rather than the evidenced one.
  - **produces nothing to show** — Nothing exists afterwards that somebody could look at.
  - needs something you do not have — It needs nothing, which is part of why it is the default plan.
- Write a direction note covering your project and the provider’s other service, and take it to them to be discussed.
  - **produces evidence** — The note exists, and what happened in the discussion is the second half of it. Taken to somebody rather than filed is what makes it practice.
  - produces nothing to show — Both the note and the outcome are showable.
  - needs something you do not have — It needs a provider who will spend twenty minutes, which you already have.
- Set direction for a team of three designers.
  - produces evidence — It would, and there is no team.
  - produces nothing to show — It would produce plenty, if it could happen.
  - **needs something you do not have** — A gap you cannot practise is a note for later. Choosing it as your plan guarantees nothing happens.
- Offer to review a junior designer’s work informally, with no agreed format and no record.
  - produces evidence — It is real practice and it leaves nothing behind.
  - **produces nothing to show** — Worth doing, and the record is what makes it evidence. A format and kept notes cost nothing extra.
  - needs something you do not have — It needs one willing person.
- Prepare an argument for one decision using the Module 14 format, deliver it, and record what actually moved it.
  - **produces evidence** — The prepared argument, the response and what moved the decision are three artefacts from one afternoon.
  - produces nothing to show — All three are recordable.
  - needs something you do not have — It needs one decision anybody is making, which always exists.

**Then:** Now write your own plan, and check it produces something somebody could look at.

**What to watch for:** Two of these are real practice that leaves nothing behind, and one needs a team. The plans that work all attach a format and a record to something you were going to do anyway.

Worksheet fields for this step:

- What you will do, on which work, and when
- What evidence it would produce

<details>
<summary>Help with this step</summary>

- **On which work:** A real piece of work with a name. Practising in the abstract produces nothing anybody can look at.
- **The evidence it would produce:** What exists afterwards: a critique record, a direction note, a decision somebody made differently. Decided in advance, it makes the practice checkable.

Stuck starting? Write the date before writing the activity; a plan without one is an intention.

Is it enough? Somebody could look at the evidence afterwards and see whether you did it.

</details>

#### 5. Record the limits

**See it first.** Made-up example. Recording the limits of a level comparison, and recording them where they would be read last.

- **What I wrote:** A line at the bottom saying these are one employer’s published expectations and vary between organisations. Accurate, and in the place nobody reaches.
- **What happened when I used the comparison:** I referred to it in a conversation as though it described what the level means, because by then I had internalised the list and not the caveat.
- **Who the note was actually for:** Me, in three months, having forgotten where the list came from. Not a reader who might be misled.
- **What I changed:** Put it in the first line, before the expectations, so the list is read as one employer’s from the start.
- **What that changed about how I used it:** I started saying “at this company, this level means” rather than “this level means”, which is a smaller claim and a true one.

**The wrong turn:** The wrong turn is putting the limitation at the end, which is where limitations conventionally go. The person most likely to forget the caveat is you, and you read your own documents from the top.

**What it costs:** Opening with a caveat makes the comparison look weaker before anybody has read it, which is an accurate impression.

**Still unknown:** Still unknown: how much these expectations differ between organisations. This course has no verified source that compares them, which is itself worth writing in the learning list.

- Note that this is one employer's published expectation.
- Save the comparison and the plan.

**You should end up with:** A note that this is one employer’s published expectation rather than a market standard, and the repair the Check questions asked for.

Worksheet fields for this step:

- The note that this is one employer’s published expectation rather than a market standard
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **One employer:** Their page describes what they expect. Levels, titles and expectations vary enormously between organisations, and this course does not have a verified market-wide source.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? Write the sentence at the top of the comparison rather than at the end.

Is it enough? Nobody could read your comparison as a claim about the market.

</details>

**Save and continue.** Saved for you: Your expectations list, the comparison, the chosen gap and the plan save as you type, on this device first and then online. Kept outside the app: The artefacts you are pointing at live in your own folder. Note their file names beside each expectation so the comparison is checkable. What your creator sees: Your creator reads the read-about column. A comparison with nothing in it is a comparison against understanding rather than against work. Your next action: Open Your work and choose Ready for review. The last lesson of the module writes the strategy note for your own project.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

For each expectation, name the file or document that demonstrates it.

</details>

<details>
<summary>Hint 2</summary>

Go through and mark anything you cannot point to an artefact for.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: Influence without authority.
Task: Compare your current work against one employer's published expectations for design leadership, and plan one concrete way to practise an expectation you cannot yet demonstrate.
Challenge one thing at a time, and start with the mistake this lesson is about: “Leadership comes with a title.” The expectations describe behaviour: making decisions legible, influencing people who do not report to you, connecting design work to what the organisation is accountable for. All of that is practisable now.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the comparison and ask whether expectations are compared against real artefacts. Look at the markers and ask whether done and read-about are distinguished honestly. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l11-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Expectations are compared against real artefacts: Each expectation with the artefact that evidences it or a blank. Done and read-about are distinguished honestly: A clear marker separating demonstrated from studied. One gap is chosen and is practisable on real work: A chosen expectation with the real work it will be practised on. The single-employer limitation is recorded: A written note that these expectations are one employer's.

**Bring forward:** A comparison against published expectations, with the read-about items honestly marked, is a strong preparation artefact for a level conversation. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Read the expectations (~30 min): Read the assigned job-family page for one level above your current work. List the expectations in your own words.
- Compare against artefacts (~30 min): For each expectation, name the artefact that evidences it. Where none exists, write read-about rather than done.
- Choose one gap (~25 min): Choose the expectation whose absence most limits you. Check it is practisable on work you actually have.
- Plan the practice (~20 min): Write what you will do, on which work, and when. Name what evidence it would produce.
- Record the limits (~15 min): Note that this is one employer's published expectation. Save the comparison and the plan.

Pause after any step; save the artifact and next action.

**Free tool path.** Reading and written comparison, plus real work. Nothing here needs a role or a budget.

### Output

A comparison of your artefacts against published expectations; What you can evidence and what you have only read about; A plan to practise one expectation on real work; A note that one employer's expectations are not a market standard

### Checks

- What does this leadership mean here? Answer: Influence over decisions without authority over people: making work legible, connecting it to accountabilities, and getting things decided.
- What is the status of the published expectations? Answer: One employer's, published and specific. Useful evidence to reason from, and not a market standard — a different company would describe the level differently.
- How do you practise influence? Answer: On real work: take a decision you want changed to the person who can change it, with the argument prepared. It cannot be practised in a document.

### Rubric and remediation

**Expectations are compared against real artefacts**

Adequate evidence: Each expectation with the artefact that evidences it or a blank.

- 0 — A general self-assessment.
- 1 — Some expectations matched to artefacts.
- 2 — Every expectation matched or explicitly blank.
- 3 — As adequate, and the artefacts are ones a reviewer could actually read.

If below 2: For each expectation, name the file or document that demonstrates it. Show at recheck: The comparison.

**Done and read-about are distinguished honestly**

Adequate evidence: A clear marker separating demonstrated from studied.

- 0 — Reading presented as experience.
- 1 — Distinction implied.
- 2 — Explicit markers throughout.
- 3 — As adequate, and at least one item you were tempted to claim is marked read-about.

If below 2: Go through and mark anything you cannot point to an artefact for. Show at recheck: The markers.

**One gap is chosen and is practisable on real work**

Adequate evidence: A chosen expectation with the real work it will be practised on.

- 0 — No gap chosen.
- 1 — A gap chosen with no route to practise it.
- 2 — Chosen with real work identified.
- 3 — As adequate, and the practice is scheduled rather than intended.

If below 2: Choose the gap you can act on this month with the work you already have. Show at recheck: The chosen gap.

**The single-employer limitation is recorded**

Adequate evidence: A written note that these expectations are one employer's.

- 0 — Treated as a standard.
- 1 — Limitation implied.
- 2 — Stated plainly.
- 3 — As adequate, and it names what a second source would add.

If below 2: Add the sentence recording that this is one published example rather than a market definition. Show at recheck: The limitation note.

### Portfolio contribution

A comparison against published expectations, with the read-about items honestly marked, is a strong preparation artefact for a level conversation.

### Assigned resources

- R48: [GitLab job families: product design management](https://handbook.gitlab.com/job-families/product/product-design-management/) — One management level's expectations: strategic partnership, stakeholder influence, team development and how success is measured. Purpose: Supplies specific published expectations to compare your artefacts against. Effort: 30–45 min. Free reading, no account. Verified 2026-09-06. One employer's published expectations, not a market standard; its performance measures are its own and this course has no second comparable source. Fallback: R23.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The point on having a multidisciplinary team. Purpose: Frames influence as part of a team's shared accountability rather than as personal advancement. Effort: 20–30 selected min. Free reading, no account. Verified 2026-09-06. Public-sector context; the leadership behaviours here come from the job-family source and this course's own framing. Fallback: R07.

## Lesson 12: A strategy note for your project

Stable ID: m17-l12-v1. Core. Areas 3, 17. Optional effort ~120 min.

**Objective.** Write a two-page strategy note for your project stating the choices, what they exclude, the constraints, the risks and what you would need to learn.

**Bring forward.** Everything from this module.

A strategy that lives in your head cannot be argued with, inherited or checked. Two pages is enough and is more than most projects have.

### Learn

Two pages is the right length because it is short enough to be read and long enough to say something. A longer document is a project in itself and will not be read; a shorter one usually omits the exclusions, which is the part that does the work.

The exclusions are what turn a strategy into a decision tool. Anyone can write that the product should serve people well; a strategy that says which people, and which of their needs the product will not address, settles arguments that would otherwise recur monthly.

Constraints belong in the note, including the ones you would rather not state: one developer, a provider who teaches all day, no analytics, a payment provider you cannot change. A strategy that assumes constraints away produces plans nobody can execute, which is worse than a modest plan that works.

The learning list closes the loop with this module's honest gap. Positioning is not sourced here; some of your economic reasoning rests on assumption; and your evidence about people is small. Writing those down means the strategy states its own foundations, which is what lets someone else check it or improve it.

**Common misconception.** “Strategy is for people above me.” The note you write for your own project is the one that will actually govern your decisions for the next few months. Writing it down is what makes it examinable.

### Worked example

The two pages: three choices, each a preference — first-time confidence over power-user speed, the provider's time over feature breadth, and honest states over conversion tricks. Exclusions: no corporate booking work this year, no marketing surfaces, no features that increase the provider's daily message volume. Constraints: one developer part-time, no analytics, a payment provider that cannot be changed, and a provider who is unavailable between ten and four. Risks: late cancellations rising after the easier cancellation flow, with the waiting-list count as the signal. Learning needed: positioning, which this course has no verified source for; and how many bookings come from repeat customers, which nobody currently knows.

#### A strategy note for your project

Write a two-page strategy note for your project stating the choices, what they exclude, the constraints, the risks and what you would need to learn.

**Where to practise:** Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.

<details>
<summary>Work in a file on your computer instead</summary>

Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.

Tools: Two pages of plain text. No template or canvas is required.

- Starting material: All this module's outputs.
- Create HaruCourse/Practice/m17-l12-v1 in Documents. Save a blank local note as work.md and copy the starter into it. Use a text editor; no note-taking account is needed.
- Work through the authored actions below using the named free route. Keep editable source files and before/after versions beside your note; do not replace evidence from an earlier lesson.

</details>

#### 1. Write the choices

**See it first.** Made-up example. Writing the choices for a strategy note, and writing them as things to do.

- **What I wrote:** Improve the booking flow, support the provider’s time, and be honest about states. Three sensible priorities.
- **What is missing from all three:** The other half. Nobody could disagree with any of them, because none says what is being given up to get it.
- **What the first one became:** First-time confidence over power-user speed. Somebody could reasonably argue the other way: regular members book twice a month and would benefit from speed.
- **What writing it that way exposed:** That I had not actually decided. Both were in my head as good things, and the note was the first place the trade had to be stated.
- **What the third one became:** Honest states over conversion, which is a choice with a cost: some bookings that a countdown would have captured will not happen.

**The wrong turn:** The wrong turn is writing priorities, because they are what strategy documents usually contain and they all sound right. A priority with no alternative attached is a value, and nobody can disagree with it or be held to it.

**What it costs:** Writing the other half means naming what you are giving up, in a document somebody else will read, before anybody has complained about it.

**Still unknown:** Still unknown: whether the speed trade is right. Nobody knows how many bookings come from repeat members, which is the first item on the learning list for exactly this reason.

- State three choices as preferences between real alternatives.
- Check each one could be disagreed with.

**You should end up with:** Three choices stated as preferences between real alternatives, each capable of being disagreed with.

Worksheet fields for this step:

- Choice 1 · a preference between two real alternatives
- Choice 2
- Choice 3
- How you checked each could be disagreed with

<details>
<summary>Help with this step</summary>

- **A preference between real alternatives:** This over that, where somebody could reasonably want the other. It is the only shape a choice can take.
- **Disagreeable:** Somebody could argue for the opposite. If nobody could, you have written a value rather than a choice.

Stuck starting? Write each as this over that, and then ask who would argue for that over this.

Is it enough? For each choice you can name somebody who would prefer the other side.

</details>

#### 2. Write the exclusions

- List what the strategy rules out for this period.
- Include at least one thing you would like to do.

**You should end up with:** What the strategy rules out, including at least one thing you would like to do.

Worksheet fields for this step:

- What the strategy rules out for this period
- At least one thing on that list you would like to do — If every exclusion is something you did not want anyway, nothing is being given up.

<details>
<summary>Help with this step</summary>

- **Exclusion:** What will not happen this period. It is what makes the note usable, because it is what somebody can hold you to.
- **Something you wanted:** The test of whether the exclusion list is real. A list of things you did not want anyway costs nothing and rules nothing out.

Stuck starting? List what you have been meaning to do, and put one of them on the exclusion list.

Is it enough? At least one exclusion is something you would rather not exclude.

</details>

#### 3. Record the constraints

**See it first.** Made-up example. Writing a strategy note for a class-booking project, and writing the constraints selectively.

- **What I listed:** One developer part-time, and no analytics. Both true, both external, and both things nobody could blame me for.
- **What I left out:** That the provider is unavailable between ten and four, and that I have about six hours a week for this. Both are the constraints that actually decide what happens.
- **Why they were left out:** The first sounds like a complaint about somebody helpful. The second sounds like an excuse, and I did not want the note to read as one.
- **What the note became without them:** A plan for a project with a full-time designer and a provider available for questions. Every schedule in it was wrong by a factor of two.
- **What happened when I added them:** The note got shorter and the plan got right. Six hours a week and a four-hour window for questions is a real project, and it is the one I have.

**The wrong turn:** The wrong turn is listing the constraints that reflect well on you, because a note is read by other people and the honest ones sound like complaints or excuses. A plan built on the flattering half is a plan for a different project.

**What it costs:** Writing your own limited time into a strategy note means it is written down where somebody can read it, and somebody will.

**Still unknown:** Still unknown: whether six hours a week is stable. It is what the last two months were, and the note says that rather than promising it.

- List the real constraints, including staffing and tooling.
- Do not assume any of them away.

**You should end up with:** Constraints recorded honestly, including the inconvenient ones.

Worksheet fields for this step:

- The constraints, including the ones you dislike

<details>
<summary>Help with this step</summary>

- **An inconvenient constraint:** One you would rather not write down: a person who is unavailable, a system that cannot change, your own limited time. Omitting them produces a plan that assumes a different project.

Stuck starting? Write the constraints you would rather not write down first.

Is it enough? At least one constraint is about you or somebody you like.

</details>

#### 4. List risks and signals

- Write the risks, including second-order ones from earlier in the module.
- For each, name the signal that would show it materialising.

**You should end up with:** Risks listed, each with the signal that would tell you it is materialising.

**Try it with help.** Six lines from a made up strategy note. For each one, decide whether it belongs in the note as written.

- Risk: late cancellations rise after the easier cancellation flow. Signal: the waiting-list count, checked monthly.
  - **usable as written** — A specific risk from a traced loop, with somewhere to look and a cadence. It can be acted on.
  - needs a signal or a specific — Both are present.
  - does not belong in the note — It is exactly what the risks section is for.
- Risk: the project may not deliver value.
  - usable as written — It is true of every project and tells nobody anything.
  - needs a signal or a specific — There is nothing specific enough to attach a signal to.
  - **does not belong in the note** — A risk that applies to everything identifies nothing. Cutting it makes room for one that does.
- Risk: the developer becomes unavailable.
  - usable as written — Real and specific, with nothing to watch for and nothing to do.
  - **needs a signal or a specific** — A signal might be his other commitments growing, and the useful addition is what you would do: document the build so somebody else could continue.
  - does not belong in the note — It is one of the largest risks in the project.
- Excluded this year: corporate booking work, marketing surfaces, and anything increasing the provider’s daily message volume.
  - **usable as written** — Three specific exclusions, one of which is something the team would like to do. Somebody can hold the project to it.
  - needs a signal or a specific — Nothing vague about it.
  - does not belong in the note — Exclusions are what make a strategy note usable.
- We will remain user-centred throughout.
  - usable as written — Nobody would write the opposite, so it excludes nothing and decides nothing.
  - needs a signal or a specific — There is nothing to make specific; it is a value.
  - **does not belong in the note** — It costs a line and makes the reader skim the rest.
- Need to learn: what proportion of bookings come from repeat customers, which nobody currently knows.
  - **usable as written** — A specific unknown about your own product, with an admission that nobody knows it. It is the most actionable kind of learning item.
  - needs a signal or a specific — It is already specific.
  - does not belong in the note — The learning section is where a project’s real gaps get stated.

**Then:** Now read your own note the same way, and cut anything nobody could disagree with.

**What to watch for:** Two of the six are values wearing a strategy costume. They read well, they exclude nothing, and every line of them is space that a specific risk or exclusion could have used.

Worksheet fields for this step:

- The risks, each with what would tell you it is materialising — A risk with no signal is a worry. The signal is what makes it something you can act on.

<details>
<summary>Help with this step</summary>

- **Risk:** Something that could go wrong, stated specifically enough to be watched. The traced loops from earlier in the module are the best source.
- **Signal:** What would tell you it is happening, and where you would see it. A risk with no signal is a worry.

Stuck starting? Take your traced loop from earlier in the module; it is already a risk with a delay attached.

Is it enough? Every risk has somewhere to look and a rough cadence.

</details>

#### 5. State what you need to learn

- Include this course's recorded gaps where they affect you.
- Save the note where decisions will be made from it.

**You should end up with:** What you need to learn including this course’s gaps, and confirmation that the note fits on two pages.

Worksheet fields for this step:

- What you would need to learn, including this course’s gaps — Positioning is one of them. So is anything nobody currently knows about your own product.
- Confirm it fits on two pages, and what you cut to get there
- What you changed after the Check questions — The Check section sends you back to one specific answer. Write which one you changed and why.

<details>
<summary>Help with this step</summary>

- **This course’s gaps:** Positioning is one, recorded in an earlier lesson. Naming it in your own note is what stops you making claims you cannot support.
- **Repair:** The one change a Check question asks you to make. Make it in the step it belongs to, then record here that you made it.

Stuck starting? List what nobody currently knows about your own product before listing what you have not read.

Is it enough? The note is two pages, and you can say what you cut.

</details>

**Save and continue.** Saved for you: Your choices, exclusions, constraints, risks and learning list save as you type, on this device first and then online. Kept outside the app: The two-page note belongs with your project rather than with this module. Keep it where the next decision will be made. What your creator sees: Your creator reads the exclusions and the constraints. An exclusion list that costs nothing and a constraint list with nothing awkward in it are the two commonest ways a strategy note says nothing. Your next action: Open Your work and choose Ready for review. This closes Module 17. Module 18 is the independent project, where all of this is used on work that is entirely yours.

A ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.





<details>
<summary>Hint 1</summary>

Rewrite each choice until someone reasonable could argue for the other side.

</details>

<details>
<summary>Hint 2</summary>

Add the thing you keep wanting to build and are choosing not to.

</details>

<details>
<summary>Optional AI rehearsal</summary>

Optional: attempt the work first, then use a free text chat for a focused rehearsal.

- Open ChatGPT at chatgpt.com or Gemini at gemini.google.com/app using free access. Sign in yourself if asked; do not start a trial or upgrade.
- Start a new chat and paste the copied prompt. Replace the bracketed learner-input placeholder with your own anonymized first attempt before sending.
- Reply to the tutor’s question in your own words. If it supplies a finished answer, ask for a hint instead. Use the non-AI exercise below whenever access or limits get in the way.

```text
I am rebuilding my Product Design skills. Lesson: A strategy note for your project.
Task: Write a two-page strategy note for your project stating the choices, what they exclude, the constraints, the risks and what you would need to learn.
Challenge one thing at a time, and start with the mistake this lesson is about: “Strategy is for people above me.” The note you write for your own project is the one that will actually govern your decisions for the next few months. Writing it down is what makes it examinable.
Ask one question at a time, at most three questions. Give a small hint only if I ask; leave the decisions and revision to me. Use only the anonymized material I paste. Label role-play as simulation. Never invent participants, quotes, research results or measured impact. Do not award a score or pass. If evidence is missing, say what is missing. Finish by asking me to revise one part and explain why.

My own first attempt (replace this placeholder before sending):
[Paste only the relevant worksheet answers and describe any drawing in text. No private participant or account details.]
```

Revise your own artifact. Record one suggestion accepted or rejected, your reason and what still needs real evidence. AI praise is not assessment.

Without AI or at a usage limit: Without any chat: mark your own work against the lesson's own standard, one criterion at a time. Look at the choices and ask whether three choices are stated as disputable preferences. Look at the exclusion list and ask whether an exclusion list includes something you wanted to do. Anything you cannot show, write down as untested rather than assuming it holds.

</details>

**Save:**

- Save the filled note as HaruCourse/Practice/m17-l12-v1/work.md. Save each requested artifact with its task name in the same folder and list its exact filename in the note.
- Preserve the original, revision and any test observations separately. Export readable images or a PDF only where suitable; working prototypes also need their source files.
- Add the artifact reference, decision, evidence limits and next action in Your work. A local path does not upload the work; share only anonymized artifacts when remote review is needed.

**Adequate evidence:** Three choices are stated as disputable preferences: Three A-over-B statements someone could disagree with. An exclusion list includes something you wanted to do: Exclusions listed, at least one of which you would have liked to pursue. Constraints are recorded without being assumed away: Real constraints including staffing, tooling and availability. Risks carry signals and the learning gaps are named: Risks with observable signals, and a learning list including course gaps.

**Bring forward:** A two-page strategy note with real exclusions and honest constraints is a senior artefact, and it is the natural companion to the case study your portfolio module will build. Module handoff: Scope independent delivery in m18


### Practice and pause points

- Write the choices (~30 min): State three choices as preferences between real alternatives. Check each one could be disagreed with.
- Write the exclusions (~25 min): List what the strategy rules out for this period. Include at least one thing you would like to do.
- Record the constraints (~25 min): List the real constraints, including staffing and tooling. Do not assume any of them away.
- List risks and signals (~25 min): Write the risks, including second-order ones from earlier in the module. For each, name the signal that would show it materialising.
- State what you need to learn (~15 min): Include this course's recorded gaps where they affect you. Save the note where decisions will be made from it.

Pause after any step; save the artifact and next action.

**Free tool path.** Two pages of plain text. No template or canvas is required.

### Output

Two pages stating choices as preferences; An exclusion list; Constraints recorded honestly, including inconvenient ones; Risks with signals, and a list of what you need to learn

### Checks

- Why is the exclusion list the important part? Answer: Because it settles arguments in advance. A strategy that rules nothing out leaves every priority decision to be argued from first principles.
- Why record inconvenient constraints? Answer: Because a plan that assumes them away cannot be executed, and the gap between the plan and reality is filled by quiet quality cuts.
- Why list what you need to learn? Answer: So the strategy states its own foundations. It also makes the note honest about where it rests on assumption rather than evidence.

### Rubric and remediation

**Three choices are stated as disputable preferences**

Adequate evidence: Three A-over-B statements someone could disagree with.

- 0 — Values or aspirations.
- 1 — Preferences that nobody could dispute.
- 2 — Three disputable preferences.
- 3 — As adequate, and one is uncomfortable to commit to in writing.

If below 2: Rewrite each choice until someone reasonable could argue for the other side. Show at recheck: The choices.

**An exclusion list includes something you wanted to do**

Adequate evidence: Exclusions listed, at least one of which you would have liked to pursue.

- 0 — No exclusions.
- 1 — Exclusions that cost nothing to give up.
- 2 — Real exclusions including a wanted one.
- 3 — As adequate, and each exclusion states what would bring it back.

If below 2: Add the thing you keep wanting to build and are choosing not to. Show at recheck: The exclusion list.

**Constraints are recorded without being assumed away**

Adequate evidence: Real constraints including staffing, tooling and availability.

- 0 — Constraints omitted.
- 1 — Only technical constraints listed.
- 2 — All real constraints including people's availability.
- 3 — As adequate, and one constraint changes a choice rather than being noted and ignored.

If below 2: List who is available when, and what cannot be changed, then check your choices against them. Show at recheck: The constraint list.

**Risks carry signals and the learning gaps are named**

Adequate evidence: Risks with observable signals, and a learning list including course gaps.

- 0 — Risks without signals.
- 1 — Signals without the learning list.
- 2 — Both present.
- 3 — As adequate, and the learning list names the positioning gap explicitly.

If below 2: For each risk write what you would see, and add what you know you do not know. Show at recheck: The risks and learning list.

### Portfolio contribution

A two-page strategy note with real exclusions and honest constraints is a senior artefact, and it is the natural companion to the case study your portfolio module will build.

### Assigned resources

- R47: [Ryan Singer: Shape Up](https://basecamp.com/shapeup/webbook) — Appetite, betting and deciding what not to build. Purpose: Supplies the framing for choices, exclusions and bounded commitments. Effort: 45–60 selected min. Free to read online; print edition sold and not required. Verified 2026-09-06. Scope strategy rather than market positioning, which this course still cannot source. Fallback: R07.
- R19: [GOV.UK: Service Standard](https://www.gov.uk/service-manual/service-standard) — The points on solving a whole problem for users, iterating and improving frequently, and defining what success looks like. Purpose: Keeps the note connected to outcomes rather than to intentions. Effort: 30–45 selected min. Free reading, no account. Verified 2026-09-06. Public-service framing; the commercial constraints in your note are your own. Fallback: R07.
