import React, { useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Icon, Menu } from '@/rc-neumorphism/core';
import { mapRouter, mapMenuItem } from '../../map-config';

const LeftSidebarContainer = styled.div`
  width: 5.5rem;
  height: 100vh;

  &.--expanded {
    width: 20.5rem;
  }
`;

const LeftSidebarWrapper = styled.div`
  position: fixed;
  z-index: 10;
  width: 5rem;
  height: inherit;
  transition: width 0.25s;

  &.--expanded {
    width: 20rem;
  }
`;

const MainLeftSidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0d0c1c;
  overflow-x: hidden;
  overflow-y: auto;

  &:not(.common-scrollbar)::-webkit-scrollbar {
    display: none;
  }
`;

const TopWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #0d0c1c;
`;

const LogoWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d0c1c;
  color: #fff;
`;

const MenuStyled = styled(Menu)`
  border-radius: 0;
  background-color: #0d0c1c;
  color: #7575a3;

  .rc-menu-sub-title {
    background-color: #0d0c1c;
  }

  .rc-menu-sub-list,
  .rc-menu-sub-title:hover {
    background-color: #232236;
    color: #fff;
  }

  .rc-menu-sub-title:hover {
    color: #0099ff;
  }

  .rc-menu-item:hover {
    color: #fff;
    background-color: #0099ff;
  }
`;

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  const theMenu = useMemo(() => {
    return (
      <MenuStyled
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
              <Menu.Sub title={mapMenuItem[key].title} key={mapMenuItem[key].key} icon={mapMenuItem[key].icon} defaultExpanded>
                {Object.keys(mapMenuItem[key].items).map(_key => {
                  return (
                    <Menu.Item {...mapMenuItem[key].items[_key]} />
                  );
                })}
              </Menu.Sub>
            );
          }
        })}
      </MenuStyled>
    );
  }, [mapMenuItem, isExpanded, selectedKeys]);

  return (
    <LeftSidebarContainer className={cn({ '--expanded': isExpanded })}>
      <LeftSidebarWrapper className={cn({ '--expanded': isExpanded } )}>
        <MainLeftSidebar className={cn({ 'common-scrollbar': isExpanded })} {...otherProps}>
          <TopWrapper>
            <LogoWrapper>
              <Icon name="home" size="1.75rem" onClick={() => history.push('/')} />
            </LogoWrapper>
          </TopWrapper>
          {theMenu}
        </MainLeftSidebar>
      </LeftSidebarWrapper>
    </LeftSidebarContainer>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
