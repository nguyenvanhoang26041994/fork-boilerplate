import React from 'react';
import styled from 'styled-components';

import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch, Button } from '@@/fork-ui/src/components/core';
import { MoonStars, Sun } from '@@/fork-ui/src/components/icons';

const SwitchButton = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--button--bg);
  border-radius: 999px;
  overflow: hidden;

  .fbtn {
    border-radius: 0;
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
    border-radius: 999px;
  }
`;

const Demo = () => {
  const [_, { checked, setChecked }] = Switch.useSwitch(false);

  return (
    <Wrapper>
      <SwitchButton>
        <Button className={{ 'f-selected': !checked }} onClick={() => setChecked(false)}>
          <MoonStars />
          <span>Dark</span>
        </Button>
        <Button className={{ 'f-selected': checked }} onClick={() => setChecked(true)}>
          <Sun />
          <span>Light</span>
        </Button>
      </SwitchButton>
      <SwitchButton>
        <Button className={{ 'f-selected': !checked }} onClick={() => setChecked(false)}>
          <MoonStars />
          {checked && <span>Dark</span>}
        </Button>
        <Button className={{ 'f-selected': checked }} onClick={() => setChecked(true)}>
          <Sun />
          {!checked && <span>Light</span>}
        </Button>
      </SwitchButton>
      <SwitchButton>
        <Button className={{ 'f-selected': !checked }} onClick={() => setChecked(false)}>
          {!checked
            ? <MoonStars />
            : <span>Dark</span>
          }
        </Button>
        <Button className={{ 'f-selected': checked }} onClick={() => setChecked(true)}>
          {checked
            ? <Sun />
            : <span>Light</span>
          }
        </Button>
      </SwitchButton>
    </Wrapper>
  );
};

export default Demo;
