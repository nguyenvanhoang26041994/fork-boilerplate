import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Progress } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Progress.Circle
        percent={86}
        size={50}
      />
      <Progress.Circle percent={77} />
      <Progress.Circle
        percent={89}
        size={250}
      />
    </Wrapper>
  );
};
