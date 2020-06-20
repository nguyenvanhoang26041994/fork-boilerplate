import React from 'react';
import { Popconfirm, Button } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="flex">
      <Popconfirm title="Popconfirm Title">
        <Button className="mr-2">Click Me</Button>
      </Popconfirm>
    </div>
  );
};

export default Demo;
