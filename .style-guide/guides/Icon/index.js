import withGuides from '@style-guide/HOCs/withGuides';
import Color from './Color';
import Icon from './Icon';
import LazyIcon from './LazyIcon';
import Size from './Size';
import SomeNiceIcons from './SomeNiceIcons';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Color, name: 'Color' },
  { Component: Icon, name: 'Icon' },
  { Component: LazyIcon, name: 'LazyIcon' },
  { Component: Size, name: 'Size' },
  { Component: SomeNiceIcons, name: 'SomeNiceIcons' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
