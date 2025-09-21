import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'tsx',
  },
  optimizeDeps: {
    exclude: ['sanitize-html'], // Prevent Vite from optimizing sanitize-html
  },
});