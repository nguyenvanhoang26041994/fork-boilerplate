const path = require('path');
const rootDir = process.cwd();

module.exports = {
  path: path.join(rootDir, 'fork-ui/core'),
  Component: process.argv[2],
  forwardRef: false,
};
