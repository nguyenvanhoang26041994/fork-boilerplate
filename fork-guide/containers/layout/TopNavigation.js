import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@fork-ui/core';
import DarkMode from '@contexts/DarkMode';
import { IndentDecrease, Search, IndentIncrease, BulbOff, Moon } from '@fork-ui/icons/lazy';

const Container = styled.div`
  width: 100%;
  padding-bottom: 2px;
`;
const Wrapper = styled.div`
  height: 70px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div``;
const Right = styled.div``;

const TopNavigation = ({ onToggleLeftMinimal, isLeftMinimal }) => {
  const { isDark, toggleDark } = DarkMode.useContext();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Button
            color="transparent"
            className="mr-1"
            icon={isLeftMinimal ? <IndentIncrease /> : <IndentDecrease />}
            onClick={onToggleLeftMinimal}
          />
          <Button color="transparent" icon={<Search />} />
        </Left>
        <Right>
          <Button
            color="transparent"
            icon={isDark ? <BulbOff /> : <Moon />}
            onClick={toggleDark}
          />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TopNavigation;
