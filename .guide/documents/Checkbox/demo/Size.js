import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked size="2em" />
      <Checkbox defaultChecked size="40px" />
    </Wrapper>
  );
};

export default Demo;
