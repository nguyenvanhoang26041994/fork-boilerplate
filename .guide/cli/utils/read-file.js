const fs = require('fs-extra');

const readFile = function(path) {
  return String(fs.readFileSync(path));
}

module.exports = readFile;
