import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Loader } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Dots />
      <Loader.Dots color="var(--red)" />
      <Loader.Dots color="var(--green)" />
      <Loader.Dots color="pink" size="2em" />
    </Wrapper>
  );
};

export default Demo;
