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
        // The plugin already injects the manifest and the icons it references;
        // globbing them again only duplicated the precache entries.
        globIgnores: ["manifest.webmanifest", "icon-192.png", "icon-512.png"],
      },
    }),
  ],
});
