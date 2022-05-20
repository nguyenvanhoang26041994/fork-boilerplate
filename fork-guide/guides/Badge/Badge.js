import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from 'fork-design';

export default () => {
  return (
    <Wrapper span="2rem">
      <Badge.Dot overlap>
        <FancyBox size="50px" circle/>
      </Badge.Dot>
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
