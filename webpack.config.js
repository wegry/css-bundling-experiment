const path = require('node:path')

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index.mjs',
  experiments: {
    css: true,
    outputModule: true,
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.mjs',
    module: true,
  },
}

module.exports = config
