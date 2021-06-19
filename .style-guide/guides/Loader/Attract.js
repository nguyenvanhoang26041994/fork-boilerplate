import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="40px">
      <Loader.Attract />
      <Loader.Attract size={50} />
    </Wrapper>
  );
};
