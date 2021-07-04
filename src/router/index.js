import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

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
    redirect: { name: 'Dashboard' },
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
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
  if (routeTo.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    let isAuthenticated = localStorage.getItem('authenticated')

    if (isAuthenticated) {
      store.dispatch('user/getCurrentUser')
      next()
    } else {
      next({
        name: 'Login',
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})

router.afterEach((routeTo, routeForm, next) => NProgress.done())

export default router
