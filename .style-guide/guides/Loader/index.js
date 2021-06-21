import withGuides from '@style-guide/HOCs/withGuides';
import Attract from './Attract';
import Dot from './Dot';
import Loader from './Loader';
import Move from './Move';
import NiceSpinner from './NiceSpinner';
import Spinner from './Spinner';
import Wave from './Wave';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Attract, name: 'Attract' },
  { Component: Dot, name: 'Dot' },
  { Component: Loader, name: 'Loader' },
  { Component: Move, name: 'Move' },
  { Component: NiceSpinner, name: 'NiceSpinner' },
  { Component: Spinner, name: 'Spinner' },
  { Component: Wave, name: 'Wave' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
