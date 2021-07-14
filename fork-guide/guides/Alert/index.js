import withGuides from '@fork-guide/HOCs/withGuides';
import Alert from './Alert';
import PushAlert from './PushAlert';
import UpdateAlert from './UpdateAlert';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Alert, name: 'Alert' },
  { Component: PushAlert, name: 'PushAlert' },
  { Component: UpdateAlert, name: 'UpdateAlert' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
