import store from '@/store'
import axios from 'axios'
const EXD_URL = process.env.EXD_EXPENSES_URL
const EXD_AUTH_URL = EXD_URL + 'login'
const EXD_USER_URL = EXD_URL + 'users'
const EXD_EXPENSES_URL = EXD_URL + 'expenses'
const EXD_EXPENSE_URL = EXD_URL + 'expense/%id%'
const EXD_PAYMENT_ORIGIN_URL = EXD_URL + 'payment-origin/%id%'
const EXD_PAYMENT_ORIGINS_URL = EXD_URL + 'payment-origins'
const EXD_CATEGORIES_URL = EXD_URL + 'categories'
const EXD_CATEGORY_URL = EXD_URL + 'category/%id%'

function singleResourceUrl (endpoint, expenseId) {
  return endpoint.replace(/%id%/g, expenseId)
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
    let expenseUrl = singleResourceUrl(EXD_EXPENSE_URL, expense.id)

    return new Promise((resolve, reject) => {
      axios.patch(expenseUrl, {
        paymentOriginId: expense.paymentOriginId,
        categoryId: expense.categoryId,
        referenceDate: expense.referenceDate,
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
    let expenseUrl = singleResourceUrl(EXD_EXPENSE_URL, expenseId)

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
  },

  newPaymentOrigin: (context, paymentOrigin) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_PAYMENT_ORIGINS_URL, {
        ...paymentOrigin
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('newPaymentOrigin', paymentOrigin)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  editPaymentOrigin: (context, paymentOrigin) => {
    let paymentOriginUrl = singleResourceUrl(EXD_PAYMENT_ORIGIN_URL, paymentOrigin.id)

    return new Promise((resolve, reject) => {
      axios.patch(paymentOriginUrl, {
        name: paymentOrigin.name,
        description: paymentOrigin.description,
        abbreviation: paymentOrigin.abbreviation
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('editPaymentOrigin', paymentOrigin)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  deletePaymentOrigin: (context, paymentOriginId) => {
    let paymentOriginUrl = singleResourceUrl(EXD_PAYMENT_ORIGIN_URL, paymentOriginId)

    return new Promise((resolve, reject) => {
      axios.delete(paymentOriginUrl, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('deletePaymentOrigin', paymentOriginId)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  // Category
  fetchCategories: (context) => {
    return new Promise((resolve, reject) => {
      axios.get(EXD_CATEGORIES_URL, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('fetchCategories', response.data)
          resolve()
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  newCategory: (context, category) => {
    return new Promise((resolve, reject) => {
      axios.post(EXD_CATEGORIES_URL, {
        ...category
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('newCategory', category)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  editCategory: (context, category) => {
    let categoryUrl = singleResourceUrl(EXD_CATEGORY_URL, category.id)

    return new Promise((resolve, reject) => {
      axios.patch(categoryUrl, {
        name: category.name,
        description: category.description,
        abbreviation: category.abbreviation
      }, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('editCategory', category)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  },

  deleteCategory: (context, categoryId) => {
    let categoryUrl = singleResourceUrl(EXD_CATEGORY_URL, categoryId)

    return new Promise((resolve, reject) => {
      axios.delete(categoryUrl, {
        headers: store.getters.authHeaders
      })
        .then((response) => {
          context.commit('deleteCategory', categoryId)
          resolve(response.data.message)
        })
        .catch((err) => {
          reject(err.response ? err.response.data.message : 'Server is indisponible')
        })
    })
  }

}
