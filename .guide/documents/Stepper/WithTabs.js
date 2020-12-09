import React from 'react';
import {
  Stepper,
  ButtonGroup,
  Button,
  Tabs,
  Flex,
} from '@fork-ui/components/core';
import {
  ChevronRight,
  ChevronLeft,
  Refresh,
  Ban,
  X
} from '@fork-ui/components/icons';
import DemoContent from '../../shared/DemoContent';

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
const TabPanelContent = ({ active, avatarName, ...otherProps }) => (
  <Tabs.Panel active={active}>
    <DemoContent avatarName={avatarName} />
    <ControlSection {...otherProps} />
  </Tabs.Panel>
);
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

  const stepperProps = {
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
  };

  return (
    <Flex col span="full">
      <Stepper>
        <Stepper.Step status={statuses[0]}>
          <Stepper.Button>1</Stepper.Button>
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
          <Stepper.Button>2</Stepper.Button>
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
          <Stepper.Button>3</Stepper.Button>
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
        <Stepper.Step status={statuses[3]}>
          <Stepper.Button>4</Stepper.Button>
          <Stepper.Content>
            <Stepper.Title>
              Step Four
            </Stepper.Title>
            <Stepper.Description>
              <p>Go to last step!</p>
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
            </Stepper.Description>
          </Stepper.Content>
        </Stepper.Step>
      </Stepper>
      <TabPanelContent {...stepperProps} active={activeStep === 0} avatarName="OP" />
      <TabPanelContent {...stepperProps} active={activeStep === 1} avatarName="HN" />
      <TabPanelContent {...stepperProps} active={activeStep === 2} avatarName="SL" />
      <TabPanelContent {...stepperProps} active={activeStep === 3} avatarName="FK" />
      <TabPanelContent {...stepperProps} active={activeStep === 4} avatarName="SG" />
    </Flex>
  );
};

export default Demo;
