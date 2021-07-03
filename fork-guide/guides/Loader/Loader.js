import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Dots />
      <Loader.Dots animation="wave" />
      <Loader.Spinner />
      <Loader.NiceSpinner />
    </Wrapper>
  );
};
