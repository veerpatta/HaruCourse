import type { Lesson } from "./lessons";
// Module 6 turns the research from m05 into a structure. The through-line is
// that information architecture is judged by whether people find things, not
// by whether the diagram is tidy, so every lesson either produces evidence
// about findability or states plainly that it has produced none. The two
// evaluation lessons are run on paper: the platforms the assigned articles
// recommend are paid, and a printed hierarchy read aloud tests the same thing.
const cardSort = {
  title: "NN/g: card sorting",
  id: "R09",
  url: "https://www.nngroup.com/articles/card-sorting-definition/",
};
const structure = {
  title: "W3C: page structure",
  id: "R10",
  url: "https://www.w3.org/WAI/tutorials/page-structure/",
};
const treeTest = {
  title: "NN/g: tree testing",
  id: "R60",
  url: "https://www.nngroup.com/articles/tree-testing/",
};
const treeResults = {
  title: "NN/g: interpreting tree test results",
  id: "R61",
  url: "https://www.nngroup.com/articles/interpreting-tree-test-results/",
};
const findabilityTests = {
  title: "NN/g: four tests for low findability",
  id: "R62",
  url: "https://www.nngroup.com/articles/navigation-ia-tests/",
};
const heuristics = {
  title: "Nielsen: ten usability heuristics",
  id: "R02",
  url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
};
const laws = {
  title: "Laws of UX",
  id: "R31",
  url: "https://lawsofux.com/",
};
const needs = {
  title: "GOV.UK: start by learning user needs",
  id: "R35",
  url: "https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs",
};
const intervals = {
  title: "NN/g: confidence intervals and margins of error",
  id: "R37",
  url: "https://www.nngroup.com/articles/confidence-interval/",
};
const participants = {
  title: "GOV.UK: finding user research participants",
  id: "R52",
  url: "https://www.gov.uk/service-manual/user-research/find-user-research-participants",
};
const errors = {
  title: "NN/g: preventing user errors",
  id: "R36",
  url: "https://www.nngroup.com/articles/user-mistakes/",
};
const i18n = {
  title: "W3C: localization versus internationalization",
  id: "R42",
  url: "https://www.w3.org/International/questions/qa-i18n",
};
const indiaGuidelines = {
  title: "Guidelines for Indian Government Websites and Apps",
  id: "R43",
  url: "https://guidelines.india.gov.in/",
};
const easyChecks = {
  title: "W3C WAI: easy checks",
  id: "R41",
  url: "https://www.w3.org/WAI/test-evaluate/preliminary/",
};
export const module6: Lesson[] = [
  {
    id: "m06-l01-v1",
    module: "m06",
    week: 6,
    day: 1,
    level: 2,
    areas: [5],
    title: "Inventory what exists and what it is called",
    objective:
      "Produce a content inventory of at least forty items for one real product area, each row carrying its current label, what it actually is, who needs it and whether anything makes it findable today.",
    bringForward:
      "Your m05 findings, your marked experience map and your raw interview notes. The notes matter most here, because they contain the words people used for things — which is rarely what the product calls them.",
    why: "You cannot organise what you have not listed. Every structure argument that goes in circles — should this be under Help or under Account? — is usually an argument between two people holding different mental lists, and the argument ends the moment the list is on the table.",
    teach: [
      "An inventory is a flat list of everything a person might need: pages, but also the answers buried inside pages, the things only available by asking someone, the PDF nobody has opened since 2019, and the piece of information that exists only in an email confirmation. Product teams habitually inventory their own pages and stop, which produces a structure that organises the website rather than the knowledge, and leaves the most-asked question living in a support reply.",
      "Record three things about every item, and the third is the one people skip. What it is currently called, in the product's exact words. What it actually is, in one plain sentence written by you. And who needs it and when — because an item nobody in your research ever needed is a candidate for removal, and removing things is the cheapest structural improvement there is.",
      "Note how each item is reachable today: in the main navigation, only from one page deep inside, only by search, only by asking. This column is where the real problems announce themselves. A crucial item reachable only from the confirmation email is not an information architecture problem you can fix by renaming a menu, and knowing that before you draw a sitemap saves you drawing the wrong one.",
      "Forty items is a threshold, not a target. Below about forty, any structure looks fine and the exercise teaches nothing; a real product area has hundreds. If your practice product is small, extend the inventory to everything a person needs across the whole task — including the things currently supplied by a person, a phone call or a WhatsApp message, which is the ordinary situation for a small business in India and elsewhere, and which the eventual structure has to account for rather than ignore.",
    ],
    misconception:
      "“The inventory is the boring part before the real design work.” It is where most of the findings are. The duplicate that says two different things, the item that exists in three places with three names, the answer that lives only in someone's head — none of those are visible in a sitemap, and all of them are visible in a flat list with a plain-language column.",
    example:
      "An inventory of a class provider's information reached fifty-three items. Eleven were pages. The rest included: what to bring, which existed as a sentence inside a PDF and as a different sentence in the confirmation email; the cancellation policy, which existed only in a WhatsApp reply the owner typed out each time; three items called “Details” meaning three unrelated things; and a “Resources” page nobody in five interviews had ever mentioned. Before any structure was drawn, two decisions were already obvious: the two versions of what to bring had to be reconciled, and the cancellation policy had to exist somewhere a person could reach without asking.",
    steps: [
      {
        minutes: 20,
        title: "Set the boundary",
        text: "Read the assigned needs page. Write which product area you are inventorying and where its edges are, then list the three tasks from your research that this area has to support.",
      },
      {
        minutes: 40,
        title: "List everything",
        text: "Work through the product, the support material, your notes and any messages, adding one row per item: current label, what it actually is, who needs it and when. Do not organise anything yet.",
      },
      {
        minutes: 25,
        title: "Add the reachability column",
        text: "For each item, record how a person reaches it today: main navigation, one page deep, search only, email only, or by asking a human. Mark the items your research showed people actually needed.",
      },
      {
        minutes: 20,
        title: "Find the collisions",
        text: "Mark duplicates, contradictions, items sharing a label and items with no owner. Write a one-line note for each collision; several will turn out to be content problems rather than structure problems.",
      },
      {
        minutes: 15,
        title: "Count and pause",
        text: "Count the items, the collisions and the items nobody needed. Save the inventory as a table; every later lesson in this module works from it.",
      },
    ],
    freeToolPath:
      "A spreadsheet if you have one, or a plain text table, or index cards — cards are genuinely better for the next four lessons because you will be sorting them by hand. Write each item on a card now and you will not have to transcribe later. No IA or content-audit tool is required.",
    deliverable:
      "A content inventory of at least forty items with current label, plain-language description, who needs it, and how it is reachable today; a marked list of collisions; and counts of items, collisions and items nobody needed.",
    check: [
      {
        question: "Why inventory things that are not pages?",
        answer:
          "Because people need answers, not pages, and the most-needed answer is often the one that lives in an email, a PDF or a person's head. A structure built only from existing pages preserves exactly the gap that sends people to ask someone.",
      },
      {
        question:
          "You find one item with three different names in three places. Is that an IA problem?",
        answer:
          "Partly. The structural half is that three routes exist to what should be one thing. The content half is that the three say different things, and no menu design fixes a contradiction — that needs a decision about which is true.",
      },
      {
        question: "What does the reachability column buy you?",
        answer:
          "It separates problems of naming and grouping, which you can fix by restructuring, from problems of absence, which you cannot. An item reachable only by asking a person is missing, not misfiled.",
      },
    ],
    rubric: [
      "The inventory covers answers, not only pages",
      "Every item carries a plain-language description",
      "Reachability today is recorded per item",
      "Collisions are identified and counted",
    ],
    criteria: [
      {
        criterion: "The inventory covers answers, not only pages",
        evidence:
          "At least forty items including things that live in emails, documents, messages or people's heads, not merely a page list.",
        levels: [
          "A list of existing pages.",
          "Mostly pages, with a few embedded items.",
          "Forty or more items including non-page sources of answers.",
          "As adequate, and the inventory names at least one thing people need that exists nowhere at all.",
        ],
        remediation:
          "Take the three tasks from your research and walk each one, writing down every question a person has to answer to finish it. Add every answer that is not already a row.",
        recheck: "The extended inventory with its new rows marked.",
      },
      {
        criterion: "Every item carries a plain-language description",
        evidence:
          "A one-sentence description per item written in your own words, distinct from the product's label.",
        levels: [
          "Labels only.",
          "Descriptions that repeat the label in different words.",
          "Each item has a plain sentence saying what it actually is.",
          "As adequate, and at least one description reveals that the label is wrong for what the item contains.",
        ],
        remediation:
          "For each row, complete “this tells someone …”. Any row you cannot complete either needs opening and reading, or does not contain what its label promises.",
        recheck: "The described inventory.",
      },
      {
        criterion: "Reachability today is recorded per item",
        evidence:
          "A route recorded for every item, with the ask-a-human and email-only cases identified.",
        levels: [
          "No reachability recorded.",
          "Recorded for navigation items only.",
          "Every item has a route, including the ones only reachable by asking.",
          "As adequate, and the items your research showed people needed are cross-marked, so the gap between needed and reachable is visible at a glance.",
        ],
        remediation:
          "Go through the inventory pretending you have never used the product and try to reach each item. Record what you actually had to do, not what you know.",
        recheck: "The inventory with routes and the needed cross-marks.",
      },
      {
        criterion: "Collisions are identified and counted",
        evidence:
          "A marked list of duplicates, contradictions and shared labels, with counts.",
        levels: [
          "No collision analysis.",
          "Duplicates noted informally without counts.",
          "Collisions marked and counted, each with a one-line note.",
          "As adequate, and each collision is classified as a structure problem or a content problem, with the reason.",
        ],
        remediation:
          "Sort your inventory by label and read for repeats, then sort by description and read for the same thing under different names. Both passes find different collisions.",
        recheck: "The collision list with counts and classifications.",
      },
    ],
    portfolio:
      "Project evidence for the research-led project and the least glamorous artefact in this module. Include it as a summarised table or a photograph of the cards; a reviewer who sees a real inventory knows the structure that follows was not invented in an afternoon.",
    resource: needs,
    resources: [
      {
        ...needs,
        section:
          "The section on needs across the whole journey, including the needs of the people who staff the service.",
        purpose:
          "Keeps the inventory anchored to what people need to accomplish rather than to what the product currently publishes.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is about need statements rather than content inventories, so the inventory procedure here is the course's own.",
        fallbackId: "R08",
      },
      {
        ...cardSort,
        section:
          "The section on choosing which content items to use as cards, read now so your inventory rows are usable as cards in lesson 5.",
        purpose:
          "Sets the granularity of an item so the inventory can be sorted later without being rewritten.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. The full method is used in lesson 5; here you need only the guidance on what makes a good item.",
        fallbackId: "R10",
      },
    ],
  },
  {
    id: "m06-l02-v1",
    module: "m06",
    week: 6,
    day: 2,
    level: 2,
    areas: [5],
    title: "Labels in the words people actually use",
    objective:
      "Produce a labelling table for at least fifteen items, each showing the current label, the words participants used, the label you propose and the evidence for it, with every guessed label marked as a guess.",
    bringForward:
      "Your inventory and your m05 interview notes. The notes are the source of vocabulary; a label you invented at your desk is a hypothesis and must be marked as one.",
    why: "Most findability failures are naming failures. The structure can be right and the person still fails, because the word on the menu is the word your organisation uses internally, and they were looking for the word they use at home.",
    teach: [
      "The second usability heuristic is the whole of this lesson: speak the user's language, with words and concepts familiar to them, rather than internal jargon. The trap is that internal words feel natural to you precisely because you use them daily, so the test can never be your own judgement. It has to be evidence — what your participants called the thing, unprompted, before you offered them a word.",
      "Three kinds of bad label recur. The internal word names a department or a system: “Resources”, “Portal”, “My Account”. The clever word is invented for character and is unsearchable: “Toolbox”, “Hub”, “Journey”. And the abstract word is technically accurate and empty: “Information”, “Details”, “More”. Each fails the same test — a person scanning for a specific thing cannot tell whether their thing is inside it.",
      "Good labels are usually longer and duller than the ones a team enjoys writing. “What to bring” beats “Preparation”. “Cancel or change a booking” beats “Manage”. Length costs a little space; ambiguity costs the person a wrong click, a back button and a small loss of trust — and if they were unsure of the site to begin with, they may not come back at all.",
      "Harvest vocabulary from your notes systematically rather than from memory. Read every interview note and write down each noun a participant used for something in your inventory, in their exact words, with who said it. You will find that participants disagree, and the disagreement is information: two words for one thing often means two audiences, and sometimes it means the thing itself is two things.",
    ],
    misconception:
      "“We should use the term the industry uses, so people learn the right word.” People do not arrive to learn your vocabulary; they arrive to do something. Where an unfamiliar term is genuinely unavoidable — a legal or regulatory word, a term used everywhere in the field — pair it with the familiar word rather than choosing between them, and put the familiar one first.",
    example:
      "A menu item called “Resources” contained what to bring, directions and the cancellation policy. Across five interviews nobody said “resources” once. They said “the list of things I need”, “where it is”, and “what happens if I can't come”. The label became three separate items using close to those words. One label stayed contested: two participants called the session a “class” and two called it a “workshop”, which turned out to track whether they had attended before — so the site used “class” in navigation, where first-timers are, and kept “workshop” in the descriptions, where returning attendees read. That decision was recorded as a guess to be tested, because four people is not a vocabulary study.",
    steps: [
      {
        minutes: 20,
        title: "Read the heuristic and the sorting guidance",
        text: "Read the assigned heuristic on matching the user's language and the card-sorting notes on labels. Write the three worst labels in your inventory and why each fails.",
      },
      {
        minutes: 35,
        title: "Harvest vocabulary",
        text: "Read every interview note and record each word participants used for things in your inventory, verbatim, with who said it. Do not paraphrase into your own vocabulary as you go.",
      },
      {
        minutes: 30,
        title: "Build the labelling table",
        text: "For at least fifteen items, write current label, participant words, proposed label and the evidence. Where no participant ever mentioned the item, write your proposed label and mark it a guess.",
      },
      {
        minutes: 20,
        title: "Resolve or record the conflicts",
        text: "Where participants disagreed, decide what the disagreement means: two audiences, two things, or too little evidence. Record the decision and what would settle it.",
      },
      {
        minutes: 15,
        title: "Read it cold and pause",
        text: "Read only your proposed labels, as a stranger scanning a menu. Mark any label that leaves you unable to say what is inside. Save the table.",
      },
    ],
    freeToolPath:
      "A four-column table on paper or in a text file. Write the proposed labels onto the cards from lesson 1, since the card sort in lesson 5 must use the items rather than your new labels — keep the new labels on the back so you do not lead your participants.",
    deliverable:
      "A labelling table of at least fifteen items with current label, verbatim participant vocabulary, proposed label and evidence; guessed labels marked as guesses; and a written note per vocabulary conflict.",
    check: [
      {
        question: "Why is “Details” a poor label?",
        answer:
          "Because it is accurate about everything and specific about nothing. A person scanning for one thing cannot tell whether their thing is inside, so it converts a scan into a gamble.",
      },
      {
        question:
          "An industry term is unavoidable. What do you do with the familiar word?",
        answer:
          "Pair them, with the familiar word first: the familiar word gets people to the right place, and the industry term teaches them the vocabulary they will meet elsewhere. Choosing only one loses either findability or accuracy.",
      },
      {
        question:
          "Two participants used different words for the same thing. What is the finding?",
        answer:
          "That the vocabulary is not settled, and possibly that you have two audiences. It is recorded as a conflict with a way to settle it, not resolved by picking the word you prefer.",
      },
    ],
    rubric: [
      "Vocabulary is harvested verbatim from real notes",
      "Proposed labels are specific enough to scan",
      "Guessed labels are marked as guesses",
      "Vocabulary conflicts are interpreted, not resolved by preference",
    ],
    criteria: [
      {
        criterion: "Vocabulary is harvested verbatim from real notes",
        evidence:
          "Participant words recorded exactly as said, attributed to a participant, for the items where evidence exists.",
        levels: [
          "Labels proposed from the designer's own vocabulary only.",
          "Some participant words, paraphrased or unattributed.",
          "Verbatim words with attribution wherever evidence exists.",
          "As adequate, and the table notes where a participant hesitated or corrected themselves, which is often where the concept is unclear.",
        ],
        remediation:
          "Go back through the notes with the inventory beside you and mark every noun a participant used for a thing on your list. Copy them exactly, including the awkward ones.",
        recheck: "The vocabulary column with attributions.",
      },
      {
        criterion: "Proposed labels are specific enough to scan",
        evidence:
          "Labels that let a stranger say what is inside, with no internal, clever or abstract words surviving.",
        levels: [
          "Internal or invented labels retained.",
          "Improved, but at least one abstract catch-all remains.",
          "All fifteen are specific enough to predict their contents.",
          "As adequate, and at least one label was made longer on purpose with the trade-off recorded.",
        ],
        remediation:
          "For each label, write what a person would expect to find under it. Where your answer and the actual contents differ, the label is wrong, not the contents.",
        recheck: "The label table with the expectation column.",
      },
      {
        criterion: "Guessed labels are marked as guesses",
        evidence:
          "Every label with no participant evidence behind it is visibly marked as a guess.",
        levels: [
          "Guesses and evidenced labels are indistinguishable.",
          "Some marking, applied inconsistently.",
          "Every unevidenced label is marked.",
          "As adequate, and the guesses are listed as the priority items for the card sort and tree test in the coming lessons.",
        ],
        remediation:
          "Work down the evidence column. Any cell you cannot fill with a participant's word or a quotation makes that row a guess.",
        recheck: "The marked table with the guess list.",
      },
      {
        criterion:
          "Vocabulary conflicts are interpreted, not resolved by preference",
        evidence:
          "Each conflict carries a written interpretation — two audiences, two things, or insufficient evidence — and what would settle it.",
        levels: [
          "Conflicts resolved silently by choosing one word.",
          "Conflicts noted but resolved by the designer's taste.",
          "Each conflict is interpreted and its settling evidence named.",
          "As adequate, and one conflict is handled by using different words in different places, with the reason recorded.",
        ],
        remediation:
          "For each conflict, look at who used which word and what else you know about them. If nothing distinguishes them, say so and mark it unsettled rather than deciding.",
        recheck: "The conflict notes.",
      },
    ],
    portfolio:
      "Portfolio material, and unusually persuasive: a before-and-after label table with verbatim quotations is concrete evidence that your decisions came from people. Keep the participant labels anonymous.",
    resource: heuristics,
    resources: [
      {
        ...heuristics,
        section:
          "Heuristic 2, match between the system and the real world, plus heuristic 6, recognition rather than recall, read for their bearing on naming.",
        purpose:
          "States the standard this lesson applies and connects labels to the memory demand they place on a reader.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics are review shorthand, not evidence: a label that violates one is a hypothesis about a problem, and your participants' words are the evidence.",
        fallbackId: "R11",
      },
      {
        ...cardSort,
        section:
          "The passages on what card sorting reveals about the words and groupings people bring.",
        purpose:
          "Explains why participant vocabulary, not the team's, is the input to a structure.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. Small sorts are exploratory; this lesson uses the article's reasoning, not its analysis, which arrives in lesson 6.",
        fallbackId: "R10",
      },
    ],
  },
  {
    id: "m06-l03-v1",
    module: "m06",
    week: 6,
    day: 3,
    level: 2,
    areas: [5],
    title: "Organisation schemes and where they break",
    objective:
      "Group your inventory under two different organisation schemes, write the specific case where each one breaks, and decide which to carry forward with the trade-off recorded.",
    bringForward:
      "The inventory and the labelling table. You are grouping the items, not the labels: a group is a claim about what belongs together, and it can be right while the label on it is wrong.",
    why: "Every structure is a choice among several defensible ones, and the argument only ends when you compare them on the tasks they have to support. Producing one structure and defending it is how teams spend a fortnight discovering the obvious alternative.",
    teach: [
      "Content can be organised by several schemes and they are not equally exact. By subject or topic is the common default and the most arguable, because subjects overlap. By task — what the person is trying to do — usually beats it for products, because people arrive with an intent rather than a curiosity. By audience is attractive and dangerous: it only works when people can reliably identify which audience they are, which they frequently cannot. Alphabetical, chronological and geographic are exact schemes: everyone agrees where an item goes, which makes them excellent for reference material and useless for helping someone who does not yet know the name of what they need.",
      "Grouping is not free of cognition. Items in one visual group are read as related, and a group of nine unlabelled options is harder to scan than three groups of three — but chunking has limits, and the popular version of the rule about seven items is stated far more confidently than its evidence supports. Use grouping to reduce scanning effort, not to hit a number, and check the assigned pages on grouping and cognitive load rather than reciting a limit.",
      "Every scheme breaks somewhere, and naming the breakage is the actual work. A task scheme breaks on items belonging to two tasks. An audience scheme breaks on the person who is both a parent and an attendee. A topic scheme breaks on the item everyone looks for under a different topic. Write the specific item and the specific person for whom your scheme fails, rather than conceding in general that no scheme is perfect.",
      "Where an item genuinely belongs in two places, you have three options and should choose deliberately. Duplicate it, and accept the maintenance risk that the two copies diverge — which they will. Cross-link it, and accept an extra click. Or restructure so the collision disappears, which is usually right when the same collision keeps recurring. What you must not do is put it in one place, know it is wrong, and hope.",
    ],
    misconception:
      "“A good structure has no overlaps.” Real information overlaps, and a structure that eliminates every overlap has usually done so by inventing categories that match nothing in anyone's head. The goal is that a person looking for a specific thing has an obvious first place to look — not that a taxonomist could defend the partition.",
    example:
      "The class provider's fifty-three items were grouped twice. By topic: Classes, Booking, Practical information, About us — which broke immediately, because “what to bring” is practical information that people look for while reading about a class, and the cancellation policy sat under Booking where nobody in the research had ever gone looking for it. By task: Choose a class, Get ready for a class, Change or cancel, Get help — which broke on “what to bring”, needed both while choosing and while getting ready. The task scheme was carried forward, with “what to bring” cross-linked from the class page rather than duplicated, and the trade-off — an extra click for people who look for it from the class listing — was written down so the tree test in lesson 7 could check whether it mattered.",
    steps: [
      {
        minutes: 25,
        title: "Read on grouping and load",
        text: "Read the assigned pages on proximity, common region and cognitive load. Note what each says and, for the grouping laws, note that the source publishes no limits — the caution is the course's.",
      },
      {
        minutes: 30,
        title: "Group by scheme one",
        text: "Sort your cards into a task-based scheme. Name each group from what fell into it. Record any item you hesitated over for more than a few seconds.",
      },
      {
        minutes: 30,
        title: "Group by scheme two",
        text: "Re-sort the same cards under a different scheme — topic, audience or an exact scheme where it suits the material. Record the hesitations again.",
      },
      {
        minutes: 20,
        title: "Break both on purpose",
        text: "For each scheme, write the specific item and the specific person for whom it fails. Then decide each collision: duplicate, cross-link or restructure, with the reason.",
      },
      {
        minutes: 15,
        title: "Choose and record, then pause",
        text: "Choose the scheme you will carry forward. Write what you gave up and which tasks the loss affects, so the tree test can look for it. Save both groupings.",
      },
    ],
    freeToolPath:
      "The cards from lesson 1 on a table, photographed after each scheme. Physical sorting is faster than any tool and the photograph is your record. If you must work digitally, an indented list in a text file is enough; avoid diagram tools at this stage, since they make a structure look finished before it has been tested.",
    deliverable:
      "The same inventory grouped under two named schemes with photographs or lists of each, a written breakage case per scheme naming an item and a person, a decision per collision, and a recorded choice with its trade-off.",
    check: [
      {
        question: "Why is organising by audience risky?",
        answer:
          "Because it requires people to classify themselves correctly before they can find anything, and many cannot: they are new and returning, or a parent and an attendee. When self-identification fails, the whole structure is unusable for them.",
      },
      {
        question:
          "An item genuinely belongs in two groups. What are your options?",
        answer:
          "Duplicate it and accept that the copies will drift apart, cross-link it and accept an extra click, or restructure so the collision stops recurring. Choosing deliberately and recording why is the requirement; hoping is not an option.",
      },
      {
        question: "Should you keep every group to about seven items?",
        answer:
          "No. Grouping should reduce scanning effort for real tasks, and the popular seven-item rule is stated far more confidently than its evidence supports. Judge by whether a person can scan the group and predict what is inside.",
      },
    ],
    rubric: [
      "Two genuinely different schemes were built from the same items",
      "Each scheme's breakage names an item and a person",
      "Collisions are decided deliberately",
      "The chosen scheme records what was given up",
    ],
    criteria: [
      {
        criterion: "Two genuinely different schemes were built from the same items",
        evidence:
          "Two complete groupings of the same inventory under named schemes, with group names derived from contents.",
        levels: [
          "One structure only.",
          "Two variants of the same scheme with different names.",
          "Two genuinely different schemes, each complete.",
          "As adequate, and the second scheme was built without looking at the first, then compared.",
        ],
        remediation:
          "Take the scheme you built and ask what the material would look like organised by what people are doing rather than what things are about. Re-sort completely rather than editing.",
        recheck: "The two groupings.",
      },
      {
        criterion: "Each scheme's breakage names an item and a person",
        evidence:
          "A specific failing case per scheme: this item, for this kind of person, in this situation.",
        levels: [
          "No breakage identified, or a general admission of imperfection.",
          "A breakage named abstractly without an item or a person.",
          "Both schemes have a concrete failing case.",
          "As adequate, and one breakage is traced to a real participant from your research rather than a hypothetical person.",
        ],
        remediation:
          "Take your three research tasks and walk each through both schemes. The first place you hesitate is the breakage; write down what you were holding and who you were being.",
        recheck: "The two breakage cases.",
      },
      {
        criterion: "Collisions are decided deliberately",
        evidence:
          "Each item belonging in two places carries a decision — duplicate, cross-link or restructure — with a reason.",
        levels: [
          "Collisions unresolved or silently placed.",
          "Decisions made without reasons.",
          "Every collision has a decision and a reason.",
          "As adequate, and a recurring collision is treated as a signal to restructure rather than patched again.",
        ],
        remediation:
          "List every item you hesitated over. For each, write the two candidate homes and choose one of the three options in writing.",
        recheck: "The collision decisions.",
      },
      {
        criterion: "The chosen scheme records what was given up",
        evidence:
          "A written statement of the trade-off and which tasks it affects, framed so a later test could detect it.",
        levels: [
          "A choice with no trade-off recorded.",
          "A trade-off stated in general terms.",
          "The trade-off names the affected tasks and how it would show up.",
          "As adequate, and it is written as a prediction the tree test in lesson 7 can confirm or refute.",
        ],
        remediation:
          "Write the sentence “people doing … will now have to …, and I will see it in the tree test as …”. If you cannot finish it, the trade-off is not yet understood.",
        recheck: "The trade-off prediction.",
      },
    ],
    portfolio:
      "Two schemes with their breakages is stronger portfolio evidence than one polished sitemap, because it shows the alternatives you considered. Photographs of the card groupings work well as case-study images.",
    resource: laws,
    resources: [
      {
        ...laws,
        section:
          "The assigned pages only: law-of-proximity, law-of-common-region, millers-law and cognitive-load.",
        purpose:
          "Explains why grouping reduces scanning effort and where the popular chunk limit comes from.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The site publishes no caveats, so the limits are supplied by this lesson: the seven-item rule in particular is stated far more confidently than its evidence supports and must not be used as a design target. A printed poster is sold and also offered as a free download; no purchase is required.",
        fallbackId: "R02",
      },
      {
        ...cardSort,
        section:
          "The passages on organisation schemes and on what a sort reveals about how people expect material to be grouped.",
        purpose:
          "Connects your two schemes to what the coming card sort can actually test.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is a method article, not a taxonomy textbook; the scheme comparison here is the course's own.",
        fallbackId: "R10",
      },
    ],
  },
  {
    id: "m06-l04-v1",
    module: "m06",
    week: 6,
    day: 4,
    level: 2,
    areas: [5],
    title: "Depth, breadth and the sitemap",
    objective:
      "Draw a sitemap of your chosen scheme showing every level, then produce a shallower alternative for the same content and state which tasks each shape favours.",
    bringForward:
      "The scheme you chose and its recorded trade-off. A sitemap is that scheme drawn with its levels made explicit, which is when the depth problems become visible.",
    why: "The same groups can be arranged as a wide, shallow structure or a narrow, deep one, and the choice changes who finds what. Depth is invisible in a card sort and obvious the moment someone has to click through it.",
    teach: [
      "Breadth costs scanning; depth costs decisions and memory. A wide menu asks a person to read more options at once, which is cheap when the labels are good and the reader can see them all. A deep structure asks for a correct choice at every level, and each choice is a chance to be wrong — and a wrong choice at level one is usually invisible, because the person does not discover it until two levels further down, then has to reconstruct where they went astray.",
      "Depth is worse on small screens, which is where most people in India and most people generally will meet your product. A three-level structure that is comfortable on a wide screen with a persistent side menu becomes three full-screen steps on a phone, with the parent context scrolled away. Draw the structure, then ask what the second level looks like when the first is no longer on screen.",
      "The middle level is where structures rot. Level one gets argued about; level three is usually concrete content; level two accumulates the vague containers — “Information”, “Other”, “More about us” — that exist because two items had nowhere else to go. When you find a level-two group whose contents you cannot summarise in a sentence, you have found the part of your structure that is not real.",
      "Not everything needs to be in the hierarchy. Frequently needed items can be lifted to a shortcut, a contextual link or a persistent element, and reference material can sit deep because people arrive at it by search or by link. Decide placement by how people arrive rather than by tidiness: an item reached mostly from search does not need a good position in the menu, and an item people need at a specific moment should be near that moment, wherever it sits in the tree.",
    ],
    misconception:
      "“Three clicks maximum.” The number is folklore, and people will click many times when each click clearly moves them closer. What loses them is uncertainty, not distance: two confident clicks feel shorter than one gamble. Design for confident choices, and count clicks only as a rough symptom.",
    example:
      "The task scheme drawn out came to three levels: Get ready for a class → Practical information → What to bring. On a phone that is three full screens, and the tree test later showed people stopping at level two, where “Practical information” told them nothing about whether their answer was inside. The shallower alternative moved the four most-needed items up to level one under their own plain labels, leaving genuinely rare material at level two, so the structure became wider and one level shorter. The wide version favoured first-timers looking for one specific thing; the deeper version favoured someone browsing everything about a class, which nobody in the research had ever done.",
    steps: [
      {
        minutes: 25,
        title: "Read on choices and load",
        text: "Read the assigned pages on the cost of choices and on cognitive load. Write what each says about the effort of choosing, and note that the source publishes no limits.",
      },
      {
        minutes: 30,
        title: "Draw the sitemap",
        text: "Draw your chosen scheme with every level, every group and every item's position. Count the levels each of your three research tasks must pass through.",
      },
      {
        minutes: 25,
        title: "Interrogate level two",
        text: "For each level-two group, write one sentence summarising its contents. Mark any group you cannot summarise; those are your vague containers.",
      },
      {
        minutes: 25,
        title: "Build the shallower alternative",
        text: "Produce a second sitemap for the same content that is one level shallower, lifting the most-needed items. Note what became crowded and what became harder to find.",
      },
      {
        minutes: 15,
        title: "Compare on tasks and pause",
        text: "For each of your three tasks, state which shape favours it and why. Choose the version to test in lesson 7 and record the choice. Save both maps.",
      },
    ],
    freeToolPath:
      "Paper and pencil, drawn wide rather than pretty; a phone photograph is the record. If you want it digital, an indented text list is a sitemap and is far easier to re-order than boxes in a diagram tool. Nothing here needs a diagramming account.",
    deliverable:
      "Two sitemaps of the same content at different depths, a one-sentence summary per level-two group with vague containers marked, click-depth counts for three tasks, and a written comparison stating which shape favours which task.",
    check: [
      {
        question: "Why is a wrong choice at level one especially costly?",
        answer:
          "Because it is invisible at the time. The person discovers it two levels down, and then has to work out not just where to go but where they went wrong, which is a harder and more discouraging problem than the original choice.",
      },
      {
        question: "What does a level-two group you cannot summarise indicate?",
        answer:
          "That it is a container invented to hold leftovers rather than a real category. Its contents belong somewhere specific, or the level should not exist.",
      },
      {
        question: "Is a three-click limit a useful rule?",
        answer:
          "Only loosely. People click willingly while each click clearly narrows the search; they give up under uncertainty. Optimise for confident choices, and treat click counts as a symptom to investigate rather than a target.",
      },
    ],
    rubric: [
      "Both sitemaps cover the same content at different depths",
      "Level-two groups are summarised and vague containers marked",
      "Depth is considered for a small screen",
      "The comparison is made on tasks, not on tidiness",
    ],
    criteria: [
      {
        criterion: "Both sitemaps cover the same content at different depths",
        evidence:
          "Two complete maps of the same inventory, one measurably shallower, with every item placed in both.",
        levels: [
          "One map only.",
          "A second map that omits items or changes the content set.",
          "Two complete maps of the same content at different depths.",
          "As adequate, and the shallower map records exactly which items were lifted and what that cost the level they left.",
        ],
        remediation:
          "Take your map and lift the four items your research showed people need most to level one, then re-place whatever is left. Check that no item disappeared in the process.",
        recheck: "The two complete maps.",
      },
      {
        criterion:
          "Level-two groups are summarised and vague containers marked",
        evidence:
          "A one-sentence summary per level-two group, with unsummarisable groups explicitly marked.",
        levels: [
          "No summaries.",
          "Summaries that restate the group name.",
          "Real summaries with vague containers marked.",
          "As adequate, and each vague container has a proposed resolution — dissolve it, rename it, or promote its contents.",
        ],
        remediation:
          "For each level-two group, write “this contains …” listing the actual items. If the list has no coherent theme, mark the group.",
        recheck: "The summaries and marks.",
      },
      {
        criterion: "Depth is considered for a small screen",
        evidence:
          "A written note on what each level looks like on a phone, where the parent context is no longer visible.",
        levels: [
          "Small screens not considered.",
          "Mentioned generally without walking a level.",
          "Each level is considered as a separate screen without its parent visible.",
          "As adequate, and one structural change was made specifically because of what happens on a phone.",
        ],
        remediation:
          "Cover everything but one level of your map with paper and read what remains. If you cannot tell where you are or what is inside, neither can a person on a phone.",
        recheck: "The small-screen note and any change it caused.",
      },
      {
        criterion: "The comparison is made on tasks, not on tidiness",
        evidence:
          "For each of three tasks, a statement of which shape favours it and why, ending in a recorded choice.",
        levels: [
          "A preference stated without tasks.",
          "Tasks mentioned but the comparison rests on neatness or symmetry.",
          "Each task is compared across both shapes with a reason, and a choice is recorded.",
          "As adequate, and the choice names the task it deliberately makes harder.",
        ],
        remediation:
          "Walk each of your three tasks through both maps, counting decisions rather than clicks. Write which shape asked for fewer uncertain decisions.",
        recheck: "The task comparison and the recorded choice.",
      },
    ],
    portfolio:
      "Two sitemaps compared on tasks is a case-study section on its own. Present the chosen one as a decision with a stated cost, not as the obvious answer; it has not been tested yet, and lesson 7 is where that happens.",
    resource: laws,
    resources: [
      {
        ...laws,
        section:
          "The assigned pages only: hicks-law, cognitive-load and law-of-proximity.",
        purpose:
          "Supplies the reasoning about the cost of choices and of scanning that the depth-versus-breadth trade turns on.",
        minutes: "15–25 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Hick's law concerns choosing among comparable options; someone hunting for one specific item is searching, not choosing, so it must not be used to justify hiding navigation. The site publishes no such caveats, so this one is the course's.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 3, user control and freedom, and heuristic 7, flexibility and efficiency of use.",
        purpose:
          "Covers what a deep structure owes a person who chose wrongly, and why shortcuts exist alongside the hierarchy.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics are review shorthand; the depth decision is settled by the tree test, not by citation.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m06-l05-v1",
    module: "m06",
    week: 6,
    day: 5,
    level: 2,
    areas: [5],
    title: "Run a card sort on paper",
    objective:
      "Run at least one open and one closed card sort with consenting participants using physical or hand-written cards, and record each participant's groups, their own group names and everything they said while hesitating.",
    bringForward:
      "The cards from your inventory, your consent introduction from m05 and your recruitment route. The cards must show the item, not your proposed label, or you will be testing your own wording back at yourself.",
    why: "You have grouped this material as someone who knows it. A card sort shows you how it looks to someone who does not, which is the only relevant point of view, and it does it in twenty minutes with no software at all.",
    teach: [
      "An open sort hands a person the items and asks them to make groups and name them. It tells you what categories they bring and what vocabulary they use, and it is what you run when the structure is still open. A closed sort gives them your categories and asks where each item goes. It tests categories you have already chosen, tells you which labels are understood, and cannot tell you about a better structure you did not offer. Run open first when you are still deciding; run closed when you have a proposal to check.",
      "Prepare the cards from the item, not from your new label. Each card carries the plain-language description you wrote in lesson 1, in the person's likely vocabulary, without the group name you intend it to end up in. Thirty to fifty cards is a workable sort; more than about sixty exhausts people and the last groups get made carelessly, which quietly corrupts your data at exactly the point you stop watching.",
      "What the person says while sorting is worth more than the final arrangement. Ask them to think aloud, and write down every hesitation, every card they move twice, every “this could go in either” and every time they invent a group to hold leftovers. Two people can produce identical final piles for entirely different reasons, and a pile made confidently is different evidence from a pile made in resignation.",
      "Small sorts are exploratory and the assigned article says so. Four or five participants will show you the confusions worth fixing and cannot tell you what proportion of people group things a given way. Run it as a source of hypotheses, name the number of participants everywhere the results appear, and resist the arithmetic that turns four people into a percentage — the analysis lesson that follows exists mostly to stop you doing that.",
    ],
    misconception:
      "“A card sort tells you what the structure should be.” It tells you how a few people group and name things when handed a pile of cards with no task and no context. It is evidence about their expectations, not a design, and the structure you build from it still has to be tested against real tasks — which is what the tree test in the next lessons does.",
    example:
      "An open sort with four participants used forty-three cards. Three of the four made a group they named something close to “before the class”, containing what to bring, directions and timing — which no version of the team's structure had contained. All four separated “change my booking” from “cancel my booking”, which the team had treated as one thing, and one participant said while doing it: “changing is easy, cancelling is a whole argument.” Two participants put “cancellation policy” with the money items and two put it with cancelling; both hesitated visibly. The closed sort that followed, using the four task groups, placed thirty-nine of forty-three cards consistently and left exactly the same four items scattered — which told the team where the structure was genuinely unclear rather than merely new.",
    steps: [
      {
        minutes: 25,
        title: "Prepare the cards and the script",
        text: "Read the assigned method sections. Write or print thirty to fifty cards showing item descriptions, not your labels. Extend your consent introduction to cover a sorting session and photographs of the cards.",
      },
      {
        minutes: 35,
        title: "Run the open sort",
        text: "With consent, ask a participant to group the cards however makes sense to them and name each group in their own words. Ask them to think aloud. Write down hesitations, moved cards and exact phrases. Photograph the final arrangement.",
      },
      {
        minutes: 30,
        title: "Run the closed sort",
        text: "With another participant, or the same one after a break, lay out your chosen groups and ask where each card goes. Record every card they place slowly, question or refuse to place.",
      },
      {
        minutes: 20,
        title: "Capture the record",
        text: "Immediately write up each session: participant label, groups with their names, card placements, hesitations and quotations. Photograph everything before you disturb the table.",
      },
      {
        minutes: 10,
        title: "Note the sample and pause",
        text: "Write how many people sorted, how they were recruited and who is missing. If nobody consented, record the recruitment gap and run the sort with yourself as a rehearsal, labelled as such and never counted as data.",
      },
    ],
    freeToolPath:
      "Index cards or paper cut into squares, a table and a phone camera. This is the required route: online sorting platforms are paid at the sizes that matter and add nothing at four participants, while a physical sort lets you see the hesitation that carries most of the information.",
    deliverable:
      "Photographs and written records of at least one open and one closed sort, each with participant groups and names, card placements, hesitations and quotations, plus a sample statement naming how many people sorted and who is missing.",
    check: [
      {
        question: "When do you run an open sort rather than a closed one?",
        answer:
          "While the structure is still open, because an open sort can show you a grouping you had not thought of. A closed sort can only tell you how well the categories you already chose are understood.",
      },
      {
        question: "Why put the description on the card rather than your label?",
        answer:
          "Because a card carrying your label tests whether people can match your label to your group, which they usually can. The point is to learn where the item belongs in their head, which needs the item described in ordinary words.",
      },
      {
        question: "What does a hesitation tell you that a final pile does not?",
        answer:
          "That the item is genuinely ambiguous for that person. Two people can reach the same pile, one confidently and one by giving up, and only the second predicts that people will look in the wrong place first.",
      },
    ],
    rubric: [
      "Cards show items in plain words, not proposed labels",
      "Both an open and a closed sort were run with consent",
      "Hesitations and quotations are recorded, not only final groups",
      "The sample is stated wherever results appear",
    ],
    criteria: [
      {
        criterion: "Cards show items in plain words, not proposed labels",
        evidence:
          "The card set, showing item descriptions in likely participant vocabulary with no group names on the faces.",
        levels: [
          "Cards carry the proposed labels or group names.",
          "Mostly descriptions, with some cards revealing the intended grouping.",
          "All cards describe the item in plain words.",
          "As adequate, and the card set was checked with one person for wording before the first sort.",
        ],
        remediation:
          "Read each card and ask whether it hints where it belongs. Rewrite any card that does, using the words your m05 participants used for that thing.",
        recheck: "The corrected card set.",
      },
      {
        criterion: "Both an open and a closed sort were run with consent",
        evidence:
          "Records of both sorts with consent obtained, or a dated recruitment gap plus a labelled rehearsal where nobody consented.",
        levels: [
          "Neither run, and no gap recorded.",
          "One sort run, or sorts run without a consent introduction.",
          "Both run with consent, or the gap recorded honestly with a labelled rehearsal.",
          "As adequate, and the closed sort used categories that had been revised from what the open sort showed.",
        ],
        remediation:
          "If recruitment failed, write what you tried, when, and what you will try next, then run both sorts on yourself and label every artefact rehearsal, permanently.",
        recheck: "Both records, or the gap and the labelled rehearsal.",
      },
      {
        criterion:
          "Hesitations and quotations are recorded, not only final groups",
        evidence:
          "Per-session notes of moved cards, spoken doubt and verbatim phrases alongside the photographed arrangement.",
        levels: [
          "Final groups only.",
          "Some notes, written after the session from memory.",
          "Hesitations, moves and quotations recorded during the session.",
          "As adequate, and at least one item is flagged as ambiguous purely on the strength of hesitation, despite being placed consistently.",
        ],
        remediation:
          "In your next session, keep a separate sheet for doubt: every pause, every card picked up twice, every question asked. Add it to the record.",
        recheck: "The session notes with hesitations.",
      },
      {
        criterion: "The sample is stated wherever results appear",
        evidence:
          "A sample statement naming participant count, recruitment route and who is missing, attached to the records.",
        levels: [
          "Results presented with no sample statement.",
          "Count given without route or exclusions.",
          "Count, route and exclusions all stated.",
          "As adequate, and the statement says explicitly that the sort is exploratory and supports no proportion claim.",
        ],
        remediation:
          "Reuse the recruitment exclusion sentence you wrote in m05 and add the count. Put it at the top of the record, not the bottom.",
        recheck: "The sample statement.",
      },
    ],
    portfolio:
      "Genuine research evidence for the project. Photographs of a real card sort, anonymised, are among the most convincing artefacts a junior portfolio can carry — provided the participant count appears beside them every time.",
    resource: cardSort,
    resources: [
      {
        ...cardSort,
        section:
          "The whole article: open and closed sorting, running a session, and the limitations of small samples.",
        purpose:
          "Supplies the method, the open-versus-closed decision and the article's own statement about what small sorts can support.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. Label small samples exploratory, as the article requires. Online sorting tools are unnecessary here and paid at useful sizes; the physical sort is the required route.",
        fallbackId: "R10",
      },
      {
        ...participants,
        section:
          "The sections on recruitment criteria and lead times, re-read for a twenty-minute session that is easier to ask for than an interview.",
        purpose:
          "A sort is short and portable, so the recruitment route can be wider than for interviews — but it still needs planning and consent.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06; last updated 28 April 2020. UK government context and no incentive amounts; your own network remains a declared convenience sample.",
        fallbackId: "R08",
      },
    ],
  },
  {
    id: "m06-l06-v1",
    module: "m06",
    week: 6,
    day: 6,
    level: 2,
    areas: [5],
    title: "Read a card sort without overclaiming",
    objective:
      "Analyse your sorts into a written list of agreements, disagreements and ambiguous items, expressed as counts of participants, and revise your structure with each change traced to what a participant actually did.",
    bringForward:
      "The sort photographs, session notes and your two sitemaps. Both the sorts and the maps are inputs; neither wins automatically.",
    why: "The analysis is where a small sort either becomes a useful set of hypotheses or becomes a false statistic. Four people can tell you a great deal about what confuses people and nothing at all about how many people are confused, and the difference is entirely in how you write it down.",
    teach: [
      "Work item by item, not pile by pile. For each card, record where each participant put it, so you end with a row per item reading “three of four put this with the money items, one put it with cancelling, two hesitated”. That form is honest, it survives being read six months later, and it makes the ambiguous items — the ones that scattered — visible without any arithmetic.",
      "Three patterns are worth naming. Agreement, where everyone placed an item the same way and nobody hesitated, means you can stop thinking about that item. Disagreement, where placements split, usually means either two audiences or an item that is really two items. Ambiguity, where an item was placed consistently but slowly and with doubt, is the pattern people miss, and it predicts wrong first clicks better than a clean split does.",
      "Do not compute percentages, and do not use similarity matrices or dendrograms on four participants. Those techniques exist for sorts with thirty or more people, and applied to four they produce a picture with the visual authority of statistics and none of the substance. Report counts of people. If you ever do run a large sort, the interval reading in the catalog is the right companion, and it will show you how wide the uncertainty around a rate at small numbers really is.",
      "Change your structure from the analysis, and record the trace. Every change should carry the sentence: this item moved because these participants did this. Changes you cannot trace are your own preferences arriving under cover of research, which is the specific failure that makes stakeholders stop believing the research is worth funding.",
    ],
    misconception:
      "“Three out of four agreed, so 75 per cent of users would.” Four people are not a sample of anything and the second sentence is a different kind of claim from the first. Write the count and let it be a count; it is entirely respectable evidence in that form, and worthless in the other.",
    example:
      "Item-by-item analysis of four sorts produced eleven agreements, six disagreements and four ambiguous items. “Cancellation policy” split two and two, with both pairs hesitating, and the notes explained why: two people thought about it as a money question and two as a cancelling question. Rather than choosing, the structure cross-linked it from both, and the trade-off was recorded for the tree test. “Change my booking” and “cancel my booking”, which all four had separated, were split into two items — a change traced to four of four participants. One proposed change was rejected explicitly: the designer wanted to rename a group, and no participant had said anything bearing on it, so it was recorded as a preference and left out.",
    steps: [
      {
        minutes: 25,
        title: "Build the item table",
        text: "Read the assigned analysis sections. Make one row per item and one column per participant, filling in where each card went and marking hesitations.",
      },
      {
        minutes: 30,
        title: "Classify the patterns",
        text: "Label each item agreement, disagreement or ambiguous. For each disagreement write what you think it means: two audiences, two items, or too little evidence.",
      },
      {
        minutes: 30,
        title: "Revise the structure",
        text: "Change your chosen sitemap from the analysis. For each change write the trace sentence naming the item, the participants and what they did.",
      },
      {
        minutes: 20,
        title: "Separate preference from evidence",
        text: "List every change you wanted to make that no participant's behaviour supports. Keep them in a separate preferences list; do not smuggle them into the evidence-led changes.",
      },
      {
        minutes: 15,
        title: "Write the sample line and pause",
        text: "Write the sentence that will accompany these results everywhere: how many people, recruited how, and that the sort is exploratory. Save the table, the revised map and the preferences list.",
      },
    ],
    freeToolPath:
      "A table on paper or in a text file with one row per item. Avoid similarity matrices and clustering diagrams entirely at this sample size — not because the tools are unavailable, but because their output would be more confident than your evidence.",
    deliverable:
      "An item-by-item table with per-participant placements and hesitations, a classification into agreement, disagreement and ambiguity with interpretations, a revised sitemap with a trace sentence per change, a separate preferences list, and a sample line.",
    check: [
      {
        question: "Why report counts rather than percentages here?",
        answer:
          "Because a percentage implies a population that four participants do not represent. “Three of four” is exactly as informative and cannot be misread as a measurement by someone who sees it in a slide a year later.",
      },
      {
        question:
          "An item was placed the same way by everyone, but slowly and with doubt. What is that?",
        answer:
          "Ambiguity, and it is a real finding. Consistent placement under doubt predicts hesitation and wrong first clicks in the live product, which a clean agreement does not.",
      },
      {
        question:
          "You want to rename a group and no participant said anything about it. What happens to that change?",
        answer:
          "It goes on the preferences list. It may still be a good idea, and it is not research; keeping the two lists apart is what lets someone else check your reasoning.",
      },
    ],
    rubric: [
      "Analysis is item by item with per-participant placements",
      "Agreement, disagreement and ambiguity are distinguished",
      "Every structural change carries a trace to participant behaviour",
      "Counts are used and percentages avoided",
    ],
    criteria: [
      {
        criterion: "Analysis is item by item with per-participant placements",
        evidence:
          "A table with one row per item showing where each participant placed it and where hesitation occurred.",
        levels: [
          "Impressions of the sorts, or pile-level summaries only.",
          "An item table without hesitation marks or with participants merged.",
          "One row per item, per-participant placements, hesitations marked.",
          "As adequate, and the table also records the participant's own group name where they invented one.",
        ],
        remediation:
          "Rebuild the table from the photographs and session notes. If a placement is unrecoverable, leave the cell blank rather than reconstructing it from memory.",
        recheck: "The completed item table.",
      },
      {
        criterion: "Agreement, disagreement and ambiguity are distinguished",
        evidence:
          "Each item classified, with an interpretation written for every disagreement.",
        levels: [
          "No classification.",
          "Agreement and disagreement distinguished, ambiguity ignored.",
          "All three used, with interpretations for the disagreements.",
          "As adequate, and at least one ambiguous item is prioritised for the tree test because of the doubt rather than the placement.",
        ],
        remediation:
          "Re-read your hesitation notes and mark every item that was placed slowly. Those are your ambiguous items, however consistent the placements look.",
        recheck: "The classified table.",
      },
      {
        criterion:
          "Every structural change carries a trace to participant behaviour",
        evidence:
          "A revised sitemap where each change has a sentence naming the item, the participants and what they did.",
        levels: [
          "Changes made with no trace.",
          "Some traces, others asserted as “research showed”.",
          "Every change traces to specific participant behaviour.",
          "As adequate, and one change you expected to make was abandoned because the sorts did not support it.",
        ],
        remediation:
          "For each change, write “this moved because participants … did …”. Any change you cannot complete belongs on the preferences list.",
        recheck: "The revised map with trace sentences.",
      },
      {
        criterion: "Counts are used and percentages avoided",
        evidence:
          "Results expressed as counts of participants throughout, with no percentages, matrices or clustering at this sample size.",
        levels: [
          "Percentages or similarity diagrams produced from a handful of participants.",
          "Mostly counts, with one or two rates.",
          "Counts throughout, with the sample line attached.",
          "As adequate, and the write-up states what sample size would be needed before any rate could be reported.",
        ],
        remediation:
          "Search your write-up for the per cent sign and for any diagram implying a distance measure. Replace each with a count of people.",
        recheck: "The corrected write-up.",
      },
    ],
    portfolio:
      "Portfolio material. An item table with counts and traced changes demonstrates the discipline reviewers most often find missing: research that changed the design in ways someone else could check.",
    resource: cardSort,
    resources: [
      {
        ...cardSort,
        section:
          "The analysis section and the article's statements about what small samples support.",
        purpose:
          "Supplies the analysis approach and the explicit limits this lesson enforces.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It describes analysis techniques intended for larger sorts; at four or five participants use counts only, which is this lesson's rule rather than the article's.",
        fallbackId: "R10",
      },
      {
        ...intervals,
        section:
          "What an interval means and how sample size widens it, read as the reason a rate is not reportable here.",
        purpose:
          "Shows concretely why a proportion from four participants carries no information worth stating.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06. It gives no formulas and is about quantitative studies; here it is the argument against computing a rate at all, not a technique to apply.",
        fallbackId: "R45",
      },
    ],
  },
  {
    id: "m06-l07-v1",
    module: "m06",
    week: 6,
    day: 7,
    level: 2,
    areas: [5],
    title: "Tree test the structure by hand",
    objective:
      "Run a paper tree test of your revised structure with at least three participants and six tasks, recording for every task the first choice, the full path, whether they backtracked and where they said they would stop.",
    bringForward:
      "Your revised sitemap and the ambiguous items from the sort analysis. The tasks should aim at the places you are least sure of, not at the places you are proud of.",
    why: "A card sort asks how people group things with no task in mind. A tree test asks whether a person with a real goal can find one specific thing in your structure — which is the question the structure exists to answer, and the one a tidy diagram cannot settle.",
    teach: [
      "A tree test shows only the words: no page design, no images, no search box, no colour. That is the point. It isolates the structure from everything that usually rescues it, so a failure means the labels and grouping failed rather than the layout. Running it on paper is straightforward: write the top level on one sheet, each second level on its own sheet, and reveal one level at a time as the person chooses, exactly as the accordion in a tool would.",
      "Tasks decide what you learn. Write them as a situation with a goal, never as the label you are testing — “you booked a class for Saturday and something has come up; where would you go?” rather than “find the cancellation policy”, which hands them the word to match. Define the correct answer before you start, in writing, including any second location you would accept. Mix in a warm-up task, and include a task or two aimed at the items your sort flagged as ambiguous.",
      "Record four things per task and the first is the most valuable. The first choice, because the first click is where the structure either works or fails and everything afterwards is recovery. The full path. Whether they went back up, which is the sign that a level-one label misled them. And where they said they would stop — because a person who reaches the right place and is not confident they are there has not really found it, and in a real product would keep looking or leave.",
      "Three to five participants will find the broken labels. What they cannot give you is a success rate to compare against a benchmark: the published benchmarks come from studies with far more participants, and applying them to five people produces a number that looks like measurement and is not. Report counts and first clicks, and treat the test as a way of locating failures, not scoring the structure.",
    ],
    misconception:
      "“They found it, so the structure works.” Not if they found it after backing out of two wrong branches, and not if they hesitated at the top and said afterwards that they were not sure they were in the right place. In a real product the person who backtracks twice often leaves instead, and the tree test's value is that it shows you the backtracking a success count would hide.",
    example:
      "Six tasks with three participants, on paper. Task: “you booked a class for Saturday and something has come up.” All three began at “Change or cancel”, which was the intended answer, and all three then stopped at level two, where “Booking admin” told them nothing — two guessed, one said she would ring the number instead. Another task, aimed at an ambiguous item, sent two of three to “Practical information” and one to “Classes”, and all three said afterwards they had not been confident. The first-click data mattered more than the outcomes: level one was working, level two was not, and no amount of renaming at level one would have shown that.",
    steps: [
      {
        minutes: 25,
        title: "Read and build the paper tree",
        text: "Read the assigned article on running a tree test. Write your structure onto sheets, one per level, so you can reveal it a level at a time without showing what is below.",
      },
      {
        minutes: 25,
        title: "Write six tasks and their answers",
        text: "Write six task scenarios with a situation and a goal, avoiding the label you are testing. Write the correct answer for each, including acceptable alternatives, before you run anything.",
      },
      {
        minutes: 40,
        title: "Run the test",
        text: "With consent, run all six tasks with at least three participants. For every task record first choice, path, backtracking and where they said they would stop. Ask nothing that guides them; answer questions with “where would you look?”",
      },
      {
        minutes: 20,
        title: "Record confidence",
        text: "After each task ask how sure they are they have arrived. Record the answer in their words. A confident wrong answer and an unsure right one are different results and lead to different changes.",
      },
      {
        minutes: 10,
        title: "Capture and pause",
        text: "Write the raw results into one table before you interpret anything, and note the participant count and route. The next lesson interprets them. If nobody consented, record the gap and keep the tasks and the paper tree as the deliverable.",
      },
    ],
    freeToolPath:
      "Sheets of paper, one per level, revealed in order — this is the required route. The platforms the assigned article names are paid, and at three to five participants they would add remote convenience and nothing else; running it by hand also lets you hear the hesitation, which the tool records only as elapsed time.",
    deliverable:
      "A paper tree, six written tasks with their pre-defined correct answers, and a results table recording first choice, path, backtracking, stopping point and stated confidence for every task and participant, with the sample stated.",
    check: [
      {
        question: "Why does a tree test hide the page design?",
        answer:
          "To isolate the structure. In a real interface a good layout, a prominent link or a search box can rescue a bad hierarchy, so a test that includes them cannot tell you whether the hierarchy itself works.",
      },
      {
        question: "Why is the first choice the most valuable data point?",
        answer:
          "Because it shows whether the structure directed the person correctly before any recovery began. Everything after it is them repairing a wrong turn, which is useful but is a different question.",
      },
      {
        question:
          "A participant reached the right place but said they were unsure. How do you record it?",
        answer:
          "As reached-but-not-confident, which is nearer to a failure than a success. In a live product that person often keeps looking or gives up, so counting it as a success hides the problem you most want to see.",
      },
    ],
    rubric: [
      "Tasks state a situation and avoid the tested label",
      "Correct answers were defined before running",
      "First choice, path, backtracking and confidence are all recorded",
      "The sample is stated and no benchmark is claimed",
    ],
    criteria: [
      {
        criterion: "Tasks state a situation and avoid the tested label",
        evidence:
          "Six task scenarios describing a situation and goal, none containing the label of the target category.",
        levels: [
          "Tasks name the target label or category.",
          "Mostly scenario-based, with at least one giving the word away.",
          "All six give a situation and goal without the tested wording.",
          "As adequate, and at least two tasks deliberately target items the card sort flagged as ambiguous.",
        ],
        remediation:
          "Underline every word in a task that also appears in your structure. Rewrite the task using the situation your participants described in m05 instead.",
        recheck: "The rewritten tasks.",
      },
      {
        criterion: "Correct answers were defined before running",
        evidence:
          "Written correct answers with acceptable alternatives, dated or clearly produced before the sessions.",
        levels: [
          "Answers decided while reading the results.",
          "Answers written but with no alternatives, so any reasonable second location counted as failure.",
          "Answers and acceptable alternatives written before running.",
          "As adequate, and one task's answer set was revised before running because writing it exposed a genuine ambiguity in the structure.",
        ],
        remediation:
          "Write the answer key now and mark honestly which answers you decided after the fact; those tasks are unreliable and should be re-run.",
        recheck: "The answer key with any re-run tasks.",
      },
      {
        criterion:
          "First choice, path, backtracking and confidence are all recorded",
        evidence:
          "A results table with all four columns filled for every task and participant.",
        levels: [
          "Success or failure only.",
          "Paths recorded but no first choice or no confidence.",
          "All four recorded for every task.",
          "As adequate, and the table marks the tasks where a participant said they would abandon the product or contact a person instead.",
        ],
        remediation:
          "Re-run the missing column with a fresh participant rather than reconstructing it; first choice and confidence cannot be recovered afterwards.",
        recheck: "The complete results table.",
      },
      {
        criterion: "The sample is stated and no benchmark is claimed",
        evidence:
          "Participant count and route recorded with the results, and no comparison to published success-rate benchmarks.",
        levels: [
          "Results presented as a score or compared to a benchmark.",
          "Sample stated but rates computed from a handful of participants.",
          "Counts only, with the sample stated beside them.",
          "As adequate, and the record states what this test can and cannot establish in one sentence.",
        ],
        remediation:
          "Remove every rate and benchmark comparison and replace with counts of participants. Add the sample line at the top of the table.",
        recheck: "The corrected results table.",
      },
    ],
    portfolio:
      "Strong portfolio evidence, and rare at junior level: most portfolios show a sitemap and no test of it. Photograph the paper tree and present the first-click results with the participant count beside them.",
    resource: treeTest,
    resources: [
      {
        ...treeTest,
        section:
          "Building the tree, writing tasks that do not reveal the answer, defining correct answers in advance, and what a tree test measures.",
        purpose:
          "Supplies the method, the task-writing discipline and the four things worth recording.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 6 August 2023 with the publisher's own review on 19 August 2026. The platforms it names are paid, so the paper route is this course's required path; interpretation is covered separately in R61.",
        fallbackId: "R09",
      },
      {
        ...cardSort,
        section:
          "The passages contrasting what a sort generates with what a tree test evaluates.",
        purpose:
          "Keeps the two methods distinct so the tree test is used to evaluate rather than to re-open the structure.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. Sorting is generative and testing is evaluative; neither substitutes for the other.",
        fallbackId: "R10",
      },
    ],
  },
  {
    id: "m06-l08-v1",
    module: "m06",
    week: 6,
    day: 8,
    level: 2,
    areas: [5],
    title: "Interpret the tree test and change one thing",
    objective:
      "Turn your tree-test results into a diagnosis per failed task — a wrong label, a wrong grouping or a missing item — then make one bounded change, re-test it with at least two people, and report what happened including if it did not help.",
    bringForward:
      "The tree-test results table and the structure you tested. Do not change anything before this lesson: a diagnosis written after several simultaneous edits explains nothing.",
    why: "Results only become useful when they name a cause. “People failed task three” is a symptom; “people chose the right level-one branch and then could not tell which of two level-two labels held it” is a diagnosis, and only the second tells you what to change.",
    teach: [
      "Read the first clicks before anything else. If people chose correctly at level one and failed lower down, level one is working and the fault is beneath it — usually a level-two label that names a container rather than its contents. If they scattered at level one, the top of your structure does not match how they think about the task, and renaming a lower level will change nothing. This single split resolves most tree-test results.",
      "Failures have three common causes, and the fix differs for each. A wrong label means the right container has the wrong name: rename it, in participant vocabulary. A wrong grouping means the item is in a container people do not associate with it: move or cross-list it. A missing item means people were looking for something the structure does not contain at all — the commonest and most-ignored result, and no renaming will help. The assigned article names relabelling, cross-listing and restructuring as the corresponding moves.",
      "Change one thing at a time. Making four changes and re-testing tells you the aggregate got better or worse, and nothing about which change did it — and if it got worse, you will not know which one to undo. One change, re-tested, is slower and is the only way to learn anything transferable about your own judgement.",
      "Treat the article's success-rate benchmarks as context, not as a target. They come from studies far larger than yours, and comparing five participants against a published band is exactly the arithmetic this module keeps refusing. Report what happened: how many people chose correctly first, which paths they took, and whether the change moved the specific failure it was aimed at. And report it plainly when the change did not help, because a change that did not work and was recorded is worth more than a change that did and was not understood.",
    ],
    misconception:
      "“The structure scored badly, so we should redesign it.” A poor result usually concentrates in two or three labels, and replacing the whole structure discards the parts that worked while re-introducing risks you had already tested away. Diagnose first; wholesale redesign is a decision you should have to argue for, not the default response to a bad number.",
    example:
      "Six tasks, three participants. Diagnosis by first click: four of six tasks had correct level-one choices and failures below, so the top was sound. Three of those four failed at the same level-two label, “Booking admin”, which nobody could interpret — a labelling fault. One task scattered at level one, and the notes showed why: people were looking for the refund rule, which was not in the structure at all — a missing item, not a naming problem. One bounded change was made: “Booking admin” became “Change or cancel a booking”, nothing else. Re-tested with two new participants, both reached the target directly and one said “that's obviously it”. The missing refund rule was recorded as a content gap, since no structural change can fix an item that does not exist, and the second failed task was left alone for the next round rather than fixed in the same breath.",
    steps: [
      {
        minutes: 25,
        title: "Read the interpretation guidance",
        text: "Read the assigned article on interpreting results. Note the four measures it discusses and write, for your own data, which you can honestly report at your sample size.",
      },
      {
        minutes: 30,
        title: "Split by first click",
        text: "Sort your failed tasks into those where level one was correct and those where it scattered. Write what each group implies about where the fault lies.",
      },
      {
        minutes: 25,
        title: "Diagnose each failure",
        text: "For each failed task write the cause: wrong label, wrong grouping or missing item. Support each diagnosis with the paths and the quotations from the session.",
      },
      {
        minutes: 25,
        title: "Change one thing and re-test",
        text: "Make exactly one change aimed at your clearest diagnosis. Re-test the affected tasks with at least two people who have not seen the structure. Record first clicks and confidence again.",
      },
      {
        minutes: 15,
        title: "Report honestly and pause",
        text: "Write what the change did, including if it did not help or made things worse. List the remaining failures and their diagnoses for the next round. Save both versions of the structure.",
      },
    ],
    freeToolPath:
      "The same paper tree with one sheet rewritten. Keep the original sheets: a before-and-after pair of paper trees with results attached is the artefact, and it costs nothing to preserve.",
    deliverable:
      "A first-click split of failed tasks, a written diagnosis per failure with supporting paths and quotations, one bounded change re-tested with at least two new participants, and an honest report of the outcome including any remaining failures.",
    check: [
      {
        question:
          "People chose the right branch at level one and failed at level two. What does that rule out?",
        answer:
          "That the top of the structure is wrong. Renaming or reorganising level one would change nothing for these tasks; the fault is in the level-two labels or in what is grouped beneath them.",
      },
      {
        question:
          "Why change one thing at a time when several labels look wrong?",
        answer:
          "Because a re-test after several changes cannot attribute the difference to any of them, and if the result worsens you have no way to know which change to undo. One change teaches you something about your own judgement; four teach you nothing.",
      },
      {
        question:
          "Your change did not improve anything. What do you write?",
        answer:
          "That it did not, with the results, and what you now think the cause is. A recorded failed change is genuine evidence and stops the next person repeating it; quietly trying something else and reporting only the success is how a portfolio becomes fiction.",
      },
    ],
    rubric: [
      "Failures are split by first click before diagnosis",
      "Each failure has a named cause with supporting evidence",
      "Exactly one change was made and re-tested",
      "The outcome is reported honestly, including no improvement",
    ],
    criteria: [
      {
        criterion: "Failures are split by first click before diagnosis",
        evidence:
          "A written split of failed tasks into correct-first-click and scattered-first-click groups, with what each implies.",
        levels: [
          "Failures treated as one undifferentiated group.",
          "First clicks mentioned but not used to locate the fault.",
          "The split is made and its implication stated for each group.",
          "As adequate, and a task where the first click was correct but confidence was low is treated as a failure rather than a success.",
        ],
        remediation:
          "Return to the results table and sort by first choice. Write one sentence per group on where the fault cannot be.",
        recheck: "The split with its implications.",
      },
      {
        criterion: "Each failure has a named cause with supporting evidence",
        evidence:
          "One of wrong label, wrong grouping or missing item per failure, supported by paths or quotations.",
        levels: [
          "Failures listed without causes.",
          "Causes asserted without supporting data.",
          "Every failure has a named cause supported by the record.",
          "As adequate, and at least one failure is diagnosed as a missing item and routed to content rather than structure.",
        ],
        remediation:
          "For each failure, quote the path and anything the participant said. If neither supports your cause, the diagnosis is a guess and should be marked as one.",
        recheck: "The diagnoses with evidence.",
      },
      {
        criterion: "Exactly one change was made and re-tested",
        evidence:
          "Before-and-after structures differing in one respect, with re-test results from at least two new participants.",
        levels: [
          "Several changes made together, or no re-test.",
          "One change but re-tested with someone who had already seen the structure.",
          "One change, re-tested with fresh participants.",
          "As adequate, and the write-up predicted what the change should do before re-testing.",
        ],
        remediation:
          "Revert to the tested structure, apply the single change you consider clearest, and re-run only the affected tasks with someone new.",
        recheck: "The two structures and the re-test results.",
      },
      {
        criterion:
          "The outcome is reported honestly, including no improvement",
        evidence:
          "A written outcome stating what happened, with remaining failures listed and their diagnoses carried forward.",
        levels: [
          "Only the improvement reported, or the outcome asserted without data.",
          "Outcome reported but remaining failures dropped.",
          "Outcome reported with data, including any lack of improvement, and remaining failures carried forward.",
          "As adequate, and the report says what you would change next and why you did not change it now.",
        ],
        remediation:
          "Write the outcome sentence with the counts in it, then list every failure still unaddressed. Resist repairing them in the same write-up.",
        recheck: "The outcome report and the remaining-failure list.",
      },
    ],
    portfolio:
      "The strongest artefact in this module: a structure, a test, a diagnosis, one change and a re-test is a complete iteration loop, and it is exactly what a hiring reviewer looks for. Report the counts and the participant numbers; never present the second version as validated.",
    resource: treeResults,
    resources: [
      {
        ...treeResults,
        section:
          "Success rate, directness, time and pathway analysis, and translating findings into relabelling, cross-listing or restructuring.",
        purpose:
          "Supplies the diagnostic vocabulary and the mapping from a symptom to a specific structural move.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 19 January 2024. Its success-rate benchmarks come from studies far larger than yours: at three to five participants report counts and first clicks, not rates against a band. It does not explain significance testing and does not cover running the test.",
        fallbackId: "R37",
      },
      {
        ...intervals,
        section:
          "How sample size affects the width of an interval, read as the reason a benchmark comparison is unavailable to you.",
        purpose:
          "Makes concrete why a five-participant success rate cannot be compared with a published benchmark.",
        minutes: "10–20",
        limits:
          "Free reading, no account. Verified 2026-09-06. No formulas; used here as an argument about what not to report.",
        fallbackId: "R45",
      },
    ],
  },
  {
    id: "m06-l09-v1",
    module: "m06",
    week: 6,
    day: 9,
    level: 2,
    areas: [5],
    title: "Choose the right test for the symptom",
    objective:
      "Write a diagnostic plan matching four symptoms of people not finding things to the test that would identify each cause, and state for one symptom in your own product which test you would run next and what would make you run a different one.",
    bringForward:
      "Everything you have run so far and the failures you have not yet explained. This lesson is about the failures your card sort and tree test could not diagnose.",
    why: "Running the wrong test is expensive in the only currency you have, which is people's time. The four common findability tests answer different questions, and picking by familiarity rather than by symptom is how a team spends three weeks proving a structure is fine when the problem was that nobody could see the menu.",
    teach: [
      "The assigned article separates four tests by what they diagnose. A tree test asks whether the hierarchy itself directs people correctly, with the interface removed. A closed card sort asks whether your category names are understood and whether items are grouped where people expect. A click test asks which navigation components people actually use or ignore in a real layout — the question a tree test cannot reach, because it has hidden the layout. And a usability test watches the whole thing, showing you behaviour the other three abstract away, at the highest cost per participant.",
      "Match the test to the symptom rather than the other way round. If people take the wrong branch from the top, that is a structure question and a tree test answers it. If they take the right branch and still cannot tell what is inside, that is a naming question and a closed sort is faster. If they never touch the menu at all — going straight to search, or scrolling past a navigation bar — no amount of structural testing will help you, because the structure is not being consulted; you need to know whether the component is visible and understood.",
      "Discoverability and findability are different failures. Findability is a person looking for a specific thing and not reaching it. Discoverability is a person never learning that the thing exists, so they never look. A structure can be perfectly findable and undiscoverable — the item is exactly where it should be, and nobody knows to want it — and no tree test will ever tell you, because a tree test begins by telling the participant what to look for.",
      "There is a cheaper move before any of them: check whether the item exists and is written clearly. A surprising share of findability failures resolve to a missing answer, a page written in the organisation's vocabulary, or two contradictory versions. Your lesson-one inventory already found some of those, and fixing them costs no participant time at all.",
    ],
    misconception:
      "“Usability testing will find everything, so run that.” It will show you a lot and tell you least per participant about which specific thing is at fault, because every variable is present at once. When you already suspect the structure or the labels, the narrow test isolates the cause with fewer people and less of their time; keep the usability test for when you need to see the whole task.",
    example:
      "Four symptoms from one product, each matched to a test. People choosing the wrong top-level branch — tree test, which had already shown level one was sound. People reaching the right branch and hesitating over two labels — closed card sort with just those two categories, ten minutes per person. People ignoring the menu entirely and using search on every task — a click test on the real layout, because the structure was never being consulted. And people who did not know a fee waiver existed at all — none of the four, since that is discoverability: the item was findable by anyone told to look for it, and the fix belonged in how it was surfaced during booking rather than in the hierarchy.",
    steps: [
      {
        minutes: 25,
        title: "Read the four methods",
        text: "Read the assigned article. For each of the four tests, write in one sentence what it diagnoses and what it cannot see.",
      },
      {
        minutes: 25,
        title: "List your unexplained failures",
        text: "List every finding from your sort and tree test that you could not diagnose, plus anything from your m05 research about people not finding things.",
      },
      {
        minutes: 30,
        title: "Match symptom to test",
        text: "Build a table of at least four symptoms, each with the likely cause, the test that would identify it, roughly how many people it needs and what it would cost you in time.",
      },
      {
        minutes: 25,
        title: "Separate findability from discoverability",
        text: "Mark which of your symptoms are people failing to find something they were looking for, and which are people never knowing it existed. Write why no findability test can address the second.",
      },
      {
        minutes: 15,
        title: "Choose the next test and pause",
        text: "Choose one symptom and the test you would run next. Write what result would make you abandon that test and run a different one instead. Save the plan.",
      },
    ],
    freeToolPath:
      "Written planning only. A click test needs nothing more than a printed or drawn screen and a pen mark where the person would tap, which is the account-free version of every click-testing service, and works fine with three people.",
    deliverable:
      "A symptom-to-test table with at least four rows carrying cause, test, participant count and cost; a marked separation of findability from discoverability symptoms; and a chosen next test with the result that would change your mind.",
    check: [
      {
        question:
          "People go straight to search on every task. Which test do you run?",
        answer:
          "Not a tree test — the structure is not being consulted, so testing it answers nothing. A click test on the real layout tells you whether the navigation is seen and understood; the structural question can wait until you know people look at it.",
      },
      {
        question: "How do findability and discoverability differ?",
        answer:
          "Findability is failing to reach something you are looking for. Discoverability is never knowing it exists. A tree test tells the participant what to find, so it can only ever measure the first.",
      },
      {
        question: "What should you check before running any test?",
        answer:
          "Whether the item exists, says one thing rather than two contradictory things, and is written in words people use. Those failures look exactly like structural failures and cost no participant time to fix.",
      },
    ],
    rubric: [
      "Each test is matched to what it can and cannot diagnose",
      "Symptoms come from your own unexplained findings",
      "Findability and discoverability are distinguished",
      "The chosen next test states what would change your mind",
    ],
    criteria: [
      {
        criterion: "Each test is matched to what it can and cannot diagnose",
        evidence:
          "Four tests, each with what it identifies and what it is blind to, in your own words.",
        levels: [
          "Tests listed without distinctions.",
          "What each diagnoses is stated, but not what it cannot see.",
          "Both stated for all four.",
          "As adequate, and the write-up names a case where the cheaper test would have been enough and a more elaborate one was reached for out of habit.",
        ],
        remediation:
          "For each test, complete the sentence “this cannot tell me …”. If two of your answers are the same, you have not yet distinguished the tests.",
        recheck: "The four test descriptions with blind spots.",
      },
      {
        criterion: "Symptoms come from your own unexplained findings",
        evidence:
          "At least four symptoms drawn from your own sort, tree test or research rather than invented for the exercise.",
        levels: [
          "Generic symptoms copied from the reading.",
          "Some real symptoms, some invented.",
          "All four come from your own evidence, with a reference to where.",
          "As adequate, and one symptom is one you had previously explained away without evidence.",
        ],
        remediation:
          "Go back through your session notes for every moment a participant could not find something and add each to the list, including the ones you assumed you understood.",
        recheck: "The symptom list with sources.",
      },
      {
        criterion: "Findability and discoverability are distinguished",
        evidence:
          "Each symptom marked as one or the other, with a written reason for the discoverability cases.",
        levels: [
          "No distinction drawn.",
          "The terms used but applied inconsistently.",
          "Every symptom marked with reasons for the discoverability ones.",
          "As adequate, and a non-structural response is proposed for at least one discoverability symptom.",
        ],
        remediation:
          "For each symptom ask whether the person knew the thing existed. If they did not, no test that names the target can help, and the fix is elsewhere.",
        recheck: "The marked symptom list.",
      },
      {
        criterion: "The chosen next test states what would change your mind",
        evidence:
          "One chosen symptom and test, with the result that would cause you to abandon it for a different test.",
        levels: [
          "A test chosen with no stated conditions.",
          "A choice justified only by preference or convenience.",
          "The choice names the symptom and the result that would redirect it.",
          "As adequate, and it also states the participant count and the time it would take, so it is a plan rather than an intention.",
        ],
        remediation:
          "Write “I will run … because …, and if I see … I will run … instead”. A test you cannot write that sentence for is not yet chosen.",
        recheck: "The next-test sentence.",
      },
    ],
    portfolio:
      "Planning evidence, and a good interview answer. Being able to say which test you would run for a given symptom, and why not the others, is a question asked in real interviews and answered badly by most candidates.",
    resource: findabilityTests,
    resources: [
      {
        ...findabilityTests,
        section:
          "All four methods and what each diagnoses: tree testing, closed card sorting, click testing and usability testing.",
        purpose:
          "Supplies the symptom-to-test mapping this lesson builds on.",
        minutes: "15–25",
        limits:
          "Free reading, no account. Verified 2026-09-06; published 6 July 2014 with the publisher's own review on 9 September 2019. It covers neither search nor mobile-specific findability, and gives no remediation steps; the discoverability distinction here is the course's own.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 6, recognition rather than recall, and heuristic 8, aesthetic and minimalist design, read for what makes a navigation component noticed or ignored.",
        purpose:
          "Connects the click-test question — is the component seen at all — to a reviewable principle.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. A heuristic explains why a component may be missed; only a test tells you whether it was.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m06-l10-v1",
    module: "m06",
    week: 6,
    day: 10,
    level: 2,
    areas: [5],
    title: "Structure people can perceive: headings, landmarks and navigation",
    objective:
      "Express one page of your structure as a heading outline and a set of regions, then check it by reading only the headings aloud and by running the relevant preliminary accessibility checks, recording what you could and could not verify.",
    bringForward:
      "Your revised structure and one page that sits inside it — ideally the page your tree test showed people reaching. Structure is not only between pages; the same failures happen inside one.",
    why: "A hierarchy that exists only in a sitemap helps nobody. It reaches a person as headings, regions and navigation they can see or hear, and a person using a screen reader or scanning on a phone navigates by exactly those — so the in-page structure is where your architecture either becomes usable or stays a diagram.",
    teach: [
      "Headings are the outline of a page, not a size choice. One page title, then sections in a strict order, each nested heading a genuine child of the one above — skipping a level to get a smaller-looking heading breaks the outline that some people use as their entire navigation. The assigned tutorial covers this precisely: headings that describe sections, in order, with no gaps.",
      "Regions give a page its large-scale shape: the banner, the main navigation, the main content, a complementary area, the footer. Marked up correctly, someone can jump straight to the main content and skip the navigation on every page; unmarked, they hear the same twenty links before the content every single time. This is the point where information architecture and accessibility become the same subject rather than two adjacent ones.",
      "Navigation comes in kinds and each answers a different question. Global navigation says what the whole product contains; local navigation says what is in this section; contextual links say what is related to what you are reading now; utility elements — sign in, help, language — are always available and are not part of the content hierarchy. Confusing them produces the familiar mess where a global menu carries three items belonging to one section, or where the only route to something useful is a link in one paragraph.",
      "Test it the cheapest way first: read only the headings aloud, in order, and see whether they describe the page. If the outline reads as a sensible summary, the structure is probably sound; if it reads as a list of decorative phrases, the page has no structure regardless of what the sitemap says. Then run the preliminary checks in the assigned resource — headings, page title, keyboard access — remembering that the page states plainly they are preliminary and passing them is not conformance, and that they are not testing with disabled participants.",
    ],
    misconception:
      "“Accessibility comes later, after the structure is agreed.” The heading outline and the regions are the structure, made perceivable. Deciding them late means retrofitting an outline onto a page whose visual design already assumed something different, which is exactly how pages end up with four level-one headings and a navigation region containing the main content.",
    example:
      "A class page read as headings alone: “Saturday pottery”, “About”, “Details”, “More info”, “Book”. Read aloud it described nothing — three of the five headings could have introduced anything. Rewritten from the labelling table: “Saturday pottery”, “What you'll do”, “What to bring”, “When and where”, “What it costs”, “Book a place”. The second version is a summary of the page, and the outline now matches the structure that the tree test had validated between pages. The regions were marked so the main content could be reached directly, and the preliminary checks found one further problem: the page title in the browser tab was the site name on every page, so a person with six tabs open could not tell them apart. What was not verified, and the record says so: no screen-reader session was run and no disabled participant took part.",
    steps: [
      {
        minutes: 25,
        title: "Read the structure tutorial",
        text: "Read the assigned page-structure tutorial on headings and regions. Write the heading rule in your own words, including what skipping a level does.",
      },
      {
        minutes: 30,
        title: "Write the heading outline",
        text: "Write your chosen page as an outline: page title, then every section heading in order, correctly nested. Use the labels from your labelling table rather than inventing new ones.",
      },
      {
        minutes: 25,
        title: "Mark the regions and the navigation kinds",
        text: "Identify the banner, navigation, main content, any complementary area and the footer. Then label each navigation element global, local, contextual or utility, and note anything sitting in the wrong one.",
      },
      {
        minutes: 25,
        title: "Read it aloud and run the checks",
        text: "Read only the headings aloud, in order. Rewrite anything that does not describe its section. Then run the assigned preliminary checks that apply — page title, headings, keyboard access — on your prototype or on the live page.",
      },
      {
        minutes: 15,
        title: "Record what you could not verify, then pause",
        text: "Write what the checks did not cover and what you did not test, including that no assistive-technology session with a disabled participant took place. Save the outline, the region map and the check results.",
      },
    ],
    freeToolPath:
      "An indented text outline and a sketch of the page with regions drawn on it. If your prototype is a local HTML file, the checks run in any browser with no extension; if it is on paper, run the heading and outline checks by reading and record the keyboard checks as untested rather than assumed.",
    deliverable:
      "A correctly nested heading outline for one page, a region map with each navigation element classified, the results of the applicable preliminary checks, and a written statement of what was not verified.",
    check: [
      {
        question: "Why does skipping a heading level matter?",
        answer:
          "Because the heading levels are the page's outline, and some people navigate by that outline alone. A skipped level tells them a section is nested inside something that does not exist, which makes the page's shape unreadable — while looking fine visually.",
      },
      {
        question: "What is the difference between global and local navigation?",
        answer:
          "Global says what the whole product contains and is the same everywhere; local says what is inside this section and changes as you move. Merging them produces a menu that is either too long everywhere or wrong in most places.",
      },
      {
        question:
          "You ran the preliminary checks and everything passed. What can you claim?",
        answer:
          "That those specific checks passed on that page, on your device. The resource states they are preliminary and not conformance, and running them yourself is not testing with disabled participants — both limits belong in your write-up.",
      },
    ],
    rubric: [
      "The heading outline is correctly nested and descriptive",
      "Regions and navigation kinds are identified",
      "The heading read-aloud test was actually run",
      "Unverified checks are stated rather than assumed",
    ],
    criteria: [
      {
        criterion: "The heading outline is correctly nested and descriptive",
        evidence:
          "An outline with one page title and correctly nested section headings, each describing its section.",
        levels: [
          "Headings chosen by visual size, levels skipped.",
          "Correct nesting but vague headings such as Details or More.",
          "Correct nesting and every heading describes its section.",
          "As adequate, and the headings reuse the vocabulary from your labelling table with the evidence noted.",
        ],
        remediation:
          "Write the outline as a numbered list and check each item is genuinely a subsection of the one above. Rewrite every heading you could move to another page without noticing.",
        recheck: "The corrected outline.",
      },
      {
        criterion: "Regions and navigation kinds are identified",
        evidence:
          "A region map naming banner, navigation, main content, complementary and footer, with every navigation element classified as global, local, contextual or utility.",
        levels: [
          "No regions identified.",
          "Regions marked but navigation elements unclassified.",
          "Both complete, with anything in the wrong place noted.",
          "As adequate, and one misplacement is corrected with the reason recorded.",
        ],
        remediation:
          "Draw the page and outline each region. Then list every link outside the main content and assign it one of the four kinds; links you cannot classify usually belong somewhere else.",
        recheck: "The region map and classification.",
      },
      {
        criterion: "The heading read-aloud test was actually run",
        evidence:
          "A record of reading the headings alone, with what was rewritten as a result.",
        levels: [
          "Not run.",
          "Claimed but with no changes or notes resulting.",
          "Run, with the resulting rewrites recorded.",
          "As adequate, and someone else read the outline and said what they thought the page contained.",
        ],
        remediation:
          "Cover the page and read only the headings to another person. Ask them what the page is about. Rewrite whatever they cannot infer.",
        recheck: "The read-aloud record and rewrites.",
      },
      {
        criterion: "Unverified checks are stated rather than assumed",
        evidence:
          "A written statement of which checks were run, which could not be, and that no assistive-technology session with a disabled participant took place.",
        levels: [
          "Accessibility claimed generally.",
          "Checks listed without stating what was not covered.",
          "Run, not run and not verifiable are all stated.",
          "As adequate, and the statement names which check would most change the result if it were run properly.",
        ],
        remediation:
          "List the preliminary checks and mark each run, not applicable or not run. Add one sentence on the difference between passing them and being accessible.",
        recheck: "The check record with limits.",
      },
    ],
    portfolio:
      "Portfolio material that most junior portfolios lack: showing that your IA reached the page as a real heading outline and marked regions. State the limits of self-run checks every time you show it.",
    resource: structure,
    resources: [
      {
        ...structure,
        section:
          "The headings and the page regions sections, read as the way a structure becomes perceivable.",
        purpose:
          "Supplies the heading-outline rule and the region vocabulary this lesson applies.",
        minutes: "30–45",
        limits:
          "Free reading, no account. Verified 2026-09-06. It covers structural semantics rather than navigation patterns or sorting methodology; the global, local, contextual and utility distinction here is the course's own teaching.",
        fallbackId: "R14",
      },
      {
        ...easyChecks,
        section:
          "The checks for page title, headings and keyboard access.",
        purpose:
          "Gives a small set of checks you can run yourself on the page you just restructured.",
        minutes: "20–30 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. The page states the checks are preliminary and that passing them is not conformance; running them yourself never substitutes for testing with disabled participants.",
        fallbackId: "R28",
      },
    ],
  },
  {
    id: "m06-l11-v1",
    module: "m06",
    week: 6,
    day: 11,
    level: 2,
    areas: [5],
    title: "Search, filters and the zero-results path",
    objective:
      "Design the search and filtering behaviour for your structure, including what happens with no results, and write the query list that would test it — drawn from words your participants actually used.",
    bringForward:
      "Your labelling table, your inventory and any m05 evidence of people going straight to search. Search is where your labelling failures surface as typed words.",
    why: "Search is not an alternative to structure; it is a second route through the same material, and it fails in ways structure does not. A person who searched and got nothing has usually told you exactly what they wanted, in their own words — and most products throw that away.",
    teach: [
      "People arrive at search for different reasons and the design has to serve them all: they know the exact name of the thing, they know a word from it, they have already failed in the navigation, or they always search because it is faster than reading a menu. The last group is large and does not care about your hierarchy. What they all share is that they type their own vocabulary — which is why your labelling table matters here, and why synonyms are not a nicety: if people say “fees” and your content says “pricing”, either the search knows they are the same or the search is broken for those people.",
      "Filters are the structure applied to a result set, and they inherit its problems. A filter whose categories nobody understands is an unused control that also consumes screen space, and filters that combine to produce nothing at all are a trap unless the interface says so before the person commits. Show how many results each filter value would leave where you can, and never let a person build a combination that silently returns nothing without being able to see which choice caused it.",
      "The zero-results state is a designed screen, not an error. It should say what was searched for, offer the nearest thing you do have, offer a route that does not depend on the same words — browse the structure, ask a person — and, where you can, capture the query for later. Handled well it is a moment of recovery; handled as “No results found” it is the last thing that person does on your product. This is the difference between preventing an error and helping someone out of one, which the assigned reading treats as two distinct obligations.",
      "You can test search with no search engine at all. Take the twenty words your participants actually used, look for each in your content by hand, and record whether the thing they wanted would have been found. That exercise finds the missing synonyms, the content that does not contain its own subject word, and the items that exist but are described in language nobody uses — and it costs an afternoon and no infrastructure.",
    ],
    misconception:
      "“Search fixes bad structure.” It relocates the problem into a place where you cannot see it. A person searching from failure is already having a poor time, and a search that returns nothing because your content uses a different word is a worse failure than a mislabelled menu — the menu at least showed them what existed.",
    example:
      "Twenty queries taken verbatim from five interviews were run by hand against a class provider's content. Eleven would have found the right thing. Four failed on vocabulary: people searched “fees” and every page said “pricing”. Three failed because the answer existed only in a confirmation email, which no search would ever reach. Two failed because the query was about something that did not exist at all — a refund rule, the same gap the tree test had found. The zero-results screen was then designed to name the query, list the three closest items, offer the browse route and show the phone number, and the four vocabulary failures were fixed by adding the alternate words to the page content rather than by tuning any search.",
    steps: [
      {
        minutes: 25,
        title: "Read on prevention and recovery",
        text: "Read the assigned pages on preventing user errors and on the relevant heuristics. Write the difference between stopping a dead end and helping someone out of one.",
      },
      {
        minutes: 25,
        title: "Build the query list",
        text: "Take at least twenty words and phrases your participants actually used, verbatim. Mark which are names of things, which are descriptions and which are questions.",
      },
      {
        minutes: 30,
        title: "Run the queries by hand",
        text: "For each query, search your content by hand and record whether the right thing would have been found. Classify every failure: vocabulary, unreachable content, or a thing that does not exist.",
      },
      {
        minutes: 25,
        title: "Design the filters and the empty state",
        text: "Define your filter categories from the structure and state what happens when a combination returns nothing. Then design the zero-results screen: the query shown, nearest matches, a non-search route, and a way to reach a person.",
      },
      {
        minutes: 15,
        title: "Decide the fixes and pause",
        text: "For each failure class write the fix: content wording, a missing item, or search behaviour. Note which fixes need no search engine at all. Save the query list, the results and the empty-state design.",
      },
    ],
    freeToolPath:
      "Searching your own content by hand — with a browser's find-in-page, or by reading — and sketching the empty state on paper. No search platform, analytics tool or index is required; the by-hand pass finds the vocabulary problems that tuning a search engine would only mask.",
    deliverable:
      "A list of at least twenty verbatim participant queries with hand-run outcomes and classified failures, filter categories with a stated no-results behaviour, a designed zero-results screen, and a fix per failure class.",
    check: [
      {
        question: "Why take queries verbatim from participants?",
        answer:
          "Because the vocabulary gap is the commonest search failure and you cannot invent it: you will type the words your content already uses. Only the words other people chose can show you which ones your content is missing.",
      },
      {
        question: "What belongs on a zero-results screen?",
        answer:
          "The query as typed, the nearest things you do have, a route that does not depend on the same words, and a way to reach a person. “No results found” ends the session; the alternatives continue it.",
      },
      {
        question:
          "A query failed because the answer lives only in a confirmation email. Is that a search problem?",
        answer:
          "No, it is a content location problem, and no search improvement can reach it. It is the same missing-item class your tree test found, and the fix is to put the answer somewhere reachable.",
      },
    ],
    rubric: [
      "Queries are verbatim from participants and classified",
      "Failures are classified by cause, not lumped together",
      "The zero-results state is designed, not an error message",
      "Filter combinations that return nothing are handled",
    ],
    criteria: [
      {
        criterion: "Queries are verbatim from participants and classified",
        evidence:
          "At least twenty queries taken word for word from research notes, each marked as a name, a description or a question.",
        levels: [
          "Queries invented by the designer.",
          "A mix of real and invented queries, unmarked.",
          "Twenty or more verbatim queries, classified.",
          "As adequate, and the list notes which queries came from people who had already failed in the navigation.",
        ],
        remediation:
          "Return to your interview notes and copy out every phrase a participant used to describe something they were looking for, including the vague ones.",
        recheck: "The verbatim query list.",
      },
      {
        criterion: "Failures are classified by cause, not lumped together",
        evidence:
          "Each failed query marked as a vocabulary gap, unreachable content or a non-existent item, with a fix per class.",
        levels: [
          "Failures counted but not classified.",
          "Classified loosely, with fixes proposed for the search engine only.",
          "All failures classified with a fix appropriate to each class.",
          "As adequate, and the write-up states how many failures need no search functionality at all to fix.",
        ],
        remediation:
          "For each failure ask whether the thing exists, whether it is reachable, and whether the words match. The first no is the cause.",
        recheck: "The classified failure list with fixes.",
      },
      {
        criterion: "The zero-results state is designed, not an error message",
        evidence:
          "A designed screen showing the query, nearest matches, a non-search route and a way to reach a person.",
        levels: [
          "No results state left as a message.",
          "Some elements present, but no route out that avoids the same vocabulary.",
          "All four elements present in a designed screen.",
          "As adequate, and the design captures the query for later review, with a note on how that data would be handled.",
        ],
        remediation:
          "Sketch the screen as though the person searching is about to give up, and give them three ways forward that do not require them to guess a different word.",
        recheck: "The zero-results design.",
      },
      {
        criterion: "Filter combinations that return nothing are handled",
        evidence:
          "Filter categories defined from the structure, with a stated behaviour for combinations returning no results.",
        levels: [
          "Filters listed with no empty-combination behaviour.",
          "Behaviour mentioned but the person cannot tell which choice emptied the list.",
          "The behaviour is defined and the responsible choice is identifiable.",
          "As adequate, and result counts are shown per filter value so the dead end is visible before it is chosen.",
        ],
        remediation:
          "Walk two filter combinations that produce nothing and write exactly what the person sees and what they can do next. Then add the mechanism that would have warned them.",
        recheck: "The filter design with empty-combination handling.",
      },
    ],
    portfolio:
      "Good project evidence, and cheap to produce. A hand-run query list with classified failures is more convincing than a search feature specification, because it shows the problem was measured before anything was designed.",
    resource: errors,
    resources: [
      {
        ...errors,
        section:
          "The distinction between slips and mistakes, and the sections on prevention, feedback and recovery.",
        purpose:
          "Supplies the prevention-versus-recovery frame the filter and zero-results design turns on.",
        minutes: "20–30",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is about errors in general rather than search specifically; the search and filter application here is the course's own.",
        fallbackId: "R02",
      },
      {
        ...heuristics,
        section:
          "Heuristic 1, visibility of system status, and heuristic 9, help users recognise, diagnose and recover from errors.",
        purpose:
          "Sets the standard for what a person must be told when a search or filter returns nothing.",
        minutes: "10–20 selected",
        limits:
          "Free reading, no account. Verified 2026-09-06. Heuristics identify candidate problems; the hand-run query list is the evidence in this lesson.",
        fallbackId: "R11",
      },
    ],
  },
  {
    id: "m06-l12-v1",
    module: "m06",
    week: 6,
    day: 12,
    level: 2,
    areas: [5],
    title: "Stress-test the labels, then write the change note",
    objective:
      "Test your labels against a longer translation, an Indic script, a narrow screen and a slow connection, repair what breaks, and publish a change note recording every structural decision, its evidence and what remains untested.",
    bringForward:
      "The whole module: inventory, labels, structure, sort and tree-test results, page outline and search work. This lesson closes it into something another person could pick up.",
    why: "A label that works only in English, only on a wide screen and only when everything has loaded is not finished. And a structure whose reasoning lives in your head is one you cannot defend in a review, hand to a developer, or explain in an interview six months from now.",
    teach: [
      "Text expands when translated, and layouts built around English label lengths break in ways that are invisible until they happen: a menu item wrapping to three lines, a truncated label ending mid-word, a button whose text no longer fits. The assigned internationalization page covers what this involves — encoding, expansion, formats, sorting order — and the practical move for a designer is to build the label set with room to grow rather than to the tightest fit that looked good today.",
      "Indic scripts add constraints English does not have. Line height that suits Latin text can clip conjuncts and matras; a font that renders one script beautifully may not contain another at all; and sorting order differs by language, so an alphabetical list is a different list in a different language. India's own government guidelines cover local-language and mobile requirements and are the primary source available to you, so compare your work against two of their requirements rather than assuming a Latin-script layout transfers.",
      "The narrow screen and the slow connection are the same test at different layers. A long label on a narrow screen either wraps, truncates or overflows, and truncation is the worst of the three because it removes the distinguishing end of a label — “Change or cancel a…” — that a person was using to choose. On a slow connection, structure is what arrives first: the person sees your labels before any image or refinement loads, which means the text has to work alone, and you can check this by throttling the connection in a browser's own developer tools.",
      "The change note is the last artefact and the one that keeps its value. It records each decision, the evidence behind it, what you rejected, what is still a guess and what you would test next. Written honestly it is portfolio material, a handover document and the thing that stops the same argument being re-run next quarter — and the honesty is what makes it useful: a note claiming everything was validated is worth less than one saying which three labels are still untested.",
    ],
    misconception:
      "“Translation is a later, non-design problem.” The label set is a design decision that either survives translation or forces the translator to invent something shorter and different, which quietly changes your information architecture in a language you cannot read. Leaving room, avoiding truncation and not depending on English word order are design decisions, made now.",
    example:
      "Four labels broke under test. “Change or cancel a booking” truncated to “Change or cancel a…” at 320 px, so the two actions became indistinguishable, and the fix was two shorter separate items — which the card sort had already suggested. A Hindi rendering of the same menu ran about a third longer and wrapped to two lines, which was acceptable once the row height allowed it, and one heading clipped its matras until the line height was increased. On a throttled connection the page showed its headings first, which read as a sensible outline — the read-aloud test from lesson 10 paying off in a situation nobody had designed for. The change note recorded eleven decisions, four still marked as guesses, and one open content gap: the refund rule, found in the tree test, which still did not exist.",
    steps: [
      {
        minutes: 25,
        title: "Read the internationalization guidance",
        text: "Read the assigned page on localization versus internationalization and at least two relevant requirements from the India guidelines. Write which of your labels you expect to break and why.",
      },
      {
        minutes: 30,
        title: "Test the labels",
        text: "Render your label set with roughly a third more characters, and with one Indic-script version. Record every wrap, truncation, clipped character and overflow specifically.",
      },
      {
        minutes: 25,
        title: "Test narrow and slow",
        text: "View the labels at about 320 px, then load the page on a throttled slow connection with the cache disabled and record what appears first and whether it makes sense alone.",
      },
      {
        minutes: 25,
        title: "Repair and re-check",
        text: "Fix what broke, preferring shorter distinct labels over truncation and giving rows room to grow. Re-run the two worst cases to confirm the repair.",
      },
      {
        minutes: 15,
        title: "Write the change note and pause",
        text: "Write the note: each decision, its evidence, what you rejected, what is still a guess, what remains untested and what you would test next. Save it with the structure.",
      },
    ],
    freeToolPath:
      "Padding out label text by hand in a text editor simulates expansion honestly enough for a label set, and any Chromium browser's developer tools throttle the connection and disable the cache with no account. If you cannot render an Indic script in your prototype, write the labels by hand on paper at the same size and record that the digital rendering is untested rather than claiming it passed.",
    deliverable:
      "A tested label set with recorded breakages under expansion, an Indic script, a narrow width and a throttled connection; the repairs made and re-checked; and a change note recording every decision, its evidence, the guesses and the open questions.",
    check: [
      {
        question: "Why is truncation worse than wrapping?",
        answer:
          "Because it removes the end of the label, which is often the part that distinguishes it from its neighbour. A wrapped label is still readable; a truncated one turns a choice into a guess.",
      },
      {
        question:
          "What does a slow connection reveal about an information architecture?",
        answer:
          "That the text arrives first and has to work alone. If the labels and headings make sense with nothing else loaded, the structure is doing its job; if they only make sense alongside images and styling, it is not.",
      },
      {
        question: "What makes a change note worth writing?",
        answer:
          "That it separates what was tested from what was guessed, so a later reader can trust the first and re-examine the second. A note claiming everything was validated is less useful, because nothing in it can be relied on.",
      },
    ],
    rubric: [
      "Labels were tested under expansion and an Indic script",
      "Narrow width and a throttled connection were both checked",
      "Repairs favour clearer labels over truncation",
      "The change note separates evidence from guesses",
    ],
    criteria: [
      {
        criterion: "Labels were tested under expansion and an Indic script",
        evidence:
          "Renderings or hand-written versions with about a third more characters and in an Indic script, with breakages named specifically.",
        levels: [
          "Not tested.",
          "Expansion tested but no second script, or breakages described as “looks cramped”.",
          "Both tested with specific named breakages.",
          "As adequate, and the record notes a requirement from the India guidelines that your work does or does not meet.",
        ],
        remediation:
          "Pad each label with extra characters and write it out again in a second script by hand if you cannot render it. Name each breakage as a concrete sentence.",
        recheck: "The two renderings and the breakage list.",
      },
      {
        criterion: "Narrow width and a throttled connection were both checked",
        evidence:
          "A record of the label set at about 320 px and of what appears first on a throttled connection with the cache disabled.",
        levels: [
          "Neither checked.",
          "One of the two checked.",
          "Both checked with what was observed recorded.",
          "As adequate, and the record states whether the first-arriving text alone would let someone choose correctly.",
        ],
        remediation:
          "Run the throttled load in your browser's developer tools and screenshot the first paint. Then set the width to 320 px and list every label that wraps or truncates.",
        recheck: "Both records.",
      },
      {
        criterion: "Repairs favour clearer labels over truncation",
        evidence:
          "Repairs that shorten or split labels rather than clipping them, with the two worst cases re-checked.",
        levels: [
          "Breakages left unrepaired, or fixed by allowing truncation.",
          "Repaired but not re-checked.",
          "Repaired by shortening or splitting, with the worst cases re-checked.",
          "As adequate, and one repair is traced back to something the card sort or tree test had already suggested.",
        ],
        remediation:
          "For each truncating label, write a shorter version that keeps the distinguishing word. If no shorter version works, the item is probably two items.",
        recheck: "The repaired label set and re-check results.",
      },
      {
        criterion: "The change note separates evidence from guesses",
        evidence:
          "A written note listing each decision with its evidence, the rejected alternatives, the remaining guesses and what you would test next.",
        levels: [
          "No change note, or a summary of the final structure only.",
          "Decisions listed without evidence, or with guesses presented as findings.",
          "Every decision carries evidence or is marked a guess, with rejects and next tests recorded.",
          "As adequate, and the note names the decision you are least confident about and what it would take to settle it.",
        ],
        remediation:
          "Go through your structure and write one line per decision. Any line where the evidence column is empty is a guess and must be labelled as one.",
        recheck: "The change note.",
      },
    ],
    portfolio:
      "The change note is the case-study section for this module: it shows a structure, the evidence behind it and the honesty about what is still unknown. The label stress test is a small, specific detail that distinguishes a designer who has worked with real Indian and multilingual constraints from one who has read about them.",
    resource: i18n,
    resources: [
      {
        ...i18n,
        section:
          "The definitions and what internationalization involves: encoding, text expansion, formats and sorting.",
        purpose:
          "Explains why a label set must be designed with room to grow rather than translated afterwards.",
        minutes: "10–15",
        limits:
          "Free reading, no account. Verified 2026-09-06. It is a short definitional page and gives no layout guidance; the expansion and truncation tests here are the course's own.",
        fallbackId: "R10",
      },
      {
        ...indiaGuidelines,
        section:
          "Two requirements of your choice from the local-language and mobile sections, compared against your own labels.",
        purpose:
          "Supplies the India-specific requirements this course's learner will actually be held to.",
        minutes: "45–60 selected",
        limits:
          "Free HTML index with a downloadable PDF manual and no account. Verified 2026-09-06; the site records its own update as 4 September 2026. Comparing two requirements is the exercise; reading it end to end is not required and the document is written for government sites.",
        fallbackId: "R41",
      },
    ],
  },
];
