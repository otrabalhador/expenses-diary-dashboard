'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const devSecretEnv = require('./dev.env.secret.js')

module.exports = merge(prodEnv, devSecretEnv, {
  NODE_ENV: '"development"'
})
