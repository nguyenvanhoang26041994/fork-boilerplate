import React from 'react';
import {
  Stepper,
  ButtonGroup,
  Button,
  Flex,
} from '@fork-ui/components/core';

const ControlSection = ({
  goReset,
  goBack,
  goNext,
  goSkip,
  goCancel,
  goFinish,
  isFinished,
  isSkipable,
  isCancelable,
  activeStep,
  finishStep
}) => {
  if (isFinished) {
    return (
      <ButtonGroup className="mt-5">
        <Button onClick={goBack}>Back</Button>
        <Button onClick={goReset}>Reset</Button>
      </ButtonGroup>
    )
  }
  return (
    <ButtonGroup className="mt-5">
      {isSkipable && <Button onClick={goSkip}>Skip</Button>}
      {isCancelable && <Button onClick={goCancel}>Cancel</Button>}
      {activeStep > 0 && <Button onClick={goBack}>Back</Button>}
      {finishStep > activeStep && <Button onClick={goNext}>Next</Button>}
      {finishStep === activeStep && <Button onClick={goFinish}>Finish</Button>}
    </ButtonGroup>
  )
};
const Demo = () => {
  const [{
    statuses,
    goReset,
    goBack,
    goNext,
    goSkip,
    goCancel,
    goFinish,
    isFinished,
    isSkipable,
    isCancelable,
    activeStep,
    finishStep
  }] = Stepper.useStepper({
    statuses: [
      'completed',
      'processing',
    ],
    activeStep: 1,
    finishStep: 3,
    skipable: [1, 2],
    cancelable: [0, 2],
  });

  return (
    <Stepper alternate>
      <Stepper.Step status={statuses[0]}>
        <Stepper.Button>1</Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step One
          </Stepper.Title>
          <Stepper.Description>
            <p>First Step: Prepare infomation</p>
            {activeStep === 0 && (
              <p>
                You can cancel this step to move next step!
              </p>
            )}
            {activeStep === 0 && (
              <ControlSection
                goReset={goReset}
                goBack={goBack}
                goNext={goNext}
                goSkip={goSkip}
                goCancel={goCancel}
                goFinish={goFinish}
                isFinished={isFinished}
                isSkipable={isSkipable}
                isCancelable={isCancelable}
                activeStep={activeStep}
                finishStep={finishStep}
              />
            )}
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
            <p>
              You can skip this step to move next step!
            </p>
            {activeStep === 1 && (
              <ControlSection
                goReset={goReset}
                goBack={goBack}
                goNext={goNext}
                goSkip={goSkip}
                goCancel={goCancel}
                goFinish={goFinish}
                isFinished={isFinished}
                isSkipable={isSkipable}
                isCancelable={isCancelable}
                activeStep={activeStep}
                finishStep={finishStep}
              />
            )}
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
            <p>
              You can skip or cancel to move next step!
            </p>
            {activeStep === 2 && (
              <ControlSection
                goReset={goReset}
                goBack={goBack}
                goNext={goNext}
                goSkip={goSkip}
                goCancel={goCancel}
                goFinish={goFinish}
                isFinished={isFinished}
                isSkipable={isSkipable}
                isCancelable={isCancelable}
                activeStep={activeStep}
                finishStep={finishStep}
              />
            )}
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
            <p>Go to last step!</p>
            {activeStep === 3 && (
              <ControlSection
                goReset={goReset}
                goBack={goBack}
                goNext={goNext}
                goSkip={goSkip}
                goCancel={goCancel}
                goFinish={goFinish}
                isFinished={isFinished}
                isSkipable={isSkipable}
                isCancelable={isCancelable}
                activeStep={activeStep}
                finishStep={finishStep}
              />
            )}
          </Stepper.Description>
        </Stepper.Content>
      </Stepper.Step>
    </Stepper>
  );
};

export default Demo;
