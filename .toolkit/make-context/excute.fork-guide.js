const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile } = require('../utils/file-system');
const input = require('./input.fork-guide');

(() => {
  const hbs = {
    'Context.js': readFile(path.join(__dirname, '/template/Context.js.hbs')),
    'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
    'initValue.js': readFile(path.join(__dirname, '/template/initValue.js.hbs')),
    'useContext.js': readFile(path.join(__dirname, '/template/useContext.js.hbs')),
    'useValue.js': readFile(path.join(__dirname, '/template/useValue.js.hbs')),
  };
  makeFile(path.join(input.contextPath, `${input.Context}/Context.js`), Handlebars.compile(hbs['Context.js'])({}));
  makeFile(path.join(input.contextPath, `${input.Context}/index.js`), Handlebars.compile(hbs['index.js'])({}));
  makeFile(path.join(input.contextPath, `${input.Context}/initValue.js`), Handlebars.compile(hbs['initValue.js'])({}));
  makeFile(path.join(input.contextPath, `${input.Context}/useContext.js`), Handlebars.compile(hbs['useContext.js'])({}));
  makeFile(path.join(input.contextPath, `${input.Context}/useValue.js`), Handlebars.compile(hbs['useValue.js'])({}));
})();
