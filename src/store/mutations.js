export default {

  login: (state, user) => {
    state.isLoggedIn = true
    state.user = user
    localStorage.setItem('user', user)
  },

  logout: (state) => {
    state.isLoggedIn = false
    state.user = null
    localStorage.removeItem('user')
  }
}
