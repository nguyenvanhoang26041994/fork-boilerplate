import React from 'react';
import { Loader } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper span="3rem">
      <Loader.NiceSpinner />
      <Loader.NiceSpinner size="100" color="var(--green)" />
      <Loader.NiceSpinner size="150" color="skeleton" />
    </Wrapper>
  );
};

export default Demo;
