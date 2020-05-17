import React from 'react';
import styled from 'styled-components';
import { Button } from '@/rc-neumorphism/core';

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
      <Button outlined color="orangered">Orangered</Button>
      <Button outlined color="green">Green</Button>
      <Button outlined primary>PRIMARY</Button>
      <Button outlined danger>DANGER</Button>
    </Wrapper>
  );
};

export default Demo;
