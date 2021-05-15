import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Loader } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red)" size="50px" />
      <Loader.Spinner color="pink" size="5em" />
    </Wrapper>
  );
};

export default Demo;
