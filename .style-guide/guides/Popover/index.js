import withGuides from '@style-guide/HOCs/withGuides';
import Popover from './Popover';
import Placement from './Placement';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Popover, name: 'Popover' },
  { Component: Placement, name: 'Placement' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
