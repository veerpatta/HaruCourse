// Apply authored second demonstrations and contextual terms into the guide
// steps of src/apprenticeship.ts. Input: JSON files shaped
// { "<lesson-id>": { secondDemo?: {step, demo}, terms?: { "<step>": [...] } } }
//
// A lesson's guide lives in one of three places, and all three are resolved:
//   1. its own entry in `guidedLessons` (m03 onward),
//   2. a named `Guided` constant its activity entry spreads (the week lessons),
//   3. an inline `guide: [` in its activity entry.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dir = process.argv[2];
const dry = process.argv.includes('--dry');
const files = readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
const work = {};
for (const f of files) {
  const j = JSON.parse(readFileSync(dir + '/' + f, 'utf8'));
  for (const [id, v] of Object.entries(j)) {
    if (work[id]) throw new Error('duplicate lesson ' + id + ' in ' + f);
    work[id] = v;
  }
}

const p = 'src/apprenticeship.ts';
let s = readFileSync(p, 'utf8');

function anchorFor(id) {
  const key = "  '" + id + "': {";
  const guided = s.indexOf('export const guidedLessons');
  const inGuided = s.indexOf(key, guided);
  if (inGuided >= 0) return inGuided;
  const at = s.indexOf(key);
  if (at < 0) throw new Error('lesson entry not found: ' + id);
  const end = s.indexOf('\n  },', at);
  const body = s.slice(at, end);
  if (/\n\s+guide: \[/.test(body)) return at;
  const spread = body.match(/\.\.\.([a-zA-Z][a-zA-Z0-9]*)/);
  if (!spread) throw new Error(id + ' has no inline guide and no spread');
  const constAt = s.indexOf('const ' + spread[1] + ': Guided = {');
  if (constAt < 0) throw new Error(id + ' spreads ' + spread[1] + ' which is not a Guided constant');
  return constAt;
}

// Offsets of each top-level `{` inside the guide array after `from`, counted
// with a brace/bracket scanner so nested objects and strings cannot confuse it.
function guideStepOffsets(from) {
  const gi = s.indexOf('guide: [', from);
  if (gi < 0) throw new Error('no guide array after offset ' + from);
  let i = gi + 'guide: ['.length;
  let depth = 0;
  let quote = null;
  const opens = [];
  for (; i < s.length; i += 1) {
    const c = s[i];
    if (quote) {
      if (c === '\\') { i += 1; continue; }
      if (c === quote) quote = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') { quote = c; continue; }
    if (c === '{' || c === '[') { if (depth === 0 && c === '{') opens.push(i); depth += 1; continue; }
    if (c === '}') { depth -= 1; continue; }
    if (c === ']') { if (depth === 0) break; depth -= 1; continue; }
  }
  return opens;
}

const esc = (t) => "'" + String(t).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const demoTs = (d) => `demo: { scenario: ${esc(d.scenario)}, beats: [${d.beats
  .map((b) => `{ label: ${esc(b.label)}, text: ${esc(b.text)} }`)
  .join(', ')}], wrongTurn: ${esc(d.wrongTurn)}, tradeoff: ${esc(d.tradeoff)}, uncertainty: ${esc(d.uncertainty)} }`;
const termsTs = (ts) => `terms: [${ts.map((t) => `{ term: ${esc(t.term)}, meaning: ${esc(t.meaning)} }`).join(', ')}]`;

let demos = 0;
let termSteps = 0;
const all = [];
for (const [id, v] of Object.entries(work)) {
  const at = anchorFor(id);
  const offsets = guideStepOffsets(at);
  if (offsets.length !== 5) throw new Error(id + ' resolved to ' + offsets.length + ' guide steps, expected 5');
  if (v.secondDemo) {
    const n = Number(v.secondDemo.step);
    if (!(n >= 1 && n <= 5)) throw new Error(id + ' bad demo step ' + n);
    if (/\bdemo:/.test(s.slice(offsets[n - 1], offsets[n - 1] + 400))) throw new Error(id + ' step ' + n + ' already has a demo');
    all.push([offsets[n - 1] + 1, ' ' + demoTs(v.secondDemo.demo) + ',']);
    demos += 1;
  }
  for (const [stepStr, list] of Object.entries(v.terms || {})) {
    const n = Number(stepStr);
    if (!(n >= 1 && n <= 5)) throw new Error(id + ' bad terms step ' + stepStr);
    if (!Array.isArray(list) || !list.length) continue;
    all.push([offsets[n - 1] + 1, ' ' + termsTs(list) + ',']);
    termSteps += 1;
  }
}

// Apply from the end so earlier offsets stay valid.
all.sort((a, b) => b[0] - a[0]);
if (!dry) { for (const [off, text] of all) s = s.slice(0, off) + text + s.slice(off); writeFileSync(p, s); }
console.log((dry ? 'DRY RUN: would insert ' : 'inserted ') + demos + ' demonstrations and terms on ' + termSteps + ' steps, across ' + Object.keys(work).length + ' lessons');
