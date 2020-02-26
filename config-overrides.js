const {
    override,
    addWebpackAlias,
    addLessLoader,
    addDecoratorsLegacy
} = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
const theme = require('./config/lessVars')

module.exports = override(
    addDecoratorsLegacy(),
    addWebpackAlias({
        ['@']: resolve('src')
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
)