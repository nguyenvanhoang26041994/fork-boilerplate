import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <Switch loading checked />
    </Wrapper>
  );
};
