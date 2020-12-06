import React from 'react';
import { Badge } from '@fork-ui/components/core';

import Wrapper from '../../shared/Wrapper';
import FancyBox from '../../shared/FancyBox';

const Demo = () => {
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

export default Demo;
