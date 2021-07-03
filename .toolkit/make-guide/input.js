const path = require('path');
const rootDir = process.cwd();
const _path = process.argv[2].split('/');
const [ Component, Guide ] = _path;

module.exports = {
  Component: Component,
  Guide: Guide,
  guidesPath: path.join(rootDir, 'fork-guide/guides'),
};
