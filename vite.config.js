import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Nicolette Mashaba - Portfolio',
        short_name: 'Nicolette M.',
        description: 'The portfolio of Nicolette Mashaba, a software developer specializing in AI, cloud, and full-stack development.',
        theme_color: '#00D4FF',
        background_color: '#1A1A1A',
        display: 'standalone',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor_framer-motion';
            }
            if (id.includes('lucide-react')) {
              return 'vendor_lucide-react';
            }
            return 'vendor'; // all other node_modules
          }
          // Split components into their own chunks
          if (id.includes('src/components/')) {
            const componentName = id.split('src/components/')[1].split('.')[0];
            return `component_${componentName.toLowerCase()}`;
          }
        },
      },
    },
  },
});