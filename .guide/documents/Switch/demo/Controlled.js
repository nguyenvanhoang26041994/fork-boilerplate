import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Switch } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [props] = Switch.useSwitch(false);
  // const [{ value, onChange }] = Switch.useSwitch(false);

  return (
    <Wrapper>
      <Switch {...props} />
    </Wrapper>
  );
};

export default Demo;
