import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      input: {
        images: path.join(__dirname, "src/main.ts"),
      },
      output: { entryFileNames: "entry-[name].js" },
    },
  },
});
