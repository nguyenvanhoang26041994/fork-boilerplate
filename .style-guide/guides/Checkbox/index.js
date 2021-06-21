import withGuides from '@style-guide/HOCs/withGuides';
import Checkbox from './Checkbox';
import Color from './Color';
import Controlled from './Controlled';
import Size from './Size';
import UnControlled from './UnControlled';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Checkbox, name: 'Checkbox' },
  { Component: Color, name: 'Color' },
  { Component: Controlled, name: 'Controlled' },
  { Component: Size, name: 'Size' },
  { Component: UnControlled, name: 'UnControlled' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
