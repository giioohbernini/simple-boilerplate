const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

new WebpackDevServer(webpack(config), {
  contentBase: config.context,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  watchContentBase: false,
  inline: false,
  overlay: true,
  stats: { colors: true }
}).listen(8080, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:8080')
})
