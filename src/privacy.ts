import type { RecordData } from "../shared/record";
import type { Lesson } from "./teaching";

// Answers marked `sensitive` may describe another real person. They sync to
// the course server and the reviewer can read them, so the device refuses to
// upload an email address or phone number found in one, and says why. This is
// a guard against the most identifying details, not an anonymiser: removing a
// name or a number does not make research notes anonymous.
export type ContactKind = "email address" | "phone number";
export type PrivacyIssue = { fieldId: string; label: string; kind: ContactKind };

const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*\.[A-Z]{2,}/i;
// A run that looks like a phone number: 10 to 13 digits, optionally grouped,
// with a leading + or at least one unbroken run of five digits. Course figures
// such as "1,000 reach the list, 420 open" or "2026 and 2027" do not qualify.
const PHONE_CANDIDATE = /\+?\d[\d ().-]{8,}\d/g;

export function contactDetails(text: string): ContactKind[] {
  const found = new Set<ContactKind>();
  if (EMAIL.test(text)) found.add("email address");
  for (const match of text.match(PHONE_CANDIDATE) || []) {
    const digits = match.replace(/\D/g, "");
    if (digits.length >= 10 && digits.length <= 13 && (match.startsWith("+") || /\d{5,}/.test(match))) {
      found.add("phone number");
      break;
    }
  }
  return [...found];
}

export function privacyIssues(lesson: Lesson, record: RecordData): PrivacyIssue[] {
  const fields = lesson.apprenticeship?.worksheet?.flatMap((s) => s.fields) || [];
  const issues: PrivacyIssue[] = [];
  for (const field of fields) {
    if (!field.sensitive) continue;
    const value = record.worksheet?.[field.id];
    if (!value) continue;
    for (const kind of contactDetails(value)) issues.push({ fieldId: field.id, label: field.label, kind });
  }
  return issues;
}

export function privacyHold(lesson: Lesson, record: RecordData): string | null {
  const first = privacyIssues(lesson, record)[0];
  return first
    ? `Kept on this device only. Remove the ${first.kind} in “${first.label}” to save online: contact details about another person never belong in a synced answer.`
    : null;
}
