import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import lazy from '@utils/lazy';
import { withLayout } from '@style-guide/containers/layout';

const AllGuide = lazy(() => import(/* webpackPrefetch: true */ './AllGuide'));
const IconGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Icon'));
const ButtonGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Button'));
const SkeletonGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Skeleton'));
const CheckboxGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Checkbox'));
const RadioGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Radio'));
const SwitchGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Switch'));
const ColorsGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Colors'));
const BadgeGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Badge'));
const LoaderGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Loader'));
const AvatarGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Avatar'));
const TabsGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Tabs'));
const CollapseGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Collapse'));
const StepperGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Stepper'));
const PaginationGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Pagination'));
const ProgressGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Progress'));
const FormFieldGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/FormField'));
const DialogGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Dialog'));
const TooltipGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Tooltip'));
const PopoverGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Popover'));
const TimelineGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Timeline'));
const AlertGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Alert'));
const ModalGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Modal'));
const DrawerGuides = lazy(() => import(/* webpackPrefetch: true */ '@style-guide/guides/Drawer'));
// __INJECTED_LINE_GUIDE__

const Document = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AllGuide} />
      <Route path={`${path}/icon`} component={IconGuides} />
      <Route path={`${path}/button`} component={ButtonGuides} />
      <Route path={`${path}/skeleton`} component={SkeletonGuides} />
      <Route path={`${path}/checkbox`} component={CheckboxGuides} />
      <Route path={`${path}/radio`} component={RadioGuides} />
      <Route path={`${path}/switch`} component={SwitchGuides} />
      <Route path={`${path}/colors`} component={ColorsGuides} />
      <Route path={`${path}/badge`} component={BadgeGuides} />
      <Route path={`${path}/loader`} component={LoaderGuides} />
      <Route path={`${path}/avatar`} component={AvatarGuides} />
      <Route path={`${path}/tabs`} component={TabsGuides} />
      <Route path={`${path}/collapse`} component={CollapseGuides} />
      <Route path={`${path}/stepper`} component={StepperGuides} />
      <Route path={`${path}/pagination`} component={PaginationGuides} />
      <Route path={`${path}/progress`} component={ProgressGuides} />
      <Route path={`${path}/formfield`} component={FormFieldGuides} />
      <Route path={`${path}/dialog`} component={DialogGuides} />
      <Route path={`${path}/tooltip`} component={TooltipGuides} />
      <Route path={`${path}/popover`} component={PopoverGuides} />
      <Route path={`${path}/timeline`} component={TimelineGuides} />
      <Route path={`${path}/alert`} component={AlertGuides} />
      <Route path={`${path}/modal`} component={ModalGuides} />
      <Route path={`${path}/drawer`} component={DrawerGuides} />
      {/* __INJECTED_LINE_ROUTER__ */}
    </Switch>
  );
};

export default withLayout(Document);
