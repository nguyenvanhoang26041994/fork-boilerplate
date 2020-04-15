import React from 'react';
import { Stepper } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
          icon="home"
        >
          Description One
        </Stepper.Step>
        <Stepper.Step
          title="Step Two"
          icon="message"
        >
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
          icon="copy"
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
          icon="power"
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;
