import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore - Suppresses the TS error until the package is fully installed by the build environment
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,webmanifest,json}'],
        navigateFallback: '/index.html'
      },
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Karma-Path | Discover Odisha. Experience Its Soul.',
        short_name: 'Karma-Path',
        description: 'Complete Offline & Desktop Heritage & Safe Travel Platform for Odisha',
        theme_color: '#180B2B',
        background_color: '#180B2B',
        display: 'standalone',
        orientation: 'any',
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
  ],
  preview: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 10000
  }
})
