import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.micro-fe';
import '@fork-ui/styles/index.scss';
import '@fork-chat/styles/index.scss';
import '@fork-ui/gallery/index.scss';
import 'emoji-mart/css/emoji-mart.css'

ReactDOM.render(<App />, document.getElementById('root'));
