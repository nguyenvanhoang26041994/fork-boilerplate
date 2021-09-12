import withGuides from '@fork-guide/HOCs/withGuides';

import Pincode from './Pincode';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Pincode, name: 'Pincode' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
