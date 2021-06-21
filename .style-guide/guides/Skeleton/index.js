import withGuides from '@style-guide/HOCs/withGuides';
import Skeleton from './Skeleton';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Skeleton, name: 'Skeleton' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
