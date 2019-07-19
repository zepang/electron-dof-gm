import Vue from 'vue'
import Router from 'vue-router'

import primaryLayout from '../Layout/primary'

import home from '../pages/home'
import login from '../pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'primaryLayout',
      component: primaryLayout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
        }
      ]
    }
  ]
})
