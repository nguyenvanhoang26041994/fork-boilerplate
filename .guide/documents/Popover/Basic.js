import React from 'react';
import { Button, Popover } from '@fork-ui/components/core';

import IconStepper from '../Stepper/Icon';

const OverlayContent = () => (
  <div className="p-5">
    <IconStepper />
  </div>
);


const Demo = () => {
  return (
    <div className="flex">
      <Popover overlay={<OverlayContent />}>
        <Button className="mr-2">Click</Button>
      </Popover>
    </div>
  );
};

export default Demo;
