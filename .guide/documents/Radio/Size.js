import React from 'react';
import { Radio } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Radio name="size" value="value-1" defaultChecked />
      <Radio name="size" value="value-2" size={20} />
      <Radio name="size" value="value-3" size={30} />
    </Wrapper>
  );
};

export default Demo;
