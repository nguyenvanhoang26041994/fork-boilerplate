import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Checkbox } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size={30} />
      <Checkbox defaultChecked size={40} />
    </Wrapper>
  );
};
