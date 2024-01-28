import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
import path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  }),
  ],
  root: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  build: {
    target: "modules",
    sourcemap: true,
    outDir: "dist",
    manifest: true,
    minify: "esbuild",
    reportCompressedSize: true,
    lib: {
      name: "valculator",
      formats: ["es"],
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      fileName: "valculator",
    },
    rollupOptions: {      
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "@emotion/styled",
        "@mui/icons-material",
        "@mui/material",
      ],
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }) as Plugin,
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
        }) as Plugin,
      ],
    },
  },
});
