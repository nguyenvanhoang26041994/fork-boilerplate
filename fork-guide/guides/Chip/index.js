import withGuides from '@fork-guide/HOCs/withGuides';

import Chip from './Chip';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Chip, name: 'Chip' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
