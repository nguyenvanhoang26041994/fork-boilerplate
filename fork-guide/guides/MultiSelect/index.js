import withGuides from '@fork-guide/HOCs/withGuides';

import MultiSelect from './MultiSelect';
import CustomMultiSelect from './CustomMultiSelect';
import AsyncMultiSelect from './AsyncMultiSelect';
import CustomAsyncMultiSelect from './CustomAsyncMultiSelect';
import ControlledMultiSelect from './ControlledMultiSelect';
import ControlledAsyncMultiSelect from './ControlledAsyncMultiSelect';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: MultiSelect, name: 'MultiSelect' },
  { Component: CustomMultiSelect, name: 'CustomMultiSelect' },
  { Component: AsyncMultiSelect, name: 'AsyncMultiSelect' },
  { Component: CustomAsyncMultiSelect, name: 'CustomAsyncMultiSelect' },
  { Component: ControlledMultiSelect, name: 'ControlledMultiSelect' },
  { Component: ControlledAsyncMultiSelect, name: 'ControlledAsyncMultiSelect' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
