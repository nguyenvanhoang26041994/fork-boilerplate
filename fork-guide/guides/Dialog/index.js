import withGuides from '@fork-guide/HOCs/withGuides';
import Dialog from './Dialog';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Dialog, name: 'Dialog' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
