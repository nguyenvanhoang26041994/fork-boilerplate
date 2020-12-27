import React from 'react';
import { Progress } from '@fork-ui/components/core';
import { Check, X, AlertCircle } from '@fork-ui/components/icons';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Progress.Circle percent={75} backgroundColor="var(--primary-low-emphasis)">
        <AlertCircle
          color="var(--primary)"
          size="calc(var(--circle-progress-size) / 5)"
          stroke="2"
        />
      </Progress.Circle>
      <Progress.Circle percent={75} color="var(--green)" backgroundColor="var(--green-low-emphasis)">
        <Check color="var(--circle-progress-color)" size="24px" stroke="2" />
      </Progress.Circle>
      <Progress.Circle percent={75} color="var(--red)" backgroundColor="var(--red-low-emphasis)">
        <X color="var(--red)" size="24px" stroke="2" />
      </Progress.Circle>
    </Wrapper>
  );
};

export default Demo;
