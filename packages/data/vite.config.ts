import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        data: path.join(__dirname, "src/main.ts"),
        types: path.join(__dirname, "src/types.ts"),
      },
      output: { entryFileNames: "entry-[name].js" },
    },
  },
});
