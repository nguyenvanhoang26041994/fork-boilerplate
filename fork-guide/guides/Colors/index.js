import withGuides from '@fork-guide/HOCs/withGuides';
import Colors from './Colors';
import GrayColors from './GrayColors';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Colors, name: 'Colors' },
  { Component: GrayColors, name: 'GrayColors' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
