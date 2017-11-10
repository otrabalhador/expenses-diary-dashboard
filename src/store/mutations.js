export default {

  login: (state, username) => {
    state.isLoggedIn = true
    state.username = username
    localStorage.setItem('username', username)
  },

  logout: (state) => {
    state.isLoggedIn = false
    state.username = null
    localStorage.removeItem('username')
  }
}
