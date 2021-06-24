import withGuides from '@style-guide/HOCs/withGuides';
import Badge from './Badge';
import Color from './Color';
import Custom from './Custom';
import OverflowCount from './OverflowCount';
import Overlap from './Overlap';
import Placement from './Placement';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Badge, name: 'Badge' },
  { Component: Color, name: 'Color' },
  { Component: OverflowCount, name: 'OverflowCount' },
  { Component: Overlap, name: 'Overlap' },
  { Component: Placement, name: 'Placement' },
  { Component: Custom, name: 'Custom' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
