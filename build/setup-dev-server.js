const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const clientConfig = require('./webpack.client.conf')
const serverConfig = require('./webpack.server.conf')

module.exports = function setupDevServer (app, onUpdate) {
  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  )

  const clientCompiler = webpack(clientConfig)

  app.use(require('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  }))

  app.use(require('webpack-hot-middleware')(clientCompiler))

  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()

  console.log('outputPath',serverConfig.output.path, serverConfig.output.filename)

  const outputPath = path.join(serverConfig.output.path, serverConfig.output.filename)
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
