import {
  cleanupOutdatedCaches,
  precacheAndRoute,
  createHandlerBoundToURL,
} from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("/index.html"), {
    denylist: [
      /^\/api\//,
      /^\/mcp(?:\/|\?|$)/,
      /^\/authorize(?:\?|$)/,
      /^\/oauth\//,
      /^\/\.well-known\//,
    ],
  }),
);
// Leave a new worker waiting until all existing app windows are closed.
// This protects unsaved reflections from a forced reload during an update.

// The page can ask the waiting worker to take over. Without this listener the
// update notice was unactionable: a new worker stayed waiting until every
// window for the origin closed, which in practice never happened, so the
// learner kept an older course behind a permanent "update available" message.
// Activation is still learner-initiated — nothing here reloads on its own, and
// the page only sends this message once drafts have finished saving.
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
