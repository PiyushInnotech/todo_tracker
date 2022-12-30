import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect : 'project'
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/viewProject.vue'),
    redirect: '/view',
    children: [
      { path: '/:view', name: 'view', component: () => import("../components/allProject.vue"), props: true },
      { path: '/:view', name: 'ongoing', component: () => import("../components/allProject.vue"), props: true },
      { path: '/:view', name: 'completed', component: () => import("../components/allProject.vue"), props: true },
    ]
  },
  {
    path: '/addProject',
    name: 'addProject',
    component: () => import(/* webpackChunkName: "addProject" */ '../views/addProject.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () =>
    import("../views/notFound.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
