import React, { useState, useCallback } from 'react';
import { Rater } from '@/fork-ui/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon="heart"
      star={star}
      onChange={onChange}
    />
  );
};

export default Demo;
