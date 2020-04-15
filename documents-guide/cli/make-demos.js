const path = require('path');
const Handlebars = require('handlebars');
const makeFile = require('./utils/make-file');
const readFile = require('./utils/read-file');
const readFolder = require('./utils/read-folder');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

const makeHeader = function(demoName, componentName) {
  const header = demoName.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  const href = `${componentName.toLowerCase()}-${header.toLowerCase().split(' ').join('-')}`;
  return {
    header,
    href,
  };
};

const DemoTemplate = readFile(path.join(__dirname, '/templates/Document/demo/Demo.hbs'));
const IndexTemplate = readFile(path.join(__dirname, '/templates/Document/index.hbs'));
const DocumentTemplate = readFile(path.join(__dirname, '/templates/Document/Document.hbs'));

const makeDemo = function(documentName, demoName) {
  let demoStr = readFile(path.join(__dirname, `../documents/${documentName}/demo/${demoName}.js`));
  let injectedStr = demoStr;
  injectedStr += Handlebars.compile(DemoTemplate)(makeHeader(demoName, documentName));
  injectedStr += `\nDemo.code = \`${demoStr}\`;\n`;

  makeFile(path.join(__dirname, `../_documents/${documentName}/demo/${demoName}.js`), injectedStr);
};

const makeDocument = function(documentName) {
  makeFile(path.join(__dirname, `../_documents/${documentName}/index.js`), IndexTemplate);

  let demos = readFolder(path.join(__dirname, `../documents/${documentName}/demo`)) || [];

  demos = demos
    .filter(demo => /.js$/.test(demo))
    .map(demo => demo.replace(/.js$/, ''));

    demos.map(demoName => makeDemo(documentName, demoName));

    makeFile(
      path.join(__dirname, `../_documents/${documentName}/Document.js`),
      Handlebars.compile(DocumentTemplate)({ importers: demos })
    );
};

const makeDocuments = function() {
  let documents = readFolder(path.join(__dirname, '../documents')) || [];
  documents.map(documentName => makeDocument(documentName));
};

makeDocuments();