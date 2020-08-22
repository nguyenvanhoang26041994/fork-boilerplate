import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

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
