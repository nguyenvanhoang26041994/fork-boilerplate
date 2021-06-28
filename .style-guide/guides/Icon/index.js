import withGuides from '@style-guide/HOCs/withGuides';
import Color from './Color';
import Icon from './Icon';
import All from './All';
import Size from './Size';
import SomeNiceIcons from './SomeNiceIcons';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Icon, name: 'Icon' },
  { Component: Color, name: 'Color' },
  { Component: Size, name: 'Size' },
  { Component: SomeNiceIcons, name: 'SomeNiceIcons' },
  { Component: All, name: 'All' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
