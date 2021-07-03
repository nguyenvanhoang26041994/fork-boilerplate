import withGuides from '@fork-guide/HOCs/withGuides';
import Typo from './Typo';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Typo, name: 'Typo' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
