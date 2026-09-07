// Update delivery. A new course version installs as a waiting service worker;
// until the page asks it to take over, the learner keeps reading the old
// bundle. The previous build had no way to ask, so an "update available"
// notice could stand forever. These helpers keep the decision with the
// learner and refuse to swap the app out from under unsaved typing.

// Practice drafts write `<key>:sync` alongside the record, holding
// {revision, dirty}. Anything still dirty has not reached the server yet.
export function unsavedDrafts(storage: Pick<Storage, "length" | "key" | "getItem">) {
  const pending: string[] = [];
  try {
    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i);
      if (!key || !key.endsWith(":sync") || !key.startsWith("harucourse:")) continue;
      try {
        if (JSON.parse(storage.getItem(key) || "null")?.dirty)
          pending.push(key.slice(0, -":sync".length));
      } catch {
        // An unreadable sidecar is not evidence of unsaved work.
      }
    }
  } catch {
    // Storage unavailable: nothing is known to be pending.
  }
  return pending;
}

export function updateMessage(pending: number) {
  return pending
    ? `A newer version of the course is ready. ${pending === 1 ? "One lesson is" : `${pending} lessons are`} still saving — wait for “Saved online”, then update.`
    : "A newer version of the course is ready. Your work is saved.";
}
