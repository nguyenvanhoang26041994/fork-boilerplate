import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Switch disabled />
      <Switch disabled checked />
    </Wrapper>
  );
};

export default Demo;
