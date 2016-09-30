const base = require('./webpack.base.conf.js')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')

const config = Object.assign({}, base, {
  plugins: base.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'client-vendor-bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ])
})

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  vueConfig.loaders = {
    css: ExtractTextPlugin.extract({
      loader: "css-loader",
      fallbackLoader: "vue-style-loader"
    })
  }

  config.plugins.push(
    new ExtractTextPlugin('style.css'),
    // minify css
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config
