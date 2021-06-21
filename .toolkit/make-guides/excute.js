const path = require('path');
const Handlebars = require('handlebars');
const { makeFile, readFile, isExist } = require('../utils/file-system');
const input = require('./input');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

(() => {
  if (isExist(path.join(input.guidesPath, input.Component))) {
    return false;
  }

  const hbs = {
    '[Component].js': readFile(path.join(__dirname, '/template/[Component].js.hbs')),
    'code.js': readFile(path.join(__dirname, '/template/code.js.hbs')),
    'index.js': readFile(path.join(__dirname, '/template/index.js.hbs')),
  };

  // create index.js
  makeFile(
    path.join(input.guidesPath, `${input.Component}/index.js`),
    Handlebars.compile(hbs['index.js'])({ Component: input.Component })
  );

  // create [MainGuide].js
  makeFile(
    path.join(input.guidesPath, `${input.Component}/${input.Component}.js`),
    Handlebars.compile(hbs['[Component].js'])({ Component: input.Component })
  );

  // create code.js
  const demoName = input.Component.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  }).trim();

  makeFile(
    path.join(input.guidesPath, `${input.Component}/code.js`),
    Handlebars.compile(hbs['code.js'])({ Component: input.Component, demoName: demoName })
  );

  // inject to StylGuide
  const currentStyledGuide = readFile(input.StyleGuidePath);
  makeFile(
    input.StyleGuidePath,
    currentStyledGuide
      .replace('// __INJECTED_LINE_GUIDE__', `const ${input.Component}Guides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/${input.Component}'));\n// __INJECTED_LINE_GUIDE__`)
      .replace('{/* __INJECTED_LINE_ROUTER__ */}', `<Route path={\`\${path}/${input.Component.toLowerCase()}\`} component={${input.Component}Guides} />\n      {/* __INJECTED_LINE_ROUTER__ */}`)
  );
})();