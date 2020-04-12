const fs = require('fs');
const path = require('path');

const make = function(text) {
  
};

fs.readdir(path.resolve('tabler-icons/icons'), function(err, files) {
  const _files = files.map(file => file.replace('.svg', ''))
  const content = _files.map(file => `  '${file}': require('./${file}').default,`).join('\n');
  const text = `const icons = {\n${content}\n};\n\nexport default icons;\n`;
  fs.writeFileSync(path.resolve('result-tools/Icon/svg/index.js'), text);

  _files.map(file => {
    fs.readFile(path.resolve(`tabler-icons/icons/${file}.svg`), function(err, linkString) {
      let _linkString = String(linkString).replace(/\<svg .+\>/, '<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">');
      _linkString = _linkString.replace(/\n+$/, '');
      _linkString = _linkString.replace('stroke-dasharray', 'strokeDasharray');
      _linkString = _linkString.replace('stroke-dashoffset', 'strokeDashoffset');
      const component = `import React from 'react';\n\nexport default props => (\n${_linkString}\n);\n`;
      fs.writeFileSync(path.resolve(`result-tools/Icon/svg/${file}.js`), component);
    })
  });
});
