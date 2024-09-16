import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PreviewView.vue'
import FormView from '../views/FormView.vue'

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
      component: FormView
    }
  ]
})

export default router
