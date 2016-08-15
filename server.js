process.env.VUE_ENV = 'server'
const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')
const serialize = require('serialize-javascript')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

const app = express()

const html = (() => {
  const template = fs.readFileSync(resolve('./index.html'), 'utf-8')
  const index = template.indexOf('{{ APP }}')
  const style = isProd ? '<link href="/dist/style.css" rel="stylesheet">' : ''

  return {
    head: template.slice(0, index).replace('{{ STYLE }}', style),
    tail: template.slice(index + '{{ APP }}'.length)
  }
})()

const createRenderer = (bundle) => {
  return createBundleRenderer(bundle, {
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

let renderer

if (isProd) {
  const bundlePath = resolve('./dist/server-bundle.js')
  renderer = createRenderer(fs.readFileSync(bundlePath, 'utf-8'))
} else {
  require('./build/setup-dev-server')(app, bundle => {
    renderer = createRenderer(bundle)
  })
}

app.use('/dist', express.static(resolve('./dist')))

app.get('*', (req, res) => {
  if (! renderer) return res.send('waiting for compilation...')

  let s = Date.now()
  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)
  let firstChunk = true

  res.write(html.head)

  renderStream.on('data', chunk => {
    if (firstChunk) {
      if (context.initialState) {
        res.write(
          `
            <script>
            window.__INITIAL_STATE__=${serialize(context.initialState, { isJSON: true })}
            </script>
          `
        )
      }
      firstChunk = false
    }
    res.write(chunk)
  })

  renderStream.on('end', () => {
    res.end(html.tail)
    console.log(`whole request: ${Date.now() - s }ms`)
  })

  renderStream.on('error', error => {
    throw error
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})
