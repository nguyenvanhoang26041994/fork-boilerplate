const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const makeFile = require('./utils/make-file');
const readFile = require('./utils/read-file');
const readFolder = require('./utils/read-folder');

const DashboardTemplate = readFile(path.join(__dirname, '/templates/Dashboard/Dashboard.hbs'));

const genVars = function(documents) {
  return {
    importers: documents.map(document => {
      return {
        key: document,
        keyLowerCase: document.toLowerCase(),
      };
    }),
  };
};

const makeDashboard = function() {
  let documents = readFolder(path.join(__dirname, '../documents')) || [];

  let injectedStr = Handlebars.compile(DashboardTemplate)(genVars(documents));

  makeFile(path.join(__dirname, `../Dashboard/Dashboard.js`), injectedStr);
};

makeDashboard();
