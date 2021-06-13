const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile, isExist } = require('../utils/file-system');
const input = require('./input');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

(() => {
  if (isExist(path.join(input.guidesPath, input.Folder))) {
    return false;
  }

  const hbs = {
    '[MainGuide].js': readFile(path.join(__dirname, '/template/[MainGuide].js.hbs')),
    'code.js': readFile(path.join(__dirname, '/template/code.js.hbs')),
    'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
  };

  // create index.js
  makeFile(
    path.join(input.guidesPath, `${input.Folder}/index.js`),
    Handlebars.compile(hbs['index.js'])({ MainGuide: input.Folder })
  );

  // create [MainGuide].js
  makeFile(
    path.join(input.guidesPath, `${input.Folder}/${input.Folder}.js`),
    Handlebars.compile(hbs['[MainGuide].js'])({ Component: input.Folder })
  );

  // create code.js
  const demoName = input.Folder.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  makeFile(
    path.join(input.guidesPath, `${input.Folder}/code.js`),
    Handlebars.compile(hbs['code.js'])({ Component: input.Folder, demoName: demoName })
  );
})();