
const fs = require('fs-extra');
const path = require('path');

const readFile = path => String(fs.readFileSync(path));
const readFolder = path => fs.readdirSync(path);
const makeFolder = path => fs.mkdirSync(path, { recursive: true });
const makeFile = (_path, text) => {
  const folder = path.dirname(_path);
  if (!fs.existsSync(folder)) {
    makeFolder(folder);
  }

  fs.writeFileSync(_path, text);
};
const isExist = path => fs.existsSync(path);

module.exports.readFile = readFile;
module.exports.readFolder = readFolder;
module.exports.makeFolder = makeFolder;
module.exports.makeFile = makeFile;
module.exports.isExist = isExist;