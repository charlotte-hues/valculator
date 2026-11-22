import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Separate entry so a host page can import the theme without loading the calculator.
// emptyOutDir is off because this runs after the calculator build and must keep that output.
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    target: "modules",
    minify: "esbuild",
    sourcemap: true,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "../theme/src/main.ts"),
      fileName: "theme",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
