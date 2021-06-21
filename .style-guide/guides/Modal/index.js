import withGuides from '@style-guide/HOCs/withGuides';
import Centered from './Centered';
import MarginView from './MarginView';
import Modal from './Modal';
import Width from './Width';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Centered, name: 'Centered' },
  { Component: MarginView, name: 'MarginView' },
  { Component: Modal, name: 'Modal' },
  { Component: Width, name: 'Width' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
