const publicRoutes = {
  login: {
    path: '/login',
    name: 'Login'
  },
  register: {
    path: '/register',
    name: 'Register'
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
  },

  settings: {
    path: '/settings',
    name: 'Settings',
    meta: {
      private: true
    }
  }
}

export default {
  ...publicRoutes,
  ...privateRoutes
}
