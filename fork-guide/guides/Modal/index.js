import withGuides from '@fork-guide/HOCs/withGuides';
import Centered from './Centered';
import MarginView from './MarginView';
import Modal from './Modal';
import Width from './Width';
import CustomCloseIcon from './CustomCloseIcon';
import CustomHeader from './CustomHeader';
import ClickOutSide from './ClickOutSide';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Centered, name: 'Centered' },
  { Component: MarginView, name: 'MarginView' },
  { Component: Modal, name: 'Modal' },
  { Component: Width, name: 'Width' },
  { Component: CustomCloseIcon, name: 'CustomCloseIcon' },
  { Component: CustomHeader, name: 'CustomHeader' },
  { Component: ClickOutSide, name: 'ClickOutSide' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
