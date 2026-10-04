// Formative questions save the label the learner chose. Two rules keep that
// safe while the wording of options improves:
//
// 1. An option's earlier wordings live in `was`, so an answer saved before a
//    label was rewritten still maps to the option it meant.
// 2. The order on screen is a stable shuffle keyed by the question, never the
//    authored order. Authors conventionally wrote the defensible option first;
//    showing that order taught learners to pick the first option.
type Option = { label: string; was?: string[] };

export function matchChoice<T extends Option>(options: T[], value?: string | null): T | undefined {
  if (!value) return undefined;
  return options.find((o) => o.label === value) ?? options.find((o) => o.was?.includes(value));
}

// FNV-1a: small, fast and identical in the browser, the Worker and Node.
function hash(text: string) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

// The same seed always yields the same order, so a learner who leaves and
// returns sees an unchanged question, and the generated documents match the
// app. The seed is the lesson and question identity, not the learner.
export function displayOrder<T extends Option>(options: T[], seed: string): T[] {
  return options
    .map((option, index) => ({ option, key: hash(`${seed}\u0000${index}\u0000${option.label}`) }))
    .sort((a, b) => a.key - b.key)
    .map(({ option }) => option);
}
