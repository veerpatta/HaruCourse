# Optional AI learning activities

Plan dated 13 September 2026. These are authoring examples, not deployed prompts or tested AI-app results. Apply with the [beginner experience plan](BEGINNER-EXPERIENCE-PLAN.md) and [all-lesson map](BEGINNER-LESSON-PLAN.md). The course must teach the concept without AI. The independent baseline has no AI or coaching.

## What the learner should see

An activity card at the moment it is relevant, not a generic list of AI tools at the end of a lesson:

> **Practise the difference between UI and UX with an AI app — optional**
>
> Have a short conversation about a made-up booking screen. You will explain one example yourself. You can stop after three questions, or earlier if you prefer.
>
> Copy the prompt below. Open a text-chat AI app you already use, start a new chat, paste into its message box and send. Reply to one question at a time. Come back here after the final example and improve your answer to “Describe the whole experience”.
>
> You do not need to paste private information or your whole worksheet. No paid feature or upload is needed. If the app is unavailable, use the example and practice question below instead. The course timer pauses while you are away; add study time manually if you want to record it.

These are proposed labels. On first use, show how to select/copy text and how to return on the same phone. If clipboard access fails, keep the prompt selectable and give manual copying instructions. Show one primary Copy prompt button, a visible full prompt preview, and one no-AI choice. Do not open another app automatically, put answers in a URL, or send learner data to a provider in the background.

Copying/opening/returning is not completion. No saved chat transcript is required. The return task normally improves an existing worksheet answer, using its original ID. A learner may skip the activity without an empty mandatory field or a progress penalty.

## Activity families for the all-lesson map

Each code below describes an authoring recipe. The published learner sees a meaningful activity title and a fully assembled lesson-specific prompt, not these codes. Select one appropriate activity, not all of them.

| Code | Activity | Conversation design | Learner-owned return | Equivalent without AI |
|---|---|---|---|---|
| E | Explain it through a familiar example | Short explanation, a contrasting example, one question at a time; allow preferred language | Explain the concept using a new example | Authored explanation, contrast pair and fresh practice case |
| B | Teach it back | Learner explains; AI asks about one unclear link, offers a hint, then checks a new case | Revise the explanation and apply it | Compare own explanation with a small checklist and revealable rationale |
| M | Catch the mistake | One deliberately flawed fictional statement; learner spots it and explains; AI reveals the repair | Correct a comparable issue in their own work | Authored flawed statement, hint and explanation |
| R | Rehearse a conversation | Clearly fictional participant, engineer, stakeholder or interviewer; respond one turn at a time | Improve one question, clarification or response | Scripted exchange with decision points and feedback; no real participant needed |
| D | Change one constraint | Teach the constraint, change one thing in the case, ask for the learner’s tradeoff | One decision plus what it sacrifices | Two constraint cards and an authored reasoning comparison |
| T | Predict, try, explain a tool action | Use the supplied verified controls; ask what will happen before one local action | Actual observed result and recovery note | Verified walkthrough and known-good starter; tool work still happens locally |
| N | Make the numbers concrete | Tiny labelled synthetic dataset; show one calculation, ask for the next and explain the limit | Own calculation and a bounded interpretation | Worked arithmetic/table plus a second example with revealable solution |
| C | Critique against a stated criterion | Use only a short non-sensitive attempt; ask for evidence, identify one possible gap | Accept or reject the critique with a reason and revise if needed | Self-review checklist, adequate sample and one counterexample |
| S | Check a current claim | Find or inspect one official dated source; distinguish verified fact and unknown | Source, check date and what the source actually supports | Direct official-source lookup and supplied claim-verification checklist |
| P | Plan the next independent step | Ask what the learner has and what blocks them; clarify a process, never choose their solution | Learner’s own next action and evidence needed | Readiness checklist and small authored examples from a different project |

R is rehearsal, never research or collaboration evidence. T cannot inspect a screen without a description and must not guess controls; it does not need an upload. N calculations must be independently checked. C cannot certify quality from a description. S cannot promise current information without a retrieved source. P in m18 must not supply the independent project’s problem, synthesis, solution or case study.

## The author’s prompt contract

Each final prompt must include the actual lesson title, one learning goal, plain definition(s), original supplied practice material, activity behaviour, likely misconception, help for a stuck learner, evidence boundary, stop instruction and exact return task. Keep it short enough to copy comfortably on a phone. The full lesson is not pasted into a chat; use only the small author-written context needed to practise.

