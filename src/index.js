import React from 'react';
import ReactDOM from 'react-dom';
import { Workbox } from 'workbox-window';
import App from './App';

require('../fork-ui/src/style/core.scss');

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {useSpring, animated} from 'react-spring'

// function App() {
//   const props = useSpring({opacity: 1, from: {opacity: 0}})
//   return <animated.div style={props}>I will fade in</animated.div>
// }

// ReactDOM.render(<App />, document.getElementById('app'));
