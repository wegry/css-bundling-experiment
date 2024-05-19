import webpackConfig from './webpack.config.js'

/**
 * @type {import('@rspack/core').Configuration}
 */
const config = {
  ...webpackConfig,
  module: {
    rules: [
      {
        test: /\.mjs$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: false,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
}

export default config
