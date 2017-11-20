import Vue from 'vue'
import Router from 'vue-router'
import routeDetails from './route_details'

import Index from '@/components/Index'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

import Expenses from '@/components/expenses/Expenses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      ...routeDetails.register,
      component: Register
    },
    {
      ...routeDetails.expenses,
      component: Expenses
    }
  ]
})
