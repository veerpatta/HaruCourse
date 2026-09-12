import type { RecordData } from './record';
import type { Lesson } from '../src/teaching';
import { actionQuestion, fieldRequired } from '../src/lessonActions';

export function hasReviewWork(r: RecordData) {
  const worksheet = Object.values(r.worksheet ?? {}).some(v => v.trim());
  return (!!r.notes.trim() || worksheet) && (!!r.submission.trim() || worksheet);
}
export function checkKey(i: number) { return `check-${i + 1}`; }
export function finishProblems(lesson: Lesson, r: RecordData): string[] {
  const problems: string[] = [];
  if (r.learning?.route === 'external') {
    if (!r.notes.trim() || !r.submission.trim()) problems.push('Add your reflection and the location or link to your work.');
    if (!r.learning.outputsConfirmed) problems.push('Confirm that your external work contains every required output.');
  } else {
    const fields = lesson.apprenticeship?.worksheet?.flatMap(s => s.fields) ?? [];
    const missing = fields.filter(f => fieldRequired(f,r) && (!(r.worksheet?.[f.id] ?? '').trim() || (f.kind === 'choice' && !f.options?.includes(r.worksheet?.[f.id] ?? ''))));
    if (missing.length) problems.push(`Finish ${missing.length} worksheet answer${missing.length === 1 ? '' : 's'}: ${missing.slice(0, 2).map(f => f.label).join('; ')}${missing.length > 2 ? '…' : ''}`);
    if (!fields.length && !hasReviewWork(r)) problems.push('Add your reflection and work reference.');
  }
  const checks = lesson.apprenticeship?.checks ?? [];
  if (checks.some((c, i) => {
    const answer = r.learning?.answers?.[checkKey(i)];
    return !answer?.shown || !c.options.some(o => o.label === answer.value);
  })) problems.push('Answer each Check question and read its explanation.');
  if (!(r.worksheet?.['improvement-made'] || r.learning?.repair || '').trim()) problems.push('Record one improvement, or explain why your work already meets the check.');
  const practiceQuestions=lesson.flow?.filter(a=>a.kind==='sort'||a.kind==='supported') || [];
  if(practiceQuestions.some(a=>!actionDone(lesson,r,a))) problems.push('Try each supplied practice question and read its explanation.');
  return problems;
}

// Time, confidence and navigation do not invalidate completed work.
export function workSignature(r: RecordData) {
  return JSON.stringify([r.notes, r.submission, r.worksheet ?? {}, r.learning?.answers ?? {}, r.learning?.route, r.learning?.outputsConfirmed, r.learning?.repair]);
}
export function prepareRecord(previous: RecordData, next: RecordData): RecordData {
  let result = next;
  if (previous.learning?.finishedAt && previous.learning.finishedAt === next.learning?.finishedAt && workSignature(previous) !== workSignature(next)) {
    result = { ...result, learning: { ...result.learning, finishedAt: undefined } };
  }
  if (result.status === 'ready-for-review' && !hasReviewWork(result)) result = { ...result, status: 'practicing' };
  return result;
}

export function courseProgress(lessons: Lesson[], records: {lessonId: string; record: RecordData}[], module?: number) {
  const included = lessons.filter(l => !l.optional && (module === undefined || (l.week || 1) === module));
  const finished = included.filter(l => records.some(r => r.lessonId === l.id && !!r.record.learning?.finishedAt)).length;
  const total = included.length;
  return { finished, total, percent: total ? Math.floor(finished / total * 1000) / 10 : 0 };
}
export function actionDone(lesson: Lesson, r: RecordData, a: NonNullable<Lesson['flow']>[number]) {
  if (a.kind === 'field') {
    const f=lesson.apprenticeship?.worksheet?.flatMap(s=>s.fields).find(f=>f.id===a.field);
    return !!f && !!r.worksheet?.[a.field!]?.trim() && (f.kind!=='choice' || !!f.options?.includes(r.worksheet[a.field!]));
  }
  const question=actionQuestion(lesson,a);
  if(question) { const answer=r.learning?.answers?.[question.id]; return !!answer?.shown && question.options.some(o=>o.label===answer.value); }
  if (a.kind === 'review') return !!r.learning?.finishedAt;
  return !!r.learning?.completed?.includes(a.id);
}
export function lessonWorkProgress(lesson: Lesson, r: RecordData) {
  if (lesson.flow && r.learning?.route !== 'external') {
    const fields=lesson.apprenticeship?.worksheet?.flatMap(s=>s.fields) || [];
    const required=lesson.flow.filter(a=>a.kind!=='field' || fieldRequired(fields.find(f=>f.id===a.field)!,r));
    const total = required.length;
    const done = r.learning?.finishedAt ? total : required.filter(a => actionDone(lesson,r,a)).length;
    return {total, done, percent:Math.floor(done / total * 100)};
  }
  const fields = lesson.apprenticeship?.worksheet?.flatMap(s => s.fields) ?? [];
  const checks = lesson.apprenticeship?.checks ?? [];
  const external = r.learning?.route === 'external';
  const sorts = lesson.flow?.filter(a => a.kind === 'sort' || a.kind === 'supported') ?? [];
  const total = (external ? 3 : fields.length) + checks.length + sorts.length + 2;
  const filled = external ? Number(!!r.notes.trim()) + Number(!!r.submission.trim()) + Number(!!r.learning?.outputsConfirmed) : fields.filter(f => !fieldRequired(f,r) || r.worksheet?.[f.id]?.trim()).length;
  const done = filled + sorts.filter(a => actionDone(lesson,r,a)).length + checks.filter((_,i) => r.learning?.answers?.[checkKey(i)]?.shown).length + Number(!!(r.worksheet?.['improvement-made'] || r.learning?.repair)?.trim()) + Number(!!r.learning?.finishedAt);
  return {total, done, percent:Math.min(r.learning?.finishedAt ? 100 : 99,Math.floor(done / total * 100))};
}
