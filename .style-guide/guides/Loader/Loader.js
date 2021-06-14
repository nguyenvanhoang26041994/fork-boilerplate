import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
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
