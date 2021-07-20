import withGuides from '@fork-guide/HOCs/withGuides';

import MultiSelect from './MultiSelect';
import CustomSelect from './CustomSelect';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: MultiSelect, name: 'MultiSelect' },
  { Component: CustomSelect, name: 'CustomSelect' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
