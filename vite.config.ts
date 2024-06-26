import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "vite-plugin-pages";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from "vite-plugin-compression";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: "./vitest.setup.ts",
    globals: true,
    environment: "jsdom",
  },
  plugins: [
    react(),
    pages({
      pagesDir: "src/pages",
      extensions: ["tsx"],
    }),
    ViteImageOptimizer({}),
    viteCompression(),
  ],
});
