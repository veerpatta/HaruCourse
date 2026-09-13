import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        // Keep each authored course module in its own cached chunk. The app
        // still opens the complete offline course, but a small curriculum or
        // UI update no longer invalidates one 5.7 MB JavaScript file on mobile.
        codeSplitting: {
          groups: [
            {
              test: /src[\\/]module\d+\.ts$/,
              name: (id) => {
                const match = id.match(/module(\d+)\.ts$/);
                return match ? `course-module-${match[1]}` : null;
              },
              includeDependenciesRecursively: false,
            },
          ],
        },
      },
    },
  },
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
        shortcuts: [
          { name: "Continue learning", short_name: "Learn", url: "/?tab=Learn" },
          { name: "My work", short_name: "My work", url: "/?tab=My%20work" },
        ],
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
        // The lessons are the app and are precached so the whole course opens
        // offline. Modules now build as separate cached chunks; this generous
        // limit remains as a guard for the shared entry and future modules.
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        // The plugin already injects the manifest and the icons it references;
        // globbing them again only duplicated the precache entries.
        globIgnores: ["manifest.webmanifest", "icon-192.png", "icon-512.png"],
      },
    }),
  ],
});
