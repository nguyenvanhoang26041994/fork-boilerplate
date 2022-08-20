import withGuides from '@fork-guide/HOCs/withGuides';
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
  { Component: Button, name: 'Button' },
  { Component: Color, name: 'Color' },
  { Component: Disabled, name: 'Disabled' },
  { Component: GroupButton, name: 'GroupButton' },
  { Component: Custom, name: 'Custom' },
  { Component: FluidGroupButton, name: 'FluidGroupButton' },
  { Component: Size, name: 'Size' },
  { Component: WithBadge, name: 'WithBadge' },
  { Component: WithIcon, name: 'WithIcon' },
  { Component: WithLoader, name: 'WithLoader' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
