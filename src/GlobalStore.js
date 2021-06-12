import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

const GlobalStore = (props) => {
  return (
    <Provider store={store} {...props} />
  );
};

export default GlobalStore;
