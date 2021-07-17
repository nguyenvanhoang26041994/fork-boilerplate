import withGuides from '@fork-guide/HOCs/withGuides';

import Select from './Select';
// import ReadonlySelect from './ReadonlySelect';
// import AsyncSelect from './AsyncSelect';
import ControlledSelect from './ControlledSelect';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Select, name: 'Select' },
  // { Component: ReadonlySelect, name: 'ReadonlySelect' },
  // { Component: AsyncSelect, name: 'AsyncSelect' },
  { Component: ControlledSelect, name: 'ControlledSelect' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
