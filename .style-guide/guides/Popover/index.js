import withGuides from '@style-guide/HOCs/withGuides';
import Popover from './Popover';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Popover, name: 'Popover' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
