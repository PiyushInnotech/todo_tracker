import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'viewProject',
    component: () => import('../views/viewProject.vue'),
    children: [
      { path: ':viewall', name: 'viewall', component: () => import("../components/allProject.vue"), props: true },
      { path: ':ongoing', name: 'ongoing', component: () => import("../components/onProject.vue"), props: true },
      { path: ':completed', name: 'completed', component: () => import("../components/doneProject.vue"), props: true },
    ]
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
