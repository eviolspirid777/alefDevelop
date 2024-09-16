import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'preview',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
