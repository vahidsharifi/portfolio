// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use VITE_BASE env var (set in CI or locally). Default to a relative base so
  // built assets use relative paths. This is more robust when deploying to GitHub Pages.
  // If you host at the repo root (username.github.io) set VITE_BASE="/" in CI.
  base: process.env.VITE_BASE ?? "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));