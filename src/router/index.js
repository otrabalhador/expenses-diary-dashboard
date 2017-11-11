import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/auth/Login'
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
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    }
  ]
})
