import React from 'react';
import { Progress } from '@fork-ui/components/core';
import Wrapper from '../../shared/Wrapper';

const Demo = () => {
  return (
    <Wrapper>
      <Progress.Circle percent={32} railColor={false} />
      <Progress.Circle percent={32} railColor="rgba(0, 0, 0, 0.1)" />
    </Wrapper>
  );
};

export default Demo;
