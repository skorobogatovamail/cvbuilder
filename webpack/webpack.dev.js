const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/yandex-api': {
        target: 'https://llm.api.cloud.yandex.net',
        changeOrigin: true,
        pathRewrite: { '^/yandex-api': '' },
        secure: true,
      },
    },
  },
});