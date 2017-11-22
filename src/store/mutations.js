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

  fetchPaymentOrigins: (state, paymentOrigins) => {
    Vue.set(state, 'paymentOrigins', paymentOrigins.content)
    state.totalPaymentOrigins = paymentOrigins.total
  },

  fetchCategories: (state, categories) => {
    Vue.set(state, 'categories', categories.content)
    state.totalCategories = categories.total
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
    // state.expenses = state.expenses.filter(el => {
    //   el.id !== expenseId
    // })
    Vue.delete(state.expenses, index)
    // state.expenses.splice(index, 1)
  }
}
