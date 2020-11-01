import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
    </Wrapper>
  );
};

export default Demo;
