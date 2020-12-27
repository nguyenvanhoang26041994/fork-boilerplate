import React from 'react';
import { Progress, useUniqueId } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  const linearGradientId = useUniqueId();

  const linearGradient = (
    <linearGradient
      id={linearGradientId}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#2ed8a7" />
      <stop offset="100%" stopColor="#a6ceff" />
    </linearGradient>
  );

  return (
    <Wrapper>
      <Progress.Circle
        percent={95}
        linearGradient={linearGradient}
        color={`url(#${linearGradientId})`}
      />
      <Progress.Circle percent={93} color="var(--red)" />
    </Wrapper>
  );
};

export default Demo;
