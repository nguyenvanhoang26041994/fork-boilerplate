const path = require('path');
const Handlebars = require('handlebars');
const readFolder = require('./utils/read-folder');
const readFile = require('./utils/read-file');
const makeFile = require('./utils/make-file');

const rcNeumorphismRoot = path.resolve('fork-ui');
const TablerIconTemplate = readFile(path.join(__dirname, '/templates/Icon/svg/tabler-icon.hbs'));
const mapNumberChar = ['zero-', 'one-', 'two-', 'three-', 'four-', 'five-', 'six-', 'seven-', 'eight-', 'nine-'];

function capitalizeFirstLetter(str) {
  let _str = str.replace(/^\d/, char => mapNumberChar[char]);
  return _str.split('-').map(__str => __str.charAt(0).toUpperCase() + __str.slice(1)).join('');
}

const makeTablerIcon = function(iconName) {
  let str = TablerIconTemplate;
  let svg = readFile(path.resolve(`tabler-icons/icons/${iconName}.svg`));
  svg = svg
    .replace(/\<svg .+\>/, '<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">')
    .replace(/\n+$/, '')
    .replace('stroke-dasharray', 'strokeDasharray')
    .replace('stroke-dashoffset', 'strokeDashoffset')
    .replace('xlink:href', 'xlinkHref');

  str = str.replace('__INJECT__FLAG__', svg);

  return Handlebars.compile(str)({ componentName: capitalizeFirstLetter(iconName), originalName: iconName })
};

const makeTablerIcons = function() {
  let icons = readFolder(path.resolve('tabler-icons/icons')) || [];
  icons = icons
    .filter(icon => /.svg$/.test(icon))
    .map(icon => icon.replace(/.svg$/, ''))

  icons = icons.map(iconName => makeTablerIcon(iconName));
  const header = '// THANK TO https://github.com/tabler/tabler-icons\nimport React from \'react\';\nimport enhancerIcon from \'\.\/enhancerIcon\';\n\n';

  makeFile(
    path.join(rcNeumorphismRoot, '/src/components/icons/index.js'),
    header + icons.join('\n')
  );
};

const makeFlagIcons = function() {}

const makeIcons = function() {
  makeTablerIcons();
  makeFlagIcons();
};

makeIcons();
