import React, { useState, useCallback } from 'react';
import {
  Progress,
  ButtonGroup,
  Button,
  Flex,
} from '@fork-ui/components/core';
import Minus from '@fork-ui/components/icons/all/Minus';
import Plus from '@fork-ui/components/icons/all/Plus';

const Demo = () => {
  const [percent, setPercent] = useState(10);

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
      <Progress.Circle percent={percent}>
        {Math.floor(percent)}
        <span>%</span>
      </Progress.Circle>
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
