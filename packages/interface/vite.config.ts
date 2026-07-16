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
  optimizeDeps: {
    include: [
      "@valculator/context",
      "@valculator/data",
      "@valculator/images",
      "@emotion/styled",
      "@mui/material",
    ],
  },
  build: {
    target: "modules",
    minify: "esbuild",
    sourcemap: true,
    lib: {
      name: "interface",
      formats: ["es"],
      entry: path.resolve(__dirname, "src/main.ts"),
      fileName: "interface",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/icons-material",
        "@emotion/react",
        "@emotion/styled",
        "@mui/material",
      ],
      input: {
        interface: path.join(__dirname, "src/main.ts"),
      },
      output: {
        entryFileNames: "entry-[name].js",
      },
    },
  },
});
