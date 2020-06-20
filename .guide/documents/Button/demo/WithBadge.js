import React from 'react';
import styled from 'styled-components';
import { Button, Badge } from '@/fork-ui/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 2rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Badge count={2}>
        <Button icon="bell" />
      </Badge>
      <Badge overlap count={9}>
        <Button circle icon="inbox" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;
