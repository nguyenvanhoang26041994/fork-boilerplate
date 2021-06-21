import withGuides from '@style-guide/HOCs/withGuides';
import Placement from './Placement';
import Tooltip from './Tooltip';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Placement, name: 'Placement' },
  { Component: Tooltip, name: 'Tooltip' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
