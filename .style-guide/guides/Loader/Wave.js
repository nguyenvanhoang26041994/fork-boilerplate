import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="wave" color="var(--green)" size="32px" />
    </Wrapper>
  );
};
