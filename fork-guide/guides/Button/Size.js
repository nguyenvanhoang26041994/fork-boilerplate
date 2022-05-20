import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from 'fork-design';

export default () => {
  return (
    <Wrapper style={{ display: 'block' }}>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
    </Wrapper>
  );
};
