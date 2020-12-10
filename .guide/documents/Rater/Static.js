import React from 'react';
import { Rater } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Rater>
      <Rater.Star isLight />
      <Rater.Star isLight />
      <Rater.Star isLight />
      <Rater.Star />
      <Rater.Star />
      <Rater.Star />
    </Rater>
  );
};

export default Demo;
