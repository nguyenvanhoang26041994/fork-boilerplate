import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox defaultChecked />
    </Wrapper>
  );
};

export default Demo;
