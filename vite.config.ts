import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore - Suppresses the TS error until the package is fully installed by the build environment
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // Allows testing the PWA install button in dev mode
      },
      manifest: {
        name: 'Karma-Path | Responsible Tourism',
        short_name: 'Karma-Path',
        description: 'Responsible Tourism App',
        theme_color: '#16a34a',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon.svg.jpeg',
            sizes: '192x192',
            type: 'image/jpeg',
            purpose: 'any maskable'
          },
          {
            src: '/icon.svg.jpeg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
