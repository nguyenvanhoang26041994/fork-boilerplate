import React from 'react';
import styled from 'styled-components';
import { Button } from '@fork-ui/components/core';
import { IndentDecrease, IndentIncrease, Search, Maximize, MoonStars, Bulb } from '@fork-ui/components/icons';

import GuideContext from './GuideContext';

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

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--button--bg);
  border-radius: 999px;
  overflow: hidden;

  .fbtn {
    border-radius: 999px;
    background-color: var(--button--bg);

    &:hover {
      color: var(--primary);
      background-color: var(--button--bg);
    }
  }

  .f-selected,
  .f-selected:hover,
  .f-selected:focus {
    color: #fff;
    background-color: var(--primary);
  }
`;

const TopNavigation = ({ toggleExpand, toggleFullScreen, isExpanded, isDark, toggleIsDark, ...otherProps }) => {
  return (
    <TopNavContainer {...otherProps}>
      <TopNavWrapper>
        <MainTopNav>
          <NavLeft>
            <Button
              circle
              color={isExpanded ? 'primary' : 'ghost'}
              icon={isExpanded ? <IndentDecrease /> : <IndentIncrease />}
              onClick={toggleExpand}
            />
            <Button circle ghost icon={<Search />} className="ml-2" />
          </NavLeft>
          <NavRight>
            <Button circle ghost icon={<Maximize />} onClick={toggleFullScreen} className="mr-2" />
            <SwitchButton onClick={toggleIsDark} className="mx-5">
              <Button className={{ 'f-selected': isDark }}>
                {isDark
                  ? <MoonStars />
                  : <span>Dark</span>
                }
              </Button>
              <Button className={{ 'f-selected': !isDark }}>
                {!isDark
                  ? <Bulb />
                  : <span>Light</span>
                }
              </Button>
            </SwitchButton>
          </NavRight>
        </MainTopNav>
      </TopNavWrapper>
    </TopNavContainer>
  );
};

export default TopNavigation;
