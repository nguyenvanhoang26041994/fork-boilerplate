import React from 'react';
import { Stepper, ButtonGroup, Button } from '@fork-ui/components/core';

const Demo = () => {
  const [props, stepper] = Stepper.useStepper({
    maxStepIdx: 3,
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" {...props} vertical>
        <Stepper.Step title="Step One">
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step title="Step Three">
          Description Three
        </Stepper.Step>
        <Stepper.Step title="Step Four">
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
