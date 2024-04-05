import { createRouter, createWebHistory } from 'vue-router';
import CV from '@/CV.vue';
import CVView from '@/views/CVView.vue';
import PDFView from '@/views/PDFView.vue';

const tabRoutes = [
  {
    path: '',
    name: 'cv',
    component: CVView,
  },
  {
    path: 'pdf',
    name: 'pdf',
    component: PDFView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:token?/',
      component: CV,
      children: tabRoutes,
    },
  ],
});

export default router;
