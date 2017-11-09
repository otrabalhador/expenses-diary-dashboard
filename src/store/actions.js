// import axios from 'axios'
// const AUTH_URL = 'localhost:5000/login'

export default {
  login: (context, credentials) => {
    console.log(credentials)
    console.log(credentials.username)
    console.log(credentials.password)

    context.commit('login', credentials.username)
  }

  // login: (context, credentials) => {
  //   return new Promise((resolve, reject) => {
  //     axios.post(AUTH_URL, {
  //       ...credentials
  //     })
  //       .then((response) => {
  //         let userId = response.data.user_id
  //         context.commit('login', userId)
  //         resolve()
  //       })
  //       .catch((err) => {
  //         reject(err.response)
  //       })
  //   })
  // }
}
