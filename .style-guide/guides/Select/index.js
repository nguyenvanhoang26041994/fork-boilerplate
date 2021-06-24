import withGuides from '@style-guide/HOCs/withGuides';

import Select from './Select';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Select, name: 'Select' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
