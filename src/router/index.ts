import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: "index",
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/signin',
    name: "signin",
    component: () => import('@/views/signin/index.vue')
  },

  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/modal',
        name: "modal",
        component: () => import('@/views/modal/index.vue')
      },
      {
        path: '/reorder',
        name: "reorder",
        component: () => import('@/views/reorder/index.vue')
      },
      {
        path: '/floating',
        name: "floating",
        component: () => import('@/views/floating/index.vue')
      },
      {
        path: '/card',
        name: "card",
        component: () => import('@/views/card/index.vue')
      },
      {
        path: '/swiper',
        name: "swiper",
        component: () => import('@/views/swiper/index.vue')
      },
      {
        path: '/loop',
        name: "loop",
        component: () => import('@/views/loop/index.vue')
      },
      {
        path: '/localstorage',
        name: "localstorage",
        component: () => import('@/views/localstorage/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
