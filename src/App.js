import React from 'react';
import GlobalStore from './GlobalStore';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DarkMode from '@contexts/DarkMode';
import StyleGuide from '@style-guide';
import ChatApp from '@fork-chat-boilerplate';

const App = () => {
  const darkMode = DarkMode.useValue();

  return (
    <GlobalStore>
      <DarkMode.Context.Provider value={darkMode}>
        <BrowserRouter>
          <Switch>
            <Route path="/document" component={StyleGuide} />
            <Route path="/chat" component={ChatApp} />
            <Route>
              <Redirect to="/document" />
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
