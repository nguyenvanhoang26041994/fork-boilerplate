import React from 'react';
import styled from 'styled-components';
import { Button } from '@/rc-neumorphism/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button rounded>Rounded</Button>
    <Button circle>C</Button>
  </Wrapper>
);

export default Demo;
