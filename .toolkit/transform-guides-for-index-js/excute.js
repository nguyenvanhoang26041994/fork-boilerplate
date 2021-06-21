const path = require('path');
const Handlebars = require('handlebars');
const { reduce } = require('lodash');
const { makeFile, readFile, readFolder } = require('../utils/file-system');
const input = require('./input');

const hbs = {
  'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
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

  makeFile(
    path.join(input.styleGuidePath, `guides/${folderName}/index.js`),
    Handlebars.compile(hbs['index.js'])({
      Components: allGuides
    }),
  );
};

(() => {
  const allGuidesFolders = readFolder(path.join(input.styleGuidePath, 'guides'));
  for (let i = 0; i < allGuidesFolders.length; i++) {
    tranformGuidesInFolder(allGuidesFolders[i]);
  }
})();
