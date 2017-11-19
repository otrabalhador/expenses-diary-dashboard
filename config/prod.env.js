const merge = require('webpack-merge')

module.exports = merge(require('./prod.env.secret.js'), {
  NODE_ENV: '"production"'
})
