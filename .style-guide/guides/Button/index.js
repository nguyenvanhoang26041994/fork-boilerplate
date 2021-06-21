import withGuides from '@style-guide/HOCs/withGuides';
import Bordered from './Bordered';
import Button from './Button';
import Color from './Color';
import Custom from './Custom';
import Disabled from './Disabled';
import FluidGroupButton from './FluidGroupButton';
import GroupButton from './GroupButton';
import Size from './Size';
import WithBadge from './WithBadge';
import WithIcon from './WithIcon';
import WithLoader from './WithLoader';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Bordered, name: 'Bordered' },
  { Component: Button, name: 'Button' },
  { Component: Color, name: 'Color' },
  { Component: Custom, name: 'Custom' },
  { Component: Disabled, name: 'Disabled' },
  { Component: FluidGroupButton, name: 'FluidGroupButton' },
  { Component: GroupButton, name: 'GroupButton' },
  { Component: Size, name: 'Size' },
  { Component: WithBadge, name: 'WithBadge' },
  { Component: WithIcon, name: 'WithIcon' },
  { Component: WithLoader, name: 'WithLoader' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
