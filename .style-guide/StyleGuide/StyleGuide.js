import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import lazy from '@utils/lazy';

const IconGuides = lazy(() => import('../guides/Icon'));
const ButtonGuides = lazy(() => import('../guides/Button'));
// __INJECTED_LINE_GUIDE__

const StyleGuide = () => {
  let { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path}>OK</Route>
        <Route path={`${path}/icon`} component={IconGuides} />
        <Route path={`${path}/button`} component={ButtonGuides} />
        {/* __INJECTED_LINE_ROUTER__ */}
      </Switch>
    </BrowserRouter>
  );
};

export default StyleGuide;
