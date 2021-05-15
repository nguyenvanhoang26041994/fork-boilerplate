import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Loader } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper span="2em">
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="wave" color="var(--green)" size="32px" />
    </Wrapper>
  );
};

export default Demo;
