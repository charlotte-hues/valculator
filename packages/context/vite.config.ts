import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        context: path.join(__dirname, "src/main.ts"),
        layout: path.join(__dirname, "src/layout.ts"),
        types: path.join(__dirname, "src/types.ts"),
      },
      output: { entryFileNames: "entry-[name].js" },
    },
  },
});
