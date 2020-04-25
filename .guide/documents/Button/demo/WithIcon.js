import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from '@/rc-neumorphism/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button icon="power" />
      <Button>
        <Icon name="power" />
        <span>Shutdown</span>
      </Button>
      <Button>
        <span>Shutdown</span>
        <Icon name="power" />
      </Button>
      <Button>
        <Icon name="power" />
        <span>Shutdown</span>
        <Icon name="power" />
      </Button>
    </Wrapper>
  );
};

export default Demo;
