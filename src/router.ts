// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchPage from '@/view/SearchPage.vue';
import HomePage from '@/view/HomePage.vue';
import RentProperty from '@/view/RentProperty.vue'
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
  {
    path: '/rentProperty',
    name: 'RentProperty',
    component: RentProperty,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
