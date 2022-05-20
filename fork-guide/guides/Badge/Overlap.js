import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge } from 'fork-design';

export default () => {
  return (
    <Wrapper span="20px">
      <Badge.Dot overlap>
        <FancyBox circle size="50px" />
      </Badge.Dot>
      <Badge.Counter count={7} overlap>
        <FancyBox circle size="50px" />
      </Badge.Counter>
      <Badge.Label label="NEW" overlap>
        <FancyBox circle size="50px" />
      </Badge.Label>
    </Wrapper>
  );
};
