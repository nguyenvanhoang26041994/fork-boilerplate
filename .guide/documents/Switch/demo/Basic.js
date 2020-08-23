import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch />
      <Switch loading />
      <Switch loading defaultChecked />
    </Wrapper>
  );
};

export default Demo;
