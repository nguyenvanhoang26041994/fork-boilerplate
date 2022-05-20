import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Switch } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Switch disabled />
      <Switch disabled checked />
      <Switch disabled checked loading />
    </Wrapper>
  );
};
