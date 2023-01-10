import { createRouter, createWebHistory } from 'vue-router'
import type { customRouteRecordRaw } from 'vue-router';
import { RouteRecordName } from './types';

import LayoutVue from '@/layout/index.vue';

export const menuRoute: customRouteRecordRaw = {
  path: '/',
  name: RouteRecordName.Index,
  component: LayoutVue,
  redirect: { name: RouteRecordName.Home },
  children: [
    {
      path: 'home',
      name: RouteRecordName.Home,
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '主页',
        icon: 'home'
      },
    },
    {
      path: 'user',
      name: RouteRecordName.User,
      component: () => import('@/views/User.vue'),
      meta: {
        title: '我的',
        icon: 'user'
      }
    },

  ]
}

const routes: customRouteRecordRaw[] = [
  menuRoute,
  {
    path: '/login',
    name: RouteRecordName.Login,
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteRecordName.Error,
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
