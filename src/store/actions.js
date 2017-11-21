import store from '@/store'
import axios from 'axios'
const EXD_URL = process.env.EXD_EXPENSES_URL
const EXD_AUTH_URL = EXD_URL + 'login'
const EXD_USER_URL = EXD_URL + 'users'
const EXD_EXPENSES_URL = EXD_URL + 'expenses'
const EXD_EXPENSE_URL = EXD_URL + 'expense/%expenseId%'
const EXD_PAYMENT_ORIGINS_URL = EXD_URL + 'payment-origins'

function singleExpenseUrl (expenseId) {
  return EXD_EXPENSE_URL.replace(/%expenseId%/g, expenseId)
}

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

  register: (context, credentials) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_USER_URL, {
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
          resolve()
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  newExpense: (context, expense) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_EXPENSES_URL, {
        ...expense
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('newExpense', expense)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  editExpense: (context, expense) => {
    let expenseUrl = singleExpenseUrl(expense.id)

    return new Promise((resolve, reject) => {
      axios.patch(expenseUrl, {
        payment_origin_id: expense.payment_origin_id,
        category_id: expense.category_id,
        reference_date: expense.reference_date,
        description: expense.description,
        amount: expense.amount,
        regreted: expense.regreted,
        comments: expense.comments
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('editExpense', expense)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  deleteExpense: (context, expenseId) => {
    let expenseUrl = singleExpenseUrl(expenseId)

    return new Promise((resolve, reject) => {
      axios.delete(expenseUrl, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('deleteExpense', expenseId)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  // Payment Origin
  fetchPaymentOrigins: (context) => {
    return new Promise((resolve, reject) => {
      axios.get(EXD_PAYMENT_ORIGINS_URL, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('fetchPaymentOrigins', response.data)
          resolve()
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  }
}
