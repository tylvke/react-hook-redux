const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

webpackBaseConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(), // 热更新，热更新不是刷新
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[id].css',
  }),
)
module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].js', // 打包后的文件名称
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0', // 默认是localhost
    port: 3000, // 端口
    hot: true, // 开启热更新
    proxy: {
      '/api': {
        // target: 'http://10.235.157.169/',
        target: 'http://staging.scf.mi.com/',
        secure: false,
        changeOrigin: true,
        onProxyReq: (proxyReq, req) => {
          if (/^(localhost|[1-9][0-9]+)/.test(req.headers.host)) {
            // 写死cookie
            proxyReq.setHeader(
              'Cookie',
              'pt_JSESSIONID=MGEwOGUzNGQtODA2NC00ZTRjLTkxOTMtMDEzMzRkY2VjZTQ3; staging_pt_JSESSIONID=NDFiZmU0ZDAtMGZlNi00NDg4LTgxZmEtODIxZDg5MjFlMjQ5; userName=177***175; uLocale=zh_CN'
            );
          }
          if (req.headers && req.headers.cookie) {
            proxyReq.setHeader('Cookie', req.headers.cookie);
          }
        },
      },
    },
  },
})
