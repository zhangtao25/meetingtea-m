import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/mine',
      component: () => import('./views/mine'),
    },
    {
      path: '/home',
      component: () => import('./views/home'),
    },
  ]
})
