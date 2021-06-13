const mapNumberChar = [
  'zero-',
  'one-',
  'two-',
  'three-',
  'four-',
  'five-',
  'six-',
  'seven-',
  'eight-',
  'nine-',
];
const mapRestrictedNames = {
  'infinity': 'infinity-icon',
};

const capitalizeFirstLetter = (str) => {
  let _str = str.replace(/^\d/, char => mapNumberChar[char]);
  return _str.split('-').map(__str => __str.charAt(0).toUpperCase() + __str.slice(1)).join('');
};

const getIconReactInfo = (icon) => {
  const originalName = mapRestrictedNames[icon] || icon;
  const Component = capitalizeFirstLetter(originalName);

  return {
    Component,
    originalName,
    icon,
  };
};

module.exports = getIconReactInfo;
