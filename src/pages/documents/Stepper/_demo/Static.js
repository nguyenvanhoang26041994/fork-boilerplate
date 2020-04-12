import React from 'react';
import { Stepper } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          status="completed"
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          status="canceled"
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          status="processing"
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;

Demo.header = 'STATIC';
Demo.href = 'stepper-static';
Demo.code = `import React from 'react';
import { Stepper } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          status="completed"
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          status="canceled"
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          status="processing"
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

export default Demo;
`;
