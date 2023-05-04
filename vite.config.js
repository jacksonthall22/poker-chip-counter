import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // JTH: Uncomment to use un-minified versions of node_modules packages for debugging
  // build: {
  //   minify: false,
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: "assets/[name].[ext]",
  //       entryFileNames: "assets/[name].js",
  //       chunkFileNames: "assets/[name].js",
  //     },
  //   },
  // }
})
