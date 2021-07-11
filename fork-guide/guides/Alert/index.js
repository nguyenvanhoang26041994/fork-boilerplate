import withGuides from '@fork-guide/HOCs/withGuides';
import Alert from './Alert';
import HeaderAlert from './HeaderAlert';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Alert, name: 'Alert' },
  { Component: HeaderAlert, name: 'HeaderAlert' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
