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
      input: 'index.html'
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
