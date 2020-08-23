import React from 'react';
import { Button, Stepper, Popover } from '@@/fork-ui/src/components/core';

const StepperDemo = () => {
  const [props] = Stepper.useStepper({ defaultActiveStep: 3 });

  return (
    <div className="p-2">
      <Stepper {...props} style={{ width: '400px' }}>
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
        <Popover absolute topLeft overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>TL</Button>
        </Popover>
        <Popover absolute top overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>T</Button>
        </Popover>
        <Popover absolute topRight overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>TR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Popover absolute leftTop overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>LT</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover absolute rightTop overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>RT</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover absolute left overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>L</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover absolute right overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>R</Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover absolute leftBottom overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>LB</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover absolute rightBottom overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>RB</Button>
        </Popover>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Popover absolute bottomLeft overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>BL</Button>
        </Popover>
        <Popover absolute bottom overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>B</Button>
        </Popover>
        <Popover absolute bottomRight overlay={<StepperDemo />} className="m-2">
          <Button style={{ width: '3em' }}>BR</Button>
        </Popover>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;
