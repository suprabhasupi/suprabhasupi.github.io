import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home-page" */ '~/pages/home'),
    name: 'HomePage'
  }, {
    path: '*',
    component: () => import(/* webpackChunkName: "error-page" */ '~/pages/error-page'),
    name: 'ErrorPage'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
