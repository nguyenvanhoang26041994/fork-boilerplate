import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  const [{ checked, onChange }] = Switch.useSwitch(false);

  return (
    <Wrapper>
      <Switch
        checked={checked}
        onChange={onChange}
      />
      <Switch
        checked={checked}
        onChange={onChange}
      />
    </Wrapper>
  );
};
