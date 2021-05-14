const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    path.join(__dirname, '../index.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@fork-ui': path.join(__dirname, '../../fork-ui'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      include: [
        /\.(html|js|css|png|jpg|jpeg|worf|json|ico|woff2)$/,
      ],
      runtimeCaching: [
        {
          urlPattern: /^http.*/,
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 7,
            cacheName: 'http-cache',
            cacheableResponse: {
              statuses: [0, 200, 206],
            },
            expiration: {
              maxAgeSeconds: 60 * 60 * 24,
            },
          },
        }
      ],
    })
  ],
  devtool: 'eval-source-map',
  target: 'web',
  performance: {},
};
