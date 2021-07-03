import withGuides from '@fork-guide/HOCs/withGuides';
import Placement from './Placement';
import Tooltip from './Tooltip';
import Custom from './Custom';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Tooltip, name: 'Tooltip' },
  { Component: Placement, name: 'Placement' },
  { Component: Custom, name: 'Custom' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
