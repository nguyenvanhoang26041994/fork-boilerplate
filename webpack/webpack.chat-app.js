const path = require('path');
const rootDir = process.cwd();
const webpackBaseConfig = require('./base.config');

module.exports = Object.assign({}, webpackBaseConfig, {
  entry: {
    main: {
      import: path.join(rootDir, 'src/index.micro-fe.js'),
    }
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    publicPath: '/chat-app/',
    path: path.resolve(__dirname, '../../public/chat-app/'),
  },
  optimization: {
    chunkIds: 'named',
    minimize: false,
  },
  devtool: 'eval-source-map'
});
