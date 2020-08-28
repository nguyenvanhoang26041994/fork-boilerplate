

import React from 'react';
import { Button, Popover } from '@@/fork-ui/src/components/core';

import DemoContent from '@@/.guide/shared/DemoContent2';

const Demo = () => (
  <Popover overlay={(
    <div className="p-5">
      <DemoContent />
    </div>
  )}>
    <Button>Click Me</Button>
  </Popover>
);

export default Demo;
