import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Dots />
      <Loader.Dots animation="wave" />
      <Loader.Spinner />
      <Loader.NiceSpinner />
      <Loader.Attract />
      <Loader.Liquid />
    </Wrapper>
  );
};

export default Demo;
