import React from 'react';
import { Affix, Button } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 2000,
      }}
    >
      <Affix top={100}>
        <Button>Top 100px</Button>
      </Affix>
    </div>
  );
};

export default Demo;
