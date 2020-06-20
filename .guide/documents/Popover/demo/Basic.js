import React from 'react';
import { Button, Popover, Stepper } from '@/fork-ui/core';

const StepperDemo = () => {
  return (
    <div className="p-2">
      <Stepper
        activeStep={3}
        style={{
          width: '400px'
        }}
      >
        <Stepper.Step title="Ordered" />
        <Stepper.Step title="Prepared" />
        <Stepper.Step title="Shiped" />
        <Stepper.Step title="Completed" />
      </Stepper>
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex">
      <Popover overlay={<StepperDemo />}>
        <Button className="mr-2">Click</Button>
      </Popover>
    </div>
  );
};

export default Demo;
