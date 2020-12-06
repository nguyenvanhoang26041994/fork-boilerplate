import React from 'react';
import { Radio } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Radio name="basic" value="value-1" defaultChecked />
      <Radio name="basic" value="value-2" />
      <Radio name="basic2" value="value-3" disabled defaultChecked />
      <Radio name="basic2" value="value-4" disabled />
    </Wrapper>
  );
};

export default Demo;
