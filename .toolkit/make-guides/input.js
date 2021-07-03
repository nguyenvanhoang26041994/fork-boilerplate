const path = require('path');
const rootDir = process.cwd();

module.exports = {
  Component: process.argv[2],
  StyleGuidePath: path.join(rootDir, 'fork-guide/StyleGuide/StyleGuide.js'),
  guidesPath: path.join(rootDir, 'fork-guide/guides'),
};
