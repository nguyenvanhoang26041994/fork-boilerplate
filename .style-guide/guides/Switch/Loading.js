import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch loading />
      <Switch loading checked />
    </Wrapper>
  );
};
