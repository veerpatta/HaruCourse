import type { RecordData } from "../shared/record";
import { fieldRequired } from "./lessonActions";
import { milestones } from "./journey";
import { modules } from "./modules";
import type { Lesson } from "./teaching";

export type CourseRecordLike = { lessonId: string; record: RecordData };

export function moduleIdForLesson(lesson: Lesson) {
  return lesson.module || `m${String(lesson.week || 1).padStart(2, "0")}`;
}

export function moduleForLesson(lesson: Lesson) {
  return modules.find((module) => module.id === moduleIdForLesson(lesson));
}

export function lessonMinutes(lesson: Lesson) {
  return lesson.steps.reduce((total, step) => total + (step.minutes || 0), 0);
}

export function displayModuleReferences(text: string) {
  return text.replace(/\bm(\d{1,2})\b/gi, (_, number: string) => `Module ${Number(number)}`);
}

function sentence(text: string) {
  const clean = text.trim();
  return /[.!?]$/.test(clean) ? clean : `${clean}.`;
}

export function lessonOrientation(lesson: Lesson) {
  const activity = lesson.apprenticeship;
  return {
    // The lesson purpose is specific enough to scan in the course map. The
    // longer beginner explanation remains in the guided Learn action.
    learn: displayModuleReferences(lesson.why || activity?.beginner?.plain || lesson.title),
    do: displayModuleReferences(activity?.mission || lesson.objective || lesson.steps[0]?.instructions[0] || lesson.title),
    keep: displayModuleReferences(lesson.outputs[0] || lesson.objective || lesson.portfolio),
    need: `${sentence(displayModuleReferences(lesson.prerequisite || "Nothing from an earlier lesson."))} Tools: ${sentence(displayModuleReferences(activity?.workspace.tools || "paper or a local text file"))}`,
    minutes: lessonMinutes(lesson),
  };
}

function finishedLessonIds(records: CourseRecordLike[]) {
  return new Set(records.filter(({ record }) => !!record.learning?.finishedAt).map(({ lessonId }) => lessonId));
}

export function chooseResumeLesson(
  lessons: Lesson[],
  records: CourseRecordLike[],
  bookmarkedLessonId?: string,
) {
  const finished = finishedLessonIds(records);
  const required = lessons.filter((lesson) => !lesson.optional);
  const bookmarkedIndex = required.findIndex((lesson) => lesson.id === bookmarkedLessonId);
  const bookmarked = lessons.find((lesson) => lesson.id === bookmarkedLessonId);
  if (bookmarked && !finished.has(bookmarked.id)) return bookmarked;

  const recent = records
    .filter(({ lessonId, record }) =>
      !finished.has(lessonId) &&
      record.status !== "not-started" &&
      lessons.some((lesson) => lesson.id === lessonId),
    )
    .sort((a, b) => Date.parse(b.record.updatedAt) - Date.parse(a.record.updatedAt))[0];
  if (recent) return lessons.find((lesson) => lesson.id === recent.lessonId)!;

  if (bookmarkedIndex >= 0) {
    const afterBookmark = required.slice(bookmarkedIndex + 1).find((lesson) => !finished.has(lesson.id));
    if (afterBookmark) return afterBookmark;
  }
  return required.find((lesson) => !finished.has(lesson.id)) || required.at(-1) || lessons[0];
}

export function moduleCompletion(moduleId: string, lessons: Lesson[], records: CourseRecordLike[]) {
  const moduleLessons = lessons.filter((lesson) => !lesson.optional && moduleIdForLesson(lesson) === moduleId);
  const finished = finishedLessonIds(records);
  return {
    finished: moduleLessons.filter((lesson) => finished.has(lesson.id)).length,
    total: moduleLessons.length,
  };
}

export function missingPrerequisiteModules(lesson: Lesson, lessons: Lesson[], records: CourseRecordLike[]) {
  const module = moduleForLesson(lesson);
  return (module?.prerequisites || [])
    .filter((id) => id !== "m00")
    .map((id) => ({ module: modules.find((candidate) => candidate.id === id)!, completion: moduleCompletion(id, lessons, records) }))
    .filter(({ module, completion }) => module && completion.total > 0 && completion.finished < completion.total);
}

