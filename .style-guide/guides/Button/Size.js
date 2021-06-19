import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
    </Wrapper>
  );
};
