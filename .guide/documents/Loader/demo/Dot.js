import React from 'react';
import styled from 'styled-components';
import { Loader } from '@@/fork-ui/src/components/core';

const Wrapper = styled.div`
  display: flex;

  > * {
    margin-right: 2rem;
  }
`;

const Demo = () => {
  return (
    <Wrapper>
      <Loader.Dots />
      <Loader.Dots color="red" />
      <Loader.Dots color="purple" />
      <Loader.Dots color="yellow" />
      <Loader.Dots size="2rem" />
    </Wrapper>
  );
};

export default Demo;
