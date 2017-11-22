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
  columns: state => state.columns,
  expenses: state => state.expenses,
  totalExpensesAmount: state => 0,

  paymentOrigins: state => state.paymentOrigins,
  totalPaymentOrigins: state => state.totalPaymentOrigins,

  categories: state => state.categories,
  totalCategories: state => state.totalCategories
}
