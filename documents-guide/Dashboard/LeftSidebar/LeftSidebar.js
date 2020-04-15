import React, { useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { Icon, Menu } from '@/rc-neumorphism/core';
import mapRouter from '../mapRouter';
import mapMenuItem from '../mapMenuItem';

require('./LeftSidebar.scss');

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__top">
            <div className="__logo">
              <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
            </div>
          </div>
          <Menu
            className="__menu"
            iconOnly={!isExpanded}
            selectedKeys={selectedKeys}
            onItemClick={key => history.push(`/document/${key}`)}
          >
            <Menu.ItemGroup title="POPULAR" key="group-popular">
              <Menu.Item icon="apps" {...mapMenuItem.Icon} />
              <Menu.Item icon="typography" {...mapMenuItem.Typography} />
              <Menu.Item icon="mouse" {...mapMenuItem.Button} />
              <Menu.Item icon="box" {...mapMenuItem.Form} />
              {/* <Menu.Item icon="table" {...mapMenuItem.Table} /> */}
              <Menu.Item icon="layout-sidebar" {...mapMenuItem.Drawer} />
              <Menu.Item icon="browser" {...mapMenuItem.Modal} />
              <Menu.Item icon="dots-vertical" {...mapMenuItem.Menu} />
              <Menu.Item icon="browser" {...mapMenuItem.Tabs} />
              <Menu.Item icon="caret-down" {...mapMenuItem.Collapse} />
            </Menu.ItemGroup>
            <Menu.Sub key="sub-components" title="Components" icon="device-desktop">
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Badge} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Checkbox} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Radio} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Switch} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Breadcrumb} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Avatar} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Carousel} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Timeline} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Stepper} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Chip} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Divider} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Pagination} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Progress} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Slider} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Rater} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Loader} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Skeleton} />
            </Menu.Sub>
            <Menu.Sub title="Form" key="sub-fom" icon="box">
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Textbox} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Password} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Textarea} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.InputNumber} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Select} />
            </Menu.Sub>
            <Menu.Sub title="Overlay" key="sub-overlay" icon="bell">
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Affix} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Anchor} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Confirm} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Tooltip} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Popover} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Alert} />
              <Menu.Item icon="point" titleOnly {...mapMenuItem.Notification} />
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
