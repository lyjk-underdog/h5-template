import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';

import LayoutVue from '@/layout/index.vue';

export const menuRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: LayoutVue,
  children: [
    {
      path: 'dashboard',
      name: 'DashboardView',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        title:'主页'
      }
    },
    {
      path: 'about',
      name: 'AboutView',
      component: () => import('@/views/About.vue'),
      meta: {
        title:'关于'
      }
    }
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    menuRoute,
    {
      path:'/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
