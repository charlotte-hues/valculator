import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        theme: path.join(__dirname, "src/main.ts"),
      },
      output: { entryFileNames: "entry-[name].js" },
    },
  },
});
