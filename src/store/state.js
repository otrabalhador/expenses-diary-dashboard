export default {
  isLoggedIn: localStorage.getItem('user') !== null,
  user: localStorage.getItem('user'),

  // expenses
  expenses: []
}
