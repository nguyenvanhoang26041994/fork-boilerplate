import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Checkbox } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox color="pink" defaultChecked />
      <Checkbox color="red" defaultChecked />
      <Checkbox color="var(--green)" defaultChecked />
      <Checkbox color="#ff5722" defaultChecked />
    </Wrapper>
  );
};

export default Demo;
