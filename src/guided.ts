// Shared vocabulary for guided practice material (docs/BEGINNER-LESSON-AUDIT.md).
// It lives outside src/apprenticeship.ts so that a module's guided material can
// sit in its own file without importing the activity table that consumes it,
// which would be a cycle. The shape is the refined half of an Activity: what a
// lesson gains when it is taught rather than only specified.
import type { ActiveCheck, GuideStep, SaveRoute, WorksheetField, WorksheetSection } from './teaching';

export type Route = { recommended: string; alternative: string };
export type Guided = {
  route?: Route;
  worksheet?: WorksheetSection[];
  guide?: GuideStep[];
  checks?: ActiveCheck[];
  saveRoute?: SaveRoute;
  video?: { id: string; then: string; written: string };
};

export const paperRoute = (what: string): Route => ({
  recommended: `Draw ${what} on paper, then record what you drew in the worksheet here so it is saved and reviewable. Photograph the sheet if you can and note the file name; the photo stays in your own folder.`,
  alternative: 'Prefer one file on your computer? Use the local text-file route below with the copyable starter table, and note the file location in Your work.',
});
export const textRoute: Route = {
  recommended: 'Fill the worksheet in this app, step by step. It saves as you type, on this device first and then online, and you can download a copy at any time.',
  alternative: 'Prefer a file on your computer? Use the local text-file route below with the copyable starter; then note the file location in Your work.',
};
// Modules 12 onward teach in a folder of real files. The recommended route is
// still the worksheet, because that is what saves and is reviewable, but the
// artefact itself lives on the learner's own disk and is never uploaded.
export const buildRoute = (what: string): Route => ({
  recommended: `Build ${what} in a folder on your own computer, then record what you did and what you saw in the worksheet here so it is saved and reviewable. The files stay with you; nothing is uploaded.`,
  alternative: 'Prefer to keep your notes in the same folder as the files? Use the local text-file route below with the copyable starter, then note the folder in Your work.',
});
export const numbered = (
  prefix: string,
  label: (n: number) => string,
  count: number,
  kind: 'short' | 'long',
  extra: (n: number) => Partial<WorksheetField> = () => ({}),
): WorksheetField[] =>
  Array.from({ length: count }, (_, i) => ({ id: `${prefix}-${i + 1}`, label: label(i + 1), kind, ...extra(i + 1) }));

// The last field of the last section on every refined lesson, by contract.
export const improvementMade: WorksheetField = {
  id: 'improvement-made',
  label: 'What you changed after the Check questions',
  kind: 'long',
  hint: 'The Check section sends you back to one specific answer. Write which one you changed and why.',
};
// A repeated block should arrive one piece at a time rather than as a wall of
// boxes. These are the two shapes used throughout Modules 11 to 20.
export const revealOne = (count: number, addLabel: string, note: string): GuideStep['reveal'] => ({
  first: 1, group: 1, count, addLabel, note,
});
export const revealPairs = (count: number, addLabel: string, note: string): GuideStep['reveal'] => ({
  first: 2, group: 2, count, addLabel, note,
});
