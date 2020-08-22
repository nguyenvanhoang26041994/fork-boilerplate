import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

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
