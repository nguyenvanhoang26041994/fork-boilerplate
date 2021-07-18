import withGuides from '@fork-guide/HOCs/withGuides';

import Select from './Select';
import ControlledSelect from './ControlledSelect';
import Custom from './Custom';
import Seachable from './Seachable';
import AsyncSelect from './AsyncSelect';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Select, name: 'Select' },
  { Component: Custom, name: 'Custom' },
  { Component: Seachable, name: 'Seachable' },
  { Component: ControlledSelect, name: 'ControlledSelect' },
  { Component: AsyncSelect, name: 'AsyncSelect' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
