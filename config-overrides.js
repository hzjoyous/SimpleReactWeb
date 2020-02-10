const {
    override,
    addWebpackAlias,
    fixBabelImports,
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
    // ant 的配置引入 并且 使用less
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme,
    }),
)