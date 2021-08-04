import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home') // 동적 import
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login') // 동적 import
  },
  {
    path: '/board/:bid',
    name: 'Board',
    component: () => import('@/views/Board') // 동적 import
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