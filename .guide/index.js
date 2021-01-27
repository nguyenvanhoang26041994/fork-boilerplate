import { Workbox } from 'workbox-window';
import React from 'react';
import ReactDOM from 'react-dom';
import Guide from './Guide';

require('@fork-ui/style/core.scss');

ReactDOM.render(<Guide />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
