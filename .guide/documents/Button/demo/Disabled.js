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
      <Button disabled>BASIC</Button>
      <Button disabled primary>PRIMARY</Button>
      <Button disabled danger>DANGER</Button>
      <Button disabled glassed>GLASSED</Button>
      <Button disabled icon="home" />
      <Button disabled transparent>BASIC</Button>
    </Wrapper>
  );
};

export default Demo;
