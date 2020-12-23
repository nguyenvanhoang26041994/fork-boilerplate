import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </Wrapper>
  );
};

export default Demo;
