import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    allowedHosts: ['dee52fa20ae9.ngrok-free.app'],
  },
  build: {
    // Browsers from 2022+. Tighter than vite's default `modules` target —
    // smaller bundles, no transpile of `??=`, `?.()`, native ESM modules.
    target: 'es2022',
    // Drop the warning ceiling — we already split aggressively below, anything
    // remaining over 600KB is content (three.js) and intentional.
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk strategy:
        //   - three.js (~600KB) is dynamic-import worthy on its own. Splitting it
        //     means /contact and /privacy routes never download the WebGL runtime.
        //   - Vue runtime + router + head is its own chunk (rarely changes,
        //     stays in browser cache across deploys).
        //   - Each route's view chunks itself (handled by Vue's <RouterView>
        //     when components are dynamically imported in main.ts; for now,
        //     they're statically imported, so this is a future optimization).
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'
            if (id.includes('@unhead')) return 'head'
            if (id.includes('vue-router')) return 'router'
            if (id.includes('/vue/') || id.includes('@vue/')) return 'vue'
            return 'vendor'
          }
        },
      },
    },
  },
})
