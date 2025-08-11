import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    __DEFINES__: '{}',
    __BASE__: '"/"',
    global: 'globalThis',
  },
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          ai: ['@tensorflow/tfjs'],
          graphics: ['p5', 'three']
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', '@tensorflow/tfjs', 'p5']
  },
  envPrefix: 'VITE_'
}) 