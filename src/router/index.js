import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'viewProject',
    component: () => import('../views/viewProject.vue')
  },
  {
    path: '/addProject',
    name: 'addProject',
    component: () => import(/* webpackChunkName: "addProject" */ '../views/addProject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
