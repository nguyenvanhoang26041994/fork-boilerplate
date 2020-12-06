import React from 'react';
import styled from 'styled-components';
import { Button } from '@fork-ui/components/core';
import { Refresh, Dots } from '@fork-ui/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button outlined color="blueviolet">Blueviolet</Button>
      <Button outlined color="green">Green</Button>
      <Button rounded outlined primary>PRIMARY</Button>
      <Button outlined danger icon={<Refresh />} />
      <Button primary circle outlined icon={<Dots />} />
    </Wrapper>
  );
};

export default Demo;
