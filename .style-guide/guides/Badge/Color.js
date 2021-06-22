import React from 'react';
import { Wrapper, FancyBox } from '@style-guide/components';
import { Badge } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="25px">
      <Badge.Dot color="var(--green-5)">
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
