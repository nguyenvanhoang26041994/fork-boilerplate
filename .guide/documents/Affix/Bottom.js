import React from 'react';
import { Affix, Button } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <Affix bottom={100}>
        <Button>Bottom 100px</Button>
      </Affix>
    </div>
  );
};

export default Demo;
