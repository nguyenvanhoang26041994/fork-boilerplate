import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Switch } from '@fork-ui/components/core';

const Demo = () => {
  const [{ value, onChange }] = Switch.useSwitch(false);

  return (
    <Wrapper>
      <Switch
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Demo;
