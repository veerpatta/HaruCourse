import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      registerType: "prompt",
      manifest: {
        id: "/",
        name: "Haru Course — Product Design",
        short_name: "Haru Course",
        description:
          "A personal product design apprenticeship. Learn, make, reflect.",
        theme_color: "#214e46",
        background_color: "#f7f6f1",
        display: "standalone",
        orientation: "portrait",
        categories: ["education", "productivity"],
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      injectManifest: {
        globPatterns: ["**/*.{js,css,html,png,svg,webmanifest}"],
        // The lessons are the app: every module is authored as TypeScript and
        // bundled, so the main chunk grew past Workbox's 2 MiB default as the
        // curriculum was written. Precaching it is the point — the course has
        // to open on a phone with no connection — so the limit is raised
        // rather than the content being dropped from the precache. The cost is
        // a large first download and a slower parse on a low-end phone, which
        // is a real trade and worth revisiting by splitting the modules into
        // per-module chunks that are precached individually. Raised again on
        // 12 September 2026, when guided practice for Modules 11 to 20 took
        // the chunk to 5.41 MiB and the 4 MiB limit began failing the build.
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        // The plugin already injects the manifest and the icons it references;
        // globbing them again only duplicated the precache entries.
        globIgnores: ["manifest.webmanifest", "icon-192.png", "icon-512.png"],
      },
    }),
  ],
});
