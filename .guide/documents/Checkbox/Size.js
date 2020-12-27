import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Checkbox } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size={30} />
      <Checkbox defaultChecked size={40} />
    </Wrapper>
  );
};

export default Demo;
