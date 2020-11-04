import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Loader } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red)" />
      <Loader.Spinner color="var(--green)" />
      <Loader.Spinner color="pink" size="2em" />
    </Wrapper>
  );
};

export default Demo;
