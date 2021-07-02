import withGuides from '@style-guide/HOCs/withGuides';

import Searchbox from './Searchbox';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Searchbox, name: 'Searchbox' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
