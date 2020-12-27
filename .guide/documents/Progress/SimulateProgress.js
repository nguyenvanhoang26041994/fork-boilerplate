import React, { useState, useCallback } from 'react';
import {
  Progress,
  ButtonGroup,
  Button,
  Flex,
  useSimulateProgress,
} from '@fork-ui/components/core';

const Demo = () => {
  const [status, setStatus] = useState();
  const [percent, setPercent] = useSimulateProgress({
    status: status,
  });

  const onStartLoading = useCallback(() => {
    setStatus('loading');
    setPercent(0);

    setTimeout(() => {
      setStatus('completed');
    }, 2000);
  }, [setStatus, setPercent]);

  const onResetSimulate = useCallback(() => {
    setStatus('completed');
    setPercent(0);
  }, [setStatus, setPercent]);

  return (
    <Flex col span="full">
      <Flex col span="full">
        <Progress.Circle percent={percent} className="mb-5">
          {Math.floor(percent)}
          <span>%</span>
        </Progress.Circle>
        <Progress.Linear percent={percent} animated={status === 'loading'} />
      </Flex>
      <ButtonGroup className="mt-10">
        <Button onClick={onStartLoading} disabled={status === 'loading'}>Start Loading</Button>
        <Button onClick={onResetSimulate} disabled={status === 'loading'}>Reset</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Demo;
