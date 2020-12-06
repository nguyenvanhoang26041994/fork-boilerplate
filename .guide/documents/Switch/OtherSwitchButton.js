import React, { useState } from 'react';
import styled from 'styled-components';

import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';

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
    font-weight: 600;
    background-color: var(--primary);
  }
`;

const Demo = () => {
  const [value, setValue] = useState(1);

  return (
    <Wrapper>
      <SwitchButton>
        <Button
          className={{ 'f-selected': 1 === value }}
          onClick={() => setValue(1)}
        >
          EN
        </Button>
        <Button
          className={{ 'f-selected': 2 === value }}
          onClick={() => setValue(2)}
        >
          VN
        </Button>
        <Button
          className={{ 'f-selected': 3 === value }}
          onClick={() => setValue(3)}
        >
          DE
        </Button>
      </SwitchButton>
    </Wrapper>
  );
};

export default Demo;
