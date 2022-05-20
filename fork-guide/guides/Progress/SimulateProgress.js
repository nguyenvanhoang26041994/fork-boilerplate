import React, { useState, useCallback } from 'react';
import { Progress, Flex, Button, ButtonGroup } from 'fork-design';

export default () => {
  const [status, setStatus] = useState();
  const [percent, setPercent] = Progress.useSimulateProgress({
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
    <Flex col w="full">
      <Flex col w="full">
        <Progress.Circle percent={percent} className="mb-5">
          {Math.floor(percent)}
          <span>%</span>
        </Progress.Circle>
      </Flex>
      <ButtonGroup className="mt-10">
        <Button onClick={onStartLoading} disabled={status === 'loading'}>Start Loading</Button>
        <Button onClick={onResetSimulate} disabled={status === 'loading'}>Reset</Button>
      </ButtonGroup>
    </Flex>
  );
};
