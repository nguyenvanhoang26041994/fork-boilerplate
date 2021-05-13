import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';
import { Power } from '@fork-ui/components/icons';

const Demo = () => {
  return (
    <Wrapper>
      <Button icon={<Power />} />
      <Button shape="circle" icon={<Power />} />
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
