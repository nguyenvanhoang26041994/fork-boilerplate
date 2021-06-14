import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Circle percent={65}>
        <span>65%</span>
      </Progress.Circle>
    </Wrapper>
  );
};
