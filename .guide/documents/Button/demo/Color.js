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
      <Button color="blueviolet">Blueviolet</Button>
      <Button color="orangered">Orangered</Button>
      <Button color="green">Green</Button>
    </Wrapper>
  );
};

export default Demo;
