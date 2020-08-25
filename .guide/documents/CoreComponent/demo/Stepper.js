import React from 'react';
import { Stepper } from '@@/fork-ui/src/components/core';
import { Truck, ThumbUp } from '@@/fork-ui/src/components/icons';

const Demo = () => {
  const [props] = Stepper.useStepper({
    maxStepIdx: 3,
    optional: [1, 2],
    defaultActiveStep: 3,
    defaultStepInfo: {
      0: 'completed',
      1: 'canceled',
    },
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" {...props}>
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
    </div>
  );
};

export default Demo;
