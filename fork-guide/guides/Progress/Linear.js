import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Linear percent={40} />
    </Wrapper>
  );
};
