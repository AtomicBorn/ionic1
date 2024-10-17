import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/profile',
    name: "profile",
    component: () => import('@/views/profile/index.vue')
  },
  {
    path: '/login',
    name: "login",
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
