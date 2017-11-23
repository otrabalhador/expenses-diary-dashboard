import Vue from 'vue'

export default {

  login: (state, user) => {
    state.isLoggedIn = true
    state.user = user.userId
    localStorage.setItem('user', user.userId)
  },

  logout: (state) => {
    state.isLoggedIn = false
    state.user = null
    localStorage.removeItem('user')
  },

  // expenses
  fetchExpenses: (state, expenses) => {
    Vue.set(state, 'expenses', expenses.content)
    state.totalExpenses = expenses.total
  },

  newExpense: (state, expense) => {
    state.expenses.push(expense)
  },

  editExpense: (state, expense) => {
    let index = state.expenses.map((el) => el.id).indexOf(expense.id)
    state.expenses.splice(index, 1)
    state.expenses.splice(index, 0, expense)
  },

  deleteExpense: (state, expenseId) => {
    let index = state.expenses.map((el) => el.id).indexOf(expenseId)
    Vue.delete(state.expenses, index)
  },

  // Payment Origin
  fetchPaymentOrigins: (state, paymentOrigins) => {
    Vue.set(state, 'paymentOrigins', paymentOrigins.content)
    state.totalPaymentOrigins = paymentOrigins.total
  },

  newPaymentOrigin: (state, paymentOrigin) => {
    state.paymentOrigins.push(paymentOrigin)
  },

  editPaymentOrigin: (state, paymentOrigin) => {
    let index = state.paymentOrigins.map((el) => el.id).indexOf(paymentOrigin.id)
    state.paymentOrigins.splice(index, 1)
    state.paymentOrigins.splice(index, 0, paymentOrigin)
  },

  deletePaymentOrigin: (state, paymentOriginId) => {
    let index = state.paymentOrigins.map((el) => el.id).indexOf(paymentOriginId)
    Vue.delete(state.paymentOrigins, index)
  },

  // Category
  fetchCategories: (state, categories) => {
    Vue.set(state, 'categories', categories.content)
    state.totalCategories = categories.total
  },

  newCategory: (state, category) => {
    state.categories.push(category)
  },

  editCategory: (state, category) => {
    let index = state.categories.map((el) => el.id).indexOf(category.id)
    state.categories.splice(index, 1)
    state.categories.splice(index, 0, category)
  },

  deleteCategory: (state, categoryId) => {
    let index = state.categories.map((el) => el.id).indexOf(categoryId)
    Vue.delete(state.categories, index)
  }

}
