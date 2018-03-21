const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
	context: common.paths.src,
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    common.entry.main
  ],

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),

    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    rules: [
      common.jsLoader,
      common.stylusLoader
    ]
  },

  resolve: common.resolve
}
