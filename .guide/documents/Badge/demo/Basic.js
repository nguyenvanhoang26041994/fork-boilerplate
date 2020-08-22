import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
      <Badge className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge dot className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} dot>
        <FancyBox size="50px" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;
