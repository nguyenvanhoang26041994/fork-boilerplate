import React from 'react';
import { Rater } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [props] = Rater.useRater(3);

  return (
    <Rater
      {...props}
      size="1.5em"
      max={10}
    />
  );
};

export default Demo;
