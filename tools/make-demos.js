const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const makeFile = require('./utils/make-file');

const SPLIT_STRING_REGEX = /([A-Z]{1}[a-z0-9]+)/g;

const makeHeader = function(filename) {
  const f = filename.replace(SPLIT_STRING_REGEX, function(text) {
    return `${text} `;
  });
  const fileName = f.trim();
  const display = fileName;
  const arrayName = fileName.toLowerCase().split(' ');

  const kebab = arrayName.join('-');
  return {
    display,
    kebab,
  };
};

const DemoIndexJSTemplate = String(fs.readFileSync(path.resolve('tools/template/DemoIndexJS.hbs')));
const DemoTemplate = String(fs.readFileSync(path.resolve('tools/template/Demo.hbs')));
const DocumentTemplate = String(fs.readFileSync(path.resolve('tools/template/Document.hbs')));

const makeDemoIndexJS = function(componentName) {
  makeFile(path.resolve(`src/_component-document/${componentName}/index.js`), DemoIndexJSTemplate);
};

const makeDocumentJS = function(componentName) {
  const componentDemos = fs.readdirSync(path.resolve(`src/component-document/${componentName}`)) || [];
  const importers = componentDemos
    .filter(item => /.js$/.test(item))
    .map(item => item.replace(/.js$/, ''));

  const JSContent = Handlebars.compile(DocumentTemplate)({
    importers,
  });
  makeFile(path.resolve(`src/_component-document/${componentName}/Document.js`), JSContent);
}

const makeComponentDemoJS = function(componentName, componentDemoName, JSContent) {
  makeFile(path.resolve(`src/_component-document/${componentName}/demo/${componentDemoName}.js`), JSContent);
};

const makeComponentDemo = function(componentName, componentDemoFileName) {
  const componentDemoName = String(componentDemoFileName).replace(/.js$/, '');
  const componentDemo = String(fs.readFileSync(path.resolve(`src/component-document/${componentName}/${componentDemoFileName}`)));

  const { display, kebab } = makeHeader(componentDemoName);

  let JSContent = `${componentDemo}`;

  JSContent += `\n${Handlebars.compile(DemoTemplate)({
    header: display,
    href: `${componentName.toLowerCase()}-${kebab}`,
  })}`;
  JSContent += `\nDemo.code = \`${componentDemo}\`;`;

  makeComponentDemoJS(componentName, componentDemoName, JSContent);
};

const makeComponentDemos = function(componentName) {
  componentDemos = fs.readdirSync(path.resolve(`src/component-document/${componentName}`)) || [];
  componentDemos.map(componentDemoFileName => {
    if (!/.js$/.test(componentDemoFileName)) {
      return fs.copyFileSync(
        path.resolve(`src/component-document/${componentName}/${componentDemoFileName}`),
        path.resolve(`src/_component-document/${componentName}/demo/${componentDemoFileName}`)
      );
    }
    return makeComponentDemo(componentName, String(componentDemoFileName))
  });
}

const makeDemo = function(componentName) {
  makeDemoIndexJS(componentName);
  makeDocumentJS(componentName);
  makeComponentDemos(componentName);
}

const makeDemos = function() {
  const folders = fs.readdirSync(path.resolve(`src/component-document`)) || [];
  folders.map(componentName => makeDemo(String(componentName)));
};

makeDemos();
