import React from 'react';
import styled from 'styled-components';
import { Button } from '@@/fork-ui/src/components/core';
import { Power } from '@@/fork-ui/src/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button icon={<Power />} />
      <Button>
        <Power />
        <span>Shutdown</span>
      </Button>
      <Button>
        <span>Shutdown</span>
        <Power />
      </Button>
      <Button>
        <Power />
        <span>Shutdown</span>
        <Power />
      </Button>
    </Wrapper>
  );
};

export default Demo;
