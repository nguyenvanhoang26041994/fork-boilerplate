import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size="1.2em" />
      <Checkbox defaultChecked size="1.5em" />
    </Wrapper>
  );
};

export default Demo;
