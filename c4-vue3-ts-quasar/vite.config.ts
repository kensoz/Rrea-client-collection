import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: 'src/styles/quasar-variables.sass',
    }),
  ],

  // 開発用プロキシ
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001/',
        changeOrigin: true,
      },
    },
  },
})
