import React from 'react';
import { Progress } from '@fork-ui/components/core';
import {
  Check,
  X,
  AlertCircle,
} from '@fork-ui/components/icons';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Progress.Circle percent={75}>
        <AlertCircle
          color="var(--primary)"
          size="calc(var(--circle-progress-size) / 5)"
          stroke="2"
        />
      </Progress.Circle>
      <Progress.Circle percent={75} color="var(--green)">
        <Check
          color="var(--circle-progress-color)"
          size="24px"
          stroke="2"
        />
      </Progress.Circle>
      <Progress.Circle percent={75} color="var(--red)">
        <X color="var(--red)" size="24px" stroke="2" />
      </Progress.Circle>
    </Wrapper>
  );
};

export default Demo;
