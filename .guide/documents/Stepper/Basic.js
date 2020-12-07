import React from 'react';
import {
  Stepper,
  ButtonGroup,
  Button,
  Flex,
} from '@fork-ui/components/core';

const Demo = () => {
  const [{
    statuses,
    goReset,
    goBack,
    goNext,
    goSkip,
    goCancel,
    goFinish,
  }] = Stepper.useStepper({
    statuses: [
      'completed',
      'processing',
    ],
    activeStep: 1,
    finishStep: 5,
    skipable: [1, 2],
    cancelable: [0, 2],
  });

  return (
    <Flex col span="full">
      <Stepper className="mb-10">
        <Stepper.Step status={statuses[0]}>
          <Stepper.Button>1</Stepper.Button>
          <Stepper.Content>
            <Stepper.Title>
              Step One
            </Stepper.Title>
            <Stepper.Description>
              Description Step One
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
              Description Step Two
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
              Description Step Three
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step status={statuses[3]}>
          <Stepper.Button>4</Stepper.Button>
          <Stepper.Content>
            <Stepper.Title>
              Step Four
            </Stepper.Title>
            <Stepper.Description>
              Description Step Four
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step status={statuses[4]}>
          <Stepper.Button>5</Stepper.Button>
          <Stepper.Content>
            <Stepper.Title>
              Step Five
            </Stepper.Title>
            <Stepper.Description>
              Description Step Five
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
        <Stepper.Step status={statuses[5]}>
          <Stepper.Button>6</Stepper.Button>
          <Stepper.Content>
            <Stepper.Title>
              Step Last
            </Stepper.Title>
            <Stepper.Description>
              Description Step Last
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
      <Flex justify="center">
        <ButtonGroup>
          <Button onClick={goReset}>Reset</Button>
          <Button onClick={goBack}>Back</Button>
          <Button onClick={goNext}>Next</Button>
          <Button onClick={goSkip}>Skip</Button>
          <Button onClick={goCancel}>Cancel</Button>
          <Button onClick={goFinish}>Finish</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default Demo;
