import withGuides from '@style-guide/HOCs/withGuides';
import Accordion from './Accordion';
import Collapse from './Collapse';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Accordion, name: 'Accordion' },
  { Component: Collapse, name: 'Collapse' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
