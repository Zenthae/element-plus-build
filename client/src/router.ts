import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: {},
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
});
