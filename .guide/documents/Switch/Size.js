import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size={35} />
      <Switch defaultChecked size={50} />
      <Switch defaultChecked size={80} />
      <Switch defaultChecked size={80} loading />
    </Wrapper>
  );
};

export default Demo;
