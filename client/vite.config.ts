import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
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
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
