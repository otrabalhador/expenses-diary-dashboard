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
    state.expenses = expenses.content
    state.totalExpenses = expenses.total
  }
}
