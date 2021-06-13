const path = require('path');
const { reduce } = require('lodash');
const { makeFile, readFile, readFolder } = require('../utils/file-system');
const input = require('./input');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

const getTranformGuideInfo = (folderName, Component) => {
  let content = readFile(path.join(input.styleGuidePath, `guides/${folderName}/${Component}.js`));

  const displayDemoName = Component.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  content = content
    .replace(/\`/g, '\\\`')
    .replace(/\$/g, '\\\$');
  content = ''
    .concat(`export const ${Component} = {\n`)
      .concat(`  code: \`${content}\`,\n`)
      .concat(`  demoName: '${displayDemoName}',\n`)
    .concat('}\n');

  return content;
};

const tranformGuidesInFolder = (folderName) => {
  const allGuides = reduce(
    readFolder(
      path.join(input.styleGuidePath, `guides/${folderName}`)),
      (rs, fileName) => {
        if (fileName === 'index.js' || fileName === 'code.js') {
          return rs;
        }
        rs.push(fileName.replace(/.js$/, ''));
        return rs;
      }, []
  );
  let code = '';
  for (let i = 0; i < allGuides.length; i++) {
    code += `${getTranformGuideInfo(folderName, allGuides[i])}\n`;
  }

  makeFile(
    path.join(input.styleGuidePath, `guides/${folderName}/code.js`),
    code,
  );
};

(() => {
  const allGuidesFolders = readFolder(path.join(input.styleGuidePath, 'guides'));
  for (let i = 0; i < allGuidesFolders.length; i++) {
    tranformGuidesInFolder(allGuidesFolders[i]);
  }
})();
