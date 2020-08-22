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
      <Loader.Spinner />
      <Loader.Spinner color="red" />
      <Loader.Spinner color="purple" />
      <Loader.Spinner color="yellow" />
      <Loader.Spinner size="2rem" />
    </Wrapper>
  );
};

export default Demo;
