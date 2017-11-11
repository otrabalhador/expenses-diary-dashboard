export default {
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user,
  authHeaders: state => {
    return {
      'User-Id': state.user
    }
  },

  // expenses
  // expenses: state => state.isLoggedIn,
  totalExpenses: state => state.totalExpenses,
  expenses: state => state.expenses,
  totalExpensesAmount: state => 0
}
