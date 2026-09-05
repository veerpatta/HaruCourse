CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('creator','learner')),
  access_hash TEXT NOT NULL UNIQUE,
  active INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  expires_at INTEGER NOT NULL
);
CREATE INDEX sessions_expiry ON sessions(expires_at);
CREATE TABLE login_attempts (bucket TEXT PRIMARY KEY, attempts INTEGER NOT NULL, expires_at INTEGER NOT NULL);
CREATE TABLE progress (
  user_id TEXT NOT NULL REFERENCES users(id),
  lesson_id TEXT NOT NULL,
  revision INTEGER NOT NULL,
  record_json TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(user_id, lesson_id)
);
CREATE TABLE submission_history (
  user_id TEXT NOT NULL REFERENCES users(id),
  lesson_id TEXT NOT NULL,
  revision INTEGER NOT NULL,
  record_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY(user_id, lesson_id, revision)
);
CREATE TRIGGER snapshot_progress_insert AFTER INSERT ON progress BEGIN
  INSERT INTO submission_history VALUES (NEW.user_id, NEW.lesson_id, NEW.revision, NEW.record_json, NEW.updated_at);
END;
CREATE TRIGGER snapshot_progress_update AFTER UPDATE ON progress BEGIN
  INSERT INTO submission_history VALUES (NEW.user_id, NEW.lesson_id, NEW.revision, NEW.record_json, NEW.updated_at);
END;
CREATE TABLE feedback (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  revision INTEGER NOT NULL,
  author_id TEXT NOT NULL REFERENCES users(id),
  source TEXT NOT NULL CHECK(source IN ('creator','ai')),
  body TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id,lesson_id,revision) REFERENCES submission_history(user_id,lesson_id,revision)
);
CREATE INDEX feedback_by_submission ON feedback(user_id,lesson_id,created_at);
