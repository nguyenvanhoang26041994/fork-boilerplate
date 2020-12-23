import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size="35px" />
      <Switch defaultChecked size="50px" />
      <Switch defaultChecked size="80px" />
      <Switch defaultChecked size="80px" loading />
    </Wrapper>
  );
};

export default Demo;
