// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import vmodal from 'vue-js-modal'

Vue.use(Notifications)
Vue.component('icon', Icon)
Vue.use(vmodal, { dialog: true })

Vue.config.productionTip = false

// Redirects to login page if user is trying to access private page
router.beforeEach((to, from, next) => {
  if (to.meta.private && !store.getters.isLoggedIn) {
    next({path: '/login'})
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   store.commit('setLoading', true)
//   next()
// })

// router.afterEach((to, from) => {
//   mediaHandler()
//   store.commit('setLoading', false)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App, Icon }
})
