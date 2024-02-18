import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
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

            return "vendor"; // all other package goes here
          }

          return undefined;
        },
      },
    },
  },
});
