const path = require('path');
const rootDir = process.cwd();
const webpackBaseConfig = require('./base.config');

module.exports = Object.assign({}, webpackBaseConfig, {
  mode: 'development',
  output: {
    path: path.join(rootDir, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(rootDir, 'public'),
    port: 9000,
    stats: 'minimal',
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
  },
  devtool: 'eval-source-map'
});
