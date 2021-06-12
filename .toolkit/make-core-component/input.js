const path = require('path');
const rootDir = process.cwd();

module.exports = {
  path: path.join(rootDir, 'fork-ui/core'),
  Component: 'Switch',
  forwardRef: false,
};
