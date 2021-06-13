import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Checkbox } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </Wrapper>
  );
};
