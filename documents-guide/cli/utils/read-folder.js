const fs = require('fs-extra');

const readFolder = function(path) {
  return fs.readdirSync(path);
}

module.exports = readFolder;
