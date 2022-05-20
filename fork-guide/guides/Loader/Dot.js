import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from 'fork-design';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots />
      <Loader.Dots color="var(--red-6)" size="20px" />
      <Loader.Dots color="purple" size="2.5em" />
    </Wrapper>
  );
};
