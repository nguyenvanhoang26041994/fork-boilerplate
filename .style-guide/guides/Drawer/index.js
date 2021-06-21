import withGuides from '@style-guide/HOCs/withGuides';
import Drawer from './Drawer';
import Placement from './Placement';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Drawer, name: 'Drawer' },
  { Component: Placement, name: 'Placement' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
