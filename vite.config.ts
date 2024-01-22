import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
import path from "path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      name: "valculator",
      formats: ["es", "umd"],
      entry: path.resolve(__dirname, "src/main.tsx"),
      fileName: "valculator",
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
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
