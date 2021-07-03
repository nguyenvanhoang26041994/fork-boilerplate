import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from '@fork-ui/core';
import { Power } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button loading>Basic</Button>
      <Button loading rounded icon={<Power />} />
    </Wrapper>
  );
};
