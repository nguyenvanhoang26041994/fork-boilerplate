import React from 'react';
import { Radio } from '@@/fork-ui/src/components/core';
import Wrapper from '@@/.guide/shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Radio name="same" value="value-1" />
      <Radio name="same" value="value-2" />
      <Radio name="same" value="value-3" disabled />
    </Wrapper>
  );
};

export default Demo;
