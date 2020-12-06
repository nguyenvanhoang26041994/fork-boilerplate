import React from 'react';
import { Button, Stepper, Popover } from '@fork-ui/components/core';

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
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover topLeft overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>TL</Button>
        </Popover>
        <Popover top overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>T</Button>
        </Popover>
        <Popover topRight overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>TR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Popover leftTop overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>LT</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover rightTop overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>RT</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover left overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>L</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover right overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>R</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover leftBottom overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>LB</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover rightBottom overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>RB</Button>
        </Popover>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover bottomLeft overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>BL</Button>
        </Popover>
        <Popover bottom overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>B</Button>
        </Popover>
        <Popover bottomRight overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>BR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;
