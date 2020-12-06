import React from 'react';
import styled from 'styled-components';
import { Button } from '@fork-ui/components/core';
import { Power } from '@fork-ui/components/icons';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Button loading>Basic</Button>
      <Button loading circle icon={<Power />} />
    </Wrapper>
  );
};

export default Demo;
