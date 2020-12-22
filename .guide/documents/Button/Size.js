import React from 'react';
import styled from 'styled-components';
import { Button } from '@fork-ui/components/core';

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
    </Wrapper>
  );
};

export default Demo;
