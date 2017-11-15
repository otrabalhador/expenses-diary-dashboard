import store from '@/store'
import axios from 'axios'
const EXD_URL = 'http://localhost:5000/v1/'
const EXD_AUTH_URL = EXD_URL + 'login'
const EXD_EXPENSES_URL = EXD_URL + 'expenses'

export default {
  login: (context, credentials) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_AUTH_URL, {
        ...credentials
      })
        .then((response) => {
          let email = response.data.email
          let userId = response.data.user_id
          context.commit('login', {
            email: email,
            userId: userId
          })
          resolve()
        })
        .catch((err) => {
          reject(err.response.data.message)
        })
    })
  },

  // expenses
  fetchExpenses: (context) => {
    return new Promise((resolve, reject) => {
      axios.get(EXD_EXPENSES_URL, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('fetchExpenses', response.data)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  }

}
