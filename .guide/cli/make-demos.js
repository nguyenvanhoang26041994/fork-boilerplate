const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const makeFile = require('./utils/make-file');
const readFile = require('./utils/read-file');
const readFolder = require('./utils/read-folder');

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

const makeHeader = function(demoName, componentName) {
  const header = demoName.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  const href = `${componentName.toLowerCase()}-${header.toLowerCase().split(' ').join('-')}`;
  return {
    href,
    header: header.toUpperCase(),
    anchorTitle: capitalizeFirstLetter(header.toLowerCase()),
  };
};

const DemoTemplate = readFile(path.join(__dirname, '/templates/Demo.hbs'));

const makeDemo = function(documentName, demoName) {
  let demoStr = readFile(path.join(__dirname, `../components/documents/${documentName}/${demoName}.js`));
  let injectedStr = demoStr;
  injectedStr += Handlebars.compile(DemoTemplate)(makeHeader(demoName, documentName));
  injectedStr += `\nDemo.code = \`${
    demoStr
      .replace(/\`/g, '\\\`')
      .replace(/\$/g, '\\\$')
  }\`;`;

  makeFile(path.join(__dirname, `../components/_documents/${documentName}/${demoName}.js`), injectedStr);
};

const makeDocument = function(documentName) {
  makeFile(
    path.join(__dirname, `../components/_documents/${documentName}/index.js`),
    readFile(path.join(__dirname, `../components/documents/${documentName}/index.js`)),
  );
  let demos = readFolder(path.join(__dirname, `../components/documents/${documentName}/`)) || [];
  demos = demos
    .filter(demo => demo !== 'index.js')
    .filter(demo => /.js$/.test(demo))
    .map(demo => demo.replace(/.js$/, ''));

    demos.map(demoName => makeDemo(documentName, demoName));
};

const makeDocuments = function() {
  let documents = readFolder(path.join(__dirname, '../components/documents')) || [];
  documents.map(documentName => makeDocument(documentName));
};

makeDocuments();
