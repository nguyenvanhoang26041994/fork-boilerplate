import React from 'react';
import { Rater } from '@fork-ui/components/core';
import { Heart } from '@fork-ui/components/icons';

const HeartRater = props => <Rater.Item {...props}><Heart /></Rater.Item>;
const Demo = () => {
  return (
    <Rater>
      <HeartRater isLight />
      <HeartRater isLight />
      <HeartRater isLight />
      <HeartRater />
      <HeartRater />
    </Rater>
  );
};

export default Demo;
