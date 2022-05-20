import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Progress } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Progress.Linear percent={40} />
    </Wrapper>
  );
};
