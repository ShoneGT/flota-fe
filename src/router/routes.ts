import { RouteRecordRaw } from 'vue-router';
import  AuthGuard  from 'src/utils/authGuard'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: AuthGuard,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'users', component: () => import('pages/Users.vue') },
      { path: 'drivers', component: () => import('pages/Drivers.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
