import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size="1.5rem" />
      <Switch defaultChecked size="35px" />
    </Wrapper>
  );
};

export default Demo;
