const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const chalk = require('chalk');
const ip = require('ip');

const app = express();

const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  silent: true,
  stats: 'errors-only',
  logLevel: 'warn',
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  middleware.fileSystem.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      return res.sendStatus(404);
    }

    return res.send(file.toString());
  })
});

const host = 'localhost';
const port = 9000;

app.listen(port, host, error => {
  if (error) {
    return console.error(chalk.red(err));
  }
  console.log(`
${chalk.gray('\n-----------------------------------')}
Localhost: ${chalk.green(`http://${host}:${port}`)}
      LAN: ${chalk.green(`http://${ip.address()}:${port}`)}`);
});
