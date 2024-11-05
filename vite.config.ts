import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-language-files',
      async closeBundle() {
        try {
          await execAsync('node scripts/generate-html.js');
          console.log('✓ Generated language-specific HTML files');
        } catch (error) {
          console.error('Error generating language files:', error);
          throw error;
        }
      }
    }
  ],
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