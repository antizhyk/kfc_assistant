import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico', 
        'apple-touch-icon.png', 
        'mask-icon.svg',
        'data.json',
        'main_cats.json',
        'product.json',
        'product_old.json'
      ],
      manifest: {
        name: 'Vite PWA Project',
        short_name: 'Vite PWA Project',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: 'pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: 'maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/data.json'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'data-json-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/main_cats.json'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'main-cats-json-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/product.json'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'product-json-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/product_old.json'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'product-old-json-cache',
              expiration: {
                maxEntries: 1,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    })
  ],
})

