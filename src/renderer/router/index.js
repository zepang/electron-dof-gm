import Vue from 'vue'
import Router from 'vue-router'

import primaryLayout from '../Layout/primary'

import accounts from '../pages/accounts'
import account from '../pages/account'
import login from '../pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'primaryLayout',
      component: primaryLayout,
      redirect: '/login',
      children: [
        {
          path: 'accounts',
          name: 'accounts',
          component: accounts,
        },
        {
          path: 'accounts/:id',
          name: 'account',
          component: account,
        }
      ]
    }
  ]
})
