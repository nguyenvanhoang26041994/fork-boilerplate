import React from 'react';
import { Popconfirm, Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex">
      <Popconfirm>
        <Button className="mr-2">Click Me</Button>
      </Popconfirm>
    </div>
  );
};

export default Demo;
