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
        size={5}
      />
      <Progress.Linear
        percent={75}
        size={8}
      />
      <Progress.Linear
        percent={75}
        size={15}
        animated
      />
    </Wrapper>
  );
};

export default Demo;
