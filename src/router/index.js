import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home') // 동적 import
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login') // 동적 import
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/views/NotFound') // 동적 import
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});