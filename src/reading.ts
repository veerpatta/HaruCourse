import type { VideoSelection } from "./teaching";

// Video segments assigned by lesson, keyed by the catalog ID whose row in
// RESOURCE-LIBRARY.md records the access evidence. Timestamps come from the
// publisher's own subtitle track, retrieved on the stated date; none is
// estimated. Videos need a connection; every lesson keeps a written route.
export const videoSelections: Record<string, VideoSelection> = {
  VID01: {
    title: "Jonathan Ball explains the Double Diamond",
    publisher: "Design Council (Vimeo)",
    url: "https://vimeo.com/857497488",
    embedUrl: "https://player.vimeo.com/video/857497488?h=7c3ce552ca&dnt=1",
    duration: "2 min 57 s",
    language: "English (UK)",
    captions: "English (United Kingdom) subtitles, publisher-authored",
    segment: "Whole video. The part to watch closely runs from 0:27 to 1:53.",
    notice: [
      "0:27–0:53 — He draws a straight line from brief to result, then asks: have I been asked to solve the right problem?",
      "0:54–1:04 — Discover and Define exist to produce a better brief, not a screen.",
      "1:17–1:32 — The small loops are make, test, learn: early, rough and repeated.",
      "2:34–2:53 — A straight line from brief to delivery is, in his words, a one-star project; asking whether it is the right problem is what improves the result.",
    ],
    differences:
      "A whiteboard sketch, drawn in portrait, with no app interface shown. The written Double Diamond page (R01) uses the same four stage names.",
    access:
      "Public Vimeo page, no account. Needs an internet connection; it is not cached for offline use. Vimeo shows its own sign-up banner, which you can ignore.",
    checked: "7 September 2026",
  },
};

// Selections of approved catalog entries, not a second resource catalog.
// Public readings re-opened 2026-09-06; no authenticated tool workflow claimed.
export const readingSelections: Record<
  string,
  { selection: string; minutes: string }
> = {
  R01: {
    selection:
      "How to use the Double Diamond: Discover, Define, Develop and Deliver",
    minutes: "20–30",
  },
  R27: {
    selection:
      "Steps to follow: plan sessions, design the interview and conduct the interview",
    minutes: "30–45",
  },
  R28: {
    selection:
      "What is Web Accessibility, Making the Web Accessible, and Evaluating Accessibility",
    minutes: "20–30",
  },
  R07: {
    selection:
      "Set a goal for your discovery, Define the problem, and What to find out in discovery",
    minutes: "30–45",
  },
  R04: {
    selection:
      "Extract observations, Sort observations, Determine findings, and Decide actions",
    minutes: "25–40",
  },
  R05: {
    selection:
      "Steps to follow: plan sessions, design tasks and run the session",
    minutes: "30–45",
  },
};
