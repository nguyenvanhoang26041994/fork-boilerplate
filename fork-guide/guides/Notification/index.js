import withGuides from '@fork-guide/HOCs/withGuides';

import Notification from './Notification';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Notification, name: 'Notification' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
