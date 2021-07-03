import withGuides from '@fork-guide/HOCs/withGuides';
import Dot from './Dot';
import Loader from './Loader';
import NiceSpinner from './NiceSpinner';
import Spinner from './Spinner';
import Wave from './Wave';
// __INJECTED_LINE__

import * as allCode from './code';

const demos = [
  { Component: Loader, name: 'Loader' },
  { Component: Dot, name: 'Dot' },
  { Component: Spinner, name: 'Spinner' },
  { Component: Wave, name: 'Wave' },
  { Component: NiceSpinner, name: 'NiceSpinner' },
  // __INJECTED_ITEM__
];

export default withGuides(demos, allCode);
