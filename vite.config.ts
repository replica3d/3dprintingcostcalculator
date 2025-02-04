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
      input: 'index.html',
      output: {
        // Obfuscate file names
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
        // Disable code splitting to make reverse engineering harder
        manualChunks: undefined
      }
    },
    // Enable maximum minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        dead_code: true,
        keep_fargs: false,
        toplevel: true,
        unsafe: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        toplevel: true,
        safari10: true,
        properties: {
          regex: /^_/,
          reserved: ['__VITE_', '__STACKBLITZ_', '__REACT_']
        }
      },
      format: {
        comments: false
      },
      ecma: 2020,
      module: true
    },
    sourcemap: false,
    // Additional build options for protection
    cssMinify: true,
    assetsInlineLimit: 0,
    modulePreload: false
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Disable source maps in development
  css: {
    devSourcemap: false
  }
});