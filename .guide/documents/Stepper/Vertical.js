import React from 'react';
import {
  Stepper,
  ButtonGroup,
  Button,
} from '@fork-ui/components/core';
import ChevronRight from '@fork-ui/components/icons/all/ChevronRight';
import ChevronLeft from '@fork-ui/components/icons/all/ChevronLeft';
import Refresh from '@fork-ui/components/icons/all/Refresh';
import Ban from '@fork-ui/components/icons/all/Ban';
import X from '@fork-ui/components/icons/all/X';

const ControlSection = ({
  goReset,
  goBack,
  goNext,
  goSkip,
  goCancel,
  goError,
  goFinish,
  isFinished,
  isSkipable,
  activeStep,
  finishStep
}) => {
  if (isFinished) {
    return (
      <ButtonGroup className="mt-5">
        <Button onClick={goCancel} icon={<Ban />} />
        <Button onClick={goError} icon={<X />} />
        <Button onClick={goBack} icon={<ChevronLeft />} />
        <Button onClick={goReset} icon={<Refresh />} />
      </ButtonGroup>
    )
  }
  return (
    <ButtonGroup className="mt-5">
      {isSkipable && <Button onClick={goSkip}>Skip</Button>}
      <Button onClick={goCancel} icon={<Ban />} />
      <Button onClick={goError} icon={<X />} />
      {activeStep > 0 && <Button onClick={goBack} icon={<ChevronLeft />} />}
      {finishStep > activeStep && <Button onClick={goNext} icon={<ChevronRight />} />}
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
    goError,
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
    finishStep: 4,
    skipable: [1, 2],
    cancelable: [0, 2],
  });

  return (
    <Stepper vertical style={{ minWidth: '430px' }}>
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
                goError={goError}
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
                goError={goError}
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
                goError={goError}
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
                goError={goError}
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
      <Stepper.Step status={statuses[4]}>
        <Stepper.Button>5</Stepper.Button>
        <Stepper.Content>
          <Stepper.Title>
            Step Five
          </Stepper.Title>
          <Stepper.Description>
            <p>
              Just finish the progress!
            </p>
            {activeStep === 4 && (
              <ControlSection
                goError={goError}
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
