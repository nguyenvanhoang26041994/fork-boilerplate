import withGuides from '@style-guide/HOCs/withGuides';
import Color from './Color';
import Linear from './Linear';
import Progress from './Progress';
import SimulateProgress from './SimulateProgress';
import Size from './Size';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Color, name: 'Color' },
  { Component: Linear, name: 'Linear' },
  { Component: Progress, name: 'Progress' },
  { Component: SimulateProgress, name: 'SimulateProgress' },
  { Component: Size, name: 'Size' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
