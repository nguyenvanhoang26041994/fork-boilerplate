import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="2em">
      <Badge.Counter count={999} overflow={50}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Counter
        count={999}
        overflow={50}
        renderOverflow={overflow => `More than ${overflow}`}
      >
        <FancyBox size="50px" />
      </Badge.Counter>
    </Wrapper>
  );
};
