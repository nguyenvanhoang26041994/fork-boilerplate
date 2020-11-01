import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '@@/fork-ui/src/components/core';
import { MoonStars, Sun } from '@@/fork-ui/src/components/icons';

import AppContext from '@/AppContext';

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

const DarkModeToggle = (props) => {
  const { isDark, setIsDark } = useContext(AppContext);
  const toggle = useCallback(() => setIsDark(val => !val, [setIsDark]));

  return (
    <SwitchButton onClick={toggle}>
      <Button className={{ 'f-selected': isDark }}>
        {isDark
          ? <MoonStars />
          : <span>Dark</span>
        }
      </Button>
      <Button className={{ 'f-selected': !isDark }}>
        {!isDark
          ? <Sun />
          : <span>Light</span>
        }
      </Button>
    </SwitchButton>
  );
};

export default DarkModeToggle;
