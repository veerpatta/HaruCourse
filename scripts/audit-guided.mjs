// Report EVERY beginner-contract violation for the given module prefixes at once,
// instead of the content checker's first failing assert. Usage:
//   npm run audit:guided m06 m07
import { registerHooks } from 'node:module';
registerHooks({ resolve(sp, c, next) { return next(sp.startsWith('.') && !/\.[a-z]+$/.test(sp) ? sp + '.ts' : sp, c); } });
const { publishedLessons } = await import('../src/lessons.ts');
const prefixes = process.argv.slice(2);
const VERDICT = /^(yes|no|right|correct|wrong|not quite|not yet|nearly|almost)\b[.,]/i;
const problems = [];
const stats = [];

for (const l of publishedLessons) {
  if (!prefixes.some((p) => l.id.startsWith(p))) continue;
  const a = l.apprenticeship;
  const say = (m) => problems.push(l.id + ': ' + m);
  if (!a.guide) { say('no guide at runtime — the lesson never reached the reader'); continue; }
  if (!a.worksheet) { say('no worksheet at runtime'); continue; }
  if (!a.route) say('no route');
  if (a.guide.length !== l.steps.length) say(`guide has ${a.guide.length} entries for ${l.steps.length} steps`);

  const fields = a.worksheet.flatMap((w) => w.fields);
  const ids = fields.map((f) => f.id);
  const dupes = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupes.length) say('duplicate field ids: ' + [...new Set(dupes)].join(', '));
  const claimed = a.guide.flatMap((g) => g.fields || []);
  for (const id of claimed) if (!ids.includes(id)) say('step claims missing field ' + id);
  for (const id of ids) {
    const n = claimed.filter((c) => c === id).length;
    if (n === 0) say('field ' + id + ' belongs to no step');
    if (n > 1) say('field ' + id + ' is claimed by ' + n + ' steps');
  }
  if (!ids.includes('improvement-made')) say('no improvement-made field');
  else if (a.worksheet[a.worksheet.length - 1].fields.at(-1).id !== 'improvement-made')
    say('improvement-made is not the last field of the last section');

  for (const f of fields) {
    if (f.label.length > 240) say(`field ${f.id} label is ${f.label.length} chars`);
    for (const [k, v] of Object.entries({ label: f.label, hint: f.hint, example: f.example }))
      if (v && v.includes('|')) say(`field ${f.id} ${k} contains a pipe`);
    if (f.example && !f.example.includes('made up')) say(`field ${f.id} example lacks the literal "made up"`);
    if (f.kind === 'choice' && !f.options?.length) say(`field ${f.id} is a choice with no options`);
  }

  let demos = 0, helps = 0;
  for (const [i, g] of a.guide.entries()) {
    const w = `step ${i + 1}`;
    if (!g.expect) say(w + ' has no expect');
    else if (g.expect.length > 240) say(`${w} expect is ${g.expect.length} chars`);
    if (g.example && !g.example.includes('made up')) say(w + ' example lacks the literal "made up"');
    if (g.demo) {
      demos += 1;
      if (!/made.up|Made.up|invented/.test(g.demo.scenario)) say(w + ' demo scenario does not say it is made up');
      if (g.demo.beats.length < 3) say(w + ' demo has fewer than three beats');
      for (const b of g.demo.beats) if (!b.label || !b.text) say(w + ' demo beat is incomplete');
      if (!g.demo.wrongTurn || !g.demo.tradeoff || !g.demo.uncertainty) say(w + ' demo is missing wrongTurn, tradeoff or uncertainty');
    }
    if (g.supported) {
      helps += 1;
      if (!g.supported.material || !g.supported.question || !g.supported.then) say(w + ' supported case is missing material, question or then');
      checkOptions(g.supported.options, w + ' supported', say);
    }
    if (g.sorter) {
      helps += 1;
      const t = g.sorter;
      if (!/made up|made-up/.test(t.intro)) say(w + ' sorter intro does not say it is made up');
      if (!t.then || !t.pattern) say(w + ' sorter is missing then or pattern');
      if (!(t.options?.length >= 2)) say(w + ' sorter needs at least two labels');
      if (!(t.items?.length >= 3 && t.items.length <= 8)) say(w + ' sorter needs three to eight lines');
      const sids = (t.items || []).map((x) => x.id);
      if (new Set(sids).size !== sids.length) say(w + ' sorter line ids are not unique');
      for (const it of t.items || []) {
        if (!it.text) say(w + ' sorter line ' + it.id + ' has no text');
        if (!t.options.includes(it.answer)) say(w + ' sorter line ' + it.id + ' answers "' + it.answer + '" which is not an offered label');
        for (const o of t.options) {
          if (!it.feedback?.[o]) say(w + ' sorter line ' + it.id + ' does not explain "' + o + '"');
          else if (VERDICT.test(it.feedback[o])) say(w + ' sorter line ' + it.id + ' "' + o + '" opens with a verdict');
        }
      }
    }
    if (g.reveal) {
      if (!g.fields?.length) say(w + ' reveals fields it does not have');
      else {
        if (!(g.reveal.first >= 1 && g.reveal.group >= 1)) say(w + ' reveal needs a positive first and group');
        if ((g.reveal.count ?? g.fields.length) > g.fields.length) say(w + ' reveal count exceeds its fields');
        if (!g.reveal.addLabel || !g.reveal.note) say(w + ' reveal needs a button label and a note');
      }
    }
  }
  if (!demos) say('no demonstration anywhere');
  if (!helps) say('no supported case and no sorter');

  if (!a.checks?.length) say('no checks');
  for (const c of a.checks || []) {
    checkOptions(c.options, 'check "' + c.question.slice(0, 40) + '"', say);
    if (!c.repair || !c.recheck) say('check "' + c.question.slice(0, 40) + '" needs a repair and a recheck');
  }
  if (!a.saveRoute) say('no saveRoute');
  else for (const k of ['auto', 'external', 'creator', 'next']) if (!a.saveRoute[k]) say('saveRoute missing ' + k);

  stats.push(`${l.id}  fields ${fields.length}  demos ${demos}  help ${helps}  checks ${(a.checks || []).length}`);
}

function checkOptions(options, where, say) {
  if (!options || options.length < 2) return say(where + ' needs at least two options');
  const right = options.filter((o) => o.correct).length;
  if (right !== 1) say(where + ' has ' + right + ' defensible options, needs exactly one');
  for (const o of options) {
    if (!o.label || !o.feedback) say(where + ' option needs a label and feedback');
    else if (VERDICT.test(o.feedback)) say(where + ' option "' + o.label.slice(0, 30) + '" opens with a verdict');
  }
}

console.log(stats.join('\n'));
console.log('\n' + (problems.length ? problems.length + ' PROBLEMS\n' + problems.join('\n') : 'no problems'));
process.exit(problems.length ? 1 : 0);
