const path = require('path');
const rootDir = process.cwd();

module.exports = {
  Component: process.argv[2],
  StyleGuidePath: path.join(rootDir, '.style-guide/StyleGuide/StyleGuide.js'),
  guidesPath: path.join(rootDir, '.style-guide/guides'),
};
