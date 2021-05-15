import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Liquid size="250" />
    </Wrapper>
  );
};

export default Demo;