Use these common instructions inside each authored prompt:

> Help me learn, using the course context below. Use plain language, define unfamiliar words before using them, and keep each reply short. Ask only one question per turn and wait. Let me answer “I don’t know”: then show a smaller example and give one hint. After two unsuccessful tries, explain the idea gently and offer a new small example. Do not just repeat the same question. If I ask for the final assignment, help me reason through a different example instead. Do not give a score or say I have mastered the topic. Use only supplied facts; label invented examples fictional. Do not request private data or uploads. If asked for current facts or controls you cannot verify, say so. Stop after the stated number of practice turns, or whenever I say stop, and give the stated return task.

Authors add the selected activity instructions and real context before publishing. Do not make the learner fill author placeholders. A small learner-input area is appropriate only when the activity needs their own first attempt; say exactly what may be pasted and allow a supplied fictional attempt instead. Do not require an attempt before an explanation/help activity.

### Example 1 — learn UI and UX through a booking story

Ready-to-copy proposed prompt for `week1-day1-v1`:

```text
Help me understand UI, UX and product design as a beginner. Be a patient tutor. Use simple English unless I ask for another language; retain and explain the technical English words. Ask one question at a time and wait. Keep replies under about 120 words.

Course context: UI (user interface) is what a person uses on the screen, including words, controls and layout. UX (user experience) is what happens as they try to finish a task, including uncertainty and waiting. Product design decides what should help the person and shapes a workable service.

Fictional practice case: I want a Saturday pottery class. The class card has a photo and a Reserve button but no price. The next screen says ₹800, materials included. We do not know why anyone else leaves the page.

First explain one distinction using this case. Then ask me to explain whether showing the total price earlier changes the interface, the experience, or both, and why. Do not force a false either/or answer. Wait for me.

Give a hint if I say “I don’t know”. After two stuck attempts, explain and try a simpler question. Next use a different fictional situation, such as finding a library book, and ask me to apply the distinction. Do not invent evidence about real people. Do not write my course worksheet for me or give a score.

Ask no more than three practice questions. Then stop. Ask me to close the chat and return to the course answer “Describe the whole experience”, writing one sentence in my own words with an example. I can stop earlier.
```

Return mapping: existing `define-ux` field. No-AI version: show the booking example with explanation, then a library search with clear buttons but an unexplained wait; ask what belongs to the interface and what affects the experience. Reveal that a visible loading message is an interface element which can reduce uncertainty during the experience. Accept overlap explained well, not a rigid vocabulary sort.

### Example 2 — evidence detective

Ready-to-copy proposed prompt for the Lesson 1 evidence activity:

```text
Run a short evidence-detective activity with me. I am learning to distinguish what I directly saw, what I guessed, and what I do not yet know. Use ordinary language. Explain any new term. Keep replies short and ask one question at a time.

All material here is fictional practice. A class results screen shows names and photos but no price. Its details screen shows ₹800. No participants were observed.

Teach me these labels first: observed = directly seen or done; inferred = a possible explanation; unknown = a question I cannot answer yet.

Show me this flawed claim: “Customers leave because the class is too expensive.” Ask what we actually know and what is only a possible explanation. Wait for my answer, give one hint if needed, then explain the distinction. Do not invent customer quotes or results.

Next ask me to rewrite the claim using only what is supplied. Then ask what we would need to find out to check the explanation. If I remain stuck after two tries, show a different small example and explain it. Do not produce five answers for my assignment.

Stop after these three questions. Tell me to return to my first evidence entry in the course, check its label, and explain my change using my own walkthrough. Do not claim I have completed the lesson or mastered research.
```

Return mapping: `entry-1-label` and, when needed, `entry-1-check`; preserve the original claim in `entry-1-saw` unless the learner chooses to repair it. No-AI version: present the same flawed claim with a hint and explanation, then ask for a correction based on a second supplied screen. Fictional screens remain fictional even after AI discusses them.

### Example 3 — interview rehearsal without fake research

Ready-to-copy proposed prompt for `week1-day3-v1`:

