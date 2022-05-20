import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from 'fork-design';

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
