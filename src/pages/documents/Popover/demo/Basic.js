import React from 'react';
import { Button, Popover, Stepper } from '@/components';

const StepperDemo = () => {
  return (
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

Demo.description = `
  Actually, Popover is similiar as Tooltip.
  Just a name for understanding
`;

Demo.code = `
import React from 'react';
import { Button, Popover, Stepper } from '@/components';

const StepperDemo = () => {
  return (
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
`;

export default Demo;