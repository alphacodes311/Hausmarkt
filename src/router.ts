// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchPage from '@/components/search/SearchPage.vue';
import HomePage from '@/components/search/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
