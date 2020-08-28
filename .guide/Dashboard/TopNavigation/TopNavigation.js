import React from 'react';
import styled from 'styled-components';
import { Badge, Avatar, Popover, Menu, Button } from '@@/fork-ui/src/components/core';
import { Bell, MessageCircle, IndentDecrease, IndentIncrease, Search, Maximize } from '@@/fork-ui/src/components/icons';
import DarkModeToggle from '@/containers/DarkModeToggle';

const TopNavContainer = styled.nav`
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100%;
  z-index: 10;
`;

const TopNavWrapper = styled.div`
  z-index: 10;
  height: 100%;
`;

const MainTopNav = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopNavigation = ({ toggleExpand, toggleFullScreen, isExpanded, ...otherProps }) => {
  return (
    <TopNavContainer {...otherProps}>
      <TopNavWrapper>
        <MainTopNav>
          <NavLeft>
            <Button
              circle
              glassed
              icon={isExpanded ? <IndentDecrease /> : <IndentIncrease />}
              onClick={toggleExpand}
            />
            <Button circle glassed icon={<Maximize />} onClick={toggleFullScreen} className="ml-2" />
            <Button circle glassed icon={<Search />} className="ml-2" />
          </NavLeft>
          <NavRight>
            <Badge count={14} className="mr-8">
              <MessageCircle fontSize="1.28rem"/>
            </Badge>
            <Badge count={5} className="mr-8">
              <Bell fontSize="1.25rem"/>
            </Badge>
            <DarkModeToggle className="mx-5" />
            <Popover
              absolute
              bottomRight
              overlay={(
                <Menu>
                  <Menu.Item title="Change password" />
                  <Menu.Item title="Logout" />
                </Menu>
              )}
            >
              <Avatar name="H" />
            </Popover>
          </NavRight>
        </MainTopNav>
      </TopNavWrapper>
    </TopNavContainer>
  );
};

export default TopNavigation;
