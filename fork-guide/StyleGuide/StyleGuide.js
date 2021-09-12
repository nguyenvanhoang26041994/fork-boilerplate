import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import lazy from '@utils/lazy';
import { withLayout } from '@fork-guide/containers/layout';

const AllGuide = lazy(() => import(/* webpackPrefetch: true */ './AllGuide'));
const IconGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Icon'));
const AllIconGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Icon/All'));
const ButtonGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Button'));
const SkeletonGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Skeleton'));
const CheckboxGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Checkbox'));
const RadioGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Radio'));
const SwitchGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Switch'));
const ColorsGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Colors'));
const BadgeGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Badge'));
const LoaderGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Loader'));
const AvatarGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Avatar'));
const TabsGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Tabs'));
const CollapseGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Collapse'));
const StepperGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Stepper'));
const PaginationGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Pagination'));
const ProgressGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Progress'));
const FormFieldGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/FormField'));
const DialogGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Dialog'));
const TooltipGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Tooltip'));
const PopoverGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Popover'));
const TimelineGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Timeline'));
const AlertGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Alert'));
const ModalGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Modal'));
const DrawerGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Drawer'));
const AutoCompleteGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/AutoComplete'));
const SelectGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Select'));
const ConfirmGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Confirm'));
const GridGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Grid'));
const SearchboxGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Searchbox'));
const NotificationGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Notification'));
const MultiSelectGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/MultiSelect'));
const ChipGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Chip'));
const PincodeGuides = lazy(() => import(/* webpackPrefetch: true */ '@fork-guide/guides/Pincode'));
// __INJECTED_LINE_GUIDE__

const StyleGuide = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={AllGuide} />
      <Route path={`${path}/icons`} component={AllIconGuides} />
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
      <Route path={`${path}/autocomplete`} component={AutoCompleteGuides} />
      <Route path={`${path}/select`} component={SelectGuides} />
      <Route path={`${path}/confirm`} component={ConfirmGuides} />
      <Route path={`${path}/grid`} component={GridGuides} />
      <Route path={`${path}/searchbox`} component={SearchboxGuides} />
      <Route path={`${path}/notification`} component={NotificationGuides} />
      <Route path={`${path}/multiselect`} component={MultiSelectGuides} />
      <Route path={`${path}/chip`} component={ChipGuides} />
      <Route path={`${path}/pincode`} component={PincodeGuides} />
      {/* __INJECTED_LINE_ROUTER__ */}
    </Switch>
  );
};

export default withLayout(StyleGuide);
