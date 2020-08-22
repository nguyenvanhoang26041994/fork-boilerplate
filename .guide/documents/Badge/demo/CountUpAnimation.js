import React, { useState, useEffect } from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

import Wrapper from '@@/.guide/shared/Wrapper';
import FancyBox from '@@/.guide/shared/FancyBox';

const Demo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(prev => prev + 1), 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper span="2rem">
      <Badge count={count}>
        <FancyBox size="50px" />
      </Badge>
    </Wrapper>
  );
};

export default Demo;
