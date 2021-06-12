const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile, isExist } = require('../utils/file-system');
const input = require('./input');

(() => {
  if (isExist(path.join(input.path, input.Component))) {
    return false;
  }

  const hbs = {
    'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
    '[Component].js': readFile(path.join(__dirname, '/template/[Component].js.hbs')),
    '[Component].forwardRef.js': readFile(path.join(__dirname, '/template/[Component].forwardRef.js.hbs')),
    'lazy.js': readFile(path.join(__dirname, '/template/lazy.js.hbs')),
    'styled.js': readFile(path.join(__dirname, '/template/styled.js.hbs')),
  };
  // create index.js
  makeFile(path.join(input.path, `${input.Component}/index.js`), Handlebars.compile(hbs['index.js'])({
    Component: input.Component
  }));

  // create styled
  makeFile(path.join(input.path, `${input.Component}/styled.js`), Handlebars.compile(hbs['styled.js'])({
    Component: input.Component
  }));

  // create lazy
  if (input.lazy) {
    makeFile(path.join(input.path, `${input.Component}/lazy.js`), Handlebars.compile(hbs['lazy.js'])({}));
  }

  // create Component
  const componentTemplateName = input.forwardRef ? '[Component].forwardRef.js' : '[Component].js';
  makeFile(path.join(input.path, `${input.Component}/${input.Component}.js`), Handlebars.compile(hbs[componentTemplateName])({
    Component: input.Component,
  }));
})();
