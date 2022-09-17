import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from './types';

import LayoutVue from '@/layout/index.vue';

export const menuRoute: RouteRecordRaw = {
  path: '/',
  name: RouteName.Index,
  component: LayoutVue,
  redirect: { name: RouteName.Dashboard },
  children: [
    {
      path: 'dashboard',
      name: RouteName.Dashboard,
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        title: '主页',
        icon: 'dashboard'
      }
    },
    {
      path: 'about',
      name: RouteName.About,
      component: () => import('@/views/About.vue'),
      meta: {
        title: '关于',
        icon: 'menu'
      }
    }
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    menuRoute,
    {
      path: '/login',
      name: RouteName.Login,
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: RouteName.Error,
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
