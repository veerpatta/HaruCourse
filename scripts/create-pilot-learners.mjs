// Create private learner accounts for the pilot in docs/PILOT-TEST-SCRIPT.md.
// Each participant gets their own workspace, separate from Haru's records and
// from the shared test workspace; the creator reads them from Account → Learner
// workspace. Passwords are written only to the ignored .secrets directory.
//
//   node scripts/create-pilot-learners.mjs 5            → pilot-1 … pilot-5
//   npx wrangler d1 execute harucourse --remote --file .secrets/pilot-seed.sql
//   node scripts/create-pilot-learners.mjs --close      → SQL that deactivates them
//
// Hand each participant only their own username and password. Deactivating
// keeps the records for the pilot report; delete them on the date promised in
// the participant's consent.
import { randomBytes, pbkdf2Sync } from "node:crypto";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const dirFlag = process.argv.indexOf("--dir");
const directory = dirFlag > 0 ? process.argv[dirFlag + 1] : ".secrets";
mkdirSync(directory, { recursive: true });
const close = process.argv.includes("--close");
const count = Number(process.argv.find((a) => /^\d+$/.test(a)) || 5);
if (!close && (count < 1 || count > 8)) throw new Error("Create between one and eight pilot accounts.");
const ids = Array.from({ length: close ? 8 : count }, (_, i) => `pilot-${i + 1}`);

if (close) {
  const sql = `UPDATE users SET active=0 WHERE id IN (${ids.map((id) => `'${id}'`).join(",")});\nDELETE FROM sessions WHERE user_id IN (${ids.map((id) => `'${id}'`).join(",")});\n`;
  writeFileSync(`${directory}/pilot-close.sql`, sql, { mode: 0o600 });
  console.log(`Wrote ${directory}/pilot-close.sql. Apply it with wrangler d1 execute --remote --file when the pilot ends.`);
  process.exit(0);
}

const credentialsFile = `${directory}/pilot-credentials.json`;
if (existsSync(credentialsFile)) throw new Error(`${credentialsFile} already exists; refusing to overwrite. Move it first if you mean to replace the accounts.`);
const credentials = {};
const statements = ids.map((id, i) => {
  const password = randomBytes(9).toString("base64url");
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 100000, 32, "sha256").toString("hex");
  credentials[id] = { username: id, password, name: `Pilot ${i + 1}` };
  return `INSERT INTO users(id,name,role,access_hash,username,password_hash,password_salt,active) VALUES ('${id}','Pilot ${i + 1}','learner','${randomBytes(32).toString("hex")}','${id}','${hash}','${salt}',1) ON CONFLICT(id) DO UPDATE SET password_hash=excluded.password_hash,password_salt=excluded.password_salt,active=1;`;
});
writeFileSync(credentialsFile, JSON.stringify(credentials, null, 2), { mode: 0o600 });
writeFileSync(`${directory}/pilot-seed.sql`, statements.join("\n") + "\n", { mode: 0o600 });
console.log(`Created ${count} pilot accounts in ${directory}/pilot-seed.sql; passwords are in ${credentialsFile} (not printed).`);
console.log("Apply: npx wrangler d1 execute harucourse --remote --file .secrets/pilot-seed.sql");
