import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { Refresh } from '@@/fork-ui/src/components/icons';

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
    </Wrapper>
  );
};

export default Demo;
