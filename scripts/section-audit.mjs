// Prints every assigned resource section beside its catalog row's recorded
// selection, grouped by resource. The rule that a lesson's `section` must stay
// inside the row's recorded selection cannot be asserted automatically — it is
// a judgement about meaning — so this script does not fail a build. It puts the
// two strings next to each other so the judgement can actually be made.
//
//   node scripts/section-audit.mjs            # every authored module
//   node scripts/section-audit.mjs m18 m19    # only these modules
import { registerHooks } from "node:module";
import { readFileSync } from "node:fs";
registerHooks({
  resolve(s, c, next) {
    return next(s.startsWith(".") && !/\.[a-z]+$/.test(s) ? s + ".ts" : s, c);
  },
});
const { lessons } = await import("../src/lessons.ts");
const catalog = readFileSync("RESOURCE-LIBRARY.md", "utf8");
const selection = {};
for (const m of catalog.matchAll(
  /^\| (R\d+) \| \[[^\]]*\]\([^)]*\) \| ([^|]*) \|/gm,
))
  selection[m[1]] = m[2].trim();
const only = new Set(process.argv.slice(2));
const byResource = {};
for (const l of lessons) {
  if (!l.module || (only.size && !only.has(l.module))) continue;
  for (const r of l.resources || [])
    (byResource[r.id] ||= []).push(`${l.id}: ${r.section}`);
}
for (const id of Object.keys(byResource).sort()) {
  console.log(`\n### ${id} — recorded selection: ${selection[id]}`);
  for (const line of [...new Set(byResource[id])]) console.log("   " + line);
}
