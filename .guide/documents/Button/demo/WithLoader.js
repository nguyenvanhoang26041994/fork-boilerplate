import React from 'react';
import styled from 'styled-components';
import { Button } from '@/fork-ui/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button loading>Basic</Button>
      <Button loading circle icon="power" />
    </Wrapper>
  );
};

export default Demo;
