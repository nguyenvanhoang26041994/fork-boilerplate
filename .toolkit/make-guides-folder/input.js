const path = require('path');
const rootDir = process.cwd();

module.exports = {
  Component: process.argv[2],
  guidesPath: path.join(rootDir, '.style-guide/guides'),
};
