const path = require('path');
const rootDir = process.cwd();

module.exports = {
  path: path.join(rootDir, 'src/components'),
  Component: 'Hoang',
  forwardRef: false,
  lazy: true,
};
