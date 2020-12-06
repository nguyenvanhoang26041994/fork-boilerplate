import React from 'react';
import { Button, Tooltip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Tooltip title="tooltip title">
        <Button className="mr-2">Hover</Button>
      </Tooltip>
      <Tooltip title="tooltip title" trigger="click">
        <Button className="mr-2">Click</Button>
      </Tooltip>
    </div>
  );
};

export default Demo;
