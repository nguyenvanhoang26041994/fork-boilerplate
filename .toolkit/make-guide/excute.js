const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile, isExist } = require('../utils/file-system');
const input = require('./input');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

(() => {
  if (isExist(path.join(input.guidesPath, `${input.Component}/${input.Guide}.js`))) {
    return false;
  }

  const hbs = {
    '[Guide].js': readFile(path.join(__dirname, '/template/[Guide].js.hbs')),
    'code.js': readFile(path.join(__dirname, '/template/code.js.hbs')),
  };

  // create [Guide].js
  makeFile(
    path.join(input.guidesPath, `${input.Component}/${input.Guide}.js`),
    Handlebars.compile(hbs['[Guide].js'])({ Component: input.Component })
  );

  // injected code.js
  const demoName = input.Guide.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  const injectedCodeStr = Handlebars.compile(hbs['code.js'])({ Component: input.Component, Guide: input.Guide, demoName: demoName });
  const currentCodeStr = readFile(path.join(input.guidesPath, `${input.Component}/code.js`));
  makeFile(
    path.join(input.guidesPath, `${input.Component}/code.js`),
    `${currentCodeStr}\n${injectedCodeStr}`
  );

  // injected index.js
  const currentIndexStr = readFile(path.join(input.guidesPath, `${input.Component}/index.js`));
  makeFile(
    path.join(input.guidesPath, `${input.Component}/index.js`),
    currentIndexStr
      .replace('// __INJECTED_LINE__', `import ${input.Guide} from './${input.Guide}';\n// __INJECTED_LINE__`)
      .replace('// __INJECTED_ITEM__', `{ Component: ${input.Guide}, name: '${input.Guide}' },\n  // __INJECTED_ITEM__`)
  );
})();
