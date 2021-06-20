import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch disabled />
      <Switch disabled checked />
      <Switch disabled checked loading />
    </Wrapper>
  );
};
