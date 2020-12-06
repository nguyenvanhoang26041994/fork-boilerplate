import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch loading />
      <Switch loading checked />
    </Wrapper>
  );
};

export default Demo;
