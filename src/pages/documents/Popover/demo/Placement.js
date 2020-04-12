import React from 'react';
import { Button, Stepper, Popover } from '@/components';

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
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="top-left" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>TL</Button>
        </Popover>
        <Popover placement="top" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>T</Button>
        </Popover>
        <Popover placement="top-right" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>TR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Popover placement="left-top" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>LT</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right-top" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>RT</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover placement="left" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>L</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>R</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover placement="left-bottom" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>LB</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="right-bottom" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>RB</Button>
        </Popover>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover placement="bottom-left" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>BL</Button>
        </Popover>
        <Popover placement="bottom" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>B</Button>
        </Popover>
        <Popover placement="bottom-right" overlay={<StepperDemo />}>
          <Button className="m-2" style={{ width: '3em' }}>BR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;
