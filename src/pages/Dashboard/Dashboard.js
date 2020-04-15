import React, { useState, useCallback, useMemo } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import loadable from '../../utils/loadable';
import { Breadcrumb, Icon } from '@/rc-neumorphism/core';

const CheckboxDocument = loadable(() => import('@/_component-document/Checkbox'));
const RadioDocument = loadable(() => import('@/_component-document/Radio'));
const SwitchDocument = loadable(() => import('@/_component-document/Switch'));
const IconDocument = loadable(() => import('@/_component-document/Icon'));
const ButtonDocument = loadable(() => import('@/_component-document/Button'));
const TooltipDocument = loadable(() => import('@/_component-document/Tooltip'));
const DrawerDocument = loadable(() => import('@/_component-document/Drawer'));
const ModalDocument = loadable(() => import('@/_component-document/Modal'));
const ConfirmDocument = loadable(() => import('@/_component-document/Confirm'));
const AlertDocument = loadable(() => import('@/_component-document/Alert'));
const NotificationDocument = loadable(() => import('@/_component-document/Notification'));
const TimelineDocument = loadable(() => import('@/_component-document/Timeline'));
const StepperDocument = loadable(() => import('@/_component-document/Stepper'));
const TabsDocument = loadable(() => import('@/_component-document/Tabs'));
const CollapseDocument = loadable(() => import('@/_component-document/Collapse'));
const PaginationDocument = loadable(() => import('@/_component-document/Pagination'));
const RaterDocument = loadable(() => import('@/_component-document/Rater'));
const AvatarDocument = loadable(() => import('@/_component-document/Avatar'));
const ChipDocument = loadable(() => import('@/_component-document/Chip'));
const DividerDocument = loadable(() => import('@/_component-document/Divider'));
const BreadcrumbDocument = loadable(() => import('@/_component-document/Breadcrumb'));
const CarouselDocument = loadable(() => import('@/_component-document/Carousel'));
const MenuDocument = loadable(() => import('@/_component-document/Menu'));
const ProgressDocument = loadable(() => import('@/_component-document/Progress'));
const AffixDocument = loadable(() => import('@/_component-document/Affix'));
const TextboxDocument = loadable(() => import('@/_component-document/Textbox'));
const TypographyDocument = loadable(() => import('@/_component-document/Typography'));
const PasswordDocument = loadable(() => import('@/_component-document/Password'));
const TextareaDocument = loadable(() => import('@/_component-document/Textarea'));
const InputNumberDocument = loadable(() => import('@/_component-document/InputNumber'));
const SelectDocument = loadable(() => import('@/_component-document/Select'));
const BadgeDocument = loadable(() => import('@/_component-document/Badge'));
const AnchorDocument = loadable(() => import('@/_component-document/Anchor'));
const FormDocument = loadable(() => import('@/_component-document/Form'));
const PopoverDocument = loadable(() => import('@/_component-document/Popover'));
const LoaderDocument = loadable(() => import('@/_component-document/Loader'));
const SliderDocument = loadable(() => import('@/_component-document/Slider'));
const SkeletonDocument = loadable(() => import('@/_component-document/Skeleton'));

const _home = {
  key: 'home',
  title: <Icon name="home" />,
  _href: '/',
};

const _components = {
  key: 'components',
  title: <Icon name="device-desktop" />,
  _href: '/',
};

const _overlay = {
  key: 'overlay',
  title: <Icon name="bell" />,
  _href: '/',
};

const _forms = {
  key: 'forms',
  title: <Icon name="box" />,
  _href: '/',
};

