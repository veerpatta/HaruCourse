export const sections = [
  "learn",
  "practice-plan",
  "check",
  "practice",
] as const;
export type Position = {
  lessonId: string;
  sectionId: string;
  revision: number;
  updatedAt: string;
};
