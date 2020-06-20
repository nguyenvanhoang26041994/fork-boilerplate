const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const readFolder = require('./utils/read-folder');
const readFile = require('./utils/read-file');
const makeFile = require('./utils/make-file');

const rcNeumorphismRoot = path.resolve('fork-ui');
const TablerIconTemplate = readFile(path.join(__dirname, '/templates/Icon/svg/tabler-icon.hbs'));
const IndexTemplate = readFile(path.join(__dirname, '/templates/Icon/svg/index.hbs'));

const makeTablerIcon = function(iconName) {
  let str = TablerIconTemplate;
  let svg = readFile(path.resolve(`tabler-icons/icons/${iconName}.svg`));
  svg = svg
    .replace(/\<svg .+\>/, '<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">')
    .replace(/\n+$/, '')
    .replace('stroke-dasharray', 'strokeDasharray')
    .replace('stroke-dashoffset', 'strokeDashoffset');

  str = str.replace('__INJECT__FLAG__', svg);

  makeFile(path.join(rcNeumorphismRoot, `/src/components/Icon/svg/${iconName}.js`), str);
};

const makeTablerIcons = function() {
  let icons = readFolder(path.resolve('tabler-icons/icons')) || [];
  icons = icons
    .filter(icon => /.svg$/.test(icon))
    .map(icon => icon.replace(/.svg$/, ''));

  icons.map(iconName => makeTablerIcon(iconName));

  makeFile(
    path.join(rcNeumorphismRoot, '/src/components/Icon/svg/index.js'),
    Handlebars.compile(IndexTemplate)({ importers: icons })
  );
};

const makeFlagIcons = function() {}

const makeIcons = function() {
  makeTablerIcons();
  makeFlagIcons();
};

makeIcons();
