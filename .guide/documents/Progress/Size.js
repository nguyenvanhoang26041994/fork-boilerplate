import React  from 'react';
import { Progress } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Progress.Circle
        percent={86}
        size={50}
      />
      <Progress.Circle
        percent={86}
        size={50}
        strokeWidth={6}
      />
      <Progress.Circle percent={77} />
      <Progress.Circle
        percent={89}
        size={250}
        strokeWidth={6}
      />
    </Wrapper>
  );
};

export default Demo;
