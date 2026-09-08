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
  VID02: {
    title: "Web Accessibility Perspectives: Keyboard Compatibility",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/keyboard/",
    embedUrl: "https://www.youtube-nocookie.com/embed/93UgG72os8M",
    duration: "36 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 36 seconds. Watch from 0:09 to 0:29.",
    notice: [
      "0:09–0:16 — Many people use only the keyboard to move around a site, by preference or by circumstance.",
      "0:16–0:25 — Temporarily limited mobility, a permanent physical disability, or simply a broken mouse: the result is the same.",
      "0:25–0:29 — Sites and apps need to be operable by keyboard.",
    ],
    differences: "Short live-action scenes and a plain website, not the product you are specifying. It makes the case for keyboard operation; it does not name any key.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID03: {
    title: "Web Accessibility Perspectives: Large Links, Buttons, and Controls",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/controls/",
    embedUrl: "https://www.youtube-nocookie.com/embed/CzfKB3PuuIY",
    duration: "33 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 33 seconds. Watch from 0:05 to 0:28.",
    notice: [
      "0:05–0:12 — Hitting a small target takes effort, and many sites try to thread the needle.",
      "0:13–0:18 — The area for clicking and tapping can be made larger and easier to hit.",
      "0:18–0:24 — That matters most on a phone, and especially when somebody is moving at the time.",
      "0:24–0:28 — It is critical for people with reduced dexterity.",
    ],
    differences: "A threading-a-needle metaphor and generic web scenes, not your screens. It argues for larger targets; it gives no measurement, which is what your own step does.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID04: {
    title: "Web Accessibility Perspectives: Notifications and Feedback",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/notifications/",
    embedUrl: "https://www.youtube-nocookie.com/embed/E1fEv4Vpexg",
    duration: "56 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 56 seconds. Watch from 0:12 to 0:36.",
    notice: [
      "0:12–0:18 — When the response is not the one you expected, you start wondering whether something is wrong.",
      "0:21–0:27 — Without clear notifications and feedback, people are quickly disorientated and confused.",
      "0:27–0:32 — Error messages especially are often complex and confusing.",
      "0:32–0:36 — Making them understandable is usually quite simple.",
    ],
    differences: "A clockwork metaphor and generic interfaces, not your product. It says why messages matter; the wording, placement and duration are yours to decide.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID05: {
    title: "Web Accessibility Perspectives: Understandable Content",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/understandable/",
    embedUrl: "https://www.youtube-nocookie.com/embed/BYRxF2yInfA",
    duration: "46 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 46 seconds. Watch from 0:04 to 0:40.",
    notice: [
      "0:04–0:18 — The same sentence twice: once in long words, then plainly. The plain one is the point.",
      "0:18–0:24 — Many sites lack structure: headings, lists and separations.",
      "0:24–0:30 — Or they use overly complex language, jargon and unexplained acronyms.",
      "0:30–0:40 — That makes them hard for many people, including anyone reading in a second language.",
    ],
    differences: "A deliberately absurd sentence and generic pages, not your labels. It is about wording in general; your table is about the words your own participants used.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID06: {
    title: "Web Accessibility Perspectives: Clear Layout and Design",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/layout/",
    embedUrl: "https://www.youtube-nocookie.com/embed/tfkzj5VC9P8",
    duration: "54 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 54 seconds. Watch from 0:10 to 0:48.",
    notice: [
      "0:10–0:15 — Good design involves good layout, and that means a better experience.",
      "0:15–0:21 — It names the parts: clear headings, navigation bars and consistent styling.",
      "0:27–0:34 — Complex layouts make finding information difficult or impossible for people with visual disabilities.",
      "0:42–0:48 — Bad layout also affects anyone who is not confident around computers.",
    ],
    differences: "Everyday clutter and generic pages, not your outline. It argues that headings and navigation carry structure; writing that structure down is your step.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID07: {
    title: "Web Accessibility Perspectives: Speech Recognition",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/voice/",
    embedUrl: "https://www.youtube-nocookie.com/embed/7RHG_XiQ0ck",
    duration: "1 min 3 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 63 seconds. Watch from 0:12 to 0:54.",
    notice: [
      "0:12–0:16 — Voice recognition as one of the advances of technology, used for search, dictation and navigation.",
      "0:28–0:33 — Many people with physical disabilities rely on it to use a computer at all.",
      "0:35–0:42 — When a site is not built for it, the person is left saying “Go? Cancel?” with nothing to act on.",
      "0:42–0:54 — It also helps people with a temporary limitation such as an injured arm, and can stop an injury getting worse.",
    ],
    differences: "Live-action scenes of people speaking to devices, not your product. It shows why an action needs a name that can be spoken or reached another way; your gesture list is where that gets specific.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID08: {
    title: "Web Accessibility Perspectives: Colors with Good Contrast",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/contrast/",
    embedUrl: "https://www.youtube-nocookie.com/embed/Hui87z2Vx8o",
    duration: "55 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 55 seconds. Watch from 0:15 to 0:50.",
    notice: [
      "0:15–0:20 — Poor contrast makes navigating, reading and interacting a real pain.",
      "0:20–0:30 — Enough contrast is needed between foreground and background, and not only for text: links, icons and buttons too.",
      "0:30–0:34 — If it is important enough to be seen, it needs to be clear.",
      "0:34–0:41 — It is essential for people with low contrast sensitivity, which becomes more common with age.",
      "0:48–0:50 — It also helps in different lighting conditions.",
    ],
    differences: "Generic scenes and pages, not your palette. It gives no numbers; the thresholds and the measuring are your own step.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID09: {
    title: "Web Accessibility Perspectives: Customizable Text",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/customizable/",
    embedUrl: "https://www.youtube-nocookie.com/embed/rbiI65Jcz5s",
    duration: "39 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 39 seconds. Watch from 0:09 to 0:34.",
    notice: [
      "0:09–0:17 — Customisation is not always a preference; sometimes it is a necessity.",
      "0:17–0:22 — Being able to adjust the text is crucial with low vision and dyslexia.",
      "0:22–0:34 — Properly built pages let text change size, spacing, font and colour without losing function or clarity.",
    ],
    differences: "Generic pages with text being resized, not your layout. It shows that text must be able to grow; finding what collides when it does is your own stress test.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
    checked: "7 September 2026",
  },
  VID10: {
    title: "Web Accessibility Perspectives: Text to Speech",
    publisher: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/perspective-videos/speech/",
    embedUrl: "https://www.youtube-nocookie.com/embed/8Rn5pXCdZWU",
    duration: "45 s",
    language: "English",
    captions: "English captions plus French and Bahasa Indonesia subtitles, all publisher-authored; an audio-described version is offered on the same page",
    segment: "Whole video, 45 seconds. Watch from 0:04 to 0:40.",
    notice: [
      "0:04–0:11 — A computer voice reads the screen aloud, because some people cannot see the text on it.",
      "0:11–0:20 — Blind people have relied on this for years, and it matters for many people with dyslexia too.",
      "0:29–0:34 — For it to work, the page has to be properly built.",
      "0:34–0:40 — The same structure also helps search engines index what is there.",
    ],
    differences: "A synthetic voice reading generic pages, not your chart. It shows why something has to carry the meaning when the picture cannot; writing that sentence is your step.",
    access: "Public W3C page and a YouTube video, no account. The W3C page carries the publisher’s own full transcript in text, so the video is optional and the reading route loses nothing. The embed is click-to-load and uses youtube-nocookie. Needs a connection; not cached for offline use.",
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
