const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = process.cwd();

module.exports = {
  entry: {
    vendors: [
      'react',
      'react-dom',
      'classnames',
      'prop-types',
      'styled-components',
      'lodash',
      'redux',
      'react-redux',
      'react-router-dom',
    ],
    priorities: {
      import: [
        path.join(rootDir, 'fork-ui/utils/lazy'),
        path.join(rootDir, 'fork-ui/HOCs/withIconEnhancer'),
        path.join(rootDir, 'fork-ui/HOCs/withIconLazy')
      ],
      dependOn: 'vendors',
    },
    main: {
      import: path.join(rootDir, 'src/index.js'),
      dependOn: 'priorities',
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
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'src/index.html'),
    })
  ],
  resolve: {
    alias: {
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
      '@fork-ui': path.join(rootDir, 'fork-ui'),
      '@style-guide': path.join(rootDir, '.style-guide'),
    }
  },
};
