const path = require('path');
const rootDir = process.cwd();
const webpackBaseConfig = require('./base.config');

module.exports = Object.assign({}, webpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.join(rootDir, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    chunkIds: 'named'
  },
});
