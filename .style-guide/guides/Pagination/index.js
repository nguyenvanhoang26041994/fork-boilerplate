import withGuides from '@style-guide/HOCs/withGuides';
import Pagination from './Pagination';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Pagination, name: 'Pagination' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
