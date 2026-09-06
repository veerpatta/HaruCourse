CREATE TABLE learning_positions (
 user_id TEXT PRIMARY KEY REFERENCES users(id),
 lesson_id TEXT NOT NULL,
 section_id TEXT NOT NULL,
 revision INTEGER NOT NULL CHECK(revision > 0),
 updated_at TEXT NOT NULL
);
