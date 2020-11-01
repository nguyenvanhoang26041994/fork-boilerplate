import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox, Radio } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Radio name="same" />
      <Radio name="same" checked className="mr-10" />
      <Checkbox />
      <Checkbox checked />
    </Wrapper>
  );
};

export default Demo;
