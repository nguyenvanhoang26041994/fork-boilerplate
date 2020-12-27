import React, { useState, useCallback } from 'react';
import {
  Progress,
  ButtonGroup,
  Button,
  Flex,
} from '@fork-ui/components/core';
import { Minus, Plus } from '@fork-ui/components/icons';

const Demo = () => {
  const [percent, setPercent] = useState(60);

  const onMinus = useCallback(() => setPercent(prev => {
    if (prev <= 5) {
      return 0;
    }

    return prev - 5;
  }), []);

  const onPlus = useCallback(() => setPercent(prev => {
    if (prev >= 95) {
      return 100;
    }

    return prev + 5;
  }), []);

  return (
    <Flex col span="full">
      <Progress.Linear percent={percent} animated />
      <ButtonGroup className="mt-10">
        <Button icon={<Minus />} onClick={onMinus} />
        <Button onClick={() =>setPercent(10)}>10%</Button>
        <Button onClick={() =>setPercent(50)}>50%</Button>
        <Button onClick={() =>setPercent(90)}>90%</Button>
        <Button icon={<Plus />} onClick={onPlus} />
      </ButtonGroup>
    </Flex>
  );
};

export default Demo;
