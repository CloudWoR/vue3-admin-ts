import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/acount/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
