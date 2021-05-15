import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Loader } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Dots />
      <Loader.Dots color="var(--red)" size="20px" />
      <Loader.Dots color="purple" size="2.5em" />
    </Wrapper>
  );
};

export default Demo;
