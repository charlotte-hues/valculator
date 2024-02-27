import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@valculator/context', '@valculator/data', '@valculator/images'],
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        interface: path.join(__dirname, "src/main.ts"),
      },
      output: {
        entryFileNames: "entry-[name].js",
        manualChunks: (id) => {
          if (id.includes(".data.ts")) {
            return "valculator_data";
          }
          if (id.includes("node_modules")) {
            if (id.includes("@material-ui")) {
              return "vendor_mui";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
