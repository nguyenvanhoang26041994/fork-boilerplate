import withGuides from '@fork-guide/HOCs/withGuides';

import AutoComplete from './AutoComplete';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: AutoComplete, name: 'AutoComplete' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
