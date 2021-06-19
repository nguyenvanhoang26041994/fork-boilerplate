import React, { useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import {
  Home,
  GridDots,
  Mouse,
  Checkbox,
  Circle,
  ToggleRight,
  Notification,
  User,
  GripHorizontal,
  LoaderQuarter,
  Loader,
  PageBreak,
  DeviceLaptop,
  ChevronDown,
  ArrowRightCircle,
  Message,
  Message2,
} from '@fork-ui/icons/lazy';

const MenuItemIcon = styled.div`
  width: 35px;
`;
const MenuItemName = styled.span``;
const MenuItem = styled.li`
  height: 40px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &.--is-active {
    background-color: var(--primary);
    color: #fff;
  }
`;
const Container = styled.section`
  margin-right: 2px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  background-color: var(--bg);

  &.--is-minimal {
    width: 70px;

    ${MenuItem},
    ${MenuItemIcon} {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ${MenuItemName} {
      display: none;
    }
  }
`;
const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 22px;
`;
const Body = styled.div``;
const Footer = styled.div``;

const Menu = styled.ul``;

const MenuItemEnhander = ({ path, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <MenuItem
      {...otherProps}
      onClick={() => history.push(path)}
      className={cn({ '--is-active': location.pathname === path })}
    />
  );
};
const LeftNavigation = ({ minimal }) => {
  return (
    <Container>
      <Wrapper className={cn({'--is-minimal': minimal })}>
        <Header>
          <Home size="20px" color="var(--primary)" />
        </Header>
        <Body>
          <Menu>
            <MenuItemEnhander path="/document/icon">
              <MenuItemIcon>
                <GridDots />
              </MenuItemIcon>
              <MenuItemName>Icon</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/button">
              <MenuItemIcon>
                <Mouse />
              </MenuItemIcon>
              <MenuItemName>Button</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/checkbox">
              <MenuItemIcon>
                <Checkbox />
              </MenuItemIcon>
              <MenuItemName>Checkbox</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/radio">
              <MenuItemIcon>
                <Circle />
              </MenuItemIcon>
              <MenuItemName>Radio</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/switch">
              <MenuItemIcon>
                <ToggleRight />
              </MenuItemIcon>
              <MenuItemName>Switch</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/badge">
              <MenuItemIcon>
                <Notification />
              </MenuItemIcon>
              <MenuItemName>Badge</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/avatar">
              <MenuItemIcon>
                <User />
              </MenuItemIcon>
              <MenuItemName>Avatar</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/skeleton">
              <MenuItemIcon>
                <GripHorizontal />
              </MenuItemIcon>
              <MenuItemName>Skeleton</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/loader">
              <MenuItemIcon>
                <LoaderQuarter />
              </MenuItemIcon>
              <MenuItemName>Loader</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/progress">
              <MenuItemIcon>
                <Loader />
              </MenuItemIcon>
              <MenuItemName>Progress</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/pagination">
              <MenuItemIcon>
                <PageBreak />
              </MenuItemIcon>
              <MenuItemName>Pagination</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/tabs">
              <MenuItemIcon>
                <DeviceLaptop />
              </MenuItemIcon>
              <MenuItemName>Tabs</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/collapse">
              <MenuItemIcon>
                <ChevronDown />
              </MenuItemIcon>
              <MenuItemName>Collapse</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/stepper">
              <MenuItemIcon>
                <ArrowRightCircle />
              </MenuItemIcon>
              <MenuItemName>Stepper</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/popover">
              <MenuItemIcon>
                <Message />
              </MenuItemIcon>
              <MenuItemName>Popover</MenuItemName>
            </MenuItemEnhander>
            <MenuItemEnhander path="/document/tooltip">
              <MenuItemIcon>
                <Message2 />
              </MenuItemIcon>
              <MenuItemName>Tooltip</MenuItemName>
            </MenuItemEnhander>
          </Menu>
        </Body>
        <Footer></Footer>
      </Wrapper>
    </Container>
  );
};

export default LeftNavigation;
