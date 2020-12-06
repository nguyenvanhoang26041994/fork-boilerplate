import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Checkbox } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </Wrapper>
  );
};

export default Demo;
