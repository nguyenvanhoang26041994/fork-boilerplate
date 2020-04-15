const fs = require('fs-extra');

const makeFolder = function(path) {
  return fs.mkdirSync(path, { recursive: true });
}

module.exports = makeFolder;
