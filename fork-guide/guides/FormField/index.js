import withGuides from '@fork-guide/HOCs/withGuides';
import FormField from './FormField';
import Disabled from './Disabled';
import Filled from './Filled';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: FormField, name: 'FormField' },
  { Component: Filled, name: 'Filled' },
  { Component: Disabled, name: 'Disabled' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
