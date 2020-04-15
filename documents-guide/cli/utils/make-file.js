const fs = require('fs-extra');
const path = require('path');
const makeFolder = require('./make-folder');

const makeFiles = function(_path, text) {
  const folder = path.dirname(_path);
  if (!fs.existsSync(folder)) {
    makeFolder(folder);
  }

  fs.writeFileSync(_path, text);
}

module.exports = makeFiles;
