import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    target: "modules",
    minify: "esbuild",
    sourcemap: true,
    lib: {
      name: "theme",
      formats: ["es"],
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "theme",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
