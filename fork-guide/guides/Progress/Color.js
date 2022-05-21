import React, { useMemo } from 'react';
import { Wrapper } from '@fork-guide/components';
import useUniqueId from 'fork-design/hooks/useUniqueId';
import { Progress } from 'fork-design';

export default () => {
  const linearGradientId = useUniqueId();

  const _linearGradient = useMemo(() => (
    <linearGradient
      id={linearGradientId}
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="rgba(243, 8, 231, 1)" />
      <stop offset="100%" stopColor="rgba(24, 119, 242, 1)" />
    </linearGradient>
  ), [linearGradientId]);

  return (
    <Wrapper>
      <Progress.Circle
        percent={75}
        linearGradient={_linearGradient}
        color={`url(#${linearGradientId})`}
      />
      <Progress.Circle percent={68} color="var(--green-5)" />
    </Wrapper>
  );
};
