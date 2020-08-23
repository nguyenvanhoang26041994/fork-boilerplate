import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox defaultChecked />
    </Wrapper>
  );
};

export default Demo;
