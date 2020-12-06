import React from 'react';
import { Badge } from '@fork-ui/components/core';

import Wrapper from '../../shared/Wrapper';
import FancyBox from '../../shared/FancyBox';

const Demo = () => {
  return (
    <Wrapper span="2rem">
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

export default Demo;
