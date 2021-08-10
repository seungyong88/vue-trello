import { createWebHistory, createRouter } from 'vue-router';

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;

  // 로그인 정보가 있으면 다음으로 없으면 로그인 경로로
  isAuth ? next() : next(loginPath);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'), // 동적 import
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login') // 동적 import
  },
  {
    path: '/board/:bid',
    name: 'Board',
    component: () => import('@/views/Board'), // 동적 import
    beforeEnter: requireAuth,
    children: [
      { 
        path: 'card/:cid', 
        component: () => import('@/components/Card'),
        beforeEnter: requireAuth
      },
    ]
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