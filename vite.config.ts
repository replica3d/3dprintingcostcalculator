import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        es: 'public/es/index.html',
        de: 'public/de/index.html',
        fr: 'public/fr/index.html',
        it: 'public/it/index.html'
      }
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});