import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

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
