import { useEffect, useRef, useState } from "react";
import { canPoll, onActivityResume } from "./activity";
import type { Position } from "../shared/position";
type Cache = { position: Position | null; dirty: boolean };
export function usePosition(userId: string) {
  const key = `harucourse:position:${userId}`;
  const initial = (): Cache => {
    try {
      return (
        JSON.parse(localStorage.getItem(key) || "null") || {
          position: null,
          dirty: false,
        }
      );
    } catch {
      return { position: null, dirty: false };
    }
  };
  const state = useRef<Cache>(initial());
  const [position, show] = useState(state.current.position);
  const [status, setStatus] = useState("Reading position saved on this device");
  const busy = useRef(false);
  function store(value: Cache) {
    state.current = value;
    localStorage.setItem(key, JSON.stringify(value));
    show(value.position);
  }
  async function sync() {
    if (busy.current) return;
    busy.current = true;
    try {
      const snapshot = state.current;
      const r = await fetch(
        "/api/learning-position",
        snapshot.dirty && snapshot.position
          ? {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                lessonId: snapshot.position.lessonId,
                sectionId: snapshot.position.sectionId,
                expectedRevision: snapshot.position.revision,
              }),
            }
          : { cache: "no-store" },
      );
      if (!r.ok && r.status !== 409) throw Error();
      const data = (await r.json()) as { position: Position | null };
      if (r.status === 409) {
        store({ position: data.position, dirty: false });
        setStatus(
          "A newer cloud reading position was kept. Continue learning uses that position.",
        );
      } else if (state.current === snapshot) {
        store({ position: data.position, dirty: false });
        setStatus("Reading position saved to your account");
      } else if (data.position) {
        store({
          position: {
            ...state.current.position!,
            revision: data.position.revision,
          },
          dirty: true,
        });
      }
    } catch {
      setStatus(
        "Reading position saved on this device; will sync when connected",
      );
    } finally {
      busy.current = false;
    }
  }
  useEffect(() => {
    void sync();
    // A dirty position is already persisted locally, so deferring the sync until
    // the app is online and on screen loses nothing.
    const timer = setInterval(() => {
      if (canPoll()) void sync();
    }, 2000);
    const stopWatching = onActivityResume(() => void sync());
    return () => {
      clearInterval(timer);
      stopWatching();
    };
  }, [key]);
  function remember(lessonId: string, sectionId: string) {
    if (
      state.current.position?.lessonId === lessonId &&
      state.current.position.sectionId === sectionId
    )
      return;
    store({
      position: {
        lessonId,
        sectionId,
        revision: state.current.position?.revision || 0,
        updatedAt: new Date().toISOString(),
      },
      dirty: true,
    });
    void sync();
  }
  return { position, remember, status };
}
