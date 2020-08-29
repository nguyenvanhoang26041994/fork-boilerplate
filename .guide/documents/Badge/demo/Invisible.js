import React, { useState } from 'react';
import { Badge, Switch } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  const [invisible, setInvisible] = useState(true);

  return (
    <Wrapper span="2rem">
      <Badge.Counter count={999}>
        <FancyBox size="50px" />
      </Badge.Counter>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </Wrapper>
  );
};

export default Demo;
