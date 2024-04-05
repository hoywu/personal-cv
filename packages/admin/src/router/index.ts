import { createRouter, createWebHistory } from 'vue-router';
import Admin from '@/Admin.vue';

const DashboardView = () => import('@/views/DashboardView.vue');
const LogView = () => import('@/views/LogView.vue');
const TokenView = () => import('@/views/TokenView.vue');

const adminRoutes = [
  {
    path: '',
    name: 'dash',
    component: DashboardView,
  },
  {
    path: 'log',
    name: 'log',
    component: LogView,
  },
  {
    path: 'token',
    name: 'token',
    component: TokenView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Admin,
      children: adminRoutes,
    },
  ],
});

export default router;
