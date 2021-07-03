import withGuides from '@fork-guide/HOCs/withGuides';

import Grid from './Grid';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Grid, name: 'Grid' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
