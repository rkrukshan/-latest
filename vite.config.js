import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import legacy from "@vitejs/plugin-legacy";
import browserslistToEsbuild from 'browserslist-to-esbuild';


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      // 1. Define your target browsers
      targets: ["defaults", "not IE 11"], // Uses browserslist; 'defaults' is a good starting point.
      // 2. Enable polyfill detection for "modern" browsers (e.g., Chrome 64-106, Safari 12-15)
      modernPolyfills: true,
      // 3. Generate separate chunks for legacy browsers
      renderLegacyChunks: true,
      // 4. (Optional) Manually specify core polyfills you know you need
      // polyfills: ['es/array', 'es/object', 'es/string'],
      // 5. (Optional) Control polyfill behavior for modern browsers
      // modernPolyfills: ['es/global-this', 'es/array/includes'],
      build: {
    target: browserslistToEsbuild(), // Reads from .browserslistrc
  },
    }),
  ],
});
