// Checks every external link the course content names, so a moved or removed
// source is found at release rather than by a learner. Run: npm run test:links
// Network required. Exits 1 when a link fails; prints redirects to update.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src", "shared", "public/starters", "public/labs"];
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx|html|md)$/.test(name)) files.push(path);
  }
};
roots.forEach(walk);
files.push("RESOURCE-LIBRARY.md");

// Placeholders and pages that refuse automated requests are listed with the reason.
const skip = new Map([
  ["https://yourusername.github.io", "placeholder the learner replaces"],
  ["https://chatgpt.com", "sign-in page; blocks automated requests"],
  ["https://gemini.google.com", "sign-in page; blocks automated requests"],
]);
const urls = new Map();
for (const file of files) {
  for (const match of readFileSync(file, "utf8").matchAll(/https?:\/\/[a-z0-9][^\s"'`<>)\]\\]+/gi)) {
    const url = match[0].replace(/[.,;:]+$/, "");
    if (/localhost|127\.0\.0\.1|example\.(com|org)|\$\{/.test(url)) continue;
    if (!urls.has(url)) urls.set(url, file);
  }
}

const agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131 Safari/537.36 HaruCourse-link-check";
async function check(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(url, { redirect: "follow", headers: { "user-agent": agent, accept: "text/html,*/*" }, signal: AbortSignal.timeout(20000) });
      await response.body?.cancel();
      return { status: response.status, final: response.url };
    } catch (error) {
      if (attempt) return { status: 0, error: error.cause?.code || error.name };
    }
  }
}

const failures = [];
const moved = [];
const queue = [...urls.keys()];
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    const reason = [...skip].find(([prefix]) => url.startsWith(prefix))?.[1];
    if (reason) continue;
    const result = await check(url);
    // 401/403/429 mean the server answered but refused a robot; record, do not fail.
    if (result.status >= 400 && ![401, 403, 429].includes(result.status) || result.status === 0) failures.push(`${result.status || result.error} ${url} (${urls.get(url)})`);
    else if (result.final && result.final.replace(/\/$/, "") !== url.replace(/\/$/, "") && new URL(result.final).hostname !== new URL(url).hostname) moved.push(`${url} → ${result.final}`);
  }
});
await Promise.all(workers);
console.log(`Checked ${urls.size - [...urls.keys()].filter((u) => [...skip.keys()].some((p) => u.startsWith(p))).length} links from ${files.length} files.`);
if (moved.length) console.log(`Moved to another site (review):\n  ${moved.join("\n  ")}`);
if (failures.length) {
  console.error(`Failed:\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log("Every link answered.");
