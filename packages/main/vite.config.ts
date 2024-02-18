import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("valculator/packages/data")) {
            return "valculator_data";
          }
          if (id.includes("node_modules")) {
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
