import withGuides from '@fork-guide/HOCs/withGuides';

import Autocomplete from './Autocomplete';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Autocomplete, name: 'Autocomplete' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
