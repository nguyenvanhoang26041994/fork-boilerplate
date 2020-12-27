import React, { useState, useCallback } from 'react';
import {
  Progress,
  ButtonGroup,
  Button,
  Flex,
  useSimulateProgress,
} from '@fork-ui/components/core';

const Demo = () => {
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [percent, setPercent] = useSimulateProgress({
    pending: pending,
    completed: completed,
  });

  const onStartLoading = useCallback(() => {
    setPending(true);
    setCompleted(false);
    setPercent(0);

    setTimeout(() => {
      setPending(false);
      setCompleted(true);
    }, 2000);
  }, [setPending, setCompleted, setPercent]);

  const onResetSimulate = useCallback(() => {
    setPending(false);
    setCompleted(false);
    setPercent(0);
  }, [setPending, setCompleted, setPercent]);

  return (
    <Flex col span="full">
      <Flex col span="full">
        <Progress.Circle percent={percent} className="mb-5">
          {Math.floor(percent)}
          <span>%</span>
        </Progress.Circle>
        <Progress.Linear percent={percent} animated={!completed} />
      </Flex>
      <ButtonGroup className="mt-10">
        <Button onClick={onStartLoading} disabled={pending}>Start Loading</Button>
        <Button onClick={onResetSimulate} disabled={pending}>Reset</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Demo;
