import Home from '@/pages/Home.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});
