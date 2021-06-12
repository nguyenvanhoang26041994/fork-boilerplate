const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile, isExist } = require('../utils/file-system');
const camelToKebab = require('../utils/camelToKebab');
const input = require('./input');

(() => {
  if (isExist(path.join(input.path, input.Component))) {
    return false;
  }

  const hbs = {
    'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
    '[Component].scss': readFile(path.join(__dirname, '/template/[Component].scss.hbs')),
    '[Component].js': readFile(path.join(__dirname, '/template/[Component].js.hbs')),
    '[Component].forwardRef.js': readFile(path.join(__dirname, '/template/[Component].forwardRef.js.hbs')),
  };
  // create index.js
  makeFile(path.join(input.path, `${input.Component}/index.js`), Handlebars.compile(hbs['index.js'])({
    Component: input.Component
  }));

  // create scss
  makeFile(path.join(input.path, `${input.Component}/${input.Component}.scss`), Handlebars.compile(hbs['[Component].scss'])({
    kebabClassName: camelToKebab(input.Component),
  }));

  // create Component
  const componentTemplateName = input.forwardRef ? '[Component].forwardRef.js' : '[Component].js';
  makeFile(path.join(input.path, `${input.Component}/${input.Component}.js`), Handlebars.compile(hbs[componentTemplateName])({
    kebabClassName: camelToKebab(input.Component),
    Component: input.Component,
  }));
})();
