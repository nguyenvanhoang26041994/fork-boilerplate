const ConfigProvider = require('@@/fork-ui/src/components/ConfigProvider').default({
  lang: {},
  icons: require('./used-icons').default,
});
import React, { useState, useMemo, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';
import AppContext from './AppContext';

const Dashboard = loadable(() => import('@@/.guide/Dashboard'));
const SystemDesign = loadable(() => import('./SystemDesign'));

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const appValue = useMemo(() => ({
    isDark,
    setIsDark,
  }), [isDark, setIsDark]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <ConfigProvider>
      <AppContext.Provider value={appValue}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/document/*" component={Dashboard} />
            <Route path="" component={Dashboard} />
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
