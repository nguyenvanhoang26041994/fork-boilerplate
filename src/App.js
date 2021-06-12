import React from 'react';
import GlobalStore from './GlobalStore';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import StyleGuide from '@style-guide';

const App = () => {
  return (
    <GlobalStore>
      <BrowserRouter>
        <Switch>
          <Route path="/document" component={StyleGuide} />
        </Switch>
      </BrowserRouter>
    </GlobalStore>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
