import withGuides from '@style-guide/HOCs/withGuides';
import Tabs from './Tabs';
import WithButtonGroup from './WithButtonGroup';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Tabs, name: 'Tabs' },
  { Component: WithButtonGroup, name: 'WithButtonGroup' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
