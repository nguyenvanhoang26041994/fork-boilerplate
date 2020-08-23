import React from 'react';
import {
  Stepper,
  ButtonGroup,
  Button,
} from '@@/fork-ui/src/components/core';
import { Truck, ThumbUp } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  const {
    getStatus,
    activeStep,
    handleReset,
    handleNext,
    handleSkip,
    handleCancel,
    handleFinish,
  } = Stepper.useSteps({
    maxStepIdx: 3,
    optional: [1, 2],
    defaultActiveStep: 1,
    defaultStepInfo: {
      0: 'completed',
    },
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper
        className="mb-10"
        activeStep={activeStep}
        getStatus={getStatus}
      >
        <Stepper.Step
          title="Step One"
          icon={<Truck />}
          canceledTitle="You can't skip this step"
        >
          Description One
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          canceledTitle="You can skip this step"
        >
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          canceledTitle="You can skip this step"
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Finsh"
          icon={<ThumbUp />}
          canceledTitle="You can't skip this step"
        >
          Description Four
        </Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleSkip}>Skip</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleFinish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};

export default Demo;
