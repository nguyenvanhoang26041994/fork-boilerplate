import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch color="var(--green-6)" defaultChecked />
      <Switch color="red" defaultChecked />
      <Switch color="#ff5722" loading defaultChecked />
    </Wrapper>
  );
};
