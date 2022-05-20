import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <Switch loading checked />
    </Wrapper>
  );
};
