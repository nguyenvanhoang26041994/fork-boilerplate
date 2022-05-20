import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size={30} />
      <Checkbox defaultChecked size={40} />
    </Wrapper>
  );
};
