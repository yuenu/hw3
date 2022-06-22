import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Error from '../pages/Error.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () =>
      import(/* webpackChunkName: "Cart" */ '../pages/ShoppingCart.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '*',
  //   name: '404',
  //   component: Error,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
