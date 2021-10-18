import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import ElementPlus from 'unplugin-element-plus/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: ['.'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '~',
        replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
  plugins: [vue(), ElementPlus()],
});
