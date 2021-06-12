const path = require('path');
const rootDir = process.cwd();


module.exports = {
  path: path.join(rootDir, 'src/components'),
  Component: process.argv[2],
  forwardRef: false,
  lazy: true,
};
