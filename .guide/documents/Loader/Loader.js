import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem">
      <Loader.Dots />
      <Loader.Dots wave />
      <Loader.Spinner/>
    </Wrapper>
  );
};

export default Demo;
