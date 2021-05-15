import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem">
      <Loader.BeesandBombs />
      <Loader.BeesandBombs size="50" />
    </Wrapper>
  );
};

export default Demo;
