import withGuides from '@fork-guide/HOCs/withGuides';
import Alert from './Alert';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Alert, name: 'Alert' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
