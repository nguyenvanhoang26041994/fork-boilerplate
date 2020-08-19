const ConfigProvider = require('@@/fork-ui/src/components/ConfigProvider').default({
  lang: {},
});
import React, { useState, useMemo, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppContext from './AppContext';
import NewGuide from './NewGuide';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const appValue = useMemo(() => ({
    isDark,
    setIsDark,
  }), [isDark, setIsDark]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  }, [isDark]);

  return (
    <ConfigProvider>
      <AppContext.Provider value={appValue}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewGuide} />
            <Route exact path="/document/*" component={NewGuide} />
            <Route path="" component={NewGuide} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </ConfigProvider>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
