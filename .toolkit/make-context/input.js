const path = require('path');
const rootDir = process.cwd();
const Context = process.argv[2];

module.exports = {
  Context: Context,
  outputPath: path.join(rootDir, 'src/contexts'),
};
