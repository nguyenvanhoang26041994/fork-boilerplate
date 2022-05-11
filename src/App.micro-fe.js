import React from 'react';
import GlobalStore from './GlobalStore';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DarkMode from '@contexts/DarkMode';
import StyleGuide from '@fork-guide';
import lazy from '@utils/lazy';

const ChatApp = lazy(() => import('@fork-chat'));
const App = () => {
  const darkMode = DarkMode.useValue();

  return (
    <GlobalStore>
      <DarkMode.Context.Provider value={darkMode}>
        <BrowserRouter>
          <Switch>
            <Route path="/system-guideline/document" component={StyleGuide} />
            <Route path="/chat-app" component={ChatApp} />
            <Route>
              <Redirect to="/system-guideline/document" />
            </Route>
          </Switch>
        </BrowserRouter>
      </DarkMode.Context.Provider>
    </GlobalStore>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
