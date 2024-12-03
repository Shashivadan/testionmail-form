import path, { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true }), cssInjectedByJsPlugin()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "testimonial-forms",
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },

    sourcemap: true,
    emptyOutDir: true,
  },
});
