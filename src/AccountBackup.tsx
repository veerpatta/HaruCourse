import { useState } from "react";
import { baseline } from "./course";
import { lessons } from "./lessons";
import { usePractice } from "./usePractice";
import { recordSchema, type User } from "../shared/record";

function download(name: string, value: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([value], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function AccountBackup({ user }: { user: User }) {
  const [id, setId] = useState(baseline.id);
  return (
    <>
      <label htmlFor="backup-lesson">Choose work to export or restore</label>
      <select
        id="backup-lesson"
        value={id}
        onChange={(e) => setId(e.target.value)}
      >
        {[baseline, ...lessons].map((l) => (
          <option key={l.id} value={l.id}>
            {l.title}
          </option>
        ))}
      </select>
      <BackupRecord key={id} user={user} id={id} />
    </>
  );
}
function BackupRecord({ user, id }: { user: User; id: string }) {
  const lesson = [baseline, ...lessons].find((l) => l.id === id)!;
  const { record, setRecord, status, conflict, resolve } = usePractice(
    user,
    id,
    id === baseline.id
      ? `harucourse:baseline:v1:${user.id}`
      : `harucourse:lesson:${user.id}:${id}`,
  );
  const [message, setMessage] = useState("");
  return (
    <>
      <p role="status">{status}</p>
      {conflict && (
        <div className="notice">
          <p>Two versions need your choice. Your draft is preserved.</p>
          <pre className="record-preview">
            {conflict.record?.notes || "Empty cloud record"}
          </pre>
          <button className="secondary" onClick={() => resolve(true)}>
            Back up draft and use cloud
          </button>
          <button className="secondary" onClick={() => resolve(false)}>
            Keep my draft
          </button>
        </div>
      )}
      <div className="actions">
        <button
          className="secondary"
          onClick={() =>
            download(
              `${id}.json`,
              JSON.stringify({ lessonId: id, record }, null, 2),
            )
          }
        >
          Download backup
        </button>
        <button
          className="secondary"
          onClick={() =>
            download(
              `${id}-review.md`,
              `# ${lesson.title}\n\nLesson: ${id}\nStatus: ${record.status} (self-reported, not assessed)\n\n## Task\n${lesson.steps.map((s) => `- ${s.text}`).join("\n")}\n\n## Output\n${lesson.outputs.map((s) => `- ${s}`).join("\n")}\n\n## Criteria\n${lesson.rubric.map((s) => `- ${s}`).join("\n")}\n\n## Notes\n${record.notes}\n\n## Work reference\n${record.submission}\n\nAsk for actual artifacts when references are inaccessible. Label AI critique and identify a bounded repair.\n`,
              "text/markdown",
            )
          }
        >
          Export review
        </button>
      </div>
      {user.role === "learner" && (
        <>
          <label htmlFor="backup-import">Restore this lesson’s backup</label>
          <input
            id="backup-import"
            type="file"
            accept=".json,application/json"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (!file) return;
              try {
                if (file.size > 131072) throw Error("Backup is too large.");
                const data = JSON.parse(await file.text());
                if (data.lessonId && data.lessonId !== id)
                  throw Error("Choose the matching lesson before restoring.");
                if (
                  !data.lessonId &&
                  id !== baseline.id &&
                  ![`${id}.json`, `${id}-before-conflict.json`].includes(
                    file.name,
                  )
                )
                  throw Error(
                    "Choose the matching lesson for this legacy backup.",
                  );
                const imported = recordSchema.parse(
                  data.lessonId ? data.record : data,
                );
                if (conflict)
                  throw Error(
                    "Resolve the existing conflict before importing.",
                  );
                download(
                  `${id}-before-import.json`,
                  JSON.stringify({ lessonId: id, record }, null, 2),
                );
                setRecord(imported);
                setMessage(
                  "Backup restored. Previous draft downloaded; changes will sync.",
                );
              } catch (error) {
                setMessage(
                  error instanceof Error
                    ? error.message
                    : "Could not read this backup.",
                );
              }
            }}
          />
        </>
      )}
      {message && <p role="status">{message}</p>}
    </>
  );
}
