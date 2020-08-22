import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

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
