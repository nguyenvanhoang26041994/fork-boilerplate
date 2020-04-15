const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const makeFile = require('./utils/make-file');
const readFile = require('./utils/read-file');
const readFolder = require('./utils/read-folder');

const DashboardTemplate = readFile(path.join(__dirname, '/templates/Dashboard/Dashboard.hbs'));
const mapRouterTemplate = readFile(path.join(__dirname, '/templates/Dashboard/mapRouter.hbs'));

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

  const vars = genVars(documents);

  let injectedDashboardStr = Handlebars.compile(DashboardTemplate)(vars);
  let injectedMapRouterStr = Handlebars.compile(mapRouterTemplate)(vars);

  makeFile(path.join(__dirname, `../Dashboard/Dashboard.js`), injectedDashboardStr);
  makeFile(path.join(__dirname, `../Dashboard/mapRouter.js`), injectedMapRouterStr);
};

makeDashboard();
