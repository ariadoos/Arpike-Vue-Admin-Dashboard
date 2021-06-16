import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import Dashboard from '@/views/admin/Dashboard'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: { name: 'dashboard' },
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((routeTo, routeForm, next) => {
  NProgress.start()
  next()
})

router.afterEach((routeTo, routeForm, next) => NProgress.done())

export default router
