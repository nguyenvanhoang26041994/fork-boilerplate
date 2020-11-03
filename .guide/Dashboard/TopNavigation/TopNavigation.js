import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { IndentDecrease, IndentIncrease, Search, Maximize } from '@@/fork-ui/src/components/icons';
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
              ghost
              icon={isExpanded ? <IndentDecrease /> : <IndentIncrease />}
              onClick={toggleExpand}
            />
            <Button circle ghost icon={<Search />} className="ml-2" />
          </NavLeft>
          <NavRight>
            <Button circle ghost icon={<Maximize />} onClick={toggleFullScreen} className="mr-2" />
            <DarkModeToggle className="mx-5" />
          </NavRight>
        </MainTopNav>
      </TopNavWrapper>
    </TopNavContainer>
  );
};

export default TopNavigation;
