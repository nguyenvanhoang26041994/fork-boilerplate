import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Button } from '@fork-ui/core';
import { Power } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button icon={<Power />} />
      <Button rounded icon={<Power />} />
      <Button>
        <Power />
        <span>Shutdown</span>
      </Button>
      <Button>
        <span>Shutdown</span>
        <Power />
      </Button>
      <Button>
        <Power />
        <span>Shutdown</span>
        <Power />
      </Button>
    </Wrapper>
  );
};
