import withGuides from '@fork-guide/HOCs/withGuides';
import Color from './Color';
import Controlled from './Controlled';
import Radio from './Radio';
import Size from './Size';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Radio, name: 'Radio' },
  { Component: Color, name: 'Color' },
  { Component: Controlled, name: 'Controlled' },
  { Component: Size, name: 'Size' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
