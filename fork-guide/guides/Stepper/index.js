import withGuides from '@fork-guide/HOCs/withGuides';
import Alternate from './Alternate';
import DotOnly from './DotOnly';
import Stepper from './Stepper';
import Vertical from './Vertical';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Alternate, name: 'Alternate' },
  { Component: DotOnly, name: 'DotOnly' },
  { Component: Stepper, name: 'Stepper' },
  { Component: Vertical, name: 'Vertical' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
