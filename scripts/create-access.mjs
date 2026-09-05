// Generate private username credentials and salted hashes for a new environment.
import { randomBytes, pbkdf2Sync } from "node:crypto";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
const directory = process.argv[2] || ".secrets";
mkdirSync(directory, { recursive: true });
if (existsSync(`${directory}/login-credentials.json`))
  throw new Error("Login credentials already exist; refusing to overwrite.");
const users = [
  { id: "creator", username: "itsme", name: "Course creator", role: "creator" },
  { id: "haru", username: "haru", name: "Haru", role: "learner" },
  { id: "test", username: "test", name: "Test workspace", role: "learner" },
];
const credentials = Object.fromEntries(
  users.map((u) => [
    u.id,
    {
      username: u.username,
      password: u.id === "test" ? "" : randomBytes(24).toString("hex"),
    },
  ]),
);
const sql = users
  .map((u) => {
    const salt = randomBytes(16).toString("hex");
    const hash =
      u.id === "test"
        ? "disabled"
        : pbkdf2Sync(
            credentials[u.id].password,
            salt,
            100000,
            32,
            "sha256",
          ).toString("hex");
    return `INSERT INTO users(id,name,role,access_hash,username,password_hash,password_salt) VALUES ('${u.id}','${u.name}','${u.role}','${randomBytes(32).toString("hex")}','${u.username}','${hash}','${salt}') ON CONFLICT(id) DO UPDATE SET username=excluded.username,password_hash=excluded.password_hash,password_salt=excluded.password_salt;`;
  })
  .join("\n");
writeFileSync(
  `${directory}/login-credentials.json`,
  JSON.stringify(credentials, null, 2),
  { mode: 0o600 },
);
writeFileSync(`${directory}/seed.sql`, sql, { mode: 0o600 });
console.log(
  `Private credentials and seed SQL written in ${directory}. Passwords were not printed.`,
);
