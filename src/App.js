import React from 'react';
import GlobalStore from './GlobalStore';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import useDarkMode from './hooks/useDarkMode';
import AppContext from './AppContext';

import Document from '@style-guide/pages/document';

const App = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <GlobalStore>
      <AppContext.Provider value={{ isDark, toggleDark }}>
        <BrowserRouter>
          <Switch>
            <Route path="/document" component={Document} />
            <Route>
              <Redirect to="/document" />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </GlobalStore>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
