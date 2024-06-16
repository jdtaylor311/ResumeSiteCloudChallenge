import { defineConfig } from "vite";

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist'
  },
  server: {
    watch: {
      usePolling: true,
    }
  }
});
