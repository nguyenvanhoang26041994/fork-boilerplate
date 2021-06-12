import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Dots />
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="move" />
      <Loader.Spinner />
      <Loader.NiceSpinner />
      <Loader.Attract />
    </Wrapper>
  );
};

export default Demo;
