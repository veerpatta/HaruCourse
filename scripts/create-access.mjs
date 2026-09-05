// Generate random high-entropy login keys. Only their SHA-256 hashes enter D1.
// Run once per environment, then keep the generated private files out of Git.
import { randomBytes, createHash } from "node:crypto";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
const directory = process.argv[2] || ".secrets";
mkdirSync(directory, { recursive: true });
if (existsSync(`${directory}/access-keys.json`))
  throw new Error("Access keys already exist; refusing to overwrite.");
const users = [
  { id: "creator", name: "Course creator", role: "creator" },
  { id: "haru", name: "Haru", role: "learner" },
];
const keys = Object.fromEntries(
  users.map((u) => [u.id, randomBytes(32).toString("hex")]),
);
const sql = users
  .map(
    (u) =>
      `INSERT INTO users(id,name,role,access_hash) VALUES ('${u.id}','${u.name}','${u.role}','${createHash("sha256").update(keys[u.id]).digest("hex")}');`,
  )
  .join("\n");
writeFileSync(`${directory}/access-keys.json`, JSON.stringify(keys, null, 2), {
  mode: 0o600,
});
writeFileSync(`${directory}/seed.sql`, sql, { mode: 0o600 });
console.log(
  `Private keys and seed SQL written in ${directory}. Keys were not printed.`,
);
