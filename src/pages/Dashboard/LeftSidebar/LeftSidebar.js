import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { Icon, Menu } from '@/components';

require('./LeftSidebar.scss');

const mapRouter = Object.freeze({
  '/document/form': 'form',
  '/document/popover': 'popover',
  '/document/badge': 'badge',
  '/document/button': 'button',
  '/document/icon': 'icon',
  '/document/typography': 'typography',
  '/document/tooltip': 'tooltip',
  '/document/checkbox': 'checkbox',
  '/document/radio': 'radio',
  '/document/switch': 'switch',
  '/document/drawer': 'drawer',
  '/document/modal': 'modal',
  '/document/confirm': 'confirm',
  '/document/alert': 'alert',
  '/document/notification': 'notification',
  '/document/timeline': 'timeline',
  '/document/stepper': 'stepper',
  '/document/tabs': 'tabs',
  '/document/collapse': 'collapse',
  '/document/pagination': 'pagination',
  '/document/rater': 'rater',
  '/document/avatar': 'avatar',
  '/document/chip': 'chip',
  '/document/divider': 'divider',
  '/document/breadcrumb': 'breadcrumb',
  '/document/carousel': 'carousel',
  '/document/menu': 'menu',
  '/document/progress': 'progress',
  '/document/affix': 'affix',
  '/document/textbox': 'textbox',
  '/document/password': 'password',
  '/document/textarea': 'textarea',
  '/document/input-number': 'input-number',
  '/document/anchor': 'anchor',
  '/document/loader': 'loader',
  '/document/skeleton': 'skeleton',
});

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__logo">
            <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
          </div>
          <Menu
            className="__menu"
            iconOnly={!isExpanded}
            selectedKeys={selectedKeys}
            onItemClick={key => history.push(`/document/${key}`)}
          >
            <Menu.ItemGroup title="POPULAR" key="group-popular">
              <Menu.Item icon="apps" key="icon" title="Icon" />
              <Menu.Item icon="typography" key="typography" title="Typography" />
              <Menu.Item icon="mouse" key="button" title="Button" />
              <Menu.Item icon="box" key="form" title="Form" />
              <Menu.Item icon="table" key="table" title="Table" />
              <Menu.Item icon="layout-sidebar" key="drawer" title="Drawer" />
              <Menu.Item icon="browser" key="modal" title="Modal" />
              <Menu.Item icon="dots-vertical" key="menu" title="Menu" />
              <Menu.Item icon="browser" key="tabs" title="Tabs" />
              <Menu.Item icon="caret-down" key="collapse" title="Collapse" />
            </Menu.ItemGroup>
            <Menu.Sub key="sub-components" title="Components" icon="device-desktop">
              <Menu.Item key="badge" icon="point" titleOnly title="Badge" />
              <Menu.Item key="checkbox" icon="point" titleOnly title="Checkbox" />
              <Menu.Item key="radio" icon="point" titleOnly title="Radio" />
              <Menu.Item key="switch" icon="point" titleOnly title="Switch" />
              <Menu.Item key="breadcrumb" icon="point" titleOnly title="Breadcrumb" />
              <Menu.Item key="avatar" icon="point" titleOnly title="Avatar" />
              <Menu.Item key="carousel" icon="point" titleOnly title="Carousel" />
              <Menu.Item key="timeline" icon="point" titleOnly title="Timeline" />
              <Menu.Item key="stepper" icon="point" titleOnly title="Stepper" />
              <Menu.Item key="chip" icon="point" titleOnly title="Chip" />
              <Menu.Item key="divider" icon="point" titleOnly title="Divider" />
              <Menu.Item key="pagination" icon="point" titleOnly title="Pagination" />
              <Menu.Item key="progress" icon="point" titleOnly title="Progress" />
              <Menu.Item key="slider" icon="point" titleOnly title="Slider" />
              <Menu.Item key="rater" icon="point" titleOnly title="Rater" />
              <Menu.Item key="loader" icon="point" titleOnly title="Loader" />
              <Menu.Item key="skeleton" icon="point" titleOnly title="Skeleton" />
            </Menu.Sub>
            <Menu.Sub title="Form" key="sub-fom" icon="box">
              <Menu.Item icon="point" key="textbox" titleOnly title="Textbox" />
              <Menu.Item icon="point" key="password" titleOnly title="Password" />
              <Menu.Item icon="point" key="textarea" titleOnly title="Textarea" />
              <Menu.Item icon="point" key="input-number" titleOnly title="Input Number" />
              <Menu.Item icon="point" key="select" titleOnly title="Select" />
            </Menu.Sub>
            <Menu.Sub title="Overlay" key="sub-overlay" icon="bell">
              <Menu.Item icon="point" key="affix" titleOnly title="Affix" />
              <Menu.Item icon="point" key="anchor" titleOnly title="Anchor" />
              <Menu.Item icon="point" key="confirm" titleOnly title="Confirm" />
              <Menu.Item icon="point" key="tooltip" titleOnly title="Tooltip" />
              <Menu.Item icon="point" key="popover" titleOnly title="Popover" />
              <Menu.Item icon="point" key="alert" titleOnly title="Alert" />
              <Menu.Item icon="point" key="notification" titleOnly title="Notification" />
            </Menu.Sub>
            <Menu.ItemGroup key="group-page" title="PAGES">
              <Menu.Item icon="power" key="login-page" titleOnly title="Login Page" />
              <Menu.Item icon="message" key="error-page" titleOnly title="Error Page" />
              <Menu.Item icon="globe" key="register-page" titleOnly title="Register Page" />
            </Menu.ItemGroup>
            <Menu.Item icon="table" key="calendar" titleOnly title="Calendar" />
            <Menu.Item icon="clock" key="date-licker" titleOnly title="Date Picker" />
            <Menu.Item icon="click" key="editer" titleOnly title="Editer" />
          </Menu>
        </div>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
