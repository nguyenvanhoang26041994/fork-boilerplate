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
      <Loader.Dots wave />
      <Loader.Dots wave color="red" />
      <Loader.Dots wave color="purple" />
      <Loader.Dots wave color="yellow" />
      <Loader.Dots wave size="2rem" />
    </Wrapper>
  );
};

export default Demo;
