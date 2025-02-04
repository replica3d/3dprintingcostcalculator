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
      closeBundle: {
        sequential: true,
        async handler() {
          try {
            // First, run the copy script
            await execAsync('node scripts/copy-localized.js');
            console.log('✓ Copied localized files');
            
            // Then generate the HTML files
            await execAsync('node scripts/generate-html.js');
            console.log('✓ Generated language-specific HTML files');
          } catch (error) {
            console.error('Error in build process:', error);
            throw error;
          }
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
