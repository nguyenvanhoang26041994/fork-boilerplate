const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = process.cwd();

module.exports = {
  entry: {
    vendors: [
      'resize-observer-polyfill',
      'react',
      'react-dom',
      'classnames',
      'prop-types',
      'styled-components',
      'lodash',
      'redux',
      'react-redux',
      'react-router-dom',
      // 'fork-design/icons/utils/lazy',
      // 'fork-design/icons/HOCs/withIconEnhance',
      // 'fork-design/icons/HOCs/withIconLazy',
    ],
    main: {
      import: path.join(rootDir, 'src/index.js'),
      dependOn: 'vendors',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'src/index.html'),
      inject: 'body',
    }),
  ],
  resolve: {
    alias: {
      '@@': rootDir,
      '@': path.join(rootDir, 'src'),
      '@contexts': path.join(rootDir, 'src/contexts'),
      '@components': path.join(rootDir, 'src/components'),
      '@containers': path.join(rootDir, 'src/containers'),
      '@hooks': path.join(rootDir, 'src/hooks'),
      '@HOCs': path.join(rootDir, 'src/HOCs'),
      '@pages': path.join(rootDir, 'src/pages'),
      '@utils': path.join(rootDir, 'src/utils'),
      '@reducers': path.join(rootDir, 'src/reducers'),
      '@selectors': path.join(rootDir, 'src/selectors'),
      '@constants': path.join(rootDir, 'src/constants'),
      '@store': path.join(rootDir, 'src/store'),
      '@fork-chat': path.join(rootDir, 'fork-chat'),
      '@fork-guide': path.join(rootDir, 'fork-guide'),
    }
  },
  watchOptions: {
    ignored: ['**/node_modules'],
  },
};
