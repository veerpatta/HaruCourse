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
