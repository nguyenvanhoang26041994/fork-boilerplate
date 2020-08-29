import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <Badge.Counter count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Counter count={999} overflowCount={99}>
        <FancyBox size="50px" />
      </Badge.Counter>
    </Wrapper>
  );
};

export default Demo;
