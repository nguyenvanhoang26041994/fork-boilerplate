import withGuides from '@fork-guide/HOCs/withGuides';
import Timeline from './Timeline';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Timeline, name: 'Timeline' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
