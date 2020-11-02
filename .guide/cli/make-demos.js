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

/**
 * 
 * @param {*} autoOrder // ['A', 'B', 'C', 'D']
 * @param {*} configOrder // ['B', 'D', 'Z']
 * @return ['B', 'D', 'A', 'C']
 */

const reOrder = function(autoOrder, configOrder) {
  const _autoOrder = autoOrder || [];
  let _configOrder = configOrder || [];
  _configOrder = _configOrder.filter(function(item) {
    return _autoOrder.indexOf(item) >= 0
  });

  const order = new Set(_configOrder);
  _autoOrder.forEach(key => {
    if (!order.has(key)) {
      order.add(key);
    }
  });
  return [...order];
};

const DemoTemplate = readFile(path.join(__dirname, '/templates/Document/demo/Demo.hbs'));
const IndexTemplate = readFile(path.join(__dirname, '/templates/Document/index.hbs'));
const DocumentTemplate = readFile(path.join(__dirname, '/templates/Document/Document.hbs'));


const makeDemo = function(documentName, demoName) {
  let demoStr = readFile(path.join(__dirname, `../documents/${documentName}/demo/${demoName}.js`));
  let injectedStr = demoStr;
  injectedStr += Handlebars.compile(DemoTemplate)(makeHeader(demoName, documentName));
  injectedStr += `\nDemo.code = \`${
    demoStr
      .replace(/\`/g, '\\\`')
      .replace(/\$/g, '\\\$')
  }\`;`;

  makeFile(path.join(__dirname, `../_documents/${documentName}/demo/${demoName}.js`), injectedStr);
};

const makeDocument = function(documentName) {
  makeFile(path.join(__dirname, `../_documents/${documentName}/index.js`), IndexTemplate);

  let demos = readFolder(path.join(__dirname, `../documents/${documentName}/demo`)) || [];

  demos = demos
    .filter(demo => /.js$/.test(demo))
    .map(demo => demo.replace(/.js$/, ''));

    demos.map(demoName => makeDemo(documentName, demoName));

    const config = require(`../documents/${documentName}/config`);
    const configOrder = Object.keys(config);

    const importers = reOrder(demos, configOrder);
    const importersLeft = []
    const importersRight = [];
    const importersMiddle = [];

    const count = importers.length;

    for (let i = 0; i < count; i+= 3) {
      importersLeft.push(importers[i]);
      count > i + 1 && importersMiddle.push(importers[i + 1]);
      count > i + 2 && importersRight.push(importers[i + 2]);
    }

    let injectStr = Handlebars.compile(DocumentTemplate)({
      importers: importers,
      importersLeft: importersLeft,
      importersMiddle: importersMiddle,
      importersRight: importersRight,
      documentName: documentName,
    });

    makeFile(
      path.join(__dirname, `../_documents/${documentName}/Document.js`),
      injectStr
    );
};

const makeDocuments = function() {
  let documents = readFolder(path.join(__dirname, '../documents')) || [];
  documents.map(documentName => makeDocument(documentName));
};

makeDocuments();
