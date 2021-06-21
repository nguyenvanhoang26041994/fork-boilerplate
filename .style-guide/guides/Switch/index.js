import withGuides from '@style-guide/HOCs/withGuides';
import Color from './Color';
import Controlled from './Controlled';
import Disabled from './Disabled';
import Loading from './Loading';
import Size from './Size';
import Switch from './Switch';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Color, name: 'Color' },
  { Component: Controlled, name: 'Controlled' },
  { Component: Disabled, name: 'Disabled' },
  { Component: Loading, name: 'Loading' },
  { Component: Size, name: 'Size' },
  { Component: Switch, name: 'Switch' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
