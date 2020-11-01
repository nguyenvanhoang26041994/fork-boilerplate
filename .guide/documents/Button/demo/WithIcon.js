import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import { Power } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Button icon={<Power />} />
      <Button circle icon={<Power />} />
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

export default Demo;
