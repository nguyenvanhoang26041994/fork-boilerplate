import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from 'fork-design';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red-6)" size="50px" />
      <Loader.Spinner color="pink" size="5em" />
    </Wrapper>
  );
};
