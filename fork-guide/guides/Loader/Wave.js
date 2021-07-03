import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="wave" color="var(--green-6)" size="32px" />
    </Wrapper>
  );
};
