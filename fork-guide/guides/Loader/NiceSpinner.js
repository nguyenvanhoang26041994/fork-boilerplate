import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="30px">
      <Loader.NiceSpinner />
      <Loader.NiceSpinner size="100" color="var(--green-6)" />
      <Loader.NiceSpinner size="150" color="skeleton" />
    </Wrapper>
  );
};
