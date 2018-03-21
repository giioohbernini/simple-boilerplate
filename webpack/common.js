'use strict'

const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
}

module.exports = {
  paths,

  entry: {
    main: join(paths.src, 'index')
  },

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'Simple Boilerplate',
    template: join(paths.root, 'template', 'template.html')
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: ['react-hot-loader/webpack', {
      loader: 'babel-loader',
      options: {
        presets: [['env', { modules: false }], 'stage-0', 'react'],
        plugins: [
          ['transform-runtime', {
            helpers: false,
            polyfill: false,
            regenerator: true
          }]
        ]
      }
    }]
  },

	stylusLoader: {
    test: /\.styl$/,
    include: paths.src,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          sourceMap: true,
          minimize: false
        }
      },
      'stylus-loader'
    ]
  },

  cssLoader: {
    test: /\.(css|sass)$/,
    include: paths.src,
    use: ['style-loader', 'css-loader?modules&localIdentName=[local]_[hash:base64:5]', 'stylus-loader?sourceMap']
  },

  resolve: {
    symlinks: false,
    modules: [
      paths.src,
      'node_modules'
    ]
  }
}
