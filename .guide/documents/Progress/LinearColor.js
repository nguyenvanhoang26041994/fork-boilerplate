import React from 'react';
import styled from 'styled-components';
import { Progress } from '@fork-ui/components/core';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > * {
    margin-bottom: 20px;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Progress.Linear
        percent={75}
        color="var(--green)"
      />
      <Progress.Linear
        percent={75}
        color="var(--red)"
        animated
      />
      <Progress.Linear
        percent={75}
        color="purple"
      />
      <Progress.Linear
        percent={75}
        color="purple"
        railColor="transparent"
      />
      <Progress.Linear
        percent={75}
        color="var(--green)"
        railColor="var(--red)"
      />
    </Wrapper>
  );
};

export default Demo;
