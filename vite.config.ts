import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
=======
import path from 'path';

const projectRootDir = path.resolve(__dirname);
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    exclude: ['lucide-react'],
=======
  server: {
    proxy: {
      '/wp-content': {
        target: 'http://localhost:8000', // Your WordPress development server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(projectRootDir, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@assets': path.resolve(__dirname, 'assets'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
>>>>>>> b8b85e1d3856037ef5b9c3c4f9257b552f934dea
  },
});
