import React from 'react';
import { Button, Tooltip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Tooltip title="tooltip title" showOnCreate>
        <Button className="mr-2">Show On Create</Button>
      </Tooltip>
    </div>
  );
};

export default Demo;
