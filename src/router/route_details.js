const publicRoutes = {
  login: {
    path: '/login',
    name: 'Login'
  }
}

const privateRoutes = {
  logout: {
    path: '/',
    name: 'Logout',
    private: true
  },

  expenses: {
    path: '/expenses',
    name: 'Expenses',
    meta: {
      private: true
    }
  }
}

export default {
  ...publicRoutes,
  ...privateRoutes
}
