import React, { useState, useCallback }  from 'react';
import { Progress, ButtonGroup, Button } from '@fork-ui/components/core';
import { Minus, Plus } from '@fork-ui/components/icons';

const Demo = () => {
  const [percent, setPercent] = useState(0.1);

  const onMinus = useCallback(() => setPercent(prev => {
    if (prev <= 0.05) {
      return 0;
    }

    return prev - 0.05;
  }), []);

  const onPlus = useCallback(() => setPercent(prev => {
    if (prev >= 0.95) {
      return 1;
    }

    return prev + 0.05;
  }), []);

  return (
    <div className="flex flex-col w-full">
      <Progress.Circle percent={percent} />
      <ButtonGroup className="mt-10">
        <Button icon={<Minus />} onClick={onMinus} />
        <Button onClick={() =>setPercent(0.1)}>10%</Button>
        <Button onClick={() =>setPercent(0.5)}>50%</Button>
        <Button onClick={() =>setPercent(0.9)}>90%</Button>
        <Button icon={<Plus />} onClick={onPlus} />
      </ButtonGroup>
    </div>
  );
};

export default Demo;
