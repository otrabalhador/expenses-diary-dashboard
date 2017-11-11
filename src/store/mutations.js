export default {

  login: (state, user) => {
    console.log(user)
    state.isLoggedIn = true
    state.user = user
    localStorage.setItem('user', user.userId)
  },

  logout: (state) => {
    state.isLoggedIn = false
    state.user = null
    localStorage.removeItem('user')
  }
}
