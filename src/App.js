const ConfigProvider = require('@@/fork-ui/src/components/ConfigProvider').default({
  lang: {},
  icons: require('./used-icons').default,
});
import React, { useState, useMemo, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';
import AppContext from './AppContext';
import AppSkeleton from './AppSkeleton';

const fallback = <AppSkeleton />;

const Dashboard = loadable(() => import('@@/.guide/Dashboard'), { fallback });
const SystemDesign = loadable(() => import('./SystemDesign'), { fallback });

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const appValue = useMemo(() => ({
    isDark,
    setIsDark,
  }), [isDark, setIsDark]);

  useEffect(() => {
    // document.getElementById('app-loader').remove();
  }, []);

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
