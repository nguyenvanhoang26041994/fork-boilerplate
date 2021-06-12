import React from 'react';
import { Stepper } from '@fork-ui/components/core';

const Demo = () => {
  const [{
    statuses,
  }] = Stepper.useStepper({
    statuses: [
      'completed',
      'processing',
    ],
    activeStep: 1,
    finishStep: 2,
    skipable: [1, 2],
    cancelable: [0, 2],
  });

  return (
    <Stepper>
      <Stepper.Step status={statuses[0]}>
        <Stepper.Button>1</Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step One
          </Stepper.Title>
          <Stepper.Description>
            <p>This step is completed</p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step status={statuses[1]}>
        <Stepper.Button>2</Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step Two
          </Stepper.Title>
          <Stepper.Description>
            <p>This step is processing</p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step status={statuses[2]}>
        <Stepper.Button>3</Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step Three
          </Stepper.Title>
          <Stepper.Description>
            <p>This step is waiting</p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
    </Stepper>
  );
};

export default Demo;
