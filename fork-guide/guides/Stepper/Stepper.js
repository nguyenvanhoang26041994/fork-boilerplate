import React from 'react';
import { Stepper } from 'fork-design';
import { Home, Message, Copy } from '@fork-ui/icons/lazy';

export default () => {
  const [{
    statuses,
  }] = Stepper.useStepper({
    statuses: [
      'completed',
      '',
      'processing'
    ],
    activeStep: 2,
    finishStep: 2,
  });

  return (
    <Stepper>
      <Stepper.Step status={statuses[0]}>
        <Stepper.Button><Home /></Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step One
          </Stepper.Title>
          <Stepper.Description>
            <p>First Step: Prepare infomation</p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step status={statuses[1]}>
        <Stepper.Button><Message /></Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step Two
          </Stepper.Title>
          <Stepper.Description>
            <p>
              You can skip this step to move next step!
            </p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step status={statuses[2]}>
        <Stepper.Button><Copy /></Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step Three
          </Stepper.Title>
          <Stepper.Description>
            <p>
              You can skip or cancel to move next step!
            </p>
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
    </Stepper>
  );
};
