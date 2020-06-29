const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = require('./base.config')({
  mode: 'production',
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
    new CopyPlugin([
      {
        from: 'static',
        to: 'static',
      },
    ]),
    new WebpackPwaManifest({
      name: 'rc-components.now.sh',
      short_name: 'RC-Components',
      description: 'RC-Components',
      background_color: '#b34040',
      theme_color: '#ffffff',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/img/icon-512x512.png'),
          sizes: [24, 48, 64],
        },
        {
          src: path.resolve('src/assets/img/icon-512x512.png'),
          sizes: [24, 48, 64],
          ios: true,
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
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
    }),
  ],
  performance: {
    assetFilter: assetFilename =>
      !/(\.png$)|(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
