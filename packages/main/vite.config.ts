import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, "src/main.tsx"),
      },
      output: {
        entryFileNames: "entry-[name].js",
        manualChunks: (id) => {
          if (id.includes("valculator/packages/data")) {
            return "valculator_data";
          }
          if (id.includes("node_modules")) {
            if (id.includes("@mui/material")) {
              return "vendor_muimaterial";
            }
            if (id.includes("@mui")) {
              return "vendor_mui";
            }

            return "vendor"; // all other package goes here
          }
        },
      },
    },
  },
});
