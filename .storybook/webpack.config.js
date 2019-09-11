const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ejs$/,
    loaders: ['ejs-compiled-loader'],
    include: path.resolve(__dirname, '../src/components')
  })

  return config
}