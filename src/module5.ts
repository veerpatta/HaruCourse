import type { Lesson } from "./lessons";
// Module 5 is the first module where the learner produces evidence from other
// people rather than from her own screens. Two things shape the teaching. The
// first is that Haru works alone, without a research team, a recruitment
// agency or a budget, so every method is taught in the form a single person
// can actually run and every lesson states what that costs in confidence. The
// second is that the honest fallback matters more than the method: a lesson
// that cannot be completed because nobody consented must end in a recorded
// gap, never in an invented participant.
const questions = {
  title: "GOV.UK: capturing research questions",
  id: "R50",
  url: "https://www.gov.uk/service-manual/user-research/capturing-research-questions",
};
const manual = {
  title: "GOV.UK: user research manual",
  id: "R08",
  url: "https://www.gov.uk/service-manual/user-research",
};
const competitive = {
  title: "NN/g: competitive usability evaluations",
  id: "R51",
  url: "https://www.nngroup.com/articles/competitive-usability-evaluations/",
};
const discovery = {
  title: "GOV.UK: discovery phase",
  id: "R07",
  url: "https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works",
};
const participants = {
  title: "GOV.UK: finding user research participants",
  id: "R52",
  url: "https://www.gov.uk/service-manual/user-research/find-user-research-participants",
};
const consent = {
  title: "GOV.UK: getting informed consent",
  id: "R53",
  url: "https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research",
};
const privacy = {
  title: "GOV.UK: managing research data and participant privacy",
  id: "R54",
  url: "https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy",
};
const interviews = {
  title: "GOV.UK: in-depth interviews",
  id: "R27",
  url: "https://www.gov.uk/service-manual/user-research/using-in-depth-interviews",
};
const notes = {
  title: "GOV.UK: taking notes and recording sessions",
  id: "R56",
  url: "https://www.gov.uk/service-manual/user-research/taking-notes-and-recording-user-research-sessions",
};
const contextual = {
  title: "GOV.UK: contextual research and observation",
  id: "R55",
  url: "https://www.gov.uk/service-manual/user-research/contextual-research-and-observation",
};
const diary = {
  title: "NN/g: diary studies",
  id: "R38",
  url: "https://www.nngroup.com/articles/diary-studies/",
};
const survey = {
  title: "NN/g: writing good survey questions",
  id: "R57",
  url: "https://www.nngroup.com/articles/survey-best-practices/",
};
const intervals = {
  title: "NN/g: confidence intervals and margins of error",
  id: "R37",
  url: "https://www.nngroup.com/articles/confidence-interval/",
};
const analyse = {
  title: "GOV.UK: analyse a research session",
  id: "R04",
  url: "https://www.gov.uk/service-manual/user-research/analyse-a-research-session",
};
const jobs = {
  title: "NN/g: personas versus jobs-to-be-done",
  id: "R39",
  url: "https://www.nngroup.com/articles/personas-jobs-be-done/",
};
const needs = {
  title: "GOV.UK: start by learning user needs",
  id: "R35",
  url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
};
const experienceMap = {
  title: "GOV.UK: creating an experience map",
  id: "R58",
  url: "https://www.gov.uk/service-manual/user-research/creating-an-experience-map",
};
const sharing = {
  title: "GOV.UK: sharing user research findings",
  id: "R59",
  url: "https://www.gov.uk/service-manual/user-research/sharing-user-research-findings",
};
export const module5: Lesson[] = [
  {
    id: "m05-l01-v1",
    module: "m05",
    week: 5,
    day: 1,
    level: 2,
    areas: [4],
    title: "Decide what the study has to answer",
    objective:
      "Turn a vague brief into at most five ranked research questions, each written as something you need to learn rather than something you will say to a participant, and each naming the decision that changes if the answer comes back the other way.",
    bringForward:
      "The riskiest assumption and stopping rule you wrote in UX reasoning and product value, and the assumption list from Evidence to a Testable Design. Those are your raw material; you are about to sort them into questions worth someone's time.",
    why: "Research that starts from a method produces activity. Research that starts from a question produces a decision. The difference shows up two weeks later, when you have a folder of notes and still cannot say what you now know that you did not know before.",
    teach: [
      "A research question is what you need to learn. A participant question is the plain sentence you actually say out loud. They are almost never the same sentence, and confusing them is the most common way a first study goes wrong: “how do people decide whether a workshop is worth the fare?” is a research question, and asking a participant that exact sentence invites them to perform an explanation they have never articulated. The participant question is “tell me about the last workshop you decided not to go to.” One is your analysis; the other is their memory.",
      "Rank by what would change. For each question, write the decision that hangs on it and what you would do differently if the answer were the opposite of your expectation. A question where both answers lead to the same action is not a research question, it is curiosity, and curiosity is fine on your own time but not on a participant's. This single test usually removes half a list, and it removes the half that would otherwise have eaten the first twenty minutes of every session.",
      "Questions come in kinds, and the kind determines what can answer it. What people did, what they experienced and remember, how many or how often, and whether they can operate a thing in front of them are four different kinds of uncertainty. You do not have to choose the method yet — that is the next lesson — but you do have to notice that a question phrased as “how many” cannot be settled by three conversations, no matter how good the conversations are.",
      "Write questions that can close. “Do users like the booking page?” never closes: there is no evidence that would end it, so the study runs until you get bored. “What stops someone who has opened the workshop page from reserving a place in the same sitting?” closes, because you can watch six people try and either see the stopping points or not. A question that names a person, a moment and an outcome is a question you can finish.",
    ],
    misconception:
      "“We will work out what matters once we start talking to people.” You will not. Without a ranked list, a conversation drifts to whatever the participant most enjoys discussing, which is usually the last annoying thing that happened to them rather than the thing your decision depends on. Ranking beforehand is what lets you follow an interesting tangent deliberately, knowing what you are trading away.",
    example:
      "A brief said “make the workshop booking better.” Written out, it contained eleven questions. Ranked by decision impact, the top three were: what does someone need to know before they will commit money to a Saturday; what makes a person who has already opened the page leave without reserving; and how do people who arrive on a shared or borrowed phone complete a booking at all. The remaining eight included “do users prefer the green or blue button”, which changes nothing whichever way it lands, and “how many people abandon at payment”, which three conversations cannot answer and which was moved to a separate note about evidence the project does not currently have.",
    steps: [
      {
        minutes: 20,
        title: "Read and separate",
        text: "Read the assigned page on capturing research questions. Then write, in your own words, the difference between a question you need answered and a question you would say aloud. Keep this note; you will use it in the interview lesson.",
      },
      {
        minutes: 25,
        title: "Empty the brief",
        text: "Write every question hiding in your brief and your assumption list, one per line, without editing. Aim for at least twelve. Include the ones you think are obvious; obvious questions are often the untested ones.",
      },
      {
        minutes: 30,
        title: "Attach a decision to each",
        text: "Beside every question write the decision it would change and what you would do if the answer were the opposite of your expectation. Mark any line where both answers lead to the same action.",
      },
      {
        minutes: 30,
        title: "Group, rank and cut to five",
        text: "Group near-duplicates into one question with the better wording. Rank what remains by decision impact. Keep the top five. Move the rest to a “not this study” list with one line each saying why, so you do not rediscover them next week.",
      },
      {
        minutes: 15,
        title: "Test for closure and pause",
        text: "For each of your five, write the evidence that would end the question. Rewrite any question whose evidence you cannot describe. Save the ranked five, the decisions and the not-this-study list; the next lesson pairs each question with a method.",
      },
    ],
    freeToolPath:
      "Paper, sticky notes or one plain text file. This lesson deliberately needs no board, no template and no account; a numbered list in a text file is easier to re-rank than a wall of notes and travels between devices without an export.",
    deliverable:
      "A ranked list of at most five research questions, each with the decision it would change and the evidence that would close it, plus a dated “not this study” list with a reason per line.",
    check: [
      {
        question:
          "Why can a research question rarely be read out to a participant as written?",
        answer:
          "Because it is written in your analytical vocabulary and asks for a generalisation the participant has never had to make. Read aloud it invites a theory; asked as a recent specific episode it produces an account you can check.",
      },
      {
        question:
          "You have a question you find genuinely interesting but no decision depends on it. What should happen to it?",
        answer:
          "It goes on the not-this-study list with a reason. It is not deleted, because next quarter's decision may need it, and it is not asked now, because every minute of a session spent on it is taken from a question that would have changed something.",
      },
      {
        question: "What makes a question unable to close?",
        answer:
          "No describable evidence would end it. If you cannot say what you would have to see or hear to stop asking, the question will run until fatigue stops it, and whatever you happened to notice last will be reported as the finding.",
      },
    ],
    rubric: [
      "Questions are things to learn, not things to say",
      "Every question names the decision it would change",
      "The list is ranked and cut to five with the rest recorded",
      "Each question states the evidence that would close it",
    ],
    criteria: [
      {
        criterion: "Questions are things to learn, not things to say",
        evidence:
          "Five questions, none of which could be read aloud to a participant as a sensible thing to ask, plus your written note of the distinction.",
        levels: [
          "The list is a set of interview prompts.",
          "Some entries are research questions and some are participant questions, with no distinction drawn.",
          "All five are stated as things the study must learn, and the distinction is written in your own words.",
          "As adequate, and at least one question notes the participant question that would probably get at it, without collapsing the two.",
        ],
        remediation:
          "Take each question and try to read it aloud as though to a stranger. Any question that sounds like an exam or invites a theory is a research question and stays; any that sounds like a natural thing to ask a person is a participant question, and should be moved to a separate list for the interview lesson.",
        recheck: "The corrected five with the participant prompts separated out.",
      },
      {
        criterion: "Every question names the decision it would change",
        evidence:
          "A decision written beside each of the five, and a stated alternative action for the unexpected answer.",
        levels: [
          "No decisions recorded.",
          "Decisions recorded for some questions, or written so broadly (“it would inform the design”) that no action is named.",
          "Each of the five names a specific decision and what the opposite answer would cause you to do.",
          "As adequate, and one question is identified as the one whose answer you would most resist, with the reason.",
        ],
        remediation:
          "For each question write the sentence “if the answer is X I will …, and if it is the opposite I will …”. Any question where both halves end the same way goes to the not-this-study list.",
        recheck: "The five completed if-then sentences.",
      },
      {
        criterion: "The list is ranked and cut to five with the rest recorded",
        evidence:
          "An ordered top five and a dated not-this-study list carrying a one-line reason for each dropped question.",
        levels: [
          "One undifferentiated list of everything.",
          "A short list exists but the dropped questions were deleted rather than recorded.",
          "Top five ranked, remainder recorded with reasons.",
          "As adequate, and the ranking states what the ordering is by — decision impact, cost of being wrong, or how soon the decision arrives.",
        ],
        remediation:
          "Recover the dropped questions and write one line each on why they are not in this study. If you cannot recover them, note that as a process lesson; the record is the point.",
        recheck: "The ranked five and the reasoned not-this-study list.",
      },
      {
        criterion: "Each question states the evidence that would close it",
        evidence:
          "For each question, a sentence naming what you would have to see, hear or count before you stopped asking it.",
        levels: [
          "No closure evidence stated.",
          "Closure described as “enough data” or “when it is clear”.",
          "Each of the five names concrete evidence that would end it.",
          "As adequate, and at least one question states how many people would have to show the same thing before you would act on it, and why that number.",
        ],
        remediation:
          "Rewrite each closure sentence to begin “I stop asking this when I have seen …”. Concrete means countable or quotable, not a feeling of sufficiency.",
        recheck: "The five closure sentences.",
      },
    ],
    portfolio:
      "The first artefact of the research-led project. A ranked question list with decisions attached is one of the few things a hiring reviewer can read in thirty seconds and use to judge whether you think before you interview. It is planning evidence only and demonstrates no finding.",
    resource: questions,
    resources: [
      {
        ...questions,
        section:
          "The whole page, concentrating on the distinction between what the team needs to learn and what you would ask a user, and on grouping and prioritising by impact.",
        purpose:
          "Gives a workable procedure for producing and ranking questions, and states the distinction this lesson is built on.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; the publisher records its own update as 23 June 2026. Written for a team workshop, so adapt the grouping step to working alone. It covers neither method selection nor analysis.",
        fallbackId: "R08",
      },
      {
        ...manual,
        section:
          "The section index only at this stage: read the list of method pages so you know what exists before the next lesson.",
        purpose:
          "Shows the range of methods a question could be routed to, without committing to one yet.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. UK government context; the operational advice transfers, the institutional assumptions do not.",
        fallbackId: "R04",
      },
    ],
  },
  {
    id: "m05-l02-v1",
    module: "m05",
    week: 5,
    day: 2,
    level: 2,
    areas: [4],
    title: "Choose a method that can actually answer it",
    objective:
      "Pair each of your five questions with one method you could genuinely run alone this month, and state for each pairing the specific claim that method will not license you to make.",
    bringForward:
      "The ranked five questions with their decisions and closure evidence from the previous lesson.",
    why: "Most first studies use the method the researcher is most comfortable with and then stretch its results to cover questions it never touched. Choosing badly is recoverable; not knowing what your method excluded is what produces a confident wrong recommendation.",
    teach: [
      "Sort your questions by what kind of uncertainty they are. Questions about what people did are answered by watching or by traces they left. Questions about what someone experienced and why they chose as they did are answered by talking to them about a specific past episode. Questions about how many or how often need a count from a population you can define. Questions about whether a person can operate something need that thing, or a stand-in for it, in their hands. A single method answers one of these well and the others badly.",
      "The gap between what people say and what people do is not dishonesty; it is memory, self-image and the ordinary difficulty of narrating a habit. Someone will tell you they always compare prices and then book the first result, and both statements are true in the sense they mean them. This is why an interview is strong evidence about what a person noticed, felt and decided, weak evidence about what they will do next time, and no evidence at all about how common any of it is.",
      "Method choice is constrained by what you can actually run. You have no recruitment budget, no analytics on someone else's product, no team to pair with, and a full-time job. That is not a disclaimer to write at the end: it decides the study. Three consented conversations plus one observation is a real study with real limits. A survey circulated to your own contacts is also a real study, and its limit is that it measures your own contacts, which is a sentence that must appear in the report rather than being discovered by a reader.",
      "Every pairing needs its exclusion written down at the moment you choose it, not at the moment you report it. “Four interviews” excludes prevalence: you may write that four of four people described the same confusion, and you may not write that most people are confused. “One observation” excludes generality and includes something no interview gives you — the thing the person did not think worth mentioning. Writing the exclusion first is what stops the recommendation drifting past the evidence three weeks later, when the notes have gone cold and the deadline is close.",
    ],
    misconception:
      "“More methods means better research.” Running four thin methods badly produces less than running one properly, and it produces the particular failure where each thin result is used to shore up the others. Two methods chosen because they answer different kinds of question — one to see behaviour, one to hear reasoning — is the useful pairing; four because a checklist listed four is not.",
    example:
      "Five questions were paired as follows. What stops someone reserving in one sitting: watch four people try, because the stopping point is behavioural and nobody narrates it accurately. What people need to know before committing money: interviews about the last time they paid for a class, because that is memory and reasoning. How common abandonment is: no method available — recorded as a gap, since neither the analytics nor the population exist, and left explicitly unanswered rather than estimated from four conversations. Whether a shared phone changes the booking: observation in the setting, because it is invisible anywhere else. What people would pay: dropped, because stated willingness to pay predicts behaviour badly and there was no way to test it honestly.",
    steps: [
      {
        minutes: 25,
        title: "Read the method pages",
        text: "Read the assigned manual sections on choosing between methods. For each method named, write one sentence on the kind of uncertainty it addresses.",
      },
      {
        minutes: 25,
        title: "Classify your five",
        text: "Label each of your questions as behaviour, experience and reasoning, frequency, or ability to operate. Some will resist a single label; split those into two questions rather than forcing one.",
      },
      {
        minutes: 30,
        title: "Pair and cost",
        text: "Assign one method per question. Beside each write what it will cost you in hours, how many people it needs, and what has to be true for it to happen at all — access, consent, a device, a quiet room.",
      },
      {
        minutes: 25,
        title: "Write the exclusions",
        text: "For each pairing write the sentence “this cannot tell me …”. Be specific: name the claim you will be tempted to make and are forbidding yourself now.",
      },
      {
        minutes: 15,
        title: "Decide the plan and pause",
        text: "Choose the two methods you will actually run in this module and mark the rest as not-run, with the reason. Record any question left with no available method as an open gap. Save the plan.",
      },
    ],
    freeToolPath:
      "A five-row table on paper or in a text file: question, kind, method, cost, cannot-tell-me. No research platform, scheduling tool or transcript service is involved anywhere in this module; everything is doable with a notebook, a phone and consent.",
    deliverable:
      "A method plan pairing each question with one method, its cost and access conditions, and an explicit exclusion sentence per pairing, plus a list of questions left unanswerable with reasons.",
    check: [
      {
        question:
          "Someone tells you in an interview that they always read the materials list before booking. What have you learned?",
        answer:
          "That reading the materials list is part of how they understand their own booking behaviour, and that the list matters enough to feature in their account. You have not learned that they do read it, and you have learned nothing about how many people do. Watching one booking would tell you the first; only a count from a defined population would tell you the second.",
      },
      {
        question:
          "Why write the exclusion when choosing the method rather than when writing the report?",
        answer:
          "Because at reporting time the pressure runs the other way. You will have four consistent accounts, a deadline and someone asking what to build, and the sentence “this cannot establish prevalence” is much easier to write before you need it than after you have been asked for a number.",
      },
      {
        question:
          "One of your questions has no method you can run. What is the right outcome?",
        answer:
          "It is recorded as an open gap with what would be needed to answer it. Substituting a weaker method and reporting its output as if it addressed the original question is the failure this lesson exists to prevent.",
      },
    ],
    rubric: [
      "Each question is classified by the kind of uncertainty it holds",
      "Methods are chosen for fit and are runnable alone",
      "Every pairing carries a specific exclusion",
      "Unanswerable questions are recorded rather than downgraded",
    ],
    criteria: [
      {
        criterion:
          "Each question is classified by the kind of uncertainty it holds",
        evidence:
          "A label per question — behaviour, experience and reasoning, frequency, or ability to operate — with any mixed question split rather than forced.",
        levels: [
          "No classification.",
          "Labels applied but mixed questions left forced into one category.",
          "All questions labelled, with mixed ones split into their parts.",
          "As adequate, and one split is explained in terms of the different methods the two halves now require.",
        ],
        remediation:
          "Re-read each question and ask what would count as an answer: a thing seen, a thing recounted, a count, or a task completed. If two of those apply, the question is two questions.",
        recheck: "The relabelled list with splits shown.",
      },
      {
        criterion: "Methods are chosen for fit and are runnable alone",
        evidence:
          "One method per question with hours, participant count and access conditions written beside it.",
        levels: [
          "Methods named with no cost or access conditions.",
          "Costs stated but the plan assumes resources you do not have — a recruiter, a lab, analytics on someone else's product.",
          "Each method is one you could run alone this month, with cost and access conditions stated.",
          "As adequate, and one choice is justified against a method you rejected, naming what the rejected one would have added.",
        ],
        remediation:
          "For each method write the first three concrete steps required to start it. Any method whose first three steps include something you cannot obtain is not yet a plan; replace it or record the question as a gap.",
        recheck: "The revised plan with first steps for each method.",
      },
      {
        criterion: "Every pairing carries a specific exclusion",
        evidence:
          "A “this cannot tell me …” sentence per pairing that names a claim you might otherwise have made.",
        levels: [
          "No exclusions written.",
          "Generic disclaimers such as “small sample” with no named claim.",
          "Each pairing names a specific claim the method will not license.",
          "As adequate, and one exclusion names the exact sentence you expect to be tempted to write in the report.",
        ],
        remediation:
          "Take each method and write the strongest sentence you would like to be able to write from it. Then write whether that sentence is licensed. The unlicensed ones are your exclusions.",
        recheck: "The exclusion sentences with the tempting claims beside them.",
      },
      {
        criterion: "Unanswerable questions are recorded rather than downgraded",
        evidence:
          "Any question with no available method appears as an open gap stating what would be needed, not reassigned to a method that does not address it.",
        levels: [
          "An unanswerable question was quietly reassigned to whatever method was already running.",
          "The gap is acknowledged but no requirement is stated.",
          "Gaps recorded with what would be needed to close them.",
          "As adequate, and the record states what you will do in the meantime — proceed with the uncertainty, or stop before a decision that depends on it.",
        ],
        remediation:
          "Check each pairing against the question's closure evidence from the previous lesson. If the method cannot produce that evidence, move the question to the gap list and say what would.",
        recheck: "The gap list with requirements.",
      },
    ],
    portfolio:
      "Planning evidence for the research-led project, and the page that most distinguishes a considered study from an enthusiastic one. It shows judgement about method fit; it shows no finding and no participant contact yet.",
    resource: manual,
    resources: [
      {
        ...manual,
        section:
          "The method pages listed under user research methods, read as a set: interviews, contextual research and observation, moderated usability testing, and the pages on planning a round of research. Skim rather than study; you are mapping what exists.",
        purpose:
          "Supplies the range of methods and the situations each is written for, so the pairing is a choice rather than a default.",
        minutes: "60–90 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for teams with recruiters, labs and colleagues to pair with; read the procedure and discount the staffing. Several pages have stood since 2016–2018, so the surrounding assumptions are dated even where the method is not.",
        fallbackId: "R04",
      },
      {
        ...discovery,
        section:
          "The sections on what a discovery is trying to establish and on deciding what happens next.",
        purpose:
          "Frames method choice as serving a decision about whether and how to continue, rather than as a research menu.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. It treats primary fieldwork as the default and gives desk research only two lines; the next lesson supplies that part.",
        fallbackId: "R19",
      },
    ],
  },
  {
    id: "m05-l03-v1",
    module: "m05",
    week: 5,
    day: 3,
    level: 2,
    areas: [4],
    title: "Look before you ask: desk and competitive review",
    objective:
      "Produce a dated desk-research note from evidence that already exists, and a structured comparison of two or three rival flows attempting one identical task, ending in a written list of what the comparison did not establish.",
    bringForward:
      "Your method plan and the questions you marked as gaps. Some of those gaps close for free with evidence that already exists, and you should find that out before spending anyone's afternoon.",
    why: "Asking six people something you could have read in an afternoon is a poor use of the only scarce resource you have, which is other people's willingness to help you. Desk work also tells you which questions are already answered well enough, so the sessions you do run can go somewhere new.",
    teach: [
      "Existing evidence is wider than it looks. Public reviews and store ratings, support pages and their frequently-asked lists, community forum threads, published reports, the product's own help documentation, and anything the organisation already holds — old research, complaint logs, support transcripts — all describe real people meeting a real service. None of it was collected for your question, which is exactly its weakness: you inherit whoever chose to write, which is disproportionately the very angry and the very pleased. Treat it as a source of hypotheses and vocabulary, not of proportions.",
      "A competitive review is two different activities that are often confused. An expert review is you working through a rival product yourself against explicit criteria; a competitive test is people attempting the same task on two or more products while you watch. The first is fast and costs nothing but is limited by your own expertise and blind spots; the second costs sessions but tells you where real people diverge. Both are usability comparisons. Neither tells you anything about market position, pricing or why the company is winning, and the reading assigned here says so itself.",
      "Choose comparators by task, not by brand. The useful comparison for a workshop booking is anything where a person commits money to attend something at a fixed time and place — a clinic appointment, a cinema seat, a train ticket — not merely other workshop companies. Comparing against the market leader in your own category tends to produce imitation; comparing against the best solution to the same underlying task tends to produce ideas, because you are looking at people who solved your problem under different constraints.",
      "Record every source with its URL and the date you retrieved it, and quote sparingly in your own file rather than copying pages. Links rot faster than you expect: this course's own catalog attempted eight job listings on one day and six had already expired. A finding whose source you can no longer produce is not evidence you can defend six months later in a portfolio review, which is exactly when someone will ask.",
    ],
    misconception:
      "“Competitors have solved this, so copying their pattern is the safe choice.” You are seeing their output, not their reasoning, their constraints or their results. The pattern you are admiring may be a compromise forced by a legacy system, a decision that tested badly and has not yet been changed, or a deliberate trade that suits their business and not yours. Borrow the question the pattern answers; verify the answer yourself.",
    example:
      "Before interviewing anyone about workshop bookings, an hour of desk work produced: eleven public reviews of three local class providers, of which seven mentioned not knowing what to bring; a support page from a rival that answered the same question, suggesting they get asked it often; and one forum thread about paying for a friend, which nobody had thought to include in the flow at all. The competitive review then compared three services on the identical task “find out what you need to bring before paying.” One buried it in a PDF, one showed it after payment, and a cinema chain — not a competitor at all — solved the shape of it best by putting everything you must decide above the payment step. What the comparison did not establish, and the note said so, was whether any of the three converts better, since no outcome data was available for any of them.",
    steps: [
      {
        minutes: 25,
        title: "Read the competitive method",
        text: "Read the assigned article. Note the difference between a competitive review and a competitive test, and copy down its statement of what competitive evaluation does not address.",
      },
      {
        minutes: 30,
        title: "Gather existing evidence",
        text: "Spend a fixed thirty minutes collecting what already exists about your problem: reviews, support pages, forum threads, published reports, anything already held. Record source, URL and retrieval date for every item. Stop at thirty minutes even if it is going well.",
      },
      {
        minutes: 30,
        title: "Run the comparison",
        text: "Pick one task a person must complete and attempt it yourself on two or three services, at least one from outside your own category. Record each step, each moment of doubt, and where each service places the information the task needs.",
      },
      {
        minutes: 20,
        title: "Extract hypotheses, not conclusions",
        text: "Write what this makes you suspect, phrased as claims you could check with people. Mark each one with whether desk evidence alone could ever confirm it.",
      },
      {
        minutes: 15,
        title: "Write the limits and pause",
        text: "Write what this work did not establish: proportions, causes, outcomes, and anything about business performance. Update your question list — some questions may now be answered, and others may have appeared. Save the note with its dated sources.",
      },
    ],
    freeToolPath:
      "A browser and a text file. Screenshots are useful and cost nothing; a phone camera pointed at your own screen is fine if capture is awkward. No competitor-analysis platform, keyword tool or paid report is required anywhere in this lesson.",
    deliverable:
      "A dated desk-research note with sourced items, a step-by-step comparison of one identical task across two or three services including one from another category, a list of checkable hypotheses, and an explicit statement of what was not established.",
    check: [
      {
        question:
          "Seven of eleven public reviews mention the same problem. What can you write?",
        answer:
          "That the problem is real for at least seven people who chose to write publicly, quoted and dated. Not that it affects most users: people who write reviews are a self-selected group, weighted towards strong feelings, and the eleven are not a sample of anything.",
      },
      {
        question:
          "Why include a service from outside your own category in the comparison?",
        answer:
          "Because it solved the same underlying task under different constraints, so it shows you an option rather than a convention. Comparing only within a category mostly reveals what that category copies from itself.",
      },
      {
        question:
          "A competitor's flow is clearly better on your task. Is that a finding about their product's success?",
        answer:
          "No. You have an observation about one task in one flow, made by you. The assigned article is explicit that competitive usability evaluation says nothing about market position, pricing or business performance, and their success may rest on things you cannot see.",
      },
    ],
    rubric: [
      "Existing evidence is gathered and sourced with dates",
      "The comparison uses one identical task across services",
      "At least one comparator is outside the obvious category",
      "The write-up separates hypotheses from established facts",
    ],
    criteria: [
      {
        criterion: "Existing evidence is gathered and sourced with dates",
        evidence:
          "A list of items each with source, URL where applicable, retrieval date and a one-line summary in your own words.",
        levels: [
          "No desk work, or claims with no sources.",
          "Sources listed but undated, or summarised only by copied text.",
          "Every item carries source, date and your own summary.",
          "As adequate, and the note states who is over-represented in what you found and how that skews it.",
        ],
        remediation:
          "Return to each claim in your note and attach its source and the date you retrieved it. Any claim whose source you cannot produce is removed, not softened.",
        recheck: "The sourced and dated note.",
      },
      {
        criterion: "The comparison uses one identical task across services",
        evidence:
          "A step-by-step record for each service attempting the same stated task, with the task written out once at the top.",
        levels: [
          "General impressions of each service.",
          "A task is stated but the services were explored differently, so the records are not comparable.",
          "The same task, attempted the same way, recorded step by step for each service.",
          "As adequate, and the record notes where a service made the task impossible or redefined it, rather than scoring it as merely worse.",
        ],
        remediation:
          "Write the task as one sentence containing a person, a goal and a stopping condition. Re-run any service you explored differently, following that sentence exactly.",
        recheck: "The task sentence and the re-run comparison.",
      },
      {
        criterion: "At least one comparator is outside the obvious category",
        evidence:
          "One of the compared services solves the same underlying task in a different industry, with a note on what its constraints are.",
        levels: [
          "All comparators are direct competitors.",
          "An outside comparator is named but not actually walked through.",
          "An outside comparator was attempted on the same task and recorded.",
          "As adequate, and the write-up identifies one thing that transfers and one thing that does not, with reasons.",
        ],
        remediation:
          "Name the underlying task in words that mention no industry — “commit money to be somewhere at a fixed time” — then find any service that does that and run the task on it.",
        recheck: "The added comparator and its record.",
      },
      {
        criterion: "The write-up separates hypotheses from established facts",
        evidence:
          "Two clearly distinguished lists: what you now believe and would check with people, and what the desk work actually established.",
        levels: [
          "Impressions written as findings.",
          "Some hedging language, but no separation of the two kinds of statement.",
          "Hypotheses and established facts are in separate, labelled lists.",
          "As adequate, and each hypothesis names the method from your plan that would test it.",
        ],
        remediation:
          "Go through the note sentence by sentence and mark each as observed, inferred or assumed, using the same three-way split you learned in Module 1. Move the inferred and assumed sentences into the hypothesis list.",
        recheck: "The two labelled lists.",
      },
    ],
    portfolio:
      "Genuine project evidence: a competitive comparison on a real task is one of the few research artefacts you can produce without participants, and reviewers read it. Its limits are severe and must be stated in the case study — no proportions, no outcomes, no market claims.",
    resource: competitive,
    resources: [
      {
        ...competitive,
        section:
          "The whole article, concentrating on defining which competitors to analyse, the difference between competitive reviews and competitive testing, and turning findings into decisions.",
        purpose:
          "Supplies a repeatable comparison method and the explicit boundary that keeps a usability comparison from becoming a market claim.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 5 January 2024. The article itself excludes market positioning, pricing and business analysis, so no strategy conclusion may rest on this lesson.",
        fallbackId: "R02",
      },
      {
        ...discovery,
        section:
          "The paragraphs on examining existing data and reviewing previous research.",
        purpose:
          "Places desk work where it belongs — before fieldwork — even though the page gives it only two lines.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 18 November 2016. It covers neither competitor analysis nor secondary-research method, which is why the comparison method comes from R51 and the rest from this lesson.",
        fallbackId: "R19",
      },
    ],
  },
  {
    id: "m05-l04-v1",
    module: "m05",
    week: 5,
    day: 4,
    level: 2,
    areas: [4],
    title: "Find the right people, and say who you could not reach",
    objective:
      "Write a screener that selects for relevant experience without revealing the answer you want, plus a recruitment plan with honest lead times, an incentive decision, and a written statement of who your route will systematically miss.",
    bringForward:
      "Your method plan. The two methods you chose determine how many people you need and what they must have done recently.",
    why: "Who you talk to decides what you can learn, and a study recruited from whoever was easiest to reach will confidently describe the world of people who are easy to reach. Naming that is not a weakness in the report; leaving it unnamed is.",
    teach: [
      "Recruit for experience, not for demographics. The criterion that matters is usually something a person has recently done — booked a paid class in the last two months, tried and abandoned a booking, attends with a child — because that is what makes their memory usable. Age, gender and city belong in the record for context and for noticing who is absent, but a screener built from demographics alone selects people who look varied and may all be strangers to the task you are studying.",
      "A screener must not teach the answer. “Have you ever been frustrated by not knowing what to bring to a class?” tells the reader what you hope to hear and recruits people willing to agree with you. “Think about the last paid class or workshop you attended or considered. What did you do in the week before it?” selects on experience and leaves the finding open. Ask about what happened, in the past, in their words, and screen on the presence of the experience rather than on the presence of an opinion.",
      "Plan for real lead times and for who cannot come. The assigned page reports that professional recruitment typically takes about ten days and that recruiting disabled participants can take up to a month, with six to eight weeks advised where cognitive disabilities are involved. You have no agency, so your route is your own network, community groups, a notice in a place where the relevant people already are, or asking a small business owner to introduce you. Every one of those routes has a shape: your network shares your language, your education and often your income band, and a WhatsApp group of parents at one school is not the parents of that city.",
      "Compensate people for their time, and be honest about what you can offer. The guidance is clear that public participants should receive something for their time, and equally clear that it gives no amounts, because they depend entirely on context. Where you genuinely cannot pay, say so before the session rather than after, keep the session short, come to them rather than making them travel, and do not repeatedly return to the same generous person. A study built on unpaid goodwill is legitimate; a study that hides that it was is not, because the reader cannot then judge who agreed to take part.",
    ],
    misconception:
      "“Friends and family will do for a first study.” They will, for practice, and they are the wrong evidence for a decision — they know you, they want to be helpful, they will soften criticism, and they share more of your assumptions than a stranger would. The move is not to refuse them; it is to use them for rehearsal, mark every finding from them as such, and record in the report that the sample was convenience-recruited from the researcher's own network.",
    example:
      "A screener drafted as “Do you find booking classes online confusing?” recruited three people who all agreed booking was confusing and could not remember a specific instance. Rewritten to “In the last two months, have you paid for a class, workshop or session that happened at a fixed time? What was the most recent one?”, it recruited five people with concrete recent episodes, two of whom said booking had been easy and then described, unprompted, standing in a corridor unsure whether their payment had gone through. The recruitment note recorded that all five were reached through one WhatsApp group and one shop noticeboard in the same neighbourhood, that nobody over sixty responded, and that everyone who took part reads English comfortably — three facts that bounded every finding that followed.",
    steps: [
      {
        minutes: 25,
        title: "Read the recruitment guidance",
        text: "Read the assigned page. Write down the lead times it states and the accommodations it names for disabled participants, then write what you will do instead of using an agency.",
      },
      {
        minutes: 25,
        title: "Write the criteria",
        text: "From your questions, write the two or three things a participant must have recently done. Write also who you specifically want to include who is unlike you, and what would make taking part possible for them.",
      },
      {
        minutes: 30,
        title: "Draft and de-bias the screener",
        text: "Write four to six screening questions. Then read each one asking “does this tell them what I want to hear?” Rewrite every question that does. Remove any question you would not use to include or exclude someone.",
      },
      {
        minutes: 25,
        title: "Plan the route, the time and the offer",
        text: "Write where you will find people, how long that will take starting from today, what you will offer for their time, and what you will say if they ask what happens to their answers. Include a fallback route in case the first produces nobody.",
      },
      {
        minutes: 15,
        title: "Write who you will miss and pause",
        text: "Write the sentence that will appear in your report about who this route systematically excludes. Save the screener, the plan and that sentence together; the consent lesson follows and must be completed before you contact anyone.",
      },
    ],
    freeToolPath:
      "The screener is a short written list you can use over a phone call, a message or in person. Free form tools exist and none is required; a message thread and a notebook are sufficient, and for a study of this size they are usually faster.",
    deliverable:
      "A screener of four to six neutral, experience-based questions; a recruitment plan with route, realistic dates, an incentive decision and a fallback; and a written exclusion statement naming who this route will miss.",
    check: [
      {
        question:
          "Why screen on a recent experience rather than on an opinion about the problem?",
        answer:
          "Because an opinion can be formed on the spot to be helpful, while a recent experience gives the person something concrete to recount and gives you something checkable. Screening on opinion also recruits agreement, which is the bias you can least afford in a small study.",
      },
      {
        question:
          "You can only reach people through your own contacts. Does that invalidate the study?",
        answer:
          "No, it bounds it. A convenience sample can still show you real behaviour and real confusion, and severity findings from it are worth acting on. What it cannot support is any claim about how common something is, and the report must name the route so a reader can judge it.",
      },
      {
        question:
          "Someone agrees to take part but asks for a session at a time you find inconvenient. What does the guidance suggest?",
        answer:
          "That accommodation is part of recruitment, not a favour. Going to the participant, working around their time and reducing what they have to travel or arrange is how you avoid a sample made only of people whose lives are conveniently arranged around yours.",
      },
    ],
    rubric: [
      "Screening criteria are based on recent relevant experience",
      "Screener questions do not signal the desired answer",
      "The plan has real dates, a route, a fallback and an offer",
      "The exclusion statement names who this route misses",
    ],
    criteria: [
      {
        criterion: "Screening criteria are based on recent relevant experience",
        evidence:
          "Two or three criteria naming something a participant has recently done, with a stated recency window.",
        levels: [
          "Criteria are demographic only, or absent.",
          "Experience is named but with no recency window, so anyone with a distant memory qualifies.",
          "Criteria name recent relevant experience with a stated window.",
          "As adequate, and one criterion deliberately recruits someone whose experience differs from yours, with the reason.",
        ],
        remediation:
          "For each criterion, complete the sentence “in the last … this person has …”. Any criterion you cannot complete that way is describing a category of person rather than a source of evidence.",
        recheck: "The rewritten criteria with recency windows.",
      },
      {
        criterion: "Screener questions do not signal the desired answer",
        evidence:
          "Four to six questions, none of which names the problem you expect to find or invites agreement.",
        levels: [
          "Questions ask whether the person has the problem you are studying.",
          "Mostly neutral, but at least one question names the expected difficulty.",
          "All questions ask about experience without signalling an expected answer.",
          "As adequate, and one question is annotated with the leading version you rejected and why.",
        ],
        remediation:
          "Read each question aloud and ask what answer would please you. Rewrite any question where a pleasing answer is obvious, converting it to a request for a recent episode.",
        recheck: "The revised screener with the rejected wording shown.",
      },
      {
        criterion: "The plan has real dates, a route, a fallback and an offer",
        evidence:
          "A plan naming where people come from, dates counted from today, what is offered for their time, and what happens if nobody responds.",
        levels: [
          "Intent without dates or route.",
          "A route and dates, but no fallback and no decision about compensation.",
          "Route, dates, offer and fallback all stated.",
          "As adequate, and the lead times reflect the guidance rather than optimism, including extra time where an accommodation is needed.",
        ],
        remediation:
          "Put your plan on a calendar starting today. If the first session lands earlier than three days from now, check whether you have allowed any time for people to reply at all.",
        recheck: "The dated plan with its fallback.",
      },
      {
        criterion: "The exclusion statement names who this route misses",
        evidence:
          "One or two sentences naming specific groups your route will not reach, written to be reused verbatim in the report.",
        levels: [
          "No exclusion statement.",
          "A generic mention of a small sample without naming who is missing.",
          "Specific groups named — by language, age, income, device, location or access need.",
          "As adequate, and the statement names the finding it would most likely have changed had those people been included.",
        ],
        remediation:
          "List the ways a person could be relevant to this problem and still never encounter your recruitment route. Turn that list into two sentences.",
        recheck: "The exclusion statement.",
      },
    ],
    portfolio:
      "Recruitment notes rarely appear in a portfolio and should. A case study that states who was recruited, how and who was missed reads as more credible than one reporting five interviews from nowhere. This is planning evidence; no session has happened yet.",
    resource: participants,
    resources: [
      {
        ...participants,
        section:
          "The sections on defining recruitment criteria, recruiting disabled participants and their lead times, and incentives.",
        purpose:
          "Supplies realistic lead times, accommodation requirements and the rule that people are compensated for their time.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. Written for UK government teams with agencies and budgets, and it gives no incentive amounts. Your route is your own network and community, which is legitimate and must be declared.",
        fallbackId: "R08",
      },
      {
        ...manual,
        section:
          "The pages on planning a round of user research and choosing a location, read for the practical constraints only.",
        purpose:
          "Connects who you recruit to when and where a session can actually happen.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes institutional facilities; read it for the scheduling logic, not the venue advice.",
        fallbackId: "R04",
      },
    ],
  },
  {
    id: "m05-l05-v1",
    module: "m05",
    week: 5,
    day: 5,
    level: 2,
    areas: [4],
    title: "Consent, privacy and a data plan you will keep",
    objective:
      "Write a consent introduction you can read aloud in under a minute, and a written data plan naming what you will collect, where it will live, who can see it, when it will be deleted and how one person's data could be removed on request.",
    bringForward:
      "Your screener and recruitment plan. Nobody is contacted until this lesson is finished, because consent has to exist before the first message, not before the first recording.",
    why: "Consent is not a form to be signed; it is whether the person understood what they were agreeing to. A study that produced good findings and left someone's phone number in a shared folder has failed at the part that matters most, and it is the part a stranger has trusted you with.",
    teach: [
      "Informed consent means the person understands, before agreeing, what the research is for, what will happen in the session, what will be collected, whether it will be recorded, who will see it, that they may stop or skip anything at any time, and that stopping costs them nothing. The assigned page lists these plainly. Consent can be recorded on paper, by email, or spoken at the start of a recording, and the method matters less than whether the understanding is real: reading a paragraph at speed to someone who is being polite is not consent, it is a ritual.",
      "Consent is not permanent. A person can withdraw during the session or afterwards, and withdrawal means their data is removed, not merely flagged. That has a practical consequence for how you store things: if six people's notes are in one undifferentiated document, you cannot honour a withdrawal without destroying the study, so you will be tempted not to honour it. Name files by participant so that one participant can be deleted cleanly. This is why the storage decision and the consent promise belong in the same lesson.",
      "Your notes are personal data. So are recordings, photographs, screen captures and the message thread you recruited through. Collect the minimum that answers your questions: you almost never need a full name, an address, an employer or a date of birth, and each one you collect is something you must protect, justify and eventually delete. Keep a short participant key — P1, P2 — separate from the notes, so the notes themselves carry no identity, and store the key somewhere the notes are not.",
      "The assigned pages are written to UK law and UK government practice. India has its own data protection regime, and this course has not verified a primary source for it, so nothing here should be read as a statement of your legal obligations. Treat the guidance as a floor of decent practice, and before recruiting real participants outside a classroom exercise, check the current Indian requirements yourself from a primary source. One rule this course imposes on its own authority regardless of jurisdiction: do not paste research notes, recordings, transcripts or participant details into an AI tool. The assigned page does not discuss AI tools at all, so the guidance is the course's, and the reason is that you cannot promise a participant something you have handed to a third party you do not control.",
    ],
    misconception:
      "“It is only a small study with people I know, so consent is overkill.” The size of the study is irrelevant to the person in it, and knowing you makes it harder for them to refuse, not easier. Familiarity raises the standard: say explicitly that they can stop, that you will not be offended, and that their answers will not be attributed to them by name.",
    example:
      "A one-minute spoken introduction that worked: “Thanks for doing this. I am learning product design, and I am trying to understand how people book paid classes — I am not testing you, and there are no wrong answers. It will take about thirty minutes. I would like to write notes, and I would like to record the audio so I do not have to write while you talk — is that all right? The recording stays on my own laptop, I am the only person who will hear it, I will delete it within three months, and I will not use your name anywhere. You can skip any question, and you can tell me to stop at any point, including afterwards, and I will delete everything from your session. Any questions before we start?” The data plan behind it: audio and notes stored in one folder per participant named P1 to P5 on the researcher's own device, a separate contact list holding names and numbers deleted at the end of the study, nothing uploaded anywhere, everything deleted three months after the last session.",
    steps: [
      {
        minutes: 25,
        title: "Read both pages",
        text: "Read the consent page and the data and privacy page. List what a participant must understand before agreeing, and list what counts as personal data in your own study.",
      },
      {
        minutes: 25,
        title: "Write the introduction",
        text: "Write a consent introduction in your own spoken voice, under one minute read aloud. It must cover purpose, duration, recording, who sees it, deletion, and the right to stop or skip. Read it aloud and cut anything you stumble over.",
      },
      {
        minutes: 30,
        title: "Write the data plan",
        text: "Write what you will collect, where each thing lives, who has access, how long you keep it, and the deletion date. Name your files so that one participant can be removed without touching the others.",
      },
      {
        minutes: 25,
        title: "Rehearse the hard moments",
        text: "Write what you will say if someone asks to see the notes, asks not to be recorded, goes quiet on a sensitive topic, or withdraws two weeks later. Rehearse the withdrawal one aloud; it is the one people handle badly under pressure.",
      },
      {
        minutes: 15,
        title: "Check the jurisdiction and pause",
        text: "Write one line stating that the guidance you used is UK-based and that you have not verified Indian requirements, and what you will check before recruiting beyond practice participants. Save the introduction, the plan and that line together.",
      },
    ],
    freeToolPath:
      "A text file for the introduction and the plan, folders on your own device for the data, and paper for consent if you prefer a signature. No consent platform, cloud drive or transcription service is required, and for a study this size a device you physically control is the simpler and safer choice.",
    deliverable:
      "A spoken consent introduction under one minute; a written data plan covering collection, storage, access, retention, deletion and per-participant removal; scripted responses to four difficult moments; and a stated jurisdiction limitation.",
    check: [
      {
        question:
          "A participant agrees to the session but not to being recorded. What happens?",
        answer:
          "The session goes ahead without a recording. You take sparser notes, you accept losing exact quotations, and you note in the record that this session was unrecorded. Recording is a convenience for the researcher, never a condition of participation.",
      },
      {
        question:
          "Why does the file naming decision belong in the consent lesson?",
        answer:
          "Because you promised the person you could delete their data if they withdrew, and a single merged notes file makes that promise unkeepable. The storage structure is what turns the promise into something you can actually do.",
      },
      {
        question:
          "You want a quick summary of a long interview. Can you paste the notes into an AI tool?",
        answer:
          "Not in this course. You promised the participant that you were the only person with access, and pasting the notes into a service you do not control breaks that promise whatever the service's own policy says. Summarise your own notes; that work is where most of the analysis actually happens.",
      },
    ],
    rubric: [
      "The introduction covers everything a participant must understand",
      "The data plan names storage, retention and deletion",
      "One participant could be removed without destroying the study",
      "The jurisdiction limitation is stated rather than assumed away",
    ],
    criteria: [
      {
        criterion:
          "The introduction covers everything a participant must understand",
        evidence:
          "A written script covering purpose, duration, recording, who will see the material, deletion, and the right to skip or stop, readable aloud in under a minute.",
        levels: [
          "No introduction, or a sentence asking permission to start.",
          "Some elements present, but recording, access or the right to stop is missing.",
          "All elements present and the script reads naturally aloud.",
          "As adequate, and the script invites questions and says explicitly that refusing costs nothing.",
        ],
        remediation:
          "Check your script against the list on the assigned page item by item and add what is missing. Then read it aloud and time it; anything over a minute is being skimmed by the listener anyway.",
        recheck: "The revised script with its read-aloud time.",
      },
      {
        criterion: "The data plan names storage, retention and deletion",
        evidence:
          "A written plan stating what is collected, where it is stored, who can access it, how long it is kept and the date it will be deleted.",
        levels: [
          "No plan.",
          "Storage described but no retention period or deletion date.",
          "Collection, storage, access, retention and deletion all stated.",
          "As adequate, and the plan justifies each item collected against a question it serves, with anything unjustified removed.",
        ],
        remediation:
          "List every piece of information you intend to collect and write the question it serves. Delete the rows with no question, then set a specific deletion date rather than “when finished”.",
        recheck: "The plan with the justification column.",
      },
      {
        criterion:
          "One participant could be removed without destroying the study",
        evidence:
          "A file and naming structure where each participant's material is separable, and a separate identity key.",
        levels: [
          "Everything in one document with names in it.",
          "Separate files but identities embedded in the notes.",
          "Per-participant separation with identities kept in a separate key.",
          "As adequate, and you have walked through a withdrawal on paper and named every place that person's data appears.",
        ],
        remediation:
          "Restructure your folders now, before any session. Then write the deletion steps you would follow for P3, and check that the steps actually reach every file.",
        recheck: "The structure and the written deletion steps.",
      },
      {
        criterion:
          "The jurisdiction limitation is stated rather than assumed away",
        evidence:
          "A written line stating that the guidance used is UK-based, that Indian requirements have not been verified here, and what you will check before recruiting beyond practice.",
        levels: [
          "UK guidance treated as if it were your legal position.",
          "A vague acknowledgement that laws differ.",
          "The limitation is stated specifically, with what you will check.",
          "As adequate, and the plan names the point at which checking becomes mandatory rather than advisable — for example before recruiting strangers or handling anything sensitive.",
        ],
        remediation:
          "Write two sentences: what the assigned pages are written to, and what you have not established. Do not attempt to summarise Indian law from memory or from an AI answer; name it as unchecked.",
        recheck: "The two sentences.",
      },
    ],
    portfolio:
      "Ethics practice, and the part of a case study that most quickly separates a considered researcher from an eager one. Include the consent approach and the data plan in the project write-up; never include raw participant data, recordings or identities.",
    resource: consent,
    resources: [
      {
        ...consent,
        section:
          "The whole page: what participants must understand, ways of collecting consent, consent involving children and disabled participants, and withdrawal.",
        purpose:
          "Defines what has to be understood before someone can meaningfully agree, and what withdrawal obliges you to do.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 5 November 2018. UK jurisdiction only and no form template is supplied. Check Indian requirements from a primary source before recruiting real participants.",
        fallbackId: "R54",
      },
      {
        ...privacy,
        section:
          "The sections on treating research material as personal data, storage and naming, retention periods, and anonymised extracts.",
        purpose:
          "Turns the consent promise into a storage structure you can actually honour, including deleting one participant on request.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 5 November 2018. UK GDPR framing; it does not cover Indian data protection law and does not discuss AI tools, so this course's prohibition on pasting research data into them is its own rule.",
        fallbackId: "R53",
      },
    ],
  },
  {
    id: "m05-l06-v1",
    module: "m05",
    week: 5,
    day: 6,
    level: 2,
    areas: [4],
    title: "Interviews that produce evidence, not agreement",
    objective:
      "Run at least one consented interview about a recent specific episode and produce raw notes in which what was said, what you inferred and what you want to follow up are visibly separate, plus a guide revised from what actually happened.",
    bringForward:
      "The interview guide you wrote in Product Design Foundations, your ranked questions, your consent introduction and your data plan. The old guide is a draft to be rebuilt, not a finished instrument.",
    why: "An interview is the cheapest way to learn what someone noticed, expected and decided, and the easiest thing in the world to turn into a conversation in which a helpful person agrees with you for forty minutes. The technique is almost entirely in what you do after they stop talking.",
    teach: [
      "Build the guide around episodes, not opinions. A workable shape is: a warm-up that establishes the context and lets them hear their own voice; a request for the most recent specific instance — “tell me about the last time you booked something like this” — walked through in order from before they started to after they finished; two or three prepared probes for the moments your ranked questions care about; and a closing question that invites what you failed to ask. Six good questions with room to follow is better than fifteen that must be got through.",
      "Follow, do not lead. When someone says “it was a bit confusing”, the useful responses are silence, “say more about that”, and “what happened just before that?”. The damaging response is “was it confusing because the price was hidden?”, which hands them your hypothesis and gets it back as data. Laddering means moving from what happened to how they decided to why it mattered, one step at a time, using their words rather than yours. If you find yourself introducing a noun the participant has not used, notice it.",
      "Silence is the technique people find hardest and gain most from. After an answer that seems finished, wait. Three or four seconds is long enough to be uncomfortable and short enough not to be strange, and it is where the qualification, the exception and the actual story usually arrive. Nodding and moving on politely to the next question is what makes an interview feel smooth and produce nothing.",
      "Working alone, you cannot moderate well and take full notes at the same time; the assigned page assumes a note-taker you do not have. So decide in advance: record with consent and take only sparse markers during the session, or accept thinner notes and write up immediately afterwards while memory is fresh. Either way, keep three things separate in the record — what they said, in their words; what you inferred from it; and what you want to follow up. Mixing them takes ten seconds during the session and cannot be undone afterwards, because by the next day you will no longer remember which was which.",
    ],
    misconception:
      "“A good interview flows like a conversation.” A good interview is often slightly awkward, because one person is talking far more than the other, silences are being allowed to sit, and the interviewer keeps returning to a detail the participant considers unremarkable. Comfortable, balanced conversation usually means you have been contributing your own views, which are now in the participant's answers.",
    example:
      "In one session the participant said “the payment was fine, it just took a while.” The interviewer waited. After four seconds: “Well, I did pay twice actually. The first time nothing happened so I did it again, then I got two messages and had to ring them.” The prepared question about payment clarity would never have found this, because the participant had classified the double payment as her own mistake and not as a problem worth mentioning. The note recorded three separate lines: her words verbatim; the inference that the pending state was invisible to her; and the follow-up to ask the next participant what they did when nothing appeared to happen.",
    steps: [
      {
        minutes: 25,
        title: "Rebuild the guide",
        text: "Read the assigned interview page and the note-taking page. Rewrite your guide as: warm-up, the recent episode walked through in order, two or three probes tied to your ranked questions, and a closing invitation. Keep it to one side of paper.",
      },
      {
        minutes: 20,
        title: "Prepare the record",
        text: "Set up your three-column note structure — said, inferred, follow up — and decide now whether you are recording. Check your consent introduction is to hand and your files are named per participant.",
      },
      {
        minutes: 40,
        title: "Run the interview",
        text: "Run one session of about thirty minutes with consent. Ask for episodes, follow with their words, and use silence at least three times deliberately. If nobody is available, run it with a practice participant, label it rehearsal, and record the recruitment gap; never invent a participant or an answer.",
      },
      {
        minutes: 20,
        title: "Write up immediately",
        text: "Within an hour, complete the three columns. Mark anything you are reconstructing from memory rather than from a note or recording, because that distinction matters later.",
      },
      {
        minutes: 15,
        title: "Revise the guide and pause",
        text: "Write the three questions that worked, the one that failed and why, and the thing you wish you had followed. Revise the guide for the next session. Save both versions.",
      },
    ],
    freeToolPath:
      "Paper, a pen and the voice recorder already on your phone, used only with consent. No transcription service, research platform or AI summariser is used: transcripts are not required for a study of this size, and the write-up you do yourself is where the analysis begins.",
    deliverable:
      "A one-page interview guide, raw notes with said, inferred and follow-up visibly separated, a note of what was reconstructed from memory, and a revised guide with a written reason for each change.",
    check: [
      {
        question:
          "A participant says a step was “annoying”. What are your next three seconds?",
        answer:
          "Silence, then “say more about that” or “what happened just before that?”. Anything that names a cause — the button, the price, the wait — replaces their experience with your hypothesis and you will never know which it was.",
      },
      {
        question:
          "Why separate what was said from what you inferred during the session rather than afterwards?",
        answer:
          "Because within a day the two become indistinguishable in memory, and your inference will be remembered as their words. That is how an interpretation ends up quoted in a report as participant evidence.",
      },
      {
        question:
          "Nobody consents to an interview this week. What is the honest output?",
        answer:
          "A rehearsal clearly labelled as such, the revised guide, and a recorded recruitment gap stating what you tried and what you will do next. An invented participant is not a lesser finding; it is fabricated evidence, and it disqualifies the whole study.",
      },
    ],
    rubric: [
      "The guide is built around a recent specific episode",
      "Follow-ups use the participant's words, not the interviewer's",
      "Said, inferred and follow-up are separated in the record",
      "The guide is revised from what actually happened",
    ],
    criteria: [
      {
        criterion: "The guide is built around a recent specific episode",
        evidence:
          "A guide whose central request asks for the most recent instance and walks it through in order, with probes tied to ranked questions.",
        levels: [
          "A list of opinion questions.",
          "An episode is requested but the guide returns to general opinions and predictions.",
          "The episode is central, walked in order, with probes tied to your questions.",
          "As adequate, and the guide names which ranked question each probe serves.",
        ],
        remediation:
          "Delete every question containing “would you”, “do you usually” or “what do you think about”. Replace them with a request for the last time it happened and a probe for what they did next.",
        recheck: "The rewritten guide with probes mapped to questions.",
      },
      {
        criterion:
          "Follow-ups use the participant's words, not the interviewer's",
        evidence:
          "Notes showing follow-up questions built from terms the participant introduced, and no follow-up that supplies a cause.",
        levels: [
          "Follow-ups propose explanations for the participant to confirm.",
          "Mostly neutral, with at least one leading follow-up that shaped the answer.",
          "Follow-ups consistently reuse the participant's own terms.",
          "As adequate, and you identify one moment where you nearly led and what you asked instead.",
        ],
        remediation:
          "Go through your notes and underline every noun in your follow-ups that the participant had not already used. For each, write the neutral question you should have asked.",
        recheck: "The annotated notes with corrected follow-ups.",
      },
      {
        criterion: "Said, inferred and follow-up are separated in the record",
        evidence:
          "Notes in three visibly distinct columns or sections, with reconstructed material marked.",
        levels: [
          "One block of mixed notes.",
          "Some separation, but inferences appear inside quoted material.",
          "Three sections cleanly separated, reconstruction marked.",
          "As adequate, and at least one inference is written with the alternative interpretation beside it.",
        ],
        remediation:
          "Rewrite the notes into three columns now. Anything you cannot confidently place in the said column belongs in inferred, however sure you feel.",
        recheck: "The three-column notes.",
      },
      {
        criterion: "The guide is revised from what actually happened",
        evidence:
          "A second version of the guide with a written reason for each change, including one question removed.",
        levels: [
          "No revision.",
          "Changes made without reasons.",
          "Each change carries a reason drawn from the session.",
          "As adequate, and the revision names something the participant raised that your questions had no place for, now added.",
        ],
        remediation:
          "For each question, write what it actually produced. Remove anything that produced agreement, restatement of the question, or nothing.",
        recheck: "Both guide versions with reasons.",
      },
    ],
    portfolio:
      "Real research evidence, if a real participant consented. The guide, the anonymised notes structure and the revision are portfolio material; verbatim notes and identities are not. If this was a rehearsal, label it a rehearsal everywhere it appears, permanently.",
    resource: interviews,
    resources: [
      {
        ...interviews,
        section:
          "The whole page: planning the interview, conducting it, and following up.",
        purpose:
          "Supplies the structure and the interviewing discipline this lesson practises.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Assumes a paired researcher and note-taker; working alone you must choose between recording and thinner notes, which the page does not address.",
        fallbackId: "R08",
      },
      {
        ...notes,
        section:
          "The sections on note-taking and on audio recording, including the consent each requires.",
        purpose:
          "Decides how the session is captured and makes the consent requirement concrete before the recorder is switched on.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 19 September 2017. It does not cover analysis or sharing, and it recommends equipment a solo learner does not need.",
        fallbackId: "R53",
      },
    ],
  },
  {
    id: "m05-l07-v1",
    module: "m05",
    week: 5,
    day: 7,
    level: 2,
    areas: [4],
    title: "Watch the task where it actually happens",
    objective:
      "Run one consented observation of a real task in its own setting with a stated observation stance, and produce a record containing at least three things you saw that nobody would have told you in an interview.",
    bringForward:
      "Your interview notes and follow-up list. The best observation targets are usually the moments an interviewee skipped over as unremarkable.",
    why: "People narrate their behaviour as they believe it to be, and the parts they skip are often the parts that decide the outcome. Watching is the only method that returns what nobody thought worth mentioning, including the environment the task actually happens in.",
    teach: [
      "The assigned page describes three stances, and choosing one before you arrive is most of the skill. You can watch silently and ask everything afterwards, which disturbs the task least and costs you the reasoning behind what you saw. You can watch and ask brief questions as things happen, which trades a little naturalness for context. Or you can ask the person to think aloud throughout, which gives you the most reasoning and changes the task the most, because narrating slows people down and makes them tidy up their behaviour. None is correct in general; each distorts something, and your record should name which distortion you accepted.",
      "The setting is data. Where the person sits, whether the room is noisy, whether the phone is theirs or shared, whether the battery is low, whether the network drops in that corner of the house, whether a child needs attention halfway through — these are not interruptions to the study, they are the conditions the design will actually meet. Studying a booking flow in a quiet room on a fast connection tells you how it behaves in a place where nobody will ever use it.",
      "Sessions are longer than interviews — the guidance suggests one to three hours — because tasks have gaps, waiting and interruptions in them, and the gaps are frequently where the trouble is. Take timings. A step that takes eleven seconds and a step that takes four minutes look identical in a flow diagram, and they are entirely different design problems.",
      "Consent in someone else's space needs more care, not less. You are in their home, their shop or their office; other people may be present who have not agreed to anything; there will be things in view that are none of your business. Agree beforehand what you may photograph, avoid capturing anyone who has not consented, and be explicit that they can stop at any point. The page assumes a pair of researchers, one watching and one noting; alone, you will miss things, and the honest response is to record fewer, better observations rather than to claim complete coverage.",
    ],
    misconception:
      "“Observation just means watching someone use the interface.” Most of what you are there for happens outside the screen: the phone handed to a relative, the amount checked against a note on paper, the message sent to confirm with someone else before paying, the wait to see whether a payment went through. If your record only contains taps, you ran a usability test in the wrong setting.",
    example:
      "An observation of one person booking a class at home produced three things no interview had surfaced. She checked the price against a screenshot her friend had sent, in a different app, twice — the price on the page did not match what she remembered and she trusted the screenshot more. She stood up and walked to the window when the payment screen appeared, because the network was unreliable at the sofa, and stayed standing until it resolved. And after the confirmation appeared she took a screenshot of it, then sent it to her friend — the actual end of the task was not the confirmation screen but proof shared with someone else. The record noted the stance used (silent, questions afterwards), that a second observer would have caught more, and that this was one person in one home.",
    steps: [
      {
        minutes: 25,
        title: "Read and choose a stance",
        text: "Read the assigned page. Choose silent observation, observation with brief questions, or think-aloud, and write what each of the other two would have given you and what your choice will distort.",
      },
      {
        minutes: 20,
        title: "Prepare the guide and the consent",
        text: "Write a short checklist of what you are watching for, drawn from your questions and your interview follow-ups. Extend your consent introduction to cover being in their space, photography and other people present.",
      },
      {
        minutes: 45,
        title: "Observe",
        text: "Watch one real task end to end with consent. Note actions, timings, environment, interruptions and anything done outside the screen. Do not help unless the person is stuck in a way that distresses them; if you help, write down that you did and when.",
      },
      {
        minutes: 20,
        title: "Record what nobody would have told you",
        text: "Immediately afterwards, write the three or more things you saw that would not have come out of an interview. For each, write why it would have been skipped: too ordinary, too embarrassing, too automatic to notice.",
      },
      {
        minutes: 10,
        title: "State the limits and pause",
        text: "Write the stance you used, what it distorted, what a second observer would have added, and the fact that this is one person in one setting. Save the record with your interview notes.",
      },
    ],
    freeToolPath:
      "A notebook, a watch or phone clock for timings, and photographs only where consented. No screen-recording software, eye tracker or observation platform is required; for a single session, a pen and honest timings outperform a tool you are still learning to operate.",
    deliverable:
      "An observation record with stated stance, a timed sequence of actions including waits and interruptions, environment notes, at least three things an interview would not have produced, and a written limitations paragraph.",
    check: [
      {
        question: "Why record how long each step took?",
        answer:
          "Because duration is invisible in a flow diagram and decisive in practice. A four-minute wait with no feedback and an eleven-second step look identical on paper, and only one of them makes people pay twice.",
      },
      {
        question:
          "The person gets stuck and looks to you for help. What do you do?",
        answer:
          "Wait longer than is comfortable, since the stuck moment is what you came for. If they are distressed or genuinely blocked, help — you are a guest, not an experimenter — and then write down exactly what you did and when, so the record shows where the natural behaviour ended.",
      },
      {
        question:
          "What does think-aloud cost you compared with silent observation?",
        answer:
          "Naturalness and timing. Narrating slows people down, makes them explain choices they would normally make without thinking, and tidies up behaviour they would rather not describe. You gain reasoning and lose the true shape of the task.",
      },
    ],
    rubric: [
      "A stance was chosen deliberately and its distortion named",
      "The record includes environment, timings and interruptions",
      "Three or more observations could not have come from an interview",
      "Limits of one observer and one setting are stated",
    ],
    criteria: [
      {
        criterion: "A stance was chosen deliberately and its distortion named",
        evidence:
          "A written choice of stance with what the alternatives would have given and what this one distorts.",
        levels: [
          "No stance recorded; the session drifted between watching and asking.",
          "A stance is named but its effect on the data is not considered.",
          "The stance is chosen, justified and its distortion named.",
          "As adequate, and the record notes a moment where you deviated from the stance and what that cost.",
        ],
        remediation:
          "Write the three stances and, for your session, what each would have produced. Then state which you actually used, including any drift, and what that means for the record.",
        recheck: "The stance note with the comparison.",
      },
      {
        criterion: "The record includes environment, timings and interruptions",
        evidence:
          "A sequence with durations, plus notes on setting, device, network, other people and anything that interrupted the task.",
        levels: [
          "A list of screen actions only.",
          "Actions with some context but no timings.",
          "Timed sequence with environment and interruptions recorded.",
          "As adequate, and one environmental factor is identified as likely to change the design, with the reason.",
        ],
        remediation:
          "Reconstruct the timings you did not take from any recording or from memory, marking them as estimates, and add the environment you remember. Take timings properly in the next session.",
        recheck: "The timed sequence with environment notes.",
      },
      {
        criterion:
          "Three or more observations could not have come from an interview",
        evidence:
          "At least three specific observations, each with a note on why the person would not have reported it.",
        levels: [
          "The record repeats what interviews already established.",
          "One or two novel observations, without reasoning about why they were unreported.",
          "Three or more, each with why it would have been skipped.",
          "As adequate, and one of them contradicts something a participant said in an interview, with both recorded rather than resolved.",
        ],
        remediation:
          "Go through your record and mark everything you already knew. What remains unmarked is your answer; if nothing remains, the session was probably a usability test in a quiet room and should be repeated in the real setting.",
        recheck: "The marked record with the three observations.",
      },
      {
        criterion: "Limits of one observer and one setting are stated",
        evidence:
          "A written paragraph naming the single-observer limitation, the single setting, and what a different setting might have shown.",
        levels: [
          "Findings written as general behaviour.",
          "A brief mention of a small sample.",
          "Observer, setting and their consequences stated specifically.",
          "As adequate, and the paragraph names which of your findings is most and least likely to hold elsewhere, with reasons.",
        ],
        remediation:
          "Write the sentence “this is what one person did in one place on one device on one day”, then add what you would need to see before treating any of it as typical.",
        recheck: "The limitations paragraph.",
      },
    ],
    portfolio:
      "Strong project evidence: observed behaviour in a real setting is rarer in junior portfolios than interviews and reads as more convincing. Publish the anonymised record and the limitations; never publish photographs of a participant's home, family or documents.",
    resource: contextual,
    resources: [
      {
        ...contextual,
        section:
          "The whole page, concentrating on the three ways to run the visit, session length, the discussion guide and running the session.",
        purpose:
          "Supplies the stances, the session shape and the practical conduct of a visit.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 1 September 2017. It supplies no sample sizes, no note-taking template and no analysis method, and assumes a pair of researchers; alone, record less and claim less.",
        fallbackId: "R27",
      },
      {
        ...notes,
        section:
          "The sections on photography and on what consent each capture method requires.",
        purpose:
          "Sets the rules for capturing anything in someone else's space, where other people and private material are present.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for UK government sessions; the consent principle transfers directly, the equipment advice does not matter at this scale.",
        fallbackId: "R53",
      },
    ],
  },
  {
    id: "m05-l08-v1",
    module: "m05",
    week: 5,
    day: 8,
    level: 2,
    areas: [4],
    title: "A diary study you could actually run",
    objective:
      "Write a one-week logging protocol with an entry template, a prompt schedule, an honest burden estimate and a dropout plan, and either run it with a consenting participant or submit the protocol together with the recorded recruitment gap.",
    bringForward:
      "Your questions about anything that happens over time, across days or in more than one sitting. Interviews compress those into a summary; a diary does not.",
    why: "Some things cannot be seen in a session or remembered accurately afterwards: what happens between deciding and doing, how a feeling changes over a week, how many small interruptions accumulate into abandoning something. A diary catches those at the moment they happen, at the cost of asking a person to work for you for days.",
    teach: [
      "The assigned article describes three ways to trigger entries. Event-contingent asks for an entry whenever a defined thing happens, which suits rare events and gives you the moment itself. Interval-contingent asks at fixed times — every evening — which gives comparable coverage and misses whatever happened at eleven in the morning. Signal-contingent prompts at random or chosen moments, which catches the ordinary and irritates people fastest. Choose by what you need to see, then say which distortion you accepted.",
      "Burden decides whether you get data at all. Every extra field, every extra prompt and every extra day increases dropout, and the entries that stop arriving are not random: the busy days, which are usually the interesting ones, are the first to go missing. Design the entry to take under two minutes, in whatever medium the person already uses — a voice note, a photograph, three lines in a messaging app — rather than a form that requires them to sit down at a laptop.",
      "Plan for dropout rather than being surprised by it. Decide in advance what an acceptable minimum is, what you will do after two silent days, whether a missed day may be filled in later and how you will mark reconstructed entries, and what you will do if a person withdraws mid-week. Decide too what you owe them: a week of daily entries is real work, and if you cannot compensate it you should ask for less.",
      "A diary is a beginning, not a finding. The strongest use is diary plus a closing conversation: the entries tell you what happened and when, and the conversation, held with the entries in front of you both, tells you what those moments meant. Read the entries before that conversation and write your questions from them; a diary study analysed without talking to the person is a pile of fragments you will interpret with your own assumptions.",
    ],
    misconception:
      "“A week of entries from one person is too small to be worth running.” Small is the normal size for a diary study, and its value is not prevalence but sequence: it shows the order things happened in, the gaps between them and what came between the intention and the action. What it cannot support is any statement about how often this happens across people, and that limit belongs on the study, not in the way of running it.",
    example:
      "A one-week protocol on booking weekend classes: event-contingent, entry whenever the person thought about attending something and did not book it. Entry template of four lines, sent by voice note or text, under two minutes: what was it, where were you, what stopped you, what did you do instead. Prompt on day one, then a light reminder on days three and six only. Burden estimated at fifteen minutes total across the week and stated to the participant beforehand. Dropout plan: after two silent days, one friendly message, and after that stop and use whatever exists. It ran with one participant and produced six entries, five of which said some version of “needed to check with my sister first” — which no interview had produced and which the closing conversation turned into a finding about who actually makes this decision. The write-up said plainly: one participant, one week, six entries, sequence not prevalence.",
    steps: [
      {
        minutes: 25,
        title: "Read and choose a trigger",
        text: "Read the assigned article. Choose event, interval or signal triggering for your question, and write what your choice will systematically miss.",
      },
      {
        minutes: 30,
        title: "Design the entry",
        text: "Write an entry template of no more than four short prompts, in a medium the participant already uses daily. Time yourself completing it as if you were them; if it takes over two minutes, cut a prompt.",
      },
      {
        minutes: 25,
        title: "Write the protocol",
        text: "Write the duration, the prompt schedule, what you will send on day one, the burden estimate you will tell the participant, and what you offer for their time. Add your consent introduction, extended for a study that continues over days.",
      },
      {
        minutes: 25,
        title: "Plan for dropout and closure",
        text: "Write your minimum acceptable data, your response to silence, your rule for late or reconstructed entries, and your withdrawal procedure. Draft the closing conversation: how you will read the entries first and build questions from them.",
      },
      {
        minutes: 15,
        title: "Run or record the gap, then pause",
        text: "If a participant consents, send day one and start. If not, record what you attempted, when and what you will try next, and submit the protocol as the deliverable. Do not write example entries and present them as data, even as illustrations, unless every one is clearly labelled as invented.",
      },
    ],
    freeToolPath:
      "A messaging app the participant already has, or paper if they prefer, plus your own notes file. No diary-study platform is required and most are unaffordable; the medium the person already opens twenty times a day will beat a better tool they have to remember to open.",
    deliverable:
      "A one-week protocol with trigger type and its blind spot, an entry template timed at under two minutes, a prompt schedule, a stated burden and offer, a dropout and withdrawal plan, and a closing-conversation plan — plus either the collected entries or a dated recruitment gap.",
    check: [
      {
        question: "Which days go missing first, and why does it matter?",
        answer:
          "The busiest ones, which are usually the ones your question cares about. Missing entries are not random gaps: they are systematically the days when the person had least time, so a diary read at face value describes the calm days.",
      },
      {
        question:
          "Why hold a conversation after the diary rather than just analysing the entries?",
        answer:
          "Because entries are compressed and you will fill the compression with your own assumptions. Reading them together lets the person tell you what “needed to check first” actually meant, and that is usually where the finding is.",
      },
      {
        question:
          "You could not recruit anyone. What is the acceptable deliverable?",
        answer:
          "The protocol, the timed entry template and a dated record of what you tried, who you asked and what you will do next. Invented entries are fabricated research even when the invention is obvious to you, because it will not stay obvious to the next reader.",
      },
    ],
    rubric: [
      "The trigger type is chosen for the question and its blind spot named",
      "The entry is short enough to survive a busy day",
      "Burden, offer and dropout are planned in advance",
      "The closing conversation is planned from the entries",
    ],
    criteria: [
      {
        criterion:
          "The trigger type is chosen for the question and its blind spot named",
        evidence:
          "A stated choice between event, interval and signal triggering, with what it will miss.",
        levels: [
          "No trigger type chosen; entries requested vaguely.",
          "A type is chosen but its blind spot is not stated.",
          "The choice is justified by the question and its blind spot is named.",
          "As adequate, and the protocol includes one cheap mitigation for that blind spot.",
        ],
        remediation:
          "Write what your question needs to catch, then write which of the three triggers would catch it and what each would miss. Choose again if your first choice cannot see the moment you care about.",
        recheck: "The trigger choice with its blind spot and any mitigation.",
      },
      {
        criterion: "The entry is short enough to survive a busy day",
        evidence:
          "An entry template of at most four prompts, with your own timed completion recorded at under two minutes.",
        levels: [
          "A long form or an open request to “write about your day”.",
          "A short template, but untimed and requiring a device or app the person does not already use.",
          "At most four prompts, timed under two minutes, in a familiar medium.",
          "As adequate, and the template allows a voice note or photograph instead of typing.",
        ],
        remediation:
          "Complete your own template while standing up, in a hurry, on a phone. Cut whatever you skipped or resented, then time it again.",
        recheck: "The cut template with your timing.",
      },
      {
        criterion: "Burden, offer and dropout are planned in advance",
        evidence:
          "A stated total burden told to the participant, what is offered for it, and written rules for silence, late entries and withdrawal.",
        levels: [
          "No burden estimate and no dropout plan.",
          "A burden estimate, but nothing about silence or withdrawal.",
          "Burden, offer, silence response, late-entry rule and withdrawal all stated.",
          "As adequate, and the minimum acceptable data is defined in advance, so you know when to stop rather than deciding once you are disappointed.",
        ],
        remediation:
          "Write the four rules as sentences you could send to the participant. Any rule you would be embarrassed to send is a rule you should change, not hide.",
        recheck: "The four written rules and the burden statement.",
      },
      {
        criterion: "The closing conversation is planned from the entries",
        evidence:
          "A plan to read the entries first and build questions from them, with an example of the kind of question that would follow.",
        levels: [
          "No closing conversation planned.",
          "A conversation planned but with a generic guide written in advance of any entries.",
          "The plan is to read first, then write questions from what the entries actually contain.",
          "As adequate, and the plan names what you would do if the entries contradict what the person said in the closing conversation.",
        ],
        remediation:
          "Write the two or three question shapes you will use — “on Tuesday you wrote …, what was happening?” — and commit to writing the actual questions only after reading the entries.",
        recheck: "The closing-conversation plan.",
      },
    ],
    portfolio:
      "The protocol is portfolio-worthy on its own: it shows you can design a longitudinal study a real person could complete. If it ran, the sequence findings belong in the project with the sample stated plainly. If it did not run, it stays in the portfolio as a designed study with the recruitment gap named; that is honest and reads far better than a study nobody can verify.",
    resource: diary,
    resources: [
      {
        ...diary,
        section:
          "The sections on event, interval and signal-contingent designs, participant burden and dropout, and analysis over time.",
        purpose:
          "Supplies the three trigger designs and the burden reasoning that decides whether any data arrives.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for studies with recruitment budgets and platforms; run it only with genuine consent, and if nobody consents, submit the protocol and the recruitment gap.",
        fallbackId: "R08",
      },
      {
        ...consent,
        section:
          "The sections on what participants must understand and on withdrawal, re-read for a study that runs across several days.",
        purpose:
          "A multi-day study needs consent that covers repeated contact and a clear way to stop partway through.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. UK jurisdiction; it does not address longitudinal consent specifically, so the repeated-contact wording is this lesson's own.",
        fallbackId: "R54",
      },
    ],
  },
  {
    id: "m05-l09-v1",
    module: "m05",
    week: 5,
    day: 9,
    level: 2,
    areas: [4],
    title: "Surveys: wording, and what a number can carry",
    objective:
      "Write a questionnaire of at most eight questions that survives a wording review, and state in advance the population you can actually reach, the counts you will report instead of percentages, and the interval you would have to attach to any rate.",
    bringForward:
      "Your remaining questions of the “how many” or “how often” kind, and the exclusion sentences you wrote when choosing methods. A survey is where those exclusions are most often forgotten.",
    why: "A survey is the easiest research to run badly, because it produces numbers whatever you do. The numbers look like evidence in a slide, and by the time anyone asks who answered and how the question was worded, the recommendation has already been made.",
    teach: [
      "The assigned article gives ten practices, and the ones that break most studies are the first four. Ask only what you will act on, because every extra question costs you completions. Use neutral, natural language, since a question containing your hypothesis returns your hypothesis. Do not ask people to predict their behaviour — “would you use this?” measures politeness. And prefer closed questions with balanced scales, because open text at scale becomes a pile you will skim and quote selectively. Add to those: no double-barrelled questions, mutually exclusive and exhaustive options, an opt-out for every question, and respectful, inclusive wording.",
      "Wording is only half the problem; who answers is the other half, and the article deliberately does not cover it. A survey circulated through your own contacts measures your own contacts. A survey posted where the enthusiastic gather measures enthusiasm. There is no wording clever enough to fix a sample that never included the people whose absence matters, and the only honest response is to define, before sending, who could possibly have received it and who could not.",
      "Small samples should report counts, not percentages. With twelve responses, “58 per cent” is a way of writing “seven” that sounds like a measurement, and the reader will treat it as one. Report “seven of twelve”. If you do report a rate, the assigned interval reading is explicit that a rate without an interval is not a result; the width of that interval at small numbers is usually wide enough to make the point on its own. Note also that the course's sample-size resource covers binary success metrics only and states that it does not cover surveys, so do not borrow its numbers as a survey sample size — the honest position is that you are collecting a small, self-selected set of responses and reporting them as such.",
      "A survey is strongest attached to something else. After interviews, it can check whether a pattern you heard from four people also appears among thirty; before interviews, it can find people who have had a specific experience worth talking about. Alone, and small, it mostly produces a table you cannot defend. Design it as one input to a triangulated picture, and say what it is triangulating with.",
    ],
    misconception:
      "“A survey gives me quantitative evidence, so it is more objective than the interviews.” The numbers are precise, not accurate. A precisely counted answer to a leading question asked of a self-selected group is more misleading than four honest conversations, because precision invites trust that the sampling does not deserve.",
    example:
      "A draft survey opened with “How frustrating do you find booking classes online?” — leading, and it assumes the frustration. It contained “Do you find the price and materials information clear and easy to find?”, which is two questions and cannot be answered by someone for whom the price was clear and the materials were not. It asked “Would you use a reminder feature?”, a prediction. Rewritten: eight questions, opening with “In the last two months, how many paid classes or workshops have you booked?” with count ranges, then behaviour questions about the most recent one, a balanced five-point scale on how confident they were that the booking had worked, an opt-out on every item, and one open question at the end. Twenty-two people answered, all through two WhatsApp groups. The report said “nine of twenty-two said they were unsure their payment had gone through”, named the two groups as the entire reachable population, and made no percentage claim at all.",
    steps: [
      {
        minutes: 25,
        title: "Read the ten practices",
        text: "Read the assigned article on question wording and the article on intervals. Write the four practices you are most likely to break, given your own draft or your instincts.",
      },
      {
        minutes: 30,
        title: "Draft and then cut",
        text: "Draft your questionnaire, then cut it to at most eight questions by removing anything you would not act on. Write beside each survivor the decision it serves.",
      },
      {
        minutes: 25,
        title: "Run a wording review",
        text: "Check every question against the ten practices: leading language, prediction, double-barrelled, unbalanced scale, missing or overlapping options, no opt-out. Rewrite each failure and keep the original beside it.",
      },
      {
        minutes: 25,
        title: "Define the reachable population",
        text: "Write exactly who can receive this and who cannot. Then write your reporting rule: counts not percentages below a number you choose now, and an interval attached to any rate you do report.",
      },
      {
        minutes: 15,
        title: "Pilot with two people and pause",
        text: "Have two people complete it in front of you and note every question they hesitated over or interpreted differently from your intention. Fix those, then save the questionnaire, the population statement and the reporting rule.",
      },
    ],
    freeToolPath:
      "A free form tool is convenient and not required; the same eight questions work as a message you send and tally by hand, and at twenty responses hand-tallying is quicker than learning a tool's export. If you use a form service, check that it does not require respondents to sign in, since that alone will skew who replies.",
    deliverable:
      "A questionnaire of at most eight reviewed questions with the pre-review wording preserved, a written statement of the reachable and unreachable population, a reporting rule for counts and intervals, and notes from a two-person pilot.",
    check: [
      {
        question: "Why is “would you use this feature?” a wasted question?",
        answer:
          "Because it asks for a prediction about a hypothetical, and people are consistently bad at that and inclined to be encouraging. It measures how agreeable your respondents are feeling, which you already know.",
      },
      {
        question:
          "You have twelve responses and seven picked the same option. How do you report it?",
        answer:
          "As “seven of twelve”, with who the twelve were. Writing “58 per cent” converts a small count into an apparent measurement, and any interval around that rate at n=12 is wide enough to cover most of the range.",
      },
      {
        question:
          "A question fails the pilot because two people read it differently. What does that tell you?",
        answer:
          "That the answers to it would have been uninterpretable, since you could not know which reading each respondent used. Two pilot participants routinely catch what an hour of your own re-reading does not.",
      },
    ],
    rubric: [
      "Every question survives a wording review",
      "The questionnaire is cut to what will be acted on",
      "The reachable population is defined before sending",
      "The reporting rule prevents small counts becoming rates",
    ],
    criteria: [
      {
        criterion: "Every question survives a wording review",
        evidence:
          "A reviewed questionnaire with the original wording preserved beside each rewritten item, checked against the ten practices.",
        levels: [
          "No review; leading or double-barrelled questions remain.",
          "Some rewriting, but at least one prediction or unbalanced scale survives.",
          "All questions pass the ten practices, with originals preserved.",
          "As adequate, and one rewrite is annotated with the answer the original would have produced.",
        ],
        remediation:
          "Take the ten practices as a checklist and mark each question against each one. Rewrite every failure and keep both versions so the review is visible.",
        recheck: "The annotated questionnaire with both versions.",
      },
      {
        criterion: "The questionnaire is cut to what will be acted on",
        evidence:
          "At most eight questions, each with the decision it serves written beside it.",
        levels: [
          "Long questionnaire with no stated purpose per question.",
          "Shortened, but several questions serve curiosity rather than a decision.",
          "At most eight, each tied to a decision.",
          "As adequate, and the cut list is preserved so you can see what you removed and why.",
        ],
        remediation:
          "Write the decision each question serves. Delete every question whose decision is “it would be interesting to know”. Demographic questions must earn their place the same way.",
        recheck: "The cut questionnaire with decisions and the removed list.",
      },
      {
        criterion: "The reachable population is defined before sending",
        evidence:
          "A written statement of who can receive the survey and who structurally cannot, produced before distribution.",
        levels: [
          "No population statement.",
          "A vague description of where it will be posted.",
          "Who can and cannot receive it is stated specifically, before sending.",
          "As adequate, and the statement names the group whose absence would most change the result.",
        ],
        remediation:
          "List your distribution channels, then for each write who is on it and who is not. Combine into two sentences you will paste into the report unchanged.",
        recheck: "The population statement.",
      },
      {
        criterion: "The reporting rule prevents small counts becoming rates",
        evidence:
          "A written rule stating the count below which you will not use percentages, and that any rate reported carries an interval.",
        levels: [
          "No rule; percentages planned regardless of n.",
          "A rule exists but no interval requirement.",
          "Counts below a stated threshold, and intervals on any rate.",
          "As adequate, and you have worked one interval for a plausible result and recorded your inputs.",
        ],
        remediation:
          "Write your rule in one sentence, then apply it to a made-up result of your expected size and see what it forces you to write. Adjust the threshold if the sentence still misleads.",
        recheck: "The rule and the worked example.",
      },
    ],
    portfolio:
      "Useful project evidence only if reported honestly. A small survey reported as counts with a named population reads as careful; the same survey reported as percentages reads as inexperienced to anyone who checks the sample size, and they will check.",
    resource: survey,
    resources: [
      {
        ...survey,
        section:
          "All ten practices, with particular attention to neutral language, not asking for predictions, closed questions and balanced scales.",
        purpose:
          "Supplies the wording review this lesson runs and the reasons behind each practice.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 20 August 2023. Wording only: it excludes sampling, distribution, response rates and analysis, which is exactly why this lesson supplies the population statement and the reporting rule.",
        fallbackId: "R37",
      },
      {
        ...intervals,
        section:
          "What an interval means and how sample size and variability change its width.",
        purpose:
          "Establishes that a rate without an interval is not a result, and shows how wide the interval is at the sizes you can actually collect.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. It deliberately gives no formulas, so use a spreadsheet or calculator and show your inputs. The catalog's sample-size reading covers binary success metrics only and states it does not cover surveys; do not borrow its numbers here.",
        fallbackId: "R45",
      },
    ],
  },
  {
    id: "m05-l10-v1",
    module: "m05",
    week: 5,
    day: 10,
    level: 2,
    areas: [4],
    title: "From a pile of notes to findings you can defend",
    objective:
      "Convert your raw material into at most seven findings, each carrying how many people showed it, the evidence behind it, your confidence, the decision it informs, and any evidence that contradicts it.",
    bringForward:
      "Everything collected so far: interview notes, the observation record, any diary entries or survey responses, and the desk-research note. Analysis is the point at which these become one study rather than four activities.",
    why: "Synthesis is where research is usually lost. Notes get read once, the memorable quotation wins, and the finding that emerges is the one the researcher already suspected — not through dishonesty, but because nothing in the process forced the alternatives to be considered.",
    teach: [
      "Work upward in three separable layers, which is the discipline the assigned page is built on. An observation is what happened or was said. An interpretation is what you think it means. A decision is what should change as a result. Keeping them apart lets someone else disagree with your interpretation without disputing your observation, which is precisely what a good reviewer will want to do, and it is why the three-column notes from the interview lesson matter now.",
      "Group observations, but watch where the groups come from. Bringing your existing categories to the notes and sorting into them will produce the categories you brought. The alternative is to lay out individual observations, put together the ones that seem to belong, and only then name the group from what is in it — and to notice when a group is named after a solution rather than a pattern. A group called “needs a reminder feature” is not a finding; a group called “people check with someone else before paying” is.",
      "Count people, not incidents. One talkative participant who mentioned the same difficulty five times is one person, and writing “mentioned five times” quietly turns them into five. Beside each finding write the number of participants who showed it and the total, and keep the single-participant findings: a severe problem seen once is worth acting on, provided you write it as one person's severe problem rather than as a pattern.",
      "Contradictions are findings. When two participants did opposite things, the honest record keeps both and asks what differed between them — device, experience, who else was involved, whether they had done it before. Resolving a contradiction by dropping the inconvenient half is the most common way a small study becomes wrong, and it is invisible in the final report, which is what makes it dangerous.",
    ],
    misconception:
      "“Synthesis means finding the themes.” Themes are a byproduct. The purpose is to arrive at statements you could defend to someone who read the same raw material and started from a different expectation. If a finding cannot survive the question “what in the notes would have to be different for this to be false?”, it is a summary of your impressions arranged as bullet points.",
    example:
      "Four interviews, one observation and twenty-two survey responses produced fourteen candidate findings, which were reduced to six. One survivor: “People confirm the plan with another person before paying — 3 of 4 interviewees, the observed participant, and the most common open-text answer. Confidence: moderate. Informs: whether the flow can be completed by one person alone, and whether a share step belongs before payment. Contradicting evidence: the fourth interviewee, who books alone and said checking with someone would annoy her; she was the only participant who books for herself only.” A candidate finding that did not survive: “Users want a cheaper option”, which came from one open-text comment and matched nothing else, and moved to the open-questions list rather than being deleted.",
    steps: [
      {
        minutes: 25,
        title: "Read and re-read your raw material",
        text: "Read the assigned analysis page. Then read all your notes straight through once without writing anything, to re-familiarise yourself before you start sorting.",
      },
      {
        minutes: 30,
        title: "Extract observations",
        text: "Write each observation on its own line or card, in the participant's terms, with a participant label. Do not interpret yet. Include the boring ones and anything that surprised you.",
      },
      {
        minutes: 30,
        title: "Group, then name",
        text: "Put together observations that seem to belong, then name each group from what is inside it. Rename any group named after a feature or a solution. Note which groups you expected and which you did not.",
      },
      {
        minutes: 20,
        title: "Write the findings with their evidence",
        text: "For each group, write a finding sentence with the count of participants, the evidence, your confidence, the decision it informs, and any contradicting evidence. Cut to at most seven.",
      },
      {
        minutes: 15,
        title: "Falsify and pause",
        text: "For each finding, write what in the notes would have to be different for it to be false. Move anything that fails this test to an open-questions list. Save the findings, the open questions and the discarded candidates.",
      },
    ],
    freeToolPath:
      "Sticky notes or cut paper on a table, or one text file with one observation per line that you re-sort by cutting and pasting. Physical cards are easier to regroup and easier to photograph as evidence of the process; a shared online board adds nothing at this scale and cannot be worked on a bus.",
    deliverable:
      "At most seven findings, each with participant counts, evidence, confidence, the decision it informs and contradicting evidence; plus an open-questions list and the discarded candidate findings with reasons.",
    check: [
      {
        question:
          "One participant raised the same issue five times. How many is that?",
        answer:
          "One. Repetition tells you it mattered to that person, which is worth noting in the evidence line, and it adds nothing to how many people experienced it.",
      },
      {
        question:
          "Two participants did the opposite of each other. What is the finding?",
        answer:
          "That the behaviour varies, plus whatever you can say about what differed between them. Both stay in the record; dropping one to make a clean story is the failure this step exists to prevent.",
      },
      {
        question: "What makes a finding defensible rather than merely stated?",
        answer:
          "That you can say what evidence would have made it false and point to the material behind it. A finding nobody could disagree with from the same notes is usually a restatement of your expectations.",
      },
    ],
    rubric: [
      "Observations, interpretations and decisions are kept separate",
      "Groups are named from their contents, not from solutions",
      "Findings count participants and state confidence",
      "Contradicting evidence is preserved and addressed",
    ],
    criteria: [
      {
        criterion:
          "Observations, interpretations and decisions are kept separate",
        evidence:
          "A synthesis in which each finding shows the observation layer, the interpretation and the decision as distinguishable parts.",
        levels: [
          "Findings written as conclusions with no traceable observations.",
          "Observations exist but interpretations are embedded inside them.",
          "The three layers are distinguishable for every finding.",
          "As adequate, and at least one observation carries two competing interpretations with the reason you preferred one.",
        ],
        remediation:
          "Take each finding and split it into three lines: what happened, what you think it means, what should change. Any finding you cannot split has skipped a layer, usually the first.",
        recheck: "The three-line split for every finding.",
      },
      {
        criterion: "Groups are named from their contents, not from solutions",
        evidence:
          "Group names describing a pattern of behaviour or need, with a note of which groups you expected and which emerged.",
        levels: [
          "Groups named after features or fixes.",
          "Mixed, with at least one solution-shaped group name.",
          "All groups named from their contents, expected and emergent ones distinguished.",
          "As adequate, and one group is explicitly noted as one you had to be shown by the material rather than having brought.",
        ],
        remediation:
          "Rename every group without using a noun for anything you might build. If a name resists, read the observations inside it again; the resistance usually means the group was assembled around a solution.",
        recheck: "The renamed groups with the expected/emergent marking.",
      },
      {
        criterion: "Findings count participants and state confidence",
        evidence:
          "Each finding shows how many participants of how many showed it, and a stated confidence with a reason.",
        levels: [
          "No counts; findings stated as general user behaviour.",
          "Counts present but incidents counted as people, or confidence asserted without reason.",
          "Participant counts and reasoned confidence on every finding.",
          "As adequate, and single-participant findings are kept and framed as severity rather than prevalence.",
        ],
        remediation:
          "Recount every finding by participant. Where a finding rests on one person, rewrite it as “one participant, and here is why it may still matter” rather than removing it.",
        recheck: "The recounted findings with confidence reasons.",
      },
      {
        criterion: "Contradicting evidence is preserved and addressed",
        evidence:
          "A contradicting-evidence line on every finding that has any, and an open-questions list holding what did not fit.",
        levels: [
          "Contradictions dropped.",
          "Contradictions mentioned in passing without effect on the finding's confidence.",
          "Contradictions recorded per finding and reflected in confidence.",
          "As adequate, and at least one contradiction is turned into a question for the next round of research.",
        ],
        remediation:
          "Go back through your raw notes looking specifically for anything that argues against each finding. If you find nothing for any finding, you are probably reading for confirmation; ask someone else to read the notes cold.",
        recheck: "The findings with contradiction lines and the open questions.",
      },
    ],
    portfolio:
      "The core research artefact of the project, and the one reviewers read most carefully. A findings table with counts, confidence and contradictions is credible evidence of reasoning even when the study is small; a themed list of quotations is not.",
    resource: analyse,
    resources: [
      {
        ...analyse,
        section:
          "The whole page: capturing observations, grouping them and moving from groups to findings.",
        purpose:
          "Supplies the observation–interpretation–decision separation and a workable grouping procedure.",
        minutes: "25–40",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for a team analysing together on a wall; alone, the same procedure works on a table, and you lose the disagreement that a second reader provides — so seek one where you can.",
        fallbackId: "R08",
      },
      {
        ...notes,
        section:
          "The note-taking section, re-read as the input to analysis rather than as session technique.",
        purpose:
          "Shows why the quality of raw notes decides what analysis is possible days later.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. It explicitly does not cover analysis, which is why it is a supporting reading here.",
        fallbackId: "R04",
      },
    ],
  },
  {
    id: "m05-l11-v1",
    module: "m05",
    week: 5,
    day: 11,
    level: 2,
    areas: [4],
    title: "Jobs, needs and the sentence that survives a redesign",
    objective:
      "Write three job statements with functional and emotional success criteria and three need statements from your own evidence, each labelled as evidenced or assumed, and identify which of them would still be true if the product were rebuilt from nothing.",
    bringForward:
      "Your findings table with its counts and confidence. Jobs and needs are written from evidence you hold, and anything written from expectation must be labelled as such.",
    why: "Findings are about what happened. Jobs and needs are about what someone was trying to accomplish, stated so that they outlive the current design — which is what lets you evaluate a redesign, argue against a feature, or notice that a competitor is solving a different problem.",
    teach: [
      "A job statement describes what someone is trying to get done in a situation, with the criteria by which they would judge it done. The assigned article's sentence form combines a situation, a motivation and an outcome: when I am deciding whether to spend a Saturday on a class, I want to know what I am committing to, so that I can agree it with my family before I pay. Success has a functional side, which is measurable — they knew the total cost, the time and what to bring — and an emotional side, which is not, and which is often the part that decides: they did not feel foolish for asking.",
      "The assigned article also states the weaknesses of the approach, and your reflection must engage with them rather than repeating the method's promises. Jobs abstract away the person, so they can flatten real differences between a first-time attendee and a regular; they can be written at any altitude, and a job written too high — “I want to improve myself” — guides nothing; and they are frequently written from the team's assumptions and then treated as research output. Personas suit better where the differences between kinds of people are the design problem.",
      "A need statement is the plainer instrument and, written well, is harder to game. The assigned page's form names the person, what they need to do and why, and it deliberately excludes any solution: “someone booking for a family needs to know the total cost before committing, so that they can decide together.” If a solution has crept into the sentence, remove it and check whether anything remains; sometimes nothing does, and that is a useful discovery about what you actually know.",
      "Label every statement as evidenced or assumed, and keep both. An assumed need is not a failure — you cannot research everything, and stating an assumption openly is how it stays available for testing. What is not acceptable is a need statement that reads exactly like the evidenced ones and rests on nothing, because six months later nobody can tell which was which, including you.",
    ],
    misconception:
      "“Jobs to be done replaces personas and is more rigorous because it is about behaviour.” It is a different lens with its own failure modes, and the article says so. The rigour comes from whether the statements are drawn from evidence, not from which format they are written in — a job statement invented in a meeting is exactly as unfounded as a persona invented in a meeting, and looks more scientific, which makes it worse.",
    example:
      "From four interviews and one observation: “When I am considering a paid weekend class, I want to know the full commitment — cost, timing and what I must bring — so that I can confirm with my sister before paying. Functional success: I can state the total and the requirements from memory before I pay. Emotional success: I do not have to message the organiser to ask something I feel I should already know. Evidenced: 3 of 4 interviewees and the observed session.” Beside it, an assumed statement: “When a class is nearly full, I want to know how likely I am to get a place, so that I do not waste effort. Assumed: nobody mentioned availability; included because the flow depends on it.” The reflection noted the method's own weakness — that both statements flatten the difference between the regular attendee and the first-timer, which the personas lens would have kept.",
    steps: [
      {
        minutes: 25,
        title: "Read both, including the criticisms",
        text: "Read the jobs article, including its stated weaknesses, and the need-statement page. Write the two weaknesses most likely to affect your own study.",
      },
      {
        minutes: 30,
        title: "Draft the jobs",
        text: "From your findings, draft three job statements in situation–motivation–outcome form. For each, write functional and emotional success criteria. Cite the finding each one rests on.",
      },
      {
        minutes: 25,
        title: "Draft the needs",
        text: "Write three need statements naming person, need and reason, with no solution in the sentence. Delete any solution that has crept in and check what survives.",
      },
      {
        minutes: 25,
        title: "Label and test the altitude",
        text: "Mark each statement evidenced or assumed with its source. Then test the altitude: would this still be true if the product were rebuilt from nothing, and does it still guide a decision? Rewrite anything too high or too low.",
      },
      {
        minutes: 15,
        title: "Write the reflection and pause",
        text: "Write what this framing loses about the people in your study, engaging with the article's stated weaknesses. Save the statements, the labels and the reflection.",
      },
    ],
    freeToolPath:
      "Written statements in a text file or on paper. Templates and canvases exist and add nothing here; the difficulty is entirely in whether the sentence rests on evidence, which no template can supply.",
    deliverable:
      "Three job statements with functional and emotional success criteria and cited findings, three solution-free need statements, an evidenced or assumed label on each, and a reflection engaging with the method's stated weaknesses.",
    check: [
      {
        question:
          "Why must a need statement contain no solution?",
        answer:
          "Because a solution in the sentence ends the design work before it starts and hides whether you know anything about the need itself. Remove it and see what remains; if nothing does, you have discovered you were describing a feature.",
      },
      {
        question:
          "How do you tell a job statement written from evidence from one written in a meeting?",
        answer:
          "Only by the citation. The formats are identical, which is why the label is not optional. An unlabelled statement will be read as a finding by everyone including you.",
      },
      {
        question:
          "What does a jobs framing lose compared with personas?",
        answer:
          "The differences between kinds of people. If the design problem is that a first-timer and a regular need genuinely different things, abstracting to a shared job flattens exactly the distinction you needed.",
      },
    ],
    rubric: [
      "Jobs state situation, motivation, outcome and both kinds of success",
      "Need statements contain no solution",
      "Every statement is labelled evidenced or assumed with a source",
      "The reflection engages with the method's stated weaknesses",
    ],
    criteria: [
      {
        criterion:
          "Jobs state situation, motivation, outcome and both kinds of success",
        evidence:
          "Three statements in the full form, each with functional and emotional success criteria.",
        levels: [
          "Jobs written as feature wishes.",
          "Situation and motivation present but success criteria missing or only functional.",
          "All three complete, with both kinds of success criteria.",
          "As adequate, and one emotional criterion is drawn from something a participant actually said rather than inferred.",
        ],
        remediation:
          "For each job, complete the sentence “they would know this went well because …” twice: once with something countable and once with how they would feel. If the second is guesswork, mark it assumed.",
        recheck: "The three completed jobs with both criteria.",
      },
      {
        criterion: "Need statements contain no solution",
        evidence:
          "Three statements naming person, need and reason, with no feature, screen or mechanism mentioned.",
        levels: [
          "Statements describe features.",
          "Mostly need-shaped but at least one names a mechanism.",
          "All three are solution-free and name person, need and reason.",
          "As adequate, and one statement records the solution you removed and what remained afterwards.",
        ],
        remediation:
          "Underline every noun that could be built. Remove it, then read the sentence again and check whether it still says anything.",
        recheck: "The rewritten statements with removals shown.",
      },
      {
        criterion:
          "Every statement is labelled evidenced or assumed with a source",
        evidence:
          "A label on each of the six, with a finding reference for evidenced ones and a reason for including assumed ones.",
        levels: [
          "No labels.",
          "Labels applied inconsistently, or evidenced statements without a traceable source.",
          "All six labelled, evidenced ones cited, assumed ones justified.",
          "As adequate, and each assumed statement names how it could be tested and at what cost.",
        ],
        remediation:
          "For each statement, find the finding it rests on. If you cannot, relabel it assumed rather than searching the notes for something that will do.",
        recheck: "The labelled set with citations.",
      },
      {
        criterion: "The reflection engages with the method's stated weaknesses",
        evidence:
          "A written reflection naming what this framing loses in your specific study, referencing the weaknesses the article itself states.",
        levels: [
          "No reflection, or a restatement of the method's benefits.",
          "Generic acknowledgement that no method is perfect.",
          "Specific losses named for this study, connected to the article's stated weaknesses.",
          "As adequate, and the reflection names one place where you will use a different lens instead, and why.",
        ],
        remediation:
          "Re-read the article's own criticisms and write, for each, whether it applies to your statements. At least one usually does.",
        recheck: "The reflection with the weaknesses addressed.",
      },
    ],
    portfolio:
      "Portfolio material, with the labels intact. Job and need statements presented without their evidence status are the single most common way a student portfolio overstates its research; presented with citations and assumptions marked, the same statements demonstrate exactly the judgement a reviewer is looking for.",
    resource: jobs,
    resources: [
      {
        ...jobs,
        section:
          "The job sentence form, functional and emotional success criteria, when personas suit better, and the article's stated weaknesses of the approach.",
        purpose:
          "Supplies the statement form and, equally importantly, the criticisms your reflection must engage with.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. The article's stated weaknesses must appear in your reflection; a jobs statement invented without evidence is not research however well it is formatted.",
        fallbackId: "R35",
      },
      {
        ...needs,
        section:
          "The need statement format, needs versus wants, and needs across the whole journey including supporting staff.",
        purpose:
          "Gives the plainer, solution-free statement form and the rule that unresearched needs stay labelled as assumptions.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. Written for public services, where the whole-journey and staff-need framing is especially strong; the format transfers to commercial products unchanged.",
        fallbackId: "R08",
      },
    ],
  },
  {
    id: "m05-l12-v1",
    module: "m05",
    week: 5,
    day: 12,
    level: 2,
    areas: [4],
    title: "Map the journey you can actually evidence",
    objective:
      "Produce an experience map of one journey with stages over time and layers for what people do, think and feel, in which every stage is marked as observed, reported or assumed.",
    bringForward:
      "Your findings, jobs and needs. A map is a way of arranging evidence in time; it is not a way of generating evidence you did not collect.",
    why: "A journey seen as a sequence shows things a findings list hides: where the waits are, where a person leaves the product entirely and comes back, and where the emotional low point sits — which is frequently not where the usability problem is.",
    teach: [
      "The assigned page gives a four-step procedure: prepare with your research to hand, identify the stages people commonly pass through, build the layers up one at a time, then make a working version and a simplified one for sharing. The order matters. Stages first, because arguing about stages while also placing emotions produces a map that agrees with your assumptions; layers one at a time, because each layer draws on different evidence and you will notice which layer you cannot fill.",
      "Start before the product and end after it. The journey usually begins with a trigger somewhere else — a friend's message, a poster, a deadline — and ends after the thing itself, with proof, a receipt, a memory or a decision about next time. Maps that begin at the landing page and end at the confirmation screen describe the software, not the experience, and they systematically miss the parts you can most cheaply improve.",
      "Mark evidence on the map itself, which is this course's addition to the procedure and the reason your maps will be more defensible than most. Every stage gets one of three marks: observed, meaning you watched it happen; reported, meaning a participant described it; assumed, meaning you put it there because the sequence requires it. A map with a run of assumed stages in the middle is not a failure — it is an accurate picture of where the study is thin, and it tells you exactly what the next round of research is for.",
      "Know what the map is not. It is not a service blueprint: back-stage processes, staff actions and systems are a different diagram, and the assigned page does not cover them. It is not quantitative, so the emotional curve is an illustration of what people described and not a measurement. And it is not durable evidence on its own — a map circulated without its research becomes a story everyone half-remembers as fact, which is why the shareable version must still carry the marks.",
    ],
    misconception:
      "“The map's low point is where to focus.” Sometimes. The lowest emotional point in a booking journey is often the waiting after payment, which may be cheap to fix with a status message, while the expensive problem sits earlier at a stage everyone reported as fine because they did not realise what they had missed. Use the map to locate candidates; use your findings and their counts to choose.",
    example:
      "A workshop journey mapped in seven stages: hears about it from a friend (reported), looks it up on a phone (observed), tries to work out the total commitment (observed), checks with a family member (reported by three participants, observed once), pays (observed), waits for confirmation (observed, the longest stage and the emotional low point), and shows proof to the person they came with (observed once, and previously invisible to the team). Two stages between “checks with a family member” and “pays” were marked assumed, since nobody described how the decision came back, and that gap became the first question of the next research round. The shared version kept all three marks and one sentence: five participants, one city, one week.",
    steps: [
      {
        minutes: 25,
        title: "Read and prepare",
        text: "Read the assigned page. Lay out your findings, notes and quotations where you can see them all; the map is built from these and from nothing else.",
      },
      {
        minutes: 25,
        title: "Set the stages",
        text: "Write the stages people actually pass through, starting before the product and ending after it. Use their language for the stage names. Do not place anything else yet.",
      },
      {
        minutes: 35,
        title: "Build the layers",
        text: "Add what people do, then what they think, then what they feel — one complete pass per layer. Attach a quotation or note reference wherever you can.",
      },
      {
        minutes: 20,
        title: "Mark the evidence",
        text: "Mark every stage and every layer entry observed, reported or assumed. Count the assumed marks; if they outnumber the rest, the map is a hypothesis and must be labelled as one.",
      },
      {
        minutes: 15,
        title: "Make the shareable version and pause",
        text: "Produce a simplified version that keeps the evidence marks and adds one line stating participants, place and period. Save both versions.",
      },
    ],
    freeToolPath:
      "A long sheet of paper, or several sheets joined, with sticky notes for layers — this is faster than any tool and photographs well. If you prefer digital, a table in a text file with one column per stage and one row per layer holds the same information and survives being read on a phone. No mapping tool or template purchase is involved.",
    deliverable:
      "A working experience map with stages from before the product to after it, three layers, evidence marks on every entry, and a simplified shareable version carrying the marks and a one-line statement of participants, place and period.",
    check: [
      {
        question: "Why mark stages as observed, reported or assumed?",
        answer:
          "Because a map looks equally confident everywhere. Without marks, the stages you invented to make the sequence work are indistinguishable from the ones you watched, and within a month everyone treats the whole map as evidence.",
      },
      {
        question: "Why start the map before the product?",
        answer:
          "Because the trigger and the surrounding decision shape everything that follows, and they are usually where the cheap improvements are. A map that starts at the landing page can only ever describe the software.",
      },
      {
        question: "Is the emotional curve a measurement?",
        answer:
          "No. It illustrates what participants described, from a handful of people. It is a way of noticing where to look, and any claim that a stage is the worst one for users generally would need evidence this method does not produce.",
      },
    ],
    rubric: [
      "Stages run from before the product to after it",
      "All three layers are built from cited evidence",
      "Every entry is marked observed, reported or assumed",
      "The shareable version keeps the marks and states its scope",
    ],
    criteria: [
      {
        criterion: "Stages run from before the product to after it",
        evidence:
          "A stage sequence beginning at a trigger outside the product and ending after the outcome, in participants' language.",
        levels: [
          "Stages are screens.",
          "Stages describe the journey but begin at first contact with the product and end at completion.",
          "The sequence extends before and after the product, named in participants' terms.",
          "As adequate, and at least one stage happens entirely outside the product and is identified as an opportunity or a risk.",
        ],
        remediation:
          "Ask what happened in the hour before the person opened the product and in the day after they finished. Add those stages, marking them assumed if nobody described them.",
        recheck: "The extended stage sequence.",
      },
      {
        criterion: "All three layers are built from cited evidence",
        evidence:
          "Doing, thinking and feeling layers, each entry referencing a note, quotation or observation where one exists.",
        levels: [
          "One layer only, usually actions.",
          "Three layers, but the thinking and feeling layers are written from imagination.",
          "Three layers with references wherever evidence exists.",
          "As adequate, and the write-up names which layer is thinnest and what method would fill it.",
        ],
        remediation:
          "Go through the thinking and feeling layers and attach a reference to each entry. Entries with no reference become assumed marks, not deletions.",
        recheck: "The referenced layers.",
      },
      {
        criterion: "Every entry is marked observed, reported or assumed",
        evidence:
          "Visible marks on every stage and layer entry, with the assumed count noted.",
        levels: [
          "No marks.",
          "Marks on stages only, or applied to some entries.",
          "Every entry marked, with the assumed proportion noted.",
          "As adequate, and the largest assumed run is turned into a stated question for the next round.",
        ],
        remediation:
          "Work along the map entry by entry asking “did I see this, was I told this, or did I put it here?”. Be strict: inferring a feeling from a facial expression is assumed, not observed.",
        recheck: "The fully marked map with the assumed count.",
      },
      {
        criterion: "The shareable version keeps the marks and states its scope",
        evidence:
          "A simplified map that still carries evidence marks and one line naming participants, place and period.",
        levels: [
          "A clean version with the marks removed.",
          "Marks kept but no scope statement.",
          "Marks and scope statement both present.",
          "As adequate, and the shareable version names the one decision it is meant to support, so it is not circulated as general truth.",
        ],
        remediation:
          "Add the scope line and restore the marks. A tidy map without them is the version that will be screenshotted and quoted a year from now.",
        recheck: "The shareable version.",
      },
    ],
    portfolio:
      "Strong portfolio material and commonly overstated. A marked map showing where your evidence runs out is more persuasive to an experienced reviewer than a complete-looking map from five interviews, because it demonstrates you know the difference.",
    resource: experienceMap,
    resources: [
      {
        ...experienceMap,
        section:
          "The four steps: preparing, identifying common stages, building the experience layer by layer, and producing draft and polished versions.",
        purpose:
          "Supplies the construction procedure and the stage-then-layers order this lesson follows.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 21 February 2017. It covers neither service blueprints and back-stage process nor quantitative data, supplies no template, and does not mark evidence — the observed, reported and assumed marking is this course's own addition.",
        fallbackId: "R04",
      },
      {
        ...analyse,
        section:
          "The move from grouped observations to findings, re-read as the input the map is built from.",
        purpose:
          "Keeps the map anchored to the findings rather than becoming a fresh round of speculation.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. It does not discuss mapping; it is here to prevent the map drifting away from the evidence.",
        fallbackId: "R08",
      },
    ],
  },
  {
    id: "m05-l13-v1",
    module: "m05",
    week: 5,
    day: 13,
    level: 2,
    areas: [4],
    title: "Report findings someone can act on",
    objective:
      "Produce a findings report of at most one page or six slides, structured so each finding leads with its headline and carries its evidence, with a limitations section, a recommended next step and an anonymisation check completed before anything is shared.",
    bringForward:
      "Your findings table, the marked experience map, your jobs and needs, and every limitation you have written along the way. This lesson assembles them; it does not soften them.",
    why: "Research that nobody acts on is indistinguishable from research nobody did. The report is where a study becomes a decision, and it is also the last point at which honest limits can still be attached to the numbers before they travel without you.",
    teach: [
      "Lead with the finding, not the method. The assigned page's structure is a headline, the essential facts, why it matters and the evidence behind it — in that order, because a reader who stops after the headline should still have the finding, and a reader who continues should be able to reach the raw material. A report organised by method, walking through what you did before saying what you learned, buries the point behind your process and is read as a defence of the work rather than an argument about the product.",
      "Write for the decision that is actually pending. If someone must choose what to build next month, the useful report tells them what changes and what stays, and says which findings are strong enough to act on now and which are not. A neutral summary of everything you learned, arranged by theme, hands the reader the analysis you were supposed to do. The strongest sentence in a research report is usually the one that names what should not be built.",
      "Limitations are a section, not an apology. Say who took part, how they were recruited, who was excluded, how many, over what period, and what the study cannot establish — the exclusion sentences you wrote when you chose your methods go here almost unchanged. Placed openly, they make the rest more credible, and they protect the finding later: a number quoted without its limits will eventually be used to justify something it cannot support, and the limitations section is the only thing that travels with it.",
      "Anonymise before sharing, and check it rather than assuming it. Names, workplaces, unusual job titles, distinctive circumstances and quotations that identify someone in a small community all need removing or blurring, and the assigned page on sharing does not cover this — the data-handling page does. Read the report as though you were the participant's colleague and check whether you could tell who it was. Then be honest about disagreement: if the findings contradict what the person receiving them believes, that is the whole value of the study, and it needs to be stated plainly and once, with the evidence, rather than hedged into invisibility.",
    ],
    misconception:
      "“A thorough report is a complete report.” Length reduces the chance of action. Six findings with evidence and one clear recommendation will change more than thirty pages, and the discipline of cutting is where you discover which findings you actually believe. Keep the full material available for anyone who asks; do not make reading it the price of understanding the study.",
    example:
      "A one-page report: three headline findings, each a sentence — “people confirm with someone else before paying, so the flow must survive being paused and resumed” — followed by two lines of evidence with participant counts, and one line on what it changes. Then a limitations paragraph: five participants recruited through two WhatsApp groups and one noticeboard in one neighbourhood, all comfortable reading English, nobody over sixty, one week in September; the study cannot say how common any of this is. Then one recommendation and one explicit non-recommendation: do not build the reminder feature that started this project, because nobody's difficulty was forgetting, and the evidence points elsewhere. The team disagreed with the last point, which is exactly why the study had been worth running, and the disagreement was resolved by a second observation rather than by seniority.",
    steps: [
      {
        minutes: 25,
        title: "Read the sharing guidance",
        text: "Read the assigned page and note its structure for presenting a finding. Re-read the anonymisation section of the data page; the sharing page does not cover it.",
      },
      {
        minutes: 30,
        title: "Write the findings",
        text: "Write each finding as headline, essential facts, why it matters and evidence. Cut to the number that fits one page or six slides — usually three to five.",
      },
      {
        minutes: 25,
        title: "Write the limitations",
        text: "Assemble who took part, recruitment route, exclusions, numbers, period and what the study cannot establish. Reuse your exclusion sentences from the method plan verbatim.",
      },
      {
        minutes: 25,
        title: "Recommend, and say what not to do",
        text: "Write one recommended next step tied to a specific finding, and one thing the evidence says not to build, with the reason. Note which findings are not yet strong enough to act on.",
      },
      {
        minutes: 15,
        title: "Anonymisation check and pause",
        text: "Read the report as though you were a participant's colleague. Remove anything identifying, including distinctive quotations. Then save it, and file the raw material where it can be produced if questioned.",
      },
    ],
    freeToolPath:
      "One page of plain text or Markdown, or a handful of slides in any free editor. A read-aloud version matters more than layout here: if you cannot say each finding in one sentence, the finding is not finished, and no amount of formatting will fix that.",
    deliverable:
      "A findings report of at most one page or six slides using the headline structure, a limitations section naming participants, route, exclusions, numbers and period, one recommendation, one explicit non-recommendation, and a completed anonymisation check.",
    check: [
      {
        question: "Why not organise the report by method?",
        answer:
          "Because it puts your process before the reader's decision and reads as self-justification. Method belongs in the limitations section, where it explains how much weight each finding can carry.",
      },
      {
        question:
          "The findings contradict what the person commissioning the work believes. How do you write that?",
        answer:
          "Once, plainly, with the evidence and its limits, and with what would change your mind. Hedging it into invisibility wastes the only thing the study was for, and repeating it aggressively converts a finding into an argument about people.",
      },
      {
        question:
          "You have a perfect quotation that would identify the participant to their colleagues. What happens to it?",
        answer:
          "It is paraphrased or dropped. You promised anonymity, and a small community needs very little to identify someone. The finding survives without the quotation; your promise does not survive using it.",
      },
    ],
    rubric: [
      "Findings lead with the headline and carry their evidence",
      "Limitations name participants, route, exclusions and period",
      "A recommendation and a non-recommendation are both stated",
      "An anonymisation check was completed before sharing",
    ],
    criteria: [
      {
        criterion: "Findings lead with the headline and carry their evidence",
        evidence:
          "Each finding written as headline, essential facts, why it matters and evidence, in that order, within the length limit.",
        levels: [
          "A narrative of what you did.",
          "Findings present but buried under method, or headlines without evidence.",
          "Every finding uses the structure and stays within the length limit.",
          "As adequate, and each headline is a complete claim that would still be understood if read alone.",
        ],
        remediation:
          "Rewrite each headline as one sentence that could stand alone in a message. Then check that the evidence line under it names counts and sources.",
        recheck: "The restructured report.",
      },
      {
        criterion: "Limitations name participants, route, exclusions and period",
        evidence:
          "A limitations section stating who took part, how they were found, who was missed, how many, over what period, and what cannot be established.",
        levels: [
          "No limitations, or a single line about a small sample.",
          "Some elements present, but the recruitment route or exclusions are missing.",
          "All elements present, reusing the exclusion sentences from the method plan.",
          "As adequate, and the section names which specific finding would be most likely to change with a different sample.",
        ],
        remediation:
          "Collect the exclusion sentences you wrote when choosing methods and the recruitment exclusion statement, and paste them in unchanged. They were written for this moment.",
        recheck: "The complete limitations section.",
      },
      {
        criterion:
          "A recommendation and a non-recommendation are both stated",
        evidence:
          "One next step tied to a named finding, and one thing the evidence says not to do, with its reason.",
        levels: [
          "No recommendation, or a list of everything that could be improved.",
          "A recommendation without a link to a specific finding.",
          "One recommendation tied to a finding and one explicit non-recommendation.",
          "As adequate, and the report separates findings strong enough to act on now from those that need more evidence first.",
        ],
        remediation:
          "Choose the single change you would make if you could make only one, and name the finding behind it. Then write what this evidence argues against, which is usually the idea the project started with.",
        recheck: "The recommendation, the non-recommendation and the strength split.",
      },
      {
        criterion: "An anonymisation check was completed before sharing",
        evidence:
          "A written confirmation that the report was read for identifying detail, with a note of what was removed or paraphrased.",
        levels: [
          "Names or identifying detail remain.",
          "Names removed but distinctive circumstances or quotations remain.",
          "A deliberate check was run and what was changed is recorded.",
          "As adequate, and the check was made against the standard of someone who knows the participant, not a stranger.",
        ],
        remediation:
          "Re-read every quotation and every description asking whether a colleague or family member would recognise the person. Paraphrase or remove anything that fails, and record what you changed.",
        recheck: "The checked report and the record of removals.",
      },
    ],
    portfolio:
      "The report is the case-study spine for the research-led project: a reviewer who reads this one page should understand what you learned, how much it can carry and what you would do next. Keep the raw material private and produce the anonymised report as the artefact.",
    resource: sharing,
    resources: [
      {
        ...sharing,
        section:
          "Who needs findings, the sharing formats, and the structure of a findings presentation: headline, essential facts, why it matters, supporting evidence.",
        purpose:
          "Supplies the reporting structure and the range of ways findings can reach people who will not read a document.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 24 May 2016. It does not cover anonymising what you share, so the check in this lesson comes from the data-handling page instead.",
        fallbackId: "R04",
      },
      {
        ...privacy,
        section:
          "The anonymisation section: removing direct identifiers and restricting non-anonymised material.",
        purpose:
          "Provides the anonymisation standard applied immediately before anything is shared.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. UK framing; the identifier principle transfers, and in a small community you should assume identification is easier than the page implies.",
        fallbackId: "R53",
      },
    ],
  },
];
