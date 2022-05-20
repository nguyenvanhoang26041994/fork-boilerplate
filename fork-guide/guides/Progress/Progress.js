import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Progress } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Progress.Circle percent={65}>
        <span>65%</span>
      </Progress.Circle>
    </Wrapper>
  );
};
