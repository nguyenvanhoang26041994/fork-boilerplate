import withGuides from '@fork-guide/HOCs/withGuides';

import MultiSelect from './MultiSelect';
import CustomMultiSelect from './CustomMultiSelect';
import AsyncMultiSelect from './AsyncMultiSelect';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: MultiSelect, name: 'MultiSelect' },
  { Component: CustomMultiSelect, name: 'CustomMultiSelect' },
  { Component: AsyncMultiSelect, name: 'AsyncMultiSelect' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
