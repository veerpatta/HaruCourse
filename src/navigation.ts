import { useSyncExternalStore } from "react";

// One source of truth for which view is showing. Both the browser history and
// the mobile tab bar read from here, so a Back press and a tab tap can never
// disagree about the active view.
export type NavState = {
  tab: string;
  // The Level 0 baseline exercise, opened from the dashboard.
  baseline: boolean;
  // A course lesson id opened inside the learning studio.
  lesson: string | null;
};

const initial: NavState = { tab: "Lessons", baseline: false, lesson: null };
const marker = "harucourse:nav";

type Entry = NavState & { [marker]: true; scrollY: number };

function read(state: unknown): NavState {
  if (!state || typeof state !== "object") return initial;
  const value = state as Record<string, unknown>;
  if (value[marker] !== true) return initial;
  return {
    tab: typeof value.tab === "string" ? value.tab : initial.tab,
    baseline: value.baseline === true,
    lesson: typeof value.lesson === "string" ? value.lesson : null,
  };
}

function scrollOf(state: unknown): number {
  if (!state || typeof state !== "object") return 0;
  const value = (state as Record<string, unknown>).scrollY;
  return typeof value === "number" ? value : 0;
}

function entry(state: NavState, scrollY: number): Entry {
  return { ...state, [marker]: true, scrollY };
}

function same(a: NavState, b: NavState) {
  return a.tab === b.tab && a.baseline === b.baseline && a.lesson === b.lesson;
}

let current: NavState =
  typeof window === "undefined" ? initial : read(window.history.state);
const listeners = new Set<() => void>();

function announce() {
  for (const listener of [...listeners]) listener();
}

let started = false;
function start() {
  if (started) return;
  started = true;
  // Restore whatever view a reload landed on, then claim the current entry so
  // the first Back press has something to return to.
  try {
    window.history.scrollRestoration = "manual";
  } catch {
    // Not supported here; the browser keeps its own restoration behaviour.
  }
  window.history.replaceState(entry(current, window.scrollY), "");
  window.addEventListener("popstate", (event) => {
    const restored = scrollOf(event.state);
    current = read(event.state);
    announce();
    // Wait for the restored view to render before putting the page back where
    // it was, otherwise the document is still too short to scroll.
    requestAnimationFrame(() => window.scrollTo(0, restored));
  });
}

export function navigate(patch: Partial<NavState>) {
  start();
  const next = { ...current, ...patch };
  if (same(next, current)) return;
  // Remember where the view being left was scrolled to.
  window.history.replaceState(entry(current, window.scrollY), "");
  current = next;
  window.history.pushState(entry(next, 0), "");
  announce();
}

function subscribe(listener: () => void) {
  start();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useNavigation(): NavState {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => initial,
  );
}