```text
Help me practise asking neutral interview questions. This is a simulation, not research. Use simple language, short replies and one turn at a time. Do not score me or invent real participant evidence.

First explain: a neutral question leaves room for an answer I did not expect. “Tell me about the last time you booked a class” is more open than “Was booking confusing?” because the second suggests a judgement.

Play a fictional person who booked a cooking class. Keep these facts fixed: you wanted a weekend class; you looked for the date and price; you asked a friend whether materials were included. If I ask for a detail outside this fictional profile, say that detail is not supplied. Do not invent facts about my actual project.

Ask me for my first interview question and wait. Reply as the fictional person. After my second question, briefly step out of role and explain whether either question suggested its own answer. Ask me to rewrite one question. If I am stuck, give a hint; after two tries, demonstrate a different neutral question and let me try again.

Stop after two interview questions and one rewrite. Remind me that this practises my questioning, not my understanding of real users. Ask me to return to the course and write one follow-up question I could ask later. Do not supply interview findings or a completed research report.
```

Return mapping: existing `followups-next`, clearly noting rehearsal if the learner references the chat. No-AI version: two scripted interviewer questions and fictional replies, with an authored explanation of which question leads; the learner rewrites one and creates their own follow-up. It does not fill participant-only fields.

### Example 4 — browser explanation before technical practice

Ready-to-copy proposed explanation prompt for `m12-l01-v1`:

```text
Help me understand how a page appears after I open a link. I am a product-design learner, not a software engineer. Use short explanations and define browser, server and request before using them. Ask one question at a time and wait.

Use this simplified learning sequence: the browser asks for a page, receives its document, reads it, asks for things the document needs such as images or styles, draws the page, and enables interactions. This is a teaching model: requests and drawing can overlap, and saved copies can change what gets requested.

Explain the sequence using a fictional class-booking page. Ask me what might happen if the words arrive before the photo. After my answer, explain and ask what a designer could do to keep the page useful. Give a hint if I am stuck; after two tries show a smaller example. Do not guess the controls in my browser, invent timing measurements or tell me to install software.

After two questions, ask me to explain the sequence back using my own words. Then stop and tell me to return to the course answer “The stages of a page load, in your own words”. Actual browser measurements must come from the course's verified walkthrough on my computer, not from this chat.
```

Return mapping: existing `stages`. No-AI version: original labelled sequence diagram and a supplied “text arrives before photo” example. The learner explains the sequence, then follows the actual local measurement task. The explanation does not substitute for measurements or settle what happened on their device.

## Keeping AI bounded and useful

Use a conversational budget such as two to four practice questions and an optional author-estimated five to ten minutes. These are stop suggestions, never a countdown or completion requirement. More text, stronger-sounding language and model praise do not establish learning.

If the AI gives a wall of text, the learner can paste: “Explain only the next idea in simple words, then ask me one question and wait.” If it gives the assignment answer: “Use a different fictional example and let me decide.” If it guesses a tool control: return to the course’s verified walkthrough. If access is limited, the connection fails or the learner dislikes chat, the local activity is complete enough to continue.

For current information, the author should include one precise question and an official source route. Request source title, exact link, relevant date and what the source supports. If the app cannot browse, ask it to identify what needs checking, not to assert current facts. The learner opens the source themselves and records verified/unverified. An AI-created citation is a lead, not evidence; this does not automatically update the course.

## Authoring and validation checklist

- Place the activity after essential teaching; pair it with the lesson’s actual misconception and a different transfer case.
- Fill all context and fixed fictional facts before publishing; check that no response requires an undisclosed attachment, paid feature, real participant or account the learner does not have.
- Name the visible return answer and bind it to an existing field ID with the same meaning. Keep the revision learner-owned; do not auto-import chat answers or mark AI use as required work.
- Provide the entire no-AI explanation/example/practice/feedback path locally. “Ask someone” or “search online” is not an equivalent fallback.
- Test correct, partial, wrong, “I don’t know”, preferred-language, “give me the answer”, unsupported-current-claim and early-stop conversations. Check that misleading feedback is corrected and that the learner is not trapped in endless questions.
- Check actual prompt copying and returning at phone widths, manual-copy fallback, keyboard use and offline course access. Test prompt wording in independent AI apps when available, recording discrepancies rather than assuming identical behaviour.
- Assess the learner’s fresh explanation and application without the chat visible. Do not use AI praise, completion of the conversation, time or self-confidence as mastery evidence.

Optional return metadata, if later found necessary, must be additive, bounded and stored in the existing account-owned record with documented backup/conflict handling. Do not add a transcript store or mandatory reflection form to implement this plan. No AI provider integration, API cost or message sending is part of this Markdown milestone.
