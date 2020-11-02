import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <Badge.Dot>
        <FancyBox size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW">
        <FancyBox size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};

export default Demo;