export function firstUnfinishedLessonInModule(moduleId: string, lessons: Lesson[], records: CourseRecordLike[]) {
  const finished = finishedLessonIds(records);
  return lessons.find((lesson) => !lesson.optional && moduleIdForLesson(lesson) === moduleId && !finished.has(lesson.id));
}

export function worksheetCompletion(lesson: Lesson, record: RecordData) {
  const fields = lesson.apprenticeship?.worksheet?.flatMap((section) => section.fields) || [];
  const required = fields.filter((field) => fieldRequired(field, record));
  const optional = fields.filter((field) => !fieldRequired(field, record));
  const isFilled = (id: string) => !!record.worksheet?.[id]?.trim();
  return {
    requiredFilled: required.filter((field) => isFilled(field.id)).length,
    requiredTotal: required.length,
    optionalFilled: optional.filter((field) => isFilled(field.id)).length,
    optionalTotal: optional.length,
  };
}

export function ModuleOrientation({ moduleId }: { moduleId: string }) {
  const module = modules.find((candidate) => candidate.id === moduleId);
  const milestone = milestones[moduleId];
  if (!module || !milestone) return null;
  return (
    <section className="orientation-card module-orientation" aria-labelledby="module-orientation-title">
      <span className="eyebrow">MODULE {Number(module.id.slice(1))} · ABOUT THIS MODULE</span>
      <h3 id="module-orientation-title">{module.title}</h3>
      <ol className="process-diagram" aria-label="Module learning path">
        <li aria-label={`1 Bring: ${displayModuleReferences(milestone.start)}`}><span>1</span><strong>Bring</strong><small>{displayModuleReferences(milestone.start)}</small></li>
        <li aria-label={`2 Practise: ${milestone.challenge}`}><span>2</span><strong>Practise</strong><small>{milestone.challenge}</small></li>
        <li aria-label={`3 Keep: ${milestone.save}`}><span>3</span><strong>Keep</strong><small>{milestone.save}</small></li>
      </ol>
      <dl className="module-orientation-grid">
        <div><dt>Learn</dt><dd>{milestone.challenge}.</dd></div>
        <div><dt>Make</dt><dd>{module.output}.</dd></div>
        <div><dt>Need</dt><dd>{milestone.start}. Tools: {milestone.tools}.</dd></div>
        <div><dt>Time</dt><dd>About {module.hours} hours across the module, at your own pace.</dd></div>
      </dl>
    </section>
  );
}

export function LessonOrientation({ lesson }: { lesson: Lesson }) {
  const summary = lessonOrientation(lesson);
  return (
    <section className="orientation-card lesson-orientation" aria-labelledby="lesson-orientation-title">
      <span className="eyebrow">BEFORE YOU BEGIN</span>
      <h2 id="lesson-orientation-title">Your plan for this lesson</h2>
      <ol className="process-diagram lesson-path" aria-label="How this lesson works">
        <li aria-label="1 Learn: See the idea and an example"><span>1</span><strong>Learn</strong><small>See the idea and an example</small></li>
        <li aria-label="2 Do: Try one small action at a time"><span>2</span><strong>Do</strong><small>Try one small action at a time</small></li>
        <li aria-label="3 Check: Explain your reason and repair"><span>3</span><strong>Check</strong><small>Explain your reason and repair</small></li>
        <li aria-label="4 Keep: Save your work and next step"><span>4</span><strong>Keep</strong><small>Save your work and next step</small></li>
      </ol>
      <p className="effort-note"><strong>Plan about {summary.minutes} minutes.</strong> You can stop after any action; your place and worksheet save automatically.</p>
      <dl className="orientation-grid">
        <div><dt>Learn</dt><dd>{summary.learn}</dd></div>
        <div><dt>Do</dt><dd>{summary.do}</dd></div>
        <div><dt>Keep</dt><dd>{summary.keep}</dd></div>
        <div><dt>Need</dt><dd>{summary.need}</dd></div>
      </dl>
    </section>
  );
}
