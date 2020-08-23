import React from 'react';
import { Stepper, ButtonGroup, Button } from '@@/fork-ui/src/components/core';
import { Home, Message, Copy, Power } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  const [props, stepper] = Stepper.useStepper({
    maxStepIdx: 3,
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" {...props}>
        <Stepper.Step title="Step One" icon={<Home />}>
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two" icon={<Message />}>
          Description Two
        </Stepper.Step>
        <Stepper.Step title="Step Three" icon={<Copy />}>
          Description Three
        </Stepper.Step>
        <Stepper.Step title="Step Four" icon={<Power />}>
          Description Four
        </Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={stepper.handleReset}>Reset</Button>
        <Button onClick={stepper.handleNext}>Next</Button>
        <Button onClick={stepper.handleCancel}>Cancel</Button>
        <Button onClick={stepper.handleFinish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};

export default Demo;

