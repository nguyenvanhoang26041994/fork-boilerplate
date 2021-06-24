import withGuides from '@style-guide/HOCs/withGuides';

import Confirm from './Confirm';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Confirm, name: 'Confirm' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