const mapRouter = Object.freeze({
  '/': [],
  '/document/form': [_home, {
    key: 'form',
    title: 'Form',
    _href: '/document/form',
  }],
  '/document/badge': [_home, {
    key: 'badge',
    title: 'Badge',
    _href: '/document/badge',
  }],
  '/document/button': [_home, {
    key: 'button',
    title: 'Button',
    _href: '/document/button',
  }],
  '/document/icon': [_home, {
    key: 'icon',
    title: 'Icon',
    _href: '/document/icon',
  }],
  '/document/typography': [_home, {
    key: 'typography',
    title: 'Typography',
    _href: '/document/typography',
  }],
  '/document/tooltip': [_home, _overlay, {
    key: 'tooltip',
    title: 'Tooltip',
    _href: '/document/tooltip',
  }],
  '/document/checkbox': [_home, _components, {
    key: 'checkbox',
    title: 'Checkbox',
    _href: '/document/checkbox',
  }],
  '/document/radio': [_home, _components, {
    key: 'radio',
    title: 'Radio',
    _href: '/document/radio',
  }],
  '/document/switch': [_home, _components, {
    key: 'switch',
    title: 'Switch',
    _href: '/document/switch',
  }],
  '/document/drawer': [_home, {
    key: 'drawer',
    title: 'Drawer',
    _href: '/document/drawer',
  }],
  '/document/modal': [_home, {
    key: 'modal',
    title: 'Modal',
    _href: '/document/modal',
  }],
  '/document/confirm': [_home, _overlay, {
    key: 'confirm',
    title: 'Confirm',
    _href: '/document/confirm',
  }],
  '/document/popover': [_home, _overlay, {
    key: 'popover',
    title: 'Popover',
    _href: '/document/popover',
  }],
  '/document/alert': [_home, _overlay, {
    key: 'alert',
    title: 'Alert',
    _href: '/document/alert',
  }],
  '/document/notification': [_home, _overlay, {
    key: 'notification',
    title: 'Notification',
    _href: '/document/notification',
  }],
  '/document/timeline': [_home, _components, {
    key: 'timeline',
    title: 'Timeline',
    _href: '/document/timeline',
  }],
  '/document/stepper': [_home, _components, {
    key: 'stepper',
    title: 'Stepper',
    _href: '/document/stepper',
  }],
  '/document/tabs': [_home, {
    key: 'tabs',
    title: 'Tabs',
    _href: '/document/tabs',
  }],
  '/document/collapse': [_home, {
    key: 'collapse',
    title: 'Collapse',
    _href: '/document/collapse',
  }],
  '/document/pagination': [_home, _components, {
    key: 'pagination',
    title: 'Pagination',
    _href: '/document/pagination',
  }],
  '/document/rater': [_home, _components, {
    key: 'rater',
    title: 'Rater',
    _href: '/document/rater',
  }],
  '/document/avatar': [_home, _components, {
    key: 'avatar',
    title: 'Avatar',
    _href: '/document/avatar',
  }],
  '/document/chip': [_home, _components, {
    key: 'chip',
    title: 'Chip',
    _href: '/document/chip',
  }],
  '/document/divider': [_home, _components, {
    key: 'divider',
    title: 'Divider',
    _href: '/document/divider',
  }],
  '/document/breadcrumb': [_home, _components, {
    key: 'breadcrumb',
    title: 'Breadcrumb',
    _href: '/document/breadcrumb',
  }],
  '/document/carousel': [_home, _components, {
    key: 'carousel',
    title: 'Carousel',
    _href: '/document/carousel',
  }],
  '/document/menu': [_home, {
    key: 'menu',
    title: 'Menu',
    _href: '/document/menu',
  }],
  '/document/progress': [_home, _components, {
    key: 'progress',
    title: 'Progress',
    _href: '/document/progress',
  }],
  '/document/affix': [_home, _overlay, {
    key: 'affix',
    title: 'Affix',
    _href: '/document/affix',
  }],
  '/document/textbox': [_home, _forms, {
    key: 'textbox',
    title: 'Textbox',
    _href: '/document/textbox',
  }],
  '/document/password': [_home, _forms, {
    key: 'password',
    title: 'Password',
    _href: '/document/password',
  }],
  '/document/textarea': [_home, _forms, {
    key: 'textarea',
    title: 'Textarea',
    _href: '/document/textarea',
  }],
  '/document/input-number': [_home, _forms, {
    key: 'input-number',
    title: 'Input Number',
    _href: '/document/input-number',
  }],
  '/document/select': [_home, _forms, {
    key: 'select',
    title: 'Select',
    _href: '/document/select',
  }],
  '/document/anchor': [_home, _overlay, {
    key: 'anchor',
    title: 'Anchor',
    _href: '/document/anchor',
  }],
  '/document/slider': [_home, {
    key: 'slider',
    title: 'Slider',
    _href: '/document/slider',
  }],
});

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  const location = useLocation();

  const breadcrumb = useMemo(() => {
    return mapRouter[location.pathname] || [];
  }, [location.pathname]);

  return (
    <div id="main-admin" className="flex pr-2">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <Breadcrumb className="mb-3">
          {breadcrumb.map(props => (
            <Breadcrumb.Item {...props} href={props._href} />
          ))}
        </Breadcrumb>
        <div className="flex">
          <div className="flex-1">
            <Switch>
              <Route path="/document/checkbox" component={CheckboxDocument} />
              <Route path="/document/switch" component={SwitchDocument} />
              <Route path="/document/radio" component={RadioDocument} />
              <Route path="/document/icon" component={IconDocument} />
              <Route path="/document/button" component={ButtonDocument} />
              <Route path="/document/tooltip" component={TooltipDocument} />
              <Route path="/document/drawer" component={DrawerDocument} />
              <Route path="/document/modal" component={ModalDocument} />
              <Route path="/document/confirm" component={ConfirmDocument} />
              <Route path="/document/alert" component={AlertDocument} />
              <Route path="/document/notification" component={NotificationDocument} />
              <Route path="/document/timeline" component={TimelineDocument} />
              <Route path="/document/stepper" component={StepperDocument} />
              <Route path="/document/tabs" component={TabsDocument} />
              <Route path="/document/collapse" component={CollapseDocument} />
              <Route path="/document/pagination" component={PaginationDocument} />
              <Route path="/document/rater" component={RaterDocument} />
              <Route path="/document/avatar" component={AvatarDocument} />
              <Route path="/document/chip" component={ChipDocument} />
              <Route path="/document/divider" component={DividerDocument} />
              <Route path="/document/breadcrumb" component={BreadcrumbDocument} />
              <Route path="/document/carousel" component={CarouselDocument} />
              <Route path="/document/menu" component={MenuDocument} />
              <Route path="/document/progress" component={ProgressDocument} />
              <Route path="/document/affix" component={AffixDocument} />
              <Route path="/document/textbox" component={TextboxDocument} />
              <Route path="/document/typography" component={TypographyDocument} />
              <Route path="/document/password" component={PasswordDocument} />
              <Route path="/document/textarea" component={TextareaDocument} />
              <Route path="/document/input-number" component={InputNumberDocument} />
              <Route path="/document/select" component={SelectDocument} />
              <Route path="/document/badge" component={BadgeDocument} />
              <Route path="/document/anchor" component={AnchorDocument} />
              <Route path="/document/form" component={FormDocument} />
              <Route path="/document/popover" component={PopoverDocument} />
              <Route path="/document/loader" component={LoaderDocument} />
              <Route path="/document/slider" component={SliderDocument} />
              <Route path="/document/skeleton" component={SkeletonDocument} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
