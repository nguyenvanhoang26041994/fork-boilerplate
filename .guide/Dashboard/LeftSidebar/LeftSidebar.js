import React, { useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import { Icon, Menu } from '@/rc-neumorphism/core';
import { mapRouter, mapMenuItem } from '../../map-config';

require('./LeftSidebar.scss');

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  const theMenu = useMemo(() => {
    return (
      <Menu
        className="__menu"
        iconOnly={!isExpanded}
        selectedKeys={selectedKeys}
        onItemClick={key => history.push(`/document/${key}`)}
      >
        {Object.keys(mapMenuItem).map(key => {
          if (mapMenuItem[key].type === 'group') {
            return (
              <Menu.ItemGroup title={mapMenuItem[key].title} key={mapMenuItem[key].key}>
                {Object.keys(mapMenuItem[key].items).map(_key => {
                  return (
                    <Menu.Item {...mapMenuItem[key].items[_key]} />
                  );
                })}
              </Menu.ItemGroup>
            );
          }
          if (mapMenuItem[key].type === 'sub') {
            return (
              <Menu.Sub title={mapMenuItem[key].title} key={mapMenuItem[key].key} icon={mapMenuItem[key].icon}>
                {Object.keys(mapMenuItem[key].items).map(_key => {
                  return (
                    <Menu.Item {...mapMenuItem[key].items[_key]} />
                  );
                })}
              </Menu.Sub>
            );
          }
        })}
      </Menu>
    );
  }, [mapMenuItem, isExpanded, selectedKeys]);

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__top">
            <div className="__logo">
              <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
            </div>
          </div>
          {theMenu}
        </div>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
