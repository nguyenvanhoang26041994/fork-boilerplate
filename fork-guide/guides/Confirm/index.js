import withGuides from '@fork-guide/HOCs/withGuides';

import Confirm from './Confirm';
import Popconfirm from './Popconfirm';
import Placement from './Placement';
import CustomText from './CustomText';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Confirm, name: 'Confirm' },
  { Component: Popconfirm, name: 'Popconfirm' },
  { Component: CustomText, name: 'CustomText' },
  { Component: Placement, name: 'Placement' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
