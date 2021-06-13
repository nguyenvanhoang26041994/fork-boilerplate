import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import lazy from '@utils/lazy';

const IconGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Icon'));
const ButtonGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Button'));
const SkeletonGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Skeleton'));
const CheckboxGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Checkbox'));
const RadioGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Radio'));
const SwitchGuides = lazy(() => import(/* webpackPrefetch: true */ '../guides/Switch'));
// __INJECTED_LINE_GUIDE__''

const StyleGuide = () => {
  let { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path}>OK</Route>
        <Route path={`${path}/icon`} component={IconGuides} />
        <Route path={`${path}/button`} component={ButtonGuides} />
        <Route path={`${path}/skeleton`} component={SkeletonGuides} />
        <Route path={`${path}/checkbox`} component={CheckboxGuides} />
        <Route path={`${path}/radio`} component={RadioGuides} />
        <Route path={`${path}/switch`} component={SwitchGuides} />
        {/* __INJECTED_LINE_ROUTER__ */}
      </Switch>
    </BrowserRouter>
  );
};

export default StyleGuide;
