import React from 'react';
import { Stepper } from '@/fork-ui/core';
import { Home, Message, Copy, Power } from '@@/fork-ui/src/components/Icon';

Message
const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
          icon={<Home />}
        >
          Description One
        </Stepper.Step>
        <Stepper.Step
          title="Step Two"
          icon={<Message />}
        >
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
          icon={<Copy />}
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
          icon={<Power />}
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;
