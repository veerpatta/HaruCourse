-- Improvement plan, 4 October 2026.
--
-- 1. Cheap change detection. Every progress save and every feedback row bumps
--    the owning learner's records_version, so a polling client can ask "has
--    anything changed since version N?" by reading one users row instead of
--    re-reading every progress row. An open tab re-reading ~225 rows every five
--    seconds exhausted D1's free daily read allowance.
-- 2. Structured reviews. A creator review records the criterion it checked,
--    its outcome, the evidence looked at and the next action, so "reviewed
--    against criteria" and "demonstrated independently" are recorded states
--    rather than inferred ones. AI critique never sets them.
-- 3. Review destination. The creator records who reviews and the response
--    window learners should expect; nothing here sends a notification.
ALTER TABLE users ADD COLUMN records_version INTEGER NOT NULL DEFAULT 0;
ALTER TABLE feedback ADD COLUMN criterion TEXT;
ALTER TABLE feedback ADD COLUMN outcome TEXT CHECK (outcome IS NULL OR outcome IN ('needs-revision', 'meets-criterion', 'demonstrated-independently'));
ALTER TABLE feedback ADD COLUMN evidence TEXT;
ALTER TABLE feedback ADD COLUMN next_action TEXT;
CREATE TABLE course_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  updated_by TEXT REFERENCES users(id)
);
CREATE TRIGGER bump_records_on_progress_insert AFTER INSERT ON progress BEGIN
  UPDATE users SET records_version = records_version + 1 WHERE id = NEW.user_id;
END;
CREATE TRIGGER bump_records_on_progress_update AFTER UPDATE ON progress BEGIN
  UPDATE users SET records_version = records_version + 1 WHERE id = NEW.user_id;
END;
CREATE TRIGGER bump_records_on_feedback_insert AFTER INSERT ON feedback BEGIN
  UPDATE users SET records_version = records_version + 1 WHERE id = NEW.user_id;
END;
