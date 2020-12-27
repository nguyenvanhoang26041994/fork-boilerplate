import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Loader } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red)" />
      <Loader.Spinner color="var(--green)" />
      <Loader.Spinner color="pink" size={32} />
    </Wrapper>
  );
};

export default Demo;
