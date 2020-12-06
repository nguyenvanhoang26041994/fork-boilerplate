import React from 'react';
import { Button, Tooltip } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Tooltip title="tooltip title" defaultVisible>
        <Button className="mr-2">Defaul Visible</Button>
      </Tooltip>
    </div>
  );
};

export default Demo;
