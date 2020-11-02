import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <Badge.Dot color="var(--green)">
        <FancyBox size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7} color="var(--primary)">
        <FancyBox size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW" color="pink">
        <FancyBox size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};

export default Demo;
