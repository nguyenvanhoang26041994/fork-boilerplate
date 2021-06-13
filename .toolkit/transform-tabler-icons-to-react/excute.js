const path = require('path');
const rimraf = require('rimraf');
const { reduce } = require('lodash');
const Handlebars = require('handlebars');
const { makeFile, readFile, readFolder } = require('../utils/file-system');
const input = require('./input');
const getIconReactInfo = require('./getIconReactInfo');

(() => {
  const hbs = {
    '[icon].js': readFile(path.join(__dirname, '/template/[icon].js.hbs')),
    'lazy.js': readFile(path.join(__dirname, '/template/lazy.js.hbs')),
  };
  const allIconInfo = reduce(
    readFolder(path.join(input.tablerIconsPath, 'icons')),
    (rs, icon) => {
      if (icon => /.svg$/.test(icon)) {
        rs.push(getIconReactInfo(icon.replace(/.svg$/, '')));
      }
      return rs;
    }, []
  );

  // clean folder
  if (allIconInfo.length) {
    rimraf.sync(input.outputPath);
  }
  // create lazy
  makeFile(
    path.join(input.outputPath, 'lazy.js'),
    Handlebars.compile(hbs['lazy.js'])({ icons: allIconInfo })
  );

  for (let i = 0; i < allIconInfo.length; i++) {
    const iconInfo = allIconInfo[i];
    let svg = readFile(path.join(input.tablerIconsPath, `icons/${iconInfo.icon}.svg`))
      .replace(/\<svg .+\>/, '<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">')
      .replace(/\n+$/, '')
      .replace('stroke-dasharray', 'strokeDasharray')
      .replace('stroke-dashoffset', 'strokeDashoffset')
      .replace('xlink:href', 'xlinkHref');

    let content = Handlebars.compile(hbs['[icon].js'])(iconInfo).replace('__INJECTOR-LINE__', svg);

    // create icon react
    makeFile(
      path.join(input.outputPath, `${iconInfo.Component}.js`),
      content,
    );
  }
})();
