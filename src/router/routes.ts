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
      {
        path: 'users',
        component: () => import('pages/Users/Index.vue'),
        children: [
          {
            path: '',
            component:  import('pages/Users/Users.vue'),
          },
          {
            path: 'profile/:id',
            component:  import('pages/Users/UserProfile.vue'),
          }
        ]
      },
      {
        path: 'trucks',
        component: () => import('pages/Trucks/Index.vue'),
        children: [
          {
            path: '',
            component:  import('pages/Trucks/Trucks.vue'),
          },
          {
            path: 'profile/:id',
            component:  import('pages/Users/UserProfile.vue'),
          }
        ]
      },
      {
        path: 'loads',
        component: () => import('pages/Loads/Index.vue'),
        children: [
          {
            path: '',
            component:  import('pages/Loads/Loads.vue'),
          },
          {
            path: 'profile/:id',
            component:  import('pages/Users/UserProfile.vue'),
          }
        ]
      },
      { path: 'drivers', component: () => import('pages/Drivers.vue') },
      {
        path: 'clients',
        component: () => import('pages/Clients/Index.vue'),
        children: [
          {
            path: '',
            component:  import('pages/Clients/Clients.vue'),
          },
          {
            path: 'profile/:id',
            component:  import('pages/Users/UserProfile.vue'),
          }
        ]
      },
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
