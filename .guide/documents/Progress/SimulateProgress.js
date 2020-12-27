import React, { useState, useCallback } from 'react';
import {
  Progress,
  ButtonGroup,
  Button,
  Flex,
  useSimulateProgress,
} from '@fork-ui/components/core';

const Demo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [percent, setPercent] = useSimulateProgress({
    isLoading: isLoading,
    isLoaded: isLoaded,
  });

  const onStartLoading = useCallback(() => {
    setIsLoading(true);
    setIsLoaded(false);
    setPercent(0);

    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 2000);
  }, [setIsLoading, setIsLoaded, setPercent]);

  const onResetSimulate = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(false);
    setPercent(0);
  }, [setIsLoading, setIsLoaded, setPercent]);

  return (
    <Flex col span="full">
      <Flex col span="full">
        <Progress.Circle percent={percent} className="mb-5">
          {Math.floor(percent)}
          <span>%</span>
        </Progress.Circle>
        <Progress.Linear percent={percent} animated={!isLoaded} />
      </Flex>
      <ButtonGroup className="mt-10">
        <Button onClick={onStartLoading} disabled={isLoading}>Start Loading</Button>
        <Button onClick={onResetSimulate} disabled={isLoading}>Reset</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Demo;
