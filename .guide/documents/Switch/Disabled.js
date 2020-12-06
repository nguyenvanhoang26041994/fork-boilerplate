import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch disabled />
      <Switch disabled checked />
    </Wrapper>
  );
};

export default Demo;
