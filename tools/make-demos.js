const fs = require('fs');
const path = require('path');
const makeFile = require('./utils/make-file');

const makeHeader = function(fileName) {
  // Default Visible
  // { display: 'DEFAULT VISIBALE', snood: 'default-visible' }
};

const makeDemo = function(name) {
  const files = fs.readdirSync(path.resolve(`src/pages/documents/${name}/demo`));
  files && files.map && files.map(file => {
    if (!/.js$/.test(file)) {
      return fs.copyFileSync(path.resolve(`src/pages/documents/${name}/demo/${file}`), path.resolve(`src/pages/documents/${name}/_demo/${file}`));
    }
    const text = fs.readFileSync(path.resolve(`src/pages/documents/${name}/demo/${file}`));
    const _code = `\`${text}\``;
    const _header = String(file).replace(/.js$/, '').toUpperCase();
    const _href = `${String(name).toLowerCase()}-${_header.toLowerCase()}`;
    let demo = `${text}\nDemo.header = '${_header}';\nDemo.href = '${_href}';\nDemo.code = ${_code};\n`;
    makeFile(path.resolve(`src/pages/documents/${name}/_demo/${file}`), demo);

    return true;
  });
}

const makeDemos = function() {
  const folders = fs.readdirSync(path.resolve(`src/pages/documents`));

  folders && folders.map && folders.map(name => {
    makeDemo(name);
  })
};

makeDemos();
