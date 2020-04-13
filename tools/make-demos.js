const fs = require('fs');
const path = require('path');
const makeFile = require('./utils/make-file');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

const makeHeader = function(filename) {
  const f = filename.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  });
  const fileName = f.trim();
  const display = fileName.toUpperCase();
  const arrayName = fileName.toLowerCase().split(' ');

  const kebab = arrayName.join('-');
  return {
    display,
    kebab,
  };
};

const makeDemo = function(name) {
  const files = fs.readdirSync(path.resolve(`src/pages/documents/${name}/demo`));
  files && files.map && files.map(file => {
    if (!/.js$/.test(file)) {
      return fs.copyFileSync(path.resolve(`src/pages/documents/${name}/demo/${file}`), path.resolve(`src/pages/documents/${name}/_demo/${file}`));
    }
    const text = fs.readFileSync(path.resolve(`src/pages/documents/${name}/demo/${file}`));
    const _code = `\`${text}\``;
    const _filename = String(file).replace(/.js$/, '');
    const { display, kebab } = makeHeader(_filename);
    let demo = `${text}\nDemo.header = '${display}';\nDemo.href = '${String(name).toLowerCase()}-${kebab}';\nDemo.code = ${_code};\n`;
    makeFile(path.resolve(`src/pages/documents/${name}/_demo/${file}`), demo);

    return true;
  });
};

const makeDemos = function() {
  const folders = fs.readdirSync(path.resolve(`src/pages/documents`));

  folders && folders.map && folders.map(name => {
    makeDemo(name);
  })
};

makeDemos();
